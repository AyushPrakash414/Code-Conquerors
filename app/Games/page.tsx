"use client"

import dynamic from "next/dynamic"
import AnimatedSection from "../components/AnimatedSection"

const DragAndDrop = dynamic(() => import("./DragAndDrop"), { ssr: false })

export default function GamesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <AnimatedSection>
        <h1 className="text-4xl font-bold mb-8 text-center text-purple-300">Coding Games</h1>
      </AnimatedSection>
      <DragAndDrop />
    </div>
  )
}

