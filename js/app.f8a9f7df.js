(()=>{"use strict";var e={89942:(e,t,r)=>{var n=r(98880),o=r(99592),a=r(83673);function i(e,t,r,n,o,i){const l=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(l)}const l=(0,a.aZ)({name:"App"});var s=r(74260);const d=(0,s.Z)(l,[["render",i]]),c=d;var u=r(23340),p=r(28339);const h=[{path:"/",component:()=>Promise.all([r.e(736),r.e(971)]).then(r.bind(r,7665))},{path:"/emisores",component:()=>Promise.all([r.e(736),r.e(686)]).then(r.bind(r,44686))},{path:"/viewqrinvoice/:qrinvoice",component:()=>Promise.all([r.e(736),r.e(526)]).then(r.bind(r,96569))},{path:"/dashboard",component:()=>Promise.all([r.e(736),r.e(538)]).then(r.bind(r,89538)),children:[{path:"/dashboard",component:()=>Promise.all([r.e(736),r.e(116)]).then(r.bind(r,86909))},{path:"/usuarios",component:()=>Promise.all([r.e(736),r.e(8)]).then(r.bind(r,50703))},{path:"/sedes",component:()=>Promise.all([r.e(736),r.e(758)]).then(r.bind(r,90009))},{path:"/simulador",component:()=>Promise.all([r.e(736),r.e(532)]).then(r.bind(r,44433))},{path:"/simulador2",component:()=>Promise.all([r.e(736),r.e(721)]).then(r.bind(r,31721))},{path:"/simuladorAsignacion",component:()=>Promise.all([r.e(736),r.e(728)]).then(r.bind(r,41357))},{path:"/tranzasAsignacion",component:()=>Promise.all([r.e(736),r.e(645)]).then(r.bind(r,92321))},{path:"/consulta",component:()=>Promise.all([r.e(736),r.e(747)]).then(r.bind(r,23322))},{path:"/auditorias",component:()=>Promise.all([r.e(736),r.e(412)]).then(r.bind(r,53329))},{path:"/informes",component:()=>Promise.all([r.e(736),r.e(310)]).then(r.bind(r,115))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(496)]).then(r.bind(r,29496))}],f=h,m=(0,u.BC)((function(){const e=p.r5,t=(0,p.p7)({scrollBehavior:()=>({left:0,top:0}),routes:f,history:e("")});return t}));async function b(e,t){const r="function"===typeof m?await m({}):m,n=e(c);return n.use(o.Z,t),{app:n,router:r}}var v=r(11509),g=r(64434),y=r(16249);const P={config:{},plugins:{Dialog:v.Z,Notify:g.Z,Loading:y.Z}};async function O({app:e,router:t}){e.use(t),e.mount("#q-app")}b(n.ri,P).then(O)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.m=e,(()=>{var e=[];r.O=(t,n,o,a)=>{if(!n){var i=1/0;for(c=0;c<e.length;c++){for(var[n,o,a]=e[c],l=!0,s=0;s<n.length;s++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](n[s])))?n.splice(s--,1):(l=!1,a<i&&(i=a));if(l){e.splice(c--,1);var d=o();void 0!==d&&(t=d)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[n,o,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"===typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"===typeof n.then)return n}var a=Object.create(null);r.r(a);var i={};e=e||[null,t({}),t([]),t(t)];for(var l=2&o&&n;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((e=>i[e]=()=>n[e]));return i["default"]=()=>n,r.d(a,i),a}})(),(()=>{r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{8:"f0c8367d",116:"64637644",310:"0734c6bf",412:"a40e5450",496:"7859633a",526:"84f2678a",532:"d78d727b",538:"4209cb81",645:"eaa14a13",686:"c159bc90",721:"976f3751",728:"3c5c486b",747:"229b74cb",758:"a6081af2",971:"d2a00e61"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{116:"c5162d88",143:"d074bbc0",310:"148f9474",412:"c8749e5a",526:"3a46fe20",645:"c8749e5a",686:"6efc1525",736:"e42ec9aa",747:"f85195f5",971:"f40c0f90"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="sit_frontend:";r.l=(n,o,a,i)=>{if(e[n])e[n].push(o);else{var l,s;if(void 0!==a)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var u=d[c];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+a){l=u;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.setAttribute("data-webpack",t+a),l.src=n),e[n]=[o];var p=(t,r)=>{l.onerror=l.onload=null,clearTimeout(h);var o=e[n];if(delete e[n],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((e=>e(r))),t)return t(r)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e)})(),(()=>{r.p=""})(),(()=>{var e=(e,t,r,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=a=>{if(o.onerror=o.onload=null,"load"===a.type)r();else{var i=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=l,o.parentNode.removeChild(o),n(s)}};return o.onerror=o.onload=a,o.href=t,document.head.appendChild(o),o},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=r[n],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){o=i[n],a=o.getAttribute("data-href");if(a===e||a===t)return o}},n=n=>new Promise(((o,a)=>{var i=r.miniCssF(n),l=r.p+i;if(t(i,l))return o();e(n,l,o,a)})),o={143:0};r.f.miniCss=(e,t)=>{var r={116:1,310:1,412:1,526:1,645:1,686:1,747:1,971:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=n(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))}})(),(()=>{var e={143:0};r.f.j=(t,n)=>{var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var a=new Promise(((r,n)=>o=e[t]=[r,n]));n.push(o[2]=a);var i=r.p+r.u(t),l=new Error,s=n=>{if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,o[1](l)}};r.l(i,s,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,[i,l,s]=n,d=0;if(i.some((t=>0!==e[t]))){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(s)var c=s(r)}for(t&&t(n);d<i.length;d++)a=i[d],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(c)},n=globalThis["webpackChunksit_frontend"]=globalThis["webpackChunksit_frontend"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[736],(()=>r(89942)));n=r.O(n)})();