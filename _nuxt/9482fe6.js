/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{620:function(t,r,e){"use strict";e.r(r),e.d(r,"scopeCss",(function(){return I}));var n=function(){for(var s=0,i=0,t=arguments.length;i<t;i++)s+=arguments[i].length;var r=Array(s),e=0;for(i=0;i<t;i++)for(var a=arguments[i],n=0,o=a.length;n<o;n++,e++)r[e]=a[n];return r},o=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",c=new RegExp("(-shadowcsshost"+o,"gim"),l=new RegExp("(-shadowcsscontext"+o,"gim"),h=new RegExp("(-shadowcssslotted"+o,"gim"),f=/-shadowcsshost-no-combinator([^\s]*)/,d=[/::shadow/g,/::content/g],m=/-shadowcsshost/gim,v=/:host/gim,w=/::slotted/gim,x=/:host-context/gim,_=/\/\*\s*[\s\S]*?\*\//g,O=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,S=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,W=/([{}])/g,j=function(input,t){var r=k(input),e=0;return r.escapedString.replace(S,(function(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];var c=n[2],content="",l=n[4],h="";l&&l.startsWith("{%BLOCK%")&&(content=r.blocks[e++],l=l.substring("%BLOCK%".length+1),h="{");var f={selector:c,content:content},d=t(f);return""+n[1]+d.selector+n[3]+h+d.content+l}))},k=function(input){for(var t=input.split(W),r=[],e=[],n=0,o=[],c=0;c<t.length;c++){var l=t[c];"}"===l&&n--,n>0?o.push(l):(o.length>0&&(e.push(o.join("")),r.push("%BLOCK%"),o=[]),r.push(l)),"{"===l&&n++}return o.length>0&&(e.push(o.join("")),r.push("%BLOCK%")),{escapedString:r.join(""),blocks:e}},C=function(t,r,e){return t.replace(r,(function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];if(t[2]){for(var n=t[2].split(","),o=[],i=0;i<n.length;i++){var p=n[i].trim();if(!p)break;o.push(e("-shadowcsshost-no-combinator",p,t[3]))}return o.join(",")}return"-shadowcsshost-no-combinator"+t[3]}))},E=function(t,r,e){return t+r.replace("-shadowcsshost","")+e},L=function(t,r,e){return r.indexOf("-shadowcsshost")>-1?E(t,r,e):t+r+e+", "+r+" "+t+e},R=function(t,r){return!function(t){return t=t.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+t+")([>\\s~+[.,{:][\\s\\S]*)?$","m")}(r).test(t)},B=function(t,r,e){for(var n,o="."+(r=r.replace(/\[is=([^\]]*)\]/g,(function(t){for(var r=[],e=1;e<arguments.length;e++)r[e-1]=arguments[e];return r[0]}))),c=function(p){var t=p.trim();if(!t)return"";if(p.indexOf("-shadowcsshost-no-combinator")>-1)t=function(t,r,e){if(m.lastIndex=0,m.test(t)){var n="."+e;return t.replace(f,(function(t,r){return r.replace(/([^:]*)(:*)(.*)/,(function(t,r,e,o){return r+n+e+o}))})).replace(m,n+" ")}return r+" "+t}(p,r,e);else{var n=p.replace(m,"");if(n.length>0){var c=n.match(/([^:]*)(:*)(.*)/);c&&(t=c[1]+o+c[2]+c[3])}}return t},l=function(t){var r=[],e=0;return{content:(t=t.replace(/(\[[^\]]*\])/g,(function(t,n){var o="__ph-"+e+"__";return r.push(n),e++,o}))).replace(/(:nth-[-\w]+)(\([^)]+\))/g,(function(t,n,o){var c="__ph-"+e+"__";return r.push(o),e++,n+c})),placeholders:r}}(t),h="",d=0,v=/( |>|\+|~(?!=))\s*/g,w=!((t=l.content).indexOf("-shadowcsshost-no-combinator")>-1);null!==(n=v.exec(t));){var x=n[1],_=t.slice(d,n.index).trim();h+=((w=w||_.indexOf("-shadowcsshost-no-combinator")>-1)?c(_):_)+" "+x+" ",d=v.lastIndex}var O,S=t.substring(d);return h+=(w=w||S.indexOf("-shadowcsshost-no-combinator")>-1)?c(S):S,O=l.placeholders,h.replace(/__ph-(\d+)__/g,(function(t,r){return O[+r]}))},K=function(t,r,e,n,o){return j(t,(function(t){var o=t.selector,content=t.content;return"@"!==t.selector[0]?o=function(t,r,e,n){return t.split(",").map((function(t){return n&&t.indexOf("."+n)>-1?t.trim():R(t,r)?B(t,r,e).trim():t.trim()})).join(", ")}(t.selector,r,e,n):(t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document"))&&(content=K(t.content,r,e,n)),{selector:o.replace(/\s{2,}/g," ").trim(),content:content}}))},T=function(t,r,e,n,o){var f=function(t,r){var e="."+r+" > ",n=[];return t=t.replace(h,(function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];if(t[2]){for(var o=t[2].trim(),c=t[3],l=e+o+c,h="",i=t[4]-1;i>=0;i--){var f=t[5][i];if("}"===f||","===f)break;h=f+h}var d=h+l,m=""+h.trimRight()+l.trim();if(d.trim()!==m.trim()){var v=m+", "+d;n.push({orgSelector:d,updatedSelector:v})}return l}return"-shadowcsshost-no-combinator"+t[3]})),{selectors:n,cssText:t}}(t=function(t){return C(t,l,L)}(t=function(t){return C(t,c,E)}(t=t.replace(x,"-shadowcsscontext").replace(v,"-shadowcsshost").replace(w,"-shadowcssslotted"))),n);return t=function(t){return d.reduce((function(t,pattern){return t.replace(pattern," ")}),t)}(t=f.cssText),r&&(t=K(t,r,e,n)),{cssText:(t=(t=t.replace(/-shadowcsshost-no-combinator/g,"."+e)).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:f.selectors}},I=function(t,r,e){var o=r+"-h",c=r+"-s",l=t.match(O)||[];t=function(input){return input.replace(_,"")}(t);var h=[];if(e){var f=function(t){var r="/*!@___"+h.length+"___*/",e="/*!@"+t.selector+"*/";return h.push({placeholder:r,comment:e}),t.selector=r+t.selector,t};t=j(t,(function(t){return"@"!==t.selector[0]?f(t):t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document")?(t.content=j(t.content,f),t):t}))}var d=T(t,r,o,c);return t=n([d.cssText],l).join("\n"),e&&h.forEach((function(r){var e=r.placeholder,n=r.comment;t=t.replace(e,n)})),d.slottedSelectors.forEach((function(r){t=t.replace(r.orgSelector,r.updatedSelector)})),t}}}]);