(globalThis["webpackChunksit_frontend"]=globalThis["webpackChunksit_frontend"]||[]).push([[433],{5770:e=>{e.exports={endpoint_path_v2:"https://bck-test.factura-smart.com/",version:"1.0.2"}},1695:(e,l,a)=>{"use strict";a.r(l),a.d(l,{default:()=>te});var o=a(3673),t=a(8880),s=a(2323);const i={class:"my-font q-pa-md"},n=(0,o._)("div",{class:"text-h6"},"Cliente Emisor",-1),r=["src","width","onClick"],d=(0,o._)("div",{class:"text-h6"},"Cliente Emisor",-1),c={style:{"text-align":"center"}},u={style:{"text-align":"center"}},m={class:"q-ml-sm"},p={style:{}},h={class:"q-ml-sm"},f=(0,o._)("div",{class:"text-h6"},"Cliente Emisor",-1),g={class:"row"},b={class:"row"},w={class:"row"},j={class:"row"},v={style:{"text-align":"center"}},y={style:{"text-align":"center"}},z={style:{"text-align":"center"}},k=(0,o._)("div",{class:"text-h6",style:{"text-align":"center"}},"Actualizar Estatus",-1),_={style:{"text-align":"center"}},V=(0,o._)("div",{class:"text-h6",style:{"text-align":"center"}},"Actualizar Logo",-1),W={style:{"text-align":"center"}};function U(e,l,a,U,C,x){const q=(0,o.up)("q-btn"),I=(0,o.up)("q-space"),S=(0,o.up)("q-icon"),A=(0,o.up)("q-input"),Z=(0,o.up)("q-td"),H=(0,o.up)("q-table"),E=(0,o.up)("q-card-section"),D=(0,o.up)("q-radio"),L=(0,o.up)("q-form"),O=(0,o.up)("q-card"),Q=(0,o.up)("q-dialog"),T=(0,o.up)("q-card-actions"),F=(0,o.up)("q-th"),N=(0,o.up)("q-tr"),R=(0,o.up)("q-select"),M=(0,o.up)("q-uploader"),P=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.iD)("div",i,[n,(0,o.Wm)(H,{title:"Secciones",dense:"",rows:C.rows,columns:C.columns,"row-key":"name",filter:U.filter,pagination:U.pagination,"onUpdate:pagination":l[1]||(l[1]=e=>U.pagination=e)},{top:(0,o.w5)((()=>["1"===U.co_rol?((0,o.wg)(),(0,o.j4)(q,{key:0,color:"primary",disabled:C.btndisable,label:"Crear emisor",onClick:x.openCrear},null,8,["disabled","onClick"])):(0,o.kq)("",!0),(0,o.Wm)(I),(0,o.Wm)(A,{borderless:"",dense:"",debounce:"300",color:"primary",modelValue:U.filter,"onUpdate:modelValue":l[0]||(l[0]=e=>U.filter=e)},{append:(0,o.w5)((()=>[(0,o.Wm)(S,{name:"search"})])),_:1},8,["modelValue"])])),"body-cell-logo":(0,o.w5)((e=>[(0,o.Wm)(Z,{props:e},{default:(0,o.w5)((()=>[(0,o._)("div",null,[(0,o._)("img",{src:e.row.logo,onerror:"this.src='default.svg'",width:e.row.width,style:{"border-radius":"50%",cursor:"pointer"},onClick:(0,t.iM)((l=>x.openLogo(e.row)),["stop"])},null,8,r)])])),_:2},1032,["props"])])),"body-cell-direccion":(0,o.w5)((e=>[(0,o.Wm)(Z,{props:e},{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(e.row.direccion),1)])),_:2},1032,["props"])])),"body-cell-tokenservicios":(0,o.w5)((e=>[(0,o.Wm)(Z,{props:e},{default:(0,o.w5)((()=>[(0,o._)("div",null,[(0,o.Wm)(q,{icon:"visibility",onClick:(0,t.iM)((l=>x.btnviewtoken(e.row)),["stop"]),dense:"",flat:""},null,8,["onClick"])])])),_:2},1032,["props"])])),"body-cell-numeracionactual":(0,o.w5)((e=>[(0,o.Wm)(Z,{props:e},{default:(0,o.w5)((()=>[(0,o._)("div",null,[(0,o.Wm)(q,{icon:"list_alt",onClick:(0,t.iM)((l=>x.btnviewdetails(e.row)),["stop"]),dense:"",flat:""},null,8,["onClick"])])])),_:2},1032,["props"])])),"body-cell-edit":(0,o.w5)((e=>[(0,o.Wm)(Z,{props:e},{default:(0,o.w5)((()=>[(0,o._)("div",null,[(0,o.Wm)(q,{color:"secondary",icon:"edit",onClick:(0,t.iM)((l=>x.btnOpenUpd(e.row)),["stop"]),dense:""},null,8,["onClick"])])])),_:2},1032,["props"])])),"body-cell-estatus":(0,o.w5)((e=>[(0,o.Wm)(Z,{props:e},{default:(0,o.w5)((()=>[(0,o._)("div",null,[(0,o.Wm)(q,{color:"Activo"===e.row.estatus?"primary":"negative",icon:"Activo"===e.row.estatus?"toggle_on":"toggle_off",onClick:(0,t.iM)((l=>x.btnOpenUpdEstatus(e.row)),["stop"]),dense:""},null,8,["color","icon","onClick"])])])),_:2},1032,["props"])])),_:1},8,["rows","columns","filter","pagination"]),(0,o.Wm)(Q,{modelValue:U.modalcrear,"onUpdate:modelValue":l[10]||(l[10]=e=>U.modalcrear=e),persistent:""},{default:(0,o.w5)((()=>[(0,o.Wm)(O,{style:{"min-width":"350px"}},{default:(0,o.w5)((()=>[(0,o.Wm)(E,null,{default:(0,o.w5)((()=>[d])),_:1}),(0,o.Wm)(E,{class:"q-pt-none"},{default:(0,o.w5)((()=>[(0,o.Wm)(L,{onSubmit:(0,t.iM)(x.crear,["prevent"]),class:"q-gutter-md"},{default:(0,o.w5)((()=>[(0,o.Wm)(A,{dense:"",label:"Ingrese RIF",modelValue:U.rif,"onUpdate:modelValue":l[2]||(l[2]=e=>U.rif=e),autofocus:"",rules:[e=>e.length>0||"Ingresar RIF"]},null,8,["modelValue","rules"]),(0,o.Wm)(A,{dense:"",label:"Ingrese Razón Social",modelValue:U.razonsocial,"onUpdate:modelValue":l[3]||(l[3]=e=>U.razonsocial=e),autofocus:"",rules:[e=>e.length>0||"Ingresar RAZON SOCIAL"]},null,8,["modelValue","rules"]),(0,o.Wm)(A,{dense:"",label:"Ingrese Dirección",modelValue:U.direccion,"onUpdate:modelValue":l[4]||(l[4]=e=>U.direccion=e),rules:[e=>e.length>0||"Ingresar DIRECCIÓN"]},null,8,["modelValue","rules"]),(0,o.Wm)(A,{dense:"",modelValue:U.email,"onUpdate:modelValue":l[5]||(l[5]=e=>U.email=e),label:"Ingrese Email",rules:[e=>e.length>0||"Ingresar EMAIL"]},null,8,["modelValue","rules"]),(0,o.Wm)(A,{dense:"",modelValue:U.telefono,"onUpdate:modelValue":l[6]||(l[6]=e=>U.telefono=e),label:"Ingrese Teléfono de contacto",rules:[e=>e.length>0||"Ingresar TELÉFONO"]},null,8,["modelValue","rules"]),(0,o.Wm)(A,{dense:"",modelValue:U.sitioweb,"onUpdate:modelValue":l[7]||(l[7]=e=>U.sitioweb=e),label:"Ingrese Sitio Web"},null,8,["modelValue"]),(0,o._)("div",c,[(0,o.Wm)(D,{modelValue:U.shape,"onUpdate:modelValue":l[8]||(l[8]=e=>U.shape=e),val:"0",label:"Sin envío de correo"},null,8,["modelValue"]),(0,o.Wm)(D,{modelValue:U.shape,"onUpdate:modelValue":l[9]||(l[9]=e=>U.shape=e),val:"1",label:"Con envío de correo"},null,8,["modelValue"])]),(0,o._)("div",u,[(0,o.wy)((0,o.Wm)(q,{flat:"",label:"Cancel"},null,512),[[P]]),(0,o.Wm)(q,{color:"primary",label:"Aceptar",type:"submit"})])])),_:1},8,["onSubmit"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.Wm)(Q,{modelValue:U.viewtoken,"onUpdate:modelValue":l[11]||(l[11]=e=>U.viewtoken=e),persistent:""},{default:(0,o.w5)((()=>[(0,o.Wm)(O,{style:{width:"auto"}},{default:(0,o.w5)((()=>[(0,o.Wm)(E,{class:"row items-center"},{default:(0,o.w5)((()=>[(0,o._)("span",m,"Token del Cliente Emisor "+(0,s.zw)(U.razonsocialtitulo+" - "+U.riftitulo),1)])),_:1}),(0,o.Wm)(E,{class:"row items-center",style:{"word-break":"break-all"}},{default:(0,o.w5)((()=>[(0,o._)("div",p,(0,s.zw)(U.tokenservicios),1)])),_:1}),(0,o.Wm)(T,{align:"right"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(q,{flat:"",label:"Aceptar",color:"primary"},null,512),[[P]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.Wm)(Q,{modelValue:U.viewdetails,"onUpdate:modelValue":l[12]||(l[12]=e=>U.viewdetails=e),persistent:""},{default:(0,o.w5)((()=>[(0,o.Wm)(O,{style:{width:"fit-content","max-width":"fit-content"}},{default:(0,o.w5)((()=>[(0,o.Wm)(E,{class:"row items-center"},{default:(0,o.w5)((()=>[(0,o._)("span",h,"Numeración actual de "+(0,s.zw)(U.razonsocialtitulo+" - "+U.riftitulo),1)])),_:1}),(0,o.Wm)(E,{class:"row items-center",style:{"word-break":"break-all","justify-content":"center"}},{default:(0,o.w5)((()=>[(0,o.Wm)(H,{dense:"",rows:C.rowsdetails,columns:C.columnsdetails,"row-key":"name","hide-pagination":""},{header:(0,o.w5)((e=>[(0,o.Wm)(N,{props:e},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.cols,(l=>((0,o.wg)(),(0,o.j4)(F,{key:l.name,props:e,class:"text-italic text-blue",style:{"font-size":"20px"}},{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(l.label),1)])),_:2},1032,["props"])))),128))])),_:2},1032,["props"])])),_:1},8,["rows","columns"])])),_:1}),(0,o.Wm)(E,{class:"row items-center",style:{"word-break":"break-all","justify-content":"center"}},{default:(0,o.w5)((()=>[(0,o.Wm)(H,{dense:"",rows:C.rowslotes,columns:C.columnslotes,"row-key":"name","hide-pagination":""},{header:(0,o.w5)((e=>[(0,o.Wm)(N,{props:e},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.cols,(l=>((0,o.wg)(),(0,o.j4)(F,{key:l.name,props:e,class:"text-italic text-blue",style:{"font-size":"20px"}},{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(l.label),1)])),_:2},1032,["props"])))),128))])),_:2},1032,["props"])])),_:1},8,["rows","columns"])])),_:1}),(0,o.Wm)(T,{align:"right"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(q,{label:"Aceptar",color:"primary"},null,512),[[P]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.Wm)(Q,{modelValue:U.modalactualizar,"onUpdate:modelValue":l[25]||(l[25]=e=>U.modalactualizar=e),persistent:""},{default:(0,o.w5)((()=>[(0,o.Wm)(O,{style:{width:"560px"}},{default:(0,o.w5)((()=>[(0,o.Wm)(E,null,{default:(0,o.w5)((()=>[f])),_:1}),(0,o.Wm)(E,{class:"q-pt-none"},{default:(0,o.w5)((()=>[(0,o.Wm)(L,{onSubmit:(0,t.iM)(x.actualizar,["prevent"]),class:"q-gutter-md"},{default:(0,o.w5)((()=>[(0,o._)("div",g,[(0,o.Wm)(A,{class:"col-6 q-pa-sm",dense:"",label:"RIF",modelValue:U.rif,"onUpdate:modelValue":l[13]||(l[13]=e=>U.rif=e),autofocus:"",rules:[e=>e.length>0||"Ingresar RIF"]},null,8,["modelValue","rules"]),(0,o.Wm)(A,{class:"col-6 q-pa-sm",dense:"",label:"Razón Social",modelValue:U.razonsocial,"onUpdate:modelValue":l[14]||(l[14]=e=>U.razonsocial=e),autofocus:"",rules:[e=>e.length>0||"Ingresar RAZON SOCIAL"]},null,8,["modelValue","rules"])]),(0,o._)("div",b,[(0,o.Wm)(A,{class:"col q-pa-sm",dense:"",label:"Dirección",modelValue:U.direccion,"onUpdate:modelValue":l[15]||(l[15]=e=>U.direccion=e),rules:[e=>e.length>0||"Ingresar DIRECCIÓN"]},null,8,["modelValue","rules"])]),(0,o._)("div",w,[(0,o.Wm)(A,{dense:"",class:"col q-pa-sm",modelValue:U.email,"onUpdate:modelValue":l[16]||(l[16]=e=>U.email=e),label:"Email",rules:[e=>e.length>0||"Ingresar EMAIL"]},null,8,["modelValue","rules"])]),(0,o._)("div",j,[(0,o.Wm)(A,{dense:"",class:"col-6 q-pa-sm",modelValue:U.telefono,"onUpdate:modelValue":l[17]||(l[17]=e=>U.telefono=e),label:"Teléfono de contacto",rules:[e=>e.length>0||"Ingresar TELÉFONO"]},null,8,["modelValue","rules"]),(0,o.Wm)(A,{dense:"",class:"col-6 q-pa-sm",modelValue:U.sitioweb,"onUpdate:modelValue":l[18]||(l[18]=e=>U.sitioweb=e),label:"Sitio Web"},null,8,["modelValue"])]),(0,o.Wm)(R,{dense:"","options-dense":"",modelValue:C.modelcodes,"onUpdate:modelValue":l[19]||(l[19]=e=>C.modelcodes=e),options:C.optionscodes,"option-label":"name","option-value":"cod",label:"Código comercial"},null,8,["modelValue","options"]),(0,o._)("div",v,[(0,o.Wm)(D,{modelValue:U.shape,"onUpdate:modelValue":l[20]||(l[20]=e=>U.shape=e),val:"0",label:"Sin envío de correo"},null,8,["modelValue"]),(0,o.Wm)(D,{modelValue:U.shape,"onUpdate:modelValue":l[21]||(l[21]=e=>U.shape=e),val:"1",label:"Con envío de correo"},null,8,["modelValue"])]),(0,o._)("div",y,[(0,o.Wm)(D,{modelValue:U.shapeinterno,"onUpdate:modelValue":l[22]||(l[22]=e=>U.shapeinterno=e),val:"0",label:"Sin validar interno"},null,8,["modelValue"]),(0,o.Wm)(D,{modelValue:U.shapeinterno,"onUpdate:modelValue":l[23]||(l[23]=e=>U.shapeinterno=e),val:"1",label:"Sin repetir"},null,8,["modelValue"]),(0,o.Wm)(D,{modelValue:U.shapeinterno,"onUpdate:modelValue":l[24]||(l[24]=e=>U.shapeinterno=e),val:"2",label:"Validar consecutivo"},null,8,["modelValue"])]),(0,o._)("div",z,[(0,o.wy)((0,o.Wm)(q,{flat:"",label:"Cancel"},null,512),[[P]]),(0,o.Wm)(q,{color:"primary",label:"Aceptar",type:"submit"})])])),_:1},8,["onSubmit"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.Wm)(Q,{modelValue:U.modalactualizarestatus,"onUpdate:modelValue":l[26]||(l[26]=e=>U.modalactualizarestatus=e),persistent:""},{default:(0,o.w5)((()=>[(0,o.Wm)(O,null,{default:(0,o.w5)((()=>[(0,o.Wm)(E,null,{default:(0,o.w5)((()=>[k])),_:1}),(0,o.Wm)(E,{class:"q-pt-none"},{default:(0,o.w5)((()=>[(0,o._)("div",null," ¿Desea "+(0,s.zw)(e.messageActualizar)+" este cliente emisor? ",1)])),_:1}),(0,o.Wm)(E,{class:"q-pt-none"},{default:(0,o.w5)((()=>[(0,o._)("div",_,[(0,o.wy)((0,o.Wm)(q,{flat:"",label:"Cancel"},null,512),[[P]]),(0,o.Wm)(q,{color:"primary",label:"Aceptar",onClick:x.actualizarEstatus},null,8,["onClick"])])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.Wm)(Q,{modelValue:U.modallogo,"onUpdate:modelValue":l[27]||(l[27]=e=>U.modallogo=e),persistent:""},{default:(0,o.w5)((()=>[(0,o.Wm)(O,null,{default:(0,o.w5)((()=>[(0,o.Wm)(E,null,{default:(0,o.w5)((()=>[V])),_:1}),(0,o.Wm)(E,{class:"q-pt-none"},{default:(0,o.w5)((()=>[(0,o.Wm)(M,{label:"Upload",factory:x.factoryFn,style:{"max-width":"300px"},onUploaded:x.closeLogoUploader},null,8,["factory","onUploaded"])])),_:1}),(0,o.Wm)(E,{class:"q-pt-none"},{default:(0,o.w5)((()=>[(0,o._)("div",W,[(0,o.wy)((0,o.Wm)(q,{flat:"",label:"Cancelar"},null,512),[[P]])])])),_:1})])),_:1})])),_:1},8,["modelValue"])])}a(4564);var C=a(1959),x=a(4434),q=a(1488),I=a.n(q),S=a(52),A=a.n(S);const Z=a(5770),H=Z.endpoint_path_v2,E={setup(){return{modalcrear:(0,C.iH)(!1),modalactualizar:(0,C.iH)(!1),modalactualizarestatus:(0,C.iH)(!1),modallogo:(0,C.iH)(!1),viewtoken:(0,C.iH)(!1),viewdetails:(0,C.iH)(!1),tokenservicios:(0,C.iH)(""),rif:(0,C.iH)(""),razonsocial:(0,C.iH)(""),riftitulo:(0,C.iH)(""),razonsocialtitulo:(0,C.iH)(""),email:(0,C.iH)(""),direccion:(0,C.iH)(""),telefono:(0,C.iH)(""),cantidad:(0,C.iH)(""),sitioweb:(0,C.iH)(""),shape:(0,C.iH)("0"),shapeinterno:(0,C.iH)("0"),filter:(0,C.iH)(""),co_rol:sessionStorage.getItem("co_rol"),loading:(0,C.iH)(!1),pagination:(0,C.iH)({sortBy:"cod",descending:!1,page:1,rowsPerPage:15})}},data(){return{columns:[{name:"cod",required:!0,label:"#",align:"left",field:e=>e.cod,format:e=>`${e}`,sortable:!0},{name:"logo",align:"center",label:"Logo",field:"logo"},{name:"rif",align:"center",label:"RIF",field:"rif",sortable:!0},{name:"razonsocial",align:"center",label:"Razón social",field:"razonsocial",sortable:!0},{name:"direccion",label:"Dirección",field:"direccion",sortable:!0,align:"left",style:"max-width: 300px;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;"},{name:"email",label:"Correo electrónico",field:"email",sortable:!0},{name:"telefono",label:"Teléfono contacto",field:"telefono",sortable:!0},{name:"codigocomercial",label:"Código comercial",field:"codigocomercial",sortable:!0},{name:"plantilla",label:"Plantilla",field:"plantilla"},{name:"tokenservicios",label:"Token",field:"tokenservicios",sortable:!0},{name:"numeracionactual",label:"Numeración actual",field:"numeracionactual",sortable:!0},{name:"enviocorreo",label:"Envio correo",field:"enviocorreo",sortable:!0},{name:"validarinterno",label:"Validar interno",field:"validarinterno",sortable:!0},{name:"estatus",label:"Estatus",field:"estatus"},{name:"edit",label:"Editar",field:"edit"}],rows:[],columnsdetails:[{name:"identificador",align:"center",label:"Identificador",field:"identificador",style:"font-size:20px"},{name:"corelativo",align:"center",label:"Correlativo  actual",field:"corelativo",style:"font-size:20px"}],rowsdetails:[],columnslotes:[{name:"lote",align:"center",label:"Lote",field:"lote",style:"font-size:20px"},{name:"fecha",align:"center",label:"Fecha",field:"fecha",style:"font-size:20px"},{name:"cantidad",align:"center",label:"Adquiridos",field:"cantidad",style:"font-size:20px"},{name:"utilizado",align:"center",label:"Utilizados",field:"utilizado",style:"font-size:20px"},{name:"inicia",align:"center",label:"Inicia",field:"inicia",style:"font-size:20px"},{name:"termina",align:"center",label:"Termina",field:"termina",style:"font-size:20px"},{name:"disponible",align:"center",label:"Disponibles",field:"disponible",style:"font-size:20px"}],rowslotes:[],optionscodes:[],modelcodes:[],btndisable:!0}},methods:{uploadFile(e,l){const a=this.$refs.files.files.concat(e),o=new FormData;for(let t=0;t<a.length-1;t++){const e=a[t];o.append("files["+t+"]",e)}o.append("caption",this.caption),this.$axios.post(this.getUrl(),o).then((e=>{this.loading=!1,e.data.error&&this.$q.notify({message:e.data.message,type:"negative",color:"negative",icon:"fas fa-exclamation-triangle"})}),(e=>{}))},factoryFn(e){return new Promise(((e,l)=>{e({url:this.getUrl(),method:"POST"})}))},getUrl(){return`${H}imagen/uploadimg/${this.rifUpd}`},openLogo(e){this.rifUpd=e.rif,this.modallogo=!0},closeLogoUploader:function(e){x.Z.create(e.xhr.response);const l=this;setTimeout((function(){l.cerrarLogo()}),3e3)},cerrarLogo(){this.modallogo=!1,this.$router.go(0)},openCrear(){this.limpiar(),this.modalcrear=!0},btnviewtoken(e){this.razonsocialtitulo=e.razonsocial,this.riftitulo=e.rif,this.tokenservicios=e.tokenservicios,this.viewtoken=!0},btnOpenUpdEstatus(e){this.idUpd=e.cod,this.messageActualizar="Activo"===e.estatus?"desactivar":"activar",this.estatusAct=e.estatus,this.modalactualizarestatus=!0},btnOpenUpd(e){this.idUpd=e.cod,this.rif=e.rif,this.razonsocial=e.razonsocial,this.direccion=e.direccion,this.email=e.email,this.telefono=e.telefono,this.cantidad=e.asignados,this.sitioweb=e.sitioweb,this.shape="Si"===e.enviocorreo?"1":"0",this.shapeinterno="Sin validar"===e.validarinterno?"0":"Sin repetidos"===e.validarinterno?"1":"2",this.modalactualizar=!0},btnviewdetails(e){this.razonsocialtitulo=e.razonsocial,this.riftitulo=e.rif,A().get(H+"sede/"+e.cod).then((async e=>{console.log(e.data);const l=e.data;this.rowsdetails=[],this.rowslotes=[];const a={};a.identificador=l.identificador.toString().padStart(2,"0"),a.corelativo=l.corelativo.toString().padStart(8,"0"),this.rowsdetails.push(a);for(const o in l.data){const e=l.data[o],a={};a.lote=e.id,a.fecha=I()(e.fecha).format("DD/MM/YYYY"),a.cantidad=e.cantidad,a.inicia=e.inicia,a.termina=e.termina,a.utilizado=e.utilizado,a.disponible=Number(e.cantidad)-Number(e.utilizado),this.rowslotes.push(a)}})).catch((e=>{x.Z.create("Problemas al listar Detalles corelativo "+e)})),this.viewdetails=!0},limpiar(){console.log("Limpiando"),this.rif="",this.razonsocial="",this.direccion="",this.email="",this.telefono="",this.sitioweb=""},crear(){if(0===this.rif.length)return;if(0===this.razonsocial.length)return;if(0===this.direccion.length)return;if(0===this.email.length)return;if(0===this.telefono.length)return;const e={rif:this.rif,razonsocial:this.razonsocial,direccion:this.direccion,email:this.email,telefono:this.telefono,asignados:0,sitioweb:this.sitioweb,enviocorreo:this.shape};console.log(e),A().post(H+"sede",e).then((async e=>{this.modalcrear=!1,console.log(e.data),this.limpiar(),this.listar()}))},actualizar(){if(0===this.rif.length)return;if(0===this.razonsocial.length)return;if(0===this.direccion.length)return;if(0===this.email.length)return;if(0===this.telefono.length)return;const e={rif:this.rif,razonsocial:this.razonsocial,direccion:this.direccion,email:this.email,telefono:this.telefono,sitioweb:this.sitioweb,enviocorreo:this.shape,idcodigocomercial:Number(this.modelcodes.cod),validarinterno:this.shapeinterno};A().put(H+"sede/"+this.idUpd,e).then((async e=>{this.modalactualizar=!1,console.log(e.data),this.limpiar(),this.listar()}))},actualizarEstatus(){const e={estatus:"Activo"===this.estatusAct?0:1};A().put(H+"sede/estatus/"+this.idUpd,e).then((async e=>{this.modalactualizarestatus=!1,console.log(e.data),this.listar()}))},listar(){this.btndisable=!1,A().get(H+"sede").then((async e=>{console.log(e.data);const l=e.data.data;this.rows=[];for(const a in l){const e={};e.cod=l[a].id,e.rif=l[a].rif,e.logo=H+"imagen/"+l[a].rif+".png",console.log(e.logo),e.width=40,e.razonsocial=l[a].razonsocial,e.direccion=l[a].direccion,e.email=l[a].email,e.telefono=l[a].telefono,e.sitioweb=l[a].sitioweb,e.codigocomercial=l[a].codigocomercial,e.plantilla=l[a].banner,e.tokenservicios=l[a].tokenservicios,e.estatus="1"===l[a].estatus?"Activo":"Inactivo",e.enviocorreo="1"===l[a].enviocorreo?"Si":"No",e.validarinterno="1"===l[a].validarinterno?"Sin repetidos":"2"===l[a].validarinterno?"Validar consecutivo":"Sin validar",e.asignados=l[a].asignados||"",this.rows.push(e)}console.log(this.rows)})).catch((e=>{x.Z.create("Problemas al listar Sedes "+e)}))},getCodes(){A().get(H+"sede/codes").then((async e=>{const l=e.data.data;this.optionscodes=[];for(const a in l){const e={};e.cod=l[a].id,e.name=l[a].codigocomercial+"-"+l[a].descripcion,this.optionscodes.push(e)}console.log(this.optionscodes)})).catch((e=>{x.Z.create("Problemas al listar Codigos comerciales "+e)}))}},mounted(){this.listar(),this.getCodes()}};var D=a(4260),L=a(4993),O=a(8240),Q=a(2025),T=a(4842),F=a(4554),N=a(3884),R=a(6778),M=a(151),P=a(5589),$=a(8689),Y=a(7991),B=a(9367),K=a(8186),G=a(2414),J=a(8516),X=a(1745),ee=a(677),le=a(7518),ae=a.n(le);const oe=(0,D.Z)(E,[["render",U]]),te=oe;ae()(E,"components",{QTable:L.Z,QBtn:O.Z,QSpace:Q.Z,QInput:T.Z,QIcon:F.Z,QTd:N.Z,QDialog:R.Z,QCard:M.Z,QCardSection:P.Z,QForm:$.Z,QRadio:Y.Z,QCardActions:B.Z,QTr:K.Z,QTh:G.Z,QSelect:J.Z,QUploader:X.Z}),ae()(E,"directives",{ClosePopup:ee.Z})},6700:(e,l,a)=>{var o={"./af":5809,"./af.js":5809,"./ar":6069,"./ar-dz":481,"./ar-dz.js":481,"./ar-kw":3994,"./ar-kw.js":3994,"./ar-ly":3312,"./ar-ly.js":3312,"./ar-ma":239,"./ar-ma.js":239,"./ar-ps":7916,"./ar-ps.js":7916,"./ar-sa":1863,"./ar-sa.js":1863,"./ar-tn":9607,"./ar-tn.js":9607,"./ar.js":6069,"./az":9281,"./az.js":9281,"./be":9945,"./be.js":9945,"./bg":9384,"./bg.js":9384,"./bm":1476,"./bm.js":1476,"./bn":3345,"./bn-bd":216,"./bn-bd.js":216,"./bn.js":3345,"./bo":1713,"./bo.js":1713,"./br":9655,"./br.js":9655,"./bs":7296,"./bs.js":7296,"./ca":3049,"./ca.js":3049,"./cs":2722,"./cs.js":2722,"./cv":8039,"./cv.js":8039,"./cy":5563,"./cy.js":5563,"./da":1960,"./da.js":1960,"./de":7533,"./de-at":6674,"./de-at.js":6674,"./de-ch":7732,"./de-ch.js":7732,"./de.js":7533,"./dv":8343,"./dv.js":8343,"./el":7004,"./el.js":7004,"./en-au":2517,"./en-au.js":2517,"./en-ca":4929,"./en-ca.js":4929,"./en-gb":9722,"./en-gb.js":9722,"./en-ie":6923,"./en-ie.js":6923,"./en-il":8050,"./en-il.js":8050,"./en-in":9624,"./en-in.js":9624,"./en-nz":540,"./en-nz.js":540,"./en-sg":4375,"./en-sg.js":4375,"./eo":40,"./eo.js":40,"./es":9720,"./es-do":5595,"./es-do.js":5595,"./es-mx":180,"./es-mx.js":180,"./es-us":1563,"./es-us.js":1563,"./es.js":9720,"./et":9217,"./et.js":9217,"./eu":9474,"./eu.js":9474,"./fa":5243,"./fa.js":5243,"./fi":7645,"./fi.js":7645,"./fil":5350,"./fil.js":5350,"./fo":5622,"./fo.js":5622,"./fr":1467,"./fr-ca":3439,"./fr-ca.js":3439,"./fr-ch":4335,"./fr-ch.js":4335,"./fr.js":1467,"./fy":6026,"./fy.js":6026,"./ga":2969,"./ga.js":2969,"./gd":1347,"./gd.js":1347,"./gl":1085,"./gl.js":1085,"./gom-deva":904,"./gom-deva.js":904,"./gom-latn":9597,"./gom-latn.js":9597,"./gu":8705,"./gu.js":8705,"./he":9128,"./he.js":9128,"./hi":2821,"./hi.js":2821,"./hr":9002,"./hr.js":9002,"./hu":4814,"./hu.js":4814,"./hy-am":658,"./hy-am.js":658,"./id":9344,"./id.js":9344,"./is":8204,"./is.js":8204,"./it":376,"./it-ch":1549,"./it-ch.js":1549,"./it.js":376,"./ja":9293,"./ja.js":9293,"./jv":6401,"./jv.js":6401,"./ka":482,"./ka.js":482,"./kk":7329,"./kk.js":7329,"./km":4241,"./km.js":4241,"./kn":3566,"./kn.js":3566,"./ko":2742,"./ko.js":2742,"./ku":2915,"./ku-kmr":2346,"./ku-kmr.js":2346,"./ku.js":2915,"./ky":6846,"./ky.js":6846,"./lb":4959,"./lb.js":4959,"./lo":2188,"./lo.js":2188,"./lt":8967,"./lt.js":8967,"./lv":1245,"./lv.js":1245,"./me":751,"./me.js":751,"./mi":7501,"./mi.js":7501,"./mk":1643,"./mk.js":1643,"./ml":5597,"./ml.js":5597,"./mn":7893,"./mn.js":7893,"./mr":9065,"./mr.js":9065,"./ms":4703,"./ms-my":4645,"./ms-my.js":4645,"./ms.js":4703,"./mt":4365,"./mt.js":4365,"./my":3788,"./my.js":3788,"./nb":7357,"./nb.js":7357,"./ne":9109,"./ne.js":9109,"./nl":3746,"./nl-be":1985,"./nl-be.js":1985,"./nl.js":3746,"./nn":7175,"./nn.js":7175,"./oc-lnc":566,"./oc-lnc.js":566,"./pa-in":2733,"./pa-in.js":2733,"./pl":182,"./pl.js":182,"./pt":505,"./pt-br":7839,"./pt-br.js":7839,"./pt.js":505,"./ro":9578,"./ro.js":9578,"./ru":2328,"./ru.js":2328,"./sd":641,"./sd.js":641,"./se":1758,"./se.js":1758,"./si":6680,"./si.js":6680,"./sk":5016,"./sk.js":5016,"./sl":7424,"./sl.js":7424,"./sq":8635,"./sq.js":8635,"./sr":9038,"./sr-cyrl":3716,"./sr-cyrl.js":3716,"./sr.js":9038,"./ss":4771,"./ss.js":4771,"./sv":3517,"./sv.js":3517,"./sw":9419,"./sw.js":9419,"./ta":5959,"./ta.js":5959,"./te":1739,"./te.js":1739,"./tet":2264,"./tet.js":2264,"./tg":4792,"./tg.js":4792,"./th":8328,"./th.js":8328,"./tk":702,"./tk.js":702,"./tl-ph":7814,"./tl-ph.js":7814,"./tlh":797,"./tlh.js":797,"./tr":6691,"./tr.js":6691,"./tzl":6891,"./tzl.js":6891,"./tzm":6362,"./tzm-latn":7855,"./tzm-latn.js":7855,"./tzm.js":6362,"./ug-cn":7606,"./ug-cn.js":7606,"./uk":513,"./uk.js":513,"./ur":3803,"./ur.js":3803,"./uz":344,"./uz-latn":8957,"./uz-latn.js":8957,"./uz.js":344,"./vi":3,"./vi.js":3,"./x-pseudo":8842,"./x-pseudo.js":8842,"./yo":2083,"./yo.js":2083,"./zh-cn":4536,"./zh-cn.js":4536,"./zh-hk":2475,"./zh-hk.js":2475,"./zh-mo":7593,"./zh-mo.js":7593,"./zh-tw":4746,"./zh-tw.js":4746};function t(e){var l=s(e);return a(l)}function s(e){if(!a.o(o,e)){var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}return o[e]}t.keys=function(){return Object.keys(o)},t.resolve=s,e.exports=t,t.id=6700}}]);