import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Github, Search, Users, ExternalLink, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import rawProjectsData from '@data/projects.json';
import groupsData from '@data/groups.json';

interface Project {
  id: string;
  title: string;
  description: string;
  groupId: string;
  members: string[];
  status: 'Ongoing' | 'Completed' | 'Planning';
  github: string;
  tags: string[];
}

interface Group {
  id: string;
  name: string;
}

const projectsData: Project[] = (rawProjectsData as any[]).map((p) => ({
  ...p,
  status: ['Ongoing', 'Completed', 'Planning'].includes(p.status) ? p.status : 'Planning',
}));

const statusColors = {
  Completed: 'bg-green-50 text-green-700 border-green-200',
  Ongoing: 'bg-blue-50 text-blue-700 border-blue-200',
  Planning: 'bg-yellow-50 text-yellow-700 border-yellow-200',
};

export default function Projects() {
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get('search') || '';
  const [filter, setFilter] = useState<string>('all');
  const [search, setSearch] = useState<string>(initialSearch);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  useEffect(() => setSearch(initialSearch), [initialSearch]);

  const filteredProjects = projectsData.filter((project) => {
    const matchesFilter = filter === 'all' || project.groupId === filter;
    const matchesSearch =
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.description.toLowerCase().includes(search.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const handleFilterSelect = (selectedFilter: string) => {
    setFilter(selectedFilter);
    setShowMobileFilters(false);
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-8 sm:py-12 lg:py-16">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[rgb(var(--foreground-rgb))] mb-4 sm:mb-6 leading-tight">
            Our Projects
          </h1>
          <p className="text-base sm:text-lg text-[rgb(var(--text-secondary-rgb))] max-w-3xl mx-auto leading-relaxed px-4">
            Discover the innovative projects built by our club members across all specialized groups.
          </p>
        </motion.div>

        {/* Search & Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 sm:mb-12"
        >
          <div className="max-w-md mx-auto mb-4 sm:mb-6 px-4 sm:px-0 relative">
            <input
              type="text"
              placeholder="Search projects, technologies..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 sm:pl-12 pr-4 py-3 sm:py-3 rounded-lg border border-[rgb(var(--border-muted-rgb))] bg-white text-[rgb(var(--foreground-rgb))] focus:ring-2 focus:ring-[rgb(var(--primary-rgb))]/20 focus:border-[rgb(var(--primary-rgb))] transition-all duration-200 text-sm sm:text-base placeholder-[rgb(var(--text-muted-rgb))]"
            />
            <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-[rgb(var(--text-muted-rgb))]" />
          </div>

          {/* Mobile Filter */}
          <div className="block sm:hidden mb-4 px-4">
            <button
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="w-full flex items-center justify-between px-4 py-3 bg-white border border-[rgb(var(--border-rgb))] rounded-lg text-[rgb(var(--text-secondary-rgb))] font-medium"
            >
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                <span>
                  {filter === 'all' ? 'All Projects' : groupsData.find((g) => g.id === filter)?.name.replace(' Group', '') || 'Filter'}
                </span>
              </div>
              <motion.div animate={{ rotate: showMobileFilters ? 180 : 0 }} transition={{ duration: 0.2 }} className="text-xs">
                ▼
              </motion.div>
            </button>
          </div>

          <AnimatePresence>
            {showMobileFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="block sm:hidden mb-4 px-4 overflow-hidden"
              >
                <div className="bg-white border border-[rgb(var(--border-rgb))] rounded-lg shadow-lg py-2">
                  <button
                    className={`w-full px-4 py-3 text-left font-medium ${filter === 'all' ? 'bg-[rgb(var(--primary-rgb))] text-white' : 'text-[rgb(var(--text-secondary-rgb))] active:bg-gray-50'}`}
                    onClick={() => handleFilterSelect('all')}
                  >
                    All Projects
                  </button>
                  {groupsData.map((group: Group) => (
                    <button
                      key={group.id}
                      className={`w-full px-4 py-3 text-left font-medium ${filter === group.id ? 'bg-[rgb(var(--primary-rgb))] text-white' : 'text-[rgb(var(--text-secondary-rgb))] active:bg-gray-50'}`}
                      onClick={() => handleFilterSelect(group.id)}
                    >
                      {group.name.replace(' Group', '')}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Desktop Filter Buttons */}
          <div className="hidden sm:flex flex-wrap gap-2 lg:gap-3 justify-center px-4">
            <button
              className={`px-3 sm:px-4 py-2 rounded-lg font-medium transition-all duration-200 text-sm ${filter === 'all' ? 'bg-[rgb(var(--primary-rgb))] text-white shadow-md' : 'bg-white text-[rgb(var(--text-secondary-rgb))] border border-[rgb(var(--border-rgb))] hover:border-[rgb(var(--primary-rgb))] hover:text-[rgb(var(--primary-rgb))]'}`}
              onClick={() => setFilter('all')}
            >
              All Projects
            </button>
            {groupsData.map((group: Group) => (
              <button
                key={group.id}
                className={`px-3 sm:px-4 py-2 rounded-lg font-medium transition-all duration-200 text-sm ${filter === group.id ? 'bg-[rgb(var(--primary-rgb))] text-white shadow-md' : 'bg-white text-[rgb(var(--text-secondary-rgb))] border border-[rgb(var(--border-rgb))] hover:border-[rgb(var(--primary-rgb))] hover:text-[rgb(var(--primary-rgb))]'}`}
                onClick={() => setFilter(group.id)}
              >
                {group.name.replace(' Group', '')}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-0">
          {filteredProjects.length === 0 && (
            <motion.div className="col-span-full text-center py-12 sm:py-16">
              <div className="max-w-md mx-auto px-4">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-[rgb(var(--foreground-rgb))] mb-2">No projects found</h3>
                <p className="text-sm sm:text-base text-[rgb(var(--text-secondary-rgb))]">Try adjusting your search or filter.</p>
              </div>
            </motion.div>
          )}

          {filteredProjects.map((project, index) => (
            <motion.div key={project.id} className="group touch-manipulation">
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl border border-[rgb(var(--border-rgb))] overflow-hidden h-full flex flex-col transition-all duration-300">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1516321310762-37e87c02ce92?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80"
                    alt={project.title}
                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium border ${statusColors[project.status]}`}>{project.status}</span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4 sm:p-6 flex-1 flex flex-col">
                  <h3 className="text-lg sm:text-xl font-bold text-[rgb(var(--foreground-rgb))] mb-1 sm:mb-2 group-hover:text-[rgb(var(--primary-rgb))] transition-colors leading-tight">{project.title}</h3>
                  <p className="text-xs sm:text-sm text-[rgb(var(--text-muted-rgb))] font-medium mb-2">{groupsData.find(g => g.id === project.groupId)?.name}</p>
                  <p className="text-sm sm:text-base text-[rgb(var(--text-secondary-rgb))] leading-relaxed mb-3 sm:mb-4 line-clamp-3">{project.description}</p>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span key={tag} className="px-2 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-md border border-blue-100">{tag}</span>
                    ))}
                    {project.tags.length > 4 && <span className="px-2 py-1 text-xs font-medium bg-gray-50 text-gray-600 rounded-md">+{project.tags.length - 4}</span>}
                  </div>

                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                    <div className="flex items-center gap-1.5 sm:gap-2 text-[rgb(var(--text-muted-rgb))]">
                      <Users className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      <span className="text-xs sm:text-sm font-medium">{project.members.length} member{project.members.length > 1 ? 's' : ''}</span>
                    </div>
                    <div className="flex -space-x-1.5 sm:-space-x-2">
                      {project.members.slice(0, 3).map((member, i) => (
                        <div key={i} className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-200 rounded-full border-2 border-white flex items-center justify-center text-xs font-medium text-gray-600">
                          {member.charAt(0).toUpperCase()}
                        </div>
                      ))}
                    </div>
                  </div>

                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[rgb(var(--primary-rgb))] hover:text-[rgb(var(--primary-hover-rgb))] font-medium transition-colors text-sm sm:text-base">
                    <Github className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    <span className="hidden sm:inline">View Source Code</span>
                    <span className="sm:hidden">Source Code</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Results Count */}
        {filteredProjects.length > 0 && (
          <motion.div className="text-center mt-8 sm:mt-12 text-sm sm:text-base text-[rgb(var(--text-muted-rgb))] px-4">
            Showing {filteredProjects.length} of {projectsData.length} projects
          </motion.div>
        )}
      </div>
    </section>
  );
}
