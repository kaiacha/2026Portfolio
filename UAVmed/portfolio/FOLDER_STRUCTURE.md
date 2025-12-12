# LifeLine Slides - Folder Organization Guide

## Current Structure (in `/Users/endless/UAVmed/portfolio/`)

```
portfolio/
├── src/
│   ├── App.jsx                    # Contains slides array
│   ├── components/
│   │   └── CaseStudySlider.jsx    # Slider component
│   ├── dashboards/                # Dashboard components (optional)
│   │   ├── NavigatorDashboard.jsx
│   │   ├── PilotDashboard.jsx
│   │   └── EMSDashboard.jsx
│   ├── images/                     # All project images
│   │   ├── emergency.png
│   │   ├── (updated) Wireframe - Navigator.png
│   │   ├── (updated) Wireframe - pilot.png
│   │   ├── (updated) Wireframe - EMS.png
│   │   ├── controller.png
│   │   ├── doublemonitor.png
│   │   ├── Pilot Controller.png
│   │   ├── 2.png
│   │   ├── 3.png
│   │   ├── 5.png
│   │   ├── chair_annotation.png
│   │   ├── before-alart.png
│   │   ├── after-alart.png
│   │   ├── before-livecamera.png
│   │   └── after-livecamera.png
│   └── data/
│       └── lifelineSlides.js       # ✨ NEW: Extracted slides data
└── INTEGRATION_GUIDE.md           # ✨ NEW: Integration instructions
```

## Target Structure (for Next.js Portfolio)

```
your-nextjs-portfolio/
├── app/
│   └── LifeLine/
│       └── page.tsx                # Update this file
│
├── components/
│   └── projects/
│       ├── CaseStudySlider.tsx    # Copy from portfolio/src/components/
│       └── lifeline/               # Optional: dashboard components
│           └── dashboards/
│
├── public/
│   └── images/
│       └── lifeline/              # Copy all images here
│           ├── emergency.png
│           ├── wireframe-navigator.png
│           ├── wireframe-pilot.png
│           ├── wireframe-ems.png
│           ├── controller-pilot.png
│           ├── controller-navigator.png
│           ├── controller-ems.png
│           ├── workspace-1.png
│           ├── workspace-2.png
│           ├── workspace-3.png
│           ├── workspace-4.png
│           ├── before-alert.png
│           ├── after-alert.png
│           ├── before-livecamera.png
│           └── after-livecamera.png
│
└── data/
    └── projects/
        └── lifelineSlides.ts      # Copy from portfolio/src/data/
```

## What to Copy Where

### ✅ Step 1: Copy Images
**From:** `/Users/endless/UAVmed/portfolio/src/images/*.png`  
**To:** `your-nextjs-portfolio/public/images/lifeline/`

**Rename these files:**
- `(updated) Wireframe - Navigator.png` → `wireframe-navigator.png`
- `(updated) Wireframe - pilot.png` → `wireframe-pilot.png`
- `(updated) Wireframe - EMS.png` → `wireframe-ems.png`
- `controller.png` → `controller-pilot.png`
- `doublemonitor.png` → `controller-navigator.png`
- `Pilot Controller.png` → `controller-ems.png`
- `2.png` → `workspace-1.png`
- `3.png` → `workspace-2.png`
- `5.png` → `workspace-3.png`
- `chair_annotation.png` → `workspace-4.png`
- `before-alart.png` → `before-alert.png`
- `after-alart.png` → `after-alert.png`

### ✅ Step 2: Copy Component
**From:** `/Users/endless/UAVmed/portfolio/src/components/CaseStudySlider.jsx`  
**To:** `your-nextjs-portfolio/components/projects/CaseStudySlider.tsx`

**Changes needed:**
- Add `'use client'` directive at the top
- Convert to TypeScript (optional but recommended)
- Update imports if needed

### ✅ Step 3: Copy Slide Data
**From:** `/Users/endless/UAVmed/portfolio/src/data/lifelineSlides.js`  
**To:** `your-nextjs-portfolio/data/projects/lifelineSlides.ts`

**Changes needed:**
- Update image import paths to use `/images/lifeline/` instead of relative imports
- Convert to TypeScript
- Example: `import emergencyImage from "../images/emergency.png"` → `const emergencyImage = "/images/lifeline/emergency.png"`

### ✅ Step 4: Update LifeLine Page
**File:** `your-nextjs-portfolio/app/LifeLine/page.tsx`

Replace the placeholder content with:
```tsx
import CaseStudySlider from '@/components/projects/CaseStudySlider'
import { lifelineSlides } from '@/data/projects/lifelineSlides'
```

## Quick Reference: Image Path Mapping

| Original Path | New Path (Next.js) |
|--------------|-------------------|
| `./images/emergency.png` | `/images/lifeline/emergency.png` |
| `./images/(updated) Wireframe - Navigator.png` | `/images/lifeline/wireframe-navigator.png` |
| `./images/controller.png` | `/images/lifeline/controller-pilot.png` |
| `./images/doublemonitor.png` | `/images/lifeline/controller-navigator.png` |
| `./images/Pilot Controller.png` | `/images/lifeline/controller-ems.png` |
| `./images/2.png` | `/images/lifeline/workspace-1.png` |
| `./images/3.png` | `/images/lifeline/workspace-2.png` |
| `./images/5.png` | `/images/lifeline/workspace-3.png` |
| `./images/chair_annotation.png` | `/images/lifeline/workspace-4.png` |
| `./images/before-alart.png` | `/images/lifeline/before-alert.png` |
| `./images/after-alart.png` | `/images/lifeline/after-alert.png` |
| `./images/before-livecamera.png` | `/images/lifeline/before-livecamera.png` |
| `./images/after-livecamera.png` | `/images/lifeline/after-livecamera.png` |

## Summary

All your slides are now organized in:
- **Data file:** `portfolio/src/data/lifelineSlides.js` - Contains all slide content
- **Component:** `portfolio/src/components/CaseStudySlider.jsx` - Displays the slides
- **Images:** `portfolio/src/images/` - All project images

Follow the `INTEGRATION_GUIDE.md` for detailed steps on integrating into your Next.js portfolio!
