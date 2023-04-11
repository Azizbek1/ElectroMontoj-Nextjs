/** @type {import('next').NextConfig} */
const nextConfig = {
	poweredByHeader: false,
	env: {
		APP_URL: process.env.NEXT_PUBLIC_PUBLIKKEY,
	},
	images: {
		domains: ['27.u6964.xvest3.ru']
	}
}

module.exports = nextConfig
