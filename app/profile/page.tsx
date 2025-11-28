import type { Metadata } from 'next'
import WindowPageLayout from '@/components/WindowPageLayout'
import ProfileContent from '@/components/profile/ProfileContent'

export const metadata: Metadata = {
  title: 'Profile | Mikyo Kaia Cha',
  description: 'Learn more about Mikyo Kaia Cha, a UX designer focusing on human-centered experiences.',
}

export default function ProfilePage() {
  return (
    <WindowPageLayout title="Profile" currentPage="home" fullScreen enableFinderModals>
      <ProfileContent />
    </WindowPageLayout>
  )
}

