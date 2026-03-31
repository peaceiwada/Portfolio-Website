'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import BlogList from '@/components/sections/BlogList'

export default function BlogPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 100 })
  }, [])

  return <BlogList />
}