const services = [
  {name:'Lash Extensions', price:'From R130', desc:'Classic, Hybrid and Volume sets available.'},
  {name:'Hair Services', price:'From R60', desc:'Wash, Blow, Chemical treatments and more.'},
  {name:'Brow Design', price:'From R100', desc:'Shaping, tinting and waxing.'},
  {name:'Nail Art', price:'From R100', desc:'Soft gel nails and creative designs.'}
]

export default function ServicesPage(){
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-heading text-rose-700 mb-6">Our Services</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((s,idx)=> (
          <div key={idx} className="card-elegant p-6">
            <h3 className="text-2xl font-semibold text-pink-600">{s.name}</h3>
            <p className="text-rose-600 mb-4">{s.desc}</p>
            <div className="flex items-center justify-between">
              <div className="text-rose-700 font-semibold">{s.price}</div>
              <a href="/booking" className="px-4 py-2 rounded-full bg-rose-500 text-white">Book</a>
            </div>
          </div>
        ))}
      </div>

      <section className="mt-12">
        <h2 className="text-3xl font-heading text-rose-700 mb-4">Lash Services</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="card-elegant p-4">
            <h4 className="font-semibold">Gel Extensions</h4>
            <p className="text-rose-600">R300</p>
          </div>
          <div className="card-elegant p-4">
            <h4 className="font-semibold">Gel Overlay (Hands)</h4>
            <p className="text-rose-600">R150</p>
          </div>
        </div>
      </section>
    </div>
  )
}
