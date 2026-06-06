import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: {
    default: 'IDRAAK | Spiritual & Astrological Guidance by Raees Khan',
    template: '%s | IDRAAK Spiritual Guidance',
  },
  description:
    'Get personalized astrology, palmistry, numerology, and gemstone consultations from Raees Khan — a certified astrologist and gem therapist with 12+ years of experience.',
  keywords: [
    'astrology consultation',
    'palmistry reading',
    'numerology',
    'gemstone therapy',
    'spiritual guidance',
    'relationship consultation',
    'career consultation',
    'Raees Khan astrologer',
    'IDRAAK',
    'online astrology Pakistan',
  ],
  authors: [{ name: 'Raees Khan', url: 'https://idraak.com' }],
  creator: 'Raees Khan',
  metadataBase: new URL('https://idraak.com'),
  openGraph: {
    title: 'IDRAAK | Spiritual & Astrological Guidance by Raees Khan',
    description:
      'Personalized astrology, palmistry, numerology, and gemstone consultations from a certified expert with 12+ years of experience.',
    url: 'https://idraak.com',
    siteName: 'IDRAAK Spiritual Guidance',
    images: [
      {
        url: '/idraak-logo.png',
        width: 1200,
        height: 630,
        alt: 'IDRAAK Spiritual Guidance Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IDRAAK | Spiritual & Astrological Guidance',
    description:
      'Personalized astrology, palmistry, numerology, and gemstone consultations from a certified expert.',
    images: ['/idraak-logo.png'],
  },
  icons: {
    icon: '/idraak-logo.png',
    apple: '/idraak-logo.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`bg-[#0B0C10] ${cormorant.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-[#0B0C10] text-[#FFFFFF]">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
