"use client"

import Image from "next/image"
import AnimatedSection from "../components/AnimatedSection"

const newsItems = [
  {
    id: 1,
    title: "Upcoming Hackathon: ResKill AllHacks",
    date: "March 15, 2025",
    excerpt:
      "Join us for an exciting hackathon experience with ResKill AllHacks. Showcase your skills, learn from experts, and win amazing prizes!",
    image: "https://reskilll.com/images/allhacks/allhacks-banner.png",
    link: "https://reskilll.com/allhacks",
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
                  <p className="text-gray-400 mb-4">{item.excerpt}</p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 transition-colors inline-flex items-center"
                  >
                    Read more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          </AnimatedSection>
        ))}
      </div>
    </div>
  )
}

