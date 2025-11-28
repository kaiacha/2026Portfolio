'use client'

import { useCallback, useEffect, useState } from 'react'
import TopBar from '@/components/TopBar'
import Dock from '@/components/Dock'
import CalendarWidget from '@/components/widgets/CalendarWidget'
import ProfileWidget from '@/components/widgets/ProfileWidget'
import VolunteeringWidget from '@/components/widgets/VolunteeringWidget'
import { WidgetStack } from '@/components/widgets/WidgetStack'
import AppIcons from '@/components/AppIcons'
import VolunteeringWindow from '@/components/VolunteeringWindow'
import ProjectsWindow from '@/components/ProjectsWindow'
import asuLogo from '@/src/assets/ASULogo.png'

export default function HomeContent() {
  const [isVolunteeringOpen, setIsVolunteeringOpen] = useState(false)
  const [isProjectsOpen, setIsProjectsOpen] = useState(false)

  const openVolunteering = useCallback(() => setIsVolunteeringOpen(true), [])
  const closeVolunteering = useCallback(() => setIsVolunteeringOpen(false), [])

  const openProjects = useCallback(() => setIsProjectsOpen(true), [])
  const closeProjects = useCallback(() => setIsProjectsOpen(false), [])

  useEffect(() => {
    if (isVolunteeringOpen || isProjectsOpen) {
      const originalOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = originalOverflow
      }
    }

    return () => {}
  }, [isVolunteeringOpen, isProjectsOpen])

  const weatherSummary = {
    city: 'Mesa',
    temperatureC: 29,
    condition: 'Sunny',
    highC: 31,
    lowC: 18,
  }

  const campusSummary = {
    title: 'Arizona State University',
    subtitle: 'Tempe, AZ',
    logoUrl: asuLogo.src,
  }

  return (
    <>
      <main className="min-h-screen relative overflow-hidden">
        {/* Background Image */}
        <div className="fixed inset-0 z-0">
          <img
            src="/images/background.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Top Bar */}
        <TopBar />

        {/* Main Content */}
        <div className="relative z-10 pt-[50px] pb-32 px-4 md:pt-20 md:px-6">
          <div className="max-w-5xl mx-auto md:max-w-4xl lg:max-w-4xl">
            {/* Mobile Layout (4x6 grid) */}
            <div className="grid grid-cols-4 gap-4 md:hidden">
              {/* 1. Profile Widget - 4x2 (full width, 2 rows) */}
              <div className="col-span-4 row-span-2">
                <ProfileWidget />
              </div>

              {/* 2. App Shortcuts */}
              <div className="col-span-4">
                <AppIcons />
              </div>

              {/* 3. Volunteering Widget - 4x2 (full width, 2 rows) */}
              <div className="col-span-4 row-span-2">
                <VolunteeringWidget />
              </div>

              {/* 4. Calendar - 2x1 (half width) */}
              <div className="col-span-2">
                <CalendarWidget />
              </div>

              {/* 5. Widget Stack - 2x1 (half width) */}
              <div className="col-span-2 aspect-square">
                <WidgetStack
                  campus={campusSummary}
                  weather={weatherSummary}
                  initialIndex={1}
                  className="h-full w-full"
                />
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:block">
              {/* Widget Grid - Top Row: Calendar + Map = Profile */}
              <div className="grid grid-cols-4 gap-6 lg:gap-10 mb-8 ">
                {/* Calendar Widget - Top Left (1 column) */}
                <div className="col-span-1">
                  <CalendarWidget />
                </div>

                {/* Widget Stack - Top Middle (1 column) */}
                <div className="col-span-1">
                  <div className="aspect-square">
                    <WidgetStack weather={weatherSummary} campus={campusSummary} className="h-full w-full" />
                  </div>
                </div>

                {/* Profile Widget - Top Right (2 columns, same height as Calendar) */}
                <div className="col-span-2">
                  <ProfileWidget />
                </div>
              </div>

              {/* Second Row: Volunteering Widget and App Icons */}
              <div className="grid grid-cols-4 gap-4 lg:gap-6 mb-8 items-stretch">
                {/* Volunteering Widget - Left (spans 2 columns, same height as Calendar/Map/Profile) */}
                <div className="col-span-2">
                  <VolunteeringWidget />
                </div>

                {/* App Icons - Right (2 columns, same width as ProfileWidget, vertically centered with Volunteering) */}
                <div className="col-span-2 flex items-center justify-center">
                  <AppIcons />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dock */}
        <Dock onFolderClick={openProjects} onSafariClick={openVolunteering} />
      </main>

      {/* Modals */}
      <VolunteeringWindow isOpen={isVolunteeringOpen} onClose={closeVolunteering} />
      <ProjectsWindow isOpen={isProjectsOpen} onClose={closeProjects} />
    </>
  )
}

