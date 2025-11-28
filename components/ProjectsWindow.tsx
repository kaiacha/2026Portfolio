'use client'

import React from 'react'
import FinderWindow from './FinderWindow'
import ProjectsContent from './projects/ProjectsContent'
import VolunteeringContent from './volunteering/VolunteeringContent'

interface ProjectsWindowProps {
  isOpen: boolean
  onClose: () => void
}

export default function ProjectsWindow({ isOpen, onClose }: ProjectsWindowProps) {
  if (!isOpen) return null

  return (
    <div
    className="fixed left-0 right-0 bottom-0 z-50 flex items-start justify-center p-[5px] md:p-8"
    style={{ top: '45px' }}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Window */}
      <div className="relative z-10 w-full h-full max-w-[calc(100vw-10px)] max-h-[calc(100vh-66px)] md:w-[940px] md:h-[622px]">
        <FinderWindow
          title="Finder"
          onClose={onClose}
          currentPage="projects"
          initialTab="projects"
          tabContents={{
            projects: <ProjectsContent />,
            volunteering: <VolunteeringContent />,
          }}
          tabTitles={{
            projects: 'Projects',
            volunteering: 'Volunteering',
          }}
        >
          <ProjectsContent />
        </FinderWindow>
      </div>
    </div>
  )
}

