'use client'

import React, { useState, useEffect } from 'react'
import TopBar from './TopBar'
import RoleSelector from './RoleSelector'
import LeftPanel from './LeftPanel'
import MainPanel from './MainPanel'
import RightPanel from './RightPanel'
import CameraFeed from './CameraFeed'
import PilotMainPanel from './PilotMainPanel'
import PilotRightPanel from './PilotRightPanel'
import EMSLeftPanel from './EMSLeftPanel'
import EMSMainPanel from './EMSMainPanel'
import EMSRightPanel from './EMSRightPanel'
import AppStyles from './App.module.css'

function UnifiedDashboard() {
  const [selectedRole, setSelectedRole] = useState<'navigator' | 'pilot' | 'ems'>('navigator')
  const [selectedRoute, setSelectedRoute] = useState<'fastest' | 'safest'>('fastest')
  const [currentStage, setCurrentStage] = useState(3) // 0-5: Load, Confirmation 1, Confirmation 2, Delivered, In Use, Return

  // Shared position state for drone
  const [latitude, setLatitude] = useState(37.7849)
  const [longitude, setLongitude] = useState(122.4094)

  // Update position in real-time
  useEffect(() => {
    const interval = setInterval(() => {
      // Update position (small variations simulating movement)
      setLatitude((prev) => prev + (Math.random() - 0.5) * 0.0001)
      setLongitude((prev) => prev + (Math.random() - 0.5) * 0.0001)
    }, 1000) // Update every second

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={AppStyles.dashboard} style={{ height: '100%', width: '100%' }}>
      <TopBar currentStage={currentStage} />
      <RoleSelector selectedRole={selectedRole} onRoleSelect={setSelectedRole} />
      <div className={AppStyles.contentArea}>
        {selectedRole === 'pilot' ? (
          <>
            <LeftPanel latitude={latitude} longitude={longitude} />
            <CameraFeed />
            <PilotMainPanel selectedRoute={selectedRoute} latitude={latitude} longitude={longitude} />
            <PilotRightPanel currentStage={currentStage} onStageChange={setCurrentStage} />
          </>
        ) : selectedRole === 'ems' ? (
          <>
            <EMSLeftPanel />
            <CameraFeed />
            <EMSMainPanel />
            <EMSRightPanel currentStage={currentStage} onStageChange={setCurrentStage} />
          </>
        ) : (
          <>
            <LeftPanel latitude={latitude} longitude={longitude} />
            <CameraFeed />
            <MainPanel selectedRoute={selectedRoute} latitude={latitude} longitude={longitude} />
            <RightPanel
              selectedRoute={selectedRoute}
              onRouteSelect={setSelectedRoute}
              currentStage={currentStage}
              onStageChange={setCurrentStage}
            />
          </>
        )}
      </div>
    </div>
  )
}

export default UnifiedDashboard
