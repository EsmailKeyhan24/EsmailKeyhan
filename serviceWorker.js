const staticCacheName = "site-static-v1";
const cacheAssets = [
    "/",
    "index.html",
    "assest/css/animation.css",
    "assest/css/fontello.css",
    "assest/css/fontello-codes.css",
    "assest/css/fontello-embedded.css",
    "assest/css/fontello-ie7.css",
    "assest/css/fontello-ie7-codes.css",
    "assest/stylesheet/App.css",
    "assest/js/master.js",
    "assest/img/icon-lg.png"
];
self.addEventListener("install", evt => {
    evt.waitUntil(
        caches
            .open(staticCacheName)
            .then(cache => {
                console.log("caching assets...");
                cache.addAll(cacheAssets);
            })
            .catch(err => { })
    );
});
self.addEventListener("fetch", evt => {
    evt.respondWith(
        caches
            .match(evt.request)
            .then(res => {
                return res || fetch(evt.request);
            })
            .catch(err => {
                if (evt.request.url.indexOf(".html") > -1) {
                    return caches.match("./index.html");
                }
            })
    );
});
