import React from "react"
import { LinkIcon } from "lucide-react"
import { motion } from "framer-motion"
import resourcesData from "@data/resources.json"

interface Resource {
  id: string
  title: string
  url: string
  groupId: string
}

export default function Resources() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900"
        >
          Learning Resources
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto"
        >
          Explore curated resources to master{" "}
          <span className="font-semibold text-blue-600">AI</span>,{" "}
          <span className="font-semibold text-blue-600">Data Science</span>,{" "}
          <span className="font-semibold text-blue-600">Java Microservices</span>, and{" "}
          <span className="font-semibold text-blue-600">MERN Stack</span>.
        </motion.p>
      </div>

      {/* Resource Cards */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="max-w-6xl mx-auto px-6 lg:px-12 pb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {resourcesData.map((resource: Resource) => (
          <motion.div
            key={resource.id}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="group relative bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-2xl transition overflow-hidden"
          >
            {/* Animated Top Border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

            <a
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 flex items-center justify-between">
                {resource.title}
                <LinkIcon className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition" />
              </h3>
              <p className="mt-3 text-sm text-gray-600 group-hover:text-gray-800 transition">
                Click to explore this resource.
              </p>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
