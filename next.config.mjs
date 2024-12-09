export default {
  experimental: {
    optimizePackageImports: ['icon-library'],
  },
    images: {
     
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '*',
          pathname: '/**',
        },
      ],
    },
  };