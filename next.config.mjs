/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // All routes are pre-rendered at build time via generateStaticParams
  // (36 state/UT pages + one page per district), so this ships as a fully
  // static site by default. If you want a plain static export you can
  // host on any static file host / CDN (no Node server required), add:
  //   output: 'export',
  // Keep in mind that `output: 'export'` requires next/image to run
  // with `unoptimized: true` -- this project doesn't use next/image, so
  // either mode works out of the box.
};

export default nextConfig;
