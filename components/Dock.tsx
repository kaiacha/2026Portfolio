'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import homeIcon from '@/src/icons/Home.png'
import profileIcon from '@/src/icons/ProfileIcon.png'
import folderIcon from '@/src/icons/Folder.png'
import mailIcon from '@/src/icons/email.png'
import linkedinIcon from '@/src/icons/linkedin.png'

interface DockItem {
  id: 'home' | 'profile' | 'projects' | 'linkedin' | 'mail'
  name: string
  icon: string
  href?: string
  externalHref?: string
  action?: () => void
}

interface DockProps {
  onFolderClick?: () => void
  isFolderActive?: boolean
}

export default function Dock({
  onFolderClick,
  isFolderActive = false,
}: DockProps) {
  const pathname = usePathname() ?? ''
  const [isMounted, setIsMounted] = useState(false)
  const email = 'mikyocha@asu.edu'

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleMailClick = () => {
    window.location.href = `mailto:${email}`
  }

  const dockItems: DockItem[] = [
    { id: 'home', name: 'Home', icon: '🏠', href: '/' },
    { id: 'profile', name: 'Profile', icon: '👤', href: '/about' },
    { id: 'projects', name: 'Folder', icon: '📁', action: onFolderClick },
    { id: 'linkedin', name: 'LinkedIn', icon: '💼', externalHref: 'https://www.linkedin.com/in/mikyocha/' },
    { id: 'mail', name: 'Mail', icon: '✉️', action: handleMailClick },
  ]

  return (
    <div className="fixed left-[3px] right-[3px] bottom-[3px] z-50 flex justify-center md:left-1/2 md:right-auto md:bottom-6 md:transform md:-translate-x-1/2">
      <div 
        className="rounded-[26.46px] px-3 sm:px-4 md:px-5 py-3 md:py-4 flex items-center gap-2 sm:gap-2.5 md:gap-3 shadow-2xl relative overflow-hidden"
        style={{
          background: 'rgba(30, 30, 30, 0.7)',
          backdropFilter: 'blur(40px) saturate(180%)',
          WebkitBackdropFilter: 'blur(40px) saturate(180%)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        }}
      >
        {/* Glass reflection on top edge */}
        <div 
          className="absolute top-0 left-0 right-0 h-px pointer-events-none"
          style={{
            background: 'linear-gradient(to right, transparent 0%, rgba(255, 255, 255, 0.4) 20%, rgba(255, 255, 255, 0.6) 50%, rgba(255, 255, 255, 0.4) 80%, transparent 100%)',
          }}
        />
        {/* Glass reflection on bottom edge */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
          style={{
            background: 'linear-gradient(to right, transparent 0%, rgba(255, 255, 255, 0.3) 20%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0.3) 80%, transparent 100%)',
          }}
        />
        {/* Glass reflection on left edge */}
        <div 
          className="absolute top-0 bottom-0 left-0 w-px pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.3) 30%, transparent 70%)',
          }}
        />
        {/* Glass reflection on right edge */}
        <div 
          className="absolute top-0 bottom-0 right-0 w-px pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.3) 30%, transparent 70%)',
          }}
        />

        <div className="relative z-10 flex items-center gap-2 sm:gap-2.5 md:gap-3">
          {dockItems.map((item) => {
            const isRouteActive = isMounted && item.href
              ? pathname === item.href || pathname.startsWith(`${item.href}/`)
              : false
            const isModalActive =
              (item.id === 'projects' && isFolderActive)
            const isActive = isRouteActive || isModalActive

            const isInteractive = Boolean(item.href || item.externalHref || item.action)

            let iconContent: React.ReactNode
            if (item.id === 'home') {
              iconContent = <Image src={homeIcon} alt="Home" width={35} height={30} className=" h-[24px] sm: sm:h-[27px]  md:h-[30px]" priority />
            } else if (item.id === 'profile') {
              iconContent = (
                <Image src={profileIcon} alt="Profile" fill className="object-contain rounded-[16px]" priority />
              )
            } else if (item.id === 'projects') {
              iconContent = (
                <Image src={folderIcon} alt="Projects" width={35} height={30} className="w-[28px] h-[24px] sm:w-[32px] sm:h-[27px] md:w-[35px] md:h-[30px]" priority />
              )
            } else if (item.id === 'linkedin') {
              iconContent = <Image src={linkedinIcon} alt="LinkedIn" width={35} height={30} className="w-[28px] sm:w-[32px] ] md:w-[35px]" priority />
            } else if (item.id === 'mail') {
              iconContent = <Image src={mailIcon} alt="Mail" width={35} height={30} className="w-[28px] sm:w-[32px] ] md:w-[35px]" priority />
            } else {
              iconContent = <span className="text-xl sm:text-2xl">{item.icon}</span>
            }

            const backgroundStyle = (() => {
              if (['home', 'profile', 'projects'].includes(item.id)) {
                return { background: 'linear-gradient(180deg, #FFFFFF 0%, #b5b5b5 100%)' }
              }
              if (item.id === 'mail') {
                return { background: 'linear-gradient(180deg, #66c3f4 0%, #186FFB 100%)' }
              }
              if (item.id === 'linkedin') {
                return { background: '#0A66C2' }
              }
              return {}
            })()

            const icon = (
              <div
                className={`relative w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-xl bg-white/90 flex items-center justify-center overflow-hidden ${
                  isInteractive ? 'cursor-pointer hover:scale-110 transition-transform duration-200' : 'cursor-default'
                } shadow-lg transition-all duration-300 ${
                  isActive ? 'ring-2 ring-offset-2 ring-offset-white dock-icon-active' : ''
                }`}
                title={item.name}
                style={{
                  ...backgroundStyle,
                  ...(isActive ? {
                    ringColor: 'var(--accent-primary)',
                    boxShadow: '0 0 0 2px var(--accent-primary), 0 4px 12px rgba(37, 99, 235, 0.3)',
                  } : {}),
                }}
              >
                {iconContent}
              </div>
            )
 
             let itemElement: React.ReactNode = icon
 
             if (item.href) {
               itemElement = (
                 <Link href={item.href}>
                   {icon}
                 </Link>
               )
             } else if (item.externalHref) {
               itemElement = (
                 <a
                   href={item.externalHref}
                   target="_blank"
                   rel="noopener noreferrer"
                 >
                   {icon}
                 </a>
               )
             } else if (item.action) {
               itemElement = (
                 <button
                   type="button"
                   onClick={item.action}
                   className="focus:outline-none"
                 >
                   {icon}
                 </button>
               )
             }

             return (
               <React.Fragment key={item.id}>
                 {itemElement}
               </React.Fragment>
             )
           })}
        </div>
      </div>
    </div>
  )
}