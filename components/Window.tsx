'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
interface WindowProps {
  title: string
  children: React.ReactNode
  onClose?: () => void
}

export default function Window({ title, children, onClose }: WindowProps) {
  const router = useRouter()

  const handleClose = () => {
    if (onClose) {
      onClose()
    } else {
      router.push('/')
    }
  }

  return (
    <div className="relative w-full h-full">
      <div
        className="relative w-full h-full rounded-[4px] overflow-hidden"
        style={{
          background: '#FFFFFF',
          border: '0.5px solid rgba(0, 0, 0, 0.2)',
          boxShadow:
            '0px 25px 30px rgba(0, 0, 0, 0.35), 0px 0px 20px rgba(0, 0, 0, 0.15)',
        }}
      >
        {/* Title Bar */}
        <div
          className="h-[22px] w-full flex items-center justify-center relative px-5"
          style={{
            background:
              'linear-gradient(180deg, rgba(237,236,237,1) 0%, rgba(210,210,210,1) 100%)',
            boxShadow:
              'inset 0px -1px 0px rgba(183, 180, 183, 1), inset 0px -0.5px 0px rgba(183, 180, 183, 0.7), inset 0px 0.5px 0px rgba(255, 255, 255, 0.5)',
          }}
        >
          <span className="text-[12px] font-medium tracking-wide text-black/70 select-none">
            {title}
          </span>

          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
            <button
              type="button"
              className="w-3 h-3 rounded-full border border-[#DFA023] bg-[#FFC12F] flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <span className="w-1 h-[1px] bg-[#DFA023]" />
            </button>
            <button
              type="button"
              className="w-3 h-3 rounded-full border border-[#1AAC2A] bg-[#29CF41] flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <span className="w-[6px] h-[6px] bg-[#1AAC2A] rounded-sm" />
            </button>
            <button
              type="button"
              onClick={handleClose}
              className="w-3 h-3 rounded-full border border-[#E24E3A] bg-[#FF6146] flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <span className="w-1 h-[1px] bg-[#E24E3A]" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-col h-[calc(100%-22px)]">
          <div className="flex-1 overflow-hidden">
            <div className="h-full overflow-y-auto overflow-x-hidden">{children}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

