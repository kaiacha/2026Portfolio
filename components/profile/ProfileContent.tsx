'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import heroPortrait from '@/src/assets/profile2.png'
import nglLogo from '@/src/assets/NGL.png'
import nglLogoHover from '@/src/assets/NGLHover.png'
import naverCloudLogo from '@/src/assets/NaverCloud.png'
import naverCloudLogoHover from '@/src/assets/NaverCloudHover.png'
import asuLogo from '@/src/assets/ASULogo.png'
import hyuLogo from '@/src/assets/HYULogo.png'

const experiences = [
  {
    company: 'NGL Transportation',
    role: 'IT Intern',
    date: 'Arizona, USA | Jan 2023 – Jan 2024',
    logo: nglLogo,
    hoverLogo: nglLogoHover,
    highlights: [
      'Installed and maintained network & computer systems for logistics operations.',
      'Built front-end features for an internal logistics platform with React.',
      'Authored SOPs and provided tier-two technical support across the organisation.',
      'Led troubleshooting for escalated hardware and software issues.',
    ],
  },
  {
    company: 'Naver Cloud Platform',
    role: 'Cloud Platform Planning Intern',
    date: 'Seoul, Korea | Jul 2022 – Oct 2022',
    logo: naverCloudLogo,
    hoverLogo: naverCloudLogoHover,
    highlights: [
      'Researched competitive API offerings and recommended adoption strategies.',
      'Updated navigation UX/UI for the Naver Cloud Platform marketing site.',
      'Drafted key announcements and release notes for the official website.',
    ],
  },
]

const education = [
  {
    institution: 'Arizona State University',
    programme: 'M.S. Human Systems Engineering',
    date: 'AZ, USA | Aug 2025 – Present',
    cursorKey: 'asu',
  },
  {
    institution: 'Hanyang University',
    programme: 'B.S. Media Technology & Computer Science',
    date: 'Ansan, Korea | Mar 2020 – Aug 2024',
    cursorKey: 'hyu',
  },
]

const awards = [
  {
    title: 'Campus Patent Universiade',
    subtitle: 'KIPO Director’s Prize | $7,700',
    date: 'May 2022 – Nov 2022',
    description: 'Cloud-based laptop service for education, from concept through business model.',
  },
  {
    title: 'ETRI Open API Contest',
    subtitle: 'Excellence Award | $400',
    date: 'Sep 2022 – Dec 2022',
    description: 'Computer vision assistant that generates indoor tasks with ETRI APIs & YOLO v3.',
  },
  {
    title: 'Environment Big Data AI Idea Competition',
    subtitle: 'Minister of Environment Award | $2,300',
    date: 'May 2022 – Dec 2022',
    description: 'EGG: a big-data powered eco-friendly integration and insights platform.',
  },
  {
    title: 'Cancer Big Data AI Idea Competition',
    subtitle: 'Grand Prize (National Cancer Center) | $1,500',
    date: 'Jun 2021 – Dec 2021',
    description: 'AntiCancer: AI dashboard forecasting cancer care timelines and outcomes.',
  },
]

const skills = [
  'Interaction design, research synthesis, service blueprinting',
  'Wireframing & prototyping with Figma, FigJam, and Illustrator',
  'Frontend (HTML, CSS, JavaScript, React) and rapid prototyping',
  'Data analysis in Python (pandas, scikit-learn, matplotlib) and SQL',
]

const tools = ['Figma', 'Illustrator', 'VS Code', 'Git / GitHub', 'Jira', 'Notion']

export default function ProfileContent() {
  const [hoveredEducation, setHoveredEducation] = useState<string | null>(null)
  const [cursorLogos, setCursorLogos] = useState<Record<string, string>>({})

  useEffect(() => {
    if (typeof window === 'undefined') return

    const logoMap: Record<string, string> = {
      asu: asuLogo.src,
      hyu: hyuLogo.src,
    }

    Object.entries(logoMap).forEach(([key, src]) => {
      if (cursorLogos[key]) return

      const img = new window.Image()
      img.crossOrigin = 'anonymous'
      img.src = src
      img.onload = () => {
        const size = 70
        const canvas = document.createElement('canvas')
        canvas.width = size
        canvas.height = size
        const ctx = canvas.getContext('2d')
        if (!ctx) return
        ctx.clearRect(0, 0, size, size)
        ctx.drawImage(img, 0, 0, size, size)
        const dataUrl = canvas.toDataURL('image/png')
        setCursorLogos((prev) => ({
          ...prev,
          [key]: dataUrl,
        }))
      }
    })
  }, [cursorLogos])

  return (
    <div className="w-full h-full overflow-y-auto bg-gradient-to-b from-white via-white to-gray-50">
      <div className="max-w-5xl mx-auto px-5 py-5 md:px-10 md:py-10 space-y-10 pb-[150px] md:pb-[150px]">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#141625] via-[#1f243e] to-[#342657] text-white rounded-3xl p-8 md:p-10 shadow-2xl flex flex-col md:flex-row gap-8 md:gap-12 items-start">
          <div className="flex-1 space-y-5">
            <div className="flex items-center justify-between gap-4">
              <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
                About
              </span>
              {/* Small profile picture on mobile only - same line as About */}
              <div className="relative h-12 w-12 md:hidden rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={heroPortrait}
                  alt="Mikyo Kaia Cha portrait"
                  fill
                  sizes="48px"
                  className="object-cover object-[center_-5%]"
                />
              </div>
            </div>
            <h1 className="text-2xl md:text-4xl font-extrabold leading-tight">
              Hi, I'm Mikyo Kaia Cha –
              <br className="hidden md:block" /> UX Designer crafting human-centered experiences.
            </h1>
            <p className="text-sm md:text-base text-white/80 leading-relaxed">
              I merge human systems engineering, data, and empathic research to build services that feel
              intuitive, trustworthy, and empowering. Currently pursuing an M.S. in Human Systems Engineering
              at Arizona State University while designing products that bridge research, design, and
              development.
            </p>
            <div className="flex flex-col md:flex-row md:flex-wrap md:items-center gap-5 md:gap-4">
              <span className="text-xs uppercase tracking-[0.3em] text-white/60">Arizona • Remote • Seoul</span>
              <a
                href="https://drive.google.com/file/d/11cJrnHhnnoGfM8pmjrJXUsDWkRXF9Zqf/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#1f243e] shadow-lg transition hover:translate-y-[-2px] hover:shadow-xl w-fit"
              >
                View Full Resume ↗
              </a>
            </div>
          </div>
          {/* Large profile picture - hidden on mobile, visible on desktop */}
          <div className="hidden md:block relative w-full max-w-full md:max-w-[240px] self-center md:self-start">
            <div className="relative w-full min-h-[320px] sm:min-h-[360px] md:min-h-[320px] rounded-[32px] overflow-hidden border border-white/20 shadow-2xl bg-white">
              <Image
                src={heroPortrait}
                alt="Mikyo Kaia Cha portrait"
                fill
                sizes="(min-width: 768px) 240px, 80vw"
                className="object-cover object-[center_-5%] md:object-[center_-30%]"
                priority
              />
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-8 space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">Design Philosophy</h2>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            I build products that balance feasibility with delight. From AI-driven visualisations to service
            journeys, I lean into co-creation, experimentation, and iterative validation. I believe every
            project deserves heart and craft—whether it’s an overnight sprint or a long-form build.
          </p>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            Outside of work, you’ll find me evaluating product ecosystems, shaping design systems, or planning
            community-driven initiatives. Wherever I contribute, my goal stays the same: create meaningful,
            inclusive experiences that help people accomplish more with clarity and confidence.
          </p>
        </section>

        {/* Experience */}
        <section className="space-y-5">
          <div className="flex items-center justify-between">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">Experience</h2>
            <span className="text-xs uppercase tracking-[0.3em] text-gray-400">Industry</span>
          </div>
          <div className="grid gap-4">
            {experiences.map((item) => (
              <article
                key={item.company}
                className="group rounded-2xl border border-gray-100 bg-white/95 p-6 shadow-md transition hover:shadow-xl"
              >
                <div className="flex flex-col md:flex-row items-center md:items-center gap-4 md:gap-6">
                  <div className="relative shrink-0 w-full md:w-auto">
                    <div className="relative w-full h-60 md:w-28 md:h-28 md:aspect-auto rounded-[20px] md:rounded-full border border-gray-100 bg-white shadow-lg overflow-hidden">
                      <Image
                        src={item.logo}
                        alt={`${item.company} logo`}
                        fill
                        sizes="(min-width: 768px) 112px, 100vw"
                        className="object-contain p-6 md:p-4 opacity-100 transition-opacity duration-300 group-hover:opacity-0"
                      />
                      <Image
                        src={item.hoverLogo}
                        alt={`${item.company} alternate logo`}
                        fill
                        sizes="(min-width: 768px) 112px, 100vw"
                        className="object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      />
                    </div>
                  </div>
                  <div className="flex-1 w-full space-y-3">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{item.company}</h3>
                        <p className="text-sm text-gray-500">{item.role}</p>
                      </div>
                      <p className="text-xs font-medium text-gray-400">{item.date}</p>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-600 leading-relaxed list-disc list-inside">
                      {item.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="space-y-5">
          <div className="flex items-center justify-between">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">Education</h2>
            <span className="text-xs uppercase tracking-[0.3em] text-gray-400">Academic</span>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {education.map((item) => (
              <article
                key={item.institution}
                className="rounded-2xl border border-gray-100 bg-white p-5 shadow-md transition hover:shadow-lg"
                onMouseEnter={() => setHoveredEducation(item.institution)}
                onMouseLeave={() => setHoveredEducation((prev) => (prev === item.institution ? null : prev))}
                style={{
                  cursor:
                    hoveredEducation === item.institution && item.cursorKey && cursorLogos[item.cursorKey]
                      ? `url(${cursorLogos[item.cursorKey]}) 28 28, pointer`
                      : 'default',
                }}
              >
                <h3 className="text-sm font-semibold text-gray-900">{item.institution}</h3>
                <p className="text-sm text-gray-600 mt-1">{item.programme}</p>
                <p className="text-xs font-medium text-gray-400 mt-3">{item.date}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Awards */}
        <section className="space-y-5">
          <div className="flex items-center justify-between">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">Awards</h2>
            <span className="text-xs uppercase tracking-[0.3em] text-gray-400">Recognition</span>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {awards.map((award) => (
              <article
                key={award.title}
                className="rounded-2xl border border-gray-100 bg-white/95 p-5 shadow-md transition hover:shadow-lg"
              >
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold text-gray-900">{award.title}</h3>
                  <p className="text-xs text-indigo-500 font-semibold">{award.subtitle}</p>
                  <p className="text-xs font-medium text-gray-400 mt-3">{award.date}</p>
                </div>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">{award.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Skills & Tools */}
        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-md">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Skills</h2>
            <ul className="space-y-2 text-sm text-gray-600 list-disc list-inside">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-md">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Tools</h2>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-gray-200 bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="rounded-3xl border border-gray-100 bg-white p-6 shadow-md ">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Let’s Build Together</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            I love meeting teams who care about impactful, measurable experiences. Feel free to reach out for
            collaboration, speaking opportunities, or simply to say hello.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm font-semibold text-indigo-600">
            <a href="mailto:mikyocha@asu.edu" className="hover:underline">
            mikyocha@asu.edu
            </a>
            <span className="text-gray-300">•</span>
            <a href="https://www.linkedin.com/in/mikyocha/" target="_blank" rel="noopener noreferrer" className="hover:underline">
              LinkedIn ↗
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

