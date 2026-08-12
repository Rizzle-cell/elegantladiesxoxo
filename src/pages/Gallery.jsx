import { useEffect } from 'react'
import g1 from '@/assets/gallery-1.svg'
import g2 from '@/assets/gallery-2.svg'
import g3 from '@/assets/gallery-3.svg'
import g4 from '@/assets/gallery-4.svg'
import g5 from '@/assets/gallery-5.svg'
import g6 from '@/assets/gallery-6.svg'

export default function Gallery() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const images = [
    { src: g1, alt: 'Lash set 1' },
    { src: g2, alt: 'Nail set 2' },
    { src: g3, alt: 'Lash set 3' },
    { src: g4, alt: 'Nail set 4' },
    { src: g5, alt: 'Brows set 5' },
    { src: g6, alt: 'Soft gel nails 6' }
  ]

  return (
    <div className="w-full">
      {/* Header */}
      <section className="elegance-gradient py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-rose-800">
          <h1 className="text-5xl font-heading font-bold mb-4">Gallery</h1>
          <p className="text-lg text-rose-700">See our beautiful work and transformations</p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="section-padding bg-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((img, idx) => (
              <div key={idx} className="rounded-lg overflow-hidden shadow-lg bg-white">
                <img src={img.src} alt={img.alt} className="w-full h-64 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-rose-700">{img.alt}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-rose-600 mb-4">More images coming soon — you can upload your images to src/assets/ and I will wire them in.</p>
            <a href="https://wa.me/27633732935" className="inline-block px-6 py-3 rounded-full bg-pink-500 text-white font-semibold">WhatsApp for portfolio</a>
          </div>
        </div>
      </section>
    </div>
  )
}
