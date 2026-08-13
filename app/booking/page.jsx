import dynamic from 'next/dynamic'
import Image from 'next/image'

const CalendarDemo = dynamic(() => import('@/components/CalendarDemo'), { ssr: false })

export default function BookingPage(){
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-heading text-rose-700 mb-4">Book Now</h1>
      <p className="text-rose-600 mb-6">Use our Calendly integration or the demo calendar below to secure your booking.</p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="card-elegant p-6">
          <h3 className="font-semibold text-pink-600 mb-4">Calendly (Placeholder)</h3>
          <div className="aspect-video bg-white/50 rounded-md flex items-center justify-center">
            <p className="text-rose-600">Calendly widget goes here — add your Calendly URL to enable live booking.</p>
          </div>
        </div>

        <div className="card-elegant p-6">
          <h3 className="font-semibold text-pink-600 mb-4">Demo Calendar</h3>
          <CalendarDemo />
        </div>
      </div>
    </div>
  )
}
