import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { motion } from "framer-motion";
import updatesData from "@data/updates.json";

interface Update {
  id: string;
  title: string;
  date: string;
  description: string;
}

export default function UpdatesSection() {
  return (
    <section className="section bg-background/50">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-heading-2 font-heading font-semibold text-text text-center"
        >
          Latest Updates
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-2 text-body text-text/80 text-center max-w-2xl mx-auto"
        >
          Stay updated with the latest news and announcements from our club.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {updatesData.slice(0, 3).map((update: Update) => (
            <motion.div
              key={update.id}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="card hover:shadow-hover">
                <CardHeader>
                  <CardTitle className="text-heading-3 font-heading">{update.title}</CardTitle>
                  <p className="text-sm text-text/60">{update.date}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-body text-text/80">{update.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}