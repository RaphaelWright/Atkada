import type { Metadata } from 'next'
import { Montserrat, Open_Sans } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Atkada Company Limited - Secure Your Future',
  description: 'Trusted land sales, real estate, and rentals in Ghana. Litigation-free lands with flexible payment plans up to 3 years.',
  keywords: 'land sales Ghana, real estate Ghana, rentals Ghana, Atkada Company, property development, Tsopoli, Apollonia, Afienya',
  authors: [{ name: 'Atkada Company Limited' }],
  creator: 'Atkada Company Limited',
  publisher: 'Atkada Company Limited',
  openGraph: {
    title: 'Atkada Company Limited - Secure Your Future',
    description: 'Trusted land sales, real estate, and rentals in Ghana',
    url: 'https://atkadaghana.com',
    siteName: 'Atkada Company Limited',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atkada Company Limited - Secure Your Future',
    description: 'Trusted land sales, real estate, and rentals in Ghana',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <body className="font-body">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
