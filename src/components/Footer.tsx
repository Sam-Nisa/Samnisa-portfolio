"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "#", color: "hover:text-gray-800" },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "#",
      color: "hover:text-blue-600",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:hello@vibol.dev",
      color: "hover:text-red-500",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  const contactInfo = [
    { icon: Mail, text: "hello@vibol.dev", href: "mailto:hello@vibol.dev" },
    { icon: Phone, text: "+855 12 345 678", href: "tel:+85512345678" },
    { icon: MapPin, text: "Phnom Penh, Cambodia", href: "#" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>

        {/* Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
            animate={{
              y: [0, -30],
              x: [0, 15],
              opacity: [0, 1],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: i * 0.5,
              ease: "easeInOut",
            }}
            style={{
              left: `${10 + i * 10}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <motion.div
                  className="relative"
                  animate={{ rotate: [0, 5, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src="/headerlogo.png"
                    alt="Vibol Logo"
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-lg shadow-lg"
                  />
                  <motion.div
                    className="absolute -top-1 -right-1"
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  >
                    <Sparkles className="w-3 h-3 text-yellow-400" />
                  </motion.div>
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Vibol Sen
                  </h3>
                  <p className="text-gray-300">Software Developer</p>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                Passionate about creating beautiful, functional, and
                user-friendly applications. Let is build something amazing
                together! ✨
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      className={`p-3 bg-white/10 backdrop-blur-sm rounded-xl text-gray-300 ${social.color} transition-all duration-300 hover:bg-white/20`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-6 flex items-center space-x-2">
                <span>🔗</span>
                <span>Quick Links</span>
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center space-x-2 group"
                    >
                      <motion.span className="w-1 h-1 bg-blue-400 rounded-full group-hover:w-2 transition-all duration-300" />
                      <span>{link.name}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="text-lg font-semibold mb-6 flex items-center space-x-2">
                <span>📞</span>
                <span>Get in Touch</span>
              </h4>
              <ul className="space-y-4">
                {contactInfo.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <a
                        href={contact.href}
                        className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center space-x-3 group"
                      >
                        <motion.div
                          className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors duration-300"
                          whileHover={{ scale: 1.1 }}
                        >
                          <Icon className="w-4 h-4" />
                        </motion.div>
                        <span className="text-sm">{contact.text}</span>
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-white/10 py-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© 2024 Vibol Sen. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              >
                <Heart className="w-4 h-4 text-red-400 fill-current" />
              </motion.div>
              <span>in Cambodia</span>
            </div>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Back to Top</span>
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              >
                <ArrowUp className="w-4 h-4" />
              </motion.div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
