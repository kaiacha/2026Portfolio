'use client'

import React from 'react'
import Link from 'next/link'
import ProjectAppIcon from './ProjectAppIcon'
import anticancerIcon from '@/src/icons/Anticancer.png'
import koddizIcon from '@/src/icons/Koddiz.png'
import lifelineIcon from '@/src/icons/LifeLine.png'
import eggIcon from '@/src/icons/Egg.png'

const projects = [
  {
    id: 1,
    name: 'LifeLine',
    image: { src: lifelineIcon, alt: 'LifeLine app icon' },
    background: {
      backgroundColor: '#cacaca',
    },
    badge: '67',
    href: '/LifeLine',
    disabled: false,
    iconSize: {
      width: 50,
      height: 50,
    },
  },
  {
    id: 2,
    name: 'Anticancer',
    image: { src: anticancerIcon, alt: 'Anticancer app icon' },
    background: {
      background: 'linear-gradient(180deg, #C3DEF4 0%, #71818E 100%)',
    },
    badge: '67',
    href: '/anticancer',
    disabled: false,
  },
  {
    id: 3,
    name: 'Koddiz',
    image: { src: koddizIcon, alt: 'Koddiz app icon' },
    background: {
      backgroundColor: 'rgba(22, 22, 22, 0.4)',
    },
    badge: '67',
    href: '/koddiz',
    disabled: false,
  },
  {
    id: 4,
    name: 'EGG',
    image: { src: eggIcon, alt: 'EGG app icon' },
    background: {
      backgroundColor: 'rgba(0, 255, 34, 0.3)',
    },
    badge: '67',
    href: '/egg',
    disabled: true,
  },
]

export default function ProjectsContent() {
  return (
    <div className="px-6 py-10 w-full">
      <div className="flex items-center justify-between gap-4 md:justify-center md:gap-14 lg:gap-20">
        {projects.map((project) => {
          if (project.disabled) {
            return (
              <div
                key={project.id}
                className="inline-flex flex-col items-center gap-2 cursor-not-allowed opacity-50"
                title="Coming soon"
              >
                <ProjectAppIcon {...project} iconSize={project.iconSize} />
              </div>
            )
          }
          return (
            <Link key={project.id} href={project.href} className="inline-flex flex-col items-center gap-2">
              <ProjectAppIcon {...project} iconSize={project.iconSize} />
            </Link>
          )
        })}
      </div>
    </div>
  )
}

