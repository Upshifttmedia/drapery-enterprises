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
    title: 'Duvet Covers',
    description:
      'Custom-cut to your exact duvet insert, with hand-finished edges and closures of your choosing. Available in linen, cotton percale, sateen, and silk.',
  },
  {
    title: 'Coverlets & Quilts',
    description:
      'The defining layer of any well-composed bed. Hand-quilted or machine-quilted coverlets in fabrics and patterns chosen for your room — never from a catalogue.',
  },
  {
    title: 'Fitted & Flat Sheets',
    description:
      'Tailored to your exact mattress depth with mitered corners that stay in place. We use the same European linen and percale mills as the finest hotels.',
  },
  {
    title: 'Shams & Pillowcases',
    description:
      'Knife-edge, flange, or Oxford finish — your choice. Fabricated in the same cloth as your duvet cover for a composed ensemble, or in a deliberate contrast.',
  },
  {
    title: 'Throw Pillows & Bolsters',
    description:
      'Down-filled or feather-wrapped, in fabric selected to complete the composition — to punctuate it or anchor it, depending on the room.',
  },
  {
    title: 'Bed Skirts & Valances',
    description:
      'Tailored to your bed frame\'s exact drop height. A finishing detail most overlook — and one that defines the whole arrangement.',
  },
]

const fabrics = [
  {
    name: 'Belgian Linen',
    description:
      'Washed or crisp — Belgian linen improves with every wash and every night of sleep. The gold standard for clients who value honest, enduring materials.',
  },
  {
    name: 'Cotton Percale',
    description:
      '400-thread-count and above, from mills that measure quality by hand-feel, not marketing. Crisp, cool, and as elegant ten years from now as on day one.',
  },
  {
    name: 'Sateen',
    description:
      'Lustrous cotton sateen for rooms that call for a softer, more luminous surface. It catches light beautifully and drapes with quiet richness.',
  },
  {
    name: 'Silk & Silk-Blend',
    description:
      'For clients who want bedding that is also a material statement. We source cultivated silk from European specialty mills for panels and accent pieces.',
  },
]

export default function BeddingPage() {
  return (
    <>
      <HeroSection
        imageSrc="/images/bedding/bedding-01.jpg"
        imageAlt="Bespoke linen bedding ensemble with custom shams and a hand-quilted coverlet in a Santa Cruz coastal bedroom"
        label="Bedding Couture"
        headline="The most private room in your home deserves the most considered design."
        subheadline="Custom duvets, coverlets, shams, and bedding ensembles — composed as a single, lasting statement."
        ctaText="Begin a Private Consultation"
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
            Fabrics are sourced from European textile houses we have used for years. Nothing ships
            until it&rsquo;s perfect.
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

      {/* Atmosphere image */}
      <section className="relative h-[55vh] md:h-[75vh] overflow-hidden bg-stone">
        <Image
          src="/images/bedding/bedding-02.jpg"
          alt="Detail of hand-finished edge on a custom Belgian linen duvet cover, fabricated in the Drapery Enterprises atelier"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/30" />
        <div className="absolute inset-0 flex items-end p-8 md:p-16">
          <FadeUp>
            <p className="font-cormorant italic text-off-white text-xl md:text-2xl max-w-lg opacity-90 leading-relaxed">
              &ldquo;The difference between a good bed and an exceptional one is in details
              most people never name — but always feel.&rdquo;
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Fabrics */}
      <section
        className="py-24 md:py-32 px-6 md:px-10 bg-linen"
        aria-labelledby="bedding-fabrics-heading"
      >
        <div className="max-w-4xl mx-auto">
          <FadeUp>
            <SectionLabel>Fabrics</SectionLabel>
            <h2
              id="bedding-fabrics-heading"
              className="font-cormorant font-light text-charcoal text-4xl md:text-5xl leading-tight mb-14"
            >
              Sourced from the houses that matter.
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-0">
            {fabrics.map(({ name, description }, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div className="py-8" style={{ borderTop: '1px solid var(--rule)' }}>
                  <h3 className="font-cormorant font-light text-charcoal text-2xl mb-3">{name}</h3>
                  <p className="font-jost font-light text-muted text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Coordinated by design — split section */}
      <section className="bg-charcoal" aria-labelledby="bedding-coordinated-heading">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[560px]">
          <FadeUp className="relative min-h-[380px] lg:min-h-full overflow-hidden bg-stone order-1">
            <Image
              src="/images/bedding/bedding-03.jpg"
              alt="Custom bedding ensemble and coordinating window treatments designed together as a unified room composition"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </FadeUp>
          <FadeUp
            delay={0.15}
            className="flex flex-col justify-center px-8 md:px-14 lg:px-20 py-20 md:py-28 order-2"
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
              We offer window treatments and bedding couture as a unified service for clients
              who want their bedroom composed from the ground up. One process. One point of
              contact. One room that feels entirely considered.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* bedding-04 — split layout: "The details that define a room." */}
      <section className="bg-linen" aria-labelledby="bedding-details-heading">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[560px]">
          <FadeUp
            className="flex flex-col justify-center px-8 md:px-14 lg:px-20 py-20 md:py-28 order-2 lg:order-1"
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
          <FadeUp className="relative min-h-[380px] lg:min-h-full overflow-hidden bg-stone order-1 lg:order-2">
            <Image
              src="/images/bedding/bedding-04.jpg"
              alt="Close-up of hand-finished hem and mitered corner on a custom Belgian linen duvet cover — Drapery Enterprises atelier detail"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </FadeUp>
        </div>
      </section>

      {/* bedding-05 — full-width banner with caption */}
      <section className="relative h-[55vh] md:h-[70vh] overflow-hidden bg-stone">
        <Image
          src="/images/bedding/bedding-05.jpg"
          alt="European textile mill fabric rolls — the source materials for Drapery Enterprises custom bedding couture"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/35" />
        <div className="absolute inset-0 flex items-end p-8 md:p-16">
          <FadeUp>
            <p className="font-cormorant italic text-off-white text-xl md:text-2xl lg:text-3xl max-w-xl opacity-90 leading-relaxed">
              Sourced from European mills.
              <br />
              Made for your bed.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Process note */}
      <section
        className="py-20 md:py-28 px-6 md:px-10 bg-stone"
        aria-labelledby="bedding-process-note"
      >
        <FadeUp className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <SectionLabel>Process</SectionLabel>
            <h2
              id="bedding-process-note"
              className="font-cormorant font-light text-charcoal text-3xl md:text-4xl leading-tight"
            >
              How a bedding project works.
            </h2>
          </div>
          <div className="md:col-span-2 flex flex-col gap-8">
            {[
              {
                step: '01 — Consultation',
                text: 'We meet in your bedroom. We observe the light, the architecture, your existing furniture and color palette. We listen to how you want the room to feel.',
              },
              {
                step: '02 — Selection',
                text: 'We bring fabric samples to your home and compose selections specific to your bed. You see them in your light, against your walls, before anything is ordered.',
              },
              {
                step: '03 — Fabrication & Delivery',
                text: 'Every piece is fabricated to order in our Santa Cruz workroom. Lead time is typically four to six weeks. We deliver and dress the bed.',
              },
            ].map(({ step, text }, i) => (
              <div
                key={i}
                className="flex gap-6 py-6"
                style={{ borderTop: '1px solid var(--rule)' }}
              >
                <span className="font-jost font-medium text-[0.625rem] tracking-[0.18em] uppercase text-brass flex-shrink-0 mt-1">
                  {step}
                </span>
                <p className="font-jost font-light text-muted text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </FadeUp>
      </section>

      {/* Testimonial */}
      <section
        className="py-24 md:py-32 px-6 md:px-10 bg-linen"
        aria-label="Client testimonial"
      >
        <div className="max-w-8xl mx-auto">
          <TestimonialBlock
            quote="Our bedroom is the room we spend the most time in, and we've never loved it the way we do now. The bedding she designed is a better version of everything we imagined."
            client="A. Nakamura"
            city="Los Altos Hills, CA"
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
            Begin composing your bed.
          </h2>
          <p className="font-jost font-light text-muted text-sm leading-relaxed mb-10 max-w-sm mx-auto">
            A conversation about your room is where every project begins. No obligation,
            no rush.
          </p>
          <Button href="/contact" variant="light">
            Begin a Private Consultation
          </Button>
        </FadeUp>
      </section>
    </>
  )
}
