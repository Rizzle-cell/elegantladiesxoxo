import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SmoothScrollClient from '@/components/SmoothScrollClient'

const inter = Inter({ subsets: ['latin'], weight: ['400','600','700'] })

export const metadata = {
  title: 'Elegant Ladies — Premium Beauty Studio',
  description: 'Choose to be Elegant & Not Basic. Premium beauty services in Rocklands, Mitchell\'s Plain, Cape Town.'
}

export default function RootLayout({ children }){
  return (
    <html lang="en">
      <body className={inter.className}>
        <SmoothScrollClient />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
