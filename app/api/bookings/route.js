import { NextResponse } from 'next/server'

export async function POST(req){
  try{
    const body = await req.json()
    console.log('New booking', body)
    // In production: integrate with DB or calendar API here
    return NextResponse.json({ ok: true, received: body })
  }catch(e){
    return NextResponse.json({ ok:false, error: String(e) }, { status:500 })
  }
}
