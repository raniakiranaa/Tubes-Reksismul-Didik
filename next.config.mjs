// next.config.mjs

const nextConfig = {
    webpack: (config, { dev, isServer }) => {
        if (dev && !isServer) {
            config.devtool = 'source-map';
        }
        return config;
    },
};

export default nextConfig;
