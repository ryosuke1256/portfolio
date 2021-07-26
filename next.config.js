module.exports = {
  reactStrictMode: true,
};

const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: 'public', // swの出力ディレクトリ
    // runtimeCaching: []
    disable: process.env.NODE_ENV === 'development',
  },
});

module.exports = {
  images: {
    domains: ['images.ctfassets.net'],
  },
};
