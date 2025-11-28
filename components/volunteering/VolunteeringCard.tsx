'use client'

import React from 'react'

interface VolunteeringCardProps {
  title: string
  date: string
  tags: string[]
  image?: string
}

const tagColors: Record<string, string> = {
  'Volunteering': 'bg-[#FFEDD3] text-[#1F1F1F]',
  'Coding': 'bg-[#E0DFDA] text-[#1F1F1F]',
  'Education': 'bg-[#E2FFDE] text-[#1F1F1F]',
  'Planning': 'bg-[#D7F0FF] text-[#1F1F1F]',
  'Communication': 'bg-[#F3DAFF] text-[#1F1F1F]',
}

export default function VolunteeringCard({ title, date, tags, image }: VolunteeringCardProps) {
  return (
    <div className="bg-white border border-[#DCDCDC] rounded-[10px] overflow-hidden h-full flex flex-col">
      {/* Image */}
      <div className="w-full h-[120px] bg-gray-200 relative overflow-hidden flex-shrink-0">
        {image ? (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
            <span className="text-gray-500 text-xs">Image placeholder</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-3 space-y-2 flex-1 flex flex-col">
        <h3 className="text-sm font-normal text-black leading-tight">{title}</h3>
        <p className="text-xs text-black">{date}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-1 mt-auto">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`px-2 py-1 rounded text-[10px] font-normal ${
                tagColors[tag] || 'bg-gray-200 text-black'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

