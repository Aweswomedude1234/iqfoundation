'use client';
import React from 'react';
import Link from 'next/link';

export default function Programs(){
  return (
    <section id="programs" className="section container-max">
      <div className="max-w-6xl mx-auto">
        <h2 style={{fontSize:28,fontWeight:800, marginBottom:18}}>Programs & Opportunities</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="block-card">
            <h3 style={{fontWeight:800}}>Growth Intern</h3>
            <p style={{color:'rgba(255,255,255,0.8)', marginTop:8}}>Marketing, outreach, and partner growth. Work directly with the President on expanding partnerships.</p>
            <div className="mt-4 flex gap-3">
              <a href="https://forms.gle/your-growth-intern-form" target="_blank" className="btn">Apply — Growth</a>
            </div>
          </div>

          <div className="block-card">
            <h3 style={{fontWeight:800}}>Engineering Intern</h3>
            <p style={{color:'rgba(255,255,255,0.8)', marginTop:8}}>CAD-focused role: design, simulation, and prototype development with mentors.</p>
            <div className="mt-4 flex gap-3">
              <a href="https://forms.gle/your-engineer-intern-form" target="_blank" className="btn">Apply — Engineer</a>
            </div>
          </div>

          <div className="block-card">
            <h3 style={{fontWeight:800}}>Community Outreach</h3>
            <p style={{color:'rgba(255,255,255,0.8)', marginTop:8}}>Coordinate with local organizations, run workshops, and manage partner communication.</p>
            <div className="mt-4 flex gap-3">
              <a href="https://forms.gle/your-outreach-form" target="_blank" className="btn">Apply — Outreach</a>
            </div>
          </div>

          <div className="block-card">
            <h3 style={{fontWeight:800}}>Volunteer</h3>
            <p style={{color:'rgba(255,255,255,0.8)', marginTop:8}}>Short-term volunteering for workshops, prototyping help, and community events.</p>
            <div className="mt-4 flex gap-3">
              <a href="https://forms.gle/your-volunteer-form" target="_blank" className="btn">Sign Up — Volunteer</a>
            </div>
          </div>

          <div className="block-card">
            <h3 style={{fontWeight:800}}>Partner With Us</h3>
            <p style={{color:'rgba(255,255,255,0.8)', marginTop:8}}>Paid or sponsored partnerships to scale program delivery and build long-term impact.</p>
            <div className="mt-4 flex gap-3">
              <a href="mailto:info@theiqfoundation.org?subject=Partnership%20Inquiry" className="btn">Contact — Partner</a>
            </div>
          </div>

          <div className="block-card">
            <h3 style={{fontWeight:800}}>Request a Project (for organizations)</h3>
            <p style={{color:'rgba(255,255,255,0.8)', marginTop:8}}>Organizations can submit a project intake form outlining the need, constraints, and timeline.</p>
            <div className="mt-4 flex gap-3">
              <a href="https://forms.gle/your-project-intake-form" target="_blank" className="btn">Submit Project</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
