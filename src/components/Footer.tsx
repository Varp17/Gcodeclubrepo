import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/groups', label: 'Groups' },
  { href: '/projects', label: 'Projects' },
  { href: '/members', label: 'Members' },
  { href: '/resources', label: 'Resources' },
  { href: '/join', label: 'Join Us' },
];

const socialLinks = [
  { href: 'https://linkedin.com', icon: <Linkedin className="h-5 w-5" />, label: 'LinkedIn' },
  { href: 'https://github.com', icon: <Github className="h-5 w-5" />, label: 'GitHub' },
  { href: 'https://twitter.com', icon: <Twitter className="h-5 w-5" />, label: 'Twitter' },
];

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      className="bg-background border-t py-10 sm:py-12"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-heading font-semibold text-primary">Coding Club</h3>
          <p className="mt-2 text-text/80 text-sm sm:text-base">
            Empowering students to explore, learn, and build in AI, Data Science, Java, and MERN.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-heading font-semibold text-primary">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="text-text/80 hover:text-secondary transition-colors text-sm sm:text-base"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-heading font-semibold text-primary">Connect With Us</h3>
          <div className="mt-2 flex justify-center sm:justify-start gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text/80 hover:text-secondary transition-colors"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 items-center gap-4 text-center sm:text-left">
        {/* Left Side - Logo */}
        <div className="flex justify-center sm:justify-start mb-2 sm:mb-0">
          <a href="/">
            <img src="/img/logo/Footerlogo.png" alt="Godavari College Logo" className="h-10 sm:h-12" />
          </a>
        </div>

        {/* Center Text */}
        <div className="text-text/80 text-sm sm:text-base">
          © Godavari College Of Engineering {new Date().getFullYear()}
        </div>

        {/* Right Side - Powered By */}
        <div className="text-text/80 text-sm sm:text-base">
          Powered by: <span className="font-semibold text-primary">Varun Patil, 2025 Coding Club</span>
        </div>
      </div>
    </motion.footer>
  );
}
