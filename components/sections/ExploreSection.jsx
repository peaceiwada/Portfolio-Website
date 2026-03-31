'use client'

import Link from 'next/link'

export default function ExploreSection() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Link href="/blog" data-aos="fade-right" className="feature-card bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 text-center hover-lift transition-all">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <i className="fas fa-blog text-3xl text-white"></i>
          </div>
          <h3 className="text-2xl font-bold mb-3">Read My Blog</h3>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl transition-all hover:scale-105">
            View Blog <i className="fas fa-arrow-right"></i>
          </button>
        </Link>
        <Link href="/portfolio" data-aos="fade-left" className="feature-card bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8 text-center hover-lift transition-all">
          <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <i className="fas fa-folder-open text-3xl text-white"></i>
          </div>
          <h3 className="text-2xl font-bold mb-3">View Portfolio</h3>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl transition-all hover:scale-105">
            View Portfolio <i className="fas fa-arrow-right"></i>
          </button>
        </Link>
      </div>
      <div data-aos="fade-up" className="mt-8 max-w-2xl mx-auto">
        <Link href="/github" className="block bg-gradient-to-r from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-800/50 rounded-2xl p-5 text-center hover-lift transition-all">
          <div className="inline-flex items-center gap-3">
            <i className="fab fa-github text-2xl"></i>
            <div>
              <h3 className="font-semibold">Check out my GitHub</h3>
              <p className="text-sm text-gray-500">See my open-source projects and contributions</p>
            </div>
            <i className="fas fa-arrow-right text-blue-600"></i>
          </div>
        </Link>
      </div>
    </section>
  )
}