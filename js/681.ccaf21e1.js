(globalThis["webpackChunksit_frontend"]=globalThis["webpackChunksit_frontend"]||[]).push([[681],{5770:s=>{s.exports={endpoint_path_v2:"https://bck.factura-smart.com/",version:"1.0.2"}},2965:(s,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>W});var a=o(3673);const t={class:"q-pa-md"},n=(0,a._)("div",{class:"row"},[(0,a._)("span",{style:{margin:"0 20px","font-size":"25px","font-weight":"bolder"}},"Auditoría")],-1),l={class:"row"},i={class:"row items-center justify-end"},r={class:"row items-center justify-end"};function u(s,e,o,u,d,m){const c=(0,a.up)("q-select"),j=(0,a.up)("q-btn"),p=(0,a.up)("q-date"),h=(0,a.up)("q-popup-proxy"),b=(0,a.up)("q-icon"),f=(0,a.up)("q-input"),v=(0,a.up)("q-table"),_=(0,a.Q2)("close-popup");return(0,a.wg)(),(0,a.iD)("div",t,[n,(0,a._)("div",l,[(0,a.Wm)(c,{label:"Buscar por Nombre o Usernamme del usuario",dense:"",class:"col-md-4 col-sm-6 col-xs-12",filled:"",modelValue:d.modelusuario,"onUpdate:modelValue":[e[0]||(e[0]=s=>d.modelusuario=s),e[1]||(e[1]=s=>m.listar())],"use-input":"","hide-selected":"","fill-input":"",clearable:"","options-dense":"","option-label":"nameuser","option-value":"cod","input-debounce":"0",options:d.optionsusuarios,"onInput:":e[2]||(e[2]=s=>m.listar()),onFilter:m.searchUsuario,style:{padding:"5px"}},null,8,["modelValue","options","onFilter"]),(0,a.Wm)(f,{dense:"",filled:"",label:"Desde",mask:"date",modelValue:u.dateFrom,"onUpdate:modelValue":e[4]||(e[4]=s=>u.dateFrom=s),class:"col-md-2 col-sm-6 col-xs-6",style:{padding:"5px"}},{append:(0,a.w5)((()=>[(0,a.Wm)(b,{name:"event",class:"cursor-pointer"},{default:(0,a.w5)((()=>[(0,a.Wm)(h,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{modelValue:u.dateFrom,"onUpdate:modelValue":e[3]||(e[3]=s=>u.dateFrom=s),locale:u.myLocale},{default:(0,a.w5)((()=>[(0,a._)("div",i,[(0,a.wy)((0,a.Wm)(j,{label:"Close",color:"primary",flat:""},null,512),[[_]])])])),_:1},8,["modelValue","locale"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a.Wm)(f,{dense:"",filled:"",label:"Hasta",modelValue:u.dateTo,"onUpdate:modelValue":e[6]||(e[6]=s=>u.dateTo=s),class:"col-md-2 col-sm-6 col-xs-6",style:{padding:"5px"},mask:"date"},{append:(0,a.w5)((()=>[(0,a.Wm)(b,{name:"event",class:"cursor-pointer"},{default:(0,a.w5)((()=>[(0,a.Wm)(h,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{modelValue:u.dateTo,"onUpdate:modelValue":e[5]||(e[5]=s=>u.dateTo=s),locale:u.myLocale},{default:(0,a.w5)((()=>[(0,a._)("div",r,[(0,a.wy)((0,a.Wm)(j,{label:"Close",color:"primary",flat:""},null,512),[[_]])])])),_:1},8,["modelValue","locale"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a.Wm)(c,{dense:"",class:"col-md-4 col-sm-6 col-xs-12",filled:"","options-dense":"",modelValue:d.modelevento,"onUpdate:modelValue":[e[7]||(e[7]=s=>d.modelevento=s),e[8]||(e[8]=s=>m.listar())],options:d.optionsevento,"option-label":"name","option-value":"cod",label:"Tipo de Evento",style:{padding:"5px"}},null,8,["modelValue","options"])]),(0,a.Wm)(v,{dense:"",rows:d.rowstodos,title:"Bitácora",columns:d.columnsdetails,"row-key":"num",pagination:u.pagination,style:{width:"100%","margin-top":"40px"}},null,8,["rows","columns","pagination"])])}o(5663);var d=o(1959),m=o(6417),c=o(52),j=o.n(c),p=o(1488),h=o.n(p);const b=o(5770),f=b.endpoint_path_v2,v={setup(){return{myLocale:{days:"Domingo_Lunes_Martes_Miércoles_Jueves_Viernes_Sábado".split("_"),daysShort:"Dom_Lun_Mar_Mié_Jue_Vie_Sáb".split("_"),months:"Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre".split("_"),monthsShort:"Ene_Feb_Mar_Abr_May_Jun_Jul_Ago_Sep_Oct_Nov_Dic".split("_"),firstDayOfWeek:1,format24h:!0,pluralDay:"dias"},filter:(0,d.iH)(""),co_rol:sessionStorage.getItem("co_rol"),dateFrom:(0,d.iH)(h()().format("YYYY-MM-DD")),dateTo:(0,d.iH)(h()().format("YYYY-MM-DD")),loading:(0,d.iH)(!1),pagination:{page:1,rowsPerPage:20}}},data(){return{columnsdetails:[{name:"num",align:"center",label:"#",field:"num"},{name:"fecha",align:"center",label:"Fecha",field:"fecha"},{name:"usuario",align:"left",label:"Usuario",field:"usuario"},{name:"evento",align:"left",label:"Evento",field:"evento"},{name:"observacion",align:"left",label:"Descripción",field:"observacion"},{name:"ip",align:"center",label:"IP",field:"ip"},{name:"idusuario",align:"center",label:"Id Usuario",field:"idusuario"},{name:"nombre",align:"left",label:"Nombre Usuario",field:"nombre"}],rowstodos:[],modelevento:[],optionsevento:[],modelusuario:[],optionsusuarios:[]}},methods:{searchUsuario(s,e,o){e((()=>{if(""===s)this.optionsusuarios=this.usuarios;else{const e=s.toLowerCase();this.optionsusuarios=this.usuarios.filter((s=>s.nameuser.toLowerCase().indexOf(e)>-1))}}))},listarusuarios(){j().get(f+"usuario").then((async s=>{const e=s.data.resp;this.optionsusuarios=[];for(const o in e){const s={};s.cod=e[o].id,s.name=e[o].nombre,s.usuario=e[o].usuario,s.nameuser=e[o].usuario+" "+e[o].nombre,this.optionsusuarios.push(s),this.usuarios=this.optionsusuarios}})).catch((s=>{m.Z.create("Problemas al listar Usuarios "+s)}))},listareventos(){j().get(f+"bitacora/eventos").then((async s=>{const e=s.data.data;this.optionsevento=[];const o={cod:void 0,name:"Todos"};this.optionsevento.push(o);for(const a in e){const s={};s.cod=e[a].id,s.name=e[a].evento,this.optionsevento.push(s)}})).catch((s=>{m.Z.create("Problemas al listar Eventos "+s)}))},listar(){const s=h()(this.dateFrom,"YYYY/MM/DD").format("YYYY-MM-DD"),e=h()(this.dateTo,"YYYY/MM/DD").format("YYYY-MM-DD"),o={idevento:this.modelevento?.cod,idusuario:this.modelusuario?.cod,desde:s,hasta:e};j().post(f+"bitacora/listar",o).then((async s=>{const e=s.data.data;console.log(e),this.rowstodos=[];let o=0;for(const a in e.reverse()){const s={};o=Number(o)+Number(1),s.num=o,s.evento=e[a].evento,s.idevento=e[a].idevento,s.idusuario=e[a].idusuario,s.usuario=e[a].usuario,s.nombre=e[a].nombre,s.ip=e[a].ip,s.observacion=e[a].observacion,s.fecha=h()(e[a].fecha).format("DD/MM/YYYY HH:mm:ss"),this.rowstodos.push(s)}})).catch((s=>{m.Z.create("Problemas al listar Detalles bitacora "+s)}))}},watch:{dateFrom:function(s){console.log(s),this.listar()},dateTo:function(s){console.log(s),this.listar()}},mounted(){this.listar(),this.listareventos(),this.listarusuarios()}};var _=o(4260),g=o(8516),y=o(4842),w=o(4554),k=o(3944),Y=o(3124),D=o(2165),z=o(4993),M=o(677),x=o(7518),V=o.n(x);const U=(0,_.Z)(v,[["render",u]]),W=U;V()(v,"components",{QSelect:g.Z,QInput:y.Z,QIcon:w.Z,QPopupProxy:k.Z,QDate:Y.Z,QBtn:D.Z,QTable:z.Z}),V()(v,"directives",{ClosePopup:M.Z})},6700:(s,e,o)=>{var a={"./af":5809,"./af.js":5809,"./ar":6069,"./ar-dz":481,"./ar-dz.js":481,"./ar-kw":3994,"./ar-kw.js":3994,"./ar-ly":3312,"./ar-ly.js":3312,"./ar-ma":239,"./ar-ma.js":239,"./ar-sa":1863,"./ar-sa.js":1863,"./ar-tn":9607,"./ar-tn.js":9607,"./ar.js":6069,"./az":9281,"./az.js":9281,"./be":9945,"./be.js":9945,"./bg":9384,"./bg.js":9384,"./bm":1476,"./bm.js":1476,"./bn":3345,"./bn-bd":216,"./bn-bd.js":216,"./bn.js":3345,"./bo":1713,"./bo.js":1713,"./br":9655,"./br.js":9655,"./bs":7296,"./bs.js":7296,"./ca":3049,"./ca.js":3049,"./cs":2722,"./cs.js":2722,"./cv":8039,"./cv.js":8039,"./cy":5563,"./cy.js":5563,"./da":1960,"./da.js":1960,"./de":7533,"./de-at":6674,"./de-at.js":6674,"./de-ch":7732,"./de-ch.js":7732,"./de.js":7533,"./dv":8343,"./dv.js":8343,"./el":7004,"./el.js":7004,"./en-au":2517,"./en-au.js":2517,"./en-ca":4929,"./en-ca.js":4929,"./en-gb":9722,"./en-gb.js":9722,"./en-ie":6923,"./en-ie.js":6923,"./en-il":8050,"./en-il.js":8050,"./en-in":9624,"./en-in.js":9624,"./en-nz":540,"./en-nz.js":540,"./en-sg":4375,"./en-sg.js":4375,"./eo":40,"./eo.js":40,"./es":9720,"./es-do":5595,"./es-do.js":5595,"./es-mx":180,"./es-mx.js":180,"./es-us":1563,"./es-us.js":1563,"./es.js":9720,"./et":9217,"./et.js":9217,"./eu":9474,"./eu.js":9474,"./fa":5243,"./fa.js":5243,"./fi":7645,"./fi.js":7645,"./fil":5350,"./fil.js":5350,"./fo":5622,"./fo.js":5622,"./fr":1467,"./fr-ca":3439,"./fr-ca.js":3439,"./fr-ch":4335,"./fr-ch.js":4335,"./fr.js":1467,"./fy":6026,"./fy.js":6026,"./ga":2969,"./ga.js":2969,"./gd":1347,"./gd.js":1347,"./gl":1085,"./gl.js":1085,"./gom-deva":904,"./gom-deva.js":904,"./gom-latn":9597,"./gom-latn.js":9597,"./gu":8705,"./gu.js":8705,"./he":9128,"./he.js":9128,"./hi":2821,"./hi.js":2821,"./hr":9002,"./hr.js":9002,"./hu":4814,"./hu.js":4814,"./hy-am":658,"./hy-am.js":658,"./id":9344,"./id.js":9344,"./is":8204,"./is.js":8204,"./it":376,"./it-ch":1549,"./it-ch.js":1549,"./it.js":376,"./ja":9293,"./ja.js":9293,"./jv":6401,"./jv.js":6401,"./ka":482,"./ka.js":482,"./kk":7329,"./kk.js":7329,"./km":4241,"./km.js":4241,"./kn":3566,"./kn.js":3566,"./ko":2742,"./ko.js":2742,"./ku":2915,"./ku.js":2915,"./ky":6846,"./ky.js":6846,"./lb":4959,"./lb.js":4959,"./lo":2188,"./lo.js":2188,"./lt":8967,"./lt.js":8967,"./lv":1245,"./lv.js":1245,"./me":751,"./me.js":751,"./mi":7501,"./mi.js":7501,"./mk":1643,"./mk.js":1643,"./ml":5597,"./ml.js":5597,"./mn":7612,"./mn.js":7612,"./mr":9065,"./mr.js":9065,"./ms":4703,"./ms-my":4645,"./ms-my.js":4645,"./ms.js":4703,"./mt":4365,"./mt.js":4365,"./my":3788,"./my.js":3788,"./nb":7357,"./nb.js":7357,"./ne":9109,"./ne.js":9109,"./nl":3746,"./nl-be":1985,"./nl-be.js":1985,"./nl.js":3746,"./nn":7175,"./nn.js":7175,"./oc-lnc":566,"./oc-lnc.js":566,"./pa-in":2733,"./pa-in.js":2733,"./pl":182,"./pl.js":182,"./pt":505,"./pt-br":7839,"./pt-br.js":7839,"./pt.js":505,"./ro":9578,"./ro.js":9578,"./ru":2328,"./ru.js":2328,"./sd":641,"./sd.js":641,"./se":1758,"./se.js":1758,"./si":6680,"./si.js":6680,"./sk":5016,"./sk.js":5016,"./sl":7424,"./sl.js":7424,"./sq":8635,"./sq.js":8635,"./sr":9038,"./sr-cyrl":3716,"./sr-cyrl.js":3716,"./sr.js":9038,"./ss":4771,"./ss.js":4771,"./sv":3517,"./sv.js":3517,"./sw":9419,"./sw.js":9419,"./ta":5959,"./ta.js":5959,"./te":1739,"./te.js":1739,"./tet":2264,"./tet.js":2264,"./tg":4792,"./tg.js":4792,"./th":8328,"./th.js":8328,"./tk":702,"./tk.js":702,"./tl-ph":7814,"./tl-ph.js":7814,"./tlh":797,"./tlh.js":797,"./tr":6691,"./tr.js":6691,"./tzl":6891,"./tzl.js":6891,"./tzm":6362,"./tzm-latn":7855,"./tzm-latn.js":7855,"./tzm.js":6362,"./ug-cn":7606,"./ug-cn.js":7606,"./uk":513,"./uk.js":513,"./ur":3803,"./ur.js":3803,"./uz":344,"./uz-latn":8957,"./uz-latn.js":8957,"./uz.js":344,"./vi":3,"./vi.js":3,"./x-pseudo":8842,"./x-pseudo.js":8842,"./yo":2083,"./yo.js":2083,"./zh-cn":4536,"./zh-cn.js":4536,"./zh-hk":2475,"./zh-hk.js":2475,"./zh-mo":7593,"./zh-mo.js":7593,"./zh-tw":4746,"./zh-tw.js":4746};function t(s){var e=n(s);return o(e)}function n(s){if(!o.o(a,s)){var e=new Error("Cannot find module '"+s+"'");throw e.code="MODULE_NOT_FOUND",e}return a[s]}t.keys=function(){return Object.keys(a)},t.resolve=n,s.exports=t,t.id=6700}}]);