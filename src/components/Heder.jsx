'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.jpg'   // ✅ IMPORT LOGO

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* LOGO SECTION */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Jai Shree Shyam Enterprises Logo"
              className="w-12 h-12 object-contain"
            />

            <div className="leading-tight">
              <h1 className="text-lg sm:text-xl font-bold text-slate-900">
                Jai Shree Shyam
              </h1>
              <p className="text-xs text-gray-600">
                Custom Branded Bottles
              </p>
            </div>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('products')}
              className="text-slate-700 hover:text-blue-600 transition-colors"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-slate-700 hover:text-blue-600 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-slate-700 hover:text-blue-600 transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-blue-600 hover:bg-gray-100"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE NAV */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-3 space-y-2">
            <button
              onClick={() => scrollToSection('products')}
              className="block w-full text-left py-2 text-slate-700 hover:text-blue-600"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left py-2 text-slate-700 hover:text-blue-600"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left py-2 text-slate-700 hover:text-blue-600"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
