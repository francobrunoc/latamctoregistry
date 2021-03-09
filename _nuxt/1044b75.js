(window.webpackJsonp=window.webpackJsonp||[]).push([[27,26,29],{877:function(t,e,n){"use strict";var r=n(885);e.a={extends:r.a,mixins:[r.d.reactiveProp],props:["chartData","options"],mounted:function(){this.renderChart(this.chartData,this.options)}}},883:function(t,e,n){"use strict";n(20),n(14),n(15);var r=n(5),o=(n(67),n(731),n(81),n(12),n(9),n(16),n(55),n(56),n(407),n(3)),c=n(97),l=n(4);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],m=["start","end","center"];function O(t,e){return v.reduce((function(n,r){return n[t+Object(l.D)(r)]=e(),n}),{})}var h=function(t){return[].concat(m,["baseline","stretch"]).includes(t)},y=O("align",(function(){return{type:String,default:null,validator:h}})),w=function(t){return[].concat(m,["space-between","space-around"]).includes(t)},j=O("justify",(function(){return{type:String,default:null,validator:w}})),C=function(t){return[].concat(m,["space-between","space-around","stretch"]).includes(t)},_=O("alignContent",(function(){return{type:String,default:null,validator:C}})),x={align:Object.keys(y),justify:Object.keys(j),alignContent:Object.keys(_)},P={align:"align",justify:"justify",alignContent:"align-content"};function k(t,e,n){var r=P[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var R=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:f(f(f({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:h}},y),{},{justify:{type:String,default:null,validator:w}},j),{},{alignContent:{type:String,default:null,validator:C}},_),render:function(t,e){var n=e.props,data=e.data,o=e.children,l="";for(var d in n)l+=String(n[d]);var f=R.get(l);return f||function(){var t,e;for(e in f=[],x)x[e].forEach((function(t){var r=n[t],o=k(e,t,r);o&&f.push(o)}));f.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),R.set(l,f)}(),t(n.tag,Object(c.a)(data,{staticClass:"row",class:f}),o)}})},925:function(t,e,n){"use strict";n.r(e);n(61);var r=n(19),o=n(730),c={name:"ProceduralComplications",components:{BarChart:n(877).a},data:function(){return{loading:!0,options:{plugins:{datalabels:{formatter:function(t){return t+"%"},color:"#3e3e3e",anchor:"end",clamp:!0,align:"top",font:{size:20}}},responsive:!0,maintainAspectRatio:!1,legend:{display:!1},scales:{yAxes:[{scaleLabel:{labelString:"% Ocurrence",display:!0},ticks:{max:10}}]}},dataCollection:null}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c,l,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.proceduralComplications();case 2:n=e.sent,r=n.perfurations,c=n.cardiacTamponade,l=n.bleedings,d=n.newRequirementDialysis,t.dataCollection={labels:["Perfuration","Cardiac Tamponade","Major Bleeding","New Requirement Dialysis"],datasets:[{borderAlign:"center",label:"% of procedural incidence",backgroundColor:"#df7401",data:[r,c,l,d]}]},t.loading=!1;case 9:case"end":return e.stop()}}),e)})))()}},l=n(66),d=n(107),f=n.n(d),v=n(878),m=n(239),O=n(883),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.loading?n("v-row",[n("v-col",{attrs:{align:"center"}},[t.loading?n("v-progress-circular",{attrs:{indeterminate:"",color:"blue",size:50}}):t._e()],1)],1):n("v-row",{staticClass:"mb-10"},[n("v-col",{attrs:{align:"center"}},[n("p",[n("b",[t._v("Procedural Complications")])]),t._v(" "),t.loading?t._e():n("bar-chart",{attrs:{"chart-data":t.dataCollection,options:t.options}})],1)],1)}),[],!1,null,"75f39036",null);e.default=component.exports;f()(component,{VCol:v.a,VProgressCircular:m.a,VRow:O.a})},926:function(t,e,n){"use strict";n.r(e);n(61);var r=n(19),o=n(730),c={name:"InHospitalOutcomes",components:{BarChart:n(877).a},data:function(){return{loading:!0,options:{plugins:{datalabels:{formatter:function(t){return t+"%"},color:"#3e3e3e",anchor:"end",clamp:!0,align:"top",font:{size:20}}},responsive:!0,maintainAspectRatio:!1,legend:{display:!1},scales:{yAxes:[{scaleLabel:{labelString:"% Ocurrence",display:!0},ticks:{max:10}}]}},dataCollection:null}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c,l,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.inHospitalOutcomes();case 2:n=e.sent,r=n.deaths,c=n.strokes,l=n.newMi,d=n.unplannedRevascularizations,t.dataCollection={labels:["Death","Stroke","MI","Unplanned Revascularization"],datasets:[{borderAlign:"center",label:"% of in-hospital outcomes",backgroundColor:"#7001df",data:[r,c,l,d]}]},t.loading=!1;case 9:case"end":return e.stop()}}),e)})))()}},l=n(66),d=n(107),f=n.n(d),v=n(878),m=n(239),O=n(883),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.loading?n("v-row",[n("v-col",{attrs:{align:"center"}},[t.loading?n("v-progress-circular",{attrs:{indeterminate:"",color:"blue",size:50}}):t._e()],1)],1):n("v-row",[n("v-col",{attrs:{align:"center"}},[n("p",[n("b",[t._v("In-Hospital Outcomes")])]),t._v(" "),t.loading?t._e():n("bar-chart",{attrs:{"chart-data":t.dataCollection,options:t.options}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VCol:v.a,VProgressCircular:m.a,VRow:O.a})},974:function(t,e,n){"use strict";n.r(e);var r=n(954),o=n(925),c=n(926),l={name:"Outcomes",components:{OneYearAngina:r.default,ProceduralComplications:o.default,InHospitalOutcomes:c.default}},d=n(66),f=n(107),v=n.n(f),m=n(264),O=n(878),h=n(720),y=n(883),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",[n("v-col",{attrs:{align:"center"}},[n("v-btn",{attrs:{small:"",target:"_blank",href:"http://redcap.cardiologia.org.br/redcap_v10.1.1/DataExport/index.php?pid=108&report_id=1296&stats_charts=1"}},[t._v("\n        View your center data\n      ")])],1)],1),t._v(" "),n("OneYearAngina"),t._v(" "),n("ProceduralComplications"),t._v(" "),n("InHospitalOutcomes")],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VBtn:m.a,VCol:O.a,VContainer:h.a,VRow:y.a})}}]);