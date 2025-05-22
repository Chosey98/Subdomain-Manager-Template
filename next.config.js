/** @type {import('next').NextConfig} */
const nextConfig = {
	// Enable reading environment variables at runtime
	experimental: {
		serverActions: true,
	},
	env: {
		CLIENT_DATA: process.env.CLIENT_DATA,
	},
};

module.exports = nextConfig;
