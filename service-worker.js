"use strict";var precacheConfig=[["/mqm/index.html","4adc8b22a114dadd1436dda7ac439aec"],["/mqm/static/css/main.2d90ffe9.css","ff20a71410a56cc7a3385db844320f62"],["/mqm/static/js/main.31cbb902.js","3d7952998e3e19907942552d29605603"],["/mqm/static/media/Dense-Regular.87ae1e61.otf","87ae1e61270a95f328676113701f1595"],["/mqm/static/media/flag_icon.dc090cc4.svg","dc090cc413611c8bc1af53d71a647376"],["/mqm/static/media/gear_icon.06764fb6.svg","06764fb603ff8f0f5a115e8c89fa7e4f"],["/mqm/static/media/graph.a3fd13c6.png","a3fd13c607ca3c1b59cd234d8765f3d5"],["/mqm/static/media/grid_icon.51c49243.svg","51c49243de9e70edc37db3314aa0b3b6"],["/mqm/static/media/icon_fb.5e763b5e.svg","5e763b5eb15cf2acdd517ae4eb195fe8"],["/mqm/static/media/icon_insta.e7ae5cdc.svg","e7ae5cdc532e64ed9c9965bbbc7a49d8"],["/mqm/static/media/icon_linkedIn.87b18b19.svg","87b18b193385879315df86f061338cbe"],["/mqm/static/media/icon_twitter.517bab36.svg","517bab363457fe4e5076da292ac75c2e"],["/mqm/static/media/logo.5d5d9eef.svg","5d5d9eefa31e5e13a6610d9fa7a283bb"],["/mqm/static/media/logo_critigen.f6d98886.svg","f6d9888667009ff22983e8a60fcdeae4"],["/mqm/static/media/map.310fee5f.png","310fee5f2917273c805153143737621b"],["/mqm/static/media/seattle.b6054509.jpg","b6054509234983f4439aea202f5a692c"],["/mqm/static/media/shape_icon.49e2bc4b.svg","49e2bc4b619721686dfeefde13453d43"],["/mqm/static/media/share.ab14970e.svg","ab14970ee8cac6aaf090568d54000ad4"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/mqm/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});