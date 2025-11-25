/* FILE 4: app/team/page.tsx */
'use client';

import React from 'react';
import GlassyCard from '@/components/GlassyCard';

export default function TeamPage(){
  const members = [
    {
      name: 'Nithilan Murugesan',
      title: 'Founder & President',
      bio: "Leads strategy, partnerships, CAD curriculum, and volunteer coordination. Focused on building sustainable student-led engineering programs."
    },
    // additional placeholders can be added later
  ];

  return (
    <main className="container section">
      <div style={{maxWidth:1000, margin:'0 auto'}}>
        <h1 style={{fontWeight:900}}>Meet Our Team</h1>
        <p className="meta" style={{marginTop:8}}>Small core team with volunteer mentors. Youth leadership is central to our model.</p>

        <div style={{marginTop:18, display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:14}}>
          {members.map((m, i) => (
            <GlassyCard key={i}>
              <div style={{display:'flex', gap:12, alignItems:'center'}}>
                <div style={{width:74,height:74,borderRadius:8, background:'linear-gradient(135deg,#06b6d4,#3b82f6)', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:900}}>
                  {m.name.split(' ').map(n=>n[0]).slice(0,2).join('')}
                </div>
                <div>
                  <div style={{fontWeight:800}}>{m.name}</div>
                  <div style={{color:'rgba(255,255,255,0.85)'}}>{m.title}</div>
                </div>
              </div>
              <p className="meta" style={{marginTop:12}}>{m.bio}</p>
            </GlassyCard>
          ))}
        </div>

        <div style={{marginTop:20}} className="glass">
          <h3 style={{fontWeight:800}}>Want to join?</h3>
          <p className="meta" style={{marginTop:8}}>Visit <a href="/join" style={{textDecoration:'underline'}}>Join</a> for internship and volunteer opportunities.</p>
        </div>
      </div>
    </main>
  )
}
