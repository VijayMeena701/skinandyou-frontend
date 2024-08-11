/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "www.skinandyou.in",
            }
        ]
    },
    env: {
        BACKEND: "http://localhost:8080"
    }
};

export default nextConfig;
