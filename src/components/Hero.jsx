'use client'

import bottleImg from "../assets/bot.png";
import bgImg from "../assets/patna-bg.jpg"; // 👉 add your background image here

export default function Hero() {
  return (
    <section
      className="relative py-14 sm:py-16 md:py-20 overflow-hidden"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/1.2 via-white/80 to-white/60 backdrop-blur-sm"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* LEFT */}
          <div className="space-y-6 text-center md:text-left">

            {/* Badge */}
            <span className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-blue-600 shadow
              transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              ✔ PATNA’S TRUSTED BRANDING PARTNER
            </span>

            {/* Heading */}
            <h1 className="font-extrabold text-slate-900 leading-tight
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Your Brand In <br />
              <span className="text-blue-500">Every Hand</span>
            </h1>

            {/* Desc */}
            <p className="text-slate-700 max-w-xl mx-auto md:mx-0
              text-sm sm:text-base">
              Premium custom labeling and pure mineral water supply for
              weddings, corporate events, and parties across Patna.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 justify-center md:justify-start">

              <button className="w-full sm:w-auto bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold shadow
                transition-all duration-300 hover:bg-blue-600 hover:-translate-y-1 hover:shadow-xl">
                Explore Products
              </button>

              <button className="w-full sm:w-auto border-2 border-blue-500 text-blue-500 px-6 py-3 rounded-xl font-semibold
                transition-all duration-300 hover:bg-blue-50 hover:-translate-y-1">
                Get a Quote
              </button>

              <button className="w-full sm:w-auto bg-green-500 text-white px-6 py-3 rounded-xl font-semibold
                transition-all duration-300 hover:bg-green-600 hover:-translate-y-1">
                WhatsApp
              </button>

            </div>

            {/* Trust */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-6 text-xs sm:text-sm text-slate-600 justify-center md:justify-start">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/40?${i}`}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white
                      transition-transform hover:scale-110"
                  />
                ))}
              </div>
              <span>
                Trusted by <b>500+</b> Clients in Bihar
              </span>
            </div>

          </div>

          {/* RIGHT */}
          <div className="flex justify-center md:justify-end">

            <div className="relative bg-white rounded-3xl shadow-xl
              p-4 sm:p-5 md:p-6 transition-all duration-500 hover:-translate-y-2">

              {/* Bottle */}
              <img
                src={bottleImg}
                alt="Bottle"
                className="mx-auto
                  w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] rounded-2xl
                  animate-float transition-transform hover:scale-105"
              />

              {/* Floating Badge */}
              <div className="absolute -bottom-5 sm:-bottom-6 left-1/3 -translate-x-1/3
                bg-white px-4 py-2 sm:px-5 sm:py-3 rounded-2xl shadow
                flex items-center gap-2 sm:gap-3 text-xs sm:text-sm
                transition-all hover:-translate-y-1">

                <span className="bg-blue-100 text-blue-600 p-2 rounded-full">💧</span>
                <div>
                  <p className="font-bold text-slate-800">CERTIFIED QUALITY</p>
                  <p className="text-slate-500">
                    100% Purified & Mineral Rich
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* FLOAT */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
