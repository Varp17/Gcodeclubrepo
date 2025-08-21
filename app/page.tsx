import { motion } from "framer-motion";
import HeroSection from "@components/HeroSection";
import GroupsSection from "@components/GroupsSection";
import UpdatesSection from "@components/UpdatesSection";
import WhyJoinSection from "@components/WhyJoinSection";
import CTASection from "@components/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
        <GroupsSection />
        <UpdatesSection />
        <WhyJoinSection />
        <CTASection />
      </motion.div>
    </div>
  );
}