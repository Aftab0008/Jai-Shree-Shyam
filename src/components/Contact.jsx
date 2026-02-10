'use client'
import { useState } from 'react'

export default function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: 'Wedding Branding',
    bottleSize: '500 ml',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const { name, phone, subject, bottleSize, message } = formData

    if (!name || !phone || !message) {
      alert('Please fill all required fields')
      return
    }

    const whatsappNumber = '918579813785'

    const whatsappMessage =
      `जय श्री श्याम एंटरप्राइज़ेस में नई पूछताछ प्राप्त हुई है` +
      `👤 Name: ${name}%0A` +
      `📞 Phone: ${phone}%0A` +
      `📌 Subject: ${subject}%0A` +
      `💧 Bottle Size: ${bottleSize}%0A` +
      `📝 Message: ${message}`

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
    window.open(whatsappURL, '_blank')
  }

  return (
    <section id="contact" className="bg-[#f8fafc] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* LEFT CONTENT */}
          <div className="space-y-8">

            <div>
              <p className="text-sm font-semibold tracking-widest text-blue-500 uppercase mb-2">
                CONTACT US
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                Let's Discuss Your Branding <br /> Needs
              </h2>
              <p className="mt-4 text-slate-600 max-w-md">
                Our team is ready to help you create the perfect custom bottle.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-full">📍</div>
              <div>
                <p className="font-bold text-slate-900">Our Office</p>
                <p className="text-slate-600 text-sm">
                  Mithapur, Near Flyover, Patna, Bihar - 800001
                </p>
              </div>
            </div>

            {/* MAP SECTION */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg bg-gray-200 h-56 sm:h-64">

              <iframe
                title="Google Map"
                src="https://www.google.com/maps?q=Phulwari%20Sharif%20Patna&output=embed"
                className="w-full h-full grayscale"
                loading="lazy"
              />

              <a
                href="https://www.google.com/maps?q=Phulwari+Sharif+Patna"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center"
              >
                <span className="bg-white px-5 py-2 rounded-full shadow-md text-sm font-semibold text-slate-800
                  hover:scale-105 transition">
                  📍 Open in Google Maps
                </span>
              </a>

            </div>

          </div>

          {/* RIGHT FORM */}
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8">

            <form onSubmit={handleSubmit} className="space-y-5">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-slate-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="mt-2 w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-700">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91"
                    className="mt-2 w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-700">
                  Subject
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-2 w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option>Wedding Branding</option>
                  <option>Corporate Branding</option>
                  <option>Bulk Order</option>
                </select>
              </div>

              {/* ✅ Bottle Size */}
              <div>
                <label className="text-sm font-semibold text-slate-700">
                  Bottle Size
                </label>
                <select
                  name="bottleSize"
                  value={formData.bottleSize}
                  onChange={handleChange}
                  className="mt-2 w-full px-4 py-3 rounded-xl border border-slate-200
                    focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option value="250 ml">250 ml</option>
                  <option value="500 ml">500 ml</option>
                  <option value="1 Liter">1 Liter</option>
                  <option value="2 Liter">2 Liter</option>
                  <option value="20 Liter (Jar)">20 Liter (Jar)</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-700">
                  Message
                </label>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  className="mt-2 w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-blue-600 transition hover:scale-[1.03]"
                >
                  Send Inquiry
                </button>

                <button
                  type="button"
                  onClick={handleSubmit}
                  className="bg-green-500 text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-green-600 transition hover:scale-[1.03]"
                >
                  WhatsApp Inquiry
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
