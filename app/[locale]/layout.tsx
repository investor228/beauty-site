import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { Locale } from '@/lib/i18n'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'Beauty Salon',
  description: 'Premium beauty salon',
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  return (
    <html lang={locale}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
