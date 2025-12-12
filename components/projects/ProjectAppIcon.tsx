'use client'

import React from 'react'
import Image from 'next/image'

interface ProjectAppIconProps {
  name: string
  image: {
    src: any
    alt: string
  }
  background: React.CSSProperties
  badge?: string
  iconSize?: {
    width: number
    height: number
  }
}

export default function ProjectAppIcon({
  name,
  image,
  background,
  badge,
  iconSize,
}: ProjectAppIconProps) {
  return (
    <div className="flex flex-col items-center gap-1.5 relative">
      <div className="relative">
        <div
          className="w-14 h-14 rounded-xl backdrop-blur-[2px] flex items-center justify-center shadow-lg relative overflow-hidden"
          style={background}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={iconSize?.width || 35}
            height={iconSize?.height || 35}
            priority
          />
        </div>
      </div>
      <span className="text-xs text-[#333333] font-medium text-center leading-tight">{name}</span>
    </div>
  )
}

