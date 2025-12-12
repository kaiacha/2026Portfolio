import React from "react";
import styles from "./EMSMainPanel.module.css";
import liveCameraFeedVideo from "../images/LiveCameraFeed.mp4";
import { FaVideo, FaExpand, FaExclamationTriangle } from "react-icons/fa";

function EMSMainPanel() {
  return (
    <div className={styles.emsMainPanel}>
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
              <div className={styles.cameraSpecs}>
                1920x1080 • 60fps • H.265
              </div>
            </div>
          </div>
          <button className={styles.fullscreenButton}>
            <FaExpand />
          </button>
        </div>
        <div className={styles.cameraFeed}>
          <div className={styles.cameraImage}>
            <video
              src={liveCameraFeedVideo}
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
            <div className={styles.cameraInfoBadge}>
              ZOOM: 3.2x | GIMBAL: -15°
            </div>
            <div className={styles.cameraTime}>00:14:43</div>
          </div>
        </div>
      </div>

      {/* Emergency Call Information Section - Bottom */}
      <div className={styles.emergencyInfoSection}>
        <div className={styles.emergencyInfoHeader}>
          <div className={styles.emergencyInfoHeaderLeft}>
            <div className={styles.emergencyInfoIcon}>📋</div>
            <div className={styles.emergencyInfoTitleRow}>
              <div className={styles.emergencyInfoTitle}>Emergency Call Information</div>
              <div className={styles.emergencyInfoSubtitle}>From 911 dispatcher</div>
            </div>
          </div>
          <div className={styles.priorityBadge}>PRIORITY HIGH</div>
        </div>

        <div className={styles.emergencyInfoGrid}>
          {/* Left Column */}
          <div className={styles.emergencyInfoColumn}>
            {/* Patient Details */}
            <div className={styles.infoCard}>
              <div className={styles.infoCardTitle}>Patient Details</div>
              <div className={styles.infoCardList}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Name:</span>
                  <span className={styles.infoValue}>Sarah Mitchell</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Age:</span>
                  <span className={styles.infoValue}>34 years</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Gender:</span>
                  <span className={styles.infoValue}>Female</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Incident ID:</span>
                  <span className={styles.infoValue}>EMS-2024-1547</span>
                </div>
              </div>
            </div>

            {/* Known Allergies */}
            <div className={styles.infoCard}>
              <div className={styles.infoCardHeader}>
                <FaExclamationTriangle className={styles.infoCardIcon} />
                <div className={styles.infoCardTitle}>Known Allergies</div>
              </div>
              <div className={styles.allergyList}>
                <div className={styles.allergyItem}>
                  <div className={styles.allergyDotRed}></div>
                  <span className={styles.allergyTextRed}>Bee stings (severe)</span>
                </div>
                <div className={styles.allergyItem}>
                  <div className={styles.allergyDotOrange}></div>
                  <span className={styles.allergyTextOrange}>Shellfish</span>
                </div>
              </div>
            </div>

            {/* Medical History */}
            <div className={styles.infoCard}>
              <div className={styles.infoCardHeader}>
                <FaExclamationTriangle className={styles.infoCardIcon} />
                <div className={styles.infoCardTitle}>Medical History</div>
              </div>
              <div className={styles.historyList}>
                <div className={styles.historyItem}>• Severe bee allergy</div>
                <div className={styles.historyItem}>• Previous anaphylaxis (2019)</div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className={styles.emergencyInfoColumn}>
            {/* Incident Details */}
            <div className={styles.infoCard}>
              <div className={styles.infoCardHeader}>
                <FaExclamationTriangle className={styles.infoCardIcon} />
                <div className={styles.infoCardTitle}>Incident Details</div>
              </div>
              <div className={styles.infoCardList}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Type:</span>
                  <span className={styles.infoValue}>Anaphylactic reaction</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Cause:</span>
                  <span className={styles.infoValue}>Bee sting</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>Hiking Trail, Sector B3</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Call Time:</span>
                  <span className={styles.infoValue}>13:42:18</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Caller:</span>
                  <span className={styles.infoValue}>Hiking companion</span>
                </div>
              </div>
            </div>

            {/* Reported Symptoms */}
            <div className={styles.infoCard}>
              <div className={styles.infoCardHeader}>
                <FaExclamationTriangle className={styles.infoCardIcon} />
                <div className={styles.infoCardTitle}>Reported Symptoms</div>
              </div>
              <div className={styles.symptomList}>
                <div className={styles.symptomItem}>
                  <div className={styles.symptomDotRed}></div>
                  <span>Severe swelling at sting site</span>
                </div>
                <div className={styles.symptomItem}>
                  <div className={styles.symptomDotRed}></div>
                  <span>Difficulty breathing</span>
                </div>
                <div className={styles.symptomItem}>
                  <div className={styles.symptomDotOrange}></div>
                  <span>Rapid heartbeat</span>
                </div>
                <div className={styles.symptomItem}>
                  <div className={styles.symptomDotOrange}></div>
                  <span>Dizziness, nausea</span>
                </div>
              </div>
            </div>

            {/* Caller Status */}
            <div className={styles.infoCard}>
              <div className={styles.infoCardHeader}>
                <FaExclamationTriangle className={styles.infoCardIcon} />
                <div className={styles.infoCardTitle}>Caller Status</div>
              </div>
              <div className={styles.callerStatusList}>
                <div className={styles.callerStatusItem}>
                  <div className={styles.callerStatusDot}></div>
                  <span>Caller on scene, providing updates</span>
                </div>
                <div className={styles.callerStatusItem}>
                  <div className={styles.callerStatusDot}></div>
                  <span>Patient conscious but distressed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EMSMainPanel;

