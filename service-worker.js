(()=>{"use strict";var e={295:()=>{try{self["workbox:core:5.1.4"]&&_()}catch(e){}},229:()=>{try{self["workbox:expiration:5.1.4"]&&_()}catch(e){}},740:()=>{try{self["workbox:precaching:5.1.4"]&&_()}catch(e){}},130:()=>{try{self["workbox:routing:5.1.4"]&&_()}catch(e){}},205:()=>{try{self["workbox:strategies:5.1.4"]&&_()}catch(e){}}},t={};function s(n){var a=t[n];if(void 0!==a)return a.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,s),r.exports}s(295);const n=function(e){let t=e;for(var s=arguments.length,n=new Array(s>1?s-1:0),a=1;a<s;a++)n[a-1]=arguments[a];return n.length>0&&(t+=" :: ".concat(JSON.stringify(n))),t};class a extends Error{constructor(e,t){super(n(e,t)),this.name=e,this.details=t}}const r=new Set;const i={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!==typeof registration?registration.scope:""},c=e=>[i.prefix,e,i.suffix].filter((e=>e&&e.length>0)).join("-"),o=e=>e||c(i.precache),h=e=>e||c(i.runtime);const l=e=>new URL(String(e),location.href).href.replace(new RegExp("^".concat(location.origin)),""),u=(e,t)=>e.filter((e=>t in e)),d=async e=>{let{request:t,mode:s,plugins:n=[]}=e;const a=u(n,"cacheKeyWillBeUsed");let r=t;for(const i of a)r=await i.cacheKeyWillBeUsed.call(i,{mode:s,request:r}),"string"===typeof r&&(r=new Request(r));return r},p=async e=>{let{cacheName:t,request:s,event:n,matchOptions:a,plugins:r=[]}=e;const i=await self.caches.open(t),c=await d({plugins:r,request:s,mode:"read"});let o=await i.match(c,a);for(const h of r)if("cachedResponseWillBeUsed"in h){const e=h.cachedResponseWillBeUsed;o=await e.call(h,{cacheName:t,event:n,matchOptions:a,cachedResponse:o,request:c})}return o},f=async e=>{let{cacheName:t,request:s,response:n,event:i,plugins:c=[],matchOptions:o}=e;const h=await d({plugins:c,request:s,mode:"write"});if(!n)throw new a("cache-put-with-no-response",{url:l(h.url)});const f=await(async e=>{let{request:t,response:s,event:n,plugins:a=[]}=e,r=s,i=!1;for(const c of a)if("cacheWillUpdate"in c){i=!0;const e=c.cacheWillUpdate;if(r=await e.call(c,{request:t,response:r,event:n}),!r)break}return i||(r=r&&200===r.status?r:void 0),r||null})({event:i,plugins:c,response:n,request:h});if(!f)return void 0;const g=await self.caches.open(t),m=u(c,"cacheDidUpdate"),w=m.length>0?await p({cacheName:t,matchOptions:o,request:h}):null;try{await g.put(h,f)}catch(y){throw"QuotaExceededError"===y.name&&await async function(){for(const e of r)await e()}(),y}for(const a of m)await a.cacheDidUpdate.call(a,{cacheName:t,event:i,oldResponse:w,newResponse:f,request:h})},g=p;let m;function w(e){e.then((()=>{}))}class y{constructor(e,t){let{onupgradeneeded:s,onversionchange:n}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this._db=null,this._name=e,this._version=t,this._onupgradeneeded=s,this._onversionchange=n||(()=>this.close())}get db(){return this._db}async open(){if(!this._db)return this._db=await new Promise(((e,t)=>{let s=!1;setTimeout((()=>{s=!0,t(new Error("The open request was blocked and timed out"))}),this.OPEN_TIMEOUT);const n=indexedDB.open(this._name,this._version);n.onerror=()=>t(n.error),n.onupgradeneeded=e=>{s?(n.transaction.abort(),n.result.close()):"function"===typeof this._onupgradeneeded&&this._onupgradeneeded(e)},n.onsuccess=()=>{const t=n.result;s?t.close():(t.onversionchange=this._onversionchange.bind(this),e(t))}})),this}async getKey(e,t){return(await this.getAllKeys(e,t,1))[0]}async getAll(e,t,s){return await this.getAllMatching(e,{query:t,count:s})}async getAllKeys(e,t,s){return(await this.getAllMatching(e,{query:t,count:s,includeKeys:!0})).map((e=>e.key))}async getAllMatching(e){let{index:t,query:s=null,direction:n="next",count:a,includeKeys:r=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this.transaction([e],"readonly",((i,c)=>{const o=i.objectStore(e),h=t?o.index(t):o,l=[],u=h.openCursor(s,n);u.onsuccess=()=>{const e=u.result;e?(l.push(r?e:e.value),a&&l.length>=a?c(l):e.continue()):c(l)}}))}async transaction(e,t,s){return await this.open(),await new Promise(((n,a)=>{const r=this._db.transaction(e,t);r.onabort=()=>a(r.error),r.oncomplete=()=>n(),s(r,(e=>n(e)))}))}async _call(e,t,s){for(var n=arguments.length,a=new Array(n>3?n-3:0),r=3;r<n;r++)a[r-3]=arguments[r];return await this.transaction([t],s,((s,n)=>{const r=s.objectStore(t),i=r[e].apply(r,a);i.onsuccess=()=>n(i.result)}))}close(){this._db&&(this._db.close(),this._db=null)}}y.prototype.OPEN_TIMEOUT=2e3;const v={readonly:["get","count","getKey","getAll","getAllKeys"],readwrite:["add","put","clear","delete"]};for(const[_,$]of Object.entries(v))for(const e of $)e in IDBObjectStore.prototype&&(y.prototype[e]=async function(t){for(var s=arguments.length,n=new Array(s>1?s-1:0),a=1;a<s;a++)n[a-1]=arguments[a];return await this._call(e,t,_,...n)});const R=async e=>{let{request:t,fetchOptions:s,event:n,plugins:r=[]}=e;if("string"===typeof t&&(t=new Request(t)),n instanceof FetchEvent&&n.preloadResponse){const e=await n.preloadResponse;if(e)return e}const i=u(r,"fetchDidFail"),c=i.length>0?t.clone():null;try{for(const e of r)if("requestWillFetch"in e){const s=e.requestWillFetch,a=t.clone();t=await s.call(e,{request:a,event:n})}}catch(h){throw new a("plugin-error-request-will-fetch",{thrownError:h})}const o=t.clone();try{let e;e="navigate"===t.mode?await fetch(t):await fetch(t,s);for(const t of r)"fetchDidSucceed"in t&&(e=await t.fetchDidSucceed.call(t,{event:n,request:o,response:e}));return e}catch(l){0;for(const e of i)await e.fetchDidFail.call(e,{error:l,event:n,originalRequest:c.clone(),request:o.clone()});throw l}};async function x(e,t){const s=e.clone(),n={headers:new Headers(s.headers),status:s.status,statusText:s.statusText},a=t?t(n):n,r=function(){if(void 0===m){const t=new Response("");if("body"in t)try{new Response(t.body),m=!0}catch(e){m=!1}m=!1}return m}()?s.body:await s.blob();return new Response(r,a)}s(229);const q="cache-entries",U=e=>{const t=new URL(e,location.href);return t.hash="",t.href};class b{constructor(e){this._cacheName=e,this._db=new y("workbox-expiration",1,{onupgradeneeded:e=>this._handleUpgrade(e)})}_handleUpgrade(e){const t=e.target.result.createObjectStore(q,{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1}),(async e=>{await new Promise(((t,s)=>{const n=indexedDB.deleteDatabase(e);n.onerror=()=>{s(n.error)},n.onblocked=()=>{s(new Error("Delete blocked"))},n.onsuccess=()=>{t()}}))})(this._cacheName)}async setTimestamp(e,t){const s={url:e=U(e),timestamp:t,cacheName:this._cacheName,id:this._getId(e)};await this._db.put(q,s)}async getTimestamp(e){return(await this._db.get(q,this._getId(e))).timestamp}async expireEntries(e,t){const s=await this._db.transaction(q,"readwrite",((s,n)=>{const a=s.objectStore(q).index("timestamp").openCursor(null,"prev"),r=[];let i=0;a.onsuccess=()=>{const s=a.result;if(s){const n=s.value;n.cacheName===this._cacheName&&(e&&n.timestamp<e||t&&i>=t?r.push(s.value):i++),s.continue()}else n(r)}})),n=[];for(const a of s)await this._db.delete(q,a.id),n.push(a.url);return n}_getId(e){return this._cacheName+"|"+U(e)}}class T{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._isRunning=!1,this._rerunRequested=!1,this._maxEntries=t.maxEntries,this._maxAgeSeconds=t.maxAgeSeconds,this._cacheName=e,this._timestampModel=new b(e)}async expireEntries(){if(this._isRunning)return void(this._rerunRequested=!0);this._isRunning=!0;const e=this._maxAgeSeconds?Date.now()-1e3*this._maxAgeSeconds:0,t=await this._timestampModel.expireEntries(e,this._maxEntries),s=await self.caches.open(this._cacheName);for(const n of t)await s.delete(n);this._isRunning=!1,this._rerunRequested&&(this._rerunRequested=!1,w(this.expireEntries()))}async updateTimestamp(e){await this._timestampModel.setTimestamp(e,Date.now())}async isURLExpired(e){if(this._maxAgeSeconds){return await this._timestampModel.getTimestamp(e)<Date.now()-1e3*this._maxAgeSeconds}return!1}async delete(){this._rerunRequested=!1,await this._timestampModel.expireEntries(1/0)}}s(740);const E=[],L={get:()=>E,add(e){E.push(...e)}};function N(e){if(!e)throw new a("add-to-cache-list-unexpected-type",{entry:e});if("string"===typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:s}=e;if(!s)throw new a("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(s,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(s,location.href),r=new URL(s,location.href);return n.searchParams.set("__WB_REVISION__",t),{cacheKey:n.href,url:r.href}}class K{constructor(e){this._cacheName=o(e),this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map}addToCacheList(e){const t=[];for(const s of e){"string"===typeof s?t.push(s):s&&void 0===s.revision&&t.push(s.url);const{cacheKey:e,url:n}=N(s),r="string"!==typeof s&&s.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new a("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!==typeof s&&s.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==s.integrity)throw new a("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,s.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,r),t.length>0){const e="Workbox is precaching URLs without revision "+"info: ".concat(t.join(", "),"\nThis is generally NOT safe. ")+"Learn more at https://bit.ly/wb-precache";console.warn(e)}}}async install(){let{event:e,plugins:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const s=[],n=[],a=await self.caches.open(this._cacheName),r=await a.keys(),i=new Set(r.map((e=>e.url)));for(const[o,h]of this._urlsToCacheKeys)i.has(h)?n.push(o):s.push({cacheKey:h,url:o});const c=s.map((s=>{let{cacheKey:n,url:a}=s;const r=this._cacheKeysToIntegrities.get(n),i=this._urlsToCacheModes.get(a);return this._addURLToCache({cacheKey:n,cacheMode:i,event:e,integrity:r,plugins:t,url:a})}));await Promise.all(c);return{updatedURLs:s.map((e=>e.url)),notUpdatedURLs:n}}async activate(){const e=await self.caches.open(this._cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),n=[];for(const a of t)s.has(a.url)||(await e.delete(a),n.push(a.url));return{deletedURLs:n}}async _addURLToCache(e){let{cacheKey:t,url:s,cacheMode:n,event:r,plugins:i,integrity:c}=e;const o=new Request(s,{integrity:c,cache:n,credentials:"same-origin"});let h,l=await R({event:r,plugins:i,request:o});for(const a of i||[])"cacheWillUpdate"in a&&(h=a);if(!(h?await h.cacheWillUpdate({event:r,request:o,response:l}):l.status<400))throw new a("bad-precaching-response",{url:s,status:l.status});l.redirected&&(l=await x(l)),await f({event:r,plugins:i,response:l,request:t===s?o:new Request(t),cacheName:this._cacheName,matchOptions:{ignoreSearch:!0}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this._cacheName)).match(s)}}createHandler(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return async t=>{let{request:s}=t;try{const e=await this.matchPrecache(s);if(e)return e;throw new a("missing-precache-entry",{cacheName:this._cacheName,url:s instanceof Request?s.url:s})}catch(n){if(e)return fetch(s);throw n}}}createHandlerBoundToURL(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!this.getCacheKeyForURL(e))throw new a("non-precached-url",{url:e});const s=this.createHandler(t),n=new Request(e);return()=>s({request:n})}}let C;const M=()=>(C||(C=new K),C);const A=(e,t)=>{const s=M().getURLsToCacheKeys();for(const n of function(e){let{ignoreURLParametersMatching:t,directoryIndex:s,cleanURLs:n,urlManipulation:a}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function*(){const r=new URL(e,location.href);r.hash="",yield r.href;const i=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];for(const s of[...e.searchParams.keys()])t.some((e=>e.test(s)))&&e.searchParams.delete(s);return e}(r,t);if(yield i.href,s&&i.pathname.endsWith("/")){const e=new URL(i.href);e.pathname+=s,yield e.href}if(n){const e=new URL(i.href);e.pathname+=".html",yield e.href}if(a){const e=a({url:r});for(const t of e)yield t.href}}()}(e,t)){const e=s.get(n);if(e)return e}};let O=!1;function S(e){O||(!function(){let{ignoreURLParametersMatching:e=[/^utm_/],directoryIndex:t="index.html",cleanURLs:s=!0,urlManipulation:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const a=o();self.addEventListener("fetch",(r=>{const i=A(r.request.url,{cleanURLs:s,directoryIndex:t,ignoreURLParametersMatching:e,urlManipulation:n});if(!i)return;let c=self.caches.open(a).then((e=>e.match(i))).then((e=>e||fetch(i)));r.respondWith(c)}))}(e),O=!0)}const W=e=>{const t=M(),s=L.get();e.waitUntil(t.install({event:e,plugins:s}).catch((e=>{throw e})))},k=e=>{const t=M();e.waitUntil(t.activate())};s(130);const D=e=>e&&"object"===typeof e?e:{handle:e};class I{constructor(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET";this.handler=D(t),this.match=e,this.method=s}}class P extends I{constructor(e,t,s){super((t=>{let{url:s}=t;const n=e.exec(s.href);if(n&&(s.origin===location.origin||0===n.index))return n.slice(1)}),t,s)}}class H{constructor(){this._routes=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data;0;const s=Promise.all(t.urlsToCache.map((e=>{"string"===typeof e&&(e=[e]);const t=new Request(...e);return this.handleRequest({request:t})})));e.waitUntil(s),e.ports&&e.ports[0]&&s.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest(e){let{request:t,event:s}=e;const n=new URL(t.url,location.href);if(!n.protocol.startsWith("http"))return void 0;const{params:a,route:r}=this.findMatchingRoute({url:n,request:t,event:s});let i=r&&r.handler;if(!i&&this._defaultHandler&&(i=this._defaultHandler),!i)return void 0;let c;try{c=i.handle({url:n,request:t,event:s,params:a})}catch(o){c=Promise.reject(o)}return c instanceof Promise&&this._catchHandler&&(c=c.catch((e=>this._catchHandler.handle({url:n,request:t,event:s})))),c}findMatchingRoute(e){let{url:t,request:s,event:n}=e;const a=this._routes.get(s.method)||[];for(const r of a){let e;const a=r.match({url:t,request:s,event:n});if(a)return e=a,(Array.isArray(a)&&0===a.length||a.constructor===Object&&0===Object.keys(a).length||"boolean"===typeof a)&&(e=void 0),{route:r,params:e}}return{}}setDefaultHandler(e){this._defaultHandler=D(e)}setCatchHandler(e){this._catchHandler=D(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new a("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(!(t>-1))throw new a("unregister-route-route-not-registered");this._routes.get(e.method).splice(t,1)}}let F;const j=()=>(F||(F=new H,F.addFetchListener(),F.addCacheListener()),F);function B(e,t,s){let n;if("string"===typeof e){const a=new URL(e,location.href);0;n=new I((e=>{let{url:t}=e;return t.href===a.href}),t,s)}else if(e instanceof RegExp)n=new P(e,t,s);else if("function"===typeof e)n=new I(e,t,s);else{if(!(e instanceof I))throw new a("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});n=e}return j().registerRoute(n),n}s(205);const G={cacheWillUpdate:async e=>{let{response:t}=e;return 200===t.status||0===t.status?t:null}};var Q;self.addEventListener("activate",(()=>self.clients.claim())),function(e){M().addToCacheList(e),e.length>0&&(self.addEventListener("install",W),self.addEventListener("activate",k))}([{'revision':'d9be1012be7f5f7694eabe0e48b40e90','url':'/Abouabdallah/index.html'},{'revision':null,'url':'/Abouabdallah/static/css/main.89ff3fb1.css'},{'revision':null,'url':'/Abouabdallah/static/js/422.b7bd11e0.chunk.js'},{'revision':null,'url':'/Abouabdallah/static/js/main.c42a63d5.js'},{'revision':null,'url':'/Abouabdallah/static/media/brand-icons.278156e41e0ad908cf7f.woff2'},{'revision':null,'url':'/Abouabdallah/static/media/brand-icons.65a2fb6d9aaa164b41a0.ttf'},{'revision':null,'url':'/Abouabdallah/static/media/brand-icons.6729d29753e000c17489.svg'},{'revision':null,'url':'/Abouabdallah/static/media/brand-icons.cac87dc00c87a5d74711.woff'},{'revision':null,'url':'/Abouabdallah/static/media/brand-icons.d68fa3e67dbb653a13ce.eot'},{'revision':null,'url':'/Abouabdallah/static/media/flags.99f63ae7a743f21ab308.png'},{'revision':null,'url':'/Abouabdallah/static/media/icons.38c6d8bab26db77d8c80.woff2'},{'revision':null,'url':'/Abouabdallah/static/media/icons.425399f81e4ce7cbd967.woff'},{'revision':null,'url':'/Abouabdallah/static/media/icons.62d9dae4e0040e81c980.svg'},{'revision':null,'url':'/Abouabdallah/static/media/icons.a01e3f2d6c83dc3aee17.eot'},{'revision':null,'url':'/Abouabdallah/static/media/icons.c656b8caa454ed19b9a2.ttf'},{'revision':null,'url':'/Abouabdallah/static/media/outline-icons.5367103510b27b784827.ttf'},{'revision':null,'url':'/Abouabdallah/static/media/outline-icons.687a4990ea22bb1a49d4.woff2'},{'revision':null,'url':'/Abouabdallah/static/media/outline-icons.752905fa5edf21fc52a1.eot'},{'revision':null,'url':'/Abouabdallah/static/media/outline-icons.9c4845b4b41ef40a22fa.svg'},{'revision':null,'url':'/Abouabdallah/static/media/outline-icons.ddae9b1ba9b0b42f5880.woff'}]),S(Q);const J=new RegExp("/[^/?]+\\.[^/]+$");var V;B((e=>{let{request:t,url:s}=e;return"navigate"===t.mode&&(!s.pathname.startsWith("/_")&&!s.pathname.match(J))}),(V="/Abouabdallah/index.html",M().createHandlerBoundToURL(V))),B((e=>{let{url:t}=e;return t.origin===self.location.origin&&t.pathname.endsWith(".png")}),new class{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(this._cacheName=h(e.cacheName),this._plugins=e.plugins||[],e.plugins){const t=e.plugins.some((e=>!!e.cacheWillUpdate));this._plugins=t?e.plugins:[G,...e.plugins]}else this._plugins=[G];this._fetchOptions=e.fetchOptions,this._matchOptions=e.matchOptions}async handle(e){let{event:t,request:s}=e;"string"===typeof s&&(s=new Request(s));const n=this._getFromNetwork({request:s,event:t});let r,i=await g({cacheName:this._cacheName,request:s,event:t,matchOptions:this._matchOptions,plugins:this._plugins});if(i){if(t)try{t.waitUntil(n)}catch(r){0}}else{0;try{i=await n}catch(c){r=c}}if(!i)throw new a("no-response",{url:s.url,error:r});return i}async _getFromNetwork(e){let{request:t,event:s}=e;const n=await R({request:t,event:s,fetchOptions:this._fetchOptions,plugins:this._plugins}),a=f({cacheName:this._cacheName,request:t,response:n.clone(),event:s,plugins:this._plugins});if(s)try{s.waitUntil(a)}catch(r){0}return n}}({cacheName:"images",plugins:[new class{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var t;this.cachedResponseWillBeUsed=async e=>{let{event:t,request:s,cacheName:n,cachedResponse:a}=e;if(!a)return null;const r=this._isResponseDateFresh(a),i=this._getCacheExpiration(n);w(i.expireEntries());const c=i.updateTimestamp(s.url);if(t)try{t.waitUntil(c)}catch(o){0}return r?a:null},this.cacheDidUpdate=async e=>{let{cacheName:t,request:s}=e;const n=this._getCacheExpiration(t);await n.updateTimestamp(s.url),await n.expireEntries()},this._config=e,this._maxAgeSeconds=e.maxAgeSeconds,this._cacheExpirations=new Map,e.purgeOnQuotaError&&(t=()=>this.deleteCacheAndMetadata(),r.add(t))}_getCacheExpiration(e){if(e===h())throw new a("expire-custom-caches-only");let t=this._cacheExpirations.get(e);return t||(t=new T(e,this._config),this._cacheExpirations.set(e,t)),t}_isResponseDateFresh(e){if(!this._maxAgeSeconds)return!0;const t=this._getDateHeaderTimestamp(e);if(null===t)return!0;return t>=Date.now()-1e3*this._maxAgeSeconds}_getDateHeaderTimestamp(e){if(!e.headers.has("date"))return null;const t=e.headers.get("date"),s=new Date(t).getTime();return isNaN(s)?null:s}async deleteCacheAndMetadata(){for(const[e,t]of this._cacheExpirations)await self.caches.delete(e),await t.delete();this._cacheExpirations=new Map}}({maxEntries:50})]})),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}))})();
//# sourceMappingURL=service-worker.js.map