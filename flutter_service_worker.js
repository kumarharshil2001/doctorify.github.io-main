'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "15096f6be9899387bc8e79142065a6c0",
"assets/assets/fonts/Montserrat-Light.ttf": "e65ae7ed560da1a63db603bd8584cfdb",
"assets/assets/fonts/Montserrat-Medium.ttf": "b3ba703c591edd4aad57f8f4561a287b",
"assets/assets/fonts/Montserrat-Thin.ttf": "4b73d125bab54f94ed2510590c237f73",
"assets/assets/images/about.png": "3740a7155a0cc151326d5f62bea4229c",
"assets/assets/images/analyze.png": "8df48eaab630a9146663463d1f3daf14",
"assets/assets/images/disclaimer.png": "6538920bee16db8c53ac1de958a5b362",
"assets/assets/images/disease.png": "876213eeedb6a3efb765fd353520c5f9",
"assets/assets/images/prognosisinput.png": "e74581bfc67ce74dc1516fdc2f0b2e64",
"assets/assets/images/prognosisoutput.png": "5f9765ec5af4bd327b5a62062e03baf6",
"assets/assets/images/symptoms.png": "baa4a83de4038dbdf3170a48fdd3eabf",
"assets/assets/vectors/about_vec.png": "5572a556cd18643dbbaaa71e208ee39d",
"assets/assets/vectors/disclaimer_vec.png": "c103c2a1228ec2ebfd3894630ee485bb",
"assets/assets/vectors/diseases_vec.png": "717e81ec48d1a2051739f1da26affcae",
"assets/assets/vectors/hometop_vec.png": "9a0424809448c539a21f25d1171a0fa9",
"assets/assets/vectors/home_vec.png": "d173385d038960622e4c5b03e5449f8c",
"assets/assets/vectors/prognosisin_vec.png": "db4518a929cb3a3f068fe79acd12bb69",
"assets/assets/vectors/result_vec.png": "f6f63aadc66e02f56b9a4cc99a92ef9a",
"assets/assets/vectors/symptoms_vec.png": "71ef0583c1171a1309dba04392f15eb4",
"assets/assets%255Cimages%255Cabout.png": "3740a7155a0cc151326d5f62bea4229c",
"assets/assets%255Cimages%255Canalyze.png": "8df48eaab630a9146663463d1f3daf14",
"assets/assets%255Cimages%255Cdisclaimer.png": "6538920bee16db8c53ac1de958a5b362",
"assets/assets%255Cimages%255Cdisease.png": "876213eeedb6a3efb765fd353520c5f9",
"assets/assets%255Cimages%255Cprognosisinput.png": "e74581bfc67ce74dc1516fdc2f0b2e64",
"assets/assets%255Cimages%255Cprognosisoutput.png": "5f9765ec5af4bd327b5a62062e03baf6",
"assets/assets%255Cimages%255Csymptoms.png": "baa4a83de4038dbdf3170a48fdd3eabf",
"assets/assets%255Cvectors%255Cabout_vec.png": "5572a556cd18643dbbaaa71e208ee39d",
"assets/assets%255Cvectors%255Cdisclaimer_vec.png": "c103c2a1228ec2ebfd3894630ee485bb",
"assets/assets%255Cvectors%255Cdiseases_vec.png": "717e81ec48d1a2051739f1da26affcae",
"assets/assets%255Cvectors%255Chometop_vec.png": "9a0424809448c539a21f25d1171a0fa9",
"assets/assets%255Cvectors%255Chome_vec.png": "d173385d038960622e4c5b03e5449f8c",
"assets/assets%255Cvectors%255Cprognosisin_vec.png": "db4518a929cb3a3f068fe79acd12bb69",
"assets/assets%255Cvectors%255Cresult_vec.png": "f6f63aadc66e02f56b9a4cc99a92ef9a",
"assets/assets%255Cvectors%255Csymptoms_vec.png": "71ef0583c1171a1309dba04392f15eb4",
"assets/FontManifest.json": "bbe4331504aedec9b7a01e084dde3543",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "3e937bd88f92ec1d147e49b9e74a95de",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "4e3e34873ba43881e0de6ef5f8212241",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "364d1911d3ab4d8d310c36089b950293",
"/": "364d1911d3ab4d8d310c36089b950293",
"main.dart.js": "cd3d963cb3cd8f625f043d25659c7abc",
"manifest.json": "7a55f618ad62a4b8f132ee86426c2e05",
"version.json": "b8ce0f2ed3c6cf76de96926120f84fa6"
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
