'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import anticancerIcon from '@/src/icons/Anticancer.png'
import koddizIcon from '@/src/icons/Koddiz.png'
import uniusIcon from '@/src/icons/Unius.png'
import eggIcon from '@/src/icons/Egg.png'

interface AppIcon {
  name: string
  image: {
    src: any
    alt: string
  }
  background: React.CSSProperties
  href: string
}

const apps: AppIcon[] = [
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
    name: 'Unius',
    image: { src: uniusIcon, alt: 'Unius app icon' },
    background: {
      background: '#26427A',
    },
    href: '/unius',
  },
  {
    name: 'EGG',
    image: { src: eggIcon, alt: 'EGG app icon' },
    background: {
      background: 'rgba(0, 255, 34, 0.3)',
    },
    href: '/egg',
  },
]

export default function AppIcons() {
  return (
    <div className="grid w-full grid-cols-4 gap-3 px-4 sm:px-6 md:flex md:justify-around md:gap-6 md:px-0">
      {apps.map((app, index) => (
        <Link
          key={index}
          href={app.href}
          className="flex flex-col items-center gap-1.5 cursor-pointer hover:scale-105 transition-transform"
        >
          <div
            className="w-14 h-14 rounded-xl backdrop-blur-[2px] flex items-center justify-center shadow-lg overflow-hidden"
            style={app.background}
          >
            <Image src={app.image.src} alt={app.image.alt}  height={35} priority />
          </div>
          <span className="text-xs text-white/80 font-medium text-center">{app.name}</span>
        </Link>
      ))}
    </div>
  )
}

