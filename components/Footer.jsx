export default function Footer(){
  return (
    <footer className="mt-20 bg-white/80 border-t border-pink-100">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-heading text-2xl text-rose-700">Elegant Ladies</h3>
          <p className="mt-2 text-rose-600">Choose to be Elegant & Not Basic.</p>
          <p className="mt-4 text-rose-600">Rocklands, Mitchell's Plain, Cape Town</p>
          <p className="mt-1 text-rose-600">Phone: 063 373 2935</p>
          <p className="mt-1 text-rose-600">Instagram: @elegant_ladiesxoxo</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-2 text-rose-600">
            <li>Services</li>
            <li>Hair</li>
            <li>Lashes</li>
            <li>Policies</li>
            <li>Book</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Extras</h4>
          <p className="text-rose-600">Subscribe for specials and news</p>
        </div>
      </div>
      <div className="border-t border-pink-100 text-center py-6 text-rose-600">© {new Date().getFullYear()} Elegant Ladies — All rights reserved</div>
    </footer>
  )
}
