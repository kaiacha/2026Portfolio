'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export function TimeWidget() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const hours = time.getHours().toString().padStart(2, '0')
  const minutes = time.getMinutes().toString().padStart(2, '0')
  const date = time.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })

  return (
    <motion.div
      className="mb-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    >
      <div className="text-5xl font-light text-white drop-shadow-lg">{hours}:{minutes}</div>
      <div className="text-sm text-white/90 mt-1 drop-shadow-md">{date}</div>
    </motion.div>
  )
}
