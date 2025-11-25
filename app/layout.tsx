/* FILE 2: app/layout.tsx */
import './globals.css'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import type { ReactNode } from 'react'

export const metadata = {
  title: 'IQ Foundation - Engineering for Everyone',
  description: 'Youth-led nonprofit using CAD and engineering to support local community organizations.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <div style={{paddingTop:76}}>{/* reserve space for fixed NavBar */}</div>
        {children}
        <Footer />
      </body>
    </html>
  )
}
