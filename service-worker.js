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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

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
    "url": "404.html",
    "revision": "e826f13550bb6b3f1f7905f442e2867f"
  },
  {
    "url": "assets/css/0.styles.1e5a53e3.css",
    "revision": "e1675fee86bc6d1e693787c4d261d0d3"
  },
  {
    "url": "assets/img/3table.98bb1ea3.jpg",
    "revision": "98bb1ea3eb55d48dc6391a174bfb4d3d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.7205fb81.js",
    "revision": "40743270f59a11214d052c2a13295931"
  },
  {
    "url": "assets/js/10.70312636.js",
    "revision": "266ac7d94d5ae16655657069635c41f2"
  },
  {
    "url": "assets/js/13.f040c9ea.js",
    "revision": "85a1793f0d6a9913e4c8d4e2c2455b08"
  },
  {
    "url": "assets/js/14.72c221e4.js",
    "revision": "08cb5bce06619e77724547050d6186d4"
  },
  {
    "url": "assets/js/15.2348c915.js",
    "revision": "08aa51009f0b5670b3c67b77b70bc233"
  },
  {
    "url": "assets/js/16.717f0566.js",
    "revision": "5bd4b582586c554bd15e2e78bbd0d561"
  },
  {
    "url": "assets/js/17.8799cc9a.js",
    "revision": "0966fd1c67d536ac2b8c2995f7b105f9"
  },
  {
    "url": "assets/js/18.e5ab9026.js",
    "revision": "fa44ddf0359565499d58ee2dd1d92f41"
  },
  {
    "url": "assets/js/19.8152ee81.js",
    "revision": "2951a932cc919a300cf6d77e5553801e"
  },
  {
    "url": "assets/js/2.1986abb4.js",
    "revision": "7e2901c02a03f813e7c792915f0c13b6"
  },
  {
    "url": "assets/js/20.ad7c8fd1.js",
    "revision": "ea4a1bc041775ad3d30bd8f12f085b0f"
  },
  {
    "url": "assets/js/21.f38b8527.js",
    "revision": "5edbe866be7f102955a0fe4e83bcad5c"
  },
  {
    "url": "assets/js/22.c1c91062.js",
    "revision": "ea173a3a9cb6faea3a9107665488efa5"
  },
  {
    "url": "assets/js/23.e7f62a32.js",
    "revision": "202db157c42dd6ff4aa1cec2472d6caa"
  },
  {
    "url": "assets/js/24.067a7846.js",
    "revision": "c4bd68b78b94ea6c7a7daccd92c83498"
  },
  {
    "url": "assets/js/25.76627a8a.js",
    "revision": "22fc701ff4c1c18caeba1e88585e1223"
  },
  {
    "url": "assets/js/26.527f7397.js",
    "revision": "9d1fb77baeb6f6263645370265b6645e"
  },
  {
    "url": "assets/js/27.c08671cd.js",
    "revision": "98ef975d21fc877b16f5d727f5d40e88"
  },
  {
    "url": "assets/js/28.0185fb9c.js",
    "revision": "11bd5ffbd77c27596b97a2a3ddc97bde"
  },
  {
    "url": "assets/js/29.74ac1af1.js",
    "revision": "08b27de9fad0d6528d8320d17d02f5ad"
  },
  {
    "url": "assets/js/3.a8a1b14c.js",
    "revision": "9fe7a7eb4df28798663bdb3d5f77883d"
  },
  {
    "url": "assets/js/30.4309bacf.js",
    "revision": "badbb577becdce772e9cf6f5de3420f0"
  },
  {
    "url": "assets/js/31.1f0addf3.js",
    "revision": "ae4e9b08f4c69517ce6a0ba1f256669b"
  },
  {
    "url": "assets/js/32.636387c9.js",
    "revision": "193a3efad663eef934efc8fcad1672d0"
  },
  {
    "url": "assets/js/33.5d521115.js",
    "revision": "41697a8d864093a640c9f180f5078eba"
  },
  {
    "url": "assets/js/34.67212758.js",
    "revision": "b5f9a6969d5072f4bb32f71e43d25a93"
  },
  {
    "url": "assets/js/35.b736d4f5.js",
    "revision": "9b8e1e004f9a506c33e610d60276d4d2"
  },
  {
    "url": "assets/js/36.4d8e59d8.js",
    "revision": "dcce352862b4fdd759070fbcbf17ac87"
  },
  {
    "url": "assets/js/37.ed5c6ee2.js",
    "revision": "5a5e987916c2a325572f4907b793f55d"
  },
  {
    "url": "assets/js/38.e7b39627.js",
    "revision": "7e9ae16f9c0f9cc0f308d726a8873d52"
  },
  {
    "url": "assets/js/39.dfd53660.js",
    "revision": "7b27a385ccd02bbb365743a083d91fc7"
  },
  {
    "url": "assets/js/4.dfdf68be.js",
    "revision": "3ec4af179a7a47a44771a22397b6d690"
  },
  {
    "url": "assets/js/41.b7ad4f39.js",
    "revision": "4a64eabbfdab15775cabe77202431645"
  },
  {
    "url": "assets/js/5.61a5bb0e.js",
    "revision": "8e3b37dc1a30f5304a62b9dd02d49436"
  },
  {
    "url": "assets/js/6.ba81abb0.js",
    "revision": "a14126397feaa1c3e5ac9a5bb114ea75"
  },
  {
    "url": "assets/js/7.0c28963e.js",
    "revision": "e966a5282fb112d8543f3f7ae1224be4"
  },
  {
    "url": "assets/js/8.a998a6c6.js",
    "revision": "be6208a37be06dc8b56298f61fc6ebe9"
  },
  {
    "url": "assets/js/9.47470e96.js",
    "revision": "919b9f0643e716960e5f9ac6db6310d1"
  },
  {
    "url": "assets/js/app.2cfc5b20.js",
    "revision": "d0b5a77e2479dc955a3ecbbfbbf15244"
  },
  {
    "url": "assets/js/vendors~docsearch.3cefa927.js",
    "revision": "a771ffaa589785db57bba23b6f8f053b"
  },
  {
    "url": "conclusion/index.html",
    "revision": "fc64dcb4cf0bd513284faecc25b2bdde"
  },
  {
    "url": "design/index.html",
    "revision": "e6b30d69824cb43a9899b41c7d38ea4e"
  },
  {
    "url": "index.html",
    "revision": "a82d084ca62ad39eebfe100fff6e01f8"
  },
  {
    "url": "intro/index.html",
    "revision": "0edabe95c4ae92f9f83b133f9f7af8d9"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "0f2d6fd17c7c35e36fccdb556701cae2"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "5d92af1c523dae370839fa922dd868e1"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "c9fa1d2a35c7c7394c39aa4852be2360"
  },
  {
    "url": "software/index.html",
    "revision": "473d5b5e11cda4056e2ec1468a75243d"
  },
  {
    "url": "test/index.html",
    "revision": "0ab6bcfe067e9e225be9b4ffdaab7971"
  },
  {
    "url": "use cases/index.html",
    "revision": "4b0556eb8fd92b115d75453677b00b6e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
