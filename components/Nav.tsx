'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '/windows', label: 'Windows' },
  { href: '/bedding', label: 'Bedding' },
  { href: '/process', label: 'Process' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'Studio' },
  { href: '/trade', label: 'Trade' },
]

// Pages with no full-bleed hero — nav starts in its scrolled (dark) state
const LIGHT_BG_PAGES = ['/contact', '/portfolio']

export default function Nav() {
  const pathname = usePathname()
  const noHero = LIGHT_BG_PAGES.includes(pathname)
  const [scrolled, setScrolled] = useState(noHero)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    // When navigating to/from a no-hero page, reset scrolled state correctly
    setScrolled(noHero || window.scrollY > 60)
  }, [pathname, noHero])

  useEffect(() => {
    const handleScroll = () => setScrolled(noHero || window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [noHero])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-off-white/95 backdrop-blur-sm'
            : 'bg-transparent'
        }`}
        style={scrolled ? { borderBottom: '1px solid var(--rule)' } : {}}
      >
        <div className="max-w-8xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
          <Link href="/" className="relative z-10 flex items-center" aria-label="Drapery Enterprises — Home">
            <Image
              src="/images/logo.jpg"
              alt="Drapery Enterprises — Since 1948, From Inspiration to Installation"
              width={52}
              height={52}
              className={`transition-all duration-300 ${
                scrolled
                  ? 'mix-blend-multiply opacity-90'
                  : '[filter:invert(1)_brightness(2)] opacity-90'
              }`}
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8" aria-label="Primary navigation">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`font-jost font-medium text-[0.6875rem] tracking-[0.18em] uppercase transition-colors duration-300 ${
                  pathname === href
                    ? 'text-brass'
                    : scrolled
                    ? 'text-muted hover:text-charcoal'
                    : 'text-off-white/80 hover:text-off-white'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`font-jost font-medium text-[0.6875rem] tracking-[0.18em] uppercase px-5 py-2.5 border transition-all duration-300 ${
                pathname === '/contact'
                  ? 'bg-brass border-brass text-off-white'
                  : scrolled
                  ? 'border-brass text-brass hover:bg-brass hover:text-off-white'
                  : 'border-off-white text-off-white hover:bg-off-white hover:text-charcoal'
              }`}
            >
              Inquire
            </Link>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 relative z-10"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-6 h-px transition-all duration-300 origin-center ${
                scrolled ? 'bg-charcoal' : 'bg-off-white'
              } ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}
            />
            <span
              className={`block w-6 h-px transition-all duration-300 ${
                scrolled ? 'bg-charcoal' : 'bg-off-white'
              } ${menuOpen ? 'opacity-0 scale-x-0' : ''}`}
            />
            <span
              className={`block w-6 h-px transition-all duration-300 origin-center ${
                scrolled ? 'bg-charcoal' : 'bg-off-white'
              } ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-linen flex flex-col"
          >
            <div className="flex flex-col px-6 pt-24 pb-12 gap-0 h-full overflow-y-auto">
              {navLinks.map(({ href, label }, i) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 * i }}
                  style={{ borderBottom: '1px solid var(--rule)' }}
                >
                  <Link
                    href={href}
                    className="block font-cormorant text-4xl font-light text-charcoal py-6 hover:text-brass transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.35 }}
                className="mt-10"
              >
                <Link
                  href="/contact"
                  className="font-jost font-medium text-sm tracking-[0.2em] uppercase text-brass flex items-center gap-4"
                >
                  Begin a Private Consultation
                  <span className="block w-8 h-px bg-brass" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
