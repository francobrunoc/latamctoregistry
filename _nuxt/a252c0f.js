(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{1044:function(e,t,r){"use strict";r.r(t);r(69);var n=r(21),j=r(726),o=r(873),c=(r(891),{name:"SuccessfulProcedures",components:{BarChart:o.a},data:function(){return{optionsBarChart:null,datacollectionBarChart:null,loading:!0}},methods:{fillData:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.a.successfulProceduresPerYear();case 2:r=t.sent,n=r.uniqueYears,o=r.perc,e.datacollectionBarChart={labels:n,datasets:[{borderAlign:"center",label:"% successful procedures per year",backgroundColor:"#019edf",data:o}]},e.optionsBarChart={responsive:!0,maintainAspectRatio:!1,legend:{display:!1},scales:{yAxes:[{ticks:{max:100,min:50}}]}},e.loading=!1;case 8:case"end":return t.stop()}}),t)})))()}},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fillData();case 2:case"end":return t.stop()}}),t)})))()}}),l=r(65),d=r(107),m=r.n(d),h=r(874),f=r(716),k=r(239),v=r(879),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",[r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("Successful Procedures Per Year")])]),e._v(" "),e.loading?r("v-progress-circular",{attrs:{indeterminate:"",color:"blue",size:50}}):e._e(),e._v(" "),e.loading?e._e():r("bar-chart",{attrs:{"chart-data":e.datacollectionBarChart,options:e.optionsBarChart}})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;m()(component,{VCol:h.a,VContainer:f.a,VProgressCircular:k.a,VRow:v.a})},873:function(e,t,r){"use strict";var n=r(881);t.a={extends:n.a,mixins:[n.d.reactiveProp],props:["chartData","options"],mounted:function(){this.renderChart(this.chartData,this.options)}}},885:function(e,t,r){var map={"./af":733,"./af.js":733,"./ar":734,"./ar-dz":735,"./ar-dz.js":735,"./ar-kw":736,"./ar-kw.js":736,"./ar-ly":737,"./ar-ly.js":737,"./ar-ma":738,"./ar-ma.js":738,"./ar-sa":739,"./ar-sa.js":739,"./ar-tn":740,"./ar-tn.js":740,"./ar.js":734,"./az":741,"./az.js":741,"./be":742,"./be.js":742,"./bg":743,"./bg.js":743,"./bm":744,"./bm.js":744,"./bn":745,"./bn-bd":746,"./bn-bd.js":746,"./bn.js":745,"./bo":747,"./bo.js":747,"./br":748,"./br.js":748,"./bs":749,"./bs.js":749,"./ca":750,"./ca.js":750,"./cs":751,"./cs.js":751,"./cv":752,"./cv.js":752,"./cy":753,"./cy.js":753,"./da":754,"./da.js":754,"./de":755,"./de-at":756,"./de-at.js":756,"./de-ch":757,"./de-ch.js":757,"./de.js":755,"./dv":758,"./dv.js":758,"./el":759,"./el.js":759,"./en-au":760,"./en-au.js":760,"./en-ca":761,"./en-ca.js":761,"./en-gb":762,"./en-gb.js":762,"./en-ie":763,"./en-ie.js":763,"./en-il":764,"./en-il.js":764,"./en-in":765,"./en-in.js":765,"./en-nz":766,"./en-nz.js":766,"./en-sg":767,"./en-sg.js":767,"./eo":768,"./eo.js":768,"./es":769,"./es-do":770,"./es-do.js":770,"./es-mx":771,"./es-mx.js":771,"./es-us":772,"./es-us.js":772,"./es.js":769,"./et":773,"./et.js":773,"./eu":774,"./eu.js":774,"./fa":775,"./fa.js":775,"./fi":776,"./fi.js":776,"./fil":777,"./fil.js":777,"./fo":778,"./fo.js":778,"./fr":779,"./fr-ca":780,"./fr-ca.js":780,"./fr-ch":781,"./fr-ch.js":781,"./fr.js":779,"./fy":782,"./fy.js":782,"./ga":783,"./ga.js":783,"./gd":784,"./gd.js":784,"./gl":785,"./gl.js":785,"./gom-deva":786,"./gom-deva.js":786,"./gom-latn":787,"./gom-latn.js":787,"./gu":788,"./gu.js":788,"./he":789,"./he.js":789,"./hi":790,"./hi.js":790,"./hr":791,"./hr.js":791,"./hu":792,"./hu.js":792,"./hy-am":793,"./hy-am.js":793,"./id":794,"./id.js":794,"./is":795,"./is.js":795,"./it":796,"./it-ch":797,"./it-ch.js":797,"./it.js":796,"./ja":798,"./ja.js":798,"./jv":799,"./jv.js":799,"./ka":800,"./ka.js":800,"./kk":801,"./kk.js":801,"./km":802,"./km.js":802,"./kn":803,"./kn.js":803,"./ko":804,"./ko.js":804,"./ku":805,"./ku.js":805,"./ky":806,"./ky.js":806,"./lb":807,"./lb.js":807,"./lo":808,"./lo.js":808,"./lt":809,"./lt.js":809,"./lv":810,"./lv.js":810,"./me":811,"./me.js":811,"./mi":812,"./mi.js":812,"./mk":813,"./mk.js":813,"./ml":814,"./ml.js":814,"./mn":815,"./mn.js":815,"./mr":816,"./mr.js":816,"./ms":817,"./ms-my":818,"./ms-my.js":818,"./ms.js":817,"./mt":819,"./mt.js":819,"./my":820,"./my.js":820,"./nb":821,"./nb.js":821,"./ne":822,"./ne.js":822,"./nl":823,"./nl-be":824,"./nl-be.js":824,"./nl.js":823,"./nn":825,"./nn.js":825,"./oc-lnc":826,"./oc-lnc.js":826,"./pa-in":827,"./pa-in.js":827,"./pl":828,"./pl.js":828,"./pt":829,"./pt-br":830,"./pt-br.js":830,"./pt.js":829,"./ro":831,"./ro.js":831,"./ru":832,"./ru.js":832,"./sd":833,"./sd.js":833,"./se":834,"./se.js":834,"./si":835,"./si.js":835,"./sk":836,"./sk.js":836,"./sl":837,"./sl.js":837,"./sq":838,"./sq.js":838,"./sr":839,"./sr-cyrl":840,"./sr-cyrl.js":840,"./sr.js":839,"./ss":841,"./ss.js":841,"./sv":842,"./sv.js":842,"./sw":843,"./sw.js":843,"./ta":844,"./ta.js":844,"./te":845,"./te.js":845,"./tet":846,"./tet.js":846,"./tg":847,"./tg.js":847,"./th":848,"./th.js":848,"./tk":849,"./tk.js":849,"./tl-ph":850,"./tl-ph.js":850,"./tlh":851,"./tlh.js":851,"./tr":852,"./tr.js":852,"./tzl":853,"./tzl.js":853,"./tzm":854,"./tzm-latn":855,"./tzm-latn.js":855,"./tzm.js":854,"./ug-cn":856,"./ug-cn.js":856,"./uk":857,"./uk.js":857,"./ur":858,"./ur.js":858,"./uz":859,"./uz-latn":860,"./uz-latn.js":860,"./uz.js":859,"./vi":861,"./vi.js":861,"./x-pseudo":862,"./x-pseudo.js":862,"./yo":863,"./yo.js":863,"./zh-cn":864,"./zh-cn.js":864,"./zh-hk":865,"./zh-hk.js":865,"./zh-mo":866,"./zh-mo.js":866,"./zh-tw":867,"./zh-tw.js":867};function n(e){var t=j(e);return r(t)}function j(e){if(!r.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}n.keys=function(){return Object.keys(map)},n.resolve=j,e.exports=n,n.id=885}}]);