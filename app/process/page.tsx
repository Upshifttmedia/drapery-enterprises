import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
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

const steps = [
  {
    number: '01',
    phase: 'Inquiry',
    title: 'It begins with a conversation.',
    duration: 'Day 1',
    description:
      'Reach out through our contact form or by phone. We ask a few simple questions — your room, your timeline, your sense of what you\'re looking for. Within 24 hours, we schedule your consultation.',
    detail:
      'There is no obligation at this stage, and no rush. We want to understand whether we\'re the right fit for your project before you invest any time.',
  },
  {
    number: '02',
    phase: 'Consultation',
    title: 'We visit your space.',
    duration: 'Week 1',
    description:
      'We come to you. In your home, in your light, we measure your windows, observe your architecture, and listen to how you want the room to feel. We bring nothing to sell — only to understand.',
    detail:
      'Most consultations take 60 to 90 minutes. For window treatments, we measure every window to the millimeter. For bedding, we assess the room, the bed, and the light before we make any recommendations.',
  },
  {
    number: '03',
    phase: 'Design Presentation',
    title: 'We compose a proposal for your room.',
    duration: 'Week 2–3',
    description:
      'Within one to two weeks, we return — or schedule a follow-up — with fabric samples, hardware options, and detailed workroom drawings. You see every selection in your own light before anything is ordered.',
    detail:
      'We present one considered proposal, not a stack of options. If adjustments are needed, we refine until it\'s right. We don\'t move to fabrication until you love it.',
  },
  {
    number: '04',
    phase: 'Fabrication',
    title: 'Made in our workroom.',
    duration: 'Weeks 4–8',
    description:
      'Once approved, your pieces are fabricated entirely in our Santa Cruz workroom. Every panel is cut, sewn, and finished by hand. Lead times vary by project — typically four to eight weeks from approval.',
    detail:
      'We don\'t outsource. We don\'t rush. When something is worth making well, the timeline is part of the quality.',
  },
  {
    number: '05',
    phase: 'Installation',
    title: 'Finished with precision.',
    duration: 'Final Day',
    description:
      'We install every piece ourselves. Window treatments are mounted, pressed, and dressed. Bedding is laid and styled in the room. We don\'t leave until everything is exactly right.',
    detail:
      'For window treatments, this includes hanging hardware, steaming panels, and adjusting every break and hem. For bedding, we dress the full ensemble before we leave.',
  },
  {
    number: '06',
    phase: 'Follow-Up',
    title: 'We stand behind our work.',
    duration: 'Ongoing',
    description:
      'After installation, we check in. If anything has shifted, settled, or needs adjustment — we return. Our work is guaranteed, and our relationship with a client doesn\'t end at install.',
    detail:
      'We also maintain records of every fabric and hardware specification for each project, so if you ever need to add a panel, replace a shade, or extend a bedding ensemble, we can match it perfectly.',
  },
]

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
    q: 'Do you work with my interior designer?',
    a: 'Yes — and we do it well. Our trade program is designed for designers who want a workroom that communicates clearly, delivers on time, and produces work they\'re proud to have in their client\'s home.',
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
        imageSrc="/images/process/process-01.jpg"
        imageAlt="Fabric samples and workroom drawings laid out during the design presentation stage at Drapery Enterprises"
        label="The Process"
        headline="A process built for work that lasts."
        subheadline="Six steps, no shortcuts. From first conversation to finished installation."
        ctaText="Begin a Private Consultation"
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

      {/* Steps */}
      <section
        className="py-24 md:py-32 px-6 md:px-10 bg-charcoal"
        aria-labelledby="steps-heading"
      >
        <div className="max-w-8xl mx-auto">
          <FadeUp className="mb-16">
            <SectionLabel>Step by Step</SectionLabel>
            <h2
              id="steps-heading"
              className="font-cormorant font-light text-off-white text-4xl md:text-5xl leading-tight max-w-lg"
            >
              From first conversation to finished room.
            </h2>
          </FadeUp>

          <div className="flex flex-col">
            {steps.map((step, i) => (
              <FadeUp
                key={i}
                delay={0.05}
                className="grid grid-cols-1 md:grid-cols-[80px_1fr_1fr] gap-6 md:gap-12 py-10 md:py-12"
                style={{ borderTop: '1px solid rgba(250, 250, 248, 0.08)' } as CSSProperties}
              >
                <div className="flex md:flex-col gap-4 items-start">
                  <span
                    className="font-cormorant text-5xl font-light text-brass/30 leading-none select-none"
                    aria-hidden="true"
                  >
                    {step.number}
                  </span>
                  <div className="pt-2">
                    <span className="block font-jost font-medium text-[0.5625rem] tracking-[0.2em] uppercase text-brass">
                      {step.phase}
                    </span>
                    <span className="block font-jost font-light text-[0.625rem] text-muted mt-1 tracking-wider">
                      {step.duration}
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="font-cormorant font-light text-off-white text-2xl md:text-3xl leading-tight mb-4">
                    {step.title}
                  </h3>
                  <p className="font-jost font-light text-muted text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="md:pl-4" style={{ borderLeft: '1px solid rgba(250,250,248,0.07)' }}>
                  <p className="font-jost font-light text-muted/70 text-sm leading-relaxed italic">
                    {step.detail}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
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
                style={{ borderTop: '1px solid var(--rule)' } as CSSProperties}
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
            We&rsquo;ll be in touch within 24 hours.
          </p>
          <Button href="/contact" variant="primary">
            Begin a Private Consultation
          </Button>
        </FadeUp>
      </section>
    </>
  )
}
