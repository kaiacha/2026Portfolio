'use client'

import { useEffect } from 'react'
import UnifiedDashboard from '@/components/dashboards/UnifiedDashboard'
import AppStyles from '@/components/dashboards/App.module.css'

export default function LifeLineLiveDemoPage() {
  useEffect(() => {
    // Override dashboard height to use container height instead of viewport height
    const style = document.createElement('style')
    style.textContent = `
      .${AppStyles.dashboard} {
        height: 100% !important;
      }
    `
    document.head.appendChild(style)
    
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <div className="h-screen w-full bg-slate-950 flex flex-col overflow-hidden">
      <div className="w-full py-4 px-4 text-center flex-shrink-0">
        <h1 className="text-xl md:text-xl font-bold text-white">
          Play around with Lifeline!
        </h1>
      </div>
      <div className="flex-1 w-full overflow-hidden flex items-center justify-center min-h-0">
        <div className="w-[80%] h-full max-h-full rounded-2xl border border-white overflow-hidden">
          <UnifiedDashboard />
        </div>
      </div>
    </div>
  )
}
