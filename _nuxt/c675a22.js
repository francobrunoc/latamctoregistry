(window.webpackJsonp=window.webpackJsonp||[]).push([[18,13,14,21],{731:function(e,t,r){"use strict";(function(e){r(44),r(45),r(9),r(61);var n=r(19),c=r(879),o=r.n(c),l=r(735),v="https://7cb5vfypm9.execute-api.us-west-2.amazonaws.com/dev/",d=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(path){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(l.a)("get",path));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(path,data){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(l.a)("post",path,data));case 1:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),f=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(path,r){var n,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=[],c={headers:{Authorization:r}},t.next=4,o.a.get(v.concat(path||""),c).then((function(t){(n=t.data).body&&(n=JSON.parse(e.from(n.body).toString("utf-8")))})).catch((function(e){return console.error(e)}));case 4:return t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),_=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(path,data,t){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=[],n={headers:{Authorization:t}},e.next=4,o.a.post(v.concat(path||""),data||"",n).then((function(e){r=e})).catch((function(e){return console.error(e)}));case 4:return e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}();t.a={GET:d,get:f,POST:m,post:_}}).call(this,r(8).Buffer)},732:function(e,t,r){"use strict";r(61);var n=r(19),c=r(731),o=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(path){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c.a.GET(path));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l={projectInfo:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("registry/project/info/notes");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},countAll:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("registry/procedures/count");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},successfulStrategies:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("registry/procedures/successfulStrategies");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},successfulProceduresPerYear:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("registry/procedures/successfulProceduresPerYear");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},annualProcedures:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("registry/procedures/annualProcedures");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},clinicalDataQuality:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("registry/procedures/clinicalDataQuality");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},outcomesDataQuality:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("registry/procedures/outcomesDataQuality");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},proceduralDataQuality:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("registry/procedures/proceduralDataQuality");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},angiographicDataQuality:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("registry/procedures/angiographicDataQuality");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},successDataQuality:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("registry/procedures/successDataQuality");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},followUpDataQuality:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("registry/procedures/followUpDataQuality");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},clinicalCharacteristics:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("registry/procedures/clinicalCharacteristics");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},angiographicCharacteristics:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("registry/procedures/angiographicCharacteristics");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},proceduralCharacteristics:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("registry/procedures/proceduralCharacteristics");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},anginaOutcome:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("registry/procedures/anginaOutcome");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},proceduralComplications:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("registry/procedures/proceduralComplications");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},inHospitalOutcomes:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("registry/procedures/inHospitalOutcomes");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},topEnrollers:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("registry/procedures/topEnrollers");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},casesPerMonth:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("registry/procedures/casesPerMonth");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()}};t.a=l},735:function(e,t,r){"use strict";r.d(t,"a",(function(){return v}));r(61);var n,c=r(19),o=r(153),l=r(731),v=function(){var e=Object(c.a)(regeneratorRuntime.mark((function e(t,path,data){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.currentAuthenticatedUser().then((function(u){return n=u.signInUserSession.idToken.jwtToken})).catch((function(e){return console.log(e)}));case 2:if("post"!==t){e.next=6;break}return e.next=5,l.a.post(path,data,n);case 5:return e.abrupt("return",e.sent);case 6:if("get"!==t){e.next=10;break}return e.next=9,l.a.get(path,n);case 9:return e.abrupt("return",e.sent);case 10:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}()},737:function(e,t,r){var content=r(881);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(24).default)("6a70fd7d",content,!0,{sourceMap:!1})},874:function(e,t,r){"use strict";r.r(t);r(26);var n=r(3),c=r(886),o=r.n(c);r(887);n.a.use(o.a);var l={name:"CentMeter",props:{value:Number,size:{type:Number,default:200},thickness:{type:Number,default:30}},computed:{sections:{get:function(){return[{value:this.value,color:"#01ade3"},{value:100-this.value,color:"#f5f8ff"}]}}}},v=(r(880),r(66)),component=Object(v.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("vc-donut",{attrs:{sections:e.sections,size:e.size,thickness:e.thickness}},[r("p",[e._v(e._s(this.value.toString()+"%"))])])}),[],!1,null,"43de4ab5",null);t.default=component.exports},877:function(e,t,r){var content=r(892);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(24).default)("1746da28",content,!0,{sourceMap:!1})},878:function(e,t,r){"use strict";r.r(t);r(12),r(9),r(259),r(26);var n=r(3),c=r(886),o=r.n(c);r(887);n.a.use(o.a);var l={name:"ScoreMeter",props:{value:Object,size:{type:Number,default:180},thickness:{type:Number,default:30}},data:function(){return{score:0}},methods:{openDialog:function(){this.$parent.dialog=!0},getColor:function(){return 0===this.score?"#74d498":this.score<.5?"#f8f455":this.score>.5?"#ff6969":void 0}},computed:{sections:{get:function(){var e=this,t=Object.values(this.value);return t.forEach((function(r){e.score+=Number(r)/100*(10/t.length)})),[{value:10-this.score,color:this.getColor(),label:"Max Score is 10"},{value:this.score,color:"#f5f8ff",label:"Max Score is 10"}]}}}},v=(r(891),r(66)),component=Object(v.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("vc-donut",{staticStyle:{cursor:"pointer"},attrs:{sections:e.sections,size:e.size,thickness:e.thickness,total:10},on:{"section-click":e.openDialog}},[r("span",{staticClass:"score",attrs:{title:"Click for details"},on:{click:e.openDialog}},[e._v("\n    "+e._s((10-this.score).toFixed(1))+"\n  ")])])}),[],!1,null,null,null);t.default=component.exports},880:function(e,t,r){"use strict";r(737)},881:function(e,t,r){var n=r(23)(!1);n.push([e.i,"p[data-v-43de4ab5]{font-size:xxx-large;color:#b8b8b8}",""]),e.exports=n},891:function(e,t,r){"use strict";r(877)},892:function(e,t,r){var n=r(23)(!1);n.push([e.i,"span.score{cursor:pointer;width:100px;height:100px;font-size:xxx-large}",""]),e.exports=n},945:function(e,t,r){"use strict";r.r(t);r(61);var n=r(19),c=r(878),o=r(874),l=r(732),v={name:"ClinicalDataQuality",components:{ScoreMeter:c.default,CentMeter:o.default},data:function(){return{loading:!0,dialog:!1,labels:["Procedure Date","Sex","Diabetes","Dyslipidemia","Hypertension","Active Smoking","Previous PCI","Angina Status","Procedure Indication"],sections:{missingProcedureDate:0,missingSex:0,missingDiabetes:0,missingDyslipidemia:0,missingHypertension:0,missingActiveSmoking:0,missingPreviousPci:0,missingAnginaStatus:0,missingProcedureIndication:0}}},created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=Object,t.t1=e.sections,t.next=4,l.a.clinicalDataQuality();case 4:t.t2=t.sent,t.t0.assign.call(t.t0,t.t1,t.t2),e.loading=!1;case 7:case"end":return t.stop()}}),t)})))()}},d=r(66),m=r(107),f=r.n(m),_=r(264),C=r(898),x=r(730),h=r(882),w=r(1068),y=r(240),k=r(239),D=r(876),S=r(723),component=Object(d.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.loading?r("v-row",[r("v-col",{attrs:{align:"center"}},[e.loading?r("v-progress-circular",{attrs:{indeterminate:"",color:"blue",size:50}}):e._e()],1)],1):r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("Core Clinical Data")])]),e._v(" "),r("v-btn",{attrs:{small:"",target:"_blank",href:"http://redcap.cardiologia.org.br/redcap_v10.1.1/DataExport/index.php?pid=108&report_id=1167&stats_charts=1"}},[e._v("\n    View your center data\n  ")]),e._v(" "),r("ScoreMeter",{staticClass:"mt-8",attrs:{size:250,thickness:40,icon:""},model:{value:e.sections,callback:function(t){e.sections=t},expression:"sections"}}),e._v(" "),r("v-dialog",{model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-card",[r("v-card-title",{staticClass:"primary white--text"},[e._v("\n        Missing Information\n        "),r("v-spacer"),e._v(" "),r("v-btn",{attrs:{icon:""},on:{click:function(t){e.dialog=!1}}},[r("v-icon",{staticClass:"white--text"},[e._v("mdi-close")])],1)],1),e._v(" "),r("v-card-text",[r("v-row",[r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v(e._s(e.labels[0]))])]),e._v(" "),r("CentMeter",{model:{value:e.sections.missingProcedureDate,callback:function(t){e.$set(e.sections,"missingProcedureDate",t)},expression:"sections.missingProcedureDate"}})],1),e._v(" "),r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v(e._s(e.labels[1]))])]),e._v(" "),r("CentMeter",{model:{value:e.sections.missingSex,callback:function(t){e.$set(e.sections,"missingSex",t)},expression:"sections.missingSex"}})],1),e._v(" "),r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v(e._s(e.labels[2]))])]),e._v(" "),r("CentMeter",{model:{value:e.sections.missingDiabetes,callback:function(t){e.$set(e.sections,"missingDiabetes",t)},expression:"sections.missingDiabetes"}})],1)],1),e._v(" "),r("v-row",[r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v(e._s(e.labels[3]))])]),e._v(" "),r("CentMeter",{model:{value:e.sections.missingDyslipidemia,callback:function(t){e.$set(e.sections,"missingDyslipidemia",t)},expression:"sections.missingDyslipidemia"}})],1),e._v(" "),r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v(e._s(e.labels[4]))])]),e._v(" "),r("CentMeter",{model:{value:e.sections.missingHypertension,callback:function(t){e.$set(e.sections,"missingHypertension",t)},expression:"sections.missingHypertension"}})],1),e._v(" "),r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v(e._s(e.labels[5]))])]),e._v(" "),r("CentMeter",{model:{value:e.sections.missingActiveSmoking,callback:function(t){e.$set(e.sections,"missingActiveSmoking",t)},expression:"sections.missingActiveSmoking"}})],1)],1),e._v(" "),r("v-row",[r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v(e._s(e.labels[6]))])]),e._v(" "),r("CentMeter",{model:{value:e.sections.missingPreviousPci,callback:function(t){e.$set(e.sections,"missingPreviousPci",t)},expression:"sections.missingPreviousPci"}})],1),e._v(" "),r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v(e._s(e.labels[7]))])]),e._v(" "),r("CentMeter",{model:{value:e.sections.missingAnginaStatus,callback:function(t){e.$set(e.sections,"missingAnginaStatus",t)},expression:"sections.missingAnginaStatus"}})],1),e._v(" "),r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v(e._s(e.labels[8]))])]),e._v(" "),r("CentMeter",{model:{value:e.sections.missingProcedureIndication,callback:function(t){e.$set(e.sections,"missingProcedureIndication",t)},expression:"sections.missingProcedureIndication"}})],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;f()(component,{VBtn:_.a,VCard:C.a,VCardText:x.a,VCardTitle:x.b,VCol:h.a,VDialog:w.a,VIcon:y.a,VProgressCircular:k.a,VRow:D.a,VSpacer:S.a})},946:function(e,t,r){"use strict";r.r(t);r(61);var n=r(19),c=r(878),o=r(874),l=r(732),v={name:"OutcomesDataQuality",components:{ScoreMeter:c.default,CentMeter:o.default},data:function(){return{loading:!0,dialog:!1,labels:["CTO Perfuration","Cardiac Tamponade","Bleeding","New Dialysis Requirement","MACE 1"],sections:{missingCtoPerfuration:0,missingCardiacTamponade:0,missingBleeding:0,missingNewRequirementDialysis:0,missingMace1:0}}},created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=Object,t.t1=e.sections,t.next=4,l.a.outcomesDataQuality();case 4:t.t2=t.sent,t.t0.assign.call(t.t0,t.t1,t.t2),e.loading=!1;case 7:case"end":return t.stop()}}),t)})))()}},d=r(66),m=r(107),f=r.n(m),_=r(264),C=r(898),x=r(730),h=r(882),w=r(1068),y=r(240),k=r(239),D=r(876),S=r(723),component=Object(d.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.loading?r("v-row",[r("v-col",{attrs:{align:"center"}},[e.loading?r("v-progress-circular",{attrs:{indeterminate:"",color:"blue",size:50}}):e._e()],1)],1):r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("Core Outcomes Data")])]),e._v(" "),r("v-btn",{attrs:{small:"",target:"_blank",href:"http://redcap.cardiologia.org.br/redcap_v10.1.1/DataExport/index.php?pid=108&report_id=1262&stats_charts=1"}},[e._v("\n    View your center data\n  ")]),e._v(" "),r("ScoreMeter",{staticClass:"mt-8",attrs:{size:250,thickness:40,icon:""},model:{value:e.sections,callback:function(t){e.sections=t},expression:"sections"}}),e._v(" "),r("v-dialog",{model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-card",[r("v-card-title",{staticClass:"primary white--text"},[e._v("\n        Missing Information\n        "),r("v-spacer"),e._v(" "),r("v-btn",{attrs:{icon:""},on:{click:function(t){e.dialog=!1}}},[r("v-icon",{staticClass:"white--text"},[e._v("mdi-close")])],1)],1),e._v(" "),r("v-card-text",[r("v-row",[r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v(e._s(e.labels[0]))])]),e._v(" "),r("CentMeter",{model:{value:e.sections.missingCtoPerfuration,callback:function(t){e.$set(e.sections,"missingCtoPerfuration",t)},expression:"sections.missingCtoPerfuration"}})],1),e._v(" "),r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v(e._s(e.labels[1]))])]),e._v(" "),r("CentMeter",{model:{value:e.sections.missingCardiacTamponade,callback:function(t){e.$set(e.sections,"missingCardiacTamponade",t)},expression:"sections.missingCardiacTamponade"}})],1),e._v(" "),r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v(e._s(e.labels[2]))])]),e._v(" "),r("CentMeter",{model:{value:e.sections.missingBleeding,callback:function(t){e.$set(e.sections,"missingBleeding",t)},expression:"sections.missingBleeding"}})],1)],1),e._v(" "),r("v-row",[r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v(e._s(e.labels[3]))])]),e._v(" "),r("CentMeter",{model:{value:e.sections.missingNewRequirementDialysis,callback:function(t){e.$set(e.sections,"missingNewRequirementDialysis",t)},expression:"sections.missingNewRequirementDialysis"}})],1),e._v(" "),r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v(e._s(e.labels[4]))])]),e._v(" "),r("CentMeter",{model:{value:e.sections.missingMace1,callback:function(t){e.$set(e.sections,"missingMace1",t)},expression:"sections.missingMace1"}})],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;f()(component,{VBtn:_.a,VCard:C.a,VCardText:x.a,VCardTitle:x.b,VCol:h.a,VDialog:w.a,VIcon:y.a,VProgressCircular:k.a,VRow:D.a,VSpacer:S.a})},947:function(e,t,r){"use strict";r.r(t);r(61);var n=r(19),c=r(878),o=r(874),l=r(732),v={name:"ProceduralDataQuality",components:{ScoreMeter:c.default,CentMeter:o.default},data:function(){return{loading:!0,dialog:!1,labels:["Success CTO","Retrograde Approach","Antegrade Dissection Reentry","Vascular Access 1","Vascular Access 2","Contralateral Injection"],sections:{missingSuccessCto1:0,missingRetrogradeApproachCto1:0,missingAdrApproachCto1:0,missingVascAccess1:0,missingVascAccess2:0,missingContralateralInjectionCto1:0}}},created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=Object,t.t1=e.sections,t.next=4,l.a.proceduralDataQuality();case 4:t.t2=t.sent,t.t0.assign.call(t.t0,t.t1,t.t2),e.loading=!1;case 7:case"end":return t.stop()}}),t)})))()}},d=r(66),m=r(107),f=r.n(m),_=r(264),C=r(898),x=r(730),h=r(882),w=r(1068),y=r(240),k=r(239),D=r(876),S=r(723),component=Object(d.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.loading?r("v-row",[r("v-col",{attrs:{align:"center"}},[e.loading?r("v-progress-circular",{attrs:{indeterminate:"",color:"blue",size:50}}):e._e()],1)],1):r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("Core Procedural Data")])]),e._v(" "),r("v-btn",{attrs:{small:"",target:"_blank",href:"http://redcap.cardiologia.org.br/redcap_v10.1.1/DataExport/index.php?pid=108&report_id=1261&stats_charts=1"}},[e._v("\n    View your center data\n  ")]),e._v(" "),r("ScoreMeter",{staticClass:"mt-8",attrs:{size:250,thickness:40,icon:""},model:{value:e.sections,callback:function(t){e.sections=t},expression:"sections"}}),e._v(" "),r("v-dialog",{model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-card",[r("v-card-title",{staticClass:"primary white--text"},[e._v("\n        Missing Information\n        "),r("v-spacer"),e._v(" "),r("v-btn",{attrs:{icon:""},on:{click:function(t){e.dialog=!1}}},[r("v-icon",{staticClass:"white--text"},[e._v("mdi-close")])],1)],1),e._v(" "),r("v-card-text",[r("v-row",[r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v(e._s(e.labels[0]))])]),e._v(" "),r("CentMeter",{model:{value:e.sections.missingSuccessCto1,callback:function(t){e.$set(e.sections,"missingSuccessCto1",t)},expression:"sections.missingSuccessCto1"}})],1),e._v(" "),r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v(e._s(e.labels[1]))])]),e._v(" "),r("CentMeter",{model:{value:e.sections.missingRetrogradeApproachCto1,callback:function(t){e.$set(e.sections,"missingRetrogradeApproachCto1",t)},expression:"sections.missingRetrogradeApproachCto1"}})],1),e._v(" "),r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v(e._s(e.labels[2]))])]),e._v(" "),r("CentMeter",{model:{value:e.sections.missingAdrApproachCto1,callback:function(t){e.$set(e.sections,"missingAdrApproachCto1",t)},expression:"sections.missingAdrApproachCto1"}})],1)],1),e._v(" "),r("v-row",[r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v(e._s(e.labels[3]))])]),e._v(" "),r("CentMeter",{model:{value:e.sections.missingVascAccess1,callback:function(t){e.$set(e.sections,"missingVascAccess1",t)},expression:"sections.missingVascAccess1"}})],1),e._v(" "),r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v(e._s(e.labels[4]))])]),e._v(" "),r("CentMeter",{model:{value:e.sections.missingVascAccess2,callback:function(t){e.$set(e.sections,"missingVascAccess2",t)},expression:"sections.missingVascAccess2"}})],1),e._v(" "),r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v(e._s(e.labels[5]))])]),e._v(" "),r("CentMeter",{model:{value:e.sections.missingContralateralInjectionCto1,callback:function(t){e.$set(e.sections,"missingContralateralInjectionCto1",t)},expression:"sections.missingContralateralInjectionCto1"}})],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;f()(component,{VBtn:_.a,VCard:C.a,VCardText:x.a,VCardTitle:x.b,VCol:h.a,VDialog:w.a,VIcon:y.a,VProgressCircular:k.a,VRow:D.a,VSpacer:S.a})},948:function(e,t,r){"use strict";r.r(t);r(61);var n=r(19),c=r(878),o=r(874),l=r(732),v={name:"AngiographicDataQuality",components:{ScoreMeter:c.default,CentMeter:o.default},data:function(){return{loading:!0,dialog:!1,labels:["Number of Diseased Vessels","j-CTO Score","CASTLE Score","PROGRESS CTO Score"],sections:{missingNumDiseasedVessels:0,missingJctoScore:0,missingCastleScoreCto1:0,missingProgressScoreCto1:0}}},created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=Object,t.t1=e.sections,t.next=4,l.a.angiographicDataQuality();case 4:t.t2=t.sent,t.t0.assign.call(t.t0,t.t1,t.t2),e.loading=!1;case 7:case"end":return t.stop()}}),t)})))()}},d=r(66),m=r(107),f=r.n(m),_=r(264),C=r(898),x=r(730),h=r(882),w=r(1068),y=r(240),k=r(239),D=r(876),S=r(723),component=Object(d.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.loading?r("v-row",[r("v-col",{attrs:{align:"center"}},[e.loading?r("v-progress-circular",{attrs:{indeterminate:"",color:"blue",size:50}}):e._e()],1)],1):r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("Core Angiographic Data")])]),e._v(" "),r("v-btn",{attrs:{small:"",target:"_blank",href:"http://redcap.cardiologia.org.br/redcap_v10.1.1/DataExport/index.php?pid=108&report_id=1260&stats_charts=1"}},[e._v("\n    View your center data\n  ")]),e._v(" "),r("ScoreMeter",{staticClass:"mt-8",attrs:{size:250,thickness:40,icon:""},model:{value:e.sections,callback:function(t){e.sections=t},expression:"sections"}}),e._v(" "),r("v-dialog",{model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-card",[r("v-card-title",{staticClass:"primary white--text"},[e._v("\n        Missing Information\n        "),r("v-spacer"),e._v(" "),r("v-btn",{attrs:{icon:""},on:{click:function(t){e.dialog=!1}}},[r("v-icon",{staticClass:"white--text"},[e._v("mdi-close")])],1)],1),e._v(" "),r("v-card-text",[r("v-row",[r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v(e._s(e.labels[0]))])]),e._v(" "),r("CentMeter",{model:{value:e.sections.missingNumDiseasedVessels,callback:function(t){e.$set(e.sections,"missingNumDiseasedVessels",t)},expression:"sections.missingNumDiseasedVessels"}})],1),e._v(" "),r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v(e._s(e.labels[1]))])]),e._v(" "),r("CentMeter",{model:{value:e.sections.missingJctoScore,callback:function(t){e.$set(e.sections,"missingJctoScore",t)},expression:"sections.missingJctoScore"}})],1)],1),e._v(" "),r("v-row",[r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v(e._s(e.labels[2]))])]),e._v(" "),r("CentMeter",{model:{value:e.sections.missingCastleScoreCto1,callback:function(t){e.$set(e.sections,"missingCastleScoreCto1",t)},expression:"sections.missingCastleScoreCto1"}})],1),e._v(" "),r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v(e._s(e.labels[3]))])]),e._v(" "),r("CentMeter",{model:{value:e.sections.missingProgressScoreCto1,callback:function(t){e.$set(e.sections,"missingProgressScoreCto1",t)},expression:"sections.missingProgressScoreCto1"}})],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;f()(component,{VBtn:_.a,VCard:C.a,VCardText:x.a,VCardTitle:x.b,VCol:h.a,VDialog:w.a,VIcon:y.a,VProgressCircular:k.a,VRow:D.a,VSpacer:S.a})},949:function(e,t,r){"use strict";r.r(t);r(61);var n=r(19),c=r(878),o=r(874),l=r(732),v={name:"FollowUpDataQuality",components:{ScoreMeter:c.default,CentMeter:o.default},data:function(){return{loading:!0,dialog:!1,labels:["30 Days","1 Year","2 Years"],sections:{missingFollowUp30Days:0,missingFollowUp1Year:0,missingFollowUp2Years:0}}},created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=Object,t.t1=e.sections,t.next=4,l.a.followUpDataQuality();case 4:t.t2=t.sent,t.t0.assign.call(t.t0,t.t1,t.t2),e.loading=!1;case 7:case"end":return t.stop()}}),t)})))()}},d=r(66),m=r(107),f=r.n(m),_=r(264),C=r(898),x=r(730),h=r(882),w=r(1068),y=r(240),k=r(241),D=r(145),S=r(98),R=r(933),V=r(239),M=r(876),O=r(723),component=Object(d.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.loading?r("v-row",[r("v-col",{attrs:{align:"center"}},[e.loading?r("v-progress-circular",{attrs:{indeterminate:"",color:"blue",size:50}}):e._e()],1)],1):r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("Follow Up Status")])]),e._v(" "),r("v-menu",{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,c=t.attrs;return[r("v-btn",e._g(e._b({attrs:{small:""}},"v-btn",c,!1),n),[e._v(" View your center data ")])]}}])},[e._v(" "),r("v-list",[r("v-list-item",{attrs:{href:"http://redcap.cardiologia.org.br/redcap_v10.1.1/DataEntry/record_status_dashboard.php?pid=108&dag=ALL&dag=167&dag=ALL&rd_id=15",target:"_blank"}},[r("v-list-item-title",[e._v("30 Days")])],1),e._v(" "),r("v-list-item",{attrs:{href:"http://redcap.cardiologia.org.br/redcap_v10.1.1/DataEntry/record_status_dashboard.php?pid=108&dag=ALL&dag=167&dag=ALL&rd_id=16",target:"_blank"}},[r("v-list-item-title",[e._v("1 Year")])],1),e._v(" "),r("v-list-item",{attrs:{href:"http://redcap.cardiologia.org.br/redcap_v10.1.1/DataEntry/record_status_dashboard.php?pid=108&dag=ALL&dag=167&dag=ALL&rd_id=15&rd_id=18",target:"_blank"}},[r("v-list-item-title",[e._v("2 Years")])],1)],1)],1),e._v(" "),r("ScoreMeter",{staticClass:"mt-8",attrs:{size:250,thickness:40,icon:""},model:{value:e.sections,callback:function(t){e.sections=t},expression:"sections"}}),e._v(" "),r("v-dialog",{model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-card",[r("v-card-title",{staticClass:"primary white--text"},[e._v("\n        Missing Information\n        "),r("v-spacer"),e._v(" "),r("v-btn",{attrs:{icon:""},on:{click:function(t){e.dialog=!1}}},[r("v-icon",{staticClass:"white--text"},[e._v("mdi-close")])],1)],1),e._v(" "),r("v-card-text",[r("v-row",[r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v(e._s(e.labels[0]))])]),e._v(" "),r("CentMeter",{model:{value:e.sections.missingFollowUp30Days,callback:function(t){e.$set(e.sections,"missingFollowUp30Days",t)},expression:"sections.missingFollowUp30Days"}})],1),e._v(" "),r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v(e._s(e.labels[1]))])]),e._v(" "),r("CentMeter",{model:{value:e.sections.missingFollowUp1Year,callback:function(t){e.$set(e.sections,"missingFollowUp1Year",t)},expression:"sections.missingFollowUp1Year"}})],1),e._v(" "),r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v(e._s(e.labels[2]))])]),e._v(" "),r("CentMeter",{model:{value:e.sections.missingFollowUp2Years,callback:function(t){e.$set(e.sections,"missingFollowUp2Years",t)},expression:"sections.missingFollowUp2Years"}})],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;f()(component,{VBtn:_.a,VCard:C.a,VCardText:x.a,VCardTitle:x.b,VCol:h.a,VDialog:w.a,VIcon:y.a,VList:k.a,VListItem:D.a,VListItemTitle:S.c,VMenu:R.a,VProgressCircular:V.a,VRow:M.a,VSpacer:O.a})},950:function(e,t,r){"use strict";r.r(t);r(61);var n=r(19),c=r(878),o=r(874),l=r(732),v={name:"SuccessDataQuality",components:{ScoreMeter:c.default,CentMeter:o.default},data:function(){return{loading:!0,dialog:!1,labels:["Success Strategy","CTO Cross Time","Wire Type","Residual Stenosis"],sections:{missingSuccessStrategyCto1:0,missingCrossTimeCto1:0,missingWireTypeCrossCto1:0,missingResidualStenosisCto1:0}}},created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=Object,t.t1=e.sections,t.next=4,l.a.successDataQuality();case 4:t.t2=t.sent,t.t0.assign.call(t.t0,t.t1,t.t2),e.loading=!1;case 7:case"end":return t.stop()}}),t)})))()}},d=r(66),m=r(107),f=r.n(m),_=r(264),C=r(898),x=r(730),h=r(882),w=r(1068),y=r(240),k=r(239),D=r(876),S=r(723),component=Object(d.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.loading?r("v-row",[r("v-col",{attrs:{align:"center"}},[e.loading?r("v-progress-circular",{attrs:{indeterminate:"",color:"blue",size:50}}):e._e()],1)],1):r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("Core Success Procedure Data")])]),e._v(" "),r("v-btn",{attrs:{small:"",target:"_blank",href:"http://redcap.cardiologia.org.br/redcap_v10.1.1/DataExport/index.php?pid=108&report_id=1290&stats_charts=1"}},[e._v("\n    View your center data\n  ")]),e._v(" "),r("ScoreMeter",{staticClass:"mt-8",attrs:{size:250,thickness:40,icon:""},model:{value:e.sections,callback:function(t){e.sections=t},expression:"sections"}}),e._v(" "),r("v-dialog",{model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-card",[r("v-card-title",{staticClass:"primary white--text"},[e._v("\n        Missing Information\n        "),r("v-spacer"),e._v(" "),r("v-btn",{attrs:{icon:""},on:{click:function(t){e.dialog=!1}}},[r("v-icon",{staticClass:"white--text"},[e._v("mdi-close")])],1)],1),e._v(" "),r("v-card-text",[r("v-row",[r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v(e._s(e.labels[0]))])]),e._v(" "),r("CentMeter",{model:{value:e.sections.missingSuccessStrategyCto1,callback:function(t){e.$set(e.sections,"missingSuccessStrategyCto1",t)},expression:"sections.missingSuccessStrategyCto1"}})],1),e._v(" "),r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v(e._s(e.labels[1]))])]),e._v(" "),r("CentMeter",{model:{value:e.sections.missingCrossTimeCto1,callback:function(t){e.$set(e.sections,"missingCrossTimeCto1",t)},expression:"sections.missingCrossTimeCto1"}})],1)],1),e._v(" "),r("v-row",[r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v(e._s(e.labels[2]))])]),e._v(" "),r("CentMeter",{model:{value:e.sections.missingWireTypeCrossCto1,callback:function(t){e.$set(e.sections,"missingWireTypeCrossCto1",t)},expression:"sections.missingWireTypeCrossCto1"}})],1),e._v(" "),r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v(e._s(e.labels[3]))])]),e._v(" "),r("CentMeter",{model:{value:e.sections.missingResidualStenosisCto1,callback:function(t){e.$set(e.sections,"missingResidualStenosisCto1",t)},expression:"sections.missingResidualStenosisCto1"}})],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;f()(component,{VBtn:_.a,VCard:C.a,VCardText:x.a,VCardTitle:x.b,VCol:h.a,VDialog:w.a,VIcon:y.a,VProgressCircular:k.a,VRow:D.a,VSpacer:S.a})},987:function(e,t,r){"use strict";r.r(t);var n=r(945),c=r(946),o=r(947),l=r(948),v=r(949),d=r(950),m={name:"DataQuality",components:{AngiographicDataQuality:l.default,ProceduralDataQuality:o.default,OutcomesDataQuality:c.default,ClinicalDataQuality:n.default,FollowUpDataQuality:v.default,SuccessDataQuality:d.default},data:function(){return{loading:!0}}},f=r(66),_=r(107),C=r.n(_),x=r(720),h=r(876),component=Object(f.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",[r("FollowUpDataQuality",{staticClass:"mb-10"}),e._v(" "),r("ClinicalDataQuality",{staticClass:"mb-10"})],1),e._v(" "),r("v-row",[r("OutcomesDataQuality",{staticClass:"mb-10"}),e._v(" "),r("ProceduralDataQuality",{staticClass:"mb-10"})],1),e._v(" "),r("v-row",[r("AngiographicDataQuality",{staticClass:"mb-10"}),e._v(" "),r("SuccessDataQuality")],1)],1)}),[],!1,null,null,null);t.default=component.exports;C()(component,{VContainer:x.a,VRow:h.a})}}]);