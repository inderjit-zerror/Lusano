/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  turbopack: {},
  webpack(config) {
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/i,
      use: [
        {
          loader: "glsl-shader-loader",
          options: {},
        },
      ],
    });

    return config;
  },
  reactCompiler: true,
};

export default nextConfig;
