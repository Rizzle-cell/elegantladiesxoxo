export default function LashesPage(){
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-heading text-rose-700 mb-4">Lash Services</h1>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="card-elegant p-4">
          <h4 className="font-semibold">Classic Set</h4>
          <p className="text-rose-600">R130</p>
        </div>
        <div className="card-elegant p-4">
          <h4 className="font-semibold">Hybrid Set</h4>
          <p className="text-rose-600">R150</p>
        </div>
        <div className="card-elegant p-4">
          <h4 className="font-semibold">Volume Set</h4>
          <p className="text-rose-600">R180</p>
        </div>
      </div>
    </div>
  )
}
