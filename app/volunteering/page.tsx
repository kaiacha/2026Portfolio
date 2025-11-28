import type { Metadata } from 'next'
import WindowPageLayout from '@/components/WindowPageLayout'
import VolunteeringContent from '@/components/volunteering/VolunteeringContent'

export const metadata: Metadata = {
  title: 'Volunteering | Mikyo Kaia Cha',
  description: 'Explore the volunteering work of Mikyo Kaia Cha, including mentorship, leadership, and community projects.',
}

export default function VolunteeringPage() {
  return (
    <WindowPageLayout title="Volunteering" currentPage="volunteering">
      <VolunteeringContent />
    </WindowPageLayout>
  )
}

