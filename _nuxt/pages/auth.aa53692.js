(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{320:function(e,t,n){"use strict";var r=n(204);n(69);t.a=r.a},510:function(e,t,n){"use strict";n.d(t,"a",(function(){return A}));var r=n(89),o=new r.a("I18n"),E=function(){function e(e){this._options=null,this._lang=null,this._dict={},this._options=Object.assign({},e),this._lang=this._options.language,!this._lang&&"undefined"!=typeof window&&window&&window.navigator&&(this._lang=window.navigator.language),o.debug(this._lang)}return e.prototype.setLanguage=function(e){this._lang=e},e.prototype.get=function(e,t){if(void 0===t&&(t=void 0),!this._lang)return void 0!==t?t:e;var n=this._lang,r=this.getByLanguage(e,n);return r||(n.indexOf("-")>0&&(r=this.getByLanguage(e,n.split("-")[0])),r||(void 0!==t?t:e))},e.prototype.getByLanguage=function(e,t,n){if(void 0===n&&(n=null),!t)return n;var r=this._dict[t];return r?r[e]:n},e.prototype.putVocabulariesForLanguage=function(e,t){var n=this._dict[e];n||(n=this._dict[e]={}),Object.assign(n,t)},e.prototype.putVocabularies=function(e){var t=this;Object.keys(e).map((function(n){t.putVocabulariesForLanguage(n,e[n])}))},e}(),c=n(58),_=new r.a("I18n"),l=null,f=null,A=function(){function e(){}return e.configure=function(t){return _.debug("configure I18n"),t?(l=Object.assign({},l,t.I18n||t),e.createInstance(),l):l},e.getModuleName=function(){return"I18n"},e.createInstance=function(){_.debug("create I18n instance"),f||(f=new E(l))},e.setLanguage=function(t){return e.checkConfig(),f.setLanguage(t)},e.get=function(t,n){return e.checkConfig()?f.get(t,n):void 0===n?t:n},e.putVocabulariesForLanguage=function(t,n){return e.checkConfig(),f.putVocabulariesForLanguage(t,n)},e.putVocabularies=function(t){return e.checkConfig(),f.putVocabularies(t)},e.checkConfig=function(){return f||(f=new E(l)),!0},e}();c.a.register(A)},543:function(e,t,n){"use strict";n.d(t,"a",(function(){return N})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return O})),n.d(t,"e",(function(){return T})),n.d(t,"f",(function(){return L})),n.d(t,"g",(function(){return h})),n.d(t,"h",(function(){return D})),n.d(t,"i",(function(){return m})),n.d(t,"j",(function(){return y})),n.d(t,"k",(function(){return c})),n.d(t,"l",(function(){return d})),n.d(t,"m",(function(){return C})),n.d(t,"n",(function(){return S})),n.d(t,"o",(function(){return R})),n.d(t,"p",(function(){return I})),n.d(t,"q",(function(){return f})),n.d(t,"r",(function(){return P})),n.d(t,"s",(function(){return A})),n.d(t,"t",(function(){return E})),n.d(t,"u",(function(){return _})),n.d(t,"v",(function(){return r}));var r="username",o="email",E="code",c="phone",_="password",l="country-dial-code-select",f="+1",A="amplify-auth-source",L="amplify-redirected-from-hosted-ui",d="amplify-authenticator-authState",T="Phone number can not be empty",O="No Auth module found, please ensure @aws-amplify/auth is imported",S="No Storage module found, please ensure @aws-amplify/storage is imported",C="No Interactions module found, please ensure @aws-amplify/interactions is imported",h="SETUP_TOTP",R="User has not set up software token mfa",I="User has not verified software token mfa",P="SUCCESS",N="auth",m="UI Auth",D="ToastAuthError",y="AuthStateChange"},544:function(e,t,n){"use strict";var r,o,E,c,_;n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return E})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return _})),n.d(t,"e",(function(){return c})),function(e){e.SignUp="signup",e.SignOut="signout",e.SignIn="signin",e.Loading="loading",e.SignedOut="signedout",e.SignedIn="signedin",e.SigningUp="signingup",e.ConfirmSignUp="confirmSignUp",e.confirmingSignUpCustomFlow="confirmsignupcustomflow",e.ConfirmSignIn="confirmSignIn",e.confirmingSignInCustomFlow="confirmingsignincustomflow",e.VerifyingAttributes="verifyingattributes",e.ForgotPassword="forgotpassword",e.ResetPassword="resettingpassword",e.SettingMFA="settingMFA",e.TOTPSetup="TOTPSetup",e.CustomConfirmSignIn="customConfirmSignIn",e.VerifyContact="verifyContact"}(r||(r={})),function(e){e.TOTP="TOTP",e.SMS="SMS",e.NOMFA="NOMFA"}(o||(o={})),function(e){e.SoftwareTokenMFA="SOFTWARE_TOKEN_MFA",e.SMSMFA="SMS_MFA",e.NewPasswordRequired="NEW_PASSWORD_REQUIRED",e.MFASetup="MFA_SETUP",e.CustomChallenge="CUSTOM_CHALLENGE"}(E||(E={})),function(e){e.Password="password"}(c||(c={})),function(e){e.username="username",e.email="email",e.phone_number="phone_number"}(_||(_={}))},545:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r,o,E=n(53);!function(e){e.BACK_TO_SIGN_IN="Back to Sign In",e.CHANGE_PASSWORD_ACTION="Change",e.CHANGE_PASSWORD="Change Password",e.CODE_LABEL="Verification code",e.CODE_PLACEHOLDER="Enter code",e.CONFIRM_SIGN_UP_CODE_LABEL="Confirmation Code",e.CONFIRM_SIGN_UP_CODE_PLACEHOLDER="Enter your code",e.CONFIRM_SIGN_UP_HEADER_TEXT="Confirm Sign up",e.CONFIRM_SIGN_UP_LOST_CODE="Lost your code?",e.CONFIRM_SIGN_UP_RESEND_CODE="Resend Code",e.CONFIRM_SIGN_UP_SUBMIT_BUTTON_TEXT="Confirm",e.CONFIRM_SMS_CODE="Confirm SMS Code",e.CONFIRM_TOTP_CODE="Confirm TOTP Code",e.CONFIRM="Confirm",e.CREATE_ACCOUNT_TEXT="Create account",e.EMAIL_LABEL="Email Address *",e.EMAIL_PLACEHOLDER="Enter your email address",e.FORGOT_PASSWORD_TEXT="Forgot your password?",e.LESS_THAN_TWO_MFA_VALUES_MESSAGE="Less than two mfa types available",e.NEW_PASSWORD_LABEL="New password",e.NEW_PASSWORD_PLACEHOLDER="Enter your new password",e.NO_ACCOUNT_TEXT="No account?",e.PASSWORD_LABEL="Password *",e.PASSWORD_PLACEHOLDER="Enter your password",e.PHONE_LABEL="Phone Number *",e.PHONE_PLACEHOLDER="(555) 555-1212",e.QR_CODE_ALT="qrcode",e.RESET_PASSWORD_TEXT="Reset password",e.RESET_YOUR_PASSWORD="Reset your password",e.SELECT_MFA_TYPE_HEADER_TEXT="Select MFA Type",e.SELECT_MFA_TYPE_SUBMIT_BUTTON_TEXT="Verify",e.SEND_CODE="Send Code",e.SUBMIT="Submit",e.SETUP_TOTP_REQUIRED="TOTP needs to be configured",e.SIGN_IN_ACTION="Sign In",e.SIGN_IN_HEADER_TEXT="Sign in to your account",e.SIGN_IN_TEXT="Sign in",e.SIGN_IN_WITH_AMAZON="Sign in with Amazon",e.SIGN_IN_WITH_AUTH0="Sign in with Auth0",e.SIGN_IN_WITH_AWS="Sign in with AWS",e.SIGN_IN_WITH_FACEBOOK="Sign in with Facebook",e.SIGN_IN_WITH_GOOGLE="Sign in with Google",e.SIGN_OUT="Sign Out",e.SIGN_UP_EMAIL_PLACEHOLDER="Email",e.SIGN_UP_HAVE_ACCOUNT_TEXT="Have an account?",e.SIGN_UP_HEADER_TEXT="Create a new account",e.SIGN_UP_PASSWORD_PLACEHOLDER="Password",e.SIGN_UP_SUBMIT_BUTTON_TEXT="Create Account",e.SIGN_UP_USERNAME_PLACEHOLDER="Username",e.SUCCESS_MFA_TYPE="Success! Your MFA Type is now:",e.TOTP_HEADER_TEXT="Scan then enter verification code",e.TOTP_LABEL="Enter Security Code:",e.TOTP_ISSUER="AWSCognito",e.TOTP_SETUP_FAILURE="TOTP Setup has failed",e.TOTP_SUBMIT_BUTTON_TEXT="Verify Security Token",e.TOTP_SUCCESS_MESSAGE="Setup TOTP successfully!",e.UNABLE_TO_SETUP_MFA_AT_THIS_TIME="Failed! Unable to configure MFA at this time",e.USERNAME_LABEL="Username *",e.USERNAME_PLACEHOLDER="Enter your username",e.VERIFY_CONTACT_EMAIL_LABEL="Email",e.VERIFY_CONTACT_HEADER_TEXT="Account recovery requires verified contact information",e.VERIFY_CONTACT_PHONE_LABEL="Phone Number",e.VERIFY_CONTACT_SUBMIT_LABEL="Submit",e.VERIFY_CONTACT_VERIFY_LABEL="Verify",e.ADDRESS_LABEL="Address",e.ADDRESS_PLACEHOLDER="Enter your address",e.NICKNAME_LABEL="Nickname",e.NICKNAME_PLACEHOLDER="Enter your nickname",e.BIRTHDATE_LABEL="Birthday",e.BIRTHDATE_PLACEHOLDER="Enter your birthday",e.PICTURE_LABEL="Picture URL",e.PICTURE_PLACEHOLDER="Enter your picture URL",e.FAMILY_NAME_LABEL="Family Name",e.FAMILY_NAME_PLACEHOLDER="Enter your family name",e.PREFERRED_USERNAME_LABEL="Preferred Username",e.PREFERRED_USERNAME_PLACEHOLDER="Enter your preferred username",e.GENDER_LABEL="Gender",e.GENDER_PLACEHOLDER="Enter your gender",e.PROFILE_LABEL="Profile URL",e.PROFILE_PLACEHOLDER="Enter your profile URL",e.GIVEN_NAME_LABEL="First Name",e.GIVEN_NAME_PLACEHOLDER="Enter your first name",e.ZONEINFO_LABEL="Time zone",e.ZONEINFO_PLACEHOLDER="Enter your time zone",e.LOCALE_LABEL="Locale",e.LOCALE_PLACEHOLDER="Enter your locale",e.UPDATED_AT_LABEL="Updated At",e.UPDATED_AT_PLACEHOLDER="Enter the time the information was last updated",e.MIDDLE_NAME_LABEL="Middle Name",e.MIDDLE_NAME_PLACEHOLDER="Enter your middle name",e.WEBSITE_LABEL="Website",e.WEBSITE_PLACEHOLDER="Enter your website",e.NAME_LABEL="Full Name",e.NAME_PLACEHOLDER="Enter your full name",e.PHOTO_PICKER_TITLE="Picker Title",e.PHOTO_PICKER_HINT="Ancilliary text or content may occupy this space here",e.PHOTO_PICKER_PLACEHOLDER_HINT="Placeholder hint",e.PHOTO_PICKER_BUTTON_TEXT="Button",e.IMAGE_PICKER_TITLE="Add Profile Photo",e.IMAGE_PICKER_HINT="Preview the image before upload",e.IMAGE_PICKER_PLACEHOLDER_HINT="Tap to image select",e.IMAGE_PICKER_BUTTON_TEXT="Upload",e.PICKER_TEXT="Pick a file",e.TEXT_FALLBACK_CONTENT="Fallback Content",e.CONFIRM_SIGN_UP_FAILED="Confirm Sign Up Failed",e.SIGN_UP_FAILED="Sign Up Failed"}(r||(r={})),function(e){e.CHATBOT_TITLE="ChatBot Lex",e.TEXT_INPUT_PLACEHOLDER="Write a message",e.VOICE_INPUT_PLACEHOLDER="Click mic to speak",e.CHAT_DISABLED_ERROR="Error: Either voice or text must be enabled for the chatbot",e.NO_BOT_NAME_ERROR="Error: Bot name must be provided to ChatBot"}(o||(o={}));var c=Object.assign(Object.assign(Object.assign({},r),E.a),o)},546:function(e,t,n){"use strict";n.d(t,"a",(function(){return O})),n.d(t,"b",(function(){return C})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return S})),n.d(t,"e",(function(){return T})),n.d(t,"f",(function(){return N})),n.d(t,"g",(function(){return I})),n.d(t,"h",(function(){return R})),n.d(t,"i",(function(){return P}));var r=n(89),o=n(360),E=n(510),c=n(544),_=n(320),l=n(545),f=n(543),A=function(e,t,n,r){return new(n||(n=Promise))((function(o,E){function c(e){try{l(r.next(e))}catch(e){E(e)}}function _(e){try{l(r.throw(e))}catch(e){E(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,_)}l((r=r.apply(e,t||[])).next())}))},L=function(e,body){var t,n,r,g,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return g={next:E(0),throw:E(1),return:E(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function E(E){return function(c){return function(E){if(t)throw new TypeError("Generator is already executing.");for(;o;)try{if(t=1,n&&(r=2&E[0]?n.return:E[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,E[1])).done)return r;switch(n=0,r&&(E=[2&E[0],r.value]),E[0]){case 0:case 1:r=E;break;case 4:return o.label++,{value:E[1],done:!1};case 5:o.label++,n=E[1],E=[0];continue;case 7:E=o.ops.pop(),o.trys.pop();continue;default:if(!(r=o.trys,(r=r.length>0&&r[r.length-1])||6!==E[0]&&2!==E[0])){o=0;continue}if(3===E[0]&&(!r||E[1]>r[0]&&E[1]<r[3])){o.label=E[1];break}if(6===E[0]&&o.label<r[1]){o.label=r[1],r=E;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(E);break}r[2]&&o.ops.pop(),o.trys.pop();continue}E=body.call(e,o)}catch(e){E=[6,e],n=0}finally{t=r=0}if(5&E[0])throw E[1];return{value:E[0]?E[1]:void 0,done:!0}}([E,c])}}},d=new r.a("helpers"),T=function(e){return!!e.shadowRoot&&!!e.attachShadow},O=function(e){o.a.dispatch(f.i,{event:f.h,message:E.a.get(e.message)})},S=function(e,data){o.a.dispatch(f.i,{event:f.j,message:e,data:data})},C=function(e){if(!e.phoneNumberValue)throw new Error(f.e);var t=e.phoneNumberValue.replace(/[-()\s]/g,"");return""+e.countryDialCodeValue+t},h=function(e){if(!(e in c.d))throw new Error("Invalid username Alias - "+e+". Instead use "+Object.values(c.d))},R=function(e){var t=function(data){return A(void 0,void 0,void 0,(function(){var t,n;return L(this,(function(r){switch(r.label){case 0:switch(t=data.payload,t.event){case f.j:return[3,1]}return[3,8];case 1:if(!t.message)return[3,7];if(t.message!==c.a.SignedIn)return[3,6];r.label=2;case 2:return r.trys.push([2,4,,5]),[4,_.a.currentAuthenticatedUser()];case 3:return n=r.sent(),e(t.message,n),[3,5];case 4:return r.sent(),d.error("User is not authenticated"),[3,5];case 5:return[3,7];case 6:e(t.message,t.data),r.label=7;case 7:return[3,8];case 8:return[2]}}))}))};return o.a.listen(f.i,t),function(){return o.a.remove(f.i,t)}},I=function(e){return!(null===e.hint||"string"==typeof e.hint)},P={address:{label:E.a.get(l.a.ADDRESS_LABEL),placeholder:E.a.get(l.a.ADDRESS_PLACEHOLDER)},nickname:{label:E.a.get(l.a.NICKNAME_LABEL),placeholder:E.a.get(l.a.NICKNAME_PLACEHOLDER)},birthdate:{label:E.a.get(l.a.BIRTHDATE_LABEL),placeholder:E.a.get(l.a.BIRTHDATE_PLACEHOLDER)},phone_number:{label:E.a.get(l.a.PHONE_LABEL),placeholder:E.a.get(l.a.PHONE_PLACEHOLDER)},email:{lable:E.a.get(l.a.EMAIL_LABEL),placeholder:E.a.get(l.a.EMAIL_PLACEHOLDER)},picture:{label:E.a.get(l.a.PICTURE_LABEL),placeholder:E.a.get(l.a.PICTURE_PLACEHOLDER)},family_name:{label:E.a.get(l.a.FAMILY_NAME_LABEL),placeholder:E.a.get(l.a.FAMILY_NAME_PLACEHOLDER)},preferred_username:{label:E.a.get(l.a.PREFERRED_USERNAME_LABEL),placeholder:E.a.get(l.a.PREFERRED_USERNAME_PLACEHOLDER)},gender:{label:E.a.get(l.a.GENDER_LABEL),placeholder:E.a.get(l.a.GENDER_PLACEHOLDER)},profile:{label:E.a.get(l.a.PROFILE_LABEL),placeholder:E.a.get(l.a.PROFILE_PLACEHOLDER)},given_name:{label:E.a.get(l.a.GIVEN_NAME_LABEL),placeholder:E.a.get(l.a.GIVEN_NAME_LABEL)},zoneinfo:{label:E.a.get(l.a.ZONEINFO_LABEL),placeholder:E.a.get(l.a.ZONEINFO_PLACEHOLDER)},locale:{label:E.a.get(l.a.LOCALE_LABEL),placeholder:E.a.get(l.a.LOCALE_PLACEHOLDER)},updated_at:{label:E.a.get(l.a.UPDATED_AT_LABEL),placeholder:E.a.get(l.a.UPDATED_AT_PLACEHOLDER)},middle_name:{label:E.a.get(l.a.MIDDLE_NAME_LABEL),placeholder:E.a.get(l.a.MIDDLE_NAME_PLACEHOLDER)},website:{label:E.a.get(l.a.WEBSITE_LABEL),placeholder:E.a.get(l.a.WEBSITE_PLACEHOLDER)},name:{label:E.a.get(l.a.NAME_LABEL),placeholder:E.a.get(l.a.NAME_PLACEHOLDER)}};function N(e,t){var n=e.target.name,r=e.target.value;n===f.b&&(t.countryDialCodeValue=r),n===f.k&&(t.phoneNumberValue=r)}},551:function(e,t,n){"use strict";var r;n.d(t,"a",(function(){return r})),function(e){e.Public="public",e.Private="private",e.Protected="protected"}(r||(r={}))},703:function(e,t,n){var content=n(753);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(21).default)("20928d64",content,!0,{sourceMap:!1})},752:function(e,t,n){"use strict";var r=n(703);n.n(r).a},753:function(e,t,n){(t=n(20)(!1)).push([e.i,':root{--amplify-white:#ececec;--amplify-primary-color:#019edf;--amplify-primary-shade:#2076a7;--amplify-primary-tint:#009af3;--amplify-font-family:"Arimo"!important}amplify-authenticator{display:flex;justify-content:center;align-items:center;flex:1}',""]),e.exports=t},801:function(e,t,n){"use strict";n.r(t);var r=[function(){var e=this.$createElement,t=this._self._c||e;return t("a",{attrs:{href:"/"}},[t("img",{attrs:{src:n(325)}})])}],o=(n(91),n(26)),E=n(204),c=n(544),_=(n(551),n(545),n(543),n(546)),l={name:"auth",layout:"public",data:function(){return{user:void 0,authState:void 0}},methods:{signOut:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E.a.signOut();case 3:e.authState="signedOut",t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.error(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()},findUser:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E.a.currentAuthenticatedUser();case 3:return t.next=5,e.signOut();case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}},beforeDestroy:function(){return _.h},beforeCreate:function(){var e=this;Object(_.h)((function(t,n){e.authState=t,e.user=n}))},created:function(){var e=this;this.findUser(),Object(_.h)((function(t,n){t===c.a.SignedIn?(e.$store.commit("setUser",n),e.$router.push("/dashboard")):e.findUser()}))}},f=(n(752),n(63)),component=Object(f.a)(l,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container",attrs:{align:"center"}},[this._m(0),this._v(" "),t("amplify-authenticator",[t("amplify-sign-in",{attrs:{slot:"sign-in","header-text":""},slot:"sign-in"},[t("div",{attrs:{slot:"secondary-footer-content"},slot:"secondary-footer-content"})])],1)],1)}),r,!1,null,null,null);t.default=component.exports}}]);