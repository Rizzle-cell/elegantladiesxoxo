'use client'
import { useEffect } from 'react'

export default function SmoothScrollClient(){
  useEffect(()=>{
    let lenis
    let rafId
    async function init(){
      try{
        const mod = await import('lenis')
        const Lenis = mod.default || mod
        lenis = new Lenis({ duration:1.2, easing: (t)=>Math.min(1,1.001-Math.pow(2,-10*t)), smooth:true })
        function raf(time){
          lenis.raf(time)
          rafId = requestAnimationFrame(raf)
        }
        rafId = requestAnimationFrame(raf)
      }catch(e){
        // lenis not installed — fail gracefully
        console.warn('Lenis not available', e)
      }
    }
    init()
    return ()=>{ if(rafId) cancelAnimationFrame(rafId) }
  },[])

  return null
}
