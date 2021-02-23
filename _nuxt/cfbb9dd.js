(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{624:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(90),o=new r.a("I18n"),c=function(){function e(e){this._options=null,this._lang=null,this._dict={},this._options=Object.assign({},e),this._lang=this._options.language,!this._lang&&"undefined"!=typeof window&&window&&window.navigator&&(this._lang=window.navigator.language),o.debug(this._lang)}return e.prototype.setLanguage=function(e){this._lang=e},e.prototype.get=function(e,t){if(void 0===t&&(t=void 0),!this._lang)return void 0!==t?t:e;var n=this._lang,r=this.getByLanguage(e,n);return r||(n.indexOf("-")>0&&(r=this.getByLanguage(e,n.split("-")[0])),r||(void 0!==t?t:e))},e.prototype.getByLanguage=function(e,t,n){if(void 0===n&&(n=null),!t)return n;var r=this._dict[t];return r?r[e]:n},e.prototype.putVocabulariesForLanguage=function(e,t){var n=this._dict[e];n||(n=this._dict[e]={}),Object.assign(n,t)},e.prototype.putVocabularies=function(e){var t=this;Object.keys(e).map((function(n){t.putVocabulariesForLanguage(n,e[n])}))},e}(),E=n(55),_=new r.a("I18n"),l=null,f=null,d=function(){function e(){}return e.configure=function(t){return _.debug("configure I18n"),t?(l=Object.assign({},l,t.I18n||t),e.createInstance(),l):l},e.getModuleName=function(){return"I18n"},e.createInstance=function(){_.debug("create I18n instance"),f||(f=new c(l))},e.setLanguage=function(t){return e.checkConfig(),f.setLanguage(t)},e.get=function(t,n){return e.checkConfig()?f.get(t,n):void 0===n?t:n},e.putVocabulariesForLanguage=function(t,n){return e.checkConfig(),f.putVocabulariesForLanguage(t,n)},e.putVocabularies=function(t){return e.checkConfig(),f.putVocabularies(t)},e.checkConfig=function(){return f||(f=new c(l)),!0},e}();E.a.register(d)},653:function(e,t,n){"use strict";n.r(t),n.d(t,"amplify_s3_text",(function(){return A}));var r=n(23),o=n(90),c=n(624),E=n(706),_=n(697),l=(n(696),n(195),n(707)),f=function(e,t,n,r){return new(n||(n=Promise))((function(o,c){function E(e){try{l(r.next(e))}catch(e){c(e)}}function _(e){try{l(r.throw(e))}catch(e){c(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(E,_)}l((r=r.apply(e,t||[])).next())}))},d=function(e,body){var t,n,r,g,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return g={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function c(c){return function(E){return function(c){if(t)throw new TypeError("Generator is already executing.");for(;o;)try{if(t=1,n&&(r=2&c[0]?n.return:c[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,c[1])).done)return r;switch(n=0,r&&(c=[2&c[0],r.value]),c[0]){case 0:case 1:r=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,n=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(!(r=o.trys,(r=r.length>0&&r[r.length-1])||6!==c[0]&&2!==c[0])){o=0;continue}if(3===c[0]&&(!r||c[1]>r[0]&&c[1]<r[3])){o.label=c[1];break}if(6===c[0]&&o.label<r[1]){o.label=r[1],r=c;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(c);break}r[2]&&o.ops.pop(),o.trys.pop();continue}c=body.call(e,o)}catch(e){c=[6,e],n=0}finally{t=r=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,E])}}},T=new o.a("S3Text"),A=function(){function e(e){Object(r.k)(this,e),this.contentType="text/*",this.level=E.a.Public,this.fallbackText=_.a.TEXT_FALLBACK_CONTENT}return e.prototype.watchHandler=function(){return f(this,void 0,void 0,(function(){return d(this,(function(e){switch(e.label){case 0:return[4,this.load()];case 1:return e.sent(),[2]}}))}))},e.prototype.componentWillLoad=function(){return f(this,void 0,void 0,(function(){return d(this,(function(e){switch(e.label){case 0:return[4,this.load()];case 1:return e.sent(),[2]}}))}))},e.prototype.load=function(){return f(this,void 0,void 0,(function(){var e,path,t,body,n,r,track,o,c,E,_;return d(this,(function(f){switch(f.label){case 0:return path=(e=this).path,t=e.textKey,body=e.body,n=e.contentType,r=e.level,track=e.track,o=e.identityId,t||path?(c=t||path,T.debug("loading "+c+"..."),body?[4,Object(l.e)(t,body,r,track,n,T)]:[3,2]):(T.debug("empty textKey and path"),[2]);case 1:f.sent(),f.label=2;case 2:return f.trys.push([2,4,,5]),E=this,[4,Object(l.a)(c,r,track,o,T)];case 3:return E.src=f.sent(),[3,5];case 4:throw _=f.sent(),T.debug(_),new Error(_);case 5:return[2]}}))}))},e.prototype.render=function(){return Object(r.i)("div",null,Object(r.i)("div",{class:"text-container"},this.src?Object(r.i)("pre",null,this.src):Object(r.i)("pre",null,c.a.get(this.fallbackText))))},Object.defineProperty(e,"watchers",{get:function(){return{textKey:["watchHandler"],body:["watchHandler"]}},enumerable:!1,configurable:!0}),e}();A.style=":host{--container-color:var(--amplify-smoke-white);--border-color:var(--amplify-light-grey);--font-size:var(--amplify-text-md);--text-color:var(--amplify-secondary-color)}.text-container{background-color:var(--container-color);border:1px solid var(--border-color);border-radius:5px;margin-bottom:10px}pre{display:block;margin:0.5rem 0;padding:0.5rem;line-height:1rem;max-height:50rem;font-size:var(--font-size);color:var(--text-color);word-break:break-all;overflow-y:scroll;overflow-x:auto}"},696:function(e,t,n){"use strict";n.d(t,"a",(function(){return N})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return h})),n.d(t,"e",(function(){return L})),n.d(t,"f",(function(){return T})),n.d(t,"g",(function(){return I})),n.d(t,"h",(function(){return w})),n.d(t,"i",(function(){return R})),n.d(t,"j",(function(){return m})),n.d(t,"k",(function(){return E})),n.d(t,"l",(function(){return A})),n.d(t,"m",(function(){return S})),n.d(t,"n",(function(){return O})),n.d(t,"o",(function(){return C})),n.d(t,"p",(function(){return y})),n.d(t,"q",(function(){return f})),n.d(t,"r",(function(){return P})),n.d(t,"s",(function(){return d})),n.d(t,"t",(function(){return c})),n.d(t,"u",(function(){return _})),n.d(t,"v",(function(){return r}));var r="username",o="email",c="code",E="phone",_="password",l="country-dial-code-select",f="+1",d="amplify-auth-source",T="amplify-redirected-from-hosted-ui",A="amplify-authenticator-authState",L="Phone number can not be empty",h="No Auth module found, please ensure @aws-amplify/auth is imported",O="No Storage module found, please ensure @aws-amplify/storage is imported",S="No Interactions module found, please ensure @aws-amplify/interactions is imported",I="SETUP_TOTP",C="User has not set up software token mfa",y="User has not verified software token mfa",P="SUCCESS",N="auth",R="UI Auth",w="ToastAuthError",m="AuthStateChange"},697:function(e,t,n){"use strict";n.d(t,"a",(function(){return E}));var r,o,c=n(50);!function(e){e.BACK_TO_SIGN_IN="Back to Sign In",e.CHANGE_PASSWORD_ACTION="Change",e.CHANGE_PASSWORD="Change Password",e.CODE_LABEL="Verification code",e.CODE_PLACEHOLDER="Enter code",e.CONFIRM_SIGN_UP_CODE_LABEL="Confirmation Code",e.CONFIRM_SIGN_UP_CODE_PLACEHOLDER="Enter your code",e.CONFIRM_SIGN_UP_HEADER_TEXT="Confirm Sign up",e.CONFIRM_SIGN_UP_LOST_CODE="Lost your code?",e.CONFIRM_SIGN_UP_RESEND_CODE="Resend Code",e.CONFIRM_SIGN_UP_SUBMIT_BUTTON_TEXT="Confirm",e.CONFIRM_SMS_CODE="Confirm SMS Code",e.CONFIRM_TOTP_CODE="Confirm TOTP Code",e.CONFIRM="Confirm",e.CREATE_ACCOUNT_TEXT="Create account",e.EMAIL_LABEL="Email Address *",e.EMAIL_PLACEHOLDER="Enter your email address",e.FORGOT_PASSWORD_TEXT="Forgot your password?",e.LESS_THAN_TWO_MFA_VALUES_MESSAGE="Less than two MFA types available",e.NEW_PASSWORD_LABEL="New password",e.NEW_PASSWORD_PLACEHOLDER="Enter your new password",e.NO_ACCOUNT_TEXT="No account?",e.USERNAME_REMOVE_WHITESPACE="Username cannot contain whitespace",e.PASSWORD_REMOVE_WHITESPACE="Password cannot start or end with whitespace",e.PASSWORD_LABEL="Password *",e.PASSWORD_PLACEHOLDER="Enter your password",e.PHONE_LABEL="Phone Number *",e.PHONE_PLACEHOLDER="(555) 555-1212",e.QR_CODE_ALT="qrcode",e.RESET_PASSWORD_TEXT="Reset password",e.RESET_YOUR_PASSWORD="Reset your password",e.SELECT_MFA_TYPE_HEADER_TEXT="Select MFA Type",e.SELECT_MFA_TYPE_SUBMIT_BUTTON_TEXT="Verify",e.SEND_CODE="Send Code",e.SUBMIT="Submit",e.SETUP_TOTP_REQUIRED="TOTP needs to be configured",e.SIGN_IN_ACTION="Sign In",e.SIGN_IN_HEADER_TEXT="Sign in to your account",e.SIGN_IN_TEXT="Sign in",e.SIGN_IN_WITH_AMAZON="Sign in with Amazon",e.SIGN_IN_WITH_AUTH0="Sign in with Auth0",e.SIGN_IN_WITH_AWS="Sign in with AWS",e.SIGN_IN_WITH_FACEBOOK="Sign in with Facebook",e.SIGN_IN_WITH_GOOGLE="Sign in with Google",e.SIGN_OUT="Sign Out",e.SIGN_UP_EMAIL_PLACEHOLDER="Email",e.SIGN_UP_HAVE_ACCOUNT_TEXT="Have an account?",e.SIGN_UP_HEADER_TEXT="Create a new account",e.SIGN_UP_PASSWORD_PLACEHOLDER="Password",e.SIGN_UP_SUBMIT_BUTTON_TEXT="Create Account",e.SIGN_UP_USERNAME_PLACEHOLDER="Username",e.SUCCESS_MFA_TYPE="Success! Your MFA Type is now:",e.TOTP_HEADER_TEXT="Scan then enter verification code",e.TOTP_LABEL="Enter Security Code:",e.TOTP_ISSUER="AWSCognito",e.TOTP_SETUP_FAILURE="TOTP Setup has failed",e.TOTP_SUBMIT_BUTTON_TEXT="Verify Security Token",e.TOTP_SUCCESS_MESSAGE="Setup TOTP successfully!",e.UNABLE_TO_SETUP_MFA_AT_THIS_TIME="Failed! Unable to configure MFA at this time",e.USERNAME_LABEL="Username *",e.USERNAME_PLACEHOLDER="Enter your username",e.VERIFY_CONTACT_EMAIL_LABEL="Email",e.VERIFY_CONTACT_HEADER_TEXT="Account recovery requires verified contact information",e.VERIFY_CONTACT_PHONE_LABEL="Phone Number",e.VERIFY_CONTACT_SUBMIT_LABEL="Submit",e.VERIFY_CONTACT_VERIFY_LABEL="Verify",e.ADDRESS_LABEL="Address",e.ADDRESS_PLACEHOLDER="Enter your address",e.NICKNAME_LABEL="Nickname",e.NICKNAME_PLACEHOLDER="Enter your nickname",e.BIRTHDATE_LABEL="Birthday",e.BIRTHDATE_PLACEHOLDER="Enter your birthday",e.PICTURE_LABEL="Picture URL",e.PICTURE_PLACEHOLDER="Enter your picture URL",e.FAMILY_NAME_LABEL="Family Name",e.FAMILY_NAME_PLACEHOLDER="Enter your family name",e.PREFERRED_USERNAME_LABEL="Preferred Username",e.PREFERRED_USERNAME_PLACEHOLDER="Enter your preferred username",e.GENDER_LABEL="Gender",e.GENDER_PLACEHOLDER="Enter your gender",e.PROFILE_LABEL="Profile URL",e.PROFILE_PLACEHOLDER="Enter your profile URL",e.GIVEN_NAME_LABEL="First Name",e.GIVEN_NAME_PLACEHOLDER="Enter your first name",e.ZONEINFO_LABEL="Time zone",e.ZONEINFO_PLACEHOLDER="Enter your time zone",e.LOCALE_LABEL="Locale",e.LOCALE_PLACEHOLDER="Enter your locale",e.UPDATED_AT_LABEL="Updated At",e.UPDATED_AT_PLACEHOLDER="Enter the time the information was last updated",e.MIDDLE_NAME_LABEL="Middle Name",e.MIDDLE_NAME_PLACEHOLDER="Enter your middle name",e.WEBSITE_LABEL="Website",e.WEBSITE_PLACEHOLDER="Enter your website",e.NAME_LABEL="Full Name",e.NAME_PLACEHOLDER="Enter your full name",e.PHOTO_PICKER_TITLE="Picker Title",e.PHOTO_PICKER_HINT="Ancillary text or content may occupy this space here",e.PHOTO_PICKER_PLACEHOLDER_HINT="Placeholder hint",e.PHOTO_PICKER_BUTTON_TEXT="Button",e.IMAGE_PICKER_TITLE="Add Profile Photo",e.IMAGE_PICKER_HINT="Preview the image before upload",e.IMAGE_PICKER_PLACEHOLDER_HINT="Tap to image select",e.IMAGE_PICKER_BUTTON_TEXT="Upload",e.PICKER_TEXT="Pick a file",e.TEXT_FALLBACK_CONTENT="Fallback Content",e.CONFIRM_SIGN_UP_FAILED="Confirm Sign Up Failed",e.SIGN_UP_FAILED="Sign Up Failed"}(r||(r={})),function(e){e.CHATBOT_TITLE="ChatBot Lex",e.TEXT_INPUT_PLACEHOLDER="Write a message",e.VOICE_INPUT_PLACEHOLDER="Click mic to speak",e.CHAT_DISABLED_ERROR="Error: Either voice or text must be enabled for the chatbot",e.NO_BOT_NAME_ERROR="Error: Bot name must be provided to ChatBot"}(o||(o={}));var E=Object.assign(Object.assign(Object.assign({},r),c.a),o)},706:function(e,t,n){"use strict";var r;n.d(t,"a",(function(){return r})),function(e){e.Public="public",e.Private="private",e.Protected="protected"}(r||(r={}))},707:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return _})),n.d(t,"e",(function(){return T}));var r=n(696),o=n(195),c=function(e,t,n,r){return new(n||(n=Promise))((function(o,c){function E(e){try{l(r.next(e))}catch(e){c(e)}}function _(e){try{l(r.throw(e))}catch(e){c(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(E,_)}l((r=r.apply(e,t||[])).next())}))},E=function(e,body){var t,n,r,g,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return g={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function c(c){return function(E){return function(c){if(t)throw new TypeError("Generator is already executing.");for(;o;)try{if(t=1,n&&(r=2&c[0]?n.return:c[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,c[1])).done)return r;switch(n=0,r&&(c=[2&c[0],r.value]),c[0]){case 0:case 1:r=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,n=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(!(r=o.trys,(r=r.length>0&&r[r.length-1])||6!==c[0]&&2!==c[0])){o=0;continue}if(3===c[0]&&(!r||c[1]>r[0]&&c[1]<r[3])){o.label=c[1];break}if(6===c[0]&&o.label<r[1]){o.label=r[1],r=c;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(c);break}r[2]&&o.ops.pop(),o.trys.pop();continue}c=body.call(e,o)}catch(e){c=[6,e],n=0}finally{t=r=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,E])}}},_=new Set(["apng","bmp","gif","ico","cur","jpg","jpeg","jfif","pjpeg","pjp","png","svg","tif","tiff","webp"]),l=function(e,t){var n=e.name,r=e.size,o=e.type,c=encodeURI(n);return t&&((c="string"==typeof t?t:"function"==typeof t?t({name:n,size:r,type:o}):encodeURI(JSON.stringify(t)))||(c="empty_key")),c.replace(/\s/g,"_")},f=function(e,t,track,n,_){return c(void 0,void 0,void 0,(function(){var c,l;return E(this,(function(E){switch(E.label){case 0:if(!o.a||"function"!=typeof o.a.get)throw new Error(r.n);E.label=1;case 1:return E.trys.push([1,3,,4]),[4,o.a.get(e,{level:t,track:track,identityId:n})];case 2:return c=E.sent(),_.debug("Storage image get",c),[2,c];case 3:throw l=E.sent(),new Error(l);case 4:return[2]}}))}))},d=function(e,t,track,n,_){return c(void 0,void 0,void 0,(function(){var c,l;return E(this,(function(E){switch(E.label){case 0:if(!o.a||"function"!=typeof o.a.get)throw new Error(r.n);E.label=1;case 1:return E.trys.push([1,4,,5]),[4,o.a.get(e,{download:!0,level:t,track:track,identityId:n})];case 2:return c=E.sent(),_.debug(c),[4,(f=c.Body,new Promise((function(e,t){var n=new FileReader;n.onload=function(){e(n.result)},n.onerror=function(){t("Failed to read file!"),n.abort()},n.readAsText(f)})))];case 3:return[2,E.sent()];case 4:throw l=E.sent(),new Error(l);case 5:return[2]}var f}))}))},T=function(e,body,t,track,n,_){return c(void 0,void 0,void 0,(function(){var data,c;return E(this,(function(E){switch(E.label){case 0:if(!o.a||"function"!=typeof o.a.put)throw new Error(r.n);E.label=1;case 1:return E.trys.push([1,3,,4]),[4,o.a.put(e,body,{contentType:n,level:t,track:track})];case 2:return data=E.sent(),_.debug("Upload data",data),[3,4];case 3:throw c=E.sent(),new Error(c);case 4:return[2]}}))}))}}}]);