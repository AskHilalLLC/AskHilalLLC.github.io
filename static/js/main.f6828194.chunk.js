(this["webpackJsonpopen-react-template"]=this["webpackJsonpopen-react-template"]||[]).push([[0],{24:function(e,t,a){e.exports=a(45)},34:function(e,t,a){e.exports=a.p+"static/media/logo.2810a88b.svg"},35:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-01.0f9928d7.svg"},36:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-02.bd39f304.svg"},37:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-03.66f37ba5.svg"},38:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-04.836acd10.svg"},39:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-05.fa9ba00b.svg"},40:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-06.6a177696.svg"},41:function(e,t,a){e.exports=a.p+"static/media/features-split-image-01.cd0f3886.png"},42:function(e,t,a){e.exports=a.p+"static/media/features-split-image-02.8a771c97.png"},43:function(e,t,a){e.exports=a.p+"static/media/features-split-image-03.d251422c.png"},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var i=a(0),l=a.n(i),r=a(21),s=a.n(r),n=a(11),o=a(6),c=a(2),m=function(e){var t=e.component,a=e.layout,i=Object(c.a)(e,["component","layout"]);return a=void 0===a?function(e){return l.a.createElement(l.a.Fragment,null,e.children)}:a,l.a.createElement(n.a,Object.assign({},i,{render:function(e){return l.a.createElement(a,null,l.a.createElement(t,e))}}))},d=a(9),v=a(3),u=a.n(v),h=a(17),p=l.a.forwardRef((function(e,t){var a=Object(i.useState)(window.innerHeight),r=Object(d.a)(a,2),s=r[0],n=r[1],o=Object(i.useState)([]),c=Object(d.a)(o,2),m=c[0],v=c[1],u=function(){return m.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},p=function(){if(!u())for(var e=function(e){var t=m[e],a=t.getAttribute("data-reveal-delay"),i=t.getAttribute("data-reveal-offset")?t.getAttribute("data-reveal-offset"):"200";(function(e,t){return e.getBoundingClientRect().top<=s-t})(t.getAttribute("data-reveal-container")?t.closest(t.getAttribute("data-reveal-container")):t,i)&&!t.classList.contains("is-revealed")&&(a&&0!==a?setTimeout((function(){t.classList.add("is-revealed")}),a):t.classList.add("is-revealed"))},t=0;t<m.length;t++)e(t)};Object(i.useImperativeHandle)(t,(function(){return{init:function(){v(document.querySelectorAll("[class*=reveal-]"))}}})),Object(i.useEffect)((function(){"undefined"!==typeof m&&m.length>0&&(u()||(window.addEventListener("scroll",f),window.addEventListener("resize",E)),p())}),[m]);var b=function(){u()&&(window.removeEventListener("scroll",f),window.removeEventListener("resize",E))},f=Object(h.throttle)((function(){b(),p()}),30),E=Object(h.throttle)((function(){n(window.innerHeight)}),30);return Object(i.useEffect)((function(){b(),p()}),[s]),l.a.createElement(l.a.Fragment,null,e.children())}));p.propTypes={children:u.a.func.isRequired};var b=p,f=a(13),E=a(1),g=a.n(E),N=a(10),w=function(e){var t=e.className,a=e.src,r=e.width,s=e.height,n=e.alt,o=Object(c.a)(e,["className","src","width","height","alt"]),m=Object(i.useState)(!1),v=Object(d.a)(m,2),u=v[0],h=v[1],p=Object(i.useRef)(null);Object(i.useEffect)((function(){b(p.current)}),[]);var b=function(e){var t,a,i=document.createElement("img");u||(e.style.display="none",e.before(i),i.src=(t=e.getAttribute("width")||0,a=e.getAttribute("height")||0,'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(t," ").concat(a,'"%3E%3C/svg%3E')),i.width=e.getAttribute("width"),i.height=e.getAttribute("height"),i.style.opacity="0",e.className&&i.classList.add(e.className),i.remove(),e.style.display="")};return l.a.createElement("img",Object.assign({},o,{ref:p,className:t,src:a,width:r,height:s,alt:n,onLoad:function(){h(!0)}}))};w.defaultProps={src:void 0,width:void 0,height:void 0,alt:void 0};var O=w,y=function(e){var t=e.className,i=Object(c.a)(e,["className"]),r=g()("brand",t);return l.a.createElement("div",Object.assign({},i,{className:r}),l.a.createElement("h1",{className:"m-0"},l.a.createElement("div",{style:{cursor:"pointer"},onClick:function(){return window.scrollTo(0,0)}},l.a.createElement(O,{src:a(34),alt:"Open",width:32,height:32}))))},x=function(e){var t=e.className,a=e.navPosition,r=e.hideNav,s=e.hideSignin,n=e.bottomOuterDivider,o=e.bottomDivider,m=Object(c.a)(e,["className","navPosition","hideNav","hideSignin","bottomOuterDivider","bottomDivider"]),v=Object(i.useState)(!1),u=Object(d.a)(v,2),h=u[0],p=u[1],b=Object(i.useRef)(null),f=Object(i.useRef)(null);Object(i.useEffect)((function(){return h&&E(),document.addEventListener("keydown",O),document.addEventListener("click",x),function(){document.removeEventListener("keydown",O),document.addEventListener("click",x),w()}}));var E=function(){document.body.classList.add("off-nav-is-active"),b.current.style.maxHeight=b.current.scrollHeight+"px",p(!0)},w=function(){document.body.classList.remove("off-nav-is-active"),b.current&&(b.current.style.maxHeight=null),p(!1)},O=function(e){h&&27===e.keyCode&&w()},x=function(e){b.current&&h&&!b.current.contains(e.target)&&e.target!==f.current&&w()},j=g()("site-header",n&&"has-bottom-divider",t);return l.a.createElement("header",Object.assign({},m,{className:j}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:g()("site-header-inner",o&&"has-bottom-divider")},l.a.createElement(y,null),!r&&l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{ref:f,className:"header-nav-toggle",onClick:h?w:E},l.a.createElement("span",{className:"screen-reader"},"Menu"),l.a.createElement("span",{className:"hamburger"},l.a.createElement("span",{className:"hamburger-inner"}))),l.a.createElement("nav",{ref:b,className:g()("header-nav",h&&"is-active")},l.a.createElement("div",{className:"header-nav-inner"},l.a.createElement("ul",{className:g()("list-reset text-xs",a&&"header-nav-".concat(a))},l.a.createElement("li",null,l.a.createElement(N.a,{to:"#0",onClick:w},"Services"))),!s&&l.a.createElement("ul",{className:"list-reset header-nav-right"},l.a.createElement("li",null,l.a.createElement(N.a,{to:"#0",className:"button button-primary button-wide-mobile button-sm",onClick:w},"Information")))))))))};x.defaultProps={navPosition:"",hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};var j=function(e){var t=e.className,a=Object(c.a)(e,["className"]),i=g()("footer-nav",t);return l.a.createElement("nav",Object.assign({},a,{className:i}),l.a.createElement("ul",{className:"list-reset"}))},D=function(e){var t=e.className,a=Object(c.a)(e,["className"]),i=g()("footer-social",t);return l.a.createElement("div",Object.assign({},a,{className:i}),l.a.createElement("ul",{className:"list-reset"},l.a.createElement("li",null,l.a.createElement("a",{href:"https://twitter.com/AskHilalLLC",target:"popup"},l.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("title",null,"Twitter"),l.a.createElement("path",{d:"M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"}))))))},C=function(e){var t=e.className,a=e.topOuterDivider,i=e.topDivider,r=Object(c.a)(e,["className","topOuterDivider","topDivider"]),s=g()("site-footer center-content-mobile",a&&"has-top-divider",t);return l.a.createElement("footer",Object.assign({},r,{className:s}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:g()("site-footer-inner",i&&"has-top-divider")},l.a.createElement("div",{className:"footer-top space-between text-xxs"},l.a.createElement(y,null),l.a.createElement(D,null)),l.a.createElement("div",{className:"footer-bottom space-between text-xxs invert-order-desktop"},l.a.createElement(j,null),l.a.createElement("div",{className:"footer-copyright"},"Made by Hadi. All right reserved")))))};C.defaultProps={topOuterDivider:!1,topDivider:!1};var k=C,H=function(e){var t=e.children;return l.a.createElement(l.a.Fragment,null,l.a.createElement("main",{className:"site-content"},t),l.a.createElement(k,null))},L=a(5),F={types:{topOuterDivider:u.a.bool,bottomOuterDivider:u.a.bool,topDivider:u.a.bool,bottomDivider:u.a.bool,hasBgColor:u.a.bool,invertColor:u.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},P={types:Object(L.a)({},F.types),defaults:Object(L.a)({},F.defaults)},S={types:Object(L.a)({},F.types,{invertMobile:u.a.bool,invertDesktop:u.a.bool,alignTop:u.a.bool,imageFill:u.a.bool}),defaults:Object(L.a)({},F.defaults,{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1})},T={types:Object(L.a)({},F.types,{pushLeft:u.a.bool}),defaults:Object(L.a)({},F.defaults,{pushLeft:!1})},A=function(e){var t=e.className,a=e.tag,i=e.color,r=e.size,s=e.loading,n=e.wide,o=e.wideMobile,m=e.disabled,d=Object(c.a)(e,["className","tag","color","size","loading","wide","wideMobile","disabled"]),v=g()("button",i&&"button-".concat(i),r&&"button-".concat(r),s&&"is-loading",n&&"button-block",o&&"button-wide-mobile",t),u=a;return l.a.createElement(u,Object.assign({},d,{className:v,disabled:m}))};A.defaultProps={tag:"button",color:"",size:"",loading:!1,wide:!1,wideMobile:!1,disabled:!1};var B=function(e){var t=e.className,a=e.children,r=e.handleClose,s=e.show,n=e.closeHidden,o=e.video,m=e.videoTag,d=Object(c.a)(e,["className","children","handleClose","show","closeHidden","video","videoTag"]);Object(i.useEffect)((function(){return document.addEventListener("keydown",u),document.addEventListener("click",h),function(){document.removeEventListener("keydown",u),document.removeEventListener("click",h)}})),Object(i.useEffect)((function(){v()}),[d.show]);var v=function(){document.querySelectorAll(".modal.is-active").length?document.body.classList.add("modal-is-active"):document.body.classList.remove("modal-is-active")},u=function(e){27===e.keyCode&&r(e)},h=function(e){e.stopPropagation()},p=g()("modal",s&&"is-active",o&&"modal-video",t);return l.a.createElement(l.a.Fragment,null,s&&l.a.createElement("div",Object.assign({},d,{className:p,onClick:r}),l.a.createElement("div",{className:"modal-inner",onClick:h},o?l.a.createElement("div",{className:"responsive-video"},"iframe"===m?l.a.createElement("iframe",{title:"video",src:o,frameBorder:"0",allowFullScreen:!0}):l.a.createElement("video",{"v-else":!0,controls:!0,src:o})):l.a.createElement(l.a.Fragment,null,!n&&l.a.createElement("button",{className:"modal-close","aria-label":"close",onClick:r}),l.a.createElement("div",{className:"modal-content"},a)))))};B.defaultProps={children:null,show:!1,closeHidden:!1,video:"",videoTag:"iframe"};var M=Object(L.a)({},P.defaults),z=function(e){var t=e.className,a=e.topOuterDivider,r=e.bottomOuterDivider,s=e.topDivider,n=e.bottomDivider,o=e.hasBgColor,m=e.invertColor,v=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"]),u=Object(i.useState)(!1),h=Object(d.a)(u,2),p=(h[0],h[1],g()("hero section center-content",a&&"has-top-divider",r&&"has-bottom-divider",o&&"has-bg-color",m&&"invert-color",t)),b=g()("hero-inner section-inner",s&&"has-top-divider",n&&"has-bottom-divider");return l.a.createElement("section",Object.assign({},v,{className:p}),l.a.createElement("div",{className:"container-sm"},l.a.createElement("div",{className:b},l.a.createElement("div",{className:"hero-content"},l.a.createElement("h1",{className:"mt-0 mb-16 reveal-from-bottom","data-reveal-delay":"200"},l.a.createElement("span",{className:"text-color-primary"},"Ask Hilal")),l.a.createElement("div",{className:"container-xs"},l.a.createElement("p",{className:"m-0 mb-32 reveal-from-bottom","data-reveal-delay":"400"},"Helping local pet rescues, businesses, pets, and their people too. Get in touch today!"),l.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"flex-start",marginLeft:"50px",marginRight:"50px"},className:"reveal-from-bottom","data-reveal-delay":"600"},l.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},l.a.createElement("h4",null,l.a.createElement("span",{className:"text-color-primary"},"Email:")),l.a.createElement("h4",null,l.a.createElement("a",{href:"mailto:hilal@askhilal.com",target:"popout"},"Hilal@askhilal.com"))),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},l.a.createElement("h4",null,l.a.createElement("span",{className:"text-color-primary"},"Phone Number:")),l.a.createElement("h4",null,"919-348-9502"))))))))};z.defaultProps=M;var I=z,R=function(e){var t=e.className,a=e.data,i=e.children,r=e.tag,s=Object(c.a)(e,["className","data","children","tag"]),n=g()("section-header",t),o=r;return l.a.createElement(l.a.Fragment,null,(a.title||a.paragraph)&&l.a.createElement("div",Object.assign({},s,{className:n}),l.a.createElement("div",{className:"container-xs"},i,a.title&&l.a.createElement(o,{className:g()("mt-0",a.paragraph?"mb-16":"mb-0")},a.title),a.paragraph&&l.a.createElement("p",{className:"m-0"},a.paragraph))))};R.defaultProps={children:null,tag:"h2"};var _=R,q=Object(L.a)({},T.defaults),W=function(e){var t=e.className,i=e.topOuterDivider,r=e.bottomOuterDivider,s=e.topDivider,n=e.bottomDivider,o=e.hasBgColor,m=e.invertColor,d=e.pushLeft,v=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),u=g()("features-tiles section",i&&"has-top-divider",r&&"has-bottom-divider",o&&"has-bg-color",m&&"invert-color",t),h=g()("features-tiles-inner section-inner pt-0",s&&"has-top-divider",n&&"has-bottom-divider"),p=g()("tiles-wrap center-content",d&&"push-left");return l.a.createElement("section",Object.assign({},v,{className:u}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{style:{paddingTop:"40px"},className:h},l.a.createElement(_,{data:{title:"Holistic Health with Hilal",paragraph:"Helping people help their dogs & cats every day with a wholesome & holistic approach to wellness."},className:"center-content"}),l.a.createElement("div",{className:p},l.a.createElement("div",{className:"tiles-item reveal-from-bottom"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"features-tiles-item-header"},l.a.createElement("div",{className:"features-tiles-item-image mb-16"},l.a.createElement(O,{src:a(35),alt:"Features tile icon 01",width:64,height:64}))),l.a.createElement("div",{className:"features-tiles-item-content"},l.a.createElement("h4",{className:"mt-0 mb-8"},"Nutrition"),l.a.createElement("p",{className:"m-0 text-sm"},"As nutrition research adapts, so should our diets. No one diet works for everyone. Every pet deserves a rotational diet that works best for them.")))),l.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"features-tiles-item-header"},l.a.createElement("div",{className:"features-tiles-item-image mb-16"},l.a.createElement(O,{src:a(36),alt:"Features tile icon 02",width:64,height:64}))),l.a.createElement("div",{className:"features-tiles-item-content"},l.a.createElement("h4",{className:"mt-0 mb-8"},"Training"),l.a.createElement("p",{className:"m-0 text-sm"},"Training ourselves is the first step to training our pets. Learning is part of the process.")))),l.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"features-tiles-item-header"},l.a.createElement("div",{className:"features-tiles-item-image mb-16"},l.a.createElement(O,{src:a(37),alt:"Features tile icon 03",width:64,height:64}))),l.a.createElement("div",{className:"features-tiles-item-content"},l.a.createElement("h4",{className:"mt-0 mb-8"},"Wellness"),l.a.createElement("p",{className:"m-0 text-sm"},"There are four aspects of wellness. Physical health, mental health, emotional health, and spiritual health. Each aspect deserves to be fed only the best.")))),l.a.createElement("div",{className:"tiles-item reveal-from-bottom"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"features-tiles-item-header"},l.a.createElement("div",{className:"features-tiles-item-image mb-16"},l.a.createElement(O,{src:a(38),alt:"Features tile icon 04",width:64,height:64}))),l.a.createElement("div",{className:"features-tiles-item-content"},l.a.createElement("h4",{className:"mt-0 mb-8"},"Physical Health"),l.a.createElement("p",{className:"m-0 text-sm"},"Physical Health requires routine, discipline, and rotation.")))),l.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"features-tiles-item-header"},l.a.createElement("div",{className:"features-tiles-item-image mb-16"},l.a.createElement(O,{src:a(39),alt:"Features tile icon 05",width:64,height:64}))),l.a.createElement("div",{className:"features-tiles-item-content"},l.a.createElement("h4",{className:"mt-0 mb-8"},"Mental Health"),l.a.createElement("p",{className:"m-0 text-sm"},"Mental health requires challenges, repetition, and stimulation.")))),l.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"features-tiles-item-header"},l.a.createElement("div",{className:"features-tiles-item-image mb-16"},l.a.createElement(O,{src:a(40),alt:"Features tile icon 06",width:64,height:64}))),l.a.createElement("div",{className:"features-tiles-item-content"},l.a.createElement("h4",{className:"mt-0 mb-8"},"Emotional Health"),l.a.createElement("p",{className:"m-0 text-sm"},"Emotional Health requires love, security, and patience."))))))))};W.defaultProps=q;var G=W,J=Object(L.a)({},S.defaults),K=function(e){var t=e.className,i=e.topOuterDivider,r=e.bottomOuterDivider,s=e.topDivider,n=e.bottomDivider,o=e.hasBgColor,m=e.invertColor,d=e.invertMobile,v=e.invertDesktop,u=e.alignTop,h=e.imageFill,p=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"]),b=g()("features-split section",i&&"has-top-divider",r&&"has-bottom-divider",o&&"has-bg-color",m&&"invert-color",t),f=g()("features-split-inner section-inner",s&&"has-top-divider",n&&"has-bottom-divider"),E=g()("split-wrap",d&&"invert-mobile",v&&"invert-desktop",u&&"align-top");return l.a.createElement("section",Object.assign({},p,{className:b}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:f},l.a.createElement(_,{data:{title:"Call, text, email, or video chat",paragraph:"Communicate with Hilal in the way that best serves you. Expect quick, actionable, analytical responses with a love of feedback."},className:"center-content"}),l.a.createElement("div",{className:E},l.a.createElement("div",{className:"split-item"},l.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},l.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Support Local"),l.a.createElement("h3",{className:"mt-0 mb-12"},"Shop at Your Favorite Local Stores"),l.a.createElement("p",{className:"m-0"},"Any product recommendations will always be catered to your preferred places of business. Every zip code has other pet lovers happy to serve you their favorite brands. Hilal will even help you discover your new favorites!")),l.a.createElement("div",{className:g()("split-item-image center-content-mobile reveal-from-bottom",h&&"split-item-image-fill"),"data-reveal-container":".split-item"},l.a.createElement(O,{src:a(41),alt:"Features split 01",width:528,height:396}))),l.a.createElement("div",{className:"split-item"},l.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-right","data-reveal-container":".split-item"},l.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"The Ever-changing Landscape"),l.a.createElement("h3",{className:"mt-0 mb-12"},"Stay Ahead"),l.a.createElement("p",{className:"m-0"},"Even the best products can change for the worse. Stay up-to-date by checking in with Hilal to confirm that your brands are still worthy of you.")),l.a.createElement("div",{className:g()("split-item-image center-content-mobile reveal-from-bottom",h&&"split-item-image-fill"),"data-reveal-container":".split-item"},l.a.createElement(O,{src:a(42),alt:"Features split 02",width:528,height:396}))),l.a.createElement("div",{className:"split-item"},l.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},l.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Life is a Journey"),l.a.createElement("h3",{className:"mt-0 mb-12"},"Free Followup"),l.a.createElement("p",{className:"m-0"},"Every consultation with Hilal comes with a free followup consultation. Some solutions such as dietary changes can take up to two weeks to see improvements. It's important to give things time then revisit.")),l.a.createElement("div",{className:g()("split-item-image center-content-mobile reveal-from-bottom",h&&"split-item-image-fill"),"data-reveal-container":".split-item"},l.a.createElement(O,{src:a(43),alt:"Features split 03",width:528,height:396})))))))};K.defaultProps=J;var U=K,Y=Object(L.a)({},T.defaults),V=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,r=e.topDivider,s=e.bottomDivider,n=e.hasBgColor,o=e.invertColor,m=e.pushLeft,d=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),v=g()("testimonial section",a&&"has-top-divider",i&&"has-bottom-divider",n&&"has-bg-color",o&&"invert-color",t),u=g()("testimonial-inner section-inner",r&&"has-top-divider",s&&"has-bottom-divider"),h=g()("tiles-wrap",m&&"push-left");return l.a.createElement("section",Object.assign({},d,{className:v}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:u},l.a.createElement(_,{data:{title:"Customer testimonials",paragraph:"With over 12 years of helping dogs & cats, Hilal has countless customer testimonials. These are only a few."},className:"center-content"}),l.a.createElement("div",{className:h},l.a.createElement("div",{className:"tiles-item reveal-from-right","data-reveal-delay":"200"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"testimonial-item-content"},l.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Thanks so much for bringing over the treats last night. He slept very well last night. And now I feel so much better...Amazing what a good night's sleep can do.")),l.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},l.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Local pet foster parent"),l.a.createElement("span",{className:"testimonial-item-link"})))),l.a.createElement("div",{className:"tiles-item reveal-from-bottom"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"testimonial-item-content"},l.a.createElement("p",{className:"text-sm mb-0"},"\u2014 I was in a panic. Consulted with Hilal and he helped reassure us and point us in the right direction in regards to food, training, and even poop schedule!")),l.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},l.a.createElement("span",{className:"testimonial-item-name text-color-high"},"New puppy parent"),l.a.createElement("span",{className:"testimonial-item-link"})))),l.a.createElement("div",{className:"tiles-item reveal-from-left","data-reveal-delay":"200"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"testimonial-item-content"},l.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Hilal is very easy-going and willing to figure out what works best for you. Definitely will continue to refer to him.")),l.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},l.a.createElement("span",{className:"testimonial-item-name text-color-high"},"New kitten parent"),l.a.createElement("span",{className:"testimonial-item-link"}))))))))};V.defaultProps=Y;var $=V,Q=function(e){var t=e.className,a=e.children,i=e.labelHidden,r=e.id,s=Object(c.a)(e,["className","children","labelHidden","id"]),n=g()("form-label",i&&"screen-reader",t);return l.a.createElement("label",Object.assign({},s,{className:n,htmlFor:r}),a)};Q.defaultProps={children:null,labelHidden:!1,id:null};var X=Q,Z=function(e){var t=e.children,a=e.className,i=e.status,r=Object(c.a)(e,["children","className","status"]),s=g()("form-hint",i&&"text-color-".concat(i),a);return l.a.createElement("div",Object.assign({},r,{className:s}),t)};Z.defaultProps={children:null,status:!1};var ee=Z,te=function(e){var t=e.className,a=e.children,i=e.label,r=e.labelHidden,s=e.type,n=e.name,o=e.status,m=e.disabled,d=e.value,v=e.formGroup,u=e.hasIcon,h=e.size,p=e.placeholder,b=e.rows,f=e.hint,E=Object(c.a)(e,["className","children","label","labelHidden","type","name","status","disabled","value","formGroup","hasIcon","size","placeholder","rows","hint"]),N=g()(v&&""!==v&&("desktop"===v?"form-group-desktop":"form-group"),u&&""!==u&&"has-icon-"+u),w=g()("form-input",h&&"form-input-".concat(h),o&&"form-".concat(o),t),O="textarea"===s?"textarea":"input";return l.a.createElement(l.a.Fragment,null,i&&l.a.createElement(X,{labelHidden:r,id:E.id},i),l.a.createElement("div",{className:N},l.a.createElement(O,Object.assign({},E,{type:"textarea"!==s?s:null,className:w,name:n,disabled:m,value:d,placeholder:p,rows:"textarea"===s?b:null})),a),f&&l.a.createElement(ee,{status:o},f))};te.defaultProps={children:null,label:"",labelHidden:!1,type:"text",name:void 0,status:"",disabled:!1,value:void 0,formGroup:null,hasIcon:null,size:"",placeholder:"",rows:3,hint:null};var ae=te,ie=Object(L.a)({},P.defaults,{split:!1}),le=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,r=e.topDivider,s=e.bottomDivider,n=e.hasBgColor,o=e.invertColor,m=e.split,d=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","split"]),v=g()("cta section center-content-mobile reveal-from-bottom",a&&"has-top-divider",i&&"has-bottom-divider",n&&"has-bg-color",o&&"invert-color",t),u=g()("cta-inner section-inner",r&&"has-top-divider",s&&"has-bottom-divider",m&&"cta-split");return l.a.createElement("section",Object.assign({},d,{className:v}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:u},l.a.createElement("div",{className:"cta-slogan"},l.a.createElement("h3",{className:"m-0"},"For previewing layouts and visual?")),l.a.createElement("div",{className:"cta-action"},l.a.createElement(ae,{id:"newsletter",type:"email",label:"Subscribe",labelHidden:!0,hasIcon:"right",placeholder:"Your best email"},l.a.createElement("svg",{width:"16",height:"12",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z",fill:"#376DF9"})))))))};le.defaultProps=ie;var re=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(I,{bottomDivider:!0}),l.a.createElement(G,null),l.a.createElement(U,{invertMobile:!0,topDivider:!0,imageFill:!0,className:"illustration-section-02"}),l.a.createElement($,{topDivider:!0}))};f.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GA_CODE);var se=function(){var e=Object(i.useRef)(),t=Object(n.f)();return Object(i.useEffect)((function(){var a=t.pathname;document.body.classList.add("is-loaded"),e.current.init(),function(e){f.a.set({page:e}),f.a.pageview(e)}(a)}),[t]),l.a.createElement(b,{ref:e,children:function(){return l.a.createElement(n.c,null,l.a.createElement(m,{exact:!0,path:"/",component:re,layout:H}))}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(44);var ne=Object(o.a)();s.a.render(l.a.createElement(n.b,{history:ne},l.a.createElement(se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.f6828194.chunk.js.map