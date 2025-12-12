import React from "react";
import styles from "./CameraFeed.module.css";
import liveCameraFeedVideo from "/images/LiveCameraFeed.mp4";

function CameraFeed() {
  return (
    <div className={styles.cameraFeedContainer}>
      <div className={styles.cameraHeader}>
        <div className={styles.cameraHeaderLeft}>
          <div className={styles.cameraIcon}>📹</div>
          <div className={styles.cameraInfo}>
            <div className={styles.cameraTitleRow}>
              <span className={styles.cameraTitle}>Live Camera Feed</span>
              <div className={styles.recordingBadge}>
                <div className={styles.recordingDot}></div>
                <span>REC</span>
              </div>
            </div>
            <div className={styles.cameraSpecs}>1920x1080 • 60fps • H.265</div>
          </div>
        </div>
        <button className={styles.fullscreenButton}>⛶</button>
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
  );
}

export default CameraFeed;
