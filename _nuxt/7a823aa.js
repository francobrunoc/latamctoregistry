(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{1082:function(t,e,r){"use strict";r.r(e);r(62);var n=r(19),c=(r(51),r(732)),o=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(path){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",c.a.GET(path));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f={listUsers:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o("users/list");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()}},l={name:"auth",layout:"private",middleware:"master",data:function(){return{cognitoUrl:"https://".concat("us-west-2",".console.aws.amazon.com/cognito/users/?region=").concat("us-west-2","#/pool/").concat("us-west-2_WjQMGzv9y"),loading:!0,users:[],search:"",headers:[{text:"Username",align:"start",value:"Username"},{text:"Status",value:"UserStatus"},{text:"Enabled",value:"Enabled"},{text:"Email",value:"Attributes[2].Value"},{text:"Group",value:"Group"}]}},methods:{capitalize:function(t){return t.charAt(0).toUpperCase()+t.slice(1)},getColor:function(t){return"standard"===t?"cyan":"master"===t?"green":void 0}},created:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.listUsers().then((function(u){u.masters.forEach((function(e){e.Group="master",t.users.push(e)})),u.standards.forEach((function(e){e.Group="standard",t.users.push(e)})),t.loading=!1}));case 2:case"end":return e.stop()}}),e)})))()}},d=r(55),h=r(81),m=r.n(h),v=r(264),w=r(899),x=r(731),k=r(959),y=r(1078),R=r(240),_=r(725),j=r(1067),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-card-title",[t._v("Accounts"),r("v-spacer"),r("v-btn",{attrs:{target:"_blank",href:t.cognitoUrl,icon:""}},[r("v-icon",[t._v("mdi-cog-outline")])],1)],1),t._v(" "),r("v-data-table",{attrs:{items:t.users,headers:t.headers,loading:t.loading,search:t.search},scopedSlots:t._u([{key:"top",fn:function(){return[r("v-text-field",{staticClass:"mx-4",attrs:{label:"Search","append-icon":"mdi-magnify"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})]},proxy:!0},{key:"item.UserStatus",fn:function(e){var n=e.item;return[r("v-chip",{attrs:{small:""}},[t._v("\n        "+t._s(n.UserStatus)+"\n      ")])]}},{key:"item.Enabled",fn:function(e){return[e.item.Enabled?r("v-icon",{attrs:{color:"success"}},[t._v(" mdi-check ")]):r("v-icon",{attrs:{color:"error"}},[t._v(" mdi-cancel ")])]}},{key:"item.Group",fn:function(e){var n=e.item;return[r("v-chip",{attrs:{color:t.getColor(n.Group),dark:""}},[t._v("\n        "+t._s(t.capitalize(n.Group))+"\n      ")])]}}])})],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VBtn:v.a,VCard:w.a,VCardTitle:x.b,VChip:k.a,VDataTable:y.a,VIcon:R.a,VSpacer:_.a,VTextField:j.a})},732:function(t,e,r){"use strict";(function(t){r(44),r(45),r(9),r(62);var n=r(19),c=r(880),o=r.n(c),f=r(736),l="http://localhost:3000/dev/",d=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(path){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(f.a)("get",path));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(path,data){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(f.a)("post",path,data));case 1:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),m=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(path,r){var n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],c={headers:{Authorization:r}},e.next=4,o.a.get(l.concat(path||""),c).then((function(e){(n=e.data).body&&(n=JSON.parse(t.from(n.body).toString("utf-8")))})).catch((function(t){return console.error(t)}));case 4:return e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),v=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(path,data,e){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=[],n={headers:{Authorization:e}},t.next=4,o.a.post(l.concat(path||""),data||"",n).then((function(t){r=t})).catch((function(t){return console.error(t)}));case 4:return t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e,r,n){return t.apply(this,arguments)}}();e.a={GET:d,get:m,POST:h,post:v}}).call(this,r(8).Buffer)},736:function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));r(62);var n,c=r(19),o=r(153),f=r(732),l=function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(e,path,data){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.currentAuthenticatedUser().then((function(u){return n=u.signInUserSession.idToken.jwtToken})).catch((function(t){return console.log(t)}));case 2:if("post"!==e){t.next=6;break}return t.next=5,f.a.post(path,data,n);case 5:return t.abrupt("return",t.sent);case 6:if("get"!==e){t.next=10;break}return t.next=9,f.a.get(path,n);case 9:return t.abrupt("return",t.sent);case 10:case"end":return t.stop()}}),t)})));return function(e,r,n){return t.apply(this,arguments)}}()}}]);