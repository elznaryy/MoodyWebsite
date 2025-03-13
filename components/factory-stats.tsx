"use client"
import Link from "next/link"
import { motion } from "framer-motion"

export default function FactoryStats() {
  const stats = [
    { value: "750,000+", label: "MONTHLY PRODUCTION CAPACITY" },
    { value: "110+", label: "KNITTING MACHINES" },
    { value: "8", label: "NEEDLE COUNT RANGES" },
  ]

  return (
    <div>
      <div className="mb-12 text-center">
        <Link
          href="#"
          className="inline-flex items-center justify-center rounded-full bg-[#F5C95C] px-8 py-3 text-lg font-medium text-[#003049] transition-colors hover:bg-[#f0bd41]"
        >
          GET AN INSIDE LOOK AT THE FACTORY
        </Link>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <motion.h3
              className="mb-2 text-5xl font-bold text-white"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
              viewport={{ once: true }}
            >
              {stat.value}
            </motion.h3>
            <p className="text-xl font-medium uppercase text-[#F5C95C]">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 mt-12 text-center">
        <Link
          href="#"
          className="inline-flex items-center justify-center text-lg font-medium text-white hover:text-[#F5C95C]"
        >
          TAKE A CLOSER LOOK AT OUR FACTORY &gt;
        </Link>
      </div>
    </div>
  )
}

