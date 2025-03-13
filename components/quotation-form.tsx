"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Loader2 } from "lucide-react"
import Image from "next/image"

export default function QuotationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-center">
        <div className="mb-4 rounded-full bg-green-100 p-3 text-green-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mb-2 text-xl font-bold text-[#003049]">Request Received!</h3>
        <p className="mb-4 text-gray-600">
          Thank you for your interest. Our team will review your request and get back to you within 24 hours.
        </p>
        <Button
          variant="outline"
          onClick={() => setIsSubmitted(false)}
          className="border-[#003049] text-[#003049] hover:bg-[#003049]/10"
        >
          Submit Another Request
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Input
            placeholder="Full Name"
            className="h-12 rounded-md border-gray-300 bg-white text-gray-900 placeholder:text-gray-500"
            required
          />
        </div>
        <div className="flex">
          <div className="flex h-12 items-center justify-center rounded-l-md bg-gray-200 px-3">
            <Image
              src="/placeholder.svg?height=24&width=36&text=EG"
              alt="Egypt flag"
              width={24}
              height={16}
              className="h-4 w-6"
            />
          </div>
          <Input
            placeholder="Mobile Phone"
            className="h-12 flex-1 rounded-l-none rounded-r-md border-gray-300 bg-white text-gray-900 placeholder:text-gray-500"
            required
          />
        </div>
      </div>

      <div>
        <Input
          placeholder="Email Address"
          type="email"
          className="h-12 rounded-md border-gray-300 bg-white text-gray-900 placeholder:text-gray-500"
          required
        />
      </div>

      <div>
        <Textarea
          placeholder="Message"
          rows={5}
          className="rounded-md border-gray-300 bg-white text-gray-900 placeholder:text-gray-500"
          required
        />
      </div>

      <div className="flex justify-end">
        <Button
          type="submit"
          className="h-12 rounded-full bg-[#003049] px-8 text-white hover:bg-[#00243a]"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : (
            "Submit"
          )}
        </Button>
      </div>
    </form>
  )
}

