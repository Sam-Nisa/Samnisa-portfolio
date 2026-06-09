"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";


import {
  GraduationCap,
  Award,
  Code,
  FolderOpen,
  Sparkles,
  Star,
  Zap,
  Heart,
  Trophy,
} from "lucide-react";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Certificates from "@/components/Certificates";
import Projects from "@/components/Project";
import Skills from "@/components/Skills";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("Education");

  const categories = [
    {
      name: "Education",
      icon: GraduationCap,
      color: "from-blue-500 to-cyan-500",
      emoji: "🎓",
      description: "My learning journey",
    },
    {
      name: "Certificates",
      icon: Award,
      color: "from-purple-500 to-pink-500",
      emoji: "🏆",
      description: "Achievements & certifications",
    },
    // {
    //   name: "Experience",
    //   icon: Briefcase,
    //   color: "from-green-500 to-emerald-500",
    //   emoji: "💼",
    //   description: "Professional experience",
    // },
    {
      name: "Skills",
      icon: Code,
      color: "from-orange-500 to-red-500",
      emoji: "🛠️",
      description: "Technical expertise",
    },
    {
      name: "Projects",
      icon: FolderOpen,
      color: "from-indigo-500 to-purple-500",
      emoji: "🚀",
      description: "My creative works",
    },
  ];

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  const renderCategoryContent = (): ReactNode => {
    switch (activeCategory) {
      case "Education":
        return <Education />;
      case "Certificates":
        return <Certificates />;
      case "Experience":
        return <Experience />;
      case "Skills":
        return <Skills />;
      case "Projects":
        return <Projects />;
      default:
        return (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              Select a category to view content.
            </p>
          </div>
        );
    }
  };

  const floatingElements = [
    { Icon: Star, delay: 0, x: 15, y: 20, color: "text-yellow-400" },
    { Icon: Zap, delay: 0.5, x: 85, y: 25, color: "text-blue-400" },
    { Icon: Heart, delay: 1, x: 10, y: 70, color: "text-pink-400" },
    { Icon: Trophy, delay: 1.5, x: 90, y: 75, color: "text-purple-400" },
  ];

  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Floating Decorative Elements */}
        {floatingElements.map(({ Icon, delay, x, y, color }, index) => (
          <motion.div
            key={index}
            className={`absolute ${color} opacity-20`}
            animate={{
              y: [0, -25, 0],
              rotate: [0, 20, -20, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: delay,
              ease: [0.4, 0, 0.2, 1],
            }}
            style={{
              left: `${x}%`,
              top: `${y}%`,
            }}
          >
            <Icon size={28} />
          </motion.div>
        ))}

        {/* Floating Particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
            animate={{
              y: [0, -80],
              x: [0, 40],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: i * 0.5,
              ease: [0.4, 0, 0.2, 1],
            }}
            style={{
              left: `${5 + i * 8}%`,
              top: `${60 + (i % 3) * 10}%`,
            }}
          />
        ))}
      </div>

      <motion.section
        id="portfolio"
        className="relative max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
      >
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="flex items-center justify-center space-x-3 mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
          >
            <span className="text-3xl">📁</span>
            <span className="text-lg text-gray-600 font-medium">
              My Work Collection
            </span>
          </motion.div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Portfolio
            </span>{" "}
            <motion.span
              className="relative inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Showcase
              </span>
              <motion.div
                className="absolute -top-2 -right-2"
                animate={{ rotate: [0, 15] }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                <Sparkles className="w-8 h-8 text-yellow-400" />
              </motion.div>
            </motion.span>
          </h2>

          <motion.p
            className="text-gray-600 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Explore my journey through education, skills, projects, and
            achievements! ✨
            <br />
            Each section tells a story of growth and passion for technology 🚀
          </motion.p>
        </motion.div>

        {/* Enhanced Category Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {categories.map((category, index) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.name;

            return (
              <motion.button
                key={category.name}
                className={`group relative px-6 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden ${
                  isActive
                    ? "text-white shadow-2xl"
                    : "bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-lg border border-white/20"
                }`}
                onClick={() => handleCategoryClick(category.name)}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{
                  y: -8,
                  scale: 1.05,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 20,
                  },
                }}
                whileTap={{
                  scale: 0.95,
                  transition: { duration: 0.1 },
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  type: "spring",
                  stiffness: 200,
                  damping: 25,
                }}
              >
                {/* Active Background */}
                {isActive && (
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${category.color}`}
                    layoutId="activeBackground"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                      mass: 0.8,
                    }}
                  />
                )}

                {/* Button C ontent */}
                <div className="relative z-10 flex items-center space-x-3">
                  <motion.div
                    animate={isActive ? { rotate: [0, 10, 0] } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.div>
                  <div className="text-left">
                    <div className="font-semibold flex items-center space-x-2">
                      <span>{category.name}</span>
                      <span className="text-lg">{category.emoji}</span>
                    </div>
                    <div
                      className={`text-xs ${
                        isActive ? "text-white/80" : "text-gray-500"
                      }`}
                    >
                      {category.description}
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                {!isActive && (
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />
                )}

                {/* Sparkle Effect for Active */}
                {isActive && (
                  <motion.div
                    className="absolute top-1 right-1"
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  >
                    <Sparkles className="w-3 h-3 text-white/60" />
                  </motion.div>
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Enhanced Content Section */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Content Background */}
          <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-3xl border border-white/20 shadow-2xl"></div>

          {/* Content Container */}
          <div className="relative p-8 sm:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                transition={{
                  duration: 0.5,
                  ease: [0.4, 0, 0.2, 1],
                  type: "spring",
                  stiffness: 200,
                  damping: 25,
                }}
              >
                {/* Category Header */}
                <motion.div
                  className="flex items-center justify-center space-x-4 mb-8"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {(() => {
                    const currentCategory = categories.find(
                      (cat) => cat.name === activeCategory
                    );
                    if (!currentCategory) return null;
                    const Icon = currentCategory.icon;
                    return (
                      <>
                        <motion.div
                          className={`p-3 rounded-2xl bg-gradient-to-r ${currentCategory.color} text-white shadow-lg`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Icon className="w-6 h-6" />
                        </motion.div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800 flex items-center space-x-2">
                            <span>{activeCategory}</span>
                            <span className="text-2xl">
                              {currentCategory.emoji}
                            </span>
                          </h3>
                          <p className="text-gray-600">
                            {currentCategory.description}
                          </p>
                        </div>
                      </>
                    );
                  })()}
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {renderCategoryContent()}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Decorative Corner Elements */}
          <motion.div
            className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60"
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
              opacity: [0.6, 0.8, 0.6],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-60"
            animate={{ scale: [1, 1.3, 1], rotate: [360, 180, 0] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Portfolio;