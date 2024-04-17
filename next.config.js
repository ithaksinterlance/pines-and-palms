const withPWA = require('next-pwa')({
  dest: 'public'
  // disable: process.env.NODE_ENV === 'development',
  // register: true,
  // scope: '/app',
  // sw: 'service-worker.js',
  //...
});
const withImages = require('next-images');

module.exports = withImages(
  withPWA({
    reactStrictMode: true,
    swcMinify: true,
    images: {
      disableStaticImages: true
    },
    serverRuntimeConfig: {
      GOOGLE_MAPS_API_KEY: process.env.MAP_API_KEY
    },
    publicRuntimeConfig: {
      GOOGLE_MAPS_API_KEY: process.env.MAP_API_KEY
    },
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.module.rules.push({
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'images', // Output path for the images
                publicPath: '/_next/static/images/' // Public path for the images
              }
            },
            {
              loader: 'image-webpack-loader',
              options: {
                mozjpeg: {
                  progressive: true,
                  quality: 65
                },
                optipng: {
                  enabled: false
                },
                pngquant: {
                  quality: [0.65, 0.9],
                  speed: 4
                },
                gifsicle: {
                  interlaced: false
                },
                webp: {
                  quality: 75 // Adjust the quality as needed
                }
              }
            }
          ]
        });

        // For fonts
        config.module.rules.push({
          test: /\.(eot|woff|woff2|ttf|svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'fonts', // Output path for the fonts
                publicPath: '/_next/static/fonts/' // Public path for the fonts
              }
            }
          ]
        });

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
  })
);
