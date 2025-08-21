import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { Button } from "@components/ui/button";
import { ArrowRight, Brain, Code, Database, Server } from "lucide-react";
import Link from "next/link";
import groupsData from "@data/groups.json";

interface Group {
  id: string;
  name: string;
  description: string;
}

const groupIcons: Record<string, React.ReactNode> = {
  "ai-ml": <Brain className="h-8 w-8 text-secondary" />,
  "data-science": <Database className="h-8 w-8 text-secondary" />,
  "java-microservices": <Server className="h-8 w-8 text-secondary" />,
  "mern-stack": <Code className="h-8 w-8 text-secondary" />,
};

export default function GroupsPage() {
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
          Our Groups
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-body text-text/80 text-center max-w-2xl mx-auto font-body"
        >
          Join one of our specialized groups to dive deep into cutting-edge technologies and collaborate on exciting projects.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {groupsData.map((group: Group) => (
            <motion.div
              key={group.id}
              whileHover={{ scale: 1.05, boxShadow: "0 0 12px rgba(37, 99, 235, 0.3)" }}
              transition={{ duration: 0.3 }}
            >
              <Card className="card glass hover:animate-glow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    {groupIcons[group.id]}
                    <CardTitle className="text-heading-3 font-heading">{group.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-body text-text/80 mb-4 font-body">{group.description}</p>
                  <Button asChild className="button bg-primary text-card hover:bg-primary/80">
                    <Link href={`/groups/${group.id}`}>
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
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