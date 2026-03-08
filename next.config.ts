import type { NextConfig } from "next";
import withSerwistInit from "@serwist/next";

const withSerwist = withSerwistInit({
  swSrc: "src/app/sw.ts",
  swDest: "public/sw.js",
  disable: process.env.NODE_ENV === "development",
});

const nextConfig: NextConfig = {
  output: "export", // Outputs a Single-Page Application (SPA)
  distDir: "build", // Changes the build output directory to `build`
};

export default withSerwist(nextConfig);
