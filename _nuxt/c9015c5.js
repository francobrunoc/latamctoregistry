(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{877:function(e,t,o){var content=o(892);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(24).default)("1746da28",content,!0,{sourceMap:!1})},878:function(e,t,o){"use strict";o.r(t);o(12),o(9),o(259),o(26);var n=o(3),r=o(886),c=o.n(r);o(887);n.a.use(c.a);var l={name:"ScoreMeter",props:{value:Object,size:{type:Number,default:180},thickness:{type:Number,default:30}},data:function(){return{score:0}},methods:{openDialog:function(){this.$parent.dialog=!0},getColor:function(){return 0===this.score?"#74d498":this.score<.5?"#f8f455":this.score>.5?"#ff6969":void 0}},computed:{sections:{get:function(){var e=this,t=Object.values(this.value);return t.forEach((function(o){e.score+=Number(o)/100*(10/t.length)})),[{value:10-this.score,color:this.getColor(),label:"Max Score is 10"},{value:this.score,color:"#f5f8ff",label:"Max Score is 10"}]}}}},f=(o(891),o(66)),component=Object(f.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("vc-donut",{staticStyle:{cursor:"pointer"},attrs:{sections:e.sections,size:e.size,thickness:e.thickness,total:10},on:{"section-click":e.openDialog}},[o("span",{staticClass:"score",attrs:{title:"Click for details"},on:{click:e.openDialog}},[e._v("\n    "+e._s((10-this.score).toFixed(1))+"\n  ")])])}),[],!1,null,null,null);t.default=component.exports},891:function(e,t,o){"use strict";o(877)},892:function(e,t,o){var n=o(23)(!1);n.push([e.i,"span.score{cursor:pointer;width:100px;height:100px;font-size:xxx-large}",""]),e.exports=n}}]);