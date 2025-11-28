'use client'

import * as React from 'react'
import { animate, motion, useMotionValue } from 'framer-motion'
import mapBackground from '@/src/assets/MapBG.png'

export type WeatherData = {
  city: string
  temperatureC: number
  condition: string
  highC?: number
  lowC?: number
}

export type CampusData = {
  title: string
  subtitle?: string
  logoUrl?: string
  mapPreviewUrl?: string
}

export type WidgetStackProps = {
  weather: WeatherData
  campus: CampusData
  initialIndex?: number // 0 weather, 1 campus
  onIndexChange?: (index: number) => void
  className?: string
}

const DEFAULT_CARD_SIZE = 220
const MAX_INDEX = 1

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

export function WidgetStack({
  weather,
  campus,
  initialIndex = 0,
  onIndexChange,
  className,
}: WidgetStackProps) {
  const containerRef = React.useRef<HTMLDivElement | null>(null)
  const [cardSize, setCardSize] = React.useState(DEFAULT_CARD_SIZE)
  const [index, setIndex] = React.useState(() => Math.max(0, Math.min(MAX_INDEX, initialIndex)))
  const y = useMotionValue(-Math.max(0, Math.min(MAX_INDEX, initialIndex)) * DEFAULT_CARD_SIZE)

  React.useEffect(() => {
    const node = containerRef.current
    if (!node || typeof ResizeObserver === 'undefined') return

    const updateSize = () => {
      const width = node.getBoundingClientRect().width
      if (width > 0) {
        setCardSize(width)
      }
    }

    updateSize()
    const observer = new ResizeObserver(() => updateSize())
    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  // animate motion value whenever index changes
  React.useEffect(() => {
    const controls = animate(y, -index * cardSize, {
      type: 'spring',
      stiffness: 540,
      damping: 42,
      mass: 0.7,
    })

    return () => controls.stop()
  }, [cardSize, index, y])

  const updateIndex = React.useCallback(
    (next: number) => {
      const safe = Math.max(0, Math.min(MAX_INDEX, next))
      setIndex(safe)
      if (safe !== index) {
        onIndexChange?.(safe)
      }
    },
    [index, onIndexChange]
  )

  const handleSnap = React.useCallback(
    (offsetY: number, velocityY: number) => {
      const threshold = cardSize * 0.25
      let next = index

      if (offsetY > threshold || velocityY > 850) {
        next = Math.max(0, index - 1)
      } else if (offsetY < -threshold || velocityY < -850) {
        next = Math.min(MAX_INDEX, index + 1)
      }

      updateIndex(next)
    },
    [cardSize, index, updateIndex]
  )

  const onKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'ArrowDown') {
        event.preventDefault()
        updateIndex(index + 1)
      } else if (event.key === 'ArrowUp') {
        event.preventDefault()
        updateIndex(index - 1)
      }
    },
    [index, updateIndex]
  )

  React.useEffect(() => {
    y.set(-index * cardSize)
  }, [cardSize, index, y])

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative isolate w-full h-full',
        'rounded-[24px] overflow-hidden text-black'
      )}
      style={{
        height: `${cardSize}px`,
      }}
      tabIndex={0}
      role="group"
      aria-label="Widget stack"
      onKeyDown={onKeyDown}
    >
      <div className="absolute inset-0" />

      <motion.div
        style={{
          y,
          height: cardSize * (MAX_INDEX + 1),
          width: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
        drag="y"
        dragConstraints={{ top: -cardSize, bottom: 0 }}
        dragElastic={0.2}
        onDragEnd={(_, info) => handleSnap(info.offset.y, info.velocity.y)}
      >
        <WeatherCard data={weather} size={cardSize} />
        <CampusCard data={campus} size={cardSize} />
      </motion.div>

      {/* pagination dots */}
      <div
        aria-hidden
        className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5"
      >
        {[0, 1].map((dot) => (
          <Dot key={dot} active={dot === index} />
        ))}
      </div>
    </div>
  )
}

function Dot({ active }: { active: boolean }) {
  return (
    <span
      className={cn(
        'h-2 w-2 rounded-full border border-gray/100 transition-all',
        active ? 'bg-white/90 shadow-[0_0_0_3px_rgba(15,23,42,0.60)_inset]' : 'bg-white/90'
      )}
    />
  )
}

function WeatherCard({ data, size }: { data: WeatherData; size: number }) {
  const { city, temperatureC, condition, highC, lowC } = data
  return (
    <section
      role="region"
      aria-label={`Weather in ${city}`}
      className="relative flex h-full w-full flex-col justify-between rounded-[26px] px-4 py-4 text-white"
      style={{
        background: 'linear-gradient(180deg, #08499D 0%, #5596D8 100%)',
        height: `${size}px`,
      }}
    >
      <div className="flex items-center gap-4">
        <div className="flex flex-col text-left gap-2 ">
          <span className="text-[16px] font-medium uppercase text-white/80">{city}</span>
          <span className="text-[56px] font-light leading-none tracking-tight">
            {Math.round(temperatureC)}°
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3 text-left text-sm font-medium text-white/90">
        <WeatherSunIcon />
        <div className="flex flex-col gap-1">
          <span>{condition}</span>
          <span className="text-xs text-white/75">H:{highC ?? '–'} · L:{lowC ?? '–'}</span>
        </div>
      </div>
    </section>
  )
}

function CampusCard({ data, size }: { data: CampusData; size: number }) {
  const { title, subtitle, logoUrl, mapPreviewUrl } = data
  return (
    <section
      role="region"
      aria-label="Campus"
      className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-[24px] p-0 text-black"
      style={{
        height: `${size}px`,
      }}
    >
      <div className="absolute inset-0">
        {
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={mapPreviewUrl ?? mapBackground.src}
            alt=""
            className="h-full w-full object-cover"
          />
        }
        <div className="absolute inset-0 " />
      </div>

      <div className="relative z-10 flex h-full w-full flex-col px-5 pt-6 pb-12">
        <div className="mt-auto flex flex-col items-start gap-3">
          <ContactPin logoUrl={logoUrl} />
          <div className="flex flex-col gap-0.5 text-black">
            <span className="text-base font-semibold leading-tight">{title}</span>
            {subtitle && <span className="text-xs text-black/85">{subtitle}</span>}
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactPin({ logoUrl }: { logoUrl?: string }) {
  return (
    <div className="relative flex h-14 w-[58px] md:h-20 md:w-[78px] flex-col items-center">
      <div className="rounded-full bg-white p-1.5 md:p-2 shadow-[0_4px_14px_rgba(15,23,42,0.3)]">
        <div className="relative h-[44px] w-[44px] md:h-[60px] md:w-[60px] overflow-hidden rounded-full bg-white">
          {logoUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={logoUrl} alt="" className="h-full w-full object-contain p-1 md:p-1.5" />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-[8px] md:text-[10px] font-semibold text-gray-500">
              Campus
            </div>
          )}
        </div>
      </div>
      <div className="mt-[-4px] md:mt-[-6px] h-4 w-4 md:h-5 md:w-5 rotate-45 rounded-md bg-white shadow-[0_4px_12px_rgba(15,23,42,0.12)]" />
    </div>
  )
}

function WeatherSunIcon() {
  return (
    <svg width="46" height="46" viewBox="0 0 64 64" fill="none">
      <circle cx="32" cy="32" r="10" fill="#FFC447" />
      <path
        d="M32 8v6M32 50v6M56 32h-6M14 32H8M49.6 49.6l-4.2-4.2M18.6 18.6l-4.2-4.2M49.6 14.4l-4.2 4.2M18.6 45.4l-4.2 4.2"
        stroke="#FFD66B"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  )
}

function LocationPinIcon() {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 shadow-[0_4px_12px_rgba(8,41,82,0.35)]">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 21s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="rgba(255,255,255,0.2)"
        />
        <circle cx="12" cy="10" r="2.4" fill="white" />
      </svg>
    </div>
  )
}

