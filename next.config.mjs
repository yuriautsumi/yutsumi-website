import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  transpilePackages: ["next-mdx-remote"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.google.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "news.mit.edu",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "www.eecs.mit.edu",
        pathname: "**",
      },
    ],
  },
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
  output: "standalone",
  allowedDevOrigins: [
    "http://localhost:3000",
    "https://z3yjxs3dya.us-east-2.awsapprunner.com",
    "https://yuriautsumi.com",
  ],
};

export default withMDX(nextConfig);
