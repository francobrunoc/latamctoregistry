(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{242:function(e,t,n){"use strict";var r=n(149);n(42);t.a=r.a},613:function(e,t,n){"use strict";n.d(t,"a",(function(){return T}));var r=n(90),E=new r.a("I18n"),o=function(){function e(e){this._options=null,this._lang=null,this._dict={},this._options=Object.assign({},e),this._lang=this._options.language,!this._lang&&"undefined"!=typeof window&&window&&window.navigator&&(this._lang=window.navigator.language),E.debug(this._lang)}return e.prototype.setLanguage=function(e){this._lang=e},e.prototype.get=function(e,t){if(void 0===t&&(t=void 0),!this._lang)return void 0!==t?t:e;var n=this._lang,r=this.getByLanguage(e,n);return r||(n.indexOf("-")>0&&(r=this.getByLanguage(e,n.split("-")[0])),r||(void 0!==t?t:e))},e.prototype.getByLanguage=function(e,t,n){if(void 0===n&&(n=null),!t)return n;var r=this._dict[t];return r?r[e]:n},e.prototype.putVocabulariesForLanguage=function(e,t){var n=this._dict[e];n||(n=this._dict[e]={}),Object.assign(n,t)},e.prototype.putVocabularies=function(e){var t=this;Object.keys(e).map((function(n){t.putVocabulariesForLanguage(n,e[n])}))},e}(),_=n(55),c=new r.a("I18n"),L=null,A=null,T=function(){function e(){}return e.configure=function(t){return c.debug("configure I18n"),t?(L=Object.assign({},L,t.I18n||t),e.createInstance(),L):L},e.getModuleName=function(){return"I18n"},e.createInstance=function(){c.debug("create I18n instance"),A||(A=new o(L))},e.setLanguage=function(t){return e.checkConfig(),A.setLanguage(t)},e.get=function(t,n){return e.checkConfig()?A.get(t,n):void 0===n?t:n},e.putVocabulariesForLanguage=function(t,n){return e.checkConfig(),A.putVocabulariesForLanguage(t,n)},e.putVocabularies=function(t){return e.checkConfig(),A.putVocabularies(t)},e.checkConfig=function(){return A||(A=new o(L)),!0},e}();_.a.register(T)},868:function(e,t,n){var content=n(936);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(22).default)("20928d64",content,!0,{sourceMap:!1})},935:function(e,t,n){"use strict";n(868)},936:function(e,t,n){(t=n(21)(!1)).push([e.i,':root{--amplify-white:#ececec;--amplify-primary-color:#019edf;--amplify-primary-shade:#2076a7;--amplify-primary-tint:#009af3;--amplify-font-family:"Arimo"!important;--border-radius:0!important}amplify-authenticator{display:flex;justify-content:center;align-items:center;flex:1}',""]),e.exports=t},985:function(e,t,n){"use strict";n.r(t);n(66);var r,E,o,_,c,L,A=n(20),T=n(149);!function(e){e.SignUp="signup",e.SignOut="signout",e.SignIn="signin",e.Loading="loading",e.SignedOut="signedout",e.SignedIn="signedin",e.SigningUp="signingup",e.ConfirmSignUp="confirmSignUp",e.confirmingSignUpCustomFlow="confirmsignupcustomflow",e.ConfirmSignIn="confirmSignIn",e.confirmingSignInCustomFlow="confirmingsignincustomflow",e.VerifyingAttributes="verifyingattributes",e.ForgotPassword="forgotpassword",e.ResetPassword="resettingpassword",e.SettingMFA="settingMFA",e.TOTPSetup="TOTPSetup",e.CustomConfirmSignIn="customConfirmSignIn",e.VerifyContact="verifyContact"}(r||(r={})),function(e){e.TOTP="TOTP",e.SMS="SMS",e.NOMFA="NOMFA"}(E||(E={})),function(e){e.SoftwareTokenMFA="SOFTWARE_TOKEN_MFA",e.SMSMFA="SMS_MFA",e.NewPasswordRequired="NEW_PASSWORD_REQUIRED",e.MFASetup="MFA_SETUP",e.CustomChallenge="CUSTOM_CHALLENGE"}(o||(o={})),function(e){e.Password="password"}(_||(_={})),function(e){e.username="username",e.email="email",e.phone_number="phone_number"}(c||(c={})),function(e){e.Public="public",e.Private="private",e.Protected="protected"}(L||(L={}));var O,l,f=n(50);!function(e){e.BACK_TO_SIGN_IN="Back to Sign In",e.CHANGE_PASSWORD_ACTION="Change",e.CHANGE_PASSWORD="Change Password",e.CODE_LABEL="Verification code",e.CODE_PLACEHOLDER="Enter code",e.CONFIRM_SIGN_UP_CODE_LABEL="Confirmation Code",e.CONFIRM_SIGN_UP_CODE_PLACEHOLDER="Enter your code",e.CONFIRM_SIGN_UP_HEADER_TEXT="Confirm Sign up",e.CONFIRM_SIGN_UP_LOST_CODE="Lost your code?",e.CONFIRM_SIGN_UP_RESEND_CODE="Resend Code",e.CONFIRM_SIGN_UP_SUBMIT_BUTTON_TEXT="Confirm",e.CONFIRM_SMS_CODE="Confirm SMS Code",e.CONFIRM_TOTP_CODE="Confirm TOTP Code",e.CONFIRM="Confirm",e.CREATE_ACCOUNT_TEXT="Create account",e.EMAIL_LABEL="Email Address *",e.EMAIL_PLACEHOLDER="Enter your email address",e.FORGOT_PASSWORD_TEXT="Forgot your password?",e.LESS_THAN_TWO_MFA_VALUES_MESSAGE="Less than two mfa types available",e.NEW_PASSWORD_LABEL="New password",e.NEW_PASSWORD_PLACEHOLDER="Enter your new password",e.NO_ACCOUNT_TEXT="No account?",e.PASSWORD_LABEL="Password *",e.PASSWORD_PLACEHOLDER="Enter your password",e.PHONE_LABEL="Phone Number *",e.PHONE_PLACEHOLDER="(555) 555-1212",e.QR_CODE_ALT="qrcode",e.RESET_PASSWORD_TEXT="Reset password",e.RESET_YOUR_PASSWORD="Reset your password",e.SELECT_MFA_TYPE_HEADER_TEXT="Select MFA Type",e.SELECT_MFA_TYPE_SUBMIT_BUTTON_TEXT="Verify",e.SEND_CODE="Send Code",e.SUBMIT="Submit",e.SETUP_TOTP_REQUIRED="TOTP needs to be configured",e.SIGN_IN_ACTION="Sign In",e.SIGN_IN_HEADER_TEXT="Sign in to your account",e.SIGN_IN_TEXT="Sign in",e.SIGN_IN_WITH_AMAZON="Sign in with Amazon",e.SIGN_IN_WITH_AUTH0="Sign in with Auth0",e.SIGN_IN_WITH_AWS="Sign in with AWS",e.SIGN_IN_WITH_FACEBOOK="Sign in with Facebook",e.SIGN_IN_WITH_GOOGLE="Sign in with Google",e.SIGN_OUT="Sign Out",e.SIGN_UP_EMAIL_PLACEHOLDER="Email",e.SIGN_UP_HAVE_ACCOUNT_TEXT="Have an account?",e.SIGN_UP_HEADER_TEXT="Create a new account",e.SIGN_UP_PASSWORD_PLACEHOLDER="Password",e.SIGN_UP_SUBMIT_BUTTON_TEXT="Create Account",e.SIGN_UP_USERNAME_PLACEHOLDER="Username",e.SUCCESS_MFA_TYPE="Success! Your MFA Type is now:",e.TOTP_HEADER_TEXT="Scan then enter verification code",e.TOTP_LABEL="Enter Security Code:",e.TOTP_ISSUER="AWSCognito",e.TOTP_SETUP_FAILURE="TOTP Setup has failed",e.TOTP_SUBMIT_BUTTON_TEXT="Verify Security Token",e.TOTP_SUCCESS_MESSAGE="Setup TOTP successfully!",e.UNABLE_TO_SETUP_MFA_AT_THIS_TIME="Failed! Unable to configure MFA at this time",e.USERNAME_LABEL="Username *",e.USERNAME_PLACEHOLDER="Enter your username",e.VERIFY_CONTACT_EMAIL_LABEL="Email",e.VERIFY_CONTACT_HEADER_TEXT="Account recovery requires verified contact information",e.VERIFY_CONTACT_PHONE_LABEL="Phone Number",e.VERIFY_CONTACT_SUBMIT_LABEL="Submit",e.VERIFY_CONTACT_VERIFY_LABEL="Verify",e.ADDRESS_LABEL="Address",e.ADDRESS_PLACEHOLDER="Enter your address",e.NICKNAME_LABEL="Nickname",e.NICKNAME_PLACEHOLDER="Enter your nickname",e.BIRTHDATE_LABEL="Birthday",e.BIRTHDATE_PLACEHOLDER="Enter your birthday",e.PICTURE_LABEL="Picture URL",e.PICTURE_PLACEHOLDER="Enter your picture URL",e.FAMILY_NAME_LABEL="Family Name",e.FAMILY_NAME_PLACEHOLDER="Enter your family name",e.PREFERRED_USERNAME_LABEL="Preferred Username",e.PREFERRED_USERNAME_PLACEHOLDER="Enter your preferred username",e.GENDER_LABEL="Gender",e.GENDER_PLACEHOLDER="Enter your gender",e.PROFILE_LABEL="Profile URL",e.PROFILE_PLACEHOLDER="Enter your profile URL",e.GIVEN_NAME_LABEL="First Name",e.GIVEN_NAME_PLACEHOLDER="Enter your first name",e.ZONEINFO_LABEL="Time zone",e.ZONEINFO_PLACEHOLDER="Enter your time zone",e.LOCALE_LABEL="Locale",e.LOCALE_PLACEHOLDER="Enter your locale",e.UPDATED_AT_LABEL="Updated At",e.UPDATED_AT_PLACEHOLDER="Enter the time the information was last updated",e.MIDDLE_NAME_LABEL="Middle Name",e.MIDDLE_NAME_PLACEHOLDER="Enter your middle name",e.WEBSITE_LABEL="Website",e.WEBSITE_PLACEHOLDER="Enter your website",e.NAME_LABEL="Full Name",e.NAME_PLACEHOLDER="Enter your full name",e.PHOTO_PICKER_TITLE="Picker Title",e.PHOTO_PICKER_HINT="Ancilliary text or content may occupy this space here",e.PHOTO_PICKER_PLACEHOLDER_HINT="Placeholder hint",e.PHOTO_PICKER_BUTTON_TEXT="Button",e.IMAGE_PICKER_TITLE="Add Profile Photo",e.IMAGE_PICKER_HINT="Preview the image before upload",e.IMAGE_PICKER_PLACEHOLDER_HINT="Tap to image select",e.IMAGE_PICKER_BUTTON_TEXT="Upload",e.PICKER_TEXT="Pick a file",e.TEXT_FALLBACK_CONTENT="Fallback Content",e.CONFIRM_SIGN_UP_FAILED="Confirm Sign Up Failed",e.SIGN_UP_FAILED="Sign Up Failed"}(O||(O={})),function(e){e.CHATBOT_TITLE="ChatBot Lex",e.TEXT_INPUT_PLACEHOLDER="Write a message",e.VOICE_INPUT_PLACEHOLDER="Click mic to speak",e.CHAT_DISABLED_ERROR="Error: Either voice or text must be enabled for the chatbot",e.NO_BOT_NAME_ERROR="Error: Bot name must be provided to ChatBot"}(l||(l={}));var S=Object.assign(Object.assign(Object.assign({},O),f.a),l),C=n(90),R=n(506),I=n(613),P=n(242),d=function(e,t,n,r){return new(n||(n=Promise))((function(E,o){function _(e){try{L(r.next(e))}catch(e){o(e)}}function c(e){try{L(r.throw(e))}catch(e){o(e)}}function L(e){var t;e.done?E(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(_,c)}L((r=r.apply(e,t||[])).next())}))},N=function(e,body){var t,n,r,g,E={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return g={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function o(o){return function(_){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;E;)try{if(t=1,n&&(r=2&o[0]?n.return:o[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,o[1])).done)return r;switch(n=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return E.label++,{value:o[1],done:!1};case 5:E.label++,n=o[1],o=[0];continue;case 7:o=E.ops.pop(),E.trys.pop();continue;default:if(!(r=E.trys,(r=r.length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){E=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){E.label=o[1];break}if(6===o[0]&&E.label<r[1]){E.label=r[1],r=o;break}if(r&&E.label<r[2]){E.label=r[2],E.ops.push(o);break}r[2]&&E.ops.pop(),E.trys.pop();continue}o=body.call(e,E)}catch(e){o=[6,e],n=0}finally{t=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,_])}}},D=new C.a("helpers"),m=function(e){var t=function(data){return d(void 0,void 0,void 0,(function(){var t,n;return N(this,(function(E){switch(E.label){case 0:switch(t=data.payload,t.event){case"AuthStateChange":return[3,1]}return[3,8];case 1:if(!t.message)return[3,7];if(t.message!==r.SignedIn)return[3,6];E.label=2;case 2:return E.trys.push([2,4,,5]),[4,P.a.currentAuthenticatedUser()];case 3:return n=E.sent(),e(t.message,n),[3,5];case 4:return E.sent(),D.error("User is not authenticated"),[3,5];case 5:return[3,7];case 6:e(t.message,t.data),E.label=7;case 7:return[3,8];case 8:return[2]}}))}))};return R.a.listen("UI Auth",t),function(){return R.a.remove("UI Auth",t)}};I.a.get(S.ADDRESS_LABEL),I.a.get(S.ADDRESS_PLACEHOLDER),I.a.get(S.NICKNAME_LABEL),I.a.get(S.NICKNAME_PLACEHOLDER),I.a.get(S.BIRTHDATE_LABEL),I.a.get(S.BIRTHDATE_PLACEHOLDER),I.a.get(S.PHONE_LABEL),I.a.get(S.PHONE_PLACEHOLDER),I.a.get(S.EMAIL_LABEL),I.a.get(S.EMAIL_PLACEHOLDER),I.a.get(S.PICTURE_LABEL),I.a.get(S.PICTURE_PLACEHOLDER),I.a.get(S.FAMILY_NAME_LABEL),I.a.get(S.FAMILY_NAME_PLACEHOLDER),I.a.get(S.PREFERRED_USERNAME_LABEL),I.a.get(S.PREFERRED_USERNAME_PLACEHOLDER),I.a.get(S.GENDER_LABEL),I.a.get(S.GENDER_PLACEHOLDER),I.a.get(S.PROFILE_LABEL),I.a.get(S.PROFILE_PLACEHOLDER),I.a.get(S.GIVEN_NAME_LABEL),I.a.get(S.GIVEN_NAME_LABEL),I.a.get(S.ZONEINFO_LABEL),I.a.get(S.ZONEINFO_PLACEHOLDER),I.a.get(S.LOCALE_LABEL),I.a.get(S.LOCALE_PLACEHOLDER),I.a.get(S.UPDATED_AT_LABEL),I.a.get(S.UPDATED_AT_PLACEHOLDER),I.a.get(S.MIDDLE_NAME_LABEL),I.a.get(S.MIDDLE_NAME_PLACEHOLDER),I.a.get(S.WEBSITE_LABEL),I.a.get(S.WEBSITE_PLACEHOLDER),I.a.get(S.NAME_LABEL),I.a.get(S.NAME_PLACEHOLDER);var h={name:"auth",layout:"public",data:function(){return{user:void 0,authState:void 0}},methods:{signOut:function(){var e=this;return Object(A.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T.a.signOut();case 3:e.authState="signedOut",t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.error(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()},findUser:function(){var e=this;return Object(A.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T.a.currentAuthenticatedUser();case 3:return t.next=5,e.signOut();case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}},beforeDestroy:function(){return m},beforeCreate:function(){var e=this;m((function(t,n){e.authState=t,e.user=n}))},created:function(){var e=this;this.findUser(),m((function(t,n){t===r.SignedIn?(e.$store.commit("setUser",n),e.$router.push("/dashboard")):e.findUser()}))}},M=(n(935),n(62)),y=n(103),U=n.n(y),H=n(245),B=n(677),F=n(233),component=Object(M.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-btn",{attrs:{color:"blue",fab:"",large:"",dark:"",top:"",left:"",fixed:""},on:{click:function(t){return e.$router.push("/")}}},[n("v-icon",[e._v("mdi-home")])],1),e._v(" "),n("amplify-authenticator",[n("v-btn",{attrs:{color:"blue",fab:"",large:"",dark:"",top:"",left:"",fixed:""}},[n("v-icon",[e._v("mdi-account")])],1),e._v(" "),n("amplify-sign-in",{attrs:{slot:"sign-in"},slot:"sign-in"},[n("div",{attrs:{slot:"secondary-footer-content"},slot:"secondary-footer-content"})])],1)],1)}),[],!1,null,null,null);t.default=component.exports;U()(component,{VBtn:H.a,VContainer:B.a,VIcon:F.a})}}]);