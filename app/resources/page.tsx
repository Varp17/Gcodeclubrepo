import { motion } from "framer-motion";
import { Card, CardContent } from "@components/ui/card";
import { Button } from "@components/ui/button";
import { Link as LinkIcon } from "lucide-react";
import resourcesData from "@data/resources.json";
import { Metadata } from "next";
import { Resource } from "../../types";

export const metadata: Metadata = {
  title: "Resources - TechBit Coding Club",
  description: "Explore curated resources for AI, Data Science, Java Microservices, and MERN Stack from TechBit Coding Club.",
  openGraph: {
    title: "Resources - TechBit Coding Club",
    description: "Explore curated resources for AI, Data Science, Java Microservices, and MERN Stack.",
    url: "https://coding-club.example.com/resources",
    type: "website",
  },
};

export default function ResourcesPage() {
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
          Learning Resources
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-body text-text/80 text-center max-w-2xl mx-auto font-body"
        >
          Discover curated resources to master AI, Data Science, Java Microservices, and MERN Stack.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {resourcesData.map((resource: Resource) => (
            <motion.div
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}