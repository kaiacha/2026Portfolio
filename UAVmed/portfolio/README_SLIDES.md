# LifeLine Project Slides - Quick Start

## 📁 What's Been Created

I've organized all your LifeLine (UAV) project slides into a structured format:

1. **`src/data/lifelineSlides.js`** - Contains all 13 slides with content, images, and metadata
2. **`INTEGRATION_GUIDE.md`** - Detailed guide for integrating into Next.js
3. **`FOLDER_STRUCTURE.md`** - Visual guide showing where everything goes

## 🎯 Quick Answer: "How can I put all in these folder?"

### Option 1: Keep Everything in Current Portfolio Folder
Your slides are already organized! The data file `src/data/lifelineSlides.js` contains everything. Just use it:

```jsx
// In portfolio/src/App.jsx
import { lifelineSlides } from './data/lifelineSlides'

function App() {
  return (
    <div className="app-container">
      <CaseStudySlider slides={lifelineSlides} />
    </div>
  )
}
```

### Option 2: Move to Next.js Portfolio
Follow these steps:

1. **Copy images** → `your-nextjs-portfolio/public/images/lifeline/`
2. **Copy component** → `your-nextjs-portfolio/components/projects/CaseStudySlider.tsx`
3. **Copy data file** → `your-nextjs-portfolio/data/projects/lifelineSlides.ts`
4. **Update image paths** in the data file to use `/images/lifeline/` instead of relative imports
5. **Update LifeLine page** to import and use the slides

See `INTEGRATION_GUIDE.md` for detailed instructions.

## 📊 Slide Structure

Your slides are organized as an array with 13 slides:

1. Dashboard Live (interactive dashboard)
2. Project Overview
3. Project Details
4. Context & Mission Need
5. Role Analysis
6. Human Systems Engineering Principles
7. Navigator Dashboard Design
8. Pilot Dashboard Design
9. EMS Dashboard Design
10. Pilot Controller Design
11. Navigator Controller Design
12. EMS Controller Design
13. Workspace Design
14. Validation Improvement #1
15. Validation Improvement #2
16. Outcomes & Reflection

## 🔧 Next Steps

1. **If staying in current portfolio:** Update `App.jsx` to import from `data/lifelineSlides.js`
2. **If moving to Next.js:** Follow `INTEGRATION_GUIDE.md`
3. **Review slides:** Check `src/data/lifelineSlides.js` to see all content

## 📝 Notes

- All images are referenced in the data file
- Dashboard components are commented out (uncomment when ready)
- Image paths need updating for Next.js (use `/images/lifeline/` format)
- Component requires `framer-motion` and `lucide-react` dependencies

Need help? Check `INTEGRATION_GUIDE.md` for detailed instructions!
