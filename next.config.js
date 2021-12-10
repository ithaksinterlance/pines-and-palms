module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["car-images1997.s3.us-east-2.amazonaws.com"],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
      config.resolve.fallback = {
        fs: false,
        https: false,
        child_process: false,
        os: false,
        path: false,
        crypto: false,
        net: false
      };
    }

    return config;
  },
};
