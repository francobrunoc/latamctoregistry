(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{431:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(81),o=new r.a("I18n"),c=function(){function e(e){this._options=null,this._lang=null,this._dict={},this._options=Object.assign({},e),this._lang=this._options.language,!this._lang&&"undefined"!=typeof window&&window&&window.navigator&&(this._lang=window.navigator.language),o.debug(this._lang)}return e.prototype.setLanguage=function(e){this._lang=e},e.prototype.get=function(e,t){if(void 0===t&&(t=void 0),!this._lang)return void 0!==t?t:e;var n=this._lang,r=this.getByLanguage(e,n);return r||(n.indexOf("-")>0&&(r=this.getByLanguage(e,n.split("-")[0])),r||(void 0!==t?t:e))},e.prototype.getByLanguage=function(e,t,n){if(void 0===n&&(n=null),!t)return n;var r=this._dict[t];return r?r[e]:n},e.prototype.putVocabulariesForLanguage=function(e,t){var n=this._dict[e];n||(n=this._dict[e]={}),Object.assign(n,t)},e.prototype.putVocabularies=function(e){var t=this;Object.keys(e).map((function(n){t.putVocabulariesForLanguage(n,e[n])}))},e}(),E=n(50),l=new r.a("I18n"),f=null,_=null,d=function(){function e(){}return e.configure=function(t){return l.debug("configure I18n"),t?(f=Object.assign({},f,t.I18n||t),e.createInstance(),f):f},e.getModuleName=function(){return"I18n"},e.createInstance=function(){l.debug("create I18n instance"),_||(_=new c(f))},e.setLanguage=function(t){return e.checkConfig(),_.setLanguage(t)},e.get=function(t,n){return e.checkConfig()?_.get(t,n):void 0===n?t:n},e.putVocabulariesForLanguage=function(t,n){return e.checkConfig(),_.putVocabulariesForLanguage(t,n)},e.putVocabularies=function(t){return e.checkConfig(),_.putVocabularies(t)},e.checkConfig=function(){return _||(_=new c(f)),!0},e}();E.a.register(d)},455:function(e,t,n){"use strict";n.r(t),n.d(t,"amplify_s3_album",(function(){return N}));var r=n(19),o=n(81),c=n(49),E=n(431),l=n(509),f=n(505),_=n(504),d=n(172),T=n(511),h=function(e,t,n,r){return new(n||(n=Promise))((function(o,c){function E(e){try{f(r.next(e))}catch(e){c(e)}}function l(e){try{f(r.throw(e))}catch(e){c(e)}}function f(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(E,l)}f((r=r.apply(e,t||[])).next())}))},A=function(e,body){var t,n,r,g,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return g={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function c(c){return function(E){return function(c){if(t)throw new TypeError("Generator is already executing.");for(;o;)try{if(t=1,n&&(r=2&c[0]?n.return:c[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,c[1])).done)return r;switch(n=0,r&&(c=[2&c[0],r.value]),c[0]){case 0:case 1:r=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,n=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(!(r=o.trys,(r=r.length>0&&r[r.length-1])||6!==c[0]&&2!==c[0])){o=0;continue}if(3===c[0]&&(!r||c[1]>r[0]&&c[1]<r[3])){o.label=c[1];break}if(6===c[0]&&o.label<r[1]){o.label=r[1],r=c;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(c);break}r[2]&&o.ops.pop(),o.trys.pop();continue}c=body.call(e,o)}catch(e){c=[6,e],n=0}finally{t=r=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,E])}}},y=function(){for(var s=0,i=0,e=arguments.length;i<e;i++)s+=arguments[i].length;var t=Array(s),n=0;for(i=0;i<e;i++)for(var a=arguments[i],r=0,o=a.length;r<o;r++,n++)t[n]=a[r];return t},m="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),L=new Uint8Array(16);function O(){if(!m)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return m(L)}var I=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function C(e){return"string"==typeof e&&I.test(e)}for(var S=[],i=0;i<256;++i)S.push((i+256).toString(16).substr(1));function P(e,t,n){var r=(e=e||{}).random||(e.rng||O)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(var i=0;i<16;++i)t[n+i]=r[i];return t}return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(S[e[t+0]]+S[e[t+1]]+S[e[t+2]]+S[e[t+3]]+"-"+S[e[t+4]]+S[e[t+5]]+"-"+S[e[t+6]]+S[e[t+7]]+"-"+S[e[t+8]]+S[e[t+9]]+"-"+S[e[t+10]]+S[e[t+11]]+S[e[t+12]]+S[e[t+13]]+S[e[t+14]]+S[e[t+15]]).toLowerCase();if(!C(n))throw TypeError("Stringified UUID is invalid");return n}(r)}var R=new o.a("S3Album"),N=function(){function e(e){var t=this;Object(r.k)(this,e),this.contentType="binary/octet-stream",this.level=l.a.Public,this.picker=!0,this.pickerText=f.a.PICKER_TEXT,this.albumItems=[],this.imgArr={},this.list=function(){return h(t,void 0,void 0,(function(){var e,t,path,n,track,r,data,o;return A(this,(function(c){switch(c.label){case 0:if(t=(e=this).path,path=void 0===t?"":t,n=e.level,track=e.track,r=e.identityId,R.debug("Album path: "+path),!d.a||"function"!=typeof d.a.list)throw new Error(_.n);c.label=1;case 1:return c.trys.push([1,3,,4]),[4,d.a.list(path,{level:n,track:track,identityId:r})];case 2:return data=c.sent(),this.marshal(data),[3,4];case 3:return o=c.sent(),R.warn(o),[3,4];case 4:return[2]}}))}))},this.marshal=function(e){e.forEach((function(e){var n=e.key.toLowerCase().split(".")[1];T.d.has(n)&&(!e.contentType||e.contentType&&"binary/octet-stream"===e.contentType)&&(e.contentType=t.getContentType(e))}));var n=e.filter((function(e){return e.contentType&&e.contentType.startsWith("image/")})),r=t.filter?t.filter(n):n;r=t.sort?t.sort(r):r,t.albumItems=r,R.debug("album items",t.albumItems),t.constructImgArray(t.albumItems)},this.constructImgArray=function(e){e.map((function(e){t.imgArr[""+e.key]=e.key}))},this.handlePick=function(e){return h(t,void 0,void 0,(function(){var t,n,r,path,o,track,c,E,l,f;return A(this,(function(_){switch(_.label){case 0:t=e.target.files[0],r=(n=this).path,path=void 0===r?"":r,o=n.level,track=n.track,c=n.fileToKey,E=path+Object(T.b)(t,c),_.label=1;case 1:return _.trys.push([1,3,,4]),[4,Object(T.e)(E,t,o,track,t.type,R)];case 2:return _.sent(),[3,4];case 3:throw l=_.sent(),R.error(l),new Error(l);case 4:return Object.keys(this.imgArr).includes(E)?(this.albumItems=y(this.albumItems),this.imgArr[E]=E+"-"+P()):(f=y(this.albumItems,this.filter?this.filter([{key:E}]):[{key:E}]),this.albumItems=this.sort?this.sort(f):f),[2]}}))}))}}return e.prototype.getContentType=function(e){return Object(c.c)(e.key,"image/*")},e.prototype.componentWillLoad=function(){this.list()},e.prototype.render=function(){var e=this;return Object(r.i)("div",null,Object(r.i)("div",{class:"album-container"},Object(r.i)("div",{class:"grid-row"},this.albumItems.map((function(t){return Object(r.i)("div",{class:"grid-item",key:"key-"+t.key},Object(r.i)("amplify-s3-image",{key:e.imgArr[t.key],imgKey:t.key,level:e.level,path:e.path,identityId:e.identityId,track:e.track,handleOnError:e.handleOnError,handleOnLoad:e.handleOnLoad}),Object(r.i)("span",{class:"img-overlay"}))})))),this.picker&&Object(r.i)("amplify-picker",{pickerText:E.a.get(this.pickerText),inputHandler:function(t){return e.handlePick(t)},acceptValue:"image/*"}))},e}();N.style=":host{--overlay-bg-color:rgba(0, 0, 0, 0.15)}.album-container{-webkit-box-sizing:border-box;box-sizing:border-box;max-width:100%;margin:0 auto;padding:0 2rem}.grid-row{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:-1rem -1rem;padding-bottom:3rem}.grid-item{position:relative;-ms-flex:1 0 22rem;flex:1 0 22rem;-ms-flex-positive:1;flex-grow:1;margin:1rem;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}amplify-s3-image{--width:22rem;--height:20rem;border-radius:5px;-o-object-fit:cover;object-fit:cover}.img-overlay{display:none;width:100%;height:21rem;position:absolute;top:0;left:0;background-color:var(--overlay-bg-color)}.grid-item:hover .img-overlay{display:block}"},504:function(e,t,n){"use strict";n.d(t,"a",(function(){return P})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return y})),n.d(t,"e",(function(){return A})),n.d(t,"f",(function(){return T})),n.d(t,"g",(function(){return O})),n.d(t,"h",(function(){return N})),n.d(t,"i",(function(){return R})),n.d(t,"j",(function(){return v})),n.d(t,"k",(function(){return E})),n.d(t,"l",(function(){return h})),n.d(t,"m",(function(){return L})),n.d(t,"n",(function(){return m})),n.d(t,"o",(function(){return I})),n.d(t,"p",(function(){return C})),n.d(t,"q",(function(){return _})),n.d(t,"r",(function(){return S})),n.d(t,"s",(function(){return d})),n.d(t,"t",(function(){return c})),n.d(t,"u",(function(){return l})),n.d(t,"v",(function(){return r}));var r="username",o="email",c="code",E="phone",l="password",f="country-dial-code-select",_="+1",d="amplify-auth-source",T="amplify-redirected-from-hosted-ui",h="amplify-authenticator-authState",A="Phone number can not be empty",y="No Auth module found, please ensure @aws-amplify/auth is imported",m="No Storage module found, please ensure @aws-amplify/storage is imported",L="No Interactions module found, please ensure @aws-amplify/interactions is imported",O="SETUP_TOTP",I="User has not set up software token mfa",C="User has not verified software token mfa",S="SUCCESS",P="auth",R="UI Auth",N="ToastAuthError",v="AuthStateChange"},505:function(e,t,n){"use strict";n.d(t,"a",(function(){return E}));var r,o,c=n(46);!function(e){e.BACK_TO_SIGN_IN="Back to Sign In",e.CHANGE_PASSWORD_ACTION="Change",e.CHANGE_PASSWORD="Change Password",e.CODE_LABEL="Verification code",e.CODE_PLACEHOLDER="Enter code",e.CONFIRM_SIGN_UP_CODE_LABEL="Confirmation Code",e.CONFIRM_SIGN_UP_CODE_PLACEHOLDER="Enter your code",e.CONFIRM_SIGN_UP_HEADER_TEXT="Confirm Sign up",e.CONFIRM_SIGN_UP_LOST_CODE="Lost your code?",e.CONFIRM_SIGN_UP_RESEND_CODE="Resend Code",e.CONFIRM_SIGN_UP_SUBMIT_BUTTON_TEXT="Confirm",e.CONFIRM_SMS_CODE="Confirm SMS Code",e.CONFIRM_TOTP_CODE="Confirm TOTP Code",e.CONFIRM="Confirm",e.CREATE_ACCOUNT_TEXT="Create account",e.EMAIL_LABEL="Email Address *",e.EMAIL_PLACEHOLDER="Enter your email address",e.FORGOT_PASSWORD_TEXT="Forgot your password?",e.LESS_THAN_TWO_MFA_VALUES_MESSAGE="Less than two mfa types available",e.NEW_PASSWORD_LABEL="New password",e.NEW_PASSWORD_PLACEHOLDER="Enter your new password",e.NO_ACCOUNT_TEXT="No account?",e.PASSWORD_LABEL="Password *",e.PASSWORD_PLACEHOLDER="Enter your password",e.PHONE_LABEL="Phone Number *",e.PHONE_PLACEHOLDER="(555) 555-1212",e.QR_CODE_ALT="qrcode",e.RESET_PASSWORD_TEXT="Reset password",e.RESET_YOUR_PASSWORD="Reset your password",e.SELECT_MFA_TYPE_HEADER_TEXT="Select MFA Type",e.SELECT_MFA_TYPE_SUBMIT_BUTTON_TEXT="Verify",e.SEND_CODE="Send Code",e.SUBMIT="Submit",e.SETUP_TOTP_REQUIRED="TOTP needs to be configured",e.SIGN_IN_ACTION="Sign In",e.SIGN_IN_HEADER_TEXT="Sign in to your account",e.SIGN_IN_TEXT="Sign in",e.SIGN_IN_WITH_AMAZON="Sign in with Amazon",e.SIGN_IN_WITH_AUTH0="Sign in with Auth0",e.SIGN_IN_WITH_AWS="Sign in with AWS",e.SIGN_IN_WITH_FACEBOOK="Sign in with Facebook",e.SIGN_IN_WITH_GOOGLE="Sign in with Google",e.SIGN_OUT="Sign Out",e.SIGN_UP_EMAIL_PLACEHOLDER="Email",e.SIGN_UP_HAVE_ACCOUNT_TEXT="Have an account?",e.SIGN_UP_HEADER_TEXT="Create a new account",e.SIGN_UP_PASSWORD_PLACEHOLDER="Password",e.SIGN_UP_SUBMIT_BUTTON_TEXT="Create Account",e.SIGN_UP_USERNAME_PLACEHOLDER="Username",e.SUCCESS_MFA_TYPE="Success! Your MFA Type is now:",e.TOTP_HEADER_TEXT="Scan then enter verification code",e.TOTP_LABEL="Enter Security Code:",e.TOTP_ISSUER="AWSCognito",e.TOTP_SETUP_FAILURE="TOTP Setup has failed",e.TOTP_SUBMIT_BUTTON_TEXT="Verify Security Token",e.TOTP_SUCCESS_MESSAGE="Setup TOTP successfully!",e.UNABLE_TO_SETUP_MFA_AT_THIS_TIME="Failed! Unable to configure MFA at this time",e.USERNAME_LABEL="Username *",e.USERNAME_PLACEHOLDER="Enter your username",e.VERIFY_CONTACT_EMAIL_LABEL="Email",e.VERIFY_CONTACT_HEADER_TEXT="Account recovery requires verified contact information",e.VERIFY_CONTACT_PHONE_LABEL="Phone Number",e.VERIFY_CONTACT_SUBMIT_LABEL="Submit",e.VERIFY_CONTACT_VERIFY_LABEL="Verify",e.ADDRESS_LABEL="Address",e.ADDRESS_PLACEHOLDER="Enter your address",e.NICKNAME_LABEL="Nickname",e.NICKNAME_PLACEHOLDER="Enter your nickname",e.BIRTHDATE_LABEL="Birthday",e.BIRTHDATE_PLACEHOLDER="Enter your birthday",e.PICTURE_LABEL="Picture URL",e.PICTURE_PLACEHOLDER="Enter your picture URL",e.FAMILY_NAME_LABEL="Family Name",e.FAMILY_NAME_PLACEHOLDER="Enter your family name",e.PREFERRED_USERNAME_LABEL="Preferred Username",e.PREFERRED_USERNAME_PLACEHOLDER="Enter your preferred username",e.GENDER_LABEL="Gender",e.GENDER_PLACEHOLDER="Enter your gender",e.PROFILE_LABEL="Profile URL",e.PROFILE_PLACEHOLDER="Enter your profile URL",e.GIVEN_NAME_LABEL="First Name",e.GIVEN_NAME_PLACEHOLDER="Enter your first name",e.ZONEINFO_LABEL="Time zone",e.ZONEINFO_PLACEHOLDER="Enter your time zone",e.LOCALE_LABEL="Locale",e.LOCALE_PLACEHOLDER="Enter your locale",e.UPDATED_AT_LABEL="Updated At",e.UPDATED_AT_PLACEHOLDER="Enter the time the information was last updated",e.MIDDLE_NAME_LABEL="Middle Name",e.MIDDLE_NAME_PLACEHOLDER="Enter your middle name",e.WEBSITE_LABEL="Website",e.WEBSITE_PLACEHOLDER="Enter your website",e.NAME_LABEL="Full Name",e.NAME_PLACEHOLDER="Enter your full name",e.PHOTO_PICKER_TITLE="Picker Title",e.PHOTO_PICKER_HINT="Ancilliary text or content may occupy this space here",e.PHOTO_PICKER_PLACEHOLDER_HINT="Placeholder hint",e.PHOTO_PICKER_BUTTON_TEXT="Button",e.IMAGE_PICKER_TITLE="Add Profile Photo",e.IMAGE_PICKER_HINT="Preview the image before upload",e.IMAGE_PICKER_PLACEHOLDER_HINT="Tap to image select",e.IMAGE_PICKER_BUTTON_TEXT="Upload",e.PICKER_TEXT="Pick a file",e.TEXT_FALLBACK_CONTENT="Fallback Content",e.CONFIRM_SIGN_UP_FAILED="Confirm Sign Up Failed",e.SIGN_UP_FAILED="Sign Up Failed"}(r||(r={})),function(e){e.CHATBOT_TITLE="ChatBot Lex",e.TEXT_INPUT_PLACEHOLDER="Write a message",e.VOICE_INPUT_PLACEHOLDER="Click mic to speak",e.CHAT_DISABLED_ERROR="Error: Either voice or text must be enabled for the chatbot",e.NO_BOT_NAME_ERROR="Error: Bot name must be provided to ChatBot"}(o||(o={}));var E=Object.assign(Object.assign(Object.assign({},r),c.a),o)},509:function(e,t,n){"use strict";var r;n.d(t,"a",(function(){return r})),function(e){e.Public="public",e.Private="private",e.Protected="protected"}(r||(r={}))},511:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return _})),n.d(t,"d",(function(){return l})),n.d(t,"e",(function(){return T}));var r=n(504),o=n(172),c=function(e,t,n,r){return new(n||(n=Promise))((function(o,c){function E(e){try{f(r.next(e))}catch(e){c(e)}}function l(e){try{f(r.throw(e))}catch(e){c(e)}}function f(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(E,l)}f((r=r.apply(e,t||[])).next())}))},E=function(e,body){var t,n,r,g,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return g={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function c(c){return function(E){return function(c){if(t)throw new TypeError("Generator is already executing.");for(;o;)try{if(t=1,n&&(r=2&c[0]?n.return:c[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,c[1])).done)return r;switch(n=0,r&&(c=[2&c[0],r.value]),c[0]){case 0:case 1:r=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,n=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(!(r=o.trys,(r=r.length>0&&r[r.length-1])||6!==c[0]&&2!==c[0])){o=0;continue}if(3===c[0]&&(!r||c[1]>r[0]&&c[1]<r[3])){o.label=c[1];break}if(6===c[0]&&o.label<r[1]){o.label=r[1],r=c;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(c);break}r[2]&&o.ops.pop(),o.trys.pop();continue}c=body.call(e,o)}catch(e){c=[6,e],n=0}finally{t=r=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,E])}}},l=new Set(["apng","bmp","gif","ico","cur","jpg","jpeg","jfif","pjpeg","pjp","png","svg","tif","tiff","webp"]),f=function(e,t){var n=e.name,r=e.size,o=e.type,c=encodeURI(n);return t&&((c="string"==typeof t?t:"function"==typeof t?t({name:n,size:r,type:o}):encodeURI(JSON.stringify(t)))||(c="empty_key")),c.replace(/\s/g,"_")},_=function(e,t,track,n,l){return c(void 0,void 0,void 0,(function(){var c,f;return E(this,(function(E){switch(E.label){case 0:if(!o.a||"function"!=typeof o.a.get)throw new Error(r.n);E.label=1;case 1:return E.trys.push([1,3,,4]),[4,o.a.get(e,{level:t,track:track,identityId:n})];case 2:return c=E.sent(),l.debug("Storage image get",c),[2,c];case 3:throw f=E.sent(),new Error(f);case 4:return[2]}}))}))},d=function(e,t,track,n,l){return c(void 0,void 0,void 0,(function(){var c,f;return E(this,(function(E){switch(E.label){case 0:if(!o.a||"function"!=typeof o.a.get)throw new Error(r.n);E.label=1;case 1:return E.trys.push([1,4,,5]),[4,o.a.get(e,{download:!0,level:t,track:track,identityId:n})];case 2:return c=E.sent(),l.debug(c),[4,(_=c.Body,new Promise((function(e,t){var n=new FileReader;n.onload=function(){e(n.result)},n.onerror=function(){t("Failed to read file!"),n.abort()},n.readAsText(_)})))];case 3:return[2,E.sent()];case 4:throw f=E.sent(),new Error(f);case 5:return[2]}var _}))}))},T=function(e,body,t,track,n,l){return c(void 0,void 0,void 0,(function(){var data,c;return E(this,(function(E){switch(E.label){case 0:if(!o.a||"function"!=typeof o.a.put)throw new Error(r.n);E.label=1;case 1:return E.trys.push([1,3,,4]),[4,o.a.put(e,body,{contentType:n,level:t,track:track})];case 2:return data=E.sent(),l.debug("Upload data",data),[3,4];case 3:throw c=E.sent(),new Error(c);case 4:return[2]}}))}))}}}]);