'use client'

import { Mail, MapPin, Phone, Facebook, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-blue-950 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-3">Jai Shree Shyam</h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              Premium custom-branded water bottles for every occasion. Join us, We Provide Your Brand In Every Hand
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/_abhinandan_sharma85_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://www.instagram.com/_abhinandan_sharma85_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-all duration-300 transform hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

         
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-blue-100 hover:text-white transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#products" className="text-blue-100 hover:text-white transition-colors text-sm">
                  Products
                </a>
              </li>
              <li>
                <a href="#about" className="text-blue-100 hover:text-white transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-blue-100 hover:text-white transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-3">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors text-sm">
                  Custom Design
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors text-sm">
                  Bulk Orders
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors text-sm">
                  Event Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors text-sm">
                  Corporate Gifts
                </a>
              </li>
            </ul>
          </div>

        
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-3">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href="tel:+916287905646"
                className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors text-sm group"
              >
                <Phone size={16} className="group-hover:scale-110 transition-transform" />
                <span>+91 6287 905 646</span>
              </a>
              <a
                href="mailto:info@jaisfreeshyam.com"
                className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors text-sm group"
              >
                <Mail size={16} className="group-hover:scale-110 transition-transform" />
                <span>Jaishreeshyamenterprisesssss@gmail.com</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors text-sm group"
              >
                <MapPin size={16} className="group-hover:scale-110 transition-transform" />
                <span>Rastriya Ganj, Phulwari Sharif, Station Road, Patna (801505)</span>
              </a>
            </div>
          </div>
        </div>

     
        <div className="border-t border-white/20 my-8" />

      
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-blue-100 text-sm text-center md:text-left">
            © {currentYear} Jai Shree Shyam Enterprises. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-blue-100 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-blue-100 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-blue-100 hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
