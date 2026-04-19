'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'

export interface PortfolioItem {
  src: string
  alt: string
  label?: string
  category?: string
}

interface PortfolioGridProps {
  items: PortfolioItem[]
  showViewAll?: boolean
}

// Editorial grid for homepage preview (up to 5 items in a 3-col grid):
//   Row 1: item 0 (col-span-2, wide) + item 1 (portrait) = 3 cols
//   Row 2: items 2, 3, 4 (3 × portrait)                  = 3 cols
// No orphans, no gaps.
function getItemClass(index: number): string {
  if (index === 0) return 'md:col-span-2 aspect-[16/7]'
  return 'aspect-[3/4]'
}

export default function PortfolioGrid({ items, showViewAll = false }: PortfolioGridProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-5% 0px' })

  return (
    <div ref={ref}>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            className={`relative overflow-hidden group bg-stone ${getItemClass(i)}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
              sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
            />
            {item.label && (
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-6">
                <span className="font-jost font-medium text-[0.625rem] tracking-[0.2em] uppercase text-off-white">
                  {item.label}
                </span>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {showViewAll && (
        <div className="flex justify-center mt-14">
          <Link
            href="/portfolio"
            className="font-jost font-medium text-[0.6875rem] tracking-[0.2em] uppercase px-8 py-4 border border-charcoal text-charcoal hover:bg-charcoal hover:text-off-white transition-all duration-300"
          >
            View the Full Portfolio
          </Link>
        </div>
      )}
    </div>
  )
}
