'use client'

export default function Footer() {
  return (
    <footer className="footer py-6 mt-8 border-t border-gray-200 dark:border-slate-800 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-slate-800/30 dark:to-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-center sm:text-left">
            <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
              peace Iwada
            </p>
          </div>
          <div className="flex items-center gap-2">
            <i className="fab fa-react text-blue-500 dark:text-blue-400 text-sm"></i>
            <span className="text-gray-500 dark:text-gray-400 text-sm">Built with Next.js</span>
          </div>
        </div>
      </div>
    </footer>
  )
}