'use client'

import React, { useState, useEffect } from 'react'
import styles from './PilotMainPanel.module.css'
import { FaMapMarkerAlt, FaVideo, FaExpand } from 'react-icons/fa'

interface PilotMainPanelProps {
  selectedRoute: 'fastest' | 'safest'
  latitude: number
  longitude: number
}

function PilotMainPanel({ selectedRoute, latitude, longitude }: PilotMainPanelProps) {
  const [zoomLevel, setZoomLevel] = useState(1)
  const [routeProgress, setRouteProgress] = useState(0.3) // Start at 30% along the route
  const [selectedMapType, setSelectedMapType] = useState<'SATELLITE' | 'TERRAIN' | 'STREET'>('SATELLITE')

  // Route endpoints
  const routeStart = { x: 20, y: 60 } // Starting point on left side
  const fastestRouteEnd = { x: 75, y: 20 } // Marker 1
  const safestRouteEnd = { x: 60, y: 10 } // Marker 2

  // Calculate drone position along the active route line
  const getDronePositionOnRoute = () => {
    const endPoint = selectedRoute === 'safest' ? safestRouteEnd : fastestRouteEnd

    // Calculate position at routeProgress percentage along the line
    const x = routeStart.x + (endPoint.x - routeStart.x) * routeProgress
    const y = routeStart.y + (endPoint.y - routeStart.y) * routeProgress

    return { x, y }
  }

  const droneMapPos = getDronePositionOnRoute()

  // Animate drone along the route
  useEffect(() => {
    const interval = setInterval(() => {
      setRouteProgress((prev) => {
        // Move forward slowly (0.1% per second)
        const newProgress = prev + 0.001
        // Stop at 95% to keep it visible before destination
        return Math.min(newProgress, 0.95)
      })
    }, 1000) // Update every second

    return () => clearInterval(interval)
  }, [selectedRoute])

  // Reset progress when route changes
  useEffect(() => {
    setRouteProgress(0.3) // Reset to 30% when route changes
  }, [selectedRoute])

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.25, 3))
  }

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.25, 1))
  }

  const getMapImageStyle = (): React.CSSProperties => {
    const baseStyle: React.CSSProperties = {}

    switch (selectedMapType) {
      case 'TERRAIN':
        baseStyle.filter = 'contrast(1.2) saturate(0.8) hue-rotate(-10deg) brightness(0.9)'
        break
      case 'STREET':
        baseStyle.filter = 'contrast(1.1) saturate(0.6) brightness(1.1)'
        break
      case 'SATELLITE':
      default:
        baseStyle.filter = 'none'
        break
    }

    return baseStyle
  }

  return (
    <div className={styles.pilotMainPanel}>
      {/* Live Camera Feed Section - Top */}
      <div className={styles.cameraSection}>
        <div className={styles.cameraHeader}>
          <div className={styles.cameraHeaderLeft}>
            <div className={styles.cameraIcon}>
              <FaVideo />
            </div>
            <div className={styles.cameraInfo}>
              <div className={styles.cameraTitleRow}>
                <span className={styles.cameraTitle}>Live Camera Feed</span>
                <div className={styles.recordingBadge}>
                  <div className={styles.recordingDot}></div>
                  <span>REC</span>
                </div>
              </div>
              <div className={styles.cameraSpecs}>1920x1080 • 60fps • H.265</div>
            </div>
          </div>
          <button className={styles.fullscreenButton}>
            <FaExpand />
          </button>
        </div>
        <div className={styles.cameraFeed}>
          <div className={styles.cameraImage}>
            <video
              src="/images/LiveCameraFeed.mp4"
              className={styles.cameraImageBg}
              autoPlay
              loop
              muted
              playsInline
            />
            <div className={styles.cameraOverlay}></div>
            {/* Scan lines effect */}
            <div className={styles.scanLines}></div>
            {/* Static noise effect */}
            <div className={styles.staticNoise}></div>
            {/* Crosshair */}
            <div className={styles.crosshair}>
              <div className={styles.crosshairHorizontal}></div>
              <div className={styles.crosshairVertical}></div>
            </div>
          </div>
          <div className={styles.cameraControls}>
            <div className={styles.trackingBadge}>TRACKING ACTIVE</div>
            <div className={styles.cameraInfoBadge}>ZOOM: 3.2x | GIMBAL: -15°</div>
            <div className={styles.cameraTime}>00:14:43</div>
          </div>
        </div>
      </div>

      {/* Live Navigation Section - Bottom */}
      <div className={styles.navigationSection}>
        <div className={styles.navigationHeader}>
          <div className={styles.navigationControls}>
            <div className={styles.liveNavBadge}>
              <span className={styles.liveNavIcon}>🗺️</span>
              <span className={styles.liveNavText}>Live Navigation</span>
            </div>
            <div className={styles.mapTypeSelector}>
              <button
                className={selectedMapType === 'SATELLITE' ? styles.mapTypeActive : styles.mapType}
                onClick={() => setSelectedMapType('SATELLITE')}
              >
                SATELLITE
              </button>
              <button
                className={selectedMapType === 'TERRAIN' ? styles.mapTypeActive : styles.mapType}
                onClick={() => setSelectedMapType('TERRAIN')}
              >
                TERRAIN
              </button>
              <button
                className={selectedMapType === 'STREET' ? styles.mapTypeActive : styles.mapType}
                onClick={() => setSelectedMapType('STREET')}
              >
                STREET
              </button>
            </div>
          </div>
          <div className={styles.coordinatesBadge}>
            <FaMapMarkerAlt className={styles.coordinatesIcon} />
            <span className={styles.coordinatesText}>
              {latitude.toFixed(4)}° N, {Math.abs(longitude).toFixed(4)}° W
            </span>
          </div>
        </div>

        {/* Map Container */}
        <div className={styles.mapContainer}>
          <div
            className={styles.mapImage}
            style={{
              transform: `scale(${zoomLevel})`,
              transformOrigin: 'center center',
            }}
          >
            <img
              src="/images/mapbg.jpg"
              alt={`Map background - ${selectedMapType}`}
              className={styles.mapImageBg}
              style={getMapImageStyle()}
            />
            <div className={styles.mapOverlay}></div>
          </div>

          {/* Map Elements */}
          <div
            className={styles.mapElements}
            style={{
              transform: `scale(${zoomLevel})`,
              transformOrigin: 'center center',
            }}
          >
            {/* Route Lines */}
            <svg className={styles.routeLines} viewBox="0 0 100 100" preserveAspectRatio="none">
              {/* Fastest Route - Blue dashed line from start (20,60) to marker 1 (75,20) */}
              <line
                x1="20"
                y1="60"
                x2="75"
                y2="20"
                className={`${styles.routeLineFastest} ${selectedRoute === 'fastest' ? styles.routeLineActive : ''}`}
                stroke="#4caeff"
                strokeWidth={selectedRoute === 'fastest' ? '1' : '0.5'}
                strokeDasharray="1,1"
                vectorEffect="non-scaling-stroke"
              />
              {/* Safest Route - Green dashed line from start (20,60) to marker 2 (60,10) */}
              <line
                x1="20"
                y1="60"
                x2="60"
                y2="10"
                className={`${styles.routeLineSafest} ${selectedRoute === 'safest' ? styles.routeLineActive : ''}`}
                stroke="#55ffd4"
                strokeWidth={selectedRoute === 'safest' ? '1' : '0.5'}
                strokeDasharray="1,1"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            {/* Drone Icon */}
            <div
              className={styles.droneMarker}
              style={{
                left: `${droneMapPos.x}%`,
                top: `${droneMapPos.y}%`,
              }}
            >
              <div className={styles.droneIcon}>🚁</div>
              <div className={styles.dronePulse}></div>
            </div>

            {/* Flight Stats Overlay */}
            <div className={styles.flightStatsOverlay}>
              <div className={styles.flightStatsLabel}>Flight Stats</div>
              <div className={styles.flightStatsItem}>
                <span>Distance:</span>
                <span className={styles.flightStatsValue}>6.8 mi</span>
              </div>
              <div className={styles.flightStatsItem}>
                <span>Heading:</span>
                <span className={styles.flightStatsValueBlue}>274°</span>
              </div>
              <div className={styles.flightStatsItem}>
                <span>Wind:</span>
                <span className={styles.flightStatsValueGreen}>12 mph NW</span>
              </div>
            </div>

            {/* Zoom Controls */}
            <div className={styles.zoomControls}>
              <button
                className={styles.zoomButton}
                onClick={(e) => {
                  e.stopPropagation()
                  handleZoomIn()
                }}
                disabled={zoomLevel >= 3}
                type="button"
              >
                +
              </button>
              <button
                className={styles.zoomButton}
                onClick={(e) => {
                  e.stopPropagation()
                  handleZoomOut()
                }}
                disabled={zoomLevel <= 1}
                type="button"
              >
                -
              </button>
              <div className={styles.zoomLevel}>{zoomLevel.toFixed(1)}x</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PilotMainPanel
