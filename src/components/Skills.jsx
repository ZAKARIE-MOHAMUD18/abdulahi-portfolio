import { useState } from 'react'
import { FaChartLine, FaCalculator, FaSearch, FaUsers, FaFileAlt, FaShieldAlt } from 'react-icons/fa'

const skills = [
  { name: 'Financial Reporting', icon: <FaFileAlt size={32} />, desc: 'Preparing accurate financial statements and reports in compliance with international standards.' },
  { name: 'Budgeting & Forecasting', icon: <FaChartLine size={32} />, desc: 'Developing annual budgets and financial forecasts to guide strategic decision-making.' },
  { name: 'Tax Compliance', icon: <FaCalculator size={32} />, desc: 'Ensuring full compliance with local and international tax regulations and filings.' },
  { name: 'Audit Management', icon: <FaSearch size={32} />, desc: 'Coordinating internal and external audits to maintain financial integrity.' },
  { name: 'Team Leadership', icon: <FaUsers size={32} />, desc: 'Leading and mentoring finance teams to achieve organizational goals efficiently.' },
  { name: 'Risk & Compliance', icon: <FaShieldAlt size={32} />, desc: 'Identifying financial risks and implementing controls to safeguard company assets.' },
]

function FlipCard({ name, icon, desc }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      className="h-48 cursor-pointer"
      style={{ perspective: '1000px' }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped(f => !f)}
    >
      <div
        style={{
          transition: 'transform 0.6s',
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          position: 'relative',
          width: '100%',
          height: '100%',
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 bg-white rounded-2xl shadow-md border border-gray-100 flex flex-col items-center justify-center gap-4 text-blue-700"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {icon}
          <span className="font-semibold text-gray-800 text-center px-4">{name}</span>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 bg-blue-700 rounded-2xl shadow-md flex items-center justify-center p-5"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <p className="text-white text-sm text-center leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Skills & Expertise</h2>
        <div className="w-16 h-1 bg-blue-600 mb-4 rounded"></div>
        <p className="text-gray-400 text-sm mb-10">Hover or tap a card to learn more</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map(s => <FlipCard key={s.name} {...s} />)}
        </div>
      </div>
    </section>
  )
}
