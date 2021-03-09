(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{1059:function(e,t,r){"use strict";r.r(t);r(61);var n=r(19),j=r(732),o=r(875),c=(r(895),{name:"SuccessfulProcedures",components:{BarChart:o.a},data:function(){return{optionsBarChart:null,datacollectionBarChart:null,loading:!0}},methods:{fillData:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.a.successfulProceduresPerYear();case 2:r=t.sent,n=r.uniqueYears,o=r.perc,e.datacollectionBarChart={labels:n,datasets:[{borderAlign:"center",label:"% successful procedures per year",backgroundColor:"#019edf",data:o}]},e.optionsBarChart={responsive:!0,maintainAspectRatio:!1,legend:{display:!1},scales:{yAxes:[{ticks:{max:100,min:50}}]}},e.loading=!1;case 8:case"end":return t.stop()}}),t)})))()}},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fillData();case 2:case"end":return t.stop()}}),t)})))()}}),l=r(66),d=r(107),m=r.n(d),h=r(882),f=r(720),k=r(239),v=r(876),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",[r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("Successful Procedures Per Year")])]),e._v(" "),e.loading?r("v-progress-circular",{attrs:{indeterminate:"",color:"blue",size:50}}):e._e(),e._v(" "),e.loading?e._e():r("bar-chart",{attrs:{"chart-data":e.datacollectionBarChart,options:e.optionsBarChart}})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;m()(component,{VCol:h.a,VContainer:f.a,VProgressCircular:k.a,VRow:v.a})},875:function(e,t,r){"use strict";var n=r(887);t.a={extends:n.a,mixins:[n.d.reactiveProp],props:["chartData","options"],mounted:function(){this.renderChart(this.chartData,this.options)}}},889:function(e,t,r){var map={"./af":738,"./af.js":738,"./ar":739,"./ar-dz":740,"./ar-dz.js":740,"./ar-kw":741,"./ar-kw.js":741,"./ar-ly":742,"./ar-ly.js":742,"./ar-ma":743,"./ar-ma.js":743,"./ar-sa":744,"./ar-sa.js":744,"./ar-tn":745,"./ar-tn.js":745,"./ar.js":739,"./az":746,"./az.js":746,"./be":747,"./be.js":747,"./bg":748,"./bg.js":748,"./bm":749,"./bm.js":749,"./bn":750,"./bn-bd":751,"./bn-bd.js":751,"./bn.js":750,"./bo":752,"./bo.js":752,"./br":753,"./br.js":753,"./bs":754,"./bs.js":754,"./ca":755,"./ca.js":755,"./cs":756,"./cs.js":756,"./cv":757,"./cv.js":757,"./cy":758,"./cy.js":758,"./da":759,"./da.js":759,"./de":760,"./de-at":761,"./de-at.js":761,"./de-ch":762,"./de-ch.js":762,"./de.js":760,"./dv":763,"./dv.js":763,"./el":764,"./el.js":764,"./en-au":765,"./en-au.js":765,"./en-ca":766,"./en-ca.js":766,"./en-gb":767,"./en-gb.js":767,"./en-ie":768,"./en-ie.js":768,"./en-il":769,"./en-il.js":769,"./en-in":770,"./en-in.js":770,"./en-nz":771,"./en-nz.js":771,"./en-sg":772,"./en-sg.js":772,"./eo":773,"./eo.js":773,"./es":774,"./es-do":775,"./es-do.js":775,"./es-mx":776,"./es-mx.js":776,"./es-us":777,"./es-us.js":777,"./es.js":774,"./et":778,"./et.js":778,"./eu":779,"./eu.js":779,"./fa":780,"./fa.js":780,"./fi":781,"./fi.js":781,"./fil":782,"./fil.js":782,"./fo":783,"./fo.js":783,"./fr":784,"./fr-ca":785,"./fr-ca.js":785,"./fr-ch":786,"./fr-ch.js":786,"./fr.js":784,"./fy":787,"./fy.js":787,"./ga":788,"./ga.js":788,"./gd":789,"./gd.js":789,"./gl":790,"./gl.js":790,"./gom-deva":791,"./gom-deva.js":791,"./gom-latn":792,"./gom-latn.js":792,"./gu":793,"./gu.js":793,"./he":794,"./he.js":794,"./hi":795,"./hi.js":795,"./hr":796,"./hr.js":796,"./hu":797,"./hu.js":797,"./hy-am":798,"./hy-am.js":798,"./id":799,"./id.js":799,"./is":800,"./is.js":800,"./it":801,"./it-ch":802,"./it-ch.js":802,"./it.js":801,"./ja":803,"./ja.js":803,"./jv":804,"./jv.js":804,"./ka":805,"./ka.js":805,"./kk":806,"./kk.js":806,"./km":807,"./km.js":807,"./kn":808,"./kn.js":808,"./ko":809,"./ko.js":809,"./ku":810,"./ku.js":810,"./ky":811,"./ky.js":811,"./lb":812,"./lb.js":812,"./lo":813,"./lo.js":813,"./lt":814,"./lt.js":814,"./lv":815,"./lv.js":815,"./me":816,"./me.js":816,"./mi":817,"./mi.js":817,"./mk":818,"./mk.js":818,"./ml":819,"./ml.js":819,"./mn":820,"./mn.js":820,"./mr":821,"./mr.js":821,"./ms":822,"./ms-my":823,"./ms-my.js":823,"./ms.js":822,"./mt":824,"./mt.js":824,"./my":825,"./my.js":825,"./nb":826,"./nb.js":826,"./ne":827,"./ne.js":827,"./nl":828,"./nl-be":829,"./nl-be.js":829,"./nl.js":828,"./nn":830,"./nn.js":830,"./oc-lnc":831,"./oc-lnc.js":831,"./pa-in":832,"./pa-in.js":832,"./pl":833,"./pl.js":833,"./pt":834,"./pt-br":835,"./pt-br.js":835,"./pt.js":834,"./ro":836,"./ro.js":836,"./ru":837,"./ru.js":837,"./sd":838,"./sd.js":838,"./se":839,"./se.js":839,"./si":840,"./si.js":840,"./sk":841,"./sk.js":841,"./sl":842,"./sl.js":842,"./sq":843,"./sq.js":843,"./sr":844,"./sr-cyrl":845,"./sr-cyrl.js":845,"./sr.js":844,"./ss":846,"./ss.js":846,"./sv":847,"./sv.js":847,"./sw":848,"./sw.js":848,"./ta":849,"./ta.js":849,"./te":850,"./te.js":850,"./tet":851,"./tet.js":851,"./tg":852,"./tg.js":852,"./th":853,"./th.js":853,"./tk":854,"./tk.js":854,"./tl-ph":855,"./tl-ph.js":855,"./tlh":856,"./tlh.js":856,"./tr":857,"./tr.js":857,"./tzl":858,"./tzl.js":858,"./tzm":859,"./tzm-latn":860,"./tzm-latn.js":860,"./tzm.js":859,"./ug-cn":861,"./ug-cn.js":861,"./uk":862,"./uk.js":862,"./ur":863,"./ur.js":863,"./uz":864,"./uz-latn":865,"./uz-latn.js":865,"./uz.js":864,"./vi":866,"./vi.js":866,"./x-pseudo":867,"./x-pseudo.js":867,"./yo":868,"./yo.js":868,"./zh-cn":869,"./zh-cn.js":869,"./zh-hk":870,"./zh-hk.js":870,"./zh-mo":871,"./zh-mo.js":871,"./zh-tw":872,"./zh-tw.js":872};function n(e){var t=j(e);return r(t)}function j(e){if(!r.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}n.keys=function(){return Object.keys(map)},n.resolve=j,e.exports=n,n.id=889}}]);