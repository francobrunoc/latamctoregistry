(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{251:function(t,e,n){"use strict";n(654);n(150).default.configure({aws_project_region:"us-west-2",aws_user_pools_id:"us-west-2_WjQMGzv9y",aws_user_pools_web_client_id:"3q8168bsot7rpv2qhh0hbouoev"})},359:function(t,e,n){var content=n(573);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("05a958ee",content,!0,{sourceMap:!1})},404:function(t,e,n){"use strict";n(14),n(61);var r=n(19),o=n(151),c={name:"private",data:function(){return{collapseOnScroll:!0,clipped:!1,drawer:!1,fixed:!1,items:[{icon:"mdi-apps",title:"Welcome",to:"/"},{icon:"mdi-chart-bubble",title:"Registry Dashboard",to:"/dashboard"},{icon:"mdi-star",title:"Data Quality",to:{path:"/dashboard",query:{tab:0}}},{icon:"mdi-align-vertical-bottom",title:"Enrollment Data",to:{path:"/dashboard",query:{tab:1}}},{icon:"mdi-chart-donut",title:"Clinical Data",to:{path:"/dashboard",query:{tab:2}}},{icon:"mdi-chart-donut",title:"Angiographic Data",to:{path:"/dashboard",query:{tab:3}}},{icon:"mdi-align-vertical-bottom",title:"Procedural Data",to:{path:"/dashboard",query:{tab:4}}},{icon:"mdi-align-vertical-bottom",title:"Outcomes",to:{path:"/dashboard",query:{tab:5}}},{icon:"mdi-account",title:"Users",to:"/accounts"},{icon:"mdi-email",title:"Webmail",to:"/webmail"},{icon:"mdi-power",title:"Exit",to:"/auth"}]}},created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.currentAuthenticatedUser();case 2:"master"!==e.sent.signInUserSession.idToken.payload["cognito:groups"][0]&&(t.items=t.items.filter((function(t){return"Users"!==t.title&&"Webmail"!==t.title})));case 4:case"end":return e.stop()}}),e)})))()}},l=n(66),f=n(107),d=n.n(f),m=n(718),v=n(726),y=n(719),h=n(264),_=n(720),j=n(240),w=n(241),x=n(145),k=n(242),A=n(98),V=n(721),O=n(722),C=n(723),N=n(724),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{light:""}},[r("v-app-bar",{attrs:{"clipped-left":t.clipped,fixed:"",app:"",prominent:"",rounded:"","hide-on-scroll":""}},[r("v-app-bar-nav-icon",{staticClass:"mt-9",on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({staticClass:"mt-9 ml-3",attrs:{icon:"",rounded:"",href:"http://redcap.cardiologia.org.br/redcap_v10.1.1/DataEntry/record_status_dashboard.php?pid=108&rd_id=",target:"_blank"}},n),[r("v-icon",[t._v("mdi-file-edit")])],1)]}}])},[t._v(" "),r("span",[t._v("Add or Edit Procedure")])]),t._v(" "),r("v-spacer"),t._v(" "),r("nuxt-link",{staticClass:"d-flex align-center mr-15",attrs:{to:{name:"index"}}},[r("img",{attrs:{src:n(578),height:"120"}})]),t._v(" "),r("v-spacer"),t._v(" "),r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({staticClass:"mt-9",attrs:{icon:"",href:"https://docs.google.com/forms/d/e/1FAIpQLSenNwAvpsvcUeivyZSByyZOF-Gym_PHuCP6BIR0k93IuNcNNA/viewform?usp=sf_link",target:"_blank"}},n),[r("v-icon",{attrs:{color:"grey"}},[t._v("mdi-information-outline")])],1)]}}])},[t._v(" "),r("span",[t._v("Report a problem")])])],1),t._v(" "),r("v-navigation-drawer",{attrs:{dark:"",width:"300",clipped:t.clipped,color:"#272d95",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list",t._l(t.items,(function(e,i){return r("v-list-item",{key:i,attrs:{to:e.to,router:"",exact:""}},[r("v-list-item-action",[r("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1),t._v(" "),r("v-main",[r("v-container",[r("nuxt")],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;d()(component,{VApp:m.a,VAppBar:v.a,VAppBarNavIcon:y.a,VBtn:h.a,VContainer:_.a,VIcon:j.a,VList:w.a,VListItem:x.a,VListItemAction:k.a,VListItemContent:A.a,VListItemTitle:A.c,VMain:V.a,VNavigationDrawer:O.a,VSpacer:C.a,VTooltip:N.a})},405:function(t,e,n){"use strict";var r={name:"public"},o=n(66),c=n(107),l=n.n(c),f=n(718),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",[e("nuxt")],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VApp:f.a})},422:function(t,e,n){n(423),t.exports=n(424)},442:function(t,e,n){"use strict";n.r(e);n(61);var r=n(19),o=n(151);function c(){return(c=Object(r.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.redirect,t.prev=1,t.next=4,o.a.currentAuthenticatedUser();case 4:t.next=10;break;case 6:t.prev=6,t.t0=t.catch(1),console.log(t.t0),n("/auth");case 10:case"end":return t.stop()}}),t,null,[[1,6]])})))).apply(this,arguments)}e.default=function(t){return c.apply(this,arguments)}},449:function(t,e){},451:function(t,e){},461:function(t,e){},463:function(t,e){},488:function(t,e){},490:function(t,e){},491:function(t,e){},496:function(t,e){},498:function(t,e){},504:function(t,e){},506:function(t,e){},525:function(t,e){},537:function(t,e){},540:function(t,e){},564:function(t,e,n){"use strict";n.r(e);n(61);var r=n(19),o=n(151);function c(){return(c=Object(r.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.redirect,t.prev=1,t.next=4,o.a.currentAuthenticatedUser();case 4:"master"!==t.sent.signInUserSession.idToken.payload["cognito:groups"][0]&&n("/auth"),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0),n("/auth");case 12:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}e.default=function(t){return c.apply(this,arguments)}},572:function(t,e,n){"use strict";n(359)},573:function(t,e,n){var r=n(23)(!1);r.push([t.i,"h1[data-v-5c09efde]{font-size:20px}",""]),t.exports=r},578:function(t,e,n){t.exports=n.p+"img/Logo-LATAM-CTO-Registry-Reemplazar-por-original.c7b187d.png"},628:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"mutations",(function(){return c}));n(61);var r=n(19),o=function(){return{user:null}},c={setUser:function(t,e){return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.user=e;case 1:case"end":return n.stop()}}),n)})))()}}},630:function(t,e,n){var map={"./amplify-amazon-button_5.entry.js":[662,55],"./amplify-auth-fields_9.entry.js":[663,65],"./amplify-authenticator.entry.js":[664,7,75],"./amplify-button_3.entry.js":[665,56],"./amplify-chatbot.entry.js":[666,54],"./amplify-checkbox.entry.js":[667,76],"./amplify-confirm-sign-in_7.entry.js":[668,7,77],"./amplify-container.entry.js":[669,78],"./amplify-federated-buttons_2.entry.js":[670,57],"./amplify-federated-sign-in.entry.js":[671,69],"./amplify-form-field_4.entry.js":[672,79],"./amplify-greetings.entry.js":[673,58],"./amplify-icon-button.entry.js":[674,80],"./amplify-icon.entry.js":[675,72],"./amplify-link.entry.js":[676,81],"./amplify-nav_2.entry.js":[677,59],"./amplify-photo-picker.entry.js":[678,67],"./amplify-picker.entry.js":[679,68],"./amplify-radio-button_2.entry.js":[680,7,82],"./amplify-s3-album.entry.js":[681,60],"./amplify-s3-image-picker.entry.js":[682,61],"./amplify-s3-image.entry.js":[683,66],"./amplify-s3-text-picker.entry.js":[684,62],"./amplify-s3-text.entry.js":[685,63],"./amplify-select-mfa-type.entry.js":[686,64],"./amplify-sign-in-button.entry.js":[687,73],"./amplify-toast.entry.js":[688,83],"./amplify-tooltip.entry.js":[689,84]};function r(t){if(!n.o(map,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=map[t],r=e[0];return Promise.all(e.slice(1).map(n.e)).then((function(){return n(r)}))}r.keys=function(){return Object.keys(map)},r.id=630,t.exports=r},93:function(t,e,n){"use strict";var r={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(n(572),n(66)),c=n(107),l=n.n(c),f=n(718),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v(" Home page ")])],1)}),[],!1,null,"5c09efde",null);e.a=component.exports;l()(component,{VApp:f.a})}},[[422,49,11,50]]]);