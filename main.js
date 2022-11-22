var sets = [];
(function () {
    var burger = document.querySelector('.navbar-burger');
    var menu = document.querySelector('#' + burger.dataset.target);
    burger.addEventListener('click', function () {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });
    $(".lined").linedtextarea();
})();

function totallink(){
    var text = $("textarea[name='url']").val();   
    var lines = text.split(/\r|\r\n|\n/);
    var count = lines.length;
    $('#totallink').html(count)
    var MAX_PEMISAH=50
    var grouping=lines.length/MAX_PEMISAH
    splitArray(lines,grouping)
}

function splitArray(array, groups) {

    var groupsize = array.length / groups;
    for (var i = 0, j = 0; i < groups; i++, j += groupsize) {
      sets[i] = array.slice(j, j + groupsize);
    }
    $('#totalpart').html(sets.length)
    var $el =$('select[name="part"]')
    $el.empty(); // remove old options
    $el.append($("<option></option>").attr("value","").text("PILIH SALAH SATU"));
    $.each(sets, function(index) {
      $el.append($("<option></option>")
         .attr("value", index).text("PART "+index));
    });
    return sets;
}

document.addEventListener('DOMContentLoaded',function(){
    let pasteButton = document.getElementById('tempel');
    pasteButton.addEventListener('click', function () {
        navigator.clipboard
            .readText()
            .then(
                cliptext =>
                    ($('textarea[name="url"]').val(cliptext).trigger('input')),
                    err => console.log(err)
            );
        totallink()
    });
})

document.addEventListener('DOMContentLoaded',function(){
    let pasteButton = document.getElementById('tempelsebagian');
    pasteButton.addEventListener('click', function () {
        var tmp=$('textarea[name="url"]').val()
        navigator.clipboard
            .readText()
            .then(
                cliptext =>
                    ($('textarea[name="url"]').val(tmp+'\n'+cliptext).trigger('input')),
                    err => console.log(err)
            );
        totallink()
    });
})

$('textarea[name="url"]').bind('input propertychange',function(){
    totallink()
})



function jsonurl(array){
    var d = new Date();
    var datestring = d.getDate()  + "-" +(d.getMonth()+1) + "-" +d.getFullYear() + "_" +d.getHours() + "." + d.getMinutes();
    
    var video={'tiktokurl':[]}
    
    $('#jumlah').html(array.length)
    $('#ffmpeg').html("!ffmpeg -f concat -safe 0 -i mylist.txt -c copy output.mp4")
    video['tiktokurl']=array
    var script=`!pip install selenium
!apt-get update 
!apt install chromium-chromedriver

url=${JSON.stringify(video)}

from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.action_chains import ActionChains
from selenium.common.exceptions import TimeoutException

for u in url['tiktokurl']:
try:
    chrome_options = webdriver.ChromeOptions()
    chrome_options.add_argument('--headless')
    chrome_options.add_argument('--no-sandbox')
    chrome_options.add_argument('--disable-dev-shm-usage')
    wd = webdriver.Chrome('chromedriver',chrome_options=chrome_options)
    driver =webdriver.Chrome('chromedriver',chrome_options=chrome_options)
    wait = WebDriverWait(driver, 20)
    driver.get("https://snaptik.app/en")
    input_tag = driver.find_element(By.XPATH, "/html/body/main/div[1]/div/div[2]/form/div/div[3]/input")
    input_tag.send_keys(u)
    input_tag.submit()
    wait.until(EC.visibility_of_element_located((By.XPATH, '/html/body/main/div[2]/div/div/div[1]/div/div[1]'))).click()
    element=driver.find_element(By.LINK_TEXT,"Download").click()
    print(element)
except TimeoutException as ex:
    print("#### LINK ERROR : "+u)
    driver.close()

import glob
f = open("mylist.txt", "w")
files = glob.glob('Snaptik*.mp4')
f.write('rm -rf output.mp4\\nrm -rf *.ts\\n')
f.write('\\n'.join(["ffmpeg -i %s -c copy -bsf:v h264_mp4toannexb -f mpegts %s.ts"%(s,s) for s in files]))
f.write('\\nffmpeg -i "concat:'+'.ts|'.join(files)+'"'+' -c copy -bsf:a aac_adtstoasc output-${datestring}.mp4')
f.close()

!bash mylist.txt

!cp /content/output-${datestring}.mp4 /content/drive/MyDrive/output-${datestring}.mp4
`
$('#json').html(script)
}
function hapus(id){

    $(`#${id}`).remove()
    jsonurl()
}

function extractid(url){
    var rx = /[0-9]{19}/g;
    var arr = url.match(rx);
    return arr.pop()
}

$('select[name="part"]').on('change',function(){
    var urlpart=sets[$(this).val()]
    jsonurl(sets[$(this).val()])
    console.log(urlpart)
    var promises = [];
    $('.urltiktok').remove()
    for (var i = 0; i < urlpart.length; i++) {
        var urltiktok=urlpart[i]
        promises.push($.ajax({
          type: "GET",
          url: `https://www.tiktok.com/oembed?url=${urltiktok}`,
          success: function(msg){
                console.log(msg,`https://www.tiktok.com/oembed?url=${urltiktok}`)

                $('#listurl').append(`
                    <div class="urltiktok column is-half-mobile is-one-quarter-desktop is-half-tablet" id="${msg.embed_product_id}" data-url="${msg.author_url+'/video/'+msg.embed_product_id}">
                        <div class="card">
                            <div class="card-image">
                                <figure class="image is-3by2">
                                  <img src="${msg.thumbnail_url}" alt="">
                                </figure>
                                <div class="card-content is-overlay is-clipped">
                                  <span class="tag is-danger">
                                    ${msg.embed_product_id}
                                  </span>       
                                </div>
                            </div>
                            <footer class="card-footer">
                                <a class="card-footer-item" onClick="hapus('${msg.embed_product_id}')">
                                  Hapus
                                </a>
                            </footer>
                        </div>
                    </div>
                `)
                jsonurl()
          },
          error: function(XMLHttpRequest, textStatus, errorThrown) {
             alert("URL SALAH");
             console.log("URL SALAH : "+urltiktok)
          }
        }))
    }

    Promise.all(promises)
        .then(responseList => {
        console.dir(responseList)
    })
})


$("#copy").click(function(){
    $("#code").select();
    document.execCommand('copy');
});