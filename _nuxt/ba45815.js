(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{689:function(e,t,r){"use strict";r(66);var n=r(19),o=r(690),c=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(path){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o.a.GET(path));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l={countAll:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/count");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},successfulStrategies:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/successfulStrategies");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},successfulProceduresPerYear:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/successfulProceduresPerYear");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},annualProcedures:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/annualProcedures");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},clinicalCharacteristics:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/clinicalCharacteristics");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},angiographicCharacteristics:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/angiographicCharacteristics");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},proceduralCharacteristics:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/proceduralCharacteristics");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},anginaOutcome:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/anginaOutcome");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},proceduralComplications:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/proceduralComplications");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},inHospitalOutcomes:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/inHospitalOutcomes");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},casesPerMonth:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/casesPerMonth");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()}};t.a=l},690:function(e,t,r){"use strict";(function(e){r(31),r(32),r(7),r(66);var n=r(19),o=r(840),c=r.n(o),l=r(694),d=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(path){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(l.a)(path));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(path,r){var n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=[],o={headers:{Authorization:r}},t.next=4,c.a.get("https://7cb5vfypm9.execute-api.us-west-2.amazonaws.com/dev/".concat(path||""),o).then((function(t){(n=t.data).body&&(n=JSON.parse(e.from(n.body).toString("utf-8")))})).catch((function(e){return console.error(e)}));case 4:return t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}();t.a={GET:d,get:m}}).call(this,r(9).Buffer)},694:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));r(66);var n,o=r(19),c=r(150),l=r(690),d=function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(path){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.currentAuthenticatedUser().then((function(u){return n=u.signInUserSession.idToken.jwtToken})).catch((function(e){return console.log(e)}));case 2:return e.next=4,l.a.get(path,n);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},700:function(e,t,r){"use strict";var n=r(698);t.a={extends:n.b,mixins:[n.d.reactiveProp],props:["chartData","options"],mounted:function(){this.renderChart(this.chartData,this.options)}}},837:function(e,t,r){"use strict";var n=r(698);t.a={extends:n.a,mixins:[n.d.reactiveProp],props:["chartData","options"],mounted:function(){this.renderChart(this.chartData,this.options)}}},838:function(e,t,r){"use strict";r.r(t);r(25);var n=r(2),o=r(922),c=r.n(o);r(923);n.a.use(c.a);var l={name:"CentMeter",props:{value:Number},computed:{sections:{get:function(){return[{value:this.value,color:"#01ade3"},{value:100-this.value,color:"#f5f8ff"}]}}}},d=(r(925),r(61)),component=Object(d.a)(l,(function(){var e=this.$createElement,t=this._self._c||e;return t("vc-donut",{attrs:{sections:this.sections,size:180,thickness:30}},[t("p",[this._v(this._s(this.value.toString()+"%"))])])}),[],!1,null,"3a318394",null);t.default=component.exports},861:function(e,t,r){var content=r(926);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(21).default)("42f1fe8a",content,!0,{sourceMap:!1})},862:function(e,t,r){var map={"./af":701,"./af.js":701,"./ar":702,"./ar-dz":703,"./ar-dz.js":703,"./ar-kw":704,"./ar-kw.js":704,"./ar-ly":705,"./ar-ly.js":705,"./ar-ma":706,"./ar-ma.js":706,"./ar-sa":707,"./ar-sa.js":707,"./ar-tn":708,"./ar-tn.js":708,"./ar.js":702,"./az":709,"./az.js":709,"./be":710,"./be.js":710,"./bg":711,"./bg.js":711,"./bm":712,"./bm.js":712,"./bn":713,"./bn-bd":714,"./bn-bd.js":714,"./bn.js":713,"./bo":715,"./bo.js":715,"./br":716,"./br.js":716,"./bs":717,"./bs.js":717,"./ca":718,"./ca.js":718,"./cs":719,"./cs.js":719,"./cv":720,"./cv.js":720,"./cy":721,"./cy.js":721,"./da":722,"./da.js":722,"./de":723,"./de-at":724,"./de-at.js":724,"./de-ch":725,"./de-ch.js":725,"./de.js":723,"./dv":726,"./dv.js":726,"./el":727,"./el.js":727,"./en-au":728,"./en-au.js":728,"./en-ca":729,"./en-ca.js":729,"./en-gb":730,"./en-gb.js":730,"./en-ie":731,"./en-ie.js":731,"./en-il":732,"./en-il.js":732,"./en-in":733,"./en-in.js":733,"./en-nz":734,"./en-nz.js":734,"./en-sg":735,"./en-sg.js":735,"./eo":736,"./eo.js":736,"./es":737,"./es-do":738,"./es-do.js":738,"./es-mx":739,"./es-mx.js":739,"./es-us":740,"./es-us.js":740,"./es.js":737,"./et":741,"./et.js":741,"./eu":742,"./eu.js":742,"./fa":743,"./fa.js":743,"./fi":744,"./fi.js":744,"./fil":745,"./fil.js":745,"./fo":746,"./fo.js":746,"./fr":747,"./fr-ca":748,"./fr-ca.js":748,"./fr-ch":749,"./fr-ch.js":749,"./fr.js":747,"./fy":750,"./fy.js":750,"./ga":751,"./ga.js":751,"./gd":752,"./gd.js":752,"./gl":753,"./gl.js":753,"./gom-deva":754,"./gom-deva.js":754,"./gom-latn":755,"./gom-latn.js":755,"./gu":756,"./gu.js":756,"./he":757,"./he.js":757,"./hi":758,"./hi.js":758,"./hr":759,"./hr.js":759,"./hu":760,"./hu.js":760,"./hy-am":761,"./hy-am.js":761,"./id":762,"./id.js":762,"./is":763,"./is.js":763,"./it":764,"./it-ch":765,"./it-ch.js":765,"./it.js":764,"./ja":766,"./ja.js":766,"./jv":767,"./jv.js":767,"./ka":768,"./ka.js":768,"./kk":769,"./kk.js":769,"./km":770,"./km.js":770,"./kn":771,"./kn.js":771,"./ko":772,"./ko.js":772,"./ku":773,"./ku.js":773,"./ky":774,"./ky.js":774,"./lb":775,"./lb.js":775,"./lo":776,"./lo.js":776,"./lt":777,"./lt.js":777,"./lv":778,"./lv.js":778,"./me":779,"./me.js":779,"./mi":780,"./mi.js":780,"./mk":781,"./mk.js":781,"./ml":782,"./ml.js":782,"./mn":783,"./mn.js":783,"./mr":784,"./mr.js":784,"./ms":785,"./ms-my":786,"./ms-my.js":786,"./ms.js":785,"./mt":787,"./mt.js":787,"./my":788,"./my.js":788,"./nb":789,"./nb.js":789,"./ne":790,"./ne.js":790,"./nl":791,"./nl-be":792,"./nl-be.js":792,"./nl.js":791,"./nn":793,"./nn.js":793,"./oc-lnc":794,"./oc-lnc.js":794,"./pa-in":795,"./pa-in.js":795,"./pl":796,"./pl.js":796,"./pt":797,"./pt-br":798,"./pt-br.js":798,"./pt.js":797,"./ro":799,"./ro.js":799,"./ru":800,"./ru.js":800,"./sd":801,"./sd.js":801,"./se":802,"./se.js":802,"./si":803,"./si.js":803,"./sk":804,"./sk.js":804,"./sl":805,"./sl.js":805,"./sq":806,"./sq.js":806,"./sr":807,"./sr-cyrl":808,"./sr-cyrl.js":808,"./sr.js":807,"./ss":809,"./ss.js":809,"./sv":810,"./sv.js":810,"./sw":811,"./sw.js":811,"./ta":812,"./ta.js":812,"./te":813,"./te.js":813,"./tet":814,"./tet.js":814,"./tg":815,"./tg.js":815,"./th":816,"./th.js":816,"./tk":817,"./tk.js":817,"./tl-ph":818,"./tl-ph.js":818,"./tlh":819,"./tlh.js":819,"./tr":820,"./tr.js":820,"./tzl":821,"./tzl.js":821,"./tzm":822,"./tzm-latn":823,"./tzm-latn.js":823,"./tzm.js":822,"./ug-cn":824,"./ug-cn.js":824,"./uk":825,"./uk.js":825,"./ur":826,"./ur.js":826,"./uz":827,"./uz-latn":828,"./uz-latn.js":828,"./uz.js":827,"./vi":829,"./vi.js":829,"./x-pseudo":830,"./x-pseudo.js":830,"./yo":831,"./yo.js":831,"./zh-cn":832,"./zh-cn.js":832,"./zh-hk":833,"./zh-hk.js":833,"./zh-mo":834,"./zh-mo.js":834,"./zh-tw":835,"./zh-tw.js":835};function n(e){var t=o(e);return r(t)}function o(e){if(!r.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}n.keys=function(){return Object.keys(map)},n.resolve=o,e.exports=n,n.id=862},864:function(e,t,r){var content=r(928);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(21).default)("b5fc1840",content,!0,{sourceMap:!1})},865:function(e,t,r){var content=r(930);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(21).default)("66dbdb1a",content,!0,{sourceMap:!1})},868:function(e,t,r){"use strict";r.r(t);r(66);var n=r(19),o=r(838),c=r(689),l={name:"ClinicalCharacteristics",components:{CentMeter:o.default},data:function(){return{loading:!0,sections:{ageMean:0,ageStd:0,males:0,whites:0,hypertensives:0,previousPci:0,previousCtoAttempt:0,diabetes:0,ejectionFractionMean:0,ejectionFractionStd:0}}},created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=Object,t.t1=e.sections,t.next=4,c.a.clinicalCharacteristics();case 4:t.t2=t.sent,t.t0.assign.call(t.t0,t.t1,t.t2),e.loading=!1;case 7:case"end":return t.stop()}}),t)})))()}},d=r(61),m=r(103),f=r.n(m),v=r(955),h=r(238),j=r(677),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.loading?r("div",{attrs:{align:"center"}},[r("v-row",[r("v-col",[e.loading?r("v-progress-circular",{attrs:{indeterminate:"",color:"blue",size:50}}):e._e()],1)],1)],1):r("div",{staticClass:"container"},[r("v-row",[r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("Average Age:\n          "),r("div",{staticClass:"rate"},[e._v("\n            "+e._s(e.sections.ageMean)+" ± "+e._s(e.sections.ageStd)+"\n          ")])])])]),e._v(" "),r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("Ejection Fraction:\n          "),r("div",{staticClass:"rate"},[e._v("\n            "+e._s(e.sections.ejectionFractionMean)+" ±\n            "+e._s(e.sections.ejectionFractionStd)+"\n          ")])])])])],1),e._v(" "),r("v-row",[r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("Male Gender")])]),e._v(" "),r("CentMeter",{model:{value:e.sections.males,callback:function(t){e.$set(e.sections,"males",t)},expression:"sections.males"}})],1),e._v(" "),r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("White Race")])]),e._v(" "),r("CentMeter",{model:{value:e.sections.whites,callback:function(t){e.$set(e.sections,"whites",t)},expression:"sections.whites"}})],1),e._v(" "),r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("Hypertension")])]),e._v(" "),r("CentMeter",{model:{value:e.sections.hypertensives,callback:function(t){e.$set(e.sections,"hypertensives",t)},expression:"sections.hypertensives"}})],1)],1),e._v(" "),r("v-row",[r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("Previous PCI")])]),e._v(" "),r("CentMeter",{model:{value:e.sections.previousPci,callback:function(t){e.$set(e.sections,"previousPci",t)},expression:"sections.previousPci"}})],1),e._v(" "),r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("Previous CTO Attempt")])]),e._v(" "),r("CentMeter",{model:{value:e.sections.previousCtoAttempt,callback:function(t){e.$set(e.sections,"previousCtoAttempt",t)},expression:"sections.previousCtoAttempt"}})],1),e._v(" "),r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("Diabetes")])]),e._v(" "),r("CentMeter",{model:{value:e.sections.diabetes,callback:function(t){e.$set(e.sections,"diabetes",t)},expression:"sections.diabetes"}})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;f()(component,{CentMeter:r(838).default}),f()(component,{VCol:v.a,VProgressCircular:h.a,VRow:j.a})},869:function(e,t,r){"use strict";r.r(t);r(66);var n=r(19),o=r(838),c=r(689),l={name:"AngiographicCharacteristics",components:{CentMeter:o.default},data:function(){return{loading:!0,sections:{ladTargetVessel:0,rcaTargetVessel:0,ctoMean:0,ctoStd:0,scoreMean:0,scoreStd:0,taperedStump:0,calcification:0,tortuosity:0}}},created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=Object,t.t1=e.sections,t.next=4,c.a.angiographicCharacteristics();case 4:t.t2=t.sent,t.t0.assign.call(t.t0,t.t1,t.t2),e.loading=!1;case 7:case"end":return t.stop()}}),t)})))()}},d=r(61),m=r(103),f=r.n(m),v=r(955),h=r(238),j=r(677),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.loading?r("div",{attrs:{align:"center"}},[r("v-row",[r("v-col",[e.loading?r("v-progress-circular",{attrs:{indeterminate:"",color:"blue",size:50}}):e._e()],1)],1)],1):r("div",{staticClass:"container"},[r("v-row",[r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("Target Vessel LAD")])]),e._v(" "),r("CentMeter",{model:{value:e.sections.ladTargetVessel,callback:function(t){e.$set(e.sections,"ladTargetVessel",t)},expression:"sections.ladTargetVessel"}})],1),e._v(" "),r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("Target Vessel RCA")])]),e._v(" "),r("CentMeter",{model:{value:e.sections.rcaTargetVessel,callback:function(t){e.$set(e.sections,"rcaTargetVessel",t)},expression:"sections.rcaTargetVessel"}})],1)],1),e._v(" "),r("v-row",[r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("CTO Length:\n          "),r("div",{staticClass:"rate"},[e._v("\n            "+e._s(e.sections.ctoMean)+" ± "+e._s(e.sections.ctoStd)+"\n          ")])])])]),e._v(" "),r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("J-CTO Score:\n          "),r("div",{staticClass:"rate"},[e._v("\n            "+e._s(e.sections.scoreMean)+" ±\n            "+e._s(e.sections.scoreStd)+"\n          ")])])])])],1),e._v(" "),r("v-row",[r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("Tapered Stump")])]),e._v(" "),r("CentMeter",{model:{value:e.sections.taperedStump,callback:function(t){e.$set(e.sections,"taperedStump",t)},expression:"sections.taperedStump"}})],1),e._v(" "),r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("Severe Calcification")])]),e._v(" "),r("CentMeter",{model:{value:e.sections.calcification,callback:function(t){e.$set(e.sections,"calcification",t)},expression:"sections.calcification"}})],1),e._v(" "),r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("Severe Tortuosity")])]),e._v(" "),r("CentMeter",{model:{value:e.sections.tortuosity,callback:function(t){e.$set(e.sections,"tortuosity",t)},expression:"sections.tortuosity"}})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;f()(component,{CentMeter:r(838).default}),f()(component,{VCol:v.a,VProgressCircular:h.a,VRow:j.a})},870:function(e,t,r){"use strict";r.r(t);r(66);var n=r(19),o=r(689),c=r(700),l=(r(863),r(836)),d=r.n(l),m={name:"ProceduralCharacteristics",components:{DoughnutChart:c.a},data:function(){return{loading:!0,sections:{angina:0,ischemia:0,other:0},optionsVascularAccess:{responsive:!0,maintainAspectRatio:!1,legend:{position:"bottom"},plugins:{colorschemes:{scheme:"brewer.PastelTwo8"},datalabels:{formatter:function(e){return e+"%"},font:{size:20}}}},optionsSheatSize:{responsive:!0,maintainAspectRatio:!1,legend:{position:"bottom"},plugins:{colorschemes:{scheme:"brewer.PastelOne4"},datalabels:{formatter:function(e){return e+"%"},font:{size:20}}}},dataCollectionPrincipalAccessSheathSize:null,dataCollectionProceduralAccess:null}},methods:{iframeLoaded:function(){d()({log:!1},"#iframeProceduralIndication")}},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.proceduralCharacteristics();case 2:data=t.sent,Object.assign(e.sections,data),e.dataCollectionPrincipalAccessSheathSize={labels:["6F","7F","8F"],datasets:[{data:[data.principalAccessSheathSize[0],data.principalAccessSheathSize[1],data.principalAccessSheathSize[2]]}]},e.dataCollectionProceduralAccess={labels:["Bifemoral","Biradial","Radial Femoral","Single Radial","Single Femoral"],datasets:[{data:[data.bifemoralProcedures,data.biradialProcedures,data.radialFemoralProcedures,data.singleRadialProcedures,data.singleFemoralProcedures]}]},e.loading=!1;case 7:case"end":return t.stop()}}),t)})))()}},f=r(61),v=r(103),h=r.n(v),j=r(955),C=r(238),_=r(677),component=Object(f.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.loading?r("div",{attrs:{align:"center"}},[r("v-row",[r("v-col",[e.loading?r("v-progress-circular",{attrs:{indeterminate:"",color:"blue",size:50}}):e._e()],1)],1)],1):r("div",{staticClass:"container"},[r("v-row",{staticClass:"mb-12"},[r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("Procedural Indication")])]),e._v(" "),r("iframe",{attrs:{id:"iframeProceduralIndication",width:"100%",height:"10%",frameborder:"0",scrolling:"no",src:"https://prime-medicina.shinyapps.io/latam-cto-procedural-indication/"},on:{load:e.iframeLoaded}})])],1),e._v(" "),r("v-row",{staticClass:"mb-10 mt-10"},[r("v-col",{attrs:{align:"center"}},[r("p",{staticClass:"mb-10"},[r("b",[e._v("Vascular Access")])]),e._v(" "),r("doughnut-chart",{attrs:{"chart-data":e.dataCollectionProceduralAccess,options:e.optionsVascularAccess}})],1)],1),e._v(" "),r("v-row",{staticClass:"mb-12"}),e._v(" "),r("v-row",[r("v-col",{attrs:{align:"center"}},[r("p",{staticClass:"mb-10 mt-10"},[r("b",[e._v("Principal Access Sheath Size")])]),e._v(" "),r("doughnut-chart",{attrs:{"chart-data":e.dataCollectionPrincipalAccessSheathSize,options:e.optionsSheatSize}})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;h()(component,{VCol:j.a,VProgressCircular:C.a,VRow:_.a})},871:function(e,t,r){"use strict";r.r(t);r(66);var n=r(19),o=r(836),c=r.n(o),l=r(837),d=(r(696),r(689)),m={name:"EnrollmentData",components:{BarChart:l.a},data:function(){return{optionsBarChart:null,datacollectionBarChart:null,loading:!0}},methods:{iframeLoaded:function(){c()({log:!1},"#iframeTopEnrollers")},fillData:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.casesPerMonth();case 2:r=t.sent,n=r.months,o=r.quantities,e.datacollectionBarChart={labels:n,datasets:[{borderAlign:"center",label:"Number of cases",backgroundColor:"#019edf",data:o}]},e.optionsBarChart={responsive:!0,maintainAspectRatio:!1,legend:{display:!1}},e.loading=!1;case 8:case"end":return t.stop()}}),t)})))()}},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fillData();case 2:case"end":return t.stop()}}),t)})))()}},f=r(61),v=r(103),h=r.n(v),j=r(955),C=r(677),component=Object(f.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-row",[r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("Top Enrollers")])]),e._v(" "),r("iframe",{attrs:{id:"iframeTopEnrollers",width:"100%",frameborder:"0",scrolling:"no",src:"https://prime-medicina.shinyapps.io/latam-cto-top-enrollers/"},on:{load:e.iframeLoaded}})])],1),e._v(" "),r("v-row",[r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("Cases Per Month")])]),e._v(" "),e.loading?e._e():r("bar-chart",{attrs:{"chart-data":e.datacollectionBarChart,options:e.optionsBarChart}})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;h()(component,{VCol:j.a,VRow:C.a})},925:function(e,t,r){"use strict";r(861)},926:function(e,t,r){(t=r(20)(!1)).push([e.i,"p[data-v-3a318394]{font-size:xxx-large;color:#b8b8b8}",""]),e.exports=t},927:function(e,t,r){"use strict";r(864)},928:function(e,t,r){(t=r(20)(!1)).push([e.i,"p.subtitle{font-size:medium}",""]),e.exports=t},929:function(e,t,r){"use strict";r(865)},930:function(e,t,r){(t=r(20)(!1)).push([e.i,"iframe{width:1px;min-width:100%}p{font-size:x-large}.rate{color:#b8b8b8;margin-top:20px;font-size:xx-large}",""]),e.exports=t},964:function(e,t,r){"use strict";r.r(t);r(25),r(920);var n=r(868),o=r(869),c=r(870),l=(r(66),r(19)),d=r(689),m=r(837),f=(r(696),r(700)),v={name:"Outcomes",components:{BarChart:m.a,DoughnutChart:f.a},data:function(){return{anginaOutcomeDatacollection:null,anginaOutcomeOptions:null,anginaTotalCases:null,proceduralComplicationsOptions:null,proceduralComplicationsDatacollection:null,inHospitalOptions:null,inHospitalDatacollection:null,loading:!0}},methods:{fillDataAnginaOutcome:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){var r,n,o,c,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.anginaOutcome();case 2:r=t.sent,n=r.free,o=r.persistent,c=r.totalCases,l=r.anginaOutcomeLabels,e.anginaTotalCases=c,e.anginaOutcomeDatacollection={labels:l,datasets:[{borderAlign:"center",data:[n,o]}]},e.anginaOutcomeOptions={responsive:!0,maintainAspectRatio:!1,legend:{position:"bottom"},plugins:{colorschemes:{scheme:"brewer.PastelTwo8"},datalabels:{formatter:function(e){return e+"%"},font:{size:20}}}},e.loading=!1;case 11:case"end":return t.stop()}}),t)})))()},fillDataProceduralComplications:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){var r,n,o,c,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.proceduralComplications();case 2:r=t.sent,n=r.perfurations,o=r.cardiacTamponade,c=r.bleedings,l=r.newRequirementDialysis,e.proceduralComplicationsDatacollection={labels:["Perfuration","Cardiac Tamponade","Major Bleeding","New Requirement Dialysis"],datasets:[{borderAlign:"center",label:"% of procedural complications",backgroundColor:"#df7401",data:[n,o,c,l]}]},e.proceduralComplicationsOptions={plugins:{datalabels:{formatter:function(e){return e+"%"},color:"#3e3e3e",anchor:"top",clamp:!0,align:"top",font:{size:20}}},responsive:!0,maintainAspectRatio:!1,legend:{display:!1},scales:{yAxes:[{ticks:{max:100}}]}},e.loading=!1;case 10:case"end":return t.stop()}}),t)})))()},fillDataInHospitalOutcomes:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){var r,n,o,c,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.inHospitalOutcomes();case 2:r=t.sent,n=r.deaths,o=r.strokes,c=r.newMi,l=r.unplannedRevascularizations,e.inHospitalDatacollection={labels:["Death","Stroke","MI","Unplanned Revascularization"],datasets:[{borderAlign:"center",label:"% of in-hospital outcomes",backgroundColor:"#7001df",data:[n,o,c,l]}]},e.inHospitalOptions={plugins:{datalabels:{formatter:function(e){return e+"%"},color:"#3e3e3e",anchor:"top",clamp:!0,align:"top",font:{size:20}}},responsive:!0,maintainAspectRatio:!1,legend:{display:!1},scales:{yAxes:[{ticks:{max:100}}]}},e.loading=!1;case 10:case"end":return t.stop()}}),t)})))()}},mounted:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fillDataAnginaOutcome();case 2:return t.next=4,e.fillDataProceduralComplications();case 4:return t.next=6,e.fillDataInHospitalOutcomes();case 6:case"end":return t.stop()}}),t)})))()}},h=(r(927),r(61)),j=r(103),C=r.n(j),_=r(955),w=r(238),x=r(677),component=Object(h.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.loading?r("div",{attrs:{align:"center"}},[r("v-row",[r("v-col",[e.loading?r("v-progress-circular",{attrs:{indeterminate:"",color:"blue",size:50}}):e._e()],1)],1)],1):r("div",{staticClass:"container"},[r("v-row",{staticClass:"mb-10"},[r("v-col",{attrs:{align:"center"}},[r("p",{staticClass:"mb-10"},[r("b",[e._v("One Year Angina Control")])]),e._v(" "),r("p",{staticClass:"subtitle"},[e._v("\n        "+e._s(e.anginaTotalCases)+" patients with preprocedure angina CC2 or more\n        and at least one year follow up\n      ")]),e._v(" "),r("doughnut-chart",{attrs:{"chart-data":e.anginaOutcomeDatacollection,options:e.anginaOutcomeOptions}})],1)],1),e._v(" "),r("v-row",{staticClass:"mb-12"},[r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("Procedural Complications")])]),e._v(" "),e.loading?e._e():r("bar-chart",{attrs:{"chart-data":e.proceduralComplicationsDatacollection,options:e.proceduralComplicationsOptions}})],1)],1),e._v(" "),r("v-row",[r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("In-Hospital Outcomes")])]),e._v(" "),e.loading?e._e():r("bar-chart",{attrs:{"chart-data":e.inHospitalDatacollection,options:e.inHospitalOptions}})],1)],1)],1)}),[],!1,null,null,null),k=component.exports;C()(component,{VCol:_.a,VProgressCircular:w.a,VRow:x.a});var O={name:"dashboard",layout:"private",middleware:"authenticated",components:{EnrollmentData:r(871).default,ClinicalCharacteristics:n.default,AngiographicCharacteristics:o.default,ProceduralCharacteristics:c.default,ProceduralComplications:k},data:function(){return{tab:null,items:["Enrollment Data","Clinical Data","Angiographic Data","Procedural Data","Outcomes"]}},computed:{dataTab:{get:function(){return this.$route.query.tab&&(this.tab=Number.parseInt(this.$route.query.tab||""),this.$route.query.tab=null),this.tab}}}},R=(r(929),r(695)),y=r(693),P=r(956),z=r(968),A=r(966),S=r(948),D=Object(h.a)(O,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("v-tabs",{attrs:{"background-color":"#272d95",grow:"","center-active":"","show-arrows":"",dark:""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},e._l(e.items,(function(t){return r("v-tab",{key:t},[e._v("\n      "+e._s(t)+"\n    ")])})),1),e._v(" "),r("v-tabs-items",{model:{value:e.dataTab,callback:function(t){e.dataTab=t},expression:"dataTab"}},e._l(e.items,(function(t){return r("v-tab-item",{key:t},[r("v-card",[r("v-card-text",["Enrollment Data"==t?r("EnrollmentData"):e._e(),e._v(" "),"Clinical Data"==t?r("ClinicalCharacteristics"):e._e(),e._v(" "),"Angiographic Data"===t?r("AngiographicCharacteristics"):e._e(),e._v(" "),"Procedural Data"===t?r("ProceduralCharacteristics"):e._e(),e._v(" "),"Outcomes"===t?r("ProceduralComplications"):e._e()],1)],1)],1)})),1)],1)}),[],!1,null,null,null);t.default=D.exports;C()(D,{EnrollmentData:r(871).default,ClinicalCharacteristics:r(868).default,AngiographicCharacteristics:r(869).default,ProceduralCharacteristics:r(870).default}),C()(D,{VCard:R.a,VCardText:y.a,VTab:P.a,VTabItem:z.a,VTabs:A.a,VTabsItems:S.a})}}]);