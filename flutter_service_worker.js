'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "da0c6cd466445a6e52787e3cd03a34de",
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
"assets/assets/icon/icon.png": "cd72f7ed1c03a45633baa16b775a00f8",
"assets/FontManifest.json": "d9c438891192a361b14674e99539bc01",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "4fcbb4b108dafa2431a59a6636aa892c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "a1cd9c6b67ec07ccaccd6e9ae6c19ade",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "d37fb43ecc9e1ea187a31a4ea8915759",
"icons/Icon-512.png": "499834daddb72fb42ca98eb9a29b6fb8",
"icons/Icon-maskable-192.png": "d37fb43ecc9e1ea187a31a4ea8915759",
"icons/Icon-maskable-512.png": "499834daddb72fb42ca98eb9a29b6fb8",
"index.html": "8221738ac3dfd2b0601376162527272e",
"/": "8221738ac3dfd2b0601376162527272e",
"main.dart.js": "4647e406f55c7eb81a7dac85999c91ba",
"manifest.json": "3bb222d6db3e5dad18f7c2896aa12d49",
"splash/img/dark-1x.png": "c95f913c5605c5e2a7755c936f90c8e3",
"splash/img/dark-2x.png": "97728c69ce5c02b790ba6612d3267d5e",
"splash/img/dark-3x.png": "96d18cd9d52f960de0ba4b8b0527fa1d",
"splash/img/dark-4x.png": "9a349ffd4d1404170735a3da52a951de",
"splash/img/light-1x.png": "c95f913c5605c5e2a7755c936f90c8e3",
"splash/img/light-2x.png": "97728c69ce5c02b790ba6612d3267d5e",
"splash/img/light-3x.png": "96d18cd9d52f960de0ba4b8b0527fa1d",
"splash/img/light-4x.png": "9a349ffd4d1404170735a3da52a951de",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "c94c38ff00a9d487c353a2d78989ea08",
"version.json": "2a87412bd69302ebdff0238c65c33ae4"
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
