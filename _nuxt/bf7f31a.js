(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{691:function(e,t,n){"use strict";n(66);var r=n(19),o=n(693),c=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(path){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o.a.GET(path));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l={projectInfo:function(){return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/project/info/notes");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},countAll:function(){return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/count");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},successfulStrategies:function(){return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/successfulStrategies");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},successfulProceduresPerYear:function(){return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/successfulProceduresPerYear");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},annualProcedures:function(){return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/annualProcedures");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},clinicalDataQuality:function(){return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/clinicalDataQuality");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},clinicalCharacteristics:function(){return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/clinicalCharacteristics");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},angiographicCharacteristics:function(){return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/angiographicCharacteristics");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},proceduralCharacteristics:function(){return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/proceduralCharacteristics");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},anginaOutcome:function(){return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/anginaOutcome");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},proceduralComplications:function(){return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/proceduralComplications");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},inHospitalOutcomes:function(){return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/inHospitalOutcomes");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},casesPerMonth:function(){return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/casesPerMonth");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()}};t.a=l},693:function(e,t,n){"use strict";(function(e){n(31),n(32),n(7),n(66);var r=n(19),o=n(841),c=n.n(o),l=n(698),d=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(path){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(l.a)(path));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(path,n){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=[],o={headers:{Authorization:n}},t.next=4,c.a.get("https://7cb5vfypm9.execute-api.us-west-2.amazonaws.com/dev/".concat(path||""),o).then((function(t){(r=t.data).body&&(r=JSON.parse(e.from(r.body).toString("utf-8")))})).catch((function(e){return console.error(e)}));case 4:return t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}();t.a={GET:d,get:m}}).call(this,n(9).Buffer)},696:function(e,t,n){"use strict";n.r(t);n(25);var r=n(2),o=n(862),c=n.n(o);n(863);r.a.use(c.a);var l={name:"CentMeter",props:{value:Number,size:{type:Number,default:180},thickness:{type:Number,default:30}},computed:{sections:{get:function(){return[{value:this.value,color:"#01ade3"},{value:100-this.value,color:"#f5f8ff"}]}}}},d=(n(933),n(61)),component=Object(d.a)(l,(function(){var e=this.$createElement,t=this._self._c||e;return t("vc-donut",{attrs:{sections:this.sections,size:this.size,thickness:this.thickness}},[t("p",[this._v(this._s(this.value.toString()+"%"))])])}),[],!1,null,"d63689a8",null);t.default=component.exports},698:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));n(66);var r,o=n(19),c=n(150),l=n(693),d=function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(path){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.currentAuthenticatedUser().then((function(u){return r=u.signInUserSession.idToken.jwtToken})).catch((function(e){return console.log(e)}));case 2:return e.next=4,l.a.get(path,r);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},702:function(e,t,n){"use strict";var r=n(701);t.a={extends:r.b,mixins:[r.d.reactiveProp],props:["chartData","options"],mounted:function(){this.renderChart(this.chartData,this.options)}}},839:function(e,t,n){"use strict";var r=n(701);t.a={extends:r.a,mixins:[r.d.reactiveProp],props:["chartData","options"],mounted:function(){this.renderChart(this.chartData,this.options)}}},864:function(e,t,n){var content=n(934);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(21).default)("31443cf0",content,!0,{sourceMap:!1})},865:function(e,t,n){var map={"./af":703,"./af.js":703,"./ar":704,"./ar-dz":705,"./ar-dz.js":705,"./ar-kw":706,"./ar-kw.js":706,"./ar-ly":707,"./ar-ly.js":707,"./ar-ma":708,"./ar-ma.js":708,"./ar-sa":709,"./ar-sa.js":709,"./ar-tn":710,"./ar-tn.js":710,"./ar.js":704,"./az":711,"./az.js":711,"./be":712,"./be.js":712,"./bg":713,"./bg.js":713,"./bm":714,"./bm.js":714,"./bn":715,"./bn-bd":716,"./bn-bd.js":716,"./bn.js":715,"./bo":717,"./bo.js":717,"./br":718,"./br.js":718,"./bs":719,"./bs.js":719,"./ca":720,"./ca.js":720,"./cs":721,"./cs.js":721,"./cv":722,"./cv.js":722,"./cy":723,"./cy.js":723,"./da":724,"./da.js":724,"./de":725,"./de-at":726,"./de-at.js":726,"./de-ch":727,"./de-ch.js":727,"./de.js":725,"./dv":728,"./dv.js":728,"./el":729,"./el.js":729,"./en-au":730,"./en-au.js":730,"./en-ca":731,"./en-ca.js":731,"./en-gb":732,"./en-gb.js":732,"./en-ie":733,"./en-ie.js":733,"./en-il":734,"./en-il.js":734,"./en-in":735,"./en-in.js":735,"./en-nz":736,"./en-nz.js":736,"./en-sg":737,"./en-sg.js":737,"./eo":738,"./eo.js":738,"./es":739,"./es-do":740,"./es-do.js":740,"./es-mx":741,"./es-mx.js":741,"./es-us":742,"./es-us.js":742,"./es.js":739,"./et":743,"./et.js":743,"./eu":744,"./eu.js":744,"./fa":745,"./fa.js":745,"./fi":746,"./fi.js":746,"./fil":747,"./fil.js":747,"./fo":748,"./fo.js":748,"./fr":749,"./fr-ca":750,"./fr-ca.js":750,"./fr-ch":751,"./fr-ch.js":751,"./fr.js":749,"./fy":752,"./fy.js":752,"./ga":753,"./ga.js":753,"./gd":754,"./gd.js":754,"./gl":755,"./gl.js":755,"./gom-deva":756,"./gom-deva.js":756,"./gom-latn":757,"./gom-latn.js":757,"./gu":758,"./gu.js":758,"./he":759,"./he.js":759,"./hi":760,"./hi.js":760,"./hr":761,"./hr.js":761,"./hu":762,"./hu.js":762,"./hy-am":763,"./hy-am.js":763,"./id":764,"./id.js":764,"./is":765,"./is.js":765,"./it":766,"./it-ch":767,"./it-ch.js":767,"./it.js":766,"./ja":768,"./ja.js":768,"./jv":769,"./jv.js":769,"./ka":770,"./ka.js":770,"./kk":771,"./kk.js":771,"./km":772,"./km.js":772,"./kn":773,"./kn.js":773,"./ko":774,"./ko.js":774,"./ku":775,"./ku.js":775,"./ky":776,"./ky.js":776,"./lb":777,"./lb.js":777,"./lo":778,"./lo.js":778,"./lt":779,"./lt.js":779,"./lv":780,"./lv.js":780,"./me":781,"./me.js":781,"./mi":782,"./mi.js":782,"./mk":783,"./mk.js":783,"./ml":784,"./ml.js":784,"./mn":785,"./mn.js":785,"./mr":786,"./mr.js":786,"./ms":787,"./ms-my":788,"./ms-my.js":788,"./ms.js":787,"./mt":789,"./mt.js":789,"./my":790,"./my.js":790,"./nb":791,"./nb.js":791,"./ne":792,"./ne.js":792,"./nl":793,"./nl-be":794,"./nl-be.js":794,"./nl.js":793,"./nn":795,"./nn.js":795,"./oc-lnc":796,"./oc-lnc.js":796,"./pa-in":797,"./pa-in.js":797,"./pl":798,"./pl.js":798,"./pt":799,"./pt-br":800,"./pt-br.js":800,"./pt.js":799,"./ro":801,"./ro.js":801,"./ru":802,"./ru.js":802,"./sd":803,"./sd.js":803,"./se":804,"./se.js":804,"./si":805,"./si.js":805,"./sk":806,"./sk.js":806,"./sl":807,"./sl.js":807,"./sq":808,"./sq.js":808,"./sr":809,"./sr-cyrl":810,"./sr-cyrl.js":810,"./sr.js":809,"./ss":811,"./ss.js":811,"./sv":812,"./sv.js":812,"./sw":813,"./sw.js":813,"./ta":814,"./ta.js":814,"./te":815,"./te.js":815,"./tet":816,"./tet.js":816,"./tg":817,"./tg.js":817,"./th":818,"./th.js":818,"./tk":819,"./tk.js":819,"./tl-ph":820,"./tl-ph.js":820,"./tlh":821,"./tlh.js":821,"./tr":822,"./tr.js":822,"./tzl":823,"./tzl.js":823,"./tzm":824,"./tzm-latn":825,"./tzm-latn.js":825,"./tzm.js":824,"./ug-cn":826,"./ug-cn.js":826,"./uk":827,"./uk.js":827,"./ur":828,"./ur.js":828,"./uz":829,"./uz-latn":830,"./uz-latn.js":830,"./uz.js":829,"./vi":831,"./vi.js":831,"./x-pseudo":832,"./x-pseudo.js":832,"./yo":833,"./yo.js":833,"./zh-cn":834,"./zh-cn.js":834,"./zh-hk":835,"./zh-hk.js":835,"./zh-mo":836,"./zh-mo.js":836,"./zh-tw":837,"./zh-tw.js":837};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=o,e.exports=r,r.id=865},867:function(e,t,n){var content=n(936);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(21).default)("b5fc1840",content,!0,{sourceMap:!1})},868:function(e,t,n){var content=n(938);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(21).default)("1746da28",content,!0,{sourceMap:!1})},869:function(e,t,n){var content=n(944);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(21).default)("66dbdb1a",content,!0,{sourceMap:!1})},872:function(e,t,n){"use strict";n.r(t);n(66);var r=n(19),o=n(696),c=n(691),l={name:"ClinicalCharacteristics",components:{CentMeter:o.default},data:function(){return{loading:!0,sections:{ageMean:0,ageStd:0,males:0,whites:0,hypertensives:0,previousPci:0,previousCtoAttempt:0,diabetes:0,ejectionFractionMean:0,ejectionFractionStd:0}}},created:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=Object,t.t1=e.sections,t.next=4,c.a.clinicalCharacteristics();case 4:t.t2=t.sent,t.t0.assign.call(t.t0,t.t1,t.t2),e.loading=!1;case 7:case"end":return t.stop()}}),t)})))()}},d=n(61),m=n(103),v=n.n(m),f=n(969),h=n(238),j=n(680),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.loading?n("div",{attrs:{align:"center"}},[n("v-row",[n("v-col",[e.loading?n("v-progress-circular",{attrs:{indeterminate:"",color:"blue",size:50}}):e._e()],1)],1)],1):n("div",{staticClass:"container"},[n("v-row",[n("v-col",{attrs:{align:"center"}},[n("p",[n("b",[e._v("Average Age:\n          "),n("div",{staticClass:"rate"},[e._v("\n            "+e._s(e.sections.ageMean)+" ± "+e._s(e.sections.ageStd)+"\n          ")])])])]),e._v(" "),n("v-col",{attrs:{align:"center"}},[n("p",[n("b",[e._v("Ejection Fraction:\n          "),n("div",{staticClass:"rate"},[e._v("\n            "+e._s(e.sections.ejectionFractionMean)+" ±\n            "+e._s(e.sections.ejectionFractionStd)+"\n          ")])])])])],1),e._v(" "),n("v-row",[n("v-col",{attrs:{align:"center"}},[n("p",[n("b",[e._v("Male Gender")])]),e._v(" "),n("CentMeter",{model:{value:e.sections.males,callback:function(t){e.$set(e.sections,"males",t)},expression:"sections.males"}})],1),e._v(" "),n("v-col",{attrs:{align:"center"}},[n("p",[n("b",[e._v("White Race")])]),e._v(" "),n("CentMeter",{model:{value:e.sections.whites,callback:function(t){e.$set(e.sections,"whites",t)},expression:"sections.whites"}})],1),e._v(" "),n("v-col",{attrs:{align:"center"}},[n("p",[n("b",[e._v("Hypertension")])]),e._v(" "),n("CentMeter",{model:{value:e.sections.hypertensives,callback:function(t){e.$set(e.sections,"hypertensives",t)},expression:"sections.hypertensives"}})],1)],1),e._v(" "),n("v-row",[n("v-col",{attrs:{align:"center"}},[n("p",[n("b",[e._v("Previous PCI")])]),e._v(" "),n("CentMeter",{model:{value:e.sections.previousPci,callback:function(t){e.$set(e.sections,"previousPci",t)},expression:"sections.previousPci"}})],1),e._v(" "),n("v-col",{attrs:{align:"center"}},[n("p",[n("b",[e._v("Previous CTO Attempt")])]),e._v(" "),n("CentMeter",{model:{value:e.sections.previousCtoAttempt,callback:function(t){e.$set(e.sections,"previousCtoAttempt",t)},expression:"sections.previousCtoAttempt"}})],1),e._v(" "),n("v-col",{attrs:{align:"center"}},[n("p",[n("b",[e._v("Diabetes")])]),e._v(" "),n("CentMeter",{model:{value:e.sections.diabetes,callback:function(t){e.$set(e.sections,"diabetes",t)},expression:"sections.diabetes"}})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;v()(component,{CentMeter:n(696).default}),v()(component,{VCol:f.a,VProgressCircular:h.a,VRow:j.a})},873:function(e,t,n){"use strict";n.r(t);n(66);var r=n(19),o=n(696),c=n(691),l={name:"AngiographicCharacteristics",components:{CentMeter:o.default},data:function(){return{loading:!0,sections:{ladTargetVessel:0,rcaTargetVessel:0,ctoMean:0,ctoStd:0,scoreMean:0,scoreStd:0,taperedStump:0,calcification:0,tortuosity:0}}},created:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=Object,t.t1=e.sections,t.next=4,c.a.angiographicCharacteristics();case 4:t.t2=t.sent,t.t0.assign.call(t.t0,t.t1,t.t2),e.loading=!1;case 7:case"end":return t.stop()}}),t)})))()}},d=n(61),m=n(103),v=n.n(m),f=n(969),h=n(238),j=n(680),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.loading?n("div",{attrs:{align:"center"}},[n("v-row",[n("v-col",[e.loading?n("v-progress-circular",{attrs:{indeterminate:"",color:"blue",size:50}}):e._e()],1)],1)],1):n("div",{staticClass:"container"},[n("v-row",[n("v-col",{attrs:{align:"center"}},[n("p",[n("b",[e._v("Target Vessel LAD")])]),e._v(" "),n("CentMeter",{model:{value:e.sections.ladTargetVessel,callback:function(t){e.$set(e.sections,"ladTargetVessel",t)},expression:"sections.ladTargetVessel"}})],1),e._v(" "),n("v-col",{attrs:{align:"center"}},[n("p",[n("b",[e._v("Target Vessel RCA")])]),e._v(" "),n("CentMeter",{model:{value:e.sections.rcaTargetVessel,callback:function(t){e.$set(e.sections,"rcaTargetVessel",t)},expression:"sections.rcaTargetVessel"}})],1)],1),e._v(" "),n("v-row",[n("v-col",{attrs:{align:"center"}},[n("p",[n("b",[e._v("CTO Length:\n          "),n("div",{staticClass:"rate"},[e._v("\n            "+e._s(e.sections.ctoMean)+" ± "+e._s(e.sections.ctoStd)+"\n          ")])])])]),e._v(" "),n("v-col",{attrs:{align:"center"}},[n("p",[n("b",[e._v("J-CTO Score:\n          "),n("div",{staticClass:"rate"},[e._v("\n            "+e._s(e.sections.scoreMean)+" ±\n            "+e._s(e.sections.scoreStd)+"\n          ")])])])])],1),e._v(" "),n("v-row",[n("v-col",{attrs:{align:"center"}},[n("p",[n("b",[e._v("Tapered Stump")])]),e._v(" "),n("CentMeter",{model:{value:e.sections.taperedStump,callback:function(t){e.$set(e.sections,"taperedStump",t)},expression:"sections.taperedStump"}})],1),e._v(" "),n("v-col",{attrs:{align:"center"}},[n("p",[n("b",[e._v("Severe Calcification")])]),e._v(" "),n("CentMeter",{model:{value:e.sections.calcification,callback:function(t){e.$set(e.sections,"calcification",t)},expression:"sections.calcification"}})],1),e._v(" "),n("v-col",{attrs:{align:"center"}},[n("p",[n("b",[e._v("Severe Tortuosity")])]),e._v(" "),n("CentMeter",{model:{value:e.sections.tortuosity,callback:function(t){e.$set(e.sections,"tortuosity",t)},expression:"sections.tortuosity"}})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;v()(component,{CentMeter:n(696).default}),v()(component,{VCol:f.a,VProgressCircular:h.a,VRow:j.a})},874:function(e,t,n){"use strict";n.r(t);n(66);var r=n(19),o=n(691),c=n(702),l=(n(866),n(838)),d=n.n(l),m={name:"ProceduralCharacteristics",components:{CentMeter:n(696).default,DoughnutChart:c.a},data:function(){return{loading:!0,sections:{angina:0,ischemia:0,other:0},optionsVascularAccess:{responsive:!0,maintainAspectRatio:!1,legend:{position:"bottom"},plugins:{colorschemes:{scheme:"brewer.PastelTwo8"},datalabels:{formatter:function(e){return e+"%"},font:{size:20}}}},optionsSheatSize:{responsive:!0,maintainAspectRatio:!1,legend:{position:"bottom"},plugins:{colorschemes:{scheme:"brewer.PastelOne4"},datalabels:{formatter:function(e){return e+"%"},font:{size:20}}}},optionsMicrocatheterUse:{responsive:!0,maintainAspectRatio:!1,legend:{position:"bottom"},plugins:{colorschemes:{scheme:"brewer.PastelTwo8"},datalabels:{formatter:function(e){return e+"%"},font:{size:20}}}},optionsMicrocatheterNumber:{responsive:!0,maintainAspectRatio:!1,legend:{position:"bottom"},plugins:{colorschemes:{scheme:"brewer.PastelTwo8"},datalabels:{formatter:function(e){return e+"%"},font:{size:20}}}},dataCollectionPrincipalAccessSheathSize:null,dataCollectionProceduralAccess:null,dataCollectionMicrocatheterUse:null,dataCollectionMicrocatheterNumber:null}},methods:{iframeLoaded:function(){d()({log:!1},"#iframeProceduralIndication")}},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.proceduralCharacteristics();case 2:data=t.sent,Object.assign(e.sections,data),e.dataCollectionPrincipalAccessSheathSize={labels:["6F","7F","8F"],datasets:[{data:[data.principalAccessSheathSize[0],data.principalAccessSheathSize[1],data.principalAccessSheathSize[2]]}]},e.dataCollectionProceduralAccess={labels:["Bifemoral","Biradial","Radial Femoral","Single Radial","Single Femoral"],datasets:[{data:[data.bifemoralProcedures,data.biradialProcedures,data.radialFemoralProcedures,data.singleRadialProcedures,data.singleFemoralProcedures]}]},e.dataCollectionMicrocatheterUse=data.microcatheterUse,e.dataCollectionMicrocatheterNumber={labels:["1","2","3",">3"],datasets:[{data:[data.microcatheterNumber[0],data.microcatheterNumber[1],data.microcatheterNumber[2],data.microcatheterNumber[3]]}]},e.loading=!1;case 9:case"end":return t.stop()}}),t)})))()}},v=n(61),f=n(103),h=n.n(f),j=n(969),_=n(238),C=n(680),component=Object(v.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.loading?n("div",{attrs:{align:"center"}},[n("v-row",[n("v-col",[e.loading?n("v-progress-circular",{attrs:{indeterminate:"",color:"blue",size:50}}):e._e()],1)],1)],1):n("div",{staticClass:"container"},[n("v-row",{staticClass:"mb-12"},[n("v-col",{attrs:{align:"center"}},[n("p",[n("b",[e._v("Procedural Indication")])]),e._v(" "),n("iframe",{attrs:{id:"iframeProceduralIndication",width:"100%",height:"10%",frameborder:"0",scrolling:"no",src:"https://prime-medicina.shinyapps.io/latam-cto-procedural-indication/"},on:{load:e.iframeLoaded}})])],1),e._v(" "),n("v-row",{staticClass:"mb-10 mt-10"},[n("v-col",{attrs:{align:"center"}},[n("p",{staticClass:"mb-10"},[n("b",[e._v("Vascular Access")])]),e._v(" "),n("doughnut-chart",{attrs:{"chart-data":e.dataCollectionProceduralAccess,options:e.optionsVascularAccess}})],1)],1),e._v(" "),n("v-row",{staticClass:"mb-12"},[n("v-col",{attrs:{align:"center"}},[n("p",{staticClass:"mb-10 mt-10"},[n("b",[e._v("Principal Access Sheath Size")])]),e._v(" "),n("doughnut-chart",{attrs:{"chart-data":e.dataCollectionPrincipalAccessSheathSize,options:e.optionsSheatSize}})],1)],1),e._v(" "),n("v-row",{staticClass:"mb-12"},[n("v-col",{attrs:{align:"center"}},[n("p",{staticClass:"mb-10 mt-10"},[n("b",[e._v("Microcatheter Use")])]),e._v(" "),n("CentMeter",{attrs:{size:350,thickness:50},model:{value:e.dataCollectionMicrocatheterUse,callback:function(t){e.dataCollectionMicrocatheterUse=t},expression:"dataCollectionMicrocatheterUse"}})],1)],1),e._v(" "),n("v-row",[n("v-col",{attrs:{align:"center"}},[n("p",{staticClass:"mb-10 mt-10"},[n("b",[e._v("Microcatheter Number")])]),e._v(" "),n("doughnut-chart",{attrs:{"chart-data":e.dataCollectionMicrocatheterNumber,options:e.optionsMicrocatheterNumber}})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;h()(component,{CentMeter:n(696).default}),h()(component,{VCol:j.a,VProgressCircular:_.a,VRow:C.a})},875:function(e,t,n){"use strict";n.r(t);n(66);var r=n(19),o=n(838),c=n.n(o),l=n(839),d=(n(697),n(691)),m={name:"EnrollmentData",components:{BarChart:l.a},data:function(){return{optionsBarChart:null,datacollectionBarChart:null,loading:!0}},methods:{iframeLoaded:function(){c()({log:!1},"#iframeTopEnrollers")},fillData:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.casesPerMonth();case 2:n=t.sent,r=n.months,o=n.quantities,e.datacollectionBarChart={labels:r,datasets:[{borderAlign:"center",label:"Number of cases",backgroundColor:"#019edf",data:o}]},e.optionsBarChart={responsive:!0,maintainAspectRatio:!1,legend:{display:!1}},e.loading=!1;case 8:case"end":return t.stop()}}),t)})))()}},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fillData();case 2:case"end":return t.stop()}}),t)})))()}},v=n(61),f=n(103),h=n.n(f),j=n(969),_=n(238),C=n(680),component=Object(v.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.loading?n("div",{attrs:{align:"center"}},[n("v-row",[n("v-col",[e.loading?n("v-progress-circular",{attrs:{indeterminate:"",color:"blue",size:50}}):e._e()],1)],1)],1):n("div",{staticClass:"container"},[n("v-row",[n("v-col",{attrs:{align:"center"}},[n("p",[n("b",[e._v("Top Enrollers")])]),e._v(" "),n("iframe",{attrs:{id:"iframeTopEnrollers",width:"100%",frameborder:"0",scrolling:"no",src:"https://prime-medicina.shinyapps.io/latam-cto-top-enrollers/"},on:{load:e.iframeLoaded}})])],1),e._v(" "),n("v-row",[n("v-col",{attrs:{align:"center"}},[n("p",[n("b",[e._v("Cases Per Month")])]),e._v(" "),e.loading?e._e():n("bar-chart",{attrs:{"chart-data":e.datacollectionBarChart,options:e.optionsBarChart}})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;h()(component,{VCol:j.a,VProgressCircular:_.a,VRow:C.a})},876:function(e,t,n){"use strict";n.r(t);n(66);var r=n(19),o=n(696),c=n(691),l=(n(697),{name:"ClinicalDataQuality",components:{ScoreMeter:n(878).default,CentMeter:o.default},data:function(){return{dialog:!1,loading:!0,labels:["Procedure Date","Sex","Diabetes","Dyslipidemia","Hypertension","Active Smoking","Previous PCI","Angina Status","Procedure Indication"],sections:{missingProcedureDate:0,missingSex:0,missingDiabetes:0,missingDyslipidemia:0,missingHypertesion:0,missingActiveSmoking:0,missingPreviousPci:0,missingAnginaStatus:0,missingProcedureIndication:0}}},created:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=Object,t.t1=e.sections,t.next=4,c.a.clinicalDataQuality();case 4:t.t2=t.sent,t.t0.assign.call(t.t0,t.t1,t.t2),console.log(e.sections),e.loading=!1;case 8:case"end":return t.stop()}}),t)})))()}}),d=n(61),m=n(103),v=n.n(m),f=n(252),h=n(699),j=n(692),_=n(969),C=n(970),x=n(239),w=n(238),k=n(680),y=n(681),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.loading?n("div",{attrs:{align:"center"}},[n("v-row",[n("v-col",[e.loading?n("v-progress-circular",{attrs:{indeterminate:"",color:"blue",size:50}}):e._e()],1)],1)],1):n("div",{staticClass:"container"},[n("v-row",[n("v-col",{attrs:{align:"center"}},[n("p",[n("b",[e._v("Core Clinical Data")])])])],1),e._v(" "),n("v-row",[n("v-col",{attrs:{align:"center"}},[n("ScoreMeter",{attrs:{size:250,thickness:40,icon:""},model:{value:e.sections,callback:function(t){e.sections=t},expression:"sections"}})],1)],1),e._v(" "),n("v-dialog",{model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"primary white--text"},[e._v("\n        Missing Information\n        "),n("v-spacer"),e._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(t){e.dialog=!1}}},[n("v-icon",{staticClass:"white--text"},[e._v("mdi-close")])],1)],1),e._v(" "),n("v-card-text",[n("v-row",[n("v-col",{attrs:{align:"center"}},[n("p",[n("b",[e._v(e._s(e.labels[0]))])]),e._v(" "),n("CentMeter",{model:{value:e.sections.missingProcedureDate,callback:function(t){e.$set(e.sections,"missingProcedureDate",t)},expression:"sections.missingProcedureDate"}})],1),e._v(" "),n("v-col",{attrs:{align:"center"}},[n("p",[n("b",[e._v(e._s(e.labels[1]))])]),e._v(" "),n("CentMeter",{model:{value:e.sections.missingSex,callback:function(t){e.$set(e.sections,"missingSex",t)},expression:"sections.missingSex"}})],1),e._v(" "),n("v-col",{attrs:{align:"center"}},[n("p",[n("b",[e._v(e._s(e.labels[2]))])]),e._v(" "),n("CentMeter",{model:{value:e.sections.missingDiabetes,callback:function(t){e.$set(e.sections,"missingDiabetes",t)},expression:"sections.missingDiabetes"}})],1)],1),e._v(" "),n("v-row",[n("v-col",{attrs:{align:"center"}},[n("p",[n("b",[e._v(e._s(e.labels[3]))])]),e._v(" "),n("CentMeter",{model:{value:e.sections.missingDyslipidemia,callback:function(t){e.$set(e.sections,"missingDyslipidemia",t)},expression:"sections.missingDyslipidemia"}})],1),e._v(" "),n("v-col",{attrs:{align:"center"}},[n("p",[n("b",[e._v(e._s(e.labels[4]))])]),e._v(" "),n("CentMeter",{model:{value:e.sections.missingHypertesion,callback:function(t){e.$set(e.sections,"missingHypertesion",t)},expression:"sections.missingHypertesion"}})],1),e._v(" "),n("v-col",{attrs:{align:"center"}},[n("p",[n("b",[e._v(e._s(e.labels[5]))])]),e._v(" "),n("CentMeter",{model:{value:e.sections.missingActiveSmoking,callback:function(t){e.$set(e.sections,"missingActiveSmoking",t)},expression:"sections.missingActiveSmoking"}})],1)],1),e._v(" "),n("v-row",[n("v-col",{attrs:{align:"center"}},[n("p",[n("b",[e._v(e._s(e.labels[6]))])]),e._v(" "),n("CentMeter",{model:{value:e.sections.missingPreviousPci,callback:function(t){e.$set(e.sections,"missingPreviousPci",t)},expression:"sections.missingPreviousPci"}})],1),e._v(" "),n("v-col",{attrs:{align:"center"}},[n("p",[n("b",[e._v(e._s(e.labels[7]))])]),e._v(" "),n("CentMeter",{model:{value:e.sections.missingAnginaStatus,callback:function(t){e.$set(e.sections,"missingAnginaStatus",t)},expression:"sections.missingAnginaStatus"}})],1),e._v(" "),n("v-col",{attrs:{align:"center"}},[n("p",[n("b",[e._v(e._s(e.labels[8]))])]),e._v(" "),n("CentMeter",{model:{value:e.sections.missingProcedureIndication,callback:function(t){e.$set(e.sections,"missingProcedureIndication",t)},expression:"sections.missingProcedureIndication"}})],1)],1)],1)],1)],1)],1)}),[],!1,null,"1ad318fc",null);t.default=component.exports;v()(component,{ScoreMeter:n(878).default,CentMeter:n(696).default}),v()(component,{VBtn:f.a,VCard:h.a,VCardText:j.a,VCardTitle:j.b,VCol:_.a,VDialog:C.a,VIcon:x.a,VProgressCircular:w.a,VRow:k.a,VSpacer:y.a})},878:function(e,t,n){"use strict";n.r(t);n(13),n(7),n(255),n(25);var r=n(2),o=n(862),c=n.n(o);n(863);r.a.use(c.a);var l={name:"ScoreMeter",props:{value:Object,size:{type:Number,default:180},thickness:{type:Number,default:30}},data:function(){return{score:0}},methods:{openDialog:function(){this.$parent.dialog=!0},getColor:function(){return 0===this.score?"#74d498":this.score<1.5?"#f8f455":this.score>1.5?"#ff6969":void 0}},computed:{sections:{get:function(){var e=this,t=Object.values(this.value);return t.forEach((function(n){e.score+=Number(n)/100*(10/t.length)})),[{value:10-this.score,color:this.getColor(),label:"Max Score is 10"},{value:this.score,color:"#f5f8ff",label:"Max Score is 10"}]}}}},d=(n(937),n(61)),component=Object(d.a)(l,(function(){var e=this.$createElement,t=this._self._c||e;return t("vc-donut",{attrs:{sections:this.sections,size:this.size,thickness:this.thickness,total:10},on:{"section-click":this.openDialog}},[t("p",{staticClass:"score",on:{click:this.openDialog}},[this._v("\n    "+this._s((10-this.score).toFixed(1))+"\n  ")])])}),[],!1,null,null,null);t.default=component.exports},933:function(e,t,n){"use strict";n(864)},934:function(e,t,n){(t=n(20)(!1)).push([e.i,"p[data-v-d63689a8]{font-size:xxx-large;color:#b8b8b8}",""]),e.exports=t},935:function(e,t,n){"use strict";n(867)},936:function(e,t,n){(t=n(20)(!1)).push([e.i,"p.subtitle{font-size:medium}",""]),e.exports=t},937:function(e,t,n){"use strict";n(868)},938:function(e,t,n){var r=n(20),o=n(939),c=n(940);t=r(!1);var l=o(c);t.push([e.i,"p.score{width:100px;height:100px;font-size:xx-large;padding-top:35px;background-image:url("+l+");background-position:50%;background-repeat:no-repeat;background-size:cover}",""]),e.exports=t},940:function(e,t,n){e.exports=n.p+"img/5-point-star.285ab3b.png"},943:function(e,t,n){"use strict";n(869)},944:function(e,t,n){(t=n(20)(!1)).push([e.i,"iframe{width:1px;min-width:100%}p{font-size:x-large}.rate{color:#b8b8b8;margin-top:20px;font-size:xx-large}",""]),e.exports=t},979:function(e,t,n){"use strict";n.r(t);n(25),n(930);var r=n(872),o=n(873),c=n(874),l=(n(66),n(19)),d=n(691),m=n(839),v=(n(697),n(702)),f={name:"Outcomes",components:{BarChart:m.a,DoughnutChart:v.a},data:function(){return{anginaOutcomeDatacollection:null,anginaOutcomeOptions:null,anginaTotalCases:null,proceduralComplicationsOptions:null,proceduralComplicationsDatacollection:null,inHospitalOptions:null,inHospitalDatacollection:null,loading:!0}},methods:{fillDataAnginaOutcome:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){var n,r,o,c,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.anginaOutcome();case 2:n=t.sent,r=n.free,o=n.persistent,c=n.totalCases,l=n.anginaOutcomeLabels,e.anginaTotalCases=c,e.anginaOutcomeDatacollection={labels:l,datasets:[{borderAlign:"center",data:[r,o]}]},e.anginaOutcomeOptions={responsive:!0,maintainAspectRatio:!1,legend:{position:"bottom"},plugins:{colorschemes:{scheme:"brewer.PastelTwo8"},datalabels:{formatter:function(e){return e+"%"},font:{size:20}}}},e.loading=!1;case 11:case"end":return t.stop()}}),t)})))()},fillDataProceduralComplications:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){var n,r,o,c,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.proceduralComplications();case 2:n=t.sent,r=n.perfurations,o=n.cardiacTamponade,c=n.bleedings,l=n.newRequirementDialysis,e.proceduralComplicationsDatacollection={labels:["Perfuration","Cardiac Tamponade","Major Bleeding","New Requirement Dialysis"],datasets:[{borderAlign:"center",label:"% of procedural complications",backgroundColor:"#df7401",data:[r,o,c,l]}]},e.proceduralComplicationsOptions={plugins:{datalabels:{formatter:function(e){return e+"%"},color:"#3e3e3e",anchor:"top",clamp:!0,align:"top",font:{size:20}}},responsive:!0,maintainAspectRatio:!1,legend:{display:!1},scales:{yAxes:[{ticks:{max:100}}]}},e.loading=!1;case 10:case"end":return t.stop()}}),t)})))()},fillDataInHospitalOutcomes:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){var n,r,o,c,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.inHospitalOutcomes();case 2:n=t.sent,r=n.deaths,o=n.strokes,c=n.newMi,l=n.unplannedRevascularizations,e.inHospitalDatacollection={labels:["Death","Stroke","MI","Unplanned Revascularization"],datasets:[{borderAlign:"center",label:"% of in-hospital outcomes",backgroundColor:"#7001df",data:[r,o,c,l]}]},e.inHospitalOptions={plugins:{datalabels:{formatter:function(e){return e+"%"},color:"#3e3e3e",anchor:"top",clamp:!0,align:"top",font:{size:20}}},responsive:!0,maintainAspectRatio:!1,legend:{display:!1},scales:{yAxes:[{ticks:{max:100}}]}},e.loading=!1;case 10:case"end":return t.stop()}}),t)})))()}},mounted:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fillDataAnginaOutcome();case 2:return t.next=4,e.fillDataProceduralComplications();case 4:return t.next=6,e.fillDataInHospitalOutcomes();case 6:case"end":return t.stop()}}),t)})))()}},h=(n(935),n(61)),j=n(103),_=n.n(j),C=n(969),x=n(238),w=n(680),component=Object(h.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.loading?n("div",{attrs:{align:"center"}},[n("v-row",[n("v-col",[e.loading?n("v-progress-circular",{attrs:{indeterminate:"",color:"blue",size:50}}):e._e()],1)],1)],1):n("div",{staticClass:"container"},[n("v-row",{staticClass:"mb-10"},[n("v-col",{attrs:{align:"center"}},[n("p",{staticClass:"mb-10"},[n("b",[e._v("One Year Angina Control")])]),e._v(" "),n("p",{staticClass:"subtitle"},[e._v("\n        "+e._s(e.anginaTotalCases)+" patients with preprocedure angina CC2 or more\n        and at least one year follow up\n      ")]),e._v(" "),n("doughnut-chart",{attrs:{"chart-data":e.anginaOutcomeDatacollection,options:e.anginaOutcomeOptions}})],1)],1),e._v(" "),n("v-row",{staticClass:"mb-12"},[n("v-col",{attrs:{align:"center"}},[n("p",[n("b",[e._v("Procedural Complications")])]),e._v(" "),e.loading?e._e():n("bar-chart",{attrs:{"chart-data":e.proceduralComplicationsDatacollection,options:e.proceduralComplicationsOptions}})],1)],1),e._v(" "),n("v-row",[n("v-col",{attrs:{align:"center"}},[n("p",[n("b",[e._v("In-Hospital Outcomes")])]),e._v(" "),e.loading?e._e():n("bar-chart",{attrs:{"chart-data":e.inHospitalDatacollection,options:e.inHospitalOptions}})],1)],1)],1)}),[],!1,null,null,null),k=component.exports;_()(component,{VCol:C.a,VProgressCircular:x.a,VRow:w.a});var y=n(875),O={name:"dashboard",layout:"private",middleware:"authenticated",components:{ClinicalDataQuality:n(876).default,EnrollmentData:y.default,ClinicalCharacteristics:r.default,AngiographicCharacteristics:o.default,ProceduralCharacteristics:c.default,ProceduralComplications:k},data:function(){return{tab:null,items:["Data Quality","Enrollment Data","Clinical Data","Angiographic Data","Procedural Data","Outcomes"]}},computed:{dataTab:{get:function(){return this.$route.query.tab&&(this.tab=Number.parseInt(this.$route.query.tab||""),this.$route.query.tab=null),this.tab}}}},P=(n(943),n(699)),R=n(692),D=n(971),M=n(983),S=n(981),z=n(962),A=Object(h.a)(O,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-tabs",{attrs:{"background-color":"#272d95",grow:"","center-active":"","show-arrows":"",dark:""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},e._l(e.items,(function(t){return n("v-tab",{key:t},[e._v("\n      "+e._s(t)+"\n    ")])})),1),e._v(" "),n("v-tabs-items",{model:{value:e.dataTab,callback:function(t){e.dataTab=t},expression:"dataTab"}},e._l(e.items,(function(t){return n("v-tab-item",{key:t},[n("v-card",[n("v-card-text",["Data Quality"==t?n("ClinicalDataQuality"):e._e(),e._v(" "),"Enrollment Data"==t?n("EnrollmentData"):e._e(),e._v(" "),"Clinical Data"==t?n("ClinicalCharacteristics"):e._e(),e._v(" "),"Angiographic Data"===t?n("AngiographicCharacteristics"):e._e(),e._v(" "),"Procedural Data"===t?n("ProceduralCharacteristics"):e._e(),e._v(" "),"Outcomes"===t?n("ProceduralComplications"):e._e()],1)],1)],1)})),1)],1)}),[],!1,null,null,null);t.default=A.exports;_()(A,{ClinicalDataQuality:n(876).default,EnrollmentData:n(875).default,ClinicalCharacteristics:n(872).default,AngiographicCharacteristics:n(873).default,ProceduralCharacteristics:n(874).default}),_()(A,{VCard:P.a,VCardText:R.a,VTab:D.a,VTabItem:M.a,VTabs:S.a,VTabsItems:z.a})}}]);