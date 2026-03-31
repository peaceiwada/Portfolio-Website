'use client'

import { useState, useEffect } from 'react'

export default function GitHubContent() {
  const [repoCount, setRepoCount] = useState(0)

  useEffect(() => {
    fetch('https://api.github.com/users/peaceiwada/repos?per_page=100')
      .then(res => res.json())
      .then(data => setRepoCount(data.length))
      .catch(() => setRepoCount(0))
  }, [])

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/40 px-4 py-2 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
            <i className="fab fa-github"></i> <span>Open Source Journey</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Starting <span className="gradient-animate">Fresh</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">Welcome to my GitHub profile! I'm a passionate developer who is just beginning to share my work.</p>
          <a href="https://github.com/peaceiwada" target="_blank" className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white rounded-xl transition-all hover:scale-105 shadow-lg">
            <i className="fab fa-github"></i> Visit My GitHub Profile
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="stat-card rounded-2xl p-6 text-center border border-gray-200 dark:border-slate-700">
            <div className="text-3xl font-bold text-blue-600 mb-2">{repoCount}</div>
            <div className="text-gray-600">Public Repos {repoCount === 0 ? '(first one launching soon!)' : ''}</div>
          </div>
          <div className="stat-card rounded-2xl p-6 text-center border border-gray-200 dark:border-slate-700">
          
            <div className="text-gray-600 mt-3 md:mt-10">Currently Building</div>
          </div>
          <div className="stat-card rounded-2xl p-6 text-center border border-gray-200 dark:border-slate-700">
            <div className="text-3xl font-bold text-green-600 mb-2">JavaScript, React, Next.js</div>
            <div className="text-gray-600">Tools I'm learning</div>
          </div>
        </div>

        <div className="gradient-border">
          <div className="card rounded-2xl overflow-hidden">
            <div className="h-64 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center relative">
              <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop" alt="Coding" className="absolute inset-0 w-full h-full object-cover opacity-30" />
              <div className="absolute top-4 right-4 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                <i className="fas fa-spinner fa-pulse mr-1"></i> In Progress
              </div>
              <i className="fas fa-code-branch text-7xl text-white opacity-90 relative z-10"></i>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">My Developer Portfolio</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">A modern, responsive portfolio website built with Next.js, Tailwind CSS, and EmailJS. Features include dark mode, blog section, contact form, and interactive UI components. This is my first project that I'll be publishing on GitHub.</p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="tech-badge px-4 py-2 rounded-full text-sm">Next.js 14</span>
                <span className="tech-badge px-4 py-2 rounded-full text-sm">React 18</span>
                <span className="tech-badge px-4 py-2 rounded-full text-sm">Tailwind CSS</span>
                <span className="tech-badge px-4 py-2 rounded-full text-sm">EmailJS</span>
              </div>
              <a href="https://github.com/peaceiwada" target="_blank" className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 rounded-lg transition hover:scale-105">
                Watch on GitHub <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}