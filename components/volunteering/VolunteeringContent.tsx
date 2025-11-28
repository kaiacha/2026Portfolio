'use client'

import React from 'react'
import VolunteeringCard from './VolunteeringCard'
import naverAiImage from '@/src/assets/naverai.png'
import exchangeMentorImage from '@/src/assets/ExchangeStudentMetor.jpg'
import studentCouncilImage from '@/src/assets/StudentCouncil.png'

const volunteeringData = [
  {
    id: 1,
    title: 'AI & Data Education Mentor in NAVER',
    date: 'July 1, 2021 → February 28, 2022',
    tags: ['Volunteering', 'Coding', 'Education', 'Planning'],
    image: naverAiImage.src,
  },
  {
    id: 2,
    title: 'Exchange Student Mentor, HYU',
    date: 'Mar 4, 2024 → May 31, 2024',
    tags: ['Volunteering', 'Communication', 'Planning'],
    image: exchangeMentorImage.src,
  },
  {
    id: 3,
    title: 'Vice President, Student Council, HYU',
    date: 'Mar 3, 2021 → Dec 20, 2021',
    tags: ['Volunteering', 'Planning', 'Communication'],
    image: studentCouncilImage.src,
  },
]

export default function VolunteeringContent() {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {volunteeringData.map((item) => (
          <VolunteeringCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}

