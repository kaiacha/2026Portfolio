'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import slide15_arrow from '@/src/KoddizImage/slide15_arrow.png'
import slide15_ProgressWheel1 from '@/src/KoddizImage/slide15_Progress wheel-1.png'
import slide15_ProgressWheel2 from '@/src/KoddizImage/slide15_Progress wheel-2.png'
import slide15_ProgressWheelLine from '@/src/KoddizImage/slide15_Progress wheelline.png'

export default function SurveyCharts() {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  const showArrow = isHovered || isClicked

  return (
    <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-6">
      {/* Q1 Chart */}
      <div 
        className="bg-[#f9f9f9] rounded-xl p-4 md:p-6 flex flex-col items-center relative cursor-pointer transition-all duration-200"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsClicked(!isClicked)}
      >
        <p className="text-xs md:text-sm text-black text-center mb-4 font-light leading-tight">
          Q1. Have you used<br />a meeting app?
        </p>
        <div className="relative mb-2 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-20 h-20 md:w-24 md:h-24 absolute flex items-center justify-center"
          >
            <Image
              src={slide15_ProgressWheelLine}
              alt="Progress wheel line"
              className="w-20 h-20 md:w-24 md:h-24 absolute"
              width={100}
              height={100}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={slide15_ProgressWheel1}
                alt="Progress wheel 1"
                className="w-16 h-16 md:w-20 md:h-20"
                width={80}
                height={80}
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[#3b3d53] text-sm md:text-base font-semibold">25%</span>
            </div>
          </motion.div>
          {/* Arrow connecting to Q2 - positioned from progress line, clipped on left if too long */}
          {showArrow && (
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full hidden sm:block z-10 pointer-events-none overflow-hidden" style={{ width: 'calc(70.333% + 2rem)', maxWidth: '300px' }}>
              <Image
                src={slide15_arrow}
                alt="Arrow"
                className="h-10 md:h-16 w-auto object-contain"
                width={1000}
                height={100}
                style={{ display: 'block', marginLeft: 'auto' }}
              />
            </div>
          )}
        </div>
        <p className="text-[#FF6471] text-xs md:text-sm font-semibold">Yes</p>
      </div>

      {/* Q2 Chart */}
      <div className="bg-[#f9f9f9] rounded-xl p-4 md:p-6 flex flex-col items-center">
        <p className="text-xs md:text-sm text-black text-center mb-4 font-light leading-tight">
          Q2. Would you consider using one?
        </p>
        <div className="relative mb-2 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
          {/* No progress line for Q2 */}
          <div className="flex items-center justify-center">
            <Image
              src={slide15_ProgressWheel2}
              alt="Progress wheel 2"
              className="w-16 h-16 md:w-20 md:h-20"
              width={80}
              height={80}
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[#3b3d53] text-sm md:text-base font-semibold">40%</span>
          </div>
        </div>
        <p className="text-[#FF6471] text-xs md:text-sm font-semibold">Yes</p>
      </div>

      {/* Q3 Chart */}
      <div className="bg-[#f9f9f9] rounded-xl p-4 md:p-6 flex flex-col items-center">
        <p className="text-xs md:text-sm text-black text-center mb-4 font-light leading-tight">
          Q3. Biggest concern?
        </p>
        <div className="relative mb-2 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
          <div className="bg-white rounded-xl p-3 md:p-4 flex items-center justify-center ">
            <p className="text-[#FF6471] text-base md:text-lg font-semibold text-center">49.5%</p>
          </div>
        </div>
        <p className="text-[#FF6471] text-xs text-center">Risk of being exposed to crime</p>
      </div>
    </div>
  )
}

