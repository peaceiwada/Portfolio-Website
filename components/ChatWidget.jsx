'use client'

import { useState, useRef, useEffect } from 'react'

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { text: "👋 Hi! I'm Iwada's assistant. Ask about my skills, interests, or projects!", isUser: false }
  ])
  const [input, setInput] = useState('')
  const messagesEndRef = useRef(null)
  const chatContainerRef = useRef(null)

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages])

  // Close chat when clicking outside (optional)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatContainerRef.current && !chatContainerRef.current.contains(event.target) && isOpen) {
        // Don't close automatically - let user close manually
        // This is optional - you can uncomment if desired
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  const handleSend = () => {
    if (!input.trim()) return

    setMessages([...messages, { text: input, isUser: true }])
    setInput('')

    setTimeout(() => {
      const lowerInput = input.toLowerCase()
      let reply = "Thanks! I'm Iwada's assistant. Ask me about skills, interests, or projects!"

      if (lowerInput.includes('skill') || lowerInput.includes('tech') || lowerInput.includes('know')) {
        reply = "Iwada knows HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, and Git! Always learning new technologies. Check out the Skills page for more details! 🚀"
      } else if (lowerInput.includes('interest') || lowerInput.includes('hobby')) {
        reply = "Iwada loves critical analysis, tech exploration, and UI/UX design! Also enjoys music, dancing, football, and reading. 🎵⚽📚"
      } else if (lowerInput.includes('project') || lowerInput.includes('portfolio')) {
        reply = "Check out the Portfolio page! Projects include Analytics Dashboard, E-commerce Platform, and Task Management App. More coming soon! 💻"
      } else if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('reach')) {
        reply = "You can reach Iwada at ebortypeace81@gmail.com or via WhatsApp at +234 701 234 5678. I typically respond within 24 hours! 📧"
      } else if (lowerInput.includes('about') || lowerInput.includes('bio')) {
        reply = "Iwada is a passionate software development student from Nigeria who loves building web applications and learning new technologies. Always eager to turn ideas into reality! 🌟"
      } else if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey')) {
        reply = "Hello! 👋 Thanks for reaching out. I'm here to help! Ask me about skills, interests, projects, or anything you'd like to know about Iwada."
      }

      setMessages(prev => [...prev, { text: reply, isUser: false }])
    }, 400)
  }

  const sendQuickReply = (replyText) => {
    setMessages([...messages, { text: replyText, isUser: true }])
    
    setTimeout(() => {
      let response = ""
      if (replyText === "What are your skills?") {
        response = "Iwada knows HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, and Git! Always learning new technologies. Check out the Skills page for more details! 🚀"
      } else if (replyText === "What are your interests?") {
        response = "Iwada loves critical analysis, tech exploration, and UI/UX design! Also enjoys music, dancing, football, and reading. 🎵⚽📚"
      } else if (replyText === "Show me your projects") {
        response = "Check out the Portfolio page! Projects include Analytics Dashboard, E-commerce Platform, and Task Management App. More coming soon! 💻"
      } else if (replyText === "How can I contact you?") {
        response = "You can reach Iwada at ebortypeace81@gmail.com or via WhatsApp at +234 701 234 5678. I typically respond within 24 hours! 📧"
      }
      setMessages(prev => [...prev, { text: response, isUser: false }])
    }, 400)
  }

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50" ref={chatContainerRef}>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all hover:shadow-xl focus:outline-none"
        aria-label="Open chat"
      >
        <i className="fas fa-comment-dots text-white text-lg sm:text-xl"></i>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 sm:bottom-20 w-[calc(100vw-2rem)] sm:w-80 md:w-96 max-w-[320px] sm:max-w-sm bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-slate-700 overflow-hidden animate-slide-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 sm:p-4 font-semibold flex justify-between items-center">
            <div className="flex items-center gap-2">
              <i className="fas fa-robot text-sm sm:text-base"></i>
              <span className="text-sm sm:text-base">Iwada's Assistant</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="hover:rotate-90 transition-all duration-200 p-1 hover:bg-white/20 rounded-full"
              aria-label="Close chat"
            >
              <i className="fas fa-times text-sm sm:text-base"></i>
            </button>
          </div>

          {/* Messages Area */}
          <div className="h-64 sm:h-40 overflow-y-auto p-3 sm:p-4 space-y-3 bg-gray-50 dark:bg-slate-900">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'} animate-fade-in`}>
                <div className={`max-w-[85%] px-3 py-2 sm:px-4 sm:py-2 rounded-2xl text-xs sm:text-sm ${
                  msg.isUser
                    ? 'bg-blue-600 text-white rounded-br-none'
                    : 'bg-gray-200 dark:bg-slate-700 text-gray-800 dark:text-gray-200 rounded-bl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Reply Buttons */}
          <div className="px-3 py-2 border-t border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800">
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              <button
                onClick={() => sendQuickReply("What are your skills?")}
                className="px-2 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
              >
                💻 Skills
              </button>
              <button
                onClick={() => sendQuickReply("What are your interests?")}
                className="px-2 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
              >
                🎯 Interests
              </button>
              <button
                onClick={() => sendQuickReply("Show me your projects")}
                className="px-2 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
              >
                📁 Projects
              </button>
              <button
                onClick={() => sendQuickReply("How can I contact you?")}
                className="px-2 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
              >
                📧 Contact
              </button>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-2 sm:p-3 border-t border-gray-200 dark:border-slate-700 flex gap-2 bg-white dark:bg-slate-800">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type a message..."
              className="flex-1 p-2 sm:p-2.5 text-sm rounded-xl border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-xl hover:bg-blue-700 transition-all hover:scale-105"
              aria-label="Send message"
            >
              <i className="fas fa-paper-plane text-sm"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}