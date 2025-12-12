'use client'

import React, { useState, useEffect } from 'react'
import TopBar from './TopBar'
import RoleSelector from './RoleSelector'
import LeftPanel from './LeftPanel'
import CameraFeed from './CameraFeed'
import PilotMainPanel from './PilotMainPanel'
import PilotRightPanel from './PilotRightPanel'
import AppStyles from './App.module.css'

// This is a wrapper that ensures the dashboard starts in Pilot mode
function PilotDashboard() {
  const [selectedRole, setSelectedRole] = useState<'navigator' | 'pilot' | 'ems'>('pilot')
  const [selectedRoute, setSelectedRoute] = useState<'fastest' | 'safest'>('fastest')
  const [currentStage, setCurrentStage] = useState(3)

  // Shared position state for drone
  const [latitude, setLatitude] = useState(37.7849)
  const [longitude, setLongitude] = useState(122.4094)

  // Update position in real-time
  useEffect(() => {
    const interval = setInterval(() => {
      setLatitude((prev) => prev + (Math.random() - 0.5) * 0.0001)
      setLongitude((prev) => prev + (Math.random() - 0.5) * 0.0001)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={AppStyles.dashboard} style={{ height: '100%', width: '100%' }}>
      <TopBar currentStage={currentStage} />
      <RoleSelector selectedRole={selectedRole} onRoleSelect={setSelectedRole} />
      <div className={AppStyles.contentArea}>
        <LeftPanel latitude={latitude} longitude={longitude} />
        <CameraFeed />
        <PilotMainPanel selectedRoute={selectedRoute} latitude={latitude} longitude={longitude} />
        <PilotRightPanel currentStage={currentStage} onStageChange={setCurrentStage} />
      </div>
    </div>
  )
}

export default PilotDashboard
