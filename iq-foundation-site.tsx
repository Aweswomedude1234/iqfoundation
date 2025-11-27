import React, { useRef, useState, useEffect } from 'react';
import { motion } from "framer-motion";

// ============= COMPONENTS =============

// Navbar Component
const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Our Team', href: '#team' },
    { name: 'Mission', href: '#mission' },
    { name: 'Join Us', href: '#join' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-xl bg-black/30' : 'backdrop-blur-md bg-black/10'
      }`}
      style={{
        borderBottom: '1px solid rgba(139, 92, 246, 0.2)'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-orange-400 bg-clip-text text-transparent"
        >
          IQ
        </motion.div>
        
        <div className="flex gap-8">
          {navItems.map((item, i) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.1, color: '#a78bfa' }}
              className="text-white/80 hover:text-purple-400 transition-colors font-medium"
            >
              {item.name}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

// Background Component (CSS animated stars + gradient)
const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-gradient-to-br from-black via-purple-900/40 to-black overflow-hidden">
      <div className="absolute inset-0 bg-[url('/stars.png')] opacity-30 animate-pulse"></div>
    </div>
  );
};

// Glassy Card Component
const GlassyCard = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10, scale: 1.02 }}
      className={`backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-purple-500/20 shadow-lg hover:shadow-purple-500/20 transition-all ${className}`}
      style={{
        boxShadow: '0 0 30px rgba(139, 92, 246, 0.1)'
      }}
    >
      {children}
    </motion.div>
  );
};

// Hero Text Component
const HeroText = () => {
  const words = [
    "Engineering solutions.",
    "CAD for impact.",
    "Innovation for everyone."
  ];

  return (
    <div className="text-center space-y-6">
      {words.map((word, i) => (
        <motion.h1
          key={i}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: i * 0.3, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tight"
          style={{
            textShadow: '0 0 80px rgba(139, 92, 246, 0.5)'
          }}
        >
          {word}
        </motion.h1>
      ))}
    </div>
  );
};

// ============= PAGES =============

// Home Page
const HomePage = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6">
      <div className="relative z-10">
        <HeroText />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="text-center text-xl md:text-2xl text-white/70 mt-12 max-w-3xl mx-auto"
        >
          Empowering communities through accessible engineering and meaningful innovation.
        </motion.p>
      </div>
    </section>
  );
};

// Team Page
const TeamPage = () => {
  return (
    <section id="team" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-white text-center"
        >
          Meet Our Team
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <GlassyCard delay={0.2}>
            <h3 className="text-white text-2xl font-semibold">Nithilan</h3>
            <p className="text-white/60 mt-2">Founder — Mechanical Engineering & CAD</p>
          </GlassyCard>

          <GlassyCard delay={0.3}>
            <h3 className="text-white text-2xl font-semibold">Coming Soon</h3>
            <p className="text-white/60 mt-2">Team Member</p>
          </GlassyCard>

          <GlassyCard delay={0.4}>
            <h3 className="text-white text-2xl font-semibold">Coming Soon</h3>
            <p className="text-white/60 mt-2">Team Member</p>
          </GlassyCard>
        </div>
      </div>
    </section>
  );
};

// Mission Page
const MissionPage = () => {
  return (
    <section id="mission" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-white text-center"
        >
          Our Mission
        </motion.h2>

        <GlassyCard delay={0.2}>
          <p className="text-white/80 text-lg leading-relaxed">
            IQ Foundation focuses on accessible engineering: creating CAD resources,
            engineering tutorials, community STEM outreach, and youth-focused technical education.
          </p>
        </GlassyCard>
      </div>
    </section>
  );
};

// Join Page
const JoinPage = () => {
  return (
    <section id="join" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto space-y-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-white"
        >
          Join Us
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-white/70 text-lg max-w-2xl mx-auto"
        >
          Want to be part of the movement? We're seeking young engineers,
          designers, and innovators who share our vision.
        </motion.p>

        <a
          href="mailto:iqfoundationteam@gmail.com"
          className="inline-block mt-6 px-10 py-4 rounded-xl bg-purple-600 text-white font-semibold text-xl hover:bg-purple-500 transition shadow-lg"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

// Main Wrapper
export default function IQFoundationSite() {
  return (
    <>
      <AnimatedBackground />
      <NavBar />
      <HomePage />
      <TeamPage />
      <MissionPage />
      <JoinPage />
    </>
  );
}
