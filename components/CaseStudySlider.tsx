'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

interface Slide {
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

interface CaseStudySliderProps {
  slides: Slide[]
}

// AnimatedSection component for scroll animations on mobile
const AnimatedSection = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.section
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] as const }}
    >
      {children}
    </motion.section>
  )
}

const DashboardContainer = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current && innerRef.current) {
        const containerWidth = containerRef.current.offsetWidth
        const scale = containerWidth / 1440
        innerRef.current.style.transform = `scale(${scale})`
      }
    }

    updateScale()
    window.addEventListener('resize', updateScale)
    return () => window.removeEventListener('resize', updateScale)
  }, [])

  return (
    <div
      ref={containerRef}
      className="rounded-xl overflow-hidden bg-slate-800 border border-slate-700 shadow-2xl"
      style={{
        width: '100%',
        aspectRatio: '1440 / 800',
        position: 'relative',
        maxHeight: '600px',
      }}
    >
      <div
        ref={innerRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '1440px',
          height: '800px',
          transformOrigin: 'top left',
        }}
      >
        {children}
      </div>
    </div>
  )
}

const ImageSlider = ({ images, imageAlts = [] }: { images: string[]; imageAlts?: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="rounded-xl overflow-hidden relative">
      <div className="relative w-full aspect-[4/2.5] overflow-hidden">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="w-full h-full absolute inset-0"
            initial={{ opacity: 0, x: index > currentIndex ? '100%' : '-100%' }}
            animate={{
              opacity: index === currentIndex ? 1 : 0,
              x: index === currentIndex ? '0%' : index > currentIndex ? '100%' : '-100%',
            }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <Image
              src={image}
              alt={imageAlts[index] || `Slide ${index + 1}`}
              fill
              className="object-contain"
            />
          </motion.div>
        ))}
      </div>

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-slate-900/80 hover:bg-slate-800 text-white p-2 rounded-full transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-slate-900/80 hover:bg-slate-800 text-white p-2 rounded-full transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-blue-400 w-6' : 'bg-slate-600 hover:bg-slate-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

const SlideContent = ({ slide, isActive, isMobile = false }: { slide: Slide; isActive: boolean; isMobile?: boolean }) => {
  const cubicBezierEase = [0.4, 0, 0.2, 1] as [number, number, number, number]
  
  const slideVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: cubicBezierEase,
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: cubicBezierEase },
    },
  }

  const layoutType = slide.layout || 'centered'
  const hasImage = slide.image || slide.images || slide.hasImagePlaceholder
  const hasComponent = slide.component

  if (layoutType === 'dashboard-full' && hasComponent) {
    const DashboardFullScreen = () => {
      const containerRef = useRef<HTMLDivElement>(null)
      const [scale, setScale] = useState(1)

      useEffect(() => {
        const updateScale = () => {
          if (containerRef.current && !isMobile) {
            const containerWidth = window.innerWidth
            const containerHeight = window.innerHeight
            
            // Calculate scale based on width to maintain aspect ratio
            const scaleX = containerWidth / 1440
            
            // Check if scaled height fits within viewport
            const scaledHeight = 800 * scaleX
            const scaleY = containerHeight / 800
            
            // Use the smaller scale to ensure it fits, maintaining aspect ratio
            const finalScale = Math.min(scaleX, scaleY) * 0.9 // Slight padding
            
            setScale(finalScale)
          }
        }

        updateScale()
        window.addEventListener('resize', updateScale)
        return () => window.removeEventListener('resize', updateScale)
      }, [isMobile])

      // On mobile, show static image if available, otherwise show scaled component
      if (isMobile && slide.image) {
        return (
          <div className="slide-section w-full relative overflow-hidden bg-slate-950">
            <motion.div
              className="w-full flex items-center justify-center px-4"
              variants={slideVariants}
              initial="hidden"
              animate={isActive ? 'visible' : 'hidden'}
            >
              <div className="w-full max-w-full h-auto">
                <Image
                  src={slide.image}
                  alt={slide.imageAlt || slide.title || 'Dashboard'}
                  width={1440}
                  height={800}
                  className="w-full h-auto object-contain rounded-lg"
                  style={{ maxHeight: '90vh' }}
                />
              </div>
            </motion.div>
          </div>
        )
      }

      return (
        <div className="slide-section h-screen w-full relative overflow-hidden bg-slate-950">
          <motion.div
            ref={containerRef}
            className="w-full h-full flex items-center justify-center"
            variants={slideVariants}
            initial="hidden"
            animate={isActive ? 'visible' : 'hidden'}
            style={{ marginTop: '-30px' }}
          >
            <div
              style={{
                width: '1440px',
                height: '800px',
                transform: `scale(${scale})`,
                transformOrigin: 'center center',
                aspectRatio: '1440 / 800',
              }}
            >
              {slide.component && React.createElement(slide.component)}
            </div>
          </motion.div>
        </div>
      )
    }

    return <DashboardFullScreen />
  }

  // Before/After comparison layout
  if (layoutType === 'split' && slide.beforeAfterImages) {
    const BeforeAfterSlider = () => {
      const [currentIndex, setCurrentIndex] = useState(0)
      const beforeAfterImages = slide.beforeAfterImages!

      const goToPrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? 1 : prev - 1))
      }

      const goToNext = () => {
        setCurrentIndex((prev) => (prev === 0 ? 1 : 0))
      }

      const panels = [
        {
          type: 'before',
          label: 'Before',
          labelColor: 'text-slate-400',
          image: beforeAfterImages.before,
          imageAlt: beforeAfterImages.beforeAlt || 'Before state',
          text: beforeAfterImages.beforeText,
        },
        {
          type: 'after',
          label: 'After',
          labelColor: 'text-blue-400',
          image: beforeAfterImages.after,
          imageAlt: beforeAfterImages.afterAlt || 'After state',
          text: beforeAfterImages.afterText,
        },
      ]

      return (
        <div className={`slide-section w-full flex items-center px-4 md:px-8 lg:px-16 ${isMobile ? '' : 'h-screen'}`}>
          <motion.div
            className="w-full max-w-7xl"
            variants={slideVariants}
            initial="hidden"
            animate={isActive ? 'visible' : 'hidden'}
            style={isMobile ? {} : { marginTop: '-30px' }}
          >
            {slide.tag && (
              <motion.div variants={itemVariants} className="mb-2 text-center">
                <span className="text-[10px] font-medium text-blue-400 uppercase tracking-widest">
                  {slide.tag}
                </span>
              </motion.div>
            )}
            <motion.h1
              variants={itemVariants}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 leading-tight text-center"
            >
              {slide.title}
            </motion.h1>

            {/* Desktop: Side-by-side grid */}
            <div className="hidden lg:grid grid-cols-2 gap-6 lg:gap-8">
              {panels.map((panel, index) => (
                <motion.div key={panel.type} variants={itemVariants} className="space-y-4">
                  <div className="rounded-xl overflow-hidden bg-slate-800/50 border border-slate-700 p-4">
                    <p className={`${panel.labelColor} text-sm font-medium mb-3`}>{panel.label}</p>
                    {panel.text && (
                      <div
                        className="text-xs text-slate-300 mb-4"
                        dangerouslySetInnerHTML={{
                          __html: panel.text,
                        }}
                      />
                    )}
                    <div className="rounded-lg overflow-hidden flex items-center justify-center bg-slate-900/50 relative aspect-video">
                      <Image
                        src={panel.image}
                        alt={panel.imageAlt}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mobile: Horizontal slider */}
            <div className="lg:hidden relative">
              <div className="relative w-full overflow-hidden">
                {panels.map((panel, index) => (
                  <motion.div
                    key={panel.type}
                    className="w-full"
                    initial={{ opacity: 0, x: index > currentIndex ? '100%' : '-100%' }}
                    animate={{
                      opacity: index === currentIndex ? 1 : 0,
                      x: index === currentIndex ? '0%' : index > currentIndex ? '100%' : '-100%',
                    }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    style={{ position: index === currentIndex ? 'relative' : 'absolute', top: 0, left: 0 }}
                  >
                    <div className="rounded-xl overflow-hidden bg-slate-800/50 border border-slate-700 p-4 space-y-4">
                      <p className={`${panel.labelColor} text-sm font-medium`}>{panel.label}</p>
                      {panel.text && (
                        <div
                          className="text-xs text-slate-300"
                          dangerouslySetInnerHTML={{
                            __html: panel.text,
                          }}
                        />
                      )}
                      <div className="rounded-lg overflow-hidden flex items-center justify-center bg-slate-900/50 relative w-full" style={{ minHeight: '300px' }}>
                        <Image
                          src={panel.image}
                          alt={panel.imageAlt}
                          width={800}
                          height={600}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={goToPrevious}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-slate-900/80 hover:bg-slate-800 text-white p-2 rounded-full transition-colors z-10"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-slate-900/80 hover:bg-slate-800 text-white p-2 rounded-full transition-colors z-10"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {panels.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex ? 'bg-blue-400 w-6' : 'bg-slate-600 hover:bg-slate-500'
                    }`}
                    aria-label={`Go to ${panels[index].label}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )
    }

    return <BeforeAfterSlider />
  }

  if (layoutType === 'split' && (hasImage || hasComponent)) {
    const SplitLayout = () => {

      return (
        <div className={`slide-section w-full flex items-center px-4 md:px-8 lg:px-16 ${isMobile ? '' : 'h-screen'}`}>
          <motion.div
            className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-4 lg:gap-12 items-center"
            variants={slideVariants}
            initial="hidden"
            animate={isActive ? 'visible' : 'hidden'}
            style={isMobile ? {} : { marginTop: '-30px' }}
          >
            <motion.div variants={itemVariants} className="order-2 lg:order-1">
              {hasComponent ? (
                // On mobile, show image if available; otherwise show component
                isMobile && slide.image ? (
                  <div className="rounded-xl overflow-hidden relative aspect-video">
                    <Image
                      src={slide.image}
                      alt={slide.imageAlt || slide.title || 'Dashboard'}
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <DashboardContainer>
                    {slide.component && React.createElement(slide.component)}
                  </DashboardContainer>
                )
              ) : slide.images && Array.isArray(slide.images) ? (
              <ImageSlider images={slide.images} imageAlts={slide.imageAlts || []} />
            ) : slide.image ? (
              <div
                className={`rounded-xl overflow-hidden relative ${
                  slide.imageSize === 'large'
                    ? 'aspect-[4/5]'
                    : slide.imageSize === 'medium'
                    ? 'aspect-[4/4]'
                    : 'aspect-video'
                }`}
              >
                <Image
                  src={slide.image}
                  alt={slide.imageAlt || slide.title || 'Slide image'}
                  fill
                  className="object-contain"
                />
              </div>
            ) : (
              <div className="rounded-xl overflow-hidden bg-slate-800 border-2 border-dashed border-slate-600 flex items-center justify-center aspect-video">
                <div className="text-center text-slate-500">
                  <p className="text-xs mb-1">Image Placeholder</p>
                  <p className="text-[10px]">{slide.imagePlaceholderText || 'Screenshot'}</p>
                </div>
              </div>
            )}
          </motion.div>
          <motion.div variants={itemVariants} className="order-1 lg:order-2">
            {slide.tag && (
              <div className="mb-2">
                <span className="text-[10px] font-medium text-blue-400 uppercase tracking-widest">
                  {slide.tag}
                </span>
              </div>
            )}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
              {slide.title}
            </h1>
            {slide.body && (
              <div
                className="text-sm md:text-base text-slate-300 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: slide.body }}
              />
            )}
            {slide.buttons && (
              <div className="mt-6 flex flex-wrap gap-3">
                {slide.buttons.map((button, i) => (
                  <a
                    key={i}
                    href={button.href}
                    target={button.external ? '_blank' : undefined}
                    rel={button.external ? 'noopener noreferrer' : undefined}
                    className="px-4 py-2 text-xs bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
                  >
                    {button.label}
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
      )
    }

    return <SplitLayout />
  }

  if (layoutType === 'image-full' && hasImage) {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
    return (
      <div className={`slide-section w-full relative ${isMobile ? 'min-h-[60vh]' : 'h-screen'}`}>
        <motion.div
          className="w-full h-full relative"
          variants={slideVariants}
          initial="hidden"
          animate={isActive ? 'visible' : 'hidden'}
        >
          {slide.image ? (
            <>
              <Image
                src={slide.image}
                alt={slide.imageAlt || slide.title || 'Full image'}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
            </>
          ) : (
            <div className="absolute inset-0 bg-slate-800 border-2 border-dashed border-slate-600 flex items-center justify-center">
              <div className="text-center text-slate-500">
                <p className="text-xs mb-1">Image Placeholder</p>
                <p className="text-[10px]">{slide.imagePlaceholderText || 'Full image'}</p>
              </div>
            </div>
          )}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 lg:p-16">
            {slide.tag && (
              <motion.div variants={itemVariants} className="mb-2">
                <span className="text-[10px] font-medium text-blue-400 uppercase tracking-widest">
                  {slide.tag}
                </span>
              </motion.div>
            )}
            <motion.h1
              variants={itemVariants}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight"
            >
              {slide.title}
            </motion.h1>
            {slide.body && (
              <motion.div
                variants={itemVariants}
                className="text-sm md:text-base text-slate-200 leading-relaxed max-w-3xl"
                dangerouslySetInnerHTML={{ __html: slide.body }}
              />
            )}
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className={`slide-section w-full flex items-center justify-center px-4 md:px-8 lg:px-16 ${isMobile ? '' : 'h-screen'}`}>
      <motion.div
        className="max-w-4xl w-full"
        variants={slideVariants}
        initial="hidden"
        animate={isActive ? 'visible' : 'hidden'}
        style={isMobile ? {} : { marginTop: '-30px' }}
      >
        {slide.tag && (
          <motion.div variants={itemVariants} className="mb-2">
            <span className="text-[10px] font-medium text-blue-400 uppercase tracking-widest">
              {slide.tag}
            </span>
          </motion.div>
        )}
        <motion.h1
          variants={itemVariants}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight"
        >
          {slide.title}
        </motion.h1>
        {slide.body && (
          <motion.div
            variants={itemVariants}
            className="text-sm md:text-base text-slate-300 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: slide.body }}
          />
        )}
        {slide.image && (
          <motion.div
            variants={itemVariants}
            className="mt-6 rounded-xl overflow-hidden bg-slate-800 border border-slate-700 shadow-2xl relative aspect-video"
          >
            <Image
              src={slide.image}
              alt={slide.imageAlt || slide.title || 'Slide image'}
              fill
              className="object-contain"
            />
          </motion.div>
        )}
        {slide.hasImagePlaceholder && !slide.image && (
          <motion.div
            variants={itemVariants}
            className="mt-6 rounded-xl overflow-hidden bg-slate-800 border-2 border-dashed border-slate-600 flex items-center justify-center aspect-video"
          >
            <div className="text-center text-slate-500">
              <p className="text-xs mb-1">Image Placeholder</p>
              <p className="text-[10px]">{slide.imagePlaceholderText || 'Screenshot'}</p>
            </div>
          </motion.div>
        )}
        {slide.buttons && (
          <motion.div variants={itemVariants} className="mt-6 flex flex-wrap gap-3">
            {slide.buttons.map((button, i) => (
              <a
                key={i}
                href={button.href}
                target={button.external ? '_blank' : undefined}
                rel={button.external ? 'noopener noreferrer' : undefined}
                className="px-4 py-2 text-xs bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
              >
                {button.label}
              </a>
            ))}
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}

export default function CaseStudySlider({ slides }: CaseStudySliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isTocOpen, setIsTocOpen] = useState(false)
  const [tocHoverIndex, setTocHoverIndex] = useState<number | null>(null)
  const scrollLockRef = useRef(false)
  const lastScrollTimeRef = useRef(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const loadedImagesRef = useRef<Set<string>>(new Set())
  const totalImagesRef = useRef(0)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Count total images and track loading
  useEffect(() => {
    const imageUrls = new Set<string>()
    
    slides.forEach((slide) => {
      if (slide.image) imageUrls.add(slide.image)
      if (slide.images) {
        slide.images.forEach((img) => imageUrls.add(img))
      }
      if (slide.beforeAfterImages) {
        imageUrls.add(slide.beforeAfterImages.before)
        imageUrls.add(slide.beforeAfterImages.after)
      }
    })
    
    totalImagesRef.current = imageUrls.size
    
    // If no images, set loading to false immediately
    if (imageUrls.size === 0) {
      setIsLoading(false)
      return
    }
    
    // Track image loading
    const checkAllLoaded = () => {
      if (loadedImagesRef.current.size >= totalImagesRef.current) {
        setIsLoading(false)
      }
    }
    
    // Preload all images
    imageUrls.forEach((url) => {
      const img = new window.Image()
      img.onload = () => {
        loadedImagesRef.current.add(url)
        checkAllLoaded()
      }
      img.onerror = () => {
        // Count errors as loaded to prevent infinite loading
        loadedImagesRef.current.add(url)
        checkAllLoaded()
      }
      img.src = url
    })
    
    // Fallback: set loading to false after 5 seconds max
    const timeoutId = setTimeout(() => {
      setIsLoading(false)
    }, 5000)
    
    return () => clearTimeout(timeoutId)
  }, [slides])

  // Reset scroll position to top when component mounts or when switching to mobile
  useEffect(() => {
    if (isMobile && containerRef.current) {
      // Use requestAnimationFrame to ensure DOM is ready
      requestAnimationFrame(() => {
        if (containerRef.current) {
          containerRef.current.scrollTop = 0
        }
      })
    }
    // Also reset desktop slide to first slide
    setCurrentSlide(0)
  }, [isMobile])

  // Reset scroll position on initial mount - especially important for mobile
  useEffect(() => {
    const resetScroll = () => {
      if (containerRef.current) {
        containerRef.current.scrollTop = 0
        // Also try scrolling the window itself on mobile
        if (window.innerWidth < 768) {
          window.scrollTo(0, 0)
        }
      }
    }
    
    // Reset immediately
    resetScroll()
    
    // Also reset after a short delay to handle any async rendering
    const timeoutId = setTimeout(resetScroll, 100)
    
    // Reset when page becomes visible (handles tab switching, app reopening)
    const handleVisibilityChange = () => {
      if (!document.hidden && window.innerWidth < 768) {
        resetScroll()
      }
    }
    
    document.addEventListener('visibilitychange', handleVisibilityChange)
    
    setCurrentSlide(0)
    
    return () => {
      clearTimeout(timeoutId)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  useEffect(() => {
    // Only handle wheel events on desktop
    if (isMobile) return

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()

      // If locked, ignore all scroll events completely
      if (scrollLockRef.current) {
        return
      }

      // Throttle: ignore scrolls that are too close together (within 100ms)
      const now = Date.now()
      if (now - lastScrollTimeRef.current < 100) {
        return
      }
      lastScrollTimeRef.current = now

      // Lock immediately to prevent any other scroll events from processing
      scrollLockRef.current = true

      // Determine direction and move exactly one slide
      if (e.deltaY > 0) {
        // Scrolling down - move to next slide
        setCurrentSlide((prev) => {
          if (prev < slides.length - 1) {
            return prev + 1
          }
          return prev
        })
      } else if (e.deltaY < 0) {
        // Scrolling up - move to previous slide
        setCurrentSlide((prev) => {
          if (prev > 0) {
            return prev - 1
          }
          return prev
        })
      }

      // Reset scroll lock after animation completes
      setTimeout(() => {
        scrollLockRef.current = false
      }, 900) // Slightly longer than animation to ensure it's complete
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    return () => {
      window.removeEventListener('wheel', handleWheel)
    }
  }, [slides.length, isMobile])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' && currentSlide < slides.length - 1) {
        setCurrentSlide((prev) => prev + 1)
      } else if (e.key === 'ArrowUp' && currentSlide > 0) {
        setCurrentSlide((prev) => prev - 1)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentSlide])

  // Show loading state
  if (isLoading) {
    return (
      <div 
        className={`case-study-container relative w-full flex items-center justify-center ${
          isMobile ? 'h-full' : 'h-screen'
        }`}
      >
        <div className="text-center">
          <div className="text-white text-lg font-medium mb-2">Loading</div>
          <div className="w-8 h-8 border-2 border-blue-400 border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    )
  }

  return (
    <div 
      ref={containerRef}
      className={`case-study-container relative w-full ${
        isMobile ? 'h-full overflow-y-auto overflow-x-hidden' : 'h-screen overflow-hidden'
      }`}
    >
      {/* Slide indicators - only show on desktop */}
      {!isMobile && (
        <div
          className="slide-indicators group absolute top-2 left-0 right-0 px-4 md:left-auto md:right-6 md:top-1/2 md:-translate-y-1/2 md:fixed md:px-0 z-50 flex flex-row md:flex-col justify-between md:justify-start gap-1 md:gap-1.5"
          onMouseEnter={() => setIsTocOpen(true)}
          onMouseLeave={() => {
            setIsTocOpen(false)
            setTocHoverIndex(null)
          }}
        >
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setCurrentSlide(index)}
              onMouseEnter={() => setTocHoverIndex(index)}
              className={`indicator-dot w-3 h-1.5 md:w-1.5 md:h-6 rounded-full transition-all duration-300 flex-shrink-0 ${
                index === currentSlide ? 'bg-blue-400 w-6 h-1.5 md:w-1.5 md:h-10' : 'bg-slate-700 hover:bg-slate-600'
              }`}
              aria-label={`Go to ${slide.title || slide.tag || slide.id}`}
              title={slide.title || slide.tag || slide.id}
            />
          ))}
          <AnimatePresence>
            {isTocOpen && slides.some((s) => s.title) && (
              <motion.div
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                transition={{ duration: 0.18, ease: 'easeOut' }}
                className="hidden md:block fixed right-12 top-[0%] -translate-y-1/2 z-50"
              >
                <div className="w-[260px] rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur px-3 py-2.5 shadow-2xl">
                  <p className="px-2 pb-1.5 text-[10px] font-medium text-slate-300/80 uppercase tracking-wider">On this page</p>
                  <div className="max-h-[80vh] overflow-auto pr-1">
                    <ul className="space-y-0.5">
                      {slides.map((s, i) => {
                        const label = s.title || s.tag || `Section ${i + 1}`
                        const active = i === currentSlide
                        const hovering = tocHoverIndex === i
                        return (
                          <li key={s.id}>
                            <button
                              type="button"
                              onClick={() => setCurrentSlide(i)}
                              className={`w-full text-left flex items-center gap-2 rounded-lg px-2 py-1.5 transition ${
                                active
                                  ? 'bg-blue-500/15 text-blue-200'
                                  : hovering
                                  ? 'bg-white/5 text-slate-100'
                                  : 'text-slate-200/80 hover:bg-white/5 hover:text-slate-100'
                              }`}
                            >
                              <span className={`h-1.5 w-1.5 rounded-full ${active ? 'bg-blue-400' : 'bg-slate-600'}`} />
                              <span className="truncate text-[13px] leading-snug">{label}</span>
                            </button>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                  </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {isMobile ? (
        // Mobile: Normal scroll with animations
        <div className="slides-wrapper relative w-full py-12 md:py-16">
          {slides.map((slide, index) => (
            <AnimatedSection 
              key={slide.id} 
              className={`w-full py-12 md:py-16 ${index === slides.length - 1 ? 'pb-[3.0rem] md:pb-0' : ''}`}
            >
              <SlideContent slide={slide} isActive={true} isMobile={true} />
            </AnimatedSection>
          ))}
        </div>
      ) : (
        // Desktop: Transform-based slide system
        <div
          className="slides-wrapper relative w-full h-full"
          style={{
            transform: `translateY(-${currentSlide * 100}vh)`,
            transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          {slides.map((slide, index) => (
            <SlideContent key={slide.id} slide={slide} isActive={index === currentSlide} isMobile={false} />
          ))}
        </div>
      )}

      {/* Scroll hint - only show on desktop */}
      {!isMobile && currentSlide < slides.length - 1 && (
        <motion.div
          className="scroll-hint fixed bottom-6 left-0 right-0 mx-auto z-40 flex flex-col items-center gap-1 text-slate-500 w-fit"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span className="text-[10px] uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      )}
    </div>
  )
}
