'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import userImage from '@/src/KoddizImage/user.png'

const stages = ["Start", "Wait", "Communicate", "End"]

const experiments = [
  {
    key: "A",
    title: "A. Dating App",
    subtitle: "5 foreigner per group · different purpose (Only Dating)",
    steps: [
      { label: "Dating App", stage: "Start" },
      { label: "Try matching with someone", stage: "Wait" },
      {
        label: (
          <div className="flex flex-col leading-tight">
            <span>Meet</span>
            <span className="text-xs text-neutral-500">Once · 4</span>
            <span className="text-xs text-neutral-500">Refuse · 1</span>
          </div>
        ),
        stage: "Communicate",
      },
      { label: "Twice · 0", highlight: true, stage: "End" },
    ],
  },
  {
    key: "B",
    title: "B. Language exchange App",
    subtitle: "5 Korean per group",
    steps: [
      { label: "Language exchange App", stage: "Start" },
      { label: "Try to meet who live nearby", stage: "Wait" },
      {
        label: (
          <div className="flex flex-col leading-tight">
            <span>Meet</span>
            <span className="text-xs text-neutral-500">Once · 2</span>
            <span className="text-xs text-neutral-500">Refuse · 1</span>
          </div>
        ),
        stage: "Communicate",
      },
      { label: "Twice · 2", highlight: true, stage: "End" },
    ],
  },
  {
    key: "C",
    title: "C. SNS – Language exchange Party",
    subtitle: "5 Korean per group",
    steps: [
      { label: "SNS – Language exchange Party", stage: "Start" },
      { label: "Meet in person in random group", stage: "Wait" },
      {
        label: (
          <div className="flex flex-col leading-tight">
            <span>Meet</span>
            <span className="text-xs text-neutral-500">Once · 3</span>
            <span className="text-xs text-neutral-500">Refuse · 0</span>
          </div>
        ),
        stage: "Communicate",
      },
      { label: "Twice · 2", highlight: true, stage: "End" },
    ],
  },
]

function Pill({ children, active, onClick }: { children: React.ReactNode; active: boolean; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className={`flex-1 min-w-fit px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs md:text-sm text-center whitespace-nowrap cursor-pointer
        transition-all duration-300 ease-in-out
        transform hover:scale-110 hover:-translate-y-1 active:scale-95
        ${active 
          ? "bg-[#FF8A8A] text-white shadow-lg shadow-[#FF8A8A]/50 ring-2 ring-[#FF8A8A] ring-offset-2 scale-105" 
          : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:shadow-md hover:shadow-lg animate-[pulse_2s_ease-in-out_infinite]"
        }`}
    >
      {children}
    </div>
  )
}

function Arrow() {
  return (
    <div
      aria-hidden
      className="shrink-0 flex items-center justify-center px-1 text-neutral-300"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </div>
  )
}

function Node({ 
  children, 
  highlight = false, 
  onHover, 
  onLeave,
  isActive = false
}: { 
  children: React.ReactNode; 
  highlight?: boolean;
  onHover?: () => void;
  onLeave?: () => void;
  isActive?: boolean;
}) {
  const shouldHighlight = highlight || isActive
  return (
    <div
      tabIndex={0}
      aria-current={shouldHighlight ? "step" : undefined}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={
        "rounded-xl px-3 py-2 md:px-4 md:py-2 shadow-sm border bg-white focus:outline-none focus:ring-2 focus:ring-rose-300 transition-colors duration-200 cursor-pointer " +
        "w-fit max-w-[80vw] md:w-[180px] md:max-w-none md:flex-shrink-0 " +
        "text-xs md:text-sm whitespace-normal break-words " +
        (shouldHighlight
          ? "!bg-[#FF8A8A] text-white font-semibold border-[#FF8A8A]"
          : "border-neutral-200 hover:border-rose-300 hover:bg-rose-50")
      }
    >
      {children}
    </div>
  )
}

function FlowRow({ 
  title, 
  subtitle, 
  steps, 
  userKey, 
  setHoverStage,
  activeStage
}: { 
  title: string; 
  subtitle: string; 
  steps: Array<{ label: React.ReactNode; highlight?: boolean; stage: string }>; 
  userKey: string;
  setHoverStage: (stage: string | null) => void;
  activeStage: string | null;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <div className="relative w-6 h-6 rounded-full overflow-hidden">
          <Image src={userImage} alt={userKey} fill className="object-cover rounded-full" />
        </div>
        <h3 className="font-medium text-neutral-800 text-base lg:text-lg">{title}</h3>
      </div>

      {/* Flow line: horizontal scroll on small screens */}
      <div className="relative">
        <div className="overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none]" role="list">
          <div className="inline-flex items-center gap-2 md:gap-3 min-w-max pr-2" role="group">
            {steps.map((s, i) => (
              <React.Fragment key={i}>
                <Node 
                  highlight={!!s.highlight}
                  onHover={() => setHoverStage(s.stage)}
                  onLeave={() => setHoverStage(null)}
                  isActive={activeStage === s.stage}
                >
                  {s.label}
                </Node>
                {i < steps.length - 1 && <Arrow />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {subtitle && (
        <p className="text-xs text-neutral-500 pl-8">{subtitle}</p>
      )}
    </div>
  )
}

export default function ResearchFlowDiagram() {
  const [hoverStage, setHoverStage] = useState<string | null>(null)
  const [activeStage, setActiveStage] = useState<string | null>("Start")

  const handlePillClick = (stage: string) => {
    // Toggle: if clicking the same stage, deselect it
    setActiveStage(activeStage === stage ? null : stage)
  }

  return (
    <div className="w-full">
      {/* Step labels */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-2 w-full">
          {stages.map((stage) => (
            <Pill 
              key={stage} 
              active={hoverStage === stage || activeStage === stage}
              onClick={() => handlePillClick(stage)}
            >
              {stage}
            </Pill>
          ))}
        </div>
      </div>

      {/* Flows */}
      <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 lg:p-6 flex flex-col gap-8">
        {experiments.map((ex) => (
          <FlowRow 
            key={ex.key} 
            title={ex.title} 
            subtitle={ex.subtitle} 
            steps={ex.steps} 
            userKey={ex.key}
            setHoverStage={setHoverStage}
            activeStage={activeStage}
          />
        ))}
      </div>
    </div>
  )
}

