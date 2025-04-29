import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

if (process.env.ANALYZE === "true") {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
    openAnalyzer: process.env.ANALYZE === "true",
  });

  module.exports = withBundleAnalyzer(nextConfig);
} else {
  module.exports = nextConfig;
}
