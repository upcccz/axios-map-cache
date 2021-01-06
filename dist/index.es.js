var e="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function t(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}var r=t,o=n;function i(e){if(r===setTimeout)return setTimeout(e,0);if((r===t||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}"function"==typeof e.setTimeout&&(r=setTimeout),"function"==typeof e.clearTimeout&&(o=clearTimeout);var s,a=[],c=!1,u=-1;function f(){c&&s&&(c=!1,s.length?a=s.concat(a):u=-1,a.length&&l())}function l(){if(!c){var e=i(f);c=!0;for(var t=a.length;t;){for(s=a,a=[];++u<t;)s&&s[u].run();u=-1,t=a.length}s=null,c=!1,function(e){if(o===clearTimeout)return clearTimeout(e);if((o===n||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(e);try{o(e)}catch(t){try{return o.call(null,e)}catch(t){return o.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}p.prototype.run=function(){this.fun.apply(null,this.array)};function h(){}var d=h,m=h,g=h,y=h,v=h,w=h,x=h;var b=e.performance||{},C=b.now||b.mozNow||b.msNow||b.oNow||b.webkitNow||function(){return(new Date).getTime()};var E=new Date;var T={nextTick:function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];a.push(new p(e,t)),1!==a.length||c||i(l)},title:"browser",browser:!0,env:{},argv:[],version:"",versions:{},on:d,addListener:m,once:g,off:y,removeListener:v,removeAllListeners:w,emit:x,binding:function(e){throw new Error("process.binding is not supported")},cwd:function(){return"/"},chdir:function(e){throw new Error("process.chdir is not supported")},umask:function(){return 0},hrtime:function(e){var t=.001*C.call(b),n=Math.floor(t),r=Math.floor(t%1*1e9);return e&&(n-=e[0],(r-=e[1])<0&&(n--,r+=1e9)),[n,r]},platform:"browser",release:{},config:{},uptime:function(){return(new Date-E)/1e3}};"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var S,j=(function(e,t){e.exports=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){function r(e){var t=new s(e),n=i(s.prototype.request,t);return o.extend(n,s.prototype,t),o.extend(n,t),n}var o=n(2),i=n(3),s=n(4),a=n(22),c=r(n(10));c.Axios=s,c.create=function(e){return r(a(c.defaults,e))},c.Cancel=n(23),c.CancelToken=n(24),c.isCancel=n(9),c.all=function(e){return Promise.all(e)},c.spread=n(25),c.isAxiosError=n(26),e.exports=c,e.exports.default=c},function(e,t,n){function r(e){return"[object Array]"===j.call(e)}function o(e){return void 0===e}function i(e){return null!==e&&!o(e)&&null!==e.constructor&&!o(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function s(e){return"[object ArrayBuffer]"===j.call(e)}function a(e){return"undefined"!=typeof FormData&&e instanceof FormData}function c(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function u(e){return"string"==typeof e}function f(e){return"number"==typeof e}function l(e){return null!==e&&"object"==typeof e}function p(e){if("[object Object]"!==j.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function h(e){return"[object Date]"===j.call(e)}function d(e){return"[object File]"===j.call(e)}function m(e){return"[object Blob]"===j.call(e)}function g(e){return"[object Function]"===j.call(e)}function y(e){return l(e)&&g(e.pipe)}function v(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function w(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function x(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document}function b(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),r(e))for(var n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}function C(){function e(e,n){p(t[n])&&p(e)?t[n]=C(t[n],e):p(e)?t[n]=C({},e):r(e)?t[n]=e.slice():t[n]=e}for(var t={},n=0,o=arguments.length;n<o;n++)b(arguments[n],e);return t}function E(e,t,n){return b(t,(function(t,r){e[r]=n&&"function"==typeof t?S(t,n):t})),e}function T(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}var S=n(3),j=Object.prototype.toString;e.exports={isArray:r,isArrayBuffer:s,isBuffer:i,isFormData:a,isArrayBufferView:c,isString:u,isNumber:f,isObject:l,isPlainObject:p,isUndefined:o,isDate:h,isFile:d,isBlob:m,isFunction:g,isStream:y,isURLSearchParams:v,isStandardBrowserEnv:x,forEach:b,merge:C,extend:E,trim:w,stripBOM:T}},function(e,t){e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},function(e,t,n){function r(e){this.defaults=e,this.interceptors={request:new s,response:new s}}var o=n(2),i=n(5),s=n(6),a=n(7),c=n(22);r.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=c(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[a,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},r.prototype.getUri=function(e){return e=c(this.defaults,e),i(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},o.forEach(["delete","get","head","options"],(function(e){r.prototype[e]=function(t,n){return this.request(c(n||{},{method:e,url:t,data:(n||{}).data}))}})),o.forEach(["post","put","patch"],(function(e){r.prototype[e]=function(t,n,r){return this.request(c(r||{},{method:e,url:t,data:n}))}})),e.exports=r},function(e,t,n){function r(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=n(2);e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(o.isURLSearchParams(t))i=t.toString();else{var s=[];o.forEach(t,(function(e,t){null!=e&&(o.isArray(e)?t+="[]":e=[e],o.forEach(e,(function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),s.push(r(t)+"="+r(e))})))})),i=s.join("&")}if(i){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},function(e,t,n){function r(){this.handlers=[]}var o=n(2);r.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){o.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=r},function(e,t,n){function r(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var o=n(2),i=n(8),s=n(9),a=n(10);e.exports=function(e){return r(e),e.headers=e.headers||{},e.data=i(e.data,e.headers,e.transformRequest),e.headers=o.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),o.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||a.adapter)(e).then((function(t){return r(e),t.data=i(t.data,t.headers,e.transformResponse),t}),(function(t){return s(t)||(r(e),t&&t.response&&(t.response.data=i(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},function(e,t,n){var r=n(2);e.exports=function(e,t,n){return r.forEach(n,(function(n){e=n(e,t)})),e}},function(e,t){e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,n){function r(e,t){!i.isUndefined(e)&&i.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function o(){var e;return("undefined"!=typeof XMLHttpRequest||void 0!==T&&"[object process]"===Object.prototype.toString.call(T))&&(e=n(12)),e}var i=n(2),s=n(11),a={"Content-Type":"application/x-www-form-urlencoded"},c={adapter:o(),transformRequest:[function(e,t){return s(t,"Accept"),s(t,"Content-Type"),i.isFormData(e)||i.isArrayBuffer(e)||i.isBuffer(e)||i.isStream(e)||i.isFile(e)||i.isBlob(e)?e:i.isArrayBufferView(e)?e.buffer:i.isURLSearchParams(e)?(r(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):i.isObject(e)?(r(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};i.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),i.forEach(["post","put","patch"],(function(e){c.headers[e]=i.merge(a)})),e.exports=c},function(e,t,n){var r=n(2);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},function(e,t,n){var r=n(2),o=n(13),i=n(16),s=n(5),a=n(17),c=n(20),u=n(21),f=n(14);e.exports=function(e){return new Promise((function(t,n){var l=e.data,p=e.headers;r.isFormData(l)&&delete p["Content-Type"];var h=new XMLHttpRequest;if(e.auth){var d=e.auth.username||"",m=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";p.Authorization="Basic "+btoa(d+":"+m)}var g=a(e.baseURL,e.url);if(h.open(e.method.toUpperCase(),s(g,e.params,e.paramsSerializer),!0),h.timeout=e.timeout,h.onreadystatechange=function(){if(h&&4===h.readyState&&(0!==h.status||h.responseURL&&0===h.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in h?c(h.getAllResponseHeaders()):null,i={data:e.responseType&&"text"!==e.responseType?h.response:h.responseText,status:h.status,statusText:h.statusText,headers:r,config:e,request:h};o(t,n,i),h=null}},h.onabort=function(){h&&(n(f("Request aborted",e,"ECONNABORTED",h)),h=null)},h.onerror=function(){n(f("Network Error",e,null,h)),h=null},h.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(f(t,e,"ECONNABORTED",h)),h=null},r.isStandardBrowserEnv()){var y=(e.withCredentials||u(g))&&e.xsrfCookieName?i.read(e.xsrfCookieName):void 0;y&&(p[e.xsrfHeaderName]=y)}if("setRequestHeader"in h&&r.forEach(p,(function(e,t){void 0===l&&"content-type"===t.toLowerCase()?delete p[t]:h.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(h.withCredentials=!!e.withCredentials),e.responseType)try{h.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&h.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&h.upload&&h.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){h&&(h.abort(),n(e),h=null)})),l||(l=null),h.send(l)}))}},function(e,t,n){var r=n(14);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},function(e,t,n){var r=n(15);e.exports=function(e,t,n,o,i){var s=new Error(e);return r(s,t,n,o,i)}},function(e,t){e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},function(e,t,n){var r=n(2);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,o,i,s){var a=[];a.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(i)&&a.push("domain="+i),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,n){var r=n(18),o=n(19);e.exports=function(e,t){return e&&!r(t)?o(e,t):t}},function(e,t){e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t){e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,n){var r=n(2),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,s={};return e?(r.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),n=r.trim(e.substr(i+1)),t){if(s[t]&&o.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([n]):s[t]?s[t]+", "+n:n}})),s):s}},function(e,t,n){var r=n(2);e.exports=r.isStandardBrowserEnv()?function(){function e(e){var t=e;return n&&(o.setAttribute("href",t),t=o.href),o.setAttribute("href",t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var t,n=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return t=e(window.location.href),function(n){var o=r.isString(n)?e(n):n;return o.protocol===t.protocol&&o.host===t.host}}():function(){return!0}},function(e,t,n){var r=n(2);e.exports=function(e,t){function n(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function o(o){r.isUndefined(t[o])?r.isUndefined(e[o])||(i[o]=n(void 0,e[o])):i[o]=n(e[o],t[o])}t=t||{};var i={},s=["url","method","data"],a=["headers","auth","proxy","params"],c=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],u=["validateStatus"];r.forEach(s,(function(e){r.isUndefined(t[e])||(i[e]=n(void 0,t[e]))})),r.forEach(a,o),r.forEach(c,(function(o){r.isUndefined(t[o])?r.isUndefined(e[o])||(i[o]=n(void 0,e[o])):i[o]=n(void 0,t[o])})),r.forEach(u,(function(r){r in t?i[r]=n(e[r],t[r]):r in e&&(i[r]=n(void 0,e[r]))}));var f=s.concat(a).concat(c).concat(u),l=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===f.indexOf(e)}));return r.forEach(l,o),i}},function(e,t){function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},function(e,t,n){function r(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new o(e),t(n.reason))}))}var o=n(23);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var e;return{token:new r((function(t){e=t})),cancel:e}},e.exports=r},function(e,t){e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t){e.exports=function(e){return"object"==typeof e&&!0===e.isAxiosError}}])}(S={exports:{}},S.exports),S.exports);j.axios;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function O(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((r=r.apply(e,t||[])).next())}))}const A={withData:["post","put","patch"],withNoData:["delete","get","head","options","request"]};function R(e,t,n,r,o){return O(this,void 0,void 0,(function*(){let i;const s=r.mapCache.getShowLog();if(i="string"==typeof n[0]?o&&A.withData.includes(o)?Object.assign({url:n[0],method:o,data:n[1]},n[2]):Object.assign({url:n[0],method:o},n[1]):n[0],s&&console.log("key -> config",i),i.isCache){if(r.mapCache.hasCache(i))return s&&console.log("%c从缓存拿到的，数据","color:green",r.mapCache.getCache(i)),s&&console.log("当前缓存size",r.mapCache.getCacheSize()),Promise.resolve(r.mapCache.getCache(i));{s&&console.log("%c缓存中没有","color:#b29400");let o=yield e.apply(t,n);if(200===o.status)return o=Object.assign(Object.assign({},o),{_CACHE_FLAG:!0}),s&&console.log("请求成功插入缓存",o),r.mapCache.setCache(i,o),Promise.resolve(o)}}return s&&console.log("%c不走缓存","color:red"),e.apply(t,n)}))}function N(e,t,n){return new Proxy(Reflect.get(e,t),{apply:(e,r,o)=>R(e,r,o,n,t)})}var L={apply:function(e,t,n){return R(e,t,n,e)},get:function(e,t,n){return"create"===t?r=>new Proxy(e[t](r),{apply:(e,t,r)=>R(e,t,r,n),get:(e,t)=>"mapCache"===t?n.mapCache:A.withData.includes(t)||A.withNoData.includes(t)?N(e,t,n):Reflect.get(e,t)}):A.withData.includes(t)||A.withNoData.includes(t)?N(e,t,n):Reflect.get(e,t)}};const P=require("lodash/isEqual");function U(e){return(null==e?void 0:e.method)?Object.assign(Object.assign({},e),{method:e.method.toLowerCase()}):e}function k(e,t){return P(U(e),U(t))}const B=Symbol("store"),D=Symbol("config"),q={size:20,showLog:!1};class z{constructor(){this[B]=new Map,this[D]=q}setCacheConfig(e,t){this[D]=e,(null==t?void 0:t.force)||(this[D].size=Math.min(e.size||20,50))}getCacheConfig(){return this[D]}hasCache(e){return 1===[...this[B].keys()].filter((t=>k(t,e))).length}setCache(e,t){if(this[B].size>=this[D].size){const e=[...this[B].keys()][0];this[B].delete(e)}this[B].set(e,t)}getCache(e){let t=null;return[...this[B].keys()].forEach((n=>{k(n,e)&&(t=this[B].get(n))})),t}getCacheSize(){return this[B].size}getShowLog(){return this[D].showLog}removeCache(e){[...this[D].keys()].forEach((t=>{k(t,e)&&this[D].delete(t)}))}removeAllCache(){this[D].clear()}}const F=function(e){const t=new z;return Object.assign(e,{mapCache:t}),new Proxy(e,L)}(j);export{F as axiosCache};
