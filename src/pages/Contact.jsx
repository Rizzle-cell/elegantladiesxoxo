import { useEffect } from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="w-full">
      {/* Header */}
      <section className="elegance-gradient py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl font-heading font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-white/90">Get in touch for bookings and inquiries</p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding bg-white dark:bg-neutral-900">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                icon: <MapPin className="w-6 h-6" />,
                title: "Location",
                content: "Rocklands, Mitchell's Plain, Cape Town, South Africa"
              },
              {
                icon: <Phone className="w-6 h-6" />,
                title: "WhatsApp",
                content: "+27 (0) 12 345 6789"
              },
              {
                icon: <Mail className="w-6 h-6" />,
                title: "Email",
                content: "hello@elegantladies.co.za"
              },
              {
                icon: <Clock className="w-6 h-6" />,
                title: "Hours",
                content: "Mon-Sat: 9AM - 6PM | Sun: 10AM - 4PM"
              }
            ].map((contact, i) => (
              <div key={i} className="card-elegant flex gap-4">
                <div className="text-pink-500 flex-shrink-0">{contact.icon}</div>
                <div>
                  <h3 className="text-lg font-heading font-bold text-pink-600 mb-1">{contact.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{contact.content}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a href="https://wa.me/27123456789" target="_blank" rel="noopener noreferrer" className="button-primary inline-block">
              Message on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
