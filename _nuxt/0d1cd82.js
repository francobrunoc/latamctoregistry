(window.webpackJsonp=window.webpackJsonp||[]).push([[24,14,15],{729:function(e,t,r){var n=r(43);e.exports=function(e,t){if(!n(e)||e._t!==t)throw TypeError("Incompatible receiver, "+t+" required!");return e}},730:function(e,t,r){"use strict";var strong=r(734),n=r(729),c="Map";e.exports=r(735)(c,(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(e){var t=strong.getEntry(n(this,c),e);return t&&t.v},set:function(e,t){return strong.def(n(this,c),0===e?0:e,t)}},strong,!0)},732:function(e,t,r){"use strict";(function(e){r(45),r(46),r(9),r(62);var n=r(19),c=r(880),o=r.n(c),l=r(736),f="https://7cb5vfypm9.execute-api.us-west-2.amazonaws.com/dev/",d=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(path){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(l.a)("get",path));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(path,data){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(l.a)("post",path,data));case 1:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),m=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(path,r){var n,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=[],c={headers:{Authorization:r}},t.next=4,o.a.get(f.concat(path||""),c).then((function(t){(n=t.data).body&&(n=JSON.parse(e.from(n.body).toString("utf-8")))})).catch((function(e){return console.error(e)}));case 4:return t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),h=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(path,data,t){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=[],n={headers:{Authorization:t}},e.next=4,o.a.post(f.concat(path||""),data||"",n).then((function(e){r=e})).catch((function(e){return console.error(e)}));case 4:return e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}();t.a={GET:d,get:m,POST:v,post:h}}).call(this,r(8).Buffer)},733:function(e,t,r){"use strict";r(62);var n=r(19),c=r(732),o=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(path){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c.a.GET(path));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l={projectInfo:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("registry/project/info/notes");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},countAll:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("registry/procedures/count");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},successfulStrategies:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("registry/procedures/successfulStrategies");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},successfulProceduresPerYear:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("registry/procedures/successfulProceduresPerYear");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},annualProcedures:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("registry/procedures/annualProcedures");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},clinicalDataQuality:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("registry/procedures/clinicalDataQuality");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},outcomesDataQuality:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("registry/procedures/outcomesDataQuality");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},proceduralDataQuality:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("registry/procedures/proceduralDataQuality");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},angiographicDataQuality:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("registry/procedures/angiographicDataQuality");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},successDataQuality:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("registry/procedures/successDataQuality");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},followUpDataQuality:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("registry/procedures/followUpDataQuality");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},clinicalCharacteristics:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("registry/procedures/clinicalCharacteristics");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},angiographicCharacteristics:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("registry/procedures/angiographicCharacteristics");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},proceduralCharacteristics:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("registry/procedures/proceduralCharacteristics");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},anginaOutcome:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("registry/procedures/anginaOutcome");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},proceduralComplications:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("registry/procedures/proceduralComplications");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},inHospitalOutcomes:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("registry/procedures/inHospitalOutcomes");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},topEnrollers:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("registry/procedures/topEnrollers");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},casesPerMonth:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("registry/procedures/casesPerMonth");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()}};t.a=l},734:function(e,t,r){"use strict";var n=r(58).f,c=r(151),o=r(409),l=r(99),f=r(408),d=r(410),v=r(257),m=r(412),h=r(256),y=r(44),w=r(253).fastKey,O=r(729),x=y?"_s":"size",j=function(e,t){var r,n=w(t);if("F"!==n)return e._i[n];for(r=e._f;r;r=r.n)if(r.k==t)return r};e.exports={getConstructor:function(e,t,r,v){var m=e((function(e,n){f(e,m,t,"_i"),e._t=t,e._i=c(null),e._f=void 0,e._l=void 0,e[x]=0,null!=n&&d(n,r,e[v],e)}));return o(m.prototype,{clear:function(){for(var e=O(this,t),data=e._i,r=e._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete data[r.i];e._f=e._l=void 0,e[x]=0},delete:function(e){var r=O(this,t),n=j(r,e);if(n){var c=n.n,o=n.p;delete r._i[n.i],n.r=!0,o&&(o.n=c),c&&(c.p=o),r._f==n&&(r._f=c),r._l==n&&(r._l=o),r[x]--}return!!n},forEach:function(e){O(this,t);for(var r,n=l(e,arguments.length>1?arguments[1]:void 0,3);r=r?r.n:this._f;)for(n(r.v,r.k,this);r&&r.r;)r=r.p},has:function(e){return!!j(O(this,t),e)}}),y&&n(m.prototype,"size",{get:function(){return O(this,t)[x]}}),m},def:function(e,t,r){var n,c,o=j(e,t);return o?o.v=r:(e._l=o={i:c=w(t,!0),k:t,v:r,p:n=e._l,n:void 0,r:!1},e._f||(e._f=o),n&&(n.n=o),e[x]++,"F"!==c&&(e._i[c]=o)),e},getEntry:j,setStrong:function(e,t,r){v(e,t,(function(e,r){this._t=O(e,t),this._k=r,this._l=void 0}),(function(){for(var e=this,t=e._k,r=e._l;r&&r.r;)r=r.p;return e._t&&(e._l=r=r?r.n:e._t._f)?m(0,"keys"==t?r.k:"values"==t?r.v:[r.k,r.v]):(e._t=void 0,m(1))}),r?"entries":"values",!r,!0),h(t)}}},735:function(e,t,r){"use strict";var n=r(33),c=r(22),o=r(63),l=r(409),meta=r(253),f=r(410),d=r(408),v=r(43),m=r(38),h=r(255),y=r(150),w=r(258);e.exports=function(e,t,r,O,x,j){var _=n[e],k=_,R=x?"set":"add",C=k&&k.prototype,S={},D=function(e){var t=C[e];o(C,e,"delete"==e||"has"==e?function(a){return!(j&&!v(a))&&t.call(this,0===a?0:a)}:"get"==e?function(a){return j&&!v(a)?void 0:t.call(this,0===a?0:a)}:"add"==e?function(a){return t.call(this,0===a?0:a),this}:function(a,b){return t.call(this,0===a?0:a,b),this})};if("function"==typeof k&&(j||C.forEach&&!m((function(){(new k).entries().next()})))){var P=new k,M=P[R](j?{}:-0,1)!=P,E=m((function(){P.has(1)})),N=h((function(e){new k(e)})),z=!j&&m((function(){for(var e=new k,t=5;t--;)e[R](t,t);return!e.has(-0)}));N||((k=t((function(t,r){d(t,k,e);var n=w(new _,t,k);return null!=r&&f(r,x,n[R],n),n}))).prototype=C,C.constructor=k),(E||z)&&(D("delete"),D("has"),x&&D("get")),(z||M)&&D(R),j&&C.clear&&delete C.clear}else k=O.getConstructor(t,e,x,R),l(k.prototype,r),meta.NEED=!0;return y(k,e),S[e]=k,c(c.G+c.W+c.F*(k!=_),S),j||O.setStrong(k,e,x),k}},736:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));r(62);var n,c=r(19),o=r(153),l=r(732),f=function(){var e=Object(c.a)(regeneratorRuntime.mark((function e(t,path,data){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.currentAuthenticatedUser().then((function(u){return n=u.signInUserSession.idToken.jwtToken})).catch((function(e){return console.log(e)}));case 2:if("post"!==t){e.next=6;break}return e.next=5,l.a.post(path,data,n);case 5:return e.abrupt("return",e.sent);case 6:if("get"!==t){e.next=10;break}return e.next=9,l.a.get(path,n);case 9:return e.abrupt("return",e.sent);case 10:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}()},738:function(e,t,r){var content=r(882);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(24).default)("6a70fd7d",content,!0,{sourceMap:!1})},875:function(e,t,r){"use strict";r.r(t);r(26);var n=r(3),c=r(887),o=r.n(c);r(888);n.a.use(o.a);var l={name:"CentMeter",props:{value:Number,size:{type:Number,default:200},thickness:{type:Number,default:30}},computed:{sections:{get:function(){return[{value:this.value,color:"#01ade3"},{value:100-this.value,color:"#f5f8ff"}]}}}},f=(r(881),r(55)),component=Object(f.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("vc-donut",{attrs:{sections:e.sections,size:e.size,thickness:e.thickness}},[r("p",[e._v(e._s(this.value.toString()+"%"))])])}),[],!1,null,"43de4ab5",null);t.default=component.exports},877:function(e,t,r){"use strict";r(20),r(14),r(15);var n=r(5),c=(r(67),r(730),r(82),r(12),r(9),r(16),r(56),r(57),r(411),r(3)),o=r(98),l=r(4);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v=["sm","md","lg","xl"],m=["start","end","center"];function h(e,t){return v.reduce((function(r,n){return r[e+Object(l.F)(n)]=t(),r}),{})}var y=function(e){return[].concat(m,["baseline","stretch"]).includes(e)},w=h("align",(function(){return{type:String,default:null,validator:y}})),O=function(e){return[].concat(m,["space-between","space-around"]).includes(e)},x=h("justify",(function(){return{type:String,default:null,validator:O}})),j=function(e){return[].concat(m,["space-between","space-around","stretch"]).includes(e)},_=h("alignContent",(function(){return{type:String,default:null,validator:j}})),k={align:Object.keys(w),justify:Object.keys(x),alignContent:Object.keys(_)},R={align:"align",justify:"justify",alignContent:"align-content"};function C(e,t,r){var n=R[e];if(null!=r){if(t){var c=t.replace(e,"");n+="-".concat(c)}return(n+="-".concat(r)).toLowerCase()}}var S=new Map;t.a=c.a.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:y}},w),{},{justify:{type:String,default:null,validator:O}},x),{},{alignContent:{type:String,default:null,validator:j}},_),render:function(e,t){var r=t.props,data=t.data,c=t.children,l="";for(var f in r)l+=String(r[f]);var d=S.get(l);return d||function(){var e,t;for(t in d=[],k)k[t].forEach((function(e){var n=r[e],c=C(t,e,n);c&&d.push(c)}));d.push((e={"no-gutters":r.noGutters,"row--dense":r.dense},Object(n.a)(e,"align-".concat(r.align),r.align),Object(n.a)(e,"justify-".concat(r.justify),r.justify),Object(n.a)(e,"align-content-".concat(r.alignContent),r.alignContent),e)),S.set(l,d)}(),e(r.tag,Object(o.a)(data,{staticClass:"row",class:d}),c)}})},878:function(e,t,r){var content=r(893);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(24).default)("1746da28",content,!0,{sourceMap:!1})},879:function(e,t,r){"use strict";r.r(t);r(12),r(9),r(259),r(26);var n=r(3),c=r(887),o=r.n(c);r(888);n.a.use(o.a);var l={name:"ScoreMeter",props:{value:Object,size:{type:Number,default:180},thickness:{type:Number,default:30}},data:function(){return{score:0}},methods:{openDialog:function(){this.$parent.dialog=!0},getColor:function(){return 0===this.score?"#74d498":this.score<.5?"#f8f455":this.score>.5?"#ff6969":void 0}},computed:{sections:{get:function(){var e=this,t=Object.values(this.value);return t.forEach((function(r){e.score+=Number(r)/100*(10/t.length)})),[{value:10-this.score,color:this.getColor(),label:"Max Score is 10"},{value:this.score,color:"#f5f8ff",label:"Max Score is 10"}]}}}},f=(r(892),r(55)),component=Object(f.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("vc-donut",{staticStyle:{cursor:"pointer"},attrs:{sections:e.sections,size:e.size,thickness:e.thickness,total:10},on:{"section-click":e.openDialog}},[r("span",{staticClass:"score",attrs:{title:"Click for details"},on:{click:e.openDialog}},[e._v("\n    "+e._s((10-this.score).toFixed(1))+"\n  ")])])}),[],!1,null,null,null);t.default=component.exports},881:function(e,t,r){"use strict";r(738)},882:function(e,t,r){var n=r(23)(!1);n.push([e.i,"p[data-v-43de4ab5]{font-size:xxx-large;color:#b8b8b8}",""]),e.exports=n},883:function(e,t,r){"use strict";r(20),r(14),r(15),r(73),r(56),r(57);var n=r(5),c=(r(67),r(730),r(82),r(12),r(9),r(16),r(26),r(411),r(3)),o=r(98),l=r(4);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v=["sm","md","lg","xl"],m=v.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{}),h=v.reduce((function(e,t){return e["offset"+Object(l.F)(t)]={type:[String,Number],default:null},e}),{}),y=v.reduce((function(e,t){return e["order"+Object(l.F)(t)]={type:[String,Number],default:null},e}),{}),w={col:Object.keys(m),offset:Object.keys(h),order:Object.keys(y)};function O(e,t,r){var n=e;if(null!=r&&!1!==r){if(t){var c=t.replace(e,"");n+="-".concat(c)}return"col"!==e||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var x=new Map;t.a=c.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},m),{},{offset:{type:[String,Number],default:null}},h),{},{order:{type:[String,Number],default:null}},y),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var r=t.props,data=t.data,c=t.children,l=(t.parent,"");for(var f in r)l+=String(r[f]);var d=x.get(l);return d||function(){var e,t;for(t in d=[],w)w[t].forEach((function(e){var n=r[e],c=O(t,e,n);c&&d.push(c)}));var c=d.some((function(e){return e.startsWith("col-")}));d.push((e={col:!c||!r.cols},Object(n.a)(e,"col-".concat(r.cols),r.cols),Object(n.a)(e,"offset-".concat(r.offset),r.offset),Object(n.a)(e,"order-".concat(r.order),r.order),Object(n.a)(e,"align-self-".concat(r.alignSelf),r.alignSelf),e)),x.set(l,d)}(),e(r.tag,Object(o.a)(data,{class:d}),c)}})},892:function(e,t,r){"use strict";r(878)},893:function(e,t,r){var n=r(23)(!1);n.push([e.i,"span.score{cursor:pointer;width:100px;height:100px;font-size:xxx-large}",""]),e.exports=n},951:function(e,t,r){"use strict";r.r(t);r(62);var n=r(19),c=r(879),o=r(875),l=r(733),f={name:"OutcomesDataQuality",components:{ScoreMeter:c.default,CentMeter:o.default},data:function(){return{loading:!0,dialog:!1,labels:["CTO Perfuration","Cardiac Tamponade","Bleeding","New Dialysis Requirement","MACE 1"],sections:{missingCtoPerfuration:0,missingCardiacTamponade:0,missingBleeding:0,missingNewRequirementDialysis:0,missingMace1:0}}},created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=Object,t.t1=e.sections,t.next=4,l.a.outcomesDataQuality();case 4:t.t2=t.sent,t.t0.assign.call(t.t0,t.t1,t.t2),e.loading=!1;case 7:case"end":return t.stop()}}),t)})))()}},d=r(55),v=r(81),m=r.n(v),h=r(264),y=r(899),w=r(731),O=r(883),x=r(1078),j=r(240),_=r(239),k=r(877),R=r(725),component=Object(d.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.loading?r("v-row",[r("v-col",{attrs:{align:"center"}},[e.loading?r("v-progress-circular",{attrs:{indeterminate:"",color:"blue",size:50}}):e._e()],1)],1):r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("Core Outcomes Data")])]),e._v(" "),r("v-btn",{attrs:{small:"",target:"_blank",href:"http://redcap.cardiologia.org.br/redcap_v10.1.1/DataExport/index.php?pid=108&report_id=1262&stats_charts=1"}},[e._v("\n    View your center data\n  ")]),e._v(" "),r("ScoreMeter",{staticClass:"mt-8",attrs:{size:250,thickness:40,icon:""},model:{value:e.sections,callback:function(t){e.sections=t},expression:"sections"}}),e._v(" "),r("v-dialog",{model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-card",[r("v-card-title",{staticClass:"primary white--text"},[e._v("\n        Missing Information\n        "),r("v-spacer"),e._v(" "),r("v-btn",{attrs:{icon:""},on:{click:function(t){e.dialog=!1}}},[r("v-icon",{staticClass:"white--text"},[e._v("mdi-close")])],1)],1),e._v(" "),r("v-card-text",[r("v-row",[r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v(e._s(e.labels[0]))])]),e._v(" "),r("CentMeter",{model:{value:e.sections.missingCtoPerfuration,callback:function(t){e.$set(e.sections,"missingCtoPerfuration",t)},expression:"sections.missingCtoPerfuration"}})],1),e._v(" "),r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v(e._s(e.labels[1]))])]),e._v(" "),r("CentMeter",{model:{value:e.sections.missingCardiacTamponade,callback:function(t){e.$set(e.sections,"missingCardiacTamponade",t)},expression:"sections.missingCardiacTamponade"}})],1),e._v(" "),r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v(e._s(e.labels[2]))])]),e._v(" "),r("CentMeter",{model:{value:e.sections.missingBleeding,callback:function(t){e.$set(e.sections,"missingBleeding",t)},expression:"sections.missingBleeding"}})],1)],1),e._v(" "),r("v-row",[r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v(e._s(e.labels[3]))])]),e._v(" "),r("CentMeter",{model:{value:e.sections.missingNewRequirementDialysis,callback:function(t){e.$set(e.sections,"missingNewRequirementDialysis",t)},expression:"sections.missingNewRequirementDialysis"}})],1),e._v(" "),r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v(e._s(e.labels[4]))])]),e._v(" "),r("CentMeter",{model:{value:e.sections.missingMace1,callback:function(t){e.$set(e.sections,"missingMace1",t)},expression:"sections.missingMace1"}})],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;m()(component,{VBtn:h.a,VCard:y.a,VCardText:w.a,VCardTitle:w.b,VCol:O.a,VDialog:x.a,VIcon:j.a,VProgressCircular:_.a,VRow:k.a,VSpacer:R.a})}}]);