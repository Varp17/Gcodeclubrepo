import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Github, Search, Users, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import rawProjectsData from '@data/projects.json'
import groupsData from '@data/groups.json'

const projectsData: Project[] = (rawProjectsData as any[]).map((p) => ({
  ...p,
  status: (['Ongoing', 'Completed', 'Planning'].includes(p.status)
    ? p.status
    : 'Planning') as Project['status'],
}))


interface Project {
  id: string
  title: string
  description: string
  groupId: string
  members: string[]
  status: 'Ongoing' | 'Completed' | 'Planning'
  github: string
  tags: string[]
}

interface Group {
  id: string
  name: string
}

const statusColors = {
  'Completed': 'bg-green-50 text-green-700 border-green-200',
  'Ongoing': 'bg-blue-50 text-blue-700 border-blue-200',
  'Planning': 'bg-yellow-50 text-yellow-700 border-yellow-200'
}

export default function Projects() {
  const [searchParams] = useSearchParams()
  const initialSearch = searchParams.get('search') || ''
  const [filter, setFilter] = useState<string>('all')
  const [search, setSearch] = useState<string>(initialSearch)

  useEffect(() => {
    setSearch(initialSearch)
  }, [initialSearch])

  const filteredProjects = projectsData.filter((project: Project) => {
    const matchesFilter = filter === 'all' || project.groupId === filter
    const matchesSearch =
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.description.toLowerCase().includes(search.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()))
    return matchesFilter && matchesSearch
  })

  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-[rgb(var(--foreground-rgb))] mb-6">
            Our Projects
          </h1>
          <p className="text-lg text-[rgb(var(--text-secondary-rgb))] max-w-3xl mx-auto leading-relaxed">
            Discover the innovative projects built by our club members across all specialized groups.
            From AI applications to full-stack web solutions.
          </p>
        </motion.div>

        {/* Search and Filter Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search projects, technologies, or descriptions..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-[rgb(var(--border-muted-rgb))]
                           bg-white text-[rgb(var(--foreground-rgb))]
                           focus:ring-2 focus:ring-[rgb(var(--primary-rgb))]/20
                           focus:border-[rgb(var(--primary-rgb))]
                           transition-all duration-200 text-sm
                           placeholder-[rgb(var(--text-muted-rgb))]"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[rgb(var(--text-muted-rgb))]" />
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 text-sm
                         ${filter === 'all'
                           ? 'bg-[rgb(var(--primary-rgb))] text-white shadow-md'
                           : 'bg-white text-[rgb(var(--text-secondary-rgb))] border border-[rgb(var(--border-rgb))] hover:border-[rgb(var(--primary-rgb))] hover:text-[rgb(var(--primary-rgb))]'
                         }`}
              onClick={() => setFilter('all')}
            >
              All Projects
            </button>
            {groupsData.map((group: Group) => (
              <button
                key={group.id}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 text-sm
                           ${filter === group.id
                             ? 'bg-[rgb(var(--primary-rgb))] text-white shadow-md'
                             : 'bg-white text-[rgb(var(--text-secondary-rgb))] border border-[rgb(var(--border-rgb))] hover:border-[rgb(var(--primary-rgb))] hover:text-[rgb(var(--primary-rgb))]'
                           }`}
                onClick={() => setFilter(group.id)}
              >
                {group.name.replace(' Group', '')}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="col-span-full text-center py-16"
            >
              <div className="max-w-md mx-auto">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-[rgb(var(--foreground-rgb))] mb-2">
                  No projects found
                </h3>
                <p className="text-[rgb(var(--text-secondary-rgb))]">
                  Try adjusting your search terms or filter selection.
                </p>
              </div>
            </motion.div>
          )}

          {filteredProjects.map((project: Project, index) => (
            <motion.div
              key={project.id}
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
              <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl border border-[rgb(var(--border-rgb))]
                             transition-all duration-300 overflow-hidden h-full flex flex-col">

                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1516321310762-37e87c02ce92?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80"
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${statusColors[project.status]}`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Title and Group */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-[rgb(var(--foreground-rgb))] mb-2 group-hover:text-[rgb(var(--primary-rgb))] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[rgb(var(--text-muted-rgb))] font-medium">
                      {groupsData.find((g: Group) => g.id === project.groupId)?.name}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-[rgb(var(--text-secondary-rgb))] leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium bg-blue-50 text-blue-700
                                   rounded-md border border-blue-100"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2 py-1 text-xs font-medium bg-gray-50 text-gray-600 rounded-md">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Team Members */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex items-center gap-2 text-[rgb(var(--text-muted-rgb))]">
                      <Users className="h-4 w-4" />
                      <span className="text-sm font-medium">
                        {project.members.length} member{project.members.length > 1 ? 's' : ''}
                      </span>
                    </div>
                    <div className="flex -space-x-2">
                      {project.members.slice(0, 3).map((member, memberIndex) => (
                        <div
                          key={memberIndex}
                          className="w-8 h-8 bg-gray-200 rounded-full border-2 border-white
                                     flex items-center justify-center text-xs font-medium text-gray-600"
                        >
                          {member.charAt(0).toUpperCase()}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* GitHub Link */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[rgb(var(--primary-rgb))]
                               hover:text-[rgb(var(--primary-hover-rgb))] font-medium
                               transition-colors group/link"
                  >
                    <Github className="h-4 w-4" />
                    View Source Code
                    <ExternalLink className="h-3 w-3 group-hover/link:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Results Counter */}
        {filteredProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center mt-12 text-[rgb(var(--text-muted-rgb))]"
          >
            Showing {filteredProjects.length} of {projectsData.length} projects
          </motion.div>
        )}
      </div>
    </section>
  )
}