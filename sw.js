// Cache ID Version
const cacheID = 'v1';
// Files to precache
const cacheFiles = [
  // HTML Files
    '/',
    '/resources/CodyDoan.pdf',
    '/index.html',
    '/assets/images/favicon.png',
    '/assets/images/2048.png',
    '/assets/images/podcastonboarding.png',
    '/assets/images/podcastplayback.png',
    '/assets/images/podcastsearch.png',
    '/assets/images/viasat.png',
    '/assets/images/dlab.png',
    '/assets/images/rocket.png',
    '/assets/svgs/dog.svg',
    '/style/css/font-awesome.min.css',
    '/style/css/stars.css',
    '/style/css/slideshow.css',
    '/style/fonts/fontawesome-webfont.woff2'
];
// Service Worker Install Event
self.addEventListener('install', function(event) {
  //console.log('Attempting to install service worker and cache static assets');
  event.waitUntil(
    caches.open(cacheID)
    .then(function(cache) {
      console.log('Opened cache');
      return cache.addAll(cacheFiles);
    })
    .catch(function(error) {
      //console.log(`Unable to add cached assets: ${error}`);
    })
  );
});

// Service Worker Activate Event
self.addEventListener('activate', function(e) {
  e.waitUntil(
    // Load up all items from cache, and check if cache items are not outdated
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheID) {
          //console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

// Service Worker Fetch Event
self.addEventListener('fetch', function(e) {
  //console.log(e.request);
  e.respondWith(
    // If request matches with something in cache, then return reponse
    // from cache, otherwise fetch it
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
