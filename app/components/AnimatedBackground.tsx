"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function AnimatedBackground() {
  const [brackets, setBrackets] = useState<Array<{ id: number; x: number; y: number }>>([])

  useEffect(() => {
    // Reduce number of brackets and ensure better spacing
    const newBrackets = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.floor(Math.random() * 80) + 10, // Keep brackets away from edges
      y: Math.floor(Math.random() * 80) + 10,
    }))
    setBrackets(newBrackets)
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0A0B1E]">
      {brackets.map((bracket) => (
        <motion.div
          key={bracket.id}
          className="absolute text-purple-500/10 text-2xl pointer-events-none"
          initial={{
            x: `${bracket.x}vw`,
            y: `${bracket.y}vh`,
          }}
          animate={{
            x: [`${bracket.x}vw`, `${bracket.x + 5}vw`, `${bracket.x}vw`],
            y: [`${bracket.y}vh`, `${bracket.y + 5}vh`, `${bracket.y}vh`],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          {"</>"}
        </motion.div>
      ))}
    </div>
  )
}

