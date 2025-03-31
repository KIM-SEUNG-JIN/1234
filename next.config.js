/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
    // 외부 이미지 도메인이 필요한 경우 아래에 추가
    // 예: domains: ['localhost', 'example.com', 'images.unsplash.com'],
    formats: ['image/webp'],
  },
  // 국제화 설정 (필요한 경우)
  i18n: {
    locales: ['ko'],
    defaultLocale: 'ko',
  },
}

module.exports = nextConfig
