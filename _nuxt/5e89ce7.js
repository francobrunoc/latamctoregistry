(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{246:function(t,e,n){"use strict";n(611);n(152).default.configure({aws_project_region:"us-west-2",aws_user_pools_id:"us-west-2_WjQMGzv9y",aws_user_pools_web_client_id:"3q8168bsot7rpv2qhh0hbouoev"})},343:function(t,e,n){var content=n(527);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("05a958ee",content,!0,{sourceMap:!1})},373:function(t,e,n){"use strict";n(66);var r=n(19),o=n(150),c={name:"private",data:function(){return{collapseOnScroll:!0,clipped:!1,drawer:!1,fixed:!1,items:[{icon:"mdi-apps",title:"Welcome",to:"/"},{icon:"mdi-chart-bubble",title:"Registry Dashboard",to:"/dashboard"},{icon:"mdi-file-edit",title:"Add or Edit Procedure",to:"/redcap"},{icon:"mdi-align-vertical-bottom",title:"Enrollment Data",to:{path:"/dashboard",query:{tab:0}}},{icon:"mdi-chart-donut",title:"Clinical Data",to:{path:"/dashboard",query:{tab:1}}},{icon:"mdi-chart-donut",title:"Angiographic Data",to:{path:"/dashboard",query:{tab:2}}},{icon:"mdi-align-vertical-bottom",title:"Procedural Data",to:{path:"/dashboard",query:{tab:3}}},{icon:"mdi-align-vertical-bottom",title:"Outcomes",to:{path:"/dashboard",query:{tab:4}}},{icon:"mdi-account",title:"Users",to:"/accounts"},{icon:"mdi-power",title:"Exit",to:"/auth"}]}},created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.currentAuthenticatedUser();case 2:"master"!==e.sent.signInUserSession.idToken.payload["cognito:groups"][0]&&(t.items=t.items.filter((function(t){return"Users"!==t.title})));case 4:case"end":return e.stop()}}),e)})))()}},l=n(61),f=n(103),d=n.n(f),m=n(674),y=n(682),v=n(675),h=n(253),_=n(676),j=n(239),w=n(240),x=n(141),k=n(241),V=n(100),A=n(677),O=n(683),R=n(678),N=n(679),E=n(680),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{light:""}},[r("v-app-bar",{attrs:{"clipped-left":t.clipped,fixed:"",app:"",prominent:"",rounded:"","hide-on-scroll":""}},[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),r("v-spacer"),t._v(" "),r("nuxt-link",{staticClass:"d-flex align-center",attrs:{to:{name:"index"}}},[r("img",{attrs:{src:n(378),height:"120"}})]),t._v(" "),r("v-spacer"),t._v(" "),r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({attrs:{icon:"",href:"https://docs.google.com/forms/d/e/1FAIpQLSenNwAvpsvcUeivyZSByyZOF-Gym_PHuCP6BIR0k93IuNcNNA/viewform?usp=sf_link",target:"_blank"}},n),[r("v-icon",{attrs:{color:"grey"}},[t._v("mdi-information-outline")])],1)]}}])},[t._v(" "),r("span",[t._v("Report a problem")])])],1)],1),t._v(" "),r("v-navigation-drawer",{attrs:{dark:"",width:"300",clipped:t.clipped,color:"#272d95",app:""},scopedSlots:t._u([{key:"append",fn:function(){return[r("v-spacer"),r("img",{attrs:{src:n(532),width:"100"}})]},proxy:!0}]),model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list",t._l(t.items,(function(e,i){return r("v-list-item",{key:i,attrs:{to:e.to,router:"",exact:""}},[r("v-list-item-action",[r("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1),t._v(" "),r("v-main",[r("v-container",[r("nuxt")],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;d()(component,{VApp:m.a,VAppBar:y.a,VAppBarNavIcon:v.a,VBtn:h.a,VContainer:_.a,VIcon:j.a,VList:w.a,VListItem:x.a,VListItemAction:k.a,VListItemContent:V.a,VListItemTitle:V.b,VMain:A.a,VNavigationDrawer:O.a,VRow:R.a,VSpacer:N.a,VTooltip:E.a})},374:function(t,e,n){"use strict";var r={name:"public"},o=n(61),c=n(103),l=n.n(c),f=n(674),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",[e("nuxt")],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VApp:f.a})},378:function(t,e,n){t.exports=n.p+"img/Logo-LATAM-CTO-Registry-Reemplazar-por-original.df4353c.png"},388:function(t,e,n){n(389),t.exports=n(390)},406:function(t,e,n){"use strict";n.r(e);n(66);var r=n(19),o=n(150);function c(){return(c=Object(r.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.redirect,t.prev=1,t.next=4,o.a.currentAuthenticatedUser();case 4:t.next=10;break;case 6:t.prev=6,t.t0=t.catch(1),console.log(t.t0),n("/auth");case 10:case"end":return t.stop()}}),t,null,[[1,6]])})))).apply(this,arguments)}e.default=function(t){return c.apply(this,arguments)}},411:function(t,e){},413:function(t,e){},423:function(t,e){},425:function(t,e){},450:function(t,e){},452:function(t,e){},453:function(t,e){},458:function(t,e){},460:function(t,e){},479:function(t,e){},491:function(t,e){},494:function(t,e){},518:function(t,e,n){"use strict";n.r(e);n(66);var r=n(19),o=n(150);function c(){return(c=Object(r.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.redirect,t.prev=1,t.next=4,o.a.currentAuthenticatedUser();case 4:"master"!==t.sent.signInUserSession.idToken.payload["cognito:groups"][0]&&n("/auth"),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0),n("/auth");case 12:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}e.default=function(t){return c.apply(this,arguments)}},526:function(t,e,n){"use strict";n(343)},527:function(t,e,n){(e=n(20)(!1)).push([t.i,"h1[data-v-5c09efde]{font-size:20px}",""]),t.exports=e},532:function(t,e,n){t.exports=n.p+"img/boston_logo_web.06b9b6e.png"},587:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"mutations",(function(){return c}));n(66);var r=n(19),o=function(){return{user:null}},c={setUser:function(t,e){return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.user=e;case 1:case"end":return n.stop()}}),n)})))()}}},588:function(t,e,n){var map={"./amplify-amazon-button_5.entry.js":[617,17],"./amplify-auth-fields_9.entry.js":[618,28],"./amplify-authenticator.entry.js":[619,1,35],"./amplify-button_3.entry.js":[620,18],"./amplify-chatbot.entry.js":[621,22],"./amplify-checkbox.entry.js":[622,36],"./amplify-confirm-sign-in_7.entry.js":[623,1,37],"./amplify-container.entry.js":[624,38],"./amplify-federated-buttons_2.entry.js":[625,19],"./amplify-federated-sign-in.entry.js":[626,32],"./amplify-form-field_4.entry.js":[627,39],"./amplify-greetings.entry.js":[628,20],"./amplify-icon-button.entry.js":[629,40],"./amplify-icon.entry.js":[630,33],"./amplify-link.entry.js":[631,41],"./amplify-nav_2.entry.js":[632,21],"./amplify-photo-picker.entry.js":[633,30],"./amplify-picker.entry.js":[634,31],"./amplify-radio-button_2.entry.js":[635,1,42],"./amplify-s3-album.entry.js":[636,23],"./amplify-s3-image-picker.entry.js":[637,24],"./amplify-s3-image.entry.js":[638,29],"./amplify-s3-text-picker.entry.js":[639,25],"./amplify-s3-text.entry.js":[640,26],"./amplify-select-mfa-type.entry.js":[641,27],"./amplify-sign-in-button.entry.js":[642,34],"./amplify-toast.entry.js":[643,43],"./amplify-tooltip.entry.js":[644,44]};function r(t){if(!n.o(map,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=map[t],r=e[0];return Promise.all(e.slice(1).map(n.e)).then((function(){return n(r)}))}r.keys=function(){return Object.keys(map)},r.id=588,t.exports=r},89:function(t,e,n){"use strict";var r={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(n(526),n(61)),c=n(103),l=n.n(c),f=n(674),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v(" Home page ")])],1)}),[],!1,null,"5c09efde",null);e.a=component.exports;l()(component,{VApp:f.a})}},[[388,11,4,12]]]);