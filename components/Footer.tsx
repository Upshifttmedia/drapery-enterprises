import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-charcoal text-off-white">
      <div className="max-w-8xl mx-auto px-6 md:px-10 pt-16 md:pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" aria-label="Drapery Enterprises — Home">
              <Image
                src="/images/logo.jpg"
                alt="Drapery Enterprises logo — Since 1948"
                width={72}
                height={72}
                className="mb-5 [filter:invert(1)_brightness(2)] opacity-80"
              />
            </Link>
            <p className="font-jost font-light text-sm text-muted leading-relaxed max-w-xs mb-6">
              A design atelier for bespoke window treatments and bedding couture.
              Every piece fabricated by hand in our Santa Cruz workroom.
            </p>
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

          {/* Navigation */}
          <div>
            <p className="font-jost font-medium text-[0.625rem] tracking-[0.2em] uppercase text-brass mb-6">
              Atelier
            </p>
            <nav className="flex flex-col gap-3" aria-label="Footer navigation">
              {[
                { href: '/windows', label: 'Window Treatments' },
                { href: '/bedding', label: 'Bedding Couture' },
                { href: '/process', label: 'The Process' },
                { href: '/portfolio', label: 'Portfolio' },
                { href: '/about', label: 'Our Story' },
                { href: '/trade', label: 'Trade Program' },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="font-jost font-light text-sm text-muted hover:text-off-white transition-colors duration-200"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Consult CTA */}
          <div>
            <p className="font-jost font-medium text-[0.625rem] tracking-[0.2em] uppercase text-brass mb-6">
              Begin a Project
            </p>
            <p className="font-jost font-light text-sm text-muted leading-relaxed mb-8 max-w-[200px]">
              Private consultations available throughout the Santa Cruz, Monterey Bay, and Bay Area corridor.
            </p>
            <Link
              href="/contact"
              className="inline-block font-jost font-medium text-[0.625rem] tracking-[0.2em] uppercase px-6 py-3 border border-brass text-brass hover:bg-brass hover:text-off-white transition-all duration-300"
            >
              Inquire Now
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row justify-between gap-4"
          style={{ borderTop: '1px solid rgba(250, 250, 248, 0.1)' }}
        >
          <p className="font-jost font-light text-xs text-muted">
            © {year} Drapery Enterprises. All rights reserved.
          </p>
          <p className="font-jost font-light text-xs text-muted">
            Santa Cruz &nbsp;·&nbsp; Monterey Bay &nbsp;·&nbsp; Silicon Valley
          </p>
        </div>
      </div>
    </footer>
  )
}
