(globalThis["webpackChunksit_frontend"]=globalThis["webpackChunksit_frontend"]||[]).push([[161],{5770:e=>{e.exports={endpoint_path_v2:"https://bck-test.factura-smart.com/",version:"2.0.0"}},1161:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>Y});var o=t(3673),i=t(2323);const l={class:"my-font window-height window-width row justify-center"},c={class:"my-fondo col-3"},a=(0,o._)("div",{class:"",style:{"text-align":"center",padding:"20px"}},[(0,o._)("img",{src:"logo_sit.jpg",style:{width:"220px"}})],-1),r=(0,o._)("div",{class:"text-h6 text-secondary text-center"}," Cliente seleccionado ",-1),n={class:"row"},d={class:"col",style:{height:"65vh"}},_={class:"row",style:{"justify-content":"center"}},h={key:0,class:"iconSeleccionado text-secondary"},u={key:1,class:"iconSeleccionado text-secondary"},m={class:"imgPaquete"},g=["src","width"],w={class:"tituloPaqueteSelected"},p={class:"nombrePaquete"},v={class:"sedePaquete"},S={key:0,class:"row",style:{}},y={class:"col"},f={class:"nombrePaqueteSeleted",style:{margin:"3px 20px","text-align":"center"}},b={class:"nombrePaqueteSeleted"},k={class:"nombrePaqueteSeleted"},x={class:"nombrePaqueteSeleted"},q={style:{display:"flex","justify-content":"space-around"}},P={class:"col-9 fondocolorimg"},I={class:"row",style:{"justify-content":"center"}},C=["onClick"],z={class:"imgPaquete"},$=["src","width"],D={class:"tituloPaquete"},L={class:"nombrePaquete"},j={class:"sedePaquete"};function N(e,s,t,N,T,Z){const A=(0,o.up)("q-btn"),E=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.iD)("div",l,[(0,o._)("div",c,[a,r,(0,o._)("div",n,[(0,o._)("div",d,[(0,o._)("div",_,[T.changePacks?((0,o.wg)(),(0,o.iD)("div",h," No hay selección ")):((0,o.wg)(),(0,o.iD)("div",u,[(0,o._)("div",m,[(0,o._)("img",{src:T.itemselected.logo,onerror:"this.src='default.svg'",width:T.itemselected.width,style:{"border-radius":"7px"}},null,8,g)]),(0,o._)("div",w,[(0,o._)("span",p,(0,i.zw)(T.itemselected.razonsocial),1),(0,o._)("span",v,"RIF: "+(0,i.zw)(T.itemselected.rif),1)])]))]),T.changePacks?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",S,[(0,o._)("div",y,[(0,o._)("span",f,"Dirección: "+(0,i.zw)(T.itemselected.direccion),1),(0,o._)("span",b,"Email: "+(0,i.zw)(T.itemselected.email),1),(0,o._)("span",k,"Sitio web: "+(0,i.zw)(T.itemselected.sitioweb),1),(0,o._)("span",x,"Teléfono: "+(0,i.zw)(T.itemselected.telefono),1)])]))])]),(0,o._)("div",q,[(0,o.Wm)(A,{label:"Cliente",disabled:T.changePacks,color:"primary",onClick:Z.continuar},null,8,["disabled","onClick"]),"4"!==T.co_rol?(0,o.wy)(((0,o.wg)(),(0,o.j4)(A,{key:0,label:"Todos",color:"secondary",onClick:Z.todos},null,8,["onClick"])),[[E]]):(0,o.kq)("",!0)])]),(0,o._)("div",P,[(0,o._)("div",I,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(T.rows,((e,s)=>((0,o.wg)(),(0,o.iD)("div",{key:s,class:(0,i.C_)(["iconPaquete sedeNoSelected",{[`class${s}`]:!0}]),onClick:t=>Z.onSeleted(s,e)},[(0,o._)("div",z,[(0,o._)("img",{src:e.logo,onerror:"this.src='default.svg'",width:e.width,style:{"border-radius":"7px"}},null,8,$)]),(0,o._)("div",D,[(0,o._)("span",L,(0,i.zw)(e.razonsocial),1),(0,o._)("span",j,"RIF: "+(0,i.zw)(e.rif),1)])],10,C)))),128))]),(0,o.wy)((0,o.Wm)(A,{label:"Salir",class:"absolute-bottom-right",color:"dark",onClick:Z.salir,style:{margin:"20px"}},null,8,["onClick"]),[[E]])])])}t(4564);var T=t(4434),Z=t(52),A=t.n(Z);const E=t(5770),F=E.endpoint_path_v2,Q={name:"SedesLayout",data(){return{changePacks:!0,itemselected:{},rows:[],usuario:"",clave:"",loading:!1,co_rol:sessionStorage.getItem("co_rol")}},methods:{todos(){sessionStorage.setItem("co_sede_seleted",""),sessionStorage.setItem("tx_sede_seleted",""),sessionStorage.setItem("rif_sede_seleted",""),"1"===this.co_rol?this.$router.push("/dashboard"):this.$router.push("/consulta")},continuar(){sessionStorage.setItem("co_sede_seleted",this.co_sede_seleted),sessionStorage.setItem("tx_sede_seleted",this.tx_sede_seleted),sessionStorage.setItem("rif_sede_seleted",this.rif_sede_seleted),"1"===this.co_rol?this.$router.push("/dashboard"):this.$router.push("/consulta")},onClean(){this.co_sede_seleted="",this.tx_sede_seleted="",this.rif_sede_seleted="";const e=document.querySelectorAll(".iconPaquete");for(let s=0;s<e.length;s++)e[s].classList.contains("sedeSelected")&&(e[s].classList.remove("sedeSelected"),e[s].classList.add("sedeNoSelected"))},onSeleted(e,s){this.changePacks=!0;const t=document.querySelector(".class"+e);this.onClean(),t.classList.add("sedeSelected"),t.classList.remove("sedeNoSelected"),this.itemselected=s,console.log(this.itemselected),this.co_sede_seleted=s.cod,this.tx_sede_seleted=s.razonsocial,this.rif_sede_seleted=s.rif;const o=document.querySelectorAll(".iconPaquete");for(let i=0;i<o.length;i++)o[i].classList.contains("sedeSelected")&&(this.changePacks=!1)},salir(){this.$q.dialog({title:"Confirmación!",message:"¿Está seguro que quieres cerrar sesión?",ok:{color:"secondary",label:"Sí"},cancel:{color:"negative",label:"No"},persistent:!0}).onOk((()=>{sessionStorage.removeItem("co_sede_seleted"),sessionStorage.removeItem("tx_sede_seleted"),sessionStorage.removeItem("rif_sede_seleted"),sessionStorage.removeItem("tx_rol"),sessionStorage.removeItem("tx_nombre"),sessionStorage.removeItem("tx_sede"),sessionStorage.removeItem("co_sede"),sessionStorage.removeItem("co_rol"),this.$router.push("/")}))},listar(){this.btndisable=!1,A().get(F+"sede").then((async e=>{console.log(e.data);const s=e.data.data;this.rows=[];for(const t in s){const e={};e.cod=s[t].id,e.logo=F+"imagen/"+s[t].rif+".png",e.width=80,e.rif=s[t].rif,e.razonsocial=s[t].razonsocial,e.direccion=s[t].direccion,e.email=s[t].email,e.sitioweb=s[t].sitioweb,e.telefono=s[t].telefono,e.tokenservicios=s[t].tokenservicios,e.estatus="1"===s[t].estatus?"Activo":"Inactivo",this.rows.push(e)}console.log(this.rows)})).catch((e=>{T.Z.create("Problemas al listar Sedes "+e)}))}},mounted(){"1"!==this.co_rol&&"2"!==this.co_rol&&"4"!==this.co_rol&&this.$router.push("/erroracceso"),this.listar()}};var R=t(4260),W=t(2165),B=t(677),H=t(7518),K=t.n(H);const O=(0,R.Z)(Q,[["render",N]]),Y=O;K()(Q,"components",{QBtn:W.Z}),K()(Q,"directives",{ClosePopup:B.Z})}}]);