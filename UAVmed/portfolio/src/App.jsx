import React from "react";
import CaseStudySlider from "./components/CaseStudySlider";
import NavigatorDashboard from "./dashboards/NavigatorDashboard";
import PilotDashboard from "./dashboards/PilotDashboard";
import EMSDashboard from "./dashboards/EMSDashboard";
import { lifelineSlides } from "./data/lifelineSlides";

function App() {
  // Import dashboard components and add them to slides
  const slides = lifelineSlides.map((slide) => {
    // Add dashboard components where needed
    if (slide.id === "dashboard-live") {
      return { ...slide, component: NavigatorDashboard };
    }
    if (slide.id === "dashboard-navigator") {
      return { ...slide, component: NavigatorDashboard };
    }
    if (slide.id === "dashboard-pilot") {
      return { ...slide, component: PilotDashboard };
    }
    if (slide.id === "dashboard-ems") {
      return { ...slide, component: EMSDashboard };
    }
    return slide;
  });

  return (
    <div className="app-container">
      <CaseStudySlider slides={slides} />
    </div>
  );
}

export default App;
