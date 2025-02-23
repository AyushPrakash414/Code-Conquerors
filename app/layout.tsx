import type React from "react"
import "./globals.css"
import { Poppins } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"
import AnimatedBackground from "./components/AnimatedBackground"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata = {
  title: "Code Conquerors",
  description: "Official website of the Code Conquerors college club",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-poppins`}>
        <AnimatedBackground />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

