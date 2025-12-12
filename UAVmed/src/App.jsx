import React, { useState, useEffect } from "react";
import TopBar from "./components/TopBar";
import RoleSelector from "./components/RoleSelector";
import LeftPanel from "./components/LeftPanel";
import MainPanel from "./components/MainPanel";
import RightPanel from "./components/RightPanel";
import CameraFeed from "./components/CameraFeed";
import PilotMainPanel from "./components/PilotMainPanel";
import PilotRightPanel from "./components/PilotRightPanel";
import EMSLeftPanel from "./components/EMSLeftPanel";
import EMSMainPanel from "./components/EMSMainPanel";
import EMSRightPanel from "./components/EMSRightPanel";
import styles from "./App.module.css";

function App() {
  const [selectedRole, setSelectedRole] = useState("navigator"); // 'navigator', 'pilot', or 'ems'
  const [selectedRoute, setSelectedRoute] = useState("fastest"); // 'fastest' or 'safest'
  const [currentStage, setCurrentStage] = useState(3); // 0-5: Load, Confirmation 1, Confirmation 2, Delivered, In Use, Return

  // Shared position state for drone
  const [latitude, setLatitude] = useState(37.7849);
  const [longitude, setLongitude] = useState(122.4094);

  // Update position in real-time
  useEffect(() => {
    const interval = setInterval(() => {
      // Update position (small variations simulating movement)
      setLatitude((prev) => prev + (Math.random() - 0.5) * 0.0001);
      setLongitude((prev) => prev + (Math.random() - 0.5) * 0.0001);
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.dashboard}>
      <TopBar currentStage={currentStage} />
      <RoleSelector
        selectedRole={selectedRole}
        onRoleSelect={setSelectedRole}
      />
      <div className={styles.contentArea}>
        {selectedRole === "pilot" ? (
          <>
            <LeftPanel latitude={latitude} longitude={longitude} />
            <CameraFeed />
            <PilotMainPanel
              selectedRoute={selectedRoute}
              latitude={latitude}
              longitude={longitude}
            />
            <PilotRightPanel
              currentStage={currentStage}
              onStageChange={setCurrentStage}
            />
          </>
        ) : selectedRole === "ems" ? (
          <>
            <EMSLeftPanel />
            <CameraFeed />
            <EMSMainPanel />
            <EMSRightPanel
              currentStage={currentStage}
              onStageChange={setCurrentStage}
            />
          </>
        ) : (
          <>
            <LeftPanel latitude={latitude} longitude={longitude} />
            <CameraFeed />
            <MainPanel
              selectedRoute={selectedRoute}
              latitude={latitude}
              longitude={longitude}
            />
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
  );
}

export default App;
