import { FaEnvelope, FaPhone, FaGlobe, FaMapMarkerAlt } from 'react-icons/fa'

const contacts = [
  {
    icon: <FaPhone className="text-blue-600 text-xl" />,
    label: 'Phone',
    items: [
      { text: '+245 725 831 666', href: 'tel:+245725831666' },
      { text: '+254 722 289 454', href: 'tel:+254722289454' },
    ],
  },
  {
    icon: <FaEnvelope className="text-blue-600 text-xl" />,
    label: 'Email',
    items: [{ text: 'abdilahiaaryare@amalexpress.com.ke', href: 'mailto:abdilahiaaryare@amalexpress.com.ke' }],
  },
  {
    icon: <FaGlobe className="text-blue-600 text-xl" />,
    label: 'Website',
    items: [{ text: 'www.amalexpress.com.ke', href: 'http://amalexpress.co.ke/', external: true }],
  },
  {
    icon: <FaMapMarkerAlt className="text-blue-600 text-xl" />,
    label: 'Address',
    items: [{ text: '1st Avenue, Eastleigh, Amal Plaza, 2nd Floor' }],
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Contact</h2>
        <div className="w-16 h-1 bg-blue-600 mb-10 rounded"></div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contacts.map(({ icon, label, items }) => (
            <div key={label} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                {icon}
                <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">{label}</span>
              </div>
              <div className="flex flex-col gap-1">
                {items.map(({ text, href, external }) =>
                  href ? (
                    <a
                      key={text}
                      href={href}
                      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium break-all"
                    >
                      {text}
                    </a>
                  ) : (
                    <span key={text} className="text-gray-700 text-sm font-medium">{text}</span>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
