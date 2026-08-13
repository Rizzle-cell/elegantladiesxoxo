'use client'
import { useEffect, useState } from 'react'

export default function LoadingScreen(){
  const [show, setShow] = useState(true)
  useEffect(()=>{
    const t = setTimeout(()=> setShow(false), 900)
    return ()=> clearTimeout(t)
  },[])

  if(!show) return null
  return (
    <div className="loading-screen" aria-hidden>
      <div className="loading-logo">
        <img src="/logo.svg" alt="Elegant Ladies" />
      </div>
    </div>
  )
}
