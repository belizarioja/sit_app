(globalThis["webpackChunksit_frontend"]=globalThis["webpackChunksit_frontend"]||[]).push([[86],{5770:e=>{e.exports={endpoint_path_v2:"https://apismart.betwinraces.com/",version:"1.0.2"}},2086:(e,s,o)=>{"use strict";o.r(s),o.d(s,{default:()=>y});var t=o(3673),a=o(2323);const i={class:"q-pa-md"},l={class:"row"},n={class:"row"},c=(0,t._)("div",{class:"text-h6"},"Crear Documento",-1),d=(0,t._)("div",{class:"text-h6"},"Resultado",-1);function r(e,s,o,r,u,m){const p=(0,t.up)("q-select"),h=(0,t.up)("q-card-section"),v=(0,t.up)("q-input"),f=(0,t.up)("q-btn"),g=(0,t.up)("q-card-actions"),b=(0,t.up)("q-card"),_=(0,t.Q2)("close-popup");return(0,t.wg)(),(0,t.iD)("div",i,[(0,t._)("div",l,[(0,t.Wm)(p,{dense:"",class:"col",filled:"","options-dense":"",modelValue:u.modelsede,"onUpdate:modelValue":[s[0]||(s[0]=e=>u.modelsede=e),s[1]||(s[1]=e=>m.changeSede())],options:u.optionssede,"option-label":"name","option-value":"cod",label:"Seleccione Servicio",style:{margin:"20px"}},null,8,["modelValue","options"]),(0,t.Wm)(p,{dense:"",class:"col",filled:"","options-dense":"",modelValue:u.modeltipo,"onUpdate:modelValue":s[2]||(s[2]=e=>u.modeltipo=e),options:u.optionstipo,"option-label":"name","option-value":"cod",label:"Seleccione Tipo Documento",style:{margin:"20px"}},null,8,["modelValue","options"])]),(0,t._)("div",n,[(0,t.Wm)(b,{class:"col q-pa-md",style:{"min-width":"350px"}},{default:(0,t.w5)((()=>[(0,t.Wm)(h,{class:"row"},{default:(0,t.w5)((()=>[c])),_:1}),(0,t.Wm)(h,{class:"row q-pt-none"},{default:(0,t.w5)((()=>[(0,t.Wm)(v,{class:"col-12 q-pa-md",dense:"",type:"textarea",modelValue:r.tokenservicios,"onUpdate:modelValue":s[3]||(s[3]=e=>r.tokenservicios=e),label:"Token",autofocus:""},null,8,["modelValue"]),(0,t.Wm)(v,{class:"col-6 q-pa-md",dense:"",modelValue:r.rif,"onUpdate:modelValue":s[4]||(s[4]=e=>r.rif=e),label:"RIF",autofocus:""},null,8,["modelValue"]),(0,t.Wm)(v,{class:"col-6 q-pa-md",dense:"",modelValue:r.numerodocumento,"onUpdate:modelValue":s[5]||(s[5]=e=>r.numerodocumento=e),label:"Número documento",autofocus:""},null,8,["modelValue"]),(0,t.Wm)(v,{class:"col-12 q-pa-md",type:"textarea",dense:"",modelValue:r.observacion,"onUpdate:modelValue":s[6]||(s[6]=e=>r.observacion=e),label:"Observación"},null,8,["modelValue"])])),_:1}),(0,t.Wm)(g,{align:"right",class:"text-primary"},{default:(0,t.w5)((()=>[(0,t.wy)((0,t.Wm)(f,{flat:"",label:"Cancel"},null,512),[[_]]),(0,t.Wm)(f,{color:"primary",label:"Aceptar",onClick:m.crear},null,8,["onClick"])])),_:1})])),_:1}),(0,t.Wm)(b,{class:"col q-pa-md"},{default:(0,t.w5)((()=>[(0,t.Wm)(h,null,{default:(0,t.w5)((()=>[d])),_:1}),(0,t.Wm)(h,null,{default:(0,t.w5)((()=>[(0,t._)("span",{class:(0,a.C_)(r.statusProcess?"text-positive":"text-negative")},(0,a.zw)(r.resultProcess),3)])),_:1}),(0,t.Wm)(h,null,{default:(0,t.w5)((()=>[(0,t._)("span",{class:(0,a.C_)(r.statusProcess?"text-positive":"text-negative")},(0,a.zw)(r.messageProcess),3)])),_:1})])),_:1})])])}o(5663);var u=o(1959),m=o(4434),p=o(52),h=o.n(p);const v=o(5770),f=v.endpoint_path_v2,g={setup(){return{statusProcess:(0,u.iH)(!0),resultProcess:(0,u.iH)(""),messageProcess:(0,u.iH)(""),tokenservicios:(0,u.iH)(""),rif:(0,u.iH)(""),numerodocumento:(0,u.iH)(""),observacion:(0,u.iH)(""),loading:(0,u.iH)(!1)}},data(){return{modeltipo:[],optionstipo:[],modelsede:[],optionssede:[],pagination:{page:1,rowsPerPage:0}}},methods:{changeSede(){console.log(this.modelsede.cod),this.rif=this.modelsede.rif,this.tokenservicios=this.modelsede.tokenservicios},changeTipo(){console.log(this.modeltipo.cod)},crear(){if(!this.modelsede.cod)return void m.Z.create("Debe seleccionar Servicio Masivo ");if(!this.modeltipo.cod)return void m.Z.create("Debe seleccionar tipo de Documento ");this.statusProcess=!1,this.resultProcess="",this.messageProcess="";const e={headers:{Authorization:"Bearer "+this.tokenservicios}},s={rif:this.rif,numerodocumento:this.numerodocumento,idtipodocumento:this.modeltipo.cod,observacion:this.observacion};h().post(f+"anulacion",s,e).then((async e=>{console.log(e.data),200===e.status&&(this.statusProcess=e.data.success,this.resultProcess="Transmisión EXITOSA!",this.limpiar()),202===e.status&&(this.statusProcess=e.data.success,this.resultProcess="Transmisión FALLIDA!",this.messageProcess=e.data.error.message)}))},limpiar(){this.cedula="",this.subtotal=0,this.nombre="",this.total=0,this.exento=0,this.tasag=0,this.baseg=0,this.impuestog=0,this.tasar=0,this.baser=0,this.impuestor=0,this.tasaa=0,this.basea=0,this.impuestoa=0,this.tasaigtf=0,this.baseigtf=0,this.impuestoigtf=0},listartipos(){h().get(f+"tipodocumento").then((async e=>{console.log(e.data);const s=e.data.data;this.optionstipo=[];for(const o in s){const e={};e.cod=s[o].id,e.name=s[o].tipodocumento,this.optionstipo.push(e)}})).catch((e=>{m.Z.create("Problemas al listar Tipos de documentos "+e)}))},listarsedes(){h().get(f+"sede").then((async e=>{console.log(e.data);const s=e.data.data;this.optionssede=[];for(const o in s){const e={};e.cod=s[o].id,e.name=s[o].razonsocial,e.rif=s[o].rif,e.tokenservicios=s[o].tokenservicios,this.optionssede.push(e)}})).catch((e=>{m.Z.create("Problemas al listar Sedes "+e)}))}},mounted(){this.listarsedes(),this.listartipos()}};var b=o(4260),_=o(8516),w=o(151),P=o(5589),V=o(4842),W=o(9367),k=o(8240),q=o(677),x=o(7518),C=o.n(x);const Z=(0,b.Z)(g,[["render",r]]),y=Z;C()(g,"components",{QSelect:_.Z,QCard:w.Z,QCardSection:P.Z,QInput:V.Z,QCardActions:W.Z,QBtn:k.Z}),C()(g,"directives",{ClosePopup:q.Z})}}]);