/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: "/api/(.*)",
                headers: [
                    {
                        key: "Access-Control-ALllow-Origin",
                        value: "*",
                    },
                    {
                        key: "Access-Control-ALllow-Methods",
                        value: "GET, POST, PUT, DELETE, OPTIONS",
                    },
                    {
                        key: "Access-Control-ALllow-Headers",
                        value: "Content-Type, Authorization",
                    },
                    {
                        key: "Content-Range",
                        value: "bytes : 0-9/*",
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
