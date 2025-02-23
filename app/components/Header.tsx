"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-transparent text-purple-300">
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8OcntNxFVRgFDmdEfDu2TOAOFaGTyJ.png"
            alt="Code Conquerors Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <Link href="/" className="text-2xl font-bold text-purple-400">
            Code Conquerors
          </Link>
        </motion.div>

        {/* Hamburger menu for mobile */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-purple-300 hover:text-purple-200">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop menu */}
        <motion.div
          className="hidden lg:flex items-center space-x-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <NavLink href="/" label="Home" />
          <NavLink href="/portfolio" label="Portfolio" />
          <NavLink href="/Games" label="Games" />
          <NavLink href="/news" label="News" />
        </motion.div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div
          className="lg:hidden bg-[#0A0B1E] border-t border-purple-500/20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <NavLink href="/" label="Home" onClick={toggleMenu} />
            <NavLink href="/portfolio" label="Portfolio" onClick={toggleMenu} />
            <NavLink href="/Games" label="Games" onClick={toggleMenu} />
            <NavLink href="/news" label="News" onClick={toggleMenu} />
          </div>
        </motion.div>
      )}
    </header>
  )
}

const NavLink = ({ href, label, onClick }) => (
  <Link href={href} className="hover:text-purple-200 transition-colors" onClick={onClick}>
    {label}
  </Link>
)

export default Header

