import { Github, Instagram, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="bg-[#0A0B1E] text-purple-300 py-16 border-t border-purple-500/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8OcntNxFVRgFDmdEfDu2TOAOFaGTyJ.png"
                alt="Code Conquerors Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <h3 className="text-xl font-bold text-purple-400">Code Conquerors</h3>
            </div>
            <p className="text-gray-400">A community of passionate developers building the future together.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <nav className="space-y-3">
              <Link href="/" className="block text-gray-400 hover:text-purple-300 transition-colors">
                Home
              </Link>
              <Link href="/portfolio" className="block text-gray-400 hover:text-purple-300 transition-colors">
                Teams
              </Link>
              <Link href="/news" className="block text-gray-400 hover:text-purple-300 transition-colors">
                News
              </Link>
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/DebugWithAryan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-300 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/slayyyy_aryan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-300 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/aryanjaiswal1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-300 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://x.com/Aryan_eee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-300 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-purple-500/20 text-center text-gray-400">
          <p className="text-sm">&copy; {new Date().getFullYear()} Code Conquerors. All rights reserved.</p>
          <div className="mt-2 flex items-center justify-center space-x-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gjR4JBOzN4Q9P9XiwuzC3BZ430bGTL.png"
              alt="JUET Logo"
              width={20}
              height={20}
              className="rounded-full"
            />
            <p className="text-xs">Official Coding Club of Jaypee University of Engineering and Technology</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

