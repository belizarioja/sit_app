(globalThis["webpackChunksit_frontend"]=globalThis["webpackChunksit_frontend"]||[]).push([[58],{5770:s=>{s.exports={endpoint_path_v2:"https://bck-test.factura-smart.com/",version:"1.0.2"}},4432:(s,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>U});var a=t(3673),r=t(8880);const o={class:"my-font bg-primary window-height window-width row justify-center"},n=(0,a._)("div",{class:"col-9 fondoimg"},[(0,a._)("div",{class:"absolute-bottom-left text-subtitle2"},[(0,a._)("img",{src:"logo_sit.jpg",style:{"max-width":"180px"}})])],-1),i={class:"col-3 my-fondo"},j=(0,a._)("div",{class:"row justify-center"},[(0,a._)("img",{src:"login_sid.png",style:{"max-width":"180px","margin-top":"20px"}})],-1),l=(0,a._)("div",{class:"row justify-center"},[(0,a._)("h5",{class:"text-h5 text-secondary q-my-md"},"Identificarse")],-1),d={class:"row justify-center"};function c(s,e,t,c,m,u){const p=(0,a.up)("q-icon"),h=(0,a.up)("q-input"),g=(0,a.up)("q-form"),b=(0,a.up)("q-card-section"),f=(0,a.up)("q-spinner-dots"),v=(0,a.up)("q-btn"),k=(0,a.up)("q-card-actions"),y=(0,a.up)("q-card");return(0,a.wg)(),(0,a.iD)("div",o,[n,(0,a._)("div",i,[j,l,(0,a._)("div",d,[(0,a._)("form",{onSubmit:e[2]||(e[2]=(0,r.iM)(((...s)=>u.submit&&u.submit(...s)),["prevent"])),class:"row justify-center"},[(0,a.Wm)(y,{bordered:"",class:"q-pa-lg shadow-1",style:{"max-width":"335px","border-radius":"10px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(b,null,{default:(0,a.w5)((()=>[(0,a.Wm)(g,{class:"q-gutter-md"},{default:(0,a.w5)((()=>[(0,a.Wm)(h,{square:"",filled:"",clearable:"",modelValue:m.usuario,"onUpdate:modelValue":e[0]||(e[0]=s=>m.usuario=s),type:"text",label:"Usuario"},{prepend:(0,a.w5)((()=>[(0,a.Wm)(p,{name:"account_circle"})])),_:1},8,["modelValue"]),(0,a.Wm)(h,{square:"",filled:"",clearable:"",modelValue:m.clave,"onUpdate:modelValue":e[1]||(e[1]=s=>m.clave=s),type:"password",label:"Clave"},{prepend:(0,a.w5)((()=>[(0,a.Wm)(p,{name:"lock"})])),_:1},8,["modelValue"])])),_:1})])),_:1}),(0,a.Wm)(k,{class:"q-px-md"},{default:(0,a.w5)((()=>[(0,a.Wm)(v,{unelevated:"",color:"primary",type:"submit",loading:m.loading,size:"lg",class:"full-width",label:"Ingresar"},{loading:(0,a.w5)((()=>[(0,a.Wm)(f)])),_:1},8,["loading"])])),_:1})])),_:1})],32)])])])}t(4564);var m=t(4434),u=t(52),p=t.n(u),h=t(1488),g=t.n(h),b=t(8916),f=t.n(b);const v=t(5770),k=v.endpoint_path_v2,y={name:"LoginLayout",data(){return{term:"",usuario:"",clave:"",loading:!1}},methods:{submit(){fetch("https://api.ipify.org?format=json").then((s=>s.json())).then((({ip:s})=>{this.term=s,""===this.usuario?m.Z.create("El Usuario es requerido para iniciar sesión"):""===this.clave?m.Z.create("La contraseña es requerida para iniciar sesión"):(this.loading=!0,p().post(k+"usuario/login",{usuario:this.usuario,clave:f()(this.clave)}).then((async s=>{this.loading=!1,200===s.status?(p().post(k+"bitacora",{idusuario:s.data.resp.id,idevento:1,ip:this.term,observacion:"Acceso al sistema con éxito",fecha:g()().format("YYYY-MM-DD HH:mm:ss")}),sessionStorage.setItem("id_usuario",s.data.resp.id),sessionStorage.setItem("rif_sede",s.data.resp.rif),sessionStorage.setItem("co_rol",s.data.resp.idrol),sessionStorage.setItem("tx_nombre",s.data.resp.nombre),sessionStorage.setItem("tx_rol",s.data.resp.rol),sessionStorage.setItem("co_sede",s.data.resp.idserviciosmasivo||0),sessionStorage.setItem("tx_sede",s.data.resp.razonsocial||""),"3"===s.data.resp.idrol?this.$router.push("/dashboard"):this.$router.push("/emisores")):(this.loading=!1,m.Z.create(s.data.message))})).catch((s=>{this.loading=!1,m.Z.create("Error "+s)})))}))}}};var _=t(4260),w=t(151),z=t(5589),x=t(8689),q=t(4842),Z=t(4554),I=t(9367),S=t(8240),W=t(4765),Q=t(7518),C=t.n(Q);const D=(0,_.Z)(y,[["render",c]]),U=D;C()(y,"components",{QCard:w.Z,QCardSection:z.Z,QForm:x.Z,QInput:q.Z,QIcon:Z.Z,QCardActions:I.Z,QBtn:S.Z,QSpinnerDots:W.Z})},6700:(s,e,t)=>{var a={"./af":5809,"./af.js":5809,"./ar":6069,"./ar-dz":481,"./ar-dz.js":481,"./ar-kw":3994,"./ar-kw.js":3994,"./ar-ly":3312,"./ar-ly.js":3312,"./ar-ma":239,"./ar-ma.js":239,"./ar-ps":7916,"./ar-ps.js":7916,"./ar-sa":1863,"./ar-sa.js":1863,"./ar-tn":9607,"./ar-tn.js":9607,"./ar.js":6069,"./az":9281,"./az.js":9281,"./be":9945,"./be.js":9945,"./bg":9384,"./bg.js":9384,"./bm":1476,"./bm.js":1476,"./bn":3345,"./bn-bd":216,"./bn-bd.js":216,"./bn.js":3345,"./bo":1713,"./bo.js":1713,"./br":9655,"./br.js":9655,"./bs":7296,"./bs.js":7296,"./ca":3049,"./ca.js":3049,"./cs":2722,"./cs.js":2722,"./cv":8039,"./cv.js":8039,"./cy":5563,"./cy.js":5563,"./da":1960,"./da.js":1960,"./de":7533,"./de-at":6674,"./de-at.js":6674,"./de-ch":7732,"./de-ch.js":7732,"./de.js":7533,"./dv":8343,"./dv.js":8343,"./el":7004,"./el.js":7004,"./en-au":2517,"./en-au.js":2517,"./en-ca":4929,"./en-ca.js":4929,"./en-gb":9722,"./en-gb.js":9722,"./en-ie":6923,"./en-ie.js":6923,"./en-il":8050,"./en-il.js":8050,"./en-in":9624,"./en-in.js":9624,"./en-nz":540,"./en-nz.js":540,"./en-sg":4375,"./en-sg.js":4375,"./eo":40,"./eo.js":40,"./es":9720,"./es-do":5595,"./es-do.js":5595,"./es-mx":180,"./es-mx.js":180,"./es-us":1563,"./es-us.js":1563,"./es.js":9720,"./et":9217,"./et.js":9217,"./eu":9474,"./eu.js":9474,"./fa":5243,"./fa.js":5243,"./fi":7645,"./fi.js":7645,"./fil":5350,"./fil.js":5350,"./fo":5622,"./fo.js":5622,"./fr":1467,"./fr-ca":3439,"./fr-ca.js":3439,"./fr-ch":4335,"./fr-ch.js":4335,"./fr.js":1467,"./fy":6026,"./fy.js":6026,"./ga":2969,"./ga.js":2969,"./gd":1347,"./gd.js":1347,"./gl":1085,"./gl.js":1085,"./gom-deva":904,"./gom-deva.js":904,"./gom-latn":9597,"./gom-latn.js":9597,"./gu":8705,"./gu.js":8705,"./he":9128,"./he.js":9128,"./hi":2821,"./hi.js":2821,"./hr":9002,"./hr.js":9002,"./hu":4814,"./hu.js":4814,"./hy-am":658,"./hy-am.js":658,"./id":9344,"./id.js":9344,"./is":8204,"./is.js":8204,"./it":376,"./it-ch":1549,"./it-ch.js":1549,"./it.js":376,"./ja":9293,"./ja.js":9293,"./jv":6401,"./jv.js":6401,"./ka":482,"./ka.js":482,"./kk":7329,"./kk.js":7329,"./km":4241,"./km.js":4241,"./kn":3566,"./kn.js":3566,"./ko":2742,"./ko.js":2742,"./ku":2915,"./ku-kmr":2346,"./ku-kmr.js":2346,"./ku.js":2915,"./ky":6846,"./ky.js":6846,"./lb":4959,"./lb.js":4959,"./lo":2188,"./lo.js":2188,"./lt":8967,"./lt.js":8967,"./lv":1245,"./lv.js":1245,"./me":751,"./me.js":751,"./mi":7501,"./mi.js":7501,"./mk":1643,"./mk.js":1643,"./ml":5597,"./ml.js":5597,"./mn":7893,"./mn.js":7893,"./mr":9065,"./mr.js":9065,"./ms":4703,"./ms-my":4645,"./ms-my.js":4645,"./ms.js":4703,"./mt":4365,"./mt.js":4365,"./my":3788,"./my.js":3788,"./nb":7357,"./nb.js":7357,"./ne":9109,"./ne.js":9109,"./nl":3746,"./nl-be":1985,"./nl-be.js":1985,"./nl.js":3746,"./nn":7175,"./nn.js":7175,"./oc-lnc":566,"./oc-lnc.js":566,"./pa-in":2733,"./pa-in.js":2733,"./pl":182,"./pl.js":182,"./pt":505,"./pt-br":7839,"./pt-br.js":7839,"./pt.js":505,"./ro":9578,"./ro.js":9578,"./ru":2328,"./ru.js":2328,"./sd":641,"./sd.js":641,"./se":1758,"./se.js":1758,"./si":6680,"./si.js":6680,"./sk":5016,"./sk.js":5016,"./sl":7424,"./sl.js":7424,"./sq":8635,"./sq.js":8635,"./sr":9038,"./sr-cyrl":3716,"./sr-cyrl.js":3716,"./sr.js":9038,"./ss":4771,"./ss.js":4771,"./sv":3517,"./sv.js":3517,"./sw":9419,"./sw.js":9419,"./ta":5959,"./ta.js":5959,"./te":1739,"./te.js":1739,"./tet":2264,"./tet.js":2264,"./tg":4792,"./tg.js":4792,"./th":8328,"./th.js":8328,"./tk":702,"./tk.js":702,"./tl-ph":7814,"./tl-ph.js":7814,"./tlh":797,"./tlh.js":797,"./tr":6691,"./tr.js":6691,"./tzl":6891,"./tzl.js":6891,"./tzm":6362,"./tzm-latn":7855,"./tzm-latn.js":7855,"./tzm.js":6362,"./ug-cn":7606,"./ug-cn.js":7606,"./uk":513,"./uk.js":513,"./ur":3803,"./ur.js":3803,"./uz":344,"./uz-latn":8957,"./uz-latn.js":8957,"./uz.js":344,"./vi":3,"./vi.js":3,"./x-pseudo":8842,"./x-pseudo.js":8842,"./yo":2083,"./yo.js":2083,"./zh-cn":4536,"./zh-cn.js":4536,"./zh-hk":2475,"./zh-hk.js":2475,"./zh-mo":7593,"./zh-mo.js":7593,"./zh-tw":4746,"./zh-tw.js":4746};function r(s){var e=o(s);return t(e)}function o(s){if(!t.o(a,s)){var e=new Error("Cannot find module '"+s+"'");throw e.code="MODULE_NOT_FOUND",e}return a[s]}r.keys=function(){return Object.keys(a)},r.resolve=o,s.exports=r,r.id=6700}}]);