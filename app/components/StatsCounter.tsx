'use client'

import { useState, useEffect } from 'react'

interface StatItem {
  label: string
  value: number
  suffix?: string
}

export default function StatsCounter() {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState({ articles: 0, projects: 0, readers: 0 })

  const stats: StatItem[] = [
    { label: 'Articles Published', value: 25, suffix: '+' },
    { label: 'Projects Completed', value: 12, suffix: '+' },
    { label: 'Monthly Readers', value: 1200, suffix: '+' }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('stats-counter')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    let step = 0
    const timer = setInterval(() => {
      step++
      const progress = step / steps

      setCounts({
        articles: Math.floor(stats[0].value * progress),
        projects: Math.floor(stats[1].value * progress),
        readers: Math.floor(stats[2].value * progress)
      })

      if (step >= steps) {
        clearInterval(timer)
        setCounts({
          articles: stats[0].value,
          projects: stats[1].value,
          readers: stats[2].value
        })
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [isVisible])

  return (
    <section id="stats-counter" className="stats-section">
      <div className="container">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">{counts.articles}+</div>
            <div className="stat-label">Articles Published</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{counts.projects}+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{counts.readers}+</div>
            <div className="stat-label">Monthly Readers</div>
          </div>
        </div>
      </div>
    </section>
  )
}