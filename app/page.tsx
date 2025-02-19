import Link from "next/link"
import { ArrowRight, Code2, Users, Rocket } from "lucide-react"
import AnimatedSection from "./components/AnimatedSection"

export default function Home() {
  return (
    <div className="min-h-screen">
      <AnimatedSection className="relative overflow-hidden py-20 sm:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Conquering Code,
              <br className="hidden sm:block" />
              One Line at a Time
            </h1>
            <p className="text-lg sm:text-xl mb-8 text-purple-200 max-w-2xl mx-auto">
              Join our community of passionate coders and innovators. Together, we explore, learn, and build the future
              of technology.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/portfolio"
                className="group bg-purple-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-purple-700 transition-colors inline-flex items-center gap-2"
              >
                Meet Our Team
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/news"
                className="group bg-purple-900/20 text-purple-300 border border-purple-500/20 px-6 py-3 rounded-lg text-lg hover:bg-purple-900/30 transition-colors inline-flex items-center gap-2"
              >
                Latest Updates
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <section className="py-20 bg-[#0A0B1E]/50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Code2 className="w-12 h-12 text-purple-400 mb-4" />}
              title="Technical Excellence"
              description="Master DSA, competitive programming, and modern development frameworks through hands-on workshops and mentorship."
            />
            <FeatureCard
              icon={<Users className="w-12 h-12 text-purple-400 mb-4" />}
              title="Community Growth"
              description="Connect with like-minded peers, share knowledge, and grow together in a supportive environment."
            />
            <FeatureCard
              icon={<Rocket className="w-12 h-12 text-purple-400 mb-4" />}
              title="Innovation Hub"
              description="Transform ideas into reality through hackathons, projects, and collaboration opportunities."
            />
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({  icon, title, description }) {
  return (
    <div className="bg-purple-900/20 backdrop-blur-sm p-8 rounded-lg border border-purple-500/20 transition-all duration-300 hover:scale-105 hover:bg-purple-900/30">
      {icon}
      <h3 className="text-2xl font-semibold mb-4 text-purple-300">{title}</h3>
      <p className="text-purple-200">{description}</p>
    </div>
  )
}

