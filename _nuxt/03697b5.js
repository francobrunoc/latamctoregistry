(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1e3:function(t,e,r){"use strict";r.r(e);var n=r(989),o={name:"ContactUsDialog",data:function(){return{contactUsDialog:!1,items:[{header:"Project Staff"},{avatar:"",title:"LATAM CTO Registry Principal Investigator",subtitle:"Dr. Alexandre Schaan de Quadros: <a href='mailto:consult.asq@gmail.com'>consult.asq@gmail.com</a>",email:"consult.asq@gmail.com"},{divider:!0,inset:!0},{avatar:"https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y",title:"Operational Coordinator",subtitle:"Dr. Pedro Piccaro de Oliveira: <a href='mailto:pedropiccaro@gmail.com'>pedropiccaro@gmail.com</a>",email:"pedropiccaro@gmail.com"},{divider:!0,inset:!0},{avatar:"https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y",title:"Database Web Interface Developer",subtitle:"Franco Bruno Corteletti: <a href='mailto:francobrunoc@gmail.com'>francobrunoc@gmail.com</a>",email:"francobrunoc@gmail.com"}]}},mounted:function(){this.gravatar()},methods:{gravatar:function(){this.items.forEach((function(t){t.avatar&&(t.avatar="https://www.gravatar.com/avatar/"+n(t.email))}))},close:function(){this.contactUsDialog=!1}}},c=(r(992),r(62)),l=r(103),d=r.n(l),m=r(237),f=r(249),v=r(708),h=r(694),j=r(1018),w=r(857),x=r(233),_=r(234),C=r(139),y=r(236),k=r(92),R=r(1017),P=r(687),O=r(860),S=r(688),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{"max-width":"600"},scopedSlots:t._u([{key:"activator",fn:function(e){var dialog=e.on;return[n("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({attrs:{color:"blue",fab:"",dark:"",top:"",fixed:"",right:""},on:{click:function(e){t.contactUsDialog=!0}}},Object.assign({},r,dialog)),[n("v-icon",[t._v("mdi-email")])],1)]}}],null,!0)},[t._v(" "),n("span",[t._v("Contact Us")])])]}}]),model:{value:t.contactUsDialog,callback:function(e){t.contactUsDialog=e},expression:"contactUsDialog"}},[t._v(" "),n("v-card",[n("v-card-title",{staticClass:"primary white--text"},[t._v("Contact Us\n      "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.close()}}},[n("v-icon",{staticClass:"white--text"},[t._v("mdi-close")])],1)],1),t._v(" "),n("v-card-text",[n("v-list",{attrs:{"three-line":""}},[t._l(t.items,(function(e,o){return[e.header?n("v-subheader",{key:e.header,domProps:{textContent:t._s(e.header)}}):e.divider?n("v-divider",{key:o,attrs:{inset:e.inset}}):n("v-list-item",{key:e.title},[n("v-list-item-avatar",[e.avatar?n("img",{attrs:{src:e.avatar}}):n("img",{attrs:{src:r(987)}})]),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{staticClass:"wrap-text",domProps:{innerHTML:t._s(e.title)}}),t._v(" "),n("v-list-item-subtitle",{staticClass:"wrap-text",domProps:{innerHTML:t._s(e.subtitle)}})],1)],1)]}))],2),t._v(" "),n("v-row",[n("v-spacer"),t._v(" "),n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({staticClass:"mb-4 mr-8",attrs:{fab:"",large:""}},o),[n("v-avatar",{attrs:{width:"150",height:"100"}},[n("img",{attrs:{src:r(988),alt:"Prime Medicina"}})])],1)]}}])},[t._v(" "),n("span",[t._v("Powered by")])])],1)],1)],1)],1)}),[],!1,null,"60c71f42",null);e.default=component.exports;d()(component,{VAvatar:m.a,VBtn:f.a,VCard:v.a,VCardText:h.a,VCardTitle:h.b,VDialog:j.a,VDivider:w.a,VIcon:x.a,VList:_.a,VListItem:C.a,VListItemAvatar:y.a,VListItemContent:k.a,VListItemSubtitle:k.b,VListItemTitle:k.c,VRow:R.a,VSpacer:P.a,VSubheader:O.a,VTooltip:S.a})},1027:function(t,e,r){"use strict";r.r(e);r(66);var n=r(20),o=r(696),c=r(701),l=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(path){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",c.a.GET(path));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d={latamCtoCenters:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l("centers/latamCtoCenters");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()}};r(7);function m(t){var e,r=t.componentFactory,n=t.loading,o=t.loadingData;return function(){return{component:new Promise((function(t){e=t})),loading:{mounted:function(){var t=this;if("IntersectionObserver"in window){var n=new IntersectionObserver((function(o){o[0].intersectionRatio<=0||(n.unobserve(t.$el),r().then(e))}));n.observe(this.$el)}else r().then(e)},render:function(t){return t(n,o)}}}}}r(25);var f={name:"SkeletonBox",props:{maxWidth:{default:100,type:Number},minWidth:{default:80,type:Number},height:{default:"1em",type:String},width:{default:null,type:String}},computed:{computedWidth:function(){return this.width||"".concat(Math.floor(Math.random()*(this.maxWidth-this.minWidth)+this.minWidth),"%")}}},v=(r(983),r(62)),h=Object(v.a)(f,(function(){var t=this.$createElement;return(this._self._c||t)("span",{staticClass:"SkeletonBox",style:{height:this.height,width:this.computedWidth}})}),[],!1,null,null,null).exports,j=r(147),w={name:"index",layout:"public",components:{ProceduresLocals:r(904).default,Centers:m({componentFactory:function(){return Promise.resolve().then(r.bind(null,997))},loading:h}),SuccessfulProcedures:m({componentFactory:function(){return Promise.resolve().then(r.bind(null,998))},loading:h}),SuccessStrategies:m({componentFactory:function(){return Promise.resolve().then(r.bind(null,999))},loading:h}),AnnualProcedures:m({componentFactory:function(){return Promise.resolve().then(r.bind(null,996))},loading:h})},data:function(){return{fab:!1,projectNote:null,countries:null,activeCenters:null,centersPi:null,proceduresEnrolled:null,loadingProjectNote:!0,loadingCenters:!0,loadingProcedures:!0,logged:!1}},methods:{dashboard:function(){this.$router.push("/dashboard")},login:function(){this.$router.push("/auth")},onScroll:function(t){if("undefined"!=typeof window){var e=window.pageYOffset||t.target.scrollTop||0;this.fab=e>20}},toTop:function(){this.$vuetify.goTo(0)}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c,l,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.currentAuthenticatedUser();case 3:t.logged=!0,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),t.logged=!1;case 9:return e.next=11,o.a.projectInfo();case 11:return r=e.sent,n=r.project_notes,t.projectNote=n,t.loadingProjectNote=!1,e.next=17,o.a.countAll();case 17:return c=e.sent,l=c.proceduresEnrolled,t.proceduresEnrolled=l,t.loadingProcedures=!1,e.next=23,d.latamCtoCenters();case 23:m=e.sent,t.centersPi=m.coordinatePoints.map((function(t){return{centerName:t.centerName,pi:t.pi}})).sort((function(a,b){return a.centerName>b.centerName?1:b.centerName>a.centerName?-1:0})),t.countries=m.countries.length,t.activeCenters=m.centers.length,t.loadingCenters=!1;case 28:case"end":return e.stop()}}),e,null,[[0,6]])})))()}},x=(r(985),r(103)),_=r.n(x),C=r(249),y=r(708),k=r(694),R=r(1016),P=r(857),O=r(233),S=r(1020),V=r(139),D=r(92),z=r(232),L=r(1017),T=r(688),A=r(994),E=r.n(A),N=r(353),I=Object(v.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{column:"","justify-center":"","align-center":""}},[n("v-card",{staticClass:"mx-auto"},[n("div",{attrs:{align:"center"}},[n("img",{attrs:{width:"65%",src:r(981)}})]),t._v(" "),n("img",{staticClass:"white--text align-end",attrs:{width:"100%",src:r(982)}}),t._v(" "),n("v-card-text",[n("v-row",[n("v-col",{attrs:{align:"center"}},[t.loadingProjectNote?n("v-progress-circular",{attrs:{indeterminate:"",color:"grey"}}):t._e(),t._v(" "),t.loadingProjectNote?t._e():n("p",{staticClass:"text"},[t._v("\n              "+t._s(t.projectNote)+"\n            ")])],1)],1),t._v(" "),n("v-row",[n("v-col",{attrs:{align:"center"}},[t.loadingProcedures?n("v-progress-circular",{attrs:{indeterminate:"",color:"grey"}}):t._e(),t._v(" "),n("p",{staticClass:"stats"},[t._v(t._s(this.proceduresEnrolled))]),t._v(" "),n("p",{staticClass:"mt-10"},[t._v("PROCEDURES")]),t._v(" "),n("p",{staticClass:"mb-10"},[t._v("FROM")]),t._v(" "),t.loadingCenters?n("v-progress-circular",{attrs:{indeterminate:"",color:"grey"}}):t._e(),t._v(" "),n("p",{staticClass:"stats"},[t._v(t._s(this.activeCenters))]),t._v(" "),n("p",{staticClass:"mt-10"},[t._v("CTO CENTERS")]),t._v(" "),n("p",{staticClass:"mb-10"},[t._v("IN")]),t._v(" "),t.loadingCenters?n("v-progress-circular",{attrs:{indeterminate:"",color:"grey"}}):t._e(),t._v(" "),n("p",{staticClass:"stats"},[t._v(t._s(this.countries))]),t._v(" "),n("p",{staticClass:"mt-10"},[t._v("COUNTRIES")])],1)],1),t._v(" "),n("div",{staticClass:"mb-10 mt-10"},[n("Centers",{attrs:{id:"geographicDistribution"}})],1),t._v(" "),n("div",{staticClass:"mb-15"},[n("SuccessfulProcedures",{attrs:{id:"proceduralData"}}),t._v(" "),n("SuccessStrategies"),t._v(" "),n("AnnualProcedures"),t._v(" "),n("ProceduresLocals")],1),t._v(" "),n("v-row",[n("v-col",{attrs:{align:"center"}},[n("v-card",{attrs:{"max-width":"800",loading:t.loadingCenters}},[n("v-card-text",t._l(t.centersPi,(function(e,r){return n("v-list-item",{key:r,attrs:{"two-line":""}},[n("v-list-item-content",[0===r?n("v-list-item-title",{staticClass:"mb-4"},[n("span",[t._v("LATAM CTO Center")])]):t._e(),t._v(" "),0===r?n("v-list-item-subtitle",[n("span",[t._v("\n                        Principal Investigator\n                      ")]),t._v(" "),n("v-divider",{staticClass:"mt-7 mb-4"})],1):t._e(),t._v(" "),r>0?n("v-list-item-title",{staticClass:"mb-4"},[n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(r){var o=r.on;return[n("v-span",t._g({},o),[t._v(t._s(e.centerName))])]}}],null,!0)},[t._v(" "),n("span",[t._v(" "+t._s(e.centerName)+" ")])])],1):t._e(),t._v(" "),r>0?n("v-list-item-subtitle",{staticClass:"mb-4"},[t._v("\n                      "+t._s(e.pi)+"\n                      "),r<t.centersPi.length-1?n("v-divider",{key:r,staticClass:"mt-10"}):t._e()],1):t._e()],1)],1)})),1)],1)],1)],1)],1)],1),t._v(" "),n("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[t.logged?n("v-btn",t._g({attrs:{color:"blue",fab:"",dark:"",top:"",left:"",fixed:""},on:{click:t.dashboard}},r),[n("v-icon",[t._v("mdi-plus")])],1):n("v-btn",t._g({attrs:{color:"blue",fab:"",dark:"",top:"",left:"",fixed:""},on:{click:t.login}},r),[n("v-icon",[t._v("mdi-account")])],1)]}}])},[t._v(" "),n("span",[t._v("Logged Area")])]),t._v(" "),n("ContactUsDialog"),t._v(" "),n("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"},{name:"show",rawName:"v-show",value:t.fab,expression:"fab"}],staticClass:"transition-swing",attrs:{color:"blue",fab:"",dark:"",bottom:"",right:"",fixed:""},on:{click:function(e){return t.toTop()}}},r),[n("v-icon",[t._v("mdi-arrow-up")])],1)]}}])},[t._v(" "),n("span",[t._v("Scroll to top")])])],1)}),[],!1,null,null,null);e.default=I.exports;_()(I,{Centers:r(997).default,SuccessfulProcedures:r(998).default,SuccessStrategies:r(999).default,AnnualProcedures:r(996).default,ProceduresLocals:r(904).default,ContactUsDialog:r(1e3).default}),_()(I,{VBtn:C.a,VCard:y.a,VCardText:k.a,VCol:R.a,VDivider:P.a,VIcon:O.a,VLayout:S.a,VListItem:V.a,VListItemContent:D.a,VListItemSubtitle:D.b,VListItemTitle:D.c,VProgressCircular:z.a,VRow:L.a,VTooltip:T.a}),E()(I,{Scroll:N.b})},696:function(t,e,r){"use strict";r(66);var n=r(20),o=r(701),c=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(path){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.a.GET(path));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l={projectInfo:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c("registry/project/info/notes");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},countAll:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c("registry/procedures/count");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},successfulStrategies:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c("registry/procedures/successfulStrategies");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},successfulProceduresPerYear:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c("registry/procedures/successfulProceduresPerYear");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},annualProcedures:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c("registry/procedures/annualProcedures");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},clinicalDataQuality:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c("registry/procedures/clinicalDataQuality");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},outcomesDataQuality:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c("registry/procedures/outcomesDataQuality");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},proceduralDataQuality:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c("registry/procedures/proceduralDataQuality");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},angiographicDataQuality:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c("registry/procedures/angiographicDataQuality");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},successDataQuality:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c("registry/procedures/successDataQuality");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},followUpDataQuality:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c("registry/procedures/followUpDataQuality");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},clinicalCharacteristics:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c("registry/procedures/clinicalCharacteristics");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},angiographicCharacteristics:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c("registry/procedures/angiographicCharacteristics");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},proceduralCharacteristics:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c("registry/procedures/proceduralCharacteristics");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},anginaOutcome:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c("registry/procedures/anginaOutcome");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},proceduralComplications:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c("registry/procedures/proceduralComplications");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},inHospitalOutcomes:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c("registry/procedures/inHospitalOutcomes");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},topEnrollers:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c("registry/procedures/topEnrollers");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},casesPerMonth:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c("registry/procedures/casesPerMonth");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()}};e.a=l},701:function(t,e,r){"use strict";(function(t){r(28),r(29),r(7),r(66);var n=r(20),o=r(850),c=r.n(o),l=r(707),d=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(path){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(l.a)(path));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(path,r){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],o={headers:{Authorization:r}},e.next=4,c.a.get("https://7cb5vfypm9.execute-api.us-west-2.amazonaws.com/dev/".concat(path||""),o).then((function(e){(n=e.data).body&&(n=JSON.parse(t.from(n.body).toString("utf-8")))})).catch((function(t){return console.error(t)}));case 4:return e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}();e.a={GET:d,get:m}}).call(this,r(9).Buffer)},704:function(t,e,r){"use strict";var n=r(711);e.a={extends:n.a,mixins:[n.d.reactiveProp],props:["chartData","options"],mounted:function(){this.renderChart(this.chartData,this.options)}}},706:function(t,e,r){"use strict";var n=r(711);e.a={extends:n.b,mixins:[n.d.reactiveProp],props:["chartData","options"],mounted:function(){this.renderChart(this.chartData,this.options)}}},707:function(t,e,r){"use strict";r.d(e,"a",(function(){return d}));r(66);var n,o=r(20),c=r(147),l=r(701),d=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(path){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.currentAuthenticatedUser().then((function(u){return n=u.signInUserSession.idToken.jwtToken})).catch((function(t){return console.log(t)}));case 2:return t.next=4,l.a.get(path,n);case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},889:function(t,e,r){var map={"./af":713,"./af.js":713,"./ar":714,"./ar-dz":715,"./ar-dz.js":715,"./ar-kw":716,"./ar-kw.js":716,"./ar-ly":717,"./ar-ly.js":717,"./ar-ma":718,"./ar-ma.js":718,"./ar-sa":719,"./ar-sa.js":719,"./ar-tn":720,"./ar-tn.js":720,"./ar.js":714,"./az":721,"./az.js":721,"./be":722,"./be.js":722,"./bg":723,"./bg.js":723,"./bm":724,"./bm.js":724,"./bn":725,"./bn-bd":726,"./bn-bd.js":726,"./bn.js":725,"./bo":727,"./bo.js":727,"./br":728,"./br.js":728,"./bs":729,"./bs.js":729,"./ca":730,"./ca.js":730,"./cs":731,"./cs.js":731,"./cv":732,"./cv.js":732,"./cy":733,"./cy.js":733,"./da":734,"./da.js":734,"./de":735,"./de-at":736,"./de-at.js":736,"./de-ch":737,"./de-ch.js":737,"./de.js":735,"./dv":738,"./dv.js":738,"./el":739,"./el.js":739,"./en-au":740,"./en-au.js":740,"./en-ca":741,"./en-ca.js":741,"./en-gb":742,"./en-gb.js":742,"./en-ie":743,"./en-ie.js":743,"./en-il":744,"./en-il.js":744,"./en-in":745,"./en-in.js":745,"./en-nz":746,"./en-nz.js":746,"./en-sg":747,"./en-sg.js":747,"./eo":748,"./eo.js":748,"./es":749,"./es-do":750,"./es-do.js":750,"./es-mx":751,"./es-mx.js":751,"./es-us":752,"./es-us.js":752,"./es.js":749,"./et":753,"./et.js":753,"./eu":754,"./eu.js":754,"./fa":755,"./fa.js":755,"./fi":756,"./fi.js":756,"./fil":757,"./fil.js":757,"./fo":758,"./fo.js":758,"./fr":759,"./fr-ca":760,"./fr-ca.js":760,"./fr-ch":761,"./fr-ch.js":761,"./fr.js":759,"./fy":762,"./fy.js":762,"./ga":763,"./ga.js":763,"./gd":764,"./gd.js":764,"./gl":765,"./gl.js":765,"./gom-deva":766,"./gom-deva.js":766,"./gom-latn":767,"./gom-latn.js":767,"./gu":768,"./gu.js":768,"./he":769,"./he.js":769,"./hi":770,"./hi.js":770,"./hr":771,"./hr.js":771,"./hu":772,"./hu.js":772,"./hy-am":773,"./hy-am.js":773,"./id":774,"./id.js":774,"./is":775,"./is.js":775,"./it":776,"./it-ch":777,"./it-ch.js":777,"./it.js":776,"./ja":778,"./ja.js":778,"./jv":779,"./jv.js":779,"./ka":780,"./ka.js":780,"./kk":781,"./kk.js":781,"./km":782,"./km.js":782,"./kn":783,"./kn.js":783,"./ko":784,"./ko.js":784,"./ku":785,"./ku.js":785,"./ky":786,"./ky.js":786,"./lb":787,"./lb.js":787,"./lo":788,"./lo.js":788,"./lt":789,"./lt.js":789,"./lv":790,"./lv.js":790,"./me":791,"./me.js":791,"./mi":792,"./mi.js":792,"./mk":793,"./mk.js":793,"./ml":794,"./ml.js":794,"./mn":795,"./mn.js":795,"./mr":796,"./mr.js":796,"./ms":797,"./ms-my":798,"./ms-my.js":798,"./ms.js":797,"./mt":799,"./mt.js":799,"./my":800,"./my.js":800,"./nb":801,"./nb.js":801,"./ne":802,"./ne.js":802,"./nl":803,"./nl-be":804,"./nl-be.js":804,"./nl.js":803,"./nn":805,"./nn.js":805,"./oc-lnc":806,"./oc-lnc.js":806,"./pa-in":807,"./pa-in.js":807,"./pl":808,"./pl.js":808,"./pt":809,"./pt-br":810,"./pt-br.js":810,"./pt.js":809,"./ro":811,"./ro.js":811,"./ru":812,"./ru.js":812,"./sd":813,"./sd.js":813,"./se":814,"./se.js":814,"./si":815,"./si.js":815,"./sk":816,"./sk.js":816,"./sl":817,"./sl.js":817,"./sq":818,"./sq.js":818,"./sr":819,"./sr-cyrl":820,"./sr-cyrl.js":820,"./sr.js":819,"./ss":821,"./ss.js":821,"./sv":822,"./sv.js":822,"./sw":823,"./sw.js":823,"./ta":824,"./ta.js":824,"./te":825,"./te.js":825,"./tet":826,"./tet.js":826,"./tg":827,"./tg.js":827,"./th":828,"./th.js":828,"./tk":829,"./tk.js":829,"./tl-ph":830,"./tl-ph.js":830,"./tlh":831,"./tlh.js":831,"./tr":832,"./tr.js":832,"./tzl":833,"./tzl.js":833,"./tzm":834,"./tzm-latn":835,"./tzm-latn.js":835,"./tzm.js":834,"./ug-cn":836,"./ug-cn.js":836,"./uk":837,"./uk.js":837,"./ur":838,"./ur.js":838,"./uz":839,"./uz-latn":840,"./uz-latn.js":840,"./uz.js":839,"./vi":841,"./vi.js":841,"./x-pseudo":842,"./x-pseudo.js":842,"./yo":843,"./yo.js":843,"./zh-cn":844,"./zh-cn.js":844,"./zh-hk":845,"./zh-hk.js":845,"./zh-mo":846,"./zh-mo.js":846,"./zh-tw":847,"./zh-tw.js":847};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=889},893:function(t,e,r){var content=r(984);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("ef07b3c0",content,!0,{sourceMap:!1})},895:function(t,e,r){var content=r(986);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("1b7833da",content,!0,{sourceMap:!1})},897:function(t,e,r){var content=r(993);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("7d5b5ee0",content,!0,{sourceMap:!1})},904:function(t,e,r){"use strict";r.r(e);var n=r(894),o=r.n(n),c={name:"ProceduresLocals",methods:{iframeLoaded:function(){o()({log:!1},"#iframeProcedures")}}},l=r(62),d=r(103),m=r.n(d),f=r(1016),v=r(1017),component=Object(l.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-row",[e("v-col",{attrs:{align:"center"}},[e("p",[e("b",[this._v("Procedures By Region")])]),this._v(" "),e("iframe",{attrs:{id:"iframeProcedures",width:"100%",frameborder:"0",scrolling:"no",src:"https://prime-medicina.shinyapps.io/latam-cto-procedures-locals/"},on:{load:this.iframeLoaded}})])],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VCol:f.a,VRow:v.a})},981:function(t,e,r){t.exports=r.p+"img/latam-cto-registry_large.5058784.jpg"},982:function(t,e,r){t.exports=r.p+"img/CTO_phases.7b07db6.png"},983:function(t,e,r){"use strict";r(893)},984:function(t,e,r){(e=r(21)(!1)).push([t.i,'.SkeletonBox{display:inline-block;position:relative;overflow:hidden;vertical-align:middle;background-color:#dddbdd}.SkeletonBox:after{position:absolute;top:0;right:0;bottom:0;left:0;transform:translateX(-100%);background-image:linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.2) 20%,hsla(0,0%,100%,.5) 60%,hsla(0,0%,100%,0));-webkit-animation:shimmer 5s infinite;animation:shimmer 5s infinite;content:""}@-webkit-keyframes shimmer{to{transform:translateX(100%)}}@keyframes shimmer{to{transform:translateX(100%)}}',""]),t.exports=e},985:function(t,e,r){"use strict";r(895)},986:function(t,e,r){(e=r(21)(!1)).push([t.i,"p{font-size:x-large;line-height:40px;margin-top:20px;margin-left:20px;margin-right:20px}p.stats{font-size:xxx-large;color:#494949}p.text{text-align:center}.transition-swing{transition-property:all!important;transition-duration:.3s!important;transition-timing-function:cubic-bezier(.25,.8,.5,1)!important;transition-delay:0s!important}",""]),t.exports=e},987:function(t,e,r){t.exports=r.p+"img/latam-cto-registry-avatar.9af17da.png"},988:function(t,e,r){t.exports=r.p+"img/prime-logo.78ee9ad.png"},992:function(t,e,r){"use strict";r(897)},993:function(t,e,r){(e=r(21)(!1)).push([t.i,".wrap-text[data-v-60c71f42]{-webkit-line-clamp:unset!important;white-space:normal}",""]),t.exports=e},996:function(t,e,r){"use strict";r.r(e);r(66);var n=r(20),o=r(696),c=r(711),l={extends:c.c,mixins:[c.d.reactiveProp],props:["chartData","options"],mounted:function(){this.renderChart(this.chartData,this.options)}},d=(r(848),{name:"Procedures",components:{LineChart:l},data:function(){return{optionsLineChart:null,datacollectionLineChart:null,loading:!0}},methods:{fillData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.annualProcedures();case 2:r=e.sent,n=r.countYears,c=r.uniqueYears,t.datacollectionLineChart={labels:c,datasets:[{borderAlign:"center",label:"Amount of procedures realized per year",backgroundColor:"blue",fill:!1,borderColor:"green",pointRadius:7,pointHoverRadius:10,data:n}]},t.optionsLineChart={plugins:{datalabels:{color:"gray",anchor:"center",clamp:!0,align:"top",font:{size:20}}},responsive:!0,maintainAspectRatio:!1,legend:{display:!1},scales:{yAxes:[{ticks:{max:1e3,min:0}}]}},t.loading=!1;case 8:case"end":return e.stop()}}),e)})))()}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fillData();case 2:case"end":return e.stop()}}),e)})))()}}),m=r(62),f=r(103),v=r.n(f),h=r(1016),j=r(684),w=r(232),x=r(1017),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",[r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[t._v("Annual Procedures")])]),t._v(" "),t.loading?r("v-progress-circular",{attrs:{indeterminate:"",color:"blue",size:50}}):t._e(),t._v(" "),t.loading?t._e():r("line-chart",{attrs:{"chart-data":t.datacollectionLineChart,options:t.optionsLineChart}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VCol:h.a,VContainer:j.a,VProgressCircular:w.a,VRow:x.a})},997:function(t,e,r){"use strict";r.r(e);var n=r(894),o=r.n(n),c={name:"Centers",methods:{iframeLoaded:function(){o()({log:!1},"#iframeCenters")}}},l=r(62),d=r(103),m=r.n(d),f=r(1016),v=r(1017),component=Object(l.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-row",[e("v-col",{attrs:{align:"center"}},[e("p",[e("b",[this._v("LATAM CTO Centers")])]),this._v(" "),e("iframe",{attrs:{id:"iframeCenters",width:"100%",frameborder:"0",scrolling:"no",src:"https://prime-medicina.shinyapps.io/latam-cto-centers/"},on:{load:this.iframeLoaded}})])],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VCol:f.a,VRow:v.a})},998:function(t,e,r){"use strict";r.r(e);r(66);var n=r(20),o=r(696),c=r(704),l=(r(848),{name:"SuccessfulProcedures",components:{BarChart:c.a},data:function(){return{optionsBarChart:null,datacollectionBarChart:null,loading:!0}},methods:{fillData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.successfulProceduresPerYear();case 2:r=e.sent,n=r.uniqueYears,c=r.perc,t.datacollectionBarChart={labels:n,datasets:[{borderAlign:"center",label:"% successful procedures per year",backgroundColor:"#019edf",data:c}]},t.optionsBarChart={responsive:!0,maintainAspectRatio:!1,legend:{display:!1},scales:{yAxes:[{ticks:{max:100,min:50}}]}},t.loading=!1;case 8:case"end":return e.stop()}}),e)})))()}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fillData();case 2:case"end":return e.stop()}}),e)})))()}}),d=r(62),m=r(103),f=r.n(m),v=r(1016),h=r(684),j=r(232),w=r(1017),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",[r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[t._v("Successful Procedures Per Year")])]),t._v(" "),t.loading?r("v-progress-circular",{attrs:{indeterminate:"",color:"blue",size:50}}):t._e(),t._v(" "),t.loading?t._e():r("bar-chart",{attrs:{"chart-data":t.datacollectionBarChart,options:t.optionsBarChart}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VCol:v.a,VContainer:h.a,VProgressCircular:j.a,VRow:w.a})},999:function(t,e,r){"use strict";r.r(e);r(66);var n=r(20),o=r(696),c=r(706),l=(r(709),r(848),{name:"SuccessfulStrategies",components:{DoughnutChart:c.a},data:function(){return{optionsPieChart:null,datacollectionPieChart:null,loading:!0}},methods:{fillData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.successfulStrategies();case 2:r=e.sent,n=r.valuesStrategies,c=r.countStrategies,t.datacollectionPieChart={labels:n,datasets:[{borderAlign:"center",label:"Success strategies",data:c}]},t.optionsPieChart={responsive:!0,maintainAspectRatio:!1,plugins:{colorschemes:{scheme:"brewer.PastelTwo8"},datalabels:{formatter:function(t){return t+"%"},font:{size:20}}}},t.loading=!1;case 8:case"end":return e.stop()}}),e)})))()}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fillData();case 2:case"end":return e.stop()}}),e)})))()}}),d=r(62),m=r(103),f=r.n(m),v=r(1016),h=r(684),j=r(232),w=r(1017),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",[r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[t._v("Success Strategies")])]),t._v(" "),t.loading?r("v-progress-circular",{attrs:{indeterminate:"",color:"blue",size:50}}):t._e(),t._v(" "),t.loading?t._e():r("doughnut-chart",{attrs:{"chart-data":t.datacollectionPieChart,options:t.optionsPieChart}}),r("br")],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VCol:v.a,VContainer:h.a,VProgressCircular:j.a,VRow:w.a})}}]);