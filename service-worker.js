const CACHE_NAME = "hanverse-vs-v3-2-core";
const RUNTIME_CACHE = "hanverse-vs-v3-2-runtime";
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icons/icon-32.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/apple-touch-icon-180.png"
];
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
  );
});
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys
        .filter(key => ![CACHE_NAME, RUNTIME_CACHE].includes(key))
        .map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});
function shouldRuntimeCache(request, response){
  if(!response || response.status !== 200) return false;
  const url = new URL(request.url);
  if(url.origin === location.origin) return true;
  return url.hostname.includes("cdn.jsdelivr.net") || url.hostname.includes("hanziwriter.org");
}
self.addEventListener("fetch", event => {
  if(event.request.method !== "GET") return;
  const req = event.request;
  event.respondWith(
    caches.match(req).then(cached => {
      if(cached) return cached;
      return fetch(req).then(response => {
        if(shouldRuntimeCache(req, response)){
          const clone = response.clone();
          caches.open(RUNTIME_CACHE).then(cache => cache.put(req, clone));
        }
        return response;
      }).catch(() => {
        if(req.mode === "navigate") return caches.match("./index.html");
        return caches.match(req);
      });
    })
  );
});