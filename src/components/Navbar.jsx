import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  // ✅ Centralized navigation items
  const navItems = [
    { name: 'Home', path: '/' },
    {name: 'About', path: '/about'},
    {name: 'Gallery', path: '/gallery'},
    // { name: 'Classes', path: '/classes' },
    // { name: 'Courses', path: '/courses' },
    // { name: 'Blog', path: '/blog' },
    {name: 'Study Abroad', path: '/study-abroad'},
    { name: 'Contact', path: '/contact' },
  ]

  // ✅ Navigation handler
  const handleGetStarted = () => {
    navigate('/submit-queries')
    setIsOpen(false)
  }

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        {/* 🔰 Logo / Brand */}
        <Link
          to="/"
          className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-gray-900 hover:opacity-90 transition-opacity duration-200"
        >
          Uniworld <span className="text-[#155DFC]">Education</span>
        </Link>

        {/* 💻 Desktop Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10 text-gray-700 font-medium text-sm lg:text-base">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="hover:text-[#155DFC] transition duration-200 px-2 py-2 rounded-lg hover:bg-gray-50"
            >
              {item.name}
            </Link>
          ))}
          <button
            onClick={handleGetStarted}
            className="bg-gradient-to-r from-[#155DFC] to-[#2563EB] cursor-pointer hover:from-blue-700 hover:to-blue-800 text-white px-5 py-2 rounded-full transition duration-300 shadow-md hover:shadow-lg text-sm lg:text-base"
          >
            Get Started
          </button>
        </div>

        {/* 📱 Mobile Menu Button */}
        <button
          className="md:hidden text-[#155DFC] p-2 rounded-lg hover:bg-gray-100"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* 📱 Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white text-gray-800 px-4 sm:px-6 py-4 flex flex-col gap-2 font-medium text-base border-t border-gray-100 shadow-lg animate-fade-in-up">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="hover:text-[#155DFC] transition duration-200 py-3 px-3 rounded-lg hover:bg-gray-50"
            >
              {item.name}
            </Link>
          ))}
          <button
            onClick={handleGetStarted}
            className="mt-3 cursor-pointer bg-gradient-to-r from-[#155DFC] to-[#2563EB] text-white font-medium rounded-full px-6 py-3 hover:from-blue-700 hover:to-blue-800 transition duration-300 shadow-md hover:shadow-lg"
          >
            Get Started
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar
