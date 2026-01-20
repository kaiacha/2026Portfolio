'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import heroPortrait from '@/src/assets/MainPic.jpg'
import nglLogo from '@/src/assets/NGL.png'
import nglLogoHover from '@/src/assets/NGLHover.png'
import naverCloudLogo from '@/src/assets/NaverCloud.png'
import naverCloudLogoHover from '@/src/assets/NaverCloudHover.png'
import MyLogoWhite from '@/src/assets/logowhite.png'
import GithubLogo from '@/src/assets/GithubLogo.png'
import FigmaLogo from '@/src/assets/FigmaLogo.png'
import JiraLogo from '@/src/assets/JiraLogo.svg'
import NotionLogo from '@/src/assets/NotionLogo.png'
import VSCodeLogo from '@/src/assets/VSCodeLogo.png'   
import IllustLogo from '@/src/assets/IllustLogo.png'

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
  },
  {
    institution: 'Hanyang University',
    programme: 'B.S. Media Technology & Computer Science',
    date: 'Ansan, Korea | Mar 2020 – Aug 2024',
  },
]

const awards = [
  {
    title: 'Campus Patent Universiade',
    subtitle: "KIPO Director's Prize | $7,700",
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

const tools = [
  { name: 'Figma', category: 'Design', icon: FigmaLogo },
  { name: 'Illustrator', category: 'Design', icon: IllustLogo },
  { name: 'VS Code', category: 'Development', icon: VSCodeLogo },
  { name: 'Git / GitHub', category: 'Development', icon: GithubLogo },
  { name: 'Jira', category: 'Project Management', icon: JiraLogo },
  { name: 'Notion', category: 'Project Management', icon: NotionLogo },
]

const principles = [
  { title: '⚖️ Balance Feasibility and Delight' },
  { title: '🤝 Design Through Co-Creation' },
  { title: '🧪 Experiment, Then Validate' },
  { title: '🛠️❤️ Build with Heart and Craft' },
  { title: '🎯 Aim for Clarity and Confidence' },
]

function OverlapCard({
  title,
  subtitle,
  index,
  total,
  scrollYProgress,
  icon,
}: {
  title: string
  subtitle?: string
  index: number
  total: number
  scrollYProgress: any
  icon?: any
}) {
  // Base stack spacing so cards are slightly separated at rest
  const baseDown = index * 26

  // As you scroll through the chapter, cards move up and overlap.
  const upAmount = index * 54 + 28

  const y = useTransform(scrollYProgress, [0, 1], [baseDown, -upAmount])
  const zIndex = total - index

  return (
    <motion.div
      style={{ y, zIndex, position: 'relative' }}
      className={index === 0 ? '' : '-mt-10'}
    >
      <div className="rounded-2xl bg-white px-7 py-6 transition hover:translate-y-[-2px]">
        <div className="flex items-center gap-3 mb-1">
          {icon && (
            <div className="relative h-7 w-7 rounded-lg overflow-hidden bg-gray-50 border border-gray-100">
              <Image
                src={icon}
                alt=""
                fill
                sizes="28px"
                className="object-contain"
              />
            </div>
          )}
          <h3 className="text-xl font-semibold text-zinc-900">{title}</h3>
        </div>
        {subtitle && (
          <p className="text-sm text-zinc-500">
            {subtitle}
          </p>
        )}
      </div>
    </motion.div>
  )
}

export default function AboutContent() {
  const toolsSectionRef = useRef<HTMLDivElement>(null)
  const philosophySectionRef = useRef<HTMLDivElement>(null)
  const aboutScrollRef = useRef<HTMLDivElement>(null)

  // Track scroll progress for stacked cards using the internal page scroll container.
  const { scrollYProgress: toolsProgress } = useScroll({
    container: aboutScrollRef,
    target: toolsSectionRef,
    offset: ['start 85%', 'end 15%'],
  })

  const { scrollYProgress: philosophyProgress } = useScroll({
    container: aboutScrollRef,
    target: philosophySectionRef,
    offset: ['start 85%', 'end 15%'],
  })

  return (
    <div
      className="w-full h-screen bg-gradient-to-b from-white via-white to-gray-50 overflow-hidden"
      style={{
        fontFamily:
          'ui-rounded, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
      }}
    >
      <div ref={aboutScrollRef} className="about-scroll h-screen overflow-y-auto">
        <div className="">
        {/* Chapter 1: About / Experience / Education */}
        <section className="px-5 md:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.2fr] gap-10 md:gap-14">
            {/* Left Column - Sticky Editorial Title + Photo */}
            <motion.div
              className="hidden md:block lg:sticky lg:top-24 self-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20%' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className=" overflow-hidden border border-gray-200 bg-white">
                <div className="relative w-full aspect-[3/4] min-h-[520px]">
                  <Image
                    src={heroPortrait}
                    alt="Mikyo Kaia Cha portrait"
                    fill
                    sizes="(min-width: 1024px) 520px, 100vw"
                    className="object-cover object-[center_-5%]"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            {/* Right Column - Editorial Content (internal scroll on desktop) */}
            <div className="no-scrollbar space-y-12 md:space-y-16 lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto lg:pr-8 md:px-0">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <div className="space-y-4">
                  <h1 className="text-5xl  mt-16 md:text-6xl font-semibold tracking-tight leading-[1.05] text-gray-900">
                    Mikyo
                    Kaia Cha
                  </h1>
                  <p className="text-base md:text-xl text-black leading-relaxed max-w-xl">
                    UX designer | Human Factors Engineer
                  </p>
                  {/* Mobile portrait (below tagline) */}
                  <div className="md:hidden">
                    <div className="mt-5 relative w-full h-[20rem] rounded-[23px] overflow-hidden border border-gray-200 bg-white">
                      <Image
                        src={heroPortrait}
                        alt="Mikyo Kaia Cha portrait"
                        fill
                        sizes="(max-width: 768px) 320px, 0px"
                        className="object-cover object-[center_40%]"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Intro */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <div className="space-y-2">
                  <p className="text-base text-gray-600 leading-relaxed">
                  I’m a UX designer and researcher who cares about making complex work feel simple. I use human factors thinking and user research to understand how people make decisions under time pressure, then turn those insights into clear interfaces, practical workflows, and prototypes teams can ship.
                  </p>
                  <p className="text-base text-gray-600 leading-relaxed">
                  Right now, I’m pursuing an M.S. in Human Systems Engineering at Arizona State University and preparing to begin research at ASU’s HIMER Lab, focused on human–AI collaboration and cognitive ergonomics. I’ve worked across logistics and cloud platform teams, collaborating with developers and operators to improve enterprise systems, and I enjoy building products where clarity, trust, and craft matter</p>
                </div>
              </motion.div>

              {/* Experience */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
              >
                <div className="space-y-5">
                  <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Experience</h2>
                  <div className="divide-y divide-gray-100 border border-gray-100 rounded-3xl overflow-hidden">
                    {experiences.map((exp) => (
                      <div key={exp.company} className="group p-6 md:p-7 bg-white">
                        <div className="flex flex-col md:flex-row md:items-start gap-5">
                          <div className="relative shrink-0 w-full md:w-auto">
                            <div className="relative w-full h-52 md:w-20 md:h-20 rounded-2xl md:rounded-full border border-gray-100 bg-white overflow-hidden">
                              <Image
                                src={exp.logo}
                                alt={`${exp.company} logo`}
                                fill
                                sizes="(min-width: 768px) 80px, 100vw"
                                className="object-contain p-6 md:p-3 opacity-100 transition-opacity duration-300 group-hover:opacity-0"
                              />
                              <Image
                                src={exp.hoverLogo}
                                alt={`${exp.company} alternate logo`}
                                fill
                                sizes="(min-width: 768px) 80px, 100vw"
                                className="object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                              />
                            </div>
                          </div>

                          <div className="flex-1 space-y-3">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                              <div>
                                <h3 className="text-lg md:text-xl font-semibold text-gray-900">{exp.company}</h3>
                                <p className="text-sm md:text-base text-gray-600">{exp.role}</p>
                              </div>
                              <p className="text-sm font-medium text-gray-400">{exp.date}</p>
                            </div>
                            <ul className="space-y-2 text-sm md:text-base text-gray-600 leading-relaxed list-disc list-inside">
                              {exp.highlights.map((highlight, idx) => (
                                <li key={idx}>{highlight}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Education */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
              >
                <div className="space-y-5">
                  <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Education</h2>
                  <div className="grid gap-4">
                    {education.map((edu) => (
                      <div
                        key={edu.institution}
                        className="rounded-3xl border border-gray-100 bg-white p-6 md:p-7"
                      >
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                          <div>
                            <h3 className="text-base md:text-lg font-semibold text-gray-900">{edu.institution}</h3>
                            <p className="text-sm md:text-base text-gray-600 mt-1">{edu.programme}</p>
                          </div>
                          <p className="text-sm font-medium text-gray-400">{edu.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Awards */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
              >
                <div className="space-y-5">
                  <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Awards</h2>
                  <div className="grid gap-4">
                    {awards.map((award) => (
                      <div
                        key={award.title}
                        className="rounded-3xl border border-gray-100 bg-white p-6 md:p-7"
                      >
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                          <div className="flex-1">
                            <h3 className="text-base md:text-lg font-semibold text-gray-900">{award.title}</h3>
                            <p className="text-sm md:text-base text-[#6c6c6c] underline font-medium mt-1">{award.subtitle}</p>
                            <p className="text-sm md:text-base text-gray-600 mt-2 leading-relaxed">{award.description}</p>
                          </div>
                          <p className="text-sm font-medium text-gray-400">{award.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Chapter 2: Tools */}
        <section ref={toolsSectionRef} className="relative overflow-visible">
          <div className="bg-zinc-950 text-white px-6 py-16 md:px-12 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.2fr] gap-10 md:gap-14">
              {/* Left Column - Sticky Title */}
              <motion.div
                className="lg:sticky lg:top-24 self-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20%' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="inline-block w-2.5 h-2.5 rounded-full bg-blue-400" />
                    <p className="text-sm font-medium text-zinc-300">Tools</p>
                  </div>
                  <h2 className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
                    My creative
                    <br />
                    toolbox
                  </h2>
                  <p className="mt-6 text-base md:text-lg text-zinc-300 leading-relaxed max-w-md">
                    A focused set of tools I use for UX research, interface design, and prototyping.
                  </p>
                </div>
              </motion.div>

              {/* Right Column - Overlapping Tool Cards */}
              <div className="space-y-4 pr-2 md:pr-6 relative overflow-visible">
                {tools.map((tool, index) => (
                  <OverlapCard
                    key={tool.name}
                    title={tool.name}
                    subtitle={tool.category}
                    icon={tool.icon}
                    index={index}
                    total={tools.length}
                    scrollYProgress={toolsProgress}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 3: Design Philosophy */}
        <section ref={philosophySectionRef} className="relative overflow-visible min-h-screen">
          <div className="bg-[#f5f5f7] text-gray-900 px-6 py-16 md:px-12 md:py-20 min-h-screen">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.2fr] gap-10 md:gap-14">
              {/* Left Column - Sticky Design Philosophy Title */}
              <motion.div
                className="lg:sticky lg:top-24 self-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20%' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="inline-block w-2.5 h-2.5 rounded-full bg-blue-400" />
                    <p className="text-sm font-medium text-gray-500">Ways of working</p>
                  </div>
                  <h2 className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
                    My design
                    <br />
                    philosophy
                  </h2>
                </div>
              </motion.div>

              {/* Right Column - Overlapping Philosophy Cards */}
              <div className="space-y-4 pr-2 md:pr-6 relative overflow-visible">
                {principles.map((item, index) => (
                  <OverlapCard
                    key={item.title}
                    title={item.title}
                    index={index}
                    total={principles.length}
                    scrollYProgress={philosophyProgress}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Back to top (below Design Philosophy) */}
        <div className="bg-[#f5f5f7] px-6 pb-16 md:px-12 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex justify-center"
          >
            <motion.button
              type="button"
              onClick={() => aboutScrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' })}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white/70 px-5 py-2.5 text-sm font-medium text-gray-700 backdrop-blur transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-80"
              >
                <path
                  d="M12 5l7 7-1.4 1.4L13 8.8V20h-2V8.8L6.4 13.4 5 12l7-7z"
                  fill="currentColor"
                />
              </svg>
            </motion.button>
          </motion.div>
        </div>

        {/* Chapter 4: Footer / Contact */}
        <section className="relative bg-zinc-950 text-white min-h-screen">
          <div className="px-6 py-16 md:px-12 md:py-20 min-h-screen flex flex-col">
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-start">
              {/* Left: Big statement */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              >
                <h2 className="text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.02]">
                  Let&apos;s create
                  <br />
                  something
                  <br />
                  extraordinary
                  <br />
                  together
                </h2>
              </motion.div>

              {/* Right: Contact card */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.05 }}
                className="space-y-10 lg:pt-6"
              >
                {/* Profile */}
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border border-white/10">
                    <Image
                      src={heroPortrait}
                      alt="Mikyo Kaia Cha"
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-lg font-semibold">Mikyo Kaia Cha</p>
                    <p className="text-sm text-white/60">UX Designer</p>
                    <div className="mt-2 flex items-center gap-3">
                      {/* LinkedIn */}
                      <motion.a
                        href="https://www.linkedin.com/in/mikyocha/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6, ease: 'easeInOut' }}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="text-white/80">
                          <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0.5 8.5H4.5V24H0.5V8.5zM8.5 8.5H12.3V10.6h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.65 4.78 6.1V24h-4v-7.75c0-1.85-.03-4.22-2.57-4.22-2.57 0-2.96 2.01-2.96 4.08V24h-4V8.5z"/>
                        </svg>
                      </motion.a>
                      {/* Instagram */}
                      <motion.a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Instagram"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6, ease: 'easeInOut' }}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-white/80">
                          <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z" stroke="currentColor" strokeWidth="2"/>
                          <path d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z" stroke="currentColor" strokeWidth="2"/>
                          <path d="M17.5 6.5h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                        </svg>
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Contact */}
                <div className="space-y-3">
                  <p className="text-sm text-white/50">Contact me</p>
                  <motion.a
                    href="mailto:mikyocha@asu.edu"
                    whileHover={{ x: -10 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className="inline-block text-3xl md:text-4xl font-semibold tracking-tight text-white hover:text-blue-300"
                  >
                    mikyocha@asu.edu
                  </motion.a>
                </div>
              </motion.div>
            </div>

            {/* Bottom bar */}
            <div className="mt-14 pt-6 border-t border-white/10 flex items-center justify-between">
              <div className="relative h-6 w-10">
                <Image
                  src={MyLogoWhite}
                  alt="Mikyo logo"
                  fill
                  sizes="40px"
                  className="object-contain opacity-90"
                />
              </div>
              <p className="text-xs text-white/40">© {new Date().getFullYear()} Mikyo Kaia Cha. All rights reserved.</p>
            </div>
          </div>
        </section>
        </div>
      </div>

      <style jsx global>{`
        /* Hide scrollbars but keep scroll enabled */
        .about-scroll { scrollbar-width: none; -ms-overflow-style: none; }
        .about-scroll::-webkit-scrollbar { width: 0; height: 0; }

        /* Hide scrollbars in internal right columns too */
        .about-scroll .no-scrollbar { scrollbar-width: none; -ms-overflow-style: none; }
        .about-scroll .no-scrollbar::-webkit-scrollbar { width: 0; height: 0; }
      `}</style>
    </div>
  )
}
