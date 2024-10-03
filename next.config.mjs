/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'media.istockphoto.com'
            }
        ]
    },
    experimental:  {
               missingSuspenseWithCSRBailout: false,
    },
};

export default nextConfig;