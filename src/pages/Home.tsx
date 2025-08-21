import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/video/club-hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-gray-50/80" />

        {/* Hero Content */}
        <div className="relative z-10 px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6"
          >
            Welcome to <span className="text-blue-600">TechBit Coding Club</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Explore, Learn, and Build with 4 powerful domains:{" "}
            <span className="font-semibold text-blue-600">AI & ML</span>,{" "}
            <span className="font-semibold text-blue-600">Data Science</span>,{" "}
            <span className="font-semibold text-blue-600">Java Microservices</span>, and{" "}
            <span className="font-semibold text-blue-600">MERN Stack</span>.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex justify-center gap-4 flex-wrap"
          >
            <Link
              to="/join"
              className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 hover:shadow-xl transition"
            >
              Join Us
            </Link>
            <Link
              to="/projects"
              className="px-6 py-3 rounded-xl border-2 border-blue-600 text-blue-600 font-semibold bg-white/80 backdrop-blur-sm hover:bg-blue-50 transition flex items-center"
            >
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>



      {/* Projects Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-10">Our Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
              <h3 className="font-semibold text-lg text-blue-600">AI & ML</h3>
              <p className="text-gray-600 mt-2">Smart solutions using deep learning, computer vision, and NLP.</p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
              <h3 className="font-semibold text-lg text-blue-600">Data Science</h3>
              <p className="text-gray-600 mt-2">Turning raw data into powerful insights and dashboards.</p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
              <h3 className="font-semibold text-lg text-blue-600">MERN Stack</h3>
              <p className="text-gray-600 mt-2">Building full-stack applications with modern web technologies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Members Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-10">Our Members</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A team of innovators, coders, designers, and thinkers working together to build the future.
          </p>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Resources</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-10">
            Access curated tutorials, learning paths, and project resources to accelerate your coding journey.
          </p>
          <Link
            to="/resources"
            className="inline-block px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 hover:shadow-xl transition"
          >
            Explore Resources
          </Link>
        </div>
      </section>
    </main>
  )
}
