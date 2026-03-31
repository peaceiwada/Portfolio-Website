'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'

// ✅ Initialize EmailJS ONCE here with your real Public Key
emailjs.init("LZHqbKquFPcEJPoat")

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ message: '', isError: false, show: false })
  const [loading, setLoading] = useState(false)

  const EMAILJS_CONFIG = {
    serviceId: "service_ipxrtxi",     // Your EmailJS Service ID
    templateId: "template_hr3uqbd",   // Your EmailJS Template ID
    publicKey: "LZHqbKquFPcEJPoat"   // ✅ Your Public Key
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ message: '⚠️ Please fill in all fields', isError: true, show: true })
      setTimeout(() => setStatus({ ...status, show: false }), 5000)
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setStatus({ message: '⚠️ Please enter a valid email address', isError: true, show: true })
      setTimeout(() => setStatus({ ...status, show: false }), 5000)
      return
    }

    setLoading(true)

    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Iwada",
          reply_to: formData.email
        }
      )

      setStatus({ message: '✨ Thank you! Your email has been sent successfully! I\'ll get back to you soon.', isError: false, show: true })
      setFormData({ name: '', email: '', message: '' })
      
    } catch (error) {
      console.error('Email send error:', error?.text || error?.message || error)
      setStatus({ message: '❌ Failed to send message. Please try again or use WhatsApp.', isError: true, show: true })
    } finally {
      setLoading(false)
      setTimeout(() => setStatus({ ...status, show: false }), 5000)
    }
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    setStatus({ message: '📋 Copied to clipboard!', isError: false, show: true })
    setTimeout(() => setStatus({ ...status, show: false }), 2000)
  }

  const openWhatsApp = () => {
    const phone = "2347043016178"
    const message = `Hello! My name is ${formData.name || 'Visitor'}. Email: ${formData.email || 'N/A'}. Message: ${formData.message || 'I would like to connect!'}`

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/40 px-4 py-2 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
            <i className="fas fa-envelope"></i> <span>Get In Touch</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Let's <span className="gradient-animate">Connect</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4">Have a project in mind or just want to chat? I'd love to hear from you!</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            {/* Email Card */}
            <div className="gradient-border">
              <div className="card p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                    <i className="fas fa-envelope text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Email Me</h3>
                    <p className="text-gray-500 text-sm">I'll respond within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <span className="text-gray-700 dark:text-gray-300">ebortypeace81@gmail.com</span>
                  <button onClick={() => copyToClipboard('ebortypeace81@gmail.com')} className="px-4 py-2 bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 rounded-lg text-sm transition">
                    <i className="fas fa-copy"></i> Copy
                  </button>
                </div>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="gradient-border">
              <div className="card p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-800 rounded-xl flex items-center justify-center">
                    <i className="fab fa-github text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">GitHub</h3>
                    <p className="text-gray-500 text-sm">Check out my code and projects</p>
                  </div>
                </div>
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <span className="text-gray-700 dark:text-gray-300">github.com/peaceiwada</span>
                  <button onClick={() => copyToClipboard('github.com/peaceiwada')} className="px-4 py-2 bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 rounded-lg text-sm transition">
                    <i className="fas fa-copy"></i> Copy
                  </button>
                </div>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="gradient-border">
              <div className="card p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                    <i className="fab fa-whatsapp text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">WhatsApp</h3>
                    <p className="text-gray-500 text-sm">Quick replies via WhatsApp</p>
                  </div>
                </div>
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <span className="text-gray-700 dark:text-gray-300">+2347043016178</span>
                  <button onClick={openWhatsApp} className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm transition">
                    <i className="fab fa-whatsapp"></i> Message
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="gradient-border">
            <div className="card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <i className="fas fa-paper-plane text-white text-sm"></i>
                </div>
                <h2 className="text-2xl font-bold">Send a Message</h2>
              </div>

              {status.show && (
                <div className={`p-3 rounded-lg text-center text-sm mb-4 ${status.isError ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'}`}>
                  {status.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="form-input w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-blue-500 outline-none" />
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" className="form-input w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-blue-500 outline-none" />
                <textarea name="message" value={formData.message} onChange={handleChange} rows="5" placeholder="Your Message" className="form-input w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-blue-500 outline-none resize-none"></textarea>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button type="submit" disabled={loading} className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-xl transition-all hover:scale-105 disabled:opacity-50">
                    {loading ? <i className="fas fa-spinner fa-spin mr-2"></i> : <i className="fas fa-paper-plane mr-2"></i>}
                    {loading ? 'Sending...' : 'Send via Email'}
                  </button>
                  <button type="button" onClick={openWhatsApp} className="flex-1 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium rounded-xl transition-all hover:scale-105">
                    <i className="fab fa-whatsapp mr-2"></i> Send via WhatsApp
                  </button>
                </div>
              </form>

              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-slate-700 text-center">
                <p className="text-xs text-gray-500"><i className="fas fa-clock mr-1"></i> I typically respond within 24 hours</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-100 dark:bg-green-900/30 rounded-full">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm text-green-700 dark:text-green-300">Available for freelance work & collaborations</span>
          </div>
        </div>
      </div>
    </div>
  )
}