import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import SectionLabel from '@/components/SectionLabel'
import ServiceCard from '@/components/ServiceCard'
import ProcessStep from '@/components/ProcessStep'
import TestimonialBlock from '@/components/TestimonialBlock'
import Button from '@/components/Button'
import FadeUp from '@/components/FadeUp'

export const metadata: Metadata = {
  title: 'Custom Window Treatments Santa Cruz | Bespoke Drapery & Bedding Couture',
  description:
    'Drapery Enterprises is a luxury design atelier for custom window treatments and bedding couture. Serving Santa Cruz, Monterey Bay, and the Silicon Valley corridor.',
}

const portfolioPreview = [
  {
    src: '/images/portfolio/portfolio-01.jpg',
    alt: 'Custom linen drapery panels, floor-to-ceiling, in a Santa Cruz coastal residence',
    label: 'Window Coverings',
  },
  {
    src: '/images/portfolio/portfolio-02.jpg',
    alt: 'Bespoke Belgian linen bedding ensemble in a Monterey Bay estate bedroom',
    label: 'Bedding Couture',
  },
  {
    src: '/images/portfolio/portfolio-03.jpg',
    alt: 'Tailored roman shades in a heritage stripe linen, Carmel home office',
    label: 'Window Coverings',
  },
  {
    src: '/images/portfolio/portfolio-04.jpg',
    alt: 'Custom silk drapery with hand-sewn leading edges in a Palo Alto living room',
    label: 'Window Coverings',
  },
  {
    src: '/images/portfolio/portfolio-05.jpg',
    alt: 'Layered custom bedding with hand-quilted coverlet and coordinating shams',
    label: 'Bedding Couture',
  },
  {
    src: '/images/portfolio/portfolio-06.jpg',
    alt: 'Sheer linen panels with solar shade undertreatment in a modern Santa Cruz kitchen',
    label: 'Window Coverings',
  },
]

const processSteps = [
  {
    number: '01',
    label: 'Research',
    title: 'A conversation about your space.',
    description:
      'Every project begins with a private consultation — in your home, at your convenience. We listen first. We observe light, proportion, architecture, and how you live in a room.',
  },
  {
    number: '02',
    label: 'Create',
    title: 'Composed for your room.',
    description:
      'We present curated fabric selections, custom hardware options, and detailed workroom drawings. Nothing is generic. Every specification is written for your exact windows and your life.',
  },
  {
    number: '03',
    label: 'Install',
    title: 'Finished with precision.',
    description:
      "Your pieces are fabricated in our Santa Cruz workroom and installed by our team.",
  },
]

export default function HomePage() {
  return (
    <>
      {/* ─── 1. Hero ──────────────────────────────────────────── */}
      <HeroSection
        imageSrc="/images/hero/hero-01.jpg"
        imageSrcMobile="/images/hero/hero-04.jpg"
        imageAlt="Sheer white drapery panels framing floor-to-ceiling doors open to a coastal waterfront view — a light-filled living room composed around the window"
        objectPosition="center 30%"
        headline="Every room has a moment waiting to be made."
        subheadline="Bespoke window coverings and bedding couture — from inspiration to installation."
        ctaText="To the Trade"
        ctaHref="/trade"
      />

      {/* ─── 2. Positioning statement ─────────────────────────── */}
      <section
        className="py-28 md:py-40 px-6 md:px-10 bg-linen"
        aria-label="Brand positioning"
      >
        <FadeUp className="max-w-4xl mx-auto text-center">
          <span className="block w-8 h-px bg-brass mx-auto mb-12" aria-hidden="true" />
          <p className="font-cormorant font-light text-charcoal text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.15]">
            We don&rsquo;t cover windows.
            <br />
            <em className="italic text-brass">We compose them.</em>
          </p>
          <span className="block w-8 h-px bg-brass mx-auto mt-12" aria-hidden="true" />
          <p className="font-jost font-light text-muted text-sm md:text-base leading-relaxed mt-12 max-w-xl mx-auto">
            Drapery Enterprises is a design atelier based in Santa Cruz, California. We fabricate
            custom window coverings and bedding couture for clients who understand that the details
            are the design — and that no two rooms are alike.
          </p>
        </FadeUp>
      </section>

      {/* ─── 3. Services ──────────────────────────────────────── */}
      <section aria-labelledby="services-heading">
        <h2 id="services-heading" className="sr-only">
          Our Services
        </h2>
        <ServiceCard
          label="Window Coverings"
          headline="Windows that define a room."
          description="Custom drapery, roman shades, sheers, and hardware — every detail considered, every panel fabricated to order."
          details={[
            'Custom drapery, curtains & sheers',
            'Roman & woven shades',
            'Solar shades',
            'Drapery Hardware',
            'Somfy Motorization',
            'Lutron Automation',
            'Hunter Douglas Blinds & Shades',
            'Conrad',
            'Bedding, pillows & cushions',
            'Light upholstery (chair pads & headboards)',
          ]}
          ctaText="Explore Window Coverings"
          ctaHref="/windows"
          imageSrc="/images/windows/windows-01.jpg"
          imageAlt="Custom linen drapery panels with hand-stitched details in a coastal living room"
        />
        <ServiceCard
          label="Bedding Couture"
          headline="A bed that tells a story."
          description="Bespoke duvets, coverlets, shams, and pillow arrangements — composed as a complete textile statement. Every piece tailored to your bed's exact proportions and your sense of beauty."
          details={[
            'Custom duvet covers & inserts',
            'Bespoke Bedspreads',
            'Pillow shams',
            'Custom throw pillows & cushions — Interior & Exterior',
          ]}
          ctaText="Explore Bedding Couture"
          ctaHref="/bedding"
          imageSrc="/images/bedding/bedding-01.jpg"
          imageAlt="Bespoke Belgian linen bedding ensemble in a Monterey Bay coastal bedroom"
          reversed
        />
      </section>

      {/* ─── Handcrafted Beauty ───────────────────────────────── */}
      <section
        className="py-24 md:py-36 px-6 md:px-10 bg-stone"
        aria-labelledby="handcrafted-heading"
      >
        <FadeUp className="max-w-3xl mx-auto text-center">
          <SectionLabel>Idea Showroom</SectionLabel>
          <h2
            id="handcrafted-heading"
            className="font-cormorant font-light text-charcoal text-4xl md:text-5xl leading-tight mb-8"
          >
            Handcrafted Beauty
          </h2>
          <p className="font-jost font-light text-muted text-base leading-relaxed max-w-xl mx-auto">
            Our &ldquo;Idea Showroom&rdquo; is available by appointment to offer inspiration.
            The Showroom contains samples of most anything you will need to fine tune your
            custom project. We work with you to design, measure, and prep your estimate.
          </p>
        </FadeUp>
      </section>

      {/* ─── 4. Portfolio preview ─────────────────────────────── */}
      <section
        className="py-24 md:py-32 px-6 md:px-10 bg-stone"
        aria-labelledby="portfolio-preview-heading"
      >
        <div className="max-w-8xl mx-auto">
          <FadeUp className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <SectionLabel>Selected Work</SectionLabel>
              <h2
                id="portfolio-preview-heading"
                className="font-cormorant font-light text-charcoal text-4xl md:text-5xl leading-tight"
              >
                Crafted for rooms
                <br />
                <em className="italic">across the Central Coast.</em>
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="font-jost font-medium text-[0.6875rem] tracking-[0.18em] uppercase text-brass hover:text-charcoal transition-colors duration-200 flex items-center gap-3 flex-shrink-0"
            >
              View all work
              <span className="block w-6 h-px bg-current" aria-hidden="true" />
            </Link>
          </FadeUp>
          {/* 3×2 uniform grid — 6 equal cells, fixed height, no spanning */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {portfolioPreview.map((item, i) => (
              <div
                key={i}
                className="relative h-[260px] md:h-[360px] lg:h-[450px] overflow-hidden group bg-stone"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 33vw"
                />
                {item.label && (
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="font-jost font-medium text-[0.625rem] tracking-[0.2em] uppercase text-off-white">
                      {item.label}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-14">
            <Link
              href="/portfolio"
              className="font-jost font-medium text-[0.6875rem] tracking-[0.2em] uppercase px-8 py-4 border border-charcoal text-charcoal hover:bg-charcoal hover:text-off-white transition-all duration-300"
            >
              View the Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 5. Gallery ───────────────────────────────────────── */}
      <section
        className="py-24 md:py-32 px-6 md:px-10 bg-linen"
        aria-labelledby="gallery-heading"
      >
        <div className="max-w-8xl mx-auto">
          <FadeUp className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <SectionLabel>Gallery</SectionLabel>
              <h2
                id="gallery-heading"
                className="font-cormorant font-light text-charcoal text-4xl md:text-5xl leading-tight"
              >
                Work composed
                <br />
                <em className="italic">for real rooms.</em>
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="font-jost font-medium text-[0.6875rem] tracking-[0.18em] uppercase text-brass hover:text-charcoal transition-colors duration-200 flex items-center gap-3 flex-shrink-0"
            >
              View All Work
              <span className="block w-6 h-px bg-current" aria-hidden="true" />
            </Link>
          </FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {[
              { src: '/images/portfolio/portfolio-07.jpg', alt: 'Velvet drapery in deep forest green for a Carmel-by-the-Sea library — custom rod and finials', label: 'Window Coverings' },
              { src: '/images/portfolio/portfolio-08.jpg', alt: 'Complete bedroom ensemble — custom drapery, bedding couture, and custom throw pillows in a Monterey master suite', label: 'Windows & Bedding' },
              { src: '/images/portfolio/portfolio-09.jpg', alt: 'Relaxed roman shades in a natural linen blend for a Big Sur coastal retreat — cordless lift', label: 'Window Coverings' },
              { src: '/images/portfolio/portfolio-10.jpg', alt: 'Bespoke coverlet and custom Euro shams in a Carmel guest suite — washed Belgian linen ensemble', label: 'Bedding Couture' },
              { src: '/images/portfolio/portfolio-01.jpg', alt: 'Custom floor-to-ceiling linen drapery panels in a Santa Cruz coastal residence', label: 'Window Coverings' },
              { src: '/images/portfolio/portfolio-05.jpg', alt: 'Layered bedding with custom duvet, hand-quilted coverlet, and European square shams', label: 'Bedding Couture' },
            ].map((item, i) => (
              <div
                key={i}
                className="relative h-[260px] md:h-[360px] lg:h-[450px] overflow-hidden group bg-stone"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="font-jost font-medium text-[0.625rem] tracking-[0.2em] uppercase text-off-white">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-14">
            <Link
              href="/portfolio"
              className="font-jost font-medium text-[0.6875rem] tracking-[0.2em] uppercase px-8 py-4 border border-charcoal text-charcoal hover:bg-charcoal hover:text-off-white transition-all duration-300"
            >
              View the Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 6. Process ───────────────────────────────────────── */}
      <section
        className="py-24 md:py-36 px-6 md:px-10 bg-charcoal"
        aria-labelledby="process-heading"
      >
        <div className="max-w-8xl mx-auto">
          <FadeUp className="mb-16 md:mb-20">
            <SectionLabel>How We Work</SectionLabel>
            <h2
              id="process-heading"
              className="font-cormorant font-light text-off-white text-4xl md:text-5xl leading-tight max-w-lg"
            >
              A process designed around your project.
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
            {processSteps.map((step, i) => (
              <ProcessStep key={step.number} {...step} index={i} />
            ))}
          </div>
          <FadeUp delay={0.45} className="mt-16">
            <Button href="/process" variant="light">
              Learn About Our Process
            </Button>
          </FadeUp>
        </div>
      </section>

      {/* ─── 7. About teaser ──────────────────────────────────── */}
      <section className="bg-linen" aria-labelledby="about-teaser-heading">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[560px]">
          <FadeUp className="relative min-h-[420px] lg:min-h-full overflow-hidden bg-stone">
            <Image
              src="/images/about/about-01.jpg"
              alt="Our maker at work in the Santa Cruz atelier — measuring, cutting, and hand-finishing custom window treatments"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </FadeUp>
          <FadeUp
            delay={0.2}
            className="flex flex-col justify-center px-8 md:px-14 lg:px-20 py-20 md:py-28"
          >
            <SectionLabel>The Studio</SectionLabel>
            <h2
              id="about-teaser-heading"
              className="font-cormorant font-light text-charcoal text-4xl md:text-5xl leading-tight mb-6"
            >
              Made by one person.
              <br />
              <em className="italic">Designed for yours.</em>
            </h2>
            <p className="font-jost font-light text-muted text-sm md:text-base leading-relaxed mb-5 max-w-sm">
              Every piece that leaves our workroom was designed, cut, and finished by hand. We are
              a small atelier by intention — because precision cannot be scaled.
            </p>
            <p className="font-jost font-light text-muted text-sm md:text-base leading-relaxed mb-10 max-w-sm">
              We work with a limited number of clients each season to ensure that every project
              receives the attention it deserves.
            </p>
            <div>
              <Button href="/about" variant="primary">
                Our Story
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ─── 8. Testimonial ───────────────────────────────────── */}
      <section
        className="py-24 md:py-36 px-6 md:px-10 bg-stone"
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

      {/* ─── 9. Trade callout ─────────────────────────────────── */}
      <section
        className="py-16 md:py-20 px-6 md:px-10 bg-linen"
        style={{ borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)' }}
        aria-labelledby="trade-callout-heading"
      >
        <FadeUp className="max-w-8xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <SectionLabel>Trade Program</SectionLabel>
            <h2
              id="trade-callout-heading"
              className="font-cormorant font-light text-charcoal text-3xl md:text-4xl leading-tight max-w-xl"
            >
              We work with interior designers, architects, and luxury builders throughout the
              Central Coast.
            </h2>
          </div>
          <div className="flex-shrink-0">
            <Button href="/trade" variant="primary">
              Explore the Trade Program
            </Button>
          </div>
        </FadeUp>
      </section>

      {/* ─── 10. Closing CTA ──────────────────────────────────── */}
      <section
        className="py-32 md:py-44 px-6 md:px-10 bg-charcoal text-center"
        aria-label="Consultation call to action"
      >
        <FadeUp className="max-w-3xl mx-auto">
          <span className="block w-8 h-px bg-brass mx-auto mb-14" aria-hidden="true" />
          <p className="font-cormorant font-light text-off-white text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.12] mb-14">
            Every room deserves one thing
            <br />
            <em className="italic text-brass">made just for it.</em>
          </p>
          <Button href="/contact" variant="light">
            Begin a Private Consultation
          </Button>
          <p className="font-jost font-light text-muted text-xs mt-10 tracking-widest uppercase">
            Santa Cruz &nbsp;·&nbsp; Monterey Bay &nbsp;·&nbsp; Silicon Valley
          </p>
        </FadeUp>
      </section>
    </>
  )
}
