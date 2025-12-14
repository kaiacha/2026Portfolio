'use client'

import { useEffect, useRef } from 'react'

export default function GradientMesh() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

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

    // Gradient blob configuration with smooth movement
    const blobs = [
      {
        x: 0,
        y: 0,
        targetX: 0,
        targetY: 0,
        radius: 400,
        color: { r: 59, g: 130, b: 246 }, // blue-500
        speed: 0.0008,
      },
      {
        x: 0,
        y: 0,
        targetX: 0,
        targetY: 0,
        radius: 500,
        color: { r: 139, g: 92, b: 246 }, // violet-500
        speed: 0.0006,
      },
      {
        x: 0,
        y: 0,
        targetX: 0,
        targetY: 0,
        radius: 450,
        color: { r: 236, g: 72, b: 153 }, // pink-500
        speed: 0.0007,
      },
    ]

    // Initialize blob positions
    blobs[0].x = canvas.width * 0.2
    blobs[0].y = canvas.height * 0.3
    blobs[0].targetX = canvas.width * 0.2
    blobs[0].targetY = canvas.height * 0.3

    blobs[1].x = canvas.width * 0.8
    blobs[1].y = canvas.height * 0.7
    blobs[1].targetX = canvas.width * 0.8
    blobs[1].targetY = canvas.height * 0.7

    blobs[2].x = canvas.width * 0.5
    blobs[2].y = canvas.height * 0.5
    blobs[2].targetX = canvas.width * 0.5
    blobs[2].targetY = canvas.height * 0.5

    let time = 0
    let animationFrameId: number

    const animate = () => {
      time += 0.01

      // Clear canvas with transparent background
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update blob target positions with smooth sine wave movement
      blobs[0].targetX = canvas.width * (0.2 + Math.sin(time * 0.5) * 0.15)
      blobs[0].targetY = canvas.height * (0.3 + Math.cos(time * 0.4) * 0.2)

      blobs[1].targetX = canvas.width * (0.8 + Math.cos(time * 0.6) * 0.1)
      blobs[1].targetY = canvas.height * (0.7 + Math.sin(time * 0.5) * 0.15)

      blobs[2].targetX = canvas.width * (0.5 + Math.sin(time * 0.7) * 0.2)
      blobs[2].targetY = canvas.height * (0.5 + Math.cos(time * 0.6) * 0.25)

      // Smooth interpolation to target positions
      blobs.forEach((blob) => {
        blob.x += (blob.targetX - blob.x) * blob.speed * 60
        blob.y += (blob.targetY - blob.y) * blob.speed * 60
      })

      // Draw blobs with screen blend mode for gradient mesh effect
      ctx.globalCompositeOperation = 'screen'
      
      blobs.forEach((blob) => {
        // Create radial gradient for each blob
        const gradient = ctx.createRadialGradient(
          blob.x,
          blob.y,
          0,
          blob.x,
          blob.y,
          blob.radius
        )
        
        // Smooth gradient stops for organic feel
        gradient.addColorStop(0, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, 0.5)`)
        gradient.addColorStop(0.3, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, 0.3)`)
        gradient.addColorStop(0.6, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, 0.15)`)
        gradient.addColorStop(1, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, 0)`)

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      // Reset composite operation
      ctx.globalCompositeOperation = 'source-over'

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  )
}

