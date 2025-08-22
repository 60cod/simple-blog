'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  size: number
  opacity: number
  speed: number
  angle: number
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number>()

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

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = []
      const particleCount = 30 // Fixed number for better visibility

      for (let i = 0; i < particleCount; i++) {
        // Randomly choose to spawn from top or left edge
        const spawnFromTop = Math.random() > 0.5
        let startX, startY

        if (spawnFromTop) {
          // Spawn from top edge
          startX = Math.random() * canvas.width
          startY = -20
        } else {
          // Spawn from left edge
          startX = -20
          startY = Math.random() * canvas.height
        }

        particlesRef.current.push({
          x: startX,
          y: startY,
          size: Math.random() * 4 + 2, // 2-6px (larger)
          opacity: Math.random() * 0.6 + 0.2, // 0.2-0.8 (more visible)
          speed: Math.random() * 1.2 + 0.5, // 0.5-1.7 (faster)
          angle: Math.PI / 4 // 45 degrees for diagonal movement
        })
      }
    }

    initParticles()

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Check if dark theme is active
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark'
      const particleColor = isDark ? '55, 55, 55' : '0, 0, 0'

      particlesRef.current.forEach(particle => {
        // Update position
        particle.x += Math.cos(particle.angle) * particle.speed
        particle.y += Math.sin(particle.angle) * particle.speed

        // Reset particle when it goes off screen
        if (particle.x > canvas.width + 10 || particle.y > canvas.height + 10) {
          // Randomly choose to respawn from top or left edge
          const spawnFromTop = Math.random() > 0.5

          if (spawnFromTop) {
            // Respawn from top edge
            particle.x = Math.random() * canvas.width
            particle.y = -20
          } else {
            // Respawn from left edge
            particle.x = -20
            particle.y = Math.random() * canvas.height
          }
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${particleColor}, ${particle.opacity})`
        ctx.fill()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="animated-background-canvas"
    />
  )
}