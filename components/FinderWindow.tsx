'use client'

import React, { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import Sidebar from './window/Sidebar'
import WindowHeader from './window/WindowHeader'
import Tapbar from './Tapbar'

type FinderTab = 'home' | 'volunteering' | 'projects'

interface FinderWindowProps {
  title: string
  children?: React.ReactNode
  onClose?: () => void
  currentPage?: FinderTab
  initialTab?: FinderTab
  tabContents?: Partial<Record<FinderTab, React.ReactNode>>
  tabTitles?: Partial<Record<FinderTab, string>>
}

export default function FinderWindow({
  title,
  children,
  onClose,
  currentPage = 'volunteering',
  initialTab,
  tabContents,
  tabTitles,
}: FinderWindowProps) {
  const router = useRouter()

  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'volunteering', label: 'Volunteering', icon: '👥' },
    { id: 'projects', label: 'Projects', icon: '📁' },
  ]

  const resolvedInitialTab = useMemo<FinderTab>(() => {
    return initialTab ?? currentPage ?? 'volunteering'
  }, [initialTab, currentPage])

  const [activeTab, setActiveTab] = useState<FinderTab>(resolvedInitialTab)
  useEffect(() => {
    setActiveTab(resolvedInitialTab)
  }, [resolvedInitialTab])

  const handleClose = () => {
    if (onClose) {
      onClose()
    } else {
      router.push('/')
    }
  }

  const handleSelectTab = (tab: string) => {
    const nextTab = (tab as FinderTab) ?? 'volunteering'

    if (nextTab === 'home') {
      handleClose()
      return
    }

    setActiveTab(nextTab)
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      try {
        navigator.vibrate?.(10)
      } catch {
        // ignore vibration errors
      }
    }
  }

  const activeTitle =
    tabTitles?.[activeTab] ?? navItems.find((item) => item.id === activeTab)?.label ?? title

  const defaultContent = tabContents?.[resolvedInitialTab] ?? children ?? null
  const activeContent = tabContents?.[activeTab] ?? defaultContent

  return (
    <div className="relative w-full h-full">
      <div
        className="rounded-2xl overflow-hidden shadow-2xl relative w-full h-full"
        style={{
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(156px)',
          WebkitBackdropFilter: 'blur(156px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        }}
      >
        {/* Desktop window controls */}
        <div className="hidden md:flex absolute top-[14px] right-[22px] z-30 items-center gap-3">
          <button
            type="button"
            className="w-[19px] h-[19px] rounded-full bg-[#FFC12F] border border-[#DFA023] flex items-center justify-center hover:opacity-80 transition-opacity"
          >
            <span className="w-[8px] h-[1px] bg-[#DFA023]" />
          </button>
          <button
            type="button"
            className="w-[19px] h-[19px] rounded-full bg-[#29CF41] border border-[#1AAC2A] flex items-center justify-center hover:opacity-80 transition-opacity"
          >
            <span className="w-[8px] h-[8px] bg-[#1AAC2A] rounded-sm" />
          </button>
          <button
            type="button"
            onClick={handleClose}
            className="w-[19px] h-[19px] rounded-full bg-[#FF6146] border border-[#E24E3A] flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer"
          >
            <span className="w-[8px] h-[1px] bg-[#E24E3A]" />
          </button>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:block h-full">
          <WindowHeader title={activeTitle} />

          <div className="flex" style={{ height: 'calc(100% - 76px)' }}>
            <div className="flex-1 overflow-hidden">{activeContent}</div>
            <Sidebar currentPage={activeTab} onSelect={handleSelectTab} />
          </div>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden w-full flex h-full flex-col">
          <div className="w-full px-5 pt-3 pb-4 border-b border-white/40">
            <div className="w-full relative flex items-center justify-between">
              <button
                type="button"
                onClick={handleClose}
                className="w-10 h-10 rounded-full bg-white shadow-[0px_6px_18px_rgba(17,24,39,0.15)] flex items-center justify-center text-[#111827]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M15 18l-6-6 6-6"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[14px] font-semibold text-[#1F1F1F]">
                {activeTitle}
              </div>

              <div className="flex items-center gap-2">
                {['#FFC12F', '#29CF41', '#FF6146'].map((color, index) => (
                  <button
                    key={color}
                    type="button"
                    onClick={index === 2 ? handleClose : undefined}
                    className="w-[17px] h-[17px] rounded-full border border-black/15 flex items-center justify-center"
                    style={{ backgroundColor: color }}
                  >
                    <span
                      className="w-[6px] h-[1px] rounded-sm"
                      style={{
                        backgroundColor:
                          index === 1 ? '#1AAC2A' : index === 0 ? '#DFA023' : '#E24E3A',
                        height: index === 1 ? '6px' : '1px',
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="border-b border-white/30 px-3">
            <Tapbar items={navItems} activeId={activeTab} onSelect={handleSelectTab} />
          </div>

          <div className="flex-1 overflow-y-auto">{activeContent}</div>
        </div>
      </div>
    </div>
  )
}

