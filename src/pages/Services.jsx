import { useEffect } from 'react'
import { Sparkles, Scissors, Eye, Palette } from 'lucide-react'

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const services = [
    {
      icon: <Eye className="w-12 h-12" />,
      name: "Lash Extensions",
      desc: "Gorgeous lash extensions that make your eyes pop. Professional application with premium materials."
    },
    {
      icon: <Scissors className="w-12 h-12" />,
      name: "Hair Services",
      desc: "Expert hair styling, treatments, and care. From cutting to coloring - we do it all beautifully."
    },
    {
      icon: <Palette className="w-12 h-12" />,
      name: "Brow Design",
      desc: "Professional brow shaping and design tailored to your unique face shape and features."
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      name: "Nail Art",
      desc: "Stunning nail designs and treatments. Express yourself with our creative nail services."
    }
  ]

  return (
    <div className="w-full">
      {/* Header */}
      <section className="elegance-gradient py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl font-heading font-bold mb-4">Our Services</h1>
          <p className="text-lg text-white/90">Premium beauty treatments tailored to make you feel absolutely stunning</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white dark:bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div key={i} className="card-elegant">
                <div className="text-pink-500 mb-4">{service.icon}</div>
                <h3 className="text-2xl font-heading font-bold mb-3 text-pink-600">{service.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{service.desc}</p>
                <a href="https://wa.me/27123456789" className="text-pink-500 hover:text-pink-600 font-semibold inline-flex items-center gap-2">
                  Book Now →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
