import NextBundleAnalyzer from '@next/bundle-analyzer'
import createNextIntlPlugin from 'next-intl/plugin'
// Bỏ dòng import type { NextConfig } đi hoặc cứ để đó cũng được

const withNextIntl = createNextIntlPlugin()

// Thay đổi chỗ này từ NextConfig thành any
const nextConfig: any = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: 'localhost',
        pathname: '/**'
      },
      {
        hostname: 'api-bigboy.duthanhduoc.com',
        pathname: '/**'
      },
      {
        hostname: 'via.placeholder.com',
        pathname: '/**'
      }
    ]
  }
}

const withBundleAnalyzer = NextBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true'
})

export default withBundleAnalyzer(withNextIntl(nextConfig))