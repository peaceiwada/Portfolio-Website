'use client'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-900 py-24 lg:py-32 overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div data-aos="fade-down" className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/40 backdrop-blur-sm px-4 py-2 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
          <div className="animate-ping inline-flex h-2 w-2 rounded-full bg-blue-400 opacity-75"></div>
          <span>Software Development Student</span>
        </div>
        <h1 data-aos="fade-up" className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent gradient-animate">Crafting Digital</span><br />
          <span className="text-gray-900 dark:text-white">Experiences With Passion</span>
        </h1>
        <p data-aos="fade-up" data-aos-delay="200" className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Building web applications, learning new technologies, and turning ideas into reality.
        </p>
      </div>
    </section>
  )
}