import type { Metadata } from 'next'
import Image from 'next/image'
import HeroSection from '@/components/HeroSection'
import SectionLabel from '@/components/SectionLabel'
import FadeUp from '@/components/FadeUp'
import Button from '@/components/Button'
import InquiryForm from '@/components/InquiryForm'

export const metadata: Metadata = {
  title: 'Trade & Designer Program | Drapery Workroom for Designers Central Coast',
  description:
    'Trade program for interior designers, architects, and luxury builders on the Central Coast. Net terms, trade pricing, reliable lead times, and a workroom you can trust.',
}

const benefits = [
  {
    title: 'Trade Pricing',
    description:
      'Registered trade professionals receive a minimum 20% discount on all fabrication. Discount structure scales with project volume.',
  },
  {
    title: 'Net 30 Terms',
    description:
      'Credit terms available for established trade accounts. We understand how design projects invoice, and we work within your process.',
  },
  {
    title: 'Dedicated Communication',
    description:
      'A single point of contact for every project. Clear lead times, proactive updates, and direct access — no chasing invoices or installation confirmations.',
  },
  {
    title: 'Sample Program',
    description:
      'Full fabric sample library available to trade accounts. Samples shipped same day for active projects. Returnable within 30 days.',
  },
  {
    title: 'Workroom Drawings',
    description:
      'We provide detailed, dimensioned workroom drawings for every project — compatible with AutoCAD and PDF. No surprises for your client.',
  },
  {
    title: 'White-Label Installation',
    description:
      'We install under your brand. Your client sees your name. The quality reflects well on both of us.',
  },
]

const testimonials = [
  {
    quote:
      'They are the only workroom I trust for my most demanding clients. The quality is exceptional and the communication is impeccable.',
    name: 'Sarah T., ASID',
    location: 'Carmel, CA',
  },
  {
    quote:
      'I specify Drapery Enterprises on every project where the window treatment is a design element, not a commodity.',
    name: 'M. Chen, Interior Designer',
    location: 'Atherton, CA',
  },
]

export default function TradePage() {
  return (
    <>
      <HeroSection
        imageSrc="/images/portfolio/portfolio-01.jpg"
        imageAlt="Floor-to-ceiling custom drapery in a refined interior — fabricated by Drapery Enterprises for a designer client"
        label="Trade Program"
        headline="A workroom your clients will be proud of."
        subheadline="We work with interior designers, architects, and luxury builders across the Central Coast. Reliable. Precise. Designed for professional partnerships."
        ctaText="Apply for a Trade Account"
        ctaHref="#trade-form"
        minHeight="min-h-[70vh]"
      />

      {/* Intro */}
      <section className="py-24 md:py-36 px-6 md:px-10 bg-linen" aria-labelledby="trade-intro">
        <FadeUp className="max-w-3xl mx-auto">
          <SectionLabel>For Design Professionals</SectionLabel>
          <h2
            id="trade-intro"
            className="font-cormorant font-light text-charcoal text-4xl md:text-5xl leading-tight mb-8"
          >
            The workroom behind the design.
          </h2>
          <p className="font-jost font-light text-muted text-base leading-relaxed mb-5">
            We partner with interior designers, architects, and builders who hold their vendors to
            the same standard they hold themselves. If a window treatment reflects on your design,
            it reflects on us — and we take that seriously.
          </p>
          <p className="font-jost font-light text-muted text-base leading-relaxed">
            Our trade program is designed to be as seamless as possible for working designers.
            Clear pricing, consistent quality, reliable timelines, and a workroom that communicates
            like a collaborator, not a vendor.
          </p>
        </FadeUp>
      </section>

      {/* Benefits */}
      <section
        className="py-24 md:py-32 px-6 md:px-10 bg-stone"
        aria-labelledby="trade-benefits-heading"
      >
        <div className="max-w-8xl mx-auto">
          <FadeUp className="mb-16">
            <SectionLabel>Program Benefits</SectionLabel>
            <h2
              id="trade-benefits-heading"
              className="font-cormorant font-light text-charcoal text-4xl md:text-5xl leading-tight max-w-md"
            >
              What a trade account includes.
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'var(--rule)' }}>
            {benefits.map(({ title, description }, i) => (
              <FadeUp key={i} delay={i * 0.07} className="bg-linen p-10 md:p-12">
                <h3 className="font-cormorant font-light text-charcoal text-2xl mb-4">{title}</h3>
                <span className="block w-6 h-px bg-brass mb-5" aria-hidden="true" />
                <p className="font-jost font-light text-muted text-sm leading-relaxed">
                  {description}
                </p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Who we work with */}
      <section
        className="py-24 md:py-32 px-6 md:px-10 bg-charcoal"
        aria-labelledby="trade-who-heading"
      >
        <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <FadeUp>
            <SectionLabel>Who We Work With</SectionLabel>
            <h2
              id="trade-who-heading"
              className="font-cormorant font-light text-off-white text-4xl md:text-5xl leading-tight mb-8"
            >
              Design professionals who trust their vendors.
            </h2>
            <p className="font-jost font-light text-muted text-base leading-relaxed mb-5 max-w-sm">
              Our trade partners range from solo interior designers to multi-principal firms,
              architect-led residential practices, and luxury spec builders who spec custom
              window treatments into their builds.
            </p>
            <p className="font-jost font-light text-muted text-base leading-relaxed max-w-sm">
              We are not the right fit for every trade account — we work best with partners
              who value quality over price and who want a workroom they can rely on for
              years, not a single project.
            </p>
          </FadeUp>
          <FadeUp delay={0.15} className="flex flex-col gap-0">
            {[
              'Interior designers & decorators',
              'Residential architects',
              'Luxury spec builders & developers',
              'Staging & design firms',
              'Property management companies',
              'Contract & hospitality design',
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 py-5"
                style={{ borderBottom: '1px solid rgba(250, 250, 248, 0.08)' }}
              >
                <span className="block w-4 h-px bg-brass flex-shrink-0" aria-hidden="true" />
                <span className="font-jost font-light text-sm text-muted">{item}</span>
              </div>
            ))}
          </FadeUp>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="py-24 md:py-32 px-6 md:px-10 bg-stone"
        aria-label="Trade client testimonials"
      >
        <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {testimonials.map(({ quote, name, location }, i) => (
            <FadeUp key={i} delay={i * 0.15}>
              <blockquote>
                <span
                  className="block font-cormorant text-brass text-5xl font-light leading-none mb-4 opacity-30 select-none"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <p className="font-cormorant italic font-light text-charcoal text-xl md:text-2xl leading-relaxed mb-6">
                  {quote}
                </p>
                <footer className="flex items-center gap-4">
                  <span className="block w-6 h-px bg-brass" aria-hidden="true" />
                  <div>
                    <cite className="not-italic font-jost font-medium text-[0.625rem] tracking-[0.2em] uppercase text-brass block">
                      {name}
                    </cite>
                    <span className="font-jost font-light text-xs text-muted">{location}</span>
                  </div>
                </footer>
              </blockquote>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Workroom image */}
      <section className="relative h-[45vh] md:h-[55vh] overflow-hidden bg-stone">
        <Image
          src="/images/windows/windows-03.jpg"
          alt="Custom sheer linen panels fabricated in the Drapery Enterprises workroom for a trade client project"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/20" />
      </section>

      {/* Trade form */}
      <section
        id="trade-form"
        className="py-24 md:py-36 px-6 md:px-10 bg-linen"
        aria-labelledby="trade-form-heading"
      >
        <div className="max-w-8xl mx-auto">
          <FadeUp className="mb-14 text-center">
            <SectionLabel>Apply for a Trade Account</SectionLabel>
            <h2
              id="trade-form-heading"
              className="font-cormorant font-light text-charcoal text-4xl md:text-5xl leading-tight mb-4"
            >
              Begin a trade partnership.
            </h2>
            <p className="font-jost font-light text-muted text-sm leading-relaxed max-w-sm mx-auto">
              Tell us about your practice and your upcoming projects. We respond to all trade
              inquiries within one business day.
            </p>
          </FadeUp>
          <InquiryForm />
        </div>
      </section>
    </>
  )
}
