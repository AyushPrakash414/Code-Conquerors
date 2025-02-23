"use client"

import Image from "next/image"
import { Github, Linkedin, Mail, Twitter, Instagram } from "lucide-react"
import AnimatedSection from "../components/AnimatedSection"

const members = [
  {
    id: 1,
    name: "Aryan Jaiswal",
    role: "Android App Developer",
    description: "Founder of Code Conquerors, passionate about Android development and building innovative solutions.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-17%20at%2012.33.45%20AM-muVjuvY2PRWF7Hetaip84mTq85CQ9a.jpeg",
    profileUrl: "https://github.com/DebugWithAryan",
    social: {
      github: "https://github.com/DebugWithAryan",
      linkedin: "https://www.linkedin.com/in/aryanjaiswal1",
      twitter: "https://x.com/Aryan_eee",
      instagram: "https://www.instagram.com/slayyyy_aryan",
      email: "aryanjaiswal123123@gmail.com",
    },
  },
  {
    id: 2,
    name: "Ayush Prakash Tiwari",
    role: "Backend Developer",
    description: "Spring Boot expert and backend architecture specialist. Passionate about building scalable systems.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202023-10-10%20at%202.58.45%20PM-aEIhypOCEsMY6VCpipfJCkn0cAOOS6.jpeg",
    profileUrl: "https://codolio.com/profile/Dd99JA6n",
    social: {
      github: "https://github.com/AyushPrakash414",
      linkedin: "https://www.linkedin.com/in/ayush-prakash-tiwari-5281b2286/",
      twitter: "https://x.com/iammrprakash29",
      email: "contact@ayushprakash.com",
    },
  },
  {
    id: 3,
    name: "Soham Ghosh",
    role: "Competitive Programmer and Data Structures and Algorithmn Expert",
    description:
      "A passionate Competitive Programmer and Data Structure Expert, skilled in solving complex algorithmic challenges efficiently.",
    image:
      "https://iabmgwklaox45mux.public.blob.vercel-storage.com/1000065389%20(1)-HVq2crWeSDMN2xxGb1lVejATmS7riJ.jpg",
    profileUrl: "https://codolio.com/profile/codingsoham",
    social: {
      github: "https://github.com/codingsoham",
      linkedin: "https://www.linkedin.com/in/codingsoham",
      twitter: "https://x.com/codingsoham",
      email: "231B341@juetguna.in",
    },
  },
  {
    id: 4,
    name: "Aaradhya Waoo",
    role: "MERN Stack Developer",
    description: "MERN Stack Expert, Content Creator, Professional Orator, 9.2+ CGPA",
    image:
      "https://iabmgwklaox45mux.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-17%20at%208.49.00%20PM-HihegFcVLtDrUbQeWd0AJ1iCCJFWLd.jpeg",
    profileUrl: "https://github.com/aaradhyawaoo",
    social: {
      github: "https://github.com/aaradhyawaoo",
      linkedin: "www.linkedin.com/in/aaradhya-waoo",
      twitter: "https://x.com/AaradhyaWaoo",
      email: "231B001@juetguna.in",
    },
  },
  {
    id: 5,
    name: "Avinash Sharma",
    role: "App Developer kotlin, Android",
    description:
      "skilled in Kotlin and Jetpack Compose. Passionate about building user-friendly Android apps. Quick learner, creative, and analytical.",
    image:
      "https://iabmgwklaox45mux.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-17%20at%2010.53.09%20AM-HZTx4NDo7IDO5MIy9GPs8jHRlS1BRO.jpeg",
    profileUrl: "https://codolio.com/profile/Avinash_Coder",
    social: {
      github: "https://github.com/Avinash-Codes",
      linkedin: "https://www.linkedin.com/in/avinash-sharma-59406b280/",
      twitter: "https://x.com/_AvinashSharma_",
      email: "231B078@juetguna.in",
    },
  },
  {
    id: 6,
    name: "Ayaan Khan",
    role: "Competitive Programmer and Data Structures and Algorithmn Expert",
    description:
      "A passionate Competitive Programmer and Data Structure Expert, skilled in solving complex algorithmic challenges efficiently.",
    image:
      "https://iabmgwklaox45mux.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-17%20at%209.43.59%20PM-6HWisdH3P6nLoQu0Gc5fVADc5LEHpl.jpeg",
    profileUrl: "https://codolio.com/profile/khan/card",
    social: {
      linkedin: "https://www.linkedin.com/in/ayaan-khan79/",
      twitter: "https://x.com/khanayaan6067",
      email: "231B079@juetguna.in",
    },
  },

  {
    id: 7,
    name: "Satyam kumar",
    role: "M.L Developer",
    description:
      "I am a curious and driven Machine Learning enthusiast, passionate about technology, neuroscience, and the cosmos. As a second-year CSE student, I love exploring how machines learn and applying this knowledge to solve complex problems and make predictions.",
    image:
      "https://iabmgwklaox45mux.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-17%20at%209.45.53%20PM-r3MNThjbtNl12kvvz9MwP8eU4UShd7.jpeg",
    profileUrl: "https://github.com/isatyamks",
    social: {
      linkedin: "https://www.linkedin.com/in/isatyamks/",
      twitter: "https://x.com/@isatyamks",
      github: "https://github.com/isatyamks",
      email: "231B0297@juetguna.in"
    },
  },

]

export default function Portfolio() {
  return (
    <div className="container mx-auto px-4 py-12">
      <AnimatedSection className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 text-purple-300">Our Team</h1>
        <p className="text-purple-300 max-w-2xl mx-auto">
          Meet the brilliant minds behind Code Conquerors. Our diverse team brings together different skills and
          perspectives.
        </p>
      </AnimatedSection>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map((member, index) => (
          <AnimatedSection key={member.id}>
            <div
              className="group relative bg-[#0A0B1E]/50 backdrop-blur-sm rounded-lg overflow-hidden border border-purple-500/20 cursor-pointer"
              onClick={() => window.open(member.profileUrl, "_blank")}
            >
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full shadow-lg">Click Me!</span>
              </div>

              <div className="relative h-64 flex items-center justify-center overflow-hidden bg-[#0A0B1E]">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-purple-300">{member.name}</h2>
                <p className="text-purple-400 mb-2">{member.role}</p>
                <p className="text-gray-400 mb-4">{member.description}</p>
                <div className="flex space-x-4">
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  {member.social.instagram && (
                    <a
                      href={member.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  )}
                  <a
                    href={`mailto:${member.social.email}`}
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  )
}

