(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{665:function(t,e,n){"use strict";n.r(e),n.d(e,"amplify_authenticator",(function(){return A}));var r,o=n(25),c=n(96),h=n(550),l=n(886),f=n(47),d=n(153),m=(n(874),n(737)),y=n(896),v=n(978),S=function(t,e,n,r){return new(n||(n=Promise))((function(o,c){function h(t){try{f(r.next(t))}catch(t){c(t)}}function l(t){try{f(r.throw(t))}catch(t){c(t)}}function f(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(h,l)}f((r=r.apply(t,e||[])).next())}))},w=function(t,body){var e,n,r,g,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return g={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function c(c){return function(h){return function(c){if(e)throw new TypeError("Generator is already executing.");for(;o;)try{if(e=1,n&&(r=2&c[0]?n.return:c[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,c[1])).done)return r;switch(n=0,r&&(c=[2&c[0],r.value]),c[0]){case 0:case 1:r=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,n=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(!(r=o.trys,(r=r.length>0&&r[r.length-1])||6!==c[0]&&2!==c[0])){o=0;continue}if(3===c[0]&&(!r||c[1]>r[0]&&c[1]<r[3])){o.label=c[1];break}if(6===c[0]&&o.label<r[1]){o.label=r[1],r=c;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(c);break}r[2]&&o.ops.pop(),o.trys.pop();continue}c=body.call(t,o)}catch(t){c=[6,t],n=0}finally{e=r=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,h])}}},O=((r={})[l.a.SignIn]="sign-in",r[l.a.ConfirmSignIn]="confirm-sign-in",r[l.a.SignUp]="sign-up",r[l.a.ConfirmSignUp]="confirm-sign-up",r[l.a.ForgotPassword]="forgot-password",r[l.a.ResetPassword]="require-new-password",r[l.a.VerifyContact]="verify-contact",r[l.a.TOTPSetup]="totp-setup",r[l.a.Loading]="loading",r),j=new c.a("Authenticator"),A=function(){function t(t){var e=this;Object(o.k)(this,t),this.initialAuthState=l.a.SignIn,this.handleAuthStateChange=function(){},this.authState=l.a.Loading,this.toastMessage="",this.handleExternalAuthEvent=function(t){var n=t.payload;switch(n.event){case"cognitoHostedUI":case"signIn":Object(v.a)(n.data,y.d);break;case"cognitoHostedUI_failure":case"parsingUrl_failure":case"signOut":case"customGreetingSignOut":return Object(y.d)(e.initialAuthState)}},this.handleToastEvent=function(t){var n=t.payload;switch(n.event){case m.h:n.message&&(e.toastMessage=n.message)}}}return t.prototype.componentWillLoad=function(){return S(this,void 0,void 0,(function(){var t,e=this;return w(this,(function(n){switch(n.label){case 0:return Object(y.h)((function(t,n){e.onAuthStateChange(t,n),e.toastMessage=""})),h.a.listen(m.i,this.handleToastEvent),h.a.listen(m.a,this.handleExternalAuthEvent),Object(f.j)("amplify-authenticator"),t=localStorage.getItem(m.f),localStorage.removeItem(m.f),"true"===t?[3,2]:[4,this.checkUser()];case 1:n.sent(),n.label=2;case 2:return[2]}}))}))},t.prototype.checkUser=function(){return S(this,void 0,void 0,(function(){var t=this;return w(this,(function(e){if(!d.a||"function"!=typeof d.a.currentAuthenticatedUser)throw new Error(m.d);return[2,d.a.currentAuthenticatedUser().then((function(t){Object(y.d)(l.a.SignedIn,t)})).catch((function(){return S(t,void 0,void 0,(function(){var t,e;return w(this,(function(n){switch(n.label){case 0:t=null;try{t=localStorage.getItem(m.l)}catch(t){j.debug("Failed to get the auth state from local storage",t)}n.label=1;case 1:return n.trys.push([1,4,,5]),t!==l.a.SignedIn?[3,3]:[4,d.a.signOut()];case 2:n.sent(),n.label=3;case 3:return Object(y.d)(this.initialAuthState),[3,5];case 4:return e=n.sent(),j.debug("Failed to sign out",e),[3,5];case 5:return[2]}}))}))}))]}))}))},t.prototype.onAuthStateChange=function(t,data){return S(this,void 0,void 0,(function(){return w(this,(function(e){return void 0===t?[2,j.error("nextAuthState cannot be undefined")]:(j.info("Inside onAuthStateChange Method current authState:",this.authState),t===l.a.SignedOut?this.authState=this.initialAuthState:this.authState=t,this.authData=data,this.authData&&j.log("Auth Data was set:",this.authData),this.authState===t&&(this.handleAuthStateChange(this.authState,this.authData),j.info("authState has been updated to "+this.authState)),[2])}))}))},t.prototype.getAuthComponent=function(t){switch(t){case l.a.SignIn:return Object(o.i)("amplify-sign-in",{federated:this.federated,usernameAlias:this.usernameAlias});case l.a.ConfirmSignIn:return Object(o.i)("amplify-confirm-sign-in",{user:this.authData});case l.a.SignUp:return Object(o.i)("amplify-sign-up",{usernameAlias:this.usernameAlias});case l.a.ConfirmSignUp:return Object(o.i)("amplify-confirm-sign-up",{user:this.authData,usernameAlias:this.usernameAlias});case l.a.ForgotPassword:return Object(o.i)("amplify-forgot-password",{usernameAlias:this.usernameAlias});case l.a.ResetPassword:return Object(o.i)("amplify-require-new-password",{user:this.authData});case l.a.VerifyContact:return Object(o.i)("amplify-verify-contact",{user:this.authData});case l.a.TOTPSetup:return Object(o.i)("amplify-totp-setup",{user:this.authData});case l.a.Loading:return Object(o.i)("div",null,"Loading...");default:throw new Error("Unhandled auth state: "+t)}},t.prototype.getSlotWithAuthComponent=function(t){var e=this.getAuthComponent(t),n=O[t],r=null===this.el.querySelector('[slot="'+n+'"]');return Object(o.i)("slot",{name:n},r&&e)},t.prototype.componentWillUnload=function(){return h.a.remove(m.a,this.handleExternalAuthEvent),h.a.remove(m.i,this.handleToastEvent),y.h},t.prototype.render=function(){var t=this;return Object(o.i)(o.b,null,this.toastMessage?Object(o.i)("amplify-toast",{message:this.toastMessage,handleClose:function(){t.toastMessage=""},"data-test":"authenticator-error"}):null,this.authState===l.a.SignedIn?[Object(o.i)("slot",{name:"greetings"}),Object(o.i)("slot",null)]:Object(o.i)("div",{class:"auth-container"},this.getSlotWithAuthComponent(this.authState)))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(o.h)(this)},enumerable:!1,configurable:!0}),t}();A.style=":host{--background-color:var(--amplify-background-color);--width:28.75rem;--min-width:20rem;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;--box-shadow:1px 1px 4px 0 rgba(0, 0, 0, 0.15);--border-radius:6px;--padding:35px 40px;--margin-bottom:20px;--container-height:100vh;--container-display:flex;--container-justify:center;--container-align:center}.auth-container{display:var(--container-display);-ms-flex-pack:var(--container-justify);justify-content:var(--container-justify);-ms-flex-align:var(--container-align);align-items:var(--container-align);min-height:var(--container-height)}"}}]);