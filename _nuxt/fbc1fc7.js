(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{510:function(e,t,r){"use strict";(function(e){r(29),r(30),r(7),r(59);var n=r(17),o=r(658),c=r.n(o),l=r(514),d=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(path){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(l.a)(path));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(path,r){var n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=[],o={headers:{Authorization:r}},t.next=4,c.a.get("https://7cb5vfypm9.execute-api.us-west-2.amazonaws.com/dev/".concat(path||""),o).then((function(t){(n=t.data).body&&(n=JSON.parse(e.from(n.body).toString("utf-8")))})).catch((function(e){return console.error(e)}));case 4:return t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}();t.a={GET:d,get:m}}).call(this,r(14).Buffer)},511:function(e,t,r){"use strict";r(59);var n=r(17),o=r(510),c=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(path){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o.a.GET(path));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l={countAll:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/count");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},successfulStrategies:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/successfulStrategies");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},successfulProceduresPerYear:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/successfulProceduresPerYear");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},annualProcedures:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/annualProcedures");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},clinicalCharacteristics:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/clinicalCharacteristics");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},angiographicCharacteristics:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/angiographicCharacteristics");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},proceduralCharacteristics:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/proceduralCharacteristics");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},proceduralComplications:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/proceduralComplications");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},inHospitalOutcomes:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/inHospitalOutcomes");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()}};t.a=l},514:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));r(59);var n,o=r(17),c=r(129),l=r(510),d=function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(path){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.currentAuthenticatedUser().then((function(u){return n=u.signInUserSession.idToken.jwtToken})).catch((function(e){return console.log(e)}));case 2:return e.next=4,l.a.get(path,n);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},656:function(e,t,r){"use strict";r.r(t);r(23);var n=r(2),o=r(741),c=r.n(o);r(742);n.a.use(c.a);var l={name:"CentMeter",props:{value:Number},computed:{sections:{get:function(){return[{value:this.value,color:"#01ade3"},{value:100-this.value,color:"#f5f8ff"}]}}}},d=(r(744),r(55)),component=Object(d.a)(l,(function(){var e=this.$createElement,t=this._self._c||e;return t("vc-donut",{attrs:{sections:this.sections,size:180,thickness:30}},[t("p",[this._v(this._s(this.value.toString()+"%"))])])}),[],!1,null,"3a318394",null);t.default=component.exports},667:function(e,t,r){var content=r(745);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(19).default)("73a1f61b",content,!0,{sourceMap:!1})},668:function(e,t,r){"use strict";var n=r(518);t.a={extends:n.b,mixins:[n.d.reactiveProp],props:["chartData","options"],mounted:function(){this.renderChart(this.chartData,this.options)}}},670:function(e,t,r){"use strict";var n=r(518);t.a={extends:n.a,mixins:[n.d.reactiveProp],props:["chartData","options"],mounted:function(){this.renderChart(this.chartData,this.options)}}},671:function(e,t,r){var content=r(747);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(19).default)("928d590c",content,!0,{sourceMap:!1})},685:function(e,t,r){var map={"./af":520,"./af.js":520,"./ar":521,"./ar-dz":522,"./ar-dz.js":522,"./ar-kw":523,"./ar-kw.js":523,"./ar-ly":524,"./ar-ly.js":524,"./ar-ma":525,"./ar-ma.js":525,"./ar-sa":526,"./ar-sa.js":526,"./ar-tn":527,"./ar-tn.js":527,"./ar.js":521,"./az":528,"./az.js":528,"./be":529,"./be.js":529,"./bg":530,"./bg.js":530,"./bm":531,"./bm.js":531,"./bn":532,"./bn-bd":533,"./bn-bd.js":533,"./bn.js":532,"./bo":534,"./bo.js":534,"./br":535,"./br.js":535,"./bs":536,"./bs.js":536,"./ca":537,"./ca.js":537,"./cs":538,"./cs.js":538,"./cv":539,"./cv.js":539,"./cy":540,"./cy.js":540,"./da":541,"./da.js":541,"./de":542,"./de-at":543,"./de-at.js":543,"./de-ch":544,"./de-ch.js":544,"./de.js":542,"./dv":545,"./dv.js":545,"./el":546,"./el.js":546,"./en-au":547,"./en-au.js":547,"./en-ca":548,"./en-ca.js":548,"./en-gb":549,"./en-gb.js":549,"./en-ie":550,"./en-ie.js":550,"./en-il":551,"./en-il.js":551,"./en-in":552,"./en-in.js":552,"./en-nz":553,"./en-nz.js":553,"./en-sg":554,"./en-sg.js":554,"./eo":555,"./eo.js":555,"./es":556,"./es-do":557,"./es-do.js":557,"./es-mx":558,"./es-mx.js":558,"./es-us":559,"./es-us.js":559,"./es.js":556,"./et":560,"./et.js":560,"./eu":561,"./eu.js":561,"./fa":562,"./fa.js":562,"./fi":563,"./fi.js":563,"./fil":564,"./fil.js":564,"./fo":565,"./fo.js":565,"./fr":566,"./fr-ca":567,"./fr-ca.js":567,"./fr-ch":568,"./fr-ch.js":568,"./fr.js":566,"./fy":569,"./fy.js":569,"./ga":570,"./ga.js":570,"./gd":571,"./gd.js":571,"./gl":572,"./gl.js":572,"./gom-deva":573,"./gom-deva.js":573,"./gom-latn":574,"./gom-latn.js":574,"./gu":575,"./gu.js":575,"./he":576,"./he.js":576,"./hi":577,"./hi.js":577,"./hr":578,"./hr.js":578,"./hu":579,"./hu.js":579,"./hy-am":580,"./hy-am.js":580,"./id":581,"./id.js":581,"./is":582,"./is.js":582,"./it":583,"./it-ch":584,"./it-ch.js":584,"./it.js":583,"./ja":585,"./ja.js":585,"./jv":586,"./jv.js":586,"./ka":587,"./ka.js":587,"./kk":588,"./kk.js":588,"./km":589,"./km.js":589,"./kn":590,"./kn.js":590,"./ko":591,"./ko.js":591,"./ku":592,"./ku.js":592,"./ky":593,"./ky.js":593,"./lb":594,"./lb.js":594,"./lo":595,"./lo.js":595,"./lt":596,"./lt.js":596,"./lv":597,"./lv.js":597,"./me":598,"./me.js":598,"./mi":599,"./mi.js":599,"./mk":600,"./mk.js":600,"./ml":601,"./ml.js":601,"./mn":602,"./mn.js":602,"./mr":603,"./mr.js":603,"./ms":604,"./ms-my":605,"./ms-my.js":605,"./ms.js":604,"./mt":606,"./mt.js":606,"./my":607,"./my.js":607,"./nb":608,"./nb.js":608,"./ne":609,"./ne.js":609,"./nl":610,"./nl-be":611,"./nl-be.js":611,"./nl.js":610,"./nn":612,"./nn.js":612,"./oc-lnc":613,"./oc-lnc.js":613,"./pa-in":614,"./pa-in.js":614,"./pl":615,"./pl.js":615,"./pt":616,"./pt-br":617,"./pt-br.js":617,"./pt.js":616,"./ro":618,"./ro.js":618,"./ru":619,"./ru.js":619,"./sd":620,"./sd.js":620,"./se":621,"./se.js":621,"./si":622,"./si.js":622,"./sk":623,"./sk.js":623,"./sl":624,"./sl.js":624,"./sq":625,"./sq.js":625,"./sr":626,"./sr-cyrl":627,"./sr-cyrl.js":627,"./sr.js":626,"./ss":628,"./ss.js":628,"./sv":629,"./sv.js":629,"./sw":630,"./sw.js":630,"./ta":631,"./ta.js":631,"./te":632,"./te.js":632,"./tet":633,"./tet.js":633,"./tg":634,"./tg.js":634,"./th":635,"./th.js":635,"./tk":636,"./tk.js":636,"./tl-ph":637,"./tl-ph.js":637,"./tlh":638,"./tlh.js":638,"./tr":639,"./tr.js":639,"./tzl":640,"./tzl.js":640,"./tzm":641,"./tzm-latn":642,"./tzm-latn.js":642,"./tzm.js":641,"./ug-cn":643,"./ug-cn.js":643,"./uk":644,"./uk.js":644,"./ur":645,"./ur.js":645,"./uz":646,"./uz-latn":647,"./uz-latn.js":647,"./uz.js":646,"./vi":648,"./vi.js":648,"./x-pseudo":649,"./x-pseudo.js":649,"./yo":650,"./yo.js":650,"./zh-cn":651,"./zh-cn.js":651,"./zh-hk":652,"./zh-hk.js":652,"./zh-mo":653,"./zh-mo.js":653,"./zh-tw":654,"./zh-tw.js":654};function n(e){var t=o(e);return r(t)}function o(e){if(!r.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}n.keys=function(){return Object.keys(map)},n.resolve=o,e.exports=n,n.id=685},687:function(e,t,r){"use strict";r.r(t);var n=r(516),o=r.n(n),c={name:"TopEnrollers",methods:{iframeLoaded:function(){o()({log:!1},"#iframeTopEnrollers")}}},l=r(55),d=r(92),m=r.n(d),v=r(773),f=r(497),component=Object(l.a)(c,(function(){var e=this.$createElement,t=this._self._c||e;return t("v-row",[t("v-col",{attrs:{align:"center"}},[t("p",[t("b",[this._v("Top Enrollers")])]),this._v(" "),t("iframe",{attrs:{id:"iframeTopEnrollers",width:"100%",frameborder:"0",scrolling:"no",src:"https://prime-medicina.shinyapps.io/latam-cto-top-enrollers/"},on:{load:this.iframeLoaded}})])],1)}),[],!1,null,null,null);t.default=component.exports;m()(component,{VCol:v.a,VRow:f.a})},688:function(e,t,r){"use strict";r.r(t);r(59);var n=r(17),o=r(656),c=r(511),l={name:"ClinicalCharacteristics",components:{CentMeter:o.default},data:function(){return{loading:!0,sections:{ageMean:0,ageStd:0,males:0,whites:0,hypertensives:0,previousPci:0,previousCtoAttempt:0,diabetes:0,ejectionFractionMean:0,ejectionFractionStd:0}}},created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=Object,t.t1=e.sections,t.next=4,c.a.clinicalCharacteristics();case 4:t.t2=t.sent,t.t0.assign.call(t.t0,t.t1,t.t2),e.loading=!1;case 7:case"end":return t.stop()}}),t)})))()}},d=r(55),m=r(92),v=r.n(m),f=r(773),h=r(195),j=r(497),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.loading?r("div",{attrs:{align:"center"}},[r("v-row",[r("v-col",[e.loading?r("v-progress-circular",{attrs:{indeterminate:"",color:"blue",size:50}}):e._e()],1)],1)],1):r("div",{staticClass:"container"},[r("v-row",[r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("Average Age:\n          "),r("div",{staticClass:"rate"},[e._v("\n            "+e._s(e.sections.ageMean)+" ± "+e._s(e.sections.ageStd)+"\n          ")])])])]),e._v(" "),r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("Ejection Fraction:\n          "),r("div",{staticClass:"rate"},[e._v("\n            "+e._s(e.sections.ejectionFractionMean)+" ±\n            "+e._s(e.sections.ejectionFractionStd)+"\n          ")])])])])],1),e._v(" "),r("v-row",[r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("Male Gender")])]),e._v(" "),r("CentMeter",{model:{value:e.sections.males,callback:function(t){e.$set(e.sections,"males",t)},expression:"sections.males"}})],1),e._v(" "),r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("White Race")])]),e._v(" "),r("CentMeter",{model:{value:e.sections.whites,callback:function(t){e.$set(e.sections,"whites",t)},expression:"sections.whites"}})],1),e._v(" "),r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("Hypertension")])]),e._v(" "),r("CentMeter",{model:{value:e.sections.hypertensives,callback:function(t){e.$set(e.sections,"hypertensives",t)},expression:"sections.hypertensives"}})],1)],1),e._v(" "),r("v-row",[r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("Previous PCI")])]),e._v(" "),r("CentMeter",{model:{value:e.sections.previousPci,callback:function(t){e.$set(e.sections,"previousPci",t)},expression:"sections.previousPci"}})],1),e._v(" "),r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("Previous CTO Attempt")])]),e._v(" "),r("CentMeter",{model:{value:e.sections.previousCtoAttempt,callback:function(t){e.$set(e.sections,"previousCtoAttempt",t)},expression:"sections.previousCtoAttempt"}})],1),e._v(" "),r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("Diabetes")])]),e._v(" "),r("CentMeter",{model:{value:e.sections.diabetes,callback:function(t){e.$set(e.sections,"diabetes",t)},expression:"sections.diabetes"}})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;v()(component,{CentMeter:r(656).default}),v()(component,{VCol:f.a,VProgressCircular:h.a,VRow:j.a})},689:function(e,t,r){"use strict";r.r(t);r(59);var n=r(17),o=r(656),c=r(511),l={name:"AngiographicCharacteristics",components:{CentMeter:o.default},data:function(){return{loading:!0,sections:{ladTargetVessel:0,rcaTargetVessel:0,ctoMean:0,ctoStd:0,scoreMean:0,scoreStd:0,taperedStump:0,calcification:0,tortuosity:0}}},created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=Object,t.t1=e.sections,t.next=4,c.a.angiographicCharacteristics();case 4:t.t2=t.sent,t.t0.assign.call(t.t0,t.t1,t.t2),e.loading=!1;case 7:case"end":return t.stop()}}),t)})))()}},d=r(55),m=r(92),v=r.n(m),f=r(773),h=r(195),j=r(497),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.loading?r("div",{attrs:{align:"center"}},[r("v-row",[r("v-col",[e.loading?r("v-progress-circular",{attrs:{indeterminate:"",color:"blue",size:50}}):e._e()],1)],1)],1):r("div",{staticClass:"container"},[r("v-row",[r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("Target Vessel LAD")])]),e._v(" "),r("CentMeter",{model:{value:e.sections.ladTargetVessel,callback:function(t){e.$set(e.sections,"ladTargetVessel",t)},expression:"sections.ladTargetVessel"}})],1),e._v(" "),r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("Target Vessel RCA")])]),e._v(" "),r("CentMeter",{model:{value:e.sections.rcaTargetVessel,callback:function(t){e.$set(e.sections,"rcaTargetVessel",t)},expression:"sections.rcaTargetVessel"}})],1)],1),e._v(" "),r("v-row",[r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("CTO Length:\n          "),r("div",{staticClass:"rate"},[e._v("\n            "+e._s(e.sections.ctoMean)+" ± "+e._s(e.sections.ctoStd)+"\n          ")])])])]),e._v(" "),r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("J-CTO Score:\n          "),r("div",{staticClass:"rate"},[e._v("\n            "+e._s(e.sections.scoreMean)+" ±\n            "+e._s(e.sections.scoreStd)+"\n          ")])])])])],1),e._v(" "),r("v-row",[r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("Tapered Stump")])]),e._v(" "),r("CentMeter",{model:{value:e.sections.taperedStump,callback:function(t){e.$set(e.sections,"taperedStump",t)},expression:"sections.taperedStump"}})],1),e._v(" "),r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("Severe Calcification")])]),e._v(" "),r("CentMeter",{model:{value:e.sections.calcification,callback:function(t){e.$set(e.sections,"calcification",t)},expression:"sections.calcification"}})],1),e._v(" "),r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("Severe Tortuosity")])]),e._v(" "),r("CentMeter",{model:{value:e.sections.tortuosity,callback:function(t){e.$set(e.sections,"tortuosity",t)},expression:"sections.tortuosity"}})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;v()(component,{CentMeter:r(656).default}),v()(component,{VCol:f.a,VProgressCircular:h.a,VRow:j.a})},690:function(e,t,r){"use strict";r.r(t);r(59);var n=r(17),o=r(511),c=r(668),l=(r(686),r(516)),d=r.n(l),m={name:"ProceduralCharacteristics",components:{DoughnutChart:c.a},data:function(){return{loading:!0,sections:{angina:0,ischemia:0,other:0},optionsVascularAccess:{responsive:!0,maintainAspectRatio:!1,legend:{position:"bottom"},plugins:{colorschemes:{scheme:"brewer.PastelTwo8"},datalabels:{formatter:function(e){return e+"%"},font:{size:20}}}},optionsSheatSize:{responsive:!0,maintainAspectRatio:!1,legend:{position:"bottom"},plugins:{colorschemes:{scheme:"brewer.PastelOne4"},datalabels:{formatter:function(e){return e+"%"},font:{size:20}}}},dataCollectionPrincipalAccessSheathSize:null,dataCollectionProceduralAccess:null}},methods:{iframeLoaded:function(){d()({log:!1},"#iframeProceduralIndication")}},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.proceduralCharacteristics();case 2:data=t.sent,Object.assign(e.sections,data),e.dataCollectionPrincipalAccessSheathSize={labels:["6F","7F","8F"],datasets:[{data:[data.principalAccessSheathSize[0],data.principalAccessSheathSize[1],data.principalAccessSheathSize[2]]}]},e.dataCollectionProceduralAccess={labels:["Bifemoral","Biradial","Radial Femoral","Single Radial","Single Femoral"],datasets:[{data:[data.bifemoralProcedures,data.biradialProcedures,data.radialFemoralProcedures,data.singleRadialProcedures,data.singleFemoralProcedures]}]},e.loading=!1;case 7:case"end":return t.stop()}}),t)})))()}},v=r(55),f=r(92),h=r.n(f),j=r(773),C=r(195),_=r(497),component=Object(v.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.loading?r("div",{attrs:{align:"center"}},[r("v-row",[r("v-col",[e.loading?r("v-progress-circular",{attrs:{indeterminate:"",color:"blue",size:50}}):e._e()],1)],1)],1):r("div",{staticClass:"container"},[r("v-row",{staticClass:"mb-12"},[r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("Procedural Indication")])]),e._v(" "),r("iframe",{attrs:{id:"iframeProceduralIndication",width:"100%",height:"10%",frameborder:"0",scrolling:"no",src:"https://prime-medicina.shinyapps.io/latam-cto-procedural-indication/"},on:{load:e.iframeLoaded}})])],1),e._v(" "),r("v-row",{staticClass:"mb-10 mt-10"},[r("v-col",{attrs:{align:"center"}},[r("p",{staticClass:"mb-10"},[r("b",[e._v("Vascular Access")])]),e._v(" "),r("doughnut-chart",{attrs:{"chart-data":e.dataCollectionProceduralAccess,options:e.optionsVascularAccess}})],1)],1),e._v(" "),r("v-row",{staticClass:"mb-12"}),e._v(" "),r("v-row",[r("v-col",{attrs:{align:"center"}},[r("p",{staticClass:"mb-10 mt-10"},[r("b",[e._v("Principal Access Sheath Size")])]),e._v(" "),r("doughnut-chart",{attrs:{"chart-data":e.dataCollectionPrincipalAccessSheathSize,options:e.optionsSheatSize}})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;h()(component,{VCol:j.a,VProgressCircular:C.a,VRow:_.a})},744:function(e,t,r){"use strict";var n=r(667);r.n(n).a},745:function(e,t,r){(t=r(18)(!1)).push([e.i,"p[data-v-3a318394]{font-size:xxx-large;color:#b8b8b8}",""]),e.exports=t},746:function(e,t,r){"use strict";var n=r(671);r.n(n).a},747:function(e,t,r){(t=r(18)(!1)).push([e.i,"iframe{width:1px;min-width:100%}p{font-size:x-large}.rate{color:#b8b8b8;margin-top:20px;font-size:xx-large}",""]),e.exports=t},781:function(e,t,r){"use strict";r.r(t);r(23),r(739);var n=r(687),o=r(688),c=r(689),l=r(690),d=(r(59),r(17)),m=r(511),v=r(670),f=(r(655),{name:"Outcomes",components:{BarChart:v.a},data:function(){return{proceduralComplicationsOptions:null,proceduralComplicationsDatacollection:null,inHospitalOptions:null,inHospitalDatacollection:null,loading:!0}},methods:{fillDataProceduralComplications:function(){var e=this;return Object(d.a)(regeneratorRuntime.mark((function t(){var r,n,o,c,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.proceduralComplications();case 2:r=t.sent,n=r.perfurations,o=r.cardiacTamponade,c=r.bleedings,l=r.newRequirementDialysis,e.proceduralComplicationsDatacollection={labels:["Perfuration","Cardiac Tamponade","Bleeding","New Requirement Dialysis"],datasets:[{borderAlign:"center",label:"% of procedural complications",backgroundColor:"#df7401",data:[n,o,c,l]}]},e.proceduralComplicationsOptions={plugins:{datalabels:{formatter:function(e){return e+"%"},color:"#3e3e3e",anchor:"top",clamp:!0,align:"top",font:{size:20}}},responsive:!0,maintainAspectRatio:!1,legend:{display:!1},scales:{yAxes:[{ticks:{max:100}}]}},e.loading=!1;case 10:case"end":return t.stop()}}),t)})))()},fillDataInHospitalOutcomes:function(){var e=this;return Object(d.a)(regeneratorRuntime.mark((function t(){var r,n,o,c,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.inHospitalOutcomes();case 2:r=t.sent,n=r.deaths,o=r.strokes,c=r.newMi,l=r.unplannedRevascularizations,console.log(l),e.inHospitalDatacollection={labels:["Deaths","Strokes","New MI","Unplanned Revascularization"],datasets:[{borderAlign:"center",label:"% of in-hospital outcomes",backgroundColor:"#7001df",data:[n,o,c,l]}]},e.inHospitalOptions={plugins:{datalabels:{formatter:function(e){return e+"%"},color:"#3e3e3e",anchor:"top",clamp:!0,align:"top",font:{size:20}}},responsive:!0,maintainAspectRatio:!1,legend:{display:!1},scales:{yAxes:[{ticks:{max:100}}]}},e.loading=!1;case 11:case"end":return t.stop()}}),t)})))()}},mounted:function(){var e=this;return Object(d.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fillDataProceduralComplications();case 2:return t.next=4,e.fillDataInHospitalOutcomes();case 4:case"end":return t.stop()}}),t)})))()}}),h=r(55),j=r(92),C=r.n(j),_=r(773),w=r(195),x=r(497),component=Object(h.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.loading?r("div",{attrs:{align:"center"}},[r("v-row",[r("v-col",[e.loading?r("v-progress-circular",{attrs:{indeterminate:"",color:"blue",size:50}}):e._e()],1)],1)],1):r("div",{staticClass:"container"},[r("v-row",{staticClass:"mb-12"},[r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("Procedural Complications")])]),e._v(" "),e.loading?e._e():r("bar-chart",{attrs:{"chart-data":e.proceduralComplicationsDatacollection,options:e.proceduralComplicationsOptions}})],1)],1),e._v(" "),r("v-row",[r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("In-Hospital Outcomes")])]),e._v(" "),e.loading?e._e():r("bar-chart",{attrs:{"chart-data":e.inHospitalDatacollection,options:e.inHospitalOptions}})],1)],1)],1)}),[],!1,null,null,null),k=component.exports;C()(component,{VCol:_.a,VProgressCircular:w.a,VRow:x.a});var y={name:"dashboard",layout:"private",middleware:"authenticated",components:{TopEnrollers:n.default,ClinicalCharacteristics:o.default,AngiographicCharacteristics:c.default,ProceduralCharacteristics:l.default,ProceduralComplications:k},data:function(){return{tab:null,items:["Enrollment Data","Clinical Data","Angiographic Data","Procedural Data","Outcomes"]}},computed:{dataTab:{get:function(){return this.$route.query.tab&&(this.tab=Number.parseInt(this.$route.query.tab||""),this.$route.query.tab=null),this.tab}}}},R=(r(746),r(515)),O=r(513),z=r(774),P=r(786),S=r(784),A=r(766),T=Object(h.a)(y,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("v-tabs",{attrs:{"background-color":"#272d95",grow:"","center-active":"","show-arrows":"",dark:""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},e._l(e.items,(function(t){return r("v-tab",{key:t},[e._v("\n      "+e._s(t)+"\n    ")])})),1),e._v(" "),r("v-tabs-items",{model:{value:e.dataTab,callback:function(t){e.dataTab=t},expression:"dataTab"}},e._l(e.items,(function(t){return r("v-tab-item",{key:t},[r("v-card",[r("v-card-text",["Enrollment Data"==t?r("TopEnrollers"):e._e(),e._v(" "),"Clinical Data"==t?r("ClinicalCharacteristics"):e._e(),e._v(" "),"Angiographic Data"===t?r("AngiographicCharacteristics"):e._e(),e._v(" "),"Procedural Data"===t?r("ProceduralCharacteristics"):e._e(),e._v(" "),"Outcomes"===t?r("ProceduralComplications"):e._e()],1)],1)],1)})),1)],1)}),[],!1,null,null,null);t.default=T.exports;C()(T,{TopEnrollers:r(687).default,ClinicalCharacteristics:r(688).default,AngiographicCharacteristics:r(689).default,ProceduralCharacteristics:r(690).default}),C()(T,{VCard:R.a,VCardText:O.a,VTab:z.a,VTabItem:P.a,VTabs:S.a,VTabsItems:A.a})}}]);