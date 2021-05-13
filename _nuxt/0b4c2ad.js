(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{876:function(e,t,r){"use strict";var n=r(886);t.a={extends:n.a,mixins:[n.d.reactiveProp],props:["chartData","options"],mounted:function(){this.renderChart(this.chartData,this.options)}}},890:function(e,t,r){var map={"./af":739,"./af.js":739,"./ar":740,"./ar-dz":741,"./ar-dz.js":741,"./ar-kw":742,"./ar-kw.js":742,"./ar-ly":743,"./ar-ly.js":743,"./ar-ma":744,"./ar-ma.js":744,"./ar-sa":745,"./ar-sa.js":745,"./ar-tn":746,"./ar-tn.js":746,"./ar.js":740,"./az":747,"./az.js":747,"./be":748,"./be.js":748,"./bg":749,"./bg.js":749,"./bm":750,"./bm.js":750,"./bn":751,"./bn-bd":752,"./bn-bd.js":752,"./bn.js":751,"./bo":753,"./bo.js":753,"./br":754,"./br.js":754,"./bs":755,"./bs.js":755,"./ca":756,"./ca.js":756,"./cs":757,"./cs.js":757,"./cv":758,"./cv.js":758,"./cy":759,"./cy.js":759,"./da":760,"./da.js":760,"./de":761,"./de-at":762,"./de-at.js":762,"./de-ch":763,"./de-ch.js":763,"./de.js":761,"./dv":764,"./dv.js":764,"./el":765,"./el.js":765,"./en-au":766,"./en-au.js":766,"./en-ca":767,"./en-ca.js":767,"./en-gb":768,"./en-gb.js":768,"./en-ie":769,"./en-ie.js":769,"./en-il":770,"./en-il.js":770,"./en-in":771,"./en-in.js":771,"./en-nz":772,"./en-nz.js":772,"./en-sg":773,"./en-sg.js":773,"./eo":774,"./eo.js":774,"./es":775,"./es-do":776,"./es-do.js":776,"./es-mx":777,"./es-mx.js":777,"./es-us":778,"./es-us.js":778,"./es.js":775,"./et":779,"./et.js":779,"./eu":780,"./eu.js":780,"./fa":781,"./fa.js":781,"./fi":782,"./fi.js":782,"./fil":783,"./fil.js":783,"./fo":784,"./fo.js":784,"./fr":785,"./fr-ca":786,"./fr-ca.js":786,"./fr-ch":787,"./fr-ch.js":787,"./fr.js":785,"./fy":788,"./fy.js":788,"./ga":789,"./ga.js":789,"./gd":790,"./gd.js":790,"./gl":791,"./gl.js":791,"./gom-deva":792,"./gom-deva.js":792,"./gom-latn":793,"./gom-latn.js":793,"./gu":794,"./gu.js":794,"./he":795,"./he.js":795,"./hi":796,"./hi.js":796,"./hr":797,"./hr.js":797,"./hu":798,"./hu.js":798,"./hy-am":799,"./hy-am.js":799,"./id":800,"./id.js":800,"./is":801,"./is.js":801,"./it":802,"./it-ch":803,"./it-ch.js":803,"./it.js":802,"./ja":804,"./ja.js":804,"./jv":805,"./jv.js":805,"./ka":806,"./ka.js":806,"./kk":807,"./kk.js":807,"./km":808,"./km.js":808,"./kn":809,"./kn.js":809,"./ko":810,"./ko.js":810,"./ku":811,"./ku.js":811,"./ky":812,"./ky.js":812,"./lb":813,"./lb.js":813,"./lo":814,"./lo.js":814,"./lt":815,"./lt.js":815,"./lv":816,"./lv.js":816,"./me":817,"./me.js":817,"./mi":818,"./mi.js":818,"./mk":819,"./mk.js":819,"./ml":820,"./ml.js":820,"./mn":821,"./mn.js":821,"./mr":822,"./mr.js":822,"./ms":823,"./ms-my":824,"./ms-my.js":824,"./ms.js":823,"./mt":825,"./mt.js":825,"./my":826,"./my.js":826,"./nb":827,"./nb.js":827,"./ne":828,"./ne.js":828,"./nl":829,"./nl-be":830,"./nl-be.js":830,"./nl.js":829,"./nn":831,"./nn.js":831,"./oc-lnc":832,"./oc-lnc.js":832,"./pa-in":833,"./pa-in.js":833,"./pl":834,"./pl.js":834,"./pt":835,"./pt-br":836,"./pt-br.js":836,"./pt.js":835,"./ro":837,"./ro.js":837,"./ru":838,"./ru.js":838,"./sd":839,"./sd.js":839,"./se":840,"./se.js":840,"./si":841,"./si.js":841,"./sk":842,"./sk.js":842,"./sl":843,"./sl.js":843,"./sq":844,"./sq.js":844,"./sr":845,"./sr-cyrl":846,"./sr-cyrl.js":846,"./sr.js":845,"./ss":847,"./ss.js":847,"./sv":848,"./sv.js":848,"./sw":849,"./sw.js":849,"./ta":850,"./ta.js":850,"./te":851,"./te.js":851,"./tet":852,"./tet.js":852,"./tg":853,"./tg.js":853,"./th":854,"./th.js":854,"./tk":855,"./tk.js":855,"./tl-ph":856,"./tl-ph.js":856,"./tlh":857,"./tlh.js":857,"./tr":858,"./tr.js":858,"./tzl":859,"./tzl.js":859,"./tzm":860,"./tzm-latn":861,"./tzm-latn.js":861,"./tzm.js":860,"./ug-cn":862,"./ug-cn.js":862,"./uk":863,"./uk.js":863,"./ur":864,"./ur.js":864,"./uz":865,"./uz-latn":866,"./uz-latn.js":866,"./uz.js":865,"./vi":867,"./vi.js":867,"./x-pseudo":868,"./x-pseudo.js":868,"./yo":869,"./yo.js":869,"./zh-cn":870,"./zh-cn.js":870,"./zh-hk":871,"./zh-hk.js":871,"./zh-mo":872,"./zh-mo.js":872,"./zh-tw":873,"./zh-tw.js":873};function n(e){var t=j(e);return r(t)}function j(e){if(!r.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}n.keys=function(){return Object.keys(map)},n.resolve=j,e.exports=n,n.id=890},933:function(e,t,r){"use strict";r.r(t);r(62);var n=r(19),j=r(733),o=r(876),c=(r(894),{name:"SuccessfulProcedures",components:{BarChart:o.a},data:function(){return{optionsBarChart:null,datacollectionBarChart:null,loading:!0}},methods:{fillData:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.a.successfulProceduresPerYear();case 2:r=t.sent,n=r.uniqueYears,o=r.perc,e.datacollectionBarChart={labels:n,datasets:[{borderAlign:"center",label:"% successful procedures per year",backgroundColor:"#019edf",data:o}]},e.optionsBarChart={responsive:!0,maintainAspectRatio:!1,legend:{display:!1},scales:{yAxes:[{ticks:{max:100,min:50}}]}},e.loading=!1;case 8:case"end":return t.stop()}}),t)})))()}},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fillData();case 2:case"end":return t.stop()}}),t)})))()}}),l=r(55),d=r(81),m=r.n(d),h=r(883),f=r(722),v=r(239),k=r(877),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",[r("v-col",{attrs:{align:"center"}},[e.loading?r("v-progress-circular",{attrs:{indeterminate:"",color:"blue",size:50}}):e._e()],1),e._v(" "),e.loading?e._e():r("v-row",{staticClass:"mt-10"},[r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("Successful Procedures Per Year")])]),e._v(" "),e.loading?e._e():r("bar-chart",{attrs:{"chart-data":e.datacollectionBarChart,options:e.optionsBarChart}})],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;m()(component,{VCol:h.a,VContainer:f.a,VProgressCircular:v.a,VRow:k.a})}}]);