/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		CLIENT_DATA: process.env.CLIENT_DATA,
	},
};

module.exports = nextConfig;
