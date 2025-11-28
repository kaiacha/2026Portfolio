import type { Metadata } from 'next'
import WindowPageLayout from '@/components/WindowPageLayout'
import ProjectsContent from '@/components/projects/ProjectsContent'

export const metadata: Metadata = {
  title: 'Projects | Mikyo Kaia Cha',
  description: 'Browse selected UX and design projects by Mikyo Kaia Cha.',
}

export default function ProjectsPage() {
  return (
    <WindowPageLayout title="Projects" currentPage="projects">
      <ProjectsContent />
    </WindowPageLayout>
  )
}

