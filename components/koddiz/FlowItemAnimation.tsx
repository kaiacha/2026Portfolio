'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface FlowItemAnimationProps {
  children: ReactNode
  delay?: number
  className?: string
}

export default function FlowItemAnimation({ children, delay = 0, className = '' }: FlowItemAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: '-100px' }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

