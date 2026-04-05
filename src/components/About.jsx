import { FaMapMarkerAlt, FaBuilding, FaBriefcase } from 'react-icons/fa'

const info = [
  { icon: <FaBriefcase className="text-blue-600" />, label: 'Position', value: 'Chief Accountant' },
  { icon: <FaBuilding className="text-blue-600" />, label: 'Organization', value: 'AMAL EXPRESS' },
  { icon: <FaMapMarkerAlt className="text-blue-600" />, label: 'Location', value: '1st Avenue, Eastleigh, Amal Plaza, 2nd Floor' },
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">About Me</h2>
        <div className="w-16 h-1 bg-blue-600 mb-10 rounded"></div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              A seasoned financial professional with extensive experience in accounting, financial reporting,
              and organizational management. As Chief Accountant at AMAL EXPRESS, I oversee all financial
              operations ensuring accuracy, compliance, and strategic financial planning.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Committed to maintaining the highest standards of financial integrity while driving
              organizational growth through sound fiscal management and transparent reporting.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            {info.map(({ icon, label, value }) => (
              <div key={label} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 shadow-sm">
                <span className="text-xl mt-0.5">{icon}</span>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">{label}</p>
                  <p className="text-gray-700 font-semibold">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
