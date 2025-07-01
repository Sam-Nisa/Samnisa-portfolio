"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  BookOpen,
  Award,
  Star,
  Sparkles,
  Heart,
  Trophy,
} from "lucide-react";

const Education = () => {
  // Enhanced Animation Variants
  const cardVariantsLeft = {
    offscreen: { opacity: 0, x: -100, scale: 0.8 },
    onscreen: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const cardVariantsRight = {
    offscreen: { opacity: 0, x: 100, scale: 0.8 },
    onscreen: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const timelineVariants = {
    hidden: { height: 0 },
    visible: {
      height: "100%",
      transition: { duration: 2, ease: "easeInOut" },
    },
  };

  const educationData = [
    {
      id: 1,
      institution: "Royal University Of Phnom Penh (RUPP)",
      duration: "2023 - Present",
      program: "Information Technology Engineering",
      description:
        "The Information Technology Engineering program at RUPP provides a comprehensive foundation in computer science, software development, and engineering principles.",
      type: "university",
      status: "current",
      side: "right",
      icon: GraduationCap,
      color: "from-blue-500 to-cyan-500",
      emoji: "🎓",
    },
    {
      id: 2,
      institution: "IT Academy STEP Cambodia",
      duration: "2024 - Present",
      program: "Software Development",
      description:
        "The Software Development program at IT Academy STEP Cambodia provides a hands-on learning experience in modern software engineering.",
      type: "academy",
      status: "current",
      side: "left",
      icon: BookOpen,
      color: "from-purple-500 to-pink-500",
      emoji: "💻",
    },
    {
      id: 3,
      institution: "Hun Sen Soung High School",
      duration: "2017 - 2020",
      program: "High School Education",
      description:
        "During my time at Hun Sen Soung High School, I developed a strong academic foundation while actively engaging in various subjects and extracurricular activities.",
      type: "high-school",
      status: "completed",
      side: "right",
      icon: Award,
      color: "from-green-500 to-emerald-500",
      emoji: "🏫",
    },
    {
      id: 4,
      institution: "Dauntey Secondary School",
      duration: "2015 - 2017",
      program: "Secondary Education",
      description:
        "My education at Dauntey Secondary School provided me with essential knowledge and skills in various subjects, fostering my interest in technology and analytical thinking.",
      type: "secondary",
      status: "completed",
      side: "left",
      icon: BookOpen,
      color: "from-orange-500 to-red-500",
      emoji: "📚",
    },
  ];

  const floatingElements = [
    { Icon: Star, delay: 0, x: 10, y: 15, color: "text-yellow-400" },
    { Icon: Heart, delay: 0.5, x: 90, y: 20, color: "text-pink-400" },
    { Icon: Trophy, delay: 1, x: 15, y: 80, color: "text-purple-400" },
    { Icon: Sparkles, delay: 1.5, x: 85, y: 85, color: "text-blue-400" },
  ];

  return (
    <div className="relative py-12 px-4 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 rounded-3xl">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>

        {/* Floating Decorative Elements */}
        {floatingElements.map(({ Icon, delay, x, y, color }, index) => (
          <motion.div
            key={index}
            className={`absolute ${color} opacity-20`}
            animate={{
              y: [0, -15],
              rotate: [0, 10],
              scale: [1, 1.1],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: delay,
              ease: "easeInOut",
            }}
            style={{
              left: `${x}%`,
              top: `${y}%`,
            }}
          >
            <Icon size={24} />
          </motion.div>
        ))}

        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
            animate={{
              y: [0, -30],
              x: [0, 15],
              opacity: [0, 1],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: i * 0.5,
              ease: "easeInOut",
            }}
            style={{
              left: `${20 + i * 12}%`,
              top: `${70 + (i % 2) * 10}%`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex items-center justify-center space-x-3 mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          >
            <span className="text-3xl">🎓</span>
            <span className="text-lg text-gray-600 font-medium">
              My Learning Journey
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Education
            </span>
            <motion.span
              className="ml-3"
              animate={{ rotate: [0, 15] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              ✨
            </motion.span>
          </h1>

          <motion.p
            className="text-gray-600 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            From secondary school to university, each step has shaped my passion
            for technology and learning! 🚀
          </motion.p>
        </motion.div>

        {/* Enhanced Timeline Container */}
        <div className="relative flex flex-col md:flex-row justify-center">
          {/* Enhanced Gradient Vertical Line */}
          <motion.div
            className="absolute left-1/2 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform -translate-x-1/2 hidden md:block rounded-full shadow-lg"
            variants={timelineVariants}
            initial="hidden"
            animate="visible"
            style={{ height: "calc(100% - 2rem)" }}
          />

          {/* Animated Timeline Dots */}
          <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
            {educationData.map((_, index) => (
              <motion.div
                key={index}
                className="absolute w-6 h-6 bg-white rounded-full border-4 border-purple-500 shadow-lg"
                style={{ top: `${20 + index * 25}%` }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: 0.5 + index * 0.2,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{ scale: 1.3 }}
              >
                <motion.div
                  className="absolute inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              </motion.div>
            ))}
          </div>

          {/* Left Column */}
          <div className="w-full md:w-1/2 pr-0 md:pr-8 space-y-8">
            {educationData
              .filter((item) => item.side === "right")
              .map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={cardVariantsRight}
                    className="flex flex-col items-end text-left relative group"
                    style={{ marginTop: index === 0 ? "0" : "4rem" }}
                  >
                    {/* Enhanced Connection Dot */}
                    <motion.div
                      className="absolute -right-2 md:-right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-lg z-10"
                      whileHover={{ scale: 1.5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />

                    {/* Enhanced Card */}
                    <motion.div
                      className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 w-full max-w-lg border border-white/20 relative overflow-hidden"
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {/* Card Background Gradient */}
                      <div
                        className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color}`}
                      />

                      {/* Status Badge */}
                      <motion.div
                        className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                          item.status === "current"
                            ? "bg-green-100 text-green-700"
                            : "bg-blue-100 text-blue-700"
                        }`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        {item.status === "current"
                          ? "🔥 Current"
                          : "✅ Completed"}
                      </motion.div>

                      {/* Header with Icon */}
                      <div className="flex items-start space-x-4 mb-4">
                        <motion.div
                          className={`p-3 rounded-xl bg-gradient-to-r ${item.color} text-white shadow-lg`}
                          whileHover={{ rotate: 15 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Icon className="w-6 h-6" />
                        </motion.div>
                        <div className="flex-1">
                          <h2 className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            {item.institution}
                          </h2>
                          <div className="flex items-center space-x-2 text-gray-600 mb-1">
                            <Calendar className="w-4 h-4" />
                            <span className="font-medium">{item.duration}</span>
                          </div>
                          {item.program && (
                            <div className="flex items-center space-x-2 text-gray-600">
                              <BookOpen className="w-4 h-4" />
                              <span className="font-medium">
                                {item.program}
                              </span>
                            </div>
                          )}
                        </div>
                        <span className="text-2xl">{item.emoji}</span>
                      </div>

                      {/* Description */}
                      <div className="text-gray-700 leading-relaxed">
                        <p>{item.description}</p>
                      </div>

                      {/* Decorative Corner */}
                      <motion.div
                        className="absolute bottom-4 right-4"
                        animate={{ rotate: [0, 360] }}
                        transition={{
                          duration: 8,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        }}
                      >
                        <Sparkles className="w-4 h-4 text-purple-400 opacity-30" />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                );
              })}
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2 pl-0 md:pl-8 space-y-8">
            {educationData
              .filter((item) => item.side === "left")
              .map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={cardVariantsLeft}
                    className="flex flex-col items-start text-left relative group"
                    style={{ marginTop: index === 0 ? "8rem" : "4rem" }}
                  >
                    {/* Enhanced Connection Dot */}
                    <motion.div
                      className="absolute -left-2 md:-left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full shadow-lg z-10"
                      whileHover={{ scale: 1.5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />

                    {/* Enhanced Card */}
                    <motion.div
                      className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 w-full max-w-lg border border-white/20 relative overflow-hidden"
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {/* Card Background Gradient */}
                      <div
                        className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color}`}
                      />

                      {/* Status Badge */}
                      <motion.div
                        className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                          item.status === "current"
                            ? "bg-green-100 text-green-700"
                            : "bg-blue-100 text-blue-700"
                        }`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        {item.status === "current"
                          ? "🔥 Current"
                          : "✅ Completed"}
                      </motion.div>

                      {/* Header with Icon */}
                      <div className="flex items-start space-x-4 mb-4">
                        <motion.div
                          className={`p-3 rounded-xl bg-gradient-to-r ${item.color} text-white shadow-lg`}
                          whileHover={{ rotate: 15 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Icon className="w-6 h-6" />
                        </motion.div>
                        <div className="flex-1">
                          <h2 className="text-xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                            {item.institution}
                          </h2>
                          <div className="flex items-center space-x-2 text-gray-600 mb-1">
                            <Calendar className="w-4 h-4" />
                            <span className="font-medium">{item.duration}</span>
                          </div>
                          {item.program && (
                            <div className="flex items-center space-x-2 text-gray-600">
                              <BookOpen className="w-4 h-4" />
                              <span className="font-medium">
                                {item.program}
                              </span>
                            </div>
                          )}
                        </div>
                        <span className="text-2xl">{item.emoji}</span>
                      </div>

                      {/* Description */}
                      <div className="text-gray-700 leading-relaxed">
                        <p>{item.description}</p>
                      </div>

                      {/* Decorative Corner */}
                      <motion.div
                        className="absolute bottom-4 right-4"
                        animate={{ rotate: [0, 360] }}
                        transition={{
                          duration: 8,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        }}
                      >
                        <Sparkles className="w-4 h-4 text-pink-400 opacity-30" />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
