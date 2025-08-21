import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { Github, Search } from "lucide-react";
import { useSearchParams } from "next/navigation";
import projectsData from "@data/projects.json";
import groupsData from "@data/groups.json";
import { Metadata } from "next";
import { Project, Group } from "../../types";

export const metadata: Metadata = {
  title: "Projects - TechBit Coding Club",
  description: "Explore all projects from TechBit Coding Club across AI, Data Science, Java Microservices, and MERN Stack.",
  openGraph: {
    title: "Projects - TechBit Coding Club",
    description: "Explore all projects from TechBit Coding Club.",
    url: "https://coding-club.example.com/projects",
    type: "website",
  },
};

export default function ProjectsPage() {
  const searchParams = useSearchParams();
  const initialSearch = searchParams.get("search") || "";
  const [filter, setFilter] = useState<string>("all");
  const [search, setSearch] = useState<string>(initialSearch);

  const filteredProjects = projectsData
    .filter((project: Project) => filter === "all" || project.groupId === filter)
    .filter((project: Project) =>
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.description.toLowerCase().includes(search.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()))
    );

  return (
    <section className="section min-h-screen bg-gradient-hero">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-heading-1 font-heading font-bold text-text text-center"
        >
          Our Projects
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-body text-text/80 text-center max-w-2xl mx-auto font-body"
        >
          Discover the innovative projects built by our club members across all groups.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <div className="relative w-full sm:w-64">
            <Input
              type="text"
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-4 py-2 rounded-button border border-gray-200 dark:border-gray-700 bg-card text-text focus:ring-2 focus:ring-primary"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-text/60" />
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              className={`button ${filter === "all" ? "bg-primary text-card" : "bg-card text-primary border-primary"}`}
              onClick={() => setFilter("all")}
            >
              All
            </Button>
            {groupsData.map((group: Group) => (
              <Button
                key={group.id}
                className={`button ${filter === group.id ? "bg-primary text-card" : "bg-card text-primary border-primary"}`}
                onClick={() => setFilter(group.id)}
              >
                {group.name}
              </Button>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="col-span-full text-center text-body text-text/80"
            >
              No projects found. Try adjusting your search or filter.
            </motion.div>
          )}
          {filteredProjects.map((project: Project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.05, boxShadow: "0 0 12px rgba(37, 99, 235, 0.3)" }}
              transition={{ duration: 0.3 }}
            >
              <Card className="card glass hover:animate-glow">
                <CardHeader>
                  <CardTitle className="text-heading-3 font-heading">{project.title}</CardTitle>
                  <div className="flex items-center gap-2">
                    <span
                      className={`badge ${
                        project.status === "Ongoing" ? "bg-warning/10 text-warning" : "bg-success/10 text-success"
                      }`}
                    >
                      {project.status === "Ongoing" ? "In Progress" : "Completed"}
                    </span>
                    <p className="text-caption text-text/60 font-body">
                      {groupsData.find((g: Group) => g.id === project.groupId)?.name}
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-body text-text/80 mb-4 font-body">{project.description}</p>
                  <p className="text-caption text-text/80 mb-2 font-body">
                    <span className="font-semibold">Team:</span> {project.members.join(", ")}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="badge bg-secondary/10 text-secondary font-code">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button asChild variant="link" className="text-secondary font-body">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      GitHub <Github className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}