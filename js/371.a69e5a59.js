(globalThis["webpackChunksit_frontend"]=globalThis["webpackChunksit_frontend"]||[]).push([[371],{5770:e=>{e.exports={endpoint_path_v2:"https://bck-test.factura-smart.com/",version:"2.0.0"}},475:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>se});var t=s(3673),l=s(8880),r=s(2323);const o={class:"my-font fondoimg window-height window-width row justify-center"},n=(0,t._)("div",{class:"col-8"},null,-1),i={class:"col-4"},d=(0,t._)("div",{class:"row justify-center"},[(0,t._)("img",{src:"imglogin.png",style:{"max-width":"180px","margin-top":"20px"}})],-1),c=(0,t._)("div",{class:"row justify-center"},[(0,t._)("h5",{class:"text-h5 text-white q-my-md"},"Identificarse")],-1),u={class:"row justify-center"},m=(0,t._)("div",{class:"text-h6",style:{"text-align":"center"}},"¡Acceso restringido!",-1),p=(0,t._)("img",{src:"acceso_restringido.jpeg",style:{"max-width":"180px","margin-top":"20px"}},null,-1),h=(0,t._)("div",{style:{background:"blanchedalmond",padding:"10px","border-radius":"15px",border:"1px solid #e9a070"}},"Por favor intente acceder durante el horario permitido",-1),j={style:{display:"flex","justify-content":"space-evenly","margin-top":"20px"}},g=(0,t._)("div",{class:"text-h6",style:{"text-align":"center"}},"Recuperar Contraseña",-1),v={key:0,style:{background:"blanchedalmond",padding:"10px","border-radius":"15px",border:"1px solid #e9a070","text-align":"center"}},f={style:{display:"flex","justify-content":"space-evenly","margin-top":"20px"}},b=(0,t._)("div",{class:"text-h6",style:{"text-align":"center"}},"¡IMPORTANTE!",-1),y=(0,t._)("img",{src:"correoenviado.png",style:{"max-width":"180px","margin-top":"20px"}},null,-1),x={style:{background:"blanchedalmond",padding:"10px","border-radius":"15px",border:"1px solid #e9a070","text-align":"center"}},_={style:{display:"flex","justify-content":"space-evenly","margin-top":"20px"}},w=(0,t._)("div",{class:"text-h6",style:{"text-align":"center"}},"Cambiar Contraseña",-1),k={key:0,style:{background:"blanchedalmond",padding:"10px","border-radius":"15px",border:"1px solid #f18945","text-align":"center",color:"#f18945"}},W={style:{display:"flex","justify-content":"space-evenly","margin-top":"20px"}},C=(0,t._)("div",{class:"text-h6",style:{"text-align":"center"}},"En Horabuena!",-1),V=(0,t._)("img",{src:"confirmar.png",alt:"Actualizar",style:{"max-width":"285px"}},null,-1),q=(0,t._)("div",{style:{background:"#c4e9c4",padding:"10px","border-radius":"15px",border:"1px solid #012c0e","text-align":"center",color:"#012c0e"}}," !Nueva clave actualizada con éxito, ya puede usarla para ingresar! ",-1),z={style:{display:"flex","justify-content":"space-evenly"}};function E(e,a,s,E,D,Y){const M=(0,t.up)("q-icon"),U=(0,t.up)("q-input"),R=(0,t.up)("q-form"),A=(0,t.up)("q-card-section"),H=(0,t.up)("vue-hcaptcha"),Z=(0,t.up)("q-spinner-dots"),I=(0,t.up)("q-btn"),S=(0,t.up)("q-card-actions"),Q=(0,t.up)("q-card"),O=(0,t.up)("q-dialog"),P=(0,t.Q2)("close-popup");return(0,t.wg)(),(0,t.iD)("div",o,[n,(0,t._)("div",i,[d,c,(0,t._)("div",u,[(0,t._)("form",{onSubmit:a[3]||(a[3]=(0,l.iM)(((...e)=>Y.submit&&Y.submit(...e)),["prevent"])),class:"row justify-center"},[(0,t.Wm)(Q,{bordered:"",class:"q-pa-lg shadow-1",style:{"border-radius":"20px",width:"350px"}},{default:(0,t.w5)((()=>[(0,t.Wm)(A,null,{default:(0,t.w5)((()=>[(0,t.Wm)(R,{class:"q-gutter-md"},{default:(0,t.w5)((()=>[(0,t.Wm)(U,{rounded:"",standout:"",clearable:"",modelValue:D.usuario,"onUpdate:modelValue":a[0]||(a[0]=e=>D.usuario=e),type:"text",label:"Usuario"},{prepend:(0,t.w5)((()=>[(0,t.Wm)(M,{name:"account_circle"})])),_:1},8,["modelValue"]),(0,t.Wm)(U,{rounded:"",standout:"",clearable:"",modelValue:D.clave,"onUpdate:modelValue":a[1]||(a[1]=e=>D.clave=e),type:"password",label:"Clave"},{prepend:(0,t.w5)((()=>[(0,t.Wm)(M,{name:"lock"})])),_:1},8,["modelValue"])])),_:1})])),_:1}),(0,t.Wm)(A,{class:"text-center q-pa-none"},{default:(0,t.w5)((()=>[(0,t.Wm)(H,{sitekey:"248a18d8-3004-44f7-82d2-93cbf544d355",onVerify:Y.onVerify,onExpired:Y.onExpire,onChallengeExpired:Y.onChallengeExpire,onError:Y.onError},null,8,["onVerify","onExpired","onChallengeExpired","onError"])])),_:1}),(0,t.Wm)(S,{class:"q-px-md"},{default:(0,t.w5)((()=>[(0,t.Wm)(I,{unelevated:"",rounded:"",color:"primary",type:"submit",loading:D.loading,size:"lg",class:"full-width",label:"Ingresar",disable:D.btnDisable},{loading:(0,t.w5)((()=>[(0,t.Wm)(Z)])),_:1},8,["loading","disable"])])),_:1}),(0,t.Wm)(A,{class:"text-center"},{default:(0,t.w5)((()=>[(0,t._)("div",{class:"text-grey-6",onClick:a[2]||(a[2]=(...e)=>Y.abrirRecuperarClave&&Y.abrirRecuperarClave(...e)),style:{cursor:"pointer"}},"¿Olvidó contraseña?")])),_:1})])),_:1})],32)])]),(0,t.Wm)(O,{modelValue:D.modalRestringido,"onUpdate:modelValue":a[4]||(a[4]=e=>D.modalRestringido=e),persistent:""},{default:(0,t.w5)((()=>[(0,t.Wm)(Q,null,{default:(0,t.w5)((()=>[(0,t.Wm)(A,null,{default:(0,t.w5)((()=>[m])),_:1}),(0,t.Wm)(A,{class:"q-pt-none",style:{"text-align":"center"}},{default:(0,t.w5)((()=>[p])),_:1}),(0,t.Wm)(A,{class:"q-pt-none"},{default:(0,t.w5)((()=>[h])),_:1}),(0,t.Wm)(A,{class:"q-pt-none"},{default:(0,t.w5)((()=>[(0,t._)("div",j,[(0,t.wy)((0,t.Wm)(I,{color:"secondary",label:"Aceptar"},null,512),[[P]])])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t.Wm)(O,{modelValue:D.modalRecuperar,"onUpdate:modelValue":a[7]||(a[7]=e=>D.modalRecuperar=e),persistent:""},{default:(0,t.w5)((()=>[(0,t.Wm)(Q,{style:{width:"350px"}},{default:(0,t.w5)((()=>[(0,t.Wm)(A,null,{default:(0,t.w5)((()=>[g])),_:1}),(0,t.Wm)(A,{class:"q-pt-none",style:{"text-align":"center"}},{default:(0,t.w5)((()=>[(0,t.Wm)(U,{rounded:"",standout:"",clearable:"",modelValue:D.usuariorecuperar,"onUpdate:modelValue":a[5]||(a[5]=e=>D.usuariorecuperar=e),type:"text",label:"Usuario",style:{"margin-bottom":"20px"}},{prepend:(0,t.w5)((()=>[(0,t.Wm)(M,{name:"account_circle"})])),_:1},8,["modelValue"]),(0,t.Wm)(U,{rounded:"",standout:"",clearable:"",modelValue:D.emailrecuperar,"onUpdate:modelValue":a[6]||(a[6]=e=>D.emailrecuperar=e),type:"text",label:"Email"},{prepend:(0,t.w5)((()=>[(0,t.Wm)(M,{name:"mail_lock"})])),_:1},8,["modelValue"])])),_:1}),(0,t.Wm)(A,{class:"q-pt-none",style:{height:"60px"}},{default:(0,t.w5)((()=>[D.validarecuperar?((0,t.wg)(),(0,t.iD)("div",v," Por favor ingrese usuario y alguno de los correos electrónicos que tiene registrado ")):(0,t.kq)("",!0)])),_:1}),(0,t.Wm)(A,{class:"q-pt-none"},{default:(0,t.w5)((()=>[(0,t._)("div",f,[(0,t.wy)((0,t.Wm)(I,{color:"negative",label:"Cancelar"},null,512),[[P]]),(0,t.Wm)(I,{color:"secondary",label:"Aceptar",onClick:Y.recuperarClave},null,8,["onClick"])])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t.Wm)(O,{modelValue:D.modalMensaje,"onUpdate:modelValue":a[8]||(a[8]=e=>D.modalMensaje=e),persistent:""},{default:(0,t.w5)((()=>[(0,t.Wm)(Q,{style:{width:"400px"}},{default:(0,t.w5)((()=>[(0,t.Wm)(A,null,{default:(0,t.w5)((()=>[b])),_:1}),(0,t.Wm)(A,{class:"q-pt-none",style:{"text-align":"center"}},{default:(0,t.w5)((()=>[y])),_:1}),(0,t.Wm)(A,{class:"q-pt-none"},{default:(0,t.w5)((()=>[(0,t._)("div",x,(0,r.zw)(D.messagerecuperacion),1)])),_:1}),(0,t.Wm)(A,{class:"q-pt-none"},{default:(0,t.w5)((()=>[(0,t._)("div",_,[(0,t.wy)((0,t.Wm)(I,{color:"secondary",label:"Aceptar"},null,512),[[P]])])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t.Wm)(O,{modelValue:D.modalCambiarClave,"onUpdate:modelValue":a[11]||(a[11]=e=>D.modalCambiarClave=e),persistent:""},{default:(0,t.w5)((()=>[(0,t.Wm)(Q,{style:{width:"350px"}},{default:(0,t.w5)((()=>[(0,t.Wm)(A,{style:{display:"flex","align-items":"center"}},{default:(0,t.w5)((()=>[(0,t.Wm)(M,{name:"lock_reset",style:{"font-size":"60px","margin-right":"20px",color:"orange"}}),w])),_:1}),(0,t.Wm)(A,{class:"q-pt-none",style:{"text-align":"center"}},{default:(0,t.w5)((()=>[(0,t.Wm)(U,{rounded:"",standout:"",clearable:"",modelValue:D.nuevaclave1,"onUpdate:modelValue":a[9]||(a[9]=e=>D.nuevaclave1=e),type:"password",label:"Nueva contraseña",style:{"margin-bottom":"20px"}},{prepend:(0,t.w5)((()=>[(0,t.Wm)(M,{name:"lock"})])),_:1},8,["modelValue"]),(0,t.Wm)(U,{rounded:"",standout:"",clearable:"",modelValue:D.nuevaclave2,"onUpdate:modelValue":a[10]||(a[10]=e=>D.nuevaclave2=e),type:"password",label:"Repita contraseña"},{prepend:(0,t.w5)((()=>[(0,t.Wm)(M,{name:"lock_clock"})])),_:1},8,["modelValue"])])),_:1}),(0,t.Wm)(A,{class:"q-pt-none",style:{height:"60px"}},{default:(0,t.w5)((()=>[D.validanuevaclave?((0,t.wg)(),(0,t.iD)("div",k," Por favor, la nueva clave y confirmación de clave deben ser iguales y válidas. ")):(0,t.kq)("",!0)])),_:1}),(0,t.Wm)(A,{class:"q-pt-none"},{default:(0,t.w5)((()=>[(0,t._)("div",W,[(0,t.wy)((0,t.Wm)(I,{color:"negative",label:"Cancelar"},null,512),[[P]]),(0,t.Wm)(I,{color:"secondary",label:"Aceptar",onClick:Y.cambiarclave},null,8,["onClick"])])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t.Wm)(O,{modelValue:D.modalconfirmar,"onUpdate:modelValue":a[12]||(a[12]=e=>D.modalconfirmar=e),persistent:""},{default:(0,t.w5)((()=>[(0,t.Wm)(Q,{style:{width:"350px"}},{default:(0,t.w5)((()=>[(0,t.Wm)(A,null,{default:(0,t.w5)((()=>[C])),_:1}),(0,t.Wm)(A,{class:"q-pt-none text-center"},{default:(0,t.w5)((()=>[V,q])),_:1}),(0,t.Wm)(A,{class:"q-pt-none"},{default:(0,t.w5)((()=>[(0,t._)("div",z,[(0,t.wy)((0,t.Wm)(I,{color:"secondary",label:"Aceptar"},null,512),[[P]])])])),_:1})])),_:1})])),_:1},8,["modelValue"])])}s(4564);var D=s(4434),Y=s(52),M=s.n(Y),U=s(1488),R=s.n(U),A=s(8916),H=s.n(A),Z=s(9372);const I=s(5770),S=I.endpoint_path_v2,Q={name:"LoginLayout",components:{VueHcaptcha:Z.Z},data(){return{term:"",hora:R()().format("HH:mm:ss"),fechahoy:R()().format("YYYY-MM-DD HH:mm:ss"),idUpd:"",validarecuperar:!1,validanuevaclave:!1,btnDisable:!0,modalRestringido:!1,modalconfirmar:!1,modalMensaje:!1,modalRecuperar:!1,modalCambiarClave:!1,usuario:"",messagerecuperacion:"",usuariorecuperar:"",emailrecuperar:"",clave:"",nuevaclave1:"",nuevaclave2:"",loading:!1}},methods:{cambiarclave(){if(this.nuevaclave1.length<4)return void(this.validanuevaclave=!0);if(this.nuevaclave1!==this.nuevaclave2)return void(this.validanuevaclave=!0);const e={nuevaclave:H()(this.nuevaclave1)};M().put(S+"usuario/cambioclave/"+this.idUpd,e).then((async e=>{this.modalCambiarClave=!1,this.modalconfirmar=!0}))},abrirRecuperarClave(){this.usuariorecuperar="",this.emailrecuperar="",this.validarecuperar=!1,this.modalRecuperar=!0},recuperarClave(){this.usuariorecuperar&&this.emailrecuperar&&0!==this.usuariorecuperar.length&&0!==this.emailrecuperar.length?(console.log("Enviar a recuperar contraseña"),this.modalRecuperar=!1,M().post(S+"usuario/recuperarclave",{usuario:this.usuariorecuperar,email:this.emailrecuperar}).then((async e=>{console.log(e),200===e.status&&(this.messagerecuperacion=e.data.message,this.modalMensaje=!0)}))):this.validarecuperar=!0},onVerify(e,a){console.log("Verified: ",{token:e,eKey:a}),this.btnDisable=!1},onExpire(){console.log("Token expired"),this.btnDisable=!0},onChallengeExpire(){console.log("Challenge expired"),this.btnDisable=!0},onError(e){console.log("Error",e),this.btnDisable=!0},submit(){fetch("https://api.ipify.org?format=json").then((e=>e.json())).then((({ip:e})=>{this.term=e,""===this.usuario?D.Z.create("El Usuario es requerido para iniciar sesión"):""===this.clave?D.Z.create("La contraseña es requerida para iniciar sesión"):(this.loading=!0,M().post(S+"usuario/login",{usuario:this.usuario,clave:H()(this.clave)}).then((async e=>{if(this.loading=!1,200===e.status){if(console.log(this.hora),console.log(e.data.resp.horaentrada),console.log(e.data.resp.horasalida),console.log(e.data.resp.fecharecuperacion),e.data.resp.fecharecuperacion){console.log("COMPARAR FECHAS");const a=R()(e.data.resp.fecharecuperacion).format("YYYY-MM-DD HH:mm:ss");console.log(R()(a,"YYYY-MM-DD HH:mm:ss")),console.log(R()());const s=R().duration(R()().diff(a)).asHours();console.log("duration"),console.log(s),s>24&&(console.log("DEBE CAMBIAR CLAVE"),console.log(s),this.idUpd=e.data.resp.id,this.modalCambiarClave=!0)}this.hora<e.data.resp.horaentrada||this.hora>e.data.resp.horasalida?(M().post(S+"bitacora",{idusuario:e.data.resp.id,idevento:10,ip:this.term,observacion:"Acceso al sistema en horario restringido",fecha:R()().format("YYYY-MM-DD HH:mm:ss")}),this.modalRestringido=!0):(M().post(S+"bitacora",{idusuario:e.data.resp.id,idevento:1,ip:this.term,observacion:"Acceso al sistema con éxito",fecha:R()().format("YYYY-MM-DD HH:mm:ss")}),sessionStorage.setItem("id_usuario",e.data.resp.id),sessionStorage.setItem("rif_sede",e.data.resp.rif),sessionStorage.setItem("co_rol",e.data.resp.idrol),sessionStorage.setItem("tx_nombre",e.data.resp.nombre),sessionStorage.setItem("tx_usuario",this.usuario),sessionStorage.setItem("tx_email",e.data.resp.emailbcc||""),sessionStorage.setItem("tx_rol",e.data.resp.rol),sessionStorage.setItem("co_sede",e.data.resp.idserviciosmasivo||0),sessionStorage.setItem("tx_sede",e.data.resp.razonsocial||""),"3"===e.data.resp.idrol?this.$router.push("/dashboard"):this.$router.push("/emisores"))}else this.loading=!1,D.Z.create(e.data.message)})).catch((e=>{this.loading=!1,D.Z.create("Error "+e)})))}))}},watch:{nuevaclave1:function(e){this.validanuevaclave=!1},nuevaclave2:function(e){this.validanuevaclave=!1}}};var O=s(4260),P=s(151),T=s(5589),L=s(8689),N=s(4842),B=s(4554),F=s(9367),$=s(2165),K=s(4765),G=s(6778),J=s(677),X=s(7518),ee=s.n(X);const ae=(0,O.Z)(Q,[["render",E]]),se=ae;ee()(Q,"components",{QCard:P.Z,QCardSection:T.Z,QForm:L.Z,QInput:N.Z,QIcon:B.Z,QCardActions:F.Z,QBtn:$.Z,QSpinnerDots:K.Z,QDialog:G.Z}),ee()(Q,"directives",{ClosePopup:J.Z})},6700:(e,a,s)=>{var t={"./af":5809,"./af.js":5809,"./ar":6069,"./ar-dz":481,"./ar-dz.js":481,"./ar-kw":3994,"./ar-kw.js":3994,"./ar-ly":3312,"./ar-ly.js":3312,"./ar-ma":239,"./ar-ma.js":239,"./ar-ps":7916,"./ar-ps.js":7916,"./ar-sa":1863,"./ar-sa.js":1863,"./ar-tn":9607,"./ar-tn.js":9607,"./ar.js":6069,"./az":9281,"./az.js":9281,"./be":9945,"./be.js":9945,"./bg":9384,"./bg.js":9384,"./bm":1476,"./bm.js":1476,"./bn":3345,"./bn-bd":216,"./bn-bd.js":216,"./bn.js":3345,"./bo":1713,"./bo.js":1713,"./br":9655,"./br.js":9655,"./bs":7296,"./bs.js":7296,"./ca":3049,"./ca.js":3049,"./cs":2722,"./cs.js":2722,"./cv":8039,"./cv.js":8039,"./cy":5563,"./cy.js":5563,"./da":1960,"./da.js":1960,"./de":7533,"./de-at":6674,"./de-at.js":6674,"./de-ch":7732,"./de-ch.js":7732,"./de.js":7533,"./dv":8343,"./dv.js":8343,"./el":7004,"./el.js":7004,"./en-au":2517,"./en-au.js":2517,"./en-ca":4929,"./en-ca.js":4929,"./en-gb":9722,"./en-gb.js":9722,"./en-ie":6923,"./en-ie.js":6923,"./en-il":8050,"./en-il.js":8050,"./en-in":9624,"./en-in.js":9624,"./en-nz":540,"./en-nz.js":540,"./en-sg":4375,"./en-sg.js":4375,"./eo":40,"./eo.js":40,"./es":9720,"./es-do":5595,"./es-do.js":5595,"./es-mx":180,"./es-mx.js":180,"./es-us":1563,"./es-us.js":1563,"./es.js":9720,"./et":9217,"./et.js":9217,"./eu":9474,"./eu.js":9474,"./fa":5243,"./fa.js":5243,"./fi":7645,"./fi.js":7645,"./fil":5350,"./fil.js":5350,"./fo":5622,"./fo.js":5622,"./fr":1467,"./fr-ca":3439,"./fr-ca.js":3439,"./fr-ch":4335,"./fr-ch.js":4335,"./fr.js":1467,"./fy":6026,"./fy.js":6026,"./ga":2969,"./ga.js":2969,"./gd":1347,"./gd.js":1347,"./gl":1085,"./gl.js":1085,"./gom-deva":904,"./gom-deva.js":904,"./gom-latn":9597,"./gom-latn.js":9597,"./gu":8705,"./gu.js":8705,"./he":9128,"./he.js":9128,"./hi":2821,"./hi.js":2821,"./hr":9002,"./hr.js":9002,"./hu":4814,"./hu.js":4814,"./hy-am":658,"./hy-am.js":658,"./id":9344,"./id.js":9344,"./is":8204,"./is.js":8204,"./it":376,"./it-ch":1549,"./it-ch.js":1549,"./it.js":376,"./ja":9293,"./ja.js":9293,"./jv":6401,"./jv.js":6401,"./ka":482,"./ka.js":482,"./kk":7329,"./kk.js":7329,"./km":4241,"./km.js":4241,"./kn":3566,"./kn.js":3566,"./ko":2742,"./ko.js":2742,"./ku":2915,"./ku-kmr":2346,"./ku-kmr.js":2346,"./ku.js":2915,"./ky":6846,"./ky.js":6846,"./lb":4959,"./lb.js":4959,"./lo":2188,"./lo.js":2188,"./lt":8967,"./lt.js":8967,"./lv":1245,"./lv.js":1245,"./me":751,"./me.js":751,"./mi":7501,"./mi.js":7501,"./mk":1643,"./mk.js":1643,"./ml":5597,"./ml.js":5597,"./mn":7893,"./mn.js":7893,"./mr":9065,"./mr.js":9065,"./ms":4703,"./ms-my":4645,"./ms-my.js":4645,"./ms.js":4703,"./mt":4365,"./mt.js":4365,"./my":3788,"./my.js":3788,"./nb":7357,"./nb.js":7357,"./ne":9109,"./ne.js":9109,"./nl":3746,"./nl-be":1985,"./nl-be.js":1985,"./nl.js":3746,"./nn":7175,"./nn.js":7175,"./oc-lnc":566,"./oc-lnc.js":566,"./pa-in":2733,"./pa-in.js":2733,"./pl":182,"./pl.js":182,"./pt":505,"./pt-br":7839,"./pt-br.js":7839,"./pt.js":505,"./ro":9578,"./ro.js":9578,"./ru":2328,"./ru.js":2328,"./sd":641,"./sd.js":641,"./se":1758,"./se.js":1758,"./si":6680,"./si.js":6680,"./sk":5016,"./sk.js":5016,"./sl":7424,"./sl.js":7424,"./sq":8635,"./sq.js":8635,"./sr":9038,"./sr-cyrl":3716,"./sr-cyrl.js":3716,"./sr.js":9038,"./ss":4771,"./ss.js":4771,"./sv":3517,"./sv.js":3517,"./sw":9419,"./sw.js":9419,"./ta":5959,"./ta.js":5959,"./te":1739,"./te.js":1739,"./tet":2264,"./tet.js":2264,"./tg":4792,"./tg.js":4792,"./th":8328,"./th.js":8328,"./tk":702,"./tk.js":702,"./tl-ph":7814,"./tl-ph.js":7814,"./tlh":797,"./tlh.js":797,"./tr":6691,"./tr.js":6691,"./tzl":6891,"./tzl.js":6891,"./tzm":6362,"./tzm-latn":7855,"./tzm-latn.js":7855,"./tzm.js":6362,"./ug-cn":7606,"./ug-cn.js":7606,"./uk":513,"./uk.js":513,"./ur":3803,"./ur.js":3803,"./uz":344,"./uz-latn":8957,"./uz-latn.js":8957,"./uz.js":344,"./vi":3,"./vi.js":3,"./x-pseudo":8842,"./x-pseudo.js":8842,"./yo":2083,"./yo.js":2083,"./zh-cn":4536,"./zh-cn.js":4536,"./zh-hk":2475,"./zh-hk.js":2475,"./zh-mo":7593,"./zh-mo.js":7593,"./zh-tw":4746,"./zh-tw.js":4746};function l(e){var a=r(e);return s(a)}function r(e){if(!s.o(t,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t[e]}l.keys=function(){return Object.keys(t)},l.resolve=r,e.exports=l,l.id=6700}}]);