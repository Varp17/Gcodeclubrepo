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
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
  },
  {
    id: 'core-2',
    name: 'Sophie Lee',
    role: 'Vice President',
    linkedin: 'https://linkedin.com/in/sophielee',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
  },
  {
    id: 'core-3',
    name: 'Ryan Patel',
    role: 'Secretary',
    linkedin: 'https://linkedin.com/in/ryanpatel',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
  },
]

export default function Members() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header - Ultra Spacious */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-[rgb(var(--foreground-rgb))] mb-6">
            Our Members
          </h1>
          <p className="text-lg text-[rgb(var(--text-secondary-rgb))] max-w-3xl mx-auto leading-relaxed">
            Meet the passionate individuals driving innovation at TechBit Coding Club.
            Building the future through collaborative learning and cutting-edge projects.
          </p>
        </motion.div>

        {/* Core Team */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--foreground-rgb))] text-center mb-16">
            Core Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {coreTeam.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="group"
              >
                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl border border-gray-100
                             transition-all duration-300 overflow-hidden h-full p-8 text-center">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-6 border-4 border-gray-50
                             group-hover:scale-105 transition-transform duration-300"
                  />
                  <h3 className="text-xl font-bold text-[rgb(var(--foreground-rgb))] mb-2
                               group-hover:text-[rgb(var(--primary-rgb))] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-[rgb(var(--text-secondary-rgb))] font-medium mb-6">
                    {member.role}
                  </p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[rgb(var(--primary-rgb))]
                             hover:text-[rgb(var(--primary-hover-rgb))] font-medium transition-colors group/link"
                  >
                    <LinkIcon className="h-4 w-4" />
                    Connect on LinkedIn
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
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--foreground-rgb))] text-center mb-16">
            Mentors & Co-Leads
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {mentorsData.map((mentor: Mentor, index) => (
              <motion.div
                key={mentor.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="group"
              >
                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl border border-gray-100
                             transition-all duration-300 overflow-hidden h-full p-8 text-center">
                  <img
                    src={mentor.photo}
                    alt={mentor.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-6 border-4 border-gray-50
                             group-hover:scale-105 transition-transform duration-300"
                  />
                  <h3 className="text-xl font-bold text-[rgb(var(--foreground-rgb))] mb-2
                               group-hover:text-[rgb(var(--primary-rgb))] transition-colors">
                    {mentor.name}
                  </h3>
                  <p className="text-[rgb(var(--text-secondary-rgb))] font-medium mb-2">
                    {mentor.role}
                  </p>
                  <p className="text-[rgb(var(--text-muted-rgb))] text-sm mb-6">
                    {groupsData.find((g) => g.id === mentor.groupId)?.name}
                  </p>
                  <a
                    href={mentor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[rgb(var(--primary-rgb))]
                             hover:text-[rgb(var(--primary-hover-rgb))] font-medium transition-colors group/link"
                  >
                    <LinkIcon className="h-4 w-4" />
                    Connect on LinkedIn
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
          <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--foreground-rgb))] text-center mb-16">
            Active Members
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {membersData.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="col-span-full text-center py-20"
              >
                <div className="max-w-md mx-auto">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Github className="h-10 w-10 text-gray-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-[rgb(var(--foreground-rgb))] mb-3">
                    Join Our Community
                  </h3>
                  <p className="text-lg text-[rgb(var(--text-secondary-rgb))] leading-relaxed">
                    No active members yet. Join us to be featured here and start building amazing projects together!
                  </p>
                </div>
              </motion.div>
            )}
            {membersData.map((member: Member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.3 }
                }}
                className="group"
              >
                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl border border-gray-100
                             transition-all duration-300 overflow-hidden h-full p-6 text-center">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-16 h-16 rounded-full object-cover mx-auto mb-4 border-2 border-gray-50
                             group-hover:scale-105 transition-transform duration-300"
                  />
                  <h3 className="text-lg font-bold text-[rgb(var(--foreground-rgb))] mb-4
                               group-hover:text-[rgb(var(--primary-rgb))] transition-colors">
                    {member.name}
                  </h3>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[rgb(var(--primary-rgb))]
                             hover:text-[rgb(var(--primary-hover-rgb))] font-medium transition-colors group/link"
                  >
                    <Github className="h-4 w-4" />
                    GitHub Profile
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