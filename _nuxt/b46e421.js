(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{877:function(e,t,r){"use strict";var n=r(887);t.a={extends:n.a,mixins:[n.d.reactiveProp],props:["chartData","options"],mounted:function(){this.renderChart(this.chartData,this.options)}}},891:function(e,t,r){var map={"./af":740,"./af.js":740,"./ar":741,"./ar-dz":742,"./ar-dz.js":742,"./ar-kw":743,"./ar-kw.js":743,"./ar-ly":744,"./ar-ly.js":744,"./ar-ma":745,"./ar-ma.js":745,"./ar-sa":746,"./ar-sa.js":746,"./ar-tn":747,"./ar-tn.js":747,"./ar.js":741,"./az":748,"./az.js":748,"./be":749,"./be.js":749,"./bg":750,"./bg.js":750,"./bm":751,"./bm.js":751,"./bn":752,"./bn-bd":753,"./bn-bd.js":753,"./bn.js":752,"./bo":754,"./bo.js":754,"./br":755,"./br.js":755,"./bs":756,"./bs.js":756,"./ca":757,"./ca.js":757,"./cs":758,"./cs.js":758,"./cv":759,"./cv.js":759,"./cy":760,"./cy.js":760,"./da":761,"./da.js":761,"./de":762,"./de-at":763,"./de-at.js":763,"./de-ch":764,"./de-ch.js":764,"./de.js":762,"./dv":765,"./dv.js":765,"./el":766,"./el.js":766,"./en-au":767,"./en-au.js":767,"./en-ca":768,"./en-ca.js":768,"./en-gb":769,"./en-gb.js":769,"./en-ie":770,"./en-ie.js":770,"./en-il":771,"./en-il.js":771,"./en-in":772,"./en-in.js":772,"./en-nz":773,"./en-nz.js":773,"./en-sg":774,"./en-sg.js":774,"./eo":775,"./eo.js":775,"./es":776,"./es-do":777,"./es-do.js":777,"./es-mx":778,"./es-mx.js":778,"./es-us":779,"./es-us.js":779,"./es.js":776,"./et":780,"./et.js":780,"./eu":781,"./eu.js":781,"./fa":782,"./fa.js":782,"./fi":783,"./fi.js":783,"./fil":784,"./fil.js":784,"./fo":785,"./fo.js":785,"./fr":786,"./fr-ca":787,"./fr-ca.js":787,"./fr-ch":788,"./fr-ch.js":788,"./fr.js":786,"./fy":789,"./fy.js":789,"./ga":790,"./ga.js":790,"./gd":791,"./gd.js":791,"./gl":792,"./gl.js":792,"./gom-deva":793,"./gom-deva.js":793,"./gom-latn":794,"./gom-latn.js":794,"./gu":795,"./gu.js":795,"./he":796,"./he.js":796,"./hi":797,"./hi.js":797,"./hr":798,"./hr.js":798,"./hu":799,"./hu.js":799,"./hy-am":800,"./hy-am.js":800,"./id":801,"./id.js":801,"./is":802,"./is.js":802,"./it":803,"./it-ch":804,"./it-ch.js":804,"./it.js":803,"./ja":805,"./ja.js":805,"./jv":806,"./jv.js":806,"./ka":807,"./ka.js":807,"./kk":808,"./kk.js":808,"./km":809,"./km.js":809,"./kn":810,"./kn.js":810,"./ko":811,"./ko.js":811,"./ku":812,"./ku.js":812,"./ky":813,"./ky.js":813,"./lb":814,"./lb.js":814,"./lo":815,"./lo.js":815,"./lt":816,"./lt.js":816,"./lv":817,"./lv.js":817,"./me":818,"./me.js":818,"./mi":819,"./mi.js":819,"./mk":820,"./mk.js":820,"./ml":821,"./ml.js":821,"./mn":822,"./mn.js":822,"./mr":823,"./mr.js":823,"./ms":824,"./ms-my":825,"./ms-my.js":825,"./ms.js":824,"./mt":826,"./mt.js":826,"./my":827,"./my.js":827,"./nb":828,"./nb.js":828,"./ne":829,"./ne.js":829,"./nl":830,"./nl-be":831,"./nl-be.js":831,"./nl.js":830,"./nn":832,"./nn.js":832,"./oc-lnc":833,"./oc-lnc.js":833,"./pa-in":834,"./pa-in.js":834,"./pl":835,"./pl.js":835,"./pt":836,"./pt-br":837,"./pt-br.js":837,"./pt.js":836,"./ro":838,"./ro.js":838,"./ru":839,"./ru.js":839,"./sd":840,"./sd.js":840,"./se":841,"./se.js":841,"./si":842,"./si.js":842,"./sk":843,"./sk.js":843,"./sl":844,"./sl.js":844,"./sq":845,"./sq.js":845,"./sr":846,"./sr-cyrl":847,"./sr-cyrl.js":847,"./sr.js":846,"./ss":848,"./ss.js":848,"./sv":849,"./sv.js":849,"./sw":850,"./sw.js":850,"./ta":851,"./ta.js":851,"./te":852,"./te.js":852,"./tet":853,"./tet.js":853,"./tg":854,"./tg.js":854,"./th":855,"./th.js":855,"./tk":856,"./tk.js":856,"./tl-ph":857,"./tl-ph.js":857,"./tlh":858,"./tlh.js":858,"./tr":859,"./tr.js":859,"./tzl":860,"./tzl.js":860,"./tzm":861,"./tzm-latn":862,"./tzm-latn.js":862,"./tzm.js":861,"./ug-cn":863,"./ug-cn.js":863,"./uk":864,"./uk.js":864,"./ur":865,"./ur.js":865,"./uz":866,"./uz-latn":867,"./uz-latn.js":867,"./uz.js":866,"./vi":868,"./vi.js":868,"./x-pseudo":869,"./x-pseudo.js":869,"./yo":870,"./yo.js":870,"./zh-cn":871,"./zh-cn.js":871,"./zh-hk":872,"./zh-hk.js":872,"./zh-mo":873,"./zh-mo.js":873,"./zh-tw":874,"./zh-tw.js":874};function n(e){var t=j(e);return r(t)}function j(e){if(!r.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}n.keys=function(){return Object.keys(map)},n.resolve=j,e.exports=n,n.id=891},934:function(e,t,r){"use strict";r.r(t);r(55);var n=r(17),j=r(734),o=r(877),c=(r(895),{name:"SuccessfulProcedures",components:{BarChart:o.a},data:function(){return{optionsBarChart:null,datacollectionBarChart:null,loading:!0}},methods:{fillData:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.a.successfulProceduresPerYear();case 2:r=t.sent,n=r.uniqueYears,o=r.perc,e.datacollectionBarChart={labels:n,datasets:[{borderAlign:"center",label:"% successful procedures per year",backgroundColor:"#019edf",data:o}]},e.optionsBarChart={responsive:!0,maintainAspectRatio:!1,legend:{display:!1},scales:{yAxes:[{ticks:{max:100,min:50}}]}},e.loading=!1;case 8:case"end":return t.stop()}}),t)})))()}},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fillData();case 2:case"end":return t.stop()}}),t)})))()}}),l=r(56),d=r(81),m=r.n(d),h=r(884),f=r(723),v=r(239),k=r(878),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",[r("v-col",{attrs:{align:"center"}},[e.loading?r("v-progress-circular",{attrs:{indeterminate:"",color:"blue",size:50}}):e._e()],1),e._v(" "),e.loading?e._e():r("v-row",{staticClass:"mt-10"},[r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("Successful Procedures Per Year")])]),e._v(" "),e.loading?e._e():r("bar-chart",{attrs:{"chart-data":e.datacollectionBarChart,options:e.optionsBarChart}})],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;m()(component,{VCol:h.a,VContainer:f.a,VProgressCircular:v.a,VRow:k.a})}}]);