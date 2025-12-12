// LifeLine (UAV) Project Slides Data
// This file contains all slide data for the LifeLine project case study
// Use this data with the CaseStudySlider component in your Next.js portfolio

import NavigatorDashboard from '@/components/dashboards/NavigatorDashboard'
import PilotDashboard from '@/components/dashboards/PilotDashboard'
import EMSDashboard from '@/components/dashboards/EMSDashboard'

export interface LifelineSlide {
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

export const lifelineSlides: LifelineSlide[] = [
  {
    id: 'dashboard-live',
    layout: 'dashboard-full',
    component: NavigatorDashboard,
  },
  {
    id: 'overview',
    tag: 'Project Overview',
    title: 'Emergency Medical Drone System',
    body: `
      <p class="text-lg md:text-xl text-slate-200 mb-4">
        Designing a human-centered, multi-role interface ecosystem for emergency UAV operations
      </p>
      <p class="text-sm text-slate-400 leading-relaxed">
        This project explores how unmanned aerial vehicles can support time-critical medical emergencies 
        by delivering lifesaving supplies faster than traditional EMS response. I designed the complete 
        human–machine system—three role-based dashboards, physical controllers, and the operator workspace—grounded 
        in human factors, real-time operations, and safety-critical UX principles.
      </p>
    `,
  },
  {
    id: 'overview-details',
    tag: '01. Overview',
    title: 'Project Details',
    body: `
      <div class="space-y-3">
        <div>
          <p class="text-slate-400 mb-1.5 text-sm"><strong class="text-white">Role:</strong> Lead UX + Human Systems Designer (sole designer)</p>
          <p class="text-slate-400 mb-1.5 text-sm"><strong class="text-white">Timeline:</strong> Fall 2025, HSE 542 (Graduate)</p>
        </div>
        <div>
          <p class="text-white font-semibold mb-1.5 text-sm">Contributions:</p>
          <ul class="list-disc list-inside text-slate-400 space-y-0.5 ml-4 text-sm">
            <li>Designed all digital dashboards (Navigator, Pilot, EMS)</li>
            <li>Designed all physical controllers</li>
            <li>Designed the operator workspace using anthropometric data</li>
            <li>Wrote the system concept and interaction logic</li>
            <li>Built a real-time interactive React prototype for design validation</li>
          </ul>
        </div>
        <div class="mt-4">
          <p class="text-white font-semibold mb-1.5 text-sm">Goal:</p>
          <p class="text-slate-300 text-sm">
            Create a clear, reliable, and cognitively efficient interface ecosystem that supports 
            emergency medical UAV missions end-to-end.
          </p>
        </div>
      </div>
    `,
  },
  {
    id: 'context',
    tag: '02. Context & Mission Need',
    title: 'The Problem',
    body: `
      <p class="text-sm text-slate-300 mb-4">
        Emergencies such as anaphylaxis, opioid overdoses, cardiac arrest, and severe asthma often 
        escalate within minutes—faster than ambulances can arrive. UAVs can bridge this gap by transporting 
        EpiPens, naloxone, inhalers, and first-aid supplies directly to the scene.
      </p>
      <p class="text-slate-400 mb-3 text-sm">According to the project's white paper, the mission follows this sequence:</p>
      <ul class="list-disc list-inside text-slate-300 space-y-1 ml-4 text-sm">
        <li>Automated launch and optimized routing</li>
        <li>On-station verification using live video and audio</li>
        <li>Two-person confirmation for payload release</li>
        <li>Remote medical guidance from EMS personnel</li>
        <li>Autonomous return-to-base for recharge and resupply</li>
      </ul>
      <div class="mt-4 p-3 bg-slate-800 rounded-lg border-l-4 border-blue-500">
        <p class="text-white font-semibold mb-1.5 text-sm">Design Insight:</p>
        <p class="text-slate-300 text-sm">
          A high-stakes environment like this requires interfaces that minimize cognitive load, support 
          rapid decision-making, and maintain shared situational awareness across multiple roles.
        </p>
      </div>
    `,
    layout: 'split',
    image: '/images/lifeline/emergency.png',
    imageAlt: 'Emergency medical responders providing aid',
  },
  {
    id: 'roles',
    tag: '03. Role Analysis',
    title: 'Understanding Three Distinct Operators',
    body: `
      <p class="text-sm text-slate-300 mb-4">
        Although the UAV mission involves five operational roles, this system design focuses on the three 
        human–computer interfaces:
      </p>
      <div class="space-y-3">
        <div class="p-4 bg-slate-800 rounded-lg border border-slate-700">
          <h3 class="text-base font-bold text-white mb-1.5">Navigator (Mission Control)</h3>
          <p class="text-slate-300 text-sm">
            Responsible for route selection, hazard awareness, and mission timeline.
          </p>
        </div>
        <div class="p-4 bg-slate-800 rounded-lg border border-slate-700">
          <h3 class="text-base font-bold text-white mb-1.5">Pilot (Flight Control)</h3>
          <p class="text-slate-300 text-sm">
            Oversees aircraft health, flight mode, and manual overrides.
          </p>
        </div>
        <div class="p-4 bg-slate-800 rounded-lg border border-slate-700">
          <h3 class="text-base font-bold text-white mb-1.5">EMS (Medical Support)</h3>
          <p class="text-slate-300 text-sm">
            Reviews patient information, compares arrival times, and manages medical protocols.
          </p>
        </div>
      </div>
      <p class="text-slate-400 mt-4 text-sm">
        Each role requires different information structures, workflows, and mental models—making a unified 
        dashboard impractical. This led to a role-based interface architecture.
      </p>
    `,
  },
  {
    id: 'principles',
    tag: '04. Human Systems Engineering Principles',
    title: 'Design Foundation',
    body: `
      <p class="text-sm text-slate-300 mb-4">
        The design was grounded in human factors concepts from attention, perception, memory, and mental model principles.
      </p>
      <div class="space-y-3">
        <p class="text-white font-semibold mb-3 text-sm">Key principles applied across all UIs:</p>
        <ul class="space-y-2 text-slate-300 text-sm">
          <li class="flex items-start">
            <span class="text-blue-400 mr-2">•</span>
            <span><strong class="text-white">Salience compatibility:</strong> Risk, warnings, and critical system states use color and motion proportional to urgency.</span>
          </li>
          <li class="flex items-start">
            <span class="text-blue-400 mr-2">•</span>
            <span><strong class="text-white">Proximity compatibility:</strong> Frequently cross-referenced data (speed + altitude, patient info + allergies, etc.) is grouped for fast scanning.</span>
          </li>
          <li class="flex items-start">
            <span class="text-blue-400 mr-2">•</span>
            <span><strong class="text-white">Discriminability:</strong> Map modes, route types, and patient categories are visually distinct.</span>
          </li>
          <li class="flex items-start">
            <span class="text-blue-400 mr-2">•</span>
            <span><strong class="text-white">Knowledge in the world:</strong> Real-time visuals externalize memory demands through live maps, cameras, and persistent indicators.</span>
          </li>
          <li class="flex items-start">
            <span class="text-blue-400 mr-2">•</span>
            <span><strong class="text-white">Mental model alignment:</strong> Controls and displays follow established aviation and medical conventions.</span>
          </li>
        </ul>
      </div>
      <p class="text-slate-400 mt-4 text-sm">
        These principles shaped every interface and physical controller design decision.
      </p>
    `,
    layout: 'split',
    images: [
      '/images/lifeline/(updated) Wireframe - Navigator.png',
      '/images/lifeline/(updated) Wireframe - pilot.png',
      '/images/lifeline/(updated) Wireframe - EMS.png',
    ],
    imageAlts: ['Navigator Dashboard Wireframe', 'Pilot Dashboard Wireframe', 'EMS Dashboard Wireframe'],
  },
  {
    id: 'dashboard-navigator',
    tag: '05. Dashboard Design',
    title: 'Navigator Dashboard — Mission Control',
    layout: 'split',
    component: NavigatorDashboard,
    body: `
      <div class="space-y-3">
        <div>
          <p class="text-white font-semibold mb-1.5 text-sm">Design Challenge:</p>
          <p class="text-slate-300 text-sm">
            Provide continuous spatial awareness and help operators choose between speed-optimized and hazard-avoiding routes.
          </p>
        </div>
        <div>
          <p class="text-white font-semibold mb-1.5 text-sm">Design Intent:</p>
          <ul class="list-disc list-inside text-slate-300 space-y-0.5 ml-4 text-sm">
            <li>Place the live navigation map at the center as the primary decision surface</li>
            <li>Use color-coded route overlays (blue/green)</li>
            <li>Display speed, altitude, GPS, and battery as a unified cluster</li>
            <li>Provide a clear six-stage mission timeline</li>
          </ul>
        </div>
        <div>
          <p class="text-white font-semibold mb-1.5 text-sm">Human Factors Applied:</p>
          <ul class="list-disc list-inside text-slate-300 space-y-0.5 ml-4 text-sm">
            <li>Salience compatibility for critical warnings</li>
            <li>Proximity grouping of flight metrics</li>
            <li>Knowledge in the world through persistent route overlays</li>
          </ul>
        </div>
        <div class="p-3 bg-slate-800 rounded-lg border-l-4 border-blue-500">
          <p class="text-white font-semibold mb-1.5 text-sm">Outcome:</p>
          <p class="text-slate-300 text-sm">
            An interface that lets navigators understand the UAV's situation at a glance and adjust decisions without losing context.
          </p>
        </div>
      </div>
    `,
  },
  {
    id: 'dashboard-pilot',
    tag: '05. Dashboard Design',
    title: 'Pilot Dashboard — Flight Control',
    layout: 'split',
    component: PilotDashboard,
    body: `
      <div class="space-y-3">
        <div>
          <p class="text-white font-semibold mb-1.5 text-sm">Design Challenge:</p>
          <p class="text-slate-300 text-sm">
            Ensure pilots can instantly evaluate aircraft safety and intervene when needed.
          </p>
        </div>
        <div>
          <p class="text-white font-semibold mb-1.5 text-sm">Design Intent:</p>
          <ul class="list-disc list-inside text-slate-300 space-y-0.5 ml-4 text-sm">
            <li>Full-width live camera feed at top for immediate visual context</li>
            <li>Autopilot, health indicators, and communication status fixed in predictable locations</li>
            <li>Clear Auto/Manual toggle with redundant cues</li>
          </ul>
        </div>
        <div>
          <p class="text-white font-semibold mb-1.5 text-sm">Human Factors Applied:</p>
          <ul class="list-disc list-inside text-slate-300 space-y-0.5 ml-4 text-sm">
            <li>Proximity compatibility for flight data and system health</li>
            <li>Redundancy gain (labels + icons)</li>
            <li>Familiar cockpit-style arrangement to match pilot mental models</li>
          </ul>
        </div>
        <div class="p-3 bg-slate-800 rounded-lg border-l-4 border-blue-500">
          <p class="text-white font-semibold mb-1.5 text-sm">Outcome:</p>
          <p class="text-slate-300 text-sm">
            A layout that reinforces safe flight oversight and quick reaction under high workload.
          </p>
        </div>
      </div>
    `,
  },
  {
    id: 'dashboard-ems',
    tag: '05. Dashboard Design',
    title: 'EMS Dashboard — Medical Support',
    layout: 'split',
    component: EMSDashboard,
    body: `
      <div class="space-y-3">
        <div>
          <p class="text-white font-semibold mb-1.5 text-sm">Design Challenge:</p>
          <p class="text-slate-300 text-sm">
            Enable EMS personnel to rapidly assess patient risk and prepare appropriate interventions.
          </p>
        </div>
        <div>
          <p class="text-white font-semibold mb-1.5 text-sm">Design Intent:</p>
          <ul class="list-disc list-inside text-slate-300 space-y-0.5 ml-4 text-sm">
            <li>Organize patient demographics → allergies → symptoms → payload contents</li>
            <li>Compare UAV vs ambulance ETA side-by-side</li>
            <li>Standardize medical information structure to match real EMR patterns</li>
          </ul>
        </div>
        <div>
          <p class="text-white font-semibold mb-1.5 text-sm">Human Factors Applied:</p>
          <ul class="list-disc list-inside text-slate-300 space-y-0.5 ml-4 text-sm">
            <li>Discriminability between patient data categories</li>
            <li>Proximity grouping of clinically relevant information</li>
            <li>Redundant allergy cues (icons + color + labels)</li>
          </ul>
        </div>
        <div class="p-3 bg-slate-800 rounded-lg border-l-4 border-blue-500">
          <p class="text-white font-semibold mb-1.5 text-sm">Outcome:</p>
          <p class="text-slate-300 text-sm">
            A clinically intuitive interface that supports fast medical decision-making.
          </p>
        </div>
      </div>
    `,
  },
  {
    id: 'controllers-pilot',
    tag: '06. Physical Controller Design',
    title: 'Pilot Controller',
    layout: 'split',
    body: `
      <div class="space-y-3">
        <div>
          <p class="text-white font-semibold mb-1.5 text-sm">Key Elements:</p>
          <ul class="list-disc list-inside text-slate-300 space-y-0.5 ml-4 text-sm">
            <li>Joystick and throttle for continuous manual control</li>
            <li>Auto/Manual toggle with tactile detents</li>
            <li>Large guarded emergency stop button</li>
            <li>Map-integrated touch interface for waypoint adjustments</li>
            <li>Push-to-talk voice command</li>
          </ul>
        </div>
        <div>
          <p class="text-white font-semibold mb-1.5 text-sm">Design Rationale:</p>
          <ul class="list-disc list-inside text-slate-300 space-y-0.5 ml-4 text-sm">
            <li>Importance + frequency determine placement</li>
            <li>Controls follow operational sequence</li>
            <li>Spatial mapping aligns joystick motion with on-screen behavior</li>
          </ul>
        </div>
      </div>
    `,
    image: '/images/lifeline/Pilot Controller.png',
    imageAlt: 'Pilot Controller Design - Rugged drone controller with joysticks and display',
    imageSize: 'medium',
  },
  {
    id: 'controllers-navigator',
    tag: '06. Physical Controller Design',
    title: 'Navigator Controller',
    layout: 'split',
    body: `
      <div class="space-y-3">
        <div>
          <p class="text-white font-semibold mb-1.5 text-sm">Key Elements:</p>
          <ul class="list-disc list-inside text-slate-300 space-y-0.5 ml-4 text-sm">
            <li>Tilt/zoom sliders positioned for low information access cost</li>
            <li>Discrete buttons for record and target lock</li>
            <li>LED indicators for persistent system state feedback</li>
          </ul>
        </div>
        <div>
          <p class="text-white font-semibold mb-1.5 text-sm">Design Rationale:</p>
          <p class="text-slate-300 text-sm">
            Camera operations require continuous feedback loops, making slider proximity to the video feed essential.
          </p>
        </div>
      </div>
    `,
    image: '/images/lifeline/doublemonitor.png',
    imageAlt: 'Navigator Controller Design - Dual monitor workstation with dashboard interface',
  },
  {
    id: 'controllers-ems',
    tag: '06. Physical Controller Design',
    title: 'EMS Controller',
    layout: 'split',
    body: `
      <div class="space-y-3">
        <div>
          <p class="text-white font-semibold mb-1.5 text-sm">Key Elements:</p>
          <ul class="list-disc list-inside text-slate-300 space-y-0.5 ml-4 text-sm">
            <li>Rugged laptop interface with integrated data display</li>
            <li>Protocol activation button</li>
            <li>Verbal confirmation workflow</li>
          </ul>
        </div>
        <div>
          <p class="text-white font-semibold mb-1.5 text-sm">Design Rationale:</p>
          <p class="text-slate-300 text-sm">
            Combines discrete decision points with continuous navigation while ensuring high reliability in medical contexts.
          </p>
        </div>
      </div>
    `,
    image: '/images/lifeline/controller.png',
    imageAlt: 'EMS Controller Design - Rugged laptop with dashboard interface',
  },
  {
    id: 'workspace',
    tag: '07. Workspace & Operator Environment Design',
    title: 'Ergonomic Workspace Design',
    layout: 'split',
    body: `
      <div class="space-y-3">
        <p class="text-sm text-slate-300">
          I designed the operator workstation using anthropometric data from the U.S. adult population (5th–95th percentile).
        </p>
        <div>
          <p class="text-white font-semibold mb-1.5 text-sm">Anthropometric Basis</p>
          <ul class="list-disc list-inside text-slate-300 space-y-0.5 ml-4 text-sm">
            <li>Sitting eye height: 27.5–33.8 in</li>
            <li>Forward reach: &lt; 24.4 in</li>
            <li>Elbow height: 9–13 in</li>
          </ul>
          <p class="text-slate-400 mt-1.5 text-sm">These values informed monitor height, console depth, and control placement.</p>
        </div>
        <div>
          <p class="text-white font-semibold mb-1.5 text-sm">Ergonomic Risk Reduction</p>
          <p class="text-slate-300 mb-1.5 text-sm">Specific risks and mitigations included:</p>
          <ul class="list-disc list-inside text-slate-300 space-y-0.5 ml-4 text-sm">
            <li>Pilot: Continuous joystick use → added forearm support and low-force activation</li>
            <li>Navigator: Slider placement reduced shoulder elevation risk</li>
            <li>EMS: Standard laptop posture risks → recommended separating display and input devices</li>
          </ul>
        </div>
        <div class="p-3 bg-slate-800 rounded-lg border-l-4 border-blue-500">
          <p class="text-white font-semibold mb-1.5 text-sm">Workspace Rendering</p>
          <p class="text-slate-300 text-sm">
            The final containerized workspace design supports neutral postures for 12-hour shifts, adjustable 
            chairs and dual monitor arms, clear line-of-sight across operators, and equipment spacing for teamwork and safety.
          </p>
        </div>
      </div>
    `,
    images: [
      '/images/lifeline/chair_annotation.png',
      '/images/lifeline/5.png',
      '/images/lifeline/2.png',
      '/images/lifeline/3.png',
    ],
    imageAlts: [
      'Containerized workspace design',
      'Ergonomic workstation with measurements',
      'Ergonomic chair with mannequin',
      'Wireframe ergonomic office chair',
    ],
  },
  {
    id: 'validation-1',
    tag: '08. Functional Design Validation',
    title: 'Improvement #1: Alert Banner & Header Stability',
    layout: 'split',
    beforeAfterImages: {
      before: '/images/lifeline/before-alart.png',
      after: '/images/lifeline/after-alart.png',
      beforeAlt: 'Before: Alert banner pushing header downward',
      afterAlt: 'After: Alert banner in fixed position with improved layout',
      beforeText: `
        <ul class="list-disc list-inside text-slate-300 space-y-1 ml-3">
          <li>The alert banner pushed the entire header downward</li>
          <li>Role selection and status indicators shifted positions</li>
          <li>This caused visual instability during flight</li>
          <li>High-risk alerts competed with navigation controls</li>
        </ul>
      `,
      afterText: `
        <ul class="list-disc list-inside text-slate-300 space-y-1 ml-3">
          <li>Alert banner moved to a fixed position next to the role selector</li>
          <li>No more layout jumps</li>
          <li>Added risk-level salience (color, icon, emphasis)</li>
          <li>Maintains visibility while reducing cognitive load</li>
        </ul>
      `,
    },
  },
  {
    id: 'validation-2',
    tag: '08. Functional Design Validation',
    title: 'Improvement #2: Map-Camera Layout Optimization',
    layout: 'split',
    beforeAfterImages: {
      before: '/images/lifeline/before-livecamera.png',
      after: '/images/lifeline/after-livecamera.png',
      beforeAlt: 'Before: Camera feed below map as separate block',
      afterAlt: 'After: Camera feed as bottom-right overlay on map',
      beforeText: `
        <ul class="list-disc list-inside text-slate-300 space-y-1 ml-3">
          <li>The camera feed sat below the map as a separate block</li>
          <li>Reduced the map's size even though it's the Navigator's primary task</li>
          <li>Required large vertical gaze shifts</li>
          <li>Broke visual momentum while tracking the drone</li>
        </ul>
      `,
      afterText: `
        <ul class="list-disc list-inside text-slate-300 space-y-1 ml-3">
          <li>Camera feed repositioned as a bottom-right overlay</li>
          <li>Preserves the map as the dominant surface</li>
          <li>Only a small diagonal eye movement required</li>
          <li>Strengthens situational awareness and task continuity</li>
        </ul>
      `,
    },
  },
  {
    id: 'reflection',
    tag: '09. Outcomes & Reflection',
    title: 'Learning & Impact',
    body: `
      <div class="space-y-3">
        <p class="text-sm text-slate-300">
          Through this project, I learned how to design for an entire human-machine system—extending far beyond screen layouts.
        </p>
        <div>
          <p class="text-white font-semibold mb-1.5 text-sm">This project demonstrates:</p>
          <ul class="list-disc list-inside text-slate-300 space-y-0.5 ml-4 text-sm">
            <li>Systems-level UX thinking</li>
            <li>Application of human factors to both digital and physical interfaces</li>
            <li>Designing for time-critical, safety-sensitive environments</li>
            <li>Creating role-specific workflows that reduce cognitive load</li>
            <li>Validating interactions through functional prototypes</li>
          </ul>
        </div>
        <div class="p-3 bg-slate-800 rounded-lg border-l-4 border-blue-500">
          <p class="text-white font-semibold mb-1.5 text-sm">Reflection:</p>
          <p class="text-slate-300 text-sm">
            Designing every touchpoint—from controllers to dashboards to workspace—reinforced how human-centered 
            engineering principles must scale across the entire operational ecosystem. This experience shaped my 
            approach to building interfaces that work reliably under pressure.
          </p>
        </div>
      </div>
    `,
  },
]

export default lifelineSlides
