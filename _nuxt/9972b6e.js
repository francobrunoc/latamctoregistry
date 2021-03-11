(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{1078:function(t,e,r){"use strict";r.r(e);r(61);var n=r(19),c=r(922),o={name:"proposals",layout:"private",middleware:"authenticated",data:function(){return{loading:!0,search:"",items:[],headers:[{align:"start",text:"Title",value:"draft_title"},{text:"Main Author",value:"draft_main_author"},{text:"Proposal Date",value:"draft_proposal_date"},{text:"Objectives",value:"draft_objectives"},{text:"Publication Type",value:"publication_type"},{text:"Final Decision from LATAM CTO Registry steering committee",value:"reviewers_fina_decision"},{text:"Paper Submitted to",value:"plublisher_submission"},{text:"Publication Status",value:"submission_status"},{text:"Publication Date",value:"publication_date"}]}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.listPublicationProposals();case 2:r=e.sent,n=r.publicationProposals,t.items=n,t.loading=!1;case 6:case"end":return e.stop()}}),e)})))()}},l=r(66),f=r(107),d=r.n(f),m=r(264),v=r(898),h=r(730),x=r(1073),w=r(899),R=r(723),k=r(1062),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{loading:t.loading}},[r("template",{slot:"progress"},[r("v-progress-linear",{attrs:{color:"secondary",indeterminate:""}})],1),t._v(" "),r("v-card-title",{staticClass:"primary white--text"},[t._v("\n    Publication Panel\n    "),r("v-spacer"),t._v(" "),r("v-btn",{staticClass:"mr-3",attrs:{small:"",target:"_blank",href:"http://redcap.cardiologia.org.br/surveys/?s=H7Y4AC8W9K"}},[t._v("Submit Proposal")])],1),t._v(" "),r("v-card-text",[r("v-data-table",{staticClass:"elevation-2",attrs:{dense:"",items:t.items,headers:t.headers,loading:t.loading,search:t.search},scopedSlots:t._u([{key:"top",fn:function(){return[r("v-text-field",{staticClass:"mx-4",attrs:{label:"Search","append-icon":"mdi-magnify"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})]},proxy:!0}])})],1)],2)}),[],!1,null,"0ec02ec6",null);e.default=component.exports;d()(component,{VBtn:m.a,VCard:v.a,VCardText:h.a,VCardTitle:h.b,VDataTable:x.a,VProgressLinear:w.a,VSpacer:R.a,VTextField:k.a})},731:function(t,e,r){"use strict";(function(t){r(44),r(45),r(9),r(61);var n=r(19),c=r(879),o=r.n(c),l=r(735),f="https://7cb5vfypm9.execute-api.us-west-2.amazonaws.com/dev/",d=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(path){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(l.a)("get",path));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(path,data){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(l.a)("post",path,data));case 1:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),v=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(path,r){var n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],c={headers:{Authorization:r}},e.next=4,o.a.get(f.concat(path||""),c).then((function(e){(n=e.data).body&&(n=JSON.parse(t.from(n.body).toString("utf-8")))})).catch((function(t){return console.error(t)}));case 4:return e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),h=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(path,data,e){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=[],n={headers:{Authorization:e}},t.next=4,o.a.post(f.concat(path||""),data||"",n).then((function(t){r=t})).catch((function(t){return console.error(t)}));case 4:return t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e,r,n){return t.apply(this,arguments)}}();e.a={GET:d,get:v,POST:m,post:h}}).call(this,r(8).Buffer)},735:function(t,e,r){"use strict";r.d(e,"a",(function(){return f}));r(61);var n,c=r(19),o=r(153),l=r(731),f=function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(e,path,data){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.currentAuthenticatedUser().then((function(u){return n=u.signInUserSession.idToken.jwtToken})).catch((function(t){return console.log(t)}));case 2:if("post"!==e){t.next=6;break}return t.next=5,l.a.post(path,data,n);case 5:return t.abrupt("return",t.sent);case 6:if("get"!==e){t.next=10;break}return t.next=9,l.a.get(path,n);case 9:return t.abrupt("return",t.sent);case 10:case"end":return t.stop()}}),t)})));return function(e,r,n){return t.apply(this,arguments)}}()},922:function(t,e,r){"use strict";r(61);var n=r(19),c=r(731),o=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(path){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",c.a.GET(path));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(path,data){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",c.a.POST(path,data));case 1:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),f={listAcceptedPublications:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o("publications/accepted/list");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},listInternalDocuments:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o("publications/documents/list");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},listPublicationProposals:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o("publications/proposals/list");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},downloadDocument:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l("publications/documents/download/".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()}};e.a=f}}]);