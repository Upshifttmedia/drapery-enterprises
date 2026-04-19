'use client'

import { useState } from 'react'
import Button from './Button'

const projectTypes = [
  'Window Treatments',
  'Bedding Couture',
  'Window & Bedding Together',
  'Trade / Designer Project',
  'Not Sure Yet',
]

interface FormState {
  name: string
  email: string
  phone: string
  projectType: string
  message: string
}

export default function InquiryForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  })

  const update = (field: keyof FormState, value: string) =>
    setForm(prev => ({ ...prev, [field]: value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Connect to form handler (Resend, Formspree, etc.)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-16 md:py-20">
        <span
          className="block font-cormorant text-brass text-6xl font-light mb-6 opacity-50 select-none"
          aria-hidden="true"
        >
          ✦
        </span>
        <h3 className="font-cormorant font-light text-charcoal text-3xl md:text-4xl mb-4">
          Thank you.
        </h3>
        <p className="font-jost font-light text-muted text-sm leading-relaxed max-w-sm mx-auto">
          We&apos;ve received your inquiry. We&apos;ll be in touch within 24 hours to schedule
          your private consultation.
        </p>
      </div>
    )
  }

  const inputBase =
    'w-full bg-transparent border-b pb-3 font-jost font-light text-charcoal text-base placeholder:text-muted/50 focus:outline-none transition-colors duration-300'
  const inputIdle = 'border-charcoal/20 focus:border-brass'
  const labelBase =
    'block font-jost font-medium text-[0.625rem] tracking-[0.2em] uppercase text-muted mb-3'

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto" noValidate>
      {/* Name */}
      <div className="mb-8">
        <label htmlFor="name" className={labelBase}>
          Your Name
        </label>
        <input
          id="name"
          type="text"
          required
          autoComplete="name"
          value={form.name}
          onChange={e => update('name', e.target.value)}
          className={`${inputBase} ${inputIdle}`}
          placeholder="Full name"
        />
      </div>

      {/* Email */}
      <div className="mb-8">
        <label htmlFor="email" className={labelBase}>
          Email Address
        </label>
        <input
          id="email"
          type="email"
          required
          autoComplete="email"
          value={form.email}
          onChange={e => update('email', e.target.value)}
          className={`${inputBase} ${inputIdle}`}
          placeholder="your@email.com"
        />
      </div>

      {/* Phone */}
      <div className="mb-8">
        <label htmlFor="phone" className={labelBase}>
          Phone{' '}
          <span className="normal-case tracking-normal font-light opacity-60">(optional)</span>
        </label>
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          value={form.phone}
          onChange={e => update('phone', e.target.value)}
          className={`${inputBase} ${inputIdle}`}
          placeholder="(831) 000-0000"
        />
      </div>

      {/* Project type */}
      <fieldset className="mb-10">
        <legend className={labelBase}>Type of Project</legend>
        <div className="flex flex-col gap-4 mt-1">
          {projectTypes.map(type => {
            const checked = form.projectType === type
            return (
              <label
                key={type}
                className="flex items-center gap-4 cursor-pointer group"
              >
                <input
                  type="radio"
                  name="projectType"
                  value={type}
                  checked={checked}
                  onChange={e => update('projectType', e.target.value)}
                  className="sr-only"
                />
                <span
                  className={`flex-shrink-0 w-4 h-4 border flex items-center justify-center transition-colors duration-200 ${
                    checked
                      ? 'border-brass bg-brass'
                      : 'border-charcoal/30 group-hover:border-brass'
                  }`}
                  aria-hidden="true"
                >
                  {checked && (
                    <span className="block w-1.5 h-1.5 bg-off-white" />
                  )}
                </span>
                <span
                  className={`font-jost font-light text-sm transition-colors duration-200 ${
                    checked ? 'text-charcoal' : 'text-muted group-hover:text-charcoal'
                  }`}
                >
                  {type}
                </span>
              </label>
            )
          })}
        </div>
      </fieldset>

      {/* Message */}
      <div className="mb-12">
        <label htmlFor="message" className={labelBase}>
          Tell Us About Your Space
        </label>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={e => update('message', e.target.value)}
          className={`${inputBase} ${inputIdle} resize-none`}
          placeholder="Share what you're envisioning — room details, style preferences, any questions."
        />
      </div>

      {/* Submit */}
      <div>
        <Button type="submit" variant="primary" className="w-full text-center">
          Request a Consultation
        </Button>
        <p className="font-jost font-light text-xs text-muted text-center mt-5 leading-relaxed">
          No obligation. No rush. We&apos;ll be in touch within 24 hours.
        </p>
      </div>
    </form>
  )
}
