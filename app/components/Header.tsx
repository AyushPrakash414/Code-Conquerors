"use client";
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"

const Header = () => {
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
        <motion.div
          className="flex items-center space-x-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link href="/" className="hover:text-purple-200 transition-colors">
            Home
          </Link>
          <Link href="/portfolio" className="hover:text-purple-200 transition-colors">
            Portfolio
          </Link>
           <Link href="/Games" className="hover:text-purple-200 transition-colors">
            Games
          </Link>
          <Link href="/news" className="hover:text-purple-200 transition-colors">
            News
          </Link>
        </motion.div>
      </nav>
    </header>
  )
}

export default Header

