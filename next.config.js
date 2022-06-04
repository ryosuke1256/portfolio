const withPWA = require('next-pwa');

// https://github.com/shadowwalker/next-pwa
// https://developer.chrome.com/docs/workbox/
https: module.exports = withPWA({
  pwa: {
    dest: 'public', // swの出力ディレクトリ
    register: true, // default true
    skipWaiting: true, //default true, Service Worker の更新が即座に有効になる
    // runtimeCaching: []
    disable: process.env.NODE_ENV === 'development',
  },
  images: {
    domains: ['images.ctfassets.net'],
  },
  reactStrictMode: true,
});
