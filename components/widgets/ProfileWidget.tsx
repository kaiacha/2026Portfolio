'use client'

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Users, Lightbulb, Layers } from 'lucide-react'
import profilePortrait from '@/src/assets/profile2.png'

// Static stats array - moved outside component to prevent recreation on every render
const STATS = [
  { icon: Users, label: 'User Research', value: 'Evidence-based insights' },
  { icon: Lightbulb, label: 'Problem Framing', value: 'Insight-led design' },
  { icon: Layers, label: 'Complex Systems', value: 'Healthcare · Platforms' },
] as const

export default function ProfileWidget() {
  const router = useRouter()

  const handleOpenProfile = () => {
    router.push('/about')
  }

  return (
    <motion.button
      type="button"
      onClick={handleOpenProfile}
      className="bg-white/80 rounded-[26.46px] p-6 shadow-2xl w-full transition-all duration-300 hover:shadow-2xl hover:shadow-gray-200/50 group text-left cursor-pointer hover:bg-gray-50 active:bg-gray-100 border-2 border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        scale: [1, 1.03, 0.97],
      }}
      transition={{ 
        opacity: { type: 'spring', stiffness: 200, damping: 20 },
        y: { type: 'spring', stiffness: 200, damping: 20 },
        scale: {
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }
      }}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98, y: 0 }}
    >
      {/* About Me Indicator */}
      {/* <div className="flex items-center gap-2 w-full pb-3 border-b border-gray-200 group-hover:border-gray-300 transition-all duration-300 mb-3">
        <span className="text-xs font-medium transition-colors text-gray-700 group-hover:text-gray-900">
          About Me
        </span>
        <svg
          className="w-3 h-3 group-hover:translate-x-1 transition-all duration-300 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div> */}

      <div className="flex items-start gap-3 mb-3">
        <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-lg flex-shrink-0 bg-gray-100 group-hover:bg-gray-200 transition-all duration-300 group-hover:scale-105">
          <Image
            src={profilePortrait}
            alt="Portrait of Mikyo Kaia Cha"
            fill
            className="object-cover object-top"
            sizes="48px"
            priority
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2 mb-0.5">
            <h2 className="text-lg font-bold text-gray-900">Mikyo Kaia Cha</h2>
            <div className="flex gap-1.5">
              <motion.a
                href="mailto:mikyo.cha@asu.edu"
                className="p-1.5 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
              >
                <Mail className="w-3 h-3" />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
              >
                <Linkedin className="w-3 h-3 text-blue-600" />
              </motion.a>
            </div>
          </div>
          <p className="text-xs text-gray-600 mb-2">UX Designer & Researcher</p>
        </div>
      </div>

      <p className="text-xs text-gray-700 leading-relaxed mb-3">
      A research-driven UX designer with a strong understanding of code.
Currently pursuing an M.S. in Human Systems Engineering at Arizona State University.
      </p>

      <div className="grid grid-cols-3 gap-2">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-2 text-center"
          >
            <stat.icon className="w-4 h-4 text-blue-600 mx-auto mb-1" />
            <div className="text-[12px] font-medium text-gray-900 whitespace-pre-line leading-tight mb-1">{stat.value}</div>
            <div className="text-[10px] text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>
    </motion.button>
  )
}


