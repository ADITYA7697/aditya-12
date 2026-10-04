import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Aditya Dube — Full Stack Developer',
  description:
    'Portfolio of Aditya Dube, a BCA student and aspiring Full Stack Developer looking for an internship. Explore projects, skills, and get in touch.',
  generator: 'v0.app',
  keywords: [
    'Aditya Dube',
    'Full Stack Developer',
    'BCA',
    'Web Developer',
    'Portfolio',
    'Internship',
  ],
  authors: [{ name: 'Aditya Dube' }],
  openGraph: {
    title: 'Aditya Dube — Full Stack Developer',
    description:
      'BCA student and Full Stack Developer building modern web experiences.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#6c5ce7',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
