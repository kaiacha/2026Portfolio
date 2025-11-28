# Kaia OS Portfolio

A modern, OS-style portfolio website built with Next.js, React, and TypeScript.

## Features

- 🖥️ OS-style interface with desktop-like widgets
- 📱 Responsive design
- 🎨 Modern glassmorphism effects
- ⚡ Fast and optimized with Next.js
- 🎯 TypeScript for type safety

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
2026Portfolio/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── TopBar.tsx          # Top navigation bar
│   ├── Dock.tsx            # Bottom dock with app icons
│   ├── AppIcons.tsx        # App icon grid
│   └── widgets/
│       ├── CalendarWidget.tsx
│       ├── MapWidget.tsx
│       ├── ProfileWidget.tsx
│       └── VolunteeringWidget.tsx
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
```

## Customization

- Update widget content in respective component files
- Modify colors in `tailwind.config.js`
- Adjust styling in `app/globals.css`

## Build for Production

```bash
npm run build
npm start
```

## Deployment to GitHub Pages

This project is configured to deploy to GitHub Pages with the custom domain `www.kaiacha.com`.

### Setup Instructions

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - The workflow will automatically deploy on every push to `main`

3. **Configure Custom Domain:**
   - The `CNAME` file is already included in the `public/` folder
   - In GitHub Pages settings, add your custom domain: `www.kaiacha.com`
   - Configure DNS records with your domain provider:
     - **Type:** `CNAME`
     - **Name:** `www`
     - **Value:** `YOUR_USERNAME.github.io` (or your repository's GitHub Pages URL)
   - Wait for DNS propagation (can take up to 24 hours)
   - GitHub will automatically create an SSL certificate for your custom domain

4. **Verify Deployment:**
   - After the GitHub Action completes, your site will be live at `www.kaiacha.com`
   - Check the Actions tab in your repository to see deployment status

### Local Testing

To test the static export locally:

```bash
npm run build
npx serve out
```

This will serve the static files from the `out` directory, similar to how GitHub Pages will serve them.

