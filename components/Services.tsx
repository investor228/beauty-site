const icons = [
  // Scissors
  <svg key="scissors" className="w-6 h-6 text-[#C4807A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.121 14.121L19 19m-7-7l7-7-7 7zm-5.657 5.657a4 4 0 01-5.657-5.657 4 4 0 015.657 5.657zM6.343 6.343a4 4 0 000 5.657" />
  </svg>,
  // Sparkles
  <svg key="sparkles" className="w-6 h-6 text-[#C4807A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>,
  // Heart
  <svg key="heart" className="w-6 h-6 text-[#C4807A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>,
  // Crown
  <svg key="crown" className="w-6 h-6 text-[#C4807A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 19l2-7 5 4 5-4 2 7H5zm2 0h10" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10l4.5 3.5L12 5l4.5 8.5L21 10" />
  </svg>,
]

export default function Services({ t }: { t: any }) {
  return (
    <section id="services" className="py-24 bg-[#FAF7F4]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2C2C2C] mb-4">{t.services.title}</h2>
          <p className="text-[#6B6B6B] max-w-xl mx-auto">{t.services.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.services.items.map((item: any, i: number) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 flex flex-col gap-4 border border-[#F2E8E7] hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-[#F2E8E7] flex items-center justify-center">
                {icons[i]}
              </div>
              <div>
                <h3 className="font-semibold text-[#2C2C2C] mb-2">{item.title}</h3>
                <p className="text-sm text-[#6B6B6B] leading-relaxed">{item.desc}</p>
              </div>
              <p className="text-[#C4807A] font-medium mt-auto">
                {t.services.from} {item.price} {t.services.currency}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
