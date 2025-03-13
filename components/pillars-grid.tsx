"use client"

import { motion } from "framer-motion"
import { Shield, Award, Leaf, Search, Users, MessageSquare } from "lucide-react"

const pillarsData = [
  {
    title: "Ethical Foundations for Lasting Impact",
    description:
      "We uphold human rights, promote gender equality, and ensure a safe, ethical work environment across our entire supply chain.",
    icon: Shield,
  },
  {
    title: "Quality That Speaks for Itself",
    description:
      "Our commitment to excellence ensures every sock meets the highest standards of comfort, durability, and design.",
    icon: Award,
  },
  {
    title: "Building a Greener Tomorrow, Today",
    description: "Sustainable practices and eco-friendly materials are at the heart of our manufacturing process.",
    icon: Leaf,
  },
  {
    title: "Redefining What's Possible in Socks",
    description: "Continuous innovation drives us to push boundaries and create socks that exceed expectations.",
    icon: Search,
  },
  {
    title: "Transparency & Care in Every Interaction",
    description: "Open communication and honest business practices build trust with our partners and customers.",
    icon: MessageSquare,
  },
  {
    title: "Caring for the Team Behind the Craft",
    description:
      "Our dedicated team members are valued, respected, and provided with opportunities for growth and development.",
    icon: Users,
  },
]

export default function PillarsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {pillarsData.map((pillar, index) => (
        <motion.div
          key={index}
          className="group relative overflow-hidden rounded-xl bg-[#003049] p-6 text-white transition-transform hover:-translate-y-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
        >
          <div className="mb-4">
            <pillar.icon className="h-8 w-8 text-[#F5C95C]" />
          </div>
          <h3 className="mb-3 text-xl font-bold">{pillar.title}</h3>
          <p className="text-gray-300">{pillar.description}</p>
        </motion.div>
      ))}
    </div>
  )
}

