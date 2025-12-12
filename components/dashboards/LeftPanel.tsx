'use client'

import React, { useState, useEffect } from 'react'
import styles from './LeftPanel.module.css'

interface LeftPanelProps {
  latitude: number
  longitude: number
}

function LeftPanel({ latitude, longitude }: LeftPanelProps) {
  // ETA State
  const [etaTime, setEtaTime] = useState({
    hours: 14,
    minutes: 23,
    seconds: 18,
  })
  const [distance, setDistance] = useState(6.8)
  const [timeRemaining, setTimeRemaining] = useState({
    minutes: 9,
    seconds: 47,
  })

  // Altitude State
  const [altitude, setAltitude] = useState(343)
  const maxAltitude = 500

  // Ground Speed State
  const [groundSpeed, setGroundSpeed] = useState(40)
  const maxSpeed = 75

  // Format time helper
  const formatTime = (hours: number, minutes: number, seconds: number) => {
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
  }

  // Real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update ETA (countdown)
      setEtaTime((prev) => {
        let { hours, minutes, seconds } = prev
        seconds--
        if (seconds < 0) {
          seconds = 59
          minutes--
          if (minutes < 0) {
            minutes = 59
            hours--
            if (hours < 0) hours = 23
          }
        }
        return { hours, minutes, seconds }
      })

      // Update time remaining
      setTimeRemaining((prev) => {
        let { minutes, seconds } = prev
        seconds--
        if (seconds < 0) {
          seconds = 59
          minutes--
          if (minutes < 0) minutes = 0
        }
        return { minutes, seconds }
      })

      // Update distance (gradually decreasing)
      setDistance((prev) => Math.max(prev - 0.01, 0))

      // Update altitude (fluctuating between 330-360)
      setAltitude((prev) => {
        const change = (Math.random() - 0.5) * 2
        return Math.max(330, Math.min(360, prev + change))
      })

      // Update ground speed (fluctuating between 38-42)
      setGroundSpeed((prev) => {
        const change = (Math.random() - 0.5) * 1
        return Math.max(38, Math.min(42, prev + change))
      })
    }, 1000) // Update every second

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={styles.leftPanel}>
      {/* ETA Destination Card */}
      <div className={styles.etaCard}>
        <div className={styles.etaHeader}>
          <div className={styles.etaIcon}>⏰</div>
          <div className={styles.etaInfo}>
            <div className={styles.etaLabel}>ETA Destination</div>
            <div className={styles.etaTime}>{formatTime(etaTime.hours, etaTime.minutes, etaTime.seconds)}</div>
          </div>
          <div className={styles.etaArrow}>→</div>
        </div>
        <div className={styles.etaDetails}>
          <span>{distance.toFixed(1)} mi</span>
          <span>
            {timeRemaining.minutes}m {timeRemaining.seconds}s
          </span>
        </div>
      </div>

      {/* Current Position Card */}
      <div className={styles.infoCard}>
        <div className={styles.cardHeader}>
          <span className={styles.cardIcon}>📍</span>
          <span className={styles.cardLabel}>Current Position</span>
        </div>
        <div className={styles.cardContent}>
          <div>{latitude.toFixed(4)}° N</div>
          <div>{Math.abs(longitude).toFixed(4)}° W</div>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className={styles.metricsContainer}>
        {/* Altitude Card */}
        <div className={styles.metricCard}>
          <div className={styles.metricHeader}>
            <div className={styles.metricIconBlue}>⛰️</div>
            <div className={styles.metricInfo}>
              <div className={styles.metricLabel}>Altitude MSL</div>
              <div className={styles.metricValue}>
                {Math.round(altitude)} <span className={styles.metricUnit}>ft</span>
              </div>
            </div>
          </div>
          <div className={styles.progressBar}>
            <div className={styles.progressFillBlue} style={{ width: `${(altitude / maxAltitude) * 100}%` }}></div>
          </div>
          <div className={styles.progressLabels}>
            <span>0 ft</span>
            <span>Max: 500 ft</span>
          </div>
        </div>

        {/* Ground Speed Card */}
        <div className={styles.metricCard}>
          <div className={styles.metricHeader}>
            <div className={styles.metricIconPurple}>⚡</div>
            <div className={styles.metricInfo}>
              <div className={styles.metricLabel}>Ground Speed</div>
              <div className={styles.metricValue}>
                {Math.round(groundSpeed)} <span className={styles.metricUnit}>mph</span>
              </div>
            </div>
          </div>
          <div className={styles.progressBar}>
            <div className={styles.progressFillPurple} style={{ width: `${(groundSpeed / maxSpeed) * 100}%` }}></div>
          </div>
          <div className={styles.progressLabels}>
            <span>0 mph</span>
            <span>Max: 75 mph</span>
          </div>
        </div>
      </div>

      {/* Proximity Radar Card */}
      <div className={styles.radarCard}>
        <div className={styles.radarHeader}>
          <div className={styles.radarHeaderLeft}>
            <div className={styles.metricIconPurple}>📡</div>
            <div className={styles.radarInfo}>
              <div className={styles.metricLabel}>Proximity Radar</div>
              <div className={styles.radarRange}>Range: 500 ft</div>
            </div>
          </div>
          <div className={styles.activeBadge}>ACTIVE</div>
        </div>
        <div className={styles.radarDisplay}>
          <div className={styles.radarCircle}>
            {/* Concentric circles */}
            <div className={styles.radarRing1}></div>
            <div className={styles.radarRing2}></div>

            {/* Rotating sweep line */}
            <div className={styles.radarSweep}></div>

            {/* Center dot with pulse */}
            <div className={styles.radarCenter}>
              <div className={styles.radarCenterPulse}></div>
            </div>

            {/* Detection dots */}
            <div className={styles.radarDotWarning} style={{ top: '25%', left: '70%' }}></div>
            <div className={styles.radarDotDanger} style={{ top: '60%', left: '20%' }}></div>
            <div className={styles.radarDotInfo} style={{ top: '15%', left: '50%' }}></div>
          </div>
        </div>
        <div className={styles.radarLegend}>
          <div className={styles.legendItem}>
            <div className={styles.legendDotWarning}></div>
            <span>Warning</span>
          </div>
          <div className={styles.legendItem}>
            <div className={styles.legendDotDanger}></div>
            <span>Danger</span>
          </div>
          <div className={styles.legendItem}>
            <div className={styles.legendDotInfo}></div>
            <span>Info</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftPanel
