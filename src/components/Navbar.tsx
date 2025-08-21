import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, X, Search } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/groups', label: 'Groups' },
  { href: '/projects', label: 'Projects' },
  { href: '/members', label: 'Members' },
  { href: '/resources', label: 'Resources' },
  { href: '/join', label: 'Join Us' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (search.trim()) {
      navigate(`/projects?search=${encodeURIComponent(search)}`)
      setSearch('')
      setIsOpen(false)
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/95 backdrop-blur-sm border-b border-[rgb(var(--border-rgb))] sticky top-0 z-50 shadow-sm"
    >
      <div className="container flex items-center justify-between py-4">
        <Link
          to="/"
          className="text-2xl font-bold text-[rgb(var(--primary-rgb))] hover:text-[rgb(var(--primary-hover-rgb))] transition-colors"
        >
          TechBit Coding Club
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="text-[rgb(var(--text-secondary-rgb))] hover:text-[rgb(var(--primary-rgb))] transition-colors font-medium relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[rgb(var(--primary-rgb))] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>

          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-4 py-2.5 rounded-lg border border-[rgb(var(--border-muted-rgb))]
                         bg-white text-[rgb(var(--foreground-rgb))]
                         focus:ring-2 focus:ring-[rgb(var(--primary-rgb))]/20
                         focus:border-[rgb(var(--primary-rgb))]
                         transition-all duration-200 w-56 text-sm
                         placeholder-[rgb(var(--text-muted-rgb))]"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[rgb(var(--text-muted-rgb))]" />
          </form>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="p-2 hover:bg-gray-50 rounded-lg transition-colors"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-[rgb(var(--text-secondary-rgb))]" />
            ) : (
              <Menu className="h-6 w-6 text-[rgb(var(--text-secondary-rgb))]" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-[rgb(var(--border-rgb))] overflow-hidden"
          >
            <div className="container py-6">
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-[rgb(var(--text-secondary-rgb))] hover:text-[rgb(var(--primary-rgb))]
                                 transition-colors font-medium block py-2 px-3 rounded-lg
                                 hover:bg-gray-50"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <form onSubmit={handleSearch} className="mt-6 relative">
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10 pr-4 py-2.5 rounded-lg border border-[rgb(var(--border-muted-rgb))]
                             bg-white text-[rgb(var(--foreground-rgb))]
                             focus:ring-2 focus:ring-[rgb(var(--primary-rgb))]/20
                             focus:border-[rgb(var(--primary-rgb))]
                             transition-all duration-200 w-full text-sm
                             placeholder-[rgb(var(--text-muted-rgb))]"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[rgb(var(--text-muted-rgb))]" />
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}