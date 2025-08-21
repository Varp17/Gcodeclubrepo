import React from 'react'
import { Github, Link as LinkIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import membersData from '@data/members.json'
import mentorsData from '@data/mentors.json'
import groupsData from '@data/groups.json'

interface CoreMember {
  id: string
  name: string
  role: string
  linkedin: string
  photo: string
}

interface Mentor {
  id: string
  name: string
  role: string
  linkedin: string
  photo: string
  groupId: string
}

interface Member {
  id: string
  name: string
  github: string
  photo: string
}

const coreTeam: CoreMember[] = [
  {
    id: 'core-1',
    name: 'Alex Carter',
    role: 'President',
    linkedin: 'https://linkedin.com/in/alexcarter',
    photo:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80'
  },
  {
    id: 'core-2',
    name: 'Sophie Lee',
    role: 'Vice President',
    linkedin: 'https://linkedin.com/in/sophielee',
    photo:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80'
  },
  {
    id: 'core-3',
    name: 'Ryan Patel',
    role: 'Secretary',
    linkedin: 'https://linkedin.com/in/ryanpatel',
    photo:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80'
  }
]

export default function Members() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12 sm:py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-20"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
            Our Members
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2 leading-relaxed">
            Meet the passionate individuals driving innovation at TechBit Coding Club.
          </p>
        </motion.div>

        {/* Core Team */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16 sm:mb-24"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-16">
            Core Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {coreTeam.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group max-w-xs mx-auto w-full"
              >
                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300 overflow-hidden p-6 sm:p-8 text-center">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover mx-auto mb-4 sm:mb-6 border-4 border-gray-50 group-hover:scale-105 transition-transform duration-300"
                  />
                  <h3 className="text-lg sm:text-xl font-bold mb-1 group-hover:text-blue-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-gray-500 text-sm sm:text-base mb-4">{member.role}</p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-blue-500 hover:text-blue-600 font-medium transition-colors text-sm sm:text-base"
                  >
                    <LinkIcon className="h-4 w-4" />
                    LinkedIn
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Mentors */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16 sm:mb-24"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-16">
            Mentors & Co-Leads
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {mentorsData.map((mentor: Mentor, index) => (
              <motion.div
                key={mentor.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group max-w-xs mx-auto w-full"
              >
                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300 overflow-hidden p-6 sm:p-8 text-center">
                  <img
                    src={mentor.photo}
                    alt={mentor.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover mx-auto mb-4 sm:mb-6 border-4 border-gray-50 group-hover:scale-105 transition-transform duration-300"
                  />
                  <h3 className="text-lg sm:text-xl font-bold mb-1 group-hover:text-blue-600 transition-colors">
                    {mentor.name}
                  </h3>
                  <p className="text-gray-500 text-sm sm:text-base">{mentor.role}</p>
                  <p className="text-gray-400 text-xs sm:text-sm mb-4">
                    {groupsData.find((g) => g.id === mentor.groupId)?.name}
                  </p>
                  <a
                    href={mentor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-blue-500 hover:text-blue-600 font-medium transition-colors text-sm sm:text-base"
                  >
                    <LinkIcon className="h-4 w-4" />
                    LinkedIn
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Active Members */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-16">
            Active Members
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            {membersData.map((member: Member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group max-w-xs mx-auto w-full"
              >
                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300 overflow-hidden p-4 sm:p-6 text-center">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover mx-auto mb-3 sm:mb-4 border-2 border-gray-50 group-hover:scale-105 transition-transform duration-300"
                  />
                  <h3 className="text-base sm:text-lg font-bold mb-3 group-hover:text-blue-600 transition-colors">
                    {member.name}
                  </h3>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 font-medium text-sm sm:text-base"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </section>
  )
}
