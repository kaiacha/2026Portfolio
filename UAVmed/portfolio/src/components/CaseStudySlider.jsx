import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

const DashboardContainer = ({ children }) => {
  const containerRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current && innerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const scale = containerWidth / 1440;
        innerRef.current.style.transform = `scale(${scale})`;
      }
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <div
      ref={containerRef}
      className="rounded-xl overflow-hidden bg-slate-800 border border-slate-700 shadow-2xl"
      style={{
        width: "100%",
        aspectRatio: "1440 / 800",
        position: "relative",
        maxHeight: "600px",
      }}
    >
      <div
        ref={innerRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "1440px",
          height: "800px",
          transformOrigin: "top left",
        }}
      >
        {children}
      </div>
    </div>
  );
};

const ImageSlider = ({ images, imageAlts = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="rounded-xl overflow-hidden relative">
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={imageAlts[index] || `Slide ${index + 1}`}
            className="w-full h-full object-contain absolute inset-0"
            initial={{ opacity: 0, x: index > currentIndex ? "100%" : "-100%" }}
            animate={{
              opacity: index === currentIndex ? 1 : 0,
              x:
                index === currentIndex
                  ? "0%"
                  : index > currentIndex
                  ? "100%"
                  : "-100%",
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
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
                  index === currentIndex
                    ? "bg-blue-400 w-6"
                    : "bg-slate-600 hover:bg-slate-500"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const CaseStudySlider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollLockRef = useRef(false);
  const lastScrollTimeRef = useRef(0);

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();

      // If locked, ignore all scroll events completely
      if (scrollLockRef.current) {
        return;
      }

      // Throttle: ignore scrolls that are too close together (within 100ms)
      const now = Date.now();
      if (now - lastScrollTimeRef.current < 100) {
        return;
      }
      lastScrollTimeRef.current = now;

      // Lock immediately to prevent any other scroll events from processing
      scrollLockRef.current = true;

      // Determine direction and move exactly one slide
      if (e.deltaY > 0) {
        // Scrolling down - move to next slide
        setCurrentSlide((prev) => {
          if (prev < slides.length - 1) {
            return prev + 1;
          }
          return prev;
        });
      } else if (e.deltaY < 0) {
        // Scrolling up - move to previous slide
        setCurrentSlide((prev) => {
          if (prev > 0) {
            return prev - 1;
          }
          return prev;
        });
      }

      // Reset scroll lock after animation completes
      setTimeout(() => {
        scrollLockRef.current = false;
      }, 900); // Slightly longer than animation to ensure it's complete
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [slides.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowDown" && currentSlide < slides.length - 1) {
        setCurrentSlide((prev) => prev + 1);
      } else if (e.key === "ArrowUp" && currentSlide > 0) {
        setCurrentSlide((prev) => prev - 1);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]);

  return (
    <div className="case-study-container relative w-full h-screen overflow-hidden">
      <div className="slide-indicators fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-1.5">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setCurrentSlide(index)}
            className={`indicator-dot w-1.5 h-6 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-blue-400 h-10 w-1.5"
                : "bg-slate-700 hover:bg-slate-600"
            }`}
          />
        ))}
      </div>

      <div
        className="slides-wrapper relative w-full h-full"
        style={{
          transform: `translateY(-${currentSlide * 100}vh)`,
          transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {slides.map((slide, index) => (
          <SlideContent
            key={slide.id}
            slide={slide}
            isActive={index === currentSlide}
          />
        ))}
      </div>

      {currentSlide < slides.length - 1 && (
        <motion.div
          className="scroll-hint fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-1 text-slate-500"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span className="text-[10px] uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      )}
    </div>
  );
};

const SlideContent = ({ slide, isActive }) => {
  const slideVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
    },
  };

  const layoutType = slide.layout || "centered";
  const hasImage = slide.image || slide.images || slide.hasImagePlaceholder;
  const hasComponent = slide.component;

  if (layoutType === "dashboard-full" && hasComponent) {
    const DashboardFullScreen = () => {
      const containerRef = useRef(null);
      const [scale, setScale] = useState(1);

      useEffect(() => {
        const updateScale = () => {
          if (containerRef.current) {
            const containerWidth = window.innerWidth;
            const containerHeight = window.innerHeight;
            const scaleX = containerWidth / 1440;
            const scaleY = containerHeight / 800;
            setScale(Math.min(scaleX, scaleY) * 0.85); // Reduce size by 15%
          }
        };

        updateScale();
        window.addEventListener("resize", updateScale);
        return () => window.removeEventListener("resize", updateScale);
      }, []);

      return (
        <div className="slide-section h-screen w-full relative overflow-hidden bg-slate-950 pb-10">
          <motion.div
            ref={containerRef}
            className="w-full h-full flex items-center justify-center"
            variants={slideVariants}
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
          >
            <div
              style={{
                width: "1440px",
                height: "800px",
                transform: `scale(${scale})`,
                transformOrigin: "center center",
              }}
            >
              {React.createElement(slide.component)}
            </div>
          </motion.div>
        </div>
      );
    };

    return <DashboardFullScreen />;
  }

  // Before/After comparison layout
  if (layoutType === "split" && slide.beforeAfterImages) {
    return (
      <div className="slide-section h-screen w-full flex items-center px-4 md:px-8 lg:px-16">
        <motion.div
          className="w-full max-w-7xl"
          variants={slideVariants}
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Before Panel */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="rounded-xl overflow-hidden bg-slate-800/50 border border-slate-700 p-4">
                <p className="text-slate-400 text-sm font-medium mb-3">
                  Before
                </p>
                {slide.beforeAfterImages.beforeText && (
                  <div
                    className="text-xs text-slate-300 mb-4"
                    dangerouslySetInnerHTML={{
                      __html: slide.beforeAfterImages.beforeText,
                    }}
                  />
                )}
                <div className="rounded-lg overflow-hidden flex items-center justify-center bg-slate-900/50">
                  <img
                    src={slide.beforeAfterImages.before}
                    alt={slide.beforeAfterImages.beforeAlt || "Before state"}
                    className="max-w-full max-h-[400px] object-contain"
                  />
                </div>
              </div>
            </motion.div>
            {/* After Panel */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="rounded-xl overflow-hidden bg-slate-800/50 border border-slate-700 p-4">
                <p className="text-blue-400 text-sm font-medium mb-3">After</p>
                {slide.beforeAfterImages.afterText && (
                  <div
                    className="text-xs text-slate-300 mb-4"
                    dangerouslySetInnerHTML={{
                      __html: slide.beforeAfterImages.afterText,
                    }}
                  />
                )}
                <div className="rounded-lg overflow-hidden flex items-center justify-center bg-slate-900/50">
                  <img
                    src={slide.beforeAfterImages.after}
                    alt={slide.beforeAfterImages.afterAlt || "After state"}
                    className="max-w-full max-h-[400px] object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    );
  }

  if (layoutType === "split" && (hasImage || hasComponent)) {
    return (
      <div className="slide-section h-screen w-full flex items-center px-4 md:px-8 lg:px-16">
        <motion.div
          className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          variants={slideVariants}
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="order-2 lg:order-1">
            {hasComponent ? (
              <DashboardContainer>
                {React.createElement(slide.component)}
              </DashboardContainer>
            ) : slide.images && Array.isArray(slide.images) ? (
              <ImageSlider
                images={slide.images}
                imageAlts={slide.imageAlts || []}
              />
            ) : slide.image ? (
              <div className="rounded-xl overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.imageAlt || slide.title}
                  className="w-full h-auto"
                />
              </div>
            ) : (
              <div className="rounded-xl overflow-hidden bg-slate-800 border-2 border-dashed border-slate-600 flex items-center justify-center aspect-video">
                <div className="text-center text-slate-500">
                  <p className="text-xs mb-1">Image Placeholder</p>
                  <p className="text-[10px]">
                    {slide.imagePlaceholderText || "Screenshot"}
                  </p>
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
                    target={button.external ? "_blank" : undefined}
                    rel={button.external ? "noopener noreferrer" : undefined}
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
    );
  }

  if (layoutType === "image-full" && hasImage) {
    return (
      <div className="slide-section h-screen w-full relative">
        <motion.div
          className="w-full h-full relative"
          variants={slideVariants}
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
        >
          {slide.image ? (
            <>
              <img
                src={slide.image}
                alt={slide.imageAlt || slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
            </>
          ) : (
            <div className="absolute inset-0 bg-slate-800 border-2 border-dashed border-slate-600 flex items-center justify-center">
              <div className="text-center text-slate-500">
                <p className="text-xs mb-1">Image Placeholder</p>
                <p className="text-[10px]">
                  {slide.imagePlaceholderText || "Full image"}
                </p>
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
    );
  }

  return (
    <div className="slide-section h-screen w-full flex items-center justify-center px-4 md:px-8 lg:px-16">
      <motion.div
        className="max-w-4xl w-full"
        variants={slideVariants}
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
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
            className="mt-6 rounded-xl overflow-hidden bg-slate-800 border border-slate-700 shadow-2xl"
          >
            <img
              src={slide.image}
              alt={slide.imageAlt || slide.title}
              className="w-full h-auto"
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
              <p className="text-[10px]">
                {slide.imagePlaceholderText || "Screenshot"}
              </p>
            </div>
          </motion.div>
        )}
        {slide.buttons && (
          <motion.div
            variants={itemVariants}
            className="mt-6 flex flex-wrap gap-3"
          >
            {slide.buttons.map((button, i) => (
              <a
                key={i}
                href={button.href}
                target={button.external ? "_blank" : undefined}
                rel={button.external ? "noopener noreferrer" : undefined}
                className="px-4 py-2 text-xs bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
              >
                {button.label}
              </a>
            ))}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default CaseStudySlider;
