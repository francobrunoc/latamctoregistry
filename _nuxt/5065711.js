(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{457:function(t,e,n){"use strict";n.r(e),n.d(e,"amplify_s3_image",(function(){return y}));var r=n(19),o=n(81),c=n(509),f=(n(504),n(172),n(511)),l=function(t,e,n,r){return new(n||(n=Promise))((function(o,c){function f(t){try{d(r.next(t))}catch(t){c(t)}}function l(t){try{d(r.throw(t))}catch(t){c(t)}}function d(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(f,l)}d((r=r.apply(t,e||[])).next())}))},d=function(t,body){var e,n,r,g,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return g={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function c(c){return function(f){return function(c){if(e)throw new TypeError("Generator is already executing.");for(;o;)try{if(e=1,n&&(r=2&c[0]?n.return:c[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,c[1])).done)return r;switch(n=0,r&&(c=[2&c[0],r.value]),c[0]){case 0:case 1:r=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,n=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(!(r=o.trys,(r=r.length>0&&r[r.length-1])||6!==c[0]&&2!==c[0])){o=0;continue}if(3===c[0]&&(!r||c[1]>r[0]&&c[1]<r[3])){o.label=c[1];break}if(6===c[0]&&o.label<r[1]){o.label=r[1],r=c;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(c);break}r[2]&&o.ops.pop(),o.trys.pop();continue}c=body.call(t,o)}catch(t){c=[6,t],n=0}finally{e=r=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,f])}}},h=new o.a("S3Image"),y=function(){function t(t){Object(r.k)(this,t),this.contentType="binary/octet-stream",this.level=c.a.Public}return t.prototype.watchHandler=function(){return l(this,void 0,void 0,(function(){return d(this,(function(t){switch(t.label){case 0:return[4,this.load()];case 1:return t.sent(),[2]}}))}))},t.prototype.componentWillLoad=function(){return l(this,void 0,void 0,(function(){return d(this,(function(t){switch(t.label){case 0:return[4,this.load()];case 1:return t.sent(),[2]}}))}))},t.prototype.load=function(){return l(this,void 0,void 0,(function(){var t,e,path,body,n,r,track,o,c,l,y;return d(this,(function(d){switch(d.label){case 0:if(e=(t=this).imgKey,path=t.path,body=t.body,n=t.contentType,r=t.level,track=t.track,o=t.identityId,!e&&!path)return h.debug("empty imgKey and path"),[2];c=e||path,h.debug("loading "+c+"..."),d.label=1;case 1:return d.trys.push([1,5,,6]),body?[4,Object(f.e)(e,body,r,track,n,h)]:[3,3];case 2:d.sent(),d.label=3;case 3:return l=this,[4,Object(f.c)(c,r,track,o,h)];case 4:return l.src=d.sent(),[3,6];case 5:throw y=d.sent(),h.debug(y),new Error(y);case 6:return[2]}}))}))},t.prototype.render=function(){return Object(r.i)(r.b,null,this.src&&Object(r.i)("img",{src:this.src,onLoad:this.handleOnLoad,onError:this.handleOnError}))},Object.defineProperty(t,"watchers",{get:function(){return{body:["watchHandler"]}},enumerable:!1,configurable:!0}),t}();y.style=":host{height:inherit;width:inherit;--height:inherit;--width:inherit}img{height:var(--height);width:var(--width)}"},504:function(t,e,n){"use strict";n.d(e,"a",(function(){return T})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return k})),n.d(e,"e",(function(){return m})),n.d(e,"f",(function(){return w})),n.d(e,"g",(function(){return j})),n.d(e,"h",(function(){return U})),n.d(e,"i",(function(){return I})),n.d(e,"j",(function(){return A})),n.d(e,"k",(function(){return f})),n.d(e,"l",(function(){return v})),n.d(e,"m",(function(){return E})),n.d(e,"n",(function(){return S})),n.d(e,"o",(function(){return x})),n.d(e,"p",(function(){return P})),n.d(e,"q",(function(){return h})),n.d(e,"r",(function(){return O})),n.d(e,"s",(function(){return y})),n.d(e,"t",(function(){return c})),n.d(e,"u",(function(){return l})),n.d(e,"v",(function(){return r}));var r="username",o="email",c="code",f="phone",l="password",d="country-dial-code-select",h="+1",y="amplify-auth-source",w="amplify-redirected-from-hosted-ui",v="amplify-authenticator-authState",m="Phone number can not be empty",k="No Auth module found, please ensure @aws-amplify/auth is imported",S="No Storage module found, please ensure @aws-amplify/storage is imported",E="No Interactions module found, please ensure @aws-amplify/interactions is imported",j="SETUP_TOTP",x="User has not set up software token mfa",P="User has not verified software token mfa",O="SUCCESS",T="auth",I="UI Auth",U="ToastAuthError",A="AuthStateChange"},509:function(t,e,n){"use strict";var r;n.d(e,"a",(function(){return r})),function(t){t.Public="public",t.Private="private",t.Protected="protected"}(r||(r={}))},511:function(t,e,n){"use strict";n.d(e,"a",(function(){return y})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return h})),n.d(e,"d",(function(){return l})),n.d(e,"e",(function(){return w}));var r=n(504),o=n(172),c=function(t,e,n,r){return new(n||(n=Promise))((function(o,c){function f(t){try{d(r.next(t))}catch(t){c(t)}}function l(t){try{d(r.throw(t))}catch(t){c(t)}}function d(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(f,l)}d((r=r.apply(t,e||[])).next())}))},f=function(t,body){var e,n,r,g,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return g={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function c(c){return function(f){return function(c){if(e)throw new TypeError("Generator is already executing.");for(;o;)try{if(e=1,n&&(r=2&c[0]?n.return:c[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,c[1])).done)return r;switch(n=0,r&&(c=[2&c[0],r.value]),c[0]){case 0:case 1:r=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,n=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(!(r=o.trys,(r=r.length>0&&r[r.length-1])||6!==c[0]&&2!==c[0])){o=0;continue}if(3===c[0]&&(!r||c[1]>r[0]&&c[1]<r[3])){o.label=c[1];break}if(6===c[0]&&o.label<r[1]){o.label=r[1],r=c;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(c);break}r[2]&&o.ops.pop(),o.trys.pop();continue}c=body.call(t,o)}catch(t){c=[6,t],n=0}finally{e=r=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,f])}}},l=new Set(["apng","bmp","gif","ico","cur","jpg","jpeg","jfif","pjpeg","pjp","png","svg","tif","tiff","webp"]),d=function(t,e){var n=t.name,r=t.size,o=t.type,c=encodeURI(n);return e&&((c="string"==typeof e?e:"function"==typeof e?e({name:n,size:r,type:o}):encodeURI(JSON.stringify(e)))||(c="empty_key")),c.replace(/\s/g,"_")},h=function(t,e,track,n,l){return c(void 0,void 0,void 0,(function(){var c,d;return f(this,(function(f){switch(f.label){case 0:if(!o.a||"function"!=typeof o.a.get)throw new Error(r.n);f.label=1;case 1:return f.trys.push([1,3,,4]),[4,o.a.get(t,{level:e,track:track,identityId:n})];case 2:return c=f.sent(),l.debug("Storage image get",c),[2,c];case 3:throw d=f.sent(),new Error(d);case 4:return[2]}}))}))},y=function(t,e,track,n,l){return c(void 0,void 0,void 0,(function(){var c,d;return f(this,(function(f){switch(f.label){case 0:if(!o.a||"function"!=typeof o.a.get)throw new Error(r.n);f.label=1;case 1:return f.trys.push([1,4,,5]),[4,o.a.get(t,{download:!0,level:e,track:track,identityId:n})];case 2:return c=f.sent(),l.debug(c),[4,(h=c.Body,new Promise((function(t,e){var n=new FileReader;n.onload=function(){t(n.result)},n.onerror=function(){e("Failed to read file!"),n.abort()},n.readAsText(h)})))];case 3:return[2,f.sent()];case 4:throw d=f.sent(),new Error(d);case 5:return[2]}var h}))}))},w=function(t,body,e,track,n,l){return c(void 0,void 0,void 0,(function(){var data,c;return f(this,(function(f){switch(f.label){case 0:if(!o.a||"function"!=typeof o.a.put)throw new Error(r.n);f.label=1;case 1:return f.trys.push([1,3,,4]),[4,o.a.put(t,body,{contentType:n,level:e,track:track})];case 2:return data=f.sent(),l.debug("Upload data",data),[3,4];case 3:throw c=f.sent(),new Error(c);case 4:return[2]}}))}))}}}]);