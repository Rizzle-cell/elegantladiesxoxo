import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Header from './components/Header'
import Footer from './components/Footer'

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-neutral-900">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <main className="flex-1 w-full">
        {children}
      </main>
      <Footer />
    </div>
  )
}
