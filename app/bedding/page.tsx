import type { Metadata } from 'next'
import Image from 'next/image'
import HeroSection from '@/components/HeroSection'
import SectionLabel from '@/components/SectionLabel'
import FadeUp from '@/components/FadeUp'
import Button from '@/components/Button'
import TestimonialBlock from '@/components/TestimonialBlock'

export const metadata: Metadata = {
  title: 'Custom Bedding Couture | Luxury Bedding Design Santa Cruz',
  description:
    'Bespoke bedding couture for Santa Cruz and the Monterey Bay corridor. Custom duvet covers, coverlets, shams, and tailored bedding ensembles designed and fabricated to order.',
}

const pieces = [
  {
    title: 'Bedspreads, Duvet Covers, Coverlets, Bed Skirts & Scaldinos',
    description:
      'Custom-cut to your exact duvet insert, with hand-finished edges and closures of your choosing.',
  },
  {
    title: 'Accent Pillows & Bolsters',
    description:
      'selected to complete the composition — to punctuate it or anchor it, depending on the room.',
  },
  {
    title: 'Pillow Shams',
    description: '',
  },
  {
    title: 'Upholstered Headboards',
    description:
      'Upholstered headboards built to your exact specifications — any shape, any fabric, any finish. Every headboard is constructed and upholstered in our Santa Cruz workroom.',
  },
]

export default function BeddingPage() {
  return (
    <>
      <HeroSection
        imageSrc="/images/bedding/bedding-new.jpg"
        imageAlt="Bespoke linen bedding ensemble with custom shams and a hand-quilted coverlet in a Santa Cruz coastal bedroom"
        label="Bedding Couture"
        headline="The most private room in your home deserves the most considered design."
        subheadline="In the home — Bedspreads, bed skirts, duvets, coverlets, shams, and bedding ensembles — composed as a single, lasting statement."
        ctaText="Begin a Consultation"
        ctaHref="/contact"
      />

      {/* Philosophy */}
      <section
        className="py-24 md:py-36 px-6 md:px-10 bg-linen"
        aria-labelledby="bedding-philosophy"
      >
        <FadeUp className="max-w-3xl mx-auto">
          <SectionLabel>Bedding as Design</SectionLabel>
          <h2
            id="bedding-philosophy"
            className="font-cormorant font-light text-charcoal text-4xl md:text-5xl leading-tight mb-8"
          >
            A bed is not a product.
            <br />
            <em className="italic">It is a composition.</em>
          </h2>
          <p className="font-jost font-light text-muted text-base leading-relaxed mb-5">
            We approach custom bedding the way an art director approaches a photograph — as a
            composition of texture, weight, proportion, and color. Not a matched set from a
            catalogue, but a layered ensemble tailored to your room and your rest.
          </p>
          <p className="font-jost font-light text-muted text-base leading-relaxed">
            Every piece is fabricated to your bed&rsquo;s exact dimensions. Hems are hand-finished.
            Fabrics are sourced from European textile houses we have used for years.
          </p>
        </FadeUp>
      </section>

      {/* Pieces */}
      <section
        className="py-24 md:py-32 px-6 md:px-10 bg-stone"
        aria-labelledby="bedding-pieces-heading"
      >
        <div className="max-w-8xl mx-auto">
          <FadeUp className="mb-16">
            <SectionLabel>What We Make</SectionLabel>
            <h2
              id="bedding-pieces-heading"
              className="font-cormorant font-light text-charcoal text-4xl md:text-5xl leading-tight max-w-md"
            >
              Every layer, designed with intention.
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'var(--rule)' }}>
            {pieces.map(({ title, description }, i) => (
              <FadeUp key={i} delay={i * 0.07} className="bg-linen p-10 md:p-12">
                <h3 className="font-cormorant font-light text-charcoal text-2xl mb-4">{title}</h3>
                <span className="block w-6 h-px bg-brass mb-5" aria-hidden="true" />
                <p className="font-jost font-light text-muted text-sm leading-relaxed">{description}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Coordinated by design */}
      <section className="bg-charcoal" aria-labelledby="bedding-coordinated-heading">
        <div className="max-w-8xl mx-auto">
          <FadeUp
            delay={0.15}
            className="flex flex-col justify-center px-8 md:px-14 lg:px-20 py-20 md:py-28"
          >
            <SectionLabel>Windows &amp; Bedding</SectionLabel>
            <h2
              id="bedding-coordinated-heading"
              className="font-cormorant font-light text-off-white text-4xl md:text-5xl leading-tight mb-6"
            >
              Coordinated by design.
            </h2>
            <span className="block w-8 h-px bg-brass mb-8" aria-hidden="true" />
            <p className="font-jost font-light text-muted text-sm md:text-base leading-relaxed mb-5 max-w-sm">
              When drapery and bedding are designed in the same conversation — the same fabrics,
              the same light, the same room — something shifts. The result is not a matched set.
              It is a cohesive space where every element belongs.
            </p>
            <p className="font-jost font-light text-muted text-sm md:text-base leading-relaxed max-w-sm">
              We offer window coverings and bedding couture as a unified service for clients
              who want their bedroom composed from the ground up. One process. One point of
              contact. One room that feels entirely considered.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* The details that define a room. */}
      <section className="bg-linen" aria-labelledby="bedding-details-heading" style={{ borderTop: '1px solid var(--rule)' }}>
        <div className="max-w-8xl mx-auto">
          <FadeUp
            className="flex flex-col justify-center px-8 md:px-14 lg:px-20 py-20 md:py-28"
          >
            <SectionLabel>Finishing Details</SectionLabel>
            <h2
              id="bedding-details-heading"
              className="font-cormorant font-light text-charcoal text-4xl md:text-5xl leading-tight mb-6"
            >
              The details that define a room.
            </h2>
            <span className="block w-8 h-px bg-brass mb-8" aria-hidden="true" />
            <p className="font-jost font-light text-muted text-sm md:text-base leading-relaxed mb-5 max-w-sm">
              It is rarely the large gesture that determines whether a room feels complete. More
              often it is the weight of a hem, the alignment of a seam, the way a corner is
              mitered — the details that most people never name, but always notice.
            </p>
            <p className="font-jost font-light text-muted text-sm md:text-base leading-relaxed max-w-sm">
              We hand-finish every edge and inspect every piece before it leaves the workroom.
              This is not quality control. It is care.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* bedding-05 — full-width banner with caption */}
      <section className="relative h-[55vh] md:h-[70vh] overflow-hidden bg-stone">
        <Image
          src="/images/bedding/bedding-pillows-cushions.jpg"
          alt="Custom pillows and cushions — decorative accent pieces fabricated in the Drapery Enterprises Santa Cruz workroom"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </section>

      {/* Testimonial */}
      <section
        className="py-24 md:py-32 px-6 md:px-10 bg-linen"
        aria-label="Client testimonial"
      >
        <div className="max-w-8xl mx-auto">
          <TestimonialBlock
            quote="When it comes to draperies, shades, pillows, and shams, there is no better place to go than Drapery Enterprises. Our home remodel was filled with challenging needs and design ideas we wanted to implement. No matter what the project was, Drapery Enterprises worked with us to make it work, and brought with it the type of quality care and customized attention to detail that you rarely see anymore. I could not be happier with all of their work!"
            client="Caroline Westington"
            city="Small Business Owner"
          />
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24 md:py-32 px-6 md:px-10 bg-charcoal text-center"
        aria-label="Consultation call to action"
      >
        <FadeUp className="max-w-2xl mx-auto">
          <h2 className="font-cormorant font-light text-off-white text-4xl md:text-5xl leading-tight mb-6">
            Begin composing your project.
          </h2>
          <p className="font-jost font-light text-muted text-sm leading-relaxed mb-10 max-w-sm mx-auto">
            A conversation about your room is where every project begins. No obligation,
            no rush.
          </p>
          <Button href="/contact" variant="light">
            Tell us about your project
          </Button>
        </FadeUp>
      </section>
    </>
  )
}
