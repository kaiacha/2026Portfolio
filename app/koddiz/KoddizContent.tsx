'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
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

export default function KoddizContent() {
  const [isLoading, setIsLoading] = useState(true)
  const loadedImagesRef = useRef<Set<string>>(new Set())

  // Collect all image sources
  const imageSources = [
    koddizMain1.src,
    koddizMain2.src,
    koddizMain3.src,
    koddizMain4.src,
    iphoneMockup.src,
    pp1_1.src,
    pp1_2.src,
    pp2_1.src,
    pp2_2.src,
    pp3_1.src,
    pp3_2.src,
    progressWheel1.src,
    progressWheel2.src,
    progressWheel3.src,
    progressWheel4.src,
    progressWheel70.src,
    userImage.src,
    slide7_1.src,
    slide7_2.src,
    slide8_1.src,
    slide8_2.src,
    slide9_1.src,
    slide9_2.src,
    slide9_3.src,
    slide10_Yes70.src,
    slide10RisingArrow.src,
    slide11_1.src,
    slide11_2.src,
    slide12_1.src,
    slide12_2.src,
    slide13_1.src,
    slide13_2.src,
    slide14_1.src,
    slide14_2.src,
    slide15_arrow.src,
    slide15_article1.src,
    slide15_article2.src,
    slide15_ProgressWheel1.src,
    slide15_ProgressWheel2.src,
    slide15_ProgressWheelLine.src,
    moneyBillWave.src,
    slide16_1.src,
    slide16_2.src,
    slide16_3.src,
    slide17_1.src,
    slide17_2.src,
    slide17_3.src,
    slide18_Logo1.src,
    slide18_Logo2.src,
    slide18_Logo3.src,
    slide19_compo.src,
  ]

  useEffect(() => {
    const totalImages = imageSources.length
    if (totalImages === 0) {
      setIsLoading(false)
      return
    }

    const checkAllLoaded = () => {
      if (loadedImagesRef.current.size >= totalImages) {
        setIsLoading(false)
      }
    }

    imageSources.forEach((src) => {
      if (!src) {
        loadedImagesRef.current.add(src || '')
        checkAllLoaded()
        return
      }
      const img = new window.Image()
      img.onload = () => {
        loadedImagesRef.current.add(src)
        checkAllLoaded()
      }
      img.onerror = () => {
        loadedImagesRef.current.add(src)
        checkAllLoaded()
      }
      img.src = src
    })

    // Fallback timeout
    const timeoutId = setTimeout(() => {
      setIsLoading(false)
    }, 5000)

    return () => clearTimeout(timeoutId)
  }, [])

  if (isLoading) {
    return (
      <div className="h-full w-full flex items-center justify-center">
        <div className="text-center">
          <div className="text-white text-lg font-medium mb-2">Loading</div>
          <div className="w-8 h-8 border-2 border-blue-400 border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    )
  }

  return (
    <article className="h-full w-full max-w-full overflow-y-auto overflow-x-hidden pb-10">
      {/* Content will be restored */}
    </article>
  )
}
