'use client'

import React, { useEffect, useMemo, useState } from 'react'

interface TapbarItem {
  id: string
  label: string
  icon: string
}

interface TapbarProps {
  items: TapbarItem[]
  activeId: string
  onSelect: (id: string) => void
}

export default function Tapbar({ items, activeId, onSelect }: TapbarProps) {
  const activeIndex = useMemo(() => {
    const index = items.findIndex((item) => item.id === activeId)
    return index >= 0 ? index : 0
  }, [items, activeId])

  const [isSquishing, setIsSquishing] = useState(false)

  useEffect(() => {
    setIsSquishing(true)
    const timeout = setTimeout(() => setIsSquishing(false), 320)
    return () => clearTimeout(timeout)
  }, [activeIndex])

  const indicatorWidth = `${100 / Math.max(items.length, 1)}%`

  return (
    <div className="w-full px-2 pb-[env(safe-area-inset-bottom)]">
      <div
        className="relative rounded-[80px] border border-white/35 bg-white/25 shadow-[0px_22px_44px_rgba(15,23,42,0.18)] backdrop-blur-2xl px-1 py-1"
        role="tablist"
        aria-label="Finder navigation"
      >
        <div className="pointer-events-none absolute inset-y-[6px] left-[5px] right-[5px]">
          <div
            className={`tapbar-indicator h-full rounded-[60px] bg-white/45 shadow-[0px_12px_24px_rgba(15,23,42,0.18)] backdrop-blur-3xl ${
              isSquishing ? 'animate-tapbar-squish' : ''
            }`}
            style={
              {
                width: indicatorWidth,
                '--tapbar-translate': `${activeIndex * 100}%`,
              } as React.CSSProperties
            }
          />
        </div>

        <div className="relative flex items-center justify-between">
          {items.map((item, index) => {
            const isActive = index === activeIndex

            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={item.label}
                className="relative z-6 flex-1 flex items-stretch justify-center"
                onClick={() => onSelect(item.id)}
              >
                <div
                  className={`flex h-full w-full flex-col items-center justify-center gap-1 rounded-[24px] px-4 py-3 text-xs font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A84FF]/70 focus-visible:ring-offset-2 ${
                    isActive ? 'text-[#0A84FF]' : 'text-gray-500/70'
                  }`}
                  style={{
                    minHeight: '68px',
                    height: '68px',
                    marginLeft: isActive ? '-5px' : 0,
                    marginRight: isActive ? '-5px' : 0,
                  }}
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-2xl text-2xl">
                    {item.icon}
                  </span>
                  <span aria-hidden className="text-[10px] font-medium leading-none">
                    {item.label}
                  </span>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

