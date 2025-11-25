/* FILE 9: components/HeroText.tsx */
'use client';
import React from 'react';
import Link from 'next/link';

export default function HeroText() {
  return (
    <div className="hero-panel container">
      <div className="glass">
        <div className="kicker">USING CAD FOR GOOD</div>
        <h2 className="h-giant" style={{marginTop:10}}>Building the future using <span style={{background:'linear-gradient(90deg,#06b6d4,#3b82f6)', WebkitBackgroundClip:'text', color:'transparent'}}>youth engineering</span></h2>
        <p className="meta" style={{marginTop:12}}>
          We teach CAD basics, run project sprints, and partner with organizations that need low-cost design solutions. Students gain experience while partners receive practical design handoffs.
        </p>

        <div style={{marginTop:14, display:'flex', gap:10}}>
          <Link href="/join" className="btn btn-primary">Get Started</Link>
          <Link href="/mission" className="btn btn-ghost">Our Mission</Link>
        </div>
      </div>
    </div>
  )
}
