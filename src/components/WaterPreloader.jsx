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
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white px-4">

      {/* LOGO */}
      <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center mb-4">
        <span className="text-white text-xl">💧</span>
      </div>

      <h2 className="text-xl font-semibold text-slate-800 mb-8">
        Jai Shree Shyam Enterprises
      </h2>

      {/* BOTTLE SVG */}
      <div className="relative w-24 h-64">
        <svg
          viewBox="0 0 120 360"
          className="w-full h-full"
        >
          {/* CLIP PATH = BOTTLE SHAPE */}
          <defs>
            <clipPath id="bottleClip">
              <path d="
                M45 10
                h30
                v25
                c0 5 -5 10 -10 10
                h-10
                c-5 0 -10 -5 -10 -10
                z

                M35 45
                h50
                c10 0 15 10 15 20
                v210
                c0 15 -10 30 -25 30
                h-30
                c-15 0 -25 -15 -25 -30
                v-210
                c0 -10 5 -20 15 -20
                z
              " />
            </clipPath>
          </defs>

          {/* WATER */}
          <rect
            x="0"
            y={360 - (progress * 3.6)}
            width="120"
            height="360"
            clipPath="url(#bottleClip)"
            fill="url(#waterGradient)"
            className="transition-all duration-300"
          />

          {/* WATER GRADIENT */}
          <defs>
            <linearGradient id="waterGradient" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#1d4ed8" />
              <stop offset="100%" stopColor="#60a5fa" />
            </linearGradient>
          </defs>

          {/* BOTTLE OUTLINE */}
          <path
            d="
              M45 10
              h30
              v25
              c0 5 -5 10 -10 10
              h-10
              c-5 0 -10 -5 -10 -10
              z

              M35 45
              h50
              c10 0 15 10 15 20
              v210
              c0 15 -10 30 -25 30
              h-30
              c-15 0 -25 -15 -25 -30
              v-210
              c0 -10 5 -20 15 -20
              z
            "
            fill="none"
            stroke="#1e40af"
            strokeWidth="4"
          />
        </svg>
      </div>

      {/* PERCENT */}
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

      <p className="mt-3 text-sm text-slate-500">
        Purifying your brand experience...
      </p>

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
