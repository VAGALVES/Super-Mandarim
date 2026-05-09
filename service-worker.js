const CACHE_NAME = "hanverse-vs-v3-9-6-root-json-population-core";
const RUNTIME_CACHE = "hanverse-vs-v3-9-6-root-json-population-runtime";
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./characters-hsk-1.json",
  "./characters-hsk-2.json",
  "./characters-hsk-3.json",
  "./characters-hsk-4.json",
  "./characters-hsk-5.json",
  "./characters-hsk-6.json",
  "./characters-hsk-7.json",
  "./characters-hsk-8.json",
  "./characters-hsk-9.json",
  "./combinations.json",
  "./manifest-data.json",
  "./icon-32.png",
  "./icon-192.png",
  "./icon-512.png",
  "./apple-touch-icon-180.png"
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