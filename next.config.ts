import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack(config, { isServer }) {
    if (isServer) {
      config.plugins.push(
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        new (require('webpack')).IgnorePlugin({
          resourceRegExp: /next-font-manifest\.json/,
        })
      );
    }
    return config;
  },
};

export default nextConfig;
