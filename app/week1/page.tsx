"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useAnimationSettings } from "@/hooks/useAnimationSettings"

export default function Week1Page() {
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
            WEEK 1
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
              src={`/kineticsculpture.jpeg`}
              alt="Week 1 Assignment"
              width={800}
              height={600}
              className="w-full object-cover transition-transform duration-300 group-hover:scale-105 duotone-effect"
            />
          </div>

          <section className="space-y-6">
            <h2 className="text-[1.5rem] font-['Monument']">PROEJCT ONE: WEB CONTROLLED KINETIC SCULPTURE</h2>
            <p className="text-[#e0e0e0] leading-relaxed text-lg">
              A twisting helix that rotates and expands vertically, mimicking natural spirals like DNA strands. Controlled by stepper motors accessed via the web and it will be able to be adjusted for speed and height for a hypnotic display.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-[1.5rem] font-['Monument']">FABRICATION ELEMENTS</h2>
            <div className="text-[#e0e0e0] leading-relaxed text-lg space-y-4">
              <p>
                <strong>Structure:</strong> 3D-printed spiral arms from lightweight materials (PLA, acrylic).
              </p>
              <p>
                <strong>Motion System:</strong> Stepper motors for rotation and height control, with threaded rods for smooth movement.
              </p>
              <p>
                <strong>Electronics & Programming:</strong> Microcontroller (Arduino/Raspberry Pi) managing motion with adjustable speed via web interface or physical input. Potential for interactive responses to touch.
              </p>
            </div>
          </section>


          <div className="relative group overflow-hidden rounded-lg">
            <Image
              src={`/smartgreenhouse.jpg`}
              alt="Week 1 Assignment"
              width={800}
              height={600}
              className="w-full object-cover transition-transform duration-300 group-hover:scale-105 duotone-effect"
            />
          </div>

          <section className="space-y-6">
            <h2 className="text-[1.5rem] font-['Monument']">PROJECT TWO: IOT-CONTROLLED MINI GREENHOUSE</h2>
            <p className="text-[#e0e0e0] leading-relaxed text-lg">
              A compact, smart greenhouse that monitors plant conditions and allows remote adjustments via a web dashboard. Sensors track moisture and temperature, while users can control watering, lighting, and ventilation.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-[1.5rem] font-['Monument']">FABRICATION ELEMENTS</h2>
            <div className="text-[#e0e0e0] leading-relaxed text-lg space-y-4">
              <p>
                <strong>Structure:</strong> Laser-cut acrylic panels with a metal frame for durability.
              </p>
              <p>
                <strong>Sensors & Components:</strong> Soil moisture and temperature sensors, small fans, LED grow lights, and automated watering system.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-[1.5rem] font-['Monument']">PROGRAMMING</h2>
            <div className="text-[#e0e0e0] leading-relaxed text-lg space-y-4">
              <p>Microcontroller (Arduino/Raspberry Pi) collects and transmits sensor data.</p>
              <p>Web interface lets users adjust settings like lighting and watering.</p>
            </div>
          </section>


          <div className="relative group overflow-hidden rounded-lg">
            <Image
              src={`/smartbinos.png`}
              alt="Week 1 Assignment"
              width={800}
              height={600}
              className="w-full object-cover transition-transform duration-300 group-hover:scale-105 duotone-effect"
            />
          </div>

          <section className="space-y-6">
            <h2 className="text-[1.5rem] font-['Monument']">PROJECT THREE: VISION MODEL-POWERED BINOCULARS</h2>
            <p className="text-[#e0e0e0] leading-relaxed text-lg">
              Smart binoculars enhanced with a computer vision model to identify and track objects. Users can view augmented information about wildlife, landmarks, or celestial bodies through an integrated display.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-[1.5rem] font-['Monument']">FABRICATION ELEMENTS</h2>
            <div className="text-[#e0e0e0] leading-relaxed text-lg space-y-4">
              <p>
                <strong>Structure:</strong> 3D-printed or CNC-machined casing for durability and ergonomics.
              </p>
              <p>
                <strong>Optics & Sensors:</strong> High-resolution camera, depth sensor, and a built-in display for real-time overlays.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-[1.5rem] font-['Monument']">PROGRAMMING</h2>
            <div className="text-[#e0e0e0] leading-relaxed text-lg space-y-4">
              <p>Vision Model for object detection and classification.</p>
              <p>Microcontroller (Raspberry Pi/Jetson Nano) processes real-time data and renders augmented overlays.</p>
            </div>
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