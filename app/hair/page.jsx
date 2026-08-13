export default function HairPage(){
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-heading text-rose-700 mb-4">Hair Services</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card-elegant p-6">
          <h3 className="font-semibold text-pink-600">Wash Blow & Flat Iron</h3>
          <ul className="mt-2 text-rose-600">
            <li>Short — R60</li>
            <li>Medium — R70</li>
            <li>Long — R80</li>
            <li>Extra Long — R100</li>
          </ul>
        </div>

        <div className="card-elegant p-6">
          <h3 className="font-semibold text-pink-600">Chemical Treatments</h3>
          <ul className="mt-2 text-rose-600">
            <li>Japanese Treatment — From R300</li>
            <li>Keratin Coffee Treatment — R300</li>
            <li>Argan Oil Treatment — R150</li>
            <li>Keratin Queen Brazil Botox — R300</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
