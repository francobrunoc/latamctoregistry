(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1043:function(e,t,n){var r=n(23)(!1);r.push([e.i,".cdc-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.cdc{height:auto;position:relative;-ms-flex-negative:0;flex-shrink:0}.cdc,.cdc-overlay{border-radius:50%;overflow:hidden}.cdc-overlay{opacity:1;position:absolute;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.cdc-text{text-align:center}.cdc-legend{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-top:1em;-ms-flex-wrap:wrap;flex-wrap:wrap}.cdc-legend-item{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:.5em}.cdc-legend-item-color{height:1.25em;width:1.25em;border-radius:2px;margin-right:.5em}.cdc-sections{position:absolute;height:auto;width:100%;padding-bottom:100%;border-radius:50%}.cdc-section{width:50%;overflow:hidden;background-color:transparent;-webkit-transform-origin:0 50%;transform-origin:0 50%;pointer-events:none}.cdc-filler,.cdc-section{position:absolute;height:100%}.cdc-filler{width:100%;pointer-events:all}.cdc-section.cdc-section-right{left:50%}.cdc-section.cdc-section-right .cdc-filler{-webkit-transform-origin:0 50%;transform-origin:0 50%}.cdc-section.cdc-section-left{left:0}.cdc-section.cdc-section-left,.cdc-section.cdc-section-left .cdc-filler{-webkit-transform-origin:100% 50%;transform-origin:100% 50%}",""]),e.exports=r},887:function(e,t){e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(object,e){return Object.prototype.hasOwnProperty.call(object,e)},n.p="",n(n.s="fb15")}({"7e79":function(e,t,n){},f6fd:function(e,t){!function(e){var t="currentScript",n=e.getElementsByTagName("script");t in e||Object.defineProperty(e,t,{get:function(){try{throw new Error}catch(t){var i,e=(/.*at [^\(]*\((.*):.+:.+\)$/gi.exec(t.stack)||[!1])[1];for(i in n)if(n[i].src==e||"interactive"==n[i].readyState)return n[i];return null}}})}(document)},fb15:function(e,t,n){"use strict";var r;(n.r(t),"undefined"!=typeof window)&&(n("f6fd"),(r=window.document.currentScript)&&(r=r.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))&&(n.p=r[1]));var o,c=["click","mouseenter","mouseleave","mouseover","mouseout","mousemove"].map((function(e){return{nativeEventName:e,sectionEventName:"section-".concat(e)}})),l=["#FF6384","#36A2EB","#FFCE56","#F58231","#46F0F0","#D2F53C","#911EB4","#F032E6","#3CB44B","#FFE119","#E6194B","#FABEBE","#008080","#E6BEFF","#0082C8","#AA6E28","#FFFAC8","#800000","#AAFFC3","#808000","#FFD8B1","#000080","#808080","#000000"];function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m="1em",y={TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},v=(d(o={},y.TOP,{container:{flexDirection:"column"},legend:{order:-1,margin:0,marginBottom:m}}),d(o,y.RIGHT,{container:{},legend:{flexDirection:"column",margin:0,marginLeft:m}}),d(o,y.BOTTOM,{container:{flexDirection:"column"},legend:{}}),d(o,y.LEFT,{container:{},legend:{flexDirection:"column",order:-1,margin:0,marginRight:m}}),o),h=[{type:"number",key:"value",required:!0},{key:"label"},{key:"color"}];function x(section){return!(!(e=section)||e.constructor!==Object)&&h.reduce((function(e,t){if(!e)return!1;var n=!0;return t.required&&(n=n&&Object.hasOwnProperty.call(section,t.key)),t.type&&(n=n&&f(section[t.key])===t.type),e&&n}),!0);var e}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w="cdc-section-left",k="cdc-section-right";function E(e,t,n,r,o,c,l,f){var d,m="function"==typeof e?e.options:e;if(t&&(m.render=t,m.staticRenderFns=n,m._compiled=!0),r&&(m.functional=!0),c&&(m._scopeId="data-v-"+c),l?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(l)},m._ssrRegister=d):o&&(d=f?function(){o.call(this,this.$root.$options.shadowRoot)}:o),d)if(m.functional){m._injectStyles=d;var y=m.render;m.render=function(e,t){return d.call(t),y(e,t)}}else{var v=m.beforeCreate;m.beforeCreate=v?[].concat(v,d):[d]}return{exports:e,options:m}}var _=E({props:{startAngle:{type:Number,default:0},sections:{type:Array,default:function(){return[]}}},computed:{containerStyles:function(){return{transform:"rotate(".concat(this.startAngle,"deg)")}},donutSections:function(){var e=this,t=0,n=0;return this.sections.map((function(section){var r=[k,-180],o=r[0],l=r[1];if(t>=180){var f=[w,180];o=f[0],l=f[1]}var d=l+section.degree,m={backgroundColor:section.color||"dodgerblue",transform:"rotate(".concat(d,"deg)")},y={transform:"rotate(".concat(n,"deg)")};180===(t+=section.degree)?n=0:n+=section.degree;var v=c.reduce((function(t,n){var r=n.nativeEventName,o=n.sectionEventName;return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},t=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(source).filter((function(e){return Object.getOwnPropertyDescriptor(source,e).enumerable})))),t.forEach((function(t){S(e,t,source[t])}))}return e}({},t,S({},r,(function(t){return e.emitEvent(o,section,t)})))}),{});return{label:section.label,className:o,fillerStyles:m,sectionStyles:y,listeners:v}}))}},methods:{emitEvent:function(e,section,t){0!==section.value&&this.$emit(e,section.$section,t)}}},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cdc-sections",style:e.containerStyles},e._l(e.donutSections,(function(section,t){return n("div",e._g({key:t,staticClass:"cdc-section",class:section.className,style:section.sectionStyles},section.listeners),[n("div",{staticClass:"cdc-filler",style:section.fillerStyles,attrs:{title:section.label}})])})),0)}),[],!1,null,null,null).exports;n("7e79");function O(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},t=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(source).filter((function(e){return Object.getOwnPropertyDescriptor(source,e).enumerable})))),t.forEach((function(t){F(e,t,source[t])}))}return e}function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j=E({name:"vc-donut",props:{size:{type:Number,default:250,validator:function(e){return e>0}},unit:{type:String,default:"px"},thickness:{type:Number,default:20,validator:function(e){return e>=0&&e<=100}},text:{type:String,default:null},autoAdjustTextSize:{type:Boolean,default:!0},background:{type:String,default:"#ffffff"},foreground:{type:String,default:"#eeeeee"},sections:{type:Array,default:function(){return[]},validator:function(e){for(var i=0;i<e.length;++i)if(!x(e[i]))return!1;return!0}},total:{type:Number,default:100,validator:function(e){return e>0}},hasLegend:{type:Boolean,default:!1},legendPlacement:{type:String,default:y.BOTTOM,validator:function(e){return!!y[e.toUpperCase()]}},startAngle:{type:Number,default:0}},watch:{autoAdjustTextSize:function(e){e?window.addEventListener("resize",this.resizeListener):window.removeEventListener("resize",this.resizeListener),this.recalcFontSize()},size:function(){this.recalcFontSize()},unit:function(){this.recalcFontSize()}},data:function(){return{donutEl:null,fontSize:"1em",resizeListener:null}},computed:{donutSections:function(){var e=this,t=this.sections.reduce((function(a,e){return a+e.value}),0);if("number"!=typeof t)return[];if((t=Number(t.toFixed(2)))>this.total){var n="Sum of all the sections' values (".concat(t,") should not exceed `total` (").concat(this.total,")");throw new Error(n)}var r=180,o=0,c=0,f=[];return this.sections.forEach((function(section){var t=section.value/e.total*360,n=[t];t>r&&(n=[r,t-r]);var d=section.color||l[c++];n.forEach((function(e){if(Number((o+e).toFixed(2))>r){var t=r-o;f.push(O({},section,{degree:t,color:d,$section:section}),O({},section,{degree:e-t,color:d,$section:section}))}else f.push(O({},section,{degree:e,color:d,$section:section}));(o+=e)>=r&&(o-=r)}))})),f},legend:function(){var e=this;if(!this.hasLegend)return null;var t=0;return this.sections.map((function(section,n){return{label:section.label||"Section ".concat(n+1),percent:"".concat(section.value," (").concat(section.value/e.total*100,"%)"),styles:{backgroundColor:section.color||l[t++]}}}))},placementStyles:function(){return this.hasLegend?v[this.legendPlacement]:{}},donutStyles:function(){var e="".concat(this.size).concat(this.unit);return{width:e,paddingBottom:e,backgroundColor:this.foreground}},overlayStyles:function(){var e=100-this.thickness,t="".concat(e,"%"),n="calc(50% - ".concat(e/2,"%)");return{height:t,width:t,top:n,left:n,backgroundColor:this.background}},donutTextStyles:function(){return{fontSize:this.fontSize}},sectionListeners:function(){var e=this;return c.reduce((function(t,n){var r=n.sectionEventName;return O({},t,F({},r,(function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return e.emitSectionEvent.apply(e,[r].concat(n))})))}),{})}},methods:{recalcFontSize:function(){var e=this;if(this.autoAdjustTextSize){var t=this.size;this.$nextTick((function(){"px"!==e.unit&&(t=e.donutEl?e.donutEl.clientWidth:null),e.fontSize=t?"".concat((.08*t).toFixed(2),"px"):"1em"}))}else this.fontSize="1em"},emitSectionEvent:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];this.$emit.apply(this,[e].concat(n))}},created:function(){this.resizeListener=this.recalcFontSize.bind(this)},mounted:function(){this.donutEl=this.$refs.donut,this.autoAdjustTextSize&&(this.recalcFontSize(),window.addEventListener("resize",this.resizeListener))},beforeDestroy:function(){window.removeEventListener("resize",this.resizeListener)},components:{DonutSections:_}},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cdc-container",style:e.placementStyles.container},[n("div",{ref:"donut",staticClass:"cdc",style:e.donutStyles},[n("donut-sections",e._g({attrs:{sections:e.donutSections,"start-angle":e.startAngle}},e.sectionListeners)),n("div",{staticClass:"cdc-overlay",style:e.overlayStyles},[n("div",{staticClass:"cdc-text",style:e.donutTextStyles},[e._t("default",[e._v(e._s(e.text))])],2)])],1),e._t("legend",[e.hasLegend?n("div",{staticClass:"cdc-legend",style:e.placementStyles.legend},e._l(e.legend,(function(t,r){return n("span",{key:r,staticClass:"cdc-legend-item",attrs:{title:t.percent}},[n("span",{staticClass:"cdc-legend-item-color",style:t.styles}),n("span",[e._v(e._s(t.label))])])})),0):e._e()])],2)}),[],!1,null,null,null).exports,z={install:function(e){e.component(j.name,j)}};t.default=z}})},888:function(e,t,n){var content=n(1043);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(24).default)("2f19c4fa",content,!0,{sourceMap:!1})}}]);