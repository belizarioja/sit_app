(globalThis["webpackChunksit_frontend"]=globalThis["webpackChunksit_frontend"]||[]).push([[517],{5770:e=>{e.exports={endpoint_path_v2:"https://bck.factura-smart.com/",version:"2.0.0"}},5517:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>W});var o=t(3673),i=t(2323);const l={class:"my-font bg-primary window-height window-width row justify-center"},c={class:"bg-white col-3"},a=(0,o._)("div",{class:"",style:{"text-align":"center",padding:"20px"}},[(0,o._)("img",{src:"logo_sit.jpg",style:{"max-width":"180px"}})],-1),r=(0,o._)("div",{class:"text-h6 text-secondary text-center"}," Seleccione cliente ",-1),n={class:"row"},d={class:"col",style:{height:"74vh"}},_={class:"row",style:{"justify-content":"center"}},h={key:0,class:"iconSeleccionado text-secondary"},u={key:1,class:"iconSeleccionado text-secondary"},m={class:"imgPaquete"},g=["src","width"],v={class:"tituloPaqueteSelected"},p={class:"nombrePaquete"},w={class:"sedePaquete"},y={style:{display:"flex","justify-content":"space-around"}},S={class:"col-9"},f={class:"row",style:{"justify-content":"center"}},b=["onClick"],k={class:"imgPaquete"},x=["src","width"],q={class:"tituloPaquete"},I={class:"nombrePaquete"},P={class:"sedePaquete"};function C(e,s,t,C,z,L){const $=(0,o.up)("q-btn"),j=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.iD)("div",l,[(0,o._)("div",c,[a,r,(0,o._)("div",n,[(0,o._)("div",d,[(0,o._)("div",_,[z.changePacks?((0,o.wg)(),(0,o.iD)("div",h," No hay selección ")):((0,o.wg)(),(0,o.iD)("div",u,[(0,o._)("div",m,[(0,o._)("img",{src:z.itemselected.logo,onerror:"this.src='default.svg'",width:z.itemselected.width,style:{"border-radius":"7px"}},null,8,g)]),(0,o._)("div",v,[(0,o._)("span",p,(0,i.zw)(z.itemselected.razonsocial),1),(0,o._)("span",w,"RIF: "+(0,i.zw)(z.itemselected.rif),1)])]))])])]),(0,o._)("div",y,[(0,o.Wm)($,{label:"Cliente",disabled:z.changePacks,color:"primary",onClick:L.continuar},null,8,["disabled","onClick"]),"4"!==z.co_rol?(0,o.wy)(((0,o.wg)(),(0,o.j4)($,{key:0,label:"Todos",color:"secondary",onClick:L.todos},null,8,["onClick"])),[[j]]):(0,o.kq)("",!0)])]),(0,o._)("div",S,[(0,o._)("div",f,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(z.rows,((e,s)=>((0,o.wg)(),(0,o.iD)("div",{key:s,class:(0,i.C_)(["iconPaquete sedeNoSelected",{[`class${s}`]:!0}]),onClick:t=>L.onSeleted(s,e)},[(0,o._)("div",k,[(0,o._)("img",{src:e.logo,onerror:"this.src='default.svg'",width:e.width,style:{"border-radius":"7px"}},null,8,x)]),(0,o._)("div",q,[(0,o._)("span",I,(0,i.zw)(e.razonsocial),1),(0,o._)("span",P,"RIF: "+(0,i.zw)(e.rif),1)])],10,b)))),128))]),(0,o.wy)((0,o.Wm)($,{label:"Salir",class:"absolute-bottom-right",color:"dark",onClick:L.salir,style:{margin:"20px"}},null,8,["onClick"]),[[j]])])])}t(4564);var z=t(4434),L=t(52),$=t.n(L);const j=t(5770),D=j.endpoint_path_v2,N={name:"SedesLayout",data(){return{changePacks:!0,itemselected:{},rows:[],usuario:"",clave:"",loading:!1,co_rol:sessionStorage.getItem("co_rol")}},methods:{todos(){sessionStorage.setItem("co_sede_seleted",""),sessionStorage.setItem("tx_sede_seleted",""),sessionStorage.setItem("rif_sede_seleted",""),"1"===this.co_rol?this.$router.push("/dashboard"):this.$router.push("/consulta")},continuar(){sessionStorage.setItem("co_sede_seleted",this.co_sede_seleted),sessionStorage.setItem("tx_sede_seleted",this.tx_sede_seleted),sessionStorage.setItem("rif_sede_seleted",this.rif_sede_seleted),"1"===this.co_rol?this.$router.push("/dashboard"):this.$router.push("/consulta")},onClean(){this.co_sede_seleted="",this.tx_sede_seleted="",this.rif_sede_seleted="";const e=document.querySelectorAll(".iconPaquete");for(let s=0;s<e.length;s++)e[s].classList.contains("sedeSelected")&&(e[s].classList.remove("sedeSelected"),e[s].classList.add("sedeNoSelected"))},onSeleted(e,s){this.changePacks=!0;const t=document.querySelector(".class"+e);this.onClean(),t.classList.add("sedeSelected"),t.classList.remove("sedeNoSelected"),this.itemselected=s,console.log(this.itemselected),this.co_sede_seleted=s.cod,this.tx_sede_seleted=s.razonsocial,this.rif_sede_seleted=s.rif;const o=document.querySelectorAll(".iconPaquete");for(let i=0;i<o.length;i++)o[i].classList.contains("sedeSelected")&&(this.changePacks=!1)},salir(){this.$q.dialog({title:"Confirmación!",message:"¿Está seguro que quieres cerrar sesión?",ok:{color:"primary",label:"Sí"},cancel:{color:"secondary",label:"No"},persistent:!0}).onOk((()=>{sessionStorage.removeItem("co_sede_seleted"),sessionStorage.removeItem("tx_sede_seleted"),sessionStorage.removeItem("rif_sede_seleted"),sessionStorage.removeItem("tx_rol"),sessionStorage.removeItem("tx_nombre"),sessionStorage.removeItem("tx_sede"),sessionStorage.removeItem("co_sede"),sessionStorage.removeItem("co_rol"),this.$router.push("/")}))},listar(){this.btndisable=!1,$().get(D+"sede").then((async e=>{console.log(e.data);const s=e.data.data;this.rows=[];for(const t in s){const e={};e.cod=s[t].id,e.logo=D+"imagen/"+s[t].rif+".png",e.width=80,e.rif=s[t].rif,e.razonsocial=s[t].razonsocial,e.direccion=s[t].direccion,e.email=s[t].email,e.sitioweb=s[t].sitioweb,e.telefono=s[t].telefono,e.tokenservicios=s[t].tokenservicios,e.estatus="1"===s[t].estatus?"Activo":"Inactivo",this.rows.push(e)}console.log(this.rows)})).catch((e=>{z.Z.create("Problemas al listar Sedes "+e)}))}},mounted(){this.listar()}};var Z=t(4260),A=t(8240),T=t(677),F=t(7518),Q=t.n(F);const R=(0,Z.Z)(N,[["render",C]]),W=R;Q()(N,"components",{QBtn:A.Z}),Q()(N,"directives",{ClosePopup:T.Z})}}]);