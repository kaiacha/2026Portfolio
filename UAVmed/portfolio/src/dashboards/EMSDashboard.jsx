import React, { useState, useEffect } from "react";
import TopBar from "./TopBar";
import RoleSelector from "./RoleSelector";
import LeftPanel from "./LeftPanel";
import MainPanel from "./MainPanel";
import RightPanel from "./RightPanel";
import CameraFeed from "./CameraFeed";
import PilotMainPanel from "./PilotMainPanel";
import PilotRightPanel from "./PilotRightPanel";
import EMSLeftPanel from "./EMSLeftPanel";
import EMSMainPanel from "./EMSMainPanel";
import EMSRightPanel from "./EMSRightPanel";
import AppStyles from "./App.module.css";

function EMSDashboard() {
  const [selectedRole, setSelectedRole] = useState("ems"); // Start with ems
  const [selectedRoute, setSelectedRoute] = useState("fastest");
  const [currentStage, setCurrentStage] = useState(3);
  const [latitude, setLatitude] = useState(37.7849);
  const [longitude, setLongitude] = useState(122.4094);

  useEffect(() => {
    const interval = setInterval(() => {
      setLatitude((prev) => prev + (Math.random() - 0.5) * 0.0001);
      setLongitude((prev) => prev + (Math.random() - 0.5) * 0.0001);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={AppStyles.dashboard}
      style={{ height: "100%", width: "100%" }}
    >
      <TopBar currentStage={currentStage} />
      <RoleSelector
        selectedRole={selectedRole}
        onRoleSelect={setSelectedRole}
      />
      <div className={AppStyles.contentArea}>
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

export default EMSDashboard;
