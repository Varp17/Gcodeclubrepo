import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { Button } from "@components/ui/button";
import { Github, Link as LinkIcon } from "lucide-react";
import Image from "next/image";
import { Metadata } from "next";
import membersData from "@data/members.json";
import mentorsData from "@data/mentors.json";
import groupsData from "@data/groups.json";
import { CoreMember, Mentor, Member } from "../../types";

export const metadata: Metadata = {
  title: "Members - TechBit Coding Club",
  description: "Meet the core team, mentors, and active contributors of TechBit Coding Club.",
  openGraph: {
    title: "Members - TechBit Coding Club",
    description: "Meet the core team, mentors, and active contributors of TechBit Coding Club.",
    url: "https://coding-club.example.com/members",
    type: "website",
  },
};

const coreTeam: CoreMember[] = [
  {
    id: "core-1",
    name: "Alex Carter",
    role: "President",
    linkedin: "https://linkedin.com/in/alexcarter",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
  },
  {
    id: "core-2",
    name: "Sophie Lee",
    role: "Vice President",
    linkedin: "https://linkedin.com/in/sophielee",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
  },
  {
    id: "core-3",
    name: "Ryan Patel",
    role: "Secretary",
    linkedin: "https://linkedin.com/in/ryanpatel",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
  },
];

export default function MembersPage() {
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
          Our Members
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-body text-text/80 text-center max-w-2xl mx-auto font-body"
        >
          Meet the passionate individuals driving innovation at TechBit Coding Club.
        </motion.p>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12"
        >
          <h2 className="text-heading-2 font-heading font-semibold text-text">Core Team</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreTeam.map((member) => (
              <motion.div
                key={member.id}
                whileHover={{ scale: 1.05, boxShadow: "0 0 12px rgba(37, 99, 235, 0.3)" }}
                transition={{ duration: 0.3 }}
              >
                <Card className="card glass hover:animate-glow">
                  <CardHeader>
                    <Image
                      src={member.photo}
                      alt={member.name}
                      width={100}
                      height={100}
                      className="rounded-full mx-auto dark:brightness-90"
                    />
                    <CardTitle className="text-heading-3 font-heading text-center mt-4">{member.name}</CardTitle>
                    <p className="text-caption text-text/80 text-center font-body">{member.role}</p>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="link" className="text-secondary font-body">
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        LinkedIn <LinkIcon className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12"
        >
          <h2 className="text-heading-2 font-heading font-semibold text-text">Mentors & Co-Leads</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mentorsData.map((mentor: Mentor) => (
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
                    <p className="text-caption text-text/60 text-center font-body">
                      {groupsData.find((g) => g.id === mentor.groupId)?.name}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="link" className="text-secondary font-body">
                      <a href={mentor.linkedin} target="_blank" rel="noopener noreferrer">
                        LinkedIn <LinkIcon className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12"
        >
          <h2 className="text-heading-2 font-heading font-semibold text-text">Active Members</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {membersData.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="col-span-full text-center text-body text-text/80 font-body"
              >
                No active members yet. Join us to be featured here!
              </motion.div>
            )}
            {membersData.map((member: Member) => (
              <motion.div
                key={member.id}
                whileHover={{ scale: 1.05, boxShadow: "0 0 12px rgba(37, 99, 235, 0.3)" }}
                transition={{ duration: 0.3 }}
              >
                <Card className="card glass hover:animate-glow">
                  <CardHeader>
                    <Image
                      src={member.photo}
                      alt={member.name}
                      width={80}
                      height={80}
                      className="rounded-full mx-auto dark:brightness-90"
                    />
                    <CardTitle className="text-heading-3 font-heading text-center mt-4">{member.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="link" className="text-secondary font-body">
                      <a href={member.github} target="_blank" rel="noopener noreferrer">
                        GitHub <Github className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </section>
  );
}