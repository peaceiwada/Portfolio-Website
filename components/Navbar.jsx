'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isDark, setIsDark] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    setIsDark(savedTheme === 'dark')
  }, [])

  const toggleTheme = () => {
    const newDark = !isDark
    setIsDark(newDark)
    if (newDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/skills', label: 'Skills' },
    { href: '/blog', label: 'Blog' },
    { href: '/github', label: 'GitHub' },
    { href: '/contact', label: 'Contact' },
  ]

  const isActive = (path) => {
    if (path === '/' && pathname === '/') return true
    if (path !== '/' && pathname?.startsWith(path)) return true
    return false
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    document.body.style.overflow = ''
  }

  const openMobileMenu = () => {
    setMobileMenuOpen(true)
    document.body.style.overflow = 'hidden'
  }

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/95 backdrop-blur-md border-b border-gray-200/80 dark:border-slate-700/80 shadow-sm transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 md:py-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="logo-icon w-9 h-9 md:w-10 md:h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all">
                <i className="fas fa-code text-white text-base md:text-lg"></i>
              </div>
              <div className="text-lg sm:text-xl md:text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Iwada<span className="text-blue-600 dark:text-blue-400">.</span>Dev
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-btn px-3 lg:px-4 py-2 rounded-full text-sm font-medium transition-all text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 ${
                    isActive(link.href) ? 'nav-active text-blue-600 dark:text-blue-400' : ''
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={toggleTheme}
                className="ml-2 p-2 rounded-full bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-all hover:scale-110"
              >
                <i className={`fas ${isDark ? 'fa-sun text-yellow-400' : 'fa-moon text-gray-700'}`}></i>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-100 dark:bg-slate-800"
              >
                <i className={`fas ${isDark ? 'fa-sun text-yellow-400' : 'fa-moon text-gray-700'}`}></i>
              </button>
              <button
                onClick={openMobileMenu}
                className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800"
              >
                <i className="fas fa-bars text-gray-700 dark:text-gray-300 text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white dark:bg-slate-900 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6 flex flex-col space-y-2">
          <div className="flex justify-end mb-4">
            <button
              onClick={closeMobileMenu}
              className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800"
            >
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>
          <div className="border-b border-gray-200 dark:border-slate-700 mb-4 pb-4">
            <div className="flex items-center gap-3 px-3 py-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <i className="fas fa-code text-white text-sm"></i>
              </div>
              <div className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Iwada.Dev
              </div>
            </div>
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMobileMenu}
              className={`mobile-nav-btn text-left px-4 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-800 transition-all w-full font-medium ${
                isActive(link.href) ? 'bg-gray-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={closeMobileMenu}
        ></div>
      )}
    </>
  )
}