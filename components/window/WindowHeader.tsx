'use client'

import React from 'react'

interface WindowHeaderProps {
  title: string
}

export default function WindowHeader({ title }: WindowHeaderProps) {
  return (
    <div 
      className="h-[60px] w-[calc(100%-254px)] flex items-center justify-between px-8 border-b border-gray-200/35"
      style={{
        background: 'rgba(243, 243, 243, 0.95)',
      }}
    >
      {/* Left: Navigation Arrows */}
      <div className="flex items-center gap-6">
        <button className="w-[9px] h-[19px] flex items-center justify-center">
          <svg width="10" height="19" viewBox="0 0 10 19" fill="none">
            <path d="M9 1L1 9.5L9 18" stroke="#0D0D0D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className="w-[9px] h-[19px] flex items-center justify-center">
          <svg width="10" height="19" viewBox="0 0 10 19" fill="none">
            <path d="M1 1L9 9.5L1 18" stroke="#0D0D0D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <text className="text-[18px]  font-bold text-[#2E2E2E] ml-2 text-center">{title}</text>
      </div>

      {/* Right: View Toggles and Search */}
      <div className="flex items-center gap-4">
        {/* Grid View (Active) */}
        <button className="w-[49px] h-[42px] rounded-lg bg-black/10 flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="7" height="7" stroke="#0D0D0D" strokeWidth="1.5"/>
            <rect x="14" y="3" width="7" height="7" stroke="#0D0D0D" strokeWidth="1.5"/>
            <rect x="3" y="14" width="7" height="7" stroke="#0D0D0D" strokeWidth="1.5"/>
            <rect x="14" y="14" width="7" height="7" stroke="#0D0D0D" strokeWidth="1.5"/>
          </svg>
        </button>

        {/* List View */}
        <button className="w-[49px] h-[42px] rounded-lg hover:bg-black/5 flex items-center justify-center">
          <svg width="27" height="19" viewBox="0 0 27 19" fill="none">
            <rect x="0" y="0" width="3" height="3" fill="#C4C4C4"/>
            <rect x="6" y="0" width="21" height="3" fill="#C4C4C4"/>
            <rect x="0" y="8" width="3" height="3" fill="#C4C4C4"/>
            <rect x="6" y="8" width="21" height="3" fill="#C4C4C4"/>
            <rect x="0" y="16" width="3" height="3" fill="#C4C4C4"/>
            <rect x="6" y="16" width="21" height="3" fill="#C4C4C4"/>
          </svg>
        </button>

        {/* Search */}
        <button className="w-[20px] h-[22px] flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="7" cy="7" r="6" stroke="#0D0D0D" strokeWidth="1.5"/>
            <path d="M11 11L15 15" stroke="#0D0D0D" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
    </div>
  )
}

