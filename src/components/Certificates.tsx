"use client";



import { motion } from "framer-motion";
import {
  Award,
  Calendar,
  Sparkles,
  Star,
  Trophy,
  Heart,
  Zap,
} from "lucide-react";
import Image from "next/image";

const Certificates = () => {
  const certificatesData = [
    {
      id: 1,
      title: "Basic/ Advance C /C++ ",
      issuer: "ETEC Center",
      date: "July 15 2023",
      image: "/catification/etec.jpg",
      description:
        "Earned by Sam Nisa completing tBasic/ Advance C /C++  course offered by ETEC Center.",
      type: "Technical",
      color: "from-blue-500 to-cyan-500",
      emoji: "🔒",
    },
    {
      id: 2,
      title: "Web design Junior",
      issuer: "CSTAD",
      date: "September 27, 2024",
      image: "/catification/cstad.jpg",
      description:
        "Had  completed the Pre-Univerdity training course of 1st generation of Web Design Junior ",
      type: "Achievement",
      color: "from-purple-500 to-pink-500",
      emoji: "🏆",
    },

  ];

  const floatingElements = [
    { Icon: Star, delay: 0, x: 10, y: 15, color: "text-yellow-400" },
    { Icon: Heart, delay: 0.5, x: 90, y: 20, color: "text-pink-400" },
    { Icon: Trophy, delay: 1, x: 15, y: 80, color: "text-purple-400" },
    { Icon: Zap, delay: 1.5, x: 85, y: 85, color: "text-blue-400" },
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
            <span className="text-3xl">🏆</span>
            <span className="text-lg text-gray-600 font-medium">
              My Achievements
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Certificates
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
            Recognition of my dedication to learning and professional
            development! 🎯
          </motion.p>
        </motion.div>

        {/* Enhanced Certificate Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificatesData.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="group relative"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              {/* Card Container */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 overflow-hidden relative">
                {/* Top Gradient Bar */}
                <div className={`h-2 bg-gradient-to-r ${cert.color}`} />

                {/* Certificate Type Badge */}
                <motion.div
                  className={`absolute top-6 right-6 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${cert.color} text-white shadow-lg z-10`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {cert.type}
                </motion.div>

                {/* Certificate Image */}
                <div className="relative p-6 pb-4">
                  <motion.div
                    className="relative rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Image
                      src={cert.image || "/placeholder.svg"}
                      alt={cert.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                </div>

                {/* Certificate Content */}
                <div className="p-6 pt-2">
                  {/* Header with Icon */}
                  <div className="flex items-start space-x-3 mb-4">
                    <motion.div
                      className={`p-2 rounded-xl bg-gradient-to-r ${cert.color} text-white shadow-md`}
                      whileHover={{ rotate: 15 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Award className="w-5 h-5" />
                    </motion.div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                        {cert.title}
                      </h2>
                      <div className="flex items-center space-x-2 text-gray-600 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{cert.date}</span>
                      </div>
                    </div>
                    <span className="text-2xl">{cert.emoji}</span>
                  </div>

                  {/* Issuer */}
                  <div className="mb-3">
                    <span className="text-sm font-medium text-gray-500">
                      Issued by
                    </span>
                    <p className="font-semibold text-gray-800">{cert.issuer}</p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {cert.description}
                  </p>

                  {/* View Certificate Button */}
                  {/* <motion.button
                    className={`w-full px-4 py-3 bg-gradient-to-r ${cert.color} text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 group`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>View Certificate</span>
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
                  </motion.button> */}
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
