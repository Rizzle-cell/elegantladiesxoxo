import Link from 'next/link'
import Image from 'next/image'

export default function Footer(){
  return (
    <footer className="bg-white/90 dark:bg-neutral-900 border-t border-pink-100 py-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div className="flex items-start gap-4">
          <Image src="/logo.svg" alt="Elegant Ladies" width={64} height={64} />
          <div>
            <h3 className="font-heading text-2xl text-rose-700">Elegant Ladies</h3>
            <p className="text-sm text-rose-600">Choose to be Elegant & Not Basic.</p>
            <p className="text-sm text-rose-500 mt-2">Rocklands · Mitchell's Plain · Cape Town</p>
            <p className="text-sm text-rose-500">Phone: 063 373 2935</p>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-rose-700 mb-2">Quick Links</h4>
          <ul className="space-y-2 text-rose-600">
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/hair">Hair</Link></li>
            <li><Link href="/lashes">Lashes</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/policies">Policies</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-rose-700 mb-2">Connect</h4>
          <ul className="space-y-2 text-rose-600">
            <li><a href="https://instagram.com/elegant_ladiesxoxo" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://wa.me/27633732935" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-pink-100 mt-8 pt-6 text-center text-sm text-rose-500">
        © {new Date().getFullYear()} Elegant Ladies — All rights reserved.
      </div>
    </footer>
  )
}
