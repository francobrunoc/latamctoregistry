(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{510:function(e,t,r){"use strict";(function(e){r(29),r(30),r(7),r(59);var n=r(17),o=r(658),c=r.n(o),f=r(514),l=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(path){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(f.a)(path));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(path,r){var n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=[],o={headers:{Authorization:r}},t.next=4,c.a.get("https://7cb5vfypm9.execute-api.us-west-2.amazonaws.com/dev/".concat(path||""),o).then((function(t){(n=t.data).body&&(n=JSON.parse(e.from(n.body).toString("utf-8")))})).catch((function(e){return console.error(e)}));case 4:return t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}();t.a={GET:l,get:d}}).call(this,r(14).Buffer)},514:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));r(59);var n,o=r(17),c=r(129),f=r(510),l=function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(path){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.currentAuthenticatedUser().then((function(u){return n=u.signInUserSession.idToken.jwtToken})).catch((function(e){return console.log(e)}));case 2:return e.next=4,f.a.get(path,n);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},783:function(e,t,r){"use strict";r.r(t);r(59);var n=r(17),o=r(510),c=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(path){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o.a.GET(path));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f={listUsers:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("accounts/users/list");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()}},l={name:"auth",layout:"private",middleware:"master",data:function(){return{cognitoUrl:"https://".concat("us-west-2",".console.aws.amazon.com/cognito/users/?region=").concat("us-west-2","#/pool/").concat("us-west-2_WjQMGzv9y"),loading:!0,users:[],headers:[{text:"Username",align:"start",value:"Username"},{text:"Status",value:"UserStatus"},{text:"Enabled",value:"Enabled"},{text:"Group",value:"Group"}]}},methods:{getColor:function(e){return"standard"===e?"cyan":"master"===e?"green":void 0}},created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("us-west-2"),t.next=3,f.listUsers().then((function(u){u.masters.Users.forEach((function(t){t.Group="master",e.users.push(t)})),u.standards.Users.forEach((function(t){t.Group="standard",e.users.push(t)})),e.loading=!1}));case 3:case"end":return t.stop()}}),t)})))()}},d=r(55),m=r(92),v=r.n(m),h=r(210),w=r(515),x=r(513),k=r(663),R=r(779),y=r(196),U=r(498),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("v-card-title",[e._v("Accounts"),r("v-spacer"),r("v-btn",{attrs:{target:"_blank",href:e.cognitoUrl,icon:""}},[r("v-icon",[e._v("mdi-cog-outline")])],1)],1),e._v(" "),r("v-data-table",{attrs:{items:e.users,headers:e.headers,loading:e.loading},scopedSlots:e._u([{key:"item.Group",fn:function(t){var n=t.item;return[r("v-chip",{attrs:{color:e.getColor(n.Group),dark:""}},[e._v("\n        "+e._s(n.Group)+"\n      ")])]}}])})],1)}),[],!1,null,null,null);t.default=component.exports;v()(component,{VBtn:h.a,VCard:w.a,VCardTitle:x.b,VChip:k.a,VDataTable:R.a,VIcon:y.a,VSpacer:U.a})}}]);