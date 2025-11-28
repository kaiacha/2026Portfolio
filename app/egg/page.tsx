import type { Metadata } from 'next'
import WindowPageLayout from '@/components/WindowPageLayout'

export const metadata: Metadata = {
  title: 'EGG | Mikyo Kaia Cha',
  description: 'EGG wellness companion prototype by Mikyo Kaia Cha.'
}

export default function EggPage() {
  return (
    <WindowPageLayout title="EGG" currentPage="projects" fullScreen enableFinderModals>
      <div className="h-full w-full overflow-y-auto px-8 py-10 space-y-6 text-gray-100">
        <header className="space-y-2">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400">Concept</p>
          <h1 className="text-3xl font-semibold text-white">Micro-actions for Everyday Growth</h1>
          <p className="max-w-2xl text-sm text-gray-300">
            EGG is a playful habit and wellness tracker that nudges students to recharge. From micro-meditations to
            community check-ins, the experience keeps momentum light, friendly, and deeply personalized.
          </p>
        </header>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl bg-white/5 p-6 backdrop-blur">
            <h2 className="text-lg font-semibold text-white">Role</h2>
            <p className="mt-2 text-sm text-gray-300">Experience Designer · Motion · Illustration</p>
          </div>
          <div className="rounded-2xl bg-white/5 p-6 backdrop-blur">
            <h2 className="text-lg font-semibold text-white">Timeline</h2>
            <p className="mt-2 text-sm text-gray-300">3-week concept sprint · Storyboarding, prototype animation</p>
          </div>
        </section>

        <section className="rounded-2xl bg-white/5 p-6 backdrop-blur">
          <h2 className="text-lg font-semibold text-white">Experience Notes</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-200">
            <li>Daily rituals with haptic rewards and whimsical character animations.</li>
            <li>Integrates with Unius to surface campus wellness resources and pop-up events.</li>
            <li>Inclusive color palette and typography optimized for cognitive accessibility.</li>
          </ul>
        </section>
      </div>
    </WindowPageLayout>
  )
}
