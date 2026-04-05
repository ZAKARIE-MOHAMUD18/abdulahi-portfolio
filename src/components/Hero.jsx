import { FaEnvelope, FaPhone } from 'react-icons/fa'

import PROFILE_IMG from '../assets/abdulahi.png'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
        <div className="flex-1 text-white text-center md:text-left">
          <p className="text-blue-200 font-medium tracking-widest uppercase text-sm mb-3">Chief Accountant</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Abdulahi<br />Ahmed Hassan
          </h1>
          <p className="text-blue-100 text-lg mb-2">AMAL EXPRESS</p>
          <p className="text-blue-200 text-sm mb-8">1st Avenue, Eastleigh, Amal Plaza, 2nd Floor</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="mailto:abdilahiaaryare@amalexpress.com.ke"
              className="flex items-center gap-2 bg-white text-blue-800 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors shadow"
            >
              <FaEnvelope /> Email Me
            </a>
            <a
              href="http://amalexpress.co.ke/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-blue-800 transition-colors"
            >
              Visit Company
            </a>
          </div>
        </div>
        <div className="flex-shrink-0 flex justify-center">
          <img
            src={PROFILE_IMG}
            alt="Abdulahi Ahmed Hassan"
            className="w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 lg:w-72 lg:h-96 rounded-2xl object-cover object-top border-4 border-white shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}
