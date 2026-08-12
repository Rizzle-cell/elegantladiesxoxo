import Image from 'next/image'
import Link from 'next/link'

export default function Header(){
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.svg" alt="Elegant Ladies" width={48} height={48} />
          <span className="font-heading text-lg text-rose-700 font-bold">Elegant Ladies</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/policies">Policies</Link>
          <Link href="/contact">Contact</Link>
          <a href="https://wa.me/27633732935" className="px-4 py-2 rounded-full bg-rose-500 text-white">Book Now</a>
        </nav>

        <div className="md:hidden">
          <button aria-label="Open menu" className="p-2">Menu</button>
        </div>
      </div>
    </header>
  )
}
