import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header({ mobileMenuOpen, setMobileMenuOpen }) {
  const location = useLocation()
  
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' }
  ]

  const isActive = (path) => location.pathname === path

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-neutral-900 border-b border-pink-200 dark:border-pink-900">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-2xl font-heading font-bold text-pink-600">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center text-white font-bold">
            E
          </div>
          Elegant Ladies
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-semibold transition-colors ${
                isActive(link.path)
                  ? 'text-pink-600 border-b-2 border-pink-600'
                  : 'text-gray-700 dark:text-gray-300 hover:text-pink-600'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/27123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-pink-200 dark:border-pink-900 bg-white dark:bg-neutral-900">
          <div className="flex flex-col gap-4 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-semibold transition-colors ${
                  isActive(link.path)
                    ? 'text-pink-600'
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/27123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary block text-center"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
