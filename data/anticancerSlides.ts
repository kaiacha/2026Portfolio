// Anticancer Project Slides Data
// This file contains all slide data for the Anticancer project case study
// Use this data with the CaseStudySlider component in your Next.js portfolio

export interface AnticancerSlide {
  id: string
  layout?: 'centered' | 'split' | 'dashboard-full' | 'image-full'
  tag?: string
  title?: string
  body?: string
  image?: string
  imageAlt?: string
  images?: string[]
  imageAlts?: string[]
  beforeAfterImages?: {
    before: string
    after: string
    beforeAlt?: string
    afterAlt?: string
    beforeText?: string
    afterText?: string
  }
  component?: React.ComponentType
  buttons?: Array<{
    label: string
    href: string
    external?: boolean
  }>
  hasImagePlaceholder?: boolean
  imagePlaceholderText?: string
  imageSize?: 'normal' | 'medium' | 'large'
}

export const anticancerSlides: AnticancerSlide[] = [
  {
    id: 'dashboard-showcase',
    layout: 'image-full',
    image: '/src/Detail/Dashboard.png',
    imageAlt: 'Anticancer dashboard overview',
  },
  {
    id: 'narrative-hero',
    tag: 'Medical Dashboard',
    title: 'Anticancer',
    layout: 'split',
    body: `
      <div class="space-y-4">
        <p class="text-sm leading-relaxed">
          Anticancer is an AI-powered dashboard for cancer treatment prediction, analyzing patient data to
          estimate cure rates and treatment duration.
        </p>
        <div class="flex flex-wrap gap-2">
          <span class="rounded-full border border-black/25 px-4 py-1 text-xs font-medium">Dashboard</span>
          <span class="rounded-full border border-black/25 px-4 py-1 text-xs font-medium">Medical</span>
          <span class="rounded-full border border-black/25 px-4 py-1 text-xs font-medium">Data Analysis</span>
          <span class="rounded-full border border-black/25 px-4 py-1 text-xs font-medium">Cancer</span>
          <span class="rounded-full border border-black/25 px-4 py-1 text-xs font-medium">AI-powered</span>
          <span class="rounded-full border border-black/25 px-4 py-1 text-xs font-medium">Treatment</span>
        </div>
      </div>
    `,
    image: '/src/Detail/mockup1.png',
    imageAlt: 'Anticancer dashboard mockups',
  },
  {
    id: 'overview',
    tag: 'Overview',
    title: 'Smarter Connections, Better Care!',
    layout: 'centered',
    body: `
      <div class="space-y-4">
        <div>
          <h3 class="text-lg font-semibold mb-2">Summary</h3>
          <p class="text-sm leading-relaxed mb-3">
            Anticancer is an AI-powered dashboard that predicts cancer patients' cure rates and treatment
            duration using big data. This project won the Grand Prize at the 'AI & Data Mining for Cancer Big
            Data Competition' hosted by the National Cancer Center of Korea.
          </p>
          <p class="text-sm leading-relaxed">
            As the team leader of a three-member team, I was responsible for data analysis, AI model
            development, and UI/UX dashboard design. To improve accuracy, we focused on handling missing values
            and enhancing UX visualization, ensuring usability for both medical professionals and patients.
          </p>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-6">
          <div class="rounded-lg border bg-white/70 p-4">
            <p class="text-sm font-semibold text-blue-600">My Role</p>
            <p class="text-sm font-semibold">All-Rounder</p>
            <ul class="mt-2 text-xs space-y-1">
              <li>Dashboard Design</li>
              <li>Data Analysis (SQL)</li>
              <li>AI development (python)</li>
            </ul>
          </div>
          <div class="rounded-lg border bg-white/70 p-4">
            <p class="text-sm font-semibold text-blue-600">Team</p>
            <p class="text-sm font-semibold">3 members</p>
            <ul class="mt-2 text-xs space-y-1">
              <li>3 developers of the ICT Convergence Department</li>
            </ul>
          </div>
          <div class="rounded-lg border bg-white/70 p-4">
            <p class="text-sm font-semibold text-blue-600">Timeline</p>
            <p class="text-sm font-semibold">6-month Project</p>
            <ul class="mt-2 text-xs space-y-1">
              <li>Jun 30, 2021 → Dec 1, 2021</li>
            </ul>
          </div>
          <div class="rounded-lg border bg-white/70 p-4">
            <p class="text-sm font-semibold text-blue-600">Tools</p>
            <p class="text-sm font-semibold">Figma</p>
            <ul class="mt-2 text-xs space-y-1">
              <li>Jira</li>
              <li>Notion</li>
              <li>VSCode</li>
              <li>Google Colab</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  },
  // Note: Additional slides would need to be added here based on the original page content
  // For now, this provides the basic structure. You can expand this file with all 17+ slides
  // converted from the original anticancer page sections.
]
