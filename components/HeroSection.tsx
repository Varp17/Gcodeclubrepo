import { Button } from "@components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="section bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1516321310762-37e87c02ce92?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600&q=80"
          alt="Tech background"
          fill
          className="object-cover dark:brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-transparent" />
      </div>
      <div className="container text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-heading-1 font-heading font-bold text-text"
        >
          Welcome to [College Name] Coding Club
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-body text-text/80 max-w-2xl mx-auto font-body"
        >
          Explore, Learn, and Build with 4 powerful domains: <span className="font-code text-secondary">AI & ML</span>, <span className="font-code text-secondary">Data Science</span>, <span className="font-code text-secondary">Java Microservices</span>, and <span className="font-code text-secondary">MERN Stack</span>
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex justify-center gap-4"
        >
          <Button asChild className="button bg-primary text-card hover:bg-primary/80">
            <Link href="/join">Join Us</Link>
          </Button>
          <Button asChild variant="outline" className="button border-primary text-primary hover:bg-primary/10">
            <Link href="/projects">
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}