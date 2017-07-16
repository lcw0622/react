var CACHE_NAME = 'cache-1';
var urlsToCache = ['sw/one.js','sw/two.js'];
self.addEventListener('install',function(event){
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache){
            console.log('Opened Cache...');
            return cache.addAll(urlsToCache);
        })
    );
});
self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request).then(function(response) {
			if (response) {
				console.log('Cache hit!');
				return response;
			}
			var fetchRequest = event.request.clone();

			return fetch(fetchRequest).then(function(response){
				if(!response || response.status !== 200 || response.type !== 'basic'){
					return response;
				}

				var responseToCache = response.clone();

				caches.open(CACHE_NAME)
					.then(function(cache){
						cache.put(event.request, responseToCache);
					});

				return response;	
			});
		})
	);
});

// var serviceWorkerOption = {
//     "assets": ["/dist/github.elemecdn.com/vuejs/vue/v2.3.3/dist/vue.runtime.min.js", "/dist/npm.elemecdn.com/uglifyjs!vue-img@2.7.0/dist/vue-img.js", "/dist/vendor.5652332.js", "/dist/web-cart.9de564b.js", "/dist/ux-component.bdd4bfd.js", "/dist/sns-sdk.bb6a527.js", "/dist/h5-shopview.b0251b3.js", "/dist/h5-menuview.d2112bf.js", "/dist/h5-component.80d2bb2.js", "/dist/perf.a257fc8.js", "/dist/manifest.d75f0a3.js", "/discover/", "/dist/discover/discover.1fb941a.js", "/dist/discover/discover.608c01a.css", "/dist/npm.elemecdn.com/vue-swipe@2.0.2/dist/vue-swipe.js", "/dist/npm.elemecdn.com/vue-swipe@2.0.2/dist/vue-swipe.css", "/msite/", "/dist/msite/msite.ef15668.js", "/dist/msite/msite.0e00d11.css", "/dist/npm.elemecdn.com/uglifyjs!vue-infinite-scroll@2.0.0/vue-infinite-scroll.js", "/msite/food/", "/dist/msite/food/food.8585895.js", "/dist/msite/food/food.1ad488c.css", "/dist/npm.elemecdn.com/uglifyjs!vue-sticky@3.0.1/dist/vue-sticky.js", "/offline/", "/dist/offline/offline.6b1a48c.js", "/dist/offline/offline.bb15618.css", "/order/", "/dist/order/order.7cd91c0.js", "/dist/order/order.e92b776.css", "/dist/github.elemecdn.com/eleme/pay-sdk/v0.0.8/dist/eleme.pay.min.js", "/profile/", "/dist/profile/profile.f496618.js", "/dist/profile/profile.dd9b0f0.css", "/sales/", "/dist/sales/sales.1085ca3.js", "/dist/sales/sales.9db680b.css", "/dist/github.elemecdn.com/chjj/marked/v0.3.5/marked.min.js", "/selecthongbao/", "/dist/selecthongbao/selecthongbao.9d095f9.js", "/dist/selecthongbao/selecthongbao.f312994.css", "/shop/", "/dist/shop/shop.b4e5e33.js", "/dist/shop/shop.0bbc6cd.css", "/dist/npm.elemecdn.com/vue-sticky@3.0.1/dist/vue-sticky.js", "//github.elemecdn.com/eleme/fe-static/master/media/empty/error-load.png", "//github.elemecdn.com/eleme/fe-static/master/media/empty/error-locate.png", "//github.elemecdn.com/eleme/fe-static/master/media/empty/error-service.png", "//github.elemecdn.com/eleme/fe-static/master/media/empty/no-address.png", "//github.elemecdn.com/eleme/fe-static/master/media/empty/no-food.png", "//github.elemecdn.com/eleme/fe-static/master/media/empty/no-log.png", "//github.elemecdn.com/eleme/fe-static/master/media/empty/no-luckymoney.png", "//github.elemecdn.com/eleme/fe-static/master/media/empty/no-shop.png"],
//     "hash": "Bs2XxlY"
// };

// !function(e) {
//     function t(n) {
//         if (o[n])
//             return o[n].exports;
//         var r = o[n] = {
//             i: n,
//             l: !1,
//             exports: {}
//         };
//         return e[n].call(r.exports, r, r.exports, t),
//         r.l = !0,
//         r.exports
//     }
//     var o = {};
//     t.m = e,
//     t.c = o,
//     t.i = function(e) {
//         return e
//     }
//     ,
//     t.d = function(e, o, n) {
//         t.o(e, o) || Object.defineProperty(e, o, {
//             configurable: !1,
//             enumerable: !0,
//             get: n
//         })
//     }
//     ,
//     t.n = function(e) {
//         var o = e && e.__esModule ? function() {
//             return e.default
//         }
//         : function() {
//             return e
//         }
//         ;
//         return t.d(o, "a", o),
//         o
//     }
//     ,
//     t.o = function(e, t) {
//         return Object.prototype.hasOwnProperty.call(e, t)
//     }
//     ,
//     t.p = "/dist/",
//     t(t.s = 0)
// };

// ([function(e, t, o) {
//     "use strict";
//     try {
//         importScripts("https://github.elemecdn.com/eleme/perf-sw/0.1.4/dist/perf.min.js")
//     } catch (e) {
//         console.warn("Failed to import perf!")
//     }
//     self.addEventListener("install", function() {
//         self.skipWaiting && self.skipWaiting()
//     }),
//     self.addEventListener("activate", function() {
//         self.clients && self.clients.claim && self.clients.claim()
//     }),
//     self.assets = self.serviceWorkerOption.assets,
//     importScripts("/sw-toolbox.js"),
//     self.toolbox.options.debug = -1 !== self.location.search.indexOf("debug=true"),
//     self.toolbox.options.networkTimeoutSeconds = 3,
//     self.toolbox.router.get("/sw.js", self.toolbox.networkOnly),
//     ["https://github.elemecdn.com", "https://npm.elemecdn.com"].forEach(function(e) {
//         self.toolbox.router.get("/(.*)", self.toolbox.cacheFirst, {
//             origin: e,
//             cache: {
//                 name: "static",
//                 maxEntries: 100
//             }
//         })
//     });
//     var n = {
//         dir: "/(.+/[^\\.]*)",
//         dirWithoutRedirect: "/(.+/)",
//         file: "/(.+/.+\\.\\w+)"
//     }
//       , r = self.location.href.indexOf("UC=true") ? n.dirWithoutRedirect : n.dir;
//     self.toolbox.router.get(r, function(e, t, o) {
//         return self.toolbox.fastest(e, t, o).catch(function() {
//             return console.info("Failed to fetch " + e.url + ", fallback to offline."),
//             self.toolbox.cacheOnly(new Request("/offline/"), t, o)
//         })
//     }, {
//         cache: {
//             name: "dynamic",
//             maxEntries: 100,
//             maxAgeSeconds: 86400
//         }
//     }),
//     self.toolbox.router.get(n.file, self.toolbox.cacheFirst, {
//         cache: {
//             name: "static",
//             maxEntries: 100
//         }
//     }),
//     "dev" !== self.serviceWorkerOption.ENV && self.assets.forEach(function(e) {
//         var t = e.match(/\/$/) ? "dynamic" : "static";
//         self.toolbox.cache(e, {
//             cache: {
//                 name: t
//             }
//         }).catch(function() {})
//     }),
//     self.location.search.match(/debug=true/) || fetch("https://crayfish.elemecdn.com/h5.ele.me@json/service-worker").then(function(e) {
//         return e.json()
//     }).then(function(e) {
//         e.downgrade && self.registration.unregister(),
//         !!((navigator.userAgent.match(/Chrome\/([\d|\.]+)/i) || [])[1] || "").match(/^44\.0\.2403/) && self.registration.unregister()
//     }).catch(function() {})
// }
// ]);
