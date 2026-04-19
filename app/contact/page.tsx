import type { Metadata } from 'next'
import SectionLabel from '@/components/SectionLabel'
import FadeUp from '@/components/FadeUp'
import InquiryForm from '@/components/InquiryForm'

export const metadata: Metadata = {
  title: 'Private Consultation | Window Treatment Consultation Santa Cruz',
  description:
    'Request a private consultation with Drapery Enterprises. Custom window treatments and bedding couture for Santa Cruz, Monterey Bay, and the Bay Area. No obligation, no rush.',
}

const details = [
  {
    label: 'Studio Location',
    value: 'Santa Cruz, California',
  },
  {
    label: 'Service Area',
    value: 'Santa Cruz · Monterey Bay · Silicon Valley · Bay Area',
  },
  {
    label: 'Email',
    value: 'wstrong@draperyenterprises.com',
    href: 'mailto:wstrong@draperyenterprises.com',
  },
  {
    label: 'Phone',
    value: '(831) 458-2578',
    href: 'tel:+18314582578',
  },
  {
    label: 'Consultations',
    value: 'By appointment only — in your home or at our studio.',
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section
        className="pt-36 md:pt-44 pb-16 md:pb-20 px-6 md:px-10 bg-linen"
        style={{ borderBottom: '1px solid var(--rule)' }}
        aria-labelledby="contact-heading"
      >
        <FadeUp className="max-w-8xl mx-auto">
          <SectionLabel>Private Consultation</SectionLabel>
          <h1
            id="contact-heading"
            className="font-cormorant font-light text-charcoal text-5xl md:text-6xl lg:text-7xl leading-tight max-w-2xl"
          >
            Tell us about
            <br />
            <em className="italic">your space.</em>
          </h1>
          <p className="font-jost font-light text-muted text-sm md:text-base leading-relaxed mt-8 max-w-md">
            Every project begins with a conversation. Share what you&rsquo;re envisioning —
            we&rsquo;ll take care of the rest. No obligation. No rush.
          </p>
        </FadeUp>
      </section>

      {/* Form + Details */}
      <section
        className="py-20 md:py-28 px-6 md:px-10 bg-linen"
        aria-label="Consultation inquiry form"
      >
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 lg:gap-24">
          {/* Form */}
          <FadeUp>
            <InquiryForm />
          </FadeUp>

          {/* Side details */}
          <FadeUp delay={0.2} className="lg:pt-2">
            <div
              className="sticky top-32 flex flex-col gap-0"
            >
              <p className="font-jost font-medium text-[0.625rem] tracking-[0.2em] uppercase text-brass mb-8">
                Studio Details
              </p>

              {details.map(({ label, value, href }, i) => (
                <div
                  key={i}
                  className="py-5"
                  style={{ borderTop: '1px solid var(--rule)' }}
                >
                  <p className="font-jost font-medium text-[0.5625rem] tracking-[0.18em] uppercase text-muted mb-1.5">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="font-jost font-light text-sm text-charcoal hover:text-brass transition-colors duration-200"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="font-jost font-light text-sm text-charcoal leading-relaxed">
                      {value}
                    </p>
                  )}
                </div>
              ))}

              <div
                className="py-8 mt-4"
                style={{ borderTop: '1px solid var(--rule)' }}
              >
                <p className="font-jost font-medium text-[0.5625rem] tracking-[0.18em] uppercase text-muted mb-3">
                  Response Time
                </p>
                <p className="font-jost font-light text-sm text-charcoal leading-relaxed">
                  We respond to all inquiries within 24 hours, typically sooner.
                  Consultations are scheduled Monday through Saturday.
                </p>
              </div>

              <div
                className="py-8"
                style={{ borderTop: '1px solid var(--rule)' }}
              >
                <p className="font-jost font-medium text-[0.5625rem] tracking-[0.18em] uppercase text-muted mb-3">
                  Trade & Designer Inquiries
                </p>
                <p className="font-jost font-light text-sm text-muted leading-relaxed mb-3">
                  Design professionals can apply for a trade account with expedited processing
                  and dedicated account management.
                </p>
                <a
                  href="/trade"
                  className="font-jost font-medium text-[0.625rem] tracking-[0.18em] uppercase text-brass hover:text-charcoal transition-colors duration-200 flex items-center gap-3"
                >
                  Trade Program
                  <span className="block w-5 h-px bg-current" aria-hidden="true" />
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Reassurance strip */}
      <section
        className="py-16 md:py-20 px-6 md:px-10 bg-stone"
        aria-label="Consultation promise"
      >
        <FadeUp>
          <div className="max-w-8xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-16">
            {[
              {
                heading: 'No obligation.',
                body: 'An inquiry is just a conversation. There is nothing to decide, purchase, or commit to.',
              },
              {
                heading: 'No rush.',
                body: 'Custom work takes time. Our process is designed to feel considered, not urgent.',
              },
              {
                heading: 'In your home.',
                body: 'We come to you. Every consultation happens in your space, in your light.',
              },
            ].map(({ heading, body }, i) => (
              <div key={i} className="flex-1">
                <span className="block w-6 h-px bg-brass mb-5" aria-hidden="true" />
                <h3 className="font-cormorant font-light text-charcoal text-2xl mb-2">{heading}</h3>
                <p className="font-jost font-light text-muted text-sm leading-relaxed max-w-xs">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </FadeUp>
      </section>
    </>
  )
}
