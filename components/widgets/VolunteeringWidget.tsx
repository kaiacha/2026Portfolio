'use client'

import React from 'react'
import Image from 'next/image'
import noteIcon from '@/src/icons/note.png'

const volunteeringItems = [
  {
    title: 'Volunteering, AI & Data Education in NAVER',
    image: '🌉',
  },
  {
    title: 'Volunteering, Exchange Student Mentoring, HYU',
    image: '🏛️',
  },
  {
    title: 'Vice President, Student Council, HYU',
    image: '👥',
  },
]

export default function VolunteeringWidget() {
  return (
    <div className="bg-white/90 rounded-[26.46px] p-4 py-3 shadow-xl h-full">
      <div className="flex items-center gap-2 mb-2">
        <Image src={noteIcon} alt="Volunteering icon" width={18} height={18} />
        <h3 className="text-sm font-semibold text-gray-800">Volunteering Experiences</h3>
      </div>
      <div className="-mx-4 space-y-[6px] my-2">
        <div className="h-px bg-[#a0a0a0]/70" />
        <div className="border-t border-dashed border-gray-400/75 " />
      </div>
      <div className="space-y-0 md:space-y-0 mb-0">
        {volunteeringItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-1 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer py-0.5 md:py-0.5 md:gap-0"
          >
            <div className="w-7 h-7 md:w-10 md:h-10 rounded-lg flex items-center justify-center text-base md:text-xl flex-shrink-0">
              {item.image}
            </div>
            <div className="flex-1 text-[11px] md:text-xs font-medium text-gray-700 leading-snug">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


