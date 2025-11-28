import type { Metadata } from 'next'
import Image from 'next/image'
import WindowPageLayout from '@/components/WindowPageLayout'
import slide1Dashboard from '@/src/Detail/Dashboard.png'
import slide2Mockup from '@/src/Detail/mockup1.png'
import mainDashImage from '@/src/Detail/mainDash.png'
import infoTabImage from '@/src/Detail/infotab.png'
import treatmentPanelImage from '@/src/Detail/image7.png'
import similarCasesImage from '@/src/Detail/SimilarPatientCases.png'
import aiAssessmentImage from '@/src/Detail/AIAssessment.png'
import doctorsNotesImage from '@/src/Detail/DoctorsNotes.png'
import preprocessingImage from '@/src/Detail/preprocess.png'
import normalizationImage from '@/src/Detail/normalize.png'
import featureSelectionImage from '@/src/Detail/featureselection.png'
import modelSelectionImage from '@/src/Detail/modelselection.png'
import fullMockupImage from '@/src/Detail/fullmockup.png'
import colorPaletteLeft from '@/src/Detail/color-left.png'
import colorPaletteTop from '@/src/Detail/color-top.png'
import colorPaletteBottom from '@/src/Detail/color-bottom.png'
import progressWheel1 from '@/src/Detail/Progress wheel1.svg'
import progressWheel2 from '@/src/Detail/Progress wheel2.svg'
import actualSvg from '@/src/Detail/actual.svg'
import medicalSvg from '@/src/Detail/medical.svg'
import anticancerLogo from '@/src/Detail/Anticancer_Logo.png'

const SLIDE_DASHBOARD = 'http://localhost:3845/assets/e933eeb47067cdb4012c0009f40e2dfad178abf7.png'

const SLIDE2_TAGS = ['Dashboard', 'Medical', 'Data Analysis', 'Cancer', 'AI-powered', 'Treatment']

const OVERVIEW_CARDS = [
  {
    heading: 'My Role',
    subheading: 'All-Rounder',
    bullets: ['Dashboard Design', 'Data Analysis (SQL)', 'AI development (python)'],
  },
  {
    heading: 'Team',
    subheading: '3 members',
    bullets: ['3 developers of the ICT Convergence Department'],
  },
  {
    heading: 'Timeline',
    subheading: '6-month Project',
    bullets: ['Jun 30, 2021 → Dec 1, 2021'],
  },
  {
    heading: 'Tools',
    subheading: 'Figma',
    bullets: ['Jira', 'Notion', 'VSCode', 'Google Colab'],
  },
]

const BACKGROUND01_TERM_STATS = [
  { phrase: '“Your cancer screening result is negative”', percent: 96 },
  { phrase: '“Your tumor is progressing”', percent: 79 },
  { phrase: '“Neurologically intact”', percent: 41 },
  { phrase: '“Chest X-ray is impressive”', percent: 21 },
]

const BACKGROUND01_DISCREPANCIES = [
  {
    title: 'Cancer Stage Perception',
    note: 'Overly optimistic',
    value: '37%',
    asset: progressWheel1,
  },
  {
    title: 'Treatment Goal Understanding',
    note: 'Misunderstand the treatment purpose',
    value: '31%',
    asset: progressWheel1,
  },
  {
    title: 'Recovery Expectation',
    note: 'Overestimate their chances of recovery',
    value: '58.6%',
    asset: progressWheel2,
  },
]

const BACKGROUND01_NEEDS = [
  'Clearer explanations are necessary.',
  'Minimize misinterpretation by visualizing complex medical information intuitively.',
  'Simplify terminology and provide intuitive graphs and treatment insights to enhance communication.',
]

const PHYSICIAN_BURNOUT = [
  { label: 'lack patient face time', value: 60 },
  { label: 'overwhelmed by patient demands', value: 75 },
  { label: 'cite staff shortages', value: 78, highlight: true },
]

const AI_TASK_BARS = [
  { label: 'Admin Tasks', value: 65 },
  { label: 'Diagnostics Accuracy', value: 100 },
  { label: 'Patient Data Analysis', value: 75 },
]

const PIE_SUPPORT_SRC = medicalSvg
const DATA_RETENTION_RING = actualSvg

const WORKFLOW_STEPS = [
  {
    section: 'Main Dashboard',
    items: [
      { title: 'Patient List', description: '1. Accessing Patient Data & Navigation' },
    ],
  },
  {
    section: 'Patient Dashboard',
    items: [
      { title: 'Patient Overview Panel', description: '2. Reviewing Patient Information' },
      { title: 'Personalized Treatment Solutions', description: '3. Evaluating AI Treatment Predictions' },
      { title: 'Data-Driven Patient Analysis', description: '4. Comparing Similar Cases' },
      { title: 'AI Assessment Notes', description: '5. AI-Assisted Clinical Insights' },
      { title: 'Doctor’s Notes', description: '6. Finalizing & Documenting Treatment' },
    ],
  },
  {
    section: 'Schedule & Chats',
    items: [
      { title: 'Scheduling & Communication', description: '7. Scheduling & Communication' },
    ],
  },
]

export const metadata: Metadata = {
  title: 'Anticancer | Mikyo Kaia Cha',
  description: 'Anticancer product concept and case study by Mikyo Kaia Cha.',
}

export default function AnticancerPage() {
  return (
    <WindowPageLayout title="Anticancer" currentPage="projects" fullScreen enableFinderModals>
      <article className="h-full w-full max-w-full overflow-y-auto overflow-x-hidden pb-10 ">
        {/* Slide 1 – dashboard showcase */}
        <section className="px-6 pt-12 text-black md:px-10 lg:px-16 xl:px-20">
          <div className="mx-auto max-w-4xl ">
            <div className="relative w-full overflow-hidden">
              <Image
                src={slide1Dashboard}
                alt="Anticancer dashboard overview"
                width={2048}
                height={1152}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Slide 2 – narrative hero */}
        <section className="px-6 pt-12 md:pt-28 text-black md:px-10 lg:px-16 xl:px-20">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 md:gap-12 lg:flex-row lg:items-center">
            <div className="flex-1 space-y-4 md:space-y-6 text-black">
              <div className="text-xs uppercase tracking-[0.35em] text-black/60">Medical Dashboard</div>
              <div className="space-y-4 md:space-y-6">
                <h2 className="text-2xl md:text-[2.6rem] font-semibold leading-[1.05] sm:text-5xl">Anticancer</h2>
                <p className="max-w-xl text-sm leading-relaxed text-black/80 sm:text-base">
                  Anticancer is an AI-powered dashboard for cancer treatment prediction, analyzing patient data to
                  estimate cure rates and treatment duration.
                </p>
                <div className="flex flex-wrap gap-2">
                  {SLIDE2_TAGS.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-black/25 px-4 py-1 text-xs font-medium text-black/80 backdrop-blur"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative flex flex-1 justify-end">
              <div className="relative h-[520px] w-full max-w-[420px] sm:h-[520px]">
                <div className="absolute inset-0 rounded-[38px] bg-gradient-to-br from-white/25 via-white/5 to-white/10 shadow-[0_30px_50px_rgba(0,0,0,0.30)]" />
                <div className="absolute inset-0 overflow-hidden rounded-[26px]">
                  <Image
                    src={slide2Mockup}
                    alt="Anticancer dashboard mockups"
                    fill
                    className="object-cover object-right"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 3 – overview summary */}
        <section className="px-6 pt-12 pb-12 md:pt-28 md:pb-24 text-[#232323] md:px-10 lg:px-16 xl:px-20">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 md:gap-12 lg:flex-row lg:items-start">
            <div className="flex-1 space-y-4 md:space-y-6">
              <span className="text-xs uppercase tracking-[0.35em] text-[#C0C0C0]">Overview</span>
              <div className="space-y-4 md:space-y-6">
                <h2 className="text-2xl md:text-[2rem] font-semibold leading-tight text-[#232323] sm:text-[3.2rem]">
                  Smarter Connections, Better Care!
                </h2>
                <div className="space-y-4 text-[14px] leading-relaxed text-[#232323]">
                  <h3 className="text-[1.2rem] font-semibold">Summary</h3>
                  <p>
                    Anticancer is an AI-powered dashboard that predicts cancer patients’ cure rates and treatment
                    duration using big data. This project won the Grand Prize at the ‘AI &amp; Data Mining for Cancer Big
                    Data Competition’ hosted by the National Cancer Center of Korea.
                  </p>
                  <p>
                    As the team leader of a three-member team, I was responsible for data analysis, AI model
                    development, and UI/UX dashboard design. To improve accuracy, we focused on handling missing values
                    and enhancing UX visualization, ensuring usability for both medical professionals and patients.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-2">
              {OVERVIEW_CARDS.map((card) => (
                <div
                  key={card.heading}
                  className="flex min-w-[200px] flex-col gap-4 rounded-[22px] border border-[rgba(79,92,136,0.46)] bg-white/70 p-6 md:p-8 text-[#232323] shadow-sm backdrop-blur"
                >
                  <div className="space-y-1">
                    <p className="text-[18px] font-semibold text-[#4F5C88]">{card.heading}</p>
                    <p className="text-[18px] font-semibold text-[#232323]">{card.subheading}</p>
                  </div>
                  <ul className="space-y-0 text-[12px] font-medium">
                    {card.bullets.map((item) => (
                      <li key={item} className="leading-1.0">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Slide 4 – Background 01 */}
        <section className="px-6 pt-12 pb-12 md:pt-28 md:pb-32 text-[#232323] md:px-10 lg:px-16 xl:px-20">
          <div className="mx-auto max-w-6xl space-y-6 md:space-y-10">
            <div className="space-y-2 md:space-y-3">
              <span className="text-xs uppercase tracking-[0.35em] text-[#4F5C88]">Background 01</span>
              <h3 className="text-2xl md:text-[2.1rem] font-semibold leading-tight sm:text-[2.6rem]">
                Bridging the Gap: Improving Patient Understanding in Cancer Treatment
              </h3>
              <p className="max-w-6xl text-sm leading-relaxed text-[#585858]">
                Effective doctor–patient communication is crucial. As shared decision-making becomes the norm, patients
                demand clearer, more accessible information.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-stretch">
              <div className="flex h-full w-full min-w-0 flex-col space-y-4 md:space-y-6">
                <div className="w-full min-w-0 rounded-[18px] bg-[#4F5C88] p-4 md:p-6 text-white shadow-[0_30px_80px_rgba(79,92,136,0.35)]">
                  <div className="flex items-center justify-between gap-2">
                  <h4 className="text-sm md:text-md font-semibold text-white/90 break-words"> 1. When Words Create Barriers</h4>

                  </div>
                  <div className="mt-4 md:mt-6 mb-2 space-y-3 md:space-y-4 text-sm">
                    {BACKGROUND01_TERM_STATS.map((item) => (
                      <div key={item.phrase} className="flex items-center min-w-0">
                        <div className="flex h-14 w-16 flex-shrink-0 items-center justify-center">
                          <div className="text-lg font-semibold text-white/90">{item.percent}%</div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-white/90 break-words">{item.phrase}</div>
                          <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/20">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-[#5B9EFF] to-[#7CABFF]"
                              style={{ width: `${item.percent}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <span className="block text-xs font-light text-white/70">Source: JAMA Research Data</span>
                </div>

                <div className="flex-1 w-full min-w-0 rounded-[18px] bg-[#5B9EFF] p-4 md:p-6 text-white shadow-[0_25px_70px_rgba(91,158,255,0.4)]">
                  <div className="text-sm md:text-md font-semibold break-words">Samsung Medical Center Research Team</div>
                  <blockquote className="mt-3 md:mt-4 text-sm leading-relaxed text-white/90 break-words">
                    "Many patients fail to accurately understand realistic treatment outcomes. This can lead to risky
                    decisions, highlighting the need for improved doctor–patient communication."
                  </blockquote>
                </div>
              </div>

              <div className="flex h-full w-full min-w-0 flex-col space-y-4 md:space-y-6">
                <div className="w-full min-w-0 rounded-[18px] border border-[#4F5C88]/60 bg-white p-4 md:p-6 text-[#232323] shadow-sm">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-sm md:text-md font-semibold text-[#4F5C88] break-words">
                      2. Patients Perceive Their Condition More Optimistically Than Reality
                    </h4>
                  </div>
                  <div className="mt-6 mb-2 grid gap-4 sm:grid-cols-3">
                    {BACKGROUND01_DISCREPANCIES.map((item) => (
                      <div key={item.note} className="flex flex-col gap-4 rounded-[18px] bg-white p-4 sm:p-6 shadow">
                        <span className="block min-h-[2.5rem] text-xs text-center sm:text-center pb-2 font-bold text-[#4F5C88] leading-tight">{item.title}</span>
                        <div className="flex flex-row sm:flex-col items-center justify-between sm:justify-center gap-3 sm:gap-2">
                          <div className="relative h-16 w-16 sm:h-20 sm:w-20 flex-shrink-0">
                            <Image src={item.asset} alt={item.note} fill className="object-contain" />
                          </div>
                          <div className="flex flex-col items-center gap-1 sm:gap-2 flex-1 sm:flex-none">
                            <p className=" text-[10px] md:text-xs font-light leading-tight text-[#FF6565] text-center sm:text-center">{item.note}</p>
                            <p className="text-xl font-semibold text-[#FF6565]">{item.value}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <span className="text-xs font-light text-[#8C94B4]">Source: Samsung Medical Center</span>
                </div>

                <div className="flex-1 w-full min-w-0 rounded-[18px] border border-[#5B9EFF]/40 bg-white p-4 md:p-6 text-[#232323] shadow-[0_20px_60px_rgba(91,158,255,0.25)]">
                  <h4 className="text-sm md:text-md font-semibold text-[#5B9EFF] break-words">What do they need?</h4>
                  <ul className="mt-4 md:mt-6 space-y-3 md:space-y-4 text-sm">
                    {BACKGROUND01_NEEDS.map((need) => (
                      <li key={need} className="flex gap-3 min-w-0">
                        <span className="mt-1 h-[6px] w-[6px] flex-none rounded-full bg-[#5B9EFF]" />
                        <span className="break-words">{need}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 5 – Background 02 */}
        <section className="px-6 pt-12 pb-12 md:pt-28 md:pb-32 text-[#232323] md:px-10 lg:px-16 xl:px-20">
          <div className="mx-auto max-w-6xl space-y-6 md:space-y-10">
            <div className="space-y-2 md:space-y-3">
              <span className="text-xs uppercase tracking-[0.35em] text-[#4F5C88]">Background 02</span>
              <h3 className="text-2xl md:text-[2.1rem] font-semibold leading-tight sm:text-[2.6rem]">
                AI in Healthcare: Unlocking Data Potential, Supporting Doctors
              </h3>
              <p className="max-w-6xl text-sm leading-relaxed text-[#585858]">
                AI is not here to replace doctors, but to assist them by reducing workload, improving diagnostic
                accuracy, and enhancing patient data analysis.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
              <div className="w-full min-w-0 space-y-4 md:space-y-6">
                <div className="w-full min-w-0 rounded-[18px] bg-[#4F5C88] p-4 md:p-6 text-white shadow-[0_30px_80px_rgba(79,92,136,0.35)]">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-sm font-semibold break-words">AI Can Assist, But Not Replace Doctors</h4>
                  </div>
                  <div className="mt-4 md:mt-6 mb-2 space-y-3">
                    {PHYSICIAN_BURNOUT.map((entry) => (
                      <div key={entry.label} className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 min-w-0">
                        <div className="relative h-10 w-full sm:w-[140px] md:w-[200px] flex-shrink-0 overflow-hidden rounded-[20px] border border-white/40 bg-white/20">
                          <div
                            className={`h-full rounded-[18px] ${
                              entry.highlight ? 'bg-[#5B9EFF]' : 'bg-white'
                            }`}
                            style={{ width: `${entry.value}%` }}
                          />
                          <span className="absolute left-2 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#4F5C88]">
                            {entry.value}%
                          </span>
                        </div>
                        <p className="flex-1 text-sm break-words min-w-0">{entry.label}</p>
                      </div>
                    ))}
                  </div>
          <span className="block text-[10px] text-white/70">Source: CNBC</span>

                </div>

                <div className="grid grid-cols-1 gap-4 md:gap-6 sm:grid-cols-2">
                  <div className="w-full min-w-0 flex flex-col items-center justify-between rounded-[18px] bg-[#5B9EFF] p-4 md:p-6 text-white shadow-[0_20px_60px_rgba(91,158,255,0.35)]">
                    <div className="text-center text-sm font-semibold break-words">Do you think AI can help with medical tasks?</div>
                    <div className="mt-4 md:mt-6 flex items-center gap-3 md:gap-4">
                      <div className="relative h-20 w-20 md:h-24 md:w-24 flex-shrink-0">
                        <Image src={PIE_SUPPORT_SRC} alt="83% yes" fill className="object-contain" />
                      </div>
                      <div className="flex flex-col text-sm font-semibold">
                        <span>Yes</span>
                        <span className="text-xl">83%</span>
                      </div>
                    </div>
                    <span className="self-start text-[10px] text-white/80">Source: CNBC</span>
                  </div>

                  <div className="w-full min-w-0 flex flex-col gap-3 md:gap-4 rounded-[18px] border border-[#4F5C88]/60 bg-white p-4 md:p-6 text-[#1676FF] shadow-[0_20px_50px_rgba(27,36,73,0.18)]">
                    <h4 className="w-full text-sm font-semibold text-center text-[#4F5C88] break-words">What tasks can AI assist with?</h4>
                    <div className="space-y-2 md:space-y-3 text-[#1676FF] min-w-0">
                      {AI_TASK_BARS.map((task) => (
                        <div key={task.label} className="space-y-1.5 md:space-y-2 min-w-0">
                          <div className="flex items-center justify-between gap-2 text-xs font-medium min-w-0">
                            <span className="break-words min-w-0">{task.label}</span>
                            <span className="flex-shrink-0">{task.value}%</span>
                          </div>
                          <div className="h-2 w-full min-w-0 overflow-hidden rounded-full bg-[#E5EEFF]">
                            <div
                              className="h-full rounded-full bg-[#1676FF]"
                              style={{ width: `${task.value}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    <span className="text-[10px] text-[#4F5C88]">Source: CNBC</span>
                  </div>
                </div>
              </div>

              <div className="w-full min-w-0 space-y-4 md:space-y-6">
                <div className="w-full min-w-0 rounded-[18px] border border-[#4F5C88] bg-white p-4 md:p-6 shadow-sm">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-sm font-semibold text-[#4F5C88] break-words">Medical Data Is Stored, But Rarely Used</h4>
                  </div>
                  <div className="mt-4 md:mt-6 flex flex-col items-center gap-5 md:gap-7">
                    <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
                      <div className="flex flex-col items-center text-center text-[#4F5C88]">
                        <span className="text-xs font-medium break-words">Hospital Data Retention Policy</span>
                        <span className="text-xl md:text-2xl font-semibold">5–10 years</span>
                      </div>
                      <div className="relative h-24 w-24 md:h-32 md:w-32 flex-shrink-0">
                        <Image src={DATA_RETENTION_RING} alt="Data retention vs usage" fill className="object-contain" />
                      </div>
                      <div className="flex items-center justify-center flex-col text-[#4F5C88]">
                        <span className="text-[10px] break-words">Actual utilization rate</span>
                        <span className="text-base md:text-lg font-medium">20%</span>
                      </div>
                    </div>
                    <span className="self-start text-[10px] text-[#8C94B4]">Source: CNBC</span>
                  </div>
                </div>

                <div className="w-full min-w-0 rounded-[18px] border border-[#5B9EFF]/50 bg-white p-4 md:p-6 text-[#5B9EFF] shadow-[0_15px_40px_rgba(91,158,255,0.25)]">
                  <h4 className="text-sm font-semibold break-words">So… What's the Solution?</h4>
                  <ul className="mt-6 md:mt-9 space-y-3 md:space-y-4 text-sm text-[#232323]">
                    <li className="break-words">
                      <span className="font-semibold text-[#5B9EFF]">✔</span> AI should reduce administrative burdens and unlock
                      underutilized medical data.
                    </li>
                    <li className="break-words">
                      <span className="font-semibold text-[#5B9EFF]">✔</span> AI must support doctors with data-driven insights,
                      enhancing decision-making.
                    </li>
                    <li className="break-words">
                      <span className="font-semibold text-[#5B9EFF]">✔</span> Bridge the gap between stored medical data and
                      clinical application for better outcomes.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 6 – Doctor workflow */}
        <section className="px-6 pt-12 pb-12 md:pt-28 md:pb-32 md:px-10 lg:px-16 xl:px-20">
          <div className="mx-auto max-w-6xl rounded-[32px] bg-gradient-to-br from-[#7EA9FF] via-[#6C88FF] to-[#4E6ADB] p-6 md:p-8 text-white shadow-[0_40px_120px_rgba(78,106,219,0.35)]">
            <header className="space-y-2">
              <span className="text-xs uppercase tracking-[0.35em] text-white/80">Workflow</span>
              <h3 className="text-2xl md:text-[2.4rem] font-semibold leading-tight">Doctor's Workflow with Anticancer</h3>
            </header>

            <div className="mt-6 md:mt-10 flex flex-col gap-6 md:gap-10">
              <div className="flex flex-wrap justify-center gap-6">
                {WORKFLOW_STEPS.map((group, index) => (
                  <div
                    key={group.section}
                    className="flex min-w-[260px] flex-1 flex-col gap-4 rounded-[28px] bg-white/90 p-6 text-[#232323] shadow-md"
                  >
                    <div
                      className={`rounded-full px-5 py-2 text-center text-sm font-semibold ${
                        index === 0
                          ? 'bg-[#4F5C88] text-white'
                          : index === 1
                          ? 'bg-[#5B9EFF] text-white'
                          : 'bg-[#4F5C88] text-white'
                      }`}
                    >
                      {group.section}
                    </div>
                    <div className="space-y-4">
                      {group.items.map((item) => (
                        <div
                          key={item.title}
                          className="rounded-[20px] border border-[#4F5C88]/40 bg-white p-4 shadow-sm"
                        >
                          <p className="text-sm font-semibold text-[#4F5C88]">{item.title}</p>
                          <p className="mt-1 text-sm text-[#232323]/80">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Slide 7 – Main Dashboard Spotlight */}
        <section className="px-6 pt-12 pb-12 md:pt-28 md:pb-32 text-[#232323] md:px-10 lg:px-16 xl:px-20">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 md:gap-12 lg:flex-row lg:items-center">
            <div className="flex-1 space-y-4 md:space-y-6">
              <span className="text-xs uppercase tracking-[0.35em] text-[#4F5C88]">Main Dashboard</span>
              <h3 className="text-2xl md:text-[2.2rem] font-semibold leading-tight sm:text-[2.8rem]">
                Every Patient Detail at a Glance
              </h3>
              <p className="text-sm leading-relaxed text-[#585858] sm:text-base">
                The primary dashboard gives doctors immediate access to patient lists, daily summaries, and upcoming
                appointments. Personalized widgets highlight priority visits, real-time patient metrics, and relevant
                medical updates so clinicians can start each day fully informed.
              </p>
              <ul className="space-y-3 text-sm text-[#232323]">
                <li>
                  <span className="font-semibold text-[#5B9EFF]">•</span> Patient list sorted by urgency with quick access
                  to visit details.
                </li>
                <li>
                  <span className="font-semibold text-[#5B9EFF]">•</span> Summary cards surface vital stats, recent
                  observations, and prescriptions.
                </li>
                <li>
                  <span className="font-semibold text-[#5B9EFF]">•</span> Upcoming appointment calendar synchronizes with
                  the hospital schedule.
                </li>
              </ul>
            </div>

            <div className="flex-1">
            <div className="relative mx-auto w-full max-w-[620px] overflow-hidden rounded-[16px] shadow-[0_25px_70px_rgba(78,106,219,0.25)]">
            <Image src={mainDashImage} alt="Anticancer main dashboard" className="h-auto w-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Slide 8 – Patient dashboard view */}
        <section className="px-6 pt-12 pb-12 md:pt-28 md:pb-32 text-[#232323] md:px-10 lg:px-16 xl:px-20">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 md:gap-12 lg:flex-row lg:items-start">
            <div className="flex-1 space-y-4 md:space-y-6">
              <span className="text-xs uppercase tracking-[0.35em] text-[#4F5C88]">Patient Dashboard</span>
              <h3 className="text-2xl md:text-[2.2rem] font-semibold leading-tight sm:text-[2.8rem]">
                Personalized Treatment Planning for Every Patient
              </h3>
              <p className="text-sm leading-relaxed text-[#585858] sm:text-base">
                The patient dashboard surfaces individualized care plans, AI predictions, and case comparisons in one
                view. Clinicians can adjust treatments, review AI assessment notes, and document decisions without
                leaving the screen.
              </p>
              <ul className="space-y-3 text-sm text-[#232323]">
                <li><span className="font-semibold text-[#5B9EFF]">•</span> Treatment success forecasts and risk levels update in real time.</li>
                <li><span className="font-semibold text-[#5B9EFF]">•</span> Similar patient analytics offer evidence to support clinical decisions.</li>
                <li><span className="font-semibold text-[#5B9EFF]">•</span> AI assessment notes and doctor’s notes keep communication aligned.</li>
              </ul>
            </div>

            <div className="flex-1">
              <div className="relative mx-auto w-full max-w-[620px] overflow-hidden rounded-[16px] shadow-[0_25px_70px_rgba(78,106,219,0.25)]">
                <Image
                  src={slide1Dashboard}
                  alt="Anticancer patient dashboard"
                  width={1600}
                  height={1000}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Slide 9 – Patient overview panel */}
        <section className="px-6 pt-12 pb-12 md:pt-28 md:pb-32 text-[#232323] md:px-10 lg:px-16 xl:px-20">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 md:gap-12 lg:flex-row lg:items-center">
            <div className="flex-1 order-2 lg:order-1">
              <div className="mx-auto w-full p-3 bg-white max-w-[160px] overflow-hidden border rounded-[16px] border-[#ECEFF8] bg-white shadow-[0_20px_60px_rgba(78,106,219,0.55)]">
                <Image src={infoTabImage} alt="Patient overview panel" className="h-auto w-full object-cover" />
              </div>
            </div>

            <div className="flex-1 space-y-4 md:space-y-6 order-1 lg:order-2">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.35em] text-[#4F5C88]">2. Reviewing Patient Information</span>
                <h3 className="text-2xl md:text-[2.2rem] font-semibold leading-tight sm:text-[2.6rem]">Patient Overview Panel</h3>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-[#232323] sm:text-base">
                <div>
                  <p className="font-semibold">✔ Basic patient details & medical background</p>
                  <p className="text-[#585858]">
                    Automatically summarizes age, weight, smoking history, menopause status, and more so clinicians can
                    understand the patient at a glance.
                  </p>
                </div>
                <div>
                  <p className="font-semibold">✔ Cancer classification & genetic markers</p>
                  <p className="text-[#585858]">
                    Displays tumor type (Ductal Carcinoma), BRCA gene mutations, and staging (T, N, M) in a structured,
                    editable format.
                  </p>
                </div>
              </div>
              <div className="rounded-[20px] border border-[#E0E4F5] bg-white p-5 text-sm text-[#232323] shadow-sm">
                <p className="font-semibold text-[#5B9EFF]">💡 Why it matters?</p>
                <p className="mt-2 text-[#585858]">
                  Doctors get a quick snapshot of the patient's condition before making treatment decisions, ensuring
                  nothing critical is overlooked.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 10 – Personalized treatment solutions */}
        <section className="px-6 pt-12 pb-12 md:pt-28 md:pb-32 text-[#232323] md:px-10 lg:px-16 xl:px-20">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 md:gap-12 lg:flex-row lg:items-center">
            <div className="flex-1 space-y-4 md:space-y-6">
              <span className="text-xs uppercase tracking-[0.35em] text-[#4F5C88]">
                3. Evaluating AI Treatment Predictions
              </span>
              <h3 className="text-2xl md:text-[2.2rem] font-semibold leading-tight sm:text-[2.8rem]">Personalized Treatment Solutions</h3>
              <div className="space-y-4 text-sm leading-relaxed text-[#232323] sm:text-base">
                <div>
                  <p className="font-semibold">✔ Predicted treatment duration</p>
                  <p className="text-[#585858]">
                    AI estimates the expected treatment timeline based on patient history, helping doctors plan
                    realistic care paths.
                  </p>
                </div>
                <div>
                  <p className="font-semibold">✔ Predicted cure rate</p>
                  <p className="text-[#585858]">
                    Displays cure probability so clinicians can compare therapeutic options with transparent risk
                    profiles.
                  </p>
                </div>
                <div>
                  <p className="font-semibold">✔ AI-powered treatment recommendations</p>
                  <ul className="mt-2 space-y-2 text-[#585858]">
                    <li>Suggests the best treatment combinations using historical outcome data.</li>
                    <li>Highlights potential side effects and recovery times for informed decision-making.</li>
                  </ul>
                </div>
              </div>
              <div className="rounded-[20px] border border-[#E0E4F5] bg-white p-5 text-sm text-[#232323] shadow-sm">
                <p className="font-semibold text-[#5B9EFF]">💡 Why it matters?</p>
                <p className="mt-2 text-[#585858]">
                  Clinicians can quickly evaluate AI predictions, compare options, and tailor treatment plans without
                  switching views.
                </p>
              </div>
            </div>

            <div className="flex-1">
              <div className="relative mx-auto w-full p-3 bg-white max-w-[620px] overflow-hidden rounded-[16px] border border-[#E1E7FF] bg-white shadow-[0_25px_70px_rgba(78,106,219,0.25)]">
                <Image
                  src={treatmentPanelImage}
                  alt="Anticancer treatment recommendation module"
                  width={1600}
                  height={1000}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Slide 11 – Similar patient cases */}
        <section className="px-6 pt-12 pb-12 md:pt-28 md:pb-32 text-[#232323] md:px-10 lg:px-16 xl:px-20">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 md:gap-12 lg:flex-row lg:items-center">
            <div className="flex-1 space-y-4 md:space-y-6">
              <span className="text-xs uppercase tracking-[0.35em] text-[#4F5C88]">4. Comparing Similar Cases</span>
              <h3 className="text-2xl md:text-[2.2rem] font-semibold leading-tight sm:text-[2.8rem]">Similar Patient Cases</h3>
              <div className="space-y-4 text-sm leading-relaxed text-[#232323] sm:text-base">
                <div>
                  <p className="font-semibold">✔ Filterable comparisons</p>
                  <p className="text-[#585858]">
                    Toggle tumor staging, genetic markers, and treatment duration to see how comparable patients
                    responded to care.
                  </p>
                </div>
                <div>
                  <p className="font-semibold">✔ Similarity scoring</p>
                  <p className="text-[#585858]">
                    Provides a clear similarity percentage to build confidence in selecting AI-suggested plans.
                  </p>
                </div>
                <div>
                  <p className="font-semibold">✔ Outcome insights</p>
                  <p className="text-[#585858]">
                    Review surgeries, treatments, and recovery outcomes from matching cases to guide final decisions.
                  </p>
                </div>
              </div>
              <div className="rounded-[20px] border border-[#E0E4F5] bg-white p-5 text-sm text-[#232323] shadow-sm">
                <p className="font-semibold text-[#5B9EFF]">💡 Why it matters?</p>
                <p className="mt-2 text-[#585858]">
                  Doctors can confirm treatment plans by studying proven outcomes from highly similar patients.
                </p>
              </div>
            </div>

            <div className="flex-1">
              <div className="relative mx-auto p-3 bg-white w-full max-w-[620px] overflow-hidden rounded-[16px] border border-[#E1E7FF] bg-white shadow-[0_25px_70px_rgba(78,106,219,0.25)]">
                <Image
                  src={similarCasesImage}
                  alt="Similar patient cases visualization"
                  width={1600}
                  height={1000}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Slide 12 – AI Assessment Notes */}
        <section className="px-6 pt-12 pb-12 md:pt-28 md:pb-32 text-[#232323] md:px-10 lg:px-16 xl:px-20">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 md:gap-12 lg:flex-row lg:items-center">
            <div className="flex-1 space-y-4 md:space-y-6">
              <span className="text-xs uppercase tracking-[0.35em] text-[#4F5C88]">5. AI-Assisted Clinical Insights</span>
              <h3 className="text-2xl md:text-[2.1rem] font-semibold leading-tight sm:text-[2.6rem]">AI Assessment Notes</h3>
              <div className="space-y-4 text-sm leading-relaxed text-[#232323] sm:text-base">
                <div>
                  <p className="font-semibold">✔ Treatment duration & cure predictions</p>
                  <p className="text-[#585858]">
                    AI summarizes expected recovery timelines and cure probabilities, giving clinicians confidence in
                    proposed plans.
                  </p>
                </div>
                <div>
                  <p className="font-semibold">✔ Alternative recommendations</p>
                  <p className="text-[#585858]">
                    When conditions worsen, the panel suggests escalation paths such as mastectomy or additional
                    chemotherapy.
                  </p>
                </div>
                <div>
                  <p className="font-semibold">✔ Patient similarity analysis</p>
                  <p className="text-[#585858]">
                    Surfaces similar past cases with their outcomes to inform nuanced treatment adjustments.
                  </p>
                </div>
              </div>
              <div className="rounded-[20px] border border-[#E0E4F5] bg-white p-5 text-sm text-[#232323] shadow-sm">
                <p className="font-semibold text-[#5B9EFF]">💡 Why it matters?</p>
                <p className="mt-2 text-[#585858]">
                  AI notes reduce manual paperwork and keep every recommendation transparent, so doctors can justify
                  treatment changes instantly.
                </p>
              </div>
            </div>

            <div className="flex-1">
              <div className="relative mx-auto w-full max-w-[260px] overflow-hidden rounded-[24px] border border-[#E1E7FF] bg-white shadow-[0_25px_70px_rgba(78,106,219,0.2)]">
                <Image
                  src={aiAssessmentImage}
                  alt="AI assessment panel"
                  width={600}
                  height={900}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Slide 13 – Doctor's Notes */}
        <section className="px-6 pt-12 pb-12 md:pt-28 md:pb-32 text-[#232323] md:px-10 lg:px-16 xl:px-20">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 md:gap-12 lg:flex-row lg:items-center">
            <div className="flex-1 space-y-4 md:space-y-6">
              <span className="text-xs uppercase tracking-[0.35em] text-[#4F5C88]">6. Finalizing & Documenting Treatment</span>
              <h3 className="text-2xl md:text-[2.1rem] font-semibold leading-tight sm:text-[2.6rem]">Doctor's Notes</h3>
              <div className="space-y-4 text-sm leading-relaxed text-[#232323] sm:text-base">
                <div>
                  <p className="font-semibold">✔ Plan documentation</p>
                  <p className="text-[#585858]">
                    Clinicians record the agreed treatment plan, including hormone therapy and radiation regimens.
                  </p>
                </div>
                <div>
                  <p className="font-semibold">✔ Risk and monitoring guidance</p>
                  <p className="text-[#585858]">
                    Notes capture risk factors, follow-up schedules, and alternative options should the tumor progress.
                  </p>
                </div>
                <div>
                  <p className="font-semibold">✔ Patient lifestyle coaching</p>
                  <p className="text-[#585858]">
                    Final advice encourages healthy habits and proactive symptom reporting between visits.
                  </p>
                </div>
              </div>
              <div className="rounded-[20px] border border-[#E0E4F5] bg-white p-5 text-sm text-[#232323] shadow-sm">
                <p className="font-semibold text-[#5B9EFF]">💡 Why it matters?</p>
                <p className="mt-2 text-[#585858]">
                  Keeping physician notes inside Anticancer ensures every treatment decision, risk note, and patient
                  instruction stays synchronized with the dashboard.
                </p>
              </div>
            </div>

            <div className="flex-1">
              <div className="relative mx-auto w-full max-w-[260px] overflow-hidden rounded-[24px] border border-[#E1E7FF] bg-white shadow-[0_25px_70px_rgba(78,106,219,0.2)]">
                <Image
                  src={doctorsNotesImage}
                  alt="Doctor's notes panel"
                  width={500}
                  height={800}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Slide 14 – Technical approach */}
        <section className="px-6 pt-12 pb-12 md:pt-28 md:pb-32 text-[#232323] md:px-10 lg:px-16 xl:px-20">
          <div className="mx-auto max-w-6xl space-y-6 md:space-y-12">
            <header className="space-y-2">
              <span className="text-xs uppercase tracking-[0.35em] text-[#4F5C88]">Technical Approach</span>
              <h3 className="text-xl md:text-[2.2rem] font-semibold leading-tight sm:text-[2.8rem]">
                Big Data Processing &amp; AI Implementation
              </h3>
            </header>

            <div className="grid gap-4 md:gap-8 lg:grid-cols-2">
              <div className="rounded-[32px] bg-[#4F5C88] p-6 md:p-8 text-white shadow-[0_35px_100px_rgba(79,92,136,0.35)]">
                <div className="flex items-start justify-between">
                  <h4 className="text-xl md:text-2xl font-semibold">Data Preprocessing</h4>
                  <span className="text-3xl font-semibold text-white/70">01</span>
                </div>
                <div className="mt-6 flex flex-col gap-6 lg:flex-col lg:items-start">
                  <div className="w-full rounded-[12px] border border-white/40 bg-white/10 p-3">
                    <Image src={preprocessingImage} alt="Preprocessing spreadsheet" className="h-auto w-full" />
                  </div>
                  <div className="space-y-3 text-sm leading-relaxed">
                    <p className="font-semibold">Outlier & missing-value handling</p>
                    <ul className="space-y-2 text-white/90">
                      <li>‘99: Not Applicable’ values replaced with NULL or mean imputation.</li>
                      <li>Features like marriage count, age at first birth, and number of births standardized.</li>
                      <li>Advanced imputation methods (KNN, MICE) prepared for robust handling.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="rounded-[32px] bg-[#5B9EFF] p-8 text-white shadow-[0_35px_100px_rgba(91,158,255,0.35)]">
                <div className="flex items-start justify-between">
                  <h4 className="text-xl md:text-2xl font-semibold">Normalization</h4>
                  <span className="text-3xl font-semibold text-white/80">02</span>
                </div>
                <div className="mt-6 flex flex-col gap-6 lg:flex-col lg:items-start">
                  <div className=" rounded-[12px] border border-white/40 bg-white/10 p-3">
                    <Image src={normalizationImage} alt="Normalization charts" className="h-auto w-full" />
                  </div>
                  <div className="space-y-3 text-sm leading-relaxed">
                    <p className="font-semibold">Scaling for model performance</p>
                    <ul className="space-y-2 text-white/90">
                      <li>MinMaxScaler applies consistent scaling across features.</li>
                      <li>Preprocessing removes outliers prior to scaling to preserve distributions.</li>
                      <li>Ensures AI models converge faster with more stable gradients.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 15 – Feature selection & modeling */}
        <section className="px-6 pt-12 pb-12 md:pt-28 md:pb-32 text-[#232323] md:px-10 lg:px-16 xl:px-20">
          <div className="mx-auto max-w-6xl space-y-6 md:space-y-12">
            <header className="space-y-2">
              <span className="text-xs uppercase tracking-[0.35em] text-[#4F5C88]">Model Development</span>
              <h3 className="text-2xl md:text-[2.2rem] font-semibold leading-tight sm:text-[2.8rem]">
                Feature Selection & Baseline Modeling
              </h3>
            </header>

            <div className="grid gap-4 md:gap-8 lg:grid-cols-2">
              <div className="rounded-[32px] bg-white p-6 md:p-8 shadow-[0_30px_90px_rgba(78,106,219,0.18)]">
                <div className="flex items-start justify-between">
                  <h4 className="text-xl md:text-2xl font-semibold text-[#4F5C88]">Feature Importance Analysis</h4>
                  <span className="text-3xl font-semibold text-[#4F5C88]/60">03</span>
                </div>
                <p className="mt-4 text-sm text-[#585858]">
                  Gradient boosted trees surfaced the top 30 features influencing treatment outcomes, including tumor
                  staging, hormone therapy, and BRCA markers.
                </p>
                <div className="mt-6 overflow-hidden rounded-[18px] border border-[#E0E4F5] bg-white">
                  <Image
                    src={featureSelectionImage}
                    alt="Feature importance chart"
                    width={900}
                    height={520}
                    className="h-auto w-full object-contain"
                  />
                </div>
              </div>

              <div className="rounded-[32px] bg-white p-8 shadow-[0_30px_90px_rgba(91,158,255,0.18)]">
                <div className="flex items-start justify-between">
                  <h4 className="text-xl md:text-2xl font-semibold text-[#5B9EFF]">Model Selection Workflow</h4>
                  <span className="text-3xl font-semibold text-[#5B9EFF]/70">04</span>
                </div>
                <p className="mt-4 text-sm text-[#585858]">
                  Jupyter notebooks iterate through baseline logistic regression, train/validation splits, and metric
                  tracking to compare model performance.
                </p>
                <div className="mt-6 overflow-hidden rounded-[18px] border border-[#E0E4F5] bg-[#F7F9FF]">
                  <Image
                    src={modelSelectionImage}
                    alt="Model selection notebook"
                    width={900}
                    height={520}
                    className="h-auto w-full object-contain"
                  />
                </div>
                <ul className="mt-6 space-y-2 text-sm text-[#232323]">
                  <li>Train/test split (15%) with additional validation set for hyperparameter tuning.</li>
                  <li>Baseline accuracy benchmarked against majority class before advanced models.</li>
                  <li>Scikit-learn pipeline standardizes feature engineering for reproducibility.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 16 – Final UI collage */}
        <section className="px-6 pt-12 pb-12 md:pt-28 md:pb-32 text-[#232323] md:px-10 lg:px-16 xl:px-20">
          <div className="mx-auto max-w-6xl space-y-4 md:space-y-6 text-center">
          <div className="overflow-hidden rounded-[16px] bg-white">
              <Image src={fullMockupImage} alt="Anticancer UI collage" className="h-auto w-full object-cover" />
            </div>
          </div>
        </section>

        {/* Slide 17 – Color system */}
        <section className="px-6 pt-12 pb-12 md:pt-28 md:pb-32 text-[#232323] md:px-10 lg:px-16 xl:px-20">
          <div className="mx-auto max-w-6xl space-y-6 md:space-y-12">
            <header className="space-y-2">
              <span className="text-xs uppercase tracking-[0.35em] text-[#4F5C88]">Design Guide</span>
              <h3 className="text-2xl md:text-[2.2rem] font-semibold leading-tight sm:text-[2.8rem]">Color System</h3>
            </header>

            <div className="grid gap-4 md:gap-8 lg:grid-cols-3">
              {/* Column 1: Dark Blue */}
              <div className="flex flex-col rounded-[30px] bg-[#4F5C88] p-6 md:p-8 text-white shadow-[0_30px_90px_rgba(79,92,136,0.35)]">
                <h4 className="text-xs md:text-2xl ">Primary Color · 01</h4>
                <p className=" text-2xl md:text-lg font-semibold">Dark Blue</p>
                <div className="mt-auto flex items-end justify-between">
                  <div className="text-sm leading-relaxed">
                    <p>HEX · #4F5C88</p>
                    <p>RGB · 79 | 92 | 136</p>
                  </div>
                  <div className="relative h-24 w-24 overflow-hidden">
                    <Image src={anticancerLogo} alt="Anticancer Logo" fill className="object-contain" />
                  </div>
                </div>
              </div>

              {/* Column 2: Blue and Light Blue stacked */}
              <div className="flex flex-col space-y-6">
                <div className="flex flex-1 flex-col rounded-[24px] bg-[#0090FF] p-6 text-white shadow-[0_25px_60px_rgba(0,144,255,0.35)]">
                  <div className="flex items-start justify-between">
                    <div>
                    <h4 className="text-xs md:text-2xl ">Primary Color · 02</h4>
                <p className=" text-2xl md:text-lg font-semibold">Blue</p>
                    <div className="mt-3 text-sm">
                      <p>HEX · #0090FF</p>
                      <p>RGB · 0 | 144 | 255</p>
                    </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col rounded-[24px] bg-[#C3DEF4] p-6 text-[#232323] shadow-[0_25px_60px_rgba(195,222,244,0.55)]">
                <h4 className="text-xs md:text-2xl ">Primary Color · 03</h4>
                <p className=" text-2xl md:text-lg font-semibold">Light Blue</p>
                  <div className="mt-3 text-sm text-[#232323]/70">
                    <p>HEX · #C3DEF4</p>
                    <p>RGB · 195 | 222 | 244</p>
                  </div>
                </div>
              </div>

              {/* Column 3: Light Pink */}
              <div className="flex flex-col rounded-[24px] bg-[#F5D5E4] p-6 text-[#232323] shadow-[0_25px_60px_rgba(245,213,228,0.55)]">
              <h4 className="text-xs md:text-2xl ">Primary Color · 04</h4>
                <p className=" text-2xl md:text-lg font-semibold">Light Pink</p>
                <div className="mt-auto flex items-end justify-between">
                  <div className="mt-3 text-sm text-[#232323]/70">
                  <p>HEX · #F5D5E4</p>
                  <p>RGB · 245 | 213 | 228</p>
                  </div>
                  <div className="relative h-24 w-24 overflow-hidden">
                    <Image src={anticancerLogo} alt="Anticancer Logo" fill className="object-contain" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </WindowPageLayout>
  )
}
