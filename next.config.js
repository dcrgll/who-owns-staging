/** @type {import('next').NextConfig} */
const nextConfig = {
	async rewrites() {
		return [
			{
				source: '/bee.js',
				destination: 'https://cdn.splitbee.io/sb.js'
			},
			{
				source: '/_hive/:slug',
				destination: 'https://hive.splitbee.io/:slug'
			}
		]
	},
	reactStrictMode: true,
	swcMinify: true,
	experimental: {
		appDir: true
	}
}

module.exports = nextConfig
