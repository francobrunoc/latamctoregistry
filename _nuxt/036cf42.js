(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{689:function(e,t,r){"use strict";r(66);var n=r(19),o=r(690),c=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(path){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o.a.GET(path));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l={countAll:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/count");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},successfulStrategies:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/successfulStrategies");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},successfulProceduresPerYear:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/successfulProceduresPerYear");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},annualProcedures:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/annualProcedures");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},clinicalCharacteristics:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/clinicalCharacteristics");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},angiographicCharacteristics:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/angiographicCharacteristics");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},proceduralCharacteristics:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/proceduralCharacteristics");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},anginaOutcome:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/anginaOutcome");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},proceduralComplications:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/proceduralComplications");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},inHospitalOutcomes:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/inHospitalOutcomes");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},casesPerMonth:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/casesPerMonth");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()}};t.a=l},690:function(e,t,r){"use strict";(function(e){r(31),r(32),r(7),r(66);var n=r(19),o=r(839),c=r.n(o),l=r(694),d=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(path){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(l.a)(path));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(path,r){var n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=[],o={headers:{Authorization:r}},t.next=4,c.a.get("https://7cb5vfypm9.execute-api.us-west-2.amazonaws.com/dev/".concat(path||""),o).then((function(t){(n=t.data).body&&(n=JSON.parse(e.from(n.body).toString("utf-8")))})).catch((function(e){return console.error(e)}));case 4:return t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}();t.a={GET:d,get:f}}).call(this,r(9).Buffer)},694:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));r(66);var n,o=r(19),c=r(150),l=r(690),d=function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(path){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.currentAuthenticatedUser().then((function(u){return n=u.signInUserSession.idToken.jwtToken})).catch((function(e){return console.log(e)}));case 2:return e.next=4,l.a.get(path,n);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},699:function(e,t,r){"use strict";var n=r(698);t.a={extends:n.b,mixins:[n.d.reactiveProp],props:["chartData","options"],mounted:function(){this.renderChart(this.chartData,this.options)}}},836:function(e,t,r){"use strict";var n=r(698);t.a={extends:n.a,mixins:[n.d.reactiveProp],props:["chartData","options"],mounted:function(){this.renderChart(this.chartData,this.options)}}},860:function(e,t,r){var map={"./af":700,"./af.js":700,"./ar":701,"./ar-dz":702,"./ar-dz.js":702,"./ar-kw":703,"./ar-kw.js":703,"./ar-ly":704,"./ar-ly.js":704,"./ar-ma":705,"./ar-ma.js":705,"./ar-sa":706,"./ar-sa.js":706,"./ar-tn":707,"./ar-tn.js":707,"./ar.js":701,"./az":708,"./az.js":708,"./be":709,"./be.js":709,"./bg":710,"./bg.js":710,"./bm":711,"./bm.js":711,"./bn":712,"./bn-bd":713,"./bn-bd.js":713,"./bn.js":712,"./bo":714,"./bo.js":714,"./br":715,"./br.js":715,"./bs":716,"./bs.js":716,"./ca":717,"./ca.js":717,"./cs":718,"./cs.js":718,"./cv":719,"./cv.js":719,"./cy":720,"./cy.js":720,"./da":721,"./da.js":721,"./de":722,"./de-at":723,"./de-at.js":723,"./de-ch":724,"./de-ch.js":724,"./de.js":722,"./dv":725,"./dv.js":725,"./el":726,"./el.js":726,"./en-au":727,"./en-au.js":727,"./en-ca":728,"./en-ca.js":728,"./en-gb":729,"./en-gb.js":729,"./en-ie":730,"./en-ie.js":730,"./en-il":731,"./en-il.js":731,"./en-in":732,"./en-in.js":732,"./en-nz":733,"./en-nz.js":733,"./en-sg":734,"./en-sg.js":734,"./eo":735,"./eo.js":735,"./es":736,"./es-do":737,"./es-do.js":737,"./es-mx":738,"./es-mx.js":738,"./es-us":739,"./es-us.js":739,"./es.js":736,"./et":740,"./et.js":740,"./eu":741,"./eu.js":741,"./fa":742,"./fa.js":742,"./fi":743,"./fi.js":743,"./fil":744,"./fil.js":744,"./fo":745,"./fo.js":745,"./fr":746,"./fr-ca":747,"./fr-ca.js":747,"./fr-ch":748,"./fr-ch.js":748,"./fr.js":746,"./fy":749,"./fy.js":749,"./ga":750,"./ga.js":750,"./gd":751,"./gd.js":751,"./gl":752,"./gl.js":752,"./gom-deva":753,"./gom-deva.js":753,"./gom-latn":754,"./gom-latn.js":754,"./gu":755,"./gu.js":755,"./he":756,"./he.js":756,"./hi":757,"./hi.js":757,"./hr":758,"./hr.js":758,"./hu":759,"./hu.js":759,"./hy-am":760,"./hy-am.js":760,"./id":761,"./id.js":761,"./is":762,"./is.js":762,"./it":763,"./it-ch":764,"./it-ch.js":764,"./it.js":763,"./ja":765,"./ja.js":765,"./jv":766,"./jv.js":766,"./ka":767,"./ka.js":767,"./kk":768,"./kk.js":768,"./km":769,"./km.js":769,"./kn":770,"./kn.js":770,"./ko":771,"./ko.js":771,"./ku":772,"./ku.js":772,"./ky":773,"./ky.js":773,"./lb":774,"./lb.js":774,"./lo":775,"./lo.js":775,"./lt":776,"./lt.js":776,"./lv":777,"./lv.js":777,"./me":778,"./me.js":778,"./mi":779,"./mi.js":779,"./mk":780,"./mk.js":780,"./ml":781,"./ml.js":781,"./mn":782,"./mn.js":782,"./mr":783,"./mr.js":783,"./ms":784,"./ms-my":785,"./ms-my.js":785,"./ms.js":784,"./mt":786,"./mt.js":786,"./my":787,"./my.js":787,"./nb":788,"./nb.js":788,"./ne":789,"./ne.js":789,"./nl":790,"./nl-be":791,"./nl-be.js":791,"./nl.js":790,"./nn":792,"./nn.js":792,"./oc-lnc":793,"./oc-lnc.js":793,"./pa-in":794,"./pa-in.js":794,"./pl":795,"./pl.js":795,"./pt":796,"./pt-br":797,"./pt-br.js":797,"./pt.js":796,"./ro":798,"./ro.js":798,"./ru":799,"./ru.js":799,"./sd":800,"./sd.js":800,"./se":801,"./se.js":801,"./si":802,"./si.js":802,"./sk":803,"./sk.js":803,"./sl":804,"./sl.js":804,"./sq":805,"./sq.js":805,"./sr":806,"./sr-cyrl":807,"./sr-cyrl.js":807,"./sr.js":806,"./ss":808,"./ss.js":808,"./sv":809,"./sv.js":809,"./sw":810,"./sw.js":810,"./ta":811,"./ta.js":811,"./te":812,"./te.js":812,"./tet":813,"./tet.js":813,"./tg":814,"./tg.js":814,"./th":815,"./th.js":815,"./tk":816,"./tk.js":816,"./tl-ph":817,"./tl-ph.js":817,"./tlh":818,"./tlh.js":818,"./tr":819,"./tr.js":819,"./tzl":820,"./tzl.js":820,"./tzm":821,"./tzm-latn":822,"./tzm-latn.js":822,"./tzm.js":821,"./ug-cn":823,"./ug-cn.js":823,"./uk":824,"./uk.js":824,"./ur":825,"./ur.js":825,"./uz":826,"./uz-latn":827,"./uz-latn.js":827,"./uz.js":826,"./vi":828,"./vi.js":828,"./x-pseudo":829,"./x-pseudo.js":829,"./yo":830,"./yo.js":830,"./zh-cn":831,"./zh-cn.js":831,"./zh-hk":832,"./zh-hk.js":832,"./zh-mo":833,"./zh-mo.js":833,"./zh-tw":834,"./zh-tw.js":834};function n(e){var t=o(e);return r(t)}function o(e){if(!r.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}n.keys=function(){return Object.keys(map)},n.resolve=o,e.exports=n,n.id=860},864:function(e,t,r){var content=r(940);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(21).default)("ef07b3c0",content,!0,{sourceMap:!1})},865:function(e,t,r){var content=r(942);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(21).default)("1b7833da",content,!0,{sourceMap:!1})},870:function(e,t,r){"use strict";r.r(t);var n=r(835),o=r.n(n),c={name:"ProceduresLocals",methods:{iframeLoaded:function(){o()({log:!1},"#iframeProcedures")}}},l=r(61),d=r(103),f=r.n(d),m=r(955),h=r(677),component=Object(l.a)(c,(function(){var e=this.$createElement,t=this._self._c||e;return t("v-row",[t("v-col",{attrs:{align:"center"}},[t("p",[t("b",[this._v("Procedures By Region")])]),this._v(" "),t("iframe",{attrs:{id:"iframeProcedures",width:"100%",frameborder:"0",scrolling:"no",src:"https://prime-medicina.shinyapps.io/latam-cto-procedures-locals/"},on:{load:this.iframeLoaded}})])],1)}),[],!1,null,null,null);t.default=component.exports;f()(component,{VCol:m.a,VRow:h.a})},937:function(e,t,r){e.exports=r.p+"img/latam-cto-registry_large.5058784.jpg"},938:function(e,t,r){e.exports=r.p+"img/CTO_phases.7b07db6.png"},939:function(e,t,r){"use strict";r(864)},940:function(e,t,r){(t=r(20)(!1)).push([e.i,'.SkeletonBox{display:inline-block;position:relative;overflow:hidden;vertical-align:middle;background-color:#dddbdd}.SkeletonBox:after{position:absolute;top:0;right:0;bottom:0;left:0;transform:translateX(-100%);background-image:linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.2) 20%,hsla(0,0%,100%,.5) 60%,hsla(0,0%,100%,0));-webkit-animation:shimmer 5s infinite;animation:shimmer 5s infinite;content:""}@-webkit-keyframes shimmer{to{transform:translateX(100%)}}@keyframes shimmer{to{transform:translateX(100%)}}',""]),e.exports=t},941:function(e,t,r){"use strict";r(865)},942:function(e,t,r){(t=r(20)(!1)).push([e.i,"p{font-size:x-large;line-height:40px;margin-top:20px;margin-left:20px;margin-right:20px}p.stats{font-size:xxx-large}p.text{text-indent:50px;text-align:justify}",""]),e.exports=t},944:function(e,t,r){"use strict";r.r(t);r(66);var n=r(19),o=r(689),c=r(698),l={extends:c.c,mixins:[c.d.reactiveProp],props:["chartData","options"],mounted:function(){this.renderChart(this.chartData,this.options)}},d=(r(696),{name:"Procedures",components:{LineChart:l},data:function(){return{optionsLineChart:null,datacollectionLineChart:null,loading:!0}},methods:{fillData:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.annualProcedures();case 2:r=t.sent,n=r.countYears,c=r.uniqueYears,e.datacollectionLineChart={labels:c,datasets:[{borderAlign:"center",label:"Amount of procedures realized per year",backgroundColor:"blue",fill:!1,borderColor:"green",pointRadius:7,pointHoverRadius:10,data:n}]},e.optionsLineChart={plugins:{datalabels:{color:"gray",anchor:"center",clamp:!0,align:"top",font:{size:20}}},responsive:!0,maintainAspectRatio:!1,legend:{display:!1},scales:{yAxes:[{ticks:{max:1e3,min:0}}]}},e.loading=!1;case 8:case"end":return t.stop()}}),t)})))()}},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fillData();case 2:case"end":return t.stop()}}),t)})))()}}),f=r(61),m=r(103),h=r.n(m),v=r(955),j=r(675),x=r(238),w=r(677),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",[r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("Annual Procedures")])]),e._v(" "),e.loading?r("v-progress-circular",{attrs:{indeterminate:"",color:"blue",size:50}}):e._e(),e._v(" "),e.loading?e._e():r("line-chart",{attrs:{"chart-data":e.datacollectionLineChart,options:e.optionsLineChart}})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;h()(component,{VCol:v.a,VContainer:j.a,VProgressCircular:x.a,VRow:w.a})},945:function(e,t,r){"use strict";r.r(t);var n=r(835),o=r.n(n),c={name:"Centers",methods:{iframeLoaded:function(){o()({log:!1},"#iframeCenters")}}},l=r(61),d=r(103),f=r.n(d),m=r(955),h=r(677),component=Object(l.a)(c,(function(){var e=this.$createElement,t=this._self._c||e;return t("v-row",[t("v-col",{attrs:{align:"center"}},[t("p",[t("b",[this._v("LATAM CTO Centers")])]),this._v(" "),t("iframe",{attrs:{id:"iframeCenters",width:"100%",frameborder:"0",scrolling:"no",src:"https://prime-medicina.shinyapps.io/latam-cto-centers/"},on:{load:this.iframeLoaded}})])],1)}),[],!1,null,null,null);t.default=component.exports;f()(component,{VCol:m.a,VRow:h.a})},946:function(e,t,r){"use strict";r.r(t);r(66);var n=r(19),o=r(689),c=r(836),l=(r(696),{name:"SuccessfulProcedures",components:{BarChart:c.a},data:function(){return{optionsBarChart:null,datacollectionBarChart:null,loading:!0}},methods:{fillData:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.successfulProceduresPerYear();case 2:r=t.sent,n=r.uniqueYears,c=r.perc,e.datacollectionBarChart={labels:n,datasets:[{borderAlign:"center",label:"% successful procedures per year",backgroundColor:"#019edf",data:c}]},e.optionsBarChart={responsive:!0,maintainAspectRatio:!1,legend:{display:!1},scales:{yAxes:[{ticks:{max:100,min:50}}]}},e.loading=!1;case 8:case"end":return t.stop()}}),t)})))()}},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fillData();case 2:case"end":return t.stop()}}),t)})))()}}),d=r(61),f=r(103),m=r.n(f),h=r(955),v=r(675),j=r(238),x=r(677),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",[r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("Successful Procedures Per Year")])]),e._v(" "),e.loading?r("v-progress-circular",{attrs:{indeterminate:"",color:"blue",size:50}}):e._e(),e._v(" "),e.loading?e._e():r("bar-chart",{attrs:{"chart-data":e.datacollectionBarChart,options:e.optionsBarChart}})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;m()(component,{VCol:h.a,VContainer:v.a,VProgressCircular:j.a,VRow:x.a})},947:function(e,t,r){"use strict";r.r(t);r(66);var n=r(19),o=r(689),c=r(699),l=(r(861),r(696),{name:"SuccessfulStrategies",components:{DoughnutChart:c.a},data:function(){return{optionsPieChart:null,datacollectionPieChart:null,loading:!0}},methods:{fillData:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.successfulStrategies();case 2:r=t.sent,n=r.valuesStrategies,c=r.countStrategies,e.datacollectionPieChart={labels:n,datasets:[{borderAlign:"center",label:"Success strategies",data:c}]},e.optionsPieChart={responsive:!0,maintainAspectRatio:!1,plugins:{colorschemes:{scheme:"brewer.PastelTwo8"},datalabels:{formatter:function(e){return e+"%"},font:{size:20}}}},e.loading=!1;case 8:case"end":return t.stop()}}),t)})))()}},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fillData();case 2:case"end":return t.stop()}}),t)})))()}}),d=r(61),f=r(103),m=r.n(f),h=r(955),v=r(675),j=r(238),x=r(677),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",[r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("Success Strategies")])]),e._v(" "),e.loading?r("v-progress-circular",{attrs:{indeterminate:"",color:"blue",size:50}}):e._e(),e._v(" "),e.loading?e._e():r("doughnut-chart",{attrs:{"chart-data":e.datacollectionPieChart,options:e.optionsPieChart}}),r("br")],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;m()(component,{VCol:h.a,VContainer:v.a,VProgressCircular:j.a,VRow:x.a})},962:function(e,t,r){"use strict";r.r(t);r(66);var n=r(19),o=r(689),c=r(690),l=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(path){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c.a.GET(path));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d={latamCtoCenters:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l("centers/latamCtoCenters");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()}};r(7);function f(e){var t,r=e.componentFactory,n=e.loading,o=e.loadingData;return function(){return{component:new Promise((function(e){t=e})),loading:{mounted:function(){var e=this;if("IntersectionObserver"in window){var n=new IntersectionObserver((function(o){o[0].intersectionRatio<=0||(n.unobserve(e.$el),r().then(t))}));n.observe(this.$el)}else r().then(t)},render:function(e){return e(n,o)}}}}}r(25);var m={name:"SkeletonBox",props:{maxWidth:{default:100,type:Number},minWidth:{default:80,type:Number},height:{default:"1em",type:String},width:{default:null,type:String}},computed:{computedWidth:function(){return this.width||"".concat(Math.floor(Math.random()*(this.maxWidth-this.minWidth)+this.minWidth),"%")}}},h=(r(939),r(61)),v=Object(h.a)(m,(function(){var e=this.$createElement;return(this._self._c||e)("span",{staticClass:"SkeletonBox",style:{height:this.height,width:this.computedWidth}})}),[],!1,null,null,null).exports,j=r(150),x={name:"index",layout:"public",components:{ProceduresLocals:r(870).default,Centers:f({componentFactory:function(){return Promise.resolve().then(r.bind(null,945))},loading:v}),SuccessfulProcedures:f({componentFactory:function(){return Promise.resolve().then(r.bind(null,946))},loading:v}),SuccessStrategies:f({componentFactory:function(){return Promise.resolve().then(r.bind(null,947))},loading:v}),AnnualProcedures:f({componentFactory:function(){return Promise.resolve().then(r.bind(null,944))},loading:v})},data:function(){return{countries:null,activeCenters:null,proceduresEnrolled:null,loadingCenters:!0,loadingProcedures:!0,logged:!1}},methods:{dashboard:function(){this.$router.push("/dashboard")},login:function(){this.$router.push("/auth")}},created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.a.currentAuthenticatedUser();case 3:e.logged=!0,t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),e.logged=!1;case 9:return t.next=11,d.latamCtoCenters();case 11:return r=t.sent,e.countries=r.countries.length,e.activeCenters=r.centers.length,e.loadingCenters=!1,t.next=17,o.a.countAll();case 17:e.proceduresEnrolled=t.sent,e.loadingProcedures=!1;case 19:case"end":return t.stop()}}),t,null,[[0,6]])})))()}},w=(r(941),r(103)),C=r.n(w),k=r(252),y=r(695),_=r(693),R=r(955),P=r(239),O=(r(259),r(349)),z=Object(O.a)("layout"),S=r(238),A=r(677),V=Object(h.a)(x,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{column:"","justify-center":"","align-center":""}},[n("v-card",{staticClass:"mx-auto"},[n("div",{attrs:{align:"center"}},[n("img",{attrs:{width:"65%",src:r(937)}})]),e._v(" "),n("img",{staticClass:"white--text align-end",attrs:{width:"100%",src:r(938)}}),e._v(" "),n("v-card-text",[n("p",{staticClass:"text"},[e._v("\n          The LATAM CTO Registry is the representation of the great work of a\n          community dedicated to improving the knowledge of complex PCI in Latin\n          America. The registry started as an idea in late 2016. After a year of\n          technical development, enrolled the first procedures in Brazil and\n          Argentina in early 2018 and surpassed the thousand procedures mark in\n          the same year.\n        ")]),e._v(" "),n("v-row",[n("v-col",{attrs:{align:"center"}},[n("p",[e._v("ACTIVE CENTERS")]),e._v(" "),e.loadingCenters?n("v-progress-circular",{attrs:{indeterminate:"",color:"grey"}}):e._e(),e._v(" "),n("p",{staticClass:"stats"},[e._v(e._s(this.activeCenters))]),e._v(" "),n("p",[e._v("COUNTRIES")]),e._v(" "),e.loadingCenters?n("v-progress-circular",{attrs:{indeterminate:"",color:"grey"}}):e._e(),e._v(" "),n("p",{staticClass:"stats"},[e._v(e._s(this.countries))]),e._v(" "),n("p",[e._v("PROCEDURES ENROLLED")]),e._v(" "),e.loadingProcedures?n("v-progress-circular",{attrs:{indeterminate:"",color:"grey"}}):e._e(),e._v(" "),n("p",{staticClass:"stats"},[e._v(e._s(this.proceduresEnrolled))])],1)],1),e._v(" "),n("div",{staticClass:"mb-10"},[n("Centers",{attrs:{id:"geographicDistribution"}})],1),e._v(" "),n("div",{staticClass:"mb-10"},[n("SuccessfulProcedures",{attrs:{id:"proceduralData"}}),e._v(" "),n("SuccessStrategies"),e._v(" "),n("AnnualProcedures"),e._v(" "),n("ProceduresLocals")],1)],1),e._v(" "),e.logged?e._e():n("v-btn",{attrs:{color:"blue",fab:"",large:"",dark:"",top:"",left:"",fixed:""},on:{click:e.login}},[n("v-icon",[e._v("mdi-account")])],1),e._v(" "),e.logged?n("v-btn",{attrs:{color:"blue",fab:"",large:"",dark:"",top:"",left:"",fixed:""},on:{click:e.dashboard}},[n("v-icon",[e._v("mdi-plus")])],1):e._e()],1)],1)}),[],!1,null,null,null);t.default=V.exports;C()(V,{Centers:r(945).default,SuccessfulProcedures:r(946).default,SuccessStrategies:r(947).default,AnnualProcedures:r(944).default,ProceduresLocals:r(870).default}),C()(V,{VBtn:k.a,VCard:y.a,VCardText:_.a,VCol:R.a,VIcon:P.a,VLayout:z,VProgressCircular:S.a,VRow:A.a})}}]);