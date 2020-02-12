/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts(
  "https://cdn.jsdelivr.net/npm/workbox-sw@4.3.1/build/workbox-sw.min.js"
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "Map.20a20746.js",
    "revision": "f1c2e8a08969315747b93ce4d04c8135"
  },
  {
    "url": "Map.504c403d.css",
    "revision": "87bda9a46299cce8d5fabf5c2d4fe6b5"
  },
  {
    "url": "repository.bf7adc11.png",
    "revision": "d7379d0008eb939db6599365db3bbf9a"
  },
  {
    "url": "source.a6e543ed.js",
    "revision": "6e11b65cf6ed30ac8369e210dcdd8ae7"
  },
  {
    "url": "source.fa9ff450.css",
    "revision": "b64a4fa4db90ae2a8049b7dd6d9def1e"
  },
  {
    "url": "watch-fork.5340aac9.png",
    "revision": "8f08166633d3e1d80455eef81ab4505d"
  },
  {
    "url": "wuhan2020-mini.ea4c48b6.png",
    "revision": "b2205e818a1764935676177594818ca8"
  },
  {
    "url": "wuhan2020.a11be2da.png",
    "revision": "c304f43585e91b54016d3f4c3c6cb481"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
