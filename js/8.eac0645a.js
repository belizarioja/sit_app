(globalThis["webpackChunksit_frontend"]=globalThis["webpackChunksit_frontend"]||[]).push([[8],{5770:e=>{e.exports={endpoint_path_v2:"https://bck-test.factura-smart.com/",version:"2.0.0"}},703:(e,a,l)=>{"use strict";l.r(a),l.d(a,{default:()=>oe});var o=l(3673),s=l(8880),i=l(2323);const r={class:"my-font my-fondo q-pa-md"},t={class:"row",style:{"margin-bottom":"40px","justify-content":"space-between"}},n=(0,o._)("span",{class:"text-secondary",style:{margin:"0 20px","font-size":"25px","font-weight":"bolder"}},"Usuarios",-1),c={key:0},d={key:1},u={key:0},m={key:1},p={key:0},h={key:1},w={key:0},b={key:1},j={key:0},f=(0,o._)("div",{class:"text-h6"},"Crear usuario",-1),v=(0,o._)("span",{class:"q-ml-sm"},"Trazas de seguridad",-1),g=(0,o._)("div",{class:"text-h6",style:{"text-align":"center"}},"Actualizar Estatus",-1),y={style:{display:"flex","justify-content":"space-evenly","margin-top":"20px"}},k=(0,o._)("div",{class:"text-h6",style:{"text-align":"center"}},"Actualizar Clave",-1),_={style:{display:"flex","justify-content":"space-evenly","margin-top":"20px"}},z={class:"text-h6",style:{"text-align":"center"}},W={style:{display:"flex","justify-content":"space-evenly","margin-top":"20px"}},C={class:"text-h6",style:{"text-align":"center"}},U={style:{display:"flex","justify-content":"space-evenly","margin-top":"20px"}};function x(e,a,l,x,V,q){const H=(0,o.up)("q-btn"),A=(0,o.up)("q-icon"),D=(0,o.up)("q-input"),E=(0,o.up)("q-td"),O=(0,o.up)("q-badge"),Z=(0,o.up)("q-table"),I=(0,o.up)("q-card-section"),M=(0,o.up)("q-select"),S=(0,o.up)("q-card-actions"),Q=(0,o.up)("q-card"),N=(0,o.up)("q-dialog"),P=(0,o.up)("q-time"),R=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.iD)("div",r,[(0,o._)("div",t,[n,"1"===x.co_rol||"2"===x.co_rol?((0,o.wg)(),(0,o.j4)(H,{key:0,color:"secondary",label:"Crear usuario",onClick:a[0]||(a[0]=e=>x.modalcrear=!0),style:{"border-radius":"20px",padding:"7px 20px"}})):(0,o.kq)("",!0)]),(0,o.Wm)(Z,{dense:"",rows:V.rows,columns:V.columns,"row-key":"name",filter:x.filter,pagination:x.pagination},{top:(0,o.w5)((()=>[(0,o.Wm)(D,{borderless:"",dense:"",debounce:"300",color:"primary",modelValue:x.filter,"onUpdate:modelValue":a[1]||(a[1]=e=>x.filter=e)},{append:(0,o.w5)((()=>[(0,o.Wm)(A,{name:"search"})])),_:1},8,["modelValue"])])),"body-cell-bitacora":(0,o.w5)((e=>[(0,o.Wm)(E,{props:e},{default:(0,o.w5)((()=>[(0,o._)("div",null,[(0,o.Wm)(H,{icon:"list_alt",onClick:(0,s.iM)((a=>q.btnviewdetails(e.row)),["stop"]),dense:"",flat:""},null,8,["onClick"])])])),_:2},1032,["props"])])),"body-cell-clave":(0,o.w5)((e=>[(0,o.Wm)(E,{props:e},{default:(0,o.w5)((()=>[(0,o._)("div",null,[(0,o.Wm)(H,{disable:"1"!==x.co_rol,icon:"key",onClick:(0,s.iM)((a=>q.btnOpenUpdClave(e.row)),["stop"]),dense:"",flat:""},null,8,["disable","onClick"])])])),_:2},1032,["props"])])),"body-cell-razonsocial":(0,o.w5)((e=>[(0,o.Wm)(E,{props:e},{default:(0,o.w5)((()=>[(0,o._)("div",null,(0,i.zw)("2"===e.row.idrol||"4"===e.row.idrol?"SENIAT":"1"===e.row.idrol||"5"===e.row.idrol?"SMART":e.row.razonsocial),1)])),_:2},1032,["props"])])),"body-cell-email":(0,o.w5)((e=>[(0,o.Wm)(E,{props:e},{default:(0,o.w5)((()=>["1"===x.co_rol||"2"===x.co_rol?((0,o.wg)(),(0,o.iD)("div",c,[e.row.emailbcc?((0,o.wg)(),(0,o.j4)(O,{key:0,color:"blue",onClick:(0,s.iM)((a=>q.btnOpenUpdEmail(e.row,1)),["stop"]),style:{padding:"5px 10px",cursor:"pointer"}},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(e.row.emailbcc),1)])),_:2},1032,["onClick"])):(0,o.kq)("",!0),e.row.emailbcc||"1"===e.row.idrol||"5"===e.row.idrol?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(O,{key:1,color:"green",onClick:(0,s.iM)((a=>q.btnOpenUpdEmail(e.row,1)),["stop"]),style:{padding:"5px 10px",cursor:"pointer"}},{default:(0,o.w5)((()=>[(0,o.Uk)(" Agregar email ")])),_:2},1032,["onClick"]))])):((0,o.wg)(),(0,o.iD)("div",d,(0,i.zw)(e.row.emailbcc),1))])),_:2},1032,["props"])])),"body-cell-emailrecuperacion":(0,o.w5)((e=>[(0,o.Wm)(E,{props:e},{default:(0,o.w5)((()=>["1"===x.co_rol||"2"===x.co_rol?((0,o.wg)(),(0,o.iD)("div",u,[e.row.emailrecuperacion?((0,o.wg)(),(0,o.j4)(O,{key:0,color:"blue",onClick:(0,s.iM)((a=>q.btnOpenUpdEmail(e.row,2)),["stop"]),style:{padding:"5px 10px",cursor:"pointer"}},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(e.row.emailrecuperacion),1)])),_:2},1032,["onClick"])):(0,o.kq)("",!0),e.row.emailrecuperacion||"1"===e.row.idrol||"5"===e.row.idrol?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(O,{key:1,color:"green",onClick:(0,s.iM)((a=>q.btnOpenUpdEmail(e.row,2)),["stop"]),style:{padding:"5px 10px",cursor:"pointer"}},{default:(0,o.w5)((()=>[(0,o.Uk)(" Agregar email ")])),_:2},1032,["onClick"]))])):((0,o.wg)(),(0,o.iD)("div",m,(0,i.zw)(e.row.emailrecuperacion),1))])),_:2},1032,["props"])])),"body-cell-horaentrada":(0,o.w5)((e=>[(0,o.Wm)(E,{props:e},{default:(0,o.w5)((()=>["1"===x.co_rol||"2"===x.co_rol?((0,o.wg)(),(0,o.iD)("div",p,[e.row.horaentrada?((0,o.wg)(),(0,o.j4)(O,{key:0,color:"blue",onClick:(0,s.iM)((a=>q.btnOpenUpdHora(e.row,1)),["stop"]),style:{padding:"5px 10px",cursor:"pointer"}},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(e.row.horaentrada),1)])),_:2},1032,["onClick"])):(0,o.kq)("",!0),e.row.horaentrada||"1"===e.row.idrol||"5"===e.row.idrol?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(O,{key:1,color:"green",onClick:(0,s.iM)((a=>q.btnOpenUpdHora(e.row,1)),["stop"]),style:{padding:"5px 10px",cursor:"pointer"}},{default:(0,o.w5)((()=>[(0,o.Uk)(" Agregar hora ")])),_:2},1032,["onClick"]))])):((0,o.wg)(),(0,o.iD)("div",h,(0,i.zw)(e.row.horaentrada),1))])),_:2},1032,["props"])])),"body-cell-horasalida":(0,o.w5)((e=>[(0,o.Wm)(E,{props:e},{default:(0,o.w5)((()=>["1"===x.co_rol||"2"===x.co_rol?((0,o.wg)(),(0,o.iD)("div",w,[e.row.horasalida?((0,o.wg)(),(0,o.j4)(O,{key:0,color:"blue",onClick:(0,s.iM)((a=>q.btnOpenUpdHora(e.row,2)),["stop"]),style:{padding:"5px 10px",cursor:"pointer"}},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(e.row.horasalida),1)])),_:2},1032,["onClick"])):(0,o.kq)("",!0),e.row.horasalida||"1"===e.row.idrol||"5"===e.row.idrol?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(O,{key:1,color:"green",onClick:(0,s.iM)((a=>q.btnOpenUpdHora(e.row,2)),["stop"]),style:{padding:"5px 10px",cursor:"pointer"}},{default:(0,o.w5)((()=>[(0,o.Uk)(" Agregar hora ")])),_:2},1032,["onClick"]))])):((0,o.wg)(),(0,o.iD)("div",b,(0,i.zw)(e.row.horasalida),1))])),_:2},1032,["props"])])),"body-cell-estatus":(0,o.w5)((e=>[(0,o.Wm)(E,{props:e},{default:(0,o.w5)((()=>["1"!==e.row.id?((0,o.wg)(),(0,o.iD)("div",j,[(0,o.Wm)(H,{color:"Activo"===e.row.estatus?"primary":"negative",icon:"Activo"===e.row.estatus?"toggle_on":"toggle_off",onClick:(0,s.iM)((a=>q.btnOpenUpdEstatus(e.row)),["stop"]),dense:""},null,8,["color","icon","onClick"])])):(0,o.kq)("",!0)])),_:2},1032,["props"])])),_:1},8,["rows","columns","filter","pagination"]),(0,o.Wm)(N,{modelValue:x.modalcrear,"onUpdate:modelValue":a[7]||(a[7]=e=>x.modalcrear=e),persistent:""},{default:(0,o.w5)((()=>[(0,o.Wm)(Q,{style:{"min-width":"350px"}},{default:(0,o.w5)((()=>[(0,o.Wm)(I,null,{default:(0,o.w5)((()=>[f])),_:1}),(0,o.Wm)(I,{class:"q-pt-none"},{default:(0,o.w5)((()=>[(0,o.Wm)(D,{dense:"",modelValue:x.nombre,"onUpdate:modelValue":a[2]||(a[2]=e=>x.nombre=e),label:"Nombre",hint:"Debe ser distinto a la razón social",autofocus:"",rules:[e=>e.length>0||"Ingresar NOMBRE DE USUARIO"]},null,8,["modelValue","rules"]),(0,o.Wm)(D,{dense:"",modelValue:x.usuario,"onUpdate:modelValue":a[3]||(a[3]=e=>x.usuario=e),label:"Usuario",autofocus:"",rules:[e=>e.length>0||"Ingresar DESCRIPCION DE USUARIO"]},null,8,["modelValue","rules"]),(0,o.Wm)(D,{dense:"",modelValue:x.clave,"onUpdate:modelValue":a[4]||(a[4]=e=>x.clave=e),label:"Clave",autofocus:"",rules:[e=>e.length>0||"Ingresar CLAVE DE USUARIO"]},null,8,["modelValue","rules"]),(0,o.Wm)(M,{dense:"",class:"col",filled:"","options-dense":"",modelValue:V.modelrol,"onUpdate:modelValue":a[5]||(a[5]=e=>V.modelrol=e),options:V.optionsrol,"option-label":"name","option-value":"cod",label:"Rol de usuario",style:{margin:"10px"}},null,8,["modelValue","options"]),"1"===x.co_rol?((0,o.wg)(),(0,o.j4)(M,{key:0,dense:"",class:"col",filled:"","options-dense":"",modelValue:V.modelsede,"onUpdate:modelValue":a[6]||(a[6]=e=>V.modelsede=e),options:V.optionssede,"option-label":"name","option-value":"cod",label:"Cliente emisor",style:{margin:"10px"}},null,8,["modelValue","options"])):(0,o.kq)("",!0)])),_:1}),(0,o.Wm)(S,{align:"right",class:"text-primary"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(H,{color:"negative",label:"Cancelar"},null,512),[[R]]),(0,o.Wm)(H,{color:"secondary",label:"Aceptar",onClick:q.crearusuario},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.Wm)(N,{modelValue:x.viewdetails,"onUpdate:modelValue":a[8]||(a[8]=e=>x.viewdetails=e),persistent:""},{default:(0,o.w5)((()=>[(0,o.Wm)(Q,{style:{width:"800px","max-width":"80vw"}},{default:(0,o.w5)((()=>[(0,o.Wm)(I,{class:"row items-center"},{default:(0,o.w5)((()=>[v])),_:1}),(0,o.Wm)(I,{class:"row items-center"},{default:(0,o.w5)((()=>[(0,o.Wm)(Z,{dense:"",rows:V.rowsdetails,columns:V.columnsdetails,"row-key":"num","hide-pagination":"",style:{width:"100%"}},null,8,["rows","columns"])])),_:1}),(0,o.Wm)(S,{align:"right"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(H,{color:"secondary",label:"Aceptar"},null,512),[[R]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.Wm)(N,{modelValue:x.modalactualizarestatus,"onUpdate:modelValue":a[9]||(a[9]=e=>x.modalactualizarestatus=e),persistent:""},{default:(0,o.w5)((()=>[(0,o.Wm)(Q,null,{default:(0,o.w5)((()=>[(0,o.Wm)(I,null,{default:(0,o.w5)((()=>[g])),_:1}),(0,o.Wm)(I,{class:"q-pt-none"},{default:(0,o.w5)((()=>[(0,o._)("div",null," ¿Desea "+(0,i.zw)(e.messageActualizar)+" este cliente emisor? ",1)])),_:1}),(0,o.Wm)(I,{class:"q-pt-none"},{default:(0,o.w5)((()=>[(0,o._)("div",y,[(0,o.wy)((0,o.Wm)(H,{color:"negative",label:"Cancelar"},null,512),[[R]]),(0,o.Wm)(H,{color:"secondary",label:"Aceptar",onClick:q.actualizarEstatus},null,8,["onClick"])])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.Wm)(N,{modelValue:x.modalactualizarclave,"onUpdate:modelValue":a[11]||(a[11]=e=>x.modalactualizarclave=e),persistent:""},{default:(0,o.w5)((()=>[(0,o.Wm)(Q,{style:{width:"300px"}},{default:(0,o.w5)((()=>[(0,o.Wm)(I,null,{default:(0,o.w5)((()=>[k])),_:1}),(0,o.Wm)(I,{class:"q-pt-none"},{default:(0,o.w5)((()=>[(0,o.Wm)(D,{dense:"",modelValue:x.nuevaclave,"onUpdate:modelValue":a[10]||(a[10]=e=>x.nuevaclave=e),label:"Ingrese nueva clave",autofocus:""},null,8,["modelValue"])])),_:1}),(0,o.Wm)(I,{class:"q-pt-none"},{default:(0,o.w5)((()=>[(0,o._)("div",_,[(0,o.wy)((0,o.Wm)(H,{color:"negative",label:"Cancelar"},null,512),[[R]]),(0,o.Wm)(H,{color:"secondary",label:"Aceptar",onClick:q.cambiarclave},null,8,["onClick"])])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.Wm)(N,{modelValue:x.modalactualizaremail,"onUpdate:modelValue":a[13]||(a[13]=e=>x.modalactualizaremail=e),persistent:""},{default:(0,o.w5)((()=>[(0,o.Wm)(Q,{style:{width:"300px"}},{default:(0,o.w5)((()=>[(0,o.Wm)(I,null,{default:(0,o.w5)((()=>[(0,o._)("div",z,"Actualizar Email "+(0,i.zw)(1===x.idCorreo?"Principal":"Secundario"),1)])),_:1}),(0,o.Wm)(I,{class:"q-pt-none"},{default:(0,o.w5)((()=>[(0,o.Wm)(D,{dense:"",modelValue:x.nuevoemail,"onUpdate:modelValue":a[12]||(a[12]=e=>x.nuevoemail=e),label:"Ingrese nuevo email",autofocus:""},null,8,["modelValue"])])),_:1}),(0,o.Wm)(I,{class:"q-pt-none"},{default:(0,o.w5)((()=>[(0,o._)("div",W,[(0,o.wy)((0,o.Wm)(H,{color:"negative",label:"Cancelar"},null,512),[[R]]),(0,o.Wm)(H,{color:"secondary",label:"Aceptar",onClick:q.cambiaremail},null,8,["onClick"])])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.Wm)(N,{modelValue:x.modalactualizarhora,"onUpdate:modelValue":a[16]||(a[16]=e=>x.modalactualizarhora=e),persistent:""},{default:(0,o.w5)((()=>[(0,o.Wm)(Q,null,{default:(0,o.w5)((()=>[(0,o.Wm)(I,null,{default:(0,o.w5)((()=>[(0,o._)("div",C,"Hora de "+(0,i.zw)(1===x.idHora?"Inicio":"Fin")+" de Sesión",1)])),_:1}),(0,o.Wm)(I,{class:"q-pt-none"},{default:(0,o.w5)((()=>[(0,o.Wm)(P,{modelValue:x.nuevahora,"onUpdate:modelValue":a[14]||(a[14]=e=>x.nuevahora=e),format24h:""},null,8,["modelValue"])])),_:1}),(0,o.Wm)(I,{class:"q-pt-none"},{default:(0,o.w5)((()=>[(0,o._)("div",U,[(0,o.wy)((0,o.Wm)(H,{color:"negative",label:"Cerrar"},null,512),[[R]]),(0,o.Wm)(H,{color:"positive",label:"Limpiar",onClick:a[15]||(a[15]=e=>x.nuevahora=null)}),(0,o.Wm)(H,{color:"secondary",label:"Guardar",onClick:q.cambiarhora},null,8,["onClick"])])])),_:1})])),_:1})])),_:1},8,["modelValue"])])}l(4564);var V=l(1959),q=l(4434),H=l(52),A=l.n(H),D=l(1488),E=l.n(D),O=l(8916),Z=l.n(O);const I=l(5770),M=I.endpoint_path_v2,S={setup(){return{idUpd:(0,V.iH)(""),idHora:(0,V.iH)(1),idCorreo:(0,V.iH)(1),viewdetails:(0,V.iH)(!1),modalactualizarestatus:(0,V.iH)(!1),modalactualizarclave:(0,V.iH)(!1),modalactualizaremail:(0,V.iH)(!1),modalactualizarhora:(0,V.iH)(!1),modalcrear:(0,V.iH)(!1),usuario:(0,V.iH)(""),clave:(0,V.iH)(""),nuevaclave:(0,V.iH)(""),nuevoemail:(0,V.iH)(""),nuevahora:(0,V.iH)(E()().format("HH:mm")),email:(0,V.iH)(""),nombre:(0,V.iH)(""),filter:(0,V.iH)(""),loading:(0,V.iH)(!1),co_rol:sessionStorage.getItem("co_rol"),pagination:{page:1,rowsPerPage:10}}},data(){return{columns:[{name:"name",required:!0,label:"Nombre",align:"left",field:e=>e.name,format:e=>`${e}`,sortable:!0},{name:"razonsocial",align:"left",label:"Razon Social",field:"razonsocial",sortable:!0},{name:"usuario",align:"left",label:"Usuario",field:"usuario",sortable:!0},{name:"rol",label:"Rol",field:"rol",sortable:!0},{name:"horaentrada",label:"Inicio Sesión",field:"horasalida",sortable:!0},{name:"horasalida",label:"Fin Sesión",field:"horasalida",sortable:!0},{name:"email",label:"Email Principal",field:"emailbcc",sortable:!0},{name:"emailrecuperacion",label:"Email Secundario",field:"emailrecuperacion",sortable:!0},{name:"fecharecuperacion",label:"Fecha Recuperación",field:"fecharecuperacion",sortable:!0},{name:"bitacora",label:"Bitácora"},{name:"clave",label:"Clave"},{name:"estatus",label:"Estatus",field:"estatus"}],rows:[],columnsdetails:[{name:"num",align:"center",label:"#",field:"num"},{name:"fecha",align:"center",label:"Fecha",field:"fecha"},{name:"evento",align:"left",label:"Evento",field:"evento"},{name:"observacion",align:"left",label:"Observación",field:"observacion"},{name:"ip",align:"center",label:"IP",field:"ip"},{name:"idusuario",align:"center",label:"Id Usuario",field:"idusuario"},{name:"nombre",align:"left",label:"Nombre Usuario",field:"nombre"}],rowsdetails:[],modelrol:[],optionsrol:[],modelsede:[],optionssede:[]}},methods:{btnOpenUpdHora(e,a){this.idUpd=e.id,this.idHora=a,this.nuevahora=1===a?e.horaentrada:e.horasalida,this.modalactualizarhora=!0},btnOpenUpdEmail(e,a){this.idUpd=e.id,this.idCorreo=a,this.nuevoemail=1===a?e.emailbcc:e.emailrecuperacion,this.modalactualizaremail=!0},btnOpenUpdEstatus(e){this.idUpd=e.id,this.messageActualizar="Activo"===e.estatus?"desactivar":"activar",this.estatusAct=e.estatus,this.modalactualizarestatus=!0},btnOpenUpdClave(e){this.idUpd=e.id,this.modalactualizarclave=!0},actualizarEstatus(){const e={estatus:"Activo"===this.estatusAct?0:1};A().put(M+"usuario/estatus/"+this.idUpd,e).then((async e=>{this.modalactualizarestatus=!1,console.log(e.data),this.listarusuarios()}))},btnviewdetails(e){const a={idusuario:e.id||void 0};A().post(M+"bitacora/listar",a).then((async a=>{const l=a.data.data;console.log(l),this.rowsdetails=[];for(const e in l){const a={};a.num=Number(e)+1,a.evento=l[e].evento,a.idusuario=l[e].idusuario,a.usuario=l[e].usuario,a.nombre=l[e].nombre,a.ip=l[e].ip,a.observacion=l[e].observacion,a.fecha=E()(l[e].fecha).format("DD/MM/YYYY HH:mm:ss"),this.rowsdetails.push(a)}e.id&&(this.viewdetails=!0)})).catch((e=>{q.Z.create("Problemas al listar Detalles bitacora "+e)}))},cambiarclave(){if(this.nuevaclave.length<4)return void q.Z.create("Debe ingresar nueva clave correcta ");const e={nuevaclave:Z()(this.nuevaclave)};A().put(M+"usuario/cambioclave/"+this.idUpd,e).then((async e=>{console.log(e.data),this.modalactualizarclave=!1,this.listarusuarios(),q.Z.create("Calve cambiada en forma correcta")}))},cambiarhora(){const e={nuevahora:this.nuevahora,accion:this.idHora};A().put(M+"usuario/cambiohora/"+this.idUpd,e).then((async e=>{this.modalactualizarhora=!1,this.listarusuarios(),q.Z.create("Hora cambiada en forma correcta")}))},cambiaremail(){if(this.nuevoemail.length<4)return void q.Z.create("Debe ingresar nuevo email ");const e={nuevoemail:this.nuevoemail,accion:this.idCorreo};A().put(M+"usuario/cambioemail/"+this.idUpd,e).then((async e=>{this.modalactualizaremail=!1,this.listarusuarios(),q.Z.create("Email cambiado en forma correcta")}))},crearusuario(){this.modalcrear=!1;const e={usuario:this.usuario,clave:Z()(this.clave),nombre:this.nombre,estatus:1,idrol:Number(this.modelrol.cod),idserviciosmasivo:Number(this.modelsede?.cod)||null};A().post(M+"usuario",e).then((async e=>{console.log(e.data),this.usuario="",this.clave="",this.nombre="",this.modelrol=[],this.modelsede=[],this.listarusuarios()}))},listarusuarios(){A().get(M+"usuario").then((async e=>{const a=e.data.resp;this.rows=[];for(const l in a){const e={};e.id=a[l].id,e.name=a[l].nombre,e.razonsocial=a[l].razonsocial,e.usuario=a[l].usuario,e.clave=a[l].clave,e.rol=a[l].rol,e.idrol=a[l].idrol,e.feultacceso=a[l].feultacceso,e.emailbcc=a[l].emailbcc,e.emailrecuperacion=a[l].emailrecuperacion,e.horaentrada=a[l].horaentrada,e.horasalida=a[l].horasalida,e.fecharecuperacion=a[l].fecharecuperacion?E()(a[l].fecharecuperacion).format("DD/MM/YYYY HH:mm:ss"):"",e.estatus="1"===a[l].estatus?"Activo":"Inactivo","1"===this.co_rol?this.rows.push(e):"2"!==this.co_rol||"2"!==a[l].idrol&&"4"!==a[l].idrol||this.rows.push(e)}})).catch((e=>{q.Z.create("Problemas al listar Usuarios "+e)}))},listarroles(){A().get(M+"usuario/roles").then((async e=>{const a=e.data.resp;this.optionsrol=[];for(const l in a){const e={};e.cod=a[l].id,e.name=a[l].rol,"1"===a[l].id||"3"===a[l].id||"2"===a[l].id||"5"===a[l].id?"1"===this.co_rol&&this.optionsrol.push(e):this.optionsrol.push(e)}})).catch((e=>{q.Z.create("Problemas al listar Roles "+e)}))},listarsedes(){A().get(M+"sede").then((async e=>{const a=e.data.data;this.optionssede=[];for(const l in a){const e={};e.cod=a[l].id,e.name=a[l].razonsocial,this.optionssede.push(e)}})).catch((e=>{q.Z.create("Problemas al listar Sedes "+e)}))}},mounted(){"1"!==this.co_rol&&"2"!==this.co_rol&&this.$router.push("/erroracceso"),this.listarusuarios(),this.listarroles(),this.listarsedes()}};var Q=l(4260),N=l(2165),P=l(4993),R=l(4842),T=l(4554),Y=l(3884),F=l(9721),B=l(6778),L=l(151),$=l(5589),G=l(8516),J=l(9367),K=l(5990),X=l(677),ee=l(7518),ae=l.n(ee);const le=(0,Q.Z)(S,[["render",x]]),oe=le;ae()(S,"components",{QBtn:N.Z,QTable:P.Z,QInput:R.Z,QIcon:T.Z,QTd:Y.Z,QBadge:F.Z,QDialog:B.Z,QCard:L.Z,QCardSection:$.Z,QSelect:G.Z,QCardActions:J.Z,QTime:K.Z}),ae()(S,"directives",{ClosePopup:X.Z})},6700:(e,a,l)=>{var o={"./af":5809,"./af.js":5809,"./ar":6069,"./ar-dz":481,"./ar-dz.js":481,"./ar-kw":3994,"./ar-kw.js":3994,"./ar-ly":3312,"./ar-ly.js":3312,"./ar-ma":239,"./ar-ma.js":239,"./ar-ps":7916,"./ar-ps.js":7916,"./ar-sa":1863,"./ar-sa.js":1863,"./ar-tn":9607,"./ar-tn.js":9607,"./ar.js":6069,"./az":9281,"./az.js":9281,"./be":9945,"./be.js":9945,"./bg":9384,"./bg.js":9384,"./bm":1476,"./bm.js":1476,"./bn":3345,"./bn-bd":216,"./bn-bd.js":216,"./bn.js":3345,"./bo":1713,"./bo.js":1713,"./br":9655,"./br.js":9655,"./bs":7296,"./bs.js":7296,"./ca":3049,"./ca.js":3049,"./cs":2722,"./cs.js":2722,"./cv":8039,"./cv.js":8039,"./cy":5563,"./cy.js":5563,"./da":1960,"./da.js":1960,"./de":7533,"./de-at":6674,"./de-at.js":6674,"./de-ch":7732,"./de-ch.js":7732,"./de.js":7533,"./dv":8343,"./dv.js":8343,"./el":7004,"./el.js":7004,"./en-au":2517,"./en-au.js":2517,"./en-ca":4929,"./en-ca.js":4929,"./en-gb":9722,"./en-gb.js":9722,"./en-ie":6923,"./en-ie.js":6923,"./en-il":8050,"./en-il.js":8050,"./en-in":9624,"./en-in.js":9624,"./en-nz":540,"./en-nz.js":540,"./en-sg":4375,"./en-sg.js":4375,"./eo":40,"./eo.js":40,"./es":9720,"./es-do":5595,"./es-do.js":5595,"./es-mx":180,"./es-mx.js":180,"./es-us":1563,"./es-us.js":1563,"./es.js":9720,"./et":9217,"./et.js":9217,"./eu":9474,"./eu.js":9474,"./fa":5243,"./fa.js":5243,"./fi":7645,"./fi.js":7645,"./fil":5350,"./fil.js":5350,"./fo":5622,"./fo.js":5622,"./fr":1467,"./fr-ca":3439,"./fr-ca.js":3439,"./fr-ch":4335,"./fr-ch.js":4335,"./fr.js":1467,"./fy":6026,"./fy.js":6026,"./ga":2969,"./ga.js":2969,"./gd":1347,"./gd.js":1347,"./gl":1085,"./gl.js":1085,"./gom-deva":904,"./gom-deva.js":904,"./gom-latn":9597,"./gom-latn.js":9597,"./gu":8705,"./gu.js":8705,"./he":9128,"./he.js":9128,"./hi":2821,"./hi.js":2821,"./hr":9002,"./hr.js":9002,"./hu":4814,"./hu.js":4814,"./hy-am":658,"./hy-am.js":658,"./id":9344,"./id.js":9344,"./is":8204,"./is.js":8204,"./it":376,"./it-ch":1549,"./it-ch.js":1549,"./it.js":376,"./ja":9293,"./ja.js":9293,"./jv":6401,"./jv.js":6401,"./ka":482,"./ka.js":482,"./kk":7329,"./kk.js":7329,"./km":4241,"./km.js":4241,"./kn":3566,"./kn.js":3566,"./ko":2742,"./ko.js":2742,"./ku":2915,"./ku-kmr":2346,"./ku-kmr.js":2346,"./ku.js":2915,"./ky":6846,"./ky.js":6846,"./lb":4959,"./lb.js":4959,"./lo":2188,"./lo.js":2188,"./lt":8967,"./lt.js":8967,"./lv":1245,"./lv.js":1245,"./me":751,"./me.js":751,"./mi":7501,"./mi.js":7501,"./mk":1643,"./mk.js":1643,"./ml":5597,"./ml.js":5597,"./mn":7893,"./mn.js":7893,"./mr":9065,"./mr.js":9065,"./ms":4703,"./ms-my":4645,"./ms-my.js":4645,"./ms.js":4703,"./mt":4365,"./mt.js":4365,"./my":3788,"./my.js":3788,"./nb":7357,"./nb.js":7357,"./ne":9109,"./ne.js":9109,"./nl":3746,"./nl-be":1985,"./nl-be.js":1985,"./nl.js":3746,"./nn":7175,"./nn.js":7175,"./oc-lnc":566,"./oc-lnc.js":566,"./pa-in":2733,"./pa-in.js":2733,"./pl":182,"./pl.js":182,"./pt":505,"./pt-br":7839,"./pt-br.js":7839,"./pt.js":505,"./ro":9578,"./ro.js":9578,"./ru":2328,"./ru.js":2328,"./sd":641,"./sd.js":641,"./se":1758,"./se.js":1758,"./si":6680,"./si.js":6680,"./sk":5016,"./sk.js":5016,"./sl":7424,"./sl.js":7424,"./sq":8635,"./sq.js":8635,"./sr":9038,"./sr-cyrl":3716,"./sr-cyrl.js":3716,"./sr.js":9038,"./ss":4771,"./ss.js":4771,"./sv":3517,"./sv.js":3517,"./sw":9419,"./sw.js":9419,"./ta":5959,"./ta.js":5959,"./te":1739,"./te.js":1739,"./tet":2264,"./tet.js":2264,"./tg":4792,"./tg.js":4792,"./th":8328,"./th.js":8328,"./tk":702,"./tk.js":702,"./tl-ph":7814,"./tl-ph.js":7814,"./tlh":797,"./tlh.js":797,"./tr":6691,"./tr.js":6691,"./tzl":6891,"./tzl.js":6891,"./tzm":6362,"./tzm-latn":7855,"./tzm-latn.js":7855,"./tzm.js":6362,"./ug-cn":7606,"./ug-cn.js":7606,"./uk":513,"./uk.js":513,"./ur":3803,"./ur.js":3803,"./uz":344,"./uz-latn":8957,"./uz-latn.js":8957,"./uz.js":344,"./vi":3,"./vi.js":3,"./x-pseudo":8842,"./x-pseudo.js":8842,"./yo":2083,"./yo.js":2083,"./zh-cn":4536,"./zh-cn.js":4536,"./zh-hk":2475,"./zh-hk.js":2475,"./zh-mo":7593,"./zh-mo.js":7593,"./zh-tw":4746,"./zh-tw.js":4746};function s(e){var a=i(e);return l(a)}function i(e){if(!l.o(o,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return o[e]}s.keys=function(){return Object.keys(o)},s.resolve=i,e.exports=s,s.id=6700}}]);