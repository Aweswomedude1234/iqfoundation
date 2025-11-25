/* FILE 3: app/page.tsx */
'use client';

import React from 'react';
import HeroText from '@/components/HeroText';
import GlassyCard from '@/components/GlassyCard';
import ThreeScene from '@/components/ThreeScene';

export default function HomePage() {
  return (
    <div>
      <section className="hero">
        {/* subtle 3D scene for depth (keeps stars/cube but muted) */}
        <ThreeScene />
        <div className="hero-panel container">
          <div className="glass" style={{padding:28}}>
            <div className="kicker">USING CAD FOR GOOD</div>
            <h1 className="h-giant" style={{marginTop:12}}>
              Building the future using <span style={{background:'linear-gradient(90deg,#06b6d4,#3b82f6)', WebkitBackgroundClip:'text', color:'transparent'}}>youth engineering</span>
            </h1>
            <p className="meta" style={{marginTop:12}}>
              IQ Foundation is a youth-led nonprofit that trains student designers in CAD, pairs teams with local community partners, and delivers small, practical design solutions for hospitals, nonprofits, and schools. We emphasize responsible, maintainable designs and clear handoffs.
            </p>

            <div style={{marginTop:18, display:'flex', gap:12, flexWrap:'wrap'}}>
              <a href="/join" className="btn btn-primary">Get Started</a>
              <a href="/mission" className="btn btn-ghost">Learn More</a>
              <a href="/submit-project" className="btn btn-ghost">Submit Project</a>
            </div>
          </div>
        </div>
      </section>

      <main>
        <section className="section container" id="overview">
          <div style={{maxWidth:1100, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1fr', gap:28}}>
            <div>
              <h2 className="h-large">Overview — What we do</h2>
              <p className="meta" style={{marginTop:12}}>
                Our model: train youth in CAD + engineering best practices, scope partner problems, run semester-long sprints, and deliver CAD files, BOMs, and simple fabrication guides. We prioritize accessibility, safety, and sustainability.
              </p>

              <div style={{marginTop:18, display:'grid', gridTemplateColumns:'1fr 1fr', gap:12}}>
                <GlassyCard>
                  <strong>Training</strong>
                  <p className="meta" style={{marginTop:8}}>Structured CAD curriculum and hands-on exercises.</p>
                </GlassyCard>

                <GlassyCard>
                  <strong>Community Partnerships</strong>
                  <p className="meta" style={{marginTop:8}}>Collaborate with hospitals, clinics, schools, and nonprofits to identify meaningful projects.</p>
                </GlassyCard>

                <GlassyCard>
                  <strong>Project Delivery</strong>
                  <p className="meta" style={{marginTop:8}}>Deliver working CAD files, BOMs, and basic fabrication instructions.</p>
                </GlassyCard>

                <GlassyCard>
                  <strong>Ethical Standards</strong>
                  <p className="meta" style={{marginTop:8}}>Focus on accessibility, safety, and long-term maintainability.</p>
                </GlassyCard>
              </div>
            </div>

            <div>
              <h3 style={{fontWeight:800}}>Programs & Pipeline</h3>
              <p className="meta" style={{marginTop:10}}>
                We are currently building our pipeline. Below are the program types we offer. If you'd like to pilot a project, use the "Submit Project" link.
              </p>

              <div style={{marginTop:16, display:'grid', gap:12}}>
                <GlassyCard>
                  <strong>CAD Fundamentals</strong>
                  <p className="meta" style={{marginTop:8}}>Parametric modeling, assemblies, and export for makerspaces.</p>
                </GlassyCard>
                <GlassyCard>
                  <strong>Design Sprint</strong>
                  <p className="meta" style={{marginTop:8}}>4–12 week team sprints with partner feedback sessions.</p>
                </GlassyCard>
                <GlassyCard>
                  <strong>Mentorship Program</strong>
                  <p className="meta" style={{marginTop:8}}>Volunteer mentors provide technical and career guidance.</p>
                </GlassyCard>
              </div>
            </div>
          </div>
        </section>

        <section className="section-compact container">
          <div style={{maxWidth:1100, margin:'0 auto'}}>
            <h3 style={{fontWeight:800}}>FAQ</h3>
            <div style={{marginTop:12, display:'grid', gridTemplateColumns:'1fr 1fr', gap:12}}>
              <GlassyCard>
                <strong>Is IQ Foundation free to partners?</strong>
                <p className="meta" style={{marginTop:8}}>Early pilots are often pro-bono; materials or fabrication may require small sponsorships.</p>
              </GlassyCard>

              <GlassyCard>
                <strong>How do students join?</strong>
                <p className="meta" style={{marginTop:8}}>Apply on the Join page; roles include interns and volunteers.</p>
              </GlassyCard>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
