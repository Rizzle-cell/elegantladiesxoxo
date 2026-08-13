export default function PoliciesPage(){
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-heading text-rose-700 mb-6">Policies</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="glass card-elegant p-6">
          <h3 className="font-semibold text-pink-600">Lash Policy</h3>
          <ul className="mt-2 text-rose-600">
            <li>50% deposit secures every booking.</li>
            <li>EFT payments only.</li>
            <li>Please remove all makeup before your appointment.</li>
          </ul>
        </div>

        <div className="glass card-elegant p-6">
          <h3 className="font-semibold text-pink-600">Booking Guide</h3>
          <ul className="mt-2 text-rose-600">
            <li>Direct message or WhatsApp: 063 373 2935</li>
            <li>Check availability before booking.</li>
            <li>Send a clear picture if applicable.</li>
            <li>Mention allergies before appointment.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
