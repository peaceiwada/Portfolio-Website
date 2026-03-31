'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Hero from '@/components/sections/Hero'
import AboutSection from '@/components/sections/AboutSection'
import InterestsSection from '@/components/sections/InterestsSection'
import ExploreSection from '@/components/sections/ExploreSection'

export default function HomePage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 100 })
  }, [])

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white dark:from-slate-900 dark:to-slate-900 transition-colors duration-300">
      <Hero />
      <AboutSection />
      <InterestsSection />
      <ExploreSection />
    </div>
  )
}