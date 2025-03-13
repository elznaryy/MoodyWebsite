"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, Play, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import QuotationForm from "@/components/quotation-form"
import FadeIn from "@/components/fade-in"
import Timeline from "@/components/timeline"
import PillarsGrid from "@/components/pillars-grid"
import FactoryStats from "@/components/factory-stats"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#003049]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic4.jpg-7qter8TJpBYf7joRHqWF65AxxJZZAE.jpeg"
            alt="Moody Socks Collection"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
              Crafting Quality
              <br />
              Since <span className="text-[#F5C95C]">1982</span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300 md:text-xl">
              Premium sock manufacturing for leading brands worldwide. Quality, innovation, and reliability in every
              thread.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="group min-w-[200px] bg-[#F5C95C] text-[#003049] hover:bg-[#f0bd41]" asChild>
                <Link href="#quotation">
                  Request Quotation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                className="min-w-[200px] bg-white text-[#003049] hover:bg-white hover:text-[#003049]"
                asChild
              >
                <Link href="#about">Discover Our Factory</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32">
        <div className="container px-4">
          <div className="grid gap-16 md:grid-cols-2">
            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic7.jpg-Au9ti4TQi5uUn78RdSSmmkjkLqMOKO.jpeg"
                alt="Moody Socks Showroom"
                width={600}
                height={400}
                className="rounded-2xl"
              />
              <div className="absolute -bottom-8 -right-8 hidden md:block">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic8.jpg-zPhhkM5RUT22msqTn4oYJCmmgSsEk6.jpeg"
                  alt="Sock Display"
                  width={300}
                  height={200}
                  className="rounded-2xl border-8 border-white shadow-xl"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="mb-6 text-4xl font-bold text-[#003049] md:text-5xl">Our Story</h2>
              <p className="mb-6 text-lg text-gray-600">
                At just 17 years old, our founder, Mounir Soliman, began his journey working in a socks factory, gaining
                hands-on experience and building his expertise in the industry. A decade later, in 1982, his dream and
                vision for something bigger took root.
              </p>
              <p className="mb-8 text-lg text-gray-600">
                From a tiny space with just three team members, we've grown into a full-fledged factory in Egypt
                offering private-label manufacturing and wholesale services. 53+ years later, we're still guided by the
                same principles: resolve issues with integrity, prioritize long-term relationships, and never compromise
                on trust.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="mb-2 text-3xl font-bold text-[#003049]">40+</h3>
                  <p className="text-gray-600">Years of Excellence</p>
                </div>
                <div>
                  <h3 className="mb-2 text-3xl font-bold text-[#003049]">1M+</h3>
                  <p className="text-gray-600">Pairs Produced</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="py-24 md:py-32 bg-gradient-to-r from-[#002538] to-[#003049]">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">Uncompromising Quality</h2>
            <p className="mb-12 text-lg text-gray-300">
              Every pair of socks we produce undergoes rigorous quality control, ensuring that only the finest products
              reach our clients.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Premium Materials",
                description: "Carefully selected yarns and materials for optimal comfort and durability",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic1.jpg-Tx4UqMaGyV35t4xb1M0vOkDOOyitGf.jpeg",
              },
              {
                title: "Expert Craftsmanship",
                description: "Skilled artisans with decades of experience in sock manufacturing",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic2.jpg-RiZpjjhsN2YK07Y5erbSK5oviFuRAv.jpeg",
              },
              {
                title: "Quality Control",
                description: "Multiple inspection points to ensure consistent quality",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic6.jpg-7gyWEFU2s1tPMlyhydoJQ3mAL6Th3U.jpeg",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group overflow-hidden rounded-2xl bg-white shadow-lg"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-4 text-xl font-bold text-[#003049]">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="relative overflow-hidden bg-[#003049] py-24 md:py-32">
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic1.jpg-Tx4UqMaGyV35t4xb1M0vOkDOOyitGf.jpeg"
            alt="Thread Spools"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container relative z-10 px-4">
          <FactoryStats />
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-gray-50 py-16">
        <div className="container px-4">
          <FadeIn>
            <Timeline />
          </FadeIn>
        </div>
      </section>

      {/* Factory Video Section */}
      <section className="relative py-16">
        <div className="container px-4 text-center">
          <FadeIn>
            <div className="mx-auto max-w-3xl">
              <Link href="#" className="group relative mx-auto block h-[400px] w-full overflow-hidden rounded-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/22-7hMVTpl6hgIbnNf1jkFkMFIsZkrYex.png"
                  alt="Factory video thumbnail"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/80 text-[#003049] transition-transform duration-300 group-hover:scale-110">
                    <Play className="h-6 w-6" />
                  </div>
                </div>
              </Link>
              <div className="mt-6">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-full bg-[#F5C95C] px-8 py-3 text-lg font-medium text-[#003049] transition-colors hover:bg-[#f0bd41]"
                >
                  GET AN INSIDE LOOK AT THE FACTORY
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16">
        <div className="container px-4 text-center">
          <FadeIn>
            <h2 className="mb-12 text-3xl font-bold text-[#003049] md:text-4xl">Our Certifications</h2>
            <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4">
              <motion.div
                className="flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iso-mSoH5mkSrApyoFycvZBVPkq6Ky2W5m.png"
                  alt="ISO Certification"
                  width={120}
                  height={80}
                  className="h-auto max-w-full"
                />
              </motion.div>
              <motion.div
                className="flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sedex-logo-zlo2ZqLXvrq0T52iWAVo4NT7yNjPZy.png"
                  alt="Sedex Certification"
                  width={160}
                  height={80}
                  className="h-auto max-w-full"
                />
              </motion.div>
              <motion.div
                className="flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/catpat-YrSnpdcx7eRmZg4rGY5DDbddftsf4V.png"
                  alt="CTPAT Certification"
                  width={200}
                  height={80}
                  className="h-auto max-w-full"
                />
              </motion.div>
            </div>
            <p className="mx-auto mt-8 max-w-3xl text-center text-gray-600">
              *Most certification audits are conducted unannounced, guaranteeing transparency and reinforcing our
              commitment to maintaining the highest standards of credibility and accountability
            </p>
            <div className="mt-12">
              <Link
                href="#quotation"
                className="inline-flex items-center justify-center rounded-full bg-[#F5C95C] px-8 py-3 text-lg font-medium text-[#003049] transition-colors hover:bg-[#f0bd41]"
              >
                REQUEST A QUOTE
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-16">
        <div className="container px-4">
          <FadeIn>
            <h2 className="mb-12 text-center text-3xl font-bold text-[#003049] md:text-4xl">The Pillars of Our Work</h2>
            <PillarsGrid />
            <div className="mt-12 text-center">
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-full bg-[#F5C95C] px-8 py-3 text-lg font-medium text-[#003049] transition-colors hover:bg-[#f0bd41]"
              >
                SEE OUR FULL CODE OF CONDUCT
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4">
          <FadeIn>
            <h2 className="mb-12 text-center text-3xl font-bold text-[#003049] md:text-4xl">What Our Customers Say</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  name: "LC Waikiki",
                  role: "Fashion Retailer",
                  image: "/placeholder.svg?height=100&width=100&text=LC",
                  quote:
                    "Moody Socks has been our trusted partner for over 5 years. Their quality and reliability have been instrumental to our success.",
                },
                {
                  name: "DeFacto",
                  role: "Clothing Brand",
                  image: "/placeholder.svg?height=100&width=100&text=DF",
                  quote:
                    "The attention to detail and commitment to quality make Moody Socks stand out. They consistently deliver exceptional products.",
                },
                {
                  name: "Town Team",
                  role: "Fashion House",
                  image: "/placeholder.svg?height=100&width=100&text=TT",
                  quote:
                    "Working with Moody Socks has transformed our product line. Their innovative designs and quality materials exceed expectations.",
                },
              ].map((testimonial, i) => (
                <motion.div
                  key={i}
                  className="rounded-3xl bg-white p-8 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-4 flex items-center">
                    <p className="mr-2 font-bold text-[#003049]">4.9 Rated</p>
                    <div className="flex text-[#F5C95C]">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="mb-6 italic text-gray-600">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-[#003049]">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#003049]">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-full bg-[#F5C95C] px-8 py-3 text-lg font-medium text-[#003049] transition-colors hover:bg-[#f0bd41]"
              >
                WHY THEY CHOSE US
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Exhibitions Section */}
      <section className="py-16">
        <div className="container px-4">
          <FadeIn>
            <h2 className="mb-12 text-center text-3xl font-bold text-[#003049] md:text-4xl">
              Recent Exhibitions & Events
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2024-yCwd5X6nPQYIQ0T7FRKMZbvcgEkSod.png",
                  name: "Cairo Fashion & Tex 2024",
                  description: "Showcasing our latest women's collection",
                },
                {
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023-1JIKsSh9SQREaMjXoAirbQo4Jqk0YN.png",
                  name: "Destination Africa 2023",
                  description: "Meeting with industry leaders",
                },
                {
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2022-SdH9D7J5MFwyqIY0VNpJZEeF4XGYbc.png",
                  name: "Textile Export Exhibition 2023",
                  description: "Product showcase and networking",
                },
              ].map((event, i) => (
                <motion.div
                  key={i}
                  className="group relative overflow-hidden rounded-xl"
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <div className="relative h-[300px]">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl font-bold text-[#003049]">{event.name}</h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#003049]">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-r from-[#003049] to-[#004d76] p-12 text-center shadow-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">
                GET YOUR SOCKS,
                <br />
                YOUR WAY
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
                Custom manufacturing tailored to your brand's specific needs and standards. Let's create something
                exceptional together.
              </p>
              <Link
                href="#quotation"
                className="inline-flex items-center justify-center rounded-full bg-[#F5C95C] px-8 py-4 text-lg font-medium text-[#003049] transition-all hover:bg-[#f0bd41] hover:shadow-lg"
              >
                REQUEST YOUR CUSTOM QUOTE
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quotation Section */}
      <section id="quotation" className="py-16 md:py-24">
        <div className="container px-4">
          <div className="mx-auto max-w-5xl rounded-3xl bg-white p-8 shadow-xl md:p-12">
            <div className="grid gap-8 md:grid-cols-2">
              <FadeIn direction="left">
                <div className="flex flex-col justify-center">
                  <h2 className="mb-4 text-3xl font-bold text-[#003049] md:text-4xl">Get in Touch</h2>
                  <p className="mb-6 text-gray-600">Stay in the loop with everything you need to know</p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 shrink-0 text-[#003049]" />
                      <span className="text-gray-600">Detailed pricing based on your specifications</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 shrink-0 text-[#003049]" />
                      <span className="text-gray-600">Production timeline estimates</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 shrink-0 text-[#003049]" />
                      <span className="text-gray-600">Material and design consultations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 shrink-0 text-[#003049]" />
                      <span className="text-gray-600">Sample development options</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>
              <FadeIn direction="right" delay={0.2}>
                <div className="rounded-xl">
                  <QuotationForm />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#003049] py-12 text-white">
        <div className="container px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e3b9d49f-fc99-446f-bf94-5554b7d05ec2-FWvcV3FdQn3LwZKitH0S0Zqi3l5js4.png"
                alt="Moody Socks Logo"
                width={180}
                height={60}
                className="mb-6 h-12 w-auto"
              />
              <address className="not-italic text-gray-300">
                <p>Plot 36, Area 75 Acress</p>
                <p>Abu Rawash, Al Giza, Egypt</p>
                <p className="mt-2">info@moodysocks.com</p>
                <p>+2 0121 2222 339</p>
              </address>
            </div>
            <div>
              <h4 className="mb-4 text-xl font-bold">Contact Us</h4>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-white placeholder:text-gray-500 focus:border-white focus:outline-none"
                  required
                />
                <Button type="submit" className="bg-[#F5C95C] text-[#003049] hover:bg-[#f0bd41]">
                  Submit
                </Button>
              </form>
            </div>
            <div>
              <h4 className="mb-4 text-xl font-bold">Quick Links</h4>
              <ul className="space-y-2">
                {["The Factory", "Private Label Socks", "Wholesale Socks", "Careers", "Privacy Policy", "FAQs"].map(
                  (item) => (
                    <li key={item}>
                      <Link
                        href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-gray-300 transition-colors hover:text-white"
                      >
                        {item}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Moody Socks | All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

