import React, { useState } from "react";
import styles from "./RightPanel.module.css";
import { FaCheck, FaExclamationTriangle } from "react-icons/fa";

function RightPanel({
  selectedRoute,
  onRouteSelect,
  currentStage,
  onStageChange,
}) {
  const [flightMode, setFlightMode] = useState("AUTO"); // 'AUTO' or 'MANUAL'

  const handlePayloadConfirm = () => {
    if (currentStage < 5) {
      onStageChange((prev) => prev + 1);
    }
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

  const getProgressPercentage = () => {
    return Math.round(((currentStage + 1) / 6) * 100);
  };

  const getCurrentTime = () => {
    const now = new Date();
    return `${String(now.getHours()).padStart(2, "0")}:${String(
      now.getMinutes()
    ).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`;
  };

  const timelineStages = [
    { title: "Load", time: "13:45:12" },
    { title: "Confirmation 1", time: "13:47:08" },
    { title: "Confirmation 2", time: "13:48:33" },
    {
      title: "Delivered",
      time: currentStage === 3 ? "Delivering..." : getCurrentTime(),
    },
    { title: "In Use", time: currentStage === 4 ? getCurrentTime() : null },
    { title: "Return", time: currentStage === 5 ? getCurrentTime() : null },
  ];
  return (
    <div className={styles.rightPanel}>
      {/* Route Selection Section */}
      <div className={styles.routeSelection}>
        <div className={styles.sectionHeader}>
          <h3 className={styles.sectionTitle}>Route Selection</h3>
          <div className={styles.activeBadge}>2 ACTIVE</div>
        </div>
        <div className={styles.routesList}>
          <div
            className={
              selectedRoute === "fastest"
                ? styles.routeCardActive
                : styles.routeCard
            }
            onClick={() => onRouteSelect("fastest")}
            style={{ cursor: "pointer" }}
          >
            <div className={styles.routeCardHeader}>
              <div className={styles.routeCardLeft}>
                <div
                  className={
                    selectedRoute === "fastest"
                      ? styles.routeIconActive
                      : styles.routeIcon
                  }
                >
                  ⚡
                </div>
                <div className={styles.routeInfo}>
                  <div
                    className={
                      selectedRoute === "fastest"
                        ? styles.routeNumber
                        : styles.routeNumberInactive
                    }
                  >
                    1. Fastest Route
                  </div>
                  <div
                    className={
                      selectedRoute === "fastest"
                        ? styles.routeDescription
                        : styles.routeDescriptionInactive
                    }
                  >
                    Speed optimized
                  </div>
                </div>
              </div>
              <div
                className={
                  selectedRoute === "fastest"
                    ? styles.routeArrow
                    : styles.routeArrowInactive
                }
              >
                →
              </div>
            </div>
            <div
              className={
                selectedRoute === "fastest"
                  ? styles.routeCardDivider
                  : styles.routeCardDividerInactive
              }
            ></div>
            <div
              className={
                selectedRoute === "fastest"
                  ? styles.routeCardDetails
                  : styles.routeCardDetailsInactive
              }
            >
              <span>Distance</span>
              <span
                className={
                  selectedRoute === "fastest"
                    ? styles.routeCardValue
                    : styles.routeCardValueInactive
                }
              >
                6.8 mi • 9m 47s
              </span>
            </div>
          </div>
          <div
            className={
              selectedRoute === "safest"
                ? styles.routeCardActiveSafest
                : styles.routeCard
            }
            onClick={() => onRouteSelect("safest")}
            style={{ cursor: "pointer" }}
          >
            <div className={styles.routeCardHeader}>
              <div className={styles.routeCardLeft}>
                <div
                  className={
                    selectedRoute === "safest"
                      ? styles.routeIconActiveSafest
                      : styles.routeIcon
                  }
                >
                  🛡️
                </div>
                <div className={styles.routeInfo}>
                  <div
                    className={
                      selectedRoute === "safest"
                        ? styles.routeNumberSafest
                        : styles.routeNumberInactive
                    }
                  >
                    2. Safest Route
                  </div>
                  <div
                    className={
                      selectedRoute === "safest"
                        ? styles.routeDescriptionSafest
                        : styles.routeDescriptionInactive
                    }
                  >
                    Hazard avoidance
                  </div>
                </div>
              </div>
              <div
                className={
                  selectedRoute === "safest"
                    ? styles.routeArrowSafest
                    : styles.routeArrowInactive
                }
              >
                →
              </div>
            </div>
            <div
              className={
                selectedRoute === "safest"
                  ? styles.routeCardDividerSafest
                  : styles.routeCardDividerInactive
              }
            ></div>
            <div
              className={
                selectedRoute === "safest"
                  ? styles.routeCardDetailsSafest
                  : styles.routeCardDetailsInactive
              }
            >
              <span>Distance</span>
              <span
                className={
                  selectedRoute === "safest"
                    ? styles.routeCardValueSafest
                    : styles.routeCardValueInactive
                }
              >
                8.1 mi • 12m 18s
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Flight Mode Section */}
      <div className={styles.flightMode}>
        <h3 className={styles.sectionTitle}>Flight Mode</h3>
        <div className={styles.modeToggle}>
          <button
            className={styles.modeButton}
            onClick={() => setFlightMode("AUTO")}
          >
            AUTO
          </button>
          <button
            className={styles.modeButton}
            onClick={() => setFlightMode("MANUAL")}
          >
            MANUAL
          </button>
          <div
            className={styles.modeButtonActive}
            style={{
              left: flightMode === "AUTO" ? "1px" : "calc(50% + 1px)",
            }}
          >
            {flightMode === "AUTO" ? "AUTO" : "MANUAL"}
          </div>
        </div>
      </div>

      {/* Payload Status Section */}
      <div className={styles.payloadStatus}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTitleRow}>
            <span className={styles.payloadIcon}>📦</span>
            <h3 className={styles.sectionTitle}>Payload Status</h3>
          </div>
          <div className={styles.activeBadgeBlue}>ACTIVE</div>
        </div>
        <div className={styles.payloadCard}>
          <div className={styles.payloadTimeline}>
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
                    {status === "active"
                      ? "✓"
                      : status === "current"
                      ? "●"
                      : index + 1}
                  </div>
                  {!isLast && (
                    <div
                      className={
                        status === "active" ||
                        (status === "current" && index < currentStage)
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
                            ? styles.timelineTimeInactive
                            : styles.timelineTimeInactive
                        }
                      >
                        {status === "active"
                          ? stage.time
                          : status === "current"
                          ? stage.time
                          : ""}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.missionProgress}>
            <div className={styles.progressHeader}>
              <span className={styles.progressLabel}>Mission Progress</span>
              <span className={styles.progressPercentage}>
                {getProgressPercentage()}%
              </span>
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
          onClick={handlePayloadConfirm}
          disabled={currentStage >= 5}
        >
          <FaCheck className={styles.confirmIcon} />
          <span>Payload Confirmed</span>
        </button>
      </div>
    </div>
  );
}

export default RightPanel;
