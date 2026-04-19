'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface ProcessStepProps {
  number: string
  label: string
  title: string
  description: string
  index: number
}

export default function ProcessStep({ number, label, title, description, index }: ProcessStepProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-5% 0px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col"
    >
      <div className="flex items-start gap-5 mb-8">
        <span
          className="font-cormorant text-[5rem] leading-[0.85] font-light text-brass/25 flex-shrink-0 select-none"
          aria-hidden="true"
        >
          {number}
        </span>
        <div className="pt-5">
          <span className="block font-jost font-medium text-[0.625rem] tracking-[0.22em] uppercase text-brass mb-2">
            {label}
          </span>
          <h3 className="font-cormorant font-light text-off-white text-3xl md:text-[2.25rem] leading-tight">
            {title}
          </h3>
        </div>
      </div>
      <div
        className="pl-[4.5rem] md:pl-20"
        style={{ borderTop: '1px solid rgba(250, 250, 248, 0.08)' }}
      >
        <p className="font-jost font-light text-muted text-sm md:text-base leading-relaxed max-w-xs pt-6">
          {description}
        </p>
      </div>
    </motion.div>
  )
}
