import { FaGlobe, FaMapMarkerAlt } from 'react-icons/fa'

import ORG_IMG from '../assets/amal-express.png'

export default function Organization() {
  return (
    <section id="organization" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Organization</h2>
        <div className="w-16 h-1 bg-blue-600 mb-10 rounded"></div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex items-center justify-center bg-gray-50 rounded-2xl shadow-lg border border-gray-100 p-6 min-h-[180px] sm:min-h-[220px] md:min-h-[260px]">
            <img
              src={ORG_IMG}
              alt="AMAL EXPRESS"
              className="max-w-full max-h-40 sm:max-h-48 md:max-h-56 object-contain"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-blue-800 mb-3">AMAL EXPRESS</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              AMAL EXPRESS is a leading financial and logistics services company dedicated to providing
              reliable, efficient, and transparent services. With a strong presence in East Africa,
              the organization upholds the highest standards of financial integrity and customer service.
            </p>
            <div className="flex flex-col gap-3 mb-6">
              <div className="flex items-center gap-3 text-gray-600">
                <FaMapMarkerAlt className="text-blue-600 flex-shrink-0" />
                <span>1st Avenue, Eastleigh, Amal Plaza, 2nd Floor</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <FaGlobe className="text-blue-600 flex-shrink-0" />
                <a
                  href="http://amalexpress.co.ke/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  www.amalexpress.com.ke
                </a>
              </div>
            </div>
            <a
              href="http://amalexpress.co.ke/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors shadow"
            >
              Visit Website
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
