import React from "react";
import styles from "./EMSRightPanel.module.css";
import { FaCheck, FaAmbulance } from "react-icons/fa";

function EMSRightPanel({ currentStage, onStageChange }) {
  const getProgressPercentage = () => {
    return Math.round(((currentStage + 1) / 6) * 100);
  };

  const getTimelineStatus = (index) => {
    if (index < currentStage) {
      return "active";
    } else if (index === currentStage) {
      return "current";
    } else {
      return "inactive";
    }
  };

  const timelineStages = [
    { title: "Load", time: "13:45:12" },
    { title: "Confirmation 1", time: "13:47:08" },
    { title: "Confirmation 2", time: "13:48:33" },
    { title: "Delivered", time: "Delivering..." },
    { title: "In Use", time: null },
    { title: "Return", time: null },
  ];

  const handleConfirmReceipt = () => {
    if (currentStage < 5) {
      onStageChange((prev) => prev + 1);
    }
  };

  return (
    <div className={styles.emsRightPanel}>
      {/* Ambulance Status Section */}
      <div className={styles.ambulanceStatusCard}>
        <div className={styles.ambulanceStatusHeader}>
          <div className={styles.ambulanceIcon}>🚑</div>
          <div className={styles.ambulanceInfo}>
            <div className={styles.ambulanceLabel}>Ambulance Status</div>
            <div className={styles.ambulanceStatus}>
              <div className={styles.statusDotActive}></div>
              <span className={styles.statusTextActive}>En Route</span>
            </div>
          </div>
        </div>
        <div className={styles.etaComparison}>
          <div className={styles.etaComparisonHeader}>
            <div className={styles.etaIcon}>⏱️</div>
            <div className={styles.etaLabel}>ETA Comparison</div>
          </div>
          <div className={styles.etaList}>
            <div className={styles.etaItem}>
              <div className={styles.etaItemLeft}>
                <div className={styles.etaDotBlue}></div>
                <span>UAV</span>
              </div>
              <span className={styles.etaValueBlue}>9m 47s</span>
            </div>
            <div className={styles.etaItem}>
              <div className={styles.etaItemLeft}>
                <div className={styles.etaDotGreen}></div>
                <span>Ambulance</span>
              </div>
              <span className={styles.etaValueGreen}>18m 32s</span>
            </div>
          </div>
        </div>
      </div>

      {/* Medical Payload Section */}
      <div className={styles.medicalPayloadCard}>
        <div className={styles.medicalPayloadHeader}>
          <div className={styles.medicalPayloadHeaderLeft}>
            <div className={styles.medicalPayloadIcon}>📦</div>
            <div className={styles.medicalPayloadTitle}>Medical Payload</div>
          </div>
          <div className={styles.readyBadge}>READY</div>
        </div>
        <div className={styles.payloadItems}>
          <div className={styles.payloadItem}>
            <div className={styles.payloadItemIconRed}>💉</div>
            <div className={styles.payloadItemInfo}>
              <div className={styles.payloadItemTitle}>Epinephrine Auto-Injector</div>
              <div className={styles.payloadItemSubtitle}>0.3mg • EpiPen® • Qty: 2</div>
            </div>
          </div>
          <div className={styles.payloadItem}>
            <div className={styles.payloadItemIconBlue}>🫁</div>
            <div className={styles.payloadItemInfo}>
              <div className={styles.payloadItemTitle}>Albuterol Inhaler</div>
              <div className={styles.payloadItemSubtitle}>Backup respiratory aid</div>
            </div>
          </div>
        </div>
        <div className={styles.totalWeightRow}>
          <div className={styles.totalWeightLabel}>Total Weight</div>
          <div className={styles.totalWeightValue}>1.8 kg</div>
        </div>
      </div>

      {/* Mission Progress Section */}
      <div className={styles.missionProgressCard}>
        <div className={styles.missionProgressTimeline}>
          {timelineStages.map((stage, index) => {
            const status = getTimelineStatus(index);
            const isLast = index === timelineStages.length - 1;

            return (
              <div key={index} className={styles.timelineItem}>
                <div
                  className={
                    status === "active"
                      ? styles.timelineIconActive
                      : status === "current"
                      ? styles.timelineIconCurrent
                      : styles.timelineIconInactive
                  }
                >
                  {status === "active" ? (
                    <FaCheck className={styles.timelineCheckIcon} />
                  ) : status === "current" ? (
                    "●"
                  ) : (
                    index + 1
                  )}
                </div>
                {!isLast && (
                  <div
                    className={
                      status === "active" || (status === "current" && index < currentStage)
                        ? styles.timelineLineActive
                        : styles.timelineLineInactive
                    }
                  ></div>
                )}
                <div className={styles.timelineContent}>
                  <div
                    className={
                      status === "active"
                        ? styles.timelineTitleActive
                        : status === "current"
                        ? styles.timelineTitleCurrent
                        : styles.timelineTitleInactive
                    }
                  >
                    {stage.title}
                  </div>
                  {stage.time && (
                    <div
                      className={
                        status === "active"
                          ? styles.timelineTime
                          : status === "current"
                          ? styles.timelineTimeCurrent
                          : styles.timelineTimeInactive
                      }
                    >
                      {stage.time}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.missionProgressBar}>
          <div className={styles.progressHeader}>
            <span className={styles.progressLabel}>Mission Progress</span>
            <span className={styles.progressPercentage}>{getProgressPercentage()}%</span>
          </div>
          <div className={styles.progressBarContainer}>
            <div
              className={styles.progressBarFill}
              style={{ width: `${getProgressPercentage()}%` }}
            ></div>
          </div>
          <div className={styles.progressFooter}>
            <span>{currentStage + 1}/6 stages</span>
            <span>ETA: 14:23:18</span>
          </div>
        </div>
      </div>
      <button
        className={styles.confirmButton}
        onClick={handleConfirmReceipt}
        disabled={currentStage >= 5}
      >
        <FaCheck className={styles.confirmIcon} />
        <span>Confirm Receipt</span>
      </button>
    </div>
  );
}

export default EMSRightPanel;

