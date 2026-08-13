import Image from 'next/image'

const gallery = Array.from({length:8}).map((_,i)=> ({src:`/assets/gallery-${(i%6)+1}.jpg`, alt:`Image ${i+1}`}))

export default function GalleryPage(){
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-heading text-rose-700 mb-6">Gallery</h1>
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4">
        {gallery.map((g,idx)=> (
          <div key={idx} className="mb-4 break-inside-avoid rounded-lg overflow-hidden shadow-lg bg-white">
            <Image src={g.src} alt={g.alt} width={600} height={400} className="w-full h-auto" />
            <div className="p-4">
              <h3 className="font-semibold text-rose-700">{g.alt}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
