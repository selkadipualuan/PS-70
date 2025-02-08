"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useAnimationSettings } from "../hooks/useAnimationSettings"
import Image from "next/image"

export default function AboutPage() {
  const { isAnimationsEnabled, transition } = useAnimationSettings()

  return (
    <div className="min-h-screen bg-black text-[#f5f5f5]">
      <motion.header
        className="py-8 md:py-12"
        initial={isAnimationsEnabled ? { opacity: 0, y: -20 } : false}
        animate={{ opacity: 1, y: 0 }}
        transition={transition}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-[2rem] md:text-[2.5rem] text-center tracking-wide font-['Monument']">
            ABOUT
          </h1>
        </div>
      </motion.header>

      <main className="container mx-auto px-4 py-8 md:py-12">
        <motion.div
          className="max-w-3xl mx-auto space-y-12"
          initial={isAnimationsEnabled ? { opacity: 0, y: 20 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.2 }}
        >
          <div className="relative group overflow-hidden rounded-lg">
            <Image
              src="/calvinprofile.jpg"
              alt="Profile Image" 
              width={400}
              height={300}
              className="w-full object-cover transition-transform duration-300 group-hover:scale-105 duotone-effect"
            />
          </div>

          <section className="space-y-6">
            <h2 className="text-[1.5rem] font-['Monument']">BACKGROUND</h2>
            <p className="text-[#e0e0e0] leading-relaxed text-lg">
              I'm Calvin Beighle, a designer, builder, and problem solver with experience in technology, product management, and business operations. I've worked as COO at Martian, leading strategic growth and operations, and as a Technical Program Manager at Tesla, working on complex engineering projects. I now run Angus Made This, where I focus on design, development, and creative problem-solving across various industries.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-[1.5rem] font-['Monument']">EXPERTISE</h2>
            <div className="text-[#e0e0e0] leading-relaxed text-lg space-y-4">
              <p>
                <strong>• Product & Project Management</strong> – Experienced in leading cross-functional teams, streamlining workflows, and managing complex technical projects.
              </p>
              <p>
                <strong>• Software & Web Development</strong> – Skilled in Next.js, React, and UI/UX design, building intuitive and high-performance digital experiences.
              </p>
              <p>
                <strong>• Automation & AI Integration</strong> – Passionate about optimizing workflows and leveraging AI-driven tools for efficiency and innovation.
              </p>
              <p>
                <strong>• Business Strategy & Operations</strong> – Background in scaling businesses, structuring teams, and driving growth through process optimization and strategic planning.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-[1.5rem] font-['Monument']">VISION</h2>
            <p className="text-[#e0e0e0] leading-relaxed text-lg">
              I'm interested in projects that bridge the gap between digital and physical experiences, blending design, engineering, and interactivity. My goal is to create work that is both highly functional and visually engaging, whether through software, automation, or interactive installations. This course is an opportunity to push creative and technical boundaries, experimenting with new tools and approaches.
            </p>
          </section>

          <motion.div
            className="pt-8 flex justify-center"
            whileHover={isAnimationsEnabled ? { scale: 1.05 } : undefined}
            whileTap={isAnimationsEnabled ? { scale: 0.95 } : undefined}
          >
            <Link
              href="/"
              className="bg-[#f5f5f5] text-black px-8 py-3 rounded-md hover:bg-[#e0e0e0] transition-all duration-300 shadow-md hover:shadow-lg text-lg"
            >
              BACK TO PROJECTS
            </Link>
          </motion.div>
        </motion.div>
      </main>
    </div>
  )
} 