'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import anticancerIcon from '@/src/icons/Anticancer.png'
import koddizIcon from '@/src/icons/Koddiz.png'
import lifelineIcon from '@/src/icons/LifeLine.png'
import eggIcon from '@/src/icons/Egg.png'

interface AppIcon {
  name: string
  image: {
    src: any
    alt: string
  }
  background: React.CSSProperties
  href: string
  disabled?: boolean
  iconSize?: {
    width: number
    height: number
  }
  description?: string
}

const apps: AppIcon[] = [
  {
    name: 'LifeLine',
    image: { src: lifelineIcon, alt: 'LifeLine app icon' },
    background: {
      background: '#cacaca ',
    },
    href: '/LifeLine',
    iconSize: {
      width: 50,
      height: 50,
    },
    description: 'A portfolio project showcasing an emergency medical services dashboard system. Features real-time data visualization and multi-role interfaces for pilots, navigators, and EMS personnel.',
  },
  {
    name: 'Anticancer',
    image: { src: anticancerIcon, alt: 'Anticancer app icon' },
    background: {
      background: 'linear-gradient(180deg, #C3DEF4 0%, #71818E 100%)',
    },
    href: '/anticancer',
    description: 'A UX design case study for a medical application focused on cancer patient care. Explores user-centered design approaches for healthcare technology.',
  },
  {
    name: 'Koddiz',
    image: { src: koddizIcon, alt: 'Koddiz app icon' },
    background: {
      background: 'rgba(22, 22, 22, 0.4)',
    },
    href: '/koddiz',
    description: 'A portfolio project demonstrating UX research and design for an educational platform. Includes user research, wireframing, and prototype development.',
  },

  {
    name: 'EGG',
    image: { src: eggIcon, alt: 'EGG app icon' },
    background: {
      background: 'rgba(0, 255, 34, 0.3)',
    },
    href: '/egg',
    disabled: true,
    description: 'Coming soon - A new portfolio project currently in development.',
  },
]

export default function AppIcons() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="grid w-full grid-cols-4 gap-3 px-4 sm:px-6 md:flex md:justify-center md:items-center md:gap-6 md:px-0 place-items-center">
      {apps.map((app, index) => {
        const isHovered = hoveredIndex === index
        const content = (
          <>
            <div
              className={`w-14 h-14 rounded-xl backdrop-blur-[2px] flex items-center justify-center shadow-lg overflow-hidden ${
                app.disabled ? 'opacity-50' : ''
              }`}
              style={app.background}
            >
              <Image
                src={app.image.src}
                alt={app.image.alt}
                width={app.iconSize?.width || 35}
                height={app.iconSize?.height || 35}
                priority
              />
            </div>
            <span className={`text-xs font-medium text-center w-full ${app.disabled ? 'text-black/40' : 'text-[#232323]'}`}>
              {app.name}
            </span>
          </>
        )

        const tooltip = app.description && (
          <div
            className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-4 py-2.5 rounded-lg bg-black/90 backdrop-blur-sm border border-white/20 text-white text-[10px] leading-relaxed max-w-[320px] z-50 pointer-events-none transition-all duration-200 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1 pointer-events-none'
            }`}
            style={{ whiteSpace: 'normal' }}
          >
            {app.description}
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
          </div>
        )

        if (app.disabled) {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center cursor-not-allowed relative w-full"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {tooltip}
              <div className="flex flex-col items-center justify-center gap-2">
                {content}
              </div>
            </div>
          )
        }

        return (
          <Link
            key={index}
            href={app.href}
            className="flex flex-col items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 relative group/icon w-full"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={(e) => {
              e.stopPropagation()
            }}
          >
            {tooltip}
            <div className="relative flex flex-col items-center justify-center gap-2">
              <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover/icon:opacity-100 blur-md transition-opacity duration-300"></div>
              {content}
            </div>
          </Link>
        )
      })}
    </div>
  )
}

