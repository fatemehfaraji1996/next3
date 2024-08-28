
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'assets.example.com',
              port: '',
              pathname: '/account123/**',
            },
          ],
        domains: ['cdn.dummyjson.com'],
    // domains: ['encrypted-tbn0.gstatic.com']   
   }}
export default nextConfig 
    


