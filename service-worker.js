"use strict";var precacheConfig=[["/map-quality-measurement/index.html","e887d375b53c222e73e6ca97c4a072c1"],["/map-quality-measurement/static/css/main.cd93b7b3.css","ebafedbb7c57a717828b6d77a452401d"],["/map-quality-measurement/static/js/main.ccea08ec.js","c63a1e0ba5930debaed6209e5b0388ea"],["/map-quality-measurement/static/media/Dense-Regular.87ae1e61.otf","87ae1e61270a95f328676113701f1595"],["/map-quality-measurement/static/media/flag_icon.dc090cc4.svg","dc090cc413611c8bc1af53d71a647376"],["/map-quality-measurement/static/media/gear_icon.06764fb6.svg","06764fb603ff8f0f5a115e8c89fa7e4f"],["/map-quality-measurement/static/media/graph.a3fd13c6.png","a3fd13c607ca3c1b59cd234d8765f3d5"],["/map-quality-measurement/static/media/grid_icon.51c49243.svg","51c49243de9e70edc37db3314aa0b3b6"],["/map-quality-measurement/static/media/icon_fb.5e763b5e.svg","5e763b5eb15cf2acdd517ae4eb195fe8"],["/map-quality-measurement/static/media/icon_insta.e7ae5cdc.svg","e7ae5cdc532e64ed9c9965bbbc7a49d8"],["/map-quality-measurement/static/media/icon_linkedIn.87b18b19.svg","87b18b193385879315df86f061338cbe"],["/map-quality-measurement/static/media/icon_twitter.517bab36.svg","517bab363457fe4e5076da292ac75c2e"],["/map-quality-measurement/static/media/logo.5d5d9eef.svg","5d5d9eefa31e5e13a6610d9fa7a283bb"],["/map-quality-measurement/static/media/logo_critigen.f6d98886.svg","f6d9888667009ff22983e8a60fcdeae4"],["/map-quality-measurement/static/media/map.310fee5f.png","310fee5f2917273c805153143737621b"],["/map-quality-measurement/static/media/seattle.b6054509.jpg","b6054509234983f4439aea202f5a692c"],["/map-quality-measurement/static/media/shape_icon.49e2bc4b.svg","49e2bc4b619721686dfeefde13453d43"],["/map-quality-measurement/static/media/share.ab14970e.svg","ab14970ee8cac6aaf090568d54000ad4"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),r=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var r="/map-quality-measurement/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});