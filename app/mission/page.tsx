/* FILE 5: app/mission/page.tsx */
'use client';

import React from 'react';

export default function MissionPage(){
  return (
    <main className="container section">
      <div style={{maxWidth:900, margin:'0 auto'}} className="glass">
        <h1 style={{fontWeight:900}}>Our Mission</h1>

        <p className="meta" style={{marginTop:12}}>
          IQ Foundation empowers young engineers to create practical, community-centered design solutions. We train students in CAD and systems thinking, then partner with local organizations to pilot realistic, maintainable projects.
        </p>

        <div style={{marginTop:16}}>
          <h3 style={{fontWeight:800}}>Core Pillars</h3>
          <ul style={{marginTop:8, color:'rgba(255,255,255,0.9)', lineHeight:1.6}}>
            <li><strong>Community-first:</strong> Projects begin and iterate with the partner's needs and maintenance realities.</li>
            <li><strong>Student leadership:</strong> Students own design decisions and gain real-world experience.</li>
            <li><strong>Responsible engineering:</strong> Accessibility, safety, and ethical constraints are prioritized.</li>
            <li><strong>Open handoff:</strong> CAD files, BOMs, and assembly notes accompany every project.</li>
          </ul>
        </div>

        <div style={{marginTop:14, display:'flex', gap:10}}>
          <a href="/join" className="btn btn-primary">Get Involved</a>
          <a href="mailto:info@theiqfoundation.org" className="btn btn-ghost">Contact Us</a>
        </div>

        <p className="meta" style={{marginTop:14}}>
          <strong>Status:</strong> We are in pilot-build mode and actively recruiting partners for 4–12 week pilot projects.
        </p>
      </div>
    </main>
  )
}
