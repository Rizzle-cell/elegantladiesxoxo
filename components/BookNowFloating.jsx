'use client'
import { useEffect } from 'react'

export default function BookNowFloating(){
  useEffect(()=>{
    const btn = document.createElement('a')
    btn.href = '/booking'
    btn.innerText = 'Book Now'
    btn.style.position = 'fixed'
    btn.style.right = '20px'
    btn.style.bottom = '24px'
    btn.style.zIndex = '9999'
    btn.style.padding = '12px 18px'
    btn.style.borderRadius = '999px'
    btn.style.background = 'linear-gradient(90deg,#E98CC2,#F06EA8)'
    btn.style.color = 'white'
    btn.style.boxShadow = '0 10px 30px rgba(233,140,194,0.18)'
    btn.style.fontWeight = '600'
    btn.style.textDecoration = 'none'
    btn.setAttribute('aria-label','Book Now')
    document.body.appendChild(btn)
    return ()=> btn.remove()
  },[])
  return null
}
