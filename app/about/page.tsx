import type { Metadata } from 'next'
import Image from 'next/image'
import HeroSection from '@/components/HeroSection'
import SectionLabel from '@/components/SectionLabel'
import FadeUp from '@/components/FadeUp'
import Button from '@/components/Button'
import TestimonialBlock from '@/components/TestimonialBlock'

// TODO: Replace owner name, bio, and portrait details with actual client information.
export const metadata: Metadata = {
  title: 'Our Story | Custom Window Treatment Designer Santa Cruz',
  description:
    'The story behind Drapery Enterprises — a Santa Cruz atelier founded on the belief that the most beautiful rooms are built by hand, one decision at a time.',
}

const values = [
  {
    title: 'Craft over speed.',
    description:
      'We take on fewer projects than we could. We believe the only way to produce work of this quality is to give every project the time it requires — and to resist the pressure to scale what cannot be scaled.',
  },
  {
    title: 'The room is the brief.',
    description:
      'We don\'t come to a consultation with solutions. We come to observe, to listen, and to understand — because the room itself will tell you what it needs, if you take the time to look.',
  },
  {
    title: 'Materials are not interchangeable.',
    description:
      'We source from mills and suppliers we trust, and we use materials that earn their place in a room. The right linen, the right hardware, the right thread. Nothing approximate.',
  },
  {
    title: 'A limited practice by design.',
    description:
      'We work with a select number of clients each season. This is a choice, not a constraint. It ensures that every project — large or small — receives our full attention.',
  },
]

export default function AboutPage() {
  return (
    <>
      <HeroSection
        imageSrc="/images/about/about-01.jpg"
        imageAlt="The hands of our maker measuring and cutting fabric in the Drapery Enterprises atelier in Santa Cruz, California"
        label="The Studio"
        headline="Made by hand. Designed for your room."
        subheadline="A Santa Cruz atelier for custom window treatments and bedding couture."
        minHeight="min-h-[70vh]"
      />

      {/* Maker story */}
      <section className="bg-linen" aria-labelledby="maker-heading">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          <FadeUp className="relative min-h-[420px] lg:min-h-full overflow-hidden bg-stone">
            <Image
              src="/images/about/about-02.jpg"
              alt="Detail of the Drapery Enterprises workroom — fabric rolls, cutting table, and hand tools in the Santa Cruz atelier"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </FadeUp>
          <FadeUp
            delay={0.2}
            className="flex flex-col justify-center px-8 md:px-14 lg:px-20 py-20 md:py-28"
          >
            <SectionLabel>The Maker</SectionLabel>
            {/* TODO: Replace with owner's actual name */}
            <h2
              id="maker-heading"
              className="font-cormorant font-light text-charcoal text-4xl md:text-5xl leading-tight mb-6"
            >
              Founded on the conviction
              <br />
              <em className="italic">that rooms remember what&rsquo;s made for them.</em>
            </h2>
            <p className="font-jost font-light text-muted text-sm md:text-base leading-relaxed mb-5 max-w-sm">
              Drapery Enterprises was founded after years of watching beautiful spaces fall
              short of their potential — not because of bad design, but because the details were
              never given the attention they deserved.
            </p>
            <p className="font-jost font-light text-muted text-sm md:text-base leading-relaxed mb-5 max-w-sm">
              Every window treatment and bedding piece that leaves this workroom is designed
              with a specific room in mind. Not a general one. Not an ideal one. Yours.
            </p>
            <p className="font-jost font-light text-muted text-sm md:text-base leading-relaxed max-w-sm">
              We are based in Santa Cruz, California. We have served clients across the Monterey
              Bay and Bay Area corridor for over a decade.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Process image — full-width editorial break */}
      <section className="relative h-[55vh] md:h-[70vh] overflow-hidden bg-stone" aria-hidden="true">
        <Image
          src="/images/process/process-01.jpg"
          alt="Measuring and hand-marking fabric in the Drapery Enterprises Santa Cruz workroom — precision at every stage"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/25" />
        <div className="absolute inset-0 flex items-end p-8 md:p-16">
          <FadeUp>
            <p className="font-cormorant italic text-off-white text-xl md:text-2xl max-w-lg opacity-90 leading-relaxed">
              &ldquo;Every measurement is a commitment. Every cut, a decision that lasts.&rdquo;
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Statement */}
      <section
        className="py-24 md:py-36 px-6 md:px-10 bg-stone"
        aria-label="Studio philosophy"
      >
        <FadeUp className="max-w-4xl mx-auto text-center">
          <span className="block w-8 h-px bg-brass mx-auto mb-10" aria-hidden="true" />
          <p className="font-cormorant italic font-light text-charcoal text-3xl md:text-4xl lg:text-[2.5rem] leading-relaxed">
            &ldquo;The rooms I admire most are not the ones that were decorated. They are the ones
            that were designed — thought through, decided slowly, and made with care.&rdquo;
          </p>
          <span className="block w-8 h-px bg-brass mx-auto mt-10" aria-hidden="true" />
        </FadeUp>
      </section>

      {/* Values */}
      <section
        className="py-24 md:py-32 px-6 md:px-10 bg-linen"
        aria-labelledby="values-heading"
      >
        <div className="max-w-8xl mx-auto">
          <FadeUp className="mb-16">
            <SectionLabel>How We Work</SectionLabel>
            <h2
              id="values-heading"
              className="font-cormorant font-light text-charcoal text-4xl md:text-5xl leading-tight max-w-lg"
            >
              The principles behind the practice.
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
            {values.map(({ title, description }, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="py-8 md:py-10" style={{ borderTop: '1px solid var(--rule)' }}>
                  <h3 className="font-cormorant font-light text-charcoal text-2xl md:text-3xl mb-4">
                    {title}
                  </h3>
                  <p className="font-jost font-light text-muted text-sm leading-relaxed max-w-sm">
                    {description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Workroom */}
      <section className="bg-charcoal" aria-labelledby="workroom-heading">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px]">
          <FadeUp
            className="flex flex-col justify-center px-8 md:px-14 lg:px-20 py-20 md:py-28 order-2 lg:order-1"
          >
            <SectionLabel>The Workroom</SectionLabel>
            <h2
              id="workroom-heading"
              className="font-cormorant font-light text-off-white text-4xl md:text-5xl leading-tight mb-6"
            >
              Santa Cruz, California.
              <br />
              <em className="italic text-brass">Built for precision.</em>
            </h2>
            <p className="font-jost font-light text-muted text-sm md:text-base leading-relaxed mb-5 max-w-sm">
              Our workroom is where every piece is made — from the first cut to the final press.
              We fabricate everything in-house. No outsourcing, no rush orders, no compromises.
            </p>
            <p className="font-jost font-light text-muted text-sm md:text-base leading-relaxed max-w-sm">
              We serve the Santa Cruz and Monterey Bay corridor, the Peninsula, and the greater
              Bay Area. For significant projects, we travel.
            </p>
            <div className="mt-10">
              <address className="not-italic">
                <a
                  href="mailto:wstrong@draperyenterprises.com"
                  className="font-jost font-light text-sm text-muted hover:text-off-white transition-colors duration-200 block mb-2"
                >
                  wstrong@draperyenterprises.com
                </a>
                <a
                  href="tel:+18314582578"
                  className="font-jost font-light text-sm text-muted hover:text-off-white transition-colors duration-200 block"
                >
                  (831) 458-2578
                </a>
              </address>
            </div>
          </FadeUp>
          <FadeUp className="relative min-h-[380px] lg:min-h-full overflow-hidden bg-stone order-1 lg:order-2">
            <Image
              src="/images/about/about-03.jpg"
              alt="Finished custom window treatment installed in a Santa Cruz residence — the result of the Drapery Enterprises design and fabrication process"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </FadeUp>
        </div>
      </section>

      {/* about-03 full-width image with centered quote overlay */}
      <section className="relative h-[60vh] md:h-[75vh] overflow-hidden bg-stone" aria-hidden="true">
        <Image
          src="/images/about/about-03.jpg"
          alt="Finished custom window treatment — the final result of the Drapery Enterprises design and fabrication process"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/40" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <FadeUp className="text-center max-w-2xl">
            <p className="font-cormorant italic font-light text-off-white text-3xl md:text-4xl lg:text-5xl leading-relaxed">
              &ldquo;Every detail considered.
              <br />
              Every piece made to last.&rdquo;
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Testimonial */}
      <section
        className="py-24 md:py-32 px-6 md:px-10 bg-stone"
        aria-label="Client testimonial"
      >
        <div className="max-w-8xl mx-auto">
          <TestimonialBlock
            quote="I've worked with ateliers in New York and London. What she brings to a room — the eye, the precision, the patience — is rare anywhere. The fact that she's local feels like a privilege."
            client="D. Cavanaugh, Architect"
            city="San Francisco, CA"
          />
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24 md:py-32 px-6 md:px-10 bg-linen text-center"
        aria-label="Consultation call to action"
      >
        <FadeUp className="max-w-2xl mx-auto">
          <h2 className="font-cormorant font-light text-charcoal text-4xl md:text-5xl leading-tight mb-6">
            Work with us.
          </h2>
          <p className="font-jost font-light text-muted text-sm leading-relaxed mb-10 max-w-xs mx-auto">
            A private consultation is where every project begins. We&rsquo;d love to hear
            about your space.
          </p>
          <Button href="/contact" variant="primary">
            Begin a Private Consultation
          </Button>
        </FadeUp>
      </section>
    </>
  )
}
