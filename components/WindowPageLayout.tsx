'use client'

import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import TopBar from './TopBar'
import Dock from './Dock'
import Window from './Window'
import VolunteeringWindow from './VolunteeringWindow'
import ProjectsWindow from './ProjectsWindow'

interface WindowPageLayoutProps {
  title: string
  currentPage: 'home' | 'volunteering' | 'projects'
  children: React.ReactNode
  fullScreen?: boolean
  enableFinderModals?: boolean
}

const TOP_BAR_HEIGHT = 0
const FULLSCREEN_TOP_GAP = TOP_BAR_HEIGHT
const FULLSCREEN_BOTTOM_GAP = 0
const DEFAULT_PADDING_TOP = 0

export default function WindowPageLayout({
  title,
  currentPage: _currentPage,
  children,
  fullScreen = false,
  enableFinderModals = false,
}: WindowPageLayoutProps) {
  const router = useRouter()

  const handleClose = () => {
    router.push('/')
  }

  const [isVolunteeringOpen, setIsVolunteeringOpen] = useState(false)
  const [isProjectsOpen, setIsProjectsOpen] = useState(false)

  const openVolunteering = useCallback(() => setIsVolunteeringOpen(true), [])
  const closeVolunteering = useCallback(() => setIsVolunteeringOpen(false), [])

  const openProjects = useCallback(() => setIsProjectsOpen(true), [])
  const closeProjects = useCallback(() => setIsProjectsOpen(false), [])

  const dockHandlers = useMemo(() => {
    if (!enableFinderModals) return {}
    return {
      onFolderClick: openProjects,
      onSafariClick: openVolunteering,
    }
  }, [enableFinderModals, openProjects, openVolunteering])

  // When window is open, hide dock and topbar, so use full screen
  const contentPaddingTop = 0
  const contentPaddingBottom = 0
  const windowHeight = '100vh'
  const windowWidth = '100%'

  useEffect(() => {
    if (!(enableFinderModals && (isVolunteeringOpen || isProjectsOpen))) {
      return
    }

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [enableFinderModals, isVolunteeringOpen, isProjectsOpen])

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Abstract Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Top Bar - Hidden when window is open */}
      <div className="hidden">
        <TopBar />
      </div>

      {/* Main Content - Full screen when window is open */}
      <div
        className="relative z-10"
        style={{
          paddingTop: contentPaddingTop,
          paddingBottom: contentPaddingBottom,
          height: windowHeight,
        }}
      >
        <div
          className="w-full h-full"
          style={{
            width: windowWidth,
            height: windowHeight,
            maxWidth: '1420px',
            margin: '0 auto',
          }}
        >
          <Window title={title} onClose={handleClose}>
            <div className="w-full h-full">{children}</div>
          </Window>
        </div>
      </div>

      {/* Dock - Hidden when window is open */}
      <div className="hidden">
        <Dock {...dockHandlers} />
      </div>

      {enableFinderModals && (
        <>
          <VolunteeringWindow isOpen={isVolunteeringOpen} onClose={closeVolunteering} />
          <ProjectsWindow isOpen={isProjectsOpen} onClose={closeProjects} />
        </>
      )}
    </main>
  )
}

