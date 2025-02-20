"use client"

import Image from "next/image"
import dynamic from "next/dynamic"

const AnimatedSection = dynamic(() => import("../components/AnimatedSection"), { ssr: false })

const newsItems = [
  {
    id: 1,
    title: "Code Conquerors Community Orientation",
    date: "February 24, 2025",
    excerpt:
      "Join us for the official orientation of the Code Conquerors community! Learn about our mission, upcoming events, and how you can get involved in shaping the future of coding.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8OcntNxFVRgFDmdEfDu2TOAOFaGTyJ.png",
  },
  // Add more news items here if needed
]

export default function News() {
  return (
    <div className="container mx-auto px-4 py-12">
      <AnimatedSection>
        <h1 className="text-4xl font-bold mb-8 text-center text-purple-300">Latest News</h1>
      </AnimatedSection>
      <div className="space-y-8">
        {newsItems.map((item) => (
          <AnimatedSection key={item.id}>
            <article className="bg-[#0A0B1E]/50 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20 overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={300}
                    height={200}
                    className="h-48 w-full object-cover md:w-48 rounded-lg"
                  />
                </div>
                <div className="mt-4 md:mt-0 md:ml-6">
                  <h2 className="text-2xl font-semibold mb-2 text-purple-300">{item.title}</h2>
                  <p className="text-purple-400 mb-4">{item.date}</p>
                  <p className="text-gray-400">{item.excerpt}</p>
                </div>
              </div>
            </article>
          </AnimatedSection>
        ))}
      </div>
    </div>
  )
}

