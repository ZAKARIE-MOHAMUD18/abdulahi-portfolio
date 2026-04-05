import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const links = ['About', 'Skills', 'Organization', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#hero" className="text-blue-700 font-bold text-xl tracking-tight">
          Abdulahi<span className="text-gray-500"> Ahmed</span>
        </a>
        <ul className="hidden md:flex gap-8 text-gray-600 font-medium">
          {links.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="hover:text-blue-700 transition-colors">
                {l}
              </a>
            </li>
          ))}
        </ul>
        <button className="md:hidden text-gray-600" onClick={() => setOpen(!open)}>
          {open ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>
      {open && (
        <ul className="md:hidden bg-white px-6 pb-4 flex flex-col gap-4 text-gray-600 font-medium border-t border-gray-100">
          {links.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="hover:text-blue-700 transition-colors">
                {l}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
