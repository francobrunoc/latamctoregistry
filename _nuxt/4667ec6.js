(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{251:function(t,e,n){"use strict";n(656);n(152).default.configure({aws_project_region:"us-west-2",aws_user_pools_id:"us-west-2_WjQMGzv9y",aws_user_pools_web_client_id:"3q8168bsot7rpv2qhh0hbouoev"})},360:function(t,e,n){var content=n(575);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("05a958ee",content,!0,{sourceMap:!1})},405:function(t,e,n){"use strict";n(14),n(55);var r=n(17),o=n(153),c={name:"private",components:{AddEditProcedure:n(406).default},data:function(){return{collapseOnScroll:!0,clipped:!1,drawer:!1,fixed:!1,items:[{icon:"mdi-apps",title:"Welcome",to:"/"},{icon:"mdi-chart-bubble",title:"Registry Dashboard",to:"/dashboard"},{icon:"mdi-star",title:"Data Quality",to:{path:"/dashboard",query:{tab:0}}},{icon:"mdi-align-vertical-bottom",title:"Enrollment Data",to:{path:"/dashboard",query:{tab:1}}},{icon:"mdi-chart-donut",title:"Clinical Data",to:{path:"/dashboard",query:{tab:2}}},{icon:"mdi-chart-donut",title:"Angiographic Data",to:{path:"/dashboard",query:{tab:3}}},{icon:"mdi-align-vertical-bottom",title:"Procedural Data",to:{path:"/dashboard",query:{tab:4}}},{icon:"mdi-align-vertical-bottom",title:"Outcomes",to:{path:"/dashboard",query:{tab:5}}},{icon:"mdi-account",title:"Users",to:"/accounts"},{icon:"mdi-email",title:"Webmail",to:"/webmail"},{icon:"mdi-folder-account-outline",title:"Internal Documents",to:"/documents"},{icon:"mdi-text-box-plus",title:"Publication Panel",to:"/proposals"},{icon:"mdi-power",title:"Exit",to:"/auth"}]}},methods:{load:function(t){"/webmail"===t?window.open("https://latamctoregistry.awsapps.com/mail"):this.$router.push(t)}},created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.currentAuthenticatedUser();case 2:"master"!==e.sent.signInUserSession.idToken.payload["cognito:groups"][0]&&(t.items=t.items.filter((function(t){return"Users"!==t.title&&"Webmail"!==t.title})));case 4:case"end":return e.stop()}}),e)})))()}},l=n(56),d=n(81),f=n.n(d),m=n(720),y=n(728),v=n(722),h=n(723),_=n(240),j=n(241),w=n(145),x=n(242),k=n(99),V=n(724),A=n(725),E=n(726),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{light:""}},[r("v-app-bar",{attrs:{"clipped-left":t.clipped,fixed:"",app:"",prominent:"",rounded:"","hide-on-scroll":""}},[r("v-app-bar-nav-icon",{staticClass:"mt-9",on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),r("v-spacer"),t._v(" "),r("nuxt-link",{staticClass:"d-flex align-center",attrs:{to:{name:"index"}}},[r("img",{attrs:{src:n(580),height:"120"}})]),t._v(" "),r("v-spacer"),t._v(" "),r("AddEditProcedure")],1),t._v(" "),r("v-navigation-drawer",{attrs:{dark:"",width:"300",clipped:t.clipped,color:"#272d95",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list",t._l(t.items,(function(e,i){return r("v-list-item",{key:i,attrs:{router:"",exact:""},on:{click:function(n){return t.load(e.to)}}},[r("v-list-item-action",[r("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1),t._v(" "),r("v-main",[r("v-container",[r("nuxt")],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;f()(component,{VApp:m.a,VAppBar:y.a,VAppBarNavIcon:v.a,VContainer:h.a,VIcon:_.a,VList:j.a,VListItem:w.a,VListItemAction:x.a,VListItemContent:k.a,VListItemTitle:k.c,VMain:V.a,VNavigationDrawer:A.a,VSpacer:E.a})},406:function(t,e,n){"use strict";n.r(e);var r={name:"AddEditProcedure"},o=n(56),c=n(81),l=n.n(c),d=n(264),f=n(240),m=n(721),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({staticClass:"mt-9 ml-3",attrs:{icon:"",rounded:"",href:"http://redcap.cardiologia.org.br/redcap_v10.1.1/DataEntry/record_status_dashboard.php?pid=108&rd_id=",target:"_blank"}},r),[n("v-icon",[t._v("mdi-file-edit")])],1)]}}])},[t._v(" "),n("span",[t._v("Add or Edit Procedure")])])}),[],!1,null,"3d2f1e8e",null);e.default=component.exports;l()(component,{VBtn:d.a,VIcon:f.a,VTooltip:m.a})},407:function(t,e,n){"use strict";var r={name:"public"},o=n(56),c=n(81),l=n.n(c),d=n(720),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",[e("nuxt")],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VApp:d.a})},424:function(t,e,n){n(425),t.exports=n(426)},444:function(t,e,n){"use strict";n.r(e);n(55);var r=n(17),o=n(153);function c(){return(c=Object(r.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.redirect,t.prev=1,t.next=4,o.a.currentAuthenticatedUser();case 4:t.next=10;break;case 6:t.prev=6,t.t0=t.catch(1),console.log(t.t0),n("/auth");case 10:case"end":return t.stop()}}),t,null,[[1,6]])})))).apply(this,arguments)}e.default=function(t){return c.apply(this,arguments)}},451:function(t,e){},453:function(t,e){},463:function(t,e){},465:function(t,e){},490:function(t,e){},492:function(t,e){},493:function(t,e){},498:function(t,e){},500:function(t,e){},506:function(t,e){},508:function(t,e){},527:function(t,e){},539:function(t,e){},542:function(t,e){},566:function(t,e,n){"use strict";n.r(e);n(55);var r=n(17),o=n(153);function c(){return(c=Object(r.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.redirect,t.prev=1,t.next=4,o.a.currentAuthenticatedUser();case 4:"master"!==t.sent.signInUserSession.idToken.payload["cognito:groups"][0]&&n("/auth"),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0),n("/auth");case 12:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}e.default=function(t){return c.apply(this,arguments)}},574:function(t,e,n){"use strict";n(360)},575:function(t,e,n){var r=n(23)(!1);r.push([t.i,"h1[data-v-5c09efde]{font-size:20px}",""]),t.exports=r},580:function(t,e,n){t.exports=n.p+"img/Logo-LATAM-CTO-Registry-Reemplazar-por-original.c7b187d.png"},630:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"mutations",(function(){return c}));n(55);var r=n(17),o=function(){return{user:null}},c={setUser:function(t,e){return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.user=e;case 1:case"end":return n.stop()}}),n)})))()}}},632:function(t,e,n){var map={"./amplify-amazon-button_5.entry.js":[664,58],"./amplify-auth-fields_9.entry.js":[665,68],"./amplify-authenticator.entry.js":[666,7,78],"./amplify-button_3.entry.js":[667,59],"./amplify-chatbot.entry.js":[668,57],"./amplify-checkbox.entry.js":[669,79],"./amplify-confirm-sign-in_7.entry.js":[670,7,80],"./amplify-container.entry.js":[671,81],"./amplify-federated-buttons_2.entry.js":[672,60],"./amplify-federated-sign-in.entry.js":[673,72],"./amplify-form-field_4.entry.js":[674,82],"./amplify-greetings.entry.js":[675,61],"./amplify-icon-button.entry.js":[676,83],"./amplify-icon.entry.js":[677,75],"./amplify-link.entry.js":[678,84],"./amplify-nav_2.entry.js":[679,62],"./amplify-photo-picker.entry.js":[680,70],"./amplify-picker.entry.js":[681,71],"./amplify-radio-button_2.entry.js":[682,7,85],"./amplify-s3-album.entry.js":[683,63],"./amplify-s3-image-picker.entry.js":[684,64],"./amplify-s3-image.entry.js":[685,69],"./amplify-s3-text-picker.entry.js":[686,65],"./amplify-s3-text.entry.js":[687,66],"./amplify-select-mfa-type.entry.js":[688,67],"./amplify-sign-in-button.entry.js":[689,76],"./amplify-toast.entry.js":[690,86],"./amplify-tooltip.entry.js":[691,87]};function r(t){if(!n.o(map,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=map[t],r=e[0];return Promise.all(e.slice(1).map(n.e)).then((function(){return n(r)}))}r.keys=function(){return Object.keys(map)},r.id=632,t.exports=r},94:function(t,e,n){"use strict";var r={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(n(574),n(56)),c=n(81),l=n.n(c),d=n(720),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v(" Home page ")])],1)}),[],!1,null,"5c09efde",null);e.a=component.exports;l()(component,{VApp:d.a})}},[[424,52,12,53]]]);