"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const timelineData = [
  {
    year: 1982,
    title: "Moody Socks Factory was established",
    description: "Our journey began with a small team and big dreams.",
  },
  {
    year: 1990,
    title: "Expanded production capacity",
    description: "Invested in new machinery and expanded our team.",
  },
  {
    year: 2000,
    title: "International market entry",
    description: "Started exporting to international markets.",
  },
  {
    year: 2009,
    title: "Modernization initiative",
    description: "Upgraded to state-of-the-art knitting machines.",
  },
  {
    year: 2017,
    title: "Sustainability program launch",
    description: "Implemented eco-friendly practices across operations.",
  },
  {
    year: 2020,
    title: "Digital transformation",
    description: "Embraced digital solutions for enhanced efficiency.",
  },
  {
    year: 2024,
    title: "Innovation center opening",
    description: "Launched dedicated R&D facility for sock innovation.",
  },
]

export default function Timeline() {
  const [activeYear, setActiveYear] = useState(1982)

  const activeData = timelineData.find((item) => item.year === activeYear) || timelineData[0]

  return (
    <div className="py-8">
      <div className="relative mb-12 flex justify-between">
        {timelineData.map((item, index) => (
          <div
            key={item.year}
            className="relative flex flex-col items-center"
            style={{ width: `${100 / timelineData.length}%` }}
          >
            <button
              onClick={() => setActiveYear(item.year)}
              className={`z-10 flex h-20 w-20 flex-col items-center justify-center rounded-full text-center transition-all duration-300 ${
                activeYear === item.year ? "bg-[#F5C95C] text-[#003049]" : "bg-gray-200 text-gray-500 hover:bg-gray-300"
              }`}
            >
              <span className="text-lg font-bold">{item.year}</span>
            </button>
            {index < timelineData.length - 1 && (
              <div className="absolute left-1/2 top-10 h-0.5 w-full -translate-x-0 bg-gray-300" />
            )}
          </div>
        ))}
      </div>

      <motion.div
        key={activeYear}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-2xl rounded-xl bg-white p-6 text-center shadow-sm"
      >
        <h3 className="mb-2 text-xl font-bold">{activeData.title}</h3>
        <p className="text-gray-600">{activeData.description}</p>
      </motion.div>
    </div>
  )
}

