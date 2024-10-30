(()=>{"use strict";var e={89942:(e,t,r)=>{var n=r(98880),o=r(99592),a=r(83673);function i(e,t,r,n,o,i){const l=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(l)}const l=(0,a.aZ)({name:"App"});var s=r(74260);const c=(0,s.Z)(l,[["render",i]]),d=c;var u=r(23340),p=r(28339);const h=[{path:"/",component:()=>Promise.all([r.e(736),r.e(971)]).then(r.bind(r,7665))},{path:"/emisores",component:()=>Promise.all([r.e(736),r.e(686)]).then(r.bind(r,44686))},{path:"/viewqrinvoice/:qrinvoice",component:()=>Promise.all([r.e(736),r.e(9)]).then(r.bind(r,90330))},{path:"/dashboard",component:()=>Promise.all([r.e(736),r.e(254)]).then(r.bind(r,56254)),children:[{path:"/dashboard",component:()=>Promise.all([r.e(736),r.e(225)]).then(r.bind(r,17714))},{path:"/usuarios",component:()=>Promise.all([r.e(736),r.e(481)]).then(r.bind(r,74878))},{path:"/sedes",component:()=>Promise.all([r.e(736),r.e(174)]).then(r.bind(r,53140))},{path:"/simulador",component:()=>Promise.all([r.e(736),r.e(284)]).then(r.bind(r,76119))},{path:"/simulador2",component:()=>Promise.all([r.e(736),r.e(721)]).then(r.bind(r,31721))},{path:"/simuladorAsignacion",component:()=>Promise.all([r.e(736),r.e(728)]).then(r.bind(r,41357))},{path:"/tranzasAsignacion",component:()=>Promise.all([r.e(736),r.e(645)]).then(r.bind(r,92321))},{path:"/consulta",component:()=>Promise.all([r.e(736),r.e(56)]).then(r.bind(r,20308))},{path:"/auditorias",component:()=>Promise.all([r.e(736),r.e(694)]).then(r.bind(r,17846))},{path:"/informes",component:()=>Promise.all([r.e(736),r.e(503)]).then(r.bind(r,99997))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(496)]).then(r.bind(r,29496))}],f=h,m=(0,u.BC)((function(){const e=p.r5,t=(0,p.p7)({scrollBehavior:()=>({left:0,top:0}),routes:f,history:e("")});return t}));async function b(e,t){const r="function"===typeof m?await m({}):m,n=e(d);return n.use(o.Z,t),{app:n,router:r}}var v=r(11509),g=r(64434),y=r(16249);const P={config:{},plugins:{Dialog:v.Z,Notify:g.Z,Loading:y.Z}};async function O({app:e,router:t}){e.use(t),e.mount("#q-app")}b(n.ri,P).then(O)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.m=e,(()=>{var e=[];r.O=(t,n,o,a)=>{if(!n){var i=1/0;for(d=0;d<e.length;d++){for(var[n,o,a]=e[d],l=!0,s=0;s<n.length;s++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](n[s])))?n.splice(s--,1):(l=!1,a<i&&(i=a));if(l){e.splice(d--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[n,o,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"===typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"===typeof n.then)return n}var a=Object.create(null);r.r(a);var i={};e=e||[null,t({}),t([]),t(t)];for(var l=2&o&&n;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((e=>i[e]=()=>n[e]));return i["default"]=()=>n,r.d(a,i),a}})(),(()=>{r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{9:"c52c93a7",56:"cae41c5a",174:"ca00c668",225:"24aca726",254:"afb7aa81",284:"c17c8a65",481:"2a332bcb",496:"7859633a",503:"75871a2a",645:"eaa14a13",686:"c159bc90",694:"d8a9e860",721:"976f3751",728:"3c5c486b",971:"d2a00e61"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{9:"3a46fe20",56:"f85195f5",143:"d074bbc0",225:"c5162d88",503:"148f9474",645:"c8749e5a",686:"6efc1525",694:"c8749e5a",736:"e42ec9aa",971:"f40c0f90"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="sit_frontend:";r.l=(n,o,a,i)=>{if(e[n])e[n].push(o);else{var l,s;if(void 0!==a)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+a){l=u;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.setAttribute("data-webpack",t+a),l.src=n),e[n]=[o];var p=(t,r)=>{l.onerror=l.onload=null,clearTimeout(h);var o=e[n];if(delete e[n],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((e=>e(r))),t)return t(r)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e)})(),(()=>{r.p=""})(),(()=>{var e=(e,t,r,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=a=>{if(o.onerror=o.onload=null,"load"===a.type)r();else{var i=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=l,o.parentNode.removeChild(o),n(s)}};return o.onerror=o.onload=a,o.href=t,document.head.appendChild(o),o},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=r[n],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){o=i[n],a=o.getAttribute("data-href");if(a===e||a===t)return o}},n=n=>new Promise(((o,a)=>{var i=r.miniCssF(n),l=r.p+i;if(t(i,l))return o();e(n,l,o,a)})),o={143:0};r.f.miniCss=(e,t)=>{var r={9:1,56:1,225:1,503:1,645:1,686:1,694:1,971:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=n(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))}})(),(()=>{var e={143:0};r.f.j=(t,n)=>{var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var a=new Promise(((r,n)=>o=e[t]=[r,n]));n.push(o[2]=a);var i=r.p+r.u(t),l=new Error,s=n=>{if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,o[1](l)}};r.l(i,s,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,[i,l,s]=n,c=0;if(i.some((t=>0!==e[t]))){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(s)var d=s(r)}for(t&&t(n);c<i.length;c++)a=i[c],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(d)},n=globalThis["webpackChunksit_frontend"]=globalThis["webpackChunksit_frontend"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[736],(()=>r(89942)));n=r.O(n)})();