/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'rukminim2.flixcart.com',
			},
			{
				protocol: 'https',
				hostname: 'cdn.dummyjson.com',
			},
			{
				protocol: 'https',
				hostname: 'robohash.org',
			},
		],
	},
	redirects: async () => [
		{
			source: '/admin',
			destination: '/admin/dashboard',
			permanent: true
		},
	],
};

export default nextConfig;
