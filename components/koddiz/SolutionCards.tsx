'use client'

import { useState } from 'react'
import Image from 'next/image'
import pp1_1 from '@/src/KoddizImage/pp1-1.png'
import pp1_2 from '@/src/KoddizImage/pp1-2.png'
import pp2_1 from '@/src/KoddizImage/pp2-1.png'
import pp2_2 from '@/src/KoddizImage/pp2-2.png'
import pp3_1 from '@/src/KoddizImage/pp3-1.png'
import pp3_2 from '@/src/KoddizImage/pp3-2.png'

interface SolutionCardProps {
  solutionNumber: number
  solutionText: string
  images: [typeof pp1_1, typeof pp1_2]
}

function SolutionCard({ solutionNumber, solutionText, images }: SolutionCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex flex-col gap-4">
      <div 
        className="bg-white rounded-[30px] px-5 md:px-6 py-4 md:py-5 shadow-[0px_2.956px_36.954px_0px_rgba(0,0,0,0.25)] flex flex-col min-h-[85px] md:min-h-[100px] cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-xs md:text-sm font-light text-[#b7424c] tracking-[-0.01em] mb-2">Solution {solutionNumber.toString().padStart(2, '0')}</p>
        <p className="text-sm md:text-base font-normal text-black text-center">{solutionText}</p>
        
        {/* Down Arrow */}
        <div className="flex justify-center mt-3">
          <svg 
            className={`w-5 h-5 text-[#b7424c] transition-transform duration-300 ${isOpen ? 'rotate-180' : 'animate-bounce'}`}
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Images - Show when clicked */}
      {isOpen && (
        <div className="grid grid-cols-2 gap-4 md:gap-6 transition-all duration-300 ease-in-out">
          <div className="relative w-full aspect-[9/16] overflow-hidden rounded-[22px]">
            <Image
              src={images[0]}
              alt={`Solution ${solutionNumber} image 1`}
              fill
              className="object-contain"
            />
          </div>
          <div className="relative w-full aspect-[9/16] overflow-hidden rounded-[22px]">
            <Image
              src={images[1]}
              alt={`Solution ${solutionNumber} image 2`}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default SolutionCard

