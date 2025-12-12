'use client'

import React, { useState } from 'react'
import styles from './EMSLeftPanel.module.css'
import {
  FaMicrophone,
  FaMicrophoneSlash,
  FaComments,
  FaPhone,
  FaUser,
  FaVideo,
  FaHeadphones,
  FaSignal,
} from 'react-icons/fa'

function EMSLeftPanel() {
  const [isMuted, setIsMuted] = useState(false)

  return (
    <div className={styles.emsLeftPanel}>
      {/* Communications Section */}
      <div className={styles.communicationsCard}>
        <div className={styles.communicationsHeader}>
          <div className={styles.commIcon}>📡</div>
          <div className={styles.commInfo}>
            <div className={styles.commLabel}>Communications</div>
            <div className={styles.commStatus}>
              <div className={styles.statusDotActive}></div>
              <span className={styles.statusTextActive}>Connected</span>
            </div>
          </div>
        </div>
        <div className={styles.commButtons}>
          <button className={styles.pushToTalkButton}>
            <FaMicrophone className={styles.buttonIcon} />
            <span>Push to Talk</span>
          </button>
          <button className={styles.muteButton} onClick={() => setIsMuted(!isMuted)}>
            {isMuted ? <FaMicrophoneSlash className={styles.buttonIcon} /> : <FaMicrophone className={styles.buttonIcon} />}
            <span>Mute All</span>
          </button>
          <button className={styles.chatButton}>
            <FaComments className={styles.buttonIcon} />
            <span>Chat</span>
          </button>
        </div>
      </div>

      {/* Emergency Contact Section */}
      <div className={styles.emergencyContactCard}>
        <div className={styles.emergencyContactHeader}>
          <div className={styles.contactIcon}>📞</div>
          <div className={styles.contactLabel}>Emergency Contact</div>
        </div>
        <div className={styles.contactButtons}>
          <button className={styles.ambulanceButton}>
            <FaPhone className={styles.contactButtonIcon} />
            <div className={styles.contactButtonInfo}>
              <div className={styles.contactButtonTitle}>Call Ambulance</div>
              <div className={styles.contactButtonSubtitle}>Dispatch: 911</div>
            </div>
            <FaPhone className={styles.contactButtonIconRight} />
          </button>
          <button className={styles.coordinatorButton}>
            <FaUser className={styles.contactButtonIcon} />
            <div className={styles.contactButtonInfo}>
              <div className={styles.contactButtonTitle}>EMS Coordinator</div>
              <div className={styles.contactButtonSubtitle}>Direct Line</div>
            </div>
            <FaPhone className={styles.contactButtonIconRight} />
          </button>
        </div>
      </div>

      {/* Connection Status Section */}
      <div className={styles.connectionStatusCard}>
        <div className={styles.connectionStatusLabel}>Connection Status</div>
        <div className={styles.connectionStatusList}>
          <div className={styles.statusRow}>
            <div className={styles.statusIcon}>
              <FaVideo />
            </div>
            <div className={styles.statusInfo}>
              <div className={styles.statusLabel}>Video Feed</div>
              <div className={styles.statusValueGreen}>1080p • 60fps</div>
            </div>
          </div>
          <div className={styles.statusRow}>
            <div className={styles.statusIcon}>
              <FaHeadphones />
            </div>
            <div className={styles.statusInfo}>
              <div className={styles.statusLabel}>Audio Channel</div>
              <div className={styles.statusValueGreen}>Clear</div>
            </div>
          </div>
          <div className={styles.statusRow}>
            <div className={styles.statusIcon}>
              <FaSignal />
            </div>
            <div className={styles.statusInfo}>
              <div className={styles.statusLabel}>Data Link</div>
              <div className={styles.statusValueGreen}>Strong</div>
              <div className={styles.statusSubtext}>-48 dBm</div>
            </div>
          </div>
        </div>
        <div className={styles.latencyRow}>
          <div className={styles.latencyLabel}>Latency</div>
          <div className={styles.latencyValue}>42ms</div>
        </div>
      </div>
    </div>
  )
}

export default EMSLeftPanel
