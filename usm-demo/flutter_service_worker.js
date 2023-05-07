'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "f19195bf9d01a37134526e6772e79a99",
"assets/assets/fonts/ClashDisplay-Variable.ttf": "2fcd723a1a012506da3928146b19364d",
"assets/assets/fonts/nunito/Nunito-Black.ttf": "e30379228b51416f67dbc6f68965bf08",
"assets/assets/fonts/nunito/Nunito-BlackItalic.ttf": "c3f7dc7cbdfb0754658cc70e41c6385f",
"assets/assets/fonts/nunito/Nunito-Bold.ttf": "9772667f53d0a85e7b09b879821ef01b",
"assets/assets/fonts/nunito/Nunito-BoldItalic.ttf": "29a701ee72040e00b48f6c553505b3ac",
"assets/assets/fonts/nunito/Nunito-ExtraBold.ttf": "12713ce2dfcef8d25e16664da403a130",
"assets/assets/fonts/nunito/Nunito-ExtraBoldItalic.ttf": "c1c20eb847c9e1605af3c8b1ecefdd22",
"assets/assets/fonts/nunito/Nunito-Italic.ttf": "fc1d3cbb6812f04359588fcb5c1842ed",
"assets/assets/fonts/nunito/Nunito-Medium.ttf": "b500fbae7078c1679bf7c67e59575953",
"assets/assets/fonts/nunito/Nunito-MediumItalic.ttf": "5efcb3415349690fc7b9fe37851e6a2d",
"assets/assets/fonts/nunito/Nunito-Regular.ttf": "2cd487d187b602d1fa522f8af05f1fbd",
"assets/assets/fonts/nunito/Nunito-SemiBold.ttf": "1daa68f825ef4e54773c787b70678647",
"assets/assets/fonts/nunito/Nunito-SemiBoldItalic.ttf": "8fd7e136d3306af583b8b4c39b8ed0f4",
"assets/assets/fonts/poppins/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/assets/fonts/poppins/Poppins-BlackItalic.ttf": "e9c5c588e39d0765d30bcd6594734102",
"assets/assets/fonts/poppins/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/poppins/Poppins-BoldItalic.ttf": "19406f767addf00d2ea82cdc9ab104ce",
"assets/assets/fonts/poppins/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/fonts/poppins/Poppins-ExtraBoldItalic.ttf": "8afe4dc13b83b66fec0ea671419954cc",
"assets/assets/fonts/poppins/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"assets/assets/fonts/poppins/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/poppins/Poppins-MediumItalic.ttf": "cf5ba39d9ac24652e25df8c291121506",
"assets/assets/fonts/poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/poppins/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/fonts/poppins/Poppins-SemiBoldItalic.ttf": "9841f3d906521f7479a5ba70612aa8c8",
"assets/assets/fonts/sora/Sora-Bold.ttf": "429db58206b9ab4f76ff1b7eac71777c",
"assets/assets/fonts/sora/Sora-ExtraBold.ttf": "788c2fef8bbfe0ee115400493ea9a5e6",
"assets/assets/fonts/sora/Sora-Medium.ttf": "62be0b7a6724bede834fdef030bb5fbb",
"assets/assets/fonts/sora/Sora-Regular.ttf": "15078b7245fe59e2cfff0a93c5a78d46",
"assets/assets/fonts/sora/Sora-SemiBold.ttf": "d5ef9f834e4e77463415842b03f9efa8",
"assets/assets/icon/icon-transparent.png": "77781662cf65a273746bf0fa760c201f",
"assets/assets/icon/icon.png": "532988be14cc2ce91552e4af5f3ced2c",
"assets/assets/images/graph-bg.png": "95adc2e69084eef622ec35d77225d20d",
"assets/FontManifest.json": "84e9c3efe613321a68c0f47f85c3135e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "b36b16944983aec1feaf621e9fb8591c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/iconsax/lib/assets/fonts/iconsax.ttf": "071d77779414a409552e0584dcbfd03d",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "1bbffc337b813660b64698ee6a734aaa",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "cbe12849c5b034b107b072232e7bbe00",
"icons/Icon-512.png": "bf91573bf0dcd8c88de6130ac2694f8b",
"icons/Icon-maskable-192.png": "cbe12849c5b034b107b072232e7bbe00",
"icons/Icon-maskable-512.png": "bf91573bf0dcd8c88de6130ac2694f8b",
"index.html": "d2bf5de26e5514063ec499344e1db2f3",
"/": "d2bf5de26e5514063ec499344e1db2f3",
"main.dart.js": "06179bdcac2c0df75ffc722105f5307c",
"manifest.json": "3bb222d6db3e5dad18f7c2896aa12d49",
"splash/img/dark-1x.png": "9701b4033c0c29d0d871f3fc40b58a16",
"splash/img/dark-2x.png": "892339929c074abf5125484338f0fcb0",
"splash/img/dark-3x.png": "583b9a6b274d27dbd65862def1440bbe",
"splash/img/dark-4x.png": "f92b3b51771dcf74a1e2649ff9c37f53",
"splash/img/light-1x.png": "9701b4033c0c29d0d871f3fc40b58a16",
"splash/img/light-2x.png": "892339929c074abf5125484338f0fcb0",
"splash/img/light-3x.png": "583b9a6b274d27dbd65862def1440bbe",
"splash/img/light-4x.png": "f92b3b51771dcf74a1e2649ff9c37f53",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "c94c38ff00a9d487c353a2d78989ea08",
"version.json": "ae996336ec4762f9e1788ff9ee70c805"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
