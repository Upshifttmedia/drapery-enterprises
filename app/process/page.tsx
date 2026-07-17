import type { Metadata } from 'next'
import Image from 'next/image'
import HeroSection from '@/components/HeroSection'
import SectionLabel from '@/components/SectionLabel'
import FadeUp from '@/components/FadeUp'
import Button from '@/components/Button'

export const metadata: Metadata = {
  title: 'Our Process | Drapery Enterprises — Santa Cruz, CA',
  description:
    'From private consultation to final installation — how Drapery Enterprises designs and fabricates custom window treatments and bedding couture for clients across the Central Coast.',
}


const faqs = [
  {
    q: 'How long does a typical project take from inquiry to install?',
    a: 'Most projects run six to ten weeks from initial consultation to installation. Complex multi-room projects may run longer. We provide a specific timeline during the design presentation stage.',
  },
  {
    q: 'Do you work on single rooms or whole-home projects?',
    a: 'Both. Some clients come to us for a single statement window. Others engage us for an entire home or a major renovation. We approach every project with the same care regardless of scope.',
  },
  {
    q: 'What is your service area?',
    a: 'We serve the Santa Cruz and Monterey Bay corridor, the Peninsula, and the greater Bay Area. For large or multi-location projects, we have worked as far as Napa and Los Angeles.',
  },
  {
    q: 'Is there a minimum project size?',
    a: 'We don\'t have a hard minimum. That said, our process is designed for clients who value craft and are prepared for custom timelines and pricing. We are not the right fit for every budget.',
  },
]

export default function ProcessPage() {
  return (
    <>
      <HeroSection
        imageSrc="/images/process/process-hero-new.jpg"
        imageAlt="Fabric samples and workroom drawings laid out during the design presentation stage at Drapery Enterprises"
        label="The Process"
        headline="A process built for work that lasts."
        subheadline="Six steps, no shortcuts. From first conversation to finished installation."
        ctaText="Begin a Consultation"
        ctaHref="/contact"
        minHeight="min-h-[70vh]"
      />

      {/* Intro */}
      <section className="py-24 md:py-36 px-6 md:px-10 bg-linen" aria-labelledby="process-intro">
        <FadeUp className="max-w-3xl mx-auto">
          <SectionLabel>How We Work</SectionLabel>
          <h2
            id="process-intro"
            className="font-cormorant font-light text-charcoal text-4xl md:text-5xl leading-tight mb-8"
          >
            Precision at every stage.
          </h2>
          <p className="font-jost font-light text-muted text-base leading-relaxed mb-5">
            Custom work of this caliber requires a process that is as considered as the finished
            piece. We have refined ours over years of projects — learning what clients need to feel
            confident, what decisions matter most, and where there is no room for approximation.
          </p>
          <p className="font-jost font-light text-muted text-base leading-relaxed">
            Our process is designed to be as comfortable as the result. No ambiguity, no
            surprises, no pressure. Just clear steps, honest communication, and work we
            stand behind.
          </p>
        </FadeUp>
      </section>

      {/* Workroom image */}
      <section className="relative h-[50vh] md:h-[65vh] overflow-hidden bg-stone">
        <Image
          src="/images/about/about-02.jpg"
          alt="The Drapery Enterprises workroom in Santa Cruz — fabrication tables, fabric rolls, and hand tools for custom window treatments"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/25" />
      </section>

      {/* FAQ */}
      <section
        className="py-24 md:py-32 px-6 md:px-10 bg-linen"
        aria-labelledby="faq-heading"
      >
        <div className="max-w-4xl mx-auto">
          <FadeUp>
            <SectionLabel>Common Questions</SectionLabel>
            <h2
              id="faq-heading"
              className="font-cormorant font-light text-charcoal text-4xl md:text-5xl leading-tight mb-14"
            >
              What clients ask.
            </h2>
          </FadeUp>
          <div className="flex flex-col">
            {faqs.map(({ q, a }, i) => (
              <FadeUp
                key={i}
                delay={i * 0.06}
                className="py-8"
                style={{ borderTop: '1px solid var(--rule)' }}
              >
                <h3 className="font-cormorant font-light text-charcoal text-xl md:text-2xl mb-3">
                  {q}
                </h3>
                <p className="font-jost font-light text-muted text-sm leading-relaxed max-w-2xl">
                  {a}
                </p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24 md:py-32 px-6 md:px-10 bg-stone text-center"
        aria-label="Consultation call to action"
      >
        <FadeUp className="max-w-2xl mx-auto">
          <h2 className="font-cormorant font-light text-charcoal text-4xl md:text-5xl leading-tight mb-6">
            Ready to begin?
          </h2>
          <p className="font-jost font-light text-muted text-sm leading-relaxed mb-10 max-w-xs mx-auto">
            The first step is a conversation. No obligation, no rush.
            We&rsquo;ll be in touch within 48 hours.
          </p>
          <Button href="/contact" variant="primary">
            Begin a Consultation
          </Button>
        </FadeUp>
      </section>
    </>
  )
}
