(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{243:function(t,e,n){"use strict";n(618);n(149).default.configure({aws_project_region:"us-west-2",aws_user_pools_id:"us-west-2_WjQMGzv9y",aws_user_pools_web_client_id:"3q8168bsot7rpv2qhh0hbouoev"})},348:function(t,e,n){var content=n(536);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("05a958ee",content,!0,{sourceMap:!1})},379:function(t,e,n){"use strict";n(66);var r=n(20),o=n(147),c={name:"private",data:function(){return{collapseOnScroll:!0,clipped:!1,drawer:!1,fixed:!1,items:[{icon:"mdi-apps",title:"Welcome",to:"/"},{icon:"mdi-chart-bubble",title:"Registry Dashboard",to:"/dashboard"},{icon:"mdi-file-edit",title:"Add or Edit Procedure",to:"/redcap"},{icon:"mdi-star",title:"Data Quality",to:{path:"/dashboard",query:{tab:0}}},{icon:"mdi-align-vertical-bottom",title:"Enrollment Data",to:{path:"/dashboard",query:{tab:1}}},{icon:"mdi-chart-donut",title:"Clinical Data",to:{path:"/dashboard",query:{tab:2}}},{icon:"mdi-chart-donut",title:"Angiographic Data",to:{path:"/dashboard",query:{tab:3}}},{icon:"mdi-align-vertical-bottom",title:"Procedural Data",to:{path:"/dashboard",query:{tab:4}}},{icon:"mdi-align-vertical-bottom",title:"Outcomes",to:{path:"/dashboard",query:{tab:5}}},{icon:"mdi-account",title:"Users",to:"/accounts"},{icon:"mdi-email",title:"Webmail",to:"/webmail"},{icon:"mdi-power",title:"Exit",to:"/auth"}]}},created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.currentAuthenticatedUser();case 2:"master"!==e.sent.signInUserSession.idToken.payload["cognito:groups"][0]&&(t.items=t.items.filter((function(t){return"Users"!==t.title&&"Webmail"!==t.title})));case 4:case"end":return e.stop()}}),e)})))()}},l=n(62),f=n(103),d=n.n(f),m=n(681),y=n(689),v=n(682),h=n(249),_=n(683),j=n(233),w=n(234),x=n(139),k=n(235),A=n(92),V=n(684),O=n(685),N=n(686),R=n(687),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{light:""}},[r("v-app-bar",{attrs:{"clipped-left":t.clipped,fixed:"",app:"",prominent:"",rounded:"","hide-on-scroll":""}},[r("v-app-bar-nav-icon",{staticClass:"mt-9",on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),r("v-spacer"),t._v(" "),r("nuxt-link",{staticClass:"d-flex align-center",attrs:{to:{name:"index"}}},[r("img",{attrs:{src:n(541),height:"120"}})]),t._v(" "),r("v-spacer"),t._v(" "),r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({staticClass:"mt-9",attrs:{icon:"",href:"https://docs.google.com/forms/d/e/1FAIpQLSenNwAvpsvcUeivyZSByyZOF-Gym_PHuCP6BIR0k93IuNcNNA/viewform?usp=sf_link",target:"_blank"}},n),[r("v-icon",{attrs:{color:"grey"}},[t._v("mdi-information-outline")])],1)]}}])},[t._v(" "),r("span",[t._v("Report a problem")])])],1),t._v(" "),r("v-navigation-drawer",{attrs:{dark:"",width:"300",clipped:t.clipped,color:"#272d95",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list",t._l(t.items,(function(e,i){return r("v-list-item",{key:i,attrs:{to:e.to,router:"",exact:""}},[r("v-list-item-action",[r("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1),t._v(" "),r("v-main",[r("v-container",[r("nuxt")],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;d()(component,{VApp:m.a,VAppBar:y.a,VAppBarNavIcon:v.a,VBtn:h.a,VContainer:_.a,VIcon:j.a,VList:w.a,VListItem:x.a,VListItemAction:k.a,VListItemContent:A.a,VListItemTitle:A.c,VMain:V.a,VNavigationDrawer:O.a,VSpacer:N.a,VTooltip:R.a})},380:function(t,e,n){"use strict";var r={name:"public"},o=n(62),c=n(103),l=n.n(c),f=n(681),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",[e("nuxt")],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VApp:f.a})},397:function(t,e,n){n(398),t.exports=n(399)},415:function(t,e,n){"use strict";n.r(e);n(66);var r=n(20),o=n(147);function c(){return(c=Object(r.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.redirect,t.prev=1,t.next=4,o.a.currentAuthenticatedUser();case 4:t.next=10;break;case 6:t.prev=6,t.t0=t.catch(1),console.log(t.t0),n("/auth");case 10:case"end":return t.stop()}}),t,null,[[1,6]])})))).apply(this,arguments)}e.default=function(t){return c.apply(this,arguments)}},420:function(t,e){},422:function(t,e){},432:function(t,e){},434:function(t,e){},459:function(t,e){},461:function(t,e){},462:function(t,e){},467:function(t,e){},469:function(t,e){},488:function(t,e){},500:function(t,e){},503:function(t,e){},527:function(t,e,n){"use strict";n.r(e);n(66);var r=n(20),o=n(147);function c(){return(c=Object(r.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.redirect,t.prev=1,t.next=4,o.a.currentAuthenticatedUser();case 4:"master"!==t.sent.signInUserSession.idToken.payload["cognito:groups"][0]&&n("/auth"),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0),n("/auth");case 12:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}e.default=function(t){return c.apply(this,arguments)}},535:function(t,e,n){"use strict";n(348)},536:function(t,e,n){(e=n(21)(!1)).push([t.i,"h1[data-v-5c09efde]{font-size:20px}",""]),t.exports=e},541:function(t,e,n){t.exports=n.p+"img/Logo-LATAM-CTO-Registry-Reemplazar-por-original.df4353c.png"},593:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"mutations",(function(){return c}));n(66);var r=n(20),o=function(){return{user:null}},c={setUser:function(t,e){return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.user=e;case 1:case"end":return n.stop()}}),n)})))()}}},594:function(t,e,n){var map={"./amplify-amazon-button_5.entry.js":[625,19],"./amplify-auth-fields_9.entry.js":[626,30],"./amplify-authenticator.entry.js":[627,1,37],"./amplify-button_3.entry.js":[628,20],"./amplify-chatbot.entry.js":[629,24],"./amplify-checkbox.entry.js":[630,38],"./amplify-confirm-sign-in_7.entry.js":[631,1,39],"./amplify-container.entry.js":[632,40],"./amplify-federated-buttons_2.entry.js":[633,21],"./amplify-federated-sign-in.entry.js":[634,34],"./amplify-form-field_4.entry.js":[635,41],"./amplify-greetings.entry.js":[636,22],"./amplify-icon-button.entry.js":[637,42],"./amplify-icon.entry.js":[638,35],"./amplify-link.entry.js":[639,43],"./amplify-nav_2.entry.js":[640,23],"./amplify-photo-picker.entry.js":[641,32],"./amplify-picker.entry.js":[642,33],"./amplify-radio-button_2.entry.js":[643,1,44],"./amplify-s3-album.entry.js":[644,25],"./amplify-s3-image-picker.entry.js":[645,26],"./amplify-s3-image.entry.js":[646,31],"./amplify-s3-text-picker.entry.js":[647,27],"./amplify-s3-text.entry.js":[648,28],"./amplify-select-mfa-type.entry.js":[649,29],"./amplify-sign-in-button.entry.js":[650,36],"./amplify-toast.entry.js":[651,45],"./amplify-tooltip.entry.js":[652,46]};function r(t){if(!n.o(map,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=map[t],r=e[0];return Promise.all(e.slice(1).map(n.e)).then((function(){return n(r)}))}r.keys=function(){return Object.keys(map)},r.id=594,t.exports=r},88:function(t,e,n){"use strict";var r={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(n(535),n(62)),c=n(103),l=n.n(c),f=n(681),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v(" Home page ")])],1)}),[],!1,null,"5c09efde",null);e.a=component.exports;l()(component,{VApp:f.a})}},[[397,12,4,13]]]);