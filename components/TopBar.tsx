'use client'

import React from 'react'

export default function TopBar() {
  const currentDate = new Date()
  const time = currentDate.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: false 
  })
  const date = currentDate.toLocaleDateString('en-US', { 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
  })

  return (
    <div 
      className="fixed top-0 left-0 right-0 z-30 border-none"
      style={{
        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0))',
      }}
    >
      <div className="relative grid grid-cols-[auto_1fr_auto] items-center px-3 py-3">
        <div className="text-sm font-medium text-white/90">{time}</div>
        <div className="absolute left-1/2 transform -translate-x-1/2 text-sm font-bold text-white tracking-wide whitespace-nowrap pointer-events-none">
          WELCOME TO KAIA OS!
        </div>
        <div className="flex items-center gap-1.5 md:gap-1 justify-self-end">
          <div className="w-4 h-4 md:w-5 md:h-5">
            <svg viewBox="0 0 24 24" fill="currentColor" className="text-white/90 w-full h-full">
              <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.07 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
            </svg>
          </div>
          <div className="text-xs md:text-sm font-medium text-white/90">200%</div>
          <div className="w-4 h-4 md:w-5 md:h-5 flex items-center justify-center">
            <img 
              src="/images/heart.png" 
              alt="Heart" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}


