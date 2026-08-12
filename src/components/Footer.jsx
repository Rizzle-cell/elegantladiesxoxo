'use client'

import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-pink-400 mb-2">Elegant Ladies</h3>
            <p className="text-gray-400">Premium beauty studio delivering excellence and elegance.</p>
            <p className="text-sm text-gray-500 mt-2 italic">Choose to be Elegant & Not Basic</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-gray-400 hover:text-pink-400 transition-colors">Home</Link>
              <Link href="/services" className="text-gray-400 hover:text-pink-400 transition-colors">Services</Link>
              <Link href="/gallery" className="text-gray-400 hover:text-pink-400 transition-colors">Gallery</Link>
              <Link href="/contact" className="text-gray-400 hover:text-pink-400 transition-colors">Contact</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Contact</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <MapPin size={18} className="text-pink-400 flex-shrink-0 mt-1" />
                <p className="text-gray-400 text-sm">Rocklands, Mitchell's Plain, Cape Town</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-pink-400" />
                <a href="https://wa.me/27123456789" className="text-gray-400 hover:text-pink-400 transition-colors text-sm">
                  WhatsApp: +27 123 456 789
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-pink-400" />
                <a href="mailto:hello@elegantladies.co.za" className="text-gray-400 hover:text-pink-400 transition-colors text-sm">
                  hello@elegantladies.co.za
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Elegant Ladies. All rights reserved.</p>
          <p className="mt-2">Built with React • Powered by Vercel</p>
        </div>
      </div>
    </footer>
  )
}
