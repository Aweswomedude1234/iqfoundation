import React, { useRef, useState, useEffect } from 'react';
import { motion } from "framer-motion-3d";
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, ScrollControls, useScroll as useThreeScroll, MeshDistortMaterial, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// =================================
// NAVBAR
// =================================
const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
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
      style={{ borderBottom: '1px solid rgba(139, 92, 246, 0.2)' }}
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

// =================================
// INTERACTIVE CUBE
// =================================
const InteractiveCube = () => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);
  const scrollData = useThreeScroll();

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    const scrollOffset = scrollData.offset;
    meshRef.current.rotation.y = scrollOffset * Math.PI * 2;
    meshRef.current.rotation.x = scrollOffset * Math.PI;
    meshRef.current.rotation.z += delta * 0.2;
  });

  return (
    <motion.mesh
      ref={meshRef}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5 }}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
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

// =================================
// 3D SCENE
// =================================
const ThreeScene = () => (
  <div className="fixed inset-0 z-0">
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
      <ScrollControls pages={4} damping={0.2}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#a78bfa" />
        <InteractiveCube />
        <Stars radius={100} depth={50} count={3000} fade speed={1} />
        <OrbitControls enableZoom={false} enablePan={false} />
      </ScrollControls>
    </Canvas>
  </div>
);

// =================================
// HERO TEXT
// =================================
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
          transition={{ duration: 0.8, delay: i * 0.3 }}
          className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tight"
        >
          {word}
        </motion.h1>
      ))}
    </div>
  );
};

// =================================
// HOME PAGE
// =================================
const HomePage = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center px-6">
    <div className="relative z-10">
      <HeroText />
    </div>
  </section>
);

// =================================
// EXPORT PAGE
// =================================
export default function IQFoundationSite() {
  return (
    <div className="relative min-h-screen text-white">
      <NavBar />
      <ThreeScene />
      <HomePage />
    </div>
  );
}
