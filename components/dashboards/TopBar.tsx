'use client'

import React from 'react'
import styles from './TopBar.module.css'
import { FaBatteryThreeQuarters, FaSignal, FaSatellite, FaThermometerHalf, FaCloud } from 'react-icons/fa'

interface TopBarProps {
  currentStage?: number
}

function TopBar({ currentStage = 3 }: TopBarProps) {
  // Map payload stages to mission stages:
  // 0-1: Launch, 2: Transit, 3: Delivery, 4: On-Station, 5: Recovery
  const getActiveMissionStage = () => {
    if (currentStage <= 1) return 0 // Launch
    if (currentStage === 2) return 1 // Transit
    if (currentStage === 3) return 2 // Delivery
    if (currentStage === 4) return 3 // On-Station
    return 4 // Recovery
  }

  const activeMissionStage = getActiveMissionStage()
  const missionStages = ['Launch', 'Transit', 'Delivery', 'On-Station', 'Recovery']

  return (
    <div className={styles.topBar}>
      {/* Main Navigation Bar */}
      <div className={styles.navBar}>
        {/* Mission Stages */}
        <div className={styles.missionStages}>
          {missionStages.map((stage, index) => (
            <React.Fragment key={stage}>
              <button className={index === activeMissionStage ? styles.stageButtonActive : styles.stageButton}>
                {stage}
              </button>
              {index < missionStages.length - 1 && <span className={styles.stageSeparator}>›</span>}
            </React.Fragment>
          ))}
        </div>

        {/* Status Indicators */}
        <div className={styles.statusIndicators}>
          <div className={styles.statusBadge}>
            <FaBatteryThreeQuarters className={styles.statusIcon} />
            <span className={styles.statusText}>18%</span>
          </div>
          <div className={styles.statusBadge}>
            <FaSignal className={styles.statusIcon} />
            <span className={styles.statusText}>GOOD</span>
          </div>
          <div className={styles.statusBadge}>
            <FaSatellite className={styles.statusIcon} />
            <span className={styles.statusText}>LTE</span>
          </div>
          <div className={styles.statusBadge}>
            <FaThermometerHalf className={styles.statusIcon} />
            <span className={styles.statusText}>72°F</span>
          </div>
          <div className={styles.statusBadge}>
            <FaCloud className={styles.statusIcon} />
          </div>
        </div>

        {/* Personnel Info */}
        <div className={styles.personnelInfo}>
          <div className={styles.personnelItem}>
            <div className={styles.personnelLabel}>PILOT</div>
            <div className={styles.personnelName}>C. Jorden</div>
          </div>
          <div className={styles.personnelDivider}></div>
          <div className={styles.personnelItem}>
            <div className={styles.personnelLabel}>NAVIGATOR</div>
            <div className={styles.personnelNameActive}>K. Cha</div>
          </div>
          <div className={styles.personnelDivider}></div>
          <div className={styles.personnelItem}>
            <div className={styles.personnelLabel}>TIME</div>
            <div className={styles.personnelName}>02:14:00</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar
