'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

interface AppIconWidgetProps {
  icon?: LucideIcon
  hoverIcon?: LucideIcon
  emoji?: string
  text?: string
  image?: any
  hoverImage?: any
  label: string
  gradient: string
  delay?: number
  category?: string
  hoverAnimation?: 'collision' | 'check' | 'spin' | 'none'
  imageSize?: 'small' | 'large'
}

export function AppIconWidget({ icon: Icon, hoverIcon, emoji, text, image, hoverImage, label, gradient, delay = 0, category, hoverAnimation, imageSize = 'small' }: AppIconWidgetProps) {
  const [isHovered, setIsHovered] = useState(false)
  const isTruck = emoji === '🚚'
  const isCloud = emoji === '☁️'
  const isCollisionAnimation = hoverAnimation === 'collision'
  const isCheckAnimation = hoverAnimation === 'check'
  const DisplayIcon = (isHovered && hoverIcon ? hoverIcon : Icon) as LucideIcon

  return (
    <motion.div
      className="flex flex-col items-center gap-1 cursor-pointer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, type: 'spring', stiffness: 300, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div
        className="w-14 h-14 rounded-[18px] glass-effect shadow-lg flex items-center justify-center relative overflow-hidden group"
      >
        {DisplayIcon && (
          <motion.div
            key={isHovered ? 'hover' : 'default'}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <DisplayIcon className="w-7 h-7 text-white relative z-10" />
          </motion.div>
        )}
        {image && (
          <motion.div
            className={`relative z-10 ${imageSize === 'large' ? 'w-10 h-10' : 'w-7 h-7'}`}
            initial={false}
            animate={{
              opacity: isHovered && isCollisionAnimation ? 0.3 : 1,
              rotate: hoverAnimation === 'spin' && isHovered ? 360 : 0,
            }}
            transition={{
              opacity: { duration: 0.2 },
              rotate: {
                duration: 0.6,
                ease: 'easeInOut',
              },
            }}
          >
            <Image
              src={isHovered && hoverImage ? hoverImage : image}
              alt={label}
              fill
              className="object-contain"
              sizes={imageSize === 'large' ? '40px' : '28px'}
            />
          </motion.div>
        )}
        {/* Collision animation for Naver Cloud */}
        {isCollisionAnimation && isHovered && (
          <>
            {/* Cloud emoji - coming from left (first) */}
            <motion.div
              className="absolute text-2xl z-20"
              initial={{ x: -20, y: 0, rotate: 0 }}
              animate={{
                x: [-20, 4, 0],
                y: [0, 0, 20],
                rotate: [0, 15, 45],
              }}
              transition={{
                duration: 0.6,
                ease: 'easeOut',
                delay: 0,
              }}
            >
              ☁️
            </motion.div>
            {/* Laptop emoji - coming from right (after cloud) */}
            <motion.div
              className="absolute text-2xl z-20"
              initial={{ x: 20, y: 0, rotate: 0 }}
              animate={{
                x: [20, -4, 0],
                y: [0, 0, 20],
                rotate: [0, -15, -45],
              }}
              transition={{
                duration: 0.6,
                ease: 'easeOut',
                delay: 0.2,
              }}
            >
              💻
            </motion.div>
          </>
        )}
        {text && !image && (
          <motion.span
            className="relative z-10 font-bold"
            style={{ fontSize: '30px' }}
            initial={false}
            animate={{
              opacity: 1,
              color: isHovered ? '#ff6b35' : '#ffffff',
              rotate: isHovered ? 360 : 0,
            }}
            transition={{
              opacity: { duration: 0.2 },
              color: { duration: 0.3 },
              rotate: {
                duration: 0.6,
                ease: 'easeInOut',
              },
            }}
          >
            {text}
          </motion.span>
        )}
        {emoji && !image && !text && (
          <motion.span
            className="text-2xl relative z-10"
            key={isCloud && isHovered ? 'computer' : emoji}
            initial={false}
            animate={
              isTruck && isHovered
                ? {
                    x: [6, -6, 6],
                  }
                : { x: 0 }
            }
            transition={
              isTruck && isHovered
                ? {
                    x: {
                      duration: 0.8,
                      repeat: Infinity,
                      ease: 'linear',
                    },
                  }
                : {
                    duration: 0.2,
                  }
            }
          >
            {isCloud && isHovered ? '💻' : emoji}
          </motion.span>
        )}
        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="text-center">
        <span className="text-[10px] text-white font-medium drop-shadow-md block mt-1 leading-none">{label}</span>
        {category && <span className="text-[9px] text-white/70 drop-shadow-md block mt-1">{category}</span>}
      </div>
    </motion.div>
  )
}
