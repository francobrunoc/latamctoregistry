(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{205:function(e,n,t){"use strict";var r=t(129);t(54);n.a=r.a},431:function(e,n,t){"use strict";t.d(n,"a",(function(){return f}));var r=t(81),o=new r.a("I18n"),c=function(){function e(e){this._options=null,this._lang=null,this._dict={},this._options=Object.assign({},e),this._lang=this._options.language,!this._lang&&"undefined"!=typeof window&&window&&window.navigator&&(this._lang=window.navigator.language),o.debug(this._lang)}return e.prototype.setLanguage=function(e){this._lang=e},e.prototype.get=function(e,n){if(void 0===n&&(n=void 0),!this._lang)return void 0!==n?n:e;var t=this._lang,r=this.getByLanguage(e,t);return r||(t.indexOf("-")>0&&(r=this.getByLanguage(e,t.split("-")[0])),r||(void 0!==n?n:e))},e.prototype.getByLanguage=function(e,n,t){if(void 0===t&&(t=null),!n)return t;var r=this._dict[n];return r?r[e]:t},e.prototype.putVocabulariesForLanguage=function(e,n){var t=this._dict[e];t||(t=this._dict[e]={}),Object.assign(t,n)},e.prototype.putVocabularies=function(e){var n=this;Object.keys(e).map((function(t){n.putVocabulariesForLanguage(t,e[t])}))},e}(),l=t(50),E=new r.a("I18n"),d=null,_=null,f=function(){function e(){}return e.configure=function(n){return E.debug("configure I18n"),n?(d=Object.assign({},d,n.I18n||n),e.createInstance(),d):d},e.getModuleName=function(){return"I18n"},e.createInstance=function(){E.debug("create I18n instance"),_||(_=new c(d))},e.setLanguage=function(n){return e.checkConfig(),_.setLanguage(n)},e.get=function(n,t){return e.checkConfig()?_.get(n,t):void 0===t?n:t},e.putVocabulariesForLanguage=function(n,t){return e.checkConfig(),_.putVocabulariesForLanguage(n,t)},e.putVocabularies=function(n){return e.checkConfig(),_.putVocabularies(n)},e.checkConfig=function(){return _||(_=new c(d)),!0},e}();l.a.register(f)},439:function(e,n,t){"use strict";t.r(n),t.d(n,"amplify_button",(function(){return c})),t.d(n,"amplify_loading_spinner",(function(){return l})),t.d(n,"amplify_section",(function(){return E}));var r=t(20),o=(t(506),t(505),t(504),t(507)),c=function(){function e(e){var n=this;Object(r.k)(this,e),this.type="button",this.variant="button",this.disabled=!1,this.handleClick=function(e){if(n.handleButtonClick)n.handleButtonClick(e);else if(Object(o.e)(n.el)&&"submit"==n.type){var form=n.el.closest("form");if(!form){var t=n.el.closest("amplify-form-section");form=t&&t.shadowRoot.querySelector("form")}if(form){e.preventDefault();var r=document.createElement("button");r.type=n.type,r.style.display="none",form.appendChild(r),r.click(),r.remove()}}}}return e.prototype.render=function(){var e;return Object(r.i)("button",{class:(e={},e[this.variant]=!0,e),type:this.type,disabled:this.disabled,onClick:this.handleClick},"icon"===this.variant&&Object(r.i)("amplify-icon",{name:this.icon}),Object(r.i)("slot",null))},Object.defineProperty(e.prototype,"el",{get:function(){return Object(r.h)(this)},enumerable:!1,configurable:!0}),e}();c.style=":host{--background-color:var(--amplify-primary-color);--background-color-active:var(--amplify-primary-shade);--background-color-disable:var(--amplify-primary-tint);--color:var(--amplify-primary-contrast);--border-width:0;--border-color:initial;--border-style:initial;--link-color:var(--amplify-primary-color);--link-hover:var(--amplify-primary-tint);--link-active:var(--amplify-primary-shade);--text-transform:uppercase;--icon-fill:var(--amplify-white);--icon-height:1.25rem;--padding:1rem;--width:100%;width:var(--width);text-align:center}@media (min-width: 672px){:host{width:inherit}}.button{width:100%;min-width:153px;display:inline-block;margin-bottom:0;font-size:var(--amplify-text-sm);font-family:var(--amplify-font-family);font-weight:600;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-image:none;color:var(--color);padding:var(--padding);letter-spacing:0.75px;text-transform:var(--text-transform);background-color:var(--background-color);border-width:var(--border-width);border-color:var(--border-color);border-style:var(--border-style)}.button:active{opacity:1;background-color:var(--background-color-active)}.button:hover{opacity:0.8}.button:disabled{opacity:0.65;cursor:auto;background-color:var(--background-color-disable)}.icon{background-color:inherit;border:none;font:inherit;cursor:pointer;padding:var(--padding)}.icon amplify-icon{--icon-fill-color:var(--icon-fill);--height:var(--icon-height)}.anchor{color:var(--link-color);background-color:inherit;padding:0;border:none;font:inherit;cursor:pointer}.anchor:link{color:var(--link-color);text-decoration:none}.anchor:hover{color:var(--link-hover);text-decoration:underline}.anchor:active{color:var(--link-active);text-decoration:underline}";var l=function(){function e(e){Object(r.k)(this,e)}return e.prototype.render=function(){return Object(r.i)("amplify-icon",{class:"loading-spinner",name:"loading"})},e}();l.style=":host{--spinner-circle-fill:var(--amplify-smoke-white);--spinner-bar-fill:var(--amplify-primary-color);--width:0.875rem;--height:0.875rem}.loading-spinner svg{-webkit-animation:loading-spinner 1s linear infinite;animation:loading-spinner 1s linear infinite;width:var(--width);height:var(--height)}.loading-spinner svg #spinner-circle{fill:var(--spinner-circle-fill)}.loading-spinner svg #spinner-bar{fill:var(--spinner-bar-fill)}@-webkit-keyframes loading-spinner{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes loading-spinner{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}";var E=function(){function e(e){Object(r.k)(this,e),this.role="application"}return e.prototype.render=function(){return Object(r.i)("section",{class:"section",role:this.role},Object(r.i)("slot",null))},Object.defineProperty(e.prototype,"el",{get:function(){return Object(r.h)(this)},enumerable:!1,configurable:!0}),e}();E.style=":host{--font-family:var(--amplify-font-family);--background-color:var(--amplify-background-color)}.section{position:relative;margin-bottom:var(--margin-bottom);background-color:var(--background-color);padding:var(--padding);text-align:left;display:inline-block;border-radius:var(--border-radius);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);-webkit-box-sizing:border-box;box-sizing:border-box;font-family:var(--font-family);width:100%;min-width:var(--min-width)}@media (min-width: 672px){.section{width:var(--width)}}"},504:function(e,n,t){"use strict";t.d(n,"a",(function(){return N})),t.d(n,"b",(function(){return d})),t.d(n,"c",(function(){return o})),t.d(n,"d",(function(){return m})),t.d(n,"e",(function(){return h})),t.d(n,"f",(function(){return L})),t.d(n,"g",(function(){return C})),t.d(n,"h",(function(){return y})),t.d(n,"i",(function(){return P})),t.d(n,"j",(function(){return v})),t.d(n,"k",(function(){return l})),t.d(n,"l",(function(){return A})),t.d(n,"m",(function(){return O})),t.d(n,"n",(function(){return T})),t.d(n,"o",(function(){return S})),t.d(n,"p",(function(){return I})),t.d(n,"q",(function(){return _})),t.d(n,"r",(function(){return R})),t.d(n,"s",(function(){return f})),t.d(n,"t",(function(){return c})),t.d(n,"u",(function(){return E})),t.d(n,"v",(function(){return r}));var r="username",o="email",c="code",l="phone",E="password",d="country-dial-code-select",_="+1",f="amplify-auth-source",L="amplify-redirected-from-hosted-ui",A="amplify-authenticator-authState",h="Phone number can not be empty",m="No Auth module found, please ensure @aws-amplify/auth is imported",T="No Storage module found, please ensure @aws-amplify/storage is imported",O="No Interactions module found, please ensure @aws-amplify/interactions is imported",C="SETUP_TOTP",S="User has not set up software token mfa",I="User has not verified software token mfa",R="SUCCESS",N="auth",P="UI Auth",y="ToastAuthError",v="AuthStateChange"},505:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var r,o,c=t(46);!function(e){e.BACK_TO_SIGN_IN="Back to Sign In",e.CHANGE_PASSWORD_ACTION="Change",e.CHANGE_PASSWORD="Change Password",e.CODE_LABEL="Verification code",e.CODE_PLACEHOLDER="Enter code",e.CONFIRM_SIGN_UP_CODE_LABEL="Confirmation Code",e.CONFIRM_SIGN_UP_CODE_PLACEHOLDER="Enter your code",e.CONFIRM_SIGN_UP_HEADER_TEXT="Confirm Sign up",e.CONFIRM_SIGN_UP_LOST_CODE="Lost your code?",e.CONFIRM_SIGN_UP_RESEND_CODE="Resend Code",e.CONFIRM_SIGN_UP_SUBMIT_BUTTON_TEXT="Confirm",e.CONFIRM_SMS_CODE="Confirm SMS Code",e.CONFIRM_TOTP_CODE="Confirm TOTP Code",e.CONFIRM="Confirm",e.CREATE_ACCOUNT_TEXT="Create account",e.EMAIL_LABEL="Email Address *",e.EMAIL_PLACEHOLDER="Enter your email address",e.FORGOT_PASSWORD_TEXT="Forgot your password?",e.LESS_THAN_TWO_MFA_VALUES_MESSAGE="Less than two mfa types available",e.NEW_PASSWORD_LABEL="New password",e.NEW_PASSWORD_PLACEHOLDER="Enter your new password",e.NO_ACCOUNT_TEXT="No account?",e.PASSWORD_LABEL="Password *",e.PASSWORD_PLACEHOLDER="Enter your password",e.PHONE_LABEL="Phone Number *",e.PHONE_PLACEHOLDER="(555) 555-1212",e.QR_CODE_ALT="qrcode",e.RESET_PASSWORD_TEXT="Reset password",e.RESET_YOUR_PASSWORD="Reset your password",e.SELECT_MFA_TYPE_HEADER_TEXT="Select MFA Type",e.SELECT_MFA_TYPE_SUBMIT_BUTTON_TEXT="Verify",e.SEND_CODE="Send Code",e.SUBMIT="Submit",e.SETUP_TOTP_REQUIRED="TOTP needs to be configured",e.SIGN_IN_ACTION="Sign In",e.SIGN_IN_HEADER_TEXT="Sign in to your account",e.SIGN_IN_TEXT="Sign in",e.SIGN_IN_WITH_AMAZON="Sign in with Amazon",e.SIGN_IN_WITH_AUTH0="Sign in with Auth0",e.SIGN_IN_WITH_AWS="Sign in with AWS",e.SIGN_IN_WITH_FACEBOOK="Sign in with Facebook",e.SIGN_IN_WITH_GOOGLE="Sign in with Google",e.SIGN_OUT="Sign Out",e.SIGN_UP_EMAIL_PLACEHOLDER="Email",e.SIGN_UP_HAVE_ACCOUNT_TEXT="Have an account?",e.SIGN_UP_HEADER_TEXT="Create a new account",e.SIGN_UP_PASSWORD_PLACEHOLDER="Password",e.SIGN_UP_SUBMIT_BUTTON_TEXT="Create Account",e.SIGN_UP_USERNAME_PLACEHOLDER="Username",e.SUCCESS_MFA_TYPE="Success! Your MFA Type is now:",e.TOTP_HEADER_TEXT="Scan then enter verification code",e.TOTP_LABEL="Enter Security Code:",e.TOTP_ISSUER="AWSCognito",e.TOTP_SETUP_FAILURE="TOTP Setup has failed",e.TOTP_SUBMIT_BUTTON_TEXT="Verify Security Token",e.TOTP_SUCCESS_MESSAGE="Setup TOTP successfully!",e.UNABLE_TO_SETUP_MFA_AT_THIS_TIME="Failed! Unable to configure MFA at this time",e.USERNAME_LABEL="Username *",e.USERNAME_PLACEHOLDER="Enter your username",e.VERIFY_CONTACT_EMAIL_LABEL="Email",e.VERIFY_CONTACT_HEADER_TEXT="Account recovery requires verified contact information",e.VERIFY_CONTACT_PHONE_LABEL="Phone Number",e.VERIFY_CONTACT_SUBMIT_LABEL="Submit",e.VERIFY_CONTACT_VERIFY_LABEL="Verify",e.ADDRESS_LABEL="Address",e.ADDRESS_PLACEHOLDER="Enter your address",e.NICKNAME_LABEL="Nickname",e.NICKNAME_PLACEHOLDER="Enter your nickname",e.BIRTHDATE_LABEL="Birthday",e.BIRTHDATE_PLACEHOLDER="Enter your birthday",e.PICTURE_LABEL="Picture URL",e.PICTURE_PLACEHOLDER="Enter your picture URL",e.FAMILY_NAME_LABEL="Family Name",e.FAMILY_NAME_PLACEHOLDER="Enter your family name",e.PREFERRED_USERNAME_LABEL="Preferred Username",e.PREFERRED_USERNAME_PLACEHOLDER="Enter your preferred username",e.GENDER_LABEL="Gender",e.GENDER_PLACEHOLDER="Enter your gender",e.PROFILE_LABEL="Profile URL",e.PROFILE_PLACEHOLDER="Enter your profile URL",e.GIVEN_NAME_LABEL="First Name",e.GIVEN_NAME_PLACEHOLDER="Enter your first name",e.ZONEINFO_LABEL="Time zone",e.ZONEINFO_PLACEHOLDER="Enter your time zone",e.LOCALE_LABEL="Locale",e.LOCALE_PLACEHOLDER="Enter your locale",e.UPDATED_AT_LABEL="Updated At",e.UPDATED_AT_PLACEHOLDER="Enter the time the information was last updated",e.MIDDLE_NAME_LABEL="Middle Name",e.MIDDLE_NAME_PLACEHOLDER="Enter your middle name",e.WEBSITE_LABEL="Website",e.WEBSITE_PLACEHOLDER="Enter your website",e.NAME_LABEL="Full Name",e.NAME_PLACEHOLDER="Enter your full name",e.PHOTO_PICKER_TITLE="Picker Title",e.PHOTO_PICKER_HINT="Ancilliary text or content may occupy this space here",e.PHOTO_PICKER_PLACEHOLDER_HINT="Placeholder hint",e.PHOTO_PICKER_BUTTON_TEXT="Button",e.IMAGE_PICKER_TITLE="Add Profile Photo",e.IMAGE_PICKER_HINT="Preview the image before upload",e.IMAGE_PICKER_PLACEHOLDER_HINT="Tap to image select",e.IMAGE_PICKER_BUTTON_TEXT="Upload",e.PICKER_TEXT="Pick a file",e.TEXT_FALLBACK_CONTENT="Fallback Content",e.CONFIRM_SIGN_UP_FAILED="Confirm Sign Up Failed",e.SIGN_UP_FAILED="Sign Up Failed"}(r||(r={})),function(e){e.CHATBOT_TITLE="ChatBot Lex",e.TEXT_INPUT_PLACEHOLDER="Write a message",e.VOICE_INPUT_PLACEHOLDER="Click mic to speak",e.CHAT_DISABLED_ERROR="Error: Either voice or text must be enabled for the chatbot",e.NO_BOT_NAME_ERROR="Error: Bot name must be provided to ChatBot"}(o||(o={}));var l=Object.assign(Object.assign(Object.assign({},r),c.a),o)},506:function(e,n,t){"use strict";var r,o,c,l,E;t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return c})),t.d(n,"c",(function(){return o})),t.d(n,"d",(function(){return E})),t.d(n,"e",(function(){return l})),function(e){e.SignUp="signup",e.SignOut="signout",e.SignIn="signin",e.Loading="loading",e.SignedOut="signedout",e.SignedIn="signedin",e.SigningUp="signingup",e.ConfirmSignUp="confirmSignUp",e.confirmingSignUpCustomFlow="confirmsignupcustomflow",e.ConfirmSignIn="confirmSignIn",e.confirmingSignInCustomFlow="confirmingsignincustomflow",e.VerifyingAttributes="verifyingattributes",e.ForgotPassword="forgotpassword",e.ResetPassword="resettingpassword",e.SettingMFA="settingMFA",e.TOTPSetup="TOTPSetup",e.CustomConfirmSignIn="customConfirmSignIn",e.VerifyContact="verifyContact"}(r||(r={})),function(e){e.TOTP="TOTP",e.SMS="SMS",e.NOMFA="NOMFA"}(o||(o={})),function(e){e.SoftwareTokenMFA="SOFTWARE_TOKEN_MFA",e.SMSMFA="SMS_MFA",e.NewPasswordRequired="NEW_PASSWORD_REQUIRED",e.MFASetup="MFA_SETUP",e.CustomChallenge="CUSTOM_CHALLENGE"}(c||(c={})),function(e){e.Password="password"}(l||(l={})),function(e){e.username="username",e.email="email",e.phone_number="phone_number"}(E||(E={}))},507:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return O})),t.d(n,"c",(function(){return C})),t.d(n,"d",(function(){return T})),t.d(n,"e",(function(){return h})),t.d(n,"f",(function(){return N})),t.d(n,"g",(function(){return I})),t.d(n,"h",(function(){return S})),t.d(n,"i",(function(){return R}));var r=t(81),o=t(322),c=t(431),l=t(506),E=t(205),d=t(505),_=t(504),f=function(e,n,t,r){return new(t||(t=Promise))((function(o,c){function l(e){try{d(r.next(e))}catch(e){c(e)}}function E(e){try{d(r.throw(e))}catch(e){c(e)}}function d(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(l,E)}d((r=r.apply(e,n||[])).next())}))},L=function(e,body){var n,t,r,g,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return g={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function c(c){return function(l){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,t&&(r=2&c[0]?t.return:c[0]?t.throw||((r=t.return)&&r.call(t),0):t.next)&&!(r=r.call(t,c[1])).done)return r;switch(t=0,r&&(c=[2&c[0],r.value]),c[0]){case 0:case 1:r=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,t=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(!(r=o.trys,(r=r.length>0&&r[r.length-1])||6!==c[0]&&2!==c[0])){o=0;continue}if(3===c[0]&&(!r||c[1]>r[0]&&c[1]<r[3])){o.label=c[1];break}if(6===c[0]&&o.label<r[1]){o.label=r[1],r=c;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(c);break}r[2]&&o.ops.pop(),o.trys.pop();continue}c=body.call(e,o)}catch(e){c=[6,e],t=0}finally{n=r=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,l])}}},A=new r.a("helpers"),h=function(e){return!!e.shadowRoot&&!!e.attachShadow},m=function(e){o.a.dispatch(_.i,{event:_.h,message:c.a.get(e.message)})},T=function(e,data){o.a.dispatch(_.i,{event:_.j,message:e,data:data})},O=function(e){if(!e.phoneNumberValue)throw new Error(_.e);var n=e.phoneNumberValue.replace(/[-()\s]/g,"");return""+e.countryDialCodeValue+n},C=function(e){if(!(e in l.d))throw new Error("Invalid username Alias - "+e+". Instead use "+Object.values(l.d))},S=function(e){var n=function(data){return f(void 0,void 0,void 0,(function(){var n,t;return L(this,(function(r){switch(r.label){case 0:switch(n=data.payload,n.event){case _.j:return[3,1]}return[3,8];case 1:if(!n.message)return[3,7];if(n.message!==l.a.SignedIn)return[3,6];r.label=2;case 2:return r.trys.push([2,4,,5]),[4,E.a.currentAuthenticatedUser()];case 3:return t=r.sent(),e(n.message,t),[3,5];case 4:return r.sent(),A.error("User is not authenticated"),[3,5];case 5:return[3,7];case 6:e(n.message,n.data),r.label=7;case 7:return[3,8];case 8:return[2]}}))}))};return o.a.listen(_.i,n),function(){return o.a.remove(_.i,n)}},I=function(e){return!(null===e.hint||"string"==typeof e.hint)},R={address:{label:c.a.get(d.a.ADDRESS_LABEL),placeholder:c.a.get(d.a.ADDRESS_PLACEHOLDER)},nickname:{label:c.a.get(d.a.NICKNAME_LABEL),placeholder:c.a.get(d.a.NICKNAME_PLACEHOLDER)},birthdate:{label:c.a.get(d.a.BIRTHDATE_LABEL),placeholder:c.a.get(d.a.BIRTHDATE_PLACEHOLDER)},phone_number:{label:c.a.get(d.a.PHONE_LABEL),placeholder:c.a.get(d.a.PHONE_PLACEHOLDER)},email:{lable:c.a.get(d.a.EMAIL_LABEL),placeholder:c.a.get(d.a.EMAIL_PLACEHOLDER)},picture:{label:c.a.get(d.a.PICTURE_LABEL),placeholder:c.a.get(d.a.PICTURE_PLACEHOLDER)},family_name:{label:c.a.get(d.a.FAMILY_NAME_LABEL),placeholder:c.a.get(d.a.FAMILY_NAME_PLACEHOLDER)},preferred_username:{label:c.a.get(d.a.PREFERRED_USERNAME_LABEL),placeholder:c.a.get(d.a.PREFERRED_USERNAME_PLACEHOLDER)},gender:{label:c.a.get(d.a.GENDER_LABEL),placeholder:c.a.get(d.a.GENDER_PLACEHOLDER)},profile:{label:c.a.get(d.a.PROFILE_LABEL),placeholder:c.a.get(d.a.PROFILE_PLACEHOLDER)},given_name:{label:c.a.get(d.a.GIVEN_NAME_LABEL),placeholder:c.a.get(d.a.GIVEN_NAME_LABEL)},zoneinfo:{label:c.a.get(d.a.ZONEINFO_LABEL),placeholder:c.a.get(d.a.ZONEINFO_PLACEHOLDER)},locale:{label:c.a.get(d.a.LOCALE_LABEL),placeholder:c.a.get(d.a.LOCALE_PLACEHOLDER)},updated_at:{label:c.a.get(d.a.UPDATED_AT_LABEL),placeholder:c.a.get(d.a.UPDATED_AT_PLACEHOLDER)},middle_name:{label:c.a.get(d.a.MIDDLE_NAME_LABEL),placeholder:c.a.get(d.a.MIDDLE_NAME_PLACEHOLDER)},website:{label:c.a.get(d.a.WEBSITE_LABEL),placeholder:c.a.get(d.a.WEBSITE_PLACEHOLDER)},name:{label:c.a.get(d.a.NAME_LABEL),placeholder:c.a.get(d.a.NAME_PLACEHOLDER)}};function N(e,n){var t=e.target.name,r=e.target.value;t===_.b&&(n.countryDialCodeValue=r),t===_.k&&(n.phoneNumberValue=r)}}}]);