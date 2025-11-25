/* FILE 8: components/Footer.tsx */
'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container" style={{display:'flex', gap:20, alignItems:'center', justifyContent:'space-between', flexWrap:'wrap'}}>
        <div>
          <div style={{fontWeight:900}}>IQ Foundation</div>
          <div className="meta" style={{marginTop:6}}>Youth-led engineering • CAD • Community impact</div>
        </div>

        <div style={{display:'flex', gap:12, alignItems:'center'}}>
          <Link href="https://www.instagram.com/iqfoundation.official/" target="_blank" aria-label="Instagram" style={{color:'inherit', display:'inline-flex'}}>
            {/* Instagram SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><path d="M17.5 6.5h.01"/></svg>
          </Link>

          <Link href="https://www.linkedin.com/company/iq-foundation/" target="_blank" aria-label="LinkedIn" style={{color:'inherit', display:'inline-flex'}}>
            {/* LinkedIn SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4v14h-4V8zM8 8h3.8v2.1h.1c.5-1 1.8-2.1 3.8-2.1C20.2 8 22 10 22 14.2V22h-4v-7c0-2-.7-3.4-2.5-3.4-1.3 0-2.1.9-2.5 1.8-.1.3-.1.8-.1 1.3V22H8V8z"/></svg>
          </Link>

          <Link href="mailto:info@theiqfoundation.org" aria-label="Email" style={{color:'inherit', display:'inline-flex'}}>
            {/* Email SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
          </Link>
        </div>

        <div style={{color:'rgba(255,255,255,0.85)'}}>© {new Date().getFullYear()} IQ Foundation</div>
      </div>
    </footer>
  )
}
