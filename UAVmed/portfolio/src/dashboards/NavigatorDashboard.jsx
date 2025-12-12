import React, { useState, useEffect } from "react";
import UnifiedDashboard from "./UnifiedDashboard";

// This is a wrapper that ensures the dashboard starts in Navigator mode
// The RoleSelector will still allow switching to other roles
function NavigatorDashboard() {
  return <UnifiedDashboard />;
}

export default NavigatorDashboard;
