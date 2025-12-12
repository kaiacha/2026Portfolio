'use client'

import React, { useState } from 'react'
import styles from './PilotRightPanel.module.css'
import { FaCheck, FaExclamationTriangle } from 'react-icons/fa'

interface PilotRightPanelProps {
  currentStage: number
  onStageChange: (updater: (prev: number) => number) => void
}

function PilotRightPanel({ currentStage, onStageChange }: PilotRightPanelProps) {
  const [flightMode, setFlightMode] = useState<'AUTO' | 'MANUAL'>('AUTO')

  const handlePayloadConfirm = () => {
    if (currentStage < 5) {
      onStageChange((prev) => prev + 1)
    }
  }

  const getProgressPercentage = () => {
    return Math.round(((currentStage + 1) / 6) * 100)
  }

  return (
    <div className={styles.pilotRightPanel}>
      {/* Flight Mode Section */}
      <div className={styles.flightMode}>
        <h3 className={styles.sectionTitle}>Flight Mode</h3>
        <div className={styles.modeToggle}>
          <button className={styles.modeButton} onClick={() => setFlightMode('AUTO')}>
            AUTO
          </button>
          <button className={styles.modeButton} onClick={() => setFlightMode('MANUAL')}>
            MANUAL
          </button>
          <div className={styles.modeButtonActive} style={{ left: flightMode === 'AUTO' ? '1px' : 'calc(50% + 1px)' }}>
            {flightMode === 'AUTO' ? 'AUTO' : 'MANUAL'}
          </div>
        </div>
      </div>

      {/* Autopilot Status Section */}
      <div className={styles.autopilotStatus}>
        <div className={styles.autopilotHeader}>
          <div className={styles.autopilotIcon}>⚙️</div>
          <div className={styles.autopilotTitle}>Autopilot Status</div>
        </div>
        <div className={styles.autopilotList}>
          <div className={styles.autopilotItem}>
            <span className={styles.autopilotLabel}>Navigation:</span>
            <div className={styles.statusIndicator}>
              <div className={styles.statusDotActive}></div>
              <span className={styles.statusTextActive}>Active</span>
            </div>
          </div>
          <div className={styles.autopilotItem}>
            <span className={styles.autopilotLabel}>Altitude Hold:</span>
            <div className={styles.statusIndicator}>
              <div className={styles.statusDotActive}></div>
              <span className={styles.statusTextActive}>Active</span>
            </div>
          </div>
          <div className={styles.autopilotItem}>
            <span className={styles.autopilotLabel}>Speed Control:</span>
            <div className={styles.statusIndicator}>
              <div className={styles.statusDotActive}></div>
              <span className={styles.statusTextActive}>Active</span>
            </div>
          </div>
        </div>
      </div>

      {/* System Health Section */}
      <div className={styles.systemHealth}>
        <div className={styles.systemHealthHeader}>
          <h3 className={styles.sectionTitle}>System Health</h3>
          <div className={styles.nominalBadge}>
            <div className={styles.nominalDot}></div>
            <span>NOMINAL</span>
          </div>
        </div>
        <div className={styles.systemHealthCard}>
          <div className={styles.systemMetric}>
            <div className={styles.metricIcon}>🌡️</div>
            <div className={styles.metricInfo}>
              <div className={styles.metricLabel}>Motor Temperature</div>
              <div className={styles.metricValue}>68°C</div>
              <div className={styles.metricMax}>Max: 85°C</div>
            </div>
          </div>
          <div className={styles.systemMetric}>
            <div className={styles.metricIcon}>📡</div>
            <div className={styles.metricInfo}>
              <div className={styles.metricLabel}>Communication</div>
              <div className={styles.metricValueGreen}>Strong</div>
              <div className={styles.metricMax}>Signal: -45 dBm</div>
            </div>
          </div>
        </div>
      </div>

      {/* Payload Details Section */}
      <div className={styles.payloadDetails}>
        <div className={styles.payloadHeader}>
          <div className={styles.payloadHeaderLeft}>
            <div className={styles.payloadIcon}>📦</div>
            <h3 className={styles.sectionTitle}>Payload Details</h3>
          </div>
          <div className={styles.secureBadge}>SECURE</div>
        </div>
        <div className={styles.payloadCard}>
          {/* Package Info */}
          <div className={styles.payloadSection}>
            <div className={styles.payloadSectionTitle}>Package Info</div>
            <div className={styles.payloadInfoList}>
              <div className={styles.payloadInfoItem}>
                <span>Type:</span>
                <span className={styles.payloadInfoValue}>Medical Supply</span>
              </div>
              <div className={styles.payloadInfoItem}>
                <span>Weight:</span>
                <span className={styles.payloadInfoValue}>2.3 kg</span>
              </div>
              <div className={styles.payloadInfoItem}>
                <span>Priority:</span>
                <div className={styles.priorityIndicator}>
                  <FaExclamationTriangle className={styles.priorityIcon} />
                  <span className={styles.priorityValue}>High</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contents */}
          <div className={styles.payloadSection}>
            <div className={styles.payloadSectionTitle}>Contents</div>
            <div className={styles.contentsList}>
              <div className={styles.contentItem}>
                <FaCheck className={styles.contentCheck} />
                <span>Epinephrine (x4)</span>
              </div>
              <div className={styles.contentItem}>
                <FaCheck className={styles.contentCheck} />
                <span>Naloxone (x2)</span>
              </div>
              <div className={styles.contentItem}>
                <FaCheck className={styles.contentCheck} />
                <span>First Aid Kit</span>
              </div>
            </div>
          </div>

          {/* Delivery Status */}
          <div className={styles.payloadSection}>
            <div className={styles.payloadSectionTitle}>Delivery Status</div>
            <div className={styles.deliveryStatusRow}>
              <span>Progress:</span>
              <span className={styles.deliveryStatusValue}>In Transit</span>
            </div>
            <div className={styles.progressBarContainer}>
              <div className={styles.progressBarFill} style={{ width: `${getProgressPercentage()}%` }}></div>
            </div>
          </div>
        </div>
        <button className={styles.confirmButton} onClick={handlePayloadConfirm} disabled={currentStage >= 5}>
          <FaCheck className={styles.confirmIcon} />
          <span>Payload Confirmed</span>
        </button>
      </div>
    </div>
  )
}

export default PilotRightPanel
