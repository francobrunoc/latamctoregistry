(window.webpackJsonp=window.webpackJsonp||[]).push([[25,26,29],{725:function(e,r,t){"use strict";(function(e){t(49),t(50),t(9),t(69);var n=t(21),c=t(878),o=t.n(c),l=t(729),f=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(path){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(l.a)(path));case 1:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),j=function(){var r=Object(n.a)(regeneratorRuntime.mark((function r(path,t){var n,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=[],c={headers:{Authorization:t}},r.next=4,o.a.get("https://7cb5vfypm9.execute-api.us-west-2.amazonaws.com/dev/".concat(path||""),c).then((function(r){(n=r.data).body&&(n=JSON.parse(e.from(n.body).toString("utf-8")))})).catch((function(e){return console.error(e)}));case 4:return r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}();r.a={GET:f,get:j}}).call(this,t(8).Buffer)},726:function(e,r,t){"use strict";t(69);var n=t(21),c=t(725),o=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(path){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c.a.GET(path));case 1:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l={projectInfo:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("registry/project/info/notes");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},countAll:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("registry/procedures/count");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},successfulStrategies:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("registry/procedures/successfulStrategies");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},successfulProceduresPerYear:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("registry/procedures/successfulProceduresPerYear");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},annualProcedures:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("registry/procedures/annualProcedures");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},clinicalDataQuality:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("registry/procedures/clinicalDataQuality");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},outcomesDataQuality:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("registry/procedures/outcomesDataQuality");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},proceduralDataQuality:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("registry/procedures/proceduralDataQuality");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},angiographicDataQuality:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("registry/procedures/angiographicDataQuality");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},successDataQuality:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("registry/procedures/successDataQuality");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},followUpDataQuality:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("registry/procedures/followUpDataQuality");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},clinicalCharacteristics:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("registry/procedures/clinicalCharacteristics");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},angiographicCharacteristics:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("registry/procedures/angiographicCharacteristics");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},proceduralCharacteristics:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("registry/procedures/proceduralCharacteristics");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},anginaOutcome:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("registry/procedures/anginaOutcome");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},proceduralComplications:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("registry/procedures/proceduralComplications");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},inHospitalOutcomes:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("registry/procedures/inHospitalOutcomes");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},topEnrollers:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("registry/procedures/topEnrollers");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},casesPerMonth:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("registry/procedures/casesPerMonth");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()}};r.a=l},729:function(e,r,t){"use strict";t.d(r,"a",(function(){return f}));t(69);var n,c=t(21),o=t(151),l=t(725),f=function(){var e=Object(c.a)(regeneratorRuntime.mark((function e(path){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.currentAuthenticatedUser().then((function(u){return n=u.signInUserSession.idToken.jwtToken})).catch((function(e){return console.log(e)}));case 2:return e.next=4,l.a.get(path,n);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},873:function(e,r,t){"use strict";var n=t(881);r.a={extends:n.a,mixins:[n.d.reactiveProp],props:["chartData","options"],mounted:function(){this.renderChart(this.chartData,this.options)}}},874:function(e,r,t){"use strict";t(18),t(14),t(15),t(71),t(54),t(55);var n=t(5),c=(t(70),t(727),t(81),t(12),t(9),t(16),t(26),t(405),t(3)),o=t(97),l=t(4);function f(object,e){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),r.push.apply(r,t)}return r}function j(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(r){Object(n.a)(e,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(source,r))}))}return e}var d=["sm","md","lg","xl"],m=d.reduce((function(e,r){return e[r]={type:[Boolean,String,Number],default:!1},e}),{}),h=d.reduce((function(e,r){return e["offset"+Object(l.D)(r)]={type:[String,Number],default:null},e}),{}),y=d.reduce((function(e,r){return e["order"+Object(l.D)(r)]={type:[String,Number],default:null},e}),{}),v={col:Object.keys(m),offset:Object.keys(h),order:Object.keys(y)};function w(e,r,t){var n=e;if(null!=t&&!1!==t){if(r){var c=r.replace(e,"");n+="-".concat(c)}return"col"!==e||""!==t&&!0!==t?(n+="-".concat(t)).toLowerCase():n.toLowerCase()}}var O=new Map;r.a=c.a.extend({name:"v-col",functional:!0,props:j(j(j(j({cols:{type:[Boolean,String,Number],default:!1}},m),{},{offset:{type:[String,Number],default:null}},h),{},{order:{type:[String,Number],default:null}},y),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,r){var t=r.props,data=r.data,c=r.children,l=(r.parent,"");for(var f in t)l+=String(t[f]);var j=O.get(l);return j||function(){var e,r;for(r in j=[],v)v[r].forEach((function(e){var n=t[e],c=w(r,e,n);c&&j.push(c)}));var c=j.some((function(e){return e.startsWith("col-")}));j.push((e={col:!c||!t.cols},Object(n.a)(e,"col-".concat(t.cols),t.cols),Object(n.a)(e,"offset-".concat(t.offset),t.offset),Object(n.a)(e,"order-".concat(t.order),t.order),Object(n.a)(e,"align-self-".concat(t.alignSelf),t.alignSelf),e)),O.set(l,j)}(),e(t.tag,Object(o.a)(data,{class:j}),c)}})},879:function(e,r,t){"use strict";t(18),t(14),t(15);var n=t(5),c=(t(70),t(727),t(81),t(12),t(9),t(16),t(54),t(55),t(405),t(3)),o=t(97),l=t(4);function f(object,e){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),r.push.apply(r,t)}return r}function j(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(r){Object(n.a)(e,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(source,r))}))}return e}var d=["sm","md","lg","xl"],m=["start","end","center"];function h(e,r){return d.reduce((function(t,n){return t[e+Object(l.D)(n)]=r(),t}),{})}var y=function(e){return[].concat(m,["baseline","stretch"]).includes(e)},v=h("align",(function(){return{type:String,default:null,validator:y}})),w=function(e){return[].concat(m,["space-between","space-around"]).includes(e)},O=h("justify",(function(){return{type:String,default:null,validator:w}})),k=function(e){return[].concat(m,["space-between","space-around","stretch"]).includes(e)},x=h("alignContent",(function(){return{type:String,default:null,validator:k}})),R={align:Object.keys(v),justify:Object.keys(O),alignContent:Object.keys(x)},C={align:"align",justify:"justify",alignContent:"align-content"};function D(e,r,t){var n=C[e];if(null!=t){if(r){var c=r.replace(e,"");n+="-".concat(c)}return(n+="-".concat(t)).toLowerCase()}}var P=new Map;r.a=c.a.extend({name:"v-row",functional:!0,props:j(j(j({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:y}},v),{},{justify:{type:String,default:null,validator:w}},O),{},{alignContent:{type:String,default:null,validator:k}},x),render:function(e,r){var t=r.props,data=r.data,c=r.children,l="";for(var f in t)l+=String(t[f]);var j=P.get(l);return j||function(){var e,r;for(r in j=[],R)R[r].forEach((function(e){var n=t[e],c=D(r,e,n);c&&j.push(c)}));j.push((e={"no-gutters":t.noGutters,"row--dense":t.dense},Object(n.a)(e,"align-".concat(t.align),t.align),Object(n.a)(e,"justify-".concat(t.justify),t.justify),Object(n.a)(e,"align-content-".concat(t.alignContent),t.alignContent),e)),P.set(l,j)}(),e(t.tag,Object(o.a)(data,{staticClass:"row",class:j}),c)}})},885:function(e,r,t){var map={"./af":733,"./af.js":733,"./ar":734,"./ar-dz":735,"./ar-dz.js":735,"./ar-kw":736,"./ar-kw.js":736,"./ar-ly":737,"./ar-ly.js":737,"./ar-ma":738,"./ar-ma.js":738,"./ar-sa":739,"./ar-sa.js":739,"./ar-tn":740,"./ar-tn.js":740,"./ar.js":734,"./az":741,"./az.js":741,"./be":742,"./be.js":742,"./bg":743,"./bg.js":743,"./bm":744,"./bm.js":744,"./bn":745,"./bn-bd":746,"./bn-bd.js":746,"./bn.js":745,"./bo":747,"./bo.js":747,"./br":748,"./br.js":748,"./bs":749,"./bs.js":749,"./ca":750,"./ca.js":750,"./cs":751,"./cs.js":751,"./cv":752,"./cv.js":752,"./cy":753,"./cy.js":753,"./da":754,"./da.js":754,"./de":755,"./de-at":756,"./de-at.js":756,"./de-ch":757,"./de-ch.js":757,"./de.js":755,"./dv":758,"./dv.js":758,"./el":759,"./el.js":759,"./en-au":760,"./en-au.js":760,"./en-ca":761,"./en-ca.js":761,"./en-gb":762,"./en-gb.js":762,"./en-ie":763,"./en-ie.js":763,"./en-il":764,"./en-il.js":764,"./en-in":765,"./en-in.js":765,"./en-nz":766,"./en-nz.js":766,"./en-sg":767,"./en-sg.js":767,"./eo":768,"./eo.js":768,"./es":769,"./es-do":770,"./es-do.js":770,"./es-mx":771,"./es-mx.js":771,"./es-us":772,"./es-us.js":772,"./es.js":769,"./et":773,"./et.js":773,"./eu":774,"./eu.js":774,"./fa":775,"./fa.js":775,"./fi":776,"./fi.js":776,"./fil":777,"./fil.js":777,"./fo":778,"./fo.js":778,"./fr":779,"./fr-ca":780,"./fr-ca.js":780,"./fr-ch":781,"./fr-ch.js":781,"./fr.js":779,"./fy":782,"./fy.js":782,"./ga":783,"./ga.js":783,"./gd":784,"./gd.js":784,"./gl":785,"./gl.js":785,"./gom-deva":786,"./gom-deva.js":786,"./gom-latn":787,"./gom-latn.js":787,"./gu":788,"./gu.js":788,"./he":789,"./he.js":789,"./hi":790,"./hi.js":790,"./hr":791,"./hr.js":791,"./hu":792,"./hu.js":792,"./hy-am":793,"./hy-am.js":793,"./id":794,"./id.js":794,"./is":795,"./is.js":795,"./it":796,"./it-ch":797,"./it-ch.js":797,"./it.js":796,"./ja":798,"./ja.js":798,"./jv":799,"./jv.js":799,"./ka":800,"./ka.js":800,"./kk":801,"./kk.js":801,"./km":802,"./km.js":802,"./kn":803,"./kn.js":803,"./ko":804,"./ko.js":804,"./ku":805,"./ku.js":805,"./ky":806,"./ky.js":806,"./lb":807,"./lb.js":807,"./lo":808,"./lo.js":808,"./lt":809,"./lt.js":809,"./lv":810,"./lv.js":810,"./me":811,"./me.js":811,"./mi":812,"./mi.js":812,"./mk":813,"./mk.js":813,"./ml":814,"./ml.js":814,"./mn":815,"./mn.js":815,"./mr":816,"./mr.js":816,"./ms":817,"./ms-my":818,"./ms-my.js":818,"./ms.js":817,"./mt":819,"./mt.js":819,"./my":820,"./my.js":820,"./nb":821,"./nb.js":821,"./ne":822,"./ne.js":822,"./nl":823,"./nl-be":824,"./nl-be.js":824,"./nl.js":823,"./nn":825,"./nn.js":825,"./oc-lnc":826,"./oc-lnc.js":826,"./pa-in":827,"./pa-in.js":827,"./pl":828,"./pl.js":828,"./pt":829,"./pt-br":830,"./pt-br.js":830,"./pt.js":829,"./ro":831,"./ro.js":831,"./ru":832,"./ru.js":832,"./sd":833,"./sd.js":833,"./se":834,"./se.js":834,"./si":835,"./si.js":835,"./sk":836,"./sk.js":836,"./sl":837,"./sl.js":837,"./sq":838,"./sq.js":838,"./sr":839,"./sr-cyrl":840,"./sr-cyrl.js":840,"./sr.js":839,"./ss":841,"./ss.js":841,"./sv":842,"./sv.js":842,"./sw":843,"./sw.js":843,"./ta":844,"./ta.js":844,"./te":845,"./te.js":845,"./tet":846,"./tet.js":846,"./tg":847,"./tg.js":847,"./th":848,"./th.js":848,"./tk":849,"./tk.js":849,"./tl-ph":850,"./tl-ph.js":850,"./tlh":851,"./tlh.js":851,"./tr":852,"./tr.js":852,"./tzl":853,"./tzl.js":853,"./tzm":854,"./tzm-latn":855,"./tzm-latn.js":855,"./tzm.js":854,"./ug-cn":856,"./ug-cn.js":856,"./uk":857,"./uk.js":857,"./ur":858,"./ur.js":858,"./uz":859,"./uz-latn":860,"./uz-latn.js":860,"./uz.js":859,"./vi":861,"./vi.js":861,"./x-pseudo":862,"./x-pseudo.js":862,"./yo":863,"./yo.js":863,"./zh-cn":864,"./zh-cn.js":864,"./zh-hk":865,"./zh-hk.js":865,"./zh-mo":866,"./zh-mo.js":866,"./zh-tw":867,"./zh-tw.js":867};function n(e){var r=c(e);return t(r)}function c(e){if(!t.o(map,e)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return map[e]}n.keys=function(){return Object.keys(map)},n.resolve=c,e.exports=n,n.id=885},923:function(e,r,t){"use strict";t.r(r);t(69);var n=t(21),c=t(726),o={name:"CasesPerMonth",components:{BarChart:t(873).a},data:function(){return{options:{responsive:!0,maintainAspectRatio:!1,legend:{display:!1},plugins:{datalabels:{color:"#fdfdfd"}}},dataCollection:null,loading:!0}},methods:{fillData:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var t,n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.a.casesPerMonth();case 2:t=r.sent,n=t.months,o=t.quantities,e.dataCollection={labels:n,datasets:[{borderAlign:"center",label:"Number of cases",backgroundColor:"#019edf",data:o}]},e.loading=!1;case 7:case"end":return r.stop()}}),r)})))()}},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.fillData();case 2:case"end":return r.stop()}}),r)})))()}},l=t(65),f=t(107),j=t.n(f),d=t(874),m=t(239),h=t(879),component=Object(l.a)(o,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return e.loading?t("v-row",[t("v-col",{attrs:{align:"center"}},[e.loading?t("v-progress-circular",{attrs:{indeterminate:"",color:"blue",size:50}}):e._e()],1)],1):t("v-row",[t("v-col",{attrs:{align:"center"}},[t("p",[t("b",[e._v("Cases Per Month")])]),e._v(" "),e.loading?e._e():t("bar-chart",{attrs:{"chart-data":e.dataCollection,options:e.options}})],1)],1)}),[],!1,null,null,null);r.default=component.exports;j()(component,{VCol:d.a,VProgressCircular:m.a,VRow:h.a})}}]);