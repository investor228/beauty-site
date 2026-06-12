import { Locale, getT } from '@/lib/i18n'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Gallery from '@/components/Gallery'
import BookingForm from '@/components/BookingForm'
import Footer from '@/components/Footer'

export default function Home({ params }: { params: { locale: Locale } }) {
  const t = getT(params.locale)
  return (
    <main>
      <Navbar t={t} locale={params.locale} />
      <Hero t={t} />
      <Services t={t} />
      <Gallery t={t} />
      <BookingForm t={t} />
      <Footer t={t} />
    </main>
  )
}
