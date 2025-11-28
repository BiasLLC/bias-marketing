import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BIAS Writer - Write without distraction',
  description: 'A professional markdown editor for novelists, journalists, students, and bloggers. Organize your thoughts. Focus on your words. Export anywhere.',
  keywords: ['markdown editor', 'writing app', 'novel writing', 'screenwriting', 'distraction-free writing'],
  authors: [{ name: 'BIAS LLC' }],
  openGraph: {
    title: 'BIAS Writer - Write without distraction',
    description: 'A professional markdown editor for novelists, journalists, students, and bloggers.',
    url: 'https://www.bias.pub',
    siteName: 'BIAS Writer',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BIAS Writer - Write without distraction',
    description: 'A professional markdown editor for novelists, journalists, students, and bloggers.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
