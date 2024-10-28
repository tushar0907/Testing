/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        "aburstofflavor.wordpress.com",
        "justbeyou.in",
        'dynamic-media-cdn.tripadvisor.com', // Add the domain here
        "imgmedia.lbb.in",
        "media-cdn.tripadvisor.com",
        "imgstaticcontent.lbb.in",
        "b.zmtcdn.com",
        "encrypted-tbn0.gstatic.com",
        'res.cloudinary.com', // new domain to allow
      ],
    },
  };

export default nextConfig;
