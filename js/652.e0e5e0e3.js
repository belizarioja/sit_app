(globalThis["webpackChunksit_frontend"]=globalThis["webpackChunksit_frontend"]||[]).push([[652],{5770:t=>{t.exports={endpoint_path_v2:"https://bck-test.factura-smart.com/",version:"2.0.0"}},7661:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>ct});var i=s(3673),o=s(2323);const a={class:"my-font my-fondo",style:{display:"flex","justify-content":"center"}},l={key:0,id:"detailid"},r=["src"],n={style:{width:"250px"}},d=(0,i._)("br",null,null,-1),c={style:{"font-size":"10px"}},m=(0,i._)("br",null,null,-1),u={style:{"font-size":"10px"}},p={style:{display:"grid"}},g={style:{"font-size":"18px",color:"#e00303","font-weight":"bolder"}},h={key:0,style:{"font-size":"10px"}},f={style:{color:"#e00303","font-weight":"bolder"}},j={key:1,style:{"font-size":"10px"}},b={style:{width:"409px"}},w=(0,i._)("td",null,null,-1),y=(0,i._)("td",null,null,-1),_={style:{width:"100%"}},z=(0,i._)("td",{style:{width:"80%","text-align":"right"}}," Subtotal Bs.: ",-1),k={style:{"text-align":"right"}},x={key:0},v=(0,i._)("td",{style:{"text-align":"right"}},"IVA 16% Bs.:",-1),D={style:{"text-align":"right"}},N={key:1},W=(0,i._)("td",{style:{"text-align":"right"}},"IVA 8% Bs.:",-1),q={style:{"text-align":"right"}},Y={key:2},C=(0,i._)("td",{style:{"text-align":"right"}},"IGTF 3% Bs.:",-1),F={style:{"text-align":"right"}},M=(0,i._)("td",{style:{"text-align":"right"}},"Total Bs.:",-1),I={style:{"text-align":"right"}},Z={style:{"font-size":"8px","max-width":"458px","text-align":"center","min-width":"458px"}},T=(0,i._)("div",{style:{"text-align":"center","font-size":"8px",color:"red"}}," ORIGINAL ",-1),U={key:1,class:"text-center"},Q=(0,i._)("div",{class:"dash_welcome_blue"},"Oops!",-1),E=(0,i._)("img",{src:"estatusgrafica.png",alt:"Sin datos",style:{width:"250px"}},null,-1),O=(0,i._)("div",{class:"dash_welcome_small"},"No hay datos que mostrar para esta CodeQR",-1),B=[Q,E,O];function S(t,e,s,Q,E,O){const S=(0,i.up)("q-item-section"),A=(0,i.up)("q-item"),L=(0,i.up)("q-separator"),R=(0,i.up)("q-td"),P=(0,i.up)("q-table"),V=(0,i.up)("q-card");return(0,i.wg)(),(0,i.iD)("div",a,[(0,i.Wm)(V,{style:{width:"650px"}},{default:(0,i.w5)((()=>[E.haydata?((0,i.wg)(),(0,i.iD)("div",l,[(0,i.Wm)(A,null,{default:(0,i.w5)((()=>[(0,i.Wm)(S,{style:{flex:"auto"}},{default:(0,i.w5)((()=>[(0,i._)("img",{width:"100",src:E.registro.logo,onerror:"this.src='logo_nophoto.png'"},null,8,r)])),_:1}),(0,i.Wm)(S,null,{default:(0,i.w5)((()=>[(0,i._)("table",null,[(0,i._)("tr",null,[(0,i._)("td",n,[(0,i._)("span",null,(0,o.zw)(E.registro.razonsocialdetail),1),d,(0,i._)("span",c,(0,o.zw)(E.registro.direcciondetail),1),m,(0,i._)("span",u," RIF: "+(0,o.zw)(E.registro.rifdetail),1)]),(0,i._)("td",p,[(0,i._)("span",null,[(0,i.Uk)("N° DE CONTROL: "),(0,i._)("span",g,(0,o.zw)(E.registro.numerodocumento),1)]),(0,i._)("span",null,(0,o.zw)(E.registro.tipodocumentodetail)+": "+(0,o.zw)(E.registro.numerointerno),1),E.numeroafectadoDet.length>0?((0,i.wg)(),(0,i.iD)("span",h,[(0,i.Uk)("Afecta a: "+(0,o.zw)(t.tipodocafectadoDet)+" ",1),(0,i._)("span",f,(0,o.zw)(E.numeroafectadoDet),1)])):(0,i.kq)("",!0),E.numeroafectadoDet.length>0?((0,i.wg)(),(0,i.iD)("span",j,"Fecha: "+(0,o.zw)(t.fechaafectadoDet),1)):(0,i.kq)("",!0)])])])])),_:1})])),_:1}),(0,i.Wm)(A,null,{default:(0,i.w5)((()=>[(0,i.Wm)(S,{style:{"font-size":"11px"}},{default:(0,i.w5)((()=>[(0,i._)("table",null,[(0,i._)("tr",null,[(0,i._)("td",b," Cliente: "+(0,o.zw)(E.registro.nombreclientedetail),1),(0,i._)("td",null,"Fecha de Emisión: "+(0,o.zw)(E.registro.fechadetail),1)]),(0,i._)("tr",null,[(0,i._)("td",null,(0,o.zw)(" "+E.registro.abrevdetail)+": "+(0,o.zw)(E.registro.cedulaclientedetail),1),(0,i._)("td",null,"Hora de Emisión: "+(0,o.zw)(E.registro.horadetail),1)]),(0,i._)("tr",null,[(0,i._)("td",null,"Teléfono: "+(0,o.zw)(E.registro.telefonoclientedetail),1),w]),(0,i._)("tr",null,[(0,i._)("td",null,"Dirección: "+(0,o.zw)(E.registro.direccionclientedetail),1),y])])])),_:1})])),_:1}),(0,i.Wm)(L),(0,i.Wm)(A,null,{default:(0,i.w5)((()=>[(0,i.Wm)(P,{rows:E.detallesDoc,columns:E.columnsDetallesDoc,"row-key":"codigo","hide-pagination":"",dense:"",style:{width:"100%"}},{"body-cell-codigo":(0,i.w5)((t=>[(0,i.Wm)(R,{props:t,style:{"font-size":"11px"}},{default:(0,i.w5)((()=>[(0,i.Uk)((0,o.zw)(t.row.codigo),1)])),_:2},1032,["props"])])),"body-cell-descripcion":(0,i.w5)((t=>[(0,i.Wm)(R,{props:t,style:{display:"grid",height:"fit-content","white-space":"pre-wrap",width:"250px","font-size":"11px"}},{default:(0,i.w5)((()=>[(0,i._)("span",null,(0,o.zw)(t.row.descripcion),1),(0,i._)("span",null,(0,o.zw)(t.row.comentario),1)])),_:2},1032,["props"])])),"body-cell-precio":(0,i.w5)((t=>[(0,i.Wm)(R,{props:t,style:{"font-size":"11px"}},{default:(0,i.w5)((()=>[(0,i.Uk)((0,o.zw)(t.row.precio),1)])),_:2},1032,["props"])])),"body-cell-cantidad":(0,i.w5)((t=>[(0,i.Wm)(R,{props:t,style:{"font-size":"11px"}},{default:(0,i.w5)((()=>[(0,i.Uk)((0,o.zw)(t.row.cantidad),1)])),_:2},1032,["props"])])),"body-cell-tasa":(0,i.w5)((t=>[(0,i.Wm)(R,{props:t,style:{"font-size":"11px"}},{default:(0,i.w5)((()=>[(0,i.Uk)((0,o.zw)(t.row.tasa),1)])),_:2},1032,["props"])])),"body-cell-descuento":(0,i.w5)((t=>[(0,i.Wm)(R,{props:t,style:{"font-size":"11px"}},{default:(0,i.w5)((()=>[(0,i.Uk)((0,o.zw)(t.row.descuento),1)])),_:2},1032,["props"])])),"body-cell-monto":(0,i.w5)((t=>[(0,i.Wm)(R,{props:t,style:{"font-size":"11px"}},{default:(0,i.w5)((()=>[(0,i.Uk)((0,o.zw)(t.row.monto),1)])),_:2},1032,["props"])])),_:1},8,["rows","columns"])])),_:1}),(0,i.Wm)(L),(0,i.Wm)(A,null,{default:(0,i.w5)((()=>[(0,i.Wm)(S,{side:"",top:"",style:{"font-size":"11px",width:"-webkit-fill-available"}},{default:(0,i.w5)((()=>[(0,i._)("table",_,[(0,i._)("tr",null,[z,(0,i._)("td",k,(0,o.zw)(E.registro.subtotaldetail),1)]),"0,00"!==E.registro.impuestogdetail?((0,i.wg)(),(0,i.iD)("tr",x,[v,(0,i._)("td",D,(0,o.zw)(E.registro.impuestogdetail),1)])):(0,i.kq)("",!0),"0,00"!==E.registro.impuestordetail?((0,i.wg)(),(0,i.iD)("tr",N,[W,(0,i._)("td",q,(0,o.zw)(E.registro.impuestordetail),1)])):(0,i.kq)("",!0),"0,00"!==E.registro.impuestoigtfdetail?((0,i.wg)(),(0,i.iD)("tr",Y,[C,(0,i._)("td",F,(0,o.zw)(E.registro.impuestoigtfdetail),1)])):(0,i.kq)("",!0),(0,i._)("tr",null,[M,(0,i._)("td",I,(0,o.zw)(E.registro.totaldetail),1)])])])),_:1})])),_:1}),(0,i.Wm)(A,{style:{display:"grid","justify-content":"center"}},{default:(0,i.w5)((()=>[(0,i._)("div",Z,(0,o.zw)(E.registro.piedepagina),1),T])),_:1})])):((0,i.wg)(),(0,i.iD)("div",U,B)),(0,i.Wm)(L,{spaced:"",inset:"item"})])),_:1})])}s(4564);var A=s(52),L=s.n(A),R=s(4434),P=s(1488),V=s.n(P);const G=s(5770),H=G.endpoint_path_v2,$={name:"ViewInvoiceLayout",data(){return{haydata:!1,registro:{},numeroafectadoDet:"",columnsDetallesDoc:[{name:"codigo",label:"Código",align:"left",field:"codigo"},{name:"descripcion",align:"left",label:"Descripción",field:"descripcion"},{name:"precio",align:"left",label:"Precio",field:"precio"},{name:"cantidad",align:"left",label:"Cantidad",field:"cantidad"},{name:"tasa",align:"left",label:"Tasa",field:"tasa"},{name:"descuento",label:"Descuento",field:"descuento"},{name:"monto",label:"Monto",field:"monto"}],detallesDoc:[]}},methods:{listarfacturas(){const t={idserviciosmasivo:this.idserviciosmasivo,numerodocumento:this.numerodocumento,estatus:4};this.loading=!0,L().post(H+"reporte/facturas",t).then((async t=>{const e=t.data.data;for(const s in e){const t={};t.cod=e[s].id,t.logo=H+"imagen/"+e[s].rif+".png",t.idserviciosmasivo=e[s].idserviciosmasivo,t.razonsocial=e[s].razonsocial,t.rif=e[s].rif,t.piedepagina=e[s].piedepagina,t.relacionado=e[s].relacionado,t.notadebito=e[s].notadebito,t.notacredito=e[s].notacredito,t.direccion=e[s].direccion,t.telefono=e[s].telefono,t.trackingid=e[s].trackingid,t.numerodocumento=e[s].numerodocumento,t.numerointerno=e[s].numerointerno,t.tipodocumento=e[s].tipodocumento,t.abrev=e[s].abrev,t.cedulacliente=e[s].cedulacliente,t.nombrecliente=e[s].nombrecliente,t.direccioncliente=e[s].direccioncliente,t.emailcliente=e[s].emailcliente,t.telefonocliente=e[s].telefonocliente,t.estatus=e[s].estatus,t.observacion=e[s].observacion,t.fecha=V()(e[s].fecha).format("DD/MM/YYYY hh:mm:ss a"),t.fechasolo=V()(e[s].fecha).format("DD/MM/YYYY"),t.hora=V()(e[s].fecha).format("hh:mm:ss a"),e[s].fecha=t.fecha,t.subtotal=e[s].subtotal,t.total=e[s].total,t.tasag=e[s].tasag?e[s].tasag+"%":"0%",t.tasar=e[s].tasar?e[s].tasar+"%":"0%",t.tasaigtf=e[s].tasaigtf?e[s].tasaigtf+"%":"0%",t.exento=e[s].exento||0,t.exentoN=e[s].exento||0,t.baseg=e[s].baseg||0,t.basegN=e[s].baseg||0,t.impuestogN=e[s].impuestog||0,t.baser=e[s].baser||0,t.baserN=e[s].baser||0,t.impuestorN=e[s].impuestor||0,t.baseigtf=e[s].baseigtf||0,t.baseigtfN=e[s].baseigtf||0,t.impuestoigtfN=e[s].impuestoigtf||0,t.totalimpuestos=Number(t.impuestogN)+Number(t.impuestorN)+Number(t.impuestoigtfN),t.exento=this.completarDecimales(t.exento),t.baseg=this.completarDecimales(t.baseg),t.impuestog=this.completarDecimales(t.impuestogN),t.baser=this.completarDecimales(t.baser),t.impuestor=this.completarDecimales(t.impuestorN),t.baseigtf=this.completarDecimales(t.baseigtf),t.impuestoigtf=this.completarDecimales(t.impuestoigtfN),this.buscarDetalles(t)}this.loading=!1})).catch((t=>{R.Z.create("Problemas al listar Factura "+t)}))},completarDecimales(t){t=Intl.NumberFormat("de-DE").format(t.toFixed(2));const e=t.split(",");return t=1===e.length?t+",00":1===e[1].length?t+"0":t,t},async buscarDetalles(t){if(this.detallesDoc=[],t.cod){const e=await L().get(H+"reporte/facturas/detalles/"+t.cod);let s=0;for(const t in e.data.data){const i=e.data.data[t],o={};o.codigo=i.codigo,o.descripcion=i.descripcion,o.comentario=i.comentario,o.cantidad=i.cantidad.toFixed(2),o.precio=i.precio.toFixed(2),o.tasa=i.tasa.toFixed(2),o.exento=i.exento;const a=i.precio*i.cantidad-i.monto;o.descuento=Math.abs(a).toFixed(2),o.monto=i.monto.toFixed(2),s+=Number(o.monto),this.detallesDoc.push(o)}if(this.tipodocafectado="",this.fechaafectado="",this.numeroafectado="",t.relacionado.length>0){const e={idserviciosmasivo:t.idserviciosmasivo,numerodocumento:t.relacionado};await L().post(H+"reporte/facturas/relacionado",e).then((async e=>{const s=e.data.data;this.tipodocafectado=s[0].tipodocumento,this.fechaafectado=V()(s[0].fecha).format("DD/MM/YYYY hh:mm:ss a"),this.numeroafectado=s[0].numerointerno.length>0?s[0].numerointerno:t.relacionado}))}t.subtotal=e.data.data.length>0?s:t.subtotal}t.fecha=V()(t.fecha,"DD/MM/YYYY hh:mm:ss a"),this.registro.logo=t.logo,this.registro.razonsocialdetail=t.razonsocial,this.registro.rifdetail=t.rif,this.registro.direcciondetail=t.direccion,this.registro.tipodocumentodetail=t.tipodocumento,this.registro.numerodocumento=t.numerodocumento,this.registro.numerointerno=t.numerointerno,this.registro.nombreclientedetail=t.nombrecliente,this.registro.piedepagina=t.piedepagina,this.registro.abrevdetail=t.abrev,this.registro.cedulaclientedetail=t.cedulacliente,this.registro.direccionclientedetail=t.direccioncliente,this.registro.telefonoclientedetail=t.telefonocliente,this.registro.emailclientedetail=t.emailcliente,this.registro.fechadetail=t.fechasolo,this.registro.horadetail=t.hora,this.registro.exentodetail=t.exento,this.registro.basegdetail=t.baseg,this.registro.baserdetail=t.baser,this.registro.baseigtfdetail=t.baseigtf,this.registro.impuestogdetail=t.impuestog,this.registro.impuestordetail=t.impuestor,this.registro.impuestoigtfdetail=t.impuestoigtf,this.registro.totalimpuestodetail=Number(t.impuestogN)+Number(t.impuestorN)+Number(t.impuestoigtfN),t.total=t.subtotal+this.registro.totalimpuestodetail,this.registro.totalimpuestodetail=this.completarDecimales(this.registro.totalimpuestodetail),this.registro.subtotaldetail=this.completarDecimales(t.subtotal),this.registro.totaldetail=this.completarDecimales(t.total),this.haydata=!0},async getIdClienteEmisor(t){const e={rif:t};return await L().post(H+"sede/buscarid",e)}},async mounted(){this.qrinvoice=this.$route.params.qrinvoice,this.rif=this.qrinvoice.split("SM")[0],this.numerodocumento=this.qrinvoice.split("SM")[1];const t=await(await this.getIdClienteEmisor(this.rif)).data.data;t?(this.idserviciosmasivo=t.id,this.listarfacturas()):console.log("Cliente emisor no encontrado")}};var J=s(4260),K=s(151),X=s(3414),tt=s(2035),et=s(5869),st=s(4993),it=s(3884),ot=s(9367),at=s(8240),lt=s(677),rt=s(7518),nt=s.n(rt);const dt=(0,J.Z)($,[["render",S]]),ct=dt;nt()($,"components",{QCard:K.Z,QItem:X.Z,QItemSection:tt.Z,QSeparator:et.Z,QTable:st.Z,QTd:it.Z,QCardActions:ot.Z,QBtn:at.Z}),nt()($,"directives",{ClosePopup:lt.Z})},6700:(t,e,s)=>{var i={"./af":5809,"./af.js":5809,"./ar":6069,"./ar-dz":481,"./ar-dz.js":481,"./ar-kw":3994,"./ar-kw.js":3994,"./ar-ly":3312,"./ar-ly.js":3312,"./ar-ma":239,"./ar-ma.js":239,"./ar-ps":7916,"./ar-ps.js":7916,"./ar-sa":1863,"./ar-sa.js":1863,"./ar-tn":9607,"./ar-tn.js":9607,"./ar.js":6069,"./az":9281,"./az.js":9281,"./be":9945,"./be.js":9945,"./bg":9384,"./bg.js":9384,"./bm":1476,"./bm.js":1476,"./bn":3345,"./bn-bd":216,"./bn-bd.js":216,"./bn.js":3345,"./bo":1713,"./bo.js":1713,"./br":9655,"./br.js":9655,"./bs":7296,"./bs.js":7296,"./ca":3049,"./ca.js":3049,"./cs":2722,"./cs.js":2722,"./cv":8039,"./cv.js":8039,"./cy":5563,"./cy.js":5563,"./da":1960,"./da.js":1960,"./de":7533,"./de-at":6674,"./de-at.js":6674,"./de-ch":7732,"./de-ch.js":7732,"./de.js":7533,"./dv":8343,"./dv.js":8343,"./el":7004,"./el.js":7004,"./en-au":2517,"./en-au.js":2517,"./en-ca":4929,"./en-ca.js":4929,"./en-gb":9722,"./en-gb.js":9722,"./en-ie":6923,"./en-ie.js":6923,"./en-il":8050,"./en-il.js":8050,"./en-in":9624,"./en-in.js":9624,"./en-nz":540,"./en-nz.js":540,"./en-sg":4375,"./en-sg.js":4375,"./eo":40,"./eo.js":40,"./es":9720,"./es-do":5595,"./es-do.js":5595,"./es-mx":180,"./es-mx.js":180,"./es-us":1563,"./es-us.js":1563,"./es.js":9720,"./et":9217,"./et.js":9217,"./eu":9474,"./eu.js":9474,"./fa":5243,"./fa.js":5243,"./fi":7645,"./fi.js":7645,"./fil":5350,"./fil.js":5350,"./fo":5622,"./fo.js":5622,"./fr":1467,"./fr-ca":3439,"./fr-ca.js":3439,"./fr-ch":4335,"./fr-ch.js":4335,"./fr.js":1467,"./fy":6026,"./fy.js":6026,"./ga":2969,"./ga.js":2969,"./gd":1347,"./gd.js":1347,"./gl":1085,"./gl.js":1085,"./gom-deva":904,"./gom-deva.js":904,"./gom-latn":9597,"./gom-latn.js":9597,"./gu":8705,"./gu.js":8705,"./he":9128,"./he.js":9128,"./hi":2821,"./hi.js":2821,"./hr":9002,"./hr.js":9002,"./hu":4814,"./hu.js":4814,"./hy-am":658,"./hy-am.js":658,"./id":9344,"./id.js":9344,"./is":8204,"./is.js":8204,"./it":376,"./it-ch":1549,"./it-ch.js":1549,"./it.js":376,"./ja":9293,"./ja.js":9293,"./jv":6401,"./jv.js":6401,"./ka":482,"./ka.js":482,"./kk":7329,"./kk.js":7329,"./km":4241,"./km.js":4241,"./kn":3566,"./kn.js":3566,"./ko":2742,"./ko.js":2742,"./ku":2915,"./ku-kmr":2346,"./ku-kmr.js":2346,"./ku.js":2915,"./ky":6846,"./ky.js":6846,"./lb":4959,"./lb.js":4959,"./lo":2188,"./lo.js":2188,"./lt":8967,"./lt.js":8967,"./lv":1245,"./lv.js":1245,"./me":751,"./me.js":751,"./mi":7501,"./mi.js":7501,"./mk":1643,"./mk.js":1643,"./ml":5597,"./ml.js":5597,"./mn":7893,"./mn.js":7893,"./mr":9065,"./mr.js":9065,"./ms":4703,"./ms-my":4645,"./ms-my.js":4645,"./ms.js":4703,"./mt":4365,"./mt.js":4365,"./my":3788,"./my.js":3788,"./nb":7357,"./nb.js":7357,"./ne":9109,"./ne.js":9109,"./nl":3746,"./nl-be":1985,"./nl-be.js":1985,"./nl.js":3746,"./nn":7175,"./nn.js":7175,"./oc-lnc":566,"./oc-lnc.js":566,"./pa-in":2733,"./pa-in.js":2733,"./pl":182,"./pl.js":182,"./pt":505,"./pt-br":7839,"./pt-br.js":7839,"./pt.js":505,"./ro":9578,"./ro.js":9578,"./ru":2328,"./ru.js":2328,"./sd":641,"./sd.js":641,"./se":1758,"./se.js":1758,"./si":6680,"./si.js":6680,"./sk":5016,"./sk.js":5016,"./sl":7424,"./sl.js":7424,"./sq":8635,"./sq.js":8635,"./sr":9038,"./sr-cyrl":3716,"./sr-cyrl.js":3716,"./sr.js":9038,"./ss":4771,"./ss.js":4771,"./sv":3517,"./sv.js":3517,"./sw":9419,"./sw.js":9419,"./ta":5959,"./ta.js":5959,"./te":1739,"./te.js":1739,"./tet":2264,"./tet.js":2264,"./tg":4792,"./tg.js":4792,"./th":8328,"./th.js":8328,"./tk":702,"./tk.js":702,"./tl-ph":7814,"./tl-ph.js":7814,"./tlh":797,"./tlh.js":797,"./tr":6691,"./tr.js":6691,"./tzl":6891,"./tzl.js":6891,"./tzm":6362,"./tzm-latn":7855,"./tzm-latn.js":7855,"./tzm.js":6362,"./ug-cn":7606,"./ug-cn.js":7606,"./uk":513,"./uk.js":513,"./ur":3803,"./ur.js":3803,"./uz":344,"./uz-latn":8957,"./uz-latn.js":8957,"./uz.js":344,"./vi":3,"./vi.js":3,"./x-pseudo":8842,"./x-pseudo.js":8842,"./yo":2083,"./yo.js":2083,"./zh-cn":4536,"./zh-cn.js":4536,"./zh-hk":2475,"./zh-hk.js":2475,"./zh-mo":7593,"./zh-mo.js":7593,"./zh-tw":4746,"./zh-tw.js":4746};function o(t){var e=a(t);return s(e)}function a(t){if(!s.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}o.keys=function(){return Object.keys(i)},o.resolve=a,t.exports=o,o.id=6700}}]);