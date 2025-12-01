import type { Metadata } from 'next'
import WindowPageLayout from '@/components/WindowPageLayout'

export const metadata: Metadata = {
  title: 'EGG | Mikyo Kaia Cha',
  description: 'EGG wellness companion prototype by Mikyo Kaia Cha.'
}

export default function EggPage() {
  return (
    <WindowPageLayout title="EGG" currentPage="projects" fullScreen enableFinderModals>
      <div className="h-full w-full flex items-center justify-center px-8 py-10">
        <div className="text-center space-y-4 max-w-md">
          <div className="text-6xl mb-6">🚧</div>
          <h1 className="text-3xl font-semibold text-black">To Be Continued...</h1>
          <p className="text-sm text-gray-500 mt-4">
            This project page is currently under construction. Please check back soon!
          </p>
        </div>
      </div>
    </WindowPageLayout>
  )
}
