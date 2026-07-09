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
            <div className="mb-4">
              <Image
                src="/images/DE_logo.png"
                alt="Drapery Enterprises"
                height={40}
                width={167}
                style={{ height: 40, width: 'auto' }}
              />
            </div>
            <p className="font-jost font-light text-sm text-muted leading-relaxed max-w-xs mb-6">
              A design atelier for bespoke window coverings and bedding couture.
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
                { href: '/windows', label: 'Window Coverings' },
                { href: '/bedding', label: 'Bedding Couture' },
                { href: '/process', label: 'The Process' },
                { href: '/portfolio', label: 'Portfolio' },
                { href: '/about', label: 'Our Story' },
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
              Tell us about your project
            </p>
            <Link
              href="/contact"
              className="inline-block font-jost font-medium text-[0.625rem] tracking-[0.2em] uppercase px-6 py-3 border border-brass text-brass hover:bg-brass hover:text-off-white transition-all duration-300"
            >
              Tell Us About Your Project
            </Link>
          </div>
        </div>

        {/* Certification logos */}
        <div
          className="py-8 mb-2 flex flex-wrap items-center gap-6"
          style={{ borderTop: '1px solid rgba(250, 250, 248, 0.1)' }}
        >
          <span className="font-jost font-light text-[0.5625rem] tracking-[0.18em] uppercase text-muted mr-2">
            Certifications
          </span>
          <Image
            src="/images/logos/epa-lead-safe.png"
            alt="EPA Lead-Safe Certified Firm"
            height={36}
            width={80}
            style={{ height: 36, width: 'auto', opacity: 0.6 }}
          />
          <Image
            src="/images/logos/wcaa.png"
            alt="WCAA — Window Coverings Association of America"
            height={36}
            width={80}
            style={{ height: 36, width: 'auto', opacity: 0.6 }}
          />
          <Image
            src="/images/logos/iwce.png"
            alt="IWCE — International Window Coverings Expo"
            height={36}
            width={80}
            style={{ height: 36, width: 'auto', opacity: 0.6 }}
          />
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
