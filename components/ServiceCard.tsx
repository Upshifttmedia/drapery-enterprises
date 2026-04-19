'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import Button from './Button'
import SectionLabel from './SectionLabel'

interface ServiceCardProps {
  label: string
  headline: string
  description: string
  details: string[]
  ctaText: string
  ctaHref: string
  imageSrc: string
  imageAlt: string
  reversed?: boolean
}

export default function ServiceCard({
  label,
  headline,
  description,
  details,
  ctaText,
  ctaHref,
  imageSrc,
  imageAlt,
  reversed = false,
}: ServiceCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-8% 0px' })

  return (
    <article ref={ref} className="grid grid-cols-1 lg:grid-cols-2">
      {/* Image */}
      <motion.div
        className={`relative aspect-[4/3] lg:aspect-auto lg:min-h-[560px] overflow-hidden bg-stone ${
          reversed ? 'lg:order-2' : 'lg:order-1'
        }`}
        initial={{ opacity: 0, x: reversed ? 30 : -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-center transition-transform duration-700 hover:scale-[1.04]"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className={`flex flex-col justify-center px-8 md:px-14 lg:px-16 py-16 md:py-20 bg-stone ${
          reversed ? 'lg:order-1' : 'lg:order-2'
        }`}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <SectionLabel>{label}</SectionLabel>
        <h2 className="font-cormorant font-light text-charcoal text-4xl md:text-5xl leading-tight mb-6">
          {headline}
        </h2>
        <p className="font-jost font-light text-muted text-sm md:text-base leading-relaxed mb-8 max-w-sm">
          {description}
        </p>
        <ul className="flex flex-col gap-3 mb-10" aria-label="Service details">
          {details.map((detail, i) => (
            <li key={i} className="flex items-center gap-4 font-jost font-light text-sm text-charcoal">
              <span className="block w-4 h-px bg-brass flex-shrink-0" aria-hidden="true" />
              {detail}
            </li>
          ))}
        </ul>
        <div>
          <Button href={ctaHref} variant="primary">
            {ctaText}
          </Button>
        </div>
      </motion.div>
    </article>
  )
}
