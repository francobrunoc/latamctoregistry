(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{245:function(e,n,t){"use strict";var r=t(147);t(42);n.a=r.a},619:function(e,n,t){"use strict";t.d(n,"a",(function(){return L}));var r=t(90),o=new r.a("I18n"),E=function(){function e(e){this._options=null,this._lang=null,this._dict={},this._options=Object.assign({},e),this._lang=this._options.language,!this._lang&&"undefined"!=typeof window&&window&&window.navigator&&(this._lang=window.navigator.language),o.debug(this._lang)}return e.prototype.setLanguage=function(e){this._lang=e},e.prototype.get=function(e,n){if(void 0===n&&(n=void 0),!this._lang)return void 0!==n?n:e;var t=this._lang,r=this.getByLanguage(e,t);return r||(t.indexOf("-")>0&&(r=this.getByLanguage(e,t.split("-")[0])),r||(void 0!==n?n:e))},e.prototype.getByLanguage=function(e,n,t){if(void 0===t&&(t=null),!n)return t;var r=this._dict[n];return r?r[e]:t},e.prototype.putVocabulariesForLanguage=function(e,n){var t=this._dict[e];t||(t=this._dict[e]={}),Object.assign(t,n)},e.prototype.putVocabularies=function(e){var n=this;Object.keys(e).map((function(t){n.putVocabulariesForLanguage(t,e[t])}))},e}(),c=t(55),_=new r.a("I18n"),l=null,A=null,L=function(){function e(){}return e.configure=function(n){return _.debug("configure I18n"),n?(l=Object.assign({},l,n.I18n||n),e.createInstance(),l):l},e.getModuleName=function(){return"I18n"},e.createInstance=function(){_.debug("create I18n instance"),A||(A=new E(l))},e.setLanguage=function(n){return e.checkConfig(),A.setLanguage(n)},e.get=function(n,t){return e.checkConfig()?A.get(n,t):void 0===t?n:t},e.putVocabulariesForLanguage=function(n,t){return e.checkConfig(),A.putVocabulariesForLanguage(n,t)},e.putVocabularies=function(n){return e.checkConfig(),A.putVocabularies(n)},e.checkConfig=function(){return A||(A=new E(l)),!0},e}();c.a.register(L)},636:function(e,n,t){"use strict";t.r(n),t.d(n,"amplify_greetings",(function(){return E}));var r=t(23),o=(t(694),t(692),t(691),t(697)),E=function(){function e(e){Object(r.k)(this,e),this.username=null,this.logo=null,this.handleAuthStateChange=o.d}return e.prototype.render=function(){return Object(r.i)("header",{class:"greetings"},Object(r.i)("span",{class:"logo"},Object(r.i)("slot",{name:"logo"},this.logo&&Object(r.i)("span",null,this.logo))),Object(r.i)("span",{class:"nav"},Object(r.i)("slot",{name:"nav"},Object(r.i)("amplify-nav",null,this.username&&Object(r.i)("slot",{name:"greetings-message"},Object(r.i)("span",null,"Hello, ",this.username)),Object(r.i)("amplify-sign-out",{handleAuthStateChange:this.handleAuthStateChange})))))},e}();E.style=":host{--background-color:var(--amplify-white);--border-color:var(--amplify-light-grey);--font-family:var(--amplify-font-family)}.greetings{display:-ms-flexbox;display:flex;border:1px solid transparent;background-color:var(--background-color);border-color:var(--border-color);padding:0.625rem;font-family:var(--font-family);-ms-flex-pack:justify;justify-content:space-between}.nav{display:-ms-flexbox;display:flex;-ms-flex-item-align:center;align-self:center}.logo{display:-ms-flexbox;display:flex;-ms-flex-item-align:center;align-self:center;justify-self:flex-start}amplify-sign-out{margin-left:1rem}"},691:function(e,n,t){"use strict";t.d(n,"a",(function(){return h})),t.d(n,"b",(function(){return l})),t.d(n,"c",(function(){return o})),t.d(n,"d",(function(){return O})),t.d(n,"e",(function(){return T})),t.d(n,"f",(function(){return d})),t.d(n,"g",(function(){return I})),t.d(n,"h",(function(){return D})),t.d(n,"i",(function(){return m})),t.d(n,"j",(function(){return y})),t.d(n,"k",(function(){return c})),t.d(n,"l",(function(){return f})),t.d(n,"m",(function(){return C})),t.d(n,"n",(function(){return S})),t.d(n,"o",(function(){return R})),t.d(n,"p",(function(){return P})),t.d(n,"q",(function(){return A})),t.d(n,"r",(function(){return N})),t.d(n,"s",(function(){return L})),t.d(n,"t",(function(){return E})),t.d(n,"u",(function(){return _})),t.d(n,"v",(function(){return r}));var r="username",o="email",E="code",c="phone",_="password",l="country-dial-code-select",A="+1",L="amplify-auth-source",d="amplify-redirected-from-hosted-ui",f="amplify-authenticator-authState",T="Phone number can not be empty",O="No Auth module found, please ensure @aws-amplify/auth is imported",S="No Storage module found, please ensure @aws-amplify/storage is imported",C="No Interactions module found, please ensure @aws-amplify/interactions is imported",I="SETUP_TOTP",R="User has not set up software token mfa",P="User has not verified software token mfa",N="SUCCESS",h="auth",m="UI Auth",D="ToastAuthError",y="AuthStateChange"},692:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r,o,E=t(50);!function(e){e.BACK_TO_SIGN_IN="Back to Sign In",e.CHANGE_PASSWORD_ACTION="Change",e.CHANGE_PASSWORD="Change Password",e.CODE_LABEL="Verification code",e.CODE_PLACEHOLDER="Enter code",e.CONFIRM_SIGN_UP_CODE_LABEL="Confirmation Code",e.CONFIRM_SIGN_UP_CODE_PLACEHOLDER="Enter your code",e.CONFIRM_SIGN_UP_HEADER_TEXT="Confirm Sign up",e.CONFIRM_SIGN_UP_LOST_CODE="Lost your code?",e.CONFIRM_SIGN_UP_RESEND_CODE="Resend Code",e.CONFIRM_SIGN_UP_SUBMIT_BUTTON_TEXT="Confirm",e.CONFIRM_SMS_CODE="Confirm SMS Code",e.CONFIRM_TOTP_CODE="Confirm TOTP Code",e.CONFIRM="Confirm",e.CREATE_ACCOUNT_TEXT="Create account",e.EMAIL_LABEL="Email Address *",e.EMAIL_PLACEHOLDER="Enter your email address",e.FORGOT_PASSWORD_TEXT="Forgot your password?",e.LESS_THAN_TWO_MFA_VALUES_MESSAGE="Less than two MFA types available",e.NEW_PASSWORD_LABEL="New password",e.NEW_PASSWORD_PLACEHOLDER="Enter your new password",e.NO_ACCOUNT_TEXT="No account?",e.USERNAME_REMOVE_WHITESPACE="Username cannot contain whitespace",e.PASSWORD_REMOVE_WHITESPACE="Password cannot start or end with whitespace",e.PASSWORD_LABEL="Password *",e.PASSWORD_PLACEHOLDER="Enter your password",e.PHONE_LABEL="Phone Number *",e.PHONE_PLACEHOLDER="(555) 555-1212",e.QR_CODE_ALT="qrcode",e.RESET_PASSWORD_TEXT="Reset password",e.RESET_YOUR_PASSWORD="Reset your password",e.SELECT_MFA_TYPE_HEADER_TEXT="Select MFA Type",e.SELECT_MFA_TYPE_SUBMIT_BUTTON_TEXT="Verify",e.SEND_CODE="Send Code",e.SUBMIT="Submit",e.SETUP_TOTP_REQUIRED="TOTP needs to be configured",e.SIGN_IN_ACTION="Sign In",e.SIGN_IN_HEADER_TEXT="Sign in to your account",e.SIGN_IN_TEXT="Sign in",e.SIGN_IN_WITH_AMAZON="Sign in with Amazon",e.SIGN_IN_WITH_AUTH0="Sign in with Auth0",e.SIGN_IN_WITH_AWS="Sign in with AWS",e.SIGN_IN_WITH_FACEBOOK="Sign in with Facebook",e.SIGN_IN_WITH_GOOGLE="Sign in with Google",e.SIGN_OUT="Sign Out",e.SIGN_UP_EMAIL_PLACEHOLDER="Email",e.SIGN_UP_HAVE_ACCOUNT_TEXT="Have an account?",e.SIGN_UP_HEADER_TEXT="Create a new account",e.SIGN_UP_PASSWORD_PLACEHOLDER="Password",e.SIGN_UP_SUBMIT_BUTTON_TEXT="Create Account",e.SIGN_UP_USERNAME_PLACEHOLDER="Username",e.SUCCESS_MFA_TYPE="Success! Your MFA Type is now:",e.TOTP_HEADER_TEXT="Scan then enter verification code",e.TOTP_LABEL="Enter Security Code:",e.TOTP_ISSUER="AWSCognito",e.TOTP_SETUP_FAILURE="TOTP Setup has failed",e.TOTP_SUBMIT_BUTTON_TEXT="Verify Security Token",e.TOTP_SUCCESS_MESSAGE="Setup TOTP successfully!",e.UNABLE_TO_SETUP_MFA_AT_THIS_TIME="Failed! Unable to configure MFA at this time",e.USERNAME_LABEL="Username *",e.USERNAME_PLACEHOLDER="Enter your username",e.VERIFY_CONTACT_EMAIL_LABEL="Email",e.VERIFY_CONTACT_HEADER_TEXT="Account recovery requires verified contact information",e.VERIFY_CONTACT_PHONE_LABEL="Phone Number",e.VERIFY_CONTACT_SUBMIT_LABEL="Submit",e.VERIFY_CONTACT_VERIFY_LABEL="Verify",e.ADDRESS_LABEL="Address",e.ADDRESS_PLACEHOLDER="Enter your address",e.NICKNAME_LABEL="Nickname",e.NICKNAME_PLACEHOLDER="Enter your nickname",e.BIRTHDATE_LABEL="Birthday",e.BIRTHDATE_PLACEHOLDER="Enter your birthday",e.PICTURE_LABEL="Picture URL",e.PICTURE_PLACEHOLDER="Enter your picture URL",e.FAMILY_NAME_LABEL="Family Name",e.FAMILY_NAME_PLACEHOLDER="Enter your family name",e.PREFERRED_USERNAME_LABEL="Preferred Username",e.PREFERRED_USERNAME_PLACEHOLDER="Enter your preferred username",e.GENDER_LABEL="Gender",e.GENDER_PLACEHOLDER="Enter your gender",e.PROFILE_LABEL="Profile URL",e.PROFILE_PLACEHOLDER="Enter your profile URL",e.GIVEN_NAME_LABEL="First Name",e.GIVEN_NAME_PLACEHOLDER="Enter your first name",e.ZONEINFO_LABEL="Time zone",e.ZONEINFO_PLACEHOLDER="Enter your time zone",e.LOCALE_LABEL="Locale",e.LOCALE_PLACEHOLDER="Enter your locale",e.UPDATED_AT_LABEL="Updated At",e.UPDATED_AT_PLACEHOLDER="Enter the time the information was last updated",e.MIDDLE_NAME_LABEL="Middle Name",e.MIDDLE_NAME_PLACEHOLDER="Enter your middle name",e.WEBSITE_LABEL="Website",e.WEBSITE_PLACEHOLDER="Enter your website",e.NAME_LABEL="Full Name",e.NAME_PLACEHOLDER="Enter your full name",e.PHOTO_PICKER_TITLE="Picker Title",e.PHOTO_PICKER_HINT="Ancillary text or content may occupy this space here",e.PHOTO_PICKER_PLACEHOLDER_HINT="Placeholder hint",e.PHOTO_PICKER_BUTTON_TEXT="Button",e.IMAGE_PICKER_TITLE="Add Profile Photo",e.IMAGE_PICKER_HINT="Preview the image before upload",e.IMAGE_PICKER_PLACEHOLDER_HINT="Tap to image select",e.IMAGE_PICKER_BUTTON_TEXT="Upload",e.PICKER_TEXT="Pick a file",e.TEXT_FALLBACK_CONTENT="Fallback Content",e.CONFIRM_SIGN_UP_FAILED="Confirm Sign Up Failed",e.SIGN_UP_FAILED="Sign Up Failed"}(r||(r={})),function(e){e.CHATBOT_TITLE="ChatBot Lex",e.TEXT_INPUT_PLACEHOLDER="Write a message",e.VOICE_INPUT_PLACEHOLDER="Click mic to speak",e.CHAT_DISABLED_ERROR="Error: Either voice or text must be enabled for the chatbot",e.NO_BOT_NAME_ERROR="Error: Bot name must be provided to ChatBot"}(o||(o={}));var c=Object.assign(Object.assign(Object.assign({},r),E.a),o)},694:function(e,n,t){"use strict";var r,o,E,c,_;t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return E})),t.d(n,"c",(function(){return o})),t.d(n,"d",(function(){return _})),t.d(n,"e",(function(){return c})),function(e){e.SignUp="signup",e.SignOut="signout",e.SignIn="signin",e.Loading="loading",e.SignedOut="signedout",e.SignedIn="signedin",e.SigningUp="signingup",e.ConfirmSignUp="confirmSignUp",e.confirmingSignUpCustomFlow="confirmsignupcustomflow",e.ConfirmSignIn="confirmSignIn",e.confirmingSignInCustomFlow="confirmingsignincustomflow",e.VerifyingAttributes="verifyingattributes",e.ForgotPassword="forgotpassword",e.ResetPassword="resettingpassword",e.SettingMFA="settingMFA",e.TOTPSetup="TOTPSetup",e.CustomConfirmSignIn="customConfirmSignIn",e.VerifyContact="verifyContact"}(r||(r={})),function(e){e.TOTP="TOTP",e.SMS="SMS",e.NOMFA="NOMFA"}(o||(o={})),function(e){e.SoftwareTokenMFA="SOFTWARE_TOKEN_MFA",e.SMSMFA="SMS_MFA",e.NewPasswordRequired="NEW_PASSWORD_REQUIRED",e.MFASetup="MFA_SETUP",e.CustomChallenge="CUSTOM_CHALLENGE"}(E||(E={})),function(e){e.Password="password"}(c||(c={})),function(e){e.username="username",e.email="email",e.phone_number="phone_number"}(_||(_={}))},697:function(e,n,t){"use strict";t.d(n,"a",(function(){return O})),t.d(n,"b",(function(){return C})),t.d(n,"c",(function(){return I})),t.d(n,"d",(function(){return S})),t.d(n,"e",(function(){return T})),t.d(n,"f",(function(){return h})),t.d(n,"g",(function(){return P})),t.d(n,"h",(function(){return R})),t.d(n,"i",(function(){return N}));var r=t(90),o=t(512),E=t(619),c=t(694),_=t(245),l=t(692),A=t(691),L=function(e,n,t,r){return new(t||(t=Promise))((function(o,E){function c(e){try{l(r.next(e))}catch(e){E(e)}}function _(e){try{l(r.throw(e))}catch(e){E(e)}}function l(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(c,_)}l((r=r.apply(e,n||[])).next())}))},d=function(e,body){var n,t,r,g,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return g={next:E(0),throw:E(1),return:E(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function E(E){return function(c){return function(E){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,t&&(r=2&E[0]?t.return:E[0]?t.throw||((r=t.return)&&r.call(t),0):t.next)&&!(r=r.call(t,E[1])).done)return r;switch(t=0,r&&(E=[2&E[0],r.value]),E[0]){case 0:case 1:r=E;break;case 4:return o.label++,{value:E[1],done:!1};case 5:o.label++,t=E[1],E=[0];continue;case 7:E=o.ops.pop(),o.trys.pop();continue;default:if(!(r=o.trys,(r=r.length>0&&r[r.length-1])||6!==E[0]&&2!==E[0])){o=0;continue}if(3===E[0]&&(!r||E[1]>r[0]&&E[1]<r[3])){o.label=E[1];break}if(6===E[0]&&o.label<r[1]){o.label=r[1],r=E;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(E);break}r[2]&&o.ops.pop(),o.trys.pop();continue}E=body.call(e,o)}catch(e){E=[6,e],t=0}finally{n=r=0}if(5&E[0])throw E[1];return{value:E[0]?E[1]:void 0,done:!0}}([E,c])}}},f=new r.a("helpers"),T=function(e){return!!e.shadowRoot&&!!e.attachShadow},O=function(e){o.a.dispatch(A.i,{event:A.h,message:E.a.get(e.message)})},S=function(e,data){o.a.dispatch(A.i,{event:A.j,message:e,data:data})},C=function(e){if(!e.phoneNumberValue)throw new Error(A.e);var n=e.phoneNumberValue.replace(/[-()\s]/g,"");return""+e.countryDialCodeValue+n},I=function(e){if(!(e in c.d))throw new Error("Invalid username Alias - "+e+". Instead use "+Object.values(c.d))},R=function(e){var n=function(data){return L(void 0,void 0,void 0,(function(){var n,t;return d(this,(function(r){switch(r.label){case 0:switch(n=data.payload,n.event){case A.j:return[3,1]}return[3,8];case 1:if(!n.message)return[3,7];if(n.message!==c.a.SignedIn)return[3,6];r.label=2;case 2:return r.trys.push([2,4,,5]),[4,_.a.currentAuthenticatedUser()];case 3:return t=r.sent(),e(n.message,t),[3,5];case 4:return r.sent(),f.error("User is not authenticated"),[3,5];case 5:return[3,7];case 6:e(n.message,n.data),r.label=7;case 7:return[3,8];case 8:return[2]}}))}))};return o.a.listen(A.i,n),function(){return o.a.remove(A.i,n)}},P=function(e){return!(null===e.hint||"string"==typeof e.hint)},N={address:{label:E.a.get(l.a.ADDRESS_LABEL),placeholder:E.a.get(l.a.ADDRESS_PLACEHOLDER)},nickname:{label:E.a.get(l.a.NICKNAME_LABEL),placeholder:E.a.get(l.a.NICKNAME_PLACEHOLDER)},birthdate:{label:E.a.get(l.a.BIRTHDATE_LABEL),placeholder:E.a.get(l.a.BIRTHDATE_PLACEHOLDER)},phone_number:{label:E.a.get(l.a.PHONE_LABEL),placeholder:E.a.get(l.a.PHONE_PLACEHOLDER)},email:{lable:E.a.get(l.a.EMAIL_LABEL),placeholder:E.a.get(l.a.EMAIL_PLACEHOLDER)},picture:{label:E.a.get(l.a.PICTURE_LABEL),placeholder:E.a.get(l.a.PICTURE_PLACEHOLDER)},family_name:{label:E.a.get(l.a.FAMILY_NAME_LABEL),placeholder:E.a.get(l.a.FAMILY_NAME_PLACEHOLDER)},preferred_username:{label:E.a.get(l.a.PREFERRED_USERNAME_LABEL),placeholder:E.a.get(l.a.PREFERRED_USERNAME_PLACEHOLDER)},gender:{label:E.a.get(l.a.GENDER_LABEL),placeholder:E.a.get(l.a.GENDER_PLACEHOLDER)},profile:{label:E.a.get(l.a.PROFILE_LABEL),placeholder:E.a.get(l.a.PROFILE_PLACEHOLDER)},given_name:{label:E.a.get(l.a.GIVEN_NAME_LABEL),placeholder:E.a.get(l.a.GIVEN_NAME_LABEL)},zoneinfo:{label:E.a.get(l.a.ZONEINFO_LABEL),placeholder:E.a.get(l.a.ZONEINFO_PLACEHOLDER)},locale:{label:E.a.get(l.a.LOCALE_LABEL),placeholder:E.a.get(l.a.LOCALE_PLACEHOLDER)},updated_at:{label:E.a.get(l.a.UPDATED_AT_LABEL),placeholder:E.a.get(l.a.UPDATED_AT_PLACEHOLDER)},middle_name:{label:E.a.get(l.a.MIDDLE_NAME_LABEL),placeholder:E.a.get(l.a.MIDDLE_NAME_PLACEHOLDER)},website:{label:E.a.get(l.a.WEBSITE_LABEL),placeholder:E.a.get(l.a.WEBSITE_PLACEHOLDER)},name:{label:E.a.get(l.a.NAME_LABEL),placeholder:E.a.get(l.a.NAME_PLACEHOLDER)}};function h(e,n){var t=e.target.name,r=e.target.value;t===A.b&&(n.countryDialCodeValue=r),t===A.k&&(n.phoneNumberValue=r)}}}]);