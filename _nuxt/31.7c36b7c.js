(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{483:function(t,e,n){"use strict";n.r(e),n.d(e,"amplify_picker",(function(){return o}));var c=n(23),r=n(496),l=n(531),o=function(){function t(t){Object(c.k)(this,t),this.pickerText=l.a.PICKER_TEXT,this.acceptValue="*/*"}return t.prototype.render=function(){var t=this;return Object(c.i)("div",{class:"picker"},Object(c.i)("slot",{name:"picker"},Object(c.i)("amplify-button",null,r.a.get(this.pickerText))),Object(c.i)("input",{title:r.a.get(this.pickerText),type:"file",accept:this.acceptValue,onChange:function(e){return t.inputHandler(e)}}))},t}();o.style=".picker{position:relative;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}input[type=file]{width:100%;height:100%;display:inline-block;position:absolute;left:0;top:0;opacity:0;cursor:pointer}"}}]);