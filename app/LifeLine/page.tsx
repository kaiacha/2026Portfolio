import type { Metadata } from 'next'
import WindowPageLayout from '@/components/WindowPageLayout'
import CaseStudySlider from '@/components/CaseStudySlider'
import { lifelineSlides } from '@/data/lifelineSlides'

export const metadata: Metadata = {
  title: 'LifeLine | Mikyo Kaia Cha',
  description: 'LifeLine campus companion experience crafted by Mikyo Kaia Cha.'
}

export default function LifeLinePage() {
  return (
    <WindowPageLayout title="LifeLine" currentPage="projects" fullScreen enableFinderModals>
      <div className="h-full w-full overflow-hidden bg-slate-950">
        <CaseStudySlider slides={lifelineSlides} />
      </div>
    </WindowPageLayout>
  )
}
