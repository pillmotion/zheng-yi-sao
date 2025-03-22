/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'majjajfhoxucebhcbuih.supabase.co',
                protocol: 'https',
            },
            {
                hostname: 'fizzdragon.com',
                protocol: 'https',
            },
        ],
    },
};

export default nextConfig;
