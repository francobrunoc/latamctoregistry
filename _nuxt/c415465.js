(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{923:function(t,e,n){var content=n(958);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("ef07b3c0",content,!0,{sourceMap:!1})},957:function(t,e,n){"use strict";n(923)},958:function(t,e,n){var o=n(23)(!1);o.push([t.i,'.SkeletonBox{display:inline-block;position:relative;overflow:hidden;vertical-align:middle;background-color:#dddbdd}.SkeletonBox:after{position:absolute;top:0;right:0;bottom:0;left:0;transform:translateX(-100%);background-image:linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.2) 20%,hsla(0,0%,100%,.5) 60%,hsla(0,0%,100%,0));-webkit-animation:shimmer 5s infinite;animation:shimmer 5s infinite;content:""}@-webkit-keyframes shimmer{to{transform:translateX(100%)}}@keyframes shimmer{to{transform:translateX(100%)}}',""]),t.exports=o},988:function(t,e,n){"use strict";n.r(e);n(26);var o={name:"SkeletonBox",props:{maxWidth:{default:100,type:Number},minWidth:{default:80,type:Number},height:{default:"1em",type:String},width:{default:null,type:String}},computed:{computedWidth:function(){return this.width||"".concat(Math.floor(Math.random()*(this.maxWidth-this.minWidth)+this.minWidth),"%")}}},r=(n(957),n(66)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"SkeletonBox",style:{height:t.height,width:t.computedWidth}})}),[],!1,null,null,null);e.default=component.exports}}]);