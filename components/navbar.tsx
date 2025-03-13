"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-[#1a1a1a]/95 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e3b9d49f-fc99-446f-bf94-5554b7d05ec2-FWvcV3FdQn3LwZKitH0S0Zqi3l5js4.png"
            alt="Moody Socks Logo"
            width={180}
            height={60}
            className="h-12 w-auto"
            priority
          />
        </Link>

        <button className="block rounded p-2 text-white md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <nav className="hidden md:block">
          <ul className="flex items-center space-x-1">
            {[
              { name: "Home", href: "/" },
              { name: "The Factory", href: "#factory" },
              { name: "Why Us", href: "#why-us" },
              { name: "Private Label", href: "#private-label" },
              { name: "Wholesale", href: "#wholesale" },
              { name: "Responsibility", href: "#responsibility" },
              { name: "Contact", href: "#contact" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`block px-4 py-2 text-sm font-medium transition-colors ${
                    item.name === "The Factory" ? "text-[#F5C95C]" : "text-white hover:text-[#F5C95C]"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute left-0 top-20 w-full bg-[#003049] shadow-lg md:hidden"
            >
              <nav className="container px-4 py-6">
                <ul className="space-y-4">
                  {[
                    { name: "Home", href: "/" },
                    { name: "The Factory", href: "#factory" },
                    { name: "Why Us", href: "#why-us" },
                    { name: "Private Label", href: "#private-label" },
                    { name: "Wholesale", href: "#wholesale" },
                    { name: "Responsibility", href: "#responsibility" },
                    { name: "Contact", href: "#contact" },
                  ].map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={`block px-4 py-2 text-sm font-medium ${
                          item.name === "The Factory" ? "text-[#F5C95C]" : "text-white hover:text-[#F5C95C]"
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

