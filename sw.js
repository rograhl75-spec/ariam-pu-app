// Service worker mínimo: permite instalar o app. Os dados vêm sempre do servidor (nada fica guardado offline).
const CACHE = "ariam-pu-v1";
const ESTATICOS = ["./", "index.html", "manifest.webmanifest", "icones/icone-192.png", "icones/icone-512.png"];
self.addEventListener("install", (e) => { e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ESTATICOS))); self.skipWaiting(); });
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);
  if (url.origin !== self.location.origin) return; // o app Streamlit passa direto pela rede
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
