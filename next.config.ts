import type { NextConfig } from "next";

const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isGitHubPagesBuild ? "/taleeat-altaqnia" : "",
  assetPrefix: isGitHubPagesBuild ? "/taleeat-altaqnia/" : undefined,
};

export default nextConfig;
