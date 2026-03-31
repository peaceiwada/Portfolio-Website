'use client'

export default function AboutSection() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="text-blue-600 dark:text-blue-400">Me</span></h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div data-aos="fade-right" className="space-y-5">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">I am a software developing student looking forward to build a healthy knowledge about tech.</p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">My name is Iwada. I am a passionate software student who enjoys building web applications and learning new technologies. I love improving my coding skills and turning ideas into real projects.</p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">From debugging lines of code to creating digital experiences, I'm passionate about turning ideas into reality. I explore tech, design, and everything in between. Dive in and see what I'm building!</p>
          <div className="flex gap-6 pt-4">
            <div><span className="block text-2xl font-bold text-blue-600 dark:text-blue-400">5+</span><span className="text-sm text-gray-500 dark:text-gray-400">Months Learning</span></div>
            <div><span className="block text-2xl font-bold text-blue-600 dark:text-blue-400">5+</span><span className="text-sm text-gray-500 dark:text-gray-400">Projects</span></div>
            <div><span className="block text-2xl font-bold text-blue-600 dark:text-blue-400">3+</span><span className="text-sm text-gray-500 dark:text-gray-400">Technologies</span></div>
          </div>
        </div>
        <div data-aos="fade-left" className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 text-center border border-gray-200 dark:border-slate-700 hover-lift">
          <i className="fas fa-laptop-code text-7xl text-blue-600 dark:text-blue-400 mb-4 animate-float"></i>
          <p className="font-medium text-gray-700 dark:text-gray-300 italic">"Code, learn, build, repeat — that's my mantra."</p>
        </div>
      </div>
    </section>
  )
}