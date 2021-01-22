'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "f009b7f5fcb95208a03fe46e649d490d",
"index.html": "82f77b36c4cee64a99d7f2c11c3cc223",
"/": "82f77b36c4cee64a99d7f2c11c3cc223",
"CNAME": "b085bd1908aa08ec6b05b128cb7de7af",
"main.dart.js": "34f2a2e188cfef827d6add97c38163b0",
"favicon.png": "3d939212f6cda360d2dea0159f1c6178",
"icons/Icon-192.png": "5871087a50b4711528fdf52c1bafa601",
"icons/Icon-512.png": "0f489631e145c784a39a0ab40b0fbcd2",
"manifest.json": "24c3a6b7e80663a8eef82a567c91d2b7",
".git/config": "a309e376cd4fdd76861428050bffbd58",
".git/objects/92/941191a68789adb3bbdd6815f03ad6abf37546": "7a1337b173927227b37ad8dfaabf1f85",
".git/objects/9b/2590df7952fea6023978472ce560baa048109f": "df3bd01588fcbcc3923b7511aceeea34",
".git/objects/32/7bd729efe5194d075852e290579acaa77876fc": "e67169eaa287c4616843f00ef7ccbc9c",
".git/objects/67/0dd8b3396ca257189f74e3aff3a6eedfc7e7f6": "6614277256303ea76e3a5867c547a08d",
".git/objects/0b/52d87ab7c79935fe7ef5aa6840bf018410f6e8": "b121bd81f6af9bdda2cfa0640ded486e",
".git/objects/eb/043c594683cda4c2f30a2df58e9879513334b7": "558b360657d5ba4c1facf06b9f01f1dc",
".git/objects/f5/33aa436bc328c873634e256c1fda8ec73802ed": "68fe4c850bd1f783124640b72c845e55",
".git/objects/ca/23aa361aea1ffd1fb7d001c87a2c1fc1fd1c97": "b3f136b5a8aca339c74cc4a746d20c77",
".git/objects/pack/pack-28117558ad191d0ccec4422527a22301bf6cc0ce.pack": "c48deed430937f62134092eed6b1a087",
".git/objects/pack/pack-28117558ad191d0ccec4422527a22301bf6cc0ce.idx": "8e5eda109680b749fd87d204a8e5d698",
".git/objects/74/e14e0b1fd54974f4a69274f27c8a747a69f269": "c470d4949f6fb20ca628bd54308468ca",
".git/objects/4c/49c11a434196b8b3e66d53467d9f19627576b5": "1f0f9097e772a4dd4db975fa830b029c",
".git/objects/5c/77ec492bab75e22b3a7a1f42f780fd78ee5f78": "fbaf3a75a039a51f8afea52cc7820887",
".git/objects/97/427d973562bc89263606c75612ce777245df7d": "1b4d450058005a7e2f65579f42a107bc",
".git/objects/cc/7fc78bb45e16b0d83e4ceb59228995e04dbcd3": "770ea61bc0700375dbbf7f7fc95babdc",
".git/objects/e6/3e9ec0817d19d42804d87c5f6e85a26d9ccb3e": "3b095f9b4a1ffcf212ac8b2e559799b7",
".git/objects/f7/970bc8811e8a7944f0d31faf18384cefd59375": "4a32b9ed0b6415dbeafd8ae4caa3ec7a",
".git/objects/70/8a89862184749a9bfccf4cd88c6b82d56e98b3": "b25a022844e6d8f1ba6a3e86777aa091",
".git/objects/4a/d346277d9326e88fe45d76f9070ba712156f0f": "270b04ef41a4964e869826bc539d7d01",
".git/objects/8c/392447e3e36bd4db106301db332460122c4a0f": "7eb089550a7dc443f03252afd2bfa5e4",
".git/objects/1c/45004e11d779f7253b60d9a9f1b6d251e662be": "1523368cbef2dd3bbc25527fc7625bb9",
".git/objects/49/6f12def1387b3e594a5b9b8fc26f1b493eca31": "b5aa3e0e8a28b5ebee171ad46530a754",
".git/objects/47/5d400336320c44367c937efd6ddeba5806debb": "cf96a8c9178469f9f78f5f0735796743",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "94d65db7d6e4071851d886effed5a78b",
".git/logs/refs/heads/master": "94d65db7d6e4071851d886effed5a78b",
".git/logs/refs/remotes/origin/HEAD": "245e0c2ab3f9b831ccd5c497bf11b16e",
".git/logs/refs/remotes/origin/master": "dc7ae76e4c4b56d060f695b4d8813c43",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "eff24e6b6985939037d479e0b13c3752",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "eff24e6b6985939037d479e0b13c3752",
".git/index": "ad9c87661ad6e1dfc281803f8e7b0a22",
".git/packed-refs": "a933797765058a36c4d9afdae718f6f4",
".git/COMMIT_EDITMSG": "6a1008d3c549c7804ec852d7d9649e99",
"assets/AssetManifest.json": "b4506d6bd6701eddac1f5bf12edf935f",
"assets/NOTICES": "83d34fe0352f6a7960a137609a8de5e5",
"assets/FontManifest.json": "ecd6aea7aa2c2d0310ee926241c2174a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/images/MSS_0487.jpg": "1999c2eb0029d6e1b9d67815ae49f0a1",
"assets/assets/images/MSS_0108.jpg": "69edfa7ad1b01f1bb01129a917b9aa66",
"assets/assets/images/MSS_0096.jpg": "d2ec510f49d814c872d64382620a2e70",
"assets/assets/images/IMG_9604.jpeg": "152e66f4d30c928502849f96bd31b0fa",
"assets/assets/images/IMG_9584.jpeg": "e57033e1e57f9f2b7b94e38258b4c16f",
"assets/assets/images/MSS_0029.jpg": "6aecc55a9e77c7cddb25934f71559463",
"assets/assets/images/MSS_0005.jpg": "b6f3fc8449288da770fe1a35bcd79ffa",
"assets/assets/images/MSS_0063.jpg": "dc6ffe046aa5c6f556ae495b1c7ee071",
"assets/assets/images/MSS_0528.jpg": "3ed60dde5c409af33b1a3ca24e9759e7",
"assets/assets/images/MSS_0138.jpg": "3dbbedd5c3064bd3d2b16c5665470929",
"assets/assets/fonts/netmarbleB.ttf": "83ba63be06db2a4b0e404d77b84f749d",
"assets/assets/fonts/netmarbleM.ttf": "94728ed4057d4e4af9f0889caa8cb465",
"assets/assets/fonts/netmarbleL.ttf": "a64945d1d7ea451417fa3a982fd42715",
"assets/assets/fonts/NanumBarunGothicLight.ttf": "2173408a75c7faf4db58547ecc024fdc",
"assets/assets/fonts/MaruBuri-Regular.ttf": "33e46be46ed6282f3d6c8833670d916b",
"assets/assets/fonts/NanumBarunGothic.ttf": "0384532820e984ca0dc4a140d11b12d4",
"assets/assets/fonts/NanumBarunGothicUltraLight.ttf": "ba680ddc323220881ed95a3d26d6698b",
"assets/assets/fonts/NanumBarunGothicBold.ttf": "3b18e24ea5237f4d6e2731c17ca7f164"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
