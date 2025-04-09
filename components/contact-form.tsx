"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { sendContactEmail } from "@/app/actions"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<{
    success?: boolean
    message?: string
  }>({})
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)

    try {
      const result = await sendContactEmail(formData)
      setFormStatus(result)

      if (result.success && formRef.current) {
        formRef.current.reset()
      }
    } catch (error) {
      setFormStatus({
        success: false,
        message: "An unexpected error occurred. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>

      {formStatus.message && (
        <div
          className={`p-4 mb-4 rounded-md ${formStatus.success ? "bg-green-900/50 text-green-300" : "bg-red-900/50 text-red-300"}`}
        >
          {formStatus.message}
        </div>
      )}

      <form ref={formRef} action={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 min-h-[150px]"
          ></textarea>
        </div>
        <Button
          type="submit"
          className="bg-purple-500 hover:bg-purple-600 px-6 py-2 rounded-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  )
}
