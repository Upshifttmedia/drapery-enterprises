import type { Metadata } from 'next'
import Image from 'next/image'
import HeroSection from '@/components/HeroSection'
import SectionLabel from '@/components/SectionLabel'
import FadeUp from '@/components/FadeUp'
import Button from '@/components/Button'
import TestimonialBlock from '@/components/TestimonialBlock'

export const metadata: Metadata = {
  title: 'Custom Drapery & Bespoke Window Treatments | Monterey Bay',
  description:
    'Custom drapery, roman shades, and bespoke window treatments for the Monterey Bay and Santa Cruz corridor. Every panel fabricated by hand to your exact specifications.',
}

const treatments = [
  {
    title: 'Custom Drapery',
    description:
      'Floor-to-ceiling panels from French Pleat to Ripple Fold, each panel is tailored to your exact vision and specifications. Cut, sewn, and finished in our Santa Cruz workroom.',
    imageSrc: '/images/windows/windows-01.jpg',
    imageAlt:
      'Custom pinch-pleat linen drapery panels, floor-to-ceiling, in a Carmel coastal residence',
  },
  {
    title: 'Roman Shades',
    description:
      'Flat, relaxed, or hobbled — roman shades offer architectural presence at the window. We fabricate in any fabric, with blackout or privacy lining, cord lift, cordless lift, or automated operation.',
    imageSrc: '/images/windows/roman-shades-new.jpg',
    imageAlt:
      'Tailored flat roman shade in a heritage stripe linen, mounted inside the window casement',
  },
  {
    title: 'Sheers & Casements',
    description:
      'The most underestimated layer in a room. A beautifully chosen sheer softens light, adds depth, and frames a view without hiding it.',
    imageSrc: '/images/windows/windows-02.jpg',
    imageAlt:
      'Belgian linen sheer panels filtering afternoon light in a Santa Cruz living room',
  },
  {
    title: 'Cornice Boxes & Valances, Swags and Cascades',
    description:
      'Custom cornices are upholstered fabric on a board, always one of a kind. Built to suit, we can make them simple or fancy.',
    imageSrc: '/images/windows/cornices.jpg',
    imageAlt:
      'Custom cornice box and valance — upholstered fabric on a board, fabricated in the Drapery Enterprises Santa Cruz workroom',
  },
  {
    title: 'Bedding, Pillows & Cushions',
    description:
      'Custom bedding, decorative pillows, and cushions — interior and exterior. Every piece fabricated to your specifications in our Santa Cruz workroom.',
    imageSrc: '/images/bedding/bedding-01.jpg',
    imageAlt:
      'Custom pillows and cushions fabricated in the Drapery Enterprises Santa Cruz workroom',
  },
  {
    title: 'Light Upholstery',
    description:
      'Chair pads and headboards upholstered to your exact specifications — any fabric, any finish.',
    imageSrc: '/images/windows/windows-03.jpg',
    imageAlt:
      'Light upholstery — custom chair pad and headboard fabricated in the Drapery Enterprises workroom',
  },
]

const materials = [
  {
    fabric: 'Linen',
    description:
      'Belgian and European linen. The most honest fabric we know — it takes light beautifully, drapes with quiet authority, and ages with dignity.',
  },
  {
    fabric: 'Silk',
    description:
      'For rooms that warrant it. We source cultivated and dupioni silks from heritage textile houses for panels that catch light in a way no other fabric does.',
  },
  {
    fabric: 'Performance Fabrics',
    description:
      'For coastal environments, high-UV rooms, or households with active lives. Beautiful textiles engineered to outlast the view.',
  },
  {
    fabric: 'Wool & Velvet',
    description:
      'Weight, warmth, and depth for rooms that call for it. Cut-velvet and woven wool drapery that makes a room feel complete.',
  },
]

export default function WindowsPage() {
  return (
    <>
      <HeroSection
        imageSrc="/images/windows/windows-01.jpg"
        imageAlt="Custom linen drapery in a Monterey Bay coastal home — floor-to-ceiling panels with hand-stitched leading edges"
        label="Window Coverings"
        headline="A window is an architectural moment. Treat it as one."
        subheadline="Custom drapery, shades, and sheers — composed for proportion, light, and your singular view."
        ctaText="Begin a Private Consultation"
        ctaHref="/contact"
      />

      {/* Treatment types */}
      <section
        className="bg-stone py-24 md:py-32"
        aria-labelledby="treatment-types-heading"
      >
        <div className="max-w-8xl mx-auto px-6 md:px-10">
          <FadeUp className="mb-16">
            <SectionLabel>What We Make</SectionLabel>
            <h2
              id="treatment-types-heading"
              className="font-cormorant font-light text-charcoal text-4xl md:text-5xl leading-tight max-w-md"
            >
              Every treatment, tailored.
            </h2>
          </FadeUp>

          <div className="flex flex-col gap-0">
            {treatments.map((treatment, i) => (
              <FadeUp key={i} className="grid grid-cols-1 md:grid-cols-2">
                <div
                  className={`relative aspect-[4/3] overflow-hidden bg-stone ${
                    i % 2 !== 0 ? 'md:order-2' : 'md:order-1'
                  }`}
                >
                  <Image
                    src={treatment.imageSrc}
                    alt={treatment.imageAlt}
                    fill
                    className="object-cover object-center hover:scale-[1.04] transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div
                  className={`flex flex-col justify-center px-8 md:px-14 py-14 md:py-20 bg-linen ${
                    i % 2 !== 0 ? 'md:order-1' : 'md:order-2'
                  }`}
                >
                  <h3 className="font-cormorant font-light text-charcoal text-3xl md:text-4xl leading-tight mb-4">
                    {treatment.title}
                  </h3>
                  <span className="block w-8 h-px bg-brass mb-6" aria-hidden="true" />
                  <p className="font-jost font-light text-muted text-sm md:text-base leading-relaxed max-w-sm">
                    {treatment.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Hardware */}
      <section
        className="py-24 md:py-32 px-6 md:px-10 bg-charcoal"
        aria-labelledby="hardware-heading"
      >
        <div className="max-w-8xl mx-auto">
          <FadeUp className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <SectionLabel>Hardware</SectionLabel>
              <h2
                id="hardware-heading"
                className="font-cormorant font-light text-off-white text-4xl md:text-5xl leading-tight mb-8"
              >
                The rod is part of the design.
              </h2>
              <p className="font-jost font-light text-muted text-base leading-relaxed mb-6 max-w-sm">
                We specify and source custom hardware as needed — forged iron, brushed
                brass, unlacquered bronze, or hand-turned wood. The hardware should feel like it
                was always there.
              </p>
              <p className="font-jost font-light text-muted text-base leading-relaxed max-w-sm">
                We also partner with leading automation brands for clients who want smart-home
                integration without sacrificing the beauty of the treatment.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              {[
                'Forged & cast iron rods',
                'Unlacquered brass & bronze',
                'Hand-turned hardwood',
                'Custom finials & brackets',
                'Automated lift systems',
                'Smart home integration',
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 py-4"
                  style={{ borderBottom: '1px solid rgba(250, 250, 248, 0.08)' }}
                >
                  <span className="block w-4 h-px bg-brass flex-shrink-0" aria-hidden="true" />
                  <span className="font-jost font-light text-sm text-muted">{item}</span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Materials */}
      <section
        className="py-24 md:py-32 px-6 md:px-10 bg-linen"
        aria-labelledby="materials-heading"
      >
        <div className="max-w-4xl mx-auto">
          <FadeUp>
            <SectionLabel>Materials</SectionLabel>
            <h2
              id="materials-heading"
              className="font-cormorant font-light text-charcoal text-4xl md:text-5xl leading-tight mb-14"
            >
              Fabric as a design decision.
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-0">
            {materials.map(({ fabric, description }, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div
                  className="py-8"
                  style={{ borderTop: '1px solid var(--rule)' }}
                >
                  <h3 className="font-cormorant font-light text-charcoal text-2xl mb-3">
                    {fabric}
                  </h3>
                  <p className="font-jost font-light text-muted text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section
        className="py-24 md:py-32 px-6 md:px-10 bg-stone"
        aria-label="Client testimonial"
      >
        <div className="max-w-8xl mx-auto">
          <TestimonialBlock
            quote="Our relationship with Drapery Enterprises goes back over 70 years. My father worked with the founders in the early 50's, and I continued to work with Drapery Enterprises when Wendi and her parents took over the business in 2003. For over 80 years, Martino Interiors' business philosophy has been to be loyal to our suppliers and workrooms who we trust and who provide quality products. Wendi and her staff have continually produced beautiful window coverings and provided excellent customer service. I feel very fortunate that over 7 decades we've been able to continue our relationship with Wendi and Drapery Enterprises."
            client="Ron Martino"
            city="Martino Interiors, Los Gatos"
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
            Ready to compose your windows?
          </h2>
          <p className="font-jost font-light text-muted text-sm leading-relaxed mb-10 max-w-xs mx-auto">
            A private consultation is the first step. We&rsquo;ll visit your space, understand
            your light, and begin designing.
          </p>
          <Button href="/contact" variant="primary">
            Begin a Private Consultation
          </Button>
          <p className="font-jost font-light text-xs text-muted mt-8 tracking-wider">
            Serving Monterey Bay &nbsp;·&nbsp; Santa Cruz &nbsp;·&nbsp; Bay Area
          </p>
        </FadeUp>
      </section>
    </>
  )
}
