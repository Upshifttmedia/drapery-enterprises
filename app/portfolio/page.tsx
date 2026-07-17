import type { Metadata } from 'next'
import Image from 'next/image'
import SectionLabel from '@/components/SectionLabel'
import FadeUp from '@/components/FadeUp'
import Button from '@/components/Button'

export const metadata: Metadata = {
  title: 'Portfolio | Selected Work',
  description:
    'Selected projects from the Drapery Enterprises atelier — custom window treatments and bedding couture for residential clients across Santa Cruz, Monterey Bay, and the Bay Area.',
}

const projects = [
  {
    src: '/images/portfolio/portfolio-06.jpg',
    alt: 'Sheer linen panels with solar shade undertreatment in a modern Santa Cruz kitchen',
    category: 'Window Coverings',
    location: 'Santa Cruz, CA',
    detail: 'Linen sheers · Solar shades · Motorized',
  },
  {
    src: '/images/portfolio/portfolio-07.jpg',
    alt: 'Velvet drapery in deep forest green for a Carmel-by-the-Sea library — custom rod and finials',
    category: 'Window Coverings',
    location: 'Carmel-by-the-Sea, CA',
    detail: 'Velvet drapery · Custom forged-iron rod',
  },
  {
    src: '/images/portfolio/portfolio-08.jpg',
    alt: 'Complete bedroom ensemble — custom drapery, bedding couture, and custom throw pillows in a Monterey master suite',
    category: 'Windows & Bedding',
    location: 'Monterey, CA',
    detail: 'Drapery · Bedding · Complete ensemble',
  },
  {
    src: '/images/portfolio/portfolio-09.jpg',
    alt: 'Relaxed roman shades in a natural linen blend for a Big Sur coastal retreat — cordless lift',
    category: 'Window Coverings',
    location: 'Big Sur, CA',
    detail: 'Roman shades · Natural linen · Cordless',
  },
  {
    src: '/images/portfolio/portfolio-10.jpg',
    alt: 'Bespoke coverlet and custom Euro shams in a Carmel guest suite — washed Belgian linen ensemble',
    category: 'Bedding Couture',
    location: 'Carmel, CA',
    detail: 'Coverlet · Euro shams · Washed linen',
  },
]

export default function PortfolioPage() {
  return (
    <>
      {/* Header */}
      <section
        className="pt-36 md:pt-44 pb-16 md:pb-20 px-6 md:px-10 bg-linen"
        aria-labelledby="portfolio-heading"
      >
        <FadeUp className="max-w-8xl mx-auto">
          <SectionLabel>Gallery</SectionLabel>
          <h1
            id="portfolio-heading"
            className="font-cormorant font-light text-charcoal text-5xl md:text-6xl lg:text-7xl leading-tight max-w-2xl"
          >
            Work composed
            <br />
            <em className="italic">for real rooms.</em>
          </h1>
          <p className="font-jost font-light text-muted text-sm md:text-base leading-relaxed mt-8 max-w-lg">
            Every project shown here began with a conversation. Every piece was designed for a
            specific window, a specific light, a specific life. None of it is staged.
          </p>
        </FadeUp>
      </section>

      {/* Grid — uniform 3-col, fixed 400px rows, 8px gap, no spanning */}
      <section
        className="px-6 md:px-10 pb-24 md:pb-32 bg-linen"
        aria-label="Portfolio gallery"
      >
        <div className="max-w-8xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {projects.map((project, i) => (
              <FadeUp
                key={i}
                delay={i * 0.04}
                className="relative h-[260px] md:h-[340px] lg:h-[400px] overflow-hidden bg-stone"
              >
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  className="object-cover object-center transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 33vw"
                />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram note */}
      <section
        className="py-16 md:py-20 px-6 md:px-10 bg-stone text-center"
        style={{ borderTop: '1px solid var(--rule)' }}
      >
        <FadeUp className="max-w-xl mx-auto">
          <p className="font-cormorant font-light text-charcoal text-2xl md:text-3xl leading-relaxed mb-6">
            More work is shared regularly on Instagram.
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-jost font-medium text-[0.6875rem] tracking-[0.2em] uppercase text-brass hover:text-charcoal transition-colors duration-200 flex items-center justify-center gap-4"
          >
            @draperyenterprises
            <span className="block w-6 h-px bg-current" aria-hidden="true" />
          </a>
        </FadeUp>
      </section>

      {/* CTA */}
      <section
        className="py-24 md:py-32 px-6 md:px-10 bg-charcoal text-center"
        aria-label="Consultation call to action"
      >
        <FadeUp className="max-w-2xl mx-auto">
          <h2 className="font-cormorant font-light text-off-white text-4xl md:text-5xl leading-tight mb-6">
            Your room, next.
          </h2>
          <p className="font-jost font-light text-muted text-sm leading-relaxed mb-10 max-w-sm mx-auto">
            Every project in this portfolio began with a single inquiry. Yours can too.
          </p>
          <Button href="/contact" variant="light">
            Begin a Consultation
          </Button>
        </FadeUp>
      </section>
    </>
  )
}
