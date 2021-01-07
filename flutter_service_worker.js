'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "f009b7f5fcb95208a03fe46e649d490d",
"index.html": "ef730cd47263c3ed1097ae0f23fef46c",
"/": "ef730cd47263c3ed1097ae0f23fef46c",
"main.dart.js": "03b224dc7759d225d287fa9d928103a5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "24c3a6b7e80663a8eef82a567c91d2b7",
".git/config": "a309e376cd4fdd76861428050bffbd58",
".git/objects/61/87b6a8eb04eca98b8279f2af053a5e99f7ee56": "70f28096c5ae9068f8f9fbfd263adce1",
".git/objects/0b/cd72f525a170eec779af2d41f56fb3ac7c2b7b": "f8fff2fac368956f9b27e4ed46158449",
".git/objects/5a/9ff53a1c2146aac2c3ed438f8d6def1ce65a55": "f7e09fa5f47acea0fbeb95448605ce79",
".git/objects/ac/c76d530c5bd45bf23c56e9bc244c193d3db87a": "165347730827b43d64890a2628fff1b5",
".git/objects/d7/5ef6f0983e0b08899f4e9211c7dd1d038893f4": "33764b49c8a706763ed21d68d0850b52",
".git/objects/d8/9da780340c3ff152839494da96723d94b90a61": "ded1ce6bb30266a76e7a49336a55e852",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/e3/29d27e5a53e74d1c9f3589db1aa9c8f6ef35b7": "7144fb3ea424620b372491c9b14c3607",
".git/objects/ca/49eed010b9d5694d6d5be74c3e1730dac27594": "73d01c0698149e01e23b49787933e807",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/42/0f9a6b2eb0e702212b7ecea0a6ada3955a2f79": "602f5e4fcb56b01d97857428bc479d49",
".git/objects/73/0e9fe9f075c4d8b702b78cafeea0a46674b984": "e06ec9e9a5998887d2763b6f0453e633",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/a04ab30e5d4f84d46c1207a822595e19d50210": "4e4ba9ebf67c49b19d175dc21a2babfc",
".git/objects/19/2e64908fc0d6ad2481864fe1b6e4db4a1162d6": "fcfd3729f10d2141c9d91890f5335aa4",
".git/objects/2f/96f949bbeeec52d99dd368a69aba07472b81ab": "7f4de7051fde996ec5e58bf05f62a387",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/5c/f8792046c6e420a5407ab3b6898612db462179": "8f0b8fdadb2b45dc586cea996c8348e9",
".git/objects/65/b9422017fb42a927947007a27a31b23c52c968": "a473d866c7909bbf51fa3494abe9fb1c",
".git/objects/99/441383b0de036e29dc325b92836fdae3f89753": "550cc91f74d5ed426142fe2084248378",
".git/objects/0f/eff4193e80e92ac454cf94ac10cc75eede1767": "c149c42ad44f810ef070b140351dc8be",
".git/objects/0f/08689f64f75162c43b94201ddea027ec868ca6": "2b37371fdb514621d3a485bb0e74198a",
".git/objects/dd/2ddb141ece5bf20c19eb2e1ce1f3ac5ec2a9c9": "b6906f2509966ad32815b7beef97f1c5",
".git/objects/aa/029e90881b5b4b299730fe5b1608ef6c428360": "325e44f13ff0f7c041fcb8b00ac956e1",
".git/objects/b7/89bb7a5e3b6d7d4cc05d2d0c784d7cd9da43c5": "de9caea40ff44d6dfd2de1e7779c315c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/5bd8498371c828993a03b06d1e187331579684": "c0a82195bfa1e00b9a1f0b576632cea1",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/b0/7dc71d0e8701a2a251b0bc25bac1b1f36beda2": "182a24eedbff858690f0a0db2dd86bb8",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ea/eb11c2625d98d1f2ac864d9db94393702d6a10": "41584a55ce199a33aad6b5b6cff4653a",
".git/objects/fa/690a392052d4c006253c0c771d33e551ea53ec": "99d91b8a96cfc54384d5f9e662193416",
".git/objects/ff/56188ce416022238572aa2bf63e88dbd654ee6": "fc2fe2d244c908d403fa27573825fee5",
".git/objects/c5/a4510b221b7a0e50a0516a64a29f58651a0257": "8cafb11e7d6fbde1cb8e788a889512a5",
".git/objects/ce/498329a5cc79944f4da7445b13aa5ef391ad10": "c4b56b19f5c3becf4ad8c351d9cb0c3f",
".git/objects/e0/b4f63f944f46f6e2cd199aba047c84e3d96a20": "ca4ad22ca70005e66a3a61bda69b92c3",
".git/objects/79/02e64adf376c594d54d4bcefbe99a42caa7796": "331b6d93c34e1fde2c8658c4f13d81b5",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/83/e5557ade7e8bd7cacb041eed26e6c55517a4a1": "ee6bad01981a4425ef2b3e564fbba143",
".git/objects/1b/0fc02880dfd3087368fef2e785719a6b6e18ee": "7b7e4f84b0ee70f532ed13592073f058",
".git/objects/48/39013f467ddecc16cbe4c70395bc22cf0c09d0": "4ab7b3b226791385f3c21d4df18a3475",
".git/objects/15/b6dd1af0692aa05292247591bf5b46910f7a84": "1921f7e9a73f864752e3b4ccacee5d3c",
".git/objects/85/13d15883d1f503d4f5cad95421dace3a8b58c5": "028c4c8fcdee6b48929043d0b9b50aba",
".git/objects/82/db628bb412f65dc71813564dcc0fff1d184bca": "ce68a04b7f314396cef6b979d7b8c11c",
".git/objects/78/c118efcb804383cc68a5502cee9f9f949d212a": "001f2a5959b983e9b83d3910159ca1ef",
".git/objects/7a/81da68b91d78d78cee53756dd4e169214caf90": "9e3e8cb2bf6831457027f490e1392be3",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "de4511ba5b61f38a0660af98ca9ff6d5",
".git/logs/refs/heads/master": "de4511ba5b61f38a0660af98ca9ff6d5",
".git/logs/refs/remotes/origin/master": "0f675027a048cace587359f4ee62abbb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "c19f2c5baa3e61bce053f602bcc9b96c",
".git/refs/remotes/origin/master": "c19f2c5baa3e61bce053f602bcc9b96c",
".git/index": "0f5853c369e7ef636b686c21dc7dccc0",
".git/COMMIT_EDITMSG": "9884622f159cf315e6469cc9f0be7e2c",
"assets/AssetManifest.json": "94ecd29fcbd57a50f8df494d567b06b3",
"assets/NOTICES": "4ca055f694c48715842d5853d3ce754f",
"assets/FontManifest.json": "3e693af877f74011f306f701b0b34466",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/images/MSS_0033.jpg": "1dff35c5acec7447c4845c850c93ed70",
"assets/assets/images/MSS_0004.jpg": "b296f9af2815ad016a21ad1a18884758",
"assets/assets/images/MSS_0063.jpg": "e661ca3ab20ebfeb6e49c33d498cff16",
"assets/assets/map/apel_map.jpeg": "b0b02ba92140bab4ecf0ba2b3f031e39",
"assets/assets/fonts/netmarbleB.ttf": "83ba63be06db2a4b0e404d77b84f749d",
"assets/assets/fonts/netmarbleM.ttf": "94728ed4057d4e4af9f0889caa8cb465",
"assets/assets/fonts/netmarbleL.ttf": "a64945d1d7ea451417fa3a982fd42715"
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
