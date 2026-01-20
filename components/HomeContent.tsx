'use client'

import { useCallback, useEffect, useState, useMemo, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ChevronDown, Users, Lightbulb, Pencil, FileText, Layout, CheckCircle2 } from 'lucide-react'
import TopBar from '@/components/TopBar'
import Dock from '@/components/Dock'
import ProfileWidget from '@/components/widgets/ProfileWidget'
import { ProjectModal } from '@/components/widgets/ProjectModal'
import { AppIconWidget } from '@/components/widgets/AppIconWidget'
import ProjectsWindow from '@/components/ProjectsWindow'
import VolunteeringWindow from '@/components/VolunteeringWindow'
import koddizThumbnail from '@/src/KoddizImage/koddizmain1.png'
import asuLogo from '@/src/assets/ASULogoY.png'
import asuHoverLogo from '@/src/assets/ASULogo.png'
import naverCloudLogo from '@/src/assets/NaverCloud.png'
import vscodeLogo from '@/src/assets/VScodeLogo.png'
import figmaLogo from '@/src/assets/FigmaLogo.png'

// Static data - moved outside component to prevent recreation on every render
const BASE_PROJECTS = [
  {
    title: 'LifeLine',
    subtitle: 'Emergency Medical Services',
    description:
      'A portfolio project showcasing an emergency medical services dashboard system. Features real-time data visualization and multi-role interfaces for pilots, navigators, and EMS personnel.',
    metrics: [
      { label: 'Roles', value: '3' },
      { label: 'Dashboards', value: '4' },
      { label: 'Real-time', value: 'Yes' },
    ],
    tags: ['Dashboard', 'Medical', 'Data Analysis'],
    image: '/images/PilotDashboard.png',
    position: { x: -380, y: 0, rotate: 0 },
    zIndex: 1,
    href: '/LifeLine',
  },
  {
    title: 'Anticancer',
    subtitle: 'Healthcare & Medical',
    description:
      'A UX design case study for a medical application focused on cancer patient care. Explores user-centered design approaches for healthcare technology.',
    metrics: [
      { label: 'Award', value: 'Grand Prize' },
      { label: 'Focus', value: 'Cancer Care' },
      { label: 'AI-powered', value: 'Yes' },
    ],
    tags: ['Medical', 'Cancer', 'Treatment', 'AI-powered'],
    image: '/images/anticancer/Dashboard.png',
    position: { x: 0, y: 30, rotate: 0 },
    zIndex: 2,
    href: '/anticancer',
  },
  {
    title: 'Koddiz',
    subtitle: 'Social Networking & Meetups',
    description:
      'A mobile app concept that helps people meet through interest-based events and local experiences. Designed to support discovery and RSVP coordination.',
    metrics: [
      { label: 'Platform', value: 'Mobile App' },
      { label: 'Focus', value: 'Meetups' },
      { label: 'Prototype', value: 'Figma' },
    ],
    tags: ['Networking', 'Meetups', 'Travel', 'Community'],
    image: koddizThumbnail,
    position: { x: 430, y: 60, rotate: 0 },
    zIndex: 3,
    href: '/koddiz',
  },
]

export default function HomeContent() {
  const router = useRouter()
  const [isProjectsOpen, setIsProjectsOpen] = useState(false)
  const [isVolunteeringOpen, setIsVolunteeringOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [viewportWidth, setViewportWidth] = useState<number>(0)
  const [viewportHeight, setViewportHeight] = useState<number>(0)
  const [scrollRange, setScrollRange] = useState<number>(0)

  const openProjects = useCallback(() => setIsProjectsOpen(true), [])
  const closeProjects = useCallback(() => setIsProjectsOpen(false), [])
  const openVolunteering = useCallback(() => setIsVolunteeringOpen(true), [])
  const closeVolunteering = useCallback(() => setIsVolunteeringOpen(false), [])

  // Track scroll position with requestAnimationFrame for better performance
  useEffect(() => {
    let rafId: number | null = null
    const handleScroll = () => {
      if (rafId === null) {
        rafId = window.requestAnimationFrame(() => {
          const scroll = window.scrollY || document.documentElement.scrollTop || 0
          setScrollY(scroll)
          rafId = null
        })
      }
    }

    // Set initial scroll position
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId)
      }
    }
  }, [])

  // Track viewport width, height, and scrollable range for responsive project layout
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth || 0
      const h = window.innerHeight || 0
      setViewportWidth(w)
      setViewportHeight(h)

      // Use the actual available page scroll distance as the animation range
      const doc = document.documentElement
      const maxScrollable = Math.max(0, (doc?.scrollHeight || 0) - h)
      setScrollRange(maxScrollable)
    }

    handleResize()
    window.addEventListener('resize', handleResize, { passive: true })
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (isProjectsOpen || isVolunteeringOpen) {
      const originalOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = originalOverflow
      }
    }
  }, [isProjectsOpen, isVolunteeringOpen])

  // Responsive layout for desktop project modals
  // Goal: keep all 3 modals fully visible within the viewport by reducing x offsets and scaling down slightly on smaller screens.
  const safeViewportW = viewportWidth || 1440

  // Scale factor for x/y offsets (shrinks spacing as viewport gets narrower)
  // 1440px -> 1.0, 1024px -> ~0.85, 820px -> ~0.8 (clamped)
  const positionScale = Math.min(1, Math.max(0.8, (safeViewportW - 200) / 1240))

  // Scale factor for the whole modal group (shrinks card size a bit on narrow screens)
  // 1440px -> 1.0, 1200px -> ~0.92, 1024px -> ~0.85 (clamped)
  const groupScale = Math.min(1, Math.max(0.98, safeViewportW / 1440))

  // Memoize projects array to prevent recreation on every render
  const projects = useMemo(() => {
    return BASE_PROJECTS.map((p) => ({
      ...p,
      position: {
        ...p.position,
        x: p.position.x * positionScale,
        y: p.position.y * positionScale,
      },
    }))
  }, [positionScale])

  // Memoize app arrays to prevent recreation on every render
  const workApps = useMemo(() => [
    {
      emoji: '🚚',
      label: 'NGL Transportation',
      category: 'IT Support Intern',
      gradient: 'bg-gradient-to-br from-blue-200 to-blue-300',
    },
    {
      image: naverCloudLogo,
      label: 'Naver Cloud',
      category: 'Platform Planning Intern',
      gradient: 'bg-gradient-to-br from-purple-200 to-purple-300',
      hoverAnimation: 'collision' as const,
      imageSize: 'large' as const,
    },
    {
      image: asuLogo,
      hoverImage: asuHoverLogo,
      label: 'ASU',
      category: 'HiMER Lab',
      gradient: 'bg-gradient-to-br from-indigo-200 to-indigo-300',
      imageSize: 'large' as const,
    },
  ], [])

  const skillApps = useMemo(() => [
    {
      icon: Users,
      hoverIcon: FileText,
      label: 'User Research',
      category: 'Expert',
      gradient: 'bg-gradient-to-br from-pink-200 to-rose-300',
    },
    {
      icon: Pencil,
      hoverIcon: Layout,
      label: 'UI Design',
      category: 'Expert',
      gradient: 'bg-gradient-to-br from-orange-200 to-red-300',
    },
    {
      icon: Lightbulb,
      hoverIcon: CheckCircle2,
      label: 'UX Strategy',
      category: 'Advanced',
      gradient: 'bg-gradient-to-br from-yellow-200 to-orange-300',
    },
  ], [])

  const toolApps = useMemo(() => [
    {
      image: figmaLogo,
      label: 'Figma',
      category: 'Design',
      gradient: 'bg-gradient-to-br from-purple-200 to-pink-300',
      hoverAnimation: 'spin' as const,
    },
    {
      image: vscodeLogo,
      label: 'VS Code',
      category: 'Dev',
      gradient: 'bg-gradient-to-br from-blue-200 to-indigo-300',
      hoverAnimation: 'spin' as const,
    },
    {
      text: 'Ai',
      label: 'Illustrator',
      category: 'Design',
      gradient: 'bg-gradient-to-br from-orange-200 to-yellow-300',
    },
  ], [])

  // Memoize expensive scroll calculations to prevent recalculation on every render
  const { scrollProgress, cardBottom } = useMemo(() => {
    const maxScroll = Math.max(1, scrollRange || 1800)
    const initialBottom = -350 // Initial position (partially hidden)
    const modalGroupHeight = 600
    const targetTop = 60 // px from the top of the viewport (tweak as needed)
    const computedTopAlignedBottom = Math.round((viewportHeight || 900) - (targetTop + modalGroupHeight))
    const finalBottom = Math.min(360, Math.max(24, computedTopAlignedBottom))
    
    // Clamp scroll progress between 0 and 1 with easing
    const rawProgress = Math.min(Math.max(scrollY / maxScroll, 0), 1)
    // Apply easing function for smoother animation
    const progress = rawProgress < 0.5
      ? 2 * rawProgress * rawProgress
      : 1 - Math.pow(-2 * rawProgress + 2, 2) / 2
    
    // Interpolate bottom position
    const bottom = initialBottom + (finalBottom - initialBottom) * progress
    
    return { scrollProgress: progress, cardBottom: bottom }
  }, [scrollY, scrollRange, viewportHeight])

  return (
    <>
      <div className="min-h-[260vh] relative w-full">
        {/* Background Image */}
        <div
          className="fixed inset-0 w-full h-full z-0"
          style={{
            backgroundImage: 'url(/images/background-blue.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />

        {/* Top Bar */}
        <TopBar />

        {/* Main Content */}
        <div className="relative z-10 flex flex-col">
          {/* Top Section */}
          <div className="px-6 pt-16 pb-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 max-w-6xl mx-auto items-start">
              {/* Left Side - Profile Widget */}
              <div className="flex flex-col gap-4">
                <ProfileWidget />
                {/* Featured Projects Section - Desktop only */}
                <motion.div 
                  className='pt-[8rem] hidden md:block'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
                >
                  <div className="flex items-start gap-8">
                    <div className="flex-0">
                      <motion.h2 
                        className="text-white text-lg md:text-xl font-bold mb-1 drop-shadow-md"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
                      >
                        Featured Projects
                      </motion.h2>
                      <motion.p 
                        className="text-white/80 text-xs md:text-sm drop-shadow-md"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
                      >
                        Scroll to explore & click to view details
                      </motion.p>
                    </div>
                    {/* Scroll hint - next to Featured Projects */}
                    {scrollY < 100 && (
                      <motion.div
                        className="flex flex-col mt-1 items-center gap-1 text-white/80 flex-shrink-0 pt-1"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ 
                          opacity: 1, 
                          scale: 1,
                          y: [0, 6, 0] 
                        }}
                        transition={{ 
                          opacity: { duration: 0.4, delay: 0.6 },
                          scale: { duration: 0.4, delay: 0.6 },
                          y: { duration: 1.5, repeat: Infinity, delay: 0.8 }
                        }}
                      >
                        <span className="text-[10px] uppercase tracking-wider">Scroll</span>
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </div>

              {/* Right Side - Apps Grid */}
              <div className="space-y-3 flex flex-col">
                {/* Work Experience Section */}
                <div className=' pb-2'>
                  <motion.h3 
                    className="text-white underline text-xs font-semibold mb-2 drop-shadow-md "
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, type: 'spring', stiffness: 200, damping: 20 }}
                  >
                    Working Experience
                  </motion.h3>
                  <div className="grid grid-cols-3 gap-3">
                    {workApps.map((app, index) => (
                      <AppIconWidget key={index} {...app} delay={0.1 + index * 0.05} />
                    ))}
                  </div>
                </div>

                {/* Skills Section */}
                <div className=' pb-2'>
                  <motion.h3 
                    className="text-white underline text-xs font-semibold mb-2 drop-shadow-md"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, type: 'spring', stiffness: 200, damping: 20 }}
                  >
                    Core Skills
                  </motion.h3>
                  <div className="grid grid-cols-3 gap-3">
                    {skillApps.map((app, index) => (
                      <AppIconWidget key={index} {...app} delay={0.3 + index * 0.05} />
                    ))}
                  </div>
                </div>

                {/* Tools Section */}
                <div className='pb-2'>
                  <motion.h3 
                    className="text-white underline text-xs font-semibold mb-2 drop-shadow-md "
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, type: 'spring', stiffness: 200, damping: 20 }}
                  >
                    Tools
                  </motion.h3>
                  <div className="grid grid-cols-3 gap-3">
                    {toolApps.map((app, index) => (
                      <AppIconWidget key={index} {...app} delay={0.5 + index * 0.05} />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Featured Projects Section - Mobile only (below app grid) */}
              <motion.div 
                className='pt-8 md:hidden w-full'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
              >
                <div className="flex items-start gap-8">
                  <div className="flex-0">
                    <motion.h2 
                      className="text-white text-lg md:text-xl font-bold mb-1 drop-shadow-md"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
                    >
                      Featured Projects
                    </motion.h2>
                    <motion.p 
                      className="text-white/80 text-xs md:text-sm drop-shadow-md"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
                    >
                      Scroll to explore & click to view details
                    </motion.p>
                  </div>
                  {/* Scroll hint - next to Featured Projects */}
                  {scrollY < 100 && (
                    <motion.div
                      className="flex flex-col mt-1 items-center gap-1 text-white/80 flex-shrink-0 pt-1"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1,
                        y: [0, 6, 0] 
                      }}
                      transition={{ 
                        opacity: { duration: 0.4, delay: 0.6 },
                        scale: { duration: 0.4, delay: 0.6 },
                        y: { duration: 1.5, repeat: Infinity, delay: 0.8 }
                      }}
                    >
                      <span className="text-[10px] uppercase tracking-wider">Scroll</span>
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </div>
            
            {/* Mobile Project Modals - In normal flow below Featured Projects */}
            <div className="md:hidden px-4 pb-8 mt-8">
              {projects.map((project, index) => {
                // Calculate scroll-based reveal for each card
                const headerHeight = 50 // Header height (visible when collapsed)
                const cardHeight = 600 // Full card height
                const scrollRange = 1200 // Scroll range for unfolding (slower animation)
                
                // Calculate scroll start position
                // Each card starts revealing when previous card is halfway through
                // Card 0: starts at 0, fully unfolds at 1200, halfway at 600
                // Card 1: starts at 600 (halfway through card 0), fully unfolds at 1800, halfway at 1200
                // Card 2: starts at 1200 (halfway through card 1), fully unfolds at 2400
                const scrollStart = index * (scrollRange / 2)
                const rawProgress = Math.max(0, Math.min(1, (scrollY - scrollStart) / scrollRange))
                // Apply easing for smoother, more interactive animation
                const scrollProgress = rawProgress < 0.5 
                  ? 2 * rawProgress * rawProgress 
                  : 1 - Math.pow(-2 * rawProgress + 2, 2) / 2
                
                // Calculate height - cards unfold from header only to full height
                const height = headerHeight + (cardHeight - headerHeight) * scrollProgress
                
                return (
                  <motion.div
                    key={index}
                    className="mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: scrollProgress > 0.1 ? 1 : 0.6 + scrollProgress * 0.4,
                      y: (1 - scrollProgress) * 10, // Subtle upward movement as it unfolds
                      scale: 0.95 + scrollProgress * 0.05, // Slight scale increase
                    }}
                    transition={{
                      duration: 0.7,
                      ease: [0.4, 0, 0.2, 1], // Custom cubic-bezier for smoother animation
                    }}
                  >
                    <ProjectModal
                      {...project}
                      position={{ x: 0, y: 0, rotate: 0 }}
                      zIndex={projects.length - index}
                      delay={0.1 + index * 0.1}
                      isCollapsed={scrollProgress < 0.1}
                      collapsedHeight={height}
                    />
                  </motion.div>
                )
              })}
            </div>
          </div>

        </div>

        {/* Project Modals - Fixed positioning outside main content to prevent clipping */}
        {/* Layer hierarchy: Main Content (z-10) < Project Modals (z-30) < Dock (z-50) */}
        <div className="fixed inset-0 z-30 pointer-events-none overflow-visible">
          <motion.div
            className="absolute px-6 left-1/2 w-full h-[600px] hidden md:block pointer-events-auto overflow-visible"
            style={{ transform: `translateX(-50%) scale(${groupScale})`, transformOrigin: 'center bottom' }}
            animate={{
              bottom: cardBottom,
            }}
            transition={{
              type: 'spring',
              stiffness: 50,
              damping: 28,
              mass: 1.4,
            }}
          >
            {projects.map((project, index) => (
              <ProjectModal key={index} {...project} delay={0.1 + index * 0.15} />
            ))}
          </motion.div>
        </div>

        {/* Dock */}
        <Dock onFolderClick={openVolunteering} />
      </div>

      {/* Modals */}
      <ProjectsWindow isOpen={isProjectsOpen} onClose={closeProjects} />
      <VolunteeringWindow isOpen={isVolunteeringOpen} onClose={closeVolunteering} />
    </>
  )
}

