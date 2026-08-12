import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="w-full">
      {/* Hero Section - split layout to match mock */}
      <section className="min-h-[720px] flex items-center px-6 py-16 bg-gradient-to-br from-pink-50 to-pink-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left - Headline */}
          <div>
            <div className="inline-block mb-6">
              <span className="px-4 py-2 rounded-full bg-white/70 text-pink-600 border border-pink-200">Rocklands · Mitchell's Plain · Cape Town</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-serif font-bold leading-tight text-rose-800 mb-6">
              Choose to be
              <span className="block text-6xl md:text-8xl text-amber-400 italic">Elegant & Not Basic.</span>
            </h1>

            <p className="text-lg text-rose-700 max-w-xl mb-8">Premium beauty services that leave you looking and feeling your absolute best.</p>

            <div className="flex gap-4 flex-wrap">
              <Link to="/contact" className="px-6 py-3 rounded-full bg-pink-500 text-white font-semibold shadow-md hover:opacity-95">
                Book Appointment
              </Link>
              <Link to="/services" className="px-6 py-3 rounded-full border border-pink-200 text-rose-700 bg-white/70 hover:bg-white">
                View Services
              </Link>
            </div>
          </div>

          {/* Right - Contact Card */}
          <aside className="bg-white rounded-2xl shadow-xl p-8 border border-rose-100">
            <div className="text-sm text-pink-500 font-semibold mb-2">BY APPOINTMENT ONLY</div>
            <h2 className="text-2xl font-serif font-bold text-rose-800 mb-2">Elegant Ladies</h2>
            <p className="italic text-rose-600 mb-6">Choose to be Elegant & Not Basic.</p>

            <ul className="space-y-3 text-rose-700 mb-6">
              <li>📍 Rocklands, Mitchell's Plain, Cape Town</li>
              <li>📞 063 373 2935</li>
              <li>⏰ Mon–Sat · By appointment</li>
            </ul>

            <div className="flex gap-3 flex-wrap mb-6">
              <span className="px-3 py-1 bg-pink-50 text-pink-600 rounded-full">Lashes</span>
              <span className="px-3 py-1 bg-pink-50 text-pink-600 rounded-full">Hair</span>
              <span className="px-3 py-1 bg-pink-50 text-pink-600 rounded-full">Brows</span>
              <span className="px-3 py-1 bg-pink-50 text-pink-600 rounded-full">Soft Gel Nails</span>
            </div>

            <div className="flex gap-3">
              <a href="https://wa.me/27633732935" target="_blank" rel="noopener noreferrer" className="flex-1 text-center px-4 py-3 rounded-full border border-rose-200 text-rose-700">WHATSAPP</a>
              <Link to="/contact" className="flex-1 text-center px-4 py-3 rounded-full bg-pink-500 text-white">BOOK NOW</Link>
            </div>
          </aside>
        </div>
      </section>

      {/* Features / CTA Section (kept simple) */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-xl shadow">Premium Quality</div>
          <div className="p-6 bg-white rounded-xl shadow">Conveniently Located</div>
          <div className="p-6 bg-white rounded-xl shadow">Professional Service</div>
        </div>
      </section>
    </div>
  )
}
