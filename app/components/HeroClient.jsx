'use client'

import { motion } from 'framer-motion'

export default function HeroClient(){
  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block px-4 py-2 rounded-full bg-white/70 text-rose-600 border border-rose-200">Rocklands · Mitchell's Plain · Cape Town</span>
          <motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.8}} className="mt-6 text-5xl md:text-6xl lg:text-7xl font-heading text-rose-800 leading-tight">
            Choose to be <span className="block text-5xl md:text-6xl lg:text-7xl italic text-amber-400">Elegant & Not Basic.</span>
          </motion.h1>
          <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3}} className="mt-6 text-lg text-rose-700 max-w-lg">Premium beauty services that leave you looking and feeling your absolute best.</motion.p>

          <div className="mt-8 flex gap-4">
            <a href="/booking" className="px-6 py-3 rounded-full bg-rose-500 text-white font-semibold">Book Appointment</a>
            <a href="/services" className="px-6 py-3 rounded-full border border-rose-200 text-rose-700 bg-white/60">View Services</a>
          </div>
        </div>

        <aside className="glass rounded-2xl p-8 shadow-xl">
          <div className="text-sm text-rose-500 font-semibold mb-2">BY APPOINTMENT ONLY</div>
          <h2 className="text-2xl font-heading font-bold text-rose-800 mb-2">Elegant Ladies</h2>
          <p className="italic text-rose-600 mb-6">Choose to be Elegant & Not Basic.</p>

          <ul className="space-y-3 text-rose-700 mb-6">
            <li>📍 Rocklands, Mitchell's Plain, Cape Town</li>
            <li>📞 063 373 2935</li>
            <li>⏰ Mon–Sat · By appointment</li>
          </ul>

          <div className="flex gap-3 flex-wrap mb-6">
            <span className="px-3 py-1 bg-pink-50 text-rose-600 rounded-full">Lashes</span>
            <span className="px-3 py-1 bg-pink-50 text-rose-600 rounded-full">Hair</span>
            <span className="px-3 py-1 bg-pink-50 text-rose-600 rounded-full">Brows</span>
            <span className="px-3 py-1 bg-pink-50 text-rose-600 rounded-full">Soft Gel Nails</span>
          </div>

          <div className="flex gap-3">
            <a href="https://wa.me/27633732935" target="_blank" rel="noreferrer" className="flex-1 text-center px-4 py-3 rounded-full border border-rose-200 text-rose-700">WHATSAPP</a>
            <a href="/booking" className="flex-1 text-center px-4 py-3 rounded-full bg-rose-500 text-white">BOOK NOW</a>
          </div>
        </aside>
      </div>
    </section>
  )
}
