'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { BLOG_POSTS } from '@/data/blogPosts'
import BlogPost from '@/components/sections/BlogPost'

export default function BlogPostPage() {
  const params = useParams()
  const [post, setPost] = useState(null)

  useEffect(() => {
    const foundPost = BLOG_POSTS.find(p => p.id === params.id)
    setPost(foundPost)
  }, [params.id])

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl">Post Not Found</div>
      </div>
    )
  }

  return <BlogPost post={post} />
}