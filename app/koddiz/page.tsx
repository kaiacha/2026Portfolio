import type { Metadata } from 'next'
import Image from 'next/image'
import WindowPageLayout from '@/components/WindowPageLayout'
import ResearchFlowDiagram from '@/components/koddiz/ResearchFlowDiagram'
import SurveyCharts from '@/components/koddiz/SurveyCharts'
import SolutionCard from '@/components/koddiz/SolutionCards'
import ScrollAnimation from '@/components/koddiz/ScrollAnimation'
import FlowItemAnimation from '@/components/koddiz/FlowItemAnimation'
import koddizMain1 from '@/src/KoddizImage/koddizmain1.png'
import koddizMain2 from '@/src/KoddizImage/koddizmain2.png'
import koddizMain3 from '@/src/KoddizImage/koddizmain3.png'
import koddizMain4 from '@/src/KoddizImage/koddizmain4.png'
import iphoneMockup from '@/src/KoddizImage/Iphonemockup.png'
import pp1_1 from '@/src/KoddizImage/pp1-1.png'
import pp1_2 from '@/src/KoddizImage/pp1-2.png'
import pp2_1 from '@/src/KoddizImage/pp2-1.png'
import pp2_2 from '@/src/KoddizImage/pp2-2.png'
import pp3_1 from '@/src/KoddizImage/pp3-1.png'
import pp3_2 from '@/src/KoddizImage/pp3-2.png'
import progressWheel1 from '@/src/KoddizImage/Progress wheel1.svg'
import progressWheel2 from '@/src/KoddizImage/Progress wheel2.svg'
import progressWheel3 from '@/src/KoddizImage/Progress wheel3.png'
import progressWheel4 from '@/src/KoddizImage/Progress wheel4.png'
import progressWheel70 from '@/src/KoddizImage/Progress wheel70.svg'
import userImage from '@/src/KoddizImage/user.png'
import slide7_1 from '@/src/KoddizImage/Slide7_1.png'
import slide7_2 from '@/src/KoddizImage/slide7_2.png'
import slide8_1 from '@/src/KoddizImage/slide8_1.png'
import slide8_2 from '@/src/KoddizImage/slide8_2.png'
import slide9_1 from '@/src/KoddizImage/slide9_1.png'
import slide9_2 from '@/src/KoddizImage/slide9_2.png'
import slide9_3 from '@/src/KoddizImage/slide9_3.png'
import slide10_Yes70 from '@/src/KoddizImage/slide10_Yes70.png'
import slide10RisingArrow from '@/src/KoddizImage/slide10_rasingarrow.svg'
import slide11_1 from '@/src/KoddizImage/slide11_1.png'
import slide11_2 from '@/src/KoddizImage/slide11_2.png'
import slide12_1 from '@/src/KoddizImage/slide12_1.png'
import slide12_2 from '@/src/KoddizImage/slide12_2.png'
import slide13_1 from '@/src/KoddizImage/slide13_1.png'
import slide13_2 from '@/src/KoddizImage/slide13_2.png'
import slide14_1 from '@/src/KoddizImage/slide14_1.png'
import slide14_2 from '@/src/KoddizImage/slide14_2.png'
import slide15_arrow from '@/src/KoddizImage/slide15_arrow.png'
import slide15_article1 from '@/src/KoddizImage/slide15_article1.png'
import slide15_article2 from '@/src/KoddizImage/slide15_article2.png'
import slide15_ProgressWheel1 from '@/src/KoddizImage/slide15_Progress wheel-1.png'
import slide15_ProgressWheel2 from '@/src/KoddizImage/slide15_Progress wheel-2.png'
import slide15_ProgressWheelLine from '@/src/KoddizImage/slide15_Progress wheelline.png'
import moneyBillWave from '@/src/KoddizImage/money-bill-wave.svg'
import slide16_1 from '@/src/KoddizImage/slide16_1.png'
import slide16_2 from '@/src/KoddizImage/slide16_2.png'
import slide16_3 from '@/src/KoddizImage/slide16_3.png'
import slide17_1 from '@/src/KoddizImage/slide17_1.png'
import slide17_2 from '@/src/KoddizImage/slide17_2.png'
import slide17_3 from '@/src/KoddizImage/slide17_3.png'
import slide18_Logo1 from '@/src/KoddizImage/slide18_Logo1.svg'
import slide18_Logo2 from '@/src/KoddizImage/slide18_Logo2.svg'
import slide18_Logo3 from '@/src/KoddizImage/slide18_Logo3.svg'
import slide19_compo from '@/src/KoddizImage/slide19_compo.png'

const SLIDE2_TAGS = ['Social', 'Community', 'Global', 'Meetups', 'Chats', 'Mobile App']

export const metadata: Metadata = {
  title: 'Koddiz | Mikyo Kaia Cha',
  description: 'Koddiz social companion concept designed by Mikyo Kaia Cha.',
}

export default function KoddizPage() {
  return (
    <WindowPageLayout title="Koddiz" currentPage="projects" fullScreen enableFinderModals>
      <article className="h-full w-full max-w-full overflow-y-auto overflow-x-hidden pb-10">
        {/* Slide 1 – App showcase */}
        <ScrollAnimation>
          <section className="bg-[#FF6471] px-6 py-12 text-[#232323] md:px-10 lg:px-16 xl:px-20">
          <div className="mx-auto w-full max-w-6xl">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
              <div className="relative w-full aspect-[9/16] overflow-hidden rounded-2xl">
                <Image
                  src={koddizMain1}
                  alt="Koddiz Home Screen"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="relative w-full aspect-[9/16] overflow-hidden rounded-2xl">
                <Image
                  src={koddizMain2}
                  alt="Koddiz Event Detail Screen"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="relative w-full aspect-[9/16] overflow-hidden rounded-2xl">
                <Image
                  src={koddizMain3}
                  alt="Koddiz Moments Feed"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="relative w-full aspect-[9/16] overflow-hidden rounded-2xl">
                <Image
                  src={koddizMain4}
                  alt="Koddiz Chat Screen"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
        </ScrollAnimation>

        {/* Slide 2 – Narrative hero */}
        <ScrollAnimation>
          <section className="relative px-6 pt-12 pb-12 md:pt-28 md:pb-28 text-[#232323] md:px-10 lg:px-16 xl:px-20 overflow-hidden">
          <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-6 md:gap-12 lg:flex-row lg:items-stretch">
            {/* Large background text */}
            <div 
              className="absolute bottom-0 pointer-events-none"
              style={{
                color: 'rgba(255, 100, 113, 0.10)',
                fontSize: 'clamp(150px, 25vw, 300px)',
                fontFamily: 'Pretendard, system-ui, sans-serif',
  
                fontWeight: '700',
                wordWrap: 'break-word',
                lineHeight: '1',
                textAlign: 'center',
                transform: 'translateY(20%)',
              }}
            >
              Korddiz
            </div>
            <div className="flex-1 flex flex-col justify-center space-y-4 md:space-y-6 text-[#232323]">
              <div className="text-xs uppercase tracking-[0.35em] text-[#232323]/60">Social Network Service</div>
              <div className="space-y-4 md:space-y-6">
                <h2 className="text-2xl md:text-[2.6rem] font-semibold leading-[1.05] sm:text-5xl">Koddiz</h2>
                <p className="max-w-xl text-sm leading-relaxed text-[#232323]/80 sm:text-base">
                Making friends in Korea can be tough, especially for newcomers. Korddiz connects Koreans and foreigners through group activities and cultural experiences.
                </p>
                <div className="flex flex-wrap gap-2">
                  {SLIDE2_TAGS.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#232323]/25 px-4 py-1 text-xs font-medium text-[#232323]/80 backdrop-blur"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative flex flex-1 justify-end items-stretch">
              <div className="relative h-full w-full max-w-[420px] min-h-[400px] md:min-h-[600px]">
                <div className="absolute inset-0 overflow-hidden rounded-[26px]">
                  <Image
                    src={iphoneMockup}
                    alt="Koddiz iPhone mockup"
                    fill
                    className="object-contain object-center"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        </ScrollAnimation>

        {/* Slide 3 – Overview summary */}
        <ScrollAnimation>
          <section className="px-6 pt-12 pb-12 md:pt-28 md:pb-24 text-[#232323] md:px-10 lg:px-16 xl:px-20">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 md:gap-12 lg:flex-row lg:items-start">
            <div className="flex-1 space-y-4 md:space-y-6">
              <span className="text-xs uppercase tracking-[0.35em] text-[#232323]/60">Korddiz</span>
              <div className="space-y-4 md:space-y-6">
                <h2 className="text-2xl md:text-[2.6rem] sm:text-5xl  font-bold leading-tight text-[#232323]">
                  Bridging Cultures,<br />Building Friendships
                </h2>
                <div className="space-y-4 text-[14.781px] leading-[22.172px] text-[#232323]">
                  <h3 className="text-[22.172px] font-semibold">Summary</h3>
                  <p className="max-w-xl text-md leading-relaxed text-[#232323]/80 sm:text-base">
                    Making friends in Korea can be tough, especially for newcomers. Korddiz connects Koreans and foreigners through group activities and cultural experiences. Whether you're a traveler or a local, Korddiz provides a safe space for cross-cultural friendships.
                  </p>
                  <p className="max-w-xl text-md leading-relaxed text-[#232323]/80 sm:text-base">
                    With Mission Events to boost engagement and a social media-style feed for updates, Korddiz makes it easy to connect. Plus, our ID verification system ensures a secure community.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid flex-1 grid-cols-1 gap-[36.954px] sm:grid-cols-2">
              <div className="flex flex-wrap items-center gap-[0.5rem] rounded-[22.172px] border border-[rgba(255,117,128,0.46)] bg-white p-[36.954px] text-[#232323] min-h-[189.202px] w-[266.065px]">
                <div className="flex flex-col gap-0">
                  <p className="text-[17.738px] font-bold text-[#FF6471] tracking-[-0.8869px] whitespace-pre">My Role</p>
                  <p className="text-[17.738px] font-semibold text-[#232323] whitespace-pre">UI/UX Designer</p>
                </div>
                <ul className="text-[13.303px] font-medium text-[#232323] space-y-0">
                  <li className="ml-[10px]">- Product Design</li>
                  <li className="ml-[10px]">- Interaction Design</li>
                  <li className="ml-[10px]">- User Research</li>
                  <li className="ml-[10px]">- Visual Design</li>
                </ul>
              </div>
              <div className="flex flex-wrap items-center gap-[0.5rem] rounded-[22.172px] border border-[rgba(255,117,128,0.46)] bg-white p-[36.954px] text-[#232323] min-h-[189.202px] w-[266.065px]">
                <div className="flex flex-col gap-0">
                  <p className="text-[17.738px] font-bold text-[#FF6471] whitespace-pre">Team</p>
                  <p className="text-[17.738px] font-semibold text-[#232323] whitespace-pre">4 members</p>
                </div>
                <ul className="text-[13.303px] font-medium text-[#232323] space-y-0">
                  <li className="ml-[10px]">1 Project Manager</li>
                  <li className="ml-[10px]">1 Front-end Developer</li>
                  <li className="ml-[10px]">1 Back-end Developer</li>
                  <li className="ml-[10px]">1 Designer</li>
                </ul>
              </div>
              <div className="flex flex-wrap  items-top gap-[0.5rem] rounded-[22.172px] border border-[rgba(255,117,128,0.46)] bg-white p-[36.954px] text-[#232323] min-h-[189.202px] w-[266.065px]">
                <div className="flex flex-col gap-0">
                  <p className="text-[17.738px] font-bold text-[#FF6471] tracking-[-0.8869px] whitespace-pre">Timeline</p>
                  <p className="text-[17.738px] font-semibold text-[#232323] whitespace-pre">6-month Side Project</p>
                </div>
                <ul className="text-[13.303px] font-medium text-[#232323] space-y-0">
                </ul>
              </div>
              <div className="flex flex-wrap items-center gap-[0.5rem] rounded-[22.172px] border border-[rgba(255,117,128,0.46)] bg-white p-[36.954px] text-[#232323] min-h-[189.202px] w-[266.065px]">
                <div className="flex flex-col gap-0">
                  <p className="text-[17.738px] font-bold text-[#FF6471] tracking-[-0.8869px] whitespace-pre">Tools</p>
                  <p className="text-[17.738px] font-semibold text-[#232323]">Figma</p>
                </div>
                <ul className="text-[13.303px] font-medium text-[#232323] space-y-0">
                  <li className="ml-[10px]">- Jira</li>
                  <li className="ml-[10px]">- Notion</li>
                  <li className="ml-[10px]">- Google Workplace</li>
                  <li className="ml-[10px]">- Zoom</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        </ScrollAnimation>

        {/* Slide 4 – Simple User Flow / Information Architecture */}
        <ScrollAnimation>
          <section className="px-6 pt-12 pb-12 md:pt-28 md:pb-32 md:px-10 lg:px-16 xl:px-20 bg-white">
          <div className="mx-auto max-w-6xl">
            <header className="space-y-2 mb-8 md:mb-12">
              <span className="text-xs uppercase tracking-[0.35em] text-[#232323]/60">User Flow</span>
              <h3 className="text-2xl md:text-[2.4rem] font-semibold leading-tight text-[#232323]">Simple User Flow</h3>
            </header>

            <div className="relative w-full pb-8">
              <div className="space-y-6">
                {/* Top Flow: Splash → Sign-Up | Login → Home */}
                <FlowItemAnimation delay={0}>
                  <div className="flex items-center justify-center gap-3">
                    <div className="rounded-lg bg-white border border-[#232323]/20 px-4 py-2 text-sm font-medium text-[#232323] shadow-sm">
                      Splash
                    </div>
                    <div className="w-6 h-0.5 bg-gray-300" />
                    <div className="rounded-lg bg-white border border-[#232323]/20 px-4 py-2 text-sm font-medium text-[#232323] shadow-sm">
                      Sign-Up or Login
                    </div>
                    <div className="w-6 h-0.5 bg-gray-300" />
                    <div className="rounded-lg bg-[#FF8A8A] px-6 py-3 text-sm font-semibold text-white shadow-md">
                      Home
                    </div>
                  </div>
                </FlowItemAnimation>

                {/* Four Main Sections in Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* 1. Meetups */}
                  <div className="flex flex-col gap-3">
                    <FlowItemAnimation delay={0.1}>
                      <div className="rounded-lg bg-[#FF8A8A] px-4 py-2.5 text-sm font-semibold text-white text-center shadow-md">
                        Meetups
                      </div>
                    </FlowItemAnimation>
                    <div className="space-y-2 pl-4 border-l-2 border-gray-300">
                      <FlowItemAnimation delay={0.2}>
                        <div className="rounded-lg bg-white border border-[#232323]/20 px-3 py-1.5 text-xs font-medium text-[#232323] shadow-sm">
                          Mission Meetups
                        </div>
                      </FlowItemAnimation>
                      <div className="space-y-2">
                        <FlowItemAnimation delay={0.3}>
                          <div className="rounded-lg bg-white border border-[#232323]/20 px-3 py-1.5 text-xs font-medium text-[#232323] shadow-sm">
                            My Meetups
                          </div>
                        </FlowItemAnimation>
                        <div className="space-y-2 pl-4 border-l-2 border-gray-300">
                          <FlowItemAnimation delay={0.4}>
                            <div className="rounded-lg bg-white border border-[#232323]/20 px-3 py-1.5 text-xs font-medium text-[#232323] shadow-sm">
                              Meetups description
                            </div>
                          </FlowItemAnimation>
                          <div className="space-y-2 pl-4 border-l-2 border-gray-300">
                            <FlowItemAnimation delay={0.5}>
                              <div className="rounded-lg bg-white border border-[#232323]/20 px-3 py-1.5 text-xs font-medium text-[#232323] shadow-sm">
                                Join Meetup
                              </div>
                            </FlowItemAnimation>
                            <div className="space-y-2 pl-4 border-l-2 border-gray-300">
                              <FlowItemAnimation delay={0.6}>
                                <div className="rounded-lg bg-white border border-[#232323]/20 px-3 py-1.5 text-xs font-medium text-[#232323] shadow-sm">
                                  ID Check
                                </div>
                              </FlowItemAnimation>
                            </div>
                          </div>
                        </div>
                      </div>
                      <FlowItemAnimation delay={0.7}>
                        <div className="rounded-lg bg-white border border-[#232323]/20 px-3 py-1.5 text-xs font-medium text-[#232323] shadow-sm">
                          Meetups
                        </div>
                      </FlowItemAnimation>
                    </div>
                  </div>

                  {/* 2. Moments */}
                  <div className="flex flex-col gap-3">
                    <FlowItemAnimation delay={0.1}>
                      <div className="rounded-lg bg-[#FF8A8A] px-4 py-2.5 text-sm font-semibold text-white text-center shadow-md">
                        Moments
                      </div>
                    </FlowItemAnimation>
                    <div className="space-y-2 pl-4 border-l-2 border-gray-300">
                      <div className="space-y-2">
                        <FlowItemAnimation delay={0.2}>
                          <div className="rounded-lg bg-white border border-[#232323]/20 px-3 py-1.5 text-xs font-medium text-[#232323] shadow-sm">
                            Moments Cards
                          </div>
                        </FlowItemAnimation>
                        <div className="space-y-2 pl-4 border-l-2 border-gray-300">
                          <FlowItemAnimation delay={0.3}>
                            <div className="rounded-lg bg-white border border-[#232323]/20 px-3 py-1.5 text-xs font-medium text-[#232323] shadow-sm">
                              Moments Reply Cards
                            </div>
                          </FlowItemAnimation>
                          <div className="space-y-2">
                            <FlowItemAnimation delay={0.4}>
                              <div className="rounded-lg bg-white border border-[#232323]/20 px-3 py-1.5 text-xs font-medium text-[#232323] shadow-sm">
                                Other Profile
                              </div>
                            </FlowItemAnimation>
                            <div className="space-y-2 pl-4 border-l-2 border-gray-300">
                              <FlowItemAnimation delay={0.5}>
                                <div className="rounded-lg bg-white border border-[#232323]/20 px-3 py-1.5 text-xs font-medium text-[#232323] shadow-sm">
                                  Chat
                                </div>
                              </FlowItemAnimation>
                            </div>
                          </div>
                        </div>
                      </div>
                      <FlowItemAnimation delay={0.6}>
                        <div className="rounded-lg bg-white border border-[#232323]/20 px-3 py-1.5 text-xs font-medium text-[#232323] shadow-sm">
                          Mission Cards
                        </div>
                      </FlowItemAnimation>
                      <FlowItemAnimation delay={0.7}>
                        <div className="rounded-lg bg-white border border-[#232323]/20 px-3 py-1.5 text-xs font-medium text-[#232323] shadow-sm">
                          Post Moments
                        </div>
                      </FlowItemAnimation>
                    </div>
                  </div>

                  {/* 3. Chat */}
                  <div className="flex flex-col gap-3">
                    <FlowItemAnimation delay={0.1}>
                      <div className="rounded-lg bg-[#FF8A8A] px-4 py-2.5 text-sm font-semibold text-white text-center shadow-md">
                        Chat
                      </div>
                    </FlowItemAnimation>
                    <div className="space-y-2 pl-4 border-l-2 border-gray-300">
                      <FlowItemAnimation delay={0.2}>
                        <div className="rounded-lg bg-white border border-[#232323]/20 px-3 py-1.5 text-xs font-medium text-[#232323] shadow-sm">
                          Meetups Group Chat
                        </div>
                      </FlowItemAnimation>
                      <FlowItemAnimation delay={0.3}>
                        <div className="rounded-lg bg-white border border-[#232323]/20 px-3 py-1.5 text-xs font-medium text-[#232323] shadow-sm">
                          Personal Chat
                        </div>
                      </FlowItemAnimation>
                    </div>
                  </div>

                  {/* 4. My Profile */}
                  <div className="flex flex-col gap-3">
                    <FlowItemAnimation delay={0.1}>
                      <div className="rounded-lg bg-[#FF8A8A] px-4 py-2.5 text-sm font-semibold text-white text-center shadow-md">
                        My Profile
                      </div>
                    </FlowItemAnimation>
                    <div className="space-y-2 pl-4 border-l-2 border-gray-300">
                      <FlowItemAnimation delay={0.2}>
                        <div className="rounded-lg bg-white border border-[#232323]/20 px-3 py-1.5 text-xs font-medium text-[#232323] shadow-sm">
                          Followers/Followings
                        </div>
                      </FlowItemAnimation>
                      <FlowItemAnimation delay={0.3}>
                        <div className="rounded-lg bg-white border border-[#232323]/20 px-3 py-1.5 text-xs font-medium text-[#232323] shadow-sm">
                          Edit Profile
                        </div>
                      </FlowItemAnimation>
                      <FlowItemAnimation delay={0.4}>
                        <div className="rounded-lg bg-white border border-[#232323]/20 px-3 py-1.5 text-xs font-medium text-[#232323] shadow-sm">
                          My Meetups
                        </div>
                      </FlowItemAnimation>
                      <FlowItemAnimation delay={0.5}>
                        <div className="rounded-lg bg-white border border-[#232323]/20 px-3 py-1.5 text-xs font-medium text-[#232323] shadow-sm">
                          My Moments Card
                        </div>
                      </FlowItemAnimation>
                      <FlowItemAnimation delay={0.6}>
                        <div className="rounded-lg bg-white border border-[#232323]/20 px-3 py-1.5 text-xs font-medium text-[#232323] shadow-sm">
                          Settings
                        </div>
                      </FlowItemAnimation>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </ScrollAnimation>

        {/* Slide 5 – Project Goal & Pain Points */}
        <ScrollAnimation>
          <section className="relative px-6 py-12 md:py-20 md:px-10 lg:px-16 xl:px-20 bg-gradient-to-b from-[#972a33] from-[5.906%] to-[#ff6471] text-white overflow-hidden">
          <div className="mx-auto max-w-6xl w-full">
            {/* Project Goal */}
            <div className="mb-8 md:mb-12">
              <p className="text-sm md:text-lg font-light mb-2 md:mb-4">Project Goal</p>
              <p className="text-xl md:text-[1.85rem] font-semibold leading-tight tracking-[-0.02em] max-w-4xl">
                Designing a secure and intuitive platform that fosters meaningful cross-cultural connections
              </p>
            </div>

            {/* Pain Points & Solutions Section */}
            <div className="mb-8 md:mb-12">
              <p className="text-sm md:text-lg font-semibold mb-6 md:mb-8">Pain Point</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 items-start">
                {/* Pain Point 01 with Solution */}
                <div className="flex flex-col gap-4">
                  <div className="bg-[rgba(255,117,128,0.41)] rounded-[30px] px-5 md:px-6 py-3 md:py-4 shadow-[0px_2.956px_36.954px_0px_rgba(0,0,0,0.25)] flex flex-col min-h-[85px] md:min-h-[100px]">
                    <p className="text-xs md:text-sm font-light tracking-[-0.01em] mb-2">Pain Point 01</p>
                    <p className="text-sm md:text-base font-medium text-center">Lack of Natural Social Integration</p>
                  </div>
                  <SolutionCard solutionNumber={1} solutionText="Offer diverse social gatherings and mission-based events" images={[pp1_1, pp1_2]} />
                </div>

                {/* Pain Point 02 with Solution */}
                <div className="flex flex-col gap-4">
                  <div className="bg-[rgba(255,117,128,0.41)] rounded-[30px] px-5 md:px-6 py-3 md:py-4 shadow-[0px_2.956px_36.954px_0px_rgba(0,0,0,0.25)] flex flex-col min-h-[85px] md:min-h-[100px]">
                    <p className="text-xs md:text-sm font-light tracking-[-0.01em] mb-2">Pain Point 02</p>
                    <p className="text-sm md:text-base font-medium text-center">Language barriers and lack of local information hinder social engagement</p>
                  </div>
                  <SolutionCard solutionNumber={2} solutionText="Provide a social media-style feed and real-time translation chat" images={[pp2_1, pp2_2]} />
                </div>

                {/* Pain Point 03 with Solution */}
                <div className="flex flex-col gap-4">
                  <div className="bg-[rgba(255,117,128,0.41)] rounded-[30px] px-5 md:px-6 py-3 md:py-4 shadow-[0px_2.956px_36.954px_0px_rgba(0,0,0,0.25)] flex flex-col min-h-[85px] md:min-h-[100px]">
                    <p className="text-xs md:text-sm font-light tracking-[-0.01em] mb-2">Pain Point 03</p>
                    <p className="text-sm md:text-base font-medium text-center">Safety concerns and trust issues hinder meaningful connections.</p>
                  </div>
                  <SolutionCard solutionNumber={3} solutionText="Implement an ID verification system to build a secure and trustworthy ground" images={[pp3_1, pp3_2]} />
                </div>
              </div>
            </div>
          </div>
        </section>
        </ScrollAnimation>

        {/* Slide 6 – Pain Point & Research */}
        <ScrollAnimation>
          <section className="px-6 py-12 md:py-20 md:px-10 lg:px-16 xl:px-20 bg-white text-[#232323]">
          <div className="mx-auto max-w-7xl w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              {/* Left Section: Painpoint 01 */}
              <div className="space-y-6">
                <div>
                  <p className="text-sm md:text-lg font-light text-[#FF6471] mb-2">Painpoint 01</p>
                  <h3 className="text-xl md:text-[1.66rem] font-semibold text-[#232323] tracking-tight">
                    Lack of Natural Social Integration
                  </h3>
                  <p className="text-sm md:text-base text-[#585858] mt-3 leading-relaxed">
                    <span className="font-light">Koreans want to meet foreigners but </span>
                    <span className="font-medium">struggle to start,</span>
                    <br />
                    <span className="font-light">while foreigners rely on SNS and communities, facing </span>
                    <span className="font-medium">language barriers </span>
                    <span className="font-light">in accessing local information.</span>
                  </p>
                </div>

                {/* Q1 */}
                <div className="bg-[#f9f9f9] rounded-[22px] p-5 md:p-6">
                  <p className="text-sm md:text-base font-medium text-[#585858] mb-3 text-center">
                    Q1. I want to make foreign or Korean friends, but I don't know where to start.
                  </p>
                  <p className="text-sm md:text-base font-normal text-[#FF6471] text-center mb-4">"Strongly Agree"</p>
                  <div className="flex justify-center gap-6">
                    <div className="flex flex-col items-center">
                      <p className="text-xs text-[#585858] mb-2">[Foreigner]</p>
                      <div className="relative w-14 h-14 md:w-16 md:h-16">
                        <Image src={progressWheel1} alt="40%" fill className="object-contain" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <p className="text-xs md:text-sm font-semibold text-[#3b3d53]">40%</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <p className="text-xs text-[#585858] mb-2">[Korean]</p>
                      <div className="relative w-14 h-14 md:w-16 md:h-16">
                        <Image src={progressWheel2} alt="75%" fill className="object-contain" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <p className="text-xs md:text-sm font-semibold text-[#3b3d53]">75%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Q2 */}
                <div className="bg-[#f9f9f9] rounded-[22px] p-5 md:p-6">
                  <p className="text-sm md:text-base font-medium text-[#585858] mb-4 text-center">
                    Q2. What methods have you used to interact with foreigners or Koreans?
                  </p>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-[#585858] mb-2 text-center">Foreigner</p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="bg-[#FF6471] h-1 rounded flex-1 max-w-[75%]" />
                          <span className="text-xs font-bold text-[rgba(22,26,65,0.78)]">75%</span>
                          <span className="text-xs text-[rgba(22,26,65,0.41)]">SNS & community platforms</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="bg-[darkgrey] h-1 rounded flex-1 max-w-[55%]" />
                          <span className="text-xs font-bold text-[rgba(22,26,65,0.78)]">55%</span>
                          <span className="text-xs text-[rgba(22,26,65,0.41)]">Meetup platforms</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="bg-[#972a33] h-1 rounded flex-1 max-w-[30%]" />
                          <span className="text-xs font-bold text-[rgba(22,26,65,0.78)]">30%</span>
                          <span className="text-xs text-[rgba(22,26,65,0.41)]">Dating apps</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-[#585858] mb-2 text-center">Korean</p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="bg-[#972a33] h-1 rounded flex-1 max-w-[60%]" />
                          <span className="text-xs font-bold text-[rgba(22,26,65,0.78)]">60%</span>
                          <span className="text-xs text-[rgba(22,26,65,0.41)]">Language exchange apps</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="bg-[#FF6471] h-1 rounded flex-1 max-w-[40%]" />
                          <span className="text-xs font-bold text-[rgba(22,26,65,0.78)]">40%</span>
                          <span className="text-xs text-[rgba(22,26,65,0.41)]">SNS & community groups</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="bg-[#e9cdcf] h-1 rounded flex-1 max-w-[35%]" />
                          <span className="text-xs font-bold text-[rgba(22,26,65,0.78)]">35%</span>
                          <span className="text-xs text-[rgba(22,26,65,0.41)]">Have not tried</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Q3 */}
                <div className="bg-[#f9f9f9] rounded-[22px] p-5 md:p-6">
                  <p className="text-sm md:text-base font-medium text-[#585858] mb-3 text-center">
                    Q3. Existing meetup and dating apps feel unnatural and overwhelming for making friends.
                  </p>
                  <p className="text-sm md:text-base font-normal text-[#FF6471] text-center mb-4">"Strongly + Somewhat agree"</p>
                  <div className="flex justify-center gap-6">
                    <div className="flex flex-col items-center">
                      <p className="text-xs text-[#585858] mb-2">[Foreigner]</p>
                      <div className="relative w-14 h-14 md:w-16 md:h-16">
                        <Image src={progressWheel3} alt="70%" fill className="object-contain" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <p className="text-xs md:text-sm font-semibold text-[#3b3d53]">70%</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <p className="text-xs text-[#585858] mb-2">[Korean]</p>
                      <div className="relative w-14 h-14 md:w-16 md:h-16">
                        <Image src={progressWheel4} alt="80%" fill className="object-contain" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <p className="text-xs md:text-sm font-semibold text-[#3b3d53]">80%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <div className="bg-gradient-to-br from-[rgba(255,199,204,1)] to-white rounded-lg p-4 md:p-5">
                  <p className="text-xs md:text-sm text-[#232323] text-center leading-relaxed">
                    <span>Koreans and foreigners approach </span>
                    <span className="text-[#FF6471] font-medium">social interactions differently leading to difficulties</span>
                    <span> in forming lasting connections.</span>
                  </p>
                </div>

                {/* Footer */}
                <div className="flex flex-wrap items-center gap-2 text-xs text-[darkgrey]">
                  <span className="border border-[darkgrey] rounded-[22px] px-2 py-1">Survey</span>
                  <span>May 4, 2024 - May 31, 2024 | 20 foreigners (short-term stay in Korea) & 20 Koreans (interested in cultural exchange) | Google Form</span>
                </div>
              </div>

              {/* Right Section: Research */}
              <div className="space-y-6">
                <div>
                  <p className="text-sm md:text-lg font-light text-[#FF6471] mb-2">Research</p>
                  <h3 className="text-xl md:text-[1.66rem] font-semibold text-[#232323] tracking-tight leading-tight">
                    Existing platforms hinder lasting connections<br />between foreigners and Koreans.
                  </h3>
                </div>

                <div>
                  <p className="text-xs md:text-sm font-semibold mb-1">Mission</p>
                  <p className="text-xs md:text-sm text-[#232323]">Meeting a foreign friend at least twice within 2 weeks (multiple attempts allowed).</p>
                </div>

                {/* Flow Diagram - Research Flow Component */}
                <ResearchFlowDiagram />

                <div>
                  <p className="text-xs md:text-sm font-semibold mb-1">Result</p>
                  <p className="text-xs md:text-sm font-medium text-[#232323]">26% success rate – Only 4 out of 15 participants succeeded.</p>
                </div>

                {/* Summary */}
                <div className="bg-gradient-to-br from-[rgba(255,199,204,1)] to-white rounded-lg p-4 md:p-5">
                  <p className="text-xs md:text-sm text-[#232323] text-center">
                    One-time meetings and mismatched expectations block natural friendships.
                  </p>
                </div>

                {/* Footer */}
                <div className="flex flex-wrap items-center gap-2 text-xs text-[darkgrey]">
                  <span className="border border-[darkgrey] rounded-[22px] px-2 py-1">Observational Study</span>
                  <span>Jun 10, 2024 - Jun 25, 2024 | 5 foreigners (short-term stay in Korea) & 10 Koreans</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        </ScrollAnimation>

        {/* Slide 7 – Solution 01 */}
        <ScrollAnimation>
          <section className="relative bg-white text-[#232323] overflow-hidden">
          {/* Red Banner at Top */}
          <div className="bg-[#FF6471] px-6 md:px-10 lg:px-16 xl:px-20 pt-8 pb-6 md:pt-12 md:pb-8">
            <div className="mx-auto max-w-6xl">
              <p className="text-sm md:text-lg font-light text-white mb-2 md:mb-3">Solution 01</p>
              <h3 className="text-xl md:text-[1.66rem] font-semibold text-white leading-tight tracking-[-0.02em] mb-3 md:mb-4">
                Offer diverse social gatherings and mission-based events
              </h3>
              <p className="text-xs md:text-sm font-medium text-white leading-relaxed max-w-4xl">
                Provide structured social gatherings and mission-based activities to create shared experiences and encourage long-term engagement
              </p>
            </div>
          </div>

          {/* Content Section */}
          <div className="px-6 py-12 md:py-16 md:px-10 lg:px-16 xl:px-20">
            <div className="mx-auto max-w-6xl">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 md:gap-12 items-start">
                {/* Left Side - Description */}
                <div className="space-y-6 md:space-y-8">
                  <div className="bg-[#FFE9EA] rounded-lg px-3 py-2 md:px-4 md:py-2.5 inline-block">
                    <p className="text-sm md:text-lg font-medium text-[#FF6471]">Main page</p>
                  </div>
                  <ul className="space-y-3 md:space-y-4 text-sm md:text-base text-[#232323] leading-relaxed list-disc list-inside">
                    <li>Users can easily browse recommended and interest-based meetups.</li>
                    <li>Mission events offer themed groups that promote natural and comfortable interactions.</li>
                  </ul>
                </div>

                {/* Right Side - Phone Mockups */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  {/* Left Image - Home Screen with Meetups */}
                  <div className="relative w-full">
                    <div className="relative w-full aspect-[9/16] overflow-hidden rounded-2xl shadow-lg">
                      <Image
                        src={slide7_1}
                        alt="Koddiz Home Screen - Meetups and Events"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Right Image - Event Detail Screen */}
                  <div className="relative w-full">
                    <div className="relative w-full aspect-[9/16] overflow-hidden rounded-2xl shadow-lg">
                      <Image
                        src={slide7_2}
                        alt="Koddiz Event Detail Screen - Picknick in Kyungbok Place"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </ScrollAnimation>

        {/* Slide 8 – Creating Mission Page */}
        <ScrollAnimation>
          <section className="relative bg-white text-[#232323] overflow-hidden">
          {/* Content Section */}
          <div className="px-6 py-12 md:py-16 md:px-10 lg:px-16 xl:px-20">
            <div className="mx-auto max-w-6xl">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 md:gap-12 items-start">
                {/* Left Side - Description */}
                <div className="space-y-6 md:space-y-8">
                  <div className="bg-[#FFE9EA] rounded-lg px-3 py-2 md:px-4 md:py-2.5 inline-block">
                    <p className="text-sm md:text-lg font-medium text-[#FF6471]">Creating Mission page</p>
                  </div>
                  <ul className="space-y-3 md:space-y-4 text-sm md:text-base text-[#232323] leading-relaxed list-disc list-inside">
                    <li>Users can create meetups by setting basic details, with auto or custom images. Submitted meetups are open for others to join.</li>
                  </ul>
                </div>

                {/* Right Side - Phone Mockups */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  {/* Left Image - Full Form */}
                  <div className="relative w-full">
                    <div className="relative w-full aspect-[9/16] overflow-hidden rounded-2xl shadow-lg">
                      <Image
                        src={slide8_1}
                        alt="Koddiz Making Meetups Form - Full View"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Right Image - Description & Image Upload */}
                  <div className="relative w-full">
                    <div className="relative w-full aspect-[9/16] overflow-hidden rounded-2xl shadow-lg">
                      <Image
                        src={slide8_2}
                        alt="Koddiz Making Meetups Form - Description Section"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </ScrollAnimation>

        {/* Slide 9 – Join Chat Flow */}
        <ScrollAnimation>
          <section className="relative bg-white text-[#232323] overflow-hidden">
          {/* Content Section */}
          <div className="px-6 py-12 md:py-16 md:px-10 lg:px-16 xl:px-20">
            <div className="mx-auto max-w-6xl">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-8 md:gap-12 items-start">
                {/* Left Side - Description */}
                <div className="space-y-6 md:space-y-8">
                  <div className="bg-[#FFE9EA] rounded-lg px-3 py-2 md:px-4 md:py-2.5 inline-block">
                    <p className="text-sm md:text-lg font-medium text-[#FF6471]">Creating Mission page</p>
                  </div>
                  <ul className="space-y-3 md:space-y-4 text-sm md:text-base text-[#232323] leading-relaxed list-disc list-inside">
                    <li>Users can view event details before joining.</li>
                    <li>The "Join the chat" feature lets them enter the chatroom to connect in advance.</li>
                    <li>Real-time updates keep everyone informed of changes.</li>
                  </ul>
                </div>

                {/* Right Side - Three Phone Mockups */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  {/* Left Image - Event Details Before Joining */}
                  <div className="relative w-full">
                    <div className="relative w-full aspect-[9/16] overflow-hidden rounded-2xl shadow-lg">
                      <Image
                        src={slide9_1}
                        alt="Koddiz Event Details - Before Joining"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Middle Image - Event Details After Joining */}
                  <div className="relative w-full">
                    <div className="relative w-full aspect-[9/16] overflow-hidden rounded-2xl shadow-lg">
                      <Image
                        src={slide9_2}
                        alt="Koddiz Event Details - After Joining with Notification"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Right Image - Chat Interface */}
                  <div className="relative w-full">
                    <div className="relative w-full aspect-[9/16] overflow-hidden rounded-2xl shadow-lg">
                      <Image
                        src={slide9_3}
                        alt="Koddiz Chat Interface for Event"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </ScrollAnimation>

        {/* Slide 10 – Painpoint 02 */}
        <ScrollAnimation>
          <section className="px-6 py-12 md:py-20 md:px-10 lg:px-16 xl:px-20 bg-white text-[#232323]">
          <div className="mx-auto max-w-7xl w-full">
            {/* Header */}
            <div className="mb-8 md:mb-12">
              <p className="text-sm md:text-lg font-light text-[#FF6471] mb-2">Painpoint 02</p>
              <h3 className="text-xl md:text-[1.66rem] font-semibold text-[#232323] tracking-tight leading-tight mb-3 md:mb-4">
                Language barriers and lack of local information hinder social engagement
              </h3>
              <p className="text-xs md:text-sm text-[#585858] leading-relaxed max-w-4xl">
                Foreigners struggle with finding reliable local information, while Koreans often feel hesitant about engaging in English conversations
              </p>
            </div>

            {/* Two Column Layout: Section 1 (Left) and Section 2 (Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
              {/* Section 1: Difficulty accessing information & networking for foreigners (Left) */}
              <div>
                <div className="flex items-center gap-3 mb-6 md:mb-8">
                  <div className="bg-[#FF6471] rounded-lg w-5 h-5 md:w-6 md:h-6 flex items-center justify-center">
                    <span className="text-white text-sm md:text-base font-medium">1</span>
                  </div>
                  <h4 className="text-base md:text-lg font-normal text-[#232323]">Difficulty accessing information & networking for foreigners</h4>
                </div>

                <div className="space-y-4 md:space-y-6">
                  {/* First Row: Rising number of foreign tourists and Challenges of living in Korea */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {/* Rising number of foreign tourists */}
                    <div className="bg-[#5c5c5c] rounded-2xl p-3 md:p-4">
                      <h5 className="text-xs md:text-sm font-semibold text-white mb-6 text-center">Rising number of foreign tourists in Korea</h5>
                      <div className="flex items-end gap-6 md:gap-8 mb-2 justify-center relative">
                        <div className="flex flex-col items-center">
                          <div className="bg-white h-6 md:h-8 w-5 md:w-6 rounded-t-lg mb-1"></div>
                          <span className="text-[9px] md:text-[10px] text-white">2023</span>
                        </div>
                        <div className="absolute -top-2 left-[48%] md:-top-3 md:left-[45%] -translate-x-1/2 flex flex-col items-center">
                          <div className="text-[#FF6471] text-md md:text-base font-semibold mr-5">56%</div>
                          <Image 
                            src={slide10RisingArrow} 
                            alt="Rising arrow" 
                            width={43} 
                            height={42}
                            className="w-8 h-8 md:w-10 md:h-10 -mt-4"
                          />
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="bg-[#FF6471] h-16 md:h-20 w-5 md:w-6 rounded-t-lg mb-1"></div>
                          <span className="text-[9px] md:text-[10px] text-white">2024</span>
                        </div>
                      </div>
                      <p className="text-[8px] md:text-[9px] text-[#989898] text-center">Source: Korea Immigration Data</p>
                    </div>

                    {/* Challenges of living in Korea */}
                    <div className="bg-[#5c5c5c] rounded-2xl p-3 md:p-4">
                      <h5 className="text-xs md:text-sm font-semibold text-white mb-6 text-center">Challenges of living in Korea</h5>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 justify-center">
                          <span className="text-[10px] md:text-xs text-white w-20 md:w-24 text-right">Language barrier</span>
                          <div className="relative flex items-center" style={{ width: '200px' }}>
                            <div className="bg-[#FF6471] h-5 md:h-6 rounded-[5px] relative" style={{ width: '43.4%' }}>
                              <span className="absolute inset-0 flex items-center justify-center text-[10px] md:text-xs font-semibold text-white">43.4%</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 justify-center">
                          <span className="text-[10px] md:text-xs text-white w-20 md:w-24 text-right">Feeling isolated</span>
                          <div className="relative flex items-center" style={{ width: '200px' }}>
                            <div className="bg-[#FF6471] h-5 md:h-6 rounded-[5px] relative" style={{ width: '28.8%' }}>
                              <span className="absolute inset-0 flex items-center justify-center text-[10px] md:text-xs font-semibold text-white">28.8%</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 justify-center">
                          <span className="text-[10px] md:text-xs text-white w-20 md:w-24 text-right">Cultural differences</span>
                          <div className="relative flex items-center" style={{ width: '200px' }}>
                            <div className="bg-[#FF6471] h-5 md:h-6 rounded-[5px] relative" style={{ width: '27.8%' }}>
                              <span className="absolute inset-0 flex items-center justify-center text-[10px] md:text-xs font-semibold text-white">27.8%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="text-[8px] md:text-[9px] text-[#989898] text-center">Source: Korea Immigration Data</p>
                    </div>
                  </div>

                  {/* Second Row: Difficulties using Korean apps */}
                  <div className="bg-[#5c5c5c] rounded-2xl p-3 md:p-4">
                    <h5 className="text-xs md:text-sm font-semibold text-white mb-3">Difficulties using Korean apps</h5>
                      <div className="space-y-2 mx-8">
                        {/* Chat bubble with tail from left */}
                        <div className="relative bg-white rounded-lg px-2 py-1.5 ml-3 w-fit">
                          <div className="absolute -left-2 top-2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[8px] border-r-white"></div>
                          <p className="text-[10px] md:text-xs text-[#FF6471] text-center whitespace-nowrap">No Language support</p>
                        </div>
                        {/* Chat bubble with tail from right */}
                        <div className="relative bg-white rounded-lg px-2 py-1.5 mr-3 ml-auto w-fit">
                          <div className="absolute -right-2 top-2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-white"></div>
                          <p className="text-[10px] md:text-xs text-[#FF6471] text-center whitespace-nowrap">Unreliable ad-based reviews & blogs</p>
                        </div>
                        {/* Chat bubble with tail from left */}
                        <div className="relative bg-white rounded-lg px-2 py-1.5 ml-3 w-fit">
                          <div className="absolute -left-2 top-2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[8px] border-r-white"></div>
                          <p className="text-[10px] md:text-xs text-[#FF6471] text-center whitespace-nowrap">Complex verification</p>
                        </div>
                      </div>
                    <p className="text-[8px] md:text-[9px] text-[#989898] mt-3">Source: Reddit /Korea</p>
                  </div>

                  {/* Third Row: Maria Carson Quote */}
                  <div className="bg-[#FF6471] rounded-2xl p-4 md:p-6 text-white">
                    <div className="flex items-center justify-center gap-3 md:gap-4">
                      <div className="bg-white rounded-full w-[3rem] h-[3rem] md:w-20 md:h-20 flex items-center justify-center flex-shrink-0">
                        <span className="text-[2rem] md:text-[4rem]">🧒🏻</span>
                      </div>
                      <div className="flex-1 leading-tight">
                        <p className="text-xs md:text-sm font-semibold mb-1">Maria Carson <span className="font-normal text-[10px] md:text-xs">who live in Korea for 2 years</span></p>
                        <p className="text-[10px] md:text-xs leading-tight">
                          I thought adapting to Korea would be easy with support programs and apps, but in reality,{' '}
                          <span className="font-semibold text-sm md:text-base">important information for foreigners is scattered</span>.
                          Sometimes I had to redo documents or cancel plans due to missing information, and{' '}
                          <span className="font-semibold text-sm md:text-base">I didn't even know which website to check</span>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2: Koreans' fear of speaking English (Right) */}
              <div>
                <div className="flex items-center gap-3 mb-6 md:mb-8">
                  <div className="bg-[#FF6471] rounded-lg w-5 h-5 md:w-6 md:h-6 flex items-center justify-center">
                    <span className="text-white text-sm md:text-base font-medium">2</span>
                  </div>
                  <h4 className="text-base md:text-lg font-normal text-[#232323]">Koreans' fear of speaking English</h4>
                </div>

                <div className="space-y-4 md:space-y-6 mb-6">
                  {/* Q1 and Q2 in same row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {/* Q1: Burdened by language barriers */}
                    <div className="bg-[#f9f9f9] rounded-2xl p-3 md:p-4">
                      <p className="text-[10px] md:text-xs text-[#222222] text-center mb-3 md:mb-8">Q1. Burdened by language barriers</p>
                      <div className="flex items-center justify-center gap-3 mx-auto">
                        <div className="relative w-14 h-14 md:w-16 md:h-16 flex-shrink-0">
                          <Image src={progressWheel70} alt="70%" fill className="object-contain" />
                        </div>
                        <div className="text-center">
                          <p className="text-[10px] md:text-xs font-semibold text-[#FF6471]">70%</p>
                        </div>
                      </div>
                    </div>

                    {/* Q2: Avoid interaction due to English difficulty */}
                    <div className="bg-[#f9f9f9] rounded-2xl p-3 md:p-4">
                      <p className="text-[10px] md:text-xs text-[#222222] text-center mb-3">Q2. Avoid interaction due to English difficulty</p>
                      <div className="flex items-center justify-center gap-3 mx-auto">
                        <div className="relative w-14 h-14 md:w-16 md:h-16 flex-shrink-0">
                          <Image src={slide10_Yes70} alt="70% Yes" fill className="object-contain" />
                        </div>
                        <div className="text-center">
                          <p className="text-[10px] md:text-xs font-semibold text-[#FF6471]">Yes</p>
                          <p className="text-[10px] md:text-xs font-semibold text-[#FF6471]">70%</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Q3: Reducing discomfort when meeting foreigners - Next row */}
                  <div className="bg-[#f9f9f9] rounded-2xl p-3 md:p-4">
                    <p className="text-[10px] md:text-xs text-[#222222] text-center mb-3">Q3. Reducing discomfort when meeting foreigners</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="relative flex-1 flex items-center">
                          <div className="bg-[#FF6471] h-6 md:h-8 rounded-lg relative" style={{ width: '73.78%' }}>
                            <span className="absolute inset-0 flex items-center justify-start text-[9px] md:text-[10px] font-light text-white px-2 tracking-tight">Learn basic phrases</span>
                          </div>
                        </div>
                        <span className="text-[10px] md:text-xs font-semibold text-[#FF6471]">43.4%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="relative flex-1 flex items-center">
                          <div className="bg-[#FF6471] h-6 md:h-8 rounded-lg relative" style={{ width: '48.96%' }}>
                            <span className="absolute inset-0 flex items-center justify-start text-[9px] md:text-[10px] font-light text-white px-2 tracking-tight">Shared activities</span>
                          </div>
                        </div>
                        <span className="text-[10px] md:text-xs font-semibold text-[#FF6471]">28.8%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="relative flex-1 flex items-center">
                          <div className="bg-[#FF6471] h-6 md:h-8 rounded-lg relative" style={{ width: '47.26%' }}>
                            <span className="absolute inset-0 flex items-center justify-start text-[8px] md:text-[10px] font-light text-white px-2 tracking-tight" style={{ lineHeight: '1.1' }}>Lower conversation expectations</span>
                          </div>
                        </div>
                        <span className="text-[10px] md:text-xs font-semibold text-[#FF6471]">27.8%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Survey Details */}
                <div className="flex flex-wrap items-center gap-2 text-[9px] md:text-xs text-[darkgrey]">
                  <span className="border border-[darkgrey] rounded-[22px] px-2 py-1">Survey</span>
                  <span>May 4 - May 31, 2024 | 20 Koreans interested in foreign culture | Google Forms</span>
                </div>
              </div>
            </div>

            {/* What do they need? */}
            <div className="bg-gradient-to-br from-[rgba(255,199,204,1)] to-white rounded-2xl p-6 md:p-8">
              <h4 className="text-base md:text-lg font-medium text-[#FF6471] mb-4">What do they need?</h4>
              <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-[#232323] leading-relaxed">
                <li>✔ A space for foreigners to explore Korean culture & local info</li>
                <li>✔ A comfortable environment for Koreans to interact with foreigners</li>
                <li>✔ A chance to build long-term communities, not just one-time meetups</li>
              </ul>
            </div>
          </div>
        </section>
        </ScrollAnimation>

        {/* Slide 11 – Solution 02: Moments Feed */}
        <ScrollAnimation>
          <section className="relative bg-white text-[#232323] overflow-hidden">
          {/* Red Banner at Top */}
          <div className="bg-[#FF6471] px-6 md:px-10 lg:px-16 xl:px-20 pt-8 pb-6 md:pt-12 md:pb-8">
            <div className="mx-auto max-w-6xl">
              <p className="text-sm md:text-lg font-light text-white mb-2 md:mb-3">Solution 02</p>
              <h3 className="text-xl md:text-[1.66rem] font-semibold text-white leading-tight tracking-[-0.02em] mb-3 md:mb-4">
                Provide a social media-style feed and a Real-Time Translation Chat
              </h3>
              <p className="text-xs md:text-sm font-medium text-white leading-relaxed max-w-4xl">
                Korddiz provides a social feed where users can share daily moments, local spots, and activities, making cross-cultural interactions more natural.
              </p>
            </div>
          </div>

          <div className="px-6 py-12 md:py-20 md:px-10 lg:px-16 xl:px-20">
            <div className="mx-auto max-w-6xl w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
              {/* Left: Moments Feed Description */}
              <div className="flex flex-col items-center lg:items-start">
                <div className="bg-[#FFE9EA] rounded-lg px-3 py-2 mb-6 md:mb-8">
                  <p className="text-base md:text-lg font-medium text-[#FF6471] text-center">Moments Feed</p>
                </div>
                <ul className="space-y-3 md:space-y-4 text-sm md:text-base text-[#232323] leading-relaxed list-disc list-inside">
                  <li>Users can post about their daily lives, favorite restaurants, and fun activities to connect with others.</li>
                  <li>The feed encourages meetup participation by displaying general and mission meetups.</li>
                  <li>Clicking on text in another language translates it into your preferred language.</li>
                </ul>
              </div>

              {/* Right: Phone Mockups */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center lg:justify-end">
                <div className="relative w-full max-w-[268px] mx-auto md:mx-0 aspect-[9/16]">
                  <Image
                    src={slide11_1}
                    alt="Moments Feed Mockup 1"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-full max-w-[268px] mx-auto md:mx-0 aspect-[9/16]">
                  <Image
                    src={slide11_2}
                    alt="Moments Feed Mockup 2"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            </div>
          </div>
        </section>
        </ScrollAnimation>

        {/* Slide 12 – Moments Reply Feed & Posting */}
        <ScrollAnimation>
          <section className="px-6 py-12 md:py-20 md:px-10 lg:px-16 xl:px-20 bg-white text-[#232323]">
          <div className="mx-auto max-w-6xl w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
                {/* Left: Moments Reply Feed Description */}
                <div className="flex flex-col items-center lg:items-start">
                  <div className="bg-[#FFE9EA] rounded-lg px-3 py-2 mb-6 md:mb-8">
                    <p className="text-base md:text-lg font-medium text-[#FF6471] text-center">Moments Reply Feed</p>
                  </div>
                  <ul className="space-y-3 md:space-y-4 text-sm md:text-base text-[#232323] leading-relaxed list-disc list-inside">
                    <li>Users can reply to posts, ask questions, and share thoughts to create meaningful conversations.</li>
                    <li>Users can compose new posts by typing text and uploading images.</li>
                  </ul>
                </div>

                {/* Right: Phone Mockups */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center lg:justify-end">
                  <div className="relative w-full max-w-[269px] mx-auto md:mx-0 aspect-[9/16]">
                    <Image
                      src={slide12_1}
                      alt="Moments Reply Feed Mockup"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="relative w-full max-w-[269px] mx-auto md:mx-0 aspect-[9/16]">
                    <Image
                      src={slide12_2}
                      alt="Posting Screen Mockup"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
            </div>
          </div>
        </section>
        </ScrollAnimation>

        {/* Slide 13 – Chat Home Screen & Event Schedule Updates */}
        <ScrollAnimation>
          <section className="px-6 py-12 md:py-20 md:px-10 lg:px-16 xl:px-20 bg-white text-[#232323]">
          <div className="mx-auto max-w-6xl w-full">
            {/* Top Section: Chat Home Screen */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start mb-12 md:mb-16">
              {/* Left: Chat Home Screen Description */}
              <div className="flex flex-col items-center lg:items-start">
                <div className="bg-[#FFE9EA] rounded-lg px-3 py-2 mb-6 md:mb-8">
                  <p className="text-base md:text-lg font-medium text-[#FF6471] text-center">Chat Home Screen</p>
                </div>
                <ul className="space-y-3 md:space-y-4 text-sm md:text-base text-[#232323] leading-relaxed list-disc list-inside">
                  <li>Users can view both meetup group chats and personal chats in one place.</li>
                  <li>Swiping up filters the view to show only private conversations for better accessibility.</li>
                  <li><span className="font-semibold">Instantly translate</span> messages for smooth cross-language communication.</li>
                </ul>
              </div>

              {/* Right: Phone Mockup */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[269px] mx-auto lg:mx-0 aspect-[9/16]">
                  <Image
                    src={slide13_1}
                    alt="Chat Home Screen Mockup"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Section: Event Schedule Updates */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
              {/* Left: Event Schedule Updates Description */}
              <div className="flex flex-col items-center lg:items-start">
                <div className="bg-[#FFE9EA] rounded-lg px-3 py-2 mb-6 md:mb-8">
                  <p className="text-base md:text-lg font-medium text-[#FF6471] text-center">Event Schedule Updates</p>
                </div>
                <p className="text-sm md:text-base text-[#232323] leading-relaxed">
                  Any changes in the meetup details are highlighted at the top, making it easy for participants to stay informed.
                </p>
              </div>

              {/* Right: Phone Mockup */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[269px] mx-auto lg:mx-0 aspect-[9/16]">
                  <Image
                    src={slide13_2}
                    alt="Event Schedule Updates Mockup"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        </ScrollAnimation>

        {/* Slide 14 – Profiles */}
        <ScrollAnimation>
          <section className="px-6 py-12 md:py-20 md:px-10 lg:px-16 xl:px-20 bg-white text-[#232323]">
          <div className="mx-auto max-w-6xl w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
              {/* Left: Profiles Description */}
              <div className="flex flex-col items-center lg:items-start">
                <div className="bg-[#FFE9EA] rounded-lg px-3 py-2 mb-6 md:mb-8">
                  <p className="text-base md:text-lg font-medium text-[#FF6471] text-center">Profiles</p>
                </div>
                <p className="text-sm md:text-base text-[#232323] leading-relaxed">
                  Korddiz profiles showcase user identity, posts, and meetup participation, making interactions more engaging.
                </p>
              </div>

              {/* Right: Phone Mockups */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center lg:justify-end">
                <div className="relative w-full max-w-[269px] mx-auto md:mx-0 aspect-[9/16]">
                  <Image
                    src={slide14_1}
                    alt="Other Profile Mockup"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-full max-w-[269px] mx-auto md:mx-0 aspect-[9/16]">
                  <Image
                    src={slide14_2}
                    alt="My Profile Mockup"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        </ScrollAnimation>

        {/* Slide 15 – Painpoint 03: Safety Concerns */}
        <ScrollAnimation>
          <section className="px-6 py-12 md:py-20 md:px-10 lg:px-16 xl:px-20 bg-white text-[#232323]">
          <div className="mx-auto max-w-7xl w-full">
            {/* Header */}
            <div className="mb-8 md:mb-12">
              <p className="text-[#FF6471] text-base md:text-lg font-light mb-2">Painpoint 03</p>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#232323] mb-4 tracking-tight">
                Safety concerns and trust issues hinder meaningful connections.
              </h2>
              <p className="text-sm md:text-base text-[#585858] leading-relaxed max-w-4xl">
                Despite the growing interest in social connections, safety concerns and trust issues make people hesitant to engage in online meetups. Addressing these fears is crucial for fostering a secure and reliable platform for meaningful interactions.
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-8 md:mb-12">
              {/* Section 1: Rising Global Crimes via Social Media */}
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-[#FF6471] text-white rounded-lg w-6 h-6 flex items-center justify-center text-sm font-medium">1</div>
                  <h3 className="text-base md:text-lg text-[#232323] font-normal tracking-tight">Rising Global Crimes via Social Media</h3>
                </div>
                
                {/* Two Column Layout: Statistics on left, Articles on right */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-stretch">
                  {/* Fraud Statistics Box - Left */}
                  <div className="bg-[#5c5c5c] rounded-xl p-4 md:p-6 text-white flex flex-col">
                    <p className="text-sm md:text-base font-semibold mb-4">Social media investment fraud losses in 2023</p>
                    <div className="space-y-3 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs md:text-sm font-semibold">US</span>
                        <div className="flex items-center gap-1">
                          <Image src={moneyBillWave} alt="Money" className="w-4 h-4 md:w-5 md:h-5" width={19} height={19} />
                          <Image src={moneyBillWave} alt="Money" className="w-4 h-4 md:w-5 md:h-5" width={19} height={19} />
                          <Image src={moneyBillWave} alt="Money" className="w-4 h-4 md:w-5 md:h-5" width={19} height={19} />
                          <Image src={moneyBillWave} alt="Money" className="w-4 h-4 md:w-5 md:h-5" width={19} height={19} />
                          <Image src={moneyBillWave} alt="Money" className="w-4 h-4 md:w-5 md:h-5" width={19} height={19} />
                          <span className="text-xs md:text-sm font-semibold">$ 4.5 B</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs md:text-sm font-semibold">UK</span>
                        <div className="flex items-center gap-1">
                          <Image src={moneyBillWave} alt="Money" className="w-4 h-4 md:w-5 md:h-5" width={19} height={19} />
                          <Image src={moneyBillWave} alt="Money" className="w-4 h-4 md:w-5 md:h-5" width={19} height={19} />
                          <span className="text-xs md:text-sm font-semibold">$ 1.4 B</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs md:text-sm font-semibold">AU</span>
                        <div className="flex items-center gap-1">
                          <Image src={moneyBillWave} alt="Money" className="w-4 h-4 md:w-5 md:h-5" width={19} height={19} />
                          <span className="text-xs md:text-sm font-semibold">$ 0.9 B</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-[#989898] text-xs mt-4">Source: FBI</p>
                  </div>

                  {/* Article Images - Right */}
                  <div className="space-y-4 flex flex-col">
                    <div className="border border-[#FF6471] rounded-xl p-2 flex-1">
                      <Image
                        src={slide15_article1}
                        alt="Article about dating app dangers"
                        className="w-full h-full object-contain rounded-lg"
                        width={400}
                        height={300}
                      />
                    </div>
                    <div className="border border-[#FF6471] rounded-xl p-2 flex-1">
                      <Image
                        src={slide15_article2}
                        alt="Article about dating app safety"
                        className="w-full h-full object-contain rounded-lg"
                        width={400}
                        height={300}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2: Desire to Meet, But Fear of Online Risks */}
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-6">
                  <div className="bg-[#FF6471] text-white rounded-lg w-6 h-6 flex items-center justify-center text-sm font-medium">2</div>
                  <h3 className="text-base md:text-lg text-[#232323] font-normal tracking-tight">Desire to Meet, But Fear of Online Risks</h3>
                </div>

                {/* Survey Charts */}
                <SurveyCharts />

                {/* Survey Info */}
                <div className="flex flex-wrap items-center gap-2 text-[9px] md:text-xs text-[darkgrey]">
                  <span className="border border-[darkgrey] rounded-[22px] px-2 py-1">Survey</span>
                  <span>July 2024 | 50 women aged 20-40 | Google form</span>
                </div>
              </div>
            </div>

            {/* Solution Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-white rounded-[49px] p-4 md:p-6 shadow-[0px_0px_29.563px_0px_rgba(255,100,113,0.3)]">
                <p className="text-sm md:text-base text-[#272727] text-center leading-relaxed">
                  Fraud and safety risks are increasing,<br />
                  making ID verification essential for secure interactions.
                </p>
              </div>
              <div className="bg-white rounded-[49px] p-4 md:p-6 shadow-[0px_0px_29.563px_0px_rgba(255,100,113,0.3)]">
                <p className="text-sm md:text-base text-[#272727] text-center leading-relaxed">
                  Users want to connect but fear crime.<br />
                  A verified system can ease concerns.
                </p>
              </div>
            </div>
          </div>
        </section>
        </ScrollAnimation>

        {/* Slide 16 – Solution 03 */}
        <ScrollAnimation>
          <section className="relative bg-white text-[#232323] overflow-hidden">
          {/* Red Banner at Top - Same design as Slide 11 */}
          <div className="bg-[#FF6471] px-6 md:px-10 lg:px-16 xl:px-20 pt-8 pb-6 md:pt-12 md:pb-8">
            <div className="mx-auto max-w-6xl">
              <p className="text-sm md:text-lg font-light text-white mb-2 md:mb-3">Solution 03</p>
              <h3 className="text-xl md:text-[1.66rem] font-semibold text-white leading-tight tracking-[-0.02em] mb-3 md:mb-4">
                Verification for a Safe and Trustworthy Community
              </h3>
              <p className="text-xs md:text-sm font-medium text-white leading-relaxed max-w-4xl">
                Korddiz ensures a secure and reliable user experience by implementing ID verification at key interaction points.
              </p>
            </div>
          </div>

          {/* Content Section */}
          <div className="px-6 py-12 md:py-16 md:px-10 lg:px-16 xl:px-20">
            <div className="mx-auto max-w-6xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
                {/* Left Section - When ID Verification is Required */}
                <div className="flex flex-col gap-6">
                  <h4 className="text-base md:text-lg font-semibold text-[#232323]">When ID Verification is Required</h4>
                  
                  {/* First Scenario */}
                  <div className="flex flex-col gap-4 items-center border border-[#d8d8d8] rounded-[21.9px] p-4">
                    <p className="text-sm md:text-base text-[#232323]">1. Before joining a meetup for the first time</p>
                    <div className="relative w-full max-w-[269px] mx-auto md:mx-0 aspect-[9/16]">
                      <Image
                        src={slide16_1}
                        alt="Group Description - Before joining meetup"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Or text */}
                  <p className="text-sm md:text-base text-[#232323] text-center">or</p>

                  {/* Second Scenario */}
                  <div className="flex flex-col gap-4 items-center border border-[#d8d8d8] rounded-[21.9px] p-4">
                    <p className="text-sm md:text-base text-[#232323]">2. Before sending the first message to someone</p>
                    <div className="relative w-full">
                      <Image
                        src={slide16_2}
                        alt="Other Profile - Before sending first message"
                        width={269}
                      />
                    </div>
                  </div>
                </div>

                {/* Right Section - ID Verification Home Screen (top) and ID Check Screen (bottom) */}
                <div className="flex flex-col gap-8  items-center">
                  {/* Top - ID Verification Home Screen */}
                  <div className="flex flex-col gap-4 ">
                    <div className="bg-[#FFE5E7] rounded-lg px-4 py-2 w-full">
                      <p className="text-sm md:text-base font-medium text-[#232323]">ID Verification Home Screen</p>
                    </div>
                    <p className="text-sm md:text-base text-[#232323] leading-relaxed">
                      Users verify their identity by entering details, selecting an ID type, and uploading a document. Once verified, they can join meetups, chat, and engage in the community.
                    </p>
                  </div>

                  {/* Bottom - ID Check Screen */}
                  <div className="flex flex-col gap-4">
                    <div className="relative w-full aspect-[9/16] flex justify-center items-center max-w-[400px]">
                      <Image
                        src={slide16_3}
                        alt="ID Check Screen - Verification process"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </ScrollAnimation>

        {/* Slide 17 – OCR ID Scanning & Verification Status */}
        <ScrollAnimation>
          <section className="relative bg-white text-[#232323] overflow-hidden">
          {/* Content Section */}
          <div className="px-6 py-12 md:py-16 md:px-10 lg:px-16 xl:px-20">
            <div className="mx-auto max-w-6xl">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-start">
                {/* Left Section - OCR ID Scanning Process (Center-aligned) */}
                <div className="flex flex-col gap-6 md:gap-8 items-center lg:items-start">
                  <div className="bg-[#FFE9EA] rounded-lg px-3 py-2 md:px-4 md:py-2.5 w-fit">
                    <p className="text-sm md:text-base font-medium text-[#FF6471]">OCR ID Scanning Process</p>
                  </div>
                  <ul className="space-y-3 md:space-y-4 text-sm md:text-base text-[#232323] leading-relaxed list-disc list-inside">
                    <li>Users scan their ID through Optical Character Recognition (OCR) for quick and accurate processing.</li>
                    <li>The system automatically detects and verifies ID details to prevent fraud and ensure authenticity.</li>
                  </ul>
                </div>

                {/* Middle Section - ID Check Screen */}
                <div className="relative w-full flex justify-center">
                  <div className="relative w-full max-w-[268px]">
                    <Image
                      src={slide17_1}
                      alt="ID Check Screen - OCR Scanning Interface"
                      width={268}
                      height={581}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>

                {/* Right Section - Verified & Unverified Users */}
                <div className="flex flex-col gap-8 md:gap-12">
                  {/* Verified Users */}
                  <div className="flex flex-col gap-6 md:gap-8">
                    <div className="bg-[#FFE9EA] rounded-lg px-3 py-2 md:px-4 md:py-2.5 w-fit">
                      <p className="text-sm md:text-base font-medium text-[#FF6471]">Verified Users</p>
                    </div>
                    <ul className="space-y-3 md:space-y-4 text-sm md:text-base text-[#232323] leading-relaxed list-disc list-inside">
                      <li>Users must use their <span className="font-bold">real names</span></li>
                      <li>A country flag icon appears next to the user's name, indicating that their identity has been authenticated.</li>
                    </ul>
                    <div className="relative w-full max-w-[289px]">
                      <Image
                        src={slide17_2}
                        alt="Verified User Profile Card - Kaia Cha with Korean flag"
                        width={289}
                        height={200}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>

                  {/* Unverified Users */}
                  <div className="flex flex-col gap-6 md:gap-8">
                    <div className="bg-[#DCEFDE] rounded-lg px-3 py-2 md:px-4 md:py-2.5 w-fit">
                      <p className="text-sm md:text-base font-medium text-[#008D07]">Unverified Users</p>
                    </div>
                    <ul className="space-y-3 md:space-y-4 text-sm md:text-base text-[#232323] leading-relaxed list-disc list-inside">
                      <li>A red question mark (?) icon appears next to the user's name, signaling that ID verification is pending.</li>
                    </ul>
                    <div className="relative w-full max-w-[289px]">
                      <Image
                        src={slide17_3}
                        alt="Unverified User Profile Card - Jorge brown with red question mark"
                        width={289}
                        height={200}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </ScrollAnimation>

        {/* Slide 18 – Design Guide */}
        <ScrollAnimation>
          <section className="relative bg-white text-[#232323] overflow-hidden">
          {/* Content Section */}
          <div className="px-6 py-12 md:py-16 md:px-10 lg:px-16 xl:px-20">
            <div className="mx-auto max-w-6xl">
              {/* Title */}
              <p className="text-base md:text-lg font-light text-[#FF6471] mb-8 md:mb-12">Design Guide</p>

              <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 md:gap-12 items-start">
                {/* Left Side - Design Guide Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                  {/* NAMING & LOGO Section */}
                  <div className="bg-white border border-[rgba(255,117,128,0.46)] rounded-[22px] p-6 md:p-8">
                    <p className="text-sm md:text-base font-semibold text-[#FF6471] mb-4 md:mb-6 tracking-tight">NAMING & LOGO</p>
                    <p className="text-xs md:text-sm text-[#232323] leading-relaxed mb-6 md:mb-8">
                      Korddiz combines Korea and Buddies,<br />
                      representing a space where people can easily make friends in Korea.<br />
                      The logo is designed with the letter 'K', symbolizing a greeting person, and incorporates the circular shape from the Korean flag.
                    </p>
                    <div className="flex gap-6 md:gap-8 justify-center items-center flex-wrap">
                      {/* Logo 1 */}
                      <div className="flex flex-col gap-2 items-center">
                        <div className="relative w-[63px] h-[76px] md:w-[75px] md:h-[81px]">
                          <Image
                            src={slide18_Logo1}
                            alt="Korddiz Logo Variation 1"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <p className="text-[#838383] text-lg md:text-xl font-['Retroica',sans-serif] text-center tracking-tight">Korddiz</p>
                      </div>
                      {/* Logo 2 */}
                      <div className="flex flex-col gap-2 items-center">
                        <div className="relative w-[63px] h-[76px] md:w-[75px] md:h-[81px]">
                          <Image
                            src={slide18_Logo2}
                            alt="Korddiz Logo Variation 2"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <p className="text-[#2F80ED] text-lg md:text-xl font-['Retroica',sans-serif] text-center tracking-tight">Korddiz</p>
                      </div>
                      {/* Logo 3 */}
                      <div className="flex flex-col gap-2 items-center">
                        <div className="relative w-[63px] h-[76px] md:w-[75px] md:h-[81px]">
                          <Image
                            src={slide18_Logo3}
                            alt="Korddiz Logo Variation 3"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <p className="text-black text-lg md:text-xl font-['Retroica',sans-serif] text-center tracking-tight">Korddiz</p>
                      </div>
                    </div>
                  </div>

                  {/* TYPO Section */}
                  <div className="bg-white border border-[rgba(255,117,128,0.46)] rounded-[22px] p-6 md:p-8">
                    <p className="text-sm md:text-base font-semibold text-[#FF6471] mb-4 md:mb-6 tracking-tight">TYPO</p>
                    <div className="mb-6 md:mb-8">
                      <p className="text-base md:text-lg font-bold text-black mb-2">NanumSquare</p>
                      <p className="text-base md:text-lg font-bold text-black">나눔 스퀘어</p>
                    </div>
                    <div className="space-y-4 md:space-y-6">
                      <div className="flex gap-4 md:gap-6 items-center">
                        <p className="text-xs md:text-sm font-medium text-black w-16">Regular</p>
                        <div className="flex gap-3 md:gap-4 items-center text-black">
                          <span className="text-sm md:text-base">24pt</span>
                          <span className="text-sm md:text-base">20pt</span>
                          <span className="text-sm md:text-base">18pt</span>
                          <span className="text-xs md:text-sm">16pt</span>
                          <span className="text-[10px] md:text-xs">14pt</span>
                          <span className="text-[8px] md:text-[10px]">11pt</span>
                        </div>
                      </div>
                      <div className="flex gap-4 md:gap-6 items-center">
                        <p className="text-xs md:text-sm font-bold text-black w-16">Bold</p>
                        <div className="flex gap-3 md:gap-4 items-center text-black font-bold">
                          <span className="text-sm md:text-base">24pt</span>
                          <span className="text-sm md:text-base">20pt</span>
                          <span className="text-sm md:text-base">18pt</span>
                          <span className="text-xs md:text-sm">16pt</span>
                          <span className="text-[10px] md:text-xs">14pt</span>
                          <span className="text-[8px] md:text-[10px]">11pt</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* COLOR Section */}
                  <div className="bg-white border border-[rgba(255,117,128,0.46)] rounded-[22px] p-6 md:p-8 md:col-span-2">
                    <p className="text-sm md:text-base font-semibold text-[#FF6471] mb-4 md:mb-6 tracking-tight">COLOR</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                      {/* Basic Colors */}
                      <div>
                        <p className="text-xs md:text-sm font-medium text-black mb-4">Basic</p>
                        <div className="grid grid-cols-2 gap-3 md:gap-4">
                          {/* White */}
                          <div className="flex gap-2 items-center">
                            <div className="w-10 h-10 md:w-12 md:h-12 border border-[#E9EBF8] rounded-lg bg-white flex-shrink-0"></div>
                            <div className="flex flex-col">
                              <p className="text-[10px] md:text-xs text-black">White</p>
                              <p className="text-[7px] md:text-[8px] text-[#8E98A8]">#ffffff</p>
                              <p className="text-[7px] md:text-[8px] text-[#8E98A8]">rgb(255, 255, 255)</p>
                            </div>
                          </div>
                          {/* Light */}
                          <div className="flex gap-2 items-center">
                            <div className="w-10 h-10 md:w-12 md:h-12 border border-[#E9EBF8] rounded-lg bg-[#F6F6F6] flex-shrink-0"></div>
                            <div className="flex flex-col">
                              <p className="text-[10px] md:text-xs text-black">Light</p>
                              <p className="text-[7px] md:text-[8px] text-[#8E98A8]">#F6F6F6</p>
                              <p className="text-[7px] md:text-[8px] text-[#8E98A8]">rgb(246, 246, 246)</p>
                            </div>
                          </div>
                          {/* LightGray */}
                          <div className="flex gap-2 items-center">
                            <div className="w-10 h-10 md:w-12 md:h-12 border border-[#E9EBF8] rounded-lg bg-[#E5E5E5] flex-shrink-0"></div>
                            <div className="flex flex-col">
                              <p className="text-[10px] md:text-xs text-black">LightGray</p>
                              <p className="text-[7px] md:text-[8px] text-[#8E98A8]">#E5E5E5</p>
                              <p className="text-[7px] md:text-[8px] text-[#8E98A8]">rgb(229, 229, 229)</p>
                            </div>
                          </div>
                          {/* Gray */}
                          <div className="flex gap-2 items-center">
                            <div className="w-10 h-10 md:w-12 md:h-12 border border-[#E9EBF8] rounded-lg bg-[#D1D1D1] flex-shrink-0"></div>
                            <div className="flex flex-col">
                              <p className="text-[10px] md:text-xs text-black">Gray</p>
                              <p className="text-[7px] md:text-[8px] text-[#8E98A8]">#D1D1D1</p>
                              <p className="text-[7px] md:text-[8px] text-[#8E98A8]">rgb(209, 209, 209)</p>
                            </div>
                          </div>
                          {/* Blue */}
                          <div className="flex gap-2 items-center">
                            <div className="w-10 h-10 md:w-12 md:h-12 border border-[#8D97B0] rounded-lg bg-[#8D97B0] flex-shrink-0"></div>
                            <div className="flex flex-col">
                              <p className="text-[10px] md:text-xs text-black">Blue</p>
                              <p className="text-[7px] md:text-[8px] text-[#8E98A8]">#8D97B0</p>
                              <p className="text-[7px] md:text-[8px] text-[#8E98A8]">rgb(141, 151, 176)</p>
                            </div>
                          </div>
                          {/* Dark */}
                          <div className="flex gap-2 items-center">
                            <div className="w-10 h-10 md:w-12 md:h-12 border border-[#E9EBF8] rounded-lg bg-[#444444] flex-shrink-0"></div>
                            <div className="flex flex-col">
                              <p className="text-[10px] md:text-xs text-black">Dark</p>
                              <p className="text-[7px] md:text-[8px] text-[#8E98A8]">#444444</p>
                              <p className="text-[7px] md:text-[8px] text-[#8E98A8]">rgb(68, 68, 68)</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Highlight Colors */}
                      <div>
                        <p className="text-xs md:text-sm font-medium text-black mb-4">Highlight</p>
                        <div className="flex flex-col gap-3 md:gap-4">
                          {/* MainRed */}
                          <div className="flex gap-2 items-center">
                            <div className="w-10 h-10 md:w-12 md:h-12 border border-[#E9EBF8] rounded-lg bg-[#FF6471] flex-shrink-0"></div>
                            <div className="flex flex-col">
                              <p className="text-[10px] md:text-xs text-black">MainRed</p>
                              <p className="text-[7px] md:text-[8px] text-[#8E98A8]">#FF6471</p>
                              <p className="text-[7px] md:text-[8px] text-[#8E98A8]">rgb(255, 100, 113)</p>
                            </div>
                          </div>
                          {/* MainBlue */}
                          <div className="flex gap-2 items-center">
                            <div className="w-10 h-10 md:w-12 md:h-12 border border-[#E9EBF8] rounded-lg bg-[#2F80ED] flex-shrink-0"></div>
                            <div className="flex flex-col">
                              <p className="text-[10px] md:text-xs text-black">MainBlue</p>
                              <p className="text-[7px] md:text-[8px] text-[#8E98A8]">#2F80ED</p>
                              <p className="text-[7px] md:text-[8px] text-[#8E98A8]">rgb(47, 128, 237)</p>
                            </div>
                          </div>
                          {/* LightRed */}
                          <div className="flex gap-2 items-center">
                            <div className="w-10 h-10 md:w-12 md:h-12 border border-[#E9EBF8] rounded-lg bg-[#FFEEEF] flex-shrink-0"></div>
                            <div className="flex flex-col">
                              <p className="text-[10px] md:text-xs text-black">LightRed</p>
                              <p className="text-[7px] md:text-[8px] text-[#8E98A8]">#FFEEEF</p>
                              <p className="text-[7px] md:text-[8px] text-[#8E98A8]">rgb(255, 238, 239)</p>
                            </div>
                          </div>
                          {/* LightBlue */}
                          <div className="flex gap-2 items-center">
                            <div className="w-10 h-10 md:w-12 md:h-12 border border-[#E9EBF8] rounded-lg bg-[#EAF3FF] flex-shrink-0"></div>
                            <div className="flex flex-col">
                              <p className="text-[10px] md:text-xs text-black">LightBlue</p>
                              <p className="text-[7px] md:text-[8px] text-[#8E98A8]">#EAF3FF</p>
                              <p className="text-[7px] md:text-[8px] text-[#8E98A8]">rgb(234, 243, 255)</p>
                            </div>
                          </div>
                          {/* LightYellow */}
                          <div className="flex gap-2 items-center">
                            <div className="w-10 h-10 md:w-12 md:h-12 border border-[#E9EBF8] rounded-lg bg-[#FFFACE] flex-shrink-0"></div>
                            <div className="flex flex-col">
                              <p className="text-[10px] md:text-xs text-black">LightYellow</p>
                              <p className="text-[7px] md:text-[8px] text-[#8E98A8]">#FFFACE</p>
                              <p className="text-[7px] md:text-[8px] text-[#8E98A8]">rgb(255, 250, 206)</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Mobile App Mockup */}
                <div className="relative w-full max-w-[290px] mx-auto lg:mx-0">
                  <div className="relative w-full aspect-[9/16] rounded-[12px] overflow-hidden shadow-lg">
                    <Image
                      src={koddizMain1}
                      alt="Koddiz Mobile App - Home Screen"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </ScrollAnimation>

        {/* Slide 19 – Design Component */}
        <ScrollAnimation>
          <section className="relative bg-white text-[#232323] overflow-hidden">
          {/* Content Section */}
          <div className="relative px-6 py-12 md:py-16 md:px-10 lg:px-16 xl:px-20">
            <div className="mx-auto max-w-6xl">
              {/* Title */}
              <p className="text-base md:text-lg font-light text-[#FF6471] mb-8 md:mb-12">Design Component</p>

              {/* Components Showcase */}
              <div className="relative w-full max-w-[900px] lg:max-w-[1000px] mx-auto">
                <Image
                  src={slide19_compo}
                  alt="Koddiz Design Components Showcase"
                  width={1000}
                  height={1095}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </section>
        </ScrollAnimation>
      </article>
    </WindowPageLayout>
  )
}
