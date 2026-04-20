'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import Button from './Button'
import SectionLabel from './SectionLabel'

interface HeroSectionProps {
  imageSrc: string
  imageAlt: string
  label?: string
  headline: string
  subheadline?: string
  ctaText?: string
  ctaHref?: string
  minHeight?: string
  /** CSS object-position for the hero image, e.g. 'center top', '50% 30%'. Defaults to 'center center'. */
  objectPosition?: string
  /** Optional separate image for mobile (below md breakpoint). Falls back to imageSrc if not provided. */
  imageSrcMobile?: string
}

export default function HeroSection({
  imageSrc,
  imageAlt,
  label,
  headline,
  subheadline,
  ctaText,
  ctaHref = '/contact',
  minHeight = 'min-h-screen',
  objectPosition = 'center center',
  imageSrcMobile,
}: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })
  // Parallax: image drifts upward slower than the scroll, creating depth
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  return (
    <section
      ref={containerRef}
      className={`relative overflow-hidden ${minHeight} flex items-end`}
      aria-label="Hero"
    >
      {/* Parallax image layer */}
      <motion.div className="absolute inset-0 scale-110" style={{ y }}>
        {/* Mobile image — shown below md breakpoint only */}
        {imageSrcMobile && (
          <div className="absolute inset-0 md:hidden">
            <Image
              src={imageSrcMobile}
              alt={imageAlt}
              fill
              priority
              quality={90}
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
        )}
        {/* Desktop image — full size always, hidden on mobile when a mobile image is set */}
        <div className={`absolute inset-0 ${imageSrcMobile ? 'hidden md:block' : ''}`}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            quality={90}
            className="object-cover"
            style={{ objectPosition }}
            sizes="100vw"
          />
        </div>
        {/* Layered gradient: subtle vignette at top, strong fade at bottom for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/15 to-charcoal/20" />
        {/* Top overlay for nav legibility — always on */}
        <div
          className="absolute inset-x-0 top-0 h-32 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, transparent 100%)' }}
        />
      </motion.div>

      {/* Content pinned to bottom */}
      <div className="relative z-10 max-w-8xl mx-auto px-6 md:px-10 pb-20 md:pb-28 w-full">
        {label && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionLabel>{label}</SectionLabel>
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: label ? 0.35 : 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-cormorant font-light text-off-white text-5xl md:text-6xl lg:text-7xl xl:text-8xl max-w-4xl leading-[1.05] mb-6"
        >
          {headline}
        </motion.h1>

        {subheadline && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-jost font-light text-off-white/75 text-base md:text-lg max-w-md mb-10 leading-relaxed"
          >
            {subheadline}
          </motion.p>
        )}

        {ctaText && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <Button href={ctaHref} variant="light">
              {ctaText}
            </Button>
          </motion.div>
        )}
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 right-10 hidden md:flex flex-col items-center gap-3"
      >
        <span className="font-jost font-medium text-[0.5625rem] tracking-[0.25em] uppercase text-off-white/50 rotate-90 origin-center translate-x-3">
          Scroll
        </span>
        <span className="block w-px h-12 bg-off-white/30" />
      </motion.div>
    </section>
  )
}
