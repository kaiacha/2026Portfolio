'use client'

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import profilePortrait from '@/src/assets/profile2.png'

export default function ProfileWidget() {
  const router = useRouter()

  const handleOpenProfile = () => {
    router.push('/profile')
  }

  return (
    <button
      type="button"
      onClick={handleOpenProfile}
      className="glass-effect relative rounded-[26.46px] p-6 px-4 md:p-6 shadow-xl h-full flex items-center w-full text-left transition-transform hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-white/60"
    >
      <div className="flex items-center gap-3 w-full">
        <div className="flex-1 ">
          <div className="flex items-center gap-2 mb-1">
          <svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 24 24" fill="none">
          <path
            d="M7 17L17 7M9 7h8v8"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
            <h3 className="text-lg md:text-2xl font-semibold text-white">Mikyo Kaia Cha</h3>
          </div>
          <p className="text-xs md:text-sm font-light text-white/80 leading-relaxed">
            Human-centered UX designer bridging research, design, and development.
          </p>
        </div>
        <div className="relative w-[100px] h-[100px] rounded-full items-center justify-center overflow-hidden border-1 border-white/30 flex-shrink-0 bg-white/20">
          <Image
            src={profilePortrait}
            alt="Portrait of Mikyo Kaia Cha"
            fill
            className="object-cover object-top"
            sizes="64px"
            priority
          />
        </div>
      </div>
    </button>
  )
}


