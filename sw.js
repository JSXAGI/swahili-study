const CACHE_NAME = 'swahili-app-v1';
const urlsToCache = [
  './',
  './index.html',
  './en.html',
  './swahili.jpg',
  './icon.png'
];

// インストール時に全ファイルをキャッシュ
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// オフライン時でもキャッシュから読み込む
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});