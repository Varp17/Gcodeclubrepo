import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden px-4 sm:px-6">
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
        <div className="relative z-10 w-full max-w-5xl mx-auto py-8 sm:py-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 mb-4 sm:mb-6 leading-tight"
          >
            Welcome to <br className="sm:hidden" />
            <span className="text-blue-600">TechBit Coding Club</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-10 px-2"
          >
            Explore, Learn, and Build with 4 powerful domains:{" "}
            <span className="font-semibold text-blue-600 whitespace-nowrap">AI & ML</span>,{" "}
            <span className="font-semibold text-blue-600 whitespace-nowrap">Data Science</span>,{" "}
            <span className="font-semibold text-blue-600 whitespace-nowrap">Java Microservices</span>, and{" "}
            <span className="font-semibold text-blue-600 whitespace-nowrap">MERN Stack</span>.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 items-center"
          >
            <Link
              to="/join"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-200 text-center min-h-[52px] flex items-center justify-center"
            >
              Join Us
            </Link>
            <Link
              to="/projects"
              className="w-full sm:w-auto px-8 py-4 rounded-xl border-2 border-blue-600 text-blue-600 font-semibold bg-white/80 backdrop-blur-sm hover:bg-blue-50 transition-all duration-200 flex items-center justify-center min-h-[52px] gap-2"
            >
              View Projects <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 sm:mb-10"
          >
            Our Projects
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "AI & ML",
                description: "Smart solutions using deep learning, computer vision, and NLP."
              },
              {
                title: "Data Science", 
                description: "Turning raw data into powerful insights and dashboards."
              },
              {
                title: "MERN Stack",
                description: "Building full-stack applications with modern web technologies."
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white shadow-md rounded-xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <h3 className="font-semibold text-lg sm:text-xl text-blue-600 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {project.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Members Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-10"
          >
            Our Members
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed px-4"
          >
            A team of innovators, coders, designers, and thinkers working together to build the future 
            through collaborative learning and cutting-edge projects.
          </motion.p>

          {/* Member Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8"
          >
            {[
              { number: "100+", label: "Active Members" },
              { number: "50+", label: "Projects Completed" },
              { number: "4", label: "Tech Domains" },
              { number: "2+", label: "Years Strong" }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6"
          >
            Resources
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-10 text-sm sm:text-base leading-relaxed px-4"
          >
            Access curated tutorials, learning paths, and project resources to accelerate your coding journey. 
            From beginner guides to advanced techniques.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              to="/resources"
              className="inline-block w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-200 min-h-[52px] flex items-center justify-center max-w-xs mx-auto sm:max-w-none"
            >
              Explore Resources
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}