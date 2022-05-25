/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        MONGODB_URI: 'mongodb://localhost:27017/xxxx',
        // or MONGODB_URI: 'mongodb+srv://xxxx.mongodb.net/?retryWrites=true&w=majority'
    },
};

module.exports = nextConfig
