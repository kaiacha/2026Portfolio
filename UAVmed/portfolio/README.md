# Emergency Medical Drone System - Portfolio Case Study

A scroll-based storytelling portfolio page showcasing the Emergency Medical Drone System project.

## Features

- **Scroll-based navigation**: Full-height slides with smooth transitions
- **Fade/slide-in animations**: Powered by Framer Motion
- **Responsive design**: Works on desktop and mobile
- **Keyboard navigation**: Arrow keys to navigate
- **Slide indicators**: Visual navigation dots on the right

## Tech Stack

- React
- Tailwind CSS
- Framer Motion
- Vite

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   └── CaseStudySlider.jsx  # Reusable slider component
│   ├── App.jsx                   # Main app with slides data
│   ├── main.jsx                  # Entry point
│   └── index.css                 # Global styles
├── index.html
└── package.json
```

## Adding Images

Replace the placeholder image areas by:
1. Adding images to `public/` folder
2. Updating the `image` property in the slides array in `App.jsx`
3. Or use `hasImagePlaceholder: true` to show placeholders

## Customization

- **Slides**: Edit the `slides` array in `App.jsx`
- **Styling**: Modify Tailwind classes in components
- **Animations**: Adjust Framer Motion variants in `CaseStudySlider.jsx`

