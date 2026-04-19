import type { Metadata } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-jost',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Drapery Enterprises | Custom Window Treatments & Bedding Couture | Santa Cruz',
    template: '%s | Drapery Enterprises',
  },
  description:
    'A luxury design atelier for bespoke window treatments and bedding couture. Serving Santa Cruz, Monterey Bay, and the Silicon Valley corridor. Every piece fabricated by hand.',
  keywords: [
    'custom window treatments Santa Cruz',
    'bespoke drapery Monterey Bay',
    'custom bedding Santa Cruz',
    'luxury window treatments',
    'drapery workroom Central Coast',
    'interior design atelier',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Drapery Enterprises',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
