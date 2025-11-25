/* FILE 6: app/join/page.tsx */
'use client';

import React from 'react';
import GlassyCard from '@/components/GlassyCard';

export default function JoinPage(){
  return (
    <main className="container section">
      <div style={{maxWidth:1100, margin:'0 auto'}}>
        <h1 style={{fontWeight:900}}>Join IQ Foundation</h1>
        <p className="meta" style={{marginTop:8}}>
          Apply for roles or sign up as a volunteer. We review applications monthly.
        </p>

        <div style={{marginTop:18, display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:14}}>
          <GlassyCard>
            <h3 style={{fontWeight:800}}>Growth Intern</h3>
            <p className="meta" style={{marginTop:8}}>Marketing, expansion, and growth strategy.</p>
            <a className="btn btn-primary" style={{marginTop:12}} href="https://docs.google.com/forms/d/e/1FAIpQLSdciq9wvus6Ifvv8NrTELUSlHw0gcauFCZ7m8T4DNBJAJObaA/viewform?usp=publish-editor" target="_blank" rel="noreferrer">Apply — Growth Intern</a>
          </GlassyCard>

          <GlassyCard>
            <h3 style={{fontWeight:800}}>Engineering Intern</h3>
            <p className="meta" style={{marginTop:8}}>CAD design, prototyping, modeling.</p>
            <a className="btn btn-primary" style={{marginTop:12}} href="https://docs.google.com/forms/d/e/1FAIpQLSe3f6uN0_a8N6eC4mJvVDIyptWkDePw7uYyeWT6JIWiwmR9eg/viewform?usp=publish-editor" target="_blank" rel="noreferrer">Apply — Engineering Intern</a>
          </GlassyCard>

          <GlassyCard>
            <h3 style={{fontWeight:800}}>Community Outreach</h3>
            <p className="meta" style={{marginTop:8}}>Partner coordination & partnerships.</p>
            <a className="btn btn-primary" style={{marginTop:12}} href="https://docs.google.com/forms/d/e/1FAIpQLSdV0TAsPseg9iwwZm3543ACL17lgpOZmqE5cGDI-fzudxSVnQ/viewform?usp=dialog" target="_blank" rel="noreferrer">Apply — Outreach</a>
          </GlassyCard>

          <GlassyCard>
            <h3 style={{fontWeight:800}}>Volunteer</h3>
            <p className="meta" style={{marginTop:8}}>Help run workshops, support teams, mentor.</p>
            <a className="btn btn-primary" style={{marginTop:12}} href="https://docs.google.com/forms/d/e/1FAIpQLSfq6Re4HwATgUSk8m3zFaIIbHhKEFy7D15K8JqR60s1kRbOfw/viewform?usp=dialog" target="_blank" rel="noreferrer">Sign Up — Volunteer</a>
          </GlassyCard>

          <GlassyCard>
            <h3 style={{fontWeight:800}}>Partner With Us</h3>
            <p className="meta" style={{marginTop:8}}>Sponsor a project or engage in a partnership.</p>
            <a className="btn btn-primary" style={{marginTop:12}} href="https://docs.google.com/forms/d/e/1FAIpQLScMdS2CKihayKg42Bn6gwtHNWGM7H7Jt3D2DeZTyUxJSwaQtQ/viewform?usp=publish-editor" target="_blank" rel="noreferrer">Partner with us</a>
          </GlassyCard> 

          <GlassyCard>
            <h3 style={{fontWeight:800}}>Organization Project Intake</h3>
            <p className="meta" style={{marginTop:8}}>Organizations may submit a pilot request.</p>
            <a className="btn btn-primary" style={{marginTop:12}} href="https://docs.google.com/forms/d/e/1FAIpQLScV_6IbzHIV2xQY-mVXhzhuTKwMHqrNAl0bd8Gd6TfjMv1GWw/viewform?usp=publish-editor" target="_blank" rel="noreferrer">Submit Project</a>
          </GlassyCard>
        </div>

        <div style={{marginTop:18}} className="glass">
          <h3 style={{fontWeight:800}}>Application process</h3>
          <p className="meta" style={{marginTop:8}}>
            We review applications and reach out for interviews. If you need accommodations, email us at <a href="mailto:info@theiqfoundation.org" style={{textDecoration:'underline'}}>info@theiqfoundation.org</a>.
          </p>
        </div>
      </div>
    </main>
  )
}
