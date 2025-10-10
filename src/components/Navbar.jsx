import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  // ✅ Centralized navigation items
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Classes', path: '/classes' },
    { name: 'Courses', path: '/courses' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ]

  // ✅ Navigation handler
  const handleGetStarted = () => {
    navigate('/contact')
    setIsOpen(false)
  }

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* 🔰 Logo / Brand */}
        <Link
          to="/"
          className="text-3xl md:text-4xl font-bold tracking-wide text-gray-900"
        >
          Uniworld <span className="text-[#155DFC]">Nepal</span>
        </Link>

        {/* 💻 Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-[#000] font-semibold text-lg">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="hover:text-[#155DFC] transition duration-200"
            >
              {item.name}
            </Link>
          ))}
          <button
            onClick={handleGetStarted}
            className="bg-[#155DFC] hover:bg-blue-700 text-white px-5 py-2 rounded-full transition duration-200"
          >
            Get Started
          </button>
        </div>

        {/* 📱 Mobile Menu Button */}
        <button
          className="md:hidden text-[#155DFC]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* 📱 Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#155DFC] text-white px-6 py-4 flex flex-col gap-4 font-medium text-lg">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-300 transition duration-200"
            >
              {item.name}
            </Link>
          ))}
          <button
            onClick={handleGetStarted}
            className="mt-2 bg-white text-[#155DFC] font-semibold rounded-full px-5 py-2 hover:bg-gray-100 transition duration-200"
          >
            Get Started
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar
