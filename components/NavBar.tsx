/* FILE 7 — components/NavBar.tsx */
/* Final fixed header with correct logo rendering and correct spacing */

import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[rgba(0,0,0,0.45)] backdrop-blur-xl border-b border-white/10">
      <nav className="container mx-auto flex items-center justify-between py-4 px-4 md:px-6">
        
        {/* Logo + Title */}
        <Link href="/" className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full overflow-hidden border border-white/20 shadow-lg bg-black flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="IQ Foundation Logo"
              width={140}
              height={140}
              className="object-cover"
              unoptimized
              priority
            />
          </div>

          <span className="text-2xl font-bold tracking-tight text-white">
            IQ Foundation
          </span>
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-10 text-[16px] font-semibold text-white">
          <Link href="/" className="hover:text-cyan-300 transition">Home</Link>
          <Link href="/mission" className="hover:text-cyan-300 transition">Mission</Link>
          <Link href="/team" className="hover:text-cyan-300 transition">Team</Link>
          <Link href="/join" className="hover:text-cyan-300 transition">Join</Link>
        </div>
      </nav>
    </header>
  );
}
