'use client'
import { useEffect, useState } from 'react'

export default function WaterPreloader({ onComplete }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => onComplete(), 500)
          return 100
        }
        return prev + 1
      })
    }, 25)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white text-center px-4">

      {/* LOGO ICON */}
      <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center mb-4">
        <span className="text-white text-xl">💧</span>
      </div>

      {/* BRAND NAME */}
      <h2 className="text-xl font-semibold text-slate-800 mb-10">
        Jai Shree Shyam Enterprises
      </h2>

      {/* BOTTLE */}
      <div className="relative w-20 h-56 border-4 border-blue-600 rounded-b-2xl rounded-t-md overflow-hidden">
        
        {/* WATER */}
        <div
          className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-blue-700 to-blue-400 transition-all duration-300"
          style={{ height: `${progress}%` }}
        />
      </div>

      {/* PERCENTAGE */}
      <p className="mt-6 text-2xl font-bold text-blue-600">
        {progress}%
      </p>

      {/* LOADING BAR */}
      <div className="w-48 h-1 bg-blue-100 rounded-full mt-3 overflow-hidden">
        <div
          className="h-full bg-blue-600 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* TAGLINE */}
      <p className="mt-3 text-sm text-slate-500">
        Purifying your brand experience...
      </p>

      {/* FOOTER TEXT */}
      <div className="mt-10 text-center">
        <p className="text-slate-700 font-medium">
          Join us, We Provide Your Brand In Every Hand
        </p>
        <p className="text-xs text-slate-500 mt-1">
          Premium Water Branding Solutions in Patna
        </p>
      </div>
    </div>
  )
}
