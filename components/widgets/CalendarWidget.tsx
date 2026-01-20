'use client'

import React from 'react'

export default function CalendarWidget() {
  const currentDate = new Date()
  const dayName = currentDate.toLocaleDateString('en-US', { weekday: 'long' }).toUpperCase()
  const dayNumber = currentDate.getDate()

  const events = [
    {
      title: 'Review Resume',
      time: '9:45-11:00AM',
      color: 'bg-yellow-400/20',
      accent: '#F4B855',
    },
    {
      title: 'Hire Kaia!',
      time: '11:15-1:00PM',
      color: 'bg-pink-400/20',
      accent: '#865353',
    },
  ]

  return (
    <div className="glass-effect rounded-[26.46px] p-3 md:p-4 shadow-xl w-full aspect-square flex flex-col justify-between">
      <div>
        <div className="text-[10px] md:text-xs font-semibold text-white/90">{dayName}</div>
        <div className="text-3xl md:text-4xl text-white/90">{dayNumber}</div>
      </div>
      <div className="space-y-1 md:space-y-1.5">
        {events.map((event, index) => (
          <div key={index} className={`${event.color} rounded-lg px-1.5 md:px-2 py-1 md:py-1.5 `}>
            <div className="flex items-start gap-1 md:gap-1.5">
              <span
                className="w-[2px] md:w-[3px] rounded-sm self-stretch "
                style={{ backgroundColor: event.accent }}
                aria-hidden
              />
              <div className="space-y-0.5 text-[9px] md:text-[11px] leading-tight">
                <div className="font-medium text-white/90">{event.title}</div>
                <div className="text-white/70">{event.time}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


