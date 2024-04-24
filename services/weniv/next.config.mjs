/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix:
    process.env.NODE_ENV === 'production' ? 'https://main.weniv.co.kr' : '',
  images: {
    loader: 'custom',
    loaderFile: './image-loader.js',
  },
};

export default nextConfig;
