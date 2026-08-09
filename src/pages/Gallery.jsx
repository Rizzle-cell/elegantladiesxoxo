import { useEffect } from 'react'

export default function Gallery() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="w-full">
      {/* Header */}
      <section className="elegance-gradient py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl font-heading font-bold mb-4">Gallery</h1>
          <p className="text-lg text-white/90">See our beautiful work and transformations</p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="section-padding bg-white dark:bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-square rounded-lg bg-gradient-to-br from-pink-200 to-pink-100 dark:from-pink-900 dark:to-pink-800 flex items-center justify-center hover:scale-105 transition-transform duration-300">
                <p className="text-gray-500 dark:text-gray-400">Gallery Image {i}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-400 mb-4">Gallery images coming soon!</p>
            <a href="https://wa.me/27123456789" className="button-primary">
              WhatsApp for portfolio
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
