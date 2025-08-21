import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Code, Database, Server, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import groupsData from '@data/groups.json';

interface Group {
  id: string;
  name: string;
  description: string;
  banner: string;
}

const groupIcons: Record<string, React.ReactNode> = {
  'ai-ml': <Brain className="h-6 w-6 sm:h-8 sm:w-8 text-[rgb(var(--primary-rgb))]" />,
  'data-science': <Database className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />,
  'java-microservices': <Server className="h-6 w-6 sm:h-8 sm:w-8 text-red-500" />,
  'mern-stack': <Code className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-600" />,
};

const groupColors: Record<string, string> = {
  'ai-ml': 'border-l-blue-500',
  'data-science': 'border-l-green-500',
  'java-microservices': 'border-l-red-500',
  'mern-stack': 'border-l-yellow-500',
};

const techStacks: Record<string, string[]> = {
  'ai-ml': ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn'],
  'data-science': ['Python', 'Pandas', 'Plotly', 'Seaborn'],
  'java-microservices': ['Java', 'Spring Boot', 'REST APIs', 'Docker'],
  'mern-stack': ['MongoDB', 'Express.js', 'React', 'Node.js'],
};

const memberCounts: Record<string, number> = {
  'ai-ml': 25,
  'data-science': 20,
  'java-microservices': 18,
  'mern-stack': 22,
};

export default function Groups() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[rgb(var(--foreground-rgb))] mb-4 sm:mb-6 leading-tight px-2">
            Our Specialized Groups
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-[rgb(var(--text-secondary-rgb))] max-w-4xl mx-auto leading-relaxed px-4">
            Join one of our specialized groups to dive deep into cutting-edge technologies
            and collaborate on exciting projects with like-minded developers.
          </p>
        </motion.div>

        {/* Groups Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-6 max-w-6xl mx-auto"
        >
          {groupsData.map((group: Group, index) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -2,
                transition: { duration: 0.2 }
              }}
              className="w-full"
            >
              <div className={`bg-white rounded-lg shadow-md hover:shadow-lg border-l-4 ${groupColors[group.id]}
                             transition-all duration-300 overflow-hidden flex flex-col h-full`}>
                {/* Header with Icon and Title */}
                <div className="p-4 sm:p-6 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gray-50 rounded-lg flex-shrink-0">
                      {groupIcons[group.id]}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[rgb(var(--foreground-rgb))] group-hover:text-[rgb(var(--primary-rgb))] transition-colors leading-tight">
                      {group.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-[rgb(var(--text-secondary-rgb))] leading-relaxed">
                    {group.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2">
                    {techStacks[group.id].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs sm:text-sm font-medium bg-blue-50 text-blue-700
                                   rounded-full border border-blue-100 whitespace-nowrap"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Members Count */}
                  <div className="flex items-center gap-2 text-[rgb(var(--text-muted-rgb))] mt-2">
                    <Users className="h-4 w-4 flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium">
                      {memberCounts[group.id]} Active Members
                    </span>
                  </div>
                </div>

                {/* Footer with CTA */}
                <div className="p-4 mt-auto">
                  <Link
                    to={`/groups/${group.id}`}
                    className="inline-flex items-center justify-center w-full px-4 py-3
                               bg-[rgb(var(--primary-rgb))] hover:bg-[rgb(var(--primary-hover-rgb))]
                               text-white font-medium rounded-lg transition-all duration-200
                               hover:shadow-md text-sm sm:text-base min-h-[44px] active:scale-95"
                  >
                    Explore Group <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12 sm:mt-16 lg:mt-20 px-4 sm:px-0"
        >
          <div className="bg-white rounded-lg shadow-sm border p-6 sm:p-8 max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[rgb(var(--foreground-rgb))] mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-sm sm:text-base text-[rgb(var(--text-secondary-rgb))] mb-6 max-w-2xl mx-auto leading-relaxed">
              Join our coding club and get access to all groups, exclusive resources,
              and collaborative projects with fellow developers.
            </p>
            <Link
              to="/join"
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3
                         bg-[rgb(var(--primary-rgb))] hover:bg-[rgb(var(--primary-hover-rgb))]
                         text-white font-semibold rounded-lg transition-all duration-200
                         hover:shadow-md text-sm sm:text-base min-h-[44px] max-w-xs mx-auto sm:max-w-none
                         active:scale-95"
            >
              Join All Groups <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 ml-2" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
