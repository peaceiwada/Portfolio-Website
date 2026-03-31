export default function SkillsGrid() {
  const skills = [
    { name: "HTML5", icon: "fab fa-html5", color: "text-orange-500", level: 90 },
    { name: "CSS / Tailwind", icon: "fab fa-css3-alt", color: "text-blue-500", level: 85 },
    { name: "JavaScript", icon: "fab fa-js", color: "text-yellow-500", level: 70 },
    { name: "React", icon: "fab fa-react", color: "text-cyan-500", level: 55 },
    { name: "Next.js", icon: "fas fa-server", color: "text-gray-600", level: 40 },
    { name: "Git & GitHub", icon: "fab fa-git-alt", color: "text-orange-600", level: 45 }
  ]

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 bg-indigo-100 dark:bg-indigo-900/40 px-4 py-2 rounded-full text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-4">
            <i className="fas fa-code"></i> <span>Expertise</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Technical <span className="gradient-animate">Skills</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4">A snapshot of the tools and technologies I work with.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, idx) => (
            <div key={idx} data-aos="flip-left" data-aos-delay={100 * idx} className="card p-6">
              <i className={`${skill.icon} text-4xl ${skill.color} mb-4`}></i>
              <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Proficiency</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className={`bg-gradient-to-r from-${skill.color.split('-')[1]}-500 to-${skill.color.split('-')[1]}-600 h-2 rounded-full`} style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}