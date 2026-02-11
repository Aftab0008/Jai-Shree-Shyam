'use client'

export default function About() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT STATS */}
          <div className="grid grid-cols-2 gap-6">

            {/* Card 1 */}
            <div className="bg-[#f1f7ff] rounded-2xl p-6 flex flex-col items-center justify-center text-center
              hover:scale-105 transition duration-300">
              <div className="text-blue-500 text-2xl mb-2">⏱️</div>
              <h3 className="text-2xl font-bold text-slate-900">3+</h3>
              <p className="text-sm text-slate-600">Years Exp</p>
            </div>

            {/* Card 2 (Highlighted) */}
            <div className="bg-blue-600 text-white rounded-2xl p-6 flex flex-col items-center justify-center text-center
              hover:scale-105 transition duration-300 shadow-lg">
              <div className="text-2xl mb-2">👥</div>
              <h3 className="text-2xl font-bold">5k+</h3>
              <p className="text-sm opacity-90">Events Done</p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#f1f7ff] rounded-2xl p-6 flex flex-col items-center justify-center text-center
              hover:scale-105 transition duration-300">
              <div className="text-blue-500 text-2xl mb-2">👍</div>
              <h3 className="text-2xl font-bold text-slate-900">100%</h3>
              <p className="text-sm text-slate-600">Quality</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white border rounded-2xl p-6 flex flex-col items-center justify-center text-center
              hover:scale-105 transition duration-300">
              <div className="text-red-500 text-2xl mb-2">❤️</div>
              <h3 className="text-lg font-bold text-slate-900">Bihar's</h3>
              <p className="text-sm text-slate-600">Choice</p>
            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-6">
            <p className="text-sm font-semibold tracking-widest text-blue-500 uppercase">
              ABOUT US
            </p>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              Crafting Identity Through <br /> Hydration
            </h2>

            <p className="text-slate-600 leading-relaxed max-w-xl">
              Jai Shree Shyam Enterprises is Patna's pioneer in personalized water bottle
              branding. We believe that every occasion deserves a unique touch.
              From corporate conferences to intimate family weddings, we provide
              high-quality mineral water paired with labels that reflect your brand
              or celebration's spirit.
            </p>

            {/* Bullet Points */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-green-500">✔</span>
                <p className="text-slate-700">
                  State-of-the-art purification process
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-green-500">✔</span>
                <p className="text-slate-700">
                  Waterproof & High-Definition label printing
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-green-500">✔</span>
                <p className="text-slate-700">
                  Express delivery across Patna & Bihar
                </p>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
            >
              Learn More About Our Process →
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
