import Link from 'next/link'
import Image from 'next/image'

export default function Page(){
  return (
    <div className="w-full">
      <section className="min-h-[720px] flex items-center px-6 py-16 bg-gradient-to-br from-[#F7C6E3] to-[#FFEFF6]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-block mb-6">
              <span className="px-4 py-2 rounded-full bg-white/70 text-pink-600 border border-pink-200">Rocklands · Mitchell's Plain · Cape Town</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight text-rose-800 mb-6">
              Choose to be
              <span className="block text-5xl md:text-7xl text-amber-400 italic">Elegant & Not Basic.</span>
            </h1>

            <p className="text-lg text-rose-700 max-w-xl mb-8">Premium beauty services that leave you looking and feeling your absolute best.</p>

            <div className="flex gap-4 flex-wrap">
              <Link href="/booking" className="px-6 py-3 rounded-full bg-rose-500 text-white font-semibold shadow-md">Book Appointment</Link>
              <Link href="/services" className="px-6 py-3 rounded-full border border-rose-200 text-rose-700 bg-white/70">View Services</Link>
            </div>
          </div>

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
              <a href="https://wa.me/27633732935" target="_blank" rel="noreferrer" className="flex-1 text-center px-4 py-3 rounded-full border border-rose-200 text-rose-700">WHATSAPP</a>
              <Link href="/booking" className="flex-1 text-center px-4 py-3 rounded-full bg-rose-500 text-white">BOOK NOW</Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto p-6">
          <h2 className="text-3xl font-heading text-rose-700 mb-4">Why Choose Elegant Ladies</h2>
          <p className="text-rose-600 mb-6">We blend luxury, care and professional techniques to ensure you leave feeling beautiful and confident. Our team specialises in lashes, hair, brows and nails with a focus on comfort and cleanliness.</p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-elegant">
              <h3 className="font-semibold text-pink-600">Luxury Products</h3>
              <p className="text-sm text-rose-600">We use premium salon-grade products chosen for performance and longevity.</p>
            </div>
            <div className="card-elegant">
              <h3 className="font-semibold text-pink-600">Professional Techniques</h3>
              <p className="text-sm text-rose-600">Experienced stylists deliver precise, bespoke services.</p>
            </div>
            <div className="card-elegant">
              <h3 className="font-semibold text-pink-600">Premium Experience</h3>
              <p className="text-sm text-rose-600">Relax in a luxurious, clean environment with friendly service.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
