'use client'

import React from 'react'
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
  },
  {
    name: 'Anticancer',
    image: { src: anticancerIcon, alt: 'Anticancer app icon' },
    background: {
      background: 'linear-gradient(180deg, #C3DEF4 0%, #71818E 100%)',
    },
    href: '/anticancer',
  },
  {
    name: 'Koddiz',
    image: { src: koddizIcon, alt: 'Koddiz app icon' },
    background: {
      background: 'rgba(22, 22, 22, 0.4)',
    },
    href: '/koddiz',
  },

  {
    name: 'EGG',
    image: { src: eggIcon, alt: 'EGG app icon' },
    background: {
      background: 'rgba(0, 255, 34, 0.3)',
    },
    href: '/egg',
    disabled: true,
  },
]

export default function AppIcons() {
  return (
    <div className="grid w-full grid-cols-4 gap-3 px-4 sm:px-6 md:flex md:justify-around md:gap-6 md:px-0">
      {apps.map((app, index) => {
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
            <span className={`text-xs font-medium text-center ${app.disabled ? 'text-white/50' : 'text-white/80'}`}>
              {app.name}
            </span>
          </>
        )

        if (app.disabled) {
          return (
            <div
              key={index}
              className="flex flex-col items-center gap-1.5 cursor-not-allowed"
              title="Coming soon"
            >
              {content}
            </div>
          )
        }

        return (
          <Link
            key={index}
            href={app.href}
            className="flex flex-col items-center gap-1.5 cursor-pointer hover:scale-105 transition-transform"
          >
            {content}
          </Link>
        )
      })}
    </div>
  )
}

