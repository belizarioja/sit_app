(globalThis["webpackChunksit_frontend"]=globalThis["webpackChunksit_frontend"]||[]).push([[851],{5770:e=>{e.exports={endpoint_path_v2:"https://bck-test.factura-smart.com/",version:"2.0.0"}},895:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>ct});var o=a(3673),s=a(8880);const l={class:"my-font my-fondo reports"},n=(0,o._)("div",{class:"col-md-3 col-sm-12 col-xs-12"},[(0,o._)("span",{class:"text-secondary",style:{margin:"0 20px","font-size":"25px","font-weight":"bolder"}},"Informe")],-1),r=(0,o._)("div",{class:"row q-pa-sm q-gutter-sm"},null,-1),i={class:"row justify-end q-gutter-sm"},c={class:"row"},m={class:"row justify-end q-gutter-sm"},d={class:"row"},u={class:"row justify-end q-gutter-sm"},p={class:"row"},h={class:"row justify-end q-gutter-sm"},f={class:"row"},b={class:"q-pa-sm"},w={class:"tituloDrawer"},_=(0,o._)("div",{style:{margin:"0 20px","font-size":"25px","font-weight":"bolder"}},"Filtros",-1),g={style:{margin:"20px 5px",border:"solid 1px #ccc","border-radius":"5px",padding:"15px",position:"relative"}},j=(0,o._)("span",{class:"bg-white",style:{position:"absolute",top:"-12px",left:"10px",color:"#ccc"}},"Fechas:",-1),v={style:{display:"flex","justify-content":"space-around"}},y={class:"row items-center justify-end"},x={style:{margin:"20px 5px",border:"solid 1px #ccc","border-radius":"5px",padding:"15px",position:"relative"}},k=(0,o._)("span",{class:"bg-white",style:{position:"absolute",top:"-12px",left:"10px",color:"#ccc"}},"Cliente emisor:",-1),T={class:"text-center"};function F(e,t,a,F,C,D){const E=(0,o.up)("q-tab"),z=(0,o.up)("q-tabs"),A=(0,o.up)("q-btn"),W=(0,o.up)("reporte-emisor"),I=(0,o.up)("q-tab-panel"),N=(0,o.up)("reporte-semanal"),O=(0,o.up)("reporte-providencia"),S=(0,o.up)("reporte-anual"),q=(0,o.up)("q-tab-panels"),M=(0,o.up)("q-icon"),$=(0,o.up)("q-date"),P=(0,o.up)("q-popup-proxy"),R=(0,o.up)("q-input"),L=(0,o.up)("q-select"),Z=(0,o.up)("q-scroll-area"),U=(0,o.up)("q-drawer"),Q=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.iD)("section",l,[n,r,(0,o.Wm)(z,{modelValue:C.tab,"onUpdate:modelValue":t[0]||(t[0]=e=>C.tab=e),dense:"",class:"text-grey","active-color":"positive","indicator-color":"positive",align:"justify","narrow-indicator":"","inline-label":""},{default:(0,o.w5)((()=>[(0,o.Wm)(E,{icon:"date_range",name:"semanal",label:"Semanal"}),(0,o.Wm)(E,{icon:"storefront",name:"emisor",label:"Emisor"}),(0,o.Wm)(E,{icon:"calendar_month",name:"providencia",label:"Providencia 0032"}),(0,o.Wm)(E,{icon:"calendar_month",name:"anual",label:"Anual"})])),_:1},8,["modelValue"]),(0,o.Wm)(q,{modelValue:C.tab,"onUpdate:modelValue":t[3]||(t[3]=e=>C.tab=e),animated:"",class:"my-fondo"},{default:(0,o.w5)((()=>[(0,o.Wm)(I,{name:"emisor",class:"q-gutter-md"},{default:(0,o.w5)((()=>[(0,o._)("div",i,[(0,o.Wm)(A,{"icon-right":"filter_alt",color:"secondary",label:"Filtrar",onClick:t[1]||(t[1]=e=>C.drawerFilters=!0)}),(0,o.Wm)(A,{"icon-right":"file_download",color:"secondary",label:"Exportar a Excel",onClick:D.exportExcelEmisor},null,8,["onClick"]),(0,o.Wm)(A,{"icon-right":"picture_as_pdf",color:"secondary",label:"Exportar a PDF",onClick:D.exportPDFEmisor},null,8,["onClick"])]),(0,o._)("div",c,[(0,o.wy)((0,o.Wm)(W,{ref:"reporte_emisor",mesName:C.mes,emisores:C.dataTableEmisor,class:"col-xs-12 col-sm-12 col-md-12 col-lg-12"},null,8,["mesName","emisores"]),[[s.F8,!0]])])])),_:1}),(0,o.Wm)(I,{name:"semanal",class:"q-gutter-md"},{default:(0,o.w5)((()=>[(0,o._)("div",m,[(0,o.Wm)(A,{"icon-right":"filter_alt",color:"secondary",label:"Filtrar",onClick:t[2]||(t[2]=e=>C.drawerFilters=!0)}),(0,o.Wm)(A,{"icon-right":"file_download",color:"secondary",label:"Exportar a Excel",onClick:D.exportExcelSemanal},null,8,["onClick"]),(0,o.Wm)(A,{"icon-right":"picture_as_pdf",color:"secondary",label:"Exportar a PDF",onClick:D.exportPDFSemanal},null,8,["onClick"])]),(0,o._)("div",d,[(0,o.wy)((0,o.Wm)(N,{ref:"reporte_semanal",date:C.mes,semanales:C.dataTableSemanal,class:"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 q-gutter-sm"},null,8,["date","semanales"]),[[s.F8,!0]])])])),_:1}),(0,o.Wm)(I,{name:"providencia",class:"q-gutter-md"},{default:(0,o.w5)((()=>[(0,o._)("div",u,[(0,o.Wm)(A,{"icon-right":"file_download",color:"secondary",label:"Exportar a Excel",onClick:D.exportExcelProvidencia},null,8,["onClick"]),(0,o.Wm)(A,{"icon-right":"picture_as_pdf",color:"secondary",label:"Exportar a PDF",onClick:D.exportPDFProvidencia},null,8,["onClick"])]),(0,o._)("div",p,[(0,o.wy)((0,o.Wm)(O,{ref:"reporte_providencia",lotes:C.dataTableLotes,class:"col-xs-12 col-sm-12 col-md-12 col-lg-12"},null,8,["lotes"]),[[s.F8,!0]])])])),_:1}),(0,o.Wm)(I,{name:"anual",class:"q-gutter-md"},{default:(0,o.w5)((()=>[(0,o._)("div",h,[(0,o.Wm)(A,{"icon-right":"file_download",color:"secondary",label:"Exportar a Excel",onClick:D.exportExcelAnual},null,8,["onClick"]),(0,o.Wm)(A,{"icon-right":"picture_as_pdf",color:"secondary",label:"Exportar a PDF",onClick:D.exportPDFAnual},null,8,["onClick"])]),(0,o._)("div",f,[(0,o.wy)((0,o.Wm)(S,{ref:"reporte_anual",meses:C.dataTableAnual,class:"col-xs-12 col-sm-12 col-md-12 col-lg-12"},null,8,["meses"]),[[s.F8,!0]])])])),_:1})])),_:1},8,["modelValue"]),(0,o.Wm)(U,{modelValue:C.drawerFilters,"onUpdate:modelValue":t[9]||(t[9]=e=>C.drawerFilters=e),side:"right",width:300,breakpoint:700,overlay:"",elevated:"",class:"bg-white text-secondary"},{default:(0,o.w5)((()=>[(0,o.Wm)(Z,{class:"fit"},{default:(0,o.w5)((()=>[(0,o._)("div",b,[(0,o._)("div",w,[_,(0,o.Wm)(M,{color:"red",name:"close",onClick:t[4]||(t[4]=e=>C.drawerFilters=!1),class:"cursor-pointer",style:{"font-size":"x-large"}})]),(0,o._)("div",g,[j,(0,o._)("div",v,[(0,o.Wm)(R,{dense:"",filled:"",label:"Fecha",disable:D.isDisabledMes(),mask:"date",modelValue:C.mes,"onUpdate:modelValue":t[6]||(t[6]=e=>C.mes=e),class:"col-md-3 col-sm-6 col-xs-6"},{append:(0,o.w5)((()=>[(0,o.Wm)(M,{name:"event",class:"cursor-pointer"},{default:(0,o.w5)((()=>[(0,o.Wm)(P,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,o.w5)((()=>[(0,o.Wm)($,{modelValue:C.mes,"onUpdate:modelValue":t[5]||(t[5]=e=>C.mes=e),locale:C.myLocale},{default:(0,o.w5)((()=>[(0,o._)("div",y,[(0,o.wy)((0,o.Wm)(A,{label:"Close",color:"primary",flat:""},null,512),[[Q]])])])),_:1},8,["modelValue","locale"])])),_:1})])),_:1})])),_:1},8,["disable","modelValue"])])]),(0,o._)("div",x,[k,(0,o.Wm)(L,{label:"Buscar por Nombre del Emisor",disable:D.isDisabledEmisor(),dense:"",filled:"",modelValue:C.emisor,"onUpdate:modelValue":t[7]||(t[7]=e=>C.emisor=e),"use-input":"","hide-selected":"","fill-input":"","options-dense":"","option-label":"label","option-value":"value","input-debounce":"0",options:C.emisorOptions},null,8,["disable","modelValue","options"])]),(0,o._)("div",T,[(0,o.Wm)(A,{label:"Cerrar",color:"negative",onClick:t[8]||(t[8]=e=>C.drawerFilters=!1)})])])])),_:1})])),_:1},8,["modelValue"])])}var C=a(1488),D=a.n(C),E=a(2323);const z=e=>((0,o.dD)("data-v-604268e0"),e=e(),(0,o.Cn)(),e),A={ref:"wrapper_table"},W=z((()=>(0,o._)("div",null,[(0,o._)("span",{class:"title"},"Control de Facturas Semanales")],-1))),I={class:"title"},N={class:"row q-gutter-sm"},O={align:"center"};function S(e,t,a,s,l,n){const r=(0,o.up)("q-separator"),i=(0,o.up)("q-th"),c=(0,o.up)("q-tr"),m=(0,o.up)("q-td"),d=(0,o.up)("q-table");return(0,o.wg)(),(0,o.iD)("div",A,[W,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.dataTableOne,(e=>((0,o.wg)(),(0,o.iD)("div",{key:e.id,class:"column q-gutter-y-sm"},[(0,o.Wm)(r),(0,o._)("div",null,[(0,o._)("span",I,(0,E.zw)(e.name),1)]),(0,o.Wm)(d,{ref_for:!0,ref:"table_one",rows:s.makeOneRow(),"hide-bottom":""},{header:(0,o.w5)((()=>[(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[(0,o.Wm)(i,{rowspan:"1",colspan:e.mes.length,style:{"font-weight":"bolder","font-size":"18px",color:"#65778D"}},{default:(0,o.w5)((()=>[(0,o.Uk)((0,E.zw)(s.title),1)])),_:2},1032,["colspan"]),(0,o.Wm)(i,{rowspan:"2",style:{"font-weight":"bolder","font-size":"18px",color:"#0999FF"}},{default:(0,o.w5)((()=>[(0,o.Uk)("Total")])),_:1})])),_:2},1024),(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.mes,(e=>((0,o.wg)(),(0,o.j4)(i,{key:e},{default:(0,o.w5)((()=>[(0,o.Uk)(" Semana "+(0,E.zw)(e.semana),1)])),_:2},1024)))),128))])),_:2},1024)])),body:(0,o.w5)((()=>[(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.mes,(e=>((0,o.wg)(),(0,o.j4)(m,{align:"center",key:e.semana},{default:(0,o.w5)((()=>[(0,o.Uk)((0,E.zw)(e.total),1)])),_:2},1024)))),128)),(0,o.Wm)(m,{align:"center"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,E.zw)(e.total),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["rows"]),(0,o._)("div",N,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.mes,(e=>((0,o.wg)(),(0,o.j4)(d,{ref_for:!0,ref:"table_two",key:e.semana,rows:s.makeOneRow(),"hide-bottom":""},{header:(0,o.w5)((()=>[(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[(0,o.Wm)(i,{rowspan:"1",colspan:"2",style:{"font-weight":"bolder","font-size":"14px",color:"#65778D"}},{default:(0,o.w5)((()=>[(0,o.Uk)(" Controles Asignados "+(0,E.zw)(s.getInitDate(e))+" al "+(0,E.zw)(s.getEndDate(e))+" "+(0,E.zw)(s.mesName),1)])),_:2},1024),(0,o.Wm)(i,{rowspan:"2",style:{"font-weight":"bolder","font-size":"14px",color:"#0999FF"}},{default:(0,o.w5)((()=>[(0,o.Uk)("Total")])),_:1})])),_:2},1024),(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[(0,o.Wm)(i,{colspan:"1",rowspan:"1"},{default:(0,o.w5)((()=>[(0,o.Uk)("Control Inicial")])),_:1}),(0,o.Wm)(i,{colspan:"1",rowspan:"1"},{default:(0,o.w5)((()=>[(0,o.Uk)("Control Final")])),_:1})])),_:1})])),body:(0,o.w5)((()=>[(0,o._)("tr",null,[(0,o._)("td",null,(0,E.zw)(s.getControlInicial(e)),1),(0,o._)("td",null,(0,E.zw)(s.getControlFinal(e)),1),(0,o._)("td",O,(0,E.zw)(e.total),1)])])),_:2},1032,["rows"])))),128))])])))),128))],512)}var q=a(1959),M=a(7213),$=a(477),P=a.n($),R=a(1093),L=a.n(R);function Z(e){const t={"01":"Enero","02":"Febrero","03":"Marzo","04":"Abril","05":"Mayo","06":"Junio","07":"Julio","08":"Agosto","09":"Septiembre",1:"Enero",2:"Febrero",3:"Marzo",4:"Abril",5:"Mayo",6:"Junio",7:"Julio",8:"Agosto",9:"Septiembre",10:"Octubre",11:"Noviembre",12:"Diciembre"};return t[e]}const U={props:["semanales","date"],setup(e){const{semanales:t,date:a}=(0,q.BK)(e),s=(0,o.Fl)((()=>t.value)),l=(0,o.Fl)((()=>{const e=s.value.reduce(((e,t)=>e+t.total),0);return e})),n=e=>e?.semana.split("-")[0],r=e=>e?.semana.split("-")[1],i=e=>e?.controlInicial||"N/A",c=e=>e?.controlFinal||"N/A",m=(0,o.Fl)((()=>{let[e,t]=a.value.split("-");return t||(t=a.value.split("/")[1],e=a.value.split("/")[0]),`${Z(t)}-${e}`})),d=(0,o.Fl)((()=>{let[,e]=a.value.split("-");e||(e=a.value.split("/")[1]);const t=Z(e);return t})),u=(0,o.Fl)((()=>[{id:1,initDate:"01",endDate:"03",controlInicial:"inicial 1",controlFinal:"final 1",total:"12"}])),p=()=>[{}],h=()=>s.value[0]?.name;return{tab:h(),title:m,mesName:d,dataTableOne:s,dataTableTwo:u,totalTableOne:l,getInitDate:n,getEndDate:r,getControlInicial:i,getControlFinal:c,makeOneRow:p}},methods:{nameCurrentMonth(){const e=(new Date).getMonth()+1;return`${Z(e)}`},makeDataExcel(e){const{name:t,mes:a,total:o}=e,s=t.slice(0,20),l=[`Control de Facturas Semanales ${t}`],n=[this.title],r=a.reduce(((e,t)=>{const[a,o]=t.semana.split("-");return[...e,`Controles Asignados ${a} al ${o}`,"",""]}),[]),i=a.map((e=>e.semana)),c=a.map((e=>e.total)),m=a.reduce((e=>[...e,"Control Inicial","Control Final","Total"]),[]),d=a.reduce(((e,t)=>{const a=t.controlInicial||"N/A",o=t.controlFinal||"N/A";return[...e,a,o,t.total]}),[]);return{nameSheet:s,mainTitle:l,title1:n,title2:r,headers:i,content:c,header2:m,content2:d,total:o}},formatExcel({mainTitle:e,title1:t,title2:a,headers:o,content:s,header2:l,content2:n,total:r}={}){return[e,[],t,[...o,"Total"],[...s,r],[],[],a,[...l,`Total ${this.nameCurrentMonth()}`],[...n,r]]},exportExcel(){const e=L().utils.book_new();this.dataTableOne.forEach((t=>{const{nameSheet:a,mainTitle:o,title1:s,title2:l,headers:n,content:r,header2:i,content2:c,total:m}=this.makeDataExcel(t),d=this.formatExcel({mainTitle:o,title1:s,title2:l,headers:n,content:r,header2:i,content2:c,total:m}),u=L().utils.aoa_to_sheet(d);L().utils.book_append_sheet(e,u,a)})),L().writeFile(e,`smart-semanal-${this.title}.xlsx`)},isLastItem(e,t){return t<e.length-1},getPositionX(e,t=100){return e*t},getPositionY(){return 100},exportPDF(){const e=new M["default"]("p","pt");this.dataTableOne.forEach(((t,a)=>{const o=[255,255,255],s=[6,6,6],l=t.mes.map((e=>e.semana)),n=t.mes.map((e=>e.total));e.text(`Control de Facturas Semanales ${t.name}`,40,50),P()(e,{startY:60,head:[[this.nameCurrentMonth()]],headStyles:{fillColor:o,fontSize:16,textColor:s}}),P()(e,{startY:90,theme:"grid",head:[l],body:[n]}),t.mes.forEach(((t,a)=>{const l=["Control Inicial","Control Final","Total"],n=t.controlInicial||"N/A",r=t.controlFinal||"N/A",i=[n,r,t.total],[c,m]=t.semana.split("-");P()(e,{head:[[`Controles Asignados ${c} al ${m}`]],headStyles:{fillColor:o,textColor:s}}),P()(e,{theme:"grid",head:[l],body:[i],headStyles:{},bodyStyles:{},footStyles:{}})})),this.isLastItem(this.dataTableOne,a)&&e.addPage()})),e.save("smart_reporte_semanal.pdf")}}};var Q=a(4260),V=a(5869),Y=a(4993),J=a(8186),H=a(2414),B=a(3884),K=a(7518),G=a.n(K);const X=(0,Q.Z)(U,[["render",S],["__scopeId","data-v-604268e0"]]),ee=X;G()(U,"components",{QSeparator:V.Z,QTable:Y.Z,QTr:J.Z,QTh:H.Z,QTd:B.Z});const te={style:{width:"100%",display:"flex","justify-content":"center"}},ae=(0,o._)("tr",null,[(0,o._)("th",{style:{"font-weight":"bolder","font-size":"18px",color:"#65778D"}},"Mes"),(0,o._)("th",{style:{"font-weight":"bolder","font-size":"18px",color:"#0999FF"}},"Total")],-1);function oe(e,t,a,s,l,n){const r=(0,o.up)("q-td"),i=(0,o.up)("q-tr"),c=(0,o.up)("q-table");return(0,o.wg)(),(0,o.iD)("div",te,[(0,o.Wm)(c,{ref:"table_anual",rows:s.year,"hide-bottom":"",style:{width:"400px"}},{header:(0,o.w5)((()=>[ae])),body:(0,o.w5)((e=>[(0,o.Wm)(i,{props:e},{default:(0,o.w5)((()=>[(0,o.Wm)(r,{align:"center"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,E.zw)(e.row.month),1)])),_:2},1024),(0,o.Wm)(r,{align:"center"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,E.zw)(e.row.total),1)])),_:2},1024)])),_:2},1032,["props"])])),_:1},8,["rows"])])}function se(){const e=(new Date).getMonth()+1;return`${Z(e)}`}const le={props:["meses"],setup(e){const{meses:t}=(0,q.BK)(e),a=()=>t.value.reduce(((e,t)=>e+Number(t.cantidad)),0),s=(0,o.Fl)((()=>{const e=t.value.map((e=>{const t=Z(e.mes);return{month:t,total:e.cantidad}})),o=a();return[...e,{month:"Total",total:o}]}));return{year:s}},methods:{getChildRefs(){return this.$refs.table_anual},exportExcel(){const e=se(),t=this.year.map((e=>({Mes:e.month,Total:e.total}))),a=L().utils.json_to_sheet(t),o=L().utils.book_new();L().utils.book_append_sheet(o,a,"data"),L().writeFile(o,`anual-${e}.xlsx`)},exportPDF(){const e=se(),t=this.year.map((e=>({Mes:e.month,Total:String(e.total)}))),a=this.year.map((e=>[e.month,String(e.total)])),o=Object.keys(t[0]),s={title:40,table:50},l={title:60,table:60},n=new M["default"]("p","pt");n.text("Smart Reporte Anual",l.title,s.title),P()(n,{margin:{top:60},theme:"grid",head:[o],body:a}),n.save(`smart-anual-${e}.pdf`)}}},ne=(0,Q.Z)(le,[["render",oe]]),re=ne;G()(le,"components",{QTable:Y.Z,QTr:J.Z,QTd:B.Z});const ie={style:{width:"100%",display:"flex","justify-content":"center"}},ce=(0,o._)("tr",null,[(0,o._)("th",null,"Contribuyente"),(0,o._)("th",null,"RIF"),(0,o._)("th",null,"Fecha asig. Nro Control"),(0,o._)("th",null,"Nro Control Inicial"),(0,o._)("th",null,"Nro Control Final"),(0,o._)("th",null,"Cantidad"),(0,o._)("th",null,"Nro Factura Venta")],-1);function me(e,t,a,s,l,n){const r=(0,o.up)("q-td"),i=(0,o.up)("q-tr"),c=(0,o.up)("q-table");return(0,o.wg)(),(0,o.iD)("div",ie,[(0,o.Wm)(c,{ref:"table_providencia",rows:a.lotes,"hide-pagination":"","rows-per-page-options":[0]},{header:(0,o.w5)((()=>[ce])),body:(0,o.w5)((e=>[(0,o.Wm)(i,{props:e},{default:(0,o.w5)((()=>[(0,o.Wm)(r,{align:"center"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,E.zw)(e.row.rif),1)])),_:2},1024),(0,o.Wm)(r,{align:"center"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,E.zw)(e.row.razonsocial),1)])),_:2},1024),(0,o.Wm)(r,{align:"center"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,E.zw)(e.row.fecha),1)])),_:2},1024),(0,o.Wm)(r,{align:"center"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,E.zw)(e.row.inicial),1)])),_:2},1024),(0,o.Wm)(r,{align:"center"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,E.zw)(e.row.termina),1)])),_:2},1024),(0,o.Wm)(r,{align:"center"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,E.zw)(e.row.utilizado),1)])),_:2},1024),(0,o.Wm)(r,{align:"center"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,E.zw)(e.row.soportefactura),1)])),_:2},1024)])),_:2},1032,["props"])])),_:1},8,["rows"])])}const de={props:["lotes"],setup(e){const{lotes:t}=(0,q.BK)(e),a=(e,t)=>{const a=e.toString().padStart(2,"0"),o=t.toString().padStart(8,"0");return a+"-"+o},o=t.value.map((e=>{const t=D()(e.fecha,"YYYY-MM-DD HH:mm:ss").format("DD/MM/YYYY");e.fecha=t;const o=a(e.identificador,e.inicia);return e.inicial=o,e.termina=e.Cantidad>0?a(e.identificador,e.corelativo):e.inicial,e}));return{providencia:o}},methods:{getChildRefs(){return this.$refs.table_providencia},exportExcel(){const e=this.lotes.map((e=>({Contribuyente:e.razonsocial,Rif:e.rif,"Fecha Asig. Nro Control":e.fecha,"Nro Control Inicial":e.inicial,"Nro Control Final":e.termina,Cantidad:e.utilizado,"Nro Factura Venta":e.soportefactura}))),t=se(),a=L().utils.json_to_sheet(e),o=L().utils.book_new();L().utils.book_append_sheet(o,a,"data"),L().writeFile(o,`providencia-${t}.xlsx`)},exportPDF(){const e=se(),t=this.lotes.map((e=>({Contribuyente:e.razonsocial,Rif:e.rif,"Fecha Asig. Nro Control":e.fecha,"Nro Control Inicial":e.inicial,"Nro Control Final":e.termina,Cantidad:e.utilizado,"Nro Factura Venta":e.soportefactura}))),a=this.lotes.map((e=>[e.razonsocial,e.rif,e.fecha,e.inicial,e.termina,e.utilizado,e.soportefactura])),o=Object.keys(t[0]),s={title:40,table:50},l={title:60,table:60},n=new M["default"]("l","pt");n.text("Smart Reporte Providencia 0032",l.title,s.title),P()(n,{margin:{top:60},theme:"grid",head:[o],body:a}),n.save(`smart-providencia-0032-${e}.pdf`)}}},ue=(0,Q.Z)(de,[["render",me]]),pe=ue;G()(de,"components",{QTable:Y.Z,QTr:J.Z,QTd:B.Z});const he=(0,o._)("th",{colspan:"1",rowspan:"2",style:{"font-weight":"bolder","font-size":"18px",color:"#65778D"}},"Cliente Emisor",-1),fe=["colspan"],be=(0,o._)("th",{colspan:"1",rowspan:"2",style:{"font-weight":"bolder","font-size":"18px",color:"#0999FF"}},"Total",-1);function we(e,t,a,s,l,n){const r=(0,o.up)("q-tr"),i=(0,o.up)("q-td"),c=(0,o.up)("q-table");return(0,o.wg)(),(0,o.j4)(c,{ref:"table_emisor",rows:s.mes,"hide-pagination":"","rows-per-page-options":[0]},{header:(0,o.w5)((()=>[(0,o.Wm)(r,null,{default:(0,o.w5)((()=>[he,(0,o._)("th",{colspan:s.semanas?.length,rowspan:"1",style:{"font-weight":"bolder","font-size":"18px",color:"#65778D"}},(0,E.zw)(s.title),9,fe),be])),_:1}),(0,o.Wm)(r,null,{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.semanas,(e=>((0,o.wg)(),(0,o.iD)("th",{colspan:"1",rowspan:"1",key:e.semana},(0,E.zw)(e.semana),1)))),128))])),_:1})])),body:(0,o.w5)((e=>[(0,o.Wm)(r,{props:e},{default:(0,o.w5)((()=>[(0,o.Wm)(i,{align:"left"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,E.zw)(e.row.name),1)])),_:2},1024),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.row.mes,(e=>((0,o.wg)(),(0,o.j4)(i,{key:e.semana,align:"right"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,E.zw)(e.total),1)])),_:2},1024)))),128)),(0,o.Wm)(i,{align:"right"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,E.zw)(e.row.total),1)])),_:2},1024)])),_:2},1032,["props"])])),_:1},8,["rows"])}const _e={props:["emisores","mesName"],setup(e){const{emisores:t,mesName:a}=(0,q.BK)(e),s=(0,o.Fl)((()=>t.value)),l=(0,o.Fl)((()=>s.value[0]?.mes)),n=(0,o.Fl)((()=>{let[e,t]=a.value.split("-");return t||(t=a.value.split("/")[1],e=a.value.split("/")[0]),`${Z(t)}-${e}`}));return{mes:s,semanas:l,title:n}},methods:{nameCurrentMonth(){const e=(new Date).getMonth()+1;return`${Z(e)}`},getChildRefs(){return this.$refs.table_emisor},getWeekHeader(e){const t=Object.entries(e).map((([e,t])=>[t.semana,t.total])),a=Object.fromEntries(t);return a},getArrayWeekHeader(e){const t=Object.entries(e).map((([e,t])=>[t.semana,t.total]));return t},exportExcel(){const e=this.mes.map((e=>({Emisor:e.name,...this.getWeekHeader(e.mes),Total:e.total}))),t=L().utils.json_to_sheet(e),a=L().utils.book_new();L().utils.book_append_sheet(a,t,"data"),L().writeFile(a,`smart-emisor-${this.title}.xlsx`)},exportPDF(){const[e]=this.mes,{mes:t}=e,a=Object.entries(t),o=a.map((([e,t])=>t.semana)),s=["Emisor",...o,"Total"],l=this.mes.map((e=>{const t=e.mes.map((e=>e.total)),a=e.mes.reduce(((e,t)=>e+Number(t.total)),0),o=e.name;return[o,...t,a]})),n=[255,255,255],r=[6,6,6],i={title:30},c={title:60},m=new M["default"]("p","pt");m.text("Reporte Smart Semanal de Emisores",c.title,i.title),P()(m,{startY:60,head:[[this.nameCurrentMonth()]],headStyles:{fillColor:n,fontSize:16,textColor:r}}),P()(m,{margin:{top:70},theme:"grid",head:[s],body:l}),m.save("smart_reporte_emisores.pdf")}}},ge=(0,Q.Z)(_e,[["render",we]]),je=ge;G()(_e,"components",{QTable:Y.Z,QTr:J.Z,QTd:B.Z});var ve=a(52),ye=a.n(ve);const xe=a(5770),ke=xe.endpoint_path_v2;async function Te(e){const t=await ye().post(`${ke}asignaciones/listar`,e);return t}const Fe={RIF:"rif",CLIENTE:"razonsocial",INICIA:"inicia",TERMINA:"termina",UTILIZADO:"utilizado",SOPORTE:"soportefactura",FECHA:"fecha",IDENTIFICADOR:"identificador",CORELATIVO:"corelativo"};async function Ce(){const e={idtipodocumento:void 0,idserviciosmasivo:void 0,idcodigocomercial:void 0,estatus:1},t=await Te(e),a=t.data.data,o=a.map((e=>({[Fe.RIF]:e.rif,[Fe.CLIENTE]:e.razonsocial,[Fe.INICIA]:e.inicia,[Fe.TERMINA]:e.termina,[Fe.UTILIZADO]:e.utilizado,[Fe.SOPORTE]:e.soportefactura,[Fe.FECHA]:e.fecha,[Fe.IDENTIFICADOR]:e.identificador,[Fe.CORELATIVO]:e.corelativo})));return o}const De=a(5770),Ee=De.endpoint_path_v2;async function ze(e){const t=await ye().post(`${Ee}reporte/anual`,e);return t}const Ae={CANTIDAD:"cantidad",MES:"mes",TOTALIGTF:"totaligtf",TOTALIVA:"totaliva"};async function We(){const e={idtipodocumento:void 0,idserviciosmasivo:void 0,idcodigocomercial:void 0,estatus:1},t=await ze(e),a=t.data.data,o=a.map((e=>({[Ae.MES]:e.mes,[Ae.CANTIDAD]:e.cantidad,[Ae.TOTALIGTF]:e.totaligtf,[Ae.TOTALIVA]:e.totaliva})));return o}const Ie=a(5770),Ne=Ie.endpoint_path_v2;async function Oe({month:e,year:t}){const a={mes:e,annio:t},o=await ye().post(`${Ne}reporte/totalsemanastodos`,a);return o}const Se={SEMANA:"semana",CONTROL_INICIAL:"controlInicial",CONTROL_FINAL:"controlFinal",TOTAL:"total"},qe={ID:"id",NAME:"name",MES:"mes",TOTAL:"total"};function Me(e){return e.mes?.map((e=>({[Se.SEMANA]:e.semana,[Se.CONTROL_INICIAL]:e.inicia,[Se.CONTROL_FINAL]:e.termina,[Se.TOTAL]:e.total})))}function $e(e){return e?.mes?.reduce(((e,t)=>e+Number(t.total)),0)}async function Pe({month:e,year:t}){const a=await Oe({month:e,year:t}),o=a.data.data,s=o.map((e=>({[qe.ID]:e.idcliente,[qe.NAME]:e.cliente,[qe.MES]:Me(e),[qe.TOTAL]:$e(e)})));return s}const Re=[{value:1,label:"Enero"},{value:2,label:"Febrero"},{value:3,label:"Marzo"},{value:4,label:"Abril"},{value:5,label:"Mayo"},{value:6,label:"Junio"},{value:7,label:"Julio"},{value:8,label:"Agosto"},{value:9,label:"Septiembre"},{value:10,label:"Octubre"},{value:11,label:"Noviembre"},{value:12,label:"Diciembre"}];function Le(e){const t={1:"Enero",2:"Febrero",3:"Marzo",4:"Abril",5:"Mayo",6:"Junio",7:"Julio",8:"Agosto",9:"Septiembre",10:"Octubre",11:"Noviembre",12:"Diciembre"};return t[e]}function Ze(){const e=(new Date).getMonth()+1;return`${Le(e)}`}const Ue={days:"Domingo_Lunes_Martes_Miércoles_Jueves_Viernes_Sábado".split("_"),daysShort:"Dom_Lun_Mar_Mié_Jue_Vie_Sáb".split("_"),months:"Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre".split("_"),monthsShort:"Ene_Feb_Mar_Abr_May_Jun_Jul_Ago_Sep_Oct_Nov_Dic".split("_"),firstDayOfWeek:1,format24h:!0,pluralDay:"dias"},Qe={components:{ReporteSemanal:ee,ReporteAnual:re,ReporteProvidencia:pe,ReporteEmisor:je},data(){const e=D()().format("YYYY-MM-DD"),t="Todos",a=[];return{myLocale:Ue,drawerFilters:!1,tab:"semanal",mes:e,mesbk:null,emisor:t,emisorOptions:a,mesOptions:Re,dataTableLotes:[],dataTableAnual:[],dataTableEmisor:[],dataTableSemanal:[]}},methods:{getNameEmisores(e){const t=e.map((e=>({label:e.name,value:e.name})));return t},isDisabledEmisor(){return"semanal"!==this.tab&&"emisor"!==this.tab},isDisabledMes(){return"anual"===this.tab},exportExcelProvidencia(){this.$refs.reporte_providencia.exportExcel()},exportPDFProvidencia(){this.$refs.reporte_providencia.exportPDF()},exportExcelAnual(){this.$refs.reporte_anual.exportExcel()},exportPDFAnual(){this.$refs.reporte_anual.exportPDF()},exportExcelEmisor(){this.$refs.reporte_emisor.exportExcel()},exportPDFEmisor(){this.$refs.reporte_emisor.exportPDF()},exportExcelSemanal(){this.$refs.reporte_semanal.exportExcel()},exportPDFSemanal(){this.$refs.reporte_semanal.exportPDF()},async getDataGrafica(){const e=await We();this.dataTableAnual=e},async getDataLotes(){const e=await Ce();this.dataTableLotes=e},async getReporte(e,t){this.$q.loading.show();const a=Ze(),o=e??a,s={month:o,year:t},l=await Pe(s);this.dataTableEmisor=l,this.dataTableSemanal=l;const n=[{label:"Todos",value:"Todos"},...this.getNameEmisores(l)];this.emisorOptions=n,this.$q.loading.hide()},async getReporteByEmisor(e){this.$q.loading.show();let[t,a]=this.mes.split("-");if(!a){const e=this.mes.split("/");t=e[0],a=e[1]}const o={month:a,year:t};if("Todos"===e.label){const e=await Pe(o);return this.dataTableSemanal=e,void this.$q.loading.hide()}const s=await Pe(o),l=s.filter((t=>t.name===e.label));this.dataTableSemanal=l,this.$q.loading.hide()},async filterByEmisor(e){this.$q.loading.show();let[t,a]=this.mes.split("/");if(!a){const e=this.mes.split("-");t=e[0],a=e[1]}const o={month:a,year:t};if("Todos"===e){const e=await Pe(o);return this.dataTableEmisor=e,void this.$q.loading.hide()}const s=await Pe(o),l=s.filter((t=>t.name===e));this.dataTableEmisor=l,this.$q.loading.hide()}},watch:{tab(e,t){e!==t&&(this.emisor={label:"Todos",value:"Todos"})},mes(e,t){if(e!==t){const[t,a]=e.split("/");this.getReporte(a,t)}},emisor(e,t){if(e!==t){if("semanal"===this.tab)return void this.getReporteByEmisor(e);"emisor"===this.tab&&this.filterByEmisor(e.label)}}},mounted(){const e=(new Date).getMonth()+1,t=(new Date).getFullYear();this.getDataGrafica(),this.getDataLotes(),this.getReporte(e,t)}};var Ve=a(4842),Ye=a(4554),Je=a(3944),He=a(5626),Be=a(2165),Ke=a(8516),Ge=a(7547),Xe=a(3269),et=a(5906),tt=a(6602),at=a(2901),ot=a(7704),st=a(677);const lt=(0,Q.Z)(Qe,[["render",F]]),nt=lt;G()(Qe,"components",{QInput:Ve.Z,QIcon:Ye.Z,QPopupProxy:Je.Z,QDate:He.Z,QBtn:Be.Z,QSelect:Ke.Z,QTabs:Ge.Z,QTab:Xe.Z,QTabPanels:et.Z,QTabPanel:tt.Z,QDrawer:at.Z,QScrollArea:ot.Z}),G()(Qe,"directives",{ClosePopup:st.Z});const rt={__name:"Informe.page",setup(e){return(e,t)=>((0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(nt)]))}},it=rt,ct=it},6700:(e,t,a)=>{var o={"./af":5809,"./af.js":5809,"./ar":6069,"./ar-dz":481,"./ar-dz.js":481,"./ar-kw":3994,"./ar-kw.js":3994,"./ar-ly":3312,"./ar-ly.js":3312,"./ar-ma":239,"./ar-ma.js":239,"./ar-ps":7916,"./ar-ps.js":7916,"./ar-sa":1863,"./ar-sa.js":1863,"./ar-tn":9607,"./ar-tn.js":9607,"./ar.js":6069,"./az":9281,"./az.js":9281,"./be":9945,"./be.js":9945,"./bg":9384,"./bg.js":9384,"./bm":1476,"./bm.js":1476,"./bn":3345,"./bn-bd":216,"./bn-bd.js":216,"./bn.js":3345,"./bo":1713,"./bo.js":1713,"./br":9655,"./br.js":9655,"./bs":7296,"./bs.js":7296,"./ca":3049,"./ca.js":3049,"./cs":2722,"./cs.js":2722,"./cv":8039,"./cv.js":8039,"./cy":5563,"./cy.js":5563,"./da":1960,"./da.js":1960,"./de":7533,"./de-at":6674,"./de-at.js":6674,"./de-ch":7732,"./de-ch.js":7732,"./de.js":7533,"./dv":8343,"./dv.js":8343,"./el":7004,"./el.js":7004,"./en-au":2517,"./en-au.js":2517,"./en-ca":4929,"./en-ca.js":4929,"./en-gb":9722,"./en-gb.js":9722,"./en-ie":6923,"./en-ie.js":6923,"./en-il":8050,"./en-il.js":8050,"./en-in":9624,"./en-in.js":9624,"./en-nz":540,"./en-nz.js":540,"./en-sg":4375,"./en-sg.js":4375,"./eo":40,"./eo.js":40,"./es":9720,"./es-do":5595,"./es-do.js":5595,"./es-mx":180,"./es-mx.js":180,"./es-us":1563,"./es-us.js":1563,"./es.js":9720,"./et":9217,"./et.js":9217,"./eu":9474,"./eu.js":9474,"./fa":5243,"./fa.js":5243,"./fi":7645,"./fi.js":7645,"./fil":5350,"./fil.js":5350,"./fo":5622,"./fo.js":5622,"./fr":1467,"./fr-ca":3439,"./fr-ca.js":3439,"./fr-ch":4335,"./fr-ch.js":4335,"./fr.js":1467,"./fy":6026,"./fy.js":6026,"./ga":2969,"./ga.js":2969,"./gd":1347,"./gd.js":1347,"./gl":1085,"./gl.js":1085,"./gom-deva":904,"./gom-deva.js":904,"./gom-latn":9597,"./gom-latn.js":9597,"./gu":8705,"./gu.js":8705,"./he":9128,"./he.js":9128,"./hi":2821,"./hi.js":2821,"./hr":9002,"./hr.js":9002,"./hu":4814,"./hu.js":4814,"./hy-am":658,"./hy-am.js":658,"./id":9344,"./id.js":9344,"./is":8204,"./is.js":8204,"./it":376,"./it-ch":1549,"./it-ch.js":1549,"./it.js":376,"./ja":9293,"./ja.js":9293,"./jv":6401,"./jv.js":6401,"./ka":482,"./ka.js":482,"./kk":7329,"./kk.js":7329,"./km":4241,"./km.js":4241,"./kn":3566,"./kn.js":3566,"./ko":2742,"./ko.js":2742,"./ku":2915,"./ku-kmr":2346,"./ku-kmr.js":2346,"./ku.js":2915,"./ky":6846,"./ky.js":6846,"./lb":4959,"./lb.js":4959,"./lo":2188,"./lo.js":2188,"./lt":8967,"./lt.js":8967,"./lv":1245,"./lv.js":1245,"./me":751,"./me.js":751,"./mi":7501,"./mi.js":7501,"./mk":1643,"./mk.js":1643,"./ml":5597,"./ml.js":5597,"./mn":7893,"./mn.js":7893,"./mr":9065,"./mr.js":9065,"./ms":4703,"./ms-my":4645,"./ms-my.js":4645,"./ms.js":4703,"./mt":4365,"./mt.js":4365,"./my":3788,"./my.js":3788,"./nb":7357,"./nb.js":7357,"./ne":9109,"./ne.js":9109,"./nl":3746,"./nl-be":1985,"./nl-be.js":1985,"./nl.js":3746,"./nn":7175,"./nn.js":7175,"./oc-lnc":566,"./oc-lnc.js":566,"./pa-in":2733,"./pa-in.js":2733,"./pl":182,"./pl.js":182,"./pt":505,"./pt-br":7839,"./pt-br.js":7839,"./pt.js":505,"./ro":9578,"./ro.js":9578,"./ru":2328,"./ru.js":2328,"./sd":641,"./sd.js":641,"./se":1758,"./se.js":1758,"./si":6680,"./si.js":6680,"./sk":5016,"./sk.js":5016,"./sl":7424,"./sl.js":7424,"./sq":8635,"./sq.js":8635,"./sr":9038,"./sr-cyrl":3716,"./sr-cyrl.js":3716,"./sr.js":9038,"./ss":4771,"./ss.js":4771,"./sv":3517,"./sv.js":3517,"./sw":9419,"./sw.js":9419,"./ta":5959,"./ta.js":5959,"./te":1739,"./te.js":1739,"./tet":2264,"./tet.js":2264,"./tg":4792,"./tg.js":4792,"./th":8328,"./th.js":8328,"./tk":702,"./tk.js":702,"./tl-ph":7814,"./tl-ph.js":7814,"./tlh":797,"./tlh.js":797,"./tr":6691,"./tr.js":6691,"./tzl":6891,"./tzl.js":6891,"./tzm":6362,"./tzm-latn":7855,"./tzm-latn.js":7855,"./tzm.js":6362,"./ug-cn":7606,"./ug-cn.js":7606,"./uk":513,"./uk.js":513,"./ur":3803,"./ur.js":3803,"./uz":344,"./uz-latn":8957,"./uz-latn.js":8957,"./uz.js":344,"./vi":3,"./vi.js":3,"./x-pseudo":8842,"./x-pseudo.js":8842,"./yo":2083,"./yo.js":2083,"./zh-cn":4536,"./zh-cn.js":4536,"./zh-hk":2475,"./zh-hk.js":2475,"./zh-mo":7593,"./zh-mo.js":7593,"./zh-tw":4746,"./zh-tw.js":4746};function s(e){var t=l(e);return a(t)}function l(e){if(!a.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}s.keys=function(){return Object.keys(o)},s.resolve=l,e.exports=s,s.id=6700}}]);