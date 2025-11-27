import React from 'react';

// Minimal Navbar
const NavBar = () => {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Our Team', href: '#team' },
    { name: 'Mission', href: '#mission' },
    { name: 'Join Us', href: '#join' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-white">IQ</div>
        <div className="flex gap-6">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="text-white/80 hover:text-purple-400">
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

// Minimal Hero Section
const HeroText = () => {
  return (
    <div className="text-center mt-40 px-6">
      <h1 className="text-5xl font-black text-white mb-6">Engineering solutions for communities</h1>
      <p className="text-xl text-white/70 max-w-2xl mx-auto">
        Empowering communities through accessible engineering and innovative design.
      </p>
    </div>
  );
};

// Home Page
const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-black">
      <NavBar />
      <section id="home">
        <HeroText />
      </section>
    </div>
  );
};

export default HomePage;
