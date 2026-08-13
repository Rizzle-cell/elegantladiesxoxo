'use client'
import { useState } from 'react'

export default function Lightbox({images=[], start=0}){
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(start)
  if(!images || images.length===0) return null
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src,i)=> (
          <button key={i} onClick={()=>{ setIndex(i); setOpen(true) }} className="rounded overflow-hidden">
            <img src={src} alt={`img-${i}`} className="w-full h-auto" />
          </button>
        ))}
      </div>

      {open && (
        <div className="fixed inset-0 z-[10000] bg-black/80 flex items-center justify-center p-6">
          <button onClick={()=>setOpen(false)} className="absolute top-6 right-6 text-white text-xl">✕</button>
          <img src={images[index]} alt={`open-${index}`} className="max-h-[80vh] max-w-[90vw] rounded" />
        </div>
      )}
    </div>
  )
}
