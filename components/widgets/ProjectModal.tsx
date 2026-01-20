'use client'

import { motion } from 'framer-motion'
import { MoreHorizontal, ExternalLink } from 'lucide-react'
import { useState, useCallback } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface ProjectModalProps {
  title: string
  subtitle: string
  description: string
  metrics: { label: string; value: string }[]
  tags: string[]
  image: string | any
  position: { x: number; y: number; rotate: number }
  zIndex: number
  delay?: number
  href?: string
  isCollapsed?: boolean
  collapsedHeight?: number
}

export function ProjectModal({
  title,
  subtitle,
  description,
  metrics,
  tags,
  image,
  position,
  zIndex,
  delay = 0,
  href,
  isCollapsed = false,
  collapsedHeight,
}: ProjectModalProps) {
  const [isDragging, setIsDragging] = useState(false)
  const router = useRouter()

  const handleViewCaseStudy = useCallback(() => {
    if (href) {
      router.push(href)
    }
  }, [href, router])

  // Check if position is at origin (mobile layout)
  const isMobileLayout = position.x === 0 && position.y === 0

  return (
    <motion.div
      className={isMobileLayout ? 'relative' : 'absolute left-1/2'}
      initial={{ opacity: 0, scale: 0.9, x: isMobileLayout ? 0 : '-50%', y: isMobileLayout ? 0 : '0px', rotate: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        x: isMobileLayout ? 0 : `calc(-50% + ${position.x}px)`,
        y: isMobileLayout ? 0 : '0px',
        rotate: 0,
      }}
      transition={{ delay, type: 'spring', stiffness: 200, damping: 25 }}
      drag={!isMobileLayout}
      dragMomentum={false}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      whileHover={!isMobileLayout ? { scale: 1.05, zIndex: 200 } : {}}
      style={{ zIndex, ...(isMobileLayout ? {} : { bottom: `${position.y}px` }) }}
    >
      <motion.div
        className={`bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-[420px] ${
          isMobileLayout ? '' : isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        animate={{
          height: isCollapsed && collapsedHeight ? collapsedHeight : 'auto',
          boxShadow: isCollapsed && collapsedHeight && collapsedHeight < 100 
            ? '0 4px 6px rgba(0, 0, 0, 0.1)' 
            : '0 20px 25px rgba(0, 0, 0, 0.15)',
        }}
        transition={{
          duration: 0.8,
          ease: [0.4, 0, 0.2, 1],
        }}
      >
        
        {/* Modal Header */}
        <div className="bg-gray-50 px-4 py-3 flex items-center justify-between border-b border-gray-200">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400 hover:bg-red-500 cursor-pointer transition-colors" />
              <div className="w-3 h-3 rounded-full bg-yellow-400 hover:bg-yellow-500 cursor-pointer transition-colors" />
              <div className="w-3 h-3 rounded-full bg-green-400 hover:bg-green-500 cursor-pointer transition-colors" />
            </div>
          </div>
          <div className="flex-1 text-center">
            <h3 className="text-sm font-semibold text-gray-700 truncate px-4">{title}</h3>
          </div>
          <div className="flex items-center gap-1">
            <button className="p-1 hover:bg-gray-200 rounded transition-colors">
              <MoreHorizontal className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <motion.div 
          className="bg-white"
          animate={{
            opacity: isCollapsed && collapsedHeight && collapsedHeight < 100 ? 0 : 1,
          }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut',
          }}
          style={{
            overflow: isCollapsed && collapsedHeight && collapsedHeight < 100 ? 'hidden' : 'visible',
          }}
        >
          {/* Project Image (clickable) */}
          <div
            onClick={handleViewCaseStudy}
            className="relative h-48 w-full bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden group cursor-pointer"
          >
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
            <div className="absolute top-3 right-3">
              <motion.button
                type="button"
                className="p-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg hover:bg-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.stopPropagation()
                  handleViewCaseStudy()
                }}
              >
                <ExternalLink className="w-4 h-4 text-gray-700" />
              </motion.button>
            </div>
          </div>

          {/* Project Details */}
          <div className="p-5">
            <div className="mb-3">
              <p className="text-xs font-medium text-blue-600 mb-1">{subtitle}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              {metrics.map((metric) => (
                <div key={`${metric.label}-${metric.value}`} className="bg-gray-50 rounded-lg p-2.5">
                  <div className="text-lg font-semibold text-gray-900">{metric.value}</div>
                  <div className="text-xs text-gray-600">{metric.label}</div>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 bg-blue-50 text-blue-700 rounded-md text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Modal Footer */}
          <div className="px-5 pb-4 flex gap-2">
            <motion.button
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleViewCaseStudy}
            >
              View Case Study
            </motion.button>
            <motion.button
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Details
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
