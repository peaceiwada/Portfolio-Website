'use client'

export default function InterestsSection() {
  const interests = [
    { icon: "fas fa-brain", title: "Critical Analysis", desc: "Analyzing situations, thinking critically, and solving problems creatively.", color: "blue" },
    { icon: "fas fa-microchip", title: "Tech Exploration", desc: "Learning new technologies and tackling challenging problems head-on.", color: "purple" },
    { icon: "fas fa-palette", title: "UI/UX Design", desc: "Designing user interfaces and building practical, user-centric solutions.", color: "indigo" }
  ]

  const colorClasses = {
    blue: "from-blue-100 to-blue-200 dark:from-blue-500/20 dark:to-blue-600/20 text-blue-600 dark:text-blue-400",
    purple: "from-purple-100 to-purple-200 dark:from-purple-500/20 dark:to-purple-600/20 text-purple-600 dark:text-purple-400",
    indigo: "from-indigo-100 to-indigo-200 dark:from-indigo-500/20 dark:to-indigo-600/20 text-indigo-600 dark:text-indigo-400"
  }

  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-800/30 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-blue-600 dark:text-blue-400">Interests</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {interests.map((interest, idx) => (
            <div key={idx} data-aos="fade-up" data-aos-delay={100 * (idx + 1)} className="card p-6 text-center hover-lift">
              <div className={`w-16 h-16 bg-gradient-to-br ${colorClasses[interest.color]} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <i className={`${interest.icon} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold mb-2">{interest.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{interest.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}