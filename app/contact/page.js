'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import ContactForm from '@/components/sections/ContactForm'

export default function ContactPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 100 })
  }, [])

  return <ContactForm />
}