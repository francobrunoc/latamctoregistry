(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1022:function(e,t,r){"use strict";r.r(t);r(66);var n=r(20),o=r(695),c=r(700),l=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(path){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c.a.GET(path));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d={latamCtoCenters:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l("centers/latamCtoCenters");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()}};r(7);function m(e){var t,r=e.componentFactory,n=e.loading,o=e.loadingData;return function(){return{component:new Promise((function(e){t=e})),loading:{mounted:function(){var e=this;if("IntersectionObserver"in window){var n=new IntersectionObserver((function(o){o[0].intersectionRatio<=0||(n.unobserve(e.$el),r().then(t))}));n.observe(this.$el)}else r().then(t)},render:function(e){return e(n,o)}}}}}r(25);var f={name:"SkeletonBox",props:{maxWidth:{default:100,type:Number},minWidth:{default:80,type:Number},height:{default:"1em",type:String},width:{default:null,type:String}},computed:{computedWidth:function(){return this.width||"".concat(Math.floor(Math.random()*(this.maxWidth-this.minWidth)+this.minWidth),"%")}}},v=(r(980),r(62)),h=Object(v.a)(f,(function(){var e=this.$createElement;return(this._self._c||e)("span",{staticClass:"SkeletonBox",style:{height:this.height,width:this.computedWidth}})}),[],!1,null,null,null).exports,j=r(147),w={name:"index",layout:"public",components:{ProceduresLocals:r(898).default,Centers:m({componentFactory:function(){return Promise.resolve().then(r.bind(null,992))},loading:h}),SuccessfulProcedures:m({componentFactory:function(){return Promise.resolve().then(r.bind(null,993))},loading:h}),SuccessStrategies:m({componentFactory:function(){return Promise.resolve().then(r.bind(null,994))},loading:h}),AnnualProcedures:m({componentFactory:function(){return Promise.resolve().then(r.bind(null,991))},loading:h})},data:function(){return{projectNote:null,countries:null,activeCenters:null,centersPi:null,proceduresEnrolled:null,loadingProjectNote:!0,loadingCenters:!0,loadingProcedures:!0,logged:!1}},methods:{dashboard:function(){this.$router.push("/dashboard")},login:function(){this.$router.push("/auth")}},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,c,l,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.a.currentAuthenticatedUser();case 3:e.logged=!0,t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),e.logged=!1;case 9:return t.next=11,o.a.projectInfo();case 11:return r=t.sent,n=r.project_notes,e.projectNote=n,e.loadingProjectNote=!1,t.next=17,o.a.countAll();case 17:return c=t.sent,l=c.proceduresEnrolled,e.proceduresEnrolled=l,e.loadingProcedures=!1,t.next=23,d.latamCtoCenters();case 23:m=t.sent,e.centersPi=m.coordinatePoints.map((function(e){return{centerName:e.centerName,pi:e.pi}})).sort((function(a,b){return a.centerName>b.centerName?1:b.centerName>a.centerName?-1:0})),e.countries=m.countries.length,e.activeCenters=m.centers.length,e.loadingCenters=!1;case 28:case"end":return t.stop()}}),t,null,[[0,6]])})))()}},x=(r(982),r(103)),_=r.n(x),C=r(248),y=r(707),k=r(693),R=r(1011),P=r(855),O=r(233),V=r(1015),D=r(139),S=r(92),z=r(232),L=r(1012),A=r(687),T=Object(v.a)(w,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{column:"","justify-center":"","align-center":""}},[n("v-card",{staticClass:"mx-auto"},[n("div",{attrs:{align:"center"}},[n("img",{attrs:{width:"65%",src:r(978)}})]),e._v(" "),n("img",{staticClass:"white--text align-end",attrs:{width:"100%",src:r(979)}}),e._v(" "),n("v-card-text",[n("v-row",[n("v-col",{attrs:{align:"center"}},[e.loadingProjectNote?n("v-progress-circular",{attrs:{indeterminate:"",color:"grey"}}):e._e(),e._v(" "),e.loadingProjectNote?e._e():n("p",{staticClass:"text"},[e._v("\n              "+e._s(e.projectNote)+"\n            ")])],1)],1),e._v(" "),n("v-row",[n("v-col",{attrs:{align:"center"}},[e.loadingProcedures?n("v-progress-circular",{attrs:{indeterminate:"",color:"grey"}}):e._e(),e._v(" "),n("p",{staticClass:"stats"},[e._v(e._s(this.proceduresEnrolled))]),e._v(" "),n("p",{staticClass:"mt-10"},[e._v("PROCEDURES")]),e._v(" "),n("p",{staticClass:"mb-10"},[e._v("FROM")]),e._v(" "),e.loadingCenters?n("v-progress-circular",{attrs:{indeterminate:"",color:"grey"}}):e._e(),e._v(" "),n("p",{staticClass:"stats"},[e._v(e._s(this.activeCenters))]),e._v(" "),n("p",{staticClass:"mt-10"},[e._v("CTO CENTERS")]),e._v(" "),n("p",{staticClass:"mb-10"},[e._v("IN")]),e._v(" "),e.loadingCenters?n("v-progress-circular",{attrs:{indeterminate:"",color:"grey"}}):e._e(),e._v(" "),n("p",{staticClass:"stats"},[e._v(e._s(this.countries))]),e._v(" "),n("p",{staticClass:"mt-10"},[e._v("COUNTRIES")])],1)],1),e._v(" "),n("div",{staticClass:"mb-10 mt-10"},[n("Centers",{attrs:{id:"geographicDistribution"}})],1),e._v(" "),n("div",{staticClass:"mb-15"},[n("SuccessfulProcedures",{attrs:{id:"proceduralData"}}),e._v(" "),n("SuccessStrategies"),e._v(" "),n("AnnualProcedures"),e._v(" "),n("ProceduresLocals")],1),e._v(" "),n("v-row",[n("v-col",{attrs:{align:"center"}},[n("v-card",{attrs:{"max-width":"800",loading:e.loadingCenters}},[n("v-card-text",e._l(e.centersPi,(function(t,r){return n("v-list-item",{key:r,attrs:{"two-line":""}},[n("v-list-item-content",[0===r?n("v-list-item-title",{staticClass:"mb-4"},[n("span",[e._v("LATAM CTO Center")])]):e._e(),e._v(" "),0===r?n("v-list-item-subtitle",[n("span",[e._v("\n                        Principal Investigator\n                      ")]),e._v(" "),n("v-divider",{staticClass:"mt-7 mb-4"})],1):e._e(),e._v(" "),r>0?n("v-list-item-title",{staticClass:"mb-4"},[n("v-tooltip",{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function(r){var o=r.on;return[n("v-span",e._g({},o),[e._v(e._s(t.centerName))])]}}],null,!0)},[e._v(" "),n("span",[e._v(" "+e._s(t.centerName)+" ")])])],1):e._e(),e._v(" "),r>0?n("v-list-item-subtitle",{staticClass:"mb-4"},[e._v("\n                      "+e._s(t.pi)+"\n                      "),r<e.centersPi.length-1?n("v-divider",{key:r,staticClass:"mt-10"}):e._e()],1):e._e()],1)],1)})),1)],1)],1)],1)],1)],1),e._v(" "),n("v-tooltip",{attrs:{right:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[e.logged?n("v-btn",e._g({attrs:{color:"blue",fab:"",large:"",dark:"",top:"",left:"",fixed:""},on:{click:e.dashboard}},r),[n("v-icon",[e._v("mdi-plus")])],1):n("v-btn",e._g({attrs:{color:"blue",fab:"",large:"",dark:"",top:"",left:"",fixed:""},on:{click:e.login}},r),[n("v-icon",[e._v("mdi-account")])],1)]}}])},[e._v(" "),n("span",[e._v("Logged Area")])]),e._v(" "),n("ContactUsDialog")],1)}),[],!1,null,null,null);t.default=T.exports;_()(T,{Centers:r(992).default,SuccessfulProcedures:r(993).default,SuccessStrategies:r(994).default,AnnualProcedures:r(991).default,ProceduresLocals:r(898).default,ContactUsDialog:r(995).default}),_()(T,{VBtn:C.a,VCard:y.a,VCardText:k.a,VCol:R.a,VDivider:P.a,VIcon:O.a,VLayout:V.a,VListItem:D.a,VListItemContent:S.a,VListItemSubtitle:S.b,VListItemTitle:S.c,VProgressCircular:z.a,VRow:L.a,VTooltip:A.a})},695:function(e,t,r){"use strict";r(66);var n=r(20),o=r(700),c=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(path){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o.a.GET(path));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l={projectInfo:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/project/info/notes");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},countAll:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/count");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},successfulStrategies:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/successfulStrategies");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},successfulProceduresPerYear:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/successfulProceduresPerYear");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},annualProcedures:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/annualProcedures");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},clinicalDataQuality:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/clinicalDataQuality");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},outcomesDataQuality:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/outcomesDataQuality");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},proceduralDataQuality:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/proceduralDataQuality");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},angiographicDataQuality:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/angiographicDataQuality");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},successDataQuality:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/successDataQuality");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},clinicalCharacteristics:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/clinicalCharacteristics");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},angiographicCharacteristics:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/angiographicCharacteristics");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},proceduralCharacteristics:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/proceduralCharacteristics");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},anginaOutcome:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/anginaOutcome");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},proceduralComplications:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/proceduralComplications");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},inHospitalOutcomes:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/inHospitalOutcomes");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},topEnrollers:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/topEnrollers");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},casesPerMonth:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/casesPerMonth");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()}};t.a=l},700:function(e,t,r){"use strict";(function(e){r(28),r(29),r(7),r(66);var n=r(20),o=r(848),c=r.n(o),l=r(706),d=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(path){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(l.a)(path));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(path,r){var n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=[],o={headers:{Authorization:r}},t.next=4,c.a.get("https://7cb5vfypm9.execute-api.us-west-2.amazonaws.com/dev/".concat(path||""),o).then((function(t){(n=t.data).body&&(n=JSON.parse(e.from(n.body).toString("utf-8")))})).catch((function(e){return console.error(e)}));case 4:return t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}();t.a={GET:d,get:m}}).call(this,r(9).Buffer)},703:function(e,t,r){"use strict";var n=r(710);t.a={extends:n.a,mixins:[n.d.reactiveProp],props:["chartData","options"],mounted:function(){this.renderChart(this.chartData,this.options)}}},704:function(e,t,r){"use strict";var n=r(710);t.a={extends:n.b,mixins:[n.d.reactiveProp],props:["chartData","options"],mounted:function(){this.renderChart(this.chartData,this.options)}}},706:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));r(66);var n,o=r(20),c=r(147),l=r(700),d=function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(path){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.currentAuthenticatedUser().then((function(u){return n=u.signInUserSession.idToken.jwtToken})).catch((function(e){return console.log(e)}));case 2:return e.next=4,l.a.get(path,n);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},883:function(e,t,r){var map={"./af":711,"./af.js":711,"./ar":712,"./ar-dz":713,"./ar-dz.js":713,"./ar-kw":714,"./ar-kw.js":714,"./ar-ly":715,"./ar-ly.js":715,"./ar-ma":716,"./ar-ma.js":716,"./ar-sa":717,"./ar-sa.js":717,"./ar-tn":718,"./ar-tn.js":718,"./ar.js":712,"./az":719,"./az.js":719,"./be":720,"./be.js":720,"./bg":721,"./bg.js":721,"./bm":722,"./bm.js":722,"./bn":723,"./bn-bd":724,"./bn-bd.js":724,"./bn.js":723,"./bo":725,"./bo.js":725,"./br":726,"./br.js":726,"./bs":727,"./bs.js":727,"./ca":728,"./ca.js":728,"./cs":729,"./cs.js":729,"./cv":730,"./cv.js":730,"./cy":731,"./cy.js":731,"./da":732,"./da.js":732,"./de":733,"./de-at":734,"./de-at.js":734,"./de-ch":735,"./de-ch.js":735,"./de.js":733,"./dv":736,"./dv.js":736,"./el":737,"./el.js":737,"./en-au":738,"./en-au.js":738,"./en-ca":739,"./en-ca.js":739,"./en-gb":740,"./en-gb.js":740,"./en-ie":741,"./en-ie.js":741,"./en-il":742,"./en-il.js":742,"./en-in":743,"./en-in.js":743,"./en-nz":744,"./en-nz.js":744,"./en-sg":745,"./en-sg.js":745,"./eo":746,"./eo.js":746,"./es":747,"./es-do":748,"./es-do.js":748,"./es-mx":749,"./es-mx.js":749,"./es-us":750,"./es-us.js":750,"./es.js":747,"./et":751,"./et.js":751,"./eu":752,"./eu.js":752,"./fa":753,"./fa.js":753,"./fi":754,"./fi.js":754,"./fil":755,"./fil.js":755,"./fo":756,"./fo.js":756,"./fr":757,"./fr-ca":758,"./fr-ca.js":758,"./fr-ch":759,"./fr-ch.js":759,"./fr.js":757,"./fy":760,"./fy.js":760,"./ga":761,"./ga.js":761,"./gd":762,"./gd.js":762,"./gl":763,"./gl.js":763,"./gom-deva":764,"./gom-deva.js":764,"./gom-latn":765,"./gom-latn.js":765,"./gu":766,"./gu.js":766,"./he":767,"./he.js":767,"./hi":768,"./hi.js":768,"./hr":769,"./hr.js":769,"./hu":770,"./hu.js":770,"./hy-am":771,"./hy-am.js":771,"./id":772,"./id.js":772,"./is":773,"./is.js":773,"./it":774,"./it-ch":775,"./it-ch.js":775,"./it.js":774,"./ja":776,"./ja.js":776,"./jv":777,"./jv.js":777,"./ka":778,"./ka.js":778,"./kk":779,"./kk.js":779,"./km":780,"./km.js":780,"./kn":781,"./kn.js":781,"./ko":782,"./ko.js":782,"./ku":783,"./ku.js":783,"./ky":784,"./ky.js":784,"./lb":785,"./lb.js":785,"./lo":786,"./lo.js":786,"./lt":787,"./lt.js":787,"./lv":788,"./lv.js":788,"./me":789,"./me.js":789,"./mi":790,"./mi.js":790,"./mk":791,"./mk.js":791,"./ml":792,"./ml.js":792,"./mn":793,"./mn.js":793,"./mr":794,"./mr.js":794,"./ms":795,"./ms-my":796,"./ms-my.js":796,"./ms.js":795,"./mt":797,"./mt.js":797,"./my":798,"./my.js":798,"./nb":799,"./nb.js":799,"./ne":800,"./ne.js":800,"./nl":801,"./nl-be":802,"./nl-be.js":802,"./nl.js":801,"./nn":803,"./nn.js":803,"./oc-lnc":804,"./oc-lnc.js":804,"./pa-in":805,"./pa-in.js":805,"./pl":806,"./pl.js":806,"./pt":807,"./pt-br":808,"./pt-br.js":808,"./pt.js":807,"./ro":809,"./ro.js":809,"./ru":810,"./ru.js":810,"./sd":811,"./sd.js":811,"./se":812,"./se.js":812,"./si":813,"./si.js":813,"./sk":814,"./sk.js":814,"./sl":815,"./sl.js":815,"./sq":816,"./sq.js":816,"./sr":817,"./sr-cyrl":818,"./sr-cyrl.js":818,"./sr.js":817,"./ss":819,"./ss.js":819,"./sv":820,"./sv.js":820,"./sw":821,"./sw.js":821,"./ta":822,"./ta.js":822,"./te":823,"./te.js":823,"./tet":824,"./tet.js":824,"./tg":825,"./tg.js":825,"./th":826,"./th.js":826,"./tk":827,"./tk.js":827,"./tl-ph":828,"./tl-ph.js":828,"./tlh":829,"./tlh.js":829,"./tr":830,"./tr.js":830,"./tzl":831,"./tzl.js":831,"./tzm":832,"./tzm-latn":833,"./tzm-latn.js":833,"./tzm.js":832,"./ug-cn":834,"./ug-cn.js":834,"./uk":835,"./uk.js":835,"./ur":836,"./ur.js":836,"./uz":837,"./uz-latn":838,"./uz-latn.js":838,"./uz.js":837,"./vi":839,"./vi.js":839,"./x-pseudo":840,"./x-pseudo.js":840,"./yo":841,"./yo.js":841,"./zh-cn":842,"./zh-cn.js":842,"./zh-hk":843,"./zh-hk.js":843,"./zh-mo":844,"./zh-mo.js":844,"./zh-tw":845,"./zh-tw.js":845};function n(e){var t=o(e);return r(t)}function o(e){if(!r.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}n.keys=function(){return Object.keys(map)},n.resolve=o,e.exports=n,n.id=883},887:function(e,t,r){var content=r(981);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(22).default)("ef07b3c0",content,!0,{sourceMap:!1})},889:function(e,t,r){var content=r(983);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(22).default)("1b7833da",content,!0,{sourceMap:!1})},891:function(e,t,r){var content=r(989);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(22).default)("7463e5b6",content,!0,{sourceMap:!1})},898:function(e,t,r){"use strict";r.r(t);var n=r(888),o=r.n(n),c={name:"ProceduresLocals",methods:{iframeLoaded:function(){o()({log:!1},"#iframeProcedures")}}},l=r(62),d=r(103),m=r.n(d),f=r(1011),v=r(1012),component=Object(l.a)(c,(function(){var e=this.$createElement,t=this._self._c||e;return t("v-row",[t("v-col",{attrs:{align:"center"}},[t("p",[t("b",[this._v("Procedures By Region")])]),this._v(" "),t("iframe",{attrs:{id:"iframeProcedures",width:"100%",frameborder:"0",scrolling:"no",src:"https://prime-medicina.shinyapps.io/latam-cto-procedures-locals/"},on:{load:this.iframeLoaded}})])],1)}),[],!1,null,null,null);t.default=component.exports;m()(component,{VCol:f.a,VRow:v.a})},978:function(e,t,r){e.exports=r.p+"img/latam-cto-registry_large.5058784.jpg"},979:function(e,t,r){e.exports=r.p+"img/CTO_phases.7b07db6.png"},980:function(e,t,r){"use strict";r(887)},981:function(e,t,r){(t=r(21)(!1)).push([e.i,'.SkeletonBox{display:inline-block;position:relative;overflow:hidden;vertical-align:middle;background-color:#dddbdd}.SkeletonBox:after{position:absolute;top:0;right:0;bottom:0;left:0;transform:translateX(-100%);background-image:linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.2) 20%,hsla(0,0%,100%,.5) 60%,hsla(0,0%,100%,0));-webkit-animation:shimmer 5s infinite;animation:shimmer 5s infinite;content:""}@-webkit-keyframes shimmer{to{transform:translateX(100%)}}@keyframes shimmer{to{transform:translateX(100%)}}',""]),e.exports=t},982:function(e,t,r){"use strict";r(889)},983:function(e,t,r){(t=r(21)(!1)).push([e.i,"p{font-size:x-large;line-height:40px;margin-top:20px;margin-left:20px;margin-right:20px}p.stats{font-size:xxx-large;color:#494949}p.text{text-align:center}",""]),e.exports=t},984:function(e,t,r){e.exports=r.p+"img/prime-logo.78ee9ad.png"},988:function(e,t,r){"use strict";r(891)},989:function(e,t,r){(t=r(21)(!1)).push([e.i,".wrap-text[data-v-09d6f545]{-webkit-line-clamp:unset!important;white-space:normal}",""]),e.exports=t},991:function(e,t,r){"use strict";r.r(t);r(66);var n=r(20),o=r(695),c=r(710),l={extends:c.c,mixins:[c.d.reactiveProp],props:["chartData","options"],mounted:function(){this.renderChart(this.chartData,this.options)}},d=(r(846),{name:"Procedures",components:{LineChart:l},data:function(){return{optionsLineChart:null,datacollectionLineChart:null,loading:!0}},methods:{fillData:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.annualProcedures();case 2:r=t.sent,n=r.countYears,c=r.uniqueYears,e.datacollectionLineChart={labels:c,datasets:[{borderAlign:"center",label:"Amount of procedures realized per year",backgroundColor:"blue",fill:!1,borderColor:"green",pointRadius:7,pointHoverRadius:10,data:n}]},e.optionsLineChart={plugins:{datalabels:{color:"gray",anchor:"center",clamp:!0,align:"top",font:{size:20}}},responsive:!0,maintainAspectRatio:!1,legend:{display:!1},scales:{yAxes:[{ticks:{max:1e3,min:0}}]}},e.loading=!1;case 8:case"end":return t.stop()}}),t)})))()}},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fillData();case 2:case"end":return t.stop()}}),t)})))()}}),m=r(62),f=r(103),v=r.n(f),h=r(1011),j=r(683),w=r(232),x=r(1012),component=Object(m.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",[r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("Annual Procedures")])]),e._v(" "),e.loading?r("v-progress-circular",{attrs:{indeterminate:"",color:"blue",size:50}}):e._e(),e._v(" "),e.loading?e._e():r("line-chart",{attrs:{"chart-data":e.datacollectionLineChart,options:e.optionsLineChart}})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;v()(component,{VCol:h.a,VContainer:j.a,VProgressCircular:w.a,VRow:x.a})},992:function(e,t,r){"use strict";r.r(t);var n=r(888),o=r.n(n),c={name:"Centers",methods:{iframeLoaded:function(){o()({log:!1},"#iframeCenters")}}},l=r(62),d=r(103),m=r.n(d),f=r(1011),v=r(1012),component=Object(l.a)(c,(function(){var e=this.$createElement,t=this._self._c||e;return t("v-row",[t("v-col",{attrs:{align:"center"}},[t("p",[t("b",[this._v("LATAM CTO Centers")])]),this._v(" "),t("iframe",{attrs:{id:"iframeCenters",width:"100%",frameborder:"0",scrolling:"no",src:"https://prime-medicina.shinyapps.io/latam-cto-centers/"},on:{load:this.iframeLoaded}})])],1)}),[],!1,null,null,null);t.default=component.exports;m()(component,{VCol:f.a,VRow:v.a})},993:function(e,t,r){"use strict";r.r(t);r(66);var n=r(20),o=r(695),c=r(703),l=(r(846),{name:"SuccessfulProcedures",components:{BarChart:c.a},data:function(){return{optionsBarChart:null,datacollectionBarChart:null,loading:!0}},methods:{fillData:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.successfulProceduresPerYear();case 2:r=t.sent,n=r.uniqueYears,c=r.perc,e.datacollectionBarChart={labels:n,datasets:[{borderAlign:"center",label:"% successful procedures per year",backgroundColor:"#019edf",data:c}]},e.optionsBarChart={responsive:!0,maintainAspectRatio:!1,legend:{display:!1},scales:{yAxes:[{ticks:{max:100,min:50}}]}},e.loading=!1;case 8:case"end":return t.stop()}}),t)})))()}},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fillData();case 2:case"end":return t.stop()}}),t)})))()}}),d=r(62),m=r(103),f=r.n(m),v=r(1011),h=r(683),j=r(232),w=r(1012),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",[r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("Successful Procedures Per Year")])]),e._v(" "),e.loading?r("v-progress-circular",{attrs:{indeterminate:"",color:"blue",size:50}}):e._e(),e._v(" "),e.loading?e._e():r("bar-chart",{attrs:{"chart-data":e.datacollectionBarChart,options:e.optionsBarChart}})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;f()(component,{VCol:v.a,VContainer:h.a,VProgressCircular:j.a,VRow:w.a})},994:function(e,t,r){"use strict";r.r(t);r(66);var n=r(20),o=r(695),c=r(704),l=(r(708),r(846),{name:"SuccessfulStrategies",components:{DoughnutChart:c.a},data:function(){return{optionsPieChart:null,datacollectionPieChart:null,loading:!0}},methods:{fillData:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.successfulStrategies();case 2:r=t.sent,n=r.valuesStrategies,c=r.countStrategies,e.datacollectionPieChart={labels:n,datasets:[{borderAlign:"center",label:"Success strategies",data:c}]},e.optionsPieChart={responsive:!0,maintainAspectRatio:!1,plugins:{colorschemes:{scheme:"brewer.PastelTwo8"},datalabels:{formatter:function(e){return e+"%"},font:{size:20}}}},e.loading=!1;case 8:case"end":return t.stop()}}),t)})))()}},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fillData();case 2:case"end":return t.stop()}}),t)})))()}}),d=r(62),m=r(103),f=r.n(m),v=r(1011),h=r(683),j=r(232),w=r(1012),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",[r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("Success Strategies")])]),e._v(" "),e.loading?r("v-progress-circular",{attrs:{indeterminate:"",color:"blue",size:50}}):e._e(),e._v(" "),e.loading?e._e():r("doughnut-chart",{attrs:{"chart-data":e.datacollectionPieChart,options:e.optionsPieChart}}),r("br")],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;f()(component,{VCol:v.a,VContainer:h.a,VProgressCircular:j.a,VRow:w.a})},995:function(e,t,r){"use strict";r.r(t);var n=r(985),o={name:"ContactUsDialog",data:function(){return{contactUsDialog:!1,items:[{header:"Project Staff"},{avatar:"https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y",title:"LATAM CTO Registry Principal Investigator",subtitle:"Dr. Alexandre Schaan de Quadros: <a href='mailto:consult.asq@gmail.com'>consult.asq@gmail.com</a>",email:"consult.asq@gmail.com"},{divider:!0,inset:!0},{avatar:"https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y",title:"Operational Coordinator",subtitle:"Dr. Pedro Piccaro de Oliveira: <a href='mailto:pedropiccaro@gmail.com'>pedropiccaro@gmail.com</a>",email:"pedropiccaro@gmail.com"},{divider:!0,inset:!0},{avatar:"https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y",title:"Database Web Interface Developer",subtitle:"Franco Bruno Corteletti: <a href='mailto:francobrunoc@gmail.com'>francobrunoc@gmail.com</a>",email:"francobrunoc@gmail.com"}]}},mounted:function(){this.gravatar()},methods:{gravatar:function(){this.items.forEach((function(e){e.email&&(e.avatar="https://www.gravatar.com/avatar/"+n(e.email))}))},close:function(){this.contactUsDialog=!1}}},c=(r(988),r(62)),l=r(103),d=r.n(l),m=r(237),f=r(248),v=r(707),h=r(693),j=r(1013),w=r(855),x=r(233),_=r(191),C=r(234),y=r(139),k=r(236),R=r(92),P=r(1012),O=r(686),V=r(858),D=r(687),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{"max-width":"600"},scopedSlots:e._u([{key:"activator",fn:function(t){var dialog=t.on;return[n("v-tooltip",{attrs:{left:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[n("v-btn",e._g({attrs:{color:"blue",fab:"",large:"",dark:"",top:"",fixed:"",right:""},on:{click:function(t){e.contactUsDialog=!0}}},Object.assign({},r,dialog)),[n("v-icon",[e._v("mdi-email")])],1)]}}],null,!0)},[e._v(" "),n("span",[e._v("Contact Us")])])]}}]),model:{value:e.contactUsDialog,callback:function(t){e.contactUsDialog=t},expression:"contactUsDialog"}},[e._v(" "),n("v-card",[n("v-card-title",{staticClass:"primary white--text"},[e._v("Contact Us\n      "),n("v-spacer"),e._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(t){return e.close()}}},[n("v-icon",{staticClass:"white--text"},[e._v("mdi-close")])],1)],1),e._v(" "),n("v-card-text",[n("v-list",{attrs:{"three-line":""}},[e._l(e.items,(function(t,r){return[t.header?n("v-subheader",{key:t.header,domProps:{textContent:e._s(t.header)}}):t.divider?n("v-divider",{key:r,attrs:{inset:t.inset}}):n("v-list-item",{key:t.title},[n("v-list-item-avatar",[n("v-img",{attrs:{src:t.avatar}})],1),e._v(" "),n("v-list-item-content",[n("v-list-item-title",{staticClass:"wrap-text",domProps:{innerHTML:e._s(t.title)}}),e._v(" "),n("v-list-item-subtitle",{staticClass:"wrap-text",domProps:{innerHTML:e._s(t.subtitle)}})],1)],1)]}))],2),e._v(" "),n("v-row",[n("v-spacer"),e._v(" "),n("v-tooltip",{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on;return[n("v-btn",e._g({staticClass:"mb-4 mr-8",attrs:{fab:"",large:""}},o),[n("v-avatar",{attrs:{width:"150",height:"100"}},[n("img",{attrs:{src:r(984),alt:"Prime Medicina"}})])],1)]}}])},[e._v(" "),n("span",[e._v("Powered by")])])],1)],1)],1)],1)}),[],!1,null,"09d6f545",null);t.default=component.exports;d()(component,{VAvatar:m.a,VBtn:f.a,VCard:v.a,VCardText:h.a,VCardTitle:h.b,VDialog:j.a,VDivider:w.a,VIcon:x.a,VImg:_.a,VList:C.a,VListItem:y.a,VListItemAvatar:k.a,VListItemContent:R.a,VListItemSubtitle:R.b,VListItemTitle:R.c,VRow:P.a,VSpacer:O.a,VSubheader:V.a,VTooltip:D.a})}}]);