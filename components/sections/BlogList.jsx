'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { BLOG_POSTS } from '@/data/blogPosts'

export default function BlogList() {
  const [likedPosts, setLikedPosts] = useState({})
  const [postViews, setPostViews] = useState({})

  useEffect(() => {
    // Load saved likes and views from localStorage
    const savedLikes = localStorage.getItem('likedPosts')
    const savedViews = localStorage.getItem('postViews')
    
    if (savedLikes) setLikedPosts(JSON.parse(savedLikes))
    if (savedViews) setPostViews(JSON.parse(savedViews))
    
    // Initialize views for posts that haven't been viewed
    BLOG_POSTS.forEach(post => {
      if (!postViews[post.id]) {
        const savedView = localStorage.getItem(`views_${post.id}`)
        if (savedView) {
          setPostViews(prev => ({ ...prev, [post.id]: parseInt(savedView) }))
        } else {
          // Set default view count from blog data (25)
          setPostViews(prev => ({ ...prev, [post.id]: post.views }))
        }
      }
    })
  }, [])

  const getCategoryColor = (category) => {
    const colors = {
      "Web Development": "from-blue-500 to-cyan-500",
      "Next.js": "from-gray-600 to-gray-800",
      "CSS": "from-blue-400 to-indigo-500",
      "JavaScript": "from-yellow-500 to-orange-500",
      "Frontend": "from-cyan-500 to-blue-500",
      "UI/UX": "from-purple-500 to-pink-500",
      "Web Apps": "from-green-500 to-teal-500",
      "DevOps": "from-red-500 to-orange-500",
      "Artificial Intelligence": "from-indigo-500 to-purple-500"
    }
    return colors[category] || "from-blue-500 to-purple-500"
  }

  const getPostViews = (id) => {
    // First check localStorage postViews, then fallback to BLOG_POSTS default
    return postViews[id] || BLOG_POSTS.find(p => p.id === id)?.views || 25
  }
  
  const getPostLikes = (id) => {
    const post = BLOG_POSTS.find(p => p.id === id)
    if (!post) return 0
    
    // Check if there's a stored like count from individual post
    const storedLikes = localStorage.getItem(`likes_${id}`)
    if (storedLikes) {
      return parseInt(storedLikes)
    }
    
    // Check if user liked in global storage
    if (likedPosts[id]) {
      return post.likes + 1
    }
    
    return post.likes || 15
  }

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/40 px-4 py-2 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
            <i className="fas fa-pen-fancy"></i> <span>Thoughts & Insights</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Welcome to My <span className="gradient-animate">Tech Blog</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">Exploring Tech, Coding, and Creative Projects — sharing my journey in web development.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, idx) => {
            const views = getPostViews(post.id)
            const likes = getPostLikes(post.id)
            const isLiked = likedPosts[post.id] || localStorage.getItem(`liked_${post.id}`) === 'true' || false

            return (
              <div key={post.id} data-aos="fade-up" data-aos-delay={idx * 50} className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-500">
                <Link href={`/blog/${post.id}`} className="block p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${getCategoryColor(post.category)} text-white font-medium`}>
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      <i className="far fa-calendar-alt mr-1"></i>{post.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{post.preview.substring(0, 100)}...</p>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200 dark:border-slate-700">
                    <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                      <span><i className="far fa-eye mr-1"></i> {views}</span>
                      <span><i className={`far fa-heart ${isLiked ? 'fas text-red-500' : 'far'} mr-1`}></i> {likes}</span>
                    </div>
                    <span className="text-blue-600 text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read More <i className="fas fa-arrow-right text-xs"></i>
                    </span>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}