(globalThis["webpackChunksit_frontend"]=globalThis["webpackChunksit_frontend"]||[]).push([[209],{5770:s=>{s.exports={endpoint_path_v2:"https://bck-test.factura-smart.com/",version:"1.0.2"}},857:(s,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>Os});var a=e(3673),o=e(2323);const i={class:"row"},l={class:"col-md-5 col-sm-12 col-xs-12"},d={class:"row"},c=(0,a._)("div",{class:"col"},[(0,a._)("img",{src:"dashboard.png",alt:"",style:{"margin-bottom":"-6px"}})],-1),n={class:"col"},r={class:"dash_welcome_long"},m={class:"dash_welcome_blue"},u={key:0,class:"dash_welcome_small"},h=(0,a._)("br",null,null,-1),p={key:1,class:"dash_welcome_small"},f={class:"row"},g={class:"col"},_={key:0,style:{display:"flex","margin-bottom":"30px"}},b={class:"itemsCardMain"},w={class:"text-secondary",style:{"font-weight":"bold",padding:"3px"}},j={class:"text-secondary",style:{"font-weight":"bold",padding:"3px"}},v={style:{display:"flex","margin-bottom":"30px"}},y={class:"itemsCardMain"},k={class:"text-secondary",style:{"font-weight":"bold",padding:"3px"}},Y={class:"text-secondary",style:{"font-weight":"bold",padding:"3px"}},D={key:1,style:{display:"flex","margin-bottom":"30px"}},x={key:0,class:"itemsCardMain"},W={class:"text-secondary",style:{"font-weight":"bold",padding:"3px"}},M={key:1,class:"itemsCardMain"},z={key:2,style:{display:"flex","margin-bottom":"30px"}},H={key:0,class:"itemsCardMain"},U={key:1,class:"itemsCardMain"},q={key:3,style:{display:"flex","margin-bottom":"30px"}},F={class:"itemsCardMain"},C={class:"text-secondary",style:{"font-weight":"bold",padding:"3px"}},T={class:"col-7"},S={style:{padding:"5px","margin-left":"40px",width:"50%",height:"48px"}},N={class:"row"},Z={style:{margin:"5px",border:"solid 1px #ccc","border-radius":"5px",padding:"12px",position:"relative"}},I=(0,a._)("span",{class:"bg-white",style:{position:"absolute",top:"-12px",left:"10px",color:"#ccc"}},"Filtrado por:",-1),V={class:"filtros"},A={class:"filtros"},Q={class:"row"},B=(0,a._)("div",{class:"dash_welcome_long",style:{"margin-left":"20px"}},"Tipos de Documento",-1),E=(0,a._)("div",{class:"text-h6"},"Fechas",-1),P={style:{margin:"20px 5px",border:"solid 1px #ccc","border-radius":"5px",padding:"15px",position:"relative",display:"grid"}},L=(0,a._)("span",{class:"bg-white",style:{position:"absolute",top:"-12px",left:"10px",color:"#ccc"}},"Rango de fecha:",-1),O={style:{width:"100%",display:"flex","justify-content":"space-around"}},R=["disabled","value"],G=["disabled","value"];function J(s,t,e,J,$,K){const X=(0,a.up)("q-icon"),ss=(0,a.up)("q-card-section"),ts=(0,a.up)("q-card"),es=(0,a.up)("q-select"),as=(0,a.up)("bar-chart"),os=(0,a.up)("q-item-section"),is=(0,a.up)("q-item"),ls=(0,a.up)("q-item-label"),ds=(0,a.up)("q-list"),cs=(0,a.up)("q-avatar"),ns=(0,a.up)("donut-chart"),rs=(0,a.up)("q-table"),ms=(0,a.up)("q-separator"),us=(0,a.up)("q-radio"),hs=(0,a.up)("q-btn"),ps=(0,a.up)("q-card-actions"),fs=(0,a.up)("q-dialog"),gs=(0,a.up)("q-page"),_s=(0,a.Q2)("close-popup");return(0,a.wg)(),(0,a.j4)(gs,{class:"q-pa-sm my-fondo"},{default:(0,a.w5)((()=>[(0,a._)("div",i,[(0,a._)("div",l,[(0,a._)("div",d,[c,(0,a._)("div",n,[(0,a._)("div",r," Hola "+(0,o.zw)(s.displayName)+", ",1),(0,a._)("div",m,(0,o.zw)(s.saludo)+". ",1),s.idserviciosmasivo?((0,a.wg)(),(0,a.iD)("div",u,[(0,a.Uk)(" Esto es lo que está pasando con la facturación de "),h,(0,a.Uk)((0,o.zw)(s.serviciosmasivo)+". ",1)])):((0,a.wg)(),(0,a.iD)("div",p," Esto es lo que está pasando con tu facturación en este momento. "))])]),(0,a._)("div",f,[(0,a._)("div",g,[(0,a.Wm)(ts,{class:"my-card tarjetaMain"},{default:(0,a.w5)((()=>[(0,a.Wm)(ss,{class:"dash_card_main",style:{"padding-top":"40px"}},{default:(0,a.w5)((()=>[s.idserviciosmasivo?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",_,[(0,a.Wm)(X,{name:"fact_check",class:"text-secondary",style:{"font-size":"xx-large"}}),(0,a._)("span",b,[(0,a.Uk)(" Tiene "),(0,a._)("span",w,(0,o.zw)(s.totalclientes),1),(0,a.Uk)(" emisores con "),(0,a._)("span",j,(0,o.zw)(s.totalAsignados),1),(0,a.Uk)(" documentos asignados. ")])])),(0,a._)("div",v,[(0,a.Wm)(X,{name:"format_list_bulleted",class:"text-secondary",style:{"font-size":"xx-large"}}),(0,a._)("span",y,[(0,a.Uk)(" Se han procesado "),(0,a._)("span",k,(0,o.zw)(s.totalUtilizados),1),(0,a.Uk)(" documentos y quedan "),(0,a._)("span",Y,(0,o.zw)(s.totalDisponible),1),(0,a.Uk)(" disponibles. ")])]),s.estatusasignacion?((0,a.wg)(),(0,a.iD)("div",z,[(0,a.Wm)(X,{name:"done_all",class:"text-secondary",style:{"font-size":"xx-large"}}),s.idserviciosmasivo?((0,a.wg)(),(0,a.iD)("span",U," Tiene una cantidad aceptable en la asignación actual. ")):((0,a.wg)(),(0,a.iD)("span",H," Todos los clientes emisores sin problemas de asignación. "))])):((0,a.wg)(),(0,a.iD)("div",D,[(0,a.Wm)(X,{name:"warning",class:"text-secondary",style:{"font-size":"xx-large"}}),s.idserviciosmasivo?((0,a.wg)(),(0,a.iD)("span",M," Presenta una cantidad crítica en la asignación actual. ")):((0,a.wg)(),(0,a.iD)("span",x,[(0,a.Uk)(" Existe(n) "),(0,a._)("span",W,(0,o.zw)(s.clientesTerminando),1),(0,a.Uk)(" emisores con cantidad crítica de asignación de lotes. ")]))])),s.idserviciosmasivo?((0,a.wg)(),(0,a.iD)("div",q,[(0,a.Wm)(X,{name:"rule",class:"text-secondary",style:{"font-size":"xx-large"}}),(0,a._)("span",F,[(0,a.Uk)(" Se usaron "),(0,a._)("span",C,(0,o.zw)(s.totalAnulados),1),(0,a.Uk)(" entre Anulados y Notas de Créditos. ")])])):(0,a.kq)("",!0)])),_:1})])),_:1})])])]),(0,a._)("div",T,[(0,a._)("div",S,["1"===s.co_rol||"2"===s.co_rol?((0,a.wg)(),(0,a.j4)(es,{key:0,label:"Buscar por Nombre o RIF del Emisor",dense:"",rounded:"",outlined:"",modelValue:s.modelsede,"onUpdate:modelValue":[t[0]||(t[0]=t=>s.modelsede=t),t[1]||(t[1]=t=>s.changeSede())],disable:s.disabledSede,"use-input":"","hide-selected":"","fill-input":"",clearable:"","options-dense":"","option-label":"namerif","option-value":"cod","input-debounce":"0",options:s.optionssede,"onInput:":t[2]||(t[2]=t=>s.changeSede()),onFilter:s.searchEmisor},null,8,["modelValue","disable","options","onFilter"])):(0,a.kq)("",!0)]),(0,a.Wm)(ts,{style:{margin:"10px 50px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(ss,null,{default:(0,a.w5)((()=>[(0,a.Wm)(as,{ref:"barmeses"},null,512)])),_:1})])),_:1})])]),(0,a._)("div",N,[(0,a.Wm)(ts,{class:"col-5",style:{margin:"15px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(ss,null,{default:(0,a.w5)((()=>[(0,a.Wm)(ds,null,{default:(0,a.w5)((()=>[(0,a.Wm)(is,null,{default:(0,a.w5)((()=>[(0,a.Wm)(os,null,{default:(0,a.w5)((()=>[(0,a._)("div",Z,[I,(0,a._)("span",V,"Desde: "+(0,o.zw)(s.dateFrom),1),(0,a._)("span",A,"Hasta: "+(0,o.zw)(s.dateTo),1),(0,a.Wm)(X,{name:"date_range",style:{color:"#0999ff","font-size":"x-large",cursor:"pointer"},onClick:s.openFechas},null,8,["onClick"])])])),_:1})])),_:1}),(0,a.Wm)(is,{class:"dash_welcome_long"},{default:(0,a.w5)((()=>[(0,a.Wm)(os,null,{default:(0,a.w5)((()=>[(0,a.Wm)(ls,null,{default:(0,a.w5)((()=>[(0,a.Uk)("Total gravado")])),_:1})])),_:1})])),_:1}),(0,a.Wm)(is,{class:"dash_welcome_igtf"},{default:(0,a.w5)((()=>[(0,a.Wm)(os,null,{default:(0,a.w5)((()=>[(0,a.Wm)(ls,null,{default:(0,a.w5)((()=>[(0,a.Uk)("Bs. "+(0,o.zw)(s.totalimp),1)])),_:1})])),_:1})])),_:1}),(0,a.Wm)(is,{class:"dash_welcome_small"},{default:(0,a.w5)((()=>[(0,a.Wm)(os,null,{default:(0,a.w5)((()=>[(0,a.Wm)(ls,null,{default:(0,a.w5)((()=>[(0,a.Uk)("Monto obtenido de "+(0,o.zw)(s.totaldoc)+" documentos procesados",1)])),_:1})])),_:1})])),_:1}),(0,a.Wm)(is,{class:"dash_welcome_long"},{default:(0,a.w5)((()=>[(0,a.Wm)(os,null,{default:(0,a.w5)((()=>[(0,a.Wm)(ls,null,{default:(0,a.w5)((()=>[(0,a.Uk)("Total base exento Bs. "+(0,o.zw)(s.totalexento),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),(0,a.Wm)(ts,{class:"col-6",style:{margin:"20px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(ss,null,{default:(0,a.w5)((()=>[(0,a.Wm)(ds,null,{default:(0,a.w5)((()=>[(0,a.Wm)(ls,{class:"dash_welcome_long"},{default:(0,a.w5)((()=>[(0,a.Uk)("Tipo de Impuestos")])),_:1}),(0,a.Wm)(is,{class:"text-dark"},{default:(0,a.w5)((()=>[(0,a.Wm)(os,{avatar:"",top:""},{default:(0,a.w5)((()=>[(0,a.Wm)(cs,{color:"white"})])),_:1}),(0,a.Wm)(os,{top:""},{default:(0,a.w5)((()=>[(0,a.Wm)(ls,{class:"q-mt-sm"},{default:(0,a.w5)((()=>[(0,a.Uk)("Decripción")])),_:1})])),_:1}),(0,a.Wm)(os,{top:""},{default:(0,a.w5)((()=>[(0,a.Wm)(ls,{class:"q-mt-sm"},{default:(0,a.w5)((()=>[(0,a.Uk)("Base")])),_:1})])),_:1}),(0,a.Wm)(os,{top:""},{default:(0,a.w5)((()=>[(0,a.Wm)(ls,{class:"q-mt-sm"},{default:(0,a.w5)((()=>[(0,a.Uk)("Impuesto")])),_:1})])),_:1})])),_:1}),(0,a.Wm)(is,null,{default:(0,a.w5)((()=>[(0,a.Wm)(os,{avatar:"",top:""},{default:(0,a.w5)((()=>[(0,a.Wm)(cs,{color:"secondary"})])),_:1}),(0,a.Wm)(os,{top:""},{default:(0,a.w5)((()=>[(0,a.Wm)(ls,{class:"q-mt-sm"},{default:(0,a.w5)((()=>[(0,a.Uk)("IVA 16%")])),_:1})])),_:1}),(0,a.Wm)(os,{top:""},{default:(0,a.w5)((()=>[(0,a.Wm)(ls,{class:"q-mt-sm"},{default:(0,a.w5)((()=>[(0,a.Uk)("Bs "+(0,o.zw)(s.totalbaseg),1)])),_:1})])),_:1}),(0,a.Wm)(os,{top:""},{default:(0,a.w5)((()=>[(0,a.Wm)(ls,{class:"q-mt-sm"},{default:(0,a.w5)((()=>[(0,a.Uk)("Bs "+(0,o.zw)(s.totalimpg),1)])),_:1})])),_:1})])),_:1}),(0,a.Wm)(is,null,{default:(0,a.w5)((()=>[(0,a.Wm)(os,{avatar:"",top:""},{default:(0,a.w5)((()=>[(0,a.Wm)(cs,{color:"accent"})])),_:1}),(0,a.Wm)(os,{top:""},{default:(0,a.w5)((()=>[(0,a.Wm)(ls,{class:"q-mt-sm"},{default:(0,a.w5)((()=>[(0,a.Uk)("Reducido 8%")])),_:1})])),_:1}),(0,a.Wm)(os,{top:""},{default:(0,a.w5)((()=>[(0,a.Wm)(ls,{class:"q-mt-sm"},{default:(0,a.w5)((()=>[(0,a.Uk)("Bs "+(0,o.zw)(s.totalbaser),1)])),_:1})])),_:1}),(0,a.Wm)(os,{top:""},{default:(0,a.w5)((()=>[(0,a.Wm)(ls,{class:"q-mt-sm"},{default:(0,a.w5)((()=>[(0,a.Uk)("Bs "+(0,o.zw)(s.totalimpr),1)])),_:1})])),_:1})])),_:1}),(0,a.Wm)(is,null,{default:(0,a.w5)((()=>[(0,a.Wm)(os,{avatar:"",top:""},{default:(0,a.w5)((()=>[(0,a.Wm)(cs,{color:"info"})])),_:1}),(0,a.Wm)(os,{top:""},{default:(0,a.w5)((()=>[(0,a.Wm)(ls,{class:"q-mt-sm"},{default:(0,a.w5)((()=>[(0,a.Uk)("Al lujo 30%")])),_:1})])),_:1}),(0,a.Wm)(os,{top:""},{default:(0,a.w5)((()=>[(0,a.Wm)(ls,{class:"q-mt-sm"},{default:(0,a.w5)((()=>[(0,a.Uk)("Bs "+(0,o.zw)(s.totalbasea),1)])),_:1})])),_:1}),(0,a.Wm)(os,{top:""},{default:(0,a.w5)((()=>[(0,a.Wm)(ls,{class:"q-mt-sm"},{default:(0,a.w5)((()=>[(0,a.Uk)("Bs "+(0,o.zw)(s.totalimpa),1)])),_:1})])),_:1})])),_:1}),(0,a.Wm)(is,null,{default:(0,a.w5)((()=>[(0,a.Wm)(os,{avatar:"",top:""},{default:(0,a.w5)((()=>[(0,a.Wm)(cs,{color:"positive"})])),_:1}),(0,a.Wm)(os,{top:""},{default:(0,a.w5)((()=>[(0,a.Wm)(ls,{class:"q-mt-sm"},{default:(0,a.w5)((()=>[(0,a.Uk)("IGTF 3%")])),_:1})])),_:1}),(0,a.Wm)(os,{top:""},{default:(0,a.w5)((()=>[(0,a.Wm)(ls,{class:"q-mt-sm"},{default:(0,a.w5)((()=>[(0,a.Uk)("Bs "+(0,o.zw)(s.totalbaseigtf),1)])),_:1})])),_:1}),(0,a.Wm)(os,{top:""},{default:(0,a.w5)((()=>[(0,a.Wm)(ls,{class:"q-mt-sm"},{default:(0,a.w5)((()=>[(0,a.Uk)("Bs "+(0,o.zw)(s.totalimpigtf),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})]),(0,a._)("div",Q,[(0,a.Wm)(ts,{class:"col-5",style:{margin:"20px"}},{default:(0,a.w5)((()=>[B,(0,a.Wm)(ss,null,{default:(0,a.w5)((()=>[(0,a.Wm)(ns,{ref:"donutipos"},null,512)])),_:1}),(0,a.Wm)(ss,null,{default:(0,a.w5)((()=>[(0,a.Wm)(ns,{ref:"donutipos"},null,512)])),_:1})])),_:1}),(0,a.Wm)(ts,{class:"col-6",style:{margin:"20px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(ss,null,{default:(0,a.w5)((()=>[(0,a.Wm)(rs,{rows:s.rowssemana,columns:s.columnssemana,"row-key":"razonsocial","hide-bottom":""},null,8,["rows","columns"])])),_:1})])),_:1})]),(0,a.Wm)(fs,{modelValue:s.modalFechas,"onUpdate:modelValue":t[8]||(t[8]=t=>s.modalFechas=t),persistent:"","transition-show":"scale","transition-hide":"scale"},{default:(0,a.w5)((()=>[(0,a.Wm)(ts,{class:"bg-primary text-white",style:{width:"480px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(ss,null,{default:(0,a.w5)((()=>[E])),_:1}),(0,a.Wm)(ms),(0,a.Wm)(ss,{class:"bg-white text-secondary"},{default:(0,a.w5)((()=>[(0,a._)("div",P,[L,(0,a.Wm)(us,{label:"Hoy",modelValue:s.fechacustom,"onUpdate:modelValue":t[3]||(t[3]=t=>s.fechacustom=t),val:"1","checked-icon":"task_alt","unchecked-icon":"highlight_off"},null,8,["modelValue"]),(0,a.Wm)(us,{label:"Ayer",modelValue:s.fechacustom,"onUpdate:modelValue":t[4]||(t[4]=t=>s.fechacustom=t),val:"2","checked-icon":"task_alt","unchecked-icon":"highlight_off"},null,8,["modelValue"]),(0,a.Wm)(us,{label:"En 1 semana",modelValue:s.fechacustom,"onUpdate:modelValue":t[5]||(t[5]=t=>s.fechacustom=t),val:"3","checked-icon":"task_alt","unchecked-icon":"highlight_off"},null,8,["modelValue"]),(0,a.Wm)(us,{label:"En 1 mes",modelValue:s.fechacustom,"onUpdate:modelValue":t[6]||(t[6]=t=>s.fechacustom=t),val:"4","checked-icon":"task_alt","unchecked-icon":"highlight_off"},null,8,["modelValue"]),(0,a.Wm)(us,{label:"Escojer fechas",modelValue:s.fechacustom,"onUpdate:modelValue":t[7]||(t[7]=t=>s.fechacustom=t),val:"5","checked-icon":"task_alt","unchecked-icon":"highlight_off"},null,8,["modelValue"]),(0,a._)("div",O,[(0,a._)("input",{class:"inputDate fecha1",disabled:s.dsbFechas,type:"date",name:"desde",value:s.dateFrom},null,8,R),(0,a._)("input",{class:"inputDate fecha2",disabled:s.dsbFechas,type:"date",name:"hasta",value:s.dateTo},null,8,G),(0,a.Wm)(hs,{color:"primary",label:"Ir",disabled:s.dsbFechas,onClick:s.changeFechas},null,8,["disabled","onClick"])])])])),_:1}),(0,a.Wm)(ps,{align:"right",class:"bg-white text-teal"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(hs,{color:"secondary",label:"Cerrar"},null,512),[[_s]])])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})}e(4564);var $=e(1959);const K={id:"chart"};function X(s,t,e,o,i,l){return(0,a.wg)(),(0,a.iD)("div",K)}var ss=e(3502),ts=e.n(ss),es=e(52),as=e.n(es);const os=e(5770),is=os.endpoint_path_v2,ls={name:"BarChart",data(){return{options:{chart:{type:"bar",height:300,width:"100%"},series:[{name:"Documentos procesados",data:[]}],xaxis:{categories:[]}}}},methods:{createData(s){const t={idtipodocumento:void 0,idserviciosmasivo:s,idcodigocomercial:void 0,estatus:1},e=[0,0,0,0,0,0,0,0,0,0,0,0];as().post(is+"reporte/grafica",t).then((async s=>{const t=s.data.data;for(const i in t){const s=t[i];e[s.mes-1]=s.total}const a=["Ene","Feb","Mar","Abr","May","Juno","Julo","Ago","Sep","Oct","Nov","Dic"];this.options.xaxis.categories=a,this.options.series[0].data=e;const o=new(ts())(document.querySelector("#chart"),this.options);o.render()}))}}};var ds=e(4260);const cs=(0,ds.Z)(ls,[["render",X]]),ns=cs,rs={key:0,class:"text-center"},ms=(0,a._)("img",{src:"estatusgrafica.png",alt:"Sin datos",style:{width:"250px"}},null,-1),us=(0,a._)("div",{class:"dash_welcome_small"},"No hay datos que mostrar para esta fecha",-1),hs=[ms,us],ps={key:1,id:"donutchart"};function fs(s,t,e,o,i,l){return"1"===i.estatus?((0,a.wg)(),(0,a.iD)("div",rs,hs)):((0,a.wg)(),(0,a.iD)("div",ps))}var gs=e(1488),_s=e.n(gs);const bs=e(5770),ws=bs.endpoint_path_v2,js={name:"DonutChart",data(){return{estatus:"3",options:{chart:{type:"donut"},plotOptions:{pie:{donut:{labels:{show:!0,name:{show:!0},value:{show:!0}}}}},noData:{text:"No data text",align:"center",verticalAlign:"middle"},series:[],labels:["Factura","Nota de débito","Nota de crédito","Orden de entrega","Guía de despacho"]}}},methods:{reset(){return this.options.series},createData(s,t,e){const a=[],o={idserviciosmasivo:s,desde:_s()(t,"YYYY/MM/DD").format("YYYY-MM-DD"),hasta:_s()(e,"YYYY/MM/DD").format("YYYY-MM-DD")};as().post(ws+"reporte/totaldocumentos",o).then((async s=>{const t=s.data.data;if(console.log(t[0].totaldoc),a.push(Number(t[0].totaldoc)),a.push(Number(t[1].totaldoc)),a.push(Number(t[2].totaldoc)),a.push(Number(t[3].totaldoc)),a.push(Number(t[4].totaldoc)),this.options.series=a,console.log(this.options),console.log(this.options.series),this.estatus="2","2"===this.estatus){const s=new(ts())(document.querySelector("#donutchart"),this.options);s.render()}})).catch((s=>{console.log("Problemas al listar Documentos "+s)}))}}},vs=(0,ds.Z)(js,[["render",fs]]),ys=vs;var ks=e(4434);const Ys=e(5770),Ds=Ys.endpoint_path_v2,xs=(0,a.aZ)({name:"Dashboard",components:{DonutChart:ys,BarChart:ns},setup(){return{estatusasignacion:(0,$.iH)(!1),totalAsignados:(0,$.iH)(0),clientesTerminando:(0,$.iH)(0),totalUtilizados:(0,$.iH)(0),avg7Days:(0,$.iH)(22.8),totaldoc:(0,$.iH)(0),totalAnulados:(0,$.iH)(0),totalexento:(0,$.iH)(0),totalimpg:(0,$.iH)(0),totalimpr:(0,$.iH)(0),totalimpa:(0,$.iH)(0),totalimpigtf:(0,$.iH)(0),totalimp:(0,$.iH)(0),totalbaseg:(0,$.iH)(0),totalbaser:(0,$.iH)(0),totalbasea:(0,$.iH)(0),totalbaseigtf:(0,$.iH)(0),totalfacturas:(0,$.iH)(0),sumafacturas:(0,$.iH)(0),totalcreditos:(0,$.iH)(0),sumacreditos:(0,$.iH)(0),totaldebitos:(0,$.iH)(0),sumadebitos:(0,$.iH)(0),columnssemana:[{name:"razonsocial",label:"Cliente emisor",field:"razonsocial",align:"left"},{name:"hoy",label:"Hoy",field:"hoy"},{name:"hace1dia",label:_s()().subtract(1,"days").format("DD/MM/YYYY"),field:"hace1dia"},{name:"hace2dia",label:_s()().subtract(2,"days").format("DD/MM/YYYY"),field:"hace2dia"},{name:"hace3dia",label:_s()().subtract(3,"days").format("DD/MM/YYYY"),field:"hace3dia"},{name:"hace4dia",label:_s()().subtract(4,"days").format("DD/MM/YYYY"),field:"hace4dia"},{name:"hace5dia",label:_s()().subtract(5,"days").format("DD/MM/YYYY"),field:"hace5dia"},{name:"hace6dia",label:_s()().subtract(6,"days").format("DD/MM/YYYY"),field:"hace6dia"}],fechacustom:(0,$.iH)("1"),disabledSede:(0,$.iH)(!1),disabledCodes:(0,$.iH)(!1),dateFrom:(0,$.iH)(_s()().format("YYYY-MM-DD")),dateTo:(0,$.iH)(_s()().format("YYYY-MM-DD")),modeltipo:(0,$.iH)([]),modelsede:(0,$.iH)([]),modelcodes:(0,$.iH)([]),modelfechas:(0,$.iH)("Hoy"),optionstipo:(0,$.iH)([]),optionssede:(0,$.iH)([]),optionscodes:(0,$.iH)([]),idtipodocumento:(0,$.iH)(null),idcodigocomercial:(0,$.iH)(null),idserviciosmasivo:(0,$.iH)(null),serviciosmasivo:(0,$.iH)(null),tipodocumento:(0,$.iH)("Todos"),codigocomercial:(0,$.iH)("Todos"),optionsfechas:(0,$.iH)([{cod:1,name:"Hoy"},{cod:4,name:"Ayer"},{cod:2,name:"En 1 semana"},{cod:3,name:"En 1 mes"}]),co_rol:sessionStorage.getItem("co_rol"),co_sede:sessionStorage.getItem("co_sede"),tx_sede:sessionStorage.getItem("tx_sede"),co_sede_seleted:sessionStorage.getItem("co_sede_seleted"),tx_sede_seleted:sessionStorage.getItem("tx_sede_seleted"),rif_sede_seleted:sessionStorage.getItem("rif_sede_seleted")}},data(){return{docproc:[],tab:"grafica",saludo:"Buenos días",totalclientes:0,totalDisponible:0,modalFechas:!1,dsbFechas:!0,idusuario:sessionStorage.getItem("id_usuario"),displayName:sessionStorage.getItem("tx_nombre"),rowssemana:[]}},methods:{openFechas(){this.modalFechas=!0},getDocProcesados(){const s={idserviciosmasivo:this.idserviciosmasivo,desde:_s()(this.dateFrom,"YYYY/MM/DD").format("YYYY-MM-DD"),hasta:_s()(this.dateTo,"YYYY/MM/DD").format("YYYY-MM-DD")};as().post(Ds+"reporte/totaldocumentos",s).then((async s=>{const t=s.data.data;this.totalfacturas=t[0].totaldoc,this.sumafacturas=this.completarDecimales(Number(t[0].sumadocg)+Number(t[0].sumadocigtf)),this.totalcreditos=t[1].totaldoc,this.sumacreditos=this.completarDecimales(Number(t[1].sumadocg)+Number(t[1].sumadocigtf)),this.totaldebitos=t[2].totaldoc,this.sumadebitos=this.completarDecimales(Number(t[2].sumadocg)+Number(t[2].sumadocigtf))})).catch((s=>{ks.Z.create("Problemas al listar Documentos "+s)}))},getUltimaSemana(){const s={idserviciosmasivo:this.idserviciosmasivo};as().post(Ds+"reporte/ultimasemana",s).then((async s=>{const t=s.data.data;this.rowssemana=[];for(const e in t){const s={};s.razonsocial=t[e].razonsocial,s.hoy=t[e].hoy,s.hace1dia=t[e].hace1dia,s.hace2dia=t[e].hace2dia,s.hace3dia=t[e].hace3dia,s.hace4dia=t[e].hace4dia,s.hace5dia=t[e].hace5dia,s.hace6dia=t[e].hace6dia,this.rowssemana.push(s)}})).catch((s=>{ks.Z.create("Problemas al listar Ultima semana "+s)}))},totalImp(){const s={idserviciosmasivo:this.idserviciosmasivo,desde:_s()(this.dateFrom,"YYYY/MM/DD").format("YYYY-MM-DD"),hasta:_s()(this.dateTo,"YYYY/MM/DD").format("YYYY-MM-DD")};as().post(Ds+"reporte/impprocesados",s).then((async s=>{const t=s.data.data;this.totaldoc=t[0].total,this.totalexento=t[0].totalexento||0,this.totalimpg=t[0].totalg||0,this.totalimpr=t[0].totalr||0,this.totalimpigtf=t[0].totaligtf||0,this.totalimp=Number(this.totalimpg)+Number(this.totalimpr)+Number(this.totalimpigtf),this.totalbaseg=t[0].totalbaseg||0,this.totalbaser=t[0].totalbaser||0,this.totalbaseigtf=t[0].totalbaseigtf||0,this.totalbaseg=this.completarDecimales(this.totalbaseg),this.totalbaser=this.completarDecimales(this.totalbaser),this.totalbaseigtf=this.completarDecimales(this.totalbaseigtf),this.totalimpg=this.completarDecimales(this.totalimpg),this.totalimpr=this.completarDecimales(this.totalimpr),this.totalimpigtf=this.completarDecimales(this.totalimpigtf),this.totalimp=this.completarDecimales(this.totalimp),this.totalexento=this.completarDecimales(this.totalexento)})).catch((s=>{ks.Z.create("Problemas al procesar "+s)})),as().post(Ds+"reporte/anulados",s).then((async s=>{const t=s.data.data;this.totalAnulados=t[0].totalanu})).catch((s=>{ks.Z.create("Problemas al procesar  anulados"+s)}))},completarDecimales(s){s=Intl.NumberFormat("de-DE").format(s.toFixed(2));const t=s.split(",");return s=1===t.length?s+",00":1===t[1].length?s+"0":s,s},searchEmisor(s,t,e){s.length<3?e():t((()=>{if(""===s)this.optionssede=this.emisores;else{const t=s.toLowerCase();this.optionssede=this.emisores.filter((s=>s.namerif.toLowerCase().indexOf(t)>-1))}}))},searchCodes(s,t,e){s.length<3?e():t((()=>{if(""===s)this.optionscodes=this.codes;else{const t=s.toLowerCase();this.optionscodes=this.codes.filter((s=>s.namecode.toLowerCase().indexOf(t)>-1))}}))},changeSede(){this.idserviciosmasivo=this.modelsede?.cod,this.serviciosmasivo=this.modelsede?.namerif,this.listarReportes(),this.crearbitacora(this.dateFrom,this.dateTo,2)},getLotes(){const s={id:this.idserviciosmasivo};as().post(Ds+"sede/lotes",s).then((async s=>{const t=s.data.data;this.totalAsignados=0,this.totalUtilizados=0,this.estatusasignacion=!0;for(const e in t)this.totalAsignados+=Number(t[e].cantidad),this.totalUtilizados+=Number(t[e].utilizado),this.estatusasignacion=this.totalUtilizados/this.totalAsignados<.8||!1;this.totalDisponible=this.totalAsignados-this.totalUtilizados})).catch((s=>{ks.Z.create("Problemas al listar Lotes "+s)}))},listarsedes(){as().get(Ds+"sede").then((async s=>{const t=s.data.data;this.optionssede=[];const e={cod:null,name:"Todos",rif:null,namerif:""};this.optionssede.push(e);for(const a in t)if(t[a].razonsocial.length>0){const s={};s.cod=t[a].id,s.name=t[a].razonsocial,s.rif=t[a].rif,s.namerif=t[a].razonsocial+" "+t[a].rif,s.tokenservicios=t[a].tokenservicios,this.optionssede.push(s)}this.emisores=this.optionssede,this.rifs=this.optionssede,this.totalclientes=t.length})).catch((s=>{ks.Z.create("Problemas al listar Sedes "+s)}))},listarReportes(){this.totalImp(),this.getDocProcesados(),this.getUltimaSemana(),this.getLotes(),this.$refs.barmeses.createData(this.idserviciosmasivo),this.$refs.donutipos.createData(this.idserviciosmasivo,this.dateFrom,this.dateTo)},changeFechas(){const s=document.querySelector(".fecha1"),t=document.querySelector(".fecha2");this.dateFrom=s.value,this.dateTo=t.value,this.crearbitacora(this.dateFrom,this.dateTo,2)},crearbitacora(s,t,e){let a="";const o=" desde el "+s+" hasta el "+t,i=this.modelsede?.name?"Cliente emisor "+this.modelsede.namerif:"";a+=i,a+=o,as().post(Ds+"bitacora",{idusuario:this.idusuario,idevento:e,ip:this.term,observacion:a,fecha:_s()().format("YYYY-MM-DD HH:mm:ss")})}},watch:{fechacustom:function(s){switch(console.log(s),s){case"1":this.dateFrom=_s()().format("YYYY-MM-DD"),this.dateTo=_s()().format("YYYY-MM-DD"),this.dsbFechas=!0;break;case"2":this.dateFrom=_s()().subtract(1,"days").format("YYYY-MM-DD"),this.dateTo=_s()().subtract(1,"days").format("YYYY-MM-DD"),this.dsbFechas=!0;break;case"3":this.dateFrom=_s()().subtract(7,"days").format("YYYY-MM-DD"),this.dateTo=_s()().format("YYYY-MM-DD"),this.dsbFechas=!0;break;case"4":this.dateFrom=_s()().subtract(30,"days").format("YYYY-MM-DD"),this.dateto=_s()().format("YYYY-MM-DD"),this.dsbFechas=!0;break;case"5":this.dsbFechas=!1;break}this.listarReportes(),this.crearbitacora(this.dateFrom,this.dateTo,2)}},mounted(){if(this.listarsedes(),console.log(this.co_rol),this.idserviciosmasivo="3"===this.co_rol?this.co_sede:void 0,this.serviciosmasivo="3"===this.co_rol?this.tx_sede:void 0,console.log("Mounted"),console.log(this.tx_sede_seleted),console.log(this.co_sede_seleted),this.co_sede_seleted){const s={};s.cod=this.co_sede_seleted,s.rif=this.rif_sede_seleted,s.razonsocial=this.tx_sede_seleted,this.idserviciosmasivo=this.co_sede_seleted,s.namerif=s.razonsocial+" "+s.rif,this.serviciosmasivo=s.namerif,this.modelsede=s,this.disabledSede=!0}console.log(this.serviciosmasivo),this.listarReportes()}});var Ws=e(4379),Ms=e(151),zs=e(5589),Hs=e(4554),Us=e(8516),qs=e(7011),Fs=e(3414),Cs=e(2035),Ts=e(2350),Ss=e(5096),Ns=e(4993),Zs=e(6778),Is=e(5869),Vs=e(7991),As=e(8240),Qs=e(9367),Bs=e(677),Es=e(7518),Ps=e.n(Es);const Ls=(0,ds.Z)(xs,[["render",J]]),Os=Ls;Ps()(xs,"components",{QPage:Ws.Z,QCard:Ms.Z,QCardSection:zs.Z,QIcon:Hs.Z,QSelect:Us.Z,QList:qs.Z,QItem:Fs.Z,QItemSection:Cs.Z,QItemLabel:Ts.Z,QAvatar:Ss.Z,QTable:Ns.Z,QDialog:Zs.Z,QSeparator:Is.Z,QRadio:Vs.Z,QBtn:As.Z,QCardActions:Qs.Z}),Ps()(xs,"directives",{ClosePopup:Bs.Z})},6700:(s,t,e)=>{var a={"./af":5809,"./af.js":5809,"./ar":6069,"./ar-dz":481,"./ar-dz.js":481,"./ar-kw":3994,"./ar-kw.js":3994,"./ar-ly":3312,"./ar-ly.js":3312,"./ar-ma":239,"./ar-ma.js":239,"./ar-ps":7916,"./ar-ps.js":7916,"./ar-sa":1863,"./ar-sa.js":1863,"./ar-tn":9607,"./ar-tn.js":9607,"./ar.js":6069,"./az":9281,"./az.js":9281,"./be":9945,"./be.js":9945,"./bg":9384,"./bg.js":9384,"./bm":1476,"./bm.js":1476,"./bn":3345,"./bn-bd":216,"./bn-bd.js":216,"./bn.js":3345,"./bo":1713,"./bo.js":1713,"./br":9655,"./br.js":9655,"./bs":7296,"./bs.js":7296,"./ca":3049,"./ca.js":3049,"./cs":2722,"./cs.js":2722,"./cv":8039,"./cv.js":8039,"./cy":5563,"./cy.js":5563,"./da":1960,"./da.js":1960,"./de":7533,"./de-at":6674,"./de-at.js":6674,"./de-ch":7732,"./de-ch.js":7732,"./de.js":7533,"./dv":8343,"./dv.js":8343,"./el":7004,"./el.js":7004,"./en-au":2517,"./en-au.js":2517,"./en-ca":4929,"./en-ca.js":4929,"./en-gb":9722,"./en-gb.js":9722,"./en-ie":6923,"./en-ie.js":6923,"./en-il":8050,"./en-il.js":8050,"./en-in":9624,"./en-in.js":9624,"./en-nz":540,"./en-nz.js":540,"./en-sg":4375,"./en-sg.js":4375,"./eo":40,"./eo.js":40,"./es":9720,"./es-do":5595,"./es-do.js":5595,"./es-mx":180,"./es-mx.js":180,"./es-us":1563,"./es-us.js":1563,"./es.js":9720,"./et":9217,"./et.js":9217,"./eu":9474,"./eu.js":9474,"./fa":5243,"./fa.js":5243,"./fi":7645,"./fi.js":7645,"./fil":5350,"./fil.js":5350,"./fo":5622,"./fo.js":5622,"./fr":1467,"./fr-ca":3439,"./fr-ca.js":3439,"./fr-ch":4335,"./fr-ch.js":4335,"./fr.js":1467,"./fy":6026,"./fy.js":6026,"./ga":2969,"./ga.js":2969,"./gd":1347,"./gd.js":1347,"./gl":1085,"./gl.js":1085,"./gom-deva":904,"./gom-deva.js":904,"./gom-latn":9597,"./gom-latn.js":9597,"./gu":8705,"./gu.js":8705,"./he":9128,"./he.js":9128,"./hi":2821,"./hi.js":2821,"./hr":9002,"./hr.js":9002,"./hu":4814,"./hu.js":4814,"./hy-am":658,"./hy-am.js":658,"./id":9344,"./id.js":9344,"./is":8204,"./is.js":8204,"./it":376,"./it-ch":1549,"./it-ch.js":1549,"./it.js":376,"./ja":9293,"./ja.js":9293,"./jv":6401,"./jv.js":6401,"./ka":482,"./ka.js":482,"./kk":7329,"./kk.js":7329,"./km":4241,"./km.js":4241,"./kn":3566,"./kn.js":3566,"./ko":2742,"./ko.js":2742,"./ku":2915,"./ku-kmr":2346,"./ku-kmr.js":2346,"./ku.js":2915,"./ky":6846,"./ky.js":6846,"./lb":4959,"./lb.js":4959,"./lo":2188,"./lo.js":2188,"./lt":8967,"./lt.js":8967,"./lv":1245,"./lv.js":1245,"./me":751,"./me.js":751,"./mi":7501,"./mi.js":7501,"./mk":1643,"./mk.js":1643,"./ml":5597,"./ml.js":5597,"./mn":7893,"./mn.js":7893,"./mr":9065,"./mr.js":9065,"./ms":4703,"./ms-my":4645,"./ms-my.js":4645,"./ms.js":4703,"./mt":4365,"./mt.js":4365,"./my":3788,"./my.js":3788,"./nb":7357,"./nb.js":7357,"./ne":9109,"./ne.js":9109,"./nl":3746,"./nl-be":1985,"./nl-be.js":1985,"./nl.js":3746,"./nn":7175,"./nn.js":7175,"./oc-lnc":566,"./oc-lnc.js":566,"./pa-in":2733,"./pa-in.js":2733,"./pl":182,"./pl.js":182,"./pt":505,"./pt-br":7839,"./pt-br.js":7839,"./pt.js":505,"./ro":9578,"./ro.js":9578,"./ru":2328,"./ru.js":2328,"./sd":641,"./sd.js":641,"./se":1758,"./se.js":1758,"./si":6680,"./si.js":6680,"./sk":5016,"./sk.js":5016,"./sl":7424,"./sl.js":7424,"./sq":8635,"./sq.js":8635,"./sr":9038,"./sr-cyrl":3716,"./sr-cyrl.js":3716,"./sr.js":9038,"./ss":4771,"./ss.js":4771,"./sv":3517,"./sv.js":3517,"./sw":9419,"./sw.js":9419,"./ta":5959,"./ta.js":5959,"./te":1739,"./te.js":1739,"./tet":2264,"./tet.js":2264,"./tg":4792,"./tg.js":4792,"./th":8328,"./th.js":8328,"./tk":702,"./tk.js":702,"./tl-ph":7814,"./tl-ph.js":7814,"./tlh":797,"./tlh.js":797,"./tr":6691,"./tr.js":6691,"./tzl":6891,"./tzl.js":6891,"./tzm":6362,"./tzm-latn":7855,"./tzm-latn.js":7855,"./tzm.js":6362,"./ug-cn":7606,"./ug-cn.js":7606,"./uk":513,"./uk.js":513,"./ur":3803,"./ur.js":3803,"./uz":344,"./uz-latn":8957,"./uz-latn.js":8957,"./uz.js":344,"./vi":3,"./vi.js":3,"./x-pseudo":8842,"./x-pseudo.js":8842,"./yo":2083,"./yo.js":2083,"./zh-cn":4536,"./zh-cn.js":4536,"./zh-hk":2475,"./zh-hk.js":2475,"./zh-mo":7593,"./zh-mo.js":7593,"./zh-tw":4746,"./zh-tw.js":4746};function o(s){var t=i(s);return e(t)}function i(s){if(!e.o(a,s)){var t=new Error("Cannot find module '"+s+"'");throw t.code="MODULE_NOT_FOUND",t}return a[s]}o.keys=function(){return Object.keys(a)},o.resolve=i,s.exports=o,o.id=6700}}]);