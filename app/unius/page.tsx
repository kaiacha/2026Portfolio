import type { Metadata } from 'next'
import WindowPageLayout from '@/components/WindowPageLayout'

export const metadata: Metadata = {
  title: 'Unius | Mikyo Kaia Cha',
  description: 'Unius campus companion experience crafted by Mikyo Kaia Cha.'
}

export default function UniusPage() {
  return (
    <WindowPageLayout title="Unius" currentPage="projects" fullScreen enableFinderModals>
      <div className="h-full w-full overflow-y-auto px-8 py-10 space-y-6 text-gray-100">
        <header className="space-y-2">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400">Platform Overview</p>
          <h1 className="text-3xl font-semibold text-white">A Unified Campus Operating System</h1>
          <p className="max-w-2xl text-sm text-gray-300">
            Unius centralizes housing, class planning, events, and wellness into a single responsive dashboard. The
            system reduces app-switching fatigue and gives students one adaptive surface for navigating every part of
            university life.
          </p>
        </header>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl bg-white/5 p-6 backdrop-blur">
            <h2 className="text-lg font-semibold text-white">Role</h2>
            <p className="mt-2 text-sm text-gray-300">Product Designer · Information Architecture · UX Writing</p>
          </div>
          <div className="rounded-2xl bg-white/5 p-6 backdrop-blur">
            <h2 className="text-lg font-semibold text-white">Timeline</h2>
            <p className="mt-2 text-sm text-gray-300">Semester-long studio · Service blueprinting, prototyping</p>
          </div>
        </section>

        <section className="rounded-2xl bg-white/5 p-6 backdrop-blur">
          <h2 className="text-lg font-semibold text-white">Key Systems</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-200">
            <li>Smart task orchestration across academics, housing, and student org commitments.</li>
            <li>Predictive scheduling that highlights conflicts and suggests healthy balance adjustments.</li>
            <li>Cross-platform design language that feels native on desktop, mobile, and kiosk experiences.</li>
          </ul>
        </section>
      </div>
    </WindowPageLayout>
  )
}
