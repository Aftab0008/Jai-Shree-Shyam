'use client'

import pr1 from "../assets/pr1.PNG"; 
import per2 from "../assets/per2.png"; 


export default function Leadership() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">

        {/* TOP HEADING */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          Let's Build Your{' '}
          <span className="text-blue-600">Brand Identity</span>
        </h2>

        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
          From custom water bottle solutions to corporate branding across Patna,
          our team is here to help your business stand out.
        </p>

        {/* LEADERSHIP TITLE */}
        <div className="mt-16">
          <span className="inline-block px-4 py-1 text-xs font-semibold tracking-widest
            text-blue-600 bg-blue-50 rounded-full uppercase">
            Leadership
          </span>

          <h3 className="mt-4 text-2xl sm:text-3xl font-bold text-slate-900">
            Our Management Team
          </h3>

          <p className="mt-3 text-slate-600 max-w-xl mx-auto text-sm">
            Direct contact with our executive team for specialized requirements
            and bulk corporate deals.
          </p>
        </div>

         {/* PHOTO BOX CARDS */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-10">

          {/* CARD 1 */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden text-left">
            <div className="h-80 w-full overflow-hidden">
              <img
                src={per2}
                alt="Priyanshu Gupta"
                className="h-168 w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="p-6 space-y-2">
              <h4 className="text-lg font-bold text-slate-900">
                Priyanshu Gupta
              </h4>

              <p className="text-blue-600 text-xs font-semibold uppercase tracking-wide">
                Director
              </p>

              <p className="text-slate-600 text-sm flex items-center gap-2">
                📞 +91 91234 56789
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden text-left">
            <div className="h-80 w-full overflow-hidden">
              <img
                src={pr1}
                alt="Abhinandan Sharma"
                className="h-170 w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="p-6 space-y-2">
              <h4 className="text-lg font-bold text-slate-900">
                Abhinandan Sharma
              </h4>

              <p className="text-blue-600 text-xs font-semibold uppercase tracking-wide">
                Managing Director
              </p>

              <p className="text-slate-600 text-sm flex items-center gap-2">
                📞 +91 98765 43210
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
