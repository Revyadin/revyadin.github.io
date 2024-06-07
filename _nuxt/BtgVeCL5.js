import{L as z,c as h,g as r,K as Q,r as p,M as se,o as ce,T as ue,G as de,N as me,O as H,P as _e,Q as j,t as a,v as y,x as g,z as f,R as ge,S as q,U as T,V as d,A as i,B as k,y as b,W as A,X as fe,Y as B,Z as N}from"./CTb6Klt7.js";import{Q as ve,_ as he}from"./DA0mLubb.js";import{h as $,v as M,a as pe,_ as F,u as ye}from"./uItu326k.js";import{u as E}from"./CSoOs83r.js";import{_ as be}from"./Czk7KuxX.js";import{u as G,a as J,_ as K,b as U,c as X}from"./DU-4EZYT.js";const R=z({name:"QCard",props:{...G,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:t}){const{proxy:{$q:l}}=Q(),u=J(e,l),s=h(()=>"q-card"+(u.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>r(e.tag,{class:s.value},$(t.default))}}),V=z({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:t}){const l=h(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>r(e.tag,{class:l.value},$(t.default))}}),Se={ratio:[String,Number]};function we(e,t){return h(()=>{const l=Number(e.ratio||(t!==void 0?t.value:void 0));return isNaN(l)!==!0&&l>0?{paddingBottom:`${100/l}%`}:null})}const qe=1.7778,ke=z({name:"QImg",props:{...Se,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},loadingShowDelay:{type:[Number,String],default:0},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:qe},placeholderSrc:String,errorSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:t,emit:l}){const u=p(e.initialRatio),s=we(e,u),c=Q(),{registerTimeout:o,removeTimeout:m}=E(),{registerTimeout:v,removeTimeout:_}=E(),C=h(()=>e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null),Y=h(()=>e.errorSrc!==void 0?{src:e.errorSrc,__qerror:!0}:null),S=[p(null),p(C.value)],w=p(0),P=p(!1),I=p(!1),Z=h(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),ee=h(()=>({width:e.width,height:e.height})),te=h(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition q-img__image--`),ne=h(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));function ae(){if(_(),e.loadingShowDelay===0){P.value=!0;return}v(()=>{P.value=!0},e.loadingShowDelay)}function L(){_(),P.value=!1}function ie({target:n}){M(c)===!1&&(m(),u.value=n.naturalHeight===0?.5:n.naturalWidth/n.naturalHeight,O(n,1))}function O(n,x){x===1e3||M(c)===!0||(n.complete===!0?oe(n):o(()=>{O(n,x+1)},50))}function oe(n){M(c)!==!0&&(w.value=w.value^1,S[w.value].value=null,L(),n.getAttribute("__qerror")!=="true"&&(I.value=!1),l("load",n.currentSrc||n.src))}function re(n){m(),L(),I.value=!0,S[w.value].value=Y.value,S[w.value^1].value=C.value,l("error",n)}function W(n){const x=S[n].value,D={key:"img_"+n,class:te.value,style:ne.value,alt:e.alt,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...x};return w.value===n?Object.assign(D,{class:D.class+"current",onLoad:ie,onError:re}):D.class+="loaded",r("div",{class:"q-img__container absolute-full",key:"img"+n},r("img",D))}function le(){return P.value===!1?r("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},$(t[I.value===!0?"error":"default"])):r("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},t.loading!==void 0?t.loading():e.noSpinner===!0?void 0:[r(ve,{color:e.spinnerColor,size:e.spinnerSize})])}{let n=function(){de(()=>e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null,x=>{m(),I.value=!1,x===null?(L(),S[w.value^1].value=C.value):ae(),S[w.value].value=x},{immediate:!0})};se.value===!0?ce(n):n()}return()=>{const n=[];return s.value!==null&&n.push(r("div",{key:"filler",style:s.value})),S[0].value!==null&&n.push(W(0)),S[1].value!==null&&n.push(W(1)),n.push(r(ue,{name:"q-transition--fade"},le)),r("div",{key:"main",class:Z.value,style:ee.value,role:"img","aria-label":e.alt},n)}}}),xe=z({name:"QTimeline",props:{...G,color:{type:String,default:"primary"},side:{type:String,default:"right",validator:e=>["left","right"].includes(e)},layout:{type:String,default:"dense",validator:e=>["dense","comfortable","loose"].includes(e)}},setup(e,{slots:t}){const l=Q(),u=J(e,l.proxy.$q);me(H,e);const s=h(()=>`q-timeline q-timeline--${e.layout} q-timeline--${e.layout}--${e.side}`+(u.value===!0?" q-timeline--dark":""));return()=>r("ul",{class:s.value},$(t.default))}}),Te=z({name:"QTimelineEntry",props:{heading:Boolean,tag:{type:String,default:"h3"},side:{type:String,default:"right",validator:e=>["left","right"].includes(e)},icon:String,avatar:String,color:String,title:String,subtitle:String,body:String},setup(e,{slots:t}){const l=_e(H,j);if(l===j)return console.error("QTimelineEntry needs to be child of QTimeline"),j;const u=h(()=>`q-timeline__entry q-timeline__entry--${e.side}`+(e.icon!==void 0||e.avatar!==void 0?" q-timeline__entry--icon":"")),s=h(()=>`q-timeline__dot text-${e.color||l.color}`),c=h(()=>l.layout==="comfortable"&&l.side==="left");return()=>{const o=pe(t.default,[]);if(e.body!==void 0&&o.unshift(e.body),e.heading===!0){const _=[r("div"),r("div"),r(e.tag,{class:"q-timeline__heading-title"},o)];return r("div",{class:"q-timeline__heading"},c.value===!0?_.reverse():_)}let m;e.icon!==void 0?m=[r(he,{class:"row items-center justify-center",name:e.icon})]:e.avatar!==void 0&&(m=[r("img",{class:"q-timeline__dot-img",src:e.avatar})]);const v=[r("div",{class:"q-timeline__subtitle"},[r("span",{},$(t.subtitle,[e.subtitle]))]),r("div",{class:s.value},m),r("div",{class:"q-timeline__content"},[r("h6",{class:"q-timeline__title"},$(t.title,[e.title]))].concat(o))];return r("li",{class:u.value},c.value===!0?v.reverse():v)}}}),$e=g("div",{class:"text-center"},[g("h4",null,"Web Developer")],-1),Ce={class:"text-center col"},ze={__name:"service",setup(e){const t=p({skill:{programming:["PHP","Javascript","Python"],"web framework":["Ionic","Quasar","Framework7","PHP Slim3","Laravel","Serverpod","Supabase"],"web applications":["Vue.js","JQuery","HTML","CSS","Nuxt.js","Node.js"],"Database software":["MySQL","PostgreSQL"],"Version control":["Git"]}});return(l,u)=>{const s=ke,c=be;return a(),y(q,null,[$e,g("div",null,[f(s,{src:"/me.png",alt:"Description of your image",class:ge(["q-ma-sm",["q-img-responsive"]]),style:{height:"390px","max-width":"300px"}})]),g("div",Ce,[g("div",null,[(a(!0),y(q,null,T(t.value.skill.programming,o=>(a(),d(c,{size:"md"},{default:i(()=>[k(b(o),1)]),_:2},1024))),256))]),g("div",null,[(a(!0),y(q,null,T(t.value.skill["web framework"],o=>(a(),d(c,{size:"md"},{default:i(()=>[k(b(o),1)]),_:2},1024))),256))]),g("div",null,[(a(!0),y(q,null,T(t.value.skill["Database software"],o=>(a(),d(c,{size:"md"},{default:i(()=>[k(b(o),1)]),_:2},1024))),256))]),g("div",null,[(a(!0),y(q,null,T(t.value.skill["Version control"],o=>(a(),d(c,{size:"md"},{default:i(()=>[k(b(o),1)]),_:2},1024))),256))])])],64)}}},Pe=g("div",{class:"text-h6"},"Portofolio",-1),Ie={class:"nunito"},De={__name:"portofolio",setup(e){const t=p([{date_range:"2019-2020",event_title:"",content:["As a member of the maintenance team at (www.loveusaha.com), I actively contributed to enhancing the website's functionality and design. I played a key role in developing a program tool for promotional blasts, which significantly increased user engagement and promote new products.","Concurrently, I worked as a meticulous data entry staff for a music company provider (www.dmk.co.id), where I ensured accurate and organized data management, facilitating smooth operations for the company.","Moreover, during this period, I was honored by the Mayor of Malang City as an Innovator (INOTEK) for my outstanding contribution to the development of the `Tanee` website application. Additionally, I played a pivotal role in generating innovative ideas for Barenlitbang, a government organization, thus fostering progress and efficiency in public services."]},{date_range:"2020-2021",event_title:"",content:["Web Developer in part research team of The Ministry of Agriculture , Indonesia, 2020-2021 Spearheaded the development team in crafting a Progressive Web Application (PWA  https://balitkabi.my.id ) to streamline agricultural research processes. Collaborated closely with researchers to understand requirements and ensure the application met their needs effectively. Implemented innovative features and optimizations to enhance user experience and performance. Demonstrated proficiency in web development technologies including HTML, CSS, JavaScript, and frameworks like Ionic. Played a pivotal role in bridging the gap between technology and agriculture, contributing to the modernization of research practices."]},{date_range:"2021-2022",event_title:"",content:["Creating a real-time POS application for calculating the rental duration of PlayStation at locagame.my.id, allowing simultaneous control of over 40 PlayStation units in real-time. This involves developing a Point of Sale (POS) application tailored for ( www.locagame.my.id ) to efficiently manage the rental durations of PlayStation units. The application must support real-time updates and be capable of handling a large volume of transactions concurrently. Additionally, it should offer a user-friendly interface for both customers and staff to navigate smoothly.","Developing a lightweight and fast-access web-based POS application for pharmacies stores. ( www.aksafarma.locagame.my.id , www.sokosehat.locagame.my.id ) For this task, the goal is to design a web-based POS application specifically tailored for pharmacies to streamline their operations. The application should prioritize speed and efficiency in calculations while maintaining a user-friendly interface for quick access. It should offer functionalities such as inventory management, sales tracking, and prescription processing to enhance the overall efficiency of the pharmacy workflow."]},{date_range:"2023 - present",event_title:"",content:["Joining the esteemed Soehartono Group as a Web Programmer Staff, I bring a dedication to maintaining and enhancing existing programs and systems while spearheading the design and development of cutting-edge information system applications tailored for universities. With a keen focus on innovation, I excel in creating and refining clinic and appointment applications to streamline patient management processes. Additionally, I am poised to leverage my expertise in developing applications and digital forms specifically catered to the needs of government hospitals."]}]);return(l,u)=>{const s=V,c=Te,o=xe,m=R;return a(),d(m,{flat:"",bordered:"",class:"my-card"},{default:i(()=>[f(s,{class:"nunito"},{default:i(()=>[Pe]),_:1}),f(s,{class:"q-pt-none"},{default:i(()=>[f(o,null,{default:i(()=>[(a(!0),y(q,null,T(t.value,v=>(a(),d(c,{title:v.date_range,avatar:"https://cdn.quasar.dev/img/avatar2.jpg"},{default:i(()=>[g("div",null,[g("ul",Ie,[(a(!0),y(q,null,T(v.content,_=>(a(),y("li",null,b(_),1))),256))])])]),_:2},1032,["title"]))),256))]),_:1})]),_:1})]),_:1})}}},Be=g("div",{class:"text-h6"},"About",-1),Ne={__name:"about",setup(e){const t=p(["Accomplished Software Engineer with 4+ years’ experience specializing in optimizing web applications, designing prototypes and deploying user-friendly, developing, testing and maintaining enterprise web applications and software solutions for the Ministry of Agriculture in Indonesia  for farmers to trade legume seeds. Aligning deliverables with the research objectives of the Ministry of Agriculture.","Skilled in crafting user-friendly full-stack web applications, adept at applying design principles and software design patterns. Driven to create scalable and sustainable systems, quick to adapt, and enthusiastic about mastering new technologies that seamlessly integrate with existing frameworks.","Transforming concepts into tangible outcomes to achieve application objectives. Capable of improvising and contributing innovative ideas during various stages of web application development.","Gifted communicator, able to coordinate with internal and external stakeholders, translating complex ideas into actionable outcomes to meet business objectives."]);return(l,u)=>{const s=V,c=K,o=U,m=X,v=R,_=F;return a(),d(v,{flat:"",bordered:"",class:"my-card"},{default:i(()=>[f(s,null,{default:i(()=>[Be]),_:1}),f(s,{class:"q-pt-none"},{default:i(()=>[f(m,{separator:""},{default:i(()=>[(a(!0),y(q,null,T(t.value,C=>A((a(),d(o,{clickable:""},{default:i(()=>[f(c,null,{default:i(()=>[k(b(C),1)]),_:2},1024)]),_:2},1024)),[[_]])),256))]),_:1})]),_:1})]),_:1})}}},Ae=g("div",{class:"text-h6"},"Contact Me",-1),Le={__name:"contactme",setup(e){const t=p({email:"revyadin123@gmail.com",mobile:"+6283835937980",instagram:"@mrifqinajudin"});return(l,u)=>{const s=V,c=K,o=U,m=X,v=R,_=F;return a(),d(v,{flat:"",bordered:"",class:"my-card"},{default:i(()=>[f(s,null,{default:i(()=>[Ae]),_:1}),f(s,{class:"q-pt-none"},{default:i(()=>[f(m,{separator:""},{default:i(()=>[A((a(),d(o,{clickable:""},{default:i(()=>[f(c,null,{default:i(()=>[k(b(t.value.email),1)]),_:1})]),_:1})),[[_]]),A((a(),d(o,{clickable:""},{default:i(()=>[f(c,null,{default:i(()=>[k(b(t.value.mobile),1)]),_:1})]),_:1})),[[_]]),A((a(),d(o,{clickable:""},{default:i(()=>[f(c,null,{default:i(()=>[k(b(t.value.instagram),1)]),_:1})]),_:1})),[[_]])]),_:1})]),_:1})]),_:1})}}},je={class:"q-pa-md"},Ee={__name:"index copy",setup(e){const t=ye(),{menus:l,selectedmenu:u}=fe(t);return(s,c)=>{const o=ze,m=De,v=Ne,_=Le;return a(),y("div",je,[g("div",null,[B(u)=="service"?(a(),d(o,{key:0})):N("",!0),B(u)=="portofolio"?(a(),d(m,{key:1})):N("",!0),B(u)=="about"?(a(),d(v,{key:2})):N("",!0),B(u)=="contact"?(a(),d(_,{key:3})):N("",!0)])])}}};export{Ee as default};
