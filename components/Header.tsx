/* FILE: components/Header.tsx */
'use client'
import Link from 'next/link'
import React from 'react'

export default function Header(){
  return (
    <header className="w-full fixed top-6 z-50">
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div style={{width:56,height:56, borderRadius:10, background:'linear-gradient(135deg,#06b6d4,#6366f1)', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'4px 4px 0 rgba(0,0,0,0.6)'}}>
            <strong style={{color:'#fff', fontSize:18}}>IQ</strong>
          </div>
          <div>
            <div style={{fontWeight:800}}>IQ Foundation</div>
            <div style={{fontSize:12, color:'rgba(255,255,255,0.65)'}}>Youth-led engineering</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm text-gray-200 hover:text-white">Overview</Link>
          <Link href="/mission" className="text-sm text-gray-200 hover:text-white">Mission</Link>
          <Link href="/team" className="text-sm text-gray-200 hover:text-white">Team</Link>
          <Link href="/join" className="text-sm text-gray-200 hover:text-white">Join</Link>
          <Link href="/opportunities" className="text-sm text-gray-200 hover:text-white">Opportunities</Link>
          
          {/*<Link href="/partners" className="text-sm text-gray-200 hover:text-white">Partners</Link> */}
          
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/join" className="btn btn-primary">Partner With Us</Link>
        </div>
      </div>
    </header>
  )
}
