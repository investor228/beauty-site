export default function Hero({ t }: { t: any }) {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background image placeholder - replace src with real photo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />
      {/* Warm overlay */}
      <div className="absolute inset-0 bg-white/60" />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-[#2C2C2C] leading-tight mb-6">
          {t.hero.title}
        </h1>
        <p className="text-lg text-[#6B6B6B] mb-10 max-w-xl mx-auto">
          {t.hero.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#booking"
            className="bg-[#C4807A] text-white px-8 py-4 rounded-full text-base font-medium hover:bg-[#A86860] transition-colors"
          >
            {t.hero.cta}
          </a>
          <a
            href="#services"
            className="border border-[#C4807A] text-[#C4807A] px-8 py-4 rounded-full text-base font-medium hover:bg-[#F2E8E7] transition-colors"
          >
            {t.hero.services}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#C4807A] animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
