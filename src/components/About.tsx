"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Download,
  Heart,
  Code2,
  Palette,
  Coffee,
  Star,
  Sparkles,
  Award,
} from "lucide-react";

export default function About() {
  const socialIcons = [
    { name: "github", icon: "github.png", color: "hover:bg-gray-800" },
    { name: "telegram", icon: "telegram.png", color: "hover:bg-blue-500" },
    { name: "facebook", icon: "facebook.png", color: "hover:bg-blue-600" },
    { name: "tik-tok", icon: "tik-tok.png", color: "hover:bg-black" },
  ];

  const skillIcons = [
    { name: "photoshop", icon: "photoshop.png", color: "hover:bg-blue-600" },
    {
      name: "illustrator",
      icon: "illustrator.png",
      color: "hover:bg-orange-500",
    },
    { name: "figma", icon: "figma.png", color: "hover:bg-purple-500" },
    {
      name: "visual-studio",
      icon: "visual-studio.png",
      color: "hover:bg-blue-700",
    },
  ];

  const floatingElements = [
    { Icon: Code2, delay: 0, x: 10, y: 20, color: "text-blue-400" },
    { Icon: Palette, delay: 0.5, x: 85, y: 30, color: "text-purple-400" },
    { Icon: Coffee, delay: 1, x: 15, y: 70, color: "text-orange-400" },
    { Icon: Star, delay: 1.5, x: 90, y: 80, color: "text-yellow-400" },
  ];

  const achievements = [
    { icon: "🎓", label: "Student", value: "IT Engineering" },
    { icon: "💻", label: "Projects", value: "15+" },
    { icon: "🏆", label: "Experience", value: "2+ Years" },
    { icon: "❤️", label: "Passion", value: "Coding" },
  ];

  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-purple-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Floating Decorative Elements */}
        {floatingElements.map(({ Icon, delay, x, y, color }, index) => (
          <motion.div
            key={index}
            className={`absolute ${color} opacity-20`}
            animate={{
              y: [0, -20],
              rotate: [0, 10],
              scale: [1, 1.1],
            }}
            transition={{
              duration: 4,
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
            <Icon size={32} />
          </motion.div>
        ))}

        {/* Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
            animate={{
              y: [0, -50],
              x: [0, 20],
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
              top: `${70 + i * 2}%`,
            }}
          />
        ))}
      </div>

      <motion.section
        id="about"
        className="relative max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Profile Image */}
          <motion.div
            className="relative group flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Decorative Ring */}
              <motion.div
                className="absolute -inset-6 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-full blur-xl"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.05],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />

              {/* Image Container */}
              <motion.div
                className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-4 shadow-2xl"
                whileHover={{
                  scale: 1.02,
                  rotateY: 5,
                }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Image
                  src="/about.png"
                  alt="Vibol - About Me"
                  width={400}
                  height={400}
                  className="rounded-2xl shadow-lg w-full h-auto"
                  style={{ maxWidth: "400px" }}
                />

                {/* Floating Badge */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg flex items-center space-x-1"
                  animate={{
                    y: [0, -5],
                    rotate: [0, 3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                >
                  <Heart className="w-3 h-3" />
                  <span>Passionate</span>
                </motion.div>

                {/* Corner Decorations */}
                <motion.div
                  className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white p-2 rounded-full shadow-lg"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  <Sparkles className="w-4 h-4" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Enhanced About Content */}
          <motion.div
            className="text-center lg:text-left space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Header Section */}
            <div className="space-y-4">
              <motion.div
                className="flex items-center justify-center lg:justify-start space-x-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <span className="text-2xl">👨‍💻</span>
                <h3 className="text-gray-600 text-lg font-medium">Who Am I?</h3>
              </motion.div>

              <motion.h2
                className="text-5xl lg:text-6xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  About
                </span>{" "}
                <motion.span
                  className="relative inline-block"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Me
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
                    <Award className="w-6 h-6 text-yellow-400" />
                  </motion.div>
                </motion.span>
              </motion.h2>
            </div>

            {/* Enhanced Description */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <p className="text-gray-700 text-lg leading-relaxed">
                <span className="font-semibold text-gray-800">
                  Hey there! 👋
                </span>{" "}
                I'm an{" "}
                <span className="text-blue-600 font-medium">enthusiastic</span>{" "}
                and{" "}
                <span className="text-purple-600 font-medium">hardworking</span>{" "}
                software development student with proven organizational and
                communication skills.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I love turning ideas into reality through code, creating
                beautiful user experiences, and solving complex problems with
                creative solutions. When I'm not coding, you'll find me
                exploring new technologies or sipping coffee while brainstorming
                my next project! ☕✨
              </p>
            </motion.div>

            {/* Achievement Stats */}
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-2xl mb-2">{achievement.icon}</div>
                  <div className="font-bold text-gray-800 text-sm">
                    {achievement.value}
                  </div>
                  <div className="text-xs text-gray-600">
                    {achievement.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced Social Media and Skills Section */}
            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start space-y-8 lg:space-y-0 lg:space-x-12">
              {/* Enhanced Social Media */}
              <motion.div
                className="flex flex-col items-center space-y-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="relative">
                  <h4 className="text-lg font-semibold text-gray-800 flex items-center space-x-2">
                    <span>🌐</span>
                    <span>Connect With Me</span>
                  </h4>
                  <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2"></div>
                </div>
                <div className="flex space-x-3">
                  {socialIcons.map((social, index) => (
                    <motion.div
                      key={index}
                      className={`relative group cursor-pointer`}
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="w-12 h-12 bg-white rounded-2xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300">
                        <Image
                          src={`/icon/${social.icon}`}
                          alt={social.name}
                          width={24}
                          height={24}
                          className="transition-transform duration-300"
                        />
                      </div>
                      <motion.div
                        className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                        layoutId={`social-${index}`}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Enhanced Skills */}
              <motion.div
                className="flex flex-col items-center space-y-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="relative">
                  <h4 className="text-lg font-semibold text-gray-800 flex items-center space-x-2">
                    <span>🛠️</span>
                    <span>My Toolkit</span>
                  </h4>
                  <div className="w-full h-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mt-2"></div>
                </div>
                <div className="flex space-x-3">
                  {skillIcons.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="relative group cursor-pointer"
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      animate={{
                        y: [0, -3],
                      }}
                      style={{
                        animationDelay: `${index * 0.2}s`,
                      }}
                    >
                      <div className="w-12 h-12 bg-white rounded-2xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300">
                        <Image
                          src={`/icon/${skill.icon}`}
                          alt={skill.name}
                          width={24}
                          height={24}
                          className="transition-transform duration-300"
                        />
                      </div>
                      <motion.div
                        className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                        layoutId={`skill-${index}`}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Enhanced Download CV Button */}
            <motion.div
              className="flex justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.button
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <Download className="w-5 h-5" />
                  <span>Download My CV</span>
                  <motion.span
                    animate={{ x: [0, 3] }}
                    transition={{
                      duration: 1,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                  >
                    📄
                  </motion.span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
