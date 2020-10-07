(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{505:function(e,t,n){"use strict";n.r(t),n.d(t,"amplify_select_mfa_type",(function(){return A}));var r=n(23),o=n(89),l=n(510),h=n(544),c=n(204),T=n(545),d=n(543),f=function(e,t,n,r){return new(n||(n=Promise))((function(o,l){function h(e){try{T(r.next(e))}catch(e){l(e)}}function c(e){try{T(r.throw(e))}catch(e){l(e)}}function T(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(h,c)}T((r=r.apply(e,t||[])).next())}))},M=function(e,body){var t,n,r,g,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return g={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function l(l){return function(h){return function(l){if(t)throw new TypeError("Generator is already executing.");for(;o;)try{if(t=1,n&&(r=2&l[0]?n.return:l[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,l[1])).done)return r;switch(n=0,r&&(l=[2&l[0],r.value]),l[0]){case 0:case 1:r=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,n=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!(r=o.trys,(r=r.length>0&&r[r.length-1])||6!==l[0]&&2!==l[0])){o=0;continue}if(3===l[0]&&(!r||l[1]>r[0]&&l[1]<r[3])){o.label=l[1];break}if(6===l[0]&&o.label<r[1]){o.label=r[1],r=l;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(l);break}r[2]&&o.ops.pop(),o.trys.pop();continue}l=body.call(e,o)}catch(e){l=[6,e],n=0}finally{t=r=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,h])}}},S=new o.a("SelectMFAType"),A=function(){function e(e){var t=this;Object(r.k)(this,e),this.handleSubmit=function(e){return t.verify(e)},this.TOTPSetup=!1,this.selectMessage=null,this.MFAMethod=null,this.isTOTP=!1,this.isNoMFA=!1,this.isSMS=!1,this.loading=!1}return e.prototype.handleRadioButtonChange=function(e){this.TOTPSetup=!1,this.selectMessage=null,this.isNoMFA=!1,this.isTOTP=!1,this.isSMS=!1;var t=e.target,n=t.value,r=t.type,o=t.checked,l=["radio","checkbox"].includes(r);n===h.c.SMS&&l&&(this.isSMS=o),n===h.c.TOTP&&l&&(this.isTOTP=o),n===h.c.NOMFA&&l&&(this.isNoMFA=o)},e.prototype.verify=function(e){return f(this,void 0,void 0,(function(){var t,n,r,o;return M(this,(function(f){switch(f.label){case 0:if(e&&e.preventDefault(),S.debug("MFA Type Values",{TOTP:this.isTOTP,SMS:this.isSMS,"No MFA":this.isNoMFA}),this.isTOTP?this.MFAMethod=h.c.TOTP:this.isSMS?this.MFAMethod=h.c.SMS:this.isNoMFA&&(this.MFAMethod=h.c.NOMFA),t=this.authData,!c.a||"function"!=typeof c.a.setPreferredMFA)throw new Error(d.d);this.loading=!0,f.label=1;case 1:return f.trys.push([1,3,4,5]),[4,c.a.setPreferredMFA(t,this.MFAMethod)];case 2:return n=f.sent(),S.debug("Set Preferred MFA Succeeded",n),this.selectMessage=l.a.get(T.a.SUCCESS_MFA_TYPE)+" "+this.MFAMethod,[3,5];case 3:return r=f.sent(),(o=r.message)===d.o||o===d.p?(this.TOTPSetup=!0,this.selectMessage=l.a.get(T.a.SETUP_TOTP_REQUIRED)):(S.debug("Set Preferred MFA failed",r),this.selectMessage=l.a.get(T.a.UNABLE_TO_SETUP_MFA_AT_THIS_TIME)),[3,5];case 4:return this.loading=!1,[7];case 5:return[2]}}))}))},e.prototype.contentBuilder=function(){var e=this;if(!this.MFATypes||Object.keys(this.MFATypes).length<2)return S.debug(l.a.get(T.a.LESS_THAN_TWO_MFA_VALUES_MESSAGE)),Object(r.i)("div",null,Object(r.i)("a",null,l.a.get(T.a.LESS_THAN_TWO_MFA_VALUES_MESSAGE)));var t=this.MFATypes,n=t.SMS,o=t.TOTP,h=t.Optional;return Object(r.i)("amplify-form-section",{submitButtonText:l.a.get(T.a.SELECT_MFA_TYPE_SUBMIT_BUTTON_TEXT),headerText:l.a.get(T.a.SELECT_MFA_TYPE_HEADER_TEXT),handleSubmit:function(t){return e.handleSubmit(t)},loading:this.loading},n?Object(r.i)("amplify-radio-button",{key:"sms",name:"MFAType",value:"SMS",label:"SMS",handleInputChange:function(t){return e.handleRadioButtonChange(t)}}):null,o?Object(r.i)("amplify-radio-button",{key:"totp",name:"MFAType",value:"TOTP",label:"TOTP",handleInputChange:function(t){return e.handleRadioButtonChange(t)}}):null,h?Object(r.i)("amplify-radio-button",{key:"noMFA",name:"MFAType",value:"NOMFA",label:"No MFA",handleInputChange:function(t){return e.handleRadioButtonChange(t)}}):null)},e.prototype.render=function(){return Object(r.i)("div",null,this.contentBuilder(),this.TOTPSetup?Object(r.i)("amplify-totp-setup",{user:this.authData}):null)},e}()}}]);