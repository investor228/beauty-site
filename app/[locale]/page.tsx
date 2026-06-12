import { Locale, getT } from '@/lib/i18n'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Gallery from '@/components/Gallery'
import BookingForm from '@/components/BookingForm'
import Footer from '@/components/Footer'

export default async function Home({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  const t = getT(locale)
  return (
    <main>
      <Navbar t={t} locale={locale} />
      <Hero t={t} />
      <Services t={t} />
      <Gallery t={t} />
      <BookingForm t={t} />
      <Footer t={t} />
    </main>
  )
}

export function generateStaticParams() {
  return [{ locale: 'ru' }, { locale: 'en' }]
}
