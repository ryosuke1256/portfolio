if (!self.define) {
  const e = (e) => {
      'require' !== e && (e += '.js');
      let s = Promise.resolve();
      return (
        r[e] ||
          (s = new Promise(async (s) => {
            if ('document' in self) {
              const r = document.createElement('script');
              (r.src = e), document.head.appendChild(r), (r.onload = s);
            } else importScripts(e), s();
          })),
        s.then(() => {
          if (!r[e]) throw new Error(`Module ${e} didn’t register its module`);
          return r[e];
        })
      );
    },
    s = (s, r) => {
      Promise.all(s.map(e)).then((e) => r(1 === e.length ? e[0] : e));
    },
    r = { require: Promise.resolve(s) };
  self.define = (s, n, a) => {
    r[s] ||
      (r[s] = Promise.resolve().then(() => {
        let r = {};
        const t = { uri: location.origin + s.slice(1) };
        return Promise.all(
          n.map((s) => {
            switch (s) {
              case 'exports':
                return r;
              case 'module':
                return t;
              default:
                return e(s);
            }
          })
        ).then((e) => {
          const s = a(...e);
          return r.default || (r.default = s), r;
        });
      }));
  };
}
define('./sw.js', ['./workbox-ea903bce'], function (e) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: '/_next/static/chunks/framework-64eb7138163e04c228e4.js', revision: 'udLwAhRR3QBdaNkjkLy5r' },
        { url: '/_next/static/chunks/main-b449f89ec2fd6b0ffe72.js', revision: 'udLwAhRR3QBdaNkjkLy5r' },
        { url: '/_next/static/chunks/pages/_app-02523805f1f9350d0682.js', revision: 'udLwAhRR3QBdaNkjkLy5r' },
        { url: '/_next/static/chunks/pages/_error-9faf4177fb4e528b4124.js', revision: 'udLwAhRR3QBdaNkjkLy5r' },
        { url: '/_next/static/chunks/pages/index-12657f910ba2a5bf6c82.js', revision: 'udLwAhRR3QBdaNkjkLy5r' },
        { url: '/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js', revision: 'udLwAhRR3QBdaNkjkLy5r' },
        { url: '/_next/static/chunks/webpack-61095c13c5984b221292.js', revision: 'udLwAhRR3QBdaNkjkLy5r' },
        { url: '/_next/static/css/120f2e2270820d49a21f.css', revision: 'udLwAhRR3QBdaNkjkLy5r' },
        { url: '/_next/static/css/eb291d7de33c874d5a88.css', revision: 'udLwAhRR3QBdaNkjkLy5r' },
        { url: '/_next/static/udLwAhRR3QBdaNkjkLy5r/_buildManifest.js', revision: 'udLwAhRR3QBdaNkjkLy5r' },
        { url: '/_next/static/udLwAhRR3QBdaNkjkLy5r/_ssgManifest.js', revision: 'udLwAhRR3QBdaNkjkLy5r' },
        { url: '/favicon.ico', revision: 'a12c849251d3330d482830f40d227d06' },
        { url: '/images/cat192-android.png', revision: '92f3a11a8d50569400a9f4853fcab558' },
        { url: '/images/cat192-apple.png', revision: 'ee85677fd6bf12c56debbe0307a18af6' },
        { url: '/images/cat512.png', revision: '081375478a636f70630a6e4883420a89' },
        { url: '/manifest.json', revision: 'ef6a24501951ddf94ad9578459cfe2db' },
        { url: '/vercel.svg', revision: '4b4f1876502eb6721764637fe5c41702' },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute('/', new e.NetworkFirst({ cacheName: 'start-url', plugins: [{ cacheWillUpdate: async ({ request: e, response: s, event: r, state: n }) => (s && 'opaqueredirect' === s.type ? new Response(s.body, { status: 200, statusText: 'OK', headers: s.headers }) : s) }] }), 'GET'),
    e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i, new e.CacheFirst({ cacheName: 'google-fonts-webfonts', plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3, purgeOnQuotaError: !0 })] }), 'GET'),
    e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i, new e.StaleWhileRevalidate({ cacheName: 'google-fonts-stylesheets', plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800, purgeOnQuotaError: !0 })] }), 'GET'),
    e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i, new e.StaleWhileRevalidate({ cacheName: 'static-font-assets', plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800, purgeOnQuotaError: !0 })] }), 'GET'),
    e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i, new e.StaleWhileRevalidate({ cacheName: 'static-image-assets', plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400, purgeOnQuotaError: !0 })] }), 'GET'),
    e.registerRoute(/\/_next\/image\?url=.+$/i, new e.StaleWhileRevalidate({ cacheName: 'next-image', plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400, purgeOnQuotaError: !0 })] }), 'GET'),
    e.registerRoute(/\.(?:mp3|mp4)$/i, new e.StaleWhileRevalidate({ cacheName: 'static-media-assets', plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400, purgeOnQuotaError: !0 })] }), 'GET'),
    e.registerRoute(/\.(?:js)$/i, new e.StaleWhileRevalidate({ cacheName: 'static-js-assets', plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400, purgeOnQuotaError: !0 })] }), 'GET'),
    e.registerRoute(/\.(?:css|less)$/i, new e.StaleWhileRevalidate({ cacheName: 'static-style-assets', plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400, purgeOnQuotaError: !0 })] }), 'GET'),
    e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i, new e.StaleWhileRevalidate({ cacheName: 'next-data', plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400, purgeOnQuotaError: !0 })] }), 'GET'),
    e.registerRoute(/\.(?:json|xml|csv)$/i, new e.NetworkFirst({ cacheName: 'static-data-assets', plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400, purgeOnQuotaError: !0 })] }), 'GET'),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/');
      },
      new e.NetworkFirst({ cacheName: 'apis', networkTimeoutSeconds: 10, plugins: [new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400, purgeOnQuotaError: !0 })] }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith('/api/');
      },
      new e.NetworkFirst({ cacheName: 'others', networkTimeoutSeconds: 10, plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400, purgeOnQuotaError: !0 })] }),
      'GET'
    ),
    e.registerRoute(({ url: e }) => !(self.origin === e.origin), new e.NetworkFirst({ cacheName: 'cross-origin', networkTimeoutSeconds: 10, plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600, purgeOnQuotaError: !0 })] }), 'GET');
});
