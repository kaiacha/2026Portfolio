import type { Metadata } from 'next'
import HomeContent from '@/components/HomeContent'

export const metadata: Metadata = {
  title: 'Mikyo Kaia Cha - UX Designer Portfolio | Human-Centered Design',
  description: 'Portfolio of Mikyo Kaia Cha, a human-centered UX designer bridging research, design, and development. Explore projects, volunteering experiences, and design work.',
  keywords: 'UX designer, user experience design, portfolio, Mikyo Kaia Cha, human-centered design, UX research, design thinking',
  authors: [{ name: 'Mikyo Kaia Cha' }],
  openGraph: {
    title: 'Mikyo Kaia Cha - UX Designer Portfolio',
    description: 'Human-centered UX designer bridging research, design, and development.',
    type: 'website',
    url: 'https://www.kaiacha.com',
    siteName: 'Mikyo Kaia Cha Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mikyo Kaia Cha - UX Designer Portfolio',
    description: 'Human-centered UX designer bridging research, design, and development.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function Home() {
  return <HomeContent />
}

