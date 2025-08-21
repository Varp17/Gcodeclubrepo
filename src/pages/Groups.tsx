import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Brain, Code, Database, Server, Users } from 'lucide-react'
import { motion } from 'framer-motion'
import groupsData from '@data/groups.json'

interface Group {
  id: string
  name: string
  description: string
  banner: string
}

const groupIcons: Record<string, React.ReactNode> = {
  'ai-ml': <Brain className="h-8 w-8 text-[rgb(var(--primary-rgb))]" />,
  'data-science': <Database className="h-8 w-8 text-green-600" />,
  'java-microservices': <Server className="h-8 w-8 text-red-500" />,
  'mern-stack': <Code className="h-8 w-8 text-yellow-600" />,
}

const groupColors: Record<string, string> = {
  'ai-ml': 'border-l-blue-500',
  'data-science': 'border-l-green-500',
  'java-microservices': 'border-l-red-500',
  'mern-stack': 'border-l-yellow-500',
}

const techStacks: Record<string, string[]> = {
  'ai-ml': ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn'],
  'data-science': ['Python', 'Pandas', 'Plotly', 'Seaborn'],
  'java-microservices': ['Java', 'Spring Boot', 'REST APIs', 'Docker'],
  'mern-stack': ['MongoDB', 'Express.js', 'React', 'Node.js'],
}

const memberCounts: Record<string, number> = {
  'ai-ml': 25,
  'data-science': 20,
  'java-microservices': 18,
  'mern-stack': 22,
}

export default function Groups() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-[rgb(var(--foreground-rgb))] mb-6">
            Our Specialized Groups
          </h1>
          <p className="text-lg text-[rgb(var(--text-secondary-rgb))] max-w-3xl mx-auto leading-relaxed">
            Join one of our specialized groups to dive deep into cutting-edge technologies
            and collaborate on exciting projects with like-minded developers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {groupsData.map((group: Group, index) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className={`bg-white rounded-lg shadow-lg hover:shadow-2xl border-l-4 ${groupColors[group.id]}
                             transition-all duration-300 overflow-hidden h-full`}>

                {/* Header with Icon and Title */}
                <div className="p-8 pb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      {groupIcons[group.id]}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[rgb(var(--foreground-rgb))] group-hover:text-[rgb(var(--primary-rgb))] transition-colors">
                        {group.name}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[rgb(var(--text-secondary-rgb))] leading-relaxed mb-6">
                    {group.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {techStacks[group.id].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm font-medium bg-blue-50 text-blue-700
                                   rounded-full border border-blue-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Members Count */}
                  <div className="flex items-center gap-2 mb-6 text-[rgb(var(--text-muted-rgb))]">
                    <Users className="h-4 w-4" />
                    <span className="text-sm font-medium">
                      {memberCounts[group.id]} Active Members
                    </span>
                  </div>
                </div>

                {/* Footer with CTA */}
                <div className="px-8 pb-8">
                  <Link
                    to={`/groups/${group.id}`}
                    className="inline-flex items-center justify-center w-full px-6 py-3
                               bg-[rgb(var(--primary-rgb))] hover:bg-[rgb(var(--primary-hover-rgb))]
                               text-white font-medium rounded-lg transition-all duration-200
                               hover:shadow-lg group"
                  >
                    Explore Group
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16 p-8 bg-white rounded-lg shadow-sm border"
        >
          <h2 className="text-2xl font-bold text-[rgb(var(--foreground-rgb))] mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-[rgb(var(--text-secondary-rgb))] mb-6 max-w-2xl mx-auto">
            Join our coding club and get access to all groups, exclusive resources,
            and collaborative projects with fellow developers.
          </p>
          <Link
            to="/join"
            className="inline-flex items-center px-8 py-4 bg-[rgb(var(--primary-rgb))]
                       hover:bg-[rgb(var(--primary-hover-rgb))] text-white font-semibold
                       rounded-lg transition-all duration-200 hover:shadow-lg"
          >
            Join All Groups
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}