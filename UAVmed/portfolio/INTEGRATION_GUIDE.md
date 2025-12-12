# LifeLine Slides Integration Guide

This guide explains how to integrate the LifeLine (UAV) project slides into your Next.js portfolio website.

## Folder Structure

Here's the recommended folder structure for organizing your slides:

```
your-nextjs-portfolio/
├── app/
│   └── LifeLine/
│       └── page.tsx          # Your LifeLine project page
├── components/
│   └── projects/
│       ├── CaseStudySlider.tsx    # Copy from portfolio/src/components/
│       └── lifeline/
│           └── ... (dashboard components if needed)
├── public/
│   └── images/
│       └── lifeline/         # All LifeLine project images
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
└── data/
    └── projects/
        └── lifelineSlides.ts  # Slide data (copy from portfolio/src/data/)
```

## Step-by-Step Integration

### 1. Copy Images to Next.js Public Folder

Copy all images from `/Users/endless/UAVmed/portfolio/src/images/` to your Next.js `public/images/lifeline/` folder.

**Image mapping:**
- `emergency.png` → `public/images/lifeline/emergency.png`
- `(updated) Wireframe - Navigator.png` → `public/images/lifeline/wireframe-navigator.png`
- `(updated) Wireframe - pilot.png` → `public/images/lifeline/wireframe-pilot.png`
- `(updated) Wireframe - EMS.png` → `public/images/lifeline/wireframe-ems.png`
- `controller.png` → `public/images/lifeline/controller-pilot.png`
- `doublemonitor.png` → `public/images/lifeline/controller-navigator.png`
- `Pilot Controller.png` → `public/images/lifeline/controller-ems.png`
- `2.png` → `public/images/lifeline/workspace-1.png`
- `3.png` → `public/images/lifeline/workspace-2.png`
- `5.png` → `public/images/lifeline/workspace-3.png`
- `chair_annotation.png` → `public/images/lifeline/workspace-4.png`
- `before-alart.png` → `public/images/lifeline/before-alert.png`
- `after-alart.png` → `public/images/lifeline/after-alert.png`
- `before-livecamera.png` → `public/images/lifeline/before-livecamera.png`
- `after-livecamera.png` → `public/images/lifeline/after-livecamera.png`

### 2. Copy CaseStudySlider Component

Copy `CaseStudySlider.jsx` from `/Users/endless/UAVmed/portfolio/src/components/CaseStudySlider.jsx` to your Next.js components folder and convert it to TypeScript if needed:

```bash
# In your Next.js portfolio repo
cp /Users/endless/UAVmed/portfolio/src/components/CaseStudySlider.jsx components/projects/CaseStudySlider.tsx
```

**Note:** You may need to:
- Convert to TypeScript (.tsx)
- Update imports for Next.js Image component if using it
- Install required dependencies: `framer-motion`, `lucide-react`

### 3. Create Slide Data File

Copy `lifelineSlides.js` to your Next.js data folder and update image paths:

```typescript
// data/projects/lifelineSlides.ts
import Image from 'next/image';

// Update image imports to use Next.js public folder paths
const emergencyImage = '/images/lifeline/emergency.png';
const wireframeNavigator = '/images/lifeline/wireframe-navigator.png';
// ... etc

export const lifelineSlides = [
  // ... slide data with updated image paths
];
```

### 4. Update LifeLine Page

Update your `app/LifeLine/page.tsx` to use the slides:

```tsx
import type { Metadata } from 'next'
import WindowPageLayout from '@/components/WindowPageLayout'
import CaseStudySlider from '@/components/projects/CaseStudySlider'
import { lifelineSlides } from '@/data/projects/lifelineSlides'

export const metadata: Metadata = {
  title: 'LifeLine | Mikyo Kaia Cha',
  description: 'LifeLine campus companion experience crafted by Mikyo Kaia Cha.'
}

export default function LifeLinePage() {
  return (
    <WindowPageLayout title="LifeLine" currentPage="projects" fullScreen enableFinderModals>
      <CaseStudySlider slides={lifelineSlides} />
    </WindowPageLayout>
  )
}
```

### 5. Install Dependencies

Make sure you have the required dependencies:

```bash
npm install framer-motion lucide-react
# or
yarn add framer-motion lucide-react
```

### 6. Copy Dashboard Components (Optional)

If you want to use the interactive dashboard components, copy the entire `dashboards` folder:

```bash
# Copy dashboard components
cp -r /Users/endless/UAVmed/portfolio/src/dashboards components/projects/lifeline/dashboards

# Copy dashboard styles
cp /Users/endless/UAVmed/portfolio/src/dashboard-styles.css components/projects/lifeline/
```

Then update the slide data file to import and use these components.

## Next.js Specific Considerations

### Image Optimization

For better performance, consider using Next.js Image component:

```tsx
import Image from 'next/image';

// In your slide data or component
<Image 
  src="/images/lifeline/emergency.png" 
  alt="Emergency medical responders"
  width={800}
  height={600}
/>
```

### Client Components

Since `CaseStudySlider` uses hooks and animations, make sure it's a client component:

```tsx
'use client';

import { useState, useEffect } from 'react';
// ... rest of component
```

### Styling

The component uses Tailwind CSS classes. Make sure your `tailwind.config.js` includes the necessary configuration:

```js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## Troubleshooting

### Images Not Loading
- Check that images are in `public/images/lifeline/`
- Verify image paths in `lifelineSlides.ts` match actual filenames
- Ensure Next.js can access the public folder

### Component Not Rendering
- Make sure `CaseStudySlider` is marked as `'use client'`
- Check browser console for errors
- Verify all dependencies are installed

### Styling Issues
- Ensure Tailwind CSS is properly configured
- Check that CSS classes match your Tailwind version
- Verify `globals.css` includes Tailwind directives

## Quick Copy Script

You can use this script to copy everything at once:

```bash
#!/bin/bash
# Copy images
mkdir -p public/images/lifeline
cp /Users/endless/UAVmed/portfolio/src/images/*.png public/images/lifeline/

# Copy component
cp /Users/endless/UAVmed/portfolio/src/components/CaseStudySlider.jsx components/projects/CaseStudySlider.tsx

# Copy data file
mkdir -p data/projects
cp /Users/endless/UAVmed/portfolio/src/data/lifelineSlides.js data/projects/lifelineSlides.ts
```

Remember to update image paths in the data file after copying!
