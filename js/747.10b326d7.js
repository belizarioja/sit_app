(globalThis["webpackChunksit_frontend"]=globalThis["webpackChunksit_frontend"]||[]).push([[747],{5770:e=>{e.exports={endpoint_path_v2:"https://bck-test.factura-smart.com/",version:"2.0.0"}},631:(e,l,a)=>{"use strict";a.r(l),a.d(l,{default:()=>Ue});var i=a(3673),o=a(8880),t=a(2323);const s={class:"my-font my-fondo q-pa-md"},n={class:"row",style:{"margin-bottom":"40px","justify-content":"space-between"}},r=(0,i._)("span",{class:"text-secondary",style:{margin:"0 20px","font-size":"25px","font-weight":"bolder"}},"Clientes emisores",-1),d=["src","width","onClick"],c=["src","width","onClick"],m={class:"text-center"},u=(0,i._)("div",{class:"text-h6"},"Crear emisor",-1),p={class:"row"},h={class:"row"},f={class:"row"},b={class:"row"},g={class:"col-6 q-pa-sm",style:{"text-align":"center","margin-top":"20px"}},w=(0,i._)("div",null,"Envío de correo",-1),v={class:"col-6 q-pa-sm",style:{"text-align":"center","margin-top":"20px"}},j=(0,i._)("div",null,"Validar número interno",-1),y={style:{display:"flex","justify-content":"space-evenly"}},_={class:"q-ml-sm"},V={style:{}},W={class:"q-ml-sm"},z=(0,i._)("div",{class:"text-h6"},"Actualizar cliente emisor",-1),k={class:"row"},x={class:"row"},U={class:"row"},C={class:"row"},q={class:"col-4 q-pa-sm",style:{"text-align":"center","margin-top":"20px"}},I=(0,i._)("div",null,"Envío de correo",-1),S={class:"col-4 q-pa-sm",style:{"text-align":"center","margin-top":"20px"}},H=(0,i._)("div",null,"Validar número interno",-1),A={class:"col-4 q-pa-sm",style:{"text-align":"center","margin-top":"20px"}},E=(0,i._)("div",null,"Publicidad",-1),Z={style:{display:"flex","justify-content":"space-evenly"}},D=(0,i._)("div",{class:"text-h6",style:{"text-align":"center"}},"Actualizar Estatus",-1),F={style:{display:"flex","justify-content":"space-evenly"}},N=(0,i._)("div",{class:"text-h6",style:{"text-align":"center"}},"En Horabuena!",-1),O=(0,i._)("img",{src:"confirmar.png",alt:"Actualizar",style:{"max-width":"285px"}},null,-1),P={style:{display:"flex","justify-content":"space-evenly"}},T={class:"text-h6",style:{"text-align":"center"}},L={style:{"text-align":"center"}},Q=(0,i._)("div",{class:"text-h6",style:{"text-align":"center"}},"Gestionar plantilla PDF",-1),R={style:{margin:"10px"}},M=(0,i._)("img",{src:"factura1.png",alt:"",style:{width:"200px"}},null,-1),$={class:"text-center"},Y={style:{margin:"10px"}},B=(0,i._)("img",{src:"factura2.png",alt:"",style:{width:"200px"}},null,-1),G={class:"text-center"},K={style:{display:"flex","justify-content":"space-evenly"}};function J(e,l,a,J,X,ee){const le=(0,i.up)("q-btn"),ae=(0,i.up)("q-icon"),ie=(0,i.up)("q-input"),oe=(0,i.up)("q-td"),te=(0,i.up)("q-table"),se=(0,i.up)("q-card-section"),ne=(0,i.up)("q-radio"),re=(0,i.up)("q-form"),de=(0,i.up)("q-card"),ce=(0,i.up)("q-dialog"),me=(0,i.up)("q-card-actions"),ue=(0,i.up)("q-th"),pe=(0,i.up)("q-tr"),he=(0,i.up)("q-select"),fe=(0,i.up)("q-uploader"),be=(0,i.Q2)("close-popup");return(0,i.wg)(),(0,i.iD)("div",s,[(0,i._)("div",n,[r,"1"===J.co_rol?((0,i.wg)(),(0,i.j4)(le,{key:0,color:"secondary",disabled:X.btndisable,label:"Crear emisor",onClick:ee.openCrear,style:{"border-radius":"20px",padding:"7px 20px"}},null,8,["disabled","onClick"])):(0,i.kq)("",!0)]),(0,i.Wm)(te,{dense:"",rows:X.rows,columns:X.columns,"row-key":"name",filter:J.filter,pagination:J.pagination,"onUpdate:pagination":l[1]||(l[1]=e=>J.pagination=e)},{top:(0,i.w5)((()=>[(0,i.Wm)(ie,{borderless:"",dense:"",debounce:"300",color:"primary",modelValue:J.filter,"onUpdate:modelValue":l[0]||(l[0]=e=>J.filter=e),label:"Buscar"},{append:(0,i.w5)((()=>[(0,i.Wm)(ae,{name:"search"})])),_:1},8,["modelValue"])])),"body-cell-logo":(0,i.w5)((e=>[(0,i.Wm)(oe,{props:e},{default:(0,i.w5)((()=>[(0,i._)("div",null,[(0,i._)("img",{src:e.row.logo,onerror:"this.src='default.svg'",width:e.row.width,style:{cursor:"pointer"},onClick:(0,o.iM)((l=>ee.openLogo(e.row)),["stop"])},null,8,d)])])),_:2},1032,["props"])])),"body-cell-direccion":(0,i.w5)((e=>[(0,i.Wm)(oe,{props:e},{default:(0,i.w5)((()=>[(0,i.Uk)((0,t.zw)(e.row.direccion),1)])),_:2},1032,["props"])])),"body-cell-bannerpublicidad":(0,i.w5)((e=>[(0,i.Wm)(oe,{props:e},{default:(0,i.w5)((()=>[(0,i._)("div",null,[(0,i._)("img",{src:e.row.bannerpublicidad,onerror:"this.src='publicidad.png'",width:e.row.widthbanner,style:{cursor:"pointer"},onClick:(0,o.iM)((l=>ee.openPublicidad(e.row)),["stop"])},null,8,c)])])),_:2},1032,["props"])])),"body-cell-plantilla":(0,i.w5)((e=>[(0,i.Wm)(oe,{props:e},{default:(0,i.w5)((()=>[(0,i._)("div",m,[(0,i.Wm)(le,{color:"primary",label:e.row.plantilla,onClick:(0,o.iM)((l=>ee.btnviewplantilla(e.row)),["stop"])},null,8,["label","onClick"])])])),_:2},1032,["props"])])),"body-cell-tokenservicios":(0,i.w5)((e=>[(0,i.Wm)(oe,{props:e},{default:(0,i.w5)((()=>[(0,i._)("div",null,[(0,i.Wm)(le,{icon:"visibility",onClick:(0,o.iM)((l=>ee.btnviewtoken(e.row)),["stop"]),dense:"",flat:""},null,8,["onClick"])])])),_:2},1032,["props"])])),"body-cell-numeracionactual":(0,i.w5)((e=>[(0,i.Wm)(oe,{props:e},{default:(0,i.w5)((()=>[(0,i._)("div",null,[(0,i.Wm)(le,{icon:"list_alt",onClick:(0,o.iM)((l=>ee.btnviewdetails(e.row)),["stop"]),dense:"",flat:""},null,8,["onClick"])])])),_:2},1032,["props"])])),"body-cell-edit":(0,i.w5)((e=>[(0,i.Wm)(oe,{props:e},{default:(0,i.w5)((()=>[(0,i._)("div",null,[(0,i.Wm)(le,{color:"secondary",icon:"edit",onClick:(0,o.iM)((l=>ee.btnOpenUpd(e.row)),["stop"]),dense:""},null,8,["onClick"])])])),_:2},1032,["props"])])),"body-cell-estatus":(0,i.w5)((e=>[(0,i.Wm)(oe,{props:e},{default:(0,i.w5)((()=>[(0,i._)("div",null,[(0,i.Wm)(le,{color:"Activo"===e.row.estatus?"primary":"negative",icon:"Activo"===e.row.estatus?"toggle_on":"toggle_off",onClick:(0,o.iM)((l=>ee.btnOpenUpdEstatus(e.row)),["stop"]),dense:""},null,8,["color","icon","onClick"])])])),_:2},1032,["props"])])),_:1},8,["rows","columns","filter","pagination"]),(0,i.Wm)(ce,{modelValue:J.modalcrear,"onUpdate:modelValue":l[13]||(l[13]=e=>J.modalcrear=e),persistent:""},{default:(0,i.w5)((()=>[(0,i.Wm)(de,{style:{"min-width":"550px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(se,null,{default:(0,i.w5)((()=>[u])),_:1}),(0,i.Wm)(se,{class:"q-pt-none"},{default:(0,i.w5)((()=>[(0,i.Wm)(re,{onSubmit:(0,o.iM)(ee.crear,["prevent"]),class:"q-gutter-md"},{default:(0,i.w5)((()=>[(0,i._)("div",p,[(0,i.Wm)(ie,{class:"col-6 q-pa-sm",dense:"",label:"RIF",modelValue:J.rif,"onUpdate:modelValue":l[2]||(l[2]=e=>J.rif=e),autofocus:"",hint:"Formato J-########-#",rules:[e=>e.length>0||"Ingresar RIF"]},null,8,["modelValue","rules"]),(0,i.Wm)(ie,{class:"col-6 q-pa-sm",dense:"",label:"Razón Social",modelValue:J.razonsocial,"onUpdate:modelValue":l[3]||(l[3]=e=>J.razonsocial=e),hint:"Tal cual como va a salir en los documentos",autofocus:"",rules:[e=>e.length>0||"Ingresar RAZON SOCIAL"]},null,8,["modelValue","rules"])]),(0,i._)("div",h,[(0,i.Wm)(ie,{class:"col q-pa-sm",dense:"",label:"Dirección",modelValue:J.direccion,"onUpdate:modelValue":l[4]||(l[4]=e=>J.direccion=e),rules:[e=>e.length>0||"Ingresar DIRECCIÓN"]},null,8,["modelValue","rules"])]),(0,i._)("div",f,[(0,i.Wm)(ie,{dense:"",class:"col-6 q-pa-sm",modelValue:J.email,"onUpdate:modelValue":l[5]||(l[5]=e=>J.email=e),label:"Email",hint:"Formato correo@mail.com",rules:[e=>e.length>0||"Ingresar EMAIL"]},null,8,["modelValue","rules"]),(0,i.Wm)(ie,{dense:"",class:"col-6 q-pa-sm",modelValue:J.emailbcc,"onUpdate:modelValue":l[6]||(l[6]=e=>J.emailbcc=e),label:"Email Cco"},null,8,["modelValue"])]),(0,i._)("div",b,[(0,i.Wm)(ie,{dense:"",class:"col-6 q-pa-sm",modelValue:J.telefono,"onUpdate:modelValue":l[7]||(l[7]=e=>J.telefono=e),label:"Teléfono de contacto",hint:"Formato +5842612345678",rules:[e=>e.length>0||"Ingresar TELÉFONO"]},null,8,["modelValue","rules"]),(0,i.Wm)(ie,{dense:"",class:"col-6 q-pa-sm",modelValue:J.sitioweb,"onUpdate:modelValue":l[8]||(l[8]=e=>J.sitioweb=e),hint:"Formato www.sitiowebejemplo.com",label:"Sitio Web"},null,8,["modelValue"]),(0,i._)("div",g,[w,(0,i.Wm)(ne,{modelValue:J.shape,"onUpdate:modelValue":l[9]||(l[9]=e=>J.shape=e),val:"0",label:"No"},null,8,["modelValue"]),(0,i.Wm)(ne,{modelValue:J.shape,"onUpdate:modelValue":l[10]||(l[10]=e=>J.shape=e),val:"1",label:"Si"},null,8,["modelValue"])]),(0,i._)("div",v,[j,(0,i.Wm)(ne,{modelValue:J.shapeinterno,"onUpdate:modelValue":l[11]||(l[11]=e=>J.shapeinterno=e),val:"0",label:"No"},null,8,["modelValue"]),(0,i.Wm)(ne,{modelValue:J.shapeinterno,"onUpdate:modelValue":l[12]||(l[12]=e=>J.shapeinterno=e),val:"2",label:"Si"},null,8,["modelValue"])])]),(0,i._)("div",y,[(0,i.wy)((0,i.Wm)(le,{color:"negative",label:"Cancelar"},null,512),[[be]]),(0,i.Wm)(le,{color:"secondary",label:"Aceptar",type:"submit"})])])),_:1},8,["onSubmit"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,i.Wm)(ce,{modelValue:J.viewtoken,"onUpdate:modelValue":l[14]||(l[14]=e=>J.viewtoken=e),persistent:""},{default:(0,i.w5)((()=>[(0,i.Wm)(de,{style:{width:"auto"}},{default:(0,i.w5)((()=>[(0,i.Wm)(se,{class:"row items-center"},{default:(0,i.w5)((()=>[(0,i._)("span",_,"Token del Cliente Emisor "+(0,t.zw)(J.razonsocialtitulo+" - "+J.riftitulo),1)])),_:1}),(0,i.Wm)(se,{class:"row items-center",style:{"word-break":"break-all"}},{default:(0,i.w5)((()=>[(0,i._)("div",V,(0,t.zw)(J.tokenservicios),1)])),_:1}),(0,i.Wm)(me,{align:"right"},{default:(0,i.w5)((()=>[(0,i.wy)((0,i.Wm)(le,{flat:"",label:"Aceptar",color:"primary"},null,512),[[be]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,i.Wm)(ce,{modelValue:J.viewdetails,"onUpdate:modelValue":l[15]||(l[15]=e=>J.viewdetails=e),persistent:""},{default:(0,i.w5)((()=>[(0,i.Wm)(de,{style:{width:"fit-content","max-width":"fit-content"}},{default:(0,i.w5)((()=>[(0,i.Wm)(se,{class:"row items-center"},{default:(0,i.w5)((()=>[(0,i._)("span",W,"Numeración actual de "+(0,t.zw)(J.razonsocialtitulo+" - "+J.riftitulo),1)])),_:1}),(0,i.Wm)(se,{class:"row items-center",style:{"word-break":"break-all","justify-content":"center"}},{default:(0,i.w5)((()=>[(0,i.Wm)(te,{dense:"",rows:X.rowsdetails,columns:X.columnsdetails,"row-key":"name","hide-pagination":""},{header:(0,i.w5)((e=>[(0,i.Wm)(pe,{props:e},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.cols,(l=>((0,i.wg)(),(0,i.j4)(ue,{key:l.name,props:e,class:"text-italic text-blue",style:{"font-size":"20px"}},{default:(0,i.w5)((()=>[(0,i.Uk)((0,t.zw)(l.label),1)])),_:2},1032,["props"])))),128))])),_:2},1032,["props"])])),_:1},8,["rows","columns"])])),_:1}),(0,i.Wm)(se,{class:"row items-center",style:{"word-break":"break-all","justify-content":"center"}},{default:(0,i.w5)((()=>[(0,i.Wm)(te,{dense:"",rows:X.rowslotes,columns:X.columnslotes,"row-key":"name","hide-pagination":""},{header:(0,i.w5)((e=>[(0,i.Wm)(pe,{props:e},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.cols,(l=>((0,i.wg)(),(0,i.j4)(ue,{key:l.name,props:e,class:"text-italic text-blue",style:{"font-size":"20px"}},{default:(0,i.w5)((()=>[(0,i.Uk)((0,t.zw)(l.label),1)])),_:2},1032,["props"])))),128))])),_:2},1032,["props"])])),_:1},8,["rows","columns"])])),_:1}),(0,i.Wm)(me,{align:"right"},{default:(0,i.w5)((()=>[(0,i.wy)((0,i.Wm)(le,{label:"Aceptar",color:"primary"},null,512),[[be]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,i.Wm)(ce,{modelValue:J.modalactualizar,"onUpdate:modelValue":l[30]||(l[30]=e=>J.modalactualizar=e),persistent:""},{default:(0,i.w5)((()=>[(0,i.Wm)(de,{style:{width:"560px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(se,null,{default:(0,i.w5)((()=>[z])),_:1}),(0,i.Wm)(se,{class:"q-pt-none"},{default:(0,i.w5)((()=>[(0,i.Wm)(re,{onSubmit:(0,o.iM)(ee.actualizar,["prevent"]),class:"q-gutter-md"},{default:(0,i.w5)((()=>[(0,i._)("div",k,[(0,i.Wm)(ie,{class:"col-6 q-pa-sm",dense:"",label:"RIF",modelValue:J.rif,"onUpdate:modelValue":l[16]||(l[16]=e=>J.rif=e),autofocus:"",rules:[e=>e.length>0||"Ingresar RIF"]},null,8,["modelValue","rules"]),(0,i.Wm)(ie,{class:"col-6 q-pa-sm",dense:"",label:"Razón Social",modelValue:J.razonsocial,"onUpdate:modelValue":l[17]||(l[17]=e=>J.razonsocial=e),autofocus:"",rules:[e=>e.length>0||"Ingresar RAZON SOCIAL"]},null,8,["modelValue","rules"])]),(0,i._)("div",x,[(0,i.Wm)(ie,{class:"col q-pa-sm",dense:"",label:"Dirección",modelValue:J.direccion,"onUpdate:modelValue":l[18]||(l[18]=e=>J.direccion=e),rules:[e=>e.length>0||"Ingresar DIRECCIÓN"]},null,8,["modelValue","rules"])]),(0,i._)("div",U,[(0,i.Wm)(ie,{dense:"",class:"col-6 q-pa-sm",modelValue:J.email,"onUpdate:modelValue":l[19]||(l[19]=e=>J.email=e),label:"Email principal",rules:[e=>e.length>0||"Ingresar EMAIL Comercial"]},null,8,["modelValue","rules"]),(0,i.Wm)(ie,{dense:"",class:"col-6 q-pa-sm",modelValue:J.emailbcc,"onUpdate:modelValue":l[20]||(l[20]=e=>J.emailbcc=e),label:"Email Cco"},null,8,["modelValue"])]),(0,i._)("div",C,[(0,i.Wm)(ie,{dense:"",class:"col-6 q-pa-sm",modelValue:J.telefono,"onUpdate:modelValue":l[21]||(l[21]=e=>J.telefono=e),label:"Teléfono de contacto",rules:[e=>e.length>0||"Ingresar TELÉFONO"]},null,8,["modelValue","rules"]),(0,i.Wm)(ie,{dense:"",class:"col-6 q-pa-sm",modelValue:J.sitioweb,"onUpdate:modelValue":l[22]||(l[22]=e=>J.sitioweb=e),label:"Sitio Web"},null,8,["modelValue"]),(0,i.Wm)(he,{dense:"","options-dense":"",modelValue:X.modelcodes,"onUpdate:modelValue":l[23]||(l[23]=e=>X.modelcodes=e),options:X.optionscodes,"option-label":"name","option-value":"cod",class:"col-12 q-pa-sm",label:"Código comercial",rules:[ee.myRule]},null,8,["modelValue","options","rules"]),(0,i._)("div",q,[I,(0,i.Wm)(ne,{modelValue:J.shape,"onUpdate:modelValue":l[24]||(l[24]=e=>J.shape=e),val:"0",label:"No"},null,8,["modelValue"]),(0,i.Wm)(ne,{modelValue:J.shape,"onUpdate:modelValue":l[25]||(l[25]=e=>J.shape=e),val:"1",label:"Si"},null,8,["modelValue"])]),(0,i._)("div",S,[H,(0,i.Wm)(ne,{modelValue:J.shapeinterno,"onUpdate:modelValue":l[26]||(l[26]=e=>J.shapeinterno=e),val:"0",label:"No"},null,8,["modelValue"]),(0,i.Wm)(ne,{modelValue:J.shapeinterno,"onUpdate:modelValue":l[27]||(l[27]=e=>J.shapeinterno=e),val:"2",label:"Si"},null,8,["modelValue"])]),(0,i._)("div",A,[E,(0,i.Wm)(ne,{modelValue:J.shapepublicidad,"onUpdate:modelValue":l[28]||(l[28]=e=>J.shapepublicidad=e),val:"0",label:"No"},null,8,["modelValue"]),(0,i.Wm)(ne,{modelValue:J.shapepublicidad,"onUpdate:modelValue":l[29]||(l[29]=e=>J.shapepublicidad=e),val:"1",label:"Si"},null,8,["modelValue"])])]),(0,i._)("div",Z,[(0,i.wy)((0,i.Wm)(le,{color:"negative",label:"Cancel"},null,512),[[be]]),(0,i.Wm)(le,{color:"secondary",label:"Aceptar",type:"submit"})])])),_:1},8,["onSubmit"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,i.Wm)(ce,{modelValue:J.modalactualizarestatus,"onUpdate:modelValue":l[31]||(l[31]=e=>J.modalactualizarestatus=e),persistent:""},{default:(0,i.w5)((()=>[(0,i.Wm)(de,null,{default:(0,i.w5)((()=>[(0,i.Wm)(se,null,{default:(0,i.w5)((()=>[D])),_:1}),(0,i.Wm)(se,{class:"q-pt-none"},{default:(0,i.w5)((()=>[(0,i._)("div",null," ¿Desea "+(0,t.zw)(e.messageActualizar)+" este cliente emisor? ",1)])),_:1}),(0,i.Wm)(se,{class:"q-pt-none"},{default:(0,i.w5)((()=>[(0,i._)("div",F,[(0,i.wy)((0,i.Wm)(le,{color:"negative",label:"Cancelar"},null,512),[[be]]),(0,i.Wm)(le,{color:"secondary",label:"Aceptar",onClick:ee.actualizarEstatus},null,8,["onClick"])])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,i.Wm)(ce,{modelValue:J.modalconfirmar,"onUpdate:modelValue":l[32]||(l[32]=e=>J.modalconfirmar=e),persistent:""},{default:(0,i.w5)((()=>[(0,i.Wm)(de,null,{default:(0,i.w5)((()=>[(0,i.Wm)(se,null,{default:(0,i.w5)((()=>[N])),_:1}),(0,i.Wm)(se,{class:"q-pt-none"},{default:(0,i.w5)((()=>[O,(0,i._)("div",null," ¡Cliente emisor "+(0,t.zw)(e.messageConfirmar)+" con éxito! ",1)])),_:1}),(0,i.Wm)(se,{class:"q-pt-none"},{default:(0,i.w5)((()=>[(0,i._)("div",P,[(0,i.wy)((0,i.Wm)(le,{color:"secondary",label:"Aceptar"},null,512),[[be]])])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,i.Wm)(ce,{modelValue:J.modallogo,"onUpdate:modelValue":l[33]||(l[33]=e=>J.modallogo=e),persistent:""},{default:(0,i.w5)((()=>[(0,i.Wm)(de,null,{default:(0,i.w5)((()=>[(0,i.Wm)(se,null,{default:(0,i.w5)((()=>[(0,i._)("div",T,"Actualizar "+(0,t.zw)(J.tituloCargarImagen),1)])),_:1}),(0,i.Wm)(se,{class:"q-pt-none"},{default:(0,i.w5)((()=>[(0,i.Wm)(fe,{label:"Upload",factory:ee.factoryFn,style:{"max-width":"350px"},onUploaded:ee.closeLogoUploader},null,8,["factory","onUploaded"])])),_:1}),(0,i.Wm)(se,{class:"q-pt-none"},{default:(0,i.w5)((()=>[(0,i._)("div",L,[(0,i.wy)((0,i.Wm)(le,{flat:"",label:"Cancelar"},null,512),[[be]])])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,i.Wm)(ce,{modelValue:J.modalplantillapdf,"onUpdate:modelValue":l[36]||(l[36]=e=>J.modalplantillapdf=e),persistent:""},{default:(0,i.w5)((()=>[(0,i.Wm)(de,null,{default:(0,i.w5)((()=>[(0,i.Wm)(se,null,{default:(0,i.w5)((()=>[Q])),_:1}),(0,i.Wm)(se,{class:"q-pt-none flex"},{default:(0,i.w5)((()=>[(0,i._)("div",R,[M,(0,i._)("div",$,[(0,i.Wm)(ne,{modelValue:J.plantilla,"onUpdate:modelValue":l[34]||(l[34]=e=>J.plantilla=e),"checked-icon":"task_alt","unchecked-icon":"panorama_fish_eye",val:"1",label:"1"},null,8,["modelValue"])])]),(0,i._)("div",Y,[B,(0,i._)("div",G,[(0,i.Wm)(ne,{modelValue:J.plantilla,"onUpdate:modelValue":l[35]||(l[35]=e=>J.plantilla=e),"checked-icon":"task_alt","unchecked-icon":"panorama_fish_eye",val:"2",label:"2"},null,8,["modelValue"])])])])),_:1}),(0,i.Wm)(se,{class:"q-pt-none"},{default:(0,i.w5)((()=>[(0,i._)("div",K,[(0,i.wy)((0,i.Wm)(le,{color:"negative",label:"Cancelar"},null,512),[[be]]),(0,i.Wm)(le,{color:"secondary",label:"Aceptar",onClick:ee.actualizarPlantillapdf},null,8,["onClick"])])])),_:1})])),_:1})])),_:1},8,["modelValue"])])}a(4564);var X=a(1959),ee=a(4434),le=a(1488),ae=a.n(le),ie=a(52),oe=a.n(ie);const te=a(5770),se=te.endpoint_path_v2,ne={setup(){return{plantilla:(0,X.iH)(1),modalcrear:(0,X.iH)(!1),modalactualizar:(0,X.iH)(!1),modalplantillapdf:(0,X.iH)(!1),modalconfirmar:(0,X.iH)(!1),modalactualizarestatus:(0,X.iH)(!1),modallogo:(0,X.iH)(!1),viewtoken:(0,X.iH)(!1),viewdetails:(0,X.iH)(!1),tokenservicios:(0,X.iH)(""),rif:(0,X.iH)(""),razonsocial:(0,X.iH)(""),riftitulo:(0,X.iH)(""),razonsocialtitulo:(0,X.iH)(""),email:(0,X.iH)(""),emailbcc:(0,X.iH)(""),direccion:(0,X.iH)(""),telefono:(0,X.iH)(""),cantidad:(0,X.iH)(""),sitioweb:(0,X.iH)(""),shape:(0,X.iH)("0"),shapeinterno:(0,X.iH)("0"),shapepublicidad:(0,X.iH)("0"),filter:(0,X.iH)(""),co_rol:sessionStorage.getItem("co_rol"),loading:(0,X.iH)(!1),tituloCargarImagen:(0,X.iH)(""),pagination:(0,X.iH)({sortBy:"cod",descending:!1,page:1,rowsPerPage:15})}},data(){return{columns:[{name:"cod",required:!0,label:"#",align:"left",field:e=>e.cod,format:e=>`${e}`,sortable:!0},{name:"logo",align:"center",label:"Logo",field:"logo"},{name:"rif",align:"center",label:"RIF",field:"rif",sortable:!0},{name:"razonsocial",align:"center",label:"Razón social",field:"razonsocial",sortable:!0},{name:"direccion",label:"Dirección",field:"direccion",sortable:!0,align:"left",style:"max-width: 300px;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;"},{name:"email",label:"Correo electrónico",field:"email",sortable:!0},{name:"telefono",label:"Teléfono contacto",field:"telefono",sortable:!0},{name:"codigocomercial",label:"Código comercial",field:"codigocomercial",sortable:!0},{name:"plantilla",label:"Plantilla PDF",field:"plantilla"},{name:"tokenservicios",label:"Token",field:"tokenservicios",sortable:!0},{name:"numeracionactual",label:"Numeración actual",field:"numeracionactual",sortable:!0},{name:"enviocorreo",label:"Envio correo",field:"enviocorreo",sortable:!0},{name:"validarinterno",label:"Validar interno",field:"validarinterno",sortable:!0},{name:"publicidad",label:"Publicidad",field:"publicidad",sortable:!0},{name:"bannerpublicidad",label:"Diseño publicidad",field:"bannerpublicidad",sortable:!0},{name:"estatus",label:"Estatus",field:"estatus"},{name:"edit",label:"Editar",field:"edit"}],rows:[],columnsdetails:[{name:"identificador",align:"center",label:"Identificador",field:"identificador",style:"font-size:20px"},{name:"corelativo",align:"center",label:"Correlativo  actual",field:"corelativo",style:"font-size:20px"}],rowsdetails:[],columnslotes:[{name:"lote",align:"center",label:"Lote",field:"lote",style:"font-size:20px"},{name:"fecha",align:"center",label:"Fecha",field:"fecha",style:"font-size:20px"},{name:"cantidad",align:"center",label:"Adquiridos",field:"cantidad",style:"font-size:20px"},{name:"utilizado",align:"center",label:"Utilizados",field:"utilizado",style:"font-size:20px"},{name:"inicia",align:"center",label:"Inicia",field:"inicia",style:"font-size:20px"},{name:"termina",align:"center",label:"Termina",field:"termina",style:"font-size:20px"},{name:"disponible",align:"center",label:"Disponibles",field:"disponible",style:"font-size:20px"}],rowslotes:[],optionscodes:[],modelcodes:[],btndisable:!0}},methods:{uploadFile(e,l){const a=this.$refs.files.files.concat(e),i=new FormData;for(let o=0;o<a.length-1;o++){const e=a[o];i.append("files["+o+"]",e)}i.append("caption",this.caption),this.$axios.post(this.getUrl(),i).then((e=>{this.loading=!1,e.data.error&&this.$q.notify({message:e.data.message,type:"negative",color:"negative",icon:"fas fa-exclamation-triangle"})}),(e=>{}))},factoryFn(e){return new Promise(((e,l)=>{e({url:this.getUrl(),method:"POST"})}))},getUrl(){return`${se}imagen/uploadimg/${this.rifUpd}`},openLogo(e){this.tituloCargarImagen="Logo",this.rifUpd=e.rif,this.modallogo=!0},openPublicidad(e){this.tituloCargarImagen="Publicidad",this.rifUpd=e.rif+"_publi01",this.modallogo=!0},closeLogoUploader:function(e){ee.Z.create(e.xhr.response);const l=this;setTimeout((function(){l.cerrarLogo()}),3e3)},cerrarLogo(){this.modallogo=!1,this.$router.go(0)},openCrear(){this.limpiar(),this.modalcrear=!0},btnviewtoken(e){this.razonsocialtitulo=e.razonsocial,this.riftitulo=e.rif,this.tokenservicios=e.tokenservicios,this.viewtoken=!0},btnviewplantilla(e){this.plantilla=e.plantilla,this.idUpd=e.cod,this.rifUpd=e.rif,this.modalplantillapdf=!0},btnOpenUpdEstatus(e){this.idUpd=e.cod,this.messageActualizar="Activo"===e.estatus?"desactivar":"activar",this.estatusAct=e.estatus,this.modalactualizarestatus=!0},btnOpenUpd(e){const l=this.optionscodes.filter((l=>l.codigocomercial===e.codigocomercial));this.idUpd=e.cod,this.rif=e.rif,this.razonsocial=e.razonsocial,this.direccion=e.direccion,this.email=e.email,this.emailbcc=e.emailbcc,this.modelcodes=l[0],this.telefono=e.telefono,this.cantidad=e.asignados,this.sitioweb=e.sitioweb,this.shape="Si"===e.enviocorreo?"1":"0",this.shapepublicidad="Si"===e.publicidad?"1":"0",this.shapeinterno="Sin validar"===e.validarinterno?"0":"2",this.modalactualizar=!0},btnviewdetails(e){this.razonsocialtitulo=e.razonsocial,this.riftitulo=e.rif,oe().get(se+"sede/"+e.cod).then((async e=>{const l=e.data;this.rowsdetails=[],this.rowslotes=[];const a={};a.identificador=l.identificador.toString().padStart(2,"0"),a.corelativo=l.corelativo.toString().padStart(8,"0"),this.rowsdetails.push(a);for(const i in l.data){const e=l.data[i],a={};a.lote=e.id,a.fecha=ae()(e.fecha).format("DD/MM/YYYY"),a.cantidad=e.cantidad,a.inicia=e.inicia,a.termina=e.termina,a.utilizado=e.utilizado,a.disponible=Number(e.cantidad)-Number(e.utilizado),this.rowslotes.push(a)}})).catch((e=>{ee.Z.create("Problemas al listar Detalles corelativo "+e)})),this.viewdetails=!0},limpiar(){this.rif="",this.razonsocial="",this.direccion="",this.email="",this.emailbcc="",this.telefono="",this.sitioweb=""},crear(){if(0===this.rif.length)return;if(0===this.razonsocial.length)return;if(0===this.direccion.length)return;if(0===this.email.length)return;if(0===this.telefono.length)return;const e={rif:this.rif,razonsocial:this.razonsocial,direccion:this.direccion,email:this.email,emailbcc:this.emailbcc,telefono:this.telefono,asignados:0,sitioweb:this.sitioweb,enviocorreo:this.shape,validarinterno:this.shapeinterno};oe().post(se+"sede",e).then((async e=>{this.messageConfirmar="creado",this.modalcrear=!1,this.modalconfirmar=!0,this.limpiar(),this.listar()}))},actualizar(){if(0===this.rif.length)return;if(0===this.razonsocial.length)return;if(0===this.direccion.length)return;if(0===this.email.length)return;if(0===this.telefono.length)return;if(void 0===this.modelcodes)return;const e={rif:this.rif,razonsocial:this.razonsocial,direccion:this.direccion,email:this.email,emailbcc:this.emailbcc,telefono:this.telefono,sitioweb:this.sitioweb,enviocorreo:this.shape,idcodigocomercial:Number(this.modelcodes.cod),validarinterno:this.shapeinterno,publicidad:this.shapepublicidad};oe().put(se+"sede/"+this.idUpd,e).then((async e=>{this.messageConfirmar="actualizado",this.modalactualizar=!1,this.modalconfirmar=!0,this.limpiar(),this.listar()}))},actualizarPlantillapdf(){const e={plantilla:this.plantilla,rif:this.rifUpd};oe().put(se+"sede/plantilla/"+this.idUpd,e).then((async e=>{this.modalplantillapdf=!1,this.listar()}))},actualizarEstatus(){const e={estatus:"Activo"===this.estatusAct?0:1};oe().put(se+"sede/estatus/"+this.idUpd,e).then((async e=>{this.modalactualizarestatus=!1,this.listar()}))},listar(){this.btndisable=!1,oe().get(se+"sede").then((async e=>{console.log(e.data);const l=e.data.data;this.rows=[];for(const a in l){const e={};e.cod=l[a].id,e.rif=l[a].rif,e.logo=se+"imagen/"+l[a].rif+".png",e.bannerpublicidad=se+"imagen/"+l[a].rif+"_publi01.png",e.width=40,e.widthbanner=140,e.razonsocial=l[a].razonsocial,e.direccion=l[a].direccion,e.email=l[a].email,e.emailbcc=l[a].emailbcc,e.telefono=l[a].telefono,e.sitioweb=l[a].sitioweb,e.codigocomercial=l[a].codigocomercial,e.plantilla=l[a].plantillapdf,e.tokenservicios=l[a].tokenservicios,e.estatus="1"===l[a].estatus?"Activo":"Inactivo",e.enviocorreo="1"===l[a].enviocorreo?"Si":"No",e.publicidad="1"===l[a].publicidad?"Si":"No",e.validarinterno="1"===l[a].validarinterno?"Sin repetidos":"2"===l[a].validarinterno?"Validar consecutivo":"Sin validar",e.asignados=l[a].asignados||"",this.rows.push(e)}console.log(this.rows)})).catch((e=>{ee.Z.create("Problemas al listar Sedes "+e)}))},getCodes(){oe().get(se+"sede/codes").then((async e=>{const l=e.data.data;this.optionscodes=[];for(const a in l){const e={};e.cod=l[a].id,e.codigocomercial=l[a].codigocomercial,e.name=l[a].codigocomercial+"-"+l[a].descripcion,this.optionscodes.push(e)}})).catch((e=>{ee.Z.create("Problemas al listar Codigos comerciales "+e)}))},myRule(e){if(void 0===e)return"Seleccione CÓDIGO COMERCIAL"}},mounted(){"1"!==this.co_rol&&"2"!==this.co_rol&&this.$router.push("/erroracceso"),this.listar(),this.getCodes()}};var re=a(4260),de=a(8240),ce=a(4993),me=a(4842),ue=a(4554),pe=a(3884),he=a(6778),fe=a(151),be=a(5589),ge=a(8689),we=a(7991),ve=a(9367),je=a(8186),ye=a(2414),_e=a(8516),Ve=a(1745),We=a(677),ze=a(7518),ke=a.n(ze);const xe=(0,re.Z)(ne,[["render",J]]),Ue=xe;ke()(ne,"components",{QBtn:de.Z,QTable:ce.Z,QInput:me.Z,QIcon:ue.Z,QTd:pe.Z,QDialog:he.Z,QCard:fe.Z,QCardSection:be.Z,QForm:ge.Z,QRadio:we.Z,QCardActions:ve.Z,QTr:je.Z,QTh:ye.Z,QSelect:_e.Z,QUploader:Ve.Z}),ke()(ne,"directives",{ClosePopup:We.Z})},6700:(e,l,a)=>{var i={"./af":5809,"./af.js":5809,"./ar":6069,"./ar-dz":481,"./ar-dz.js":481,"./ar-kw":3994,"./ar-kw.js":3994,"./ar-ly":3312,"./ar-ly.js":3312,"./ar-ma":239,"./ar-ma.js":239,"./ar-ps":7916,"./ar-ps.js":7916,"./ar-sa":1863,"./ar-sa.js":1863,"./ar-tn":9607,"./ar-tn.js":9607,"./ar.js":6069,"./az":9281,"./az.js":9281,"./be":9945,"./be.js":9945,"./bg":9384,"./bg.js":9384,"./bm":1476,"./bm.js":1476,"./bn":3345,"./bn-bd":216,"./bn-bd.js":216,"./bn.js":3345,"./bo":1713,"./bo.js":1713,"./br":9655,"./br.js":9655,"./bs":7296,"./bs.js":7296,"./ca":3049,"./ca.js":3049,"./cs":2722,"./cs.js":2722,"./cv":8039,"./cv.js":8039,"./cy":5563,"./cy.js":5563,"./da":1960,"./da.js":1960,"./de":7533,"./de-at":6674,"./de-at.js":6674,"./de-ch":7732,"./de-ch.js":7732,"./de.js":7533,"./dv":8343,"./dv.js":8343,"./el":7004,"./el.js":7004,"./en-au":2517,"./en-au.js":2517,"./en-ca":4929,"./en-ca.js":4929,"./en-gb":9722,"./en-gb.js":9722,"./en-ie":6923,"./en-ie.js":6923,"./en-il":8050,"./en-il.js":8050,"./en-in":9624,"./en-in.js":9624,"./en-nz":540,"./en-nz.js":540,"./en-sg":4375,"./en-sg.js":4375,"./eo":40,"./eo.js":40,"./es":9720,"./es-do":5595,"./es-do.js":5595,"./es-mx":180,"./es-mx.js":180,"./es-us":1563,"./es-us.js":1563,"./es.js":9720,"./et":9217,"./et.js":9217,"./eu":9474,"./eu.js":9474,"./fa":5243,"./fa.js":5243,"./fi":7645,"./fi.js":7645,"./fil":5350,"./fil.js":5350,"./fo":5622,"./fo.js":5622,"./fr":1467,"./fr-ca":3439,"./fr-ca.js":3439,"./fr-ch":4335,"./fr-ch.js":4335,"./fr.js":1467,"./fy":6026,"./fy.js":6026,"./ga":2969,"./ga.js":2969,"./gd":1347,"./gd.js":1347,"./gl":1085,"./gl.js":1085,"./gom-deva":904,"./gom-deva.js":904,"./gom-latn":9597,"./gom-latn.js":9597,"./gu":8705,"./gu.js":8705,"./he":9128,"./he.js":9128,"./hi":2821,"./hi.js":2821,"./hr":9002,"./hr.js":9002,"./hu":4814,"./hu.js":4814,"./hy-am":658,"./hy-am.js":658,"./id":9344,"./id.js":9344,"./is":8204,"./is.js":8204,"./it":376,"./it-ch":1549,"./it-ch.js":1549,"./it.js":376,"./ja":9293,"./ja.js":9293,"./jv":6401,"./jv.js":6401,"./ka":482,"./ka.js":482,"./kk":7329,"./kk.js":7329,"./km":4241,"./km.js":4241,"./kn":3566,"./kn.js":3566,"./ko":2742,"./ko.js":2742,"./ku":2915,"./ku-kmr":2346,"./ku-kmr.js":2346,"./ku.js":2915,"./ky":6846,"./ky.js":6846,"./lb":4959,"./lb.js":4959,"./lo":2188,"./lo.js":2188,"./lt":8967,"./lt.js":8967,"./lv":1245,"./lv.js":1245,"./me":751,"./me.js":751,"./mi":7501,"./mi.js":7501,"./mk":1643,"./mk.js":1643,"./ml":5597,"./ml.js":5597,"./mn":7893,"./mn.js":7893,"./mr":9065,"./mr.js":9065,"./ms":4703,"./ms-my":4645,"./ms-my.js":4645,"./ms.js":4703,"./mt":4365,"./mt.js":4365,"./my":3788,"./my.js":3788,"./nb":7357,"./nb.js":7357,"./ne":9109,"./ne.js":9109,"./nl":3746,"./nl-be":1985,"./nl-be.js":1985,"./nl.js":3746,"./nn":7175,"./nn.js":7175,"./oc-lnc":566,"./oc-lnc.js":566,"./pa-in":2733,"./pa-in.js":2733,"./pl":182,"./pl.js":182,"./pt":505,"./pt-br":7839,"./pt-br.js":7839,"./pt.js":505,"./ro":9578,"./ro.js":9578,"./ru":2328,"./ru.js":2328,"./sd":641,"./sd.js":641,"./se":1758,"./se.js":1758,"./si":6680,"./si.js":6680,"./sk":5016,"./sk.js":5016,"./sl":7424,"./sl.js":7424,"./sq":8635,"./sq.js":8635,"./sr":9038,"./sr-cyrl":3716,"./sr-cyrl.js":3716,"./sr.js":9038,"./ss":4771,"./ss.js":4771,"./sv":3517,"./sv.js":3517,"./sw":9419,"./sw.js":9419,"./ta":5959,"./ta.js":5959,"./te":1739,"./te.js":1739,"./tet":2264,"./tet.js":2264,"./tg":4792,"./tg.js":4792,"./th":8328,"./th.js":8328,"./tk":702,"./tk.js":702,"./tl-ph":7814,"./tl-ph.js":7814,"./tlh":797,"./tlh.js":797,"./tr":6691,"./tr.js":6691,"./tzl":6891,"./tzl.js":6891,"./tzm":6362,"./tzm-latn":7855,"./tzm-latn.js":7855,"./tzm.js":6362,"./ug-cn":7606,"./ug-cn.js":7606,"./uk":513,"./uk.js":513,"./ur":3803,"./ur.js":3803,"./uz":344,"./uz-latn":8957,"./uz-latn.js":8957,"./uz.js":344,"./vi":3,"./vi.js":3,"./x-pseudo":8842,"./x-pseudo.js":8842,"./yo":2083,"./yo.js":2083,"./zh-cn":4536,"./zh-cn.js":4536,"./zh-hk":2475,"./zh-hk.js":2475,"./zh-mo":7593,"./zh-mo.js":7593,"./zh-tw":4746,"./zh-tw.js":4746};function o(e){var l=t(e);return a(l)}function t(e){if(!a.o(i,e)){var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}return i[e]}o.keys=function(){return Object.keys(i)},o.resolve=t,e.exports=o,o.id=6700}}]);