/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{663:function(t,e,r){"use strict";r.r(e),r.d(e,"scopeCss",(function(){return M}));var n=function(){for(var s=0,i=0,t=arguments.length;i<t;i++)s+=arguments[i].length;var e=Array(s),r=0;for(i=0;i<t;i++)for(var a=arguments[i],n=0,o=a.length;n<o;n++,r++)e[r]=a[n];return e},o="-shadowcsshost",c="-shadowcssslotted",l="-shadowcsscontext",f=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",h=new RegExp("(-shadowcsshost"+f,"gim"),d=new RegExp("(-shadowcsscontext"+f,"gim"),v=new RegExp("(-shadowcssslotted"+f,"gim"),m="-shadowcsshost-no-combinator",w=/-shadowcsshost-no-combinator([^\s]*)/,x=[/::shadow/g,/::content/g],_=/-shadowcsshost/gim,S=/:host/gim,O=/::slotted/gim,W=/:host-context/gim,j=/\/\*\s*[\s\S]*?\*\//g,k=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,E=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,R=/([{}])/g,C="%BLOCK%",L=function(input,t){var e=T(input),r=0;return e.escapedString.replace(E,(function(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];var c=n[2],content="",l=n[4],f="";l&&l.startsWith("{%BLOCK%")&&(content=e.blocks[r++],l=l.substring(C.length+1),f="{");var h={selector:c,content:content},d=t(h);return""+n[1]+d.selector+n[3]+f+d.content+l}))},T=function(input){for(var t=input.split(R),e=[],r=[],n=0,o=[],c=0;c<t.length;c++){var l=t[c];"}"===l&&n--,n>0?o.push(l):(o.length>0&&(r.push(o.join("")),e.push(C),o=[]),e.push(l)),"{"===l&&n++}return o.length>0&&(r.push(o.join("")),e.push(C)),{escapedString:e.join(""),blocks:r}},B=function(t,e,r){return t.replace(e,(function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(t[2]){for(var n=t[2].split(","),o=[],i=0;i<n.length;i++){var p=n[i].trim();if(!p)break;o.push(r(m,p,t[3]))}return o.join(",")}return m+t[3]}))},K=function(t,e,r){return t+e.replace(o,"")+r},I=function(t,e,r){return e.indexOf(o)>-1?K(t,e,r):t+e+r+", "+e+" "+t+r},J=function(t,e){return!function(t){return t=t.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+t+")([>\\s~+[.,{:][\\s\\S]*)?$","m")}(e).test(t)},$=function(t,e,r){for(var n,o="."+(e=e.replace(/\[is=([^\]]*)\]/g,(function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return e[0]}))),c=function(p){var t=p.trim();if(!t)return"";if(p.indexOf(m)>-1)t=function(t,e,r){if(_.lastIndex=0,_.test(t)){var n="."+r;return t.replace(w,(function(t,e){return e.replace(/([^:]*)(:*)(.*)/,(function(t,e,r,o){return e+n+r+o}))})).replace(_,n+" ")}return e+" "+t}(p,e,r);else{var n=p.replace(_,"");if(n.length>0){var c=n.match(/([^:]*)(:*)(.*)/);c&&(t=c[1]+o+c[2]+c[3])}}return t},l=function(t){var e=[],r=0;return{content:(t=t.replace(/(\[[^\]]*\])/g,(function(t,n){var o="__ph-"+r+"__";return e.push(n),r++,o}))).replace(/(:nth-[-\w]+)(\([^)]+\))/g,(function(t,n,o){var c="__ph-"+r+"__";return e.push(o),r++,n+c})),placeholders:e}}(t),f="",h=0,d=/( |>|\+|~(?!=))\s*/g,v=!((t=l.content).indexOf(m)>-1);null!==(n=d.exec(t));){var x=n[1],S=t.slice(h,n.index).trim();f+=((v=v||S.indexOf(m)>-1)?c(S):S)+" "+x+" ",h=d.lastIndex}var O,W=t.substring(h);return f+=(v=v||W.indexOf(m)>-1)?c(W):W,O=l.placeholders,f.replace(/__ph-(\d+)__/g,(function(t,e){return O[+e]}))},y=function(t,e,r,n,o){return L(t,(function(t){var o=t.selector,content=t.content;return"@"!==t.selector[0]?o=function(t,e,r,n){return t.split(",").map((function(t){return n&&t.indexOf("."+n)>-1?t.trim():J(t,e)?$(t,e,r).trim():t.trim()})).join(", ")}(t.selector,e,r,n):(t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document"))&&(content=y(t.content,e,r,n)),{selector:o.replace(/\s{2,}/g," ").trim(),content:content}}))},A=function(t,e,r,n,f){var w=function(t,e){var r="."+e+" > ",n=[];return t=t.replace(v,(function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(t[2]){for(var o=t[2].trim(),c=t[3],l=r+o+c,f="",i=t[4]-1;i>=0;i--){var h=t[5][i];if("}"===h||","===h)break;f=h+f}var d=f+l,v=""+f.trimRight()+l.trim();if(d.trim()!==v.trim()){var w=v+", "+d;n.push({orgSelector:d,updatedSelector:w})}return l}return m+t[3]})),{selectors:n,cssText:t}}(t=function(t){return B(t,d,I)}(t=function(t){return B(t,h,K)}(t=t.replace(W,l).replace(S,o).replace(O,c))),n);return t=function(t){return x.reduce((function(t,pattern){return t.replace(pattern," ")}),t)}(t=w.cssText),e&&(t=y(t,e,r,n)),{cssText:(t=(t=t.replace(/-shadowcsshost-no-combinator/g,"."+r)).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:w.selectors}},M=function(t,e,r){var o=e+"-h",c=e+"-s",l=t.match(k)||[];t=function(input){return input.replace(j,"")}(t);var f=[];if(r){var h=function(t){var e="/*!@___"+f.length+"___*/",r="/*!@"+t.selector+"*/";return f.push({placeholder:e,comment:r}),t.selector=e+t.selector,t};t=L(t,(function(t){return"@"!==t.selector[0]?h(t):t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document")?(t.content=L(t.content,h),t):t}))}var d=A(t,e,o,c);return t=n([d.cssText],l).join("\n"),r&&f.forEach((function(e){var r=e.placeholder,n=e.comment;t=t.replace(r,n)})),d.slottedSelectors.forEach((function(e){t=t.replace(e.orgSelector,e.updatedSelector)})),t}}}]);