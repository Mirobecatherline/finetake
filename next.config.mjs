/** @type {import('next').NextConfig} */
const nextConfig = {

    async rewrites() {
return [
    // {
    //     source: '/api/:path*',
    //     destination: 'https://photo27-2-production.up.railway.app/:path*',
    // }
    {
        source: '/api/:path*',
        destination: 'http://127.0.0.1:3000/:path*',
    }
]        
    }
};

export default nextConfig;
