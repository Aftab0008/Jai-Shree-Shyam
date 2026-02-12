'use client'

import { useState } from 'react'

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const phoneNumbers = [
    { name: 'Priyanshu Gupta', number: '+916287905646' },
    { name: 'Abhinandan Sharma', number: '+918579813785' },
  ]

  const handleWhatsAppClick = (number) => {
    const message = encodeURIComponent(
      'Hello! I am interested in learning more about your custom-branded water bottles. Please provide details about your products and pricing.'
    )
    window.open(`https://wa.me/${number.replace(/\D/g, '')}?text=${message}`, '_blank')
    setIsOpen(false)
  }

  return (
    <>
   
      {isOpen && (
        <div
          className="fixed bottom-24 right-6 bg-white rounded-2xl shadow-2xl p-4 z-40 animate-in fade-in slide-in-from-bottom-2 duration-300"
          onMouseLeave={() => setIsOpen(false)}
        >
          <p className="text-sm font-semibold text-foreground mb-3 px-2">Chat with us:</p>
          <div className="space-y-2">
            {phoneNumbers.map((contact, index) => (
              <button
                key={index}
                onClick={() => handleWhatsAppClick(contact.number)}
                className="w-full text-left px-4 py-2 rounded-lg hover:bg-green-50 transition-colors duration-200 group"
              >
                <p className="font-semibold text-sm text-foreground group-hover:text-primary">
                  {contact.name}
                </p>
                <p className="text-xs text-gray-500">{contact.number}</p>
              </button>
            ))}
          </div>
        </div>
      )}

     
      <div
        className="fixed bottom-6 right-6 z-50"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        
        <div
          className={`absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 rounded-full blur-lg opacity-75 transition-all duration-500 ${
            isHovered || isOpen ? 'scale-125' : 'scale-100'
          }`}
        ></div>

       
        <div className="absolute inset-0 rounded-full border-4 border-green-400 opacity-50 animate-pulse"
          style={{
            animation: 'ring-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          }}
        ></div>

        <div
          className="absolute inset-0 rounded-full border-2 border-green-300 opacity-30"
          style={{
            animation: 'ring-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            animationDelay: '0.5s',
          }}
        ></div>

     
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow-2xl flex items-center justify-center text-white font-bold text-2xl hover:shadow-3xl transition-all duration-300 transform ${
            isHovered ? 'scale-110' : 'scale-100'
          } ${isOpen ? 'bg-green-700' : ''}`}
          title="Chat with us on WhatsApp"
        >
          <svg
            className="w-8 h-8"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371 0-.57 0-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-1.531.92-2.57 2.282-2.913 3.82-.343 1.537.371 3.141 1.703 4.472 1.332 1.33 3.128 2.045 4.772 1.702 1.644-.342 3.195-1.42 4.282-2.817.876-1.135 1.406-2.505 1.406-3.859 0-3.233-2.641-5.796-5.891-5.796z" />
          </svg>
        </button>

       
        {!isOpen && (
          <div
            className={`absolute right-20 top-1/2 transform -translate-y-1/2 bg-primary text-white px-4 py-2 rounded-lg shadow-lg whitespace-nowrap text-sm font-semibold transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
            }`}
          >
            💬 Chat with us!
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-2 h-2 bg-primary" 
              style={{
                clipPath: 'polygon(0 0, 100% 50%, 0 100%)',
              }}
            ></div>
          </div>
        )}
      </div>

     
      {isOpen && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <style jsx>{`
        @keyframes ring-pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        @keyframes slide-in-from-bottom-2 {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-in {
          animation: slide-in-from-bottom-2 0.3s ease-out;
        }

        .fade-in {
          animation: fade-in 0.3s ease-out;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </>
  )
}
