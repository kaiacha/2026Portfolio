'use client'

import React from 'react'

interface SidebarProps {
  currentPage: 'home' | 'volunteering' | 'projects'
  onSelect: (id: 'home' | 'volunteering' | 'projects') => void
}

export default function Sidebar({ currentPage, onSelect }: SidebarProps) {
  const menuItems = [
    { name: 'Home', icon: '🏠', id: 'home' as const },
    { name: 'Volunteering', icon: '👥', id: 'volunteering' as const },
    { name: 'Projects', icon: '📁', id: 'projects' as const },
  ]

  return (
    <div 
      className="w-[254px] border-l border-white/35"
      style={{
        background: 'rgba(224, 224, 224, 1)',
      }}
    >
      <div className="p-6">
        <h2 className="text-sm font-normal text-black/50 mb-4">Favorites</h2>
        <div className="space-y-2">
          {menuItems.map((item) => {
            const isActive = currentPage === item.id
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelect(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                  isActive ? 'bg-black/5 text-black' : 'text-[#3C3C3C] hover:bg-black/5'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="text-sm">{item.name}</span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

