(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{510:function(e,t,r){"use strict";(function(e){r(29),r(30),r(7),r(66);var n=r(20),o=r(657),c=r.n(o),l=r(514),d=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(path){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(l.a)(path));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(path,r){var n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=[],o={headers:{Authorization:r}},t.next=4,c.a.get("https://7cb5vfypm9.execute-api.us-west-2.amazonaws.com/dev/".concat(path||""),o).then((function(t){(n=t.data).body&&(n=JSON.parse(e.from(n.body).toString("utf-8")))})).catch((function(e){return console.error(e)}));case 4:return t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}();t.a={GET:d,get:f}}).call(this,r(14).Buffer)},512:function(e,t,r){"use strict";r(66);var n=r(20),o=r(510),c=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(path){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o.a.GET(path));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l={countAll:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/count");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},successfulStrategies:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/successfulStrategies");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},successfulProceduresPerYear:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/successfulProceduresPerYear");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},annualProcedures:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/annualProcedures");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},clinicalCharacteristics:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/clinicalCharacteristics");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},angiographicCharacteristics:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/angiographicCharacteristics");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},proceduralCharacteristics:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/proceduralCharacteristics");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()}};t.a=l},514:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));r(66);var n,o=r(20),c=r(129),l=r(510),d=function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(path){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.currentAuthenticatedUser().then((function(u){return n=u.signInUserSession.idToken.jwtToken})).catch((function(e){return console.log(e)}));case 2:return e.next=4,l.a.get(path,n);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},667:function(e,t,r){"use strict";var n=r(655);t.a={extends:n.b,mixins:[n.d.reactiveProp],props:["chartData","options"],mounted:function(){this.renderChart(this.chartData,this.options)}}},670:function(e,t,r){var content=r(756);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(18).default)("3f005800",content,!0,{sourceMap:!1})},671:function(e,t,r){var content=r(758);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(18).default)("61f7e78c",content,!0,{sourceMap:!1})},684:function(e,t,r){var map={"./af":519,"./af.js":519,"./ar":520,"./ar-dz":521,"./ar-dz.js":521,"./ar-kw":522,"./ar-kw.js":522,"./ar-ly":523,"./ar-ly.js":523,"./ar-ma":524,"./ar-ma.js":524,"./ar-sa":525,"./ar-sa.js":525,"./ar-tn":526,"./ar-tn.js":526,"./ar.js":520,"./az":527,"./az.js":527,"./be":528,"./be.js":528,"./bg":529,"./bg.js":529,"./bm":530,"./bm.js":530,"./bn":531,"./bn-bd":532,"./bn-bd.js":532,"./bn.js":531,"./bo":533,"./bo.js":533,"./br":534,"./br.js":534,"./bs":535,"./bs.js":535,"./ca":536,"./ca.js":536,"./cs":537,"./cs.js":537,"./cv":538,"./cv.js":538,"./cy":539,"./cy.js":539,"./da":540,"./da.js":540,"./de":541,"./de-at":542,"./de-at.js":542,"./de-ch":543,"./de-ch.js":543,"./de.js":541,"./dv":544,"./dv.js":544,"./el":545,"./el.js":545,"./en-au":546,"./en-au.js":546,"./en-ca":547,"./en-ca.js":547,"./en-gb":548,"./en-gb.js":548,"./en-ie":549,"./en-ie.js":549,"./en-il":550,"./en-il.js":550,"./en-in":551,"./en-in.js":551,"./en-nz":552,"./en-nz.js":552,"./en-sg":553,"./en-sg.js":553,"./eo":554,"./eo.js":554,"./es":555,"./es-do":556,"./es-do.js":556,"./es-mx":557,"./es-mx.js":557,"./es-us":558,"./es-us.js":558,"./es.js":555,"./et":559,"./et.js":559,"./eu":560,"./eu.js":560,"./fa":561,"./fa.js":561,"./fi":562,"./fi.js":562,"./fil":563,"./fil.js":563,"./fo":564,"./fo.js":564,"./fr":565,"./fr-ca":566,"./fr-ca.js":566,"./fr-ch":567,"./fr-ch.js":567,"./fr.js":565,"./fy":568,"./fy.js":568,"./ga":569,"./ga.js":569,"./gd":570,"./gd.js":570,"./gl":571,"./gl.js":571,"./gom-deva":572,"./gom-deva.js":572,"./gom-latn":573,"./gom-latn.js":573,"./gu":574,"./gu.js":574,"./he":575,"./he.js":575,"./hi":576,"./hi.js":576,"./hr":577,"./hr.js":577,"./hu":578,"./hu.js":578,"./hy-am":579,"./hy-am.js":579,"./id":580,"./id.js":580,"./is":581,"./is.js":581,"./it":582,"./it-ch":583,"./it-ch.js":583,"./it.js":582,"./ja":584,"./ja.js":584,"./jv":585,"./jv.js":585,"./ka":586,"./ka.js":586,"./kk":587,"./kk.js":587,"./km":588,"./km.js":588,"./kn":589,"./kn.js":589,"./ko":590,"./ko.js":590,"./ku":591,"./ku.js":591,"./ky":592,"./ky.js":592,"./lb":593,"./lb.js":593,"./lo":594,"./lo.js":594,"./lt":595,"./lt.js":595,"./lv":596,"./lv.js":596,"./me":597,"./me.js":597,"./mi":598,"./mi.js":598,"./mk":599,"./mk.js":599,"./ml":600,"./ml.js":600,"./mn":601,"./mn.js":601,"./mr":602,"./mr.js":602,"./ms":603,"./ms-my":604,"./ms-my.js":604,"./ms.js":603,"./mt":605,"./mt.js":605,"./my":606,"./my.js":606,"./nb":607,"./nb.js":607,"./ne":608,"./ne.js":608,"./nl":609,"./nl-be":610,"./nl-be.js":610,"./nl.js":609,"./nn":611,"./nn.js":611,"./oc-lnc":612,"./oc-lnc.js":612,"./pa-in":613,"./pa-in.js":613,"./pl":614,"./pl.js":614,"./pt":615,"./pt-br":616,"./pt-br.js":616,"./pt.js":615,"./ro":617,"./ro.js":617,"./ru":618,"./ru.js":618,"./sd":619,"./sd.js":619,"./se":620,"./se.js":620,"./si":621,"./si.js":621,"./sk":622,"./sk.js":622,"./sl":623,"./sl.js":623,"./sq":624,"./sq.js":624,"./sr":625,"./sr-cyrl":626,"./sr-cyrl.js":626,"./sr.js":625,"./ss":627,"./ss.js":627,"./sv":628,"./sv.js":628,"./sw":629,"./sw.js":629,"./ta":630,"./ta.js":630,"./te":631,"./te.js":631,"./tet":632,"./tet.js":632,"./tg":633,"./tg.js":633,"./th":634,"./th.js":634,"./tk":635,"./tk.js":635,"./tl-ph":636,"./tl-ph.js":636,"./tlh":637,"./tlh.js":637,"./tr":638,"./tr.js":638,"./tzl":639,"./tzl.js":639,"./tzm":640,"./tzm-latn":641,"./tzm-latn.js":641,"./tzm.js":640,"./ug-cn":642,"./ug-cn.js":642,"./uk":643,"./uk.js":643,"./ur":644,"./ur.js":644,"./uz":645,"./uz-latn":646,"./uz-latn.js":646,"./uz.js":645,"./vi":647,"./vi.js":647,"./x-pseudo":648,"./x-pseudo.js":648,"./yo":649,"./yo.js":649,"./zh-cn":650,"./zh-cn.js":650,"./zh-hk":651,"./zh-hk.js":651,"./zh-mo":652,"./zh-mo.js":652,"./zh-tw":653,"./zh-tw.js":653};function n(e){var t=o(e);return r(t)}function o(e){if(!r.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}n.keys=function(){return Object.keys(map)},n.resolve=o,e.exports=n,n.id=684},690:function(e,t,r){"use strict";r.r(t);var n=r(516),o=r.n(n),c={name:"ProceduresLocals",methods:{iframeLoaded:function(){o()({log:!1},"#iframeProcedures")}}},l=r(55),d=r(92),f=r.n(d),m=r(772),h=r(497),component=Object(l.a)(c,(function(){var e=this.$createElement,t=this._self._c||e;return t("v-row",[t("v-col",{attrs:{align:"center"}},[t("p",[t("b",[this._v("Procedures By Region")])]),this._v(" "),t("iframe",{attrs:{id:"iframeProcedures",width:"100%",frameborder:"0",scrolling:"no",src:"https://prime-medicina.shinyapps.io/latam-cto-procedures-locals/"},on:{load:this.iframeLoaded}})])],1)}),[],!1,null,null,null);t.default=component.exports;f()(component,{VCol:m.a,VRow:h.a})},753:function(e,t,r){e.exports=r.p+"img/latam-cto-registry_large.5058784.jpg"},754:function(e,t,r){e.exports=r.p+"img/CTO_phases.a2b0d15.webp"},755:function(e,t,r){"use strict";var n=r(670);r.n(n).a},756:function(e,t,r){(t=r(17)(!1)).push([e.i,'.SkeletonBox{display:inline-block;position:relative;overflow:hidden;vertical-align:middle;background-color:#dddbdd}.SkeletonBox:after{position:absolute;top:0;right:0;bottom:0;left:0;transform:translateX(-100%);background-image:linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.2) 20%,hsla(0,0%,100%,.5) 60%,hsla(0,0%,100%,0));-webkit-animation:shimmer 5s infinite;animation:shimmer 5s infinite;content:""}@-webkit-keyframes shimmer{to{transform:translateX(100%)}}@keyframes shimmer{to{transform:translateX(100%)}}',""]),e.exports=t},757:function(e,t,r){"use strict";var n=r(671);r.n(n).a},758:function(e,t,r){(t=r(17)(!1)).push([e.i,"p{font-size:x-large;line-height:40px;margin-top:20px;margin-left:20px;margin-right:20px}p.stats{font-size:xxx-large}p.text{text-indent:50px;text-align:justify}",""]),e.exports=t},760:function(e,t,r){"use strict";r.r(t);r(66);var n=r(20),o=r(512),c=r(655),l={extends:c.a,mixins:[c.d.reactiveProp],props:["chartData","options"],mounted:function(){this.renderChart(this.chartData,this.options)}},d=(r(672),{name:"SuccessfulProcedures",components:{BarChart:l},data:function(){return{optionsBarChart:null,datacollectionBarChart:null,loading:!0}},methods:{fillData:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.successfulProceduresPerYear();case 2:r=t.sent,n=r.uniqueYears,c=r.perc,e.datacollectionBarChart={labels:n,datasets:[{borderAlign:"center",label:"% successful procedures per year",backgroundColor:"#019edf",data:c}]},e.optionsBarChart={responsive:!0,maintainAspectRatio:!1,legend:{display:!1},scales:{yAxes:[{ticks:{max:100,min:50}}]}},e.loading=!1;case 8:case"end":return t.stop()}}),t)})))()}},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fillData();case 2:case"end":return t.stop()}}),t)})))()}}),f=r(55),m=r(92),h=r.n(m),v=r(772),j=r(495),x=r(195),C=r(497),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",[r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("Successful Procedures Per Year")])]),e._v(" "),e.loading?r("v-progress-circular",{attrs:{indeterminate:"",color:"blue",size:50}}):e._e(),e._v(" "),e.loading?e._e():r("bar-chart",{attrs:{"chart-data":e.datacollectionBarChart,options:e.optionsBarChart}})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;h()(component,{VCol:v.a,VContainer:j.a,VProgressCircular:x.a,VRow:C.a})},761:function(e,t,r){"use strict";r.r(t);r(66);var n=r(20),o=r(512),c=r(655),l={extends:c.c,mixins:[c.d.reactiveProp],props:["chartData","options"],mounted:function(){this.renderChart(this.chartData,this.options)}},d=(r(672),{name:"Procedures",components:{LineChart:l},data:function(){return{optionsLineChart:null,datacollectionLineChart:null,loading:!0}},methods:{fillData:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.annualProcedures();case 2:r=t.sent,n=r.countYears,c=r.uniqueYears,e.datacollectionLineChart={labels:c,datasets:[{borderAlign:"center",label:"Amount of procedures realized per year",backgroundColor:"blue",fill:!1,borderColor:"green",pointRadius:7,pointHoverRadius:10,data:n}]},e.optionsLineChart={plugins:{datalabels:{color:"gray",anchor:"center",clamp:!0,align:"top",font:{size:20}}},responsive:!0,maintainAspectRatio:!1,legend:{display:!1},scales:{yAxes:[{ticks:{max:1e3,min:0}}]}},e.loading=!1;case 8:case"end":return t.stop()}}),t)})))()}},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fillData();case 2:case"end":return t.stop()}}),t)})))()}}),f=r(55),m=r(92),h=r.n(m),v=r(772),j=r(495),x=r(195),C=r(497),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",[r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("Annual Procedures")])]),e._v(" "),e.loading?r("v-progress-circular",{attrs:{indeterminate:"",color:"blue",size:50}}):e._e(),e._v(" "),e.loading?e._e():r("line-chart",{attrs:{"chart-data":e.datacollectionLineChart,options:e.optionsLineChart}})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;h()(component,{VCol:v.a,VContainer:j.a,VProgressCircular:x.a,VRow:C.a})},762:function(e,t,r){"use strict";r.r(t);var n=r(516),o=r.n(n),c={name:"Centers",methods:{iframeLoaded:function(){o()({log:!1},"#iframeCenters")}}},l=r(55),d=r(92),f=r.n(d),m=r(772),h=r(497),component=Object(l.a)(c,(function(){var e=this.$createElement,t=this._self._c||e;return t("v-row",[t("v-col",{attrs:{align:"center"}},[t("p",[t("b",[this._v("LATAM CTO Centers")])]),this._v(" "),t("iframe",{attrs:{id:"iframeCenters",width:"100%",frameborder:"0",scrolling:"no",src:"https://prime-medicina.shinyapps.io/latam-cto-centers/"},on:{load:this.iframeLoaded}})])],1)}),[],!1,null,null,null);t.default=component.exports;f()(component,{VCol:m.a,VRow:h.a})},763:function(e,t,r){"use strict";r.r(t);r(66);var n=r(20),o=r(512),c=r(667),l=(r(685),r(672),{name:"SuccessfulStrategies",components:{DoughnutChart:c.a},data:function(){return{optionsPieChart:null,datacollectionPieChart:null,loading:!0}},methods:{fillData:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.successfulStrategies();case 2:r=t.sent,n=r.valuesStrategies,c=r.countStrategies,e.datacollectionPieChart={labels:n,datasets:[{borderAlign:"center",label:"Success strategies",data:c}]},e.optionsPieChart={responsive:!0,maintainAspectRatio:!1,plugins:{colorschemes:{scheme:"brewer.PastelTwo8"},datalabels:{formatter:function(e){return e+"%"},font:{size:20}}}},e.loading=!1;case 8:case"end":return t.stop()}}),t)})))()}},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fillData();case 2:case"end":return t.stop()}}),t)})))()}}),d=r(55),f=r(92),m=r.n(f),h=r(772),v=r(495),j=r(195),x=r(497),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",[r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("Success Strategies")])]),e._v(" "),e.loading?r("v-progress-circular",{attrs:{indeterminate:"",color:"blue",size:50}}):e._e(),e._v(" "),e.loading?e._e():r("doughnut-chart",{attrs:{"chart-data":e.datacollectionPieChart,options:e.optionsPieChart}}),r("br")],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;m()(component,{VCol:h.a,VContainer:v.a,VProgressCircular:j.a,VRow:x.a})},764:function(e,t,r){"use strict";r.r(t);var n=r(516),o=r.n(n),c={name:"Angina",methods:{iframeLoaded:function(){o()({log:!1},"#iframeAngina")}}},l=r(55),d=r(92),f=r.n(d),m=r(772),h=r(495),v=r(497),component=Object(l.a)(c,(function(){var e=this.$createElement,t=this._self._c||e;return t("v-container",[t("v-row",[t("v-col",{attrs:{align:"center"}},[t("p",[t("b",[this._v("Baseline & 1 Year Follow Up")])]),this._v(" "),t("iframe",{attrs:{id:"iframeAngina",width:"100%",frameborder:"0",scrolling:"no",src:"https://prime-medicina.shinyapps.io/latam-cto-procedures/"},on:{load:this.iframeLoaded}})])],1)],1)}),[],!1,null,"6fd5c9b4",null);t.default=component.exports;f()(component,{VCol:m.a,VContainer:h.a,VRow:v.a})},780:function(e,t,r){"use strict";r.r(t);r(66);var n=r(20),o=r(512),c=r(510),l=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(path){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c.a.GET(path));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d={latamCtoCenters:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l("centers/latamCtoCenters");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()}};r(7);function f(e){var t,r=e.componentFactory,n=e.loading,o=e.loadingData;return function(){return{component:new Promise((function(e){t=e})),loading:{mounted:function(){var e=this;if("IntersectionObserver"in window){var n=new IntersectionObserver((function(o){o[0].intersectionRatio<=0||(n.unobserve(e.$el),r().then(t))}));n.observe(this.$el)}else r().then(t)},render:function(e){return e(n,o)}}}}}r(23);var m={name:"SkeletonBox",props:{maxWidth:{default:100,type:Number},minWidth:{default:80,type:Number},height:{default:"1em",type:String},width:{default:null,type:String}},computed:{computedWidth:function(){return this.width||"".concat(Math.floor(Math.random()*(this.maxWidth-this.minWidth)+this.minWidth),"%")}}},h=(r(755),r(55)),v=Object(h.a)(m,(function(){var e=this.$createElement;return(this._self._c||e)("span",{staticClass:"SkeletonBox",style:{height:this.height,width:this.computedWidth}})}),[],!1,null,null,null).exports,j=r(129),x={name:"index",layout:"public",components:{ProceduresLocals:r(690).default,Centers:f({componentFactory:function(){return Promise.resolve().then(r.bind(null,762))},loading:v}),SuccessfulProcedures:f({componentFactory:function(){return Promise.resolve().then(r.bind(null,760))},loading:v}),SuccessStrategies:f({componentFactory:function(){return Promise.resolve().then(r.bind(null,763))},loading:v}),AnnualProcedures:f({componentFactory:function(){return Promise.resolve().then(r.bind(null,761))},loading:v}),Angina:f({componentFactory:function(){return Promise.resolve().then(r.bind(null,764))},loading:v})},data:function(){return{countries:null,activeCenters:null,proceduresEnrolled:null,loadingCenters:!0,loadingProcedures:!0,logged:!1}},methods:{dashboard:function(){this.$router.push("/dashboard")},login:function(){this.$router.push("/auth")}},created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.a.currentAuthenticatedUser();case 3:e.logged=!0,t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),e.logged=!1;case 9:return t.next=11,d.latamCtoCenters();case 11:return r=t.sent,e.countries=r.countries.length,e.activeCenters=r.centers.length,e.loadingCenters=!1,t.next=17,o.a.countAll();case 17:e.proceduresEnrolled=t.sent,e.loadingProcedures=!1;case 19:case"end":return t.stop()}}),t,null,[[0,6]])})))()}},C=(r(757),r(92)),w=r.n(C),_=r(209),k=r(515),y=r(513),R=r(662),P=r(772),O=r(196),A=r(774),z=r(195),S=r(497),E=Object(h.a)(x,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{column:"","justify-center":"","align-center":""}},[n("v-card",{staticClass:"mx-auto"},[n("div",{attrs:{align:"center"}},[n("img",{attrs:{width:"65%",src:r(753)}})]),e._v(" "),n("img",{staticClass:"white--text align-end",attrs:{width:"100%",src:r(754)}}),e._v(" "),n("v-card-text",[n("p",{staticClass:"text"},[e._v("\n        The LATAM CTO Registry is the representation of the great work of a\n        community dedicated to improving the knowledge of complex PCI in Latin\n        America. The registry started as an idea in late 2016. After a year of\n        technical development, enrolled the first procedures in Brazil and\n        Argentina in early 2018 and surpassed the thousand procedures mark in\n        the same year.\n      ")]),e._v(" "),n("v-row",[n("v-col",{attrs:{align:"center"}},[n("p",[e._v("ACTIVE CENTERS")]),e._v(" "),e.loadingCenters?n("v-progress-circular",{attrs:{indeterminate:"",color:"grey"}}):e._e(),e._v(" "),n("p",{staticClass:"stats"},[e._v(e._s(this.activeCenters))]),e._v(" "),n("p",[e._v("COUNTRIES")]),e._v(" "),e.loadingCenters?n("v-progress-circular",{attrs:{indeterminate:"",color:"grey"}}):e._e(),e._v(" "),n("p",{staticClass:"stats"},[e._v(e._s(this.countries))]),e._v(" "),n("p",[e._v("PROCEDURES ENROLLED")]),e._v(" "),e.loadingProcedures?n("v-progress-circular",{attrs:{indeterminate:"",color:"grey"}}):e._e(),e._v(" "),n("p",{staticClass:"stats"},[e._v(e._s(this.proceduresEnrolled))])],1)],1),e._v(" "),n("div",{staticClass:"text-center"},[n("v-chip",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#geographicDistribution",expression:"'#geographicDistribution'"}],staticClass:"ma-10",attrs:{"x-large":""}},[e._v("\n          GEOGRAPHIC DISTRIBUTION\n        ")]),e._v(" "),n("v-chip",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#proceduralData",expression:"'#proceduralData'"}],staticClass:"ma-10",attrs:{"x-large":""}},[e._v("\n          PROCEDURAL DATA\n        ")]),e._v(" "),n("v-chip",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#anginaOutcome",expression:"'#anginaOutcome'"}],staticClass:"ma-10",attrs:{"x-large":""}},[e._v("\n          ONE YEAR OUTCOME\n        ")])],1),e._v(" "),n("div",{staticClass:"mb-10"},[n("Centers",{attrs:{id:"geographicDistribution"}})],1),e._v(" "),n("div",{staticClass:"mb-10"},[n("SuccessfulProcedures",{attrs:{id:"proceduralData"}}),e._v(" "),n("SuccessStrategies"),e._v(" "),n("AnnualProcedures"),e._v(" "),n("ProceduresLocals")],1),e._v(" "),n("div",{staticClass:"mb-10"},[n("Angina",{attrs:{id:"anginaOutcome"}})],1)],1),e._v(" "),e.logged?e._e():n("v-btn",{attrs:{color:"blue",fab:"",large:"",dark:"",top:"",left:"",fixed:""},on:{click:e.login}},[n("v-icon",[e._v("mdi-account")])],1),e._v(" "),e.logged?n("v-btn",{attrs:{color:"blue",fab:"",large:"",dark:"",top:"",left:"",fixed:""},on:{click:e.dashboard}},[n("v-icon",[e._v("mdi-plus")])],1):e._e()],1)],1)}),[],!1,null,null,null);t.default=E.exports;w()(E,{Centers:r(762).default,SuccessfulProcedures:r(760).default,SuccessStrategies:r(763).default,AnnualProcedures:r(761).default,ProceduresLocals:r(690).default,Angina:r(764).default}),w()(E,{VBtn:_.a,VCard:k.a,VCardText:y.a,VChip:R.a,VCol:P.a,VIcon:O.a,VLayout:A.a,VProgressCircular:z.a,VRow:S.a})}}]);