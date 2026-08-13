'use client'
import { useEffect } from 'react'

export default function CursorGlow(){
  useEffect(()=>{
    const el = document.createElement('div')
    el.className = 'cursor-glow'
    el.style.width = '180px'
    el.style.height = '180px'
    el.style.borderRadius = '50%'
    el.style.background = 'radial-gradient(circle at 30% 30%, rgba(233,140,194,0.25), rgba(233,140,194,0.05) 40%, transparent 60%)'
    el.style.transform = 'translate(-50%,-50%)'
    el.style.pointerEvents = 'none'
    document.body.appendChild(el)

    function move(e){
      el.style.left = e.clientX + 'px'
      el.style.top = e.clientY + 'px'
    }
    window.addEventListener('pointermove', move)
    return ()=>{ window.removeEventListener('pointermove', move); el.remove() }
  },[])

  return null
}
