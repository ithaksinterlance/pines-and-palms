const withPWA = require('next-pwa')({
  dest: 'public'
  // disable: process.env.NODE_ENV === 'development',
  // register: true,
  // scope: '/app',
  // sw: 'service-worker.js',
  //...
});
const withImages = require('next-images');

module.exports = withImages(withPWA({
  reactStrictMode: true,
  swcMinify: true,
  serverRuntimeConfig: {
    GOOGLE_MAPS_API_KEY: process.env.MAP_API_KEY
  },
  publicRuntimeConfig: {
    GOOGLE_MAPS_API_KEY: process.env.MAP_API_KEY
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
      (config.resolve.fallback = {
        fs: false,
        child_process: false,
        https: false,
        os: false,
        path: false,
        crypto: false,
        http2: false,
        zlib: false,
        net: false,
        tls: false,
        http: false,
        stream: false,
        request: false
      }),
        config.module.rules.push(
          {
            test: /\.(eot|woff|woff2|ttf|svg)$/,
            use: {
              loader: 'url-loader',
              options: {
                limit: 100000,
                name: '[name].[ext]'
              }
            }
          },
          {
            test: /\.(png|jpg|gif)$/,
            use: [
              {
                loader: 'file-loader',
                options: {}
              }
            ]
          }
        );
    }
    return config;

  },
  async redirects() {
    return [
      {
        source: '/search-by-cities-in-uae/Dibba',
        destination:
          'https://emirates-car.com/search-by-cities-in-uae/Dibba Al Fujairah (Fujairah)',
        permanent: true
      }
    ];
  },
  redirects: async () => [
    {
      source: '/',
      has: [{ type: 'host', value: 'www.emirates-car.com' }],
      destination: 'https://emirates-car.com',
      permanent: true
    }
  ],
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development'
  },

  staticPageGenerationTimeout: 5000
}));
