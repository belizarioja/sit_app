(globalThis["webpackChunksit_frontend"]=globalThis["webpackChunksit_frontend"]||[]).push([[728],{5770:s=>{s.exports={endpoint_path_v2:"https://bck.factura-smart.com/",version:"2.0.0"}},1357:(s,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>D});var t=a(3673),o=a(2323);const l={class:"my-font my-fondo q-pa-md"},n=(0,t._)("div",{class:"row"},[(0,t._)("span",{class:"text-secondary",style:{margin:"0 20px","font-size":"25px","font-weight":"bolder"}},"Asignar cantidad de correlativos")],-1),i={class:"row"},r={class:"row"},c=(0,t._)("div",{class:"text-h6"},"Resultado",-1);function d(s,e,a,d,u,j){const m=(0,t.up)("q-select"),h=(0,t.up)("q-input"),p=(0,t.up)("q-card-section"),f=(0,t.up)("q-btn"),g=(0,t.up)("q-card-actions"),v=(0,t.up)("q-card");return(0,t.wg)(),(0,t.iD)("div",l,[n,(0,t._)("div",i,[(0,t.Wm)(m,{dense:"",class:"col-5",filled:"","options-dense":"",modelValue:u.modelsede,"onUpdate:modelValue":[e[0]||(e[0]=s=>u.modelsede=s),e[1]||(e[1]=s=>j.changeSede())],options:u.optionssede,"option-label":"name","option-value":"cod",label:"Seleccione Cliente",style:{margin:"20px"}},null,8,["modelValue","options"])]),(0,t._)("div",r,[(0,t.Wm)(v,{class:"col q-pa-md",style:{"min-width":"350px"}},{default:(0,t.w5)((()=>[(0,t.Wm)(p,{class:"row q-pt-none"},{default:(0,t.w5)((()=>[(0,t.Wm)(h,{class:"col-12 q-pa-md",dense:"",type:"textarea",modelValue:d.tokenservicios,"onUpdate:modelValue":e[2]||(e[2]=s=>d.tokenservicios=s),label:"Token",autofocus:""},null,8,["modelValue"]),(0,t.Wm)(h,{class:"col-6 q-pa-md",dense:"",modelValue:d.rif,"onUpdate:modelValue":e[3]||(e[3]=s=>d.rif=s),label:"RIF",autofocus:""},null,8,["modelValue"]),(0,t.Wm)(h,{class:"col-6 q-pa-md",dense:"",modelValue:d.factura,"onUpdate:modelValue":e[4]||(e[4]=s=>d.factura=s),label:"Factura asignación",autofocus:""},null,8,["modelValue"]),(0,t.Wm)(h,{class:"col-4 q-pa-md",dense:"",modelValue:d.usuario,"onUpdate:modelValue":e[5]||(e[5]=s=>d.usuario=s),label:"Usuario",autofocus:""},null,8,["modelValue"]),(0,t.Wm)(h,{class:"col-4 q-pa-md",dense:"",modelValue:d.clave,"onUpdate:modelValue":e[6]||(e[6]=s=>d.clave=s),label:"Clave"},null,8,["modelValue"]),(0,t.Wm)(h,{class:"col-4 q-pa-md",dense:"",modelValue:d.cantidad,"onUpdate:modelValue":e[7]||(e[7]=s=>d.cantidad=s),label:"Cantidad"},null,8,["modelValue"])])),_:1}),(0,t.Wm)(g,{align:"right",class:"text-primary"},{default:(0,t.w5)((()=>[(0,t.Wm)(f,{color:"secondary",label:"Asignar",onClick:j.crear},null,8,["onClick"])])),_:1})])),_:1}),(0,t.Wm)(v,{class:"col q-pa-md"},{default:(0,t.w5)((()=>[(0,t.Wm)(p,null,{default:(0,t.w5)((()=>[c])),_:1}),(0,t.Wm)(p,null,{default:(0,t.w5)((()=>[(0,t._)("span",{class:(0,o.C_)(d.statusProcess?"text-positive":"text-negative")},(0,o.zw)(d.dateInicioPrueba),3)])),_:1}),(0,t.Wm)(p,null,{default:(0,t.w5)((()=>[(0,t._)("span",{class:(0,o.C_)(d.statusProcess?"text-positive":"text-negative")},(0,o.zw)(d.resultProcess),3)])),_:1}),(0,t.Wm)(p,null,{default:(0,t.w5)((()=>[(0,t._)("span",{class:(0,o.C_)(d.statusProcess?"text-positive":"text-negative")},(0,o.zw)(d.messageProcess),3)])),_:1}),(0,t.Wm)(p,null,{default:(0,t.w5)((()=>[(0,t._)("span",{class:(0,o.C_)(d.statusProcess?"text-positive":"text-negative")},(0,o.zw)(d.fechaProcess),3)])),_:1}),(0,t.Wm)(p,null,{default:(0,t.w5)((()=>[(0,t._)("span",{class:(0,o.C_)(d.statusProcess?"text-positive":"text-negative")},(0,o.zw)(d.dateFinPrueba),3)])),_:1})])),_:1})])])}a(4564);var u=a(1959),j=a(4434),m=a(52),h=a.n(m),p=a(1488),f=a.n(p),g=a(8916),v=a.n(g);const b=a(5770),k=b.endpoint_path_v2,_={setup(){return{statusProcess:(0,u.iH)(!0),resultProcess:(0,u.iH)(""),messageProcess:(0,u.iH)(""),fechaProcess:(0,u.iH)(""),tokenservicios:(0,u.iH)(""),rif:(0,u.iH)(""),factura:(0,u.iH)(""),usuario:(0,u.iH)(""),clave:(0,u.iH)(""),cantidad:(0,u.iH)(0),loading:(0,u.iH)(!1),dateInicioPrueba:(0,u.iH)(""),dateFinPrueba:(0,u.iH)("")}},data(){return{co_rol:sessionStorage.getItem("co_rol"),modelsede:[],optionssede:[],pagination:{page:1,rowsPerPage:0}}},methods:{changeSede(){console.log(this.modelsede.cod),this.rif=this.modelsede.rif,this.tokenservicios=this.modelsede.tokenservicios},crear(){if(this.modelsede.cod)if(this.factura){this.dateInicioPrueba=f()().format("YYYY-MM-DD HH:mm:ss");for(let s=1;s<=1;s++){this.statusProcess=!1,this.resultProcess="",this.messageProcess="",this.fechaProcess="";const s={headers:{Authorization:"Bearer "+this.tokenservicios}},e={rif:this.rif,usuario:this.usuario,clave:v()(this.clave),soportefactura:this.factura,cantidad:Number(this.cantidad)};console.log(e),h().post(k+"asignaciones",e,s).then((async s=>{200===s.status&&(this.statusProcess=s.data.success,this.resultProcess="Transmisión EXITOSA!",this.messageProcess=s.data.data.message,this.fechaProcess=""),202===s.status&&(this.statusProcess=s.data.success,this.resultProcess="Transmisión FALLIDA!",this.messageProcess=s.data.error.message,this.fechaProcess="")}))}this.dateFinPrueba=f()().format("YYYY-MM-DD HH:mm:ss")}else j.Z.create("Debe agregar soporte de factura");else j.Z.create("Debe seleccionar Cliente Emisor ")},limpiar(){this.usuario="",this.clave="",this.cantidad=0},listarsedes(){h().get(k+"sede").then((async s=>{console.log(s.data);const e=s.data.data;this.optionssede=[];for(const a in e){const s={};s.cod=e[a].id,s.name=e[a].razonsocial,s.rif=e[a].rif,s.tokenservicios=e[a].tokenservicios,this.optionssede.push(s)}})).catch((s=>{j.Z.create("Problemas al listar Sedes "+s)}))}},mounted(){"1"!==this.co_rol&&this.$router.push("/erroracceso"),this.listarsedes()}};var w=a(4260),P=a(8516),z=a(151),y=a(5589),x=a(4842),V=a(9367),q=a(2165),W=a(7518),C=a.n(W);const H=(0,w.Z)(_,[["render",d]]),D=H;C()(_,"components",{QSelect:P.Z,QCard:z.Z,QCardSection:y.Z,QInput:x.Z,QCardActions:V.Z,QBtn:q.Z})},6700:(s,e,a)=>{var t={"./af":5809,"./af.js":5809,"./ar":6069,"./ar-dz":481,"./ar-dz.js":481,"./ar-kw":3994,"./ar-kw.js":3994,"./ar-ly":3312,"./ar-ly.js":3312,"./ar-ma":239,"./ar-ma.js":239,"./ar-ps":7916,"./ar-ps.js":7916,"./ar-sa":1863,"./ar-sa.js":1863,"./ar-tn":9607,"./ar-tn.js":9607,"./ar.js":6069,"./az":9281,"./az.js":9281,"./be":9945,"./be.js":9945,"./bg":9384,"./bg.js":9384,"./bm":1476,"./bm.js":1476,"./bn":3345,"./bn-bd":216,"./bn-bd.js":216,"./bn.js":3345,"./bo":1713,"./bo.js":1713,"./br":9655,"./br.js":9655,"./bs":7296,"./bs.js":7296,"./ca":3049,"./ca.js":3049,"./cs":2722,"./cs.js":2722,"./cv":8039,"./cv.js":8039,"./cy":5563,"./cy.js":5563,"./da":1960,"./da.js":1960,"./de":7533,"./de-at":6674,"./de-at.js":6674,"./de-ch":7732,"./de-ch.js":7732,"./de.js":7533,"./dv":8343,"./dv.js":8343,"./el":7004,"./el.js":7004,"./en-au":2517,"./en-au.js":2517,"./en-ca":4929,"./en-ca.js":4929,"./en-gb":9722,"./en-gb.js":9722,"./en-ie":6923,"./en-ie.js":6923,"./en-il":8050,"./en-il.js":8050,"./en-in":9624,"./en-in.js":9624,"./en-nz":540,"./en-nz.js":540,"./en-sg":4375,"./en-sg.js":4375,"./eo":40,"./eo.js":40,"./es":9720,"./es-do":5595,"./es-do.js":5595,"./es-mx":180,"./es-mx.js":180,"./es-us":1563,"./es-us.js":1563,"./es.js":9720,"./et":9217,"./et.js":9217,"./eu":9474,"./eu.js":9474,"./fa":5243,"./fa.js":5243,"./fi":7645,"./fi.js":7645,"./fil":5350,"./fil.js":5350,"./fo":5622,"./fo.js":5622,"./fr":1467,"./fr-ca":3439,"./fr-ca.js":3439,"./fr-ch":4335,"./fr-ch.js":4335,"./fr.js":1467,"./fy":6026,"./fy.js":6026,"./ga":2969,"./ga.js":2969,"./gd":1347,"./gd.js":1347,"./gl":1085,"./gl.js":1085,"./gom-deva":904,"./gom-deva.js":904,"./gom-latn":9597,"./gom-latn.js":9597,"./gu":8705,"./gu.js":8705,"./he":9128,"./he.js":9128,"./hi":2821,"./hi.js":2821,"./hr":9002,"./hr.js":9002,"./hu":4814,"./hu.js":4814,"./hy-am":658,"./hy-am.js":658,"./id":9344,"./id.js":9344,"./is":8204,"./is.js":8204,"./it":376,"./it-ch":1549,"./it-ch.js":1549,"./it.js":376,"./ja":9293,"./ja.js":9293,"./jv":6401,"./jv.js":6401,"./ka":482,"./ka.js":482,"./kk":7329,"./kk.js":7329,"./km":4241,"./km.js":4241,"./kn":3566,"./kn.js":3566,"./ko":2742,"./ko.js":2742,"./ku":2915,"./ku-kmr":2346,"./ku-kmr.js":2346,"./ku.js":2915,"./ky":6846,"./ky.js":6846,"./lb":4959,"./lb.js":4959,"./lo":2188,"./lo.js":2188,"./lt":8967,"./lt.js":8967,"./lv":1245,"./lv.js":1245,"./me":751,"./me.js":751,"./mi":7501,"./mi.js":7501,"./mk":1643,"./mk.js":1643,"./ml":5597,"./ml.js":5597,"./mn":7893,"./mn.js":7893,"./mr":9065,"./mr.js":9065,"./ms":4703,"./ms-my":4645,"./ms-my.js":4645,"./ms.js":4703,"./mt":4365,"./mt.js":4365,"./my":3788,"./my.js":3788,"./nb":7357,"./nb.js":7357,"./ne":9109,"./ne.js":9109,"./nl":3746,"./nl-be":1985,"./nl-be.js":1985,"./nl.js":3746,"./nn":7175,"./nn.js":7175,"./oc-lnc":566,"./oc-lnc.js":566,"./pa-in":2733,"./pa-in.js":2733,"./pl":182,"./pl.js":182,"./pt":505,"./pt-br":7839,"./pt-br.js":7839,"./pt.js":505,"./ro":9578,"./ro.js":9578,"./ru":2328,"./ru.js":2328,"./sd":641,"./sd.js":641,"./se":1758,"./se.js":1758,"./si":6680,"./si.js":6680,"./sk":5016,"./sk.js":5016,"./sl":7424,"./sl.js":7424,"./sq":8635,"./sq.js":8635,"./sr":9038,"./sr-cyrl":3716,"./sr-cyrl.js":3716,"./sr.js":9038,"./ss":4771,"./ss.js":4771,"./sv":3517,"./sv.js":3517,"./sw":9419,"./sw.js":9419,"./ta":5959,"./ta.js":5959,"./te":1739,"./te.js":1739,"./tet":2264,"./tet.js":2264,"./tg":4792,"./tg.js":4792,"./th":8328,"./th.js":8328,"./tk":702,"./tk.js":702,"./tl-ph":7814,"./tl-ph.js":7814,"./tlh":797,"./tlh.js":797,"./tr":6691,"./tr.js":6691,"./tzl":6891,"./tzl.js":6891,"./tzm":6362,"./tzm-latn":7855,"./tzm-latn.js":7855,"./tzm.js":6362,"./ug-cn":7606,"./ug-cn.js":7606,"./uk":513,"./uk.js":513,"./ur":3803,"./ur.js":3803,"./uz":344,"./uz-latn":8957,"./uz-latn.js":8957,"./uz.js":344,"./vi":3,"./vi.js":3,"./x-pseudo":8842,"./x-pseudo.js":8842,"./yo":2083,"./yo.js":2083,"./zh-cn":4536,"./zh-cn.js":4536,"./zh-hk":2475,"./zh-hk.js":2475,"./zh-mo":7593,"./zh-mo.js":7593,"./zh-tw":4746,"./zh-tw.js":4746};function o(s){var e=l(s);return a(e)}function l(s){if(!a.o(t,s)){var e=new Error("Cannot find module '"+s+"'");throw e.code="MODULE_NOT_FOUND",e}return t[s]}o.keys=function(){return Object.keys(t)},o.resolve=l,s.exports=o,o.id=6700}}]);