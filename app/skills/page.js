'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import SkillsGrid from '@/components/sections/SkillsGrid'

export default function SkillsPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 100 })
  }, [])

  return <SkillsGrid />
}