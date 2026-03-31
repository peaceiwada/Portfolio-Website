'use client'

import { useState, useEffect } from 'react'

export default function PortfolioGrid() {
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [githubProjects, setGithubProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const GITHUB_USERNAME = 'peaceiwada'

  // Coming Soon Projects (only shows if NOT on GitHub)
  const allComingSoonProjects = [
    {
      id: 'cs1',
      title: "E-commerce Dashboard",
      description: "Full-stack e-commerce dashboard with analytics, inventory management, and order tracking.",
      tech: ["Next.js", "Node.js", "MongoDB", "Tailwind"],
      category: "Full Stack",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      githubIdentifier: "ecommerce-dashboard"
    },
    {
      id: 'cs2',
      title: "AI Content Generator",
      description: "AI-powered content creation tool for bloggers and content creators.",
      tech: ["React", "OpenAI API", "Tailwind"],
      category: "React",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      githubIdentifier: "ai-content-generator"
    },
    {
      id: 'cs3',
      title: "Task Manager Pro",
      description: "Advanced task management app with drag-and-drop, categories, and deadlines.",
      tech: ["React", "DnD Kit", "LocalStorage"],
      category: "JavaScript",
      image: "https://images.unsplash.com/photo-1540350394557-8d14678e7d91?w=600&h=400&fit=crop",
      githubIdentifier: "task-manager-pro"
    },
    {
      id: 'cs4',
      title: "Recipe Finder App",
      description: "Search recipes by ingredients with detailed instructions and meal planner.",
      tech: ["React", "API Integration", "Tailwind"],
      category: "React",
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&h=400&fit=crop",
      githubIdentifier: "recipe-finder"
    },
    {
      id: 'cs5',
      title: "Weather Dashboard",
      description: "Advanced weather app with 5-day forecast, maps, and location detection.",
      tech: ["JavaScript", "OpenWeather API", "Chart.js"],
      category: "JavaScript",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop",
      githubIdentifier: "weather-dashboard"
    },
    {
      id: 'cs6',
      title: "Portfolio Website",
      description: "Modern developer portfolio with dark mode, blog, and contact form.",
      tech: ["Next.js", "Tailwind CSS", "EmailJS"],
      category: "Landing Pages",
      image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=600&h=400&fit=crop",
      githubIdentifier: "portfolio-website"
    }
  ]

  // Map GitHub language to category
  const getCategoryFromLanguage = (language, repoName) => {
    const name = repoName.toLowerCase()
    const lang = language || ''
    
    // Check specific framework keywords first
    if (name.includes('next') || name.includes('fullstack')) {
      return 'Full Stack'
    }
    if (name.includes('react') || lang === 'JSX') {
      return 'React'
    }
    if (name.includes('landing') || name.includes('page')) {
      return 'Landing Pages'
    }
    
    // Then check by language
    if (lang === 'HTML') {
      return 'HTML/CSS'
    }
    if (lang === 'CSS') {
      return 'HTML/CSS'
    }
    if (lang === 'JavaScript') {
      return 'JavaScript'
    }
    if (lang === 'TypeScript') {
      return 'JavaScript'
    }
    
    return 'JavaScript' // Default
  }

  // Fetch repositories from GitHub API via internal API route (no CORS issues)
  useEffect(() => {
    const fetchGitHubRepos = async () => {
      try {
        setLoading(true)
        // 🔴 CHANGED: Use internal API route instead of direct GitHub call
        const response = await fetch('/api/github/repos')
        
        if (!response.ok) {
          throw new Error('Failed to fetch repositories')
        }
        
        const repos = await response.json()
        
        // Handle error response from API
        if (repos.error) {
          throw new Error(repos.error)
        }
        
        // Create a set of repo names (lowercase for matching)
        const repoNameSet = new Set(repos.map(repo => repo.name.toLowerCase()))
        
        // Filter out coming soon projects that already exist on GitHub
        const filteredComingSoon = allComingSoonProjects.filter(project => {
          const matches = repoNameSet.has(project.githubIdentifier.toLowerCase())
          return !matches // Only keep projects NOT found on GitHub
        })
        
        // Transform GitHub repos to project format with proper category based on language
        const transformedProjects = repos.map(repo => {
          const category = getCategoryFromLanguage(repo.language, repo.name)
          
          return {
            id: repo.id,
            title: repo.name.replace(/-/g, ' ').replace(/_/g, ' '),
            description: repo.description || 'A project built with passion and code. Check it out on GitHub!',
            tech: [repo.language || 'JavaScript'],
            category: category,
            githubUrl: repo.html_url,
            status: 'live',
            image: getImageForProject(repo.name)
          }
        })
        
        setGithubProjects(transformedProjects)
        // Store filtered coming soon projects
        window.filteredComingSoon = filteredComingSoon
        setError(null)
      } catch (err) {
        console.error('Error fetching GitHub repos:', err)
        setError('Unable to fetch projects from GitHub. Showing coming soon projects only.')
        setGithubProjects([])
        window.filteredComingSoon = allComingSoonProjects
      } finally {
        setLoading(false)
      }
    }
    
    fetchGitHubRepos()
  }, [])

  // Helper function to get appropriate image based on project name
  const getImageForProject = (projectName) => {
    const name = projectName.toLowerCase()
    if (name.includes('quiz')) {
      return "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=600&h=400&fit=crop"
    } else if (name.includes('weather')) {
      return "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop"
    } else if (name.includes('portfolio')) {
      return "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=600&h=400&fit=crop"
    } else {
      return "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
    }
  }

  // Get current coming soon projects (filtered)
  const comingSoonProjects = window.filteredComingSoon || allComingSoonProjects

  // Combine GitHub projects with Coming Soon projects
  const allProjects = [...githubProjects, ...comingSoonProjects]

  // Get category counts
  const getCategoryCount = (category) => {
    if (category === 'All') return allProjects.length
    if (category === 'Coming Soon') return comingSoonProjects.length
    return allProjects.filter(p => p.category === category && p.status !== 'coming').length
  }

  // Filter logic
  const getFilteredProjects = () => {
    if (activeCategory === 'All') return allProjects
    if (activeCategory === 'Coming Soon') return comingSoonProjects
    return allProjects.filter(project => project.category === activeCategory && project.status !== 'coming')
  }

  const filteredProjects = getFilteredProjects()

  const handleToast = (message) => {
    setToastMessage(message)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 2000)
  }

  const handleProjectClick = (project) => {
    if (project.status === 'live' && project.githubUrl) {
      window.open(project.githubUrl, '_blank')
    } else {
      handleToast('🚀 Coming soon! This project is currently in development.')
    }
  }

  const categories = [
    { name: 'All', count: getCategoryCount('All') },
    { name: 'Landing Pages', count: getCategoryCount('Landing Pages') },
    { name: 'JavaScript', count: getCategoryCount('JavaScript') },
    { name: 'HTML/CSS', count: getCategoryCount('HTML/CSS') },
    { name: 'React', count: getCategoryCount('React') },
    { name: 'Full Stack', count: getCategoryCount('Full Stack') },
    { name: 'Coming Soon', count: comingSoonProjects.length }
  ]

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-purple-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/40 px-4 py-2 rounded-full text-purple-700 dark:text-purple-300 text-sm font-medium mb-4">
            <i className="fab fa-github"></i> <span>My Work</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Featured <span className="gradient-animate">Projects</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4">
            {loading ? '🔄 Loading projects from GitHub...' : ' Projects automatically sync from my GitHub repositories'}
          </p>
          <a href="https://github.com/peaceiwada" target="_blank" className="inline-flex items-center gap-2 mt-6 px-5 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition hover:scale-105">
            <i className="fab fa-github"></i> Visit GitHub Profile
          </a>
        </div>

        {/* Category Filter Buttons with Counts */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat.name
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md'
                  : 'bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-slate-600'
              }`}
            >
              {cat.name} <span className="ml-1 text-xs opacity-80">({cat.count})</span>
            </button>
          ))}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
            <p className="mt-4 text-gray-500 dark:text-gray-400">Fetching projects from GitHub...</p>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="text-center py-12">
            <p className="text-yellow-600 dark:text-yellow-400">{error}</p>
          </div>
        )}

        {/* Projects Grid */}
        {!loading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <div 
                key={project.id || idx} 
                data-aos="fade-up" 
                data-aos-delay={100 + (idx * 50)} 
                className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
                onClick={() => handleProjectClick(project)}
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {project.status === 'coming' && (
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                      🚀 Coming Soon
                    </div>
                  )}
                  {project.status === 'live' && (
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                      ✓ Live on GitHub
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-1 group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <i className="fab fa-github text-gray-500 dark:text-gray-400 text-lg transition-all duration-300 group-hover:text-blue-600 group-hover:scale-110"></i>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex gap-2 flex-wrap mb-4">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-100 dark:bg-slate-700 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button 
                    className={`text-sm font-semibold transition-all duration-300 inline-flex items-center gap-1 ${
                      project.status === 'live' 
                        ? 'text-blue-600 dark:text-blue-400 hover:gap-2' 
                        : 'text-gray-500 dark:text-gray-400 cursor-default'
                    }`}
                    onClick={(e) => {
                      e.stopPropagation()
                      handleProjectClick(project)
                    }}
                  >
                    {project.status === 'live' ? (
                      <>
                        View on GitHub 
                        <i className="fas fa-arrow-right text-xs transition-transform duration-300 group-hover:translate-x-1"></i>
                      </>
                    ) : (
                      'Coming Soon →'
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty state message */}
        {!loading && filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">No projects in this category yet. Check back soon!</p>
          </div>
        )}
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-24 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-6 py-3 rounded-full text-sm z-50 shadow-xl animate-fade-in-up">
          {toastMessage}
        </div>
      )}
    </div>
  )
}