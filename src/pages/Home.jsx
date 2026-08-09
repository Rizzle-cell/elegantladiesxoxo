import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, MapPin, Clock, Phone } from 'lucide-react'

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="elegance-gradient min-h-[600px] flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-2xl">
          <div className="animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
              Elegant Ladies
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Premium beauty studio in Cape Town. Lashes, Hair, Brows & Nails.
            </p>
            <p className="text-lg text-white/80 italic mb-12">
              Choose to be Elegant & Not Basic
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/services" className="button-primary">
                Explore Services <ArrowRight className="inline ml-2" size={20} />
              </Link>
              <a href="https://wa.me/27123456789" target="_blank" rel="noopener noreferrer" className="button-secondary">
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white dark:bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-16 text-pink-600">Why Choose Elegant Ladies?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Star className="w-8 h-8" />,
                title: "Premium Quality",
                desc: "Top-tier beauty treatments using premium products and techniques"
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: "Conveniently Located",
                desc: "Rocklands, Mitchell's Plain, Cape Town - Easy to reach"
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Professional Service",
                desc: "Expert beauticians with years of experience in their craft"
              }
            ].map((feature, i) => (
              <div key={i} className="card-elegant text-center">
                <div className="text-pink-500 mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-heading font-bold mb-3 text-pink-600">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="elegance-gradient py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Ready to Feel Elegant?</h2>
          <p className="text-lg mb-8 text-white/90">Book your appointment today and experience premium beauty services</p>
          <a href="https://wa.me/27123456789" target="_blank" rel="noopener noreferrer" className="button-primary bg-white text-pink-600 hover:bg-pink-50">
            Book Now via WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}
