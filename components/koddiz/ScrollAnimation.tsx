'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ScrollAnimationProps {
  children: ReactNode
  delay?: number
  className?: string
}

export default function ScrollAnimation({ children, delay = 0, className = '' }: ScrollAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: '-50px' }}
      transition={{
        duration: 5,
        delay,
        ease: [0.16, 1, 0.3, 1], // Modern easing curve for smooth, natural motion
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

