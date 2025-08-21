import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { motion } from "framer-motion";
import { BookOpen, Code, Users } from "lucide-react";

const benefits = [
  {
    icon: <BookOpen className="h-8 w-8 text-accent" />,
    title: "Learn with Roadmaps",
    description: "Structured learning paths to master your chosen domain with guided resources.",
  },
  {
    icon: <Code className="h-8 w-8 text-accent" />,
    title: "Work on Real Projects",
    description: "Collaborate on real-world projects to build your portfolio and skills.",
  },
  {
    icon: <Users className="h-8 w-8 text-accent" />,
    title: "Get Mentorship",
    description: "Learn from experienced mentors and grow in a supportive community.",
  },
];

export default function WhyJoinSection() {
  return (
    <section className="section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-heading-2 font-heading font-semibold text-text text-center"
        >
          Why Join Coding Club?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-2 text-body text-text/80 text-center max-w-2xl mx-auto"
        >
          Unlock your potential with hands-on learning and a vibrant community.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="card hover:shadow-hover">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    {benefit.icon}
                    <CardTitle className="text-heading-3 font-heading">{benefit.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-body text-text/80">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}