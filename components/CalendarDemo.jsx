'use client'
import { useState, useEffect } from 'react'

export default function CalendarDemo(){
  const [selected, setSelected] = useState('')
  const [bookings, setBookings] = useState([])
  const [name, setName] = useState('')

  useEffect(()=>{
    const stored = localStorage.getItem('demoBookings')
    if(stored) setBookings(JSON.parse(stored))
  },[])

  useEffect(()=>{
    localStorage.setItem('demoBookings', JSON.stringify(bookings))
  },[bookings])

  const slots = ['09:00','10:00','11:00','13:00','14:00','15:00']

  const makeBooking = async () =>{
    if(!selected || !name) return alert('Please pick a slot and enter name')
    const b = { id: Date.now(), name, slot:selected }
    setBookings(prev=>[...prev,b])
    setName('')
    setSelected('')
    // send to serverless API
    try{ await fetch('/api/bookings', { method:'POST', headers:{'content-type':'application/json'}, body: JSON.stringify(b) }) }catch(e){}
    alert('Booking saved (demo)')
  }

  return (
    <div>
      <div className="mb-4">
        <label className="block text-sm text-rose-600 mb-2">Your name</label>
        <input value={name} onChange={e=>setName(e.target.value)} className="w-full p-3 rounded border" placeholder="Name" />
      </div>

      <div className="grid grid-cols-3 gap-2 mb-4">
        {slots.map(s=> (
          <button key={s} onClick={()=>setSelected(s)} className={`p-2 rounded ${selected===s? 'bg-rose-500 text-white':'bg-white border'}`}>
            {s}
          </button>
        ))}
      </div>

      <div className="flex gap-3">
        <button onClick={makeBooking} className="px-4 py-2 bg-rose-500 text-white rounded">Secure My Booking</button>
        <button onClick={()=>{ setSelected(''); setName('') }} className="px-4 py-2 border rounded">Reset</button>
      </div>

      <div className="mt-6">
        <h4 className="font-semibold text-rose-700">Existing Demo Bookings</h4>
        <ul className="mt-2 text-rose-600">
          {bookings.map(b=> <li key={b.id}>{b.name} — {b.slot}</li>)}
        </ul>
      </div>
    </div>
  )
}
