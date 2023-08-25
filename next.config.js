// const withPWA = require('next-pwa');

// module.exports = withPWA({
//   pwa: {
//     dest: 'public',
//     swSrc: 'sw.js',
//   },
// });


/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
    dest: "public",
    register: true,
    skipWaiting: true,
    sw:"sw.js"
});

const nextConfig = withPWA({
    experimental: {
        newNextLinkBehavior: true,
    },
})
// const nextConfig = {}

module.exports = nextConfig
