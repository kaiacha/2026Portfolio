import React, { useState } from "react";
import styles from "./RoleSelector.module.css";
import alertStyles from "./TopBar.module.css";

function RoleSelector({ selectedRole = 'navigator', onRoleSelect }) {
  const [isAlertVisible, setIsAlertVisible] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  const handleCloseAlert = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsAlertVisible(false);
    }, 300); // Match animation duration
  };

  return (
    <div className={styles.roleSelector}>
      <div className={styles.roleButtons}>
        <button 
          className={selectedRole === 'navigator' ? styles.roleButtonActive : styles.roleButton}
          onClick={() => onRoleSelect('navigator')}
        >
          <div className={selectedRole === 'navigator' ? styles.roleIconActive : styles.roleIcon}>✈️</div>
          <div className={styles.roleInfo}>
            <div className={selectedRole === 'navigator' ? styles.roleTitleActive : styles.roleTitle}>Navigator</div>
            <div className={styles.roleSubtitle}>Mission Control</div>
          </div>
        </button>
        <button 
          className={selectedRole === 'pilot' ? styles.roleButtonActive : styles.roleButton}
          onClick={() => onRoleSelect('pilot')}
        >
          <div className={selectedRole === 'pilot' ? styles.roleIconActive : styles.roleIcon}>👤</div>
          <div className={styles.roleInfo}>
            <div className={selectedRole === 'pilot' ? styles.roleTitleActive : styles.roleTitle}>Pilot</div>
            <div className={styles.roleSubtitle}>Flight Control</div>
          </div>
        </button>
        <button 
          className={selectedRole === 'ems' ? styles.roleButtonActive : styles.roleButton}
          onClick={() => onRoleSelect('ems')}
        >
          <div className={selectedRole === 'ems' ? styles.roleIconActive : styles.roleIcon}>❤️</div>
          <div className={styles.roleInfo}>
            <div className={selectedRole === 'ems' ? styles.roleTitleActive : styles.roleTitle}>EMS</div>
            <div className={styles.roleSubtitle}>Medical Support</div>
          </div>
        </button>
      </div>
      {/* Critical Alert Banner */}
      {isAlertVisible && (
        <div
          className={`${alertStyles.alertBanner} ${
            isClosing ? alertStyles.alertBannerClosing : ""
          }`}
        >
          <div className={alertStyles.alertContent}>
            <span className={alertStyles.alertIcon}>⚠</span>
            <span className={alertStyles.alertText}>
              BATTERY CRITICAL - 18% REMAINING - RTB INITIATED - ETA BASE: 14:47
            </span>
          </div>
          <button
            className={alertStyles.closeButton}
            onClick={handleCloseAlert}
            aria-label="Close alert"
          >
            <span className={alertStyles.closeIcon}>×</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default RoleSelector;
