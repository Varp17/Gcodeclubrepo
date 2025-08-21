import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { Button } from "@components/ui/button";
import { ArrowRight, Brain, Code, Database, Server } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import groupsData from "@data/groups.json";

interface Group {
  id: string;
  name: string;
  description: string;
}

const groupIcons: Record<string, React.ReactNode> = {
  "ai-ml": <Brain className="h-8 w-8 text-accent" />,
  "data-science": <Database className="h-8 w-8 text-accent" />,
  "java-microservices": <Server className="h-8 w-8 text-accent" />,
  "mern-stack": <Code className="h-8 w-8 text-accent" />,
};

export default function GroupsSection() {
  return (
    <section className="section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-heading-2 font-heading font-semibold text-text text-center"
        >
          Our Groups
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-2 text-body text-text/80 text-center max-w-2xl mx-auto"
        >
          Discover our specialized groups and dive into cutting-edge technologies.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {groupsData.map((group: Group) => (
            <motion.div
              key={group.id}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="card hover:shadow-hover">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    {groupIcons[group.id]}
                    <CardTitle className="text-heading-3 font-heading">{group.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-body text-text/80">{group.description}</p>
                  <Button asChild variant="link" className="mt-4 text-accent">
                    <Link href={`/groups/${group.id}`}>
                      Explore <ArrowRight className="ml-2 h-4 w-4" />
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