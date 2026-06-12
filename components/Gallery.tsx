'use client'

const photos = [
  { src: '/images/gallery-1.jpg', alt: 'Salon interior 1' },
  { src: '/images/gallery-2.jpg', alt: 'Salon interior 2' },
  { src: '/images/gallery-3.jpg', alt: 'Salon interior 3' },
  { src: '/images/gallery-4.jpg', alt: 'Salon interior 4' },
]

export default function Gallery({ t }: { t: any }) {
  return (
    <section id="gallery" className="py-24 bg-[#FAF7F4]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2C2C2C] mb-4">{t.gallery.title}</h2>
          <p className="text-[#6B6B6B]">{t.gallery.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {photos.map((photo, i) => (
            <div key={i} className="rounded-2xl overflow-hidden aspect-[4/3] bg-[#F2E8E7]">
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  const el = e.currentTarget as HTMLImageElement
                  el.style.display = 'none'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
