(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{631:function(e,t,n){"use strict";n.r(t),n.d(t,"amplify_confirm_sign_in",(function(){return O})),n.d(t,"amplify_confirm_sign_up",(function(){return I})),n.d(t,"amplify_forgot_password",(function(){return A})),n.d(t,"amplify_require_new_password",(function(){return E})),n.d(t,"amplify_sign_in",(function(){return j})),n.d(t,"amplify_sign_up",(function(){return T})),n.d(t,"amplify_verify_contact",(function(){return P}));var r=n(23),o=n(619),l=n(90),h=n(52),d=n(694),c=n(147),f=n(692),m=n(691),y=n(697),F=n(864),C=function(e,t,n,r){return new(n||(n=Promise))((function(o,l){function h(e){try{c(r.next(e))}catch(e){l(e)}}function d(e){try{c(r.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(h,d)}c((r=r.apply(e,t||[])).next())}))},w=function(e,body){var t,n,r,g,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return g={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function l(l){return function(h){return function(l){if(t)throw new TypeError("Generator is already executing.");for(;o;)try{if(t=1,n&&(r=2&l[0]?n.return:l[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,l[1])).done)return r;switch(n=0,r&&(l=[2&l[0],r.value]),l[0]){case 0:case 1:r=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,n=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!(r=o.trys,(r=r.length>0&&r[r.length-1])||6!==l[0]&&2!==l[0])){o=0;continue}if(3===l[0]&&(!r||l[1]>r[0]&&l[1]<r[3])){o.label=l[1];break}if(6===l[0]&&o.label<r[1]){o.label=r[1],r=l;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(l);break}r[2]&&o.ops.pop(),o.trys.pop();continue}l=body.call(e,o)}catch(e){l=[6,e],n=0}finally{t=r=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,h])}}},v=function(){for(var s=0,i=0,e=arguments.length;i<e;i++)s+=arguments[i].length;var t=Array(s),n=0;for(i=0;i<e;i++)for(var a=arguments[i],r=0,o=a.length;r<o;r++,n++)t[n]=a[r];return t},O=function(){function e(e){var t=this;Object(r.k)(this,e),this.handleSubmit=function(e){return t.confirm(e)},this.headerText=f.a.CONFIRM_SMS_CODE,this.submitButtonText=f.a.CONFIRM,this.handleAuthStateChange=y.d,this.formFields=[{type:"code",required:!0,handleInputChange:function(e){return t.handleCodeChange(e)}}],this.mfaOption=d.c.SMS,this.loading=!1}return e.prototype.componentWillLoad=function(){this.setup()},e.prototype.userHandler=function(){this.setup()},e.prototype.setup=function(){this.user&&this.user.challengeName===d.b.SoftwareTokenMFA&&(this.mfaOption=d.c.TOTP,this.headerText===f.a.CONFIRM_SMS_CODE&&(this.headerText=f.a.CONFIRM_TOTP_CODE))},e.prototype.handleCodeChange=function(e){this.code=e.target.value},e.prototype.confirm=function(e){return C(this,void 0,void 0,(function(){var t,n;return w(this,(function(r){switch(r.label){case 0:if(e&&e.preventDefault(),t=this.user.challengeName===d.b.SoftwareTokenMFA?d.b.SoftwareTokenMFA:null,!c.a||"function"!=typeof c.a.confirmSignIn)throw new Error(m.d);this.loading=!0,r.label=1;case 1:return r.trys.push([1,4,5,6]),[4,c.a.confirmSignIn(this.user,this.code,t)];case 2:return r.sent(),[4,Object(F.a)(this.user,this.handleAuthStateChange)];case 3:return r.sent(),[3,6];case 4:return n=r.sent(),Object(y.a)(n),[3,6];case 5:return this.loading=!1,[7];case 6:return[2]}}))}))},e.prototype.render=function(){var e=this;return Object(r.i)(r.b,null,Object(r.i)("amplify-form-section",{headerText:o.a.get(this.headerText),handleSubmit:this.handleSubmit,submitButtonText:o.a.get(this.submitButtonText),loading:this.loading,secondaryFooterContent:Object(r.i)("span",null,Object(r.i)("amplify-button",{variant:"anchor",onClick:function(){return e.handleAuthStateChange(d.a.SignIn)}},o.a.get(f.a.BACK_TO_SIGN_IN)))},Object(r.i)("amplify-auth-fields",{formFields:this.formFields})))},Object.defineProperty(e,"watchers",{get:function(){return{user:["userHandler"]}},enumerable:!1,configurable:!0}),e}(),I=function(){function e(e){var t=this;Object(r.k)(this,e),this.handleSubmit=function(e){return t.confirmSignUp(e)},this.headerText=f.a.CONFIRM_SIGN_UP_HEADER_TEXT,this.submitButtonText=f.a.CONFIRM_SIGN_UP_SUBMIT_BUTTON_TEXT,this.formFields=[],this.handleAuthStateChange=y.d,this.usernameAlias="username",this.loading=!1,this.newFormFields=[],this.phoneNumber={countryDialCodeValue:m.q,phoneNumberValue:null}}return e.prototype.componentWillLoad=function(){this.setup()},e.prototype.formFieldsHandler=function(){this.buildFormFields()},e.prototype.userHandler=function(){this.setup()},e.prototype.setup=function(){this.userInput=this.user&&this.user.username,this._signUpAttrs=this.user&&this.user.signUpAttrs,Object(y.c)(this.usernameAlias),this.buildFormFields()},e.prototype.buildDefaultFormFields=function(){var e=this;this.newFormFields=[{type:""+this.usernameAlias,required:!0,handleInputChange:this.handleFormFieldInputChange(""+this.usernameAlias),value:this.userInput,disabled:!!this.userInput},{type:"code",label:o.a.get(f.a.CONFIRM_SIGN_UP_CODE_LABEL),placeholder:o.a.get(f.a.CONFIRM_SIGN_UP_CODE_PLACEHOLDER),required:!0,hint:Object(r.i)("div",null,o.a.get(f.a.CONFIRM_SIGN_UP_LOST_CODE)," ",Object(r.i)("amplify-button",{variant:"anchor",onClick:function(){return e.resendConfirmCode()}},o.a.get(f.a.CONFIRM_SIGN_UP_RESEND_CODE))),handleInputChange:this.handleFormFieldInputChange("code")}]},e.prototype.buildFormFields=function(){var e=this;if(0===this.formFields.length)this.buildDefaultFormFields();else{var t=[];this.formFields.forEach((function(n){var l=Object.assign({},n);"code"===l.type&&(l.hint=Object(y.g)(l)?Object(r.i)("div",null,o.a.get(f.a.CONFIRM_SIGN_UP_LOST_CODE)," ",Object(r.i)("amplify-button",{variant:"anchor",onClick:function(){return e.resendConfirmCode()}},o.a.get(f.a.CONFIRM_SIGN_UP_RESEND_CODE))):l.hint),l.handleInputChange=function(t){return e.handleFormFieldInputWithCallback(t,n)},t.push(l)})),this.newFormFields=t}},e.prototype.handleFormFieldInputChange=function(e){var t=this;switch(e){case"username":case"email":return function(e){return t.userInput=e.target.value};case"phone_number":return function(e){return Object(y.f)(e,t.phoneNumber)};case"code":return function(e){return t.code=e.target.value};default:return}},e.prototype.setFieldValue=function(e){switch(e.type){case"username":case"email":void 0===e.value?this.userInput="":this.userInput=e.value;break;case"phone_number":e.dialCode&&(this.phoneNumber.countryDialCodeValue=e.dialCode),this.phoneNumber.phoneNumberValue=e.value}},e.prototype.handleFormFieldInputWithCallback=function(e,t){(t.handleInputChange?t.handleInputChange:function(e,t){t(e)})(e,this.handleFormFieldInputChange(t.type).bind(this))},e.prototype.resendConfirmCode=function(){return C(this,void 0,void 0,(function(){var e;return w(this,(function(t){switch(t.label){case 0:if(event&&event.preventDefault(),!c.a||"function"!=typeof c.a.resendSignUp)throw new Error(m.d);t.label=1;case 1:if(t.trys.push([1,3,,4]),!this.userInput)throw new Error(f.a.EMPTY_USERNAME);return this.userInput=this.userInput.trim(),[4,c.a.resendSignUp(this.userInput)];case 2:return t.sent(),this.handleAuthStateChange(d.a.ConfirmSignUp),[3,4];case 3:return e=t.sent(),Object(y.a)(e),[3,4];case 4:return[2]}}))}))},e.prototype.confirmSignUp=function(e){return C(this,void 0,void 0,(function(){var t;return w(this,(function(n){switch(n.label){case 0:if(e&&e.preventDefault(),!c.a||"function"!=typeof c.a.confirmSignUp)throw new Error(m.d);switch(this.loading=!0,this.usernameAlias){case"phone_number":try{this.userInput=Object(y.b)(this.phoneNumber)}catch(e){Object(y.a)(e)}}n.label=1;case 1:if(n.trys.push([1,6,7,8]),!this.userInput)throw new Error(f.a.EMPTY_USERNAME);return this.userInput=this.userInput.trim(),[4,c.a.confirmSignUp(this.userInput,this.code)];case 2:if(!n.sent())throw new Error(o.a.get(f.a.CONFIRM_SIGN_UP_FAILED));return this._signUpAttrs&&this._signUpAttrs.password&&""!==this._signUpAttrs.password?[4,Object(F.b)(this.userInput,this._signUpAttrs.password,this.handleAuthStateChange)]:[3,4];case 3:return n.sent(),[3,5];case 4:this.handleAuthStateChange(d.a.SignIn),n.label=5;case 5:return[3,8];case 6:return t=n.sent(),Object(y.a)(t),[3,8];case 7:return this.loading=!1,[7];case 8:return[2]}}))}))},e.prototype.render=function(){var e=this;return Object(r.i)(r.b,null,Object(r.i)("amplify-form-section",{headerText:o.a.get(this.headerText),submitButtonText:o.a.get(this.submitButtonText),handleSubmit:this.handleSubmit,loading:this.loading,secondaryFooterContent:Object(r.i)("div",null,Object(r.i)("span",null,Object(r.i)("amplify-button",{variant:"anchor",onClick:function(){return e.handleAuthStateChange(d.a.SignIn)}},o.a.get(f.a.BACK_TO_SIGN_IN))))},Object(r.i)("amplify-auth-fields",{formFields:this.newFormFields})))},Object.defineProperty(e,"watchers",{get:function(){return{formFields:["formFieldsHandler"],user:["userHandler"]}},enumerable:!1,configurable:!0}),e}(),_=new l.a("ForgotPassword"),A=function(){function e(e){var t=this;Object(r.k)(this,e),this.headerText=f.a.RESET_YOUR_PASSWORD,this.sendButtonText=f.a.SEND_CODE,this.submitButtonText=f.a.SUBMIT,this.formFields=[],this.handleSend=function(e){return t.send(e)},this.handleSubmit=function(e){return t.submit(e)},this.handleAuthStateChange=y.d,this.usernameAlias="username",this.delivery=null,this.loading=!1,this.phoneNumber={countryDialCodeValue:m.q,phoneNumberValue:null},this.newFormFields=[],this.forgotPasswordAttrs={userInput:"",password:"",code:""}}return e.prototype.componentWillLoad=function(){Object(y.c)(this.usernameAlias),this.buildFormFields()},e.prototype.formFieldsHandler=function(){this.buildFormFields()},e.prototype.buildFormFields=function(){var e=this;0===this.formFields.length?this.buildDefaultFormFields():this.formFields.forEach((function(t){var n=Object.assign({},t);n.handleInputChange=function(n){return e.handleFormFieldInputWithCallback(n,t)},e.newFormFields.push(n)}))},e.prototype.buildDefaultFormFields=function(){switch(this.usernameAlias){case"email":this.newFormFields=[{type:"email",required:!0,handleInputChange:this.handleFormFieldInputChange("email"),inputProps:{"data-test":"forgot-password-email-input"}}];break;case"phone_number":this.newFormFields=[{type:"phone_number",required:!0,handleInputChange:this.handleFormFieldInputChange("phone_number"),inputProps:{"data-test":"forgot-password-phone-number-input"}}];break;case"username":default:this.newFormFields=[{type:"username",required:!0,handleInputChange:this.handleFormFieldInputChange("username"),inputProps:{"data-test":"forgot-password-username-input"}}]}},e.prototype.handleFormFieldInputChange=function(e){var t=this;switch(e){case"username":case"email":return function(e){return t.forgotPasswordAttrs.userInput=e.target.value};case"phone_number":return function(e){return Object(y.f)(e,t.phoneNumber)};case"password":case"code":return function(n){return t.forgotPasswordAttrs[e]=n.target.value};default:return}},e.prototype.setFieldValue=function(e,t){switch(e.type){case"username":case"email":void 0===e.value?t.userInput="":t.userInput=e.value;break;case"phone_number":e.dialCode&&(this.phoneNumber.countryDialCodeValue=e.dialCode),this.phoneNumber.phoneNumberValue=e.value;break;case"password":case"code":void 0===e.value?t[e.type]="":t[e.type]=e.value}},e.prototype.handleFormFieldInputWithCallback=function(e,t){(t.handleInputChange?t.handleInputChange:function(e,t){t(e)})(e,this.handleFormFieldInputChange(t.type).bind(this))},e.prototype.send=function(e){return C(this,void 0,void 0,(function(){var data,t;return w(this,(function(n){switch(n.label){case 0:if(e&&e.preventDefault(),!c.a||"function"!=typeof c.a.forgotPassword)throw new Error(m.d);switch(this.loading=!0,this.usernameAlias){case"phone_number":try{this.forgotPasswordAttrs.userInput=Object(y.b)(this.phoneNumber)}catch(e){Object(y.a)(e)}}n.label=1;case 1:return n.trys.push([1,3,4,5]),[4,c.a.forgotPassword(this.forgotPasswordAttrs.userInput.trim())];case 2:return data=n.sent(),_.debug(data),this.newFormFields=[{type:"code",required:!0,handleInputChange:this.handleFormFieldInputChange("code"),inputProps:{"data-test":"forgot-password-code-input"}},{type:"password",required:!0,handleInputChange:this.handleFormFieldInputChange("password"),label:o.a.get(f.a.NEW_PASSWORD_LABEL),placeholder:o.a.get(f.a.NEW_PASSWORD_PLACEHOLDER)}],this.delivery=data.CodeDeliveryDetails,[3,5];case 3:return t=n.sent(),Object(y.a)(t),[3,5];case 4:return this.loading=!1,[7];case 5:return[2]}}))}))},e.prototype.submit=function(e){return C(this,void 0,void 0,(function(){var t,n,code,r,data,o;return w(this,(function(l){switch(l.label){case 0:if(e&&e.preventDefault(),!c.a||"function"!=typeof c.a.forgotPasswordSubmit)throw new Error(m.d);this.loading=!0,l.label=1;case 1:return l.trys.push([1,3,4,5]),t=this.forgotPasswordAttrs,n=t.userInput,code=t.code,r=t.password,[4,c.a.forgotPasswordSubmit(n,code,r)];case 2:return data=l.sent(),_.debug(data),this.handleAuthStateChange(d.a.SignIn),this.delivery=null,[3,5];case 3:return o=l.sent(),Object(y.a)(o),[3,5];case 4:return this.loading=!1,[7];case 5:return[2]}}))}))},e.prototype.render=function(){var e=this,t=this.delivery?function(t){return e.handleSubmit(t)}:function(t){return e.handleSend(t)},n=this.delivery?this.submitButtonText:this.sendButtonText;return Object(r.i)(r.b,null,Object(r.i)("amplify-form-section",{headerText:o.a.get(this.headerText),handleSubmit:t,loading:this.loading,secondaryFooterContent:Object(r.i)("amplify-button",{variant:"anchor",onClick:function(){return e.handleAuthStateChange(d.a.SignIn)},"data-test":"forgot-password-back-to-sign-in-link"},o.a.get(f.a.BACK_TO_SIGN_IN)),testDataPrefix:"forgot-password",submitButtonText:o.a.get(n)},Object(r.i)("amplify-auth-fields",{formFields:this.newFormFields})))},Object.defineProperty(e,"watchers",{get:function(){return{formFields:["formFieldsHandler"]}},enumerable:!1,configurable:!0}),e}(),S=new l.a("amplify-require-new-password"),E=function(){function e(e){var t=this;Object(r.k)(this,e),this.headerText=f.a.CHANGE_PASSWORD,this.submitButtonText=f.a.CHANGE_PASSWORD_ACTION,this.handleSubmit=function(e){return t.completeNewPassword(e)},this.handleAuthStateChange=y.d,this.formFields=[{type:d.e.Password,required:!0,handleInputChange:function(e){return t.handlePasswordChange(e)},label:o.a.get(f.a.NEW_PASSWORD_LABEL),placeholder:o.a.get(f.a.NEW_PASSWORD_PLACEHOLDER),inputProps:{"data-test":"require-new-password-password-input"}}],this.loading=!1,this.requiredAttributes={},this.newFormFields=this.formFields}return e.prototype.userHandler=function(){this.setCurrentUser()},e.prototype.handleRequiredAttributeInputChange=function(e,t){this.requiredAttributes[e]=t.target.value},e.prototype.setCurrentUser=function(){return C(this,void 0,void 0,(function(){var e,t,n=this;return w(this,(function(r){switch(r.label){case 0:if(this.user)return[3,5];r.label=1;case 1:return r.trys.push([1,3,,4]),[4,c.a.currentAuthenticatedUser()];case 2:return(e=r.sent())&&(this.currentUser=e),[3,4];case 3:return t=r.sent(),Object(y.a)(t),[3,4];case 4:return[3,6];case 5:this.currentUser=this.user,r.label=6;case 6:return this.currentUser&&this.currentUser.challengeParam&&this.currentUser.challengeParam.requiredAttributes&&this.currentUser.challengeParam.requiredAttributes.forEach((function(e){var t={type:e,required:!0,label:y.i[e].label,placeholder:y.i[e].placeholder,handleInputChange:function(t){return n.handleRequiredAttributeInputChange(e,t)},inputProps:{"data-test":"require-new-password-"+e+"-input"}};n.newFormFields=v(n.newFormFields,[t])})),[2]}}))}))},e.prototype.componentWillLoad=function(){return this.setCurrentUser()},e.prototype.handlePasswordChange=function(e){this.password=e.target.value},e.prototype.completeNewPassword=function(e){return C(this,void 0,void 0,(function(){var t,n;return w(this,(function(r){switch(r.label){case 0:if(e&&e.preventDefault(),!c.a||"function"!=typeof c.a.completeNewPassword)throw new Error(m.d);this.loading=!0,r.label=1;case 1:return r.trys.push([1,8,9,10]),[4,c.a.completeNewPassword(this.currentUser,this.password,this.requiredAttributes)];case 2:switch(t=r.sent(),S.debug("complete new password",t),t.challengeName){case d.b.SMSMFA:return[3,3];case d.b.MFASetup:return[3,4]}return[3,5];case 3:return this.handleAuthStateChange(d.a.ConfirmSignIn,t),[3,7];case 4:return S.debug("TOTP setup",t.challengeParam),this.handleAuthStateChange(d.a.TOTPSetup,t),[3,7];case 5:return[4,Object(F.a)(t,this.handleAuthStateChange)];case 6:r.sent(),r.label=7;case 7:return[3,10];case 8:return n=r.sent(),Object(y.a)(n),[3,10];case 9:return this.loading=!1,[7];case 10:return[2]}}))}))},e.prototype.render=function(){var e=this;return Object(r.i)(r.b,null,Object(r.i)("amplify-form-section",{headerText:o.a.get(this.headerText),handleSubmit:this.handleSubmit,loading:this.loading,secondaryFooterContent:Object(r.i)("amplify-button",{variant:"anchor",onClick:function(){return e.handleAuthStateChange(d.a.SignIn)}},o.a.get(f.a.BACK_TO_SIGN_IN)),submitButtonText:o.a.get(this.submitButtonText)},Object(r.i)("amplify-auth-fields",{formFields:this.newFormFields})))},Object.defineProperty(e,"watchers",{get:function(){return{user:["userHandler"]}},enumerable:!1,configurable:!0}),e}(),j=function(){function e(e){var t=this;Object(r.k)(this,e),this.handleSubmit=function(e){return t.signIn(e)},this.headerText=f.a.SIGN_IN_HEADER_TEXT,this.submitButtonText=f.a.SIGN_IN_ACTION,this.handleAuthStateChange=y.d,this.usernameAlias="username",this.formFields=[],this.hideSignUp=!1,this.newFormFields=[],this.loading=!1,this.phoneNumber={countryDialCodeValue:m.q,phoneNumberValue:null},this.signInAttributes={userInput:"",password:""}}return e.prototype.componentWillLoad=function(){Object(y.c)(this.usernameAlias),this.buildFormFields()},e.prototype.formFieldsHandler=function(){this.buildFormFields()},e.prototype.handleFormFieldInputChange=function(e){var t=this;switch(e){case"username":case"email":return function(e){return t.signInAttributes.userInput=e.target.value};case"phone_number":return function(e){return Object(y.f)(e,t.phoneNumber)};case"password":return function(e){return t.signInAttributes.password=e.target.value}}},e.prototype.handleFormFieldInputWithCallback=function(e,t){(t.handleInputChange?t.handleInputChange:function(e,t){t(e)})(e,this.handleFormFieldInputChange(t.type).bind(this))},e.prototype.signIn=function(e){return C(this,void 0,void 0,(function(){var t;return w(this,(function(n){switch(n.label){case 0:switch(e&&e.preventDefault(),this.loading=!0,this.usernameAlias){case"phone_number":try{this.signInAttributes.userInput=Object(y.b)(this.phoneNumber)}catch(e){Object(y.a)(e)}}return t=this.signInAttributes.userInput.trim(),[4,Object(F.b)(t,this.signInAttributes.password,this.handleAuthStateChange)];case 1:return n.sent(),this.loading=!1,[2]}}))}))},e.prototype.buildDefaultFormFields=function(){var e=this,t=[];switch(this.usernameAlias){case"email":t.push({type:"email",required:!0,handleInputChange:this.handleFormFieldInputChange("email"),inputProps:{"data-test":"sign-in-email-input"}});break;case"phone_number":t.push({type:"phone_number",required:!0,handleInputChange:this.handleFormFieldInputChange("phone_number"),inputProps:{"data-test":"sign-in-phone-number-input"}});break;case"username":default:t.push({type:"username",required:!0,handleInputChange:this.handleFormFieldInputChange("username"),inputProps:{"data-test":"sign-in-username-input"}})}t.push({type:"password",hint:Object(r.i)("div",null,o.a.get(f.a.FORGOT_PASSWORD_TEXT)," ",Object(r.i)("amplify-button",{variant:"anchor",onClick:function(){return e.handleAuthStateChange(d.a.ForgotPassword)},"data-test":"sign-in-forgot-password-link"},o.a.get(f.a.RESET_PASSWORD_TEXT))),required:!0,handleInputChange:this.handleFormFieldInputChange("password"),inputProps:{"data-test":"sign-in-password-input"}}),this.newFormFields=v(t)},e.prototype.buildFormFields=function(){var e=this;if(0===this.formFields.length)this.buildDefaultFormFields();else{var t=[];this.formFields.forEach((function(n){var l=Object.assign({},n);"password"===l.type&&(l.hint=Object(y.g)(l)?Object(r.i)("div",null,o.a.get(f.a.FORGOT_PASSWORD_TEXT)," ",Object(r.i)("amplify-button",{variant:"anchor",onClick:function(){return e.handleAuthStateChange(d.a.ForgotPassword)},"data-test":"sign-in-forgot-password-link"},o.a.get(f.a.RESET_PASSWORD_TEXT))):l.hint),l.handleInputChange=function(t){return e.handleFormFieldInputWithCallback(t,n)},e.setFieldValue(l,e.signInAttributes),t.push(l)})),this.newFormFields=t}},e.prototype.setFieldValue=function(e,t){switch(e.type){case"username":case"email":void 0===e.value?t.userInput="":t.userInput=e.value;break;case"phone_number":e.dialCode&&(this.phoneNumber.countryDialCodeValue=e.dialCode),this.phoneNumber.phoneNumberValue=e.value;break;case"password":void 0===e.value?t.password="":t.password=e.value}},e.prototype.render=function(){var e=this;return Object(r.i)(r.b,null,Object(r.i)("amplify-form-section",{headerText:o.a.get(this.headerText),handleSubmit:this.handleSubmit,testDataPrefix:"sign-in"},Object(r.i)("div",{slot:"subtitle"},Object(r.i)("slot",{name:"header-subtitle"})),Object(r.i)("slot",{name:"federated-buttons"},Object(r.i)("amplify-federated-buttons",{handleAuthStateChange:this.handleAuthStateChange,federated:this.federated})),!Object(h.d)(this.federated)&&Object(r.i)("amplify-strike",null,"or"),Object(r.i)("amplify-auth-fields",{formFields:this.newFormFields}),Object(r.i)("div",{slot:"amplify-form-section-footer",class:"sign-in-form-footer"},Object(r.i)("slot",{name:"footer"},Object(r.i)("slot",{name:"secondary-footer-content"},this.hideSignUp?Object(r.i)("span",null):Object(r.i)("span",null,o.a.get(f.a.NO_ACCOUNT_TEXT)," ",Object(r.i)("amplify-button",{variant:"anchor",onClick:function(){return e.handleAuthStateChange(d.a.SignUp)},"data-test":"sign-in-create-account-link"},o.a.get(f.a.CREATE_ACCOUNT_TEXT)))),Object(r.i)("slot",{name:"primary-footer-content"},Object(r.i)("amplify-button",{type:"submit",disabled:this.loading,"data-test":"sign-in-sign-in-button"},this.loading?Object(r.i)("amplify-loading-spinner",null):Object(r.i)("span",null,o.a.get(this.submitButtonText))))))))},Object.defineProperty(e,"watchers",{get:function(){return{formFields:["formFieldsHandler"]}},enumerable:!1,configurable:!0}),e}();j.style=":host{--footer-size:var(--amplify-text-sm);--footer-color:var(--amplify-grey);--footer-font-family:var(--amplify-font-family);--font-weight:var(--amplify-font-weight)}.sign-in-form-footer{font-family:var(--footer-font-family);font-size:var(--footer-size);color:var(--footer-color);font-weight:--font-weight;display:-ms-flexbox;display:flex;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around}.sign-in-form-footer amplify-button{margin-bottom:0.625rem}@media (min-width: 672px){.sign-in-form-footer{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:baseline;align-items:baseline}.sign-in-form-footer amplify-button{margin-bottom:0}}.sign-in-form-footer *+*{margin-bottom:15px}";var T=function(){function e(e){var t=this;Object(r.k)(this,e),this.handleSubmit=function(e){return t.signUp(e)},this.headerText=f.a.SIGN_UP_HEADER_TEXT,this.submitButtonText=f.a.SIGN_UP_SUBMIT_BUTTON_TEXT,this.haveAccountText=f.a.SIGN_UP_HAVE_ACCOUNT_TEXT,this.signInText=f.a.SIGN_IN_TEXT,this.formFields=[],this.handleAuthStateChange=y.d,this.usernameAlias="username",this.newFormFields=[],this.phoneNumber={countryDialCodeValue:m.q,phoneNumberValue:null},this.loading=!1,this.signUpAttributes={username:"",password:"",attributes:{}}}return e.prototype.handleFormFieldInputChange=function(e){var t=this;switch(e){case"username":return function(e){return t.signUpAttributes.username=e.target.value};case"password":return function(e){return t.signUpAttributes.password=e.target.value};case"email":return function(e){return t.signUpAttributes.attributes.email=e.target.value};case"phone_number":return function(e){return Object(y.f)(e,t.phoneNumber)};default:return function(n){return t.signUpAttributes.attributes[e]=n.target.value}}},e.prototype.handleFormFieldInputWithCallback=function(e,t){(t.handleInputChange?t.handleInputChange:function(e,t){t(e)})(e,this.handleFormFieldInputChange(t.type).bind(this))},e.prototype.signUp=function(e){return C(this,void 0,void 0,(function(){var data,t,n;return w(this,(function(r){switch(r.label){case 0:if(e&&e.preventDefault(),!c.a||"function"!=typeof c.a.signUp)throw new Error(m.d);if(this.loading=!0,this.phoneNumber.phoneNumberValue)try{this.signUpAttributes.attributes.phone_number=Object(y.b)(this.phoneNumber)}catch(e){Object(y.a)(e)}switch(this.usernameAlias){case"email":case"phone_number":this.signUpAttributes.username=this.signUpAttributes.attributes[this.usernameAlias]}r.label=1;case 1:if(r.trys.push([1,6,7,8]),this.signUpAttributes.username.indexOf(" ")>=0)throw new Error(f.a.USERNAME_REMOVE_WHITESPACE);if(this.signUpAttributes.password!==this.signUpAttributes.password.trim())throw new Error(f.a.PASSWORD_REMOVE_WHITESPACE);return[4,c.a.signUp(this.signUpAttributes)];case 2:if(!(data=r.sent()))throw new Error(f.a.SIGN_UP_FAILED);return data.userConfirmed?[4,Object(F.b)(this.signUpAttributes.username,this.signUpAttributes.password,this.handleAuthStateChange)]:[3,4];case 3:return r.sent(),[3,5];case 4:t=Object.assign({},this.signUpAttributes),this.handleAuthStateChange(d.a.ConfirmSignUp,Object.assign(Object.assign({},data.user),{signUpAttrs:t})),r.label=5;case 5:return[3,8];case 6:return n=r.sent(),Object(y.a)(n),[3,8];case 7:return this.loading=!1,[7];case 8:return[2]}}))}))},e.prototype.buildDefaultFormFields=function(){switch(this.usernameAlias){case"email":this.newFormFields=[{type:"email",placeholder:o.a.get(f.a.SIGN_UP_EMAIL_PLACEHOLDER),required:!0,handleInputChange:this.handleFormFieldInputChange("email"),inputProps:{"data-test":"sign-up-email-input"}},{type:"password",placeholder:o.a.get(f.a.SIGN_UP_PASSWORD_PLACEHOLDER),required:!0,handleInputChange:this.handleFormFieldInputChange("password"),inputProps:{"data-test":"sign-up-password-input"}},{type:"phone_number",required:!0,handleInputChange:this.handleFormFieldInputChange("phone_number"),inputProps:{"data-test":"sign-up-phone-number-input"}}];break;case"phone_number":this.newFormFields=[{type:"phone_number",required:!0,handleInputChange:this.handleFormFieldInputChange("phone_number"),inputProps:{"data-test":"sign-up-phone-number-input"}},{type:"password",placeholder:o.a.get(f.a.SIGN_UP_PASSWORD_PLACEHOLDER),required:!0,handleInputChange:this.handleFormFieldInputChange("password"),inputProps:{"data-test":"sign-up-password-input"}},{type:"email",placeholder:o.a.get(f.a.SIGN_UP_EMAIL_PLACEHOLDER),required:!0,handleInputChange:this.handleFormFieldInputChange("email"),inputProps:{"data-test":"sign-up-email-input"}}];break;case"username":default:this.newFormFields=[{type:"username",placeholder:o.a.get(f.a.SIGN_UP_USERNAME_PLACEHOLDER),required:!0,handleInputChange:this.handleFormFieldInputChange("username"),inputProps:{"data-test":"sign-up-username-input"}},{type:"password",placeholder:o.a.get(f.a.SIGN_UP_PASSWORD_PLACEHOLDER),required:!0,handleInputChange:this.handleFormFieldInputChange("password"),inputProps:{"data-test":"sign-up-password-input"}},{type:"email",placeholder:o.a.get(f.a.SIGN_UP_EMAIL_PLACEHOLDER),required:!0,handleInputChange:this.handleFormFieldInputChange("email"),inputProps:{"data-test":"sign-up-email-input"}},{type:"phone_number",required:!0,handleInputChange:this.handleFormFieldInputChange("phone_number"),inputProps:{"data-test":"sign-up-phone-number-input"}}]}},e.prototype.buildFormFields=function(){var e=this;if(0===this.formFields.length)this.buildDefaultFormFields();else{var t=[];this.formFields.forEach((function(n){var r=Object.assign({},n);r.handleInputChange=function(t){return e.handleFormFieldInputWithCallback(t,n)},e.setFieldValue(n,e.signUpAttributes),t.push(r)})),this.newFormFields=t}},e.prototype.setFieldValue=function(e,t){switch(e.type){case"username":void 0===e.value?t.username="":t.username=e.value;break;case"password":void 0===e.value?t.password="":t.password=e.value;break;case"email":t.attributes.email=e.value;break;case"phone_number":e.dialCode&&(this.phoneNumber.countryDialCodeValue=e.dialCode),this.phoneNumber.phoneNumberValue=e.value;break;default:t.attributes[e.type]=e.value}},e.prototype.componentWillLoad=function(){Object(y.c)(this.usernameAlias),this.buildFormFields()},e.prototype.formFieldsHandler=function(){this.buildFormFields()},e.prototype.render=function(){var e=this;return Object(r.i)(r.b,null,Object(r.i)("amplify-form-section",{headerText:o.a.get(this.headerText),handleSubmit:this.handleSubmit,testDataPrefix:"sign-up"},Object(r.i)("div",{slot:"subtitle"},Object(r.i)("slot",{name:"header-subtitle"})),Object(r.i)("amplify-auth-fields",{formFields:this.newFormFields}),Object(r.i)("div",{class:"sign-up-form-footer",slot:"amplify-form-section-footer"},Object(r.i)("slot",{name:"footer"},Object(r.i)("slot",{name:"secondary-footer-content"},Object(r.i)("span",null,o.a.get(this.haveAccountText)," ",Object(r.i)("amplify-button",{variant:"anchor",onClick:function(){return e.handleAuthStateChange(d.a.SignIn)},"data-test":"sign-up-sign-in-link"},o.a.get(this.signInText)))),Object(r.i)("slot",{name:"primary-footer-content"},Object(r.i)("amplify-button",{type:"submit","data-test":"sign-up-create-account-button"},this.loading?Object(r.i)("amplify-loading-spinner",null):Object(r.i)("span",null,o.a.get(this.submitButtonText))))))))},Object.defineProperty(e,"watchers",{get:function(){return{formFields:["formFieldsHandler"]}},enumerable:!1,configurable:!0}),e}();T.style=":host{--footer-font-family:var(--amplify-font-family);--footer-font-size:var(--amplify-text-sm);--footer-color:var(--amplify-grey);--font-weight:var(--amplify-font-weight)}.sign-up-form-footer{font-family:var(--footer-font-family);font-size:var(--footer-font-size);color:var(--footer-color);font-weight:--font-weight;display:-ms-flexbox;display:flex;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around}.sign-up-form-footer amplify-button{margin-bottom:0.625rem}@media (min-width: 672px){.sign-up-form-footer{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:baseline;align-items:baseline}.sign-up-form-footer amplify-button{margin-bottom:0}}.sign-up-form-footer *+*{margin-bottom:15px}";var N=new l.a("AmplifyVerifyContact"),P=function(){function e(e){Object(r.k)(this,e),this.handleAuthStateChange=y.d,this.loading=!1}return e.prototype.handleSubmit=function(e){e.preventDefault(),this.verifyAttr?this.submit(this.code):this.verify(this.contact)},e.prototype.submit=function(code){return C(this,void 0,void 0,(function(){var e,data,t;return w(this,(function(n){switch(n.label){case 0:if(e=this.verifyAttr,!c.a||"function"!=typeof c.a.verifyCurrentUserAttributeSubmit)throw new Error(m.d);this.loading=!0,n.label=1;case 1:return n.trys.push([1,3,4,5]),[4,c.a.verifyCurrentUserAttributeSubmit(e,code)];case 2:return data=n.sent(),N.debug(data),this.handleAuthStateChange(d.a.SignedIn,this.user),this.verifyAttr=null,[3,5];case 3:return t=n.sent(),Object(y.a)(t),N.error(t),[3,5];case 4:return this.loading=!1,[7];case 5:return[2]}}))}))},e.prototype.verify=function(e){return C(this,void 0,void 0,(function(){var data,t;return w(this,(function(n){switch(n.label){case 0:if(!e)return N.error("Neither Email nor Phone Number selected"),[2];if(!c.a||"function"!=typeof c.a.verifyCurrentUserAttribute)throw new Error(m.d);this.loading=!0,n.label=1;case 1:return n.trys.push([1,3,4,5]),[4,c.a.verifyCurrentUserAttribute(e)];case 2:return data=n.sent(),N.debug(data),this.verifyAttr=e,[3,5];case 3:return t=n.sent(),Object(y.a)(t),N.error(t),[3,5];case 4:return this.loading=!1,[7];case 5:return[2]}}))}))},e.prototype.handleInputChange=function(e){var t=e.target.name;"code"===t?this.code=e.target.value:"contact"===t&&(this.contact=e.target.value)},e.prototype.renderSubmit=function(){var e=this;return Object(r.i)("div",null,Object(r.i)("amplify-input",{inputProps:{autocomplete:"off","data-test":"verify-contact-code-input"},name:"code",placeholder:o.a.get(f.a.CODE_PLACEHOLDER),handleInputChange:function(t){return e.handleInputChange(t)}}))},e.prototype.renderVerify=function(){var e=this,t=this.user;if(!t)return N.debug("No user to verify"),null;var n=t.unverified;if(!n)return N.debug("Unverified variable does not exist on user"),null;var l=n.email,h=n.phone_number;return Object(r.i)("div",null,l&&Object(r.i)("amplify-radio-button",{label:o.a.get(f.a.VERIFY_CONTACT_EMAIL_LABEL),key:"email",name:"contact",value:"email",handleInputChange:function(t){return e.handleInputChange(t)},inputProps:{"data-test":"verify-contact-email-radio"}}),h&&Object(r.i)("amplify-radio-button",{label:o.a.get(f.a.VERIFY_CONTACT_PHONE_LABEL),key:"phone_number",name:"contact",value:"phone_number",handleInputChange:function(t){return e.handleInputChange(t)},inputProps:{"data-test":"verify-contact-email-radio"}}))},e.prototype.render=function(){var e=this;return Object(r.i)(r.b,null,Object(r.i)("amplify-form-section",{handleSubmit:function(t){return e.handleSubmit(t)},headerText:o.a.get(f.a.VERIFY_CONTACT_HEADER_TEXT),loading:this.loading,secondaryFooterContent:Object(r.i)("span",null,Object(r.i)("amplify-button",{variant:"anchor",onClick:function(){return e.handleAuthStateChange(d.a.SignedIn,e.user)}},"Skip")),submitButtonText:this.verifyAttr?o.a.get(f.a.VERIFY_CONTACT_SUBMIT_LABEL):o.a.get(f.a.VERIFY_CONTACT_VERIFY_LABEL)},this.verifyAttr?this.renderSubmit():this.renderVerify()))},e}()}}]);