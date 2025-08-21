import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select";
import { Send } from "lucide-react";
import { useState } from "react";
import { Metadata } from "next";
import groupsData from "@data/groups.json";
import { Group } from "../../types";

export const metadata: Metadata = {
  title: "Join Us - TechBit Coding Club",
  description: "Join TechBit Coding Club and start your journey in AI, Data Science, Java Microservices, or MERN Stack.",
  openGraph: {
    title: "Join Us - TechBit Coding Club",
    description: "Join TechBit Coding Club and start your journey in AI, Data Science, Java Microservices, or MERN Stack.",
    url: "https://coding-club.example.com/join",
    type: "website",
  },
};

export default function JoinPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    group: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      setFormData({ name: "", email: "", group: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

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
          Join Our Coding Club
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-body text-text/80 text-center max-w-2xl mx-auto font-body"
        >
          Become a part of our vibrant community and start your coding journey with us.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 max-w-lg mx-auto"
        >
          <Card className="card glass">
            <CardHeader>
              <CardTitle className="text-heading-3 font-heading">Membership Form</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-text font-body">Full Name</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="mt-1 bg-card text-text border-gray-200 dark:border-gray-700 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-text font-body">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your email"
                    className="mt-1 bg-card text-text border-gray-200 dark:border-gray-700 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="group" className="text-text font-body">Preferred Group</Label>
                  <Select
                    value={formData.group}
                    onValueChange={(value) => setFormData({ ...formData, group: value })}
                  >
                    <SelectTrigger className="mt-1 bg-card text-text border-gray-200 dark:border-gray-700 focus:ring-primary">
                      <SelectValue placeholder="Select a group" />
                    </SelectTrigger>
                    <SelectContent>
                      {groupsData.map((group: Group) => (
                        <SelectItem key={group.id} value={group.id} className="font-body">
                          {group.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="message" className="text-text font-body">Why do you want to join?</Label>
                  <Input
                    id="message"
                    type="text"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about yourself"
                    className="mt-1 bg-card text-text border-gray-200 dark:border-gray-700 focus:ring-primary"
                  />
                </div>
                <Button type="submit" className="button bg-primary text-card hover:bg-primary/80 w-full">
                  Submit <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 text-success font-body"
                >
                  Thank you for your submission! We'll get back to you soon.
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 text-error font-body"
                >
                  Something went wrong. Please try again.
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}