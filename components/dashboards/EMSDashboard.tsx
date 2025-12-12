'use client'

import React, { useState, useEffect } from 'react'
import TopBar from './TopBar'
import RoleSelector from './RoleSelector'
import CameraFeed from './CameraFeed'
import EMSLeftPanel from './EMSLeftPanel'
import EMSMainPanel from './EMSMainPanel'
import EMSRightPanel from './EMSRightPanel'
import AppStyles from './App.module.css'

// This is a wrapper that ensures the dashboard starts in EMS mode
function EMSDashboard() {
  const [selectedRole, setSelectedRole] = useState<'navigator' | 'pilot' | 'ems'>('ems')
  const [currentStage, setCurrentStage] = useState(3)

  return (
    <div className={AppStyles.dashboard} style={{ height: '100%', width: '100%' }}>
      <TopBar currentStage={currentStage} />
      <RoleSelector selectedRole={selectedRole} onRoleSelect={setSelectedRole} />
      <div className={AppStyles.contentArea}>
        <EMSLeftPanel />
        <CameraFeed />
        <EMSMainPanel />
        <EMSRightPanel currentStage={currentStage} onStageChange={setCurrentStage} />
      </div>
    </div>
  )
}

export default EMSDashboard
