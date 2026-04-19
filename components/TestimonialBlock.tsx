'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface TestimonialBlockProps {
  quote: string
  client: string
  city: string
  light?: boolean
}

export default function TestimonialBlock({ quote, client, city, light = false }: TestimonialBlockProps) {
  const ref = useRef<HTMLQuoteElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <motion.blockquote
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="max-w-3xl mx-auto text-center"
    >
      <span
        className="block font-cormorant text-brass text-[5rem] leading-[0.6] font-light mb-6 opacity-30 select-none"
        aria-hidden="true"
      >
        &ldquo;
      </span>
      <p
        className={`font-cormorant italic font-light text-2xl md:text-[1.875rem] lg:text-4xl leading-relaxed mb-10 ${
          light ? 'text-off-white' : 'text-charcoal'
        }`}
      >
        {quote}
      </p>
      <footer className="flex flex-col items-center gap-2">
        <span className="block w-8 h-px bg-brass" aria-hidden="true" />
        <cite className="not-italic font-jost font-medium text-[0.6875rem] tracking-[0.22em] uppercase text-brass mt-4">
          {client}
        </cite>
        <span className="font-jost font-light text-xs tracking-wider text-muted">{city}</span>
      </footer>
    </motion.blockquote>
  )
}
