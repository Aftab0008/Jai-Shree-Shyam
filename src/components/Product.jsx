'use client'

import img01 from "../assets/01.JPEG"
import img02 from "../assets/02.JPEG"
import img04 from "../assets/04.PNG"


export default function Products() {
  const products = [
    {
      id: 1,
      title: "200ml Mini",
      subtitle: "Premium Wedding Special",
      image: img01,
    },
    {
      id: 2,
      title: "500ml Standard",
      subtitle: "Corporate & Official",
      image: img02,
    },
    {
      id: 3,
      title: "1Litre Classic",
      subtitle: "Events & Seminars",
      image: img04,
    },
   
  ]

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

      
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-14">

          <div>
            <p className="text-sm font-semibold tracking-widest text-blue-500 uppercase mb-2">
              OUR PRODUCTS
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Choose Your Size
            </h2>
          </div>

          <div className="flex gap-4">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold shadow
              transition hover:bg-blue-600">
              Get Quote for All Sizes
            </button>

            <button className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold shadow
              transition hover:bg-green-600">
              WhatsApp Inquiry
            </button>
          </div>

        </div>

   
        <div className="grid grid-cols-1 items-center sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {products.map(product => (
            <div
              key={product.id}
              className="group bg-white rounded-3xl shadow-md overflow-hidden
                transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image */}
              <div className="aspect-square bg-gray-100 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-110   object-fit


                    transition-transform duration-500 group-hover:scale-105"
                />
              </div>

         
              <div className="p-5">
                <h3 className="text-lg font-bold text-slate-900">
                  {product.title}
                </h3>
                <p className="text-sm text-slate-500 italic">
                  {product.subtitle}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}
