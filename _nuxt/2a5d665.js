(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{635:function(t,e,r){"use strict";r.r(e),r.d(e,"amplify_radio_button",(function(){return A})),r.d(e,"amplify_totp_setup",(function(){return te}));var n=r(22),o=r(91),f=r(612),h=r(687),c=r(150),l=r(686),d=r(685),v=r(688),y=r(850),w=r(9),m=r.n(w),E=function(t,e,r,n){return new(r||(r=Promise))((function(o,f){function h(t){try{l(n.next(t))}catch(t){f(t)}}function c(t){try{l(n.throw(t))}catch(t){f(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(h,c)}l((n=n.apply(t,e||[])).next())}))},T=function(t,body){var e,r,n,g,o={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return g={next:f(0),throw:f(1),return:f(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function f(f){return function(h){return function(f){if(e)throw new TypeError("Generator is already executing.");for(;o;)try{if(e=1,r&&(n=2&f[0]?r.return:f[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,f[1])).done)return n;switch(r=0,n&&(f=[2&f[0],n.value]),f[0]){case 0:case 1:n=f;break;case 4:return o.label++,{value:f[1],done:!1};case 5:o.label++,r=f[1],f=[0];continue;case 7:f=o.ops.pop(),o.trys.pop();continue;default:if(!(n=o.trys,(n=n.length>0&&n[n.length-1])||6!==f[0]&&2!==f[0])){o=0;continue}if(3===f[0]&&(!n||f[1]>n[0]&&f[1]<n[3])){o.label=f[1];break}if(6===f[0]&&o.label<n[1]){o.label=n[1],n=f;break}if(n&&o.label<n[2]){o.label=n[2],o.ops.push(f);break}n[2]&&o.ops.pop(),o.trys.pop();continue}f=body.call(t,o)}catch(t){f=[6,t],r=0}finally{e=n=0}if(5&f[0])throw f[1];return{value:f[0]?f[1]:void 0,done:!0}}([f,h])}}},A=function(){function t(t){Object(n.k)(this,t),this.placeholder="",this.checked=!1,this.disabled=!1}return t.prototype.render=function(){return Object(n.i)("span",{class:"radio-button"},Object(n.i)("input",Object.assign({type:"radio",name:this.name,value:this.value,onInput:this.handleInputChange,placeholder:this.placeholder,id:this.fieldId,checked:this.checked,disabled:this.disabled},this.inputProps)),Object(n.i)("amplify-label",{htmlFor:this.fieldId},this.label))},t}();A.style=":host{--font-family:var(--amplify-font-family)}.radio-button{display:block;width:100%;padding:16px;font-size:var(--amplify-text-sm);font-family:var(--font-family)}.radio-button input{margin-right:12px}";var P=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then},R={}.toString,B=Array.isArray||function(t){return"[object Array]"==R.call(t)};_.TYPED_ARRAY_SUPPORT=function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()}catch(t){return!1}}();var I=_.TYPED_ARRAY_SUPPORT?2147483647:1073741823;function _(t,e,r){return _.TYPED_ARRAY_SUPPORT||this instanceof _?"number"==typeof t?N(this,t):function(t,e,r,n){if("number"==typeof e)throw new TypeError('"value" argument must not be a number');if("undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer)return function(t,e,r,n){if(r<0||e.byteLength<r)throw new RangeError("'offset' is out of bounds");if(e.byteLength<r+(n||0))throw new RangeError("'length' is out of bounds");var o;o=void 0===r&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,r):new Uint8Array(e,r,n);_.TYPED_ARRAY_SUPPORT?o.__proto__=_.prototype:o=L(t,o);return o}(t,e,r,n);if("string"==typeof e)return function(t,e){var r=0|U(e),n=M(t,r),o=n.write(e);o!==r&&(n=n.slice(0,o));return n}(t,e);return function(t,e){if(_.isBuffer(e)){var r=0|C(e.length),n=M(t,r);return 0===n.length||e.copy(n,0,0,r),n}if(e){if("undefined"!=typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!=typeof e.length||(o=e.length)!=o?M(t,0):L(t,e);if("Buffer"===e.type&&Array.isArray(e.data))return L(t,e.data)}var o;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t,e)}(this,t,e,r):new _(t,e,r)}function C(t){if(t>=I)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+I.toString(16)+" bytes");return 0|t}function M(t,e){var r;return _.TYPED_ARRAY_SUPPORT?(r=new Uint8Array(e)).__proto__=_.prototype:(null===(r=t)&&(r=new _(e)),r.length=e),r}function N(t,e){var r=M(t,e<0?0:0|C(e));if(!_.TYPED_ARRAY_SUPPORT)for(var i=0;i<e;++i)r[i]=0;return r}function L(t,e){for(var r=e.length<0?0:0|C(e.length),n=M(t,r),i=0;i<r;i+=1)n[i]=255&e[i];return n}function S(t,e){var r;e=e||1/0;for(var n=t.length,o=null,f=[],i=0;i<n;++i){if((r=t.charCodeAt(i))>55295&&r<57344){if(!o){if(r>56319){(e-=3)>-1&&f.push(239,191,189);continue}if(i+1===n){(e-=3)>-1&&f.push(239,191,189);continue}o=r;continue}if(r<56320){(e-=3)>-1&&f.push(239,191,189),o=r;continue}r=65536+(o-55296<<10|r-56320)}else o&&(e-=3)>-1&&f.push(239,191,189);if(o=null,r<128){if((e-=1)<0)break;f.push(r)}else if(r<2048){if((e-=2)<0)break;f.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;f.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;f.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return f}function U(t){return _.isBuffer(t)?t.length:"undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer)?t.byteLength:("string"!=typeof t&&(t=""+t),0===t.length?0:S(t).length)}_.TYPED_ARRAY_SUPPORT&&(_.prototype.__proto__=Uint8Array.prototype,_.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&_[Symbol.species]===_&&Object.defineProperty(_,Symbol.species,{value:null,configurable:!0,enumerable:!1,writable:!1})),_.prototype.write=function(t,e,r){void 0===e||void 0===r&&"string"==typeof e?(r=this.length,e=0):isFinite(e)&&(e|=0,isFinite(r)?r|=0:r=void 0);var n=this.length-e;if((void 0===r||r>n)&&(r=n),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");return function(t,e,r,n){return function(t,e,r,n){for(var i=0;i<n&&!(i+r>=e.length||i>=t.length);++i)e[i+r]=t[i];return i}(S(e,t.length-r),t,r,n)}(this,t,e,r)},_.prototype.slice=function(t,e){var r,n=this.length;if((t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(e=void 0===e?n:~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),e<t&&(e=t),_.TYPED_ARRAY_SUPPORT)(r=this.subarray(t,e)).__proto__=_.prototype;else{var o=e-t;r=new _(o,void 0);for(var i=0;i<o;++i)r[i]=this[i+t]}return r},_.prototype.copy=function(t,e,r,n){if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);var i,o=n-r;if(this===t&&r<e&&e<n)for(i=o-1;i>=0;--i)t[i+e]=this[i+r];else if(o<1e3||!_.TYPED_ARRAY_SUPPORT)for(i=0;i<o;++i)t[i+e]=this[i+r];else Uint8Array.prototype.set.call(t,this.subarray(r,r+o),e);return o},_.prototype.fill=function(t,e,r){if("string"==typeof t){if("string"==typeof e?(e=0,r=this.length):"string"==typeof r&&(r=this.length),1===t.length){var code=t.charCodeAt(0);code<256&&(t=code)}}else"number"==typeof t&&(t&=255);if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index");if(r<=e)return this;var i;if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"==typeof t)for(i=e;i<r;++i)this[i]=t;else{var n=_.isBuffer(t)?t:new _(t),o=n.length;for(i=0;i<r-e;++i)this[i+e]=n[i%o]}return this},_.concat=function(t,e){if(!B(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return M(null,0);var i;if(void 0===e)for(e=0,i=0;i<t.length;++i)e+=t[i].length;var r=N(null,e),n=0;for(i=0;i<t.length;++i){var o=t[i];if(!_.isBuffer(o))throw new TypeError('"list" argument must be an Array of Buffers');o.copy(r,n),n+=o.length}return r},_.byteLength=U,_.prototype._isBuffer=!0,_.isBuffer=function(b){return!(null==b||!b._isBuffer)};var x,O=function(t){var e=new _(t);return e.fill(0),e},k=function(data){return new _(data)},Y=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706],F=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return 4*t+17},D=function(t){return Y[t]},j=function(data){for(var t=0;0!==data;)t++,data>>>=1;return t},z=function(t){if("function"!=typeof t)throw new Error('"toSJISFunc" is not a valid function.');x=t},J=function(){return void 0!==x},H=function(t){return x(t)};function K(t,e,r){return t(r={path:e,exports:{},require:function(path,base){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},r.exports),r.exports}var Q=K((function(t,e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2},e.isValid=function(t){return t&&void 0!==t.bit&&t.bit>=0&&t.bit<4},e.from=function(t,r){if(e.isValid(t))return t;try{return function(t){if("string"!=typeof t)throw new Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+t)}}(t)}catch(t){return r}}}));function V(){this.buffer=[],this.length=0}V.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var i=0;i<e;i++)this.putBit(1==(t>>>e-i-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var $=V;function X(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=O(t*t),this.reservedBit=O(t*t)}X.prototype.set=function(t,col,e,r){var n=t*this.size+col;this.data[n]=e,r&&(this.reservedBit[n]=!0)},X.prototype.get=function(t,col){return this.data[t*this.size+col]},X.prototype.xor=function(t,col,e){this.data[t*this.size+col]^=e},X.prototype.isReserved=function(t,col){return this.reservedBit[t*this.size+col]};var Z=X,G=K((function(t,e){var r=F;e.getRowColCoords=function(t){if(1===t)return[];for(var e=Math.floor(t/7)+2,n=r(t),o=145===n?26:2*Math.ceil((n-13)/(2*e-2)),f=[n-7],i=1;i<e-1;i++)f[i]=f[i-1]-o;return f.push(6),f.reverse()},e.getPositions=function(t){for(var r=[],n=e.getRowColCoords(t),o=n.length,i=0;i<o;i++)for(var f=0;f<o;f++)0===i&&0===f||0===i&&f===o-1||i===o-1&&0===f||r.push([n[i],n[f]]);return r}})),W=F,tt=function(t){var e=W(t);return[[0,0],[e-7,0],[0,e-7]]},et=K((function(t,e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var r=3,n=3,o=40,f=10;function h(t,i,r){switch(t){case e.Patterns.PATTERN000:return(i+r)%2==0;case e.Patterns.PATTERN001:return i%2==0;case e.Patterns.PATTERN010:return r%3==0;case e.Patterns.PATTERN011:return(i+r)%3==0;case e.Patterns.PATTERN100:return(Math.floor(i/2)+Math.floor(r/3))%2==0;case e.Patterns.PATTERN101:return i*r%2+i*r%3==0;case e.Patterns.PATTERN110:return(i*r%2+i*r%3)%2==0;case e.Patterns.PATTERN111:return(i*r%3+(i+r)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}}e.isValid=function(mask){return null!=mask&&""!==mask&&!isNaN(mask)&&mask>=0&&mask<=7},e.from=function(t){return e.isValid(t)?parseInt(t,10):void 0},e.getPenaltyN1=function(data){for(var t=data.size,e=0,n=0,o=0,f=null,h=null,c=0;c<t;c++){n=o=0,f=h=null;for(var col=0;col<t;col++){var l=data.get(c,col);l===f?n++:(n>=5&&(e+=r+(n-5)),f=l,n=1),(l=data.get(col,c))===h?o++:(o>=5&&(e+=r+(o-5)),h=l,o=1)}n>=5&&(e+=r+(n-5)),o>=5&&(e+=r+(o-5))}return e},e.getPenaltyN2=function(data){for(var t=data.size,e=0,r=0;r<t-1;r++)for(var col=0;col<t-1;col++){var o=data.get(r,col)+data.get(r,col+1)+data.get(r+1,col)+data.get(r+1,col+1);4!==o&&0!==o||e++}return e*n},e.getPenaltyN3=function(data){for(var t=data.size,e=0,r=0,n=0,f=0;f<t;f++){r=n=0;for(var col=0;col<t;col++)r=r<<1&2047|data.get(f,col),col>=10&&(1488===r||93===r)&&e++,n=n<<1&2047|data.get(col,f),col>=10&&(1488===n||93===n)&&e++}return e*o},e.getPenaltyN4=function(data){for(var t=0,e=data.data.length,i=0;i<e;i++)t+=data.data[i];return Math.abs(Math.ceil(100*t/e/5)-10)*f},e.applyMask=function(pattern,data){for(var t=data.size,col=0;col<t;col++)for(var e=0;e<t;e++)data.isReserved(e,col)||data.xor(e,col,h(pattern,e,col))},e.getBestMask=function(data,t){for(var r=Object.keys(e.Patterns).length,n=0,o=1/0,p=0;p<r;p++){t(p),e.applyMask(p,data);var f=e.getPenaltyN1(data)+e.getPenaltyN2(data)+e.getPenaltyN3(data)+e.getPenaltyN4(data);e.applyMask(p,data),f<o&&(o=f,n=p)}return n}})),nt=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],ot=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430],it=function(t,e){switch(e){case Q.L:return nt[4*(t-1)+0];case Q.M:return nt[4*(t-1)+1];case Q.Q:return nt[4*(t-1)+2];case Q.H:return nt[4*(t-1)+3];default:return}},at=function(t,e){switch(e){case Q.L:return ot[4*(t-1)+0];case Q.M:return ot[4*(t-1)+1];case Q.Q:return ot[4*(t-1)+2];case Q.H:return ot[4*(t-1)+3];default:return}},ut=O(512),st=O(256);!function(){for(var t=1,i=0;i<255;i++)ut[i]=t,st[t]=i,256&(t<<=1)&&(t^=285);for(i=255;i<512;i++)ut[i]=ut[i-255]}();var ft=function(t){return ut[t]},ht=function(t,e){return 0===t||0===e?0:ut[st[t]+st[e]]},ct=K((function(t,e){e.mul=function(t,e){for(var r=O(t.length+e.length-1),i=0;i<t.length;i++)for(var n=0;n<e.length;n++)r[i+n]^=ht(t[i],e[n]);return r},e.mod=function(t,e){for(var r=k(t);r.length-e.length>=0;){for(var n=r[0],i=0;i<e.length;i++)r[i]^=ht(e[i],n);for(var o=0;o<r.length&&0===r[o];)o++;r=r.slice(o)}return r},e.generateECPolynomial=function(t){for(var r=k([1]),i=0;i<t;i++)r=e.mul(r,[1,ft(i)]);return r}})),lt=m.a.Buffer;function gt(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}gt.prototype.initialize=function(t){this.degree=t,this.genPoly=ct.generateECPolynomial(this.degree)},gt.prototype.encode=function(data){if(!this.genPoly)throw new Error("Encoder not initialized");var t=O(this.degree),e=lt.concat([data,t],data.length+this.degree),r=ct.mod(e,this.genPoly),n=this.degree-r.length;if(n>0){var o=O(this.degree);return r.copy(o,n),o}return r};var pt=gt,vt=function(t){return!isNaN(t)&&t>=1&&t<=40},yt="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",wt="(?:(?![A-Z0-9 $%*+\\-./:]|"+(yt=yt.replace(/u/g,"\\u"))+")(?:.|[\r\n]))+",mt=new RegExp(yt,"g"),Et=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),bt=new RegExp(wt,"g"),Tt=new RegExp("[0-9]+","g"),At=new RegExp("[A-Z $%*+\\-./:]+","g"),Pt=new RegExp("^"+yt+"$"),Rt=new RegExp("^[0-9]+$"),Bt=new RegExp("^[A-Z0-9 $%*+\\-./:]+$"),It={KANJI:mt,BYTE_KANJI:Et,BYTE:bt,NUMERIC:Tt,ALPHANUMERIC:At,testKanji:function(t){return Pt.test(t)},testNumeric:function(t){return Rt.test(t)},testAlphanumeric:function(t){return Bt.test(t)}},_t=K((function(t,e){e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(t,e){if(!t.ccBits)throw new Error("Invalid mode: "+t);if(!vt(e))throw new Error("Invalid version: "+e);return e>=1&&e<10?t.ccBits[0]:e<27?t.ccBits[1]:t.ccBits[2]},e.getBestModeForData=function(t){return It.testNumeric(t)?e.NUMERIC:It.testAlphanumeric(t)?e.ALPHANUMERIC:It.testKanji(t)?e.KANJI:e.BYTE},e.toString=function(t){if(t&&t.id)return t.id;throw new Error("Invalid mode")},e.isValid=function(t){return t&&t.bit&&t.ccBits},e.from=function(t,r){if(e.isValid(t))return t;try{return function(t){if("string"!=typeof t)throw new Error("Param is not a string");switch(t.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+t)}}(t)}catch(t){return r}}})),Ct=K((function(t,e){var r=j(7973);function n(t,e){return _t.getCharCountIndicator(t,e)+4}function o(t,e){var r=0;return t.forEach((function(data){var t=n(data.mode,e);r+=t+data.getBitsLength()})),r}e.from=function(t,e){return vt(t)?parseInt(t,10):e},e.getCapacity=function(t,e,r){if(!vt(t))throw new Error("Invalid QR Code version");void 0===r&&(r=_t.BYTE);var o=8*(D(t)-at(t,e));if(r===_t.MIXED)return o;var f=o-n(r,t);switch(r){case _t.NUMERIC:return Math.floor(f/10*3);case _t.ALPHANUMERIC:return Math.floor(f/11*2);case _t.KANJI:return Math.floor(f/13);case _t.BYTE:default:return Math.floor(f/8)}},e.getBestVersionForData=function(data,t){var r,n=Q.from(t,Q.M);if(B(data)){if(data.length>1)return function(t,r){for(var n=1;n<=40;n++){if(o(t,n)<=e.getCapacity(n,r,_t.MIXED))return n}}(data,n);if(0===data.length)return 1;r=data[0]}else r=data;return function(t,r,n){for(var o=1;o<=40;o++)if(r<=e.getCapacity(o,n,t))return o}(r.mode,r.getLength(),n)},e.getEncodedBits=function(t){if(!vt(t)||t<7)throw new Error("Invalid QR Code version");for(var e=t<<12;j(e)-r>=0;)e^=7973<<j(e)-r;return t<<12|e}})),Mt=j(1335),Nt=function(t,mask){for(var data=t.bit<<3|mask,e=data<<10;j(e)-Mt>=0;)e^=1335<<j(e)-Mt;return 21522^(data<<10|e)};function Lt(data){this.mode=_t.NUMERIC,this.data=data.toString()}Lt.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)},Lt.prototype.getLength=function(){return this.data.length},Lt.prototype.getBitsLength=function(){return Lt.getBitsLength(this.data.length)},Lt.prototype.write=function(t){var i,e,r;for(i=0;i+3<=this.data.length;i+=3)e=this.data.substr(i,3),r=parseInt(e,10),t.put(r,10);var n=this.data.length-i;n>0&&(e=this.data.substr(i),r=parseInt(e,10),t.put(r,3*n+1))};var St=Lt,Ut=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function xt(data){this.mode=_t.ALPHANUMERIC,this.data=data}xt.getBitsLength=function(t){return 11*Math.floor(t/2)+t%2*6},xt.prototype.getLength=function(){return this.data.length},xt.prototype.getBitsLength=function(){return xt.getBitsLength(this.data.length)},xt.prototype.write=function(t){var i;for(i=0;i+2<=this.data.length;i+=2){var e=45*Ut.indexOf(this.data[i]);e+=Ut.indexOf(this.data[i+1]),t.put(e,11)}this.data.length%2&&t.put(Ut.indexOf(this.data[i]),6)};var Ot=xt;function kt(data){this.mode=_t.BYTE,this.data=k(data)}kt.getBitsLength=function(t){return 8*t},kt.prototype.getLength=function(){return this.data.length},kt.prototype.getBitsLength=function(){return kt.getBitsLength(this.data.length)},kt.prototype.write=function(t){for(var i=0,e=this.data.length;i<e;i++)t.put(this.data[i],8)};var Yt=kt;function Ft(data){this.mode=_t.KANJI,this.data=data}Ft.getBitsLength=function(t){return 13*t},Ft.prototype.getLength=function(){return this.data.length},Ft.prototype.getBitsLength=function(){return Ft.getBitsLength(this.data.length)},Ft.prototype.write=function(t){var i;for(i=0;i<this.data.length;i++){var e=H(this.data[i]);if(e>=33088&&e<=40956)e-=33088;else{if(!(e>=57408&&e<=60351))throw new Error("Invalid SJIS character: "+this.data[i]+"\nMake sure your charset is UTF-8");e-=49472}e=192*(e>>>8&255)+(255&e),t.put(e,13)}};var Dt=Ft,jt=K((function(t){var e={single_source_shortest_paths:function(t,s,r){var n={},o={};o[s]=0;var f,u,h,c,l,d,v,y=e.PriorityQueue.make();for(y.push(s,0);!y.empty();)for(h in u=(f=y.pop()).value,c=f.cost,l=t[u]||{})l.hasOwnProperty(h)&&(d=c+l[h],v=o[h],(void 0===o[h]||v>d)&&(o[h]=d,y.push(h,d),n[h]=u));if(void 0!==r&&void 0===o[r]){var w=["Could not find a path from ",s," to ",r,"."].join("");throw new Error(w)}return n},extract_shortest_path_from_predecessor_list:function(t,e){for(var r=[],u=e;u;)r.push(u),u=t[u];return r.reverse(),r},find_path:function(t,s,r){var n=e.single_source_shortest_paths(t,s,r);return e.extract_shortest_path_from_predecessor_list(n,r)},PriorityQueue:{make:function(t){var r,n=e.PriorityQueue,o={};for(r in t=t||{},n)n.hasOwnProperty(r)&&(o[r]=n[r]);return o.queue=[],o.sorter=t.sorter||n.default_sorter,o},default_sorter:function(a,b){return a.cost-b.cost},push:function(t,e){var r={value:t,cost:e};this.queue.push(r),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};t.exports=e})),zt=K((function(t,e){function r(t){return unescape(encodeURIComponent(t)).length}function n(t,e,r){for(var n,o=[];null!==(n=t.exec(r));)o.push({data:n[0],index:n.index,mode:e,length:n[0].length});return o}function o(t){var e,r,o=n(It.NUMERIC,_t.NUMERIC,t),f=n(It.ALPHANUMERIC,_t.ALPHANUMERIC,t);return J()?(e=n(It.BYTE,_t.BYTE,t),r=n(It.KANJI,_t.KANJI,t)):(e=n(It.BYTE_KANJI,_t.BYTE,t),r=[]),o.concat(f,e,r).sort((function(t,e){return t.index-e.index})).map((function(t){return{data:t.data,mode:t.mode,length:t.length}}))}function f(t,e){switch(e){case _t.NUMERIC:return St.getBitsLength(t);case _t.ALPHANUMERIC:return Ot.getBitsLength(t);case _t.KANJI:return Dt.getBitsLength(t);case _t.BYTE:return Yt.getBitsLength(t)}}function h(data,t){var e,r=_t.getBestModeForData(data);if((e=_t.from(t,r))!==_t.BYTE&&e.bit<r.bit)throw new Error('"'+data+'" cannot be encoded with mode '+_t.toString(e)+".\n Suggested mode is: "+_t.toString(r));switch(e!==_t.KANJI||J()||(e=_t.BYTE),e){case _t.NUMERIC:return new St(data);case _t.ALPHANUMERIC:return new Ot(data);case _t.KANJI:return new Dt(data);case _t.BYTE:return new Yt(data)}}e.fromArray=function(t){return t.reduce((function(t,e){return"string"==typeof e?t.push(h(e,null)):e.data&&t.push(h(e.data,e.mode)),t}),[])},e.fromString=function(data,t){for(var n=function(t,e){for(var table={},r={start:{}},n=["start"],i=0;i<t.length;i++){for(var o=t[i],h=[],c=0;c<o.length;c++){var l=o[c],d=""+i+c;h.push(d),table[d]={node:l,lastCount:0},r[d]={};for(var v=0;v<n.length;v++){var y=n[v];table[y]&&table[y].node.mode===l.mode?(r[y][d]=f(table[y].lastCount+l.length,l.mode)-f(table[y].lastCount,l.mode),table[y].lastCount+=l.length):(table[y]&&(table[y].lastCount=l.length),r[y][d]=f(l.length,l.mode)+4+_t.getCharCountIndicator(l.mode,e))}}n=h}for(v=0;v<n.length;v++)r[n[v]].end=0;return{map:r,table:table}}(function(t){for(var e=[],i=0;i<t.length;i++){var n=t[i];switch(n.mode){case _t.NUMERIC:e.push([n,{data:n.data,mode:_t.ALPHANUMERIC,length:n.length},{data:n.data,mode:_t.BYTE,length:n.length}]);break;case _t.ALPHANUMERIC:e.push([n,{data:n.data,mode:_t.BYTE,length:n.length}]);break;case _t.KANJI:e.push([n,{data:n.data,mode:_t.BYTE,length:r(n.data)}]);break;case _t.BYTE:e.push([{data:n.data,mode:_t.BYTE,length:r(n.data)}])}}return e}(o(data,J())),t),path=jt.find_path(n.map,"start","end"),h=[],i=1;i<path.length-1;i++)h.push(n.table[path[i]].node);return e.fromArray(function(t){return t.reduce((function(t,e){var r=t.length-1>=0?t[t.length-1]:null;return r&&r.mode===e.mode?(t[t.length-1].data+=e.data,t):(t.push(e),t)}),[])}(h))},e.rawSplit=function(data){return e.fromArray(o(data,J()))}}));function Jt(t,e,r){var i,n,o=t.size,f=Nt(e,r);for(i=0;i<15;i++)n=1==(f>>i&1),i<6?t.set(i,8,n,!0):i<8?t.set(i+1,8,n,!0):t.set(o-15+i,8,n,!0),i<8?t.set(8,o-i-1,n,!0):i<9?t.set(8,15-i-1+1,n,!0):t.set(8,15-i-1,n,!0);t.set(o-8,8,1,!0)}function qt(t,e,r){var n=new $;r.forEach((function(data){n.put(data.mode.bit,4),n.put(data.getLength(),_t.getCharCountIndicator(data.mode,t)),data.write(n)}));var o=8*(D(t)-at(t,e));for(n.getLengthInBits()+4<=o&&n.put(0,4);n.getLengthInBits()%8!=0;)n.putBit(0);for(var f=(o-n.getLengthInBits())/8,i=0;i<f;i++)n.put(i%2?17:236,8);return function(t,e,r){for(var n=D(e),o=at(e,r),f=n-o,h=it(e,r),c=h-n%h,l=Math.floor(n/h),d=Math.floor(f/h),v=d+1,y=l-d,w=new pt(y),m=0,E=new Array(h),T=new Array(h),A=0,P=k(t.buffer),b=0;b<h;b++){var R=b<c?d:v;E[b]=P.slice(m,m+R),T[b]=w.encode(E[b]),m+=R,A=Math.max(A,R)}var i,B,data=O(n),I=0;for(i=0;i<A;i++)for(B=0;B<h;B++)i<E[B].length&&(data[I++]=E[B][i]);for(i=0;i<y;i++)for(B=0;B<h;B++)data[I++]=T[B][i];return data}(n,t,e)}function Ht(data,t,e,r){var n;if(B(data))n=zt.fromArray(data);else{if("string"!=typeof data)throw new Error("Invalid data");var o=t;if(!o){var f=zt.rawSplit(data);o=Ct.getBestVersionForData(f,e)}n=zt.fromString(data,o||40)}var h=Ct.getBestVersionForData(n,e);if(!h)throw new Error("The amount of data is too big to be stored in a QR Code");if(t){if(t<h)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+h+".\n")}else t=h;var c=qt(t,e,n),l=F(t),d=new Z(l);return function(t,e){for(var r=t.size,n=tt(e),i=0;i<n.length;i++)for(var o=n[i][0],col=n[i][1],f=-1;f<=7;f++)if(!(o+f<=-1||r<=o+f))for(var h=-1;h<=7;h++)col+h<=-1||r<=col+h||(f>=0&&f<=6&&(0===h||6===h)||h>=0&&h<=6&&(0===f||6===f)||f>=2&&f<=4&&h>=2&&h<=4?t.set(o+f,col+h,!0,!0):t.set(o+f,col+h,!1,!0))}(d,t),function(t){for(var e=t.size,r=8;r<e-8;r++){var n=r%2==0;t.set(r,6,n,!0),t.set(6,r,n,!0)}}(d),function(t,e){for(var r=G.getPositions(e),i=0;i<r.length;i++)for(var n=r[i][0],col=r[i][1],o=-2;o<=2;o++)for(var f=-2;f<=2;f++)-2===o||2===o||-2===f||2===f||0===o&&0===f?t.set(n+o,col+f,!0,!0):t.set(n+o,col+f,!1,!0)}(d,t),Jt(d,e,0),t>=7&&function(t,e){for(var r,col,n,o=t.size,f=Ct.getEncodedBits(e),i=0;i<18;i++)r=Math.floor(i/3),col=i%3+o-8-3,n=1==(f>>i&1),t.set(r,col,n,!0),t.set(col,r,n,!0)}(d,t),function(t,data){for(var e=t.size,r=-1,n=e-1,o=7,f=0,col=e-1;col>0;col-=2)for(6===col&&col--;;){for(var h=0;h<2;h++)if(!t.isReserved(n,col-h)){var c=!1;f<data.length&&(c=1==(data[f]>>>o&1)),t.set(n,col-h,c),-1===--o&&(f++,o=7)}if((n+=r)<0||e<=n){n-=r,r=-r;break}}}(d,c),isNaN(r)&&(r=et.getBestMask(d,Jt.bind(null,d,e))),et.applyMask(r,d),Jt(d,e,r),{modules:d,version:t,errorCorrectionLevel:e,maskPattern:r,segments:n}}var Kt=function(data,t){if(void 0===data||""===data)throw new Error("No input text");var e,mask,r=Q.M;return void 0!==t&&(r=Q.from(t.errorCorrectionLevel,Q.M),e=Ct.from(t.version),mask=et.from(t.maskPattern),t.toSJISFunc&&z(t.toSJISFunc)),Ht(data,e,r,mask)},Qt=K((function(t,e){function r(t){if("number"==typeof t&&(t=t.toString()),"string"!=typeof t)throw new Error("Color should be defined as hex string");var e=t.slice().replace("#","").split("");if(e.length<3||5===e.length||e.length>8)throw new Error("Invalid hex color: "+t);3!==e.length&&4!==e.length||(e=Array.prototype.concat.apply([],e.map((function(t){return[t,t]})))),6===e.length&&e.push("F","F");var r=parseInt(e.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:255&r,hex:"#"+e.slice(0,6).join("")}}e.getOptions=function(t){t||(t={}),t.color||(t.color={});var e=void 0===t.margin||null===t.margin||t.margin<0?4:t.margin,n=t.width&&t.width>=21?t.width:void 0,o=t.scale||4;return{width:n,scale:n?4:o,margin:e,color:{dark:r(t.color.dark||"#000000ff"),light:r(t.color.light||"#ffffffff")},type:t.type,rendererOpts:t.rendererOpts||{}}},e.getScale=function(t,e){return e.width&&e.width>=t+2*e.margin?e.width/(t+2*e.margin):e.scale},e.getImageWidth=function(t,r){var n=e.getScale(t,r);return Math.floor((t+2*r.margin)*n)},e.qrToImageData=function(t,r,n){for(var o=r.modules.size,data=r.modules.data,f=e.getScale(o,n),h=Math.floor((o+2*n.margin)*f),c=n.margin*f,l=[n.color.light,n.color.dark],i=0;i<h;i++)for(var d=0;d<h;d++){var v=4*(i*h+d),y=n.color.light;if(i>=c&&d>=c&&i<h-c&&d<h-c)y=l[data[Math.floor((i-c)/f)*o+Math.floor((d-c)/f)]?1:0];t[v++]=y.r,t[v++]=y.g,t[v++]=y.b,t[v]=y.a}}})),canvas=K((function(t,e){e.render=function(t,canvas,e){var r=e,n=canvas;void 0!==r||canvas&&canvas.getContext||(r=canvas,canvas=void 0),canvas||(n=function(){try{return document.createElement("canvas")}catch(t){throw new Error("You need to specify a canvas element")}}()),r=Qt.getOptions(r);var o=Qt.getImageWidth(t.modules.size,r),f=n.getContext("2d"),image=f.createImageData(o,o);return Qt.qrToImageData(image.data,t,r),function(t,canvas,e){t.clearRect(0,0,canvas.width,canvas.height),canvas.style||(canvas.style={}),canvas.height=e,canvas.width=e,canvas.style.height=e+"px",canvas.style.width=e+"px"}(f,n,o),f.putImageData(image,0,0),n},e.renderToDataURL=function(t,canvas,r){var n=r;void 0!==n||canvas&&canvas.getContext||(n=canvas,canvas=void 0),n||(n={});var o=e.render(t,canvas,n),f=n.type||"image/png",h=n.rendererOpts||{};return o.toDataURL(f,h.quality)}}));function Vt(t,e){var r=t.a/255,n=e+'="'+t.hex+'"';return r<1?n+" "+e+'-opacity="'+r.toFixed(2).slice(1)+'"':n}function $t(t,e,r){var n=t+e;return void 0!==r&&(n+=" "+r),n}var Xt=function(t,e,r){var n=Qt.getOptions(e),o=t.modules.size,data=t.modules.data,f=o+2*n.margin,h=n.color.light.a?"<path "+Vt(n.color.light,"fill")+' d="M0 0h'+f+"v"+f+'H0z"/>':"",path="<path "+Vt(n.color.dark,"stroke")+' d="'+function(data,t,e){for(var path="",r=0,n=!1,o=0,i=0;i<data.length;i++){var col=Math.floor(i%t),f=Math.floor(i/t);col||n||(n=!0),data[i]?(o++,i>0&&col>0&&data[i-1]||(path+=n?$t("M",col+e,.5+f+e):$t("m",r,0),r=0,n=!1),col+1<t&&data[i+1]||(path+=$t("h",o),o=0)):r++}return path}(data,o,n.margin)+'"/>',c='viewBox="0 0 '+f+" "+f+'"',l='<svg xmlns="http://www.w3.org/2000/svg" '+(n.width?'width="'+n.width+'" height="'+n.width+'" ':"")+c+' shape-rendering="crispEdges">'+h+path+"</svg>\n";return"function"==typeof r&&r(null,l),l};function Zt(t,canvas,text,e,r){var n=[].slice.call(arguments,1),o=n.length,f="function"==typeof n[o-1];if(!f&&!P())throw new Error("Callback required as last argument");if(!f){if(o<1)throw new Error("Too few arguments provided");return 1===o?(text=canvas,canvas=e=void 0):2!==o||canvas.getContext||(e=text,text=canvas,canvas=void 0),new Promise((function(r,n){try{var data=Kt(text,e);r(t(data,canvas,e))}catch(t){n(t)}}))}if(o<2)throw new Error("Too few arguments provided");2===o?(r=text,text=canvas,canvas=e=void 0):3===o&&(canvas.getContext&&void 0===r?(r=e,e=void 0):(r=e,e=text,text=canvas,canvas=void 0));try{var data=Kt(text,e);r(null,t(data,canvas,e))}catch(t){r(t)}}var Gt={create:Kt,toCanvas:Zt.bind(null,canvas.render),toDataURL:Zt.bind(null,canvas.renderToDataURL),toString:Zt.bind(null,(function(data,t,e){return Xt(data,e)}))},Wt=new o.a("TOTP"),te=function(){function t(t){Object(n.k)(this,t),this.inputProps={autoFocus:!0},this.handleAuthStateChange=v.d,this.headerText=l.a.TOTP_HEADER_TEXT,this.issuer=l.a.TOTP_ISSUER,this.code=null,this.setupMessage=null,this.qrCodeInput=null,this.loading=!1}return t.prototype.componentWillLoad=function(){this.setup()},t.prototype.buildOtpAuthPath=function(t,e,r){return"otpauth://totp/"+e+":"+t.username+"?secret="+r+"&issuer="+e},t.prototype.onTOTPEvent=function(t,data,e){return E(this,void 0,void 0,(function(){return T(this,(function(r){switch(r.label){case 0:return Wt.debug("on totp event",t,data),t!==d.g||data!==d.r?[3,2]:[4,Object(y.a)(e,this.handleAuthStateChange)];case 1:r.sent(),r.label=2;case 2:return[2]}}))}))},t.prototype.handleTotpInputChange=function(t){this.setupMessage=null,this.qrCodeInput=t.target.value},t.prototype.generateQRCode=function(t){return E(this,void 0,void 0,(function(){var e,r;return T(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),e=this,[4,Gt.toDataURL(t)];case 1:return e.qrCodeImageSource=n.sent(),[3,3];case 2:return r=n.sent(),Object(v.a)(r),[3,3];case 3:return[2]}}))}))},t.prototype.setup=function(){return E(this,void 0,void 0,(function(){var t,e,r;return T(this,(function(n){switch(n.label){case 0:if(this.setupMessage=null,t=encodeURI(f.a.get(this.issuer)),!c.a||"function"!=typeof c.a.setupTOTP)throw new Error(d.d);this.loading=!0,n.label=1;case 1:return n.trys.push([1,3,4,5]),[4,c.a.setupTOTP(this.user)];case 2:return e=n.sent(),Wt.debug("secret key",e),this.code=this.buildOtpAuthPath(this.user,t,e),this.generateQRCode(this.code),[3,5];case 3:return r=n.sent(),Object(v.a)(r),Wt.debug(f.a.get(l.a.TOTP_SETUP_FAILURE),r),[3,5];case 4:return this.loading=!1,[7];case 5:return[2]}}))}))},t.prototype.verifyTotpToken=function(t){return E(this,void 0,void 0,(function(){var e,r;return T(this,(function(n){switch(n.label){case 0:if(t&&t.preventDefault(),!this.qrCodeInput)return Wt.debug("No TOTP Code provided"),[2];if(e=this.user,!c.a||"function"!=typeof c.a.verifyTotpToken||"function"!=typeof c.a.setPreferredMFA)throw new Error(d.d);n.label=1;case 1:return n.trys.push([1,5,,6]),[4,c.a.verifyTotpToken(e,this.qrCodeInput)];case 2:return n.sent(),[4,c.a.setPreferredMFA(e,h.c.TOTP)];case 3:return n.sent(),this.setupMessage=f.a.get(l.a.TOTP_SUCCESS_MESSAGE),Wt.debug(f.a.get(l.a.TOTP_SUCCESS_MESSAGE)),[4,this.onTOTPEvent(d.g,d.r,e)];case 4:return n.sent(),[3,6];case 5:return r=n.sent(),this.setupMessage=f.a.get(l.a.TOTP_SETUP_FAILURE),Wt.error(r),[3,6];case 6:return[2]}}))}))},t.prototype.render=function(){var t=this;return Object(n.i)(n.b,null,Object(n.i)("amplify-form-section",{headerText:f.a.get(this.headerText),submitButtonText:f.a.get(l.a.TOTP_SUBMIT_BUTTON_TEXT),handleSubmit:function(e){return t.verifyTotpToken(e)},loading:this.loading},Object(n.i)("div",{class:"totp-setup"},Object(n.i)("img",{src:this.qrCodeImageSource,alt:f.a.get(l.a.QR_CODE_ALT)}),Object(n.i)("amplify-form-field",{label:f.a.get(l.a.TOTP_LABEL),inputProps:this.inputProps,fieldId:"totpCode",name:"totpCode",handleInputChange:function(e){return t.handleTotpInputChange(e)}}))))},t}();te.style=".totp-setup{text-align:center;margin-bottom:30px}.totp-setup img{height:128px;width:128px}"}}]);