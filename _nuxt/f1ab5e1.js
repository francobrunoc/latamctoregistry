/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1061:function(t,e,r){"use strict";r(986)},1062:function(t,e,r){var n=r(23)(!1);n.push([t.i,".wrap-text[data-v-8979368a]{-webkit-line-clamp:unset!important;white-space:normal}",""]),t.exports=n},1066:function(t,e,r){"use strict";r.r(e);r(55);var n=r(17),o=r(928),c=r(940),l={name:"Publications",data:function(){return{publicationsDialog:!1,items:[{header:"Accepted Submissions"}]}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.listAcceptedPublications();case 2:r=e.sent,r.acceptedPublications.forEach((function(e){t.items.push({avatar:"",title:"<a href='".concat(e.publication_url,"' target='_blank'>\n                    ").concat(e.publication_title,"\n                </a>"),subtitle:"".concat(e.draft_main_author,":\n            <a href='mailto:").concat(e.corresp_author_email,"'>\n                ").concat(e.corresp_author_email,"\n            </a>")}),t.items.push({divider:!0,inset:!0})})),t.items.pop(t.items.length-1),t.gravatar();case 7:case"end":return e.stop()}}),e)})))()},methods:{gravatar:function(){this.items.forEach((function(t){t.avatar="https://www.gravatar.com/avatar/"+c("latamctoregistry@gmail.com")}))},close:function(){this.publicationsDialog=!1}}},h=(r(1061),r(56)),v=r(81),f=r.n(v),d=r(264),m=r(900),x=r(732),y=r(960),w=r(723),O=r(1074),k=r(935),_=r(240),j=r(241),C=r(145),P=r(243),B=r(99),S=r(726),T=r(937),component=Object(h.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"text-center"},[r("v-chip",{staticClass:"ma-10",attrs:{"x-large":""},on:{click:function(e){t.publicationsDialog=!0}}},[r("v-icon",{staticClass:"mr-2"},[t._v("mdi-text-box-multiple-outline")]),r("v-spacer"),t._v("\n    PUBLICATIONS\n  ")],1),t._v(" "),r("v-dialog",{attrs:{"max-width":"600"},model:{value:t.publicationsDialog,callback:function(e){t.publicationsDialog=e},expression:"publicationsDialog"}},[r("v-card",[r("v-card-title",{staticClass:"primary white--text"},[t._v("Publications\n        "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{icon:""},on:{click:function(e){return t.close()}}},[r("v-icon",{staticClass:"white--text"},[t._v("mdi-close")])],1)],1),t._v(" "),r("v-card-text",[r("v-list",{attrs:{"three-line":""}},[t._l(t.items,(function(e,n){return[e.header?r("v-subheader",{key:e.header,domProps:{textContent:t._s(e.header)}}):e.divider?r("v-divider",{key:n,attrs:{inset:e.inset}}):r("v-list-item",{key:e.title},[r("v-list-item-avatar",[r("img",{attrs:{src:e.avatar}})]),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{staticClass:"wrap-text",domProps:{innerHTML:t._s(e.title)}}),t._v(" "),r("v-list-item-subtitle",{staticClass:"wrap-text",domProps:{innerHTML:t._s(e.subtitle)}})],1)],1)]}))],2)],1)],1)],1)],1)}),[],!1,null,"8979368a",null);e.default=component.exports;f()(component,{VBtn:d.a,VCard:m.a,VCardText:x.a,VCardTitle:x.b,VChip:y.a,VContainer:w.a,VDialog:O.a,VDivider:k.a,VIcon:_.a,VList:j.a,VListItem:C.a,VListItemAvatar:P.a,VListItemContent:B.a,VListItemSubtitle:B.b,VListItemTitle:B.c,VSpacer:S.a,VSubheader:T.a})},733:function(t,e,r){"use strict";(function(t){r(44),r(45),r(9),r(55);var n=r(17),o=r(881),c=r.n(o),l=r(737),h="https://7cb5vfypm9.execute-api.us-west-2.amazonaws.com/dev/",v=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(path){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(l.a)("get",path));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(path,data){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(l.a)("post",path,data));case 1:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),d=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(path,r){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],o={headers:{Authorization:r}},e.next=4,c.a.get(h.concat(path||""),o).then((function(e){(n=e.data).body&&(n=JSON.parse(t.from(n.body).toString("utf-8")))})).catch((function(t){return console.error(t)}));case 4:return e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),m=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(path,data,e){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=[],n={headers:{Authorization:e}},t.next=4,c.a.post(h.concat(path||""),data||"",n).then((function(t){r=t})).catch((function(t){return console.error(t)}));case 4:return t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e,r,n){return t.apply(this,arguments)}}();e.a={GET:v,get:d,POST:f,post:m}}).call(this,r(8).Buffer)},737:function(t,e,r){"use strict";r.d(e,"a",(function(){return h}));r(55);var n,o=r(17),c=r(153),l=r(733),h=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e,path,data){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.currentAuthenticatedUser().then((function(u){return n=u.signInUserSession.idToken.jwtToken})).catch((function(t){return console.log(t)}));case 2:if("post"!==e){t.next=6;break}return t.next=5,l.a.post(path,data,n);case 5:return t.abrupt("return",t.sent);case 6:if("get"!==e){t.next=10;break}return t.next=9,l.a.get(path,n);case 9:return t.abrupt("return",t.sent);case 10:case"end":return t.stop()}}),t)})));return function(e,r,n){return t.apply(this,arguments)}}()},915:function(t,e,r){var content=r(916);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("7132a15d",content,!0,{sourceMap:!1})},916:function(t,e,r){var n=r(23)(!1);n.push([t.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}",""]),t.exports=n},917:function(t,e,r){var content=r(918);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("e8b41e5e",content,!0,{sourceMap:!1})},918:function(t,e,r){var n=r(23)(!1);n.push([t.i,".theme--light.v-subheader{color:rgba(0,0,0,.6)}.theme--dark.v-subheader{color:hsla(0,0%,100%,.7)}.v-subheader{align-items:center;display:flex;height:48px;font-size:.875rem;font-weight:400;padding:0 16px}.v-subheader--inset{margin-left:56px}",""]),t.exports=n},928:function(t,e,r){"use strict";r(55);var n=r(17),o=r(733),c=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(path){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.a.GET(path));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(path,data){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.a.POST(path,data));case 1:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),h={listAcceptedPublications:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c("publications/accepted/list");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},listInternalDocuments:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c("publications/documents/list");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},listPublicationProposals:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c("publications/proposals/list");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},downloadDocument:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l("publications/documents/download/".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()}};e.a=h},930:function(t,e){var r={utf8:{stringToBytes:function(t){return r.bin.stringToBytes(unescape(encodeURIComponent(t)))},bytesToString:function(t){return decodeURIComponent(escape(r.bin.bytesToString(t)))}},bin:{stringToBytes:function(t){for(var e=[],i=0;i<t.length;i++)e.push(255&t.charCodeAt(i));return e},bytesToString:function(t){for(var e=[],i=0;i<t.length;i++)e.push(String.fromCharCode(t[i]));return e.join("")}}};t.exports=r},935:function(t,e,r){"use strict";r(18),r(14),r(15),r(11),r(9),r(16);var n=r(5),o=(r(915),r(39));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=o.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:l({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:l({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},937:function(t,e,r){"use strict";r(18),r(14),r(15),r(11),r(9),r(16);var n=r(5),o=(r(917),r(39)),c=r(12);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(c.a)(o.a).extend({name:"v-subheader",props:{inset:Boolean},render:function(t){return t("div",{staticClass:"v-subheader",class:h({"v-subheader--inset":this.inset},this.themeClasses),attrs:this.$attrs,on:this.$listeners},this.$slots.default)}})},940:function(t,e,r){var n,o,c,l,h;n=r(968),o=r(930).utf8,c=r(969),l=r(930).bin,(h=function(t,e){t.constructor==String?t=e&&"binary"===e.encoding?l.stringToBytes(t):o.stringToBytes(t):c(t)?t=Array.prototype.slice.call(t,0):Array.isArray(t)||t.constructor===Uint8Array||(t=t.toString());for(var r=n.bytesToWords(t),v=8*t.length,a=1732584193,b=-271733879,f=-1732584194,d=271733878,i=0;i<r.length;i++)r[i]=16711935&(r[i]<<8|r[i]>>>24)|4278255360&(r[i]<<24|r[i]>>>8);r[v>>>5]|=128<<v%32,r[14+(v+64>>>9<<4)]=v;var m=h._ff,x=h._gg,y=h._hh,w=h._ii;for(i=0;i<r.length;i+=16){var O=a,k=b,_=f,dd=d;a=m(a,b,f,d,r[i+0],7,-680876936),d=m(d,a,b,f,r[i+1],12,-389564586),f=m(f,d,a,b,r[i+2],17,606105819),b=m(b,f,d,a,r[i+3],22,-1044525330),a=m(a,b,f,d,r[i+4],7,-176418897),d=m(d,a,b,f,r[i+5],12,1200080426),f=m(f,d,a,b,r[i+6],17,-1473231341),b=m(b,f,d,a,r[i+7],22,-45705983),a=m(a,b,f,d,r[i+8],7,1770035416),d=m(d,a,b,f,r[i+9],12,-1958414417),f=m(f,d,a,b,r[i+10],17,-42063),b=m(b,f,d,a,r[i+11],22,-1990404162),a=m(a,b,f,d,r[i+12],7,1804603682),d=m(d,a,b,f,r[i+13],12,-40341101),f=m(f,d,a,b,r[i+14],17,-1502002290),a=x(a,b=m(b,f,d,a,r[i+15],22,1236535329),f,d,r[i+1],5,-165796510),d=x(d,a,b,f,r[i+6],9,-1069501632),f=x(f,d,a,b,r[i+11],14,643717713),b=x(b,f,d,a,r[i+0],20,-373897302),a=x(a,b,f,d,r[i+5],5,-701558691),d=x(d,a,b,f,r[i+10],9,38016083),f=x(f,d,a,b,r[i+15],14,-660478335),b=x(b,f,d,a,r[i+4],20,-405537848),a=x(a,b,f,d,r[i+9],5,568446438),d=x(d,a,b,f,r[i+14],9,-1019803690),f=x(f,d,a,b,r[i+3],14,-187363961),b=x(b,f,d,a,r[i+8],20,1163531501),a=x(a,b,f,d,r[i+13],5,-1444681467),d=x(d,a,b,f,r[i+2],9,-51403784),f=x(f,d,a,b,r[i+7],14,1735328473),a=y(a,b=x(b,f,d,a,r[i+12],20,-1926607734),f,d,r[i+5],4,-378558),d=y(d,a,b,f,r[i+8],11,-2022574463),f=y(f,d,a,b,r[i+11],16,1839030562),b=y(b,f,d,a,r[i+14],23,-35309556),a=y(a,b,f,d,r[i+1],4,-1530992060),d=y(d,a,b,f,r[i+4],11,1272893353),f=y(f,d,a,b,r[i+7],16,-155497632),b=y(b,f,d,a,r[i+10],23,-1094730640),a=y(a,b,f,d,r[i+13],4,681279174),d=y(d,a,b,f,r[i+0],11,-358537222),f=y(f,d,a,b,r[i+3],16,-722521979),b=y(b,f,d,a,r[i+6],23,76029189),a=y(a,b,f,d,r[i+9],4,-640364487),d=y(d,a,b,f,r[i+12],11,-421815835),f=y(f,d,a,b,r[i+15],16,530742520),a=w(a,b=y(b,f,d,a,r[i+2],23,-995338651),f,d,r[i+0],6,-198630844),d=w(d,a,b,f,r[i+7],10,1126891415),f=w(f,d,a,b,r[i+14],15,-1416354905),b=w(b,f,d,a,r[i+5],21,-57434055),a=w(a,b,f,d,r[i+12],6,1700485571),d=w(d,a,b,f,r[i+3],10,-1894986606),f=w(f,d,a,b,r[i+10],15,-1051523),b=w(b,f,d,a,r[i+1],21,-2054922799),a=w(a,b,f,d,r[i+8],6,1873313359),d=w(d,a,b,f,r[i+15],10,-30611744),f=w(f,d,a,b,r[i+6],15,-1560198380),b=w(b,f,d,a,r[i+13],21,1309151649),a=w(a,b,f,d,r[i+4],6,-145523070),d=w(d,a,b,f,r[i+11],10,-1120210379),f=w(f,d,a,b,r[i+2],15,718787259),b=w(b,f,d,a,r[i+9],21,-343485551),a=a+O>>>0,b=b+k>>>0,f=f+_>>>0,d=d+dd>>>0}return n.endian([a,b,f,d])})._ff=function(a,b,t,e,r,s,n){var o=a+(b&t|~b&e)+(r>>>0)+n;return(o<<s|o>>>32-s)+b},h._gg=function(a,b,t,e,r,s,n){var o=a+(b&e|t&~e)+(r>>>0)+n;return(o<<s|o>>>32-s)+b},h._hh=function(a,b,t,e,r,s,n){var o=a+(b^t^e)+(r>>>0)+n;return(o<<s|o>>>32-s)+b},h._ii=function(a,b,t,e,r,s,n){var o=a+(t^(b|~e))+(r>>>0)+n;return(o<<s|o>>>32-s)+b},h._blocksize=16,h._digestsize=16,t.exports=function(t,e){if(null==t)throw new Error("Illegal argument "+t);var r=n.wordsToBytes(h(t,e));return e&&e.asBytes?r:e&&e.asString?l.bytesToString(r):n.bytesToHex(r)}},960:function(t,e,r){"use strict";r(18),r(15),r(11),r(9),r(16),r(14);var n=r(21),o=r(5),c=(r(961),r(12)),l=r(261),h=r(108),v=r(29),f=r(155),d=r(39),m=r(48),x=r(102),y=r(175),w=r(10);function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function k(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(c.a)(v.a,y.a,x.a,d.a,Object(f.a)("chipGroup"),Object(m.b)("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return k(k(k(k({"v-chip":!0},x.a.options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(x.a.options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this;[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]].forEach((function(e){var r=Object(n.a)(e,2),o=r[0],c=r[1];t.$attrs.hasOwnProperty(o)&&Object(w.a)(o,c,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(h.a,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(l.b,t)},genClose:function(){var t=this;return this.$createElement(h.a,{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],r=this.generateRouteLink(),n=r.tag,data=r.data;data.attrs=k(k({},data.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:data.attrs.tabindex}),data.directives.push({name:"show",value:this.active}),data=this.setBackgroundColor(this.color,data);var o=this.textColor||this.outlined&&this.color;return t(n,this.setTextColor(o,data),e)}})},961:function(t,e,r){var content=r(962);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("197fcea4",content,!0,{sourceMap:!1})},962:function(t,e,r){var n=r(23)(!1);n.push([t.i,'.v-chip:not(.v-chip--outlined).accent,.v-chip:not(.v-chip--outlined).error,.v-chip:not(.v-chip--outlined).info,.v-chip:not(.v-chip--outlined).primary,.v-chip:not(.v-chip--outlined).secondary,.v-chip:not(.v-chip--outlined).success,.v-chip:not(.v-chip--outlined).warning{color:#fff}.theme--light.v-chip{border-color:rgba(0,0,0,.12);color:rgba(0,0,0,.87)}.theme--light.v-chip:not(.v-chip--active){background:#e0e0e0}.theme--light.v-chip:hover:before{opacity:.04}.theme--light.v-chip--active:before,.theme--light.v-chip--active:hover:before,.theme--light.v-chip:focus:before{opacity:.12}.theme--light.v-chip--active:focus:before{opacity:.16}.theme--dark.v-chip{border-color:hsla(0,0%,100%,.12);color:#fff}.theme--dark.v-chip:not(.v-chip--active){background:#555}.theme--dark.v-chip:hover:before{opacity:.08}.theme--dark.v-chip--active:before,.theme--dark.v-chip--active:hover:before,.theme--dark.v-chip:focus:before{opacity:.24}.theme--dark.v-chip--active:focus:before{opacity:.32}.v-chip{align-items:center;cursor:default;display:inline-flex;line-height:20px;max-width:100%;outline:none;overflow:hidden;padding:0 12px;position:relative;text-decoration:none;transition-duration:.28s;transition-property:box-shadow,opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);vertical-align:middle;white-space:nowrap}.v-chip:before{background-color:currentColor;bottom:0;border-radius:inherit;content:"";left:0;opacity:0;position:absolute;pointer-events:none;right:0;top:0}.v-chip .v-avatar{height:24px!important;min-width:24px!important;width:24px!important}.v-chip .v-icon{font-size:24px}.v-application--is-ltr .v-chip .v-avatar--left,.v-application--is-ltr .v-chip .v-icon--left{margin-left:-6px;margin-right:6px}.v-application--is-ltr .v-chip .v-avatar--right,.v-application--is-ltr .v-chip .v-icon--right,.v-application--is-rtl .v-chip .v-avatar--left,.v-application--is-rtl .v-chip .v-icon--left{margin-left:6px;margin-right:-6px}.v-application--is-rtl .v-chip .v-avatar--right,.v-application--is-rtl .v-chip .v-icon--right{margin-left:-6px;margin-right:6px}.v-chip:not(.v-chip--no-color) .v-icon{color:inherit}.v-chip .v-chip__close.v-icon{font-size:18px;max-height:18px;max-width:18px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-application--is-ltr .v-chip .v-chip__close.v-icon.v-icon--right{margin-right:-4px}.v-application--is-rtl .v-chip .v-chip__close.v-icon.v-icon--right{margin-left:-4px}.v-chip .v-chip__close.v-icon:active,.v-chip .v-chip__close.v-icon:focus,.v-chip .v-chip__close.v-icon:hover{opacity:.72}.v-chip .v-chip__content{align-items:center;display:inline-flex;height:100%;max-width:100%}.v-chip--active .v-icon{color:inherit}.v-chip--link:before{transition:opacity .3s cubic-bezier(.25,.8,.5,1)}.v-chip--link:focus:before{opacity:.32}.v-chip--clickable{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-chip--clickable:active{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-chip--disabled{opacity:.4;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-chip__filter{max-width:24px}.v-chip__filter.v-icon{color:inherit}.v-chip__filter.expand-x-transition-enter,.v-chip__filter.expand-x-transition-leave-active{margin:0}.v-chip--pill .v-chip__filter{margin-right:0 16px 0 0}.v-chip--pill .v-avatar{height:32px!important;width:32px!important}.v-application--is-ltr .v-chip--pill .v-avatar--left{margin-left:-12px}.v-application--is-ltr .v-chip--pill .v-avatar--right,.v-application--is-rtl .v-chip--pill .v-avatar--left{margin-right:-12px}.v-application--is-rtl .v-chip--pill .v-avatar--right{margin-left:-12px}.v-chip--label{border-radius:4px!important}.v-chip.v-chip--outlined{border-width:thin;border-style:solid}.v-chip.v-chip--outlined.v-chip--active:before{opacity:.08}.v-chip.v-chip--outlined .v-icon{color:inherit}.v-chip.v-chip--outlined.v-chip.v-chip{background-color:transparent!important}.v-chip.v-chip--selected{background:transparent}.v-chip.v-chip--selected:after{opacity:.28}.v-chip.v-size--x-small{border-radius:8px;font-size:10px;height:16px}.v-chip.v-size--small{border-radius:12px;font-size:12px;height:24px}.v-chip.v-size--default{border-radius:16px;font-size:14px;height:32px}.v-chip.v-size--large{border-radius:27px;font-size:16px;height:54px}.v-chip.v-size--x-large{border-radius:33px;font-size:18px;height:66px}',""]),t.exports=n},968:function(t,e){var r,n;r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n={rotl:function(t,b){return t<<b|t>>>32-b},rotr:function(t,b){return t<<32-b|t>>>b},endian:function(t){if(t.constructor==Number)return 16711935&n.rotl(t,8)|4278255360&n.rotl(t,24);for(var i=0;i<t.length;i++)t[i]=n.endian(t[i]);return t},randomBytes:function(t){for(var e=[];t>0;t--)e.push(Math.floor(256*Math.random()));return e},bytesToWords:function(t){for(var e=[],i=0,b=0;i<t.length;i++,b+=8)e[b>>>5]|=t[i]<<24-b%32;return e},wordsToBytes:function(t){for(var e=[],b=0;b<32*t.length;b+=8)e.push(t[b>>>5]>>>24-b%32&255);return e},bytesToHex:function(t){for(var e=[],i=0;i<t.length;i++)e.push((t[i]>>>4).toString(16)),e.push((15&t[i]).toString(16));return e.join("")},hexToBytes:function(t){for(var e=[],r=0;r<t.length;r+=2)e.push(parseInt(t.substr(r,2),16));return e},bytesToBase64:function(t){for(var e=[],i=0;i<t.length;i+=3)for(var n=t[i]<<16|t[i+1]<<8|t[i+2],o=0;o<4;o++)8*i+6*o<=8*t.length?e.push(r.charAt(n>>>6*(3-o)&63)):e.push("=");return e.join("")},base64ToBytes:function(t){t=t.replace(/[^A-Z0-9+\/]/gi,"");for(var e=[],i=0,n=0;i<t.length;n=++i%4)0!=n&&e.push((r.indexOf(t.charAt(i-1))&Math.pow(2,-2*n+8)-1)<<2*n|r.indexOf(t.charAt(i))>>>6-2*n);return e}},t.exports=n},969:function(t,e){function r(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}t.exports=function(t){return null!=t&&(r(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&r(t.slice(0,0))}(t)||!!t._isBuffer)}},986:function(t,e,r){var content=r(1062);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("ec3273e4",content,!0,{sourceMap:!1})}}]);