'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function AboutContent() {
  const [bio, setBio] = useState('')
  const [loading, setLoading] = useState(false)

  const generateBio = (type) => {
    setLoading(true)
    setTimeout(() => {
      if (type === 'professional') {
        setBio("Iwada is a passionate software student skilled in frontend development with HTML, CSS, JavaScript, and React. Currently mastering Next.js and preparing to dive into backend with Node.js. Focused on building practical applications and turning ideas into reality.")
      } else {
        setBio("Hey there! I'm Iwada, a coding enthusiast who loves building web projects with React and Next.js. Currently learning frontend development and getting ready to explore Node.js! Always excited to create and learn new things!")
      }
      setLoading(false)
    }, 800)
  }

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/40 px-4 py-2 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
            <i className="fas fa-user-astronaut"></i> <span>Get to know me</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            About <span className="gradient-animate">the Developer</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mb-12">
          <div className="gradient-border" data-aos="fade-right">
            <div className="card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center">
                  <i className="fas fa-user text-2xl text-blue-600"></i>
                </div>
                <h2 className="text-2xl font-bold">Personal Bio</h2>
              </div>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p><span className="font-semibold text-blue-600">Hello world!</span> My name is <span className="font-semibold">Iwada</span>. I'm from Cross River State, based in Abuja, Nigeria.</p>
                <p>I'm passionate about coding, web development, and exploring creative digital projects. I enjoy learning new technologies and building real-world applications.</p>
                <div className="flex flex-wrap gap-3 pt-4">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 rounded-full text-sm">Problem Solver</span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/40 rounded-full text-sm">Continuous Learner</span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/40 rounded-full text-sm">Creative Thinker</span>
                </div>
              </div>
            </div>
          </div>

          <div className="gradient-border" data-aos="fade-left">
            <div className="card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-xl flex items-center justify-center">
                  <i className="fas fa-bullseye text-2xl text-purple-600"></i>
                </div>
                <h2 className="text-2xl font-bold">Goals & Vision</h2>
              </div>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>Building a strong foundation in frontend development with React and Next.js is my current focus.</p>
                <p>I aspire to become a full-stack developer, create meaningful digital solutions, and eventually mentor others on their coding journey.</p>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="text-center p-3 bg-gray-100 dark:bg-slate-700 rounded-xl">
                    <i className="fas fa-graduation-cap text-blue-500 text-xl mb-1 block"></i>
                    <span className="text-sm">Frontend Focus</span>
                  </div>
                  <div className="text-center p-3 bg-gray-100 dark:bg-slate-700 rounded-xl">
                    <i className="fas fa-handshake text-purple-500 text-xl mb-1 block"></i>
                    <span className="text-sm">Future Mentor</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-6">Quick <span className="text-blue-600">Links</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/contact" className="px-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl hover:scale-105 transition-all font-medium text-center shadow-md">Contact Us</Link>
            <Link href="/skills" className="px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:scale-105 transition-all font-medium text-center shadow-md">View Skills</Link>
            <Link href="/blog" className="px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:scale-105 transition-all font-medium text-center shadow-md">Read Blog</Link>
            <Link href="/portfolio" className="px-4 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl hover:scale-105 transition-all font-medium text-center shadow-md">My Portfolio</Link>
          </div>
        </div>

        <div className="gradient-border mb-12" data-aos="fade-up">
          <div className="card p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <i className="fas fa-robot text-2xl text-white"></i>
              </div>
              <h2 className="text-2xl font-bold">AI Bio Generator</h2>
              <span className="ml-auto text-xs bg-blue-100 dark:bg-blue-900/40 px-3 py-1 rounded-full">Powered by AI</span>
            </div>
            <div className="flex gap-4 justify-center mb-6">
              <button onClick={() => generateBio('professional')} className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:scale-105 transition">
                <i className="fas fa-briefcase mr-2"></i> Professional
              </button>
              <button onClick={() => generateBio('casual')} className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl hover:scale-105 transition">
                <i className="fas fa-smile mr-2"></i> Casual
              </button>
            </div>
            {loading && <div className="text-center py-4"><i className="fas fa-spinner fa-spin mr-2"></i> Generating...</div>}
            {bio && (
              <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl">
                <i className="fas fa-quote-left text-blue-500 mr-2 float-left"></i>
                <p className="text-gray-800 dark:text-gray-200">{bio}</p>
              </div>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8" data-aos="fade-up">
          <div className="card p-8 text-center">
            <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-heart text-2xl text-pink-500"></i>
            </div>
            <h2 className="text-xl font-bold mb-4">My Hobbies</h2>
            <div className="flex gap-3 flex-wrap justify-center">
              <span className="px-4 py-2 bg-pink-100 dark:bg-pink-900/30 rounded-full">🎵 Music</span>
              <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full">💃 Dancing</span>
              <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full">⚽ Football</span>
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">📚 Reading</span>
            </div>
          </div>
          <div className="card p-8 text-center">
            <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-seedling text-2xl text-amber-500"></i>
            </div>
            <h2 className="text-xl font-bold mb-4">Current Focus</h2>
            <p className="text-gray-600 dark:text-gray-400">Mastering <span className="font-semibold text-blue-600">React and Next.js</span>, building projects to strengthen my frontend skills.</p>
          </div>
        </div>
      </div>
    </div>
  )
}