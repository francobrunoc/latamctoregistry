(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{671:function(n,t,e){"use strict";e.r(t),e.d(t,"amplify_federated_sign_in",(function(){return h}));var o=e(25),r=e(95),d=e(884),f=e(153),c=e(736),m=new r.a("amplify-federated-sign-in"),h=function(){function n(n){Object(o.k)(this,n),this.authState=d.a.SignIn,this.federated={}}return n.prototype.componentWillLoad=function(){if(!f.a||"function"!=typeof f.a.configure)throw new Error(c.d);var n=f.a.configure().oauth,t=void 0===n?{}:n;t.domain?this.federated.oauth_config=Object.assign(Object.assign({},this.federated.oauth_config),t):t.awsCognito&&(this.federated.oauth_config=Object.assign(Object.assign({},this.federated.oauth_config),t.awsCognito)),t.auth0&&(this.federated.auth0=Object.assign(Object.assign({},this.federated.auth0),t.auth0))},n.prototype.render=function(){return this.federated?Object.values(d.a).includes(this.authState)?(m.debug("federated Config is",this.federated),Object(o.i)("amplify-form-section",{"data-test":"federated-sign-in-section"},Object(o.i)("amplify-section",{"data-test":"federated-sign-in-body-section"},Object(o.i)("amplify-federated-buttons",{authState:this.authState,"data-test":"federated-sign-in-buttons",federated:this.federated})))):null:(m.debug("federated prop is empty. show nothing"),m.debug("federated={google_client_id: , facebook_app_id: , amazon_client_id}"),null)},n}()},736:function(n,t,e){"use strict";e.d(t,"a",(function(){return P})),e.d(t,"b",(function(){return m})),e.d(t,"c",(function(){return r})),e.d(t,"d",(function(){return _})),e.d(t,"e",(function(){return O})),e.d(t,"f",(function(){return l})),e.d(t,"g",(function(){return A})),e.d(t,"h",(function(){return j})),e.d(t,"i",(function(){return U})),e.d(t,"j",(function(){return E})),e.d(t,"k",(function(){return f})),e.d(t,"l",(function(){return w})),e.d(t,"m",(function(){return C})),e.d(t,"n",(function(){return y})),e.d(t,"o",(function(){return T})),e.d(t,"p",(function(){return M})),e.d(t,"q",(function(){return h})),e.d(t,"r",(function(){return F})),e.d(t,"s",(function(){return S})),e.d(t,"t",(function(){return d})),e.d(t,"u",(function(){return c})),e.d(t,"v",(function(){return o}));var o="username",r="email",d="code",f="phone",c="password",m="country-dial-code-select",h="+1",S="amplify-auth-source",l="amplify-redirected-from-hosted-ui",w="amplify-authenticator-authState",O="Phone number can not be empty",_="No Auth module found, please ensure @aws-amplify/auth is imported",y="No Storage module found, please ensure @aws-amplify/storage is imported",C="No Interactions module found, please ensure @aws-amplify/interactions is imported",A="SETUP_TOTP",T="User has not set up software token mfa",M="User has not verified software token mfa",F="SUCCESS",P="auth",U="UI Auth",j="ToastAuthError",E="AuthStateChange"},884:function(n,t,e){"use strict";var o,r,d,f,c;e.d(t,"a",(function(){return o})),e.d(t,"b",(function(){return d})),e.d(t,"c",(function(){return r})),e.d(t,"d",(function(){return c})),e.d(t,"e",(function(){return f})),function(n){n.SignUp="signup",n.SignOut="signout",n.SignIn="signin",n.Loading="loading",n.SignedOut="signedout",n.SignedIn="signedin",n.SigningUp="signingup",n.ConfirmSignUp="confirmSignUp",n.confirmingSignUpCustomFlow="confirmsignupcustomflow",n.ConfirmSignIn="confirmSignIn",n.confirmingSignInCustomFlow="confirmingsignincustomflow",n.VerifyingAttributes="verifyingattributes",n.ForgotPassword="forgotpassword",n.ResetPassword="resettingpassword",n.SettingMFA="settingMFA",n.TOTPSetup="TOTPSetup",n.CustomConfirmSignIn="customConfirmSignIn",n.VerifyContact="verifyContact"}(o||(o={})),function(n){n.TOTP="TOTP",n.SMS="SMS",n.NOMFA="NOMFA"}(r||(r={})),function(n){n.SoftwareTokenMFA="SOFTWARE_TOKEN_MFA",n.SMSMFA="SMS_MFA",n.NewPasswordRequired="NEW_PASSWORD_REQUIRED",n.MFASetup="MFA_SETUP",n.CustomChallenge="CUSTOM_CHALLENGE"}(d||(d={})),function(n){n.Password="password"}(f||(f={})),function(n){n.username="username",n.email="email",n.phone_number="phone_number"}(c||(c={}))}}]);