import type { Metadata } from 'next'
import AboutContent from '@/components/AboutContent'
import WindowPageLayout from '@/components/WindowPageLayout'

export const metadata: Metadata = {
  title: 'About - Mikyo Kaia Cha | UX Designer',
  description: 'Learn about Mikyo Kaia Cha, a UX designer merging human systems engineering, data, and empathic research.',
}

export default function AboutPage() {
  return (
    <WindowPageLayout title="About">
      <AboutContent />
    </WindowPageLayout>
  )
}
