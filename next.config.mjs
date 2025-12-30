/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
 experimental: {
    turbo: {
      loaders: {
        ".glsl": ["text"],
        ".vert": ["text"],
        ".frag": ["text"]
      }
    }
  },
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
