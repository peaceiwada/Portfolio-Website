'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function BlogPost({ post }) {
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(post.likes || 15)
  const [views, setViews] = useState(post.views || 25)

  useEffect(() => {
    // Check if user already liked this post
    const savedLiked = localStorage.getItem(`liked_${post.id}`)
    if (savedLiked === 'true') {
      setLiked(true)
      const storedLikes = localStorage.getItem(`likes_${post.id}`)
      if (storedLikes) {
        setLikes(parseInt(storedLikes))
      } else {
        // If liked but no stored likes, use post.likes + 1
        setLikes((post.likes || 15) + 1)
      }
    } else {
      // Check global likedPosts storage
      const globalLiked = localStorage.getItem('likedPosts')
      if (globalLiked) {
        const parsed = JSON.parse(globalLiked)
        if (parsed[post.id]) {
          setLiked(true)
          const storedLikes = localStorage.getItem(`likes_${post.id}`)
          if (storedLikes) setLikes(parseInt(storedLikes))
          else setLikes((post.likes || 15) + 1)
        }
      }
    }
    
    // Track view (increment only once per user)
    const hasViewed = localStorage.getItem(`viewed_${post.id}`)
    if (!hasViewed) {
      // Get current view count from storage or use default
      let currentViews = parseInt(localStorage.getItem(`views_${post.id}`) || post.views || 25)
      const newViews = currentViews + 1
      setViews(newViews)
      localStorage.setItem(`viewed_${post.id}`, 'true')
      localStorage.setItem(`views_${post.id}`, newViews)
      
      // Update global postViews for blog list
      const globalViews = JSON.parse(localStorage.getItem('postViews') || '{}')
      globalViews[post.id] = newViews
      localStorage.setItem('postViews', JSON.stringify(globalViews))
    } else {
      // Get stored views
      const storedViews = localStorage.getItem(`views_${post.id}`)
      if (storedViews) {
        setViews(parseInt(storedViews))
      }
    }
    
    // Load stored likes count
    const storedLikes = localStorage.getItem(`likes_${post.id}`)
    if (storedLikes && !liked) {
      setLikes(parseInt(storedLikes))
    }
  }, [post.id, post.likes, post.views])

  const handleLike = () => {
    if (!liked) {
      const newLikes = likes + 1
      setLikes(newLikes)
      setLiked(true)
      
      // Store individual post like
      localStorage.setItem(`liked_${post.id}`, 'true')
      localStorage.setItem(`likes_${post.id}`, newLikes)
      
      // Update global liked posts for blog list
      const globalLiked = JSON.parse(localStorage.getItem('likedPosts') || '{}')
      globalLiked[post.id] = true
      localStorage.setItem('likedPosts', JSON.stringify(globalLiked))
    }
  }

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-slate-800/80 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200 dark:border-slate-700 p-6 sm:p-8 md:p-10">
          <Link href="/blog" className="inline-flex items-center gap-2 text-blue-600 hover:gap-3 transition-all mb-6">
            <i className="fas fa-arrow-left"></i> Back to Blog
          </Link>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">{post.title}</h1>
          <p className="text-indigo-600 font-medium mb-4">{post.category}</p>
          <div className="flex items-center gap-6 text-sm text-gray-500 mb-6 pb-4 border-b border-gray-200">
            <p><i className="far fa-eye mr-2"></i> {views} views</p>
            <p><i className={`far fa-heart ${liked ? 'fas text-red-500' : 'far'} mr-2`}></i> {likes} likes</p>
          </div>
          <div className="post-content text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
            {post.body}
          </div>
          <div className="mt-8 flex flex-col sm:flex-row justify-between gap-4 pt-6 border-t border-gray-200">
            <button
              onClick={handleLike}
              className={`px-5 py-2.5 rounded-lg font-medium transition-all ${liked ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-red-500 hover:text-white'}`}
            >
              <i className="fas fa-heart mr-2"></i> {liked ? 'Liked' : 'Like'} ({likes})
            </button>
            <Link href="/blog" className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center font-medium hover:shadow-lg transition-all">
              Browse More Articles <i className="fas fa-newspaper ml-2"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}