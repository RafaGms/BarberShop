/** @type {import('next').NextConfig} */
const nextConfig = {
   // Para não dar erro por não reconhecer o domínio da Image
   images: {
      remotePatterns: [{
         hostname: 'utfs.io'
      }]
   }
};

export default nextConfig;
