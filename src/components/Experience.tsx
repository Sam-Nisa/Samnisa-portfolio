"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  ExternalLink,
  Sparkles,
  Star,
  Heart,
  Trophy,
} from "lucide-react";

const Experience = () => {
  const experienceData = [
    {
      id: 1,
      company: "SROLANH Smart Store",
      position: "Graphic Designer",
      duration: "December 2022 – May 2023",
      location: "Cambodia",
      type: "Full-time",
      color: "from-blue-500 to-cyan-500",
      emoji: "🎨",
      responsibilities: [
        "Designed and created visual content for branding",
        "Collaborated with marketing for campaigns",
        "Maintained brand identity consistency",
        "Used Adobe Photoshop, Illustrator, and Canva",
      ],
      achievements: ["Improved brand recognition", "Created 50+ design assets"],
      side: "right",
    },
    {
      id: 2,
      company: "IAYSP-Cambodia",
      position: "Volunteer (Technical Support / Graphic Design)",
      duration: "2020 – October 2022",
      location: "Cambodia",
      type: "Volunteer",
      color: "from-purple-500 to-pink-500",
      emoji: "🤝",
      responsibilities: [
        "Provided IT support and troubleshooting",
        "Designed event and promotional materials",
        "Managed technical aspects of events",
        "Developed creative solutions for technical challenges",
      ],
      achievements: ["Supported 10+ major events", "Trained 20+ volunteers"],
      side: "left",
    },
  ];

  const floatingElements = [
    { Icon: Star, delay: 0, x: 10, y: 15, color: "text-yellow-400" },
    { Icon: Heart, delay: 0.5, x: 90, y: 20, color: "text-pink-400" },
    { Icon: Trophy, delay: 1, x: 15, y: 80, color: "text-purple-400" },
    { Icon: Briefcase, delay: 1.5, x: 85, y: 85, color: "text-blue-400" },
  ];

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
            <span className="text-3xl">💼</span>
            <span className="text-lg text-gray-600 font-medium">
              My Professional Journey
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Experience
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
            Building expertise through hands-on experience and meaningful
            contributions! 🚀
          </motion.p>
        </motion.div>

        {/* Enhanced Timeline */}
        <div className="relative flex flex-col md:flex-row justify-center">
          {/* Enhanced Gradient Vertical Line */}
          <motion.div
            className="absolute left-1/2 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform -translate-x-1/2 hidden md:block rounded-full shadow-lg"
            initial={{ height: 0 }}
            animate={{ height: "calc(100% - 2rem)" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          {/* Timeline Dots */}
          <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
            {experienceData.map((_, index) => (
              <motion.div
                key={index}
                className="absolute w-6 h-6 bg-white rounded-full border-4 border-purple-500 shadow-lg"
                style={{ top: `${20 + index * 40}%` }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: 0.5 + index * 0.3,
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

          {/* Experience Cards */}
          <div className="w-full space-y-16">
            {experienceData.map((exp, index) => (
              <motion.div
                key={exp.id}
                className={`flex ${
                  exp.side === "right" ? "justify-end" : "justify-start"
                } w-full`}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }}
                variants={
                  exp.side === "right" ? cardVariantsRight : cardVariantsLeft
                }
              >
                <div className="w-full md:w-1/2 px-4">
                  {/* Enhanced Connection Dot */}
                  <motion.div
                    className={`absolute ${
                      exp.side === "right"
                        ? "-left-2 md:-left-4"
                        : "-right-2 md:-right-4"
                    } top-1/2 transform -translate-y-1/2 w-4 h-4 bg-gradient-to-br ${
                      exp.color
                    } rounded-full shadow-lg z-10 md:block hidden`}
                    whileHover={{ scale: 1.5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />

                  {/* Enhanced Card */}
                  <motion.div
                    className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 overflow-hidden relative"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Top Gradient Bar */}
                    <div className={`h-2 bg-gradient-to-r ${exp.color}`} />

                    {/* Type Badge */}
                    <motion.div
                      className={`absolute top-6 right-6 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${exp.color} text-white shadow-lg`}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      {exp.type}
                    </motion.div>

                    <div className="p-8">
                      {/* Header with Icon */}
                      <div className="flex items-start space-x-4 mb-6">
                        <motion.div
                          className={`p-3 rounded-xl bg-gradient-to-r ${exp.color} text-white shadow-lg`}
                          whileHover={{ rotate: 15 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Briefcase className="w-6 h-6" />
                        </motion.div>
                        <div className="flex-1">
                          <h2 className="text-2xl font-bold text-gray-800 mb-2">
                            {exp.company}
                          </h2>
                          <h3 className="text-lg font-semibold text-gray-700 mb-3">
                            {exp.position}
                          </h3>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2 text-gray-600">
                              <Calendar className="w-4 h-4" />
                              <span className="font-medium">
                                {exp.duration}
                              </span>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-600">
                              <MapPin className="w-4 h-4" />
                              <span className="font-medium">
                                {exp.location}
                              </span>
                            </div>
                          </div>
                        </div>
                        <span className="text-3xl">{exp.emoji}</span>
                      </div>

                      {/* Responsibilities */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-800 mb-3">
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-2">
                          {exp.responsibilities.map(
                            (responsibility, respIndex) => (
                              <motion.li
                                key={respIndex}
                                className="flex items-start space-x-2 text-gray-600"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8 + respIndex * 0.1 }}
                              >
                                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0" />
                                <span>{responsibility}</span>
                              </motion.li>
                            )
                          )}
                        </ul>
                      </div>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-800 mb-3">
                          Key Achievements
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <motion.span
                              key={achIndex}
                              className={`px-3 py-1 bg-gradient-to-r ${exp.color} text-white rounded-full text-sm font-medium shadow-md`}
                              whileHover={{ scale: 1.05 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              {achievement}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* View More Button */}
                      <motion.button
                        className={`w-full px-4 py-3 bg-gradient-to-r ${exp.color} text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span>View More Details</span>
                        <motion.div
                          animate={{ x: [0, 3] }}
                          transition={{
                            duration: 1,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "reverse",
                          }}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </motion.div>
                      </motion.button>
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
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <motion.div
          className="flex justify-center space-x-8 mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          {[
            { icon: "💼", label: "Positions", value: "2" },
            { icon: "📅", label: "Years Experience", value: "3+" },
            { icon: "🏆", label: "Projects Completed", value: "60+" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="font-bold text-gray-800 text-xl">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
