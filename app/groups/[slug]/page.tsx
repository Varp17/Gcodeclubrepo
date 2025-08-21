import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { Button } from "@components/ui/button";
import { ArrowRight, BookOpen, Github, Link as LinkIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import groupsData from "@data/groups.json";
import mentorsData from "@data/mentors.json";
import roadmapsData from "@data/roadmaps.json";
import resourcesData from "@data/resources.json";
import projectsData from "@data/projects.json";
import { Metadata } from "next";

interface Group {
  id: string;
  name: string;
  description: string;
  banner: string;
}

interface Mentor {
  id: string;
  name: string;
  role: string;
  linkedin: string;
  photo: string;
  groupId: string;
}

interface RoadmapStep {
  id: string;
  title: string;
  description: string;
}

interface Resource {
  id: string;
  title: string;
  url: string;
  groupId: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  groupId: string;
  members: string[];
  status: "ongoing" | "completed";
  github: string;
  tags: string[];
}

export async function generateStaticParams() {
  return groupsData.map((group: Group) => ({
    slug: group.id,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const group = groupsData.find((g: Group) => g.id === params.slug);
  if (!group) return { title: "Group Not Found" };

  return {
    title: `${group.name} - Coding Club`,
    description: group.description,
    openGraph: {
      title: `${group.name} - Coding Club`,
      description: group.description,
      url: `https://coding-club.example.com/groups/${group.id}`,
      type: "website",
    },
  };
}

export default function GroupPage({ params }: { params: { slug: string } }) {
  const group = groupsData.find((g: Group) => g.id === params.slug);
  if (!group) notFound();

  const mentors = mentorsData.filter((m: Mentor) => m.groupId === group.id);
  const roadmap = roadmapsData.find((r: { groupId: string }) => r.groupId === group.id)?.steps || [];
  const resources = resourcesData.filter((r: Resource) => r.groupId === group.id);
  const projects = projectsData.filter((p: Project) => p.groupId === group.id);

  return (
    <div className="min-h-screen">
      <section className="section bg-gradient-hero">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-heading-1 font-heading font-bold text-text text-center"
          >
            {group.name}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6"
          >
            <Image
              src={group.banner}
              alt={`${group.name} banner`}
              width={1200}
              height={400}
              className="rounded-2xl object-cover w-full dark:brightness-75"
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 text-body text-text/80 max-w-3xl mx-auto text-center font-body"
          >
            {group.description}
          </motion.p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-heading-2 font-heading font-semibold text-text"
          >
            Mentors & Co-Leads
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {mentors.map((mentor: Mentor) => (
              <motion.div
                key={mentor.id}
                whileHover={{ scale: 1.05, boxShadow: "0 0 12px rgba(37, 99, 235, 0.3)" }}
                transition={{ duration: 0.3 }}
              >
                <Card className="card glass hover:animate-glow">
                  <CardHeader>
                    <Image
                      src={mentor.photo}
                      alt={mentor.name}
                      width={100}
                      height={100}
                      className="rounded-full mx-auto dark:brightness-90"
                    />
                    <CardTitle className="text-heading-3 font-heading text-center mt-4">{mentor.name}</CardTitle>
                    <p className="text-caption text-text/80 text-center font-body">{mentor.role}</p>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="link" className="text-secondary">
                      <a href={mentor.linkedin} target="_blank" rel="noopener noreferrer">
                        LinkedIn <LinkIcon className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section bg-[rgba(249,250,251,0.5)] dark:bg-[rgba(15,23,42,0.5)]">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-heading-2 font-heading font-semibold text-text"
          >
            Learning Roadmap
          </motion.h2>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 space-y-4"
          >
            {roadmap.map((step: RoadmapStep, index: number) => (
              <motion.li
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="flex items-start gap-4"
              >
                <BookOpen className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-heading-3 font-heading">{step.title}</h3>
                  <p className="text-body text-text/80 font-body">{step.description}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-heading-2 font-heading font-semibold text-text"
          >
            Resources
          </motion.h2>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {resources.map((resource: Resource) => (
              <motion.li
                key={resource.id}
                whileHover={{ scale: 1.05, boxShadow: "0 0 12px rgba(37, 99, 235, 0.3)" }}
                transition={{ duration: 0.3 }}
              >
                <Card className="card glass hover:animate-glow">
                  <CardContent className="p-4">
                    <Button asChild variant="link" className="text-secondary font-body">
                      <a href={resource.url} target="_blank" rel="noopener noreferrer">
                        {resource.title} <LinkIcon className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      <section className="section bg-[rgba(249,250,251,0.5)] dark:bg-[rgba(15,23,42,0.5)]">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-heading-2 font-heading font-semibold text-text"
          >
            Group Projects
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project: Project) => (
              <motion.div
                key={project.id}
                whileHover={{ scale: 1.05, boxShadow: "0 0 12px rgba(37, 99, 235, 0.3)" }}
                transition={{ duration: 0.3 }}
              >
                <Card className="card glass hover:animate-glow">
                  <CardHeader>
                    <CardTitle className="text-heading-3 font-heading">{project.title}</CardTitle>
                    <p className="text-caption text-text/60 font-body">
                      {project.status === "ongoing" ? "In Progress" : "Completed"}
                    </p>
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
    </div>
  );
}