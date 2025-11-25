import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars, ScrollControls, useScroll as useThreeScroll, MeshDistortMaterial, OrbitControls } from '@react-three/drei';

// Simulating Next.js App Router structure with React component
// In actual deployment, this would be split into proper Next.js pages

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

// Interactive Cube Component
const InteractiveCube = () => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const { pointer } = useThree();
  const scrollData = useThreeScroll();

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Scroll-linked rotation
      const scrollOffset = scrollData.offset;
      meshRef.current.rotation.y = scrollOffset * Math.PI * 2;
      meshRef.current.rotation.x = scrollOffset * Math.PI;
      
      // Cursor interaction
      meshRef.current.rotation.y += pointer.x * 0.1 * delta;
      meshRef.current.rotation.x += pointer.y * 0.1 * delta;
      
      // Idle rotation
      meshRef.current.rotation.z += delta * 0.2;
      
      // Scroll-based position shift
      meshRef.current.position.y = Math.sin(scrollOffset * Math.PI) * 0.5;
      meshRef.current.position.x = Math.cos(scrollOffset * Math.PI * 2) * 0.3;
    }
  });

  return (
    <motion.mesh
      ref={meshRef}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      scale={hovered ? 1.2 : 1}
    >
      <boxGeometry args={[2, 2, 2]} />
      <MeshDistortMaterial
        color={hovered ? "#a78bfa" : "#8b5cf6"}
        emissive={hovered ? "#f97316" : "#3b82f6"}
        emissiveIntensity={hovered ? 0.8 : 0.3}
        metalness={0.9}
        roughness={0.2}
        distort={0.3}
        speed={2}
      />
    </motion.mesh>
  );
};

// Three.js Scene Component
const ThreeScene = () => {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ScrollControls pages={4} damping={0.2}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#a78bfa" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#f97316" />
          
          <InteractiveCube />
          
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />
          
          <OrbitControls enableZoom={false} enablePan={false} />
        </ScrollControls>
      </Canvas>
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
          Empowering communities through accessible engineering and innovative design
        </motion.p>
      </div>
    </section>
  );
};

// Team Page
const TeamPage = () => {
  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Founder & Executive Director",
      bio: "Mechanical engineer with 15 years in sustainable design. Passionate about democratizing CAD education and making engineering accessible to underserved communities.",
      avatar: "👩‍🔬"
    },
    {
      name: "Marcus Johnson",
      role: "Chief Technology Officer",
      bio: "Former aerospace engineer turned educator. Specializes in 3D modeling platforms and open-source engineering tools for social impact.",
      avatar: "👨‍💻"
    },
    {
      name: "Priya Patel",
      role: "Community Programs Director",
      bio: "Civil engineer and community organizer. Leads our global outreach initiatives and partnership programs with schools and makerspaces.",
      avatar: "👩‍🏫"
    },
    {
      name: "Alex Rivera",
      role: "Innovation Lead",
      bio: "Industrial designer with expertise in rapid prototyping. Coordinates our innovation teams and mentorship programs for emerging engineers.",
      avatar: "👨‍🎨"
    },
    {
      name: "Dr. Yuki Tanaka",
      role: "Research Director",
      bio: "Materials scientist researching sustainable manufacturing. Oversees our research partnerships and technical publication initiatives.",
      avatar: "👨‍🔬"
    },
    {
      name: "Elena Kowalski",
      role: "Education Coordinator",
      bio: "STEM educator with focus on hands-on learning. Develops curriculum and training materials for our CAD workshops worldwide.",
      avatar: "👩‍🏫"
    }
  ];

  return (
    <section id="team" className="relative min-h-screen py-32 px-6">
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl md:text-7xl font-black text-white mb-20 text-center"
        >
          Our Team
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <GlassyCard key={i} delay={i * 0.1}>
              <div className="text-center">
                <div className="text-6xl mb-4">{member.avatar}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-purple-400 font-semibold mb-4">{member.role}</p>
                <p className="text-white/70 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </GlassyCard>
          ))}
        </div>
      </div>
    </section>
  );
};

// Mission Page
const MissionPage = () => {
  const pillars = [
    {
      title: "Accessibility",
      description: "Breaking down barriers to engineering education by providing free CAD tools, tutorials, and resources to communities worldwide. Everyone deserves access to powerful design technology."
    },
    {
      title: "Engineering for Good",
      description: "Applying engineering principles to solve real-world social and environmental challenges. We partner with communities to design sustainable solutions that make lasting impact."
    },
    {
      title: "CAD for Impact",
      description: "Empowering the next generation of designers and engineers with professional-grade CAD skills. Our workshops and training programs have reached over 50,000 students globally."
    },
    {
      title: "Community Innovation Teams",
      description: "Building collaborative networks of engineers, designers, and problem-solvers. Our innovation teams work on projects ranging from disaster relief to sustainable housing."
    }
  ];

  return (
    <section id="mission" className="relative min-h-screen py-32 px-6">
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl md:text-7xl font-black text-white mb-12 text-center"
        >
          Our Mission
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-2xl text-white/80 text-center mb-20 leading-relaxed"
        >
          To democratize engineering and design by making CAD technology accessible to everyone,
          empowering communities to innovate and solve challenges through collaborative engineering.
        </motion.p>

        <div className="space-y-12">
          {pillars.map((pillar, i) => (
            <GlassyCard key={i} delay={i * 0.15}>
              <h3 className="text-3xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {pillar.title}
              </h3>
              <p className="text-lg text-white/70 leading-relaxed">
                {pillar.description}
              </p>
            </GlassyCard>
          ))}
        </div>
      </div>
    </section>
  );
};

// Join Page
const JoinPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({ name: '', email: '', role: '', message: '' });
    }, 3000);
  };

  return (
    <section id="join" className="relative min-h-screen py-32 px-6">
      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl md:text-7xl font-black text-white mb-12 text-center"
        >
          Join Us
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-white/70 text-center mb-12"
        >
          Be part of a global movement to make engineering accessible to all
        </motion.p>

        <GlassyCard>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-white/90 mb-2 font-semibold">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500 backdrop-blur-sm"
                required
              />
            </div>
            
            <div>
              <label className="block text-white/90 mb-2 font-semibold">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500 backdrop-blur-sm"
                required
              />
            </div>
            
            <div>
              <label className="block text-white/90 mb-2 font-semibold">I want to join as</label>
              <select
                value={formData.role}
                onChange={(e) => setFormData({...formData, role: e.target.value})}
                className="w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500 backdrop-blur-sm"
                required
              >
                <option value="">Select a role...</option>
                <option value="volunteer">Volunteer</option>
                <option value="mentor">Mentor</option>
                <option value="student">Student</option>
                <option value="partner">Partner Organization</option>
                <option value="donor">Donor</option>
              </select>
            </div>
            
            <div>
              <label className="block text-white/90 mb-2 font-semibold">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows={5}
                className="w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500 backdrop-blur-sm resize-none"
                required
              />
            </div>
            
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold rounded-lg shadow-lg hover:shadow-purple-500/50 transition-all"
            >
              Submit Application
            </motion.button>
          </form>
        </GlassyCard>
      </div>

      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-6"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
          >
            <GlassyCard className="max-w-md text-center">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-3xl font-bold text-white mb-4">Thank You!</h3>
              <p className="text-white/70">
                Your application has been received. We'll be in touch soon!
              </p>
            </GlassyCard>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="relative z-10 backdrop-blur-xl bg-black/30 border-t border-purple-500/20 py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-white/60">
          © 2025 IQ Foundation. Engineering solutions for everyone.
        </p>
        <div className="mt-4 flex justify-center gap-6">
          <a href="#" className="text-white/60 hover:text-purple-400 transition-colors">Privacy</a>
          <a href="#" className="text-white/60 hover:text-purple-400 transition-colors">Terms</a>
          <a href="#" className="text-white/60 hover:text-purple-400 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

// ============= MAIN APP =============

export default function IQFoundationApp() {
  return (
    <div className="relative bg-black min-h-screen overflow-x-hidden">
      <ThreeScene />
      <NavBar />
      
      <main className="relative">
        <HomePage />
        <TeamPage />
        <MissionPage />
        <JoinPage />
      </main>
      
      <Footer />
    </div>
  );
}