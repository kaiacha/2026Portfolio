import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.kaiacha.com'),
  title: {
    default: 'Mikyo Kaia Cha - UX Designer Portfolio',
    template: '%s | Mikyo Kaia Cha',
  },
  description: 'Portfolio of Mikyo Kaia Cha, a human-centered UX designer bridging research, design, and development.',
  keywords: ['UX designer', 'user experience design', 'portfolio', 'Mikyo Kaia Cha', 'human-centered design'],
  authors: [{ name: 'Mikyo Kaia Cha' }],
  creator: 'Mikyo Kaia Cha',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.kaiacha.com',
    siteName: 'Mikyo Kaia Cha Portfolio',
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
  verification: {
    // Add Google Search Console verification when available
    // google: 'your-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}


