(globalThis["webpackChunksit_frontend"]=globalThis["webpackChunksit_frontend"]||[]).push([[401],{5770:e=>{e.exports={endpoint_path_v2:"https://bck-test.factura-smart.com/",version:"1.0.2"}},4685:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>M});var l=a(3673),t=a(8880),o=a(2323);const n={class:"my-font my-fondo q-pa-md"},i={class:"row",style:{"margin-bottom":"40px","justify-content":"space-between"}},r=(0,l._)("span",{class:"text-secondary",style:{margin:"0 20px","font-size":"25px","font-weight":"bolder"}},"Usuarios",-1),u={key:0},d=(0,l._)("div",{class:"text-h6"},"Crear usuario",-1),c=(0,l._)("span",{class:"q-ml-sm"},"Trazas de seguridad",-1),m=(0,l._)("div",{class:"text-h6",style:{"text-align":"center"}},"Actualizar Estatus",-1),p={style:{display:"flex","justify-content":"space-evenly","margin-top":"20px"}},j=(0,l._)("div",{class:"text-h6",style:{"text-align":"center"}},"Actualizar Clave",-1),b={style:{display:"flex","justify-content":"space-evenly","margin-top":"20px"}};function h(e,s,a,h,v,f){const g=(0,l.up)("q-btn"),w=(0,l.up)("q-icon"),y=(0,l.up)("q-input"),k=(0,l.up)("q-td"),_=(0,l.up)("q-table"),z=(0,l.up)("q-card-section"),W=(0,l.up)("q-select"),C=(0,l.up)("q-card-actions"),V=(0,l.up)("q-card"),U=(0,l.up)("q-dialog"),x=(0,l.Q2)("close-popup");return(0,l.wg)(),(0,l.iD)("div",n,[(0,l._)("div",i,[r,"1"===h.co_rol?((0,l.wg)(),(0,l.j4)(g,{key:0,color:"secondary",disabled:e.btndisable,label:"Crear usuario",onClick:s[0]||(s[0]=e=>h.modalcrear=!0),style:{"border-radius":"20px",padding:"7px 20px"}},null,8,["disabled"])):(0,l.kq)("",!0)]),(0,l.Wm)(_,{dense:"",rows:v.rows,columns:v.columns,"row-key":"name",filter:h.filter,pagination:h.pagination},{top:(0,l.w5)((()=>[(0,l.Wm)(y,{borderless:"",dense:"",debounce:"300",color:"primary",modelValue:h.filter,"onUpdate:modelValue":s[1]||(s[1]=e=>h.filter=e)},{append:(0,l.w5)((()=>[(0,l.Wm)(w,{name:"search"})])),_:1},8,["modelValue"])])),"body-cell-bitacora":(0,l.w5)((e=>[(0,l.Wm)(k,{props:e},{default:(0,l.w5)((()=>[(0,l._)("div",null,[(0,l.Wm)(g,{icon:"list_alt",onClick:(0,t.iM)((s=>f.btnviewdetails(e.row)),["stop"]),dense:"",flat:""},null,8,["onClick"])])])),_:2},1032,["props"])])),"body-cell-clave":(0,l.w5)((e=>[(0,l.Wm)(k,{props:e},{default:(0,l.w5)((()=>[(0,l._)("div",null,[(0,l.Wm)(g,{disable:"1"!==h.co_rol,icon:"key",onClick:(0,t.iM)((s=>f.btnOpenUpdClave(e.row)),["stop"]),dense:"",flat:""},null,8,["disable","onClick"])])])),_:2},1032,["props"])])),"body-cell-estatus":(0,l.w5)((e=>[(0,l.Wm)(k,{props:e},{default:(0,l.w5)((()=>["1"!==e.row.id?((0,l.wg)(),(0,l.iD)("div",u,[(0,l.Wm)(g,{color:"Activo"===e.row.estatus?"primary":"negative",icon:"Activo"===e.row.estatus?"toggle_on":"toggle_off",onClick:(0,t.iM)((s=>f.btnOpenUpdEstatus(e.row)),["stop"]),dense:""},null,8,["color","icon","onClick"])])):(0,l.kq)("",!0)])),_:2},1032,["props"])])),_:1},8,["rows","columns","filter","pagination"]),(0,l.Wm)(U,{modelValue:h.modalcrear,"onUpdate:modelValue":s[7]||(s[7]=e=>h.modalcrear=e),persistent:""},{default:(0,l.w5)((()=>[(0,l.Wm)(V,{style:{"min-width":"350px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(z,null,{default:(0,l.w5)((()=>[d])),_:1}),(0,l.Wm)(z,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(y,{dense:"",modelValue:h.nombre,"onUpdate:modelValue":s[2]||(s[2]=e=>h.nombre=e),label:"Nombre",hint:"Debe ser distinto a la razón social",autofocus:"",rules:[e=>e.length>0||"Ingresar NOMBRE DE USUARIO"]},null,8,["modelValue","rules"]),(0,l.Wm)(y,{dense:"",modelValue:h.usuario,"onUpdate:modelValue":s[3]||(s[3]=e=>h.usuario=e),label:"Usuario",autofocus:"",rules:[e=>e.length>0||"Ingresar DESCRIPCION DE USUARIO"]},null,8,["modelValue","rules"]),(0,l.Wm)(y,{dense:"",modelValue:h.clave,"onUpdate:modelValue":s[4]||(s[4]=e=>h.clave=e),label:"Clave",autofocus:"",rules:[e=>e.length>0||"Ingresar CLAVE DE USUARIO"]},null,8,["modelValue","rules"]),(0,l.Wm)(W,{dense:"",class:"col",filled:"","options-dense":"",modelValue:v.modelrol,"onUpdate:modelValue":s[5]||(s[5]=e=>v.modelrol=e),options:v.optionsrol,"option-label":"name","option-value":"cod",label:"Rol de usuario",style:{margin:"10px"}},null,8,["modelValue","options"]),"1"===h.co_rol?((0,l.wg)(),(0,l.j4)(W,{key:0,dense:"",class:"col",filled:"","options-dense":"",modelValue:v.modelsede,"onUpdate:modelValue":s[6]||(s[6]=e=>v.modelsede=e),options:v.optionssede,"option-label":"name","option-value":"cod",label:"Cliente emisor",style:{margin:"10px"}},null,8,["modelValue","options"])):(0,l.kq)("",!0)])),_:1}),(0,l.Wm)(C,{align:"right",class:"text-primary"},{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(g,{color:"negative",label:"Cancelar"},null,512),[[x]]),(0,l.Wm)(g,{color:"secondary",label:"Aceptar",onClick:f.crearusuario},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)(U,{modelValue:h.viewdetails,"onUpdate:modelValue":s[8]||(s[8]=e=>h.viewdetails=e),persistent:""},{default:(0,l.w5)((()=>[(0,l.Wm)(V,{style:{width:"800px","max-width":"80vw"}},{default:(0,l.w5)((()=>[(0,l.Wm)(z,{class:"row items-center"},{default:(0,l.w5)((()=>[c])),_:1}),(0,l.Wm)(z,{class:"row items-center"},{default:(0,l.w5)((()=>[(0,l.Wm)(_,{dense:"",rows:v.rowsdetails,columns:v.columnsdetails,"row-key":"num","hide-pagination":"",style:{width:"100%"}},null,8,["rows","columns"])])),_:1}),(0,l.Wm)(C,{align:"right"},{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(g,{color:"secondary",label:"Aceptar"},null,512),[[x]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)(U,{modelValue:h.modalactualizarestatus,"onUpdate:modelValue":s[9]||(s[9]=e=>h.modalactualizarestatus=e),persistent:""},{default:(0,l.w5)((()=>[(0,l.Wm)(V,null,{default:(0,l.w5)((()=>[(0,l.Wm)(z,null,{default:(0,l.w5)((()=>[m])),_:1}),(0,l.Wm)(z,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l._)("div",null," ¿Desea "+(0,o.zw)(e.messageActualizar)+" este cliente emisor? ",1)])),_:1}),(0,l.Wm)(z,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l._)("div",p,[(0,l.wy)((0,l.Wm)(g,{color:"negative",label:"Cancelar"},null,512),[[x]]),(0,l.Wm)(g,{color:"secondary",label:"Aceptar",onClick:f.actualizarEstatus},null,8,["onClick"])])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)(U,{modelValue:h.modalactualizarclave,"onUpdate:modelValue":s[11]||(s[11]=e=>h.modalactualizarclave=e),persistent:""},{default:(0,l.w5)((()=>[(0,l.Wm)(V,{style:{width:"300px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(z,null,{default:(0,l.w5)((()=>[j])),_:1}),(0,l.Wm)(z,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(y,{dense:"",modelValue:h.nuevaclave,"onUpdate:modelValue":s[10]||(s[10]=e=>h.nuevaclave=e),label:"Ingrese nueva clave",autofocus:""},null,8,["modelValue"])])),_:1}),(0,l.Wm)(z,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l._)("div",b,[(0,l.wy)((0,l.Wm)(g,{color:"negative",label:"Cancelar"},null,512),[[x]]),(0,l.Wm)(g,{color:"secondary",label:"Aceptar",onClick:f.cambiarclave},null,8,["onClick"])])])),_:1})])),_:1})])),_:1},8,["modelValue"])])}a(4564);var v=a(1959),f=a(4434),g=a(52),w=a.n(g),y=a(1488),k=a.n(y),_=a(8916),z=a.n(_);const W=a(5770),C=W.endpoint_path_v2,V={setup(){return{modalcrear:(0,v.iH)(!1),viewdetails:(0,v.iH)(!1),modalactualizarestatus:(0,v.iH)(!1),modalactualizarclave:(0,v.iH)(!1),usuario:(0,v.iH)(""),clave:(0,v.iH)(""),nuevaclave:(0,v.iH)(""),nombre:(0,v.iH)(""),filter:(0,v.iH)(""),loading:(0,v.iH)(!1),co_rol:sessionStorage.getItem("co_rol"),pagination:{page:1,rowsPerPage:10}}},data(){return{columns:[{name:"name",required:!0,label:"Nombre",align:"left",field:e=>e.name,format:e=>`${e}`,sortable:!0},{name:"razonsocial",align:"left",label:"Razon Social",field:"razonsocial",sortable:!0},{name:"usuario",align:"left",label:"Usuario",field:"usuario",sortable:!0},{name:"rol",label:"Rol",field:"rol",sortable:!0},{name:"bitacora",label:"Bitácora"},{name:"clave",label:"Clave"},{name:"estatus",label:"Estatus",field:"estatus"}],rows:[],columnsdetails:[{name:"num",align:"center",label:"#",field:"num"},{name:"fecha",align:"center",label:"Fecha",field:"fecha"},{name:"evento",align:"left",label:"Evento",field:"evento"},{name:"observacion",align:"left",label:"Observación",field:"observacion"},{name:"ip",align:"center",label:"IP",field:"ip"},{name:"idusuario",align:"center",label:"Id Usuario",field:"idusuario"},{name:"nombre",align:"left",label:"Nombre Usuario",field:"nombre"}],rowsdetails:[],modelrol:[],optionsrol:[],modelsede:[],optionssede:[]}},methods:{btnOpenUpdEstatus(e){this.idUpd=e.id,this.messageActualizar="Activo"===e.estatus?"desactivar":"activar",this.estatusAct=e.estatus,this.modalactualizarestatus=!0},btnOpenUpdClave(e){this.idUpd=e.id,this.modalactualizarclave=!0},actualizarEstatus(){const e={estatus:"Activo"===this.estatusAct?0:1};w().put(C+"usuario/estatus/"+this.idUpd,e).then((async e=>{this.modalactualizarestatus=!1,console.log(e.data),this.listarusuarios()}))},btnviewdetails(e){const s={idusuario:e.id||void 0};w().post(C+"bitacora/listar",s).then((async s=>{const a=s.data.data;console.log(a),this.rowsdetails=[];for(const e in a){const s={};s.num=Number(e)+1,s.evento=a[e].evento,s.idusuario=a[e].idusuario,s.usuario=a[e].usuario,s.nombre=a[e].nombre,s.ip=a[e].ip,s.observacion=a[e].observacion,s.fecha=k()(a[e].fecha).format("DD/MM/YYYY HH:mm:ss"),this.rowsdetails.push(s)}e.id&&(this.viewdetails=!0)})).catch((e=>{f.Z.create("Problemas al listar Detalles bitacora "+e)}))},cambiarclave(){if(this.nuevaclave.length<4)return void f.Z.create("Debe ingresar nueva clave correcta ");const e={nuevaclave:z()(this.nuevaclave)};w().put(C+"usuario/cambioclave/"+this.idUpd,e).then((async e=>{console.log(e.data),this.modalactualizarclave=!1,this.listarusuarios(),f.Z.create("Calve cambiada en forma correcta")}))},crearusuario(){this.modalcrear=!1;const e={usuario:this.usuario,clave:z()(this.clave),nombre:this.nombre,estatus:1,idrol:Number(this.modelrol.cod),idserviciosmasivo:Number(this.modelsede?.cod)||null};w().post(C+"usuario",e).then((async e=>{console.log(e.data),this.usuario="",this.clave="",this.nombre="",this.modelrol=[],this.modelsede=[],this.listarusuarios()}))},listarusuarios(){w().get(C+"usuario").then((async e=>{const s=e.data.resp;this.rows=[];for(const a in s){const e={};e.id=s[a].id,e.name=s[a].nombre,e.razonsocial=s[a].razonsocial,e.usuario=s[a].usuario,e.clave=s[a].clave,e.rol=s[a].rol,e.feultacceso=s[a].feultacceso,e.estatus="1"===s[a].estatus?"Activo":"Inactivo","1"===s[a].idrol||"3"===s[a].idrol?"1"===this.co_rol&&this.rows.push(e):this.rows.push(e)}})).catch((e=>{f.Z.create("Problemas al listar Usuarios "+e)}))},listarroles(){w().get(C+"usuario/roles").then((async e=>{const s=e.data.resp;this.optionsrol=[];for(const a in s){const e={};e.cod=s[a].id,e.name=s[a].rol,"1"===s[a].id||"3"===s[a].id?"1"===this.co_rol&&this.optionsrol.push(e):this.optionsrol.push(e)}})).catch((e=>{f.Z.create("Problemas al listar Roles "+e)}))},listarsedes(){w().get(C+"sede").then((async e=>{const s=e.data.data;this.optionssede=[];for(const a in s){const e={};e.cod=s[a].id,e.name=s[a].razonsocial,this.optionssede.push(e)}})).catch((e=>{f.Z.create("Problemas al listar Sedes "+e)}))}},mounted(){this.listarusuarios(),this.listarroles(),this.listarsedes()}};var U=a(4260),x=a(8240),q=a(4993),A=a(4842),Z=a(4554),D=a(3884),E=a(6778),I=a(151),O=a(5589),H=a(8516),Q=a(9367),N=a(677),P=a(7518),R=a.n(P);const S=(0,U.Z)(V,[["render",h]]),M=S;R()(V,"components",{QBtn:x.Z,QTable:q.Z,QInput:A.Z,QIcon:Z.Z,QTd:D.Z,QDialog:E.Z,QCard:I.Z,QCardSection:O.Z,QSelect:H.Z,QCardActions:Q.Z}),R()(V,"directives",{ClosePopup:N.Z})},6700:(e,s,a)=>{var l={"./af":5809,"./af.js":5809,"./ar":6069,"./ar-dz":481,"./ar-dz.js":481,"./ar-kw":3994,"./ar-kw.js":3994,"./ar-ly":3312,"./ar-ly.js":3312,"./ar-ma":239,"./ar-ma.js":239,"./ar-ps":7916,"./ar-ps.js":7916,"./ar-sa":1863,"./ar-sa.js":1863,"./ar-tn":9607,"./ar-tn.js":9607,"./ar.js":6069,"./az":9281,"./az.js":9281,"./be":9945,"./be.js":9945,"./bg":9384,"./bg.js":9384,"./bm":1476,"./bm.js":1476,"./bn":3345,"./bn-bd":216,"./bn-bd.js":216,"./bn.js":3345,"./bo":1713,"./bo.js":1713,"./br":9655,"./br.js":9655,"./bs":7296,"./bs.js":7296,"./ca":3049,"./ca.js":3049,"./cs":2722,"./cs.js":2722,"./cv":8039,"./cv.js":8039,"./cy":5563,"./cy.js":5563,"./da":1960,"./da.js":1960,"./de":7533,"./de-at":6674,"./de-at.js":6674,"./de-ch":7732,"./de-ch.js":7732,"./de.js":7533,"./dv":8343,"./dv.js":8343,"./el":7004,"./el.js":7004,"./en-au":2517,"./en-au.js":2517,"./en-ca":4929,"./en-ca.js":4929,"./en-gb":9722,"./en-gb.js":9722,"./en-ie":6923,"./en-ie.js":6923,"./en-il":8050,"./en-il.js":8050,"./en-in":9624,"./en-in.js":9624,"./en-nz":540,"./en-nz.js":540,"./en-sg":4375,"./en-sg.js":4375,"./eo":40,"./eo.js":40,"./es":9720,"./es-do":5595,"./es-do.js":5595,"./es-mx":180,"./es-mx.js":180,"./es-us":1563,"./es-us.js":1563,"./es.js":9720,"./et":9217,"./et.js":9217,"./eu":9474,"./eu.js":9474,"./fa":5243,"./fa.js":5243,"./fi":7645,"./fi.js":7645,"./fil":5350,"./fil.js":5350,"./fo":5622,"./fo.js":5622,"./fr":1467,"./fr-ca":3439,"./fr-ca.js":3439,"./fr-ch":4335,"./fr-ch.js":4335,"./fr.js":1467,"./fy":6026,"./fy.js":6026,"./ga":2969,"./ga.js":2969,"./gd":1347,"./gd.js":1347,"./gl":1085,"./gl.js":1085,"./gom-deva":904,"./gom-deva.js":904,"./gom-latn":9597,"./gom-latn.js":9597,"./gu":8705,"./gu.js":8705,"./he":9128,"./he.js":9128,"./hi":2821,"./hi.js":2821,"./hr":9002,"./hr.js":9002,"./hu":4814,"./hu.js":4814,"./hy-am":658,"./hy-am.js":658,"./id":9344,"./id.js":9344,"./is":8204,"./is.js":8204,"./it":376,"./it-ch":1549,"./it-ch.js":1549,"./it.js":376,"./ja":9293,"./ja.js":9293,"./jv":6401,"./jv.js":6401,"./ka":482,"./ka.js":482,"./kk":7329,"./kk.js":7329,"./km":4241,"./km.js":4241,"./kn":3566,"./kn.js":3566,"./ko":2742,"./ko.js":2742,"./ku":2915,"./ku-kmr":2346,"./ku-kmr.js":2346,"./ku.js":2915,"./ky":6846,"./ky.js":6846,"./lb":4959,"./lb.js":4959,"./lo":2188,"./lo.js":2188,"./lt":8967,"./lt.js":8967,"./lv":1245,"./lv.js":1245,"./me":751,"./me.js":751,"./mi":7501,"./mi.js":7501,"./mk":1643,"./mk.js":1643,"./ml":5597,"./ml.js":5597,"./mn":7893,"./mn.js":7893,"./mr":9065,"./mr.js":9065,"./ms":4703,"./ms-my":4645,"./ms-my.js":4645,"./ms.js":4703,"./mt":4365,"./mt.js":4365,"./my":3788,"./my.js":3788,"./nb":7357,"./nb.js":7357,"./ne":9109,"./ne.js":9109,"./nl":3746,"./nl-be":1985,"./nl-be.js":1985,"./nl.js":3746,"./nn":7175,"./nn.js":7175,"./oc-lnc":566,"./oc-lnc.js":566,"./pa-in":2733,"./pa-in.js":2733,"./pl":182,"./pl.js":182,"./pt":505,"./pt-br":7839,"./pt-br.js":7839,"./pt.js":505,"./ro":9578,"./ro.js":9578,"./ru":2328,"./ru.js":2328,"./sd":641,"./sd.js":641,"./se":1758,"./se.js":1758,"./si":6680,"./si.js":6680,"./sk":5016,"./sk.js":5016,"./sl":7424,"./sl.js":7424,"./sq":8635,"./sq.js":8635,"./sr":9038,"./sr-cyrl":3716,"./sr-cyrl.js":3716,"./sr.js":9038,"./ss":4771,"./ss.js":4771,"./sv":3517,"./sv.js":3517,"./sw":9419,"./sw.js":9419,"./ta":5959,"./ta.js":5959,"./te":1739,"./te.js":1739,"./tet":2264,"./tet.js":2264,"./tg":4792,"./tg.js":4792,"./th":8328,"./th.js":8328,"./tk":702,"./tk.js":702,"./tl-ph":7814,"./tl-ph.js":7814,"./tlh":797,"./tlh.js":797,"./tr":6691,"./tr.js":6691,"./tzl":6891,"./tzl.js":6891,"./tzm":6362,"./tzm-latn":7855,"./tzm-latn.js":7855,"./tzm.js":6362,"./ug-cn":7606,"./ug-cn.js":7606,"./uk":513,"./uk.js":513,"./ur":3803,"./ur.js":3803,"./uz":344,"./uz-latn":8957,"./uz-latn.js":8957,"./uz.js":344,"./vi":3,"./vi.js":3,"./x-pseudo":8842,"./x-pseudo.js":8842,"./yo":2083,"./yo.js":2083,"./zh-cn":4536,"./zh-cn.js":4536,"./zh-hk":2475,"./zh-hk.js":2475,"./zh-mo":7593,"./zh-mo.js":7593,"./zh-tw":4746,"./zh-tw.js":4746};function t(e){var s=o(e);return a(s)}function o(e){if(!a.o(l,e)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return l[e]}t.keys=function(){return Object.keys(l)},t.resolve=o,e.exports=t,t.id=6700}}]);