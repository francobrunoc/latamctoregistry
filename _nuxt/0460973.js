(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{256:function(e,t,n){"use strict";var r=n(152);n(47);t.a=r.a},658:function(e,t,n){"use strict";n.d(t,"a",(function(){return _}));var r=n(96),o=new r.a("I18n"),c=function(){function e(e){this._options=null,this._lang=null,this._dict={},this._options=Object.assign({},e),this._lang=this._options.language,!this._lang&&"undefined"!=typeof window&&window&&window.navigator&&(this._lang=window.navigator.language),o.debug(this._lang)}return e.prototype.setLanguage=function(e){this._lang=e},e.prototype.get=function(e,t){if(void 0===t&&(t=void 0),!this._lang)return void 0!==t?t:e;var n=this._lang,r=this.getByLanguage(e,n);return r||(n.indexOf("-")>0&&(r=this.getByLanguage(e,n.split("-")[0])),r||(void 0!==t?t:e))},e.prototype.getByLanguage=function(e,t,n){if(void 0===n&&(n=null),!t)return n;var r=this._dict[t];return r?r[e]:n},e.prototype.putVocabulariesForLanguage=function(e,t){var n=this._dict[e];n||(n=this._dict[e]={}),Object.assign(n,t)},e.prototype.putVocabularies=function(e){var t=this;Object.keys(e).map((function(n){t.putVocabulariesForLanguage(n,e[n])}))},e}(),E=n(59),l=new r.a("I18n"),d=null,f=null,_=function(){function e(){}return e.configure=function(t){return l.debug("configure I18n"),t?(d=Object.assign({},d,t.I18n||t),e.createInstance(),d):d},e.getModuleName=function(){return"I18n"},e.createInstance=function(){l.debug("create I18n instance"),f||(f=new c(d))},e.setLanguage=function(t){return e.checkConfig(),f.setLanguage(t)},e.get=function(t,n){return e.checkConfig()?f.get(t,n):void 0===n?t:n},e.putVocabulariesForLanguage=function(t,n){return e.checkConfig(),f.putVocabulariesForLanguage(t,n)},e.putVocabularies=function(t){return e.checkConfig(),f.putVocabularies(t)},e.checkConfig=function(){return f||(f=new c(d)),!0},e}();E.a.register(_)},664:function(e,t,n){"use strict";n.r(t),n.d(t,"amplify_amazon_button",(function(){return S})),n.d(t,"amplify_auth0_button",(function(){return T})),n.d(t,"amplify_facebook_button",(function(){return m})),n.d(t,"amplify_google_button",(function(){return N})),n.d(t,"amplify_oauth_button",(function(){return R}));var r=n(25),o=n(96),c=n(658),E=n(887),l=n(152),d=n(875),f=n(738),_=n(896),h=function(e,t,n,r){return new(n||(n=Promise))((function(o,c){function E(e){try{d(r.next(e))}catch(e){c(e)}}function l(e){try{d(r.throw(e))}catch(e){c(e)}}function d(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(E,l)}d((r=r.apply(e,t||[])).next())}))},A=function(e,body){var t,n,r,g,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return g={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function c(c){return function(E){return function(c){if(t)throw new TypeError("Generator is already executing.");for(;o;)try{if(t=1,n&&(r=2&c[0]?n.return:c[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,c[1])).done)return r;switch(n=0,r&&(c=[2&c[0],r.value]),c[0]){case 0:case 1:r=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,n=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(!(r=o.trys,(r=r.length>0&&r[r.length-1])||6!==c[0]&&2!==c[0])){o=0;continue}if(3===c[0]&&(!r||c[1]>r[0]&&c[1]<r[3])){o.label=c[1];break}if(6===c[0]&&o.label<r[1]){o.label=r[1],r=c;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(c);break}r[2]&&o.ops.pop(),o.trys.pop();continue}c=body.call(e,o)}catch(e){c=[6,e],n=0}finally{t=r=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,E])}}},L=new o.a("amplify-amazon-button"),S=function(){function e(e){var t=this;Object(r.k)(this,e),this.handleAuthStateChange=_.d,this.federatedSignIn=function(e){var n=e.access_token,r=e.expires_in;if(n){if(!l.a||"function"!=typeof l.a.federatedSignIn||"function"!=typeof l.a.currentAuthenticatedUser)throw new Error(f.d);var o=1e3*r+(new Date).getTime();window.amazon.Login.retrieveProfile((function(e){return h(t,void 0,void 0,(function(){var t,r;return A(this,(function(c){switch(c.label){case 0:return e.success?(t={name:e.profile.Name,email:e.profile.PrimaryEmail},[4,l.a.federatedSignIn("amazon",{token:n,expires_at:o},t)]):[2,L.debug("Get user Info failed")];case 1:return c.sent(),[4,l.a.currentAuthenticatedUser()];case 2:return r=c.sent(),this.handleAuthStateChange(E.a.SignedIn,r),[2]}}))}))}))}}}return e.prototype.signInWithAmazon=function(e){var t=this;e.preventDefault(),window.amazon.Login.setClientId(this.clientId),window.amazon.Login.authorize({scope:"profile"},(function(e){if(e.error)return L.debug("Failed to login with amazon: "+e.error);try{window.localStorage.setItem(f.s,JSON.stringify({provider:"amazon"}))}catch(e){L.debug("Failed to cache auth source into localStorage",e)}t.federatedSignIn(e)}))},e.prototype.render=function(){var e=this;return Object(r.i)("amplify-sign-in-button",{onClick:function(t){return e.signInWithAmazon(t)},provider:"amazon"},Object(r.i)("script",{src:"https://assets.loginwithamazon.com/sdk/na/login1.js"}),c.a.get(d.a.SIGN_IN_WITH_AMAZON))},e}(),I=new o.a("amplify-auth0-button"),T=function(){function e(e){var t=this;Object(r.k)(this,e),this.handleAuthStateChange=_.d,this.handleLoad=function(){var e=l.a.configure().oauth,n=void 0===e?{}:e,r=t.config,o=void 0===r?n.auth0:r;o?(I.debug("auth0 configuration",o),t._auth0||(t._auth0=new window.auth0.WebAuth(o)),t._auth0.parseHash((function(e,n){if(e)I.debug("Failed to parse the url for Auth0",e);else if(n){var r={provider:"auth0",opts:{returnTo:o.returnTo,clientID:o.clientID,federated:o.federated}};try{localStorage.setItem(f.s,JSON.stringify(r))}catch(e){I.debug("Failed to cache auth source into localStorage",e)}t._auth0.client.userInfo(n.accessToken,(function(e,r){return h(t,void 0,void 0,(function(){var t,c,d;return A(this,(function(f){switch(f.label){case 0:return t=void 0,c=void 0,e?I.debug("Failed to get the user info",e):(t=r.name,c=r.email),[4,l.a.federatedSignIn(o.domain,{token:n.idToken,expires_at:1e3*n.expiresIn+(new Date).getTime()},{name:t,email:c})];case 1:return f.sent(),[4,l.a.currentAuthenticatedUser()];case 2:return d=f.sent(),this.handleAuthStateChange(E.a.SignedIn,d),[2]}}))}))}))}else I.debug("Auth0 found no authResult in hash")}))):I.debug("Auth0 is not configured")}}return e.prototype.signInWithAuth0=function(e){if(e.preventDefault(),!this._auth0)throw new Error("the auth0 client is not configured");this._auth0.authorize()},e.prototype.render=function(){var e=this;return Object(r.i)("amplify-sign-in-button",{onClick:function(t){return e.signInWithAuth0(t)},provider:"auth0"},Object(r.i)("script",{onLoad:this.handleLoad,src:"https://cdn.auth0.com/js/auth0/9.11/auth0.min.js"}),c.a.get(d.a.SIGN_IN_WITH_AUTH0))},e}(),O=new o.a("amplify-facebook-button"),m=function(){function e(e){var t=this;Object(r.k)(this,e),this.handleAuthStateChange=_.d,this.federatedSignIn=function(e){var n=e.accessToken,r=e.expiresIn;if(n){if(!l.a||"function"!=typeof l.a.federatedSignIn||"function"!=typeof l.a.currentAuthenticatedUser)throw new Error(f.d);var o=1e3*r+(new Date).getTime();window.FB.api("/me",{fields:"name,email"},(function(e){return h(t,void 0,void 0,(function(){var t,r;return A(this,(function(c){switch(c.label){case 0:return t={name:e.name,email:e.email},[4,l.a.federatedSignIn("facebook",{token:n,expires_at:o},t)];case 1:return c.sent(),[4,l.a.currentAuthenticatedUser()];case 2:return r=c.sent(),this.handleAuthStateChange(E.a.SignedIn,r),[2]}}))}))}))}},this.getLoginStatus=function(){window.FB.getLoginStatus((function(e){try{window.localStorage.setItem(f.s,JSON.stringify({provider:"facebook"}))}catch(e){O.debug("Failed to cache auth source into localStorage",e)}if("connected"===e.status)return t.federatedSignIn(e.authResponse);t.login()}))},this.login=function(){window.FB.login((function(e){e&&e.authResponse&&t.federatedSignIn(e.authResponse)}),{scope:"public_profile,email"})}}return e.prototype.signInWithFacebook=function(e){e.preventDefault(),window.FB.init({appId:this.appId,cookie:!0,xfbml:!1,version:"v5.0"}),this.getLoginStatus()},e.prototype.render=function(){var e=this;return Object(r.i)("amplify-sign-in-button",{onClick:function(t){return e.signInWithFacebook(t)},provider:"facebook"},Object(r.i)("script",{async:!0,defer:!0,src:"https://connect.facebook.net/en_US/sdk.js"}),c.a.get(d.a.SIGN_IN_WITH_FACEBOOK))},e}(),C=new o.a("amplify-google-button"),N=function(){function e(e){var t=this;Object(r.k)(this,e),this.handleAuthStateChange=_.d,this.handleError=function(e){console.error(e)},this.handleLoad=function(){window.gapi.load("auth2")},this.handleUser=function(e){return h(t,void 0,void 0,(function(){var t,n,r,o,c;return A(this,(function(d){switch(d.label){case 0:if(!l.a||"function"!=typeof l.a.federatedSignIn||"function"!=typeof l.a.currentAuthenticatedUser)throw new Error(f.d);try{window.localStorage.setItem(f.s,JSON.stringify({provider:"google"}))}catch(e){C.debug("Failed to cache auth source into localStorage",e)}return t=e.getAuthResponse(),n=t.id_token,r=t.expires_at,o=e.getBasicProfile(),[4,l.a.federatedSignIn("google",{token:n,expires_at:r},{email:o.getEmail(),name:o.getName(),picture:o.getImageUrl()})];case 1:return d.sent(),[4,l.a.currentAuthenticatedUser()];case 2:c=d.sent();try{this.handleAuthStateChange(E.a.SignedIn,c)}catch(e){this.handleError(e)}return[2]}}))}))}}return e.prototype.getAuthInstance=function(){return window.gapi&&window.gapi.auth2?window.gapi.auth2.getAuthInstance()||window.gapi.auth2.init({client_id:this.clientId,cookiepolicy:"single_host_origin",scope:"profile email openid"}):null},e.prototype.signInWithGoogle=function(e){e.preventDefault(),this.getAuthInstance().signIn().then(this.handleUser).catch(this.handleError)},e.prototype.render=function(){var e=this;return Object(r.i)("amplify-sign-in-button",{onClick:function(t){return e.signInWithGoogle(t)},provider:"google"},Object(r.i)("script",{onLoad:this.handleLoad,src:"https://apis.google.com/js/api:client.js"}),c.a.get(d.a.SIGN_IN_WITH_GOOGLE))},e}(),R=function(){function e(e){Object(r.k)(this,e),this.config={}}return e.prototype.signInWithOAuth=function(e){e.preventDefault(),l.a.federatedSignIn()},e.prototype.render=function(){var e=this;return Object(r.i)("amplify-sign-in-button",{onClick:function(t){return e.signInWithOAuth(t)},provider:"oauth"},this.config.label||c.a.get(d.a.SIGN_IN_WITH_AWS))},e}()},738:function(e,t,n){"use strict";n.d(t,"a",(function(){return R})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return S})),n.d(t,"e",(function(){return L})),n.d(t,"f",(function(){return h})),n.d(t,"g",(function(){return O})),n.d(t,"h",(function(){return w})),n.d(t,"i",(function(){return P})),n.d(t,"j",(function(){return y})),n.d(t,"k",(function(){return E})),n.d(t,"l",(function(){return A})),n.d(t,"m",(function(){return T})),n.d(t,"n",(function(){return I})),n.d(t,"o",(function(){return m})),n.d(t,"p",(function(){return C})),n.d(t,"q",(function(){return f})),n.d(t,"r",(function(){return N})),n.d(t,"s",(function(){return _})),n.d(t,"t",(function(){return c})),n.d(t,"u",(function(){return l})),n.d(t,"v",(function(){return r}));var r="username",o="email",c="code",E="phone",l="password",d="country-dial-code-select",f="+1",_="amplify-auth-source",h="amplify-redirected-from-hosted-ui",A="amplify-authenticator-authState",L="Phone number can not be empty",S="No Auth module found, please ensure @aws-amplify/auth is imported",I="No Storage module found, please ensure @aws-amplify/storage is imported",T="No Interactions module found, please ensure @aws-amplify/interactions is imported",O="SETUP_TOTP",m="User has not set up software token mfa",C="User has not verified software token mfa",N="SUCCESS",R="auth",P="UI Auth",w="ToastAuthError",y="AuthStateChange"},875:function(e,t,n){"use strict";n.d(t,"a",(function(){return E}));var r,o,c=n(52);!function(e){e.BACK_TO_SIGN_IN="Back to Sign In",e.CHANGE_PASSWORD_ACTION="Change",e.CHANGE_PASSWORD="Change Password",e.CODE_LABEL="Verification code",e.CODE_PLACEHOLDER="Enter code",e.CONFIRM_SIGN_UP_CODE_LABEL="Confirmation Code",e.CONFIRM_SIGN_UP_CODE_PLACEHOLDER="Enter your code",e.CONFIRM_SIGN_UP_HEADER_TEXT="Confirm Sign up",e.CONFIRM_SIGN_UP_LOST_CODE="Lost your code?",e.CONFIRM_SIGN_UP_RESEND_CODE="Resend Code",e.CONFIRM_SIGN_UP_SUBMIT_BUTTON_TEXT="Confirm",e.CONFIRM_SMS_CODE="Confirm SMS Code",e.CONFIRM_TOTP_CODE="Confirm TOTP Code",e.CONFIRM="Confirm",e.CREATE_ACCOUNT_TEXT="Create account",e.EMAIL_LABEL="Email Address *",e.EMAIL_PLACEHOLDER="Enter your email address",e.FORGOT_PASSWORD_TEXT="Forgot your password?",e.LESS_THAN_TWO_MFA_VALUES_MESSAGE="Less than two MFA types available",e.NEW_PASSWORD_LABEL="New password",e.NEW_PASSWORD_PLACEHOLDER="Enter your new password",e.NO_ACCOUNT_TEXT="No account?",e.USERNAME_REMOVE_WHITESPACE="Username cannot contain whitespace",e.PASSWORD_REMOVE_WHITESPACE="Password cannot start or end with whitespace",e.PASSWORD_LABEL="Password *",e.PASSWORD_PLACEHOLDER="Enter your password",e.PHONE_LABEL="Phone Number *",e.PHONE_PLACEHOLDER="(555) 555-1212",e.QR_CODE_ALT="qrcode",e.RESET_PASSWORD_TEXT="Reset password",e.RESET_YOUR_PASSWORD="Reset your password",e.SELECT_MFA_TYPE_HEADER_TEXT="Select MFA Type",e.SELECT_MFA_TYPE_SUBMIT_BUTTON_TEXT="Verify",e.SEND_CODE="Send Code",e.SUBMIT="Submit",e.SETUP_TOTP_REQUIRED="TOTP needs to be configured",e.SIGN_IN_ACTION="Sign In",e.SIGN_IN_HEADER_TEXT="Sign in to your account",e.SIGN_IN_TEXT="Sign in",e.SIGN_IN_WITH_AMAZON="Sign in with Amazon",e.SIGN_IN_WITH_AUTH0="Sign in with Auth0",e.SIGN_IN_WITH_AWS="Sign in with AWS",e.SIGN_IN_WITH_FACEBOOK="Sign in with Facebook",e.SIGN_IN_WITH_GOOGLE="Sign in with Google",e.SIGN_OUT="Sign Out",e.SIGN_UP_EMAIL_PLACEHOLDER="Email",e.SIGN_UP_HAVE_ACCOUNT_TEXT="Have an account?",e.SIGN_UP_HEADER_TEXT="Create a new account",e.SIGN_UP_PASSWORD_PLACEHOLDER="Password",e.SIGN_UP_SUBMIT_BUTTON_TEXT="Create Account",e.SIGN_UP_USERNAME_PLACEHOLDER="Username",e.SUCCESS_MFA_TYPE="Success! Your MFA Type is now:",e.TOTP_HEADER_TEXT="Scan then enter verification code",e.TOTP_LABEL="Enter Security Code:",e.TOTP_ISSUER="AWSCognito",e.TOTP_SETUP_FAILURE="TOTP Setup has failed",e.TOTP_SUBMIT_BUTTON_TEXT="Verify Security Token",e.TOTP_SUCCESS_MESSAGE="Setup TOTP successfully!",e.UNABLE_TO_SETUP_MFA_AT_THIS_TIME="Failed! Unable to configure MFA at this time",e.USERNAME_LABEL="Username *",e.USERNAME_PLACEHOLDER="Enter your username",e.VERIFY_CONTACT_EMAIL_LABEL="Email",e.VERIFY_CONTACT_HEADER_TEXT="Account recovery requires verified contact information",e.VERIFY_CONTACT_PHONE_LABEL="Phone Number",e.VERIFY_CONTACT_SUBMIT_LABEL="Submit",e.VERIFY_CONTACT_VERIFY_LABEL="Verify",e.ADDRESS_LABEL="Address",e.ADDRESS_PLACEHOLDER="Enter your address",e.NICKNAME_LABEL="Nickname",e.NICKNAME_PLACEHOLDER="Enter your nickname",e.BIRTHDATE_LABEL="Birthday",e.BIRTHDATE_PLACEHOLDER="Enter your birthday",e.PICTURE_LABEL="Picture URL",e.PICTURE_PLACEHOLDER="Enter your picture URL",e.FAMILY_NAME_LABEL="Family Name",e.FAMILY_NAME_PLACEHOLDER="Enter your family name",e.PREFERRED_USERNAME_LABEL="Preferred Username",e.PREFERRED_USERNAME_PLACEHOLDER="Enter your preferred username",e.GENDER_LABEL="Gender",e.GENDER_PLACEHOLDER="Enter your gender",e.PROFILE_LABEL="Profile URL",e.PROFILE_PLACEHOLDER="Enter your profile URL",e.GIVEN_NAME_LABEL="First Name",e.GIVEN_NAME_PLACEHOLDER="Enter your first name",e.ZONEINFO_LABEL="Time zone",e.ZONEINFO_PLACEHOLDER="Enter your time zone",e.LOCALE_LABEL="Locale",e.LOCALE_PLACEHOLDER="Enter your locale",e.UPDATED_AT_LABEL="Updated At",e.UPDATED_AT_PLACEHOLDER="Enter the time the information was last updated",e.MIDDLE_NAME_LABEL="Middle Name",e.MIDDLE_NAME_PLACEHOLDER="Enter your middle name",e.WEBSITE_LABEL="Website",e.WEBSITE_PLACEHOLDER="Enter your website",e.NAME_LABEL="Full Name",e.NAME_PLACEHOLDER="Enter your full name",e.PHOTO_PICKER_TITLE="Picker Title",e.PHOTO_PICKER_HINT="Ancillary text or content may occupy this space here",e.PHOTO_PICKER_PLACEHOLDER_HINT="Placeholder hint",e.PHOTO_PICKER_BUTTON_TEXT="Button",e.IMAGE_PICKER_TITLE="Add Profile Photo",e.IMAGE_PICKER_HINT="Preview the image before upload",e.IMAGE_PICKER_PLACEHOLDER_HINT="Tap to image select",e.IMAGE_PICKER_BUTTON_TEXT="Upload",e.PICKER_TEXT="Pick a file",e.TEXT_FALLBACK_CONTENT="Fallback Content",e.CONFIRM_SIGN_UP_FAILED="Confirm Sign Up Failed",e.SIGN_UP_FAILED="Sign Up Failed"}(r||(r={})),function(e){e.CHATBOT_TITLE="ChatBot Lex",e.TEXT_INPUT_PLACEHOLDER="Write a message",e.VOICE_INPUT_PLACEHOLDER="Click mic to speak",e.CHAT_DISABLED_ERROR="Error: Either voice or text must be enabled for the chatbot",e.NO_BOT_NAME_ERROR="Error: Bot name must be provided to ChatBot"}(o||(o={}));var E=Object.assign(Object.assign(Object.assign({},r),c.a),o)},887:function(e,t,n){"use strict";var r,o,c,E,l;n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return l})),n.d(t,"e",(function(){return E})),function(e){e.SignUp="signup",e.SignOut="signout",e.SignIn="signin",e.Loading="loading",e.SignedOut="signedout",e.SignedIn="signedin",e.SigningUp="signingup",e.ConfirmSignUp="confirmSignUp",e.confirmingSignUpCustomFlow="confirmsignupcustomflow",e.ConfirmSignIn="confirmSignIn",e.confirmingSignInCustomFlow="confirmingsignincustomflow",e.VerifyingAttributes="verifyingattributes",e.ForgotPassword="forgotpassword",e.ResetPassword="resettingpassword",e.SettingMFA="settingMFA",e.TOTPSetup="TOTPSetup",e.CustomConfirmSignIn="customConfirmSignIn",e.VerifyContact="verifyContact"}(r||(r={})),function(e){e.TOTP="TOTP",e.SMS="SMS",e.NOMFA="NOMFA"}(o||(o={})),function(e){e.SoftwareTokenMFA="SOFTWARE_TOKEN_MFA",e.SMSMFA="SMS_MFA",e.NewPasswordRequired="NEW_PASSWORD_REQUIRED",e.MFASetup="MFA_SETUP",e.CustomChallenge="CUSTOM_CHALLENGE"}(c||(c={})),function(e){e.Password="password"}(E||(E={})),function(e){e.username="username",e.email="email",e.phone_number="phone_number"}(l||(l={}))},896:function(e,t,n){"use strict";n.d(t,"a",(function(){return S})),n.d(t,"b",(function(){return T})),n.d(t,"c",(function(){return O})),n.d(t,"d",(function(){return I})),n.d(t,"e",(function(){return L})),n.d(t,"f",(function(){return R})),n.d(t,"g",(function(){return C})),n.d(t,"h",(function(){return m})),n.d(t,"i",(function(){return N}));var r=n(96),o=n(552),c=n(658),E=n(887),l=n(256),d=n(875),f=n(738),_=function(e,t,n,r){return new(n||(n=Promise))((function(o,c){function E(e){try{d(r.next(e))}catch(e){c(e)}}function l(e){try{d(r.throw(e))}catch(e){c(e)}}function d(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(E,l)}d((r=r.apply(e,t||[])).next())}))},h=function(e,body){var t,n,r,g,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return g={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function c(c){return function(E){return function(c){if(t)throw new TypeError("Generator is already executing.");for(;o;)try{if(t=1,n&&(r=2&c[0]?n.return:c[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,c[1])).done)return r;switch(n=0,r&&(c=[2&c[0],r.value]),c[0]){case 0:case 1:r=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,n=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(!(r=o.trys,(r=r.length>0&&r[r.length-1])||6!==c[0]&&2!==c[0])){o=0;continue}if(3===c[0]&&(!r||c[1]>r[0]&&c[1]<r[3])){o.label=c[1];break}if(6===c[0]&&o.label<r[1]){o.label=r[1],r=c;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(c);break}r[2]&&o.ops.pop(),o.trys.pop();continue}c=body.call(e,o)}catch(e){c=[6,e],n=0}finally{t=r=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,E])}}},A=new r.a("helpers"),L=function(e){return!!e.shadowRoot&&!!e.attachShadow},S=function(e){o.a.dispatch(f.i,{event:f.h,message:c.a.get(e.message)})},I=function(e,data){o.a.dispatch(f.i,{event:f.j,message:e,data:data})},T=function(e){if(!e.phoneNumberValue)throw new Error(f.e);var t=e.phoneNumberValue.replace(/[-()\s]/g,"");return""+e.countryDialCodeValue+t},O=function(e){if(!(e in E.d))throw new Error("Invalid username Alias - "+e+". Instead use "+Object.values(E.d))},m=function(e){var t=function(data){return _(void 0,void 0,void 0,(function(){var t,n;return h(this,(function(r){switch(r.label){case 0:switch(t=data.payload,t.event){case f.j:return[3,1]}return[3,8];case 1:if(!t.message)return[3,7];if(t.message!==E.a.SignedIn)return[3,6];r.label=2;case 2:return r.trys.push([2,4,,5]),[4,l.a.currentAuthenticatedUser()];case 3:return n=r.sent(),e(t.message,n),[3,5];case 4:return r.sent(),A.error("User is not authenticated"),[3,5];case 5:return[3,7];case 6:e(t.message,t.data),r.label=7;case 7:return[3,8];case 8:return[2]}}))}))};return o.a.listen(f.i,t),function(){return o.a.remove(f.i,t)}},C=function(e){return!(null===e.hint||"string"==typeof e.hint)},N={address:{label:c.a.get(d.a.ADDRESS_LABEL),placeholder:c.a.get(d.a.ADDRESS_PLACEHOLDER)},nickname:{label:c.a.get(d.a.NICKNAME_LABEL),placeholder:c.a.get(d.a.NICKNAME_PLACEHOLDER)},birthdate:{label:c.a.get(d.a.BIRTHDATE_LABEL),placeholder:c.a.get(d.a.BIRTHDATE_PLACEHOLDER)},phone_number:{label:c.a.get(d.a.PHONE_LABEL),placeholder:c.a.get(d.a.PHONE_PLACEHOLDER)},email:{lable:c.a.get(d.a.EMAIL_LABEL),placeholder:c.a.get(d.a.EMAIL_PLACEHOLDER)},picture:{label:c.a.get(d.a.PICTURE_LABEL),placeholder:c.a.get(d.a.PICTURE_PLACEHOLDER)},family_name:{label:c.a.get(d.a.FAMILY_NAME_LABEL),placeholder:c.a.get(d.a.FAMILY_NAME_PLACEHOLDER)},preferred_username:{label:c.a.get(d.a.PREFERRED_USERNAME_LABEL),placeholder:c.a.get(d.a.PREFERRED_USERNAME_PLACEHOLDER)},gender:{label:c.a.get(d.a.GENDER_LABEL),placeholder:c.a.get(d.a.GENDER_PLACEHOLDER)},profile:{label:c.a.get(d.a.PROFILE_LABEL),placeholder:c.a.get(d.a.PROFILE_PLACEHOLDER)},given_name:{label:c.a.get(d.a.GIVEN_NAME_LABEL),placeholder:c.a.get(d.a.GIVEN_NAME_LABEL)},zoneinfo:{label:c.a.get(d.a.ZONEINFO_LABEL),placeholder:c.a.get(d.a.ZONEINFO_PLACEHOLDER)},locale:{label:c.a.get(d.a.LOCALE_LABEL),placeholder:c.a.get(d.a.LOCALE_PLACEHOLDER)},updated_at:{label:c.a.get(d.a.UPDATED_AT_LABEL),placeholder:c.a.get(d.a.UPDATED_AT_PLACEHOLDER)},middle_name:{label:c.a.get(d.a.MIDDLE_NAME_LABEL),placeholder:c.a.get(d.a.MIDDLE_NAME_PLACEHOLDER)},website:{label:c.a.get(d.a.WEBSITE_LABEL),placeholder:c.a.get(d.a.WEBSITE_PLACEHOLDER)},name:{label:c.a.get(d.a.NAME_LABEL),placeholder:c.a.get(d.a.NAME_PLACEHOLDER)}};function R(e,t){var n=e.target.name,r=e.target.value;n===f.b&&(t.countryDialCodeValue=r),n===f.k&&(t.phoneNumberValue=r)}}}]);