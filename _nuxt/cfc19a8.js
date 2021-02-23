(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1e3:function(t,e,r){"use strict";r.r(e);r(60);var n=r(19),o=r(700),c=r(715),l={extends:c.c,mixins:[c.d.reactiveProp],props:["chartData","options"],mounted:function(){this.renderChart(this.chartData,this.options)}},d=(r(852),{name:"Procedures",components:{LineChart:l},data:function(){return{optionsLineChart:null,datacollectionLineChart:null,loading:!0}},methods:{fillData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.annualProcedures();case 2:r=e.sent,n=r.countYears,c=r.uniqueYears,t.datacollectionLineChart={labels:c,datasets:[{borderAlign:"center",label:"Amount of procedures realized per year",backgroundColor:"blue",fill:!1,borderColor:"green",pointRadius:7,pointHoverRadius:10,data:n}]},t.optionsLineChart={plugins:{datalabels:{color:"gray",anchor:"center",clamp:!0,align:"top",font:{size:20}}},responsive:!0,maintainAspectRatio:!1,legend:{display:!1},scales:{yAxes:[{ticks:{max:1e3,min:0}}]}},t.loading=!1;case 8:case"end":return e.stop()}}),e)})))()}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fillData();case 2:case"end":return e.stop()}}),e)})))()}}),m=r(63),f=r(103),v=r.n(f),h=r(1020),j=r(688),w=r(232),x=r(1021),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",[r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[t._v("Annual Procedures")])]),t._v(" "),t.loading?r("v-progress-circular",{attrs:{indeterminate:"",color:"blue",size:50}}):t._e(),t._v(" "),t.loading?t._e():r("line-chart",{attrs:{"chart-data":t.datacollectionLineChart,options:t.optionsLineChart}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VCol:h.a,VContainer:j.a,VProgressCircular:w.a,VRow:x.a})},1001:function(t,e,r){"use strict";r.r(e);var n=r(898),o=r.n(n),c={name:"Centers",methods:{iframeLoaded:function(){o()({log:!1},"#iframeCenters")}}},l=r(63),d=r(103),m=r.n(d),f=r(1020),v=r(1021),component=Object(l.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-row",[e("v-col",{attrs:{align:"center"}},[e("p",[e("b",[this._v("LATAM CTO Centers")])]),this._v(" "),e("iframe",{attrs:{id:"iframeCenters",width:"100%",frameborder:"0",scrolling:"no",src:"https://prime-medicina.shinyapps.io/latam-cto-centers/"},on:{load:this.iframeLoaded}})])],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VCol:f.a,VRow:v.a})},1002:function(t,e,r){"use strict";r.r(e);r(60);var n=r(19),o=r(700),c=r(708),l=(r(852),{name:"SuccessfulProcedures",components:{BarChart:c.a},data:function(){return{optionsBarChart:null,datacollectionBarChart:null,loading:!0}},methods:{fillData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.successfulProceduresPerYear();case 2:r=e.sent,n=r.uniqueYears,c=r.perc,t.datacollectionBarChart={labels:n,datasets:[{borderAlign:"center",label:"% successful procedures per year",backgroundColor:"#019edf",data:c}]},t.optionsBarChart={responsive:!0,maintainAspectRatio:!1,legend:{display:!1},scales:{yAxes:[{ticks:{max:100,min:50}}]}},t.loading=!1;case 8:case"end":return e.stop()}}),e)})))()}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fillData();case 2:case"end":return e.stop()}}),e)})))()}}),d=r(63),m=r(103),f=r.n(m),v=r(1020),h=r(688),j=r(232),w=r(1021),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",[r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[t._v("Successful Procedures Per Year")])]),t._v(" "),t.loading?r("v-progress-circular",{attrs:{indeterminate:"",color:"blue",size:50}}):t._e(),t._v(" "),t.loading?t._e():r("bar-chart",{attrs:{"chart-data":t.datacollectionBarChart,options:t.optionsBarChart}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VCol:v.a,VContainer:h.a,VProgressCircular:j.a,VRow:w.a})},1003:function(t,e,r){"use strict";r.r(e);r(60);var n=r(19),o=r(700),c=r(710),l=(r(713),r(852),{name:"SuccessfulStrategies",components:{DoughnutChart:c.a},data:function(){return{optionsPieChart:null,datacollectionPieChart:null,loading:!0}},methods:{fillData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.successfulStrategies();case 2:r=e.sent,n=r.valuesStrategies,c=r.countStrategies,t.datacollectionPieChart={labels:n,datasets:[{borderAlign:"center",label:"Success strategies",data:c}]},t.optionsPieChart={responsive:!0,maintainAspectRatio:!1,plugins:{colorschemes:{scheme:"brewer.PastelTwo8"},datalabels:{formatter:function(t){return t+"%"},font:{size:20}}}},t.loading=!1;case 8:case"end":return e.stop()}}),e)})))()}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fillData();case 2:case"end":return e.stop()}}),e)})))()}}),d=r(63),m=r(103),f=r.n(m),v=r(1020),h=r(688),j=r(232),w=r(1021),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",[r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[t._v("Success Strategies")])]),t._v(" "),t.loading?r("v-progress-circular",{attrs:{indeterminate:"",color:"blue",size:50}}):t._e(),t._v(" "),t.loading?t._e():r("doughnut-chart",{attrs:{"chart-data":t.datacollectionPieChart,options:t.optionsPieChart}}),r("br")],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VCol:v.a,VContainer:h.a,VProgressCircular:j.a,VRow:w.a})},1004:function(t,e,r){"use strict";r.r(e);var n=r(993),o={name:"ContactUsDialog",data:function(){return{contactUsDialog:!1,items:[{header:"Project Staff"},{avatar:"",title:"LATAM CTO Registry Principal Investigator",subtitle:"Dr. Alexandre Schaan de Quadros: <a href='mailto:consult.asq@gmail.com'>consult.asq@gmail.com</a>",email:"consult.asq@gmail.com"},{divider:!0,inset:!0},{avatar:"https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y",title:"Operational Coordinator",subtitle:"Dr. Pedro Piccaro de Oliveira: <a href='mailto:pedropiccaro@gmail.com'>pedropiccaro@gmail.com</a>",email:"pedropiccaro@gmail.com"},{divider:!0,inset:!0},{avatar:"https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y",title:"Database Web Interface Developer",subtitle:"Franco Bruno Corteletti: <a href='mailto:francobrunoc@gmail.com'>francobrunoc@gmail.com</a>",email:"francobrunoc@gmail.com"}]}},mounted:function(){this.gravatar()},methods:{gravatar:function(){this.items.forEach((function(t){t.avatar&&(t.avatar="https://www.gravatar.com/avatar/"+n(t.email))}))},close:function(){this.contactUsDialog=!1}}},c=(r(996),r(63)),l=r(103),d=r.n(l),m=r(237),f=r(250),v=r(712),h=r(698),j=r(1022),w=r(861),x=r(233),_=r(234),C=r(140),y=r(236),k=r(92),R=r(1021),P=r(691),O=r(864),S=r(692),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{"max-width":"600"},scopedSlots:t._u([{key:"activator",fn:function(e){var dialog=e.on;return[n("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({attrs:{color:"blue",fab:"",dark:"",top:"",fixed:"",right:""},on:{click:function(e){t.contactUsDialog=!0}}},Object.assign({},r,dialog)),[n("v-icon",[t._v("mdi-email")])],1)]}}],null,!0)},[t._v(" "),n("span",[t._v("Contact Us")])])]}}]),model:{value:t.contactUsDialog,callback:function(e){t.contactUsDialog=e},expression:"contactUsDialog"}},[t._v(" "),n("v-card",[n("v-card-title",{staticClass:"primary white--text"},[t._v("Contact Us\n      "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.close()}}},[n("v-icon",{staticClass:"white--text"},[t._v("mdi-close")])],1)],1),t._v(" "),n("v-card-text",[n("v-list",{attrs:{"three-line":""}},[t._l(t.items,(function(e,o){return[e.header?n("v-subheader",{key:e.header,domProps:{textContent:t._s(e.header)}}):e.divider?n("v-divider",{key:o,attrs:{inset:e.inset}}):n("v-list-item",{key:e.title},[n("v-list-item-avatar",[e.avatar?n("img",{attrs:{src:e.avatar}}):n("img",{attrs:{src:r(991)}})]),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{staticClass:"wrap-text",domProps:{innerHTML:t._s(e.title)}}),t._v(" "),n("v-list-item-subtitle",{staticClass:"wrap-text",domProps:{innerHTML:t._s(e.subtitle)}})],1)],1)]}))],2),t._v(" "),n("v-row",[n("v-spacer"),t._v(" "),n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({staticClass:"mb-4 mr-8",attrs:{fab:"",large:""}},o),[n("v-avatar",{attrs:{width:"150",height:"100"}},[n("img",{attrs:{src:r(992),alt:"Prime Medicina"}})])],1)]}}])},[t._v(" "),n("span",[t._v("Powered by")])])],1)],1)],1)],1)}),[],!1,null,"60c71f42",null);e.default=component.exports;d()(component,{VAvatar:m.a,VBtn:f.a,VCard:v.a,VCardText:h.a,VCardTitle:h.b,VDialog:j.a,VDivider:w.a,VIcon:x.a,VList:_.a,VListItem:C.a,VListItemAvatar:y.a,VListItemContent:k.a,VListItemSubtitle:k.b,VListItemTitle:k.c,VRow:R.a,VSpacer:P.a,VSubheader:O.a,VTooltip:S.a})},1031:function(t,e,r){"use strict";r.r(e);r(60);var n=r(19),o=r(700),c=r(705),l=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(path){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",c.a.GET(path));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d={latamCtoCenters:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l("centers/latamCtoCenters");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()}};r(7);function m(t){var e,r=t.componentFactory,n=t.loading,o=t.loadingData;return function(){return{component:new Promise((function(t){e=t})),loading:{mounted:function(){var t=this;if("IntersectionObserver"in window){var n=new IntersectionObserver((function(o){o[0].intersectionRatio<=0||(n.unobserve(t.$el),r().then(e))}));n.observe(this.$el)}else r().then(e)},render:function(t){return t(n,o)}}}}}r(25);var f={name:"SkeletonBox",props:{maxWidth:{default:100,type:Number},minWidth:{default:80,type:Number},height:{default:"1em",type:String},width:{default:null,type:String}},computed:{computedWidth:function(){return this.width||"".concat(Math.floor(Math.random()*(this.maxWidth-this.minWidth)+this.minWidth),"%")}}},v=(r(987),r(63)),h=Object(v.a)(f,(function(){var t=this.$createElement;return(this._self._c||t)("span",{staticClass:"SkeletonBox",style:{height:this.height,width:this.computedWidth}})}),[],!1,null,null,null).exports,j=r(148),w={name:"index",layout:"public",components:{ProceduresLocals:r(908).default,Centers:m({componentFactory:function(){return Promise.resolve().then(r.bind(null,1001))},loading:h}),SuccessfulProcedures:m({componentFactory:function(){return Promise.resolve().then(r.bind(null,1002))},loading:h}),SuccessStrategies:m({componentFactory:function(){return Promise.resolve().then(r.bind(null,1003))},loading:h}),AnnualProcedures:m({componentFactory:function(){return Promise.resolve().then(r.bind(null,1e3))},loading:h})},data:function(){return{fab:!1,projectNote:null,countries:null,activeCenters:null,centersPi:null,proceduresEnrolled:null,loadingProjectNote:!0,loadingCenters:!0,loadingProcedures:!0,logged:!1}},methods:{dashboard:function(){this.$router.push("/dashboard")},login:function(){this.$router.push("/auth")},onScroll:function(t){if("undefined"!=typeof window){var e=window.pageYOffset||t.target.scrollTop||0;this.fab=e>20}},toTop:function(){this.$vuetify.goTo(0)}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c,l,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.currentAuthenticatedUser();case 3:t.logged=!0,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),t.logged=!1;case 9:return e.next=11,o.a.projectInfo();case 11:return r=e.sent,n=r.project_notes,t.projectNote=n,t.loadingProjectNote=!1,e.next=17,o.a.countAll();case 17:return c=e.sent,l=c.proceduresEnrolled,t.proceduresEnrolled=l,t.loadingProcedures=!1,e.next=23,d.latamCtoCenters();case 23:m=e.sent,t.centersPi=m.coordinatePoints.map((function(t){return{centerName:t.centerName,pi:t.pi}})).sort((function(a,b){return a.centerName>b.centerName?1:b.centerName>a.centerName?-1:0})),t.countries=m.countries.length,t.activeCenters=m.centers.length,t.loadingCenters=!1;case 28:case"end":return e.stop()}}),e,null,[[0,6]])})))()}},x=(r(989),r(103)),_=r.n(x),C=r(250),y=r(712),k=r(698),R=r(1020),P=r(861),O=r(233),S=r(1024),V=r(140),D=r(92),z=r(232),L=r(1021),T=r(692),A=r(998),E=r.n(A),N=r(354),I=Object(v.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{column:"","justify-center":"","align-center":""}},[n("v-card",{staticClass:"mx-auto"},[n("div",{attrs:{align:"center"}},[n("img",{attrs:{width:"65%",src:r(985)}})]),t._v(" "),n("img",{staticClass:"white--text align-end",attrs:{width:"100%",src:r(986)}}),t._v(" "),n("v-card-text",[n("v-row",[n("v-col",{attrs:{align:"center"}},[t.loadingProjectNote?n("v-progress-circular",{attrs:{indeterminate:"",color:"grey"}}):t._e(),t._v(" "),t.loadingProjectNote?t._e():n("p",{staticClass:"text"},[t._v("\n              "+t._s(t.projectNote)+"\n            ")])],1)],1),t._v(" "),n("v-row",[n("v-col",{attrs:{align:"center"}},[t.loadingProcedures?n("v-progress-circular",{attrs:{indeterminate:"",color:"grey"}}):t._e(),t._v(" "),n("p",{staticClass:"stats"},[t._v(t._s(this.proceduresEnrolled))]),t._v(" "),n("p",{staticClass:"mt-10"},[t._v("PROCEDURES")]),t._v(" "),n("p",{staticClass:"mb-10"},[t._v("FROM")]),t._v(" "),t.loadingCenters?n("v-progress-circular",{attrs:{indeterminate:"",color:"grey"}}):t._e(),t._v(" "),n("p",{staticClass:"stats"},[t._v(t._s(this.activeCenters))]),t._v(" "),n("p",{staticClass:"mt-10"},[t._v("CTO CENTERS")]),t._v(" "),n("p",{staticClass:"mb-10"},[t._v("IN")]),t._v(" "),t.loadingCenters?n("v-progress-circular",{attrs:{indeterminate:"",color:"grey"}}):t._e(),t._v(" "),n("p",{staticClass:"stats"},[t._v(t._s(this.countries))]),t._v(" "),n("p",{staticClass:"mt-10"},[t._v("COUNTRIES")])],1)],1),t._v(" "),n("div",{staticClass:"mb-10 mt-10"},[n("Centers",{attrs:{id:"geographicDistribution"}})],1),t._v(" "),n("div",{staticClass:"mb-15"},[n("SuccessfulProcedures",{attrs:{id:"proceduralData"}}),t._v(" "),n("SuccessStrategies"),t._v(" "),n("AnnualProcedures"),t._v(" "),n("ProceduresLocals")],1),t._v(" "),n("v-row",[n("v-col",{attrs:{align:"center"}},[n("v-card",{attrs:{"max-width":"800",loading:t.loadingCenters}},[n("v-card-text",t._l(t.centersPi,(function(e,r){return n("v-list-item",{key:r,attrs:{"two-line":""}},[n("v-list-item-content",[0===r?n("v-list-item-title",{staticClass:"mb-4"},[n("span",[t._v("LATAM CTO Center")])]):t._e(),t._v(" "),0===r?n("v-list-item-subtitle",[n("span",[t._v("\n                        Principal Investigator\n                      ")]),t._v(" "),n("v-divider",{staticClass:"mt-7 mb-4"})],1):t._e(),t._v(" "),r>0?n("v-list-item-title",{staticClass:"mb-4"},[n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(r){var o=r.on;return[n("v-span",t._g({},o),[t._v(t._s(e.centerName))])]}}],null,!0)},[t._v(" "),n("span",[t._v(" "+t._s(e.centerName)+" ")])])],1):t._e(),t._v(" "),r>0?n("v-list-item-subtitle",{staticClass:"mb-4"},[t._v("\n                      "+t._s(e.pi)+"\n                      "),r<t.centersPi.length-1?n("v-divider",{key:r,staticClass:"mt-10"}):t._e()],1):t._e()],1)],1)})),1)],1)],1)],1)],1)],1),t._v(" "),n("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[t.logged?n("v-btn",t._g({attrs:{color:"blue",fab:"",dark:"",top:"",left:"",fixed:""},on:{click:t.dashboard}},r),[n("v-icon",[t._v("mdi-plus")])],1):n("v-btn",t._g({attrs:{color:"blue",fab:"",dark:"",top:"",left:"",fixed:""},on:{click:t.login}},r),[n("v-icon",[t._v("mdi-account")])],1)]}}])},[t._v(" "),n("span",[t._v("Logged Area")])]),t._v(" "),n("ContactUsDialog"),t._v(" "),n("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"},{name:"show",rawName:"v-show",value:t.fab,expression:"fab"}],staticClass:"transition-swing",attrs:{color:"blue",fab:"",small:"",dark:"",bottom:"",right:"",fixed:""},on:{click:function(e){return t.toTop()}}},r),[n("v-icon",{attrs:{small:""}},[t._v("mdi-arrow-up")])],1)]}}])},[t._v(" "),n("span",[t._v("Scroll to top")])])],1)}),[],!1,null,null,null);e.default=I.exports;_()(I,{Centers:r(1001).default,SuccessfulProcedures:r(1002).default,SuccessStrategies:r(1003).default,AnnualProcedures:r(1e3).default,ProceduresLocals:r(908).default,ContactUsDialog:r(1004).default}),_()(I,{VBtn:C.a,VCard:y.a,VCardText:k.a,VCol:R.a,VDivider:P.a,VIcon:O.a,VLayout:S.a,VListItem:V.a,VListItemContent:D.a,VListItemSubtitle:D.b,VListItemTitle:D.c,VProgressCircular:z.a,VRow:L.a,VTooltip:T.a}),E()(I,{Scroll:N.b})},700:function(t,e,r){"use strict";r(60);var n=r(19),o=r(705),c=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(path){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.a.GET(path));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l={projectInfo:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c("registry/project/info/notes");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},countAll:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c("registry/procedures/count");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},successfulStrategies:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c("registry/procedures/successfulStrategies");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},successfulProceduresPerYear:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c("registry/procedures/successfulProceduresPerYear");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},annualProcedures:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c("registry/procedures/annualProcedures");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},clinicalDataQuality:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c("registry/procedures/clinicalDataQuality");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},outcomesDataQuality:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c("registry/procedures/outcomesDataQuality");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},proceduralDataQuality:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c("registry/procedures/proceduralDataQuality");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},angiographicDataQuality:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c("registry/procedures/angiographicDataQuality");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},successDataQuality:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c("registry/procedures/successDataQuality");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},followUpDataQuality:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c("registry/procedures/followUpDataQuality");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},clinicalCharacteristics:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c("registry/procedures/clinicalCharacteristics");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},angiographicCharacteristics:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c("registry/procedures/angiographicCharacteristics");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},proceduralCharacteristics:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c("registry/procedures/proceduralCharacteristics");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},anginaOutcome:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c("registry/procedures/anginaOutcome");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},proceduralComplications:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c("registry/procedures/proceduralComplications");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},inHospitalOutcomes:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c("registry/procedures/inHospitalOutcomes");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},topEnrollers:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c("registry/procedures/topEnrollers");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},casesPerMonth:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c("registry/procedures/casesPerMonth");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()}};e.a=l},705:function(t,e,r){"use strict";(function(t){r(27),r(28),r(7),r(60);var n=r(19),o=r(854),c=r.n(o),l=r(711),d=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(path){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(l.a)(path));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(path,r){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],o={headers:{Authorization:r}},e.next=4,c.a.get("https://7cb5vfypm9.execute-api.us-west-2.amazonaws.com/dev/".concat(path||""),o).then((function(e){(n=e.data).body&&(n=JSON.parse(t.from(n.body).toString("utf-8")))})).catch((function(t){return console.error(t)}));case 4:return e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}();e.a={GET:d,get:m}}).call(this,r(9).Buffer)},708:function(t,e,r){"use strict";var n=r(715);e.a={extends:n.a,mixins:[n.d.reactiveProp],props:["chartData","options"],mounted:function(){this.renderChart(this.chartData,this.options)}}},710:function(t,e,r){"use strict";var n=r(715);e.a={extends:n.b,mixins:[n.d.reactiveProp],props:["chartData","options"],mounted:function(){this.renderChart(this.chartData,this.options)}}},711:function(t,e,r){"use strict";r.d(e,"a",(function(){return d}));r(60);var n,o=r(19),c=r(148),l=r(705),d=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(path){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.currentAuthenticatedUser().then((function(u){return n=u.signInUserSession.idToken.jwtToken})).catch((function(t){return console.log(t)}));case 2:return t.next=4,l.a.get(path,n);case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},893:function(t,e,r){var map={"./af":717,"./af.js":717,"./ar":718,"./ar-dz":719,"./ar-dz.js":719,"./ar-kw":720,"./ar-kw.js":720,"./ar-ly":721,"./ar-ly.js":721,"./ar-ma":722,"./ar-ma.js":722,"./ar-sa":723,"./ar-sa.js":723,"./ar-tn":724,"./ar-tn.js":724,"./ar.js":718,"./az":725,"./az.js":725,"./be":726,"./be.js":726,"./bg":727,"./bg.js":727,"./bm":728,"./bm.js":728,"./bn":729,"./bn-bd":730,"./bn-bd.js":730,"./bn.js":729,"./bo":731,"./bo.js":731,"./br":732,"./br.js":732,"./bs":733,"./bs.js":733,"./ca":734,"./ca.js":734,"./cs":735,"./cs.js":735,"./cv":736,"./cv.js":736,"./cy":737,"./cy.js":737,"./da":738,"./da.js":738,"./de":739,"./de-at":740,"./de-at.js":740,"./de-ch":741,"./de-ch.js":741,"./de.js":739,"./dv":742,"./dv.js":742,"./el":743,"./el.js":743,"./en-au":744,"./en-au.js":744,"./en-ca":745,"./en-ca.js":745,"./en-gb":746,"./en-gb.js":746,"./en-ie":747,"./en-ie.js":747,"./en-il":748,"./en-il.js":748,"./en-in":749,"./en-in.js":749,"./en-nz":750,"./en-nz.js":750,"./en-sg":751,"./en-sg.js":751,"./eo":752,"./eo.js":752,"./es":753,"./es-do":754,"./es-do.js":754,"./es-mx":755,"./es-mx.js":755,"./es-us":756,"./es-us.js":756,"./es.js":753,"./et":757,"./et.js":757,"./eu":758,"./eu.js":758,"./fa":759,"./fa.js":759,"./fi":760,"./fi.js":760,"./fil":761,"./fil.js":761,"./fo":762,"./fo.js":762,"./fr":763,"./fr-ca":764,"./fr-ca.js":764,"./fr-ch":765,"./fr-ch.js":765,"./fr.js":763,"./fy":766,"./fy.js":766,"./ga":767,"./ga.js":767,"./gd":768,"./gd.js":768,"./gl":769,"./gl.js":769,"./gom-deva":770,"./gom-deva.js":770,"./gom-latn":771,"./gom-latn.js":771,"./gu":772,"./gu.js":772,"./he":773,"./he.js":773,"./hi":774,"./hi.js":774,"./hr":775,"./hr.js":775,"./hu":776,"./hu.js":776,"./hy-am":777,"./hy-am.js":777,"./id":778,"./id.js":778,"./is":779,"./is.js":779,"./it":780,"./it-ch":781,"./it-ch.js":781,"./it.js":780,"./ja":782,"./ja.js":782,"./jv":783,"./jv.js":783,"./ka":784,"./ka.js":784,"./kk":785,"./kk.js":785,"./km":786,"./km.js":786,"./kn":787,"./kn.js":787,"./ko":788,"./ko.js":788,"./ku":789,"./ku.js":789,"./ky":790,"./ky.js":790,"./lb":791,"./lb.js":791,"./lo":792,"./lo.js":792,"./lt":793,"./lt.js":793,"./lv":794,"./lv.js":794,"./me":795,"./me.js":795,"./mi":796,"./mi.js":796,"./mk":797,"./mk.js":797,"./ml":798,"./ml.js":798,"./mn":799,"./mn.js":799,"./mr":800,"./mr.js":800,"./ms":801,"./ms-my":802,"./ms-my.js":802,"./ms.js":801,"./mt":803,"./mt.js":803,"./my":804,"./my.js":804,"./nb":805,"./nb.js":805,"./ne":806,"./ne.js":806,"./nl":807,"./nl-be":808,"./nl-be.js":808,"./nl.js":807,"./nn":809,"./nn.js":809,"./oc-lnc":810,"./oc-lnc.js":810,"./pa-in":811,"./pa-in.js":811,"./pl":812,"./pl.js":812,"./pt":813,"./pt-br":814,"./pt-br.js":814,"./pt.js":813,"./ro":815,"./ro.js":815,"./ru":816,"./ru.js":816,"./sd":817,"./sd.js":817,"./se":818,"./se.js":818,"./si":819,"./si.js":819,"./sk":820,"./sk.js":820,"./sl":821,"./sl.js":821,"./sq":822,"./sq.js":822,"./sr":823,"./sr-cyrl":824,"./sr-cyrl.js":824,"./sr.js":823,"./ss":825,"./ss.js":825,"./sv":826,"./sv.js":826,"./sw":827,"./sw.js":827,"./ta":828,"./ta.js":828,"./te":829,"./te.js":829,"./tet":830,"./tet.js":830,"./tg":831,"./tg.js":831,"./th":832,"./th.js":832,"./tk":833,"./tk.js":833,"./tl-ph":834,"./tl-ph.js":834,"./tlh":835,"./tlh.js":835,"./tr":836,"./tr.js":836,"./tzl":837,"./tzl.js":837,"./tzm":838,"./tzm-latn":839,"./tzm-latn.js":839,"./tzm.js":838,"./ug-cn":840,"./ug-cn.js":840,"./uk":841,"./uk.js":841,"./ur":842,"./ur.js":842,"./uz":843,"./uz-latn":844,"./uz-latn.js":844,"./uz.js":843,"./vi":845,"./vi.js":845,"./x-pseudo":846,"./x-pseudo.js":846,"./yo":847,"./yo.js":847,"./zh-cn":848,"./zh-cn.js":848,"./zh-hk":849,"./zh-hk.js":849,"./zh-mo":850,"./zh-mo.js":850,"./zh-tw":851,"./zh-tw.js":851};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=893},897:function(t,e,r){var content=r(988);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("ef07b3c0",content,!0,{sourceMap:!1})},899:function(t,e,r){var content=r(990);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("1b7833da",content,!0,{sourceMap:!1})},901:function(t,e,r){var content=r(997);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("7d5b5ee0",content,!0,{sourceMap:!1})},908:function(t,e,r){"use strict";r.r(e);var n=r(898),o=r.n(n),c={name:"ProceduresLocals",methods:{iframeLoaded:function(){o()({log:!1},"#iframeProcedures")}}},l=r(63),d=r(103),m=r.n(d),f=r(1020),v=r(1021),component=Object(l.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-row",[e("v-col",{attrs:{align:"center"}},[e("p",[e("b",[this._v("Procedures By Region")])]),this._v(" "),e("iframe",{attrs:{id:"iframeProcedures",width:"100%",frameborder:"0",scrolling:"no",src:"https://prime-medicina.shinyapps.io/latam-cto-procedures-locals/"},on:{load:this.iframeLoaded}})])],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VCol:f.a,VRow:v.a})},985:function(t,e,r){t.exports=r.p+"img/latam-cto-registry_large.5058784.jpg"},986:function(t,e,r){t.exports=r.p+"img/CTO_phases.65df4de.jpg"},987:function(t,e,r){"use strict";r(897)},988:function(t,e,r){(e=r(21)(!1)).push([t.i,'.SkeletonBox{display:inline-block;position:relative;overflow:hidden;vertical-align:middle;background-color:#dddbdd}.SkeletonBox:after{position:absolute;top:0;right:0;bottom:0;left:0;transform:translateX(-100%);background-image:linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.2) 20%,hsla(0,0%,100%,.5) 60%,hsla(0,0%,100%,0));-webkit-animation:shimmer 5s infinite;animation:shimmer 5s infinite;content:""}@-webkit-keyframes shimmer{to{transform:translateX(100%)}}@keyframes shimmer{to{transform:translateX(100%)}}',""]),t.exports=e},989:function(t,e,r){"use strict";r(899)},990:function(t,e,r){(e=r(21)(!1)).push([t.i,"p{font-size:x-large;line-height:40px;margin-top:20px;margin-left:20px;margin-right:20px}p.stats{font-size:xxx-large;color:#494949}p.text{text-align:center}.transition-swing{transition-property:all!important;transition-duration:.3s!important;transition-timing-function:cubic-bezier(.25,.8,.5,1)!important;transition-delay:0s!important}",""]),t.exports=e},991:function(t,e,r){t.exports=r.p+"img/latam-cto-registry-avatar.9af17da.png"},992:function(t,e,r){t.exports=r.p+"img/prime-logo.78ee9ad.png"},996:function(t,e,r){"use strict";r(901)},997:function(t,e,r){(e=r(21)(!1)).push([t.i,".wrap-text[data-v-60c71f42]{-webkit-line-clamp:unset!important;white-space:normal}",""]),t.exports=e}}]);