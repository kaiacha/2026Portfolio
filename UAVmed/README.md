# Emergency Medical Drone Dashboard

A React web application for monitoring and controlling emergency medical drone operations.

## Features

- **Real-time Dashboard**: Monitor drone status, position, altitude, and speed
- **Live Navigation**: Interactive map with route planning and tracking
- **Camera Feed**: Live video feed from the drone
- **Payload Management**: Track payload delivery status and mission progress
- **Route Selection**: Choose between fastest and safest routes
- **Flight Controls**: Switch between AUTO and MANUAL flight modes

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
UAVmed/
├── src/
│   ├── components/
│   │   ├── TopBar.jsx          # Top navigation and status bar
│   │   ├── RoleSelector.jsx    # Role selection (Navigator/Pilot/EMS)
│   │   ├── LeftPanel.jsx       # Metrics and radar display
│   │   ├── MainPanel.jsx       # Map and camera feed
│   │   └── RightPanel.jsx      # Routes and payload status
│   ├── styles/
│   │   └── index.css          # Global styles
│   ├── App.jsx                # Main app component
│   └── main.jsx               # Entry point
├── index.html
├── package.json
└── vite.config.js
```

## Styling

All components use CSS Modules with clear, simple classnames for easy customization. Each component has its own `.module.css` file that you can edit directly.

### Example Classnames:
- `.topBar` - Top navigation bar
- `.alertBanner` - Critical alert banner
- `.missionStages` - Mission stage buttons
- `.statusIndicators` - Status badges
- `.leftPanel` - Left sidebar
- `.mainPanel` - Main content area
- `.rightPanel` - Right sidebar

## Technologies Used

- React 18
- Vite
- CSS Modules

## License

MIT

