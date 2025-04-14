import "./globals.css"
import { Press_Start_2P, VT323 } from "next/font/google"
import type React from "react"
import ColorfulPixelLogo from "./components/ColorfulPixelLogo"
import BlinkingCursor from "./components/BlinkingCursor"
import FloatingPixels from "./components/FloatingPixels"
import SoundEffect from "./components/SoundEffect"
import PixelatedBackground from "./components/PixelatedBackground"
import Footer from "./components/Footer"
import ControlPanel from "./components/ControlPanel"

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start-2p",
})

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
})

export const metadata = {
  title: "Andrea Serravalle's Digital Space",
  description: "Tech, Art, and Finance with a retro pixel aesthetic",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${pressStart2P.variable} ${vt323.variable} font-sans bg-black text-white dark:bg-black dark:text-white light-mode:bg-white light-mode:text-black`}
      >
        <PixelatedBackground />
        <div className="max-w-4xl mx-auto px-4 flex flex-col min-h-screen">
          {/* Top section with header and control panel */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between py-8">
            {/* Header */}
            <header className="flex flex-col items-center  flex-grow">
              <ColorfulPixelLogo />
              <p className="text-xl text-center font-mono flex items-center">
                Data • Machine Learning • Artificial Intelligence <BlinkingCursor />
              </p>
            </header>

            {/* Control Panel Container */}
            <div className="mt-6 md:mt-0 md:ml-4 flex justify-center">
              <ControlPanel />
            </div>
          </div>

          <main className="py-8 flex-grow">{children}</main>
          <Footer />
        </div>
        <FloatingPixels />
        <SoundEffect />
      </body>
    </html>
  )
}


import './globals.css'