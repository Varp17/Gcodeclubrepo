import React from 'react'
import { Link } from 'react-router-dom'
import { Github, Linkedin, Twitter } from 'lucide-react'
import { motion } from 'framer-motion'

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/groups', label: 'Groups' },
  { href: '/projects', label: 'Projects' },
  { href: '/members', label: 'Members' },
  { href: '/resources', label: 'Resources' },
  { href: '/join', label: 'Join Us' },
]

const socialLinks = [
  { href: 'https://linkedin.com', icon: <Linkedin className="h-6 w-6" />, label: 'LinkedIn' },
  { href: 'https://github.com', icon: <Github className="h-6 w-6" />, label: 'GitHub' },
  { href: 'https://twitter.com', icon: <Twitter className="h-6 w-6" />, label: 'Twitter' },
]

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      className="bg-background border-t pt-16 pb-10"
    >
      {/* Top Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* About */}
        <div>
          <h3 className="text-xl font-heading font-semibold text-primary">Coding Club</h3>
          <p className="mt-4 text-text/80 font-body leading-relaxed">
            Empowering students to explore, learn, and build in AI, Data Science, Java, and MERN.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-heading font-semibold text-primary">Quick Links</h3>
          <ul className="mt-4 space-y-3">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="text-text/80 hover:text-secondary transition-colors font-body text-base"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-heading font-semibold text-primary">Connect With Us</h3>
          <div className="mt-4 flex gap-12">
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

      {/* Divider */}
      <div className="border-t border-text/20 my-8" />

      {/* Bottom Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-12">
        {/* Left Side - Logo */}
        <div className="flex justify-center md:justify-start">
          <a href="/">
            <img src="/img/logo/Footerlogo.png" alt="Godavari College Logo" className="h-14" />
          </a>
        </div>

        {/* Center Text */}
        <div className="text-center text-text/70 font-body text-sm md:text-base">
          © {new Date().getFullYear()} Godavari College Of Engineering. All rights reserved.
        </div>

        {/* Right Side - Powered By */}
        <div className="text-center md:text-right text-text/80 font-body text-sm md:text-base">
          Powered by: <span className="font-semibold text-primary">Varun Patil, 2025 Coding Club</span>
        </div>
      </div>
    </motion.footer>
  )
}
