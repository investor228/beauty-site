'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Locale } from '@/lib/i18n'

type Props = {
  t: any
  locale: Locale
}

export default function Navbar({ t, locale }: Props) {
  const [open, setOpen] = useState(false)
  const otherLocale = locale === 'ru' ? 'en' : 'ru'

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#F2E8E7]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-[#2C2C2C] font-semibold text-lg tracking-wide">Beauty Salon</span>

        <nav className="hidden md:flex gap-8 text-sm text-[#6B6B6B]">
          {[
            { href: '#services', label: t.nav.services },
            { href: '#gallery', label: t.nav.gallery },
            { href: '#booking', label: t.nav.booking },
            { href: '#contacts', label: t.nav.contacts },
          ].map(({ href, label }) => (
            <a key={href} href={href} className="hover:text-[#C4807A] transition-colors">
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href={`/${otherLocale}`}
            className="text-xs uppercase tracking-widest text-[#6B6B6B] hover:text-[#C4807A] transition-colors"
          >
            {otherLocale}
          </Link>
          <a
            href="#booking"
            className="hidden md:inline-flex bg-[#C4807A] text-white text-sm px-5 py-2 rounded-full hover:bg-[#A86860] transition-colors"
          >
            {t.nav.booking}
          </a>
          <button
            className="md:hidden text-[#2C2C2C]"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-[#F2E8E7] px-6 py-4 flex flex-col gap-4">
          {[
            { href: '#services', label: t.nav.services },
            { href: '#gallery', label: t.nav.gallery },
            { href: '#booking', label: t.nav.booking },
            { href: '#contacts', label: t.nav.contacts },
          ].map(({ href, label }) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="text-[#6B6B6B] hover:text-[#C4807A]">
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
