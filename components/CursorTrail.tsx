'use client'

import { useEffect, useRef } from 'react'

interface Point {
  x: number
  y: number
  time: number
}

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const trailRef = useRef<Point[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const animationFrameRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
      
      // Add point to trail
      trailRef.current.push({
        x: e.clientX,
        y: e.clientY,
        time: Date.now(),
      })

      // Keep trail length manageable (last 50 points for longer trail)
      if (trailRef.current.length > 50) {
        trailRef.current.shift()
      }
    }

    const handleMouseLeave = () => {
      // Clear trail when mouse leaves
      trailRef.current = []
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    let time = 0

    const animate = () => {
      time += 0.01

      // Fade out previous frame very slowly to create persistent trail marks
      ctx.fillStyle = 'rgba(10, 10, 10, 0.02)'
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const trail = trailRef.current
      if (trail.length < 2) {
        animationFrameRef.current = requestAnimationFrame(animate)
        return
      }

      // Draw flowing trail with wave effect
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'

      // Draw multiple layers for depth and glow effect
      for (let layer = 0; layer < 3; layer++) {
        const layerAlpha = 0.5 - layer * 0.15
        const layerWidth = 5 - layer * 1.2
        const colorIntensity = 1 - layer * 0.2

        ctx.beginPath()
        ctx.globalAlpha = layerAlpha

        // Gradient color along trail
        const gradient = ctx.createLinearGradient(
          trail[0]?.x || 0,
          trail[0]?.y || 0,
          trail[trail.length - 1]?.x || 0,
          trail[trail.length - 1]?.y || 0
        )
        gradient.addColorStop(0, `rgba(148, 197, 253, ${0.8 * colorIntensity})`) // blue-300
        gradient.addColorStop(0.5, `rgba(96, 165, 250, ${0.6 * colorIntensity})`) // blue-400
        gradient.addColorStop(1, `rgba(59, 130, 246, ${0.4 * colorIntensity})`) // blue-500

        ctx.strokeStyle = gradient

        trail.forEach((point, index) => {
          if (index === 0) return

          const prevPoint = trail[index - 1]
          const progress = index / trail.length

          // Enhanced wave effect - perpendicular to trail direction
          const dx = point.x - prevPoint.x
          const dy = point.y - prevPoint.y
          const dist = Math.sqrt(dx * dx + dy * dy) || 1
          const perpX = -dy / dist
          const perpY = dx / dist

          // Wave amplitude decreases along trail
          const waveAmplitude = 8 * (1 - progress) * (1 - progress)
          const wavePhase = time * 3 + index * 0.4

          // Perpendicular wave motion
          const waveOffsetX = perpX * Math.sin(wavePhase) * waveAmplitude
          const waveOffsetY = perpY * Math.sin(wavePhase) * waveAmplitude

          // Additional flow effect
          const flowX = Math.cos(time * 2 + index * 0.3) * 3 * (1 - progress)
          const flowY = Math.sin(time * 2.2 + index * 0.25) * 3 * (1 - progress)

          const x = point.x + waveOffsetX + flowX
          const y = point.y + waveOffsetY + flowY

          // Line width decreases along trail
          ctx.lineWidth = layerWidth * (0.3 + 0.7 * progress)

          if (index === 1) {
            const startWaveX = perpX * Math.sin(time * 3) * waveAmplitude
            const startWaveY = perpY * Math.sin(time * 3) * waveAmplitude
            ctx.moveTo(prevPoint.x + startWaveX, prevPoint.y + startWaveY)
          }

          // Smooth bezier curve for fluid flow
          const t = 0.5
          const cpX = prevPoint.x + (x - prevPoint.x) * t + waveOffsetX * 0.5
          const cpY = prevPoint.y + (y - prevPoint.y) * t + waveOffsetY * 0.5

          ctx.quadraticCurveTo(cpX, cpY, x, y)
        })

        ctx.stroke()
      }

      // Draw glowing dots along the trail (only on recent points)
      ctx.globalAlpha = 0.9
      trail.slice(-10).forEach((point, index) => {
        const actualIndex = trail.length - 10 + index
        const progress = actualIndex / trail.length
        const size = 4 * (1 - progress * 0.7)

        // Calculate perpendicular direction for wave
        if (actualIndex > 0) {
          const prevPoint = trail[actualIndex - 1]
          const dx = point.x - prevPoint.x
          const dy = point.y - prevPoint.y
          const dist = Math.sqrt(dx * dx + dy * dy) || 1
          const perpX = -dy / dist
          const perpY = dx / dist

          const waveAmplitude = 4 * (1 - progress)
          const wavePhase = time * 3 + actualIndex * 0.4

          const dotWaveX = perpX * Math.sin(wavePhase) * waveAmplitude
          const dotWaveY = perpY * Math.sin(wavePhase) * waveAmplitude

          const gradient = ctx.createRadialGradient(
            point.x + dotWaveX,
            point.y + dotWaveY,
            0,
            point.x + dotWaveX,
            point.y + dotWaveY,
            size * 2.5
          )

          gradient.addColorStop(0, `rgba(191, 219, 254, ${0.95 * (1 - progress * 0.5)})`) // blue-200
          gradient.addColorStop(0.4, `rgba(148, 197, 253, ${0.7 * (1 - progress * 0.5)})`) // blue-300
          gradient.addColorStop(0.7, `rgba(96, 165, 250, ${0.4 * (1 - progress * 0.5)})`) // blue-400
          gradient.addColorStop(1, 'rgba(59, 130, 246, 0)') // blue-500

          ctx.fillStyle = gradient
          ctx.beginPath()
          ctx.arc(point.x + dotWaveX, point.y + dotWaveY, size * 2.5, 0, Math.PI * 2)
          ctx.fill()
        }
      })

      // Reset alpha
      ctx.globalAlpha = 1

      // Remove old points (older than 500ms for longer persistent trail)
      const now = Date.now()
      trailRef.current = trailRef.current.filter((point) => now - point.time < 500)

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-20"
    />
  )
}

