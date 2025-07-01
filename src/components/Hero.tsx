"use client";

import Image from "next/image";
import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Sparkles, Heart, Code, Coffee, Star } from "lucide-react";

export default function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Move roles outside component or use useMemo to prevent recreation
  const roles = useMemo(
    () => ["Software Development Student", "IT Engineering Student"],
    []
  );

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[loopNum % roles.length];

      if (!isDeleting) {
        // Typing forward
        setText(currentRole.substring(0, text.length + 1));
        setTypingSpeed(Math.random() * 100 + 50); // Random speed for natural feel

        if (text === currentRole) {
          setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
          return;
        }
      } else {
        // Deleting backward
        setText(currentRole.substring(0, text.length - 1));
        setTypingSpeed(30); // Faster deletion

        if (text === "") {
          setIsDeleting(false);
          setLoopNum((prev) => prev + 1);
          setTypingSpeed(100);
          return;
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  const floatingIcons = [
    { Icon: Code, delay: 0, x: 20, y: 30 },
    { Icon: Coffee, delay: 0.5, x: -30, y: 50 },
    { Icon: Star, delay: 1, x: 40, y: 80 },
    { Icon: Heart, delay: 1.5, x: -20, y: 20 },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
            animate={{
              y: [-20, -100],
              x: [0, 30],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: i * 0.6,
              ease: [0.4, 0, 0.2, 1],
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${60 + i * 5}%`,
            }}
          />
        ))}
      </div>

      <motion.section
        id="hero"
        className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen flex items-center justify-center"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Text Content */}
          <motion.div
            className="text-center lg:text-left relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              type: "spring",
              stiffness: 120,
              damping: 25,
            }}
          >
            {/* Floating Icons */}
            {floatingIcons.map(({ Icon, delay, x, y }, index) => (
              <motion.div
                key={index}
                className="absolute text-blue-400/30"
                animate={{
                  y: [-15, 5],
                  rotate: [0, 8, -8, 0],
                  scale: [1, 1.1, 1],
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
                <Icon size={24} />
              </motion.div>
            ))}

            {/* Greeting with Wave */}
            <motion.div
              className="flex items-center justify-center lg:justify-start mb-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            >
              <span className="text-2xl mr-2">👋</span>
              <span className="text-lg text-gray-600 font-medium">
                Hello there!
              </span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                I am{" "}
              </span>
              <motion.span
                className="relative inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x">
                  Vibol
                </span>
                <motion.div
                  className="absolute -top-2 -right-2"
                  animate={{ rotate: [0, 15] }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                >
                  <Sparkles className="w-6 h-6 text-yellow-400" />
                </motion.div>
              </motion.span>
            </h1>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 min-h-[3rem]">
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {text}
                </span>
                <motion.span
                  className="ml-1 text-blue-500"
                  animate={{ opacity: [0, 1] }}
                  transition={{
                    duration: 0.8,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                >
                  |
                </motion.span>
              </span>
            </h2>

            <motion.p
              className="text-gray-600 mb-10 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <span className="font-semibold text-gray-800">
                Welcome to my digital world!
              </span>{" "}
              ✨ I am a dedicated developer who loves crafting beautiful,
              user-friendly applications. I blend creativity with technology to
              create amazing experiences. for specializing in building
              responsive, user-friendly interfaces and enjoys turning ideas into
              interactive web experiences in frontend development. 🚀
            </motion.p>

            {/* Enhanced Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <motion.a
                href="#portfolio"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                whileHover={{
                  scale: 1.05,
                  y: -3,
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
              >
                <span className="relative z-10 flex items-center justify-center">
                  <span>View My Work</span>
                  <motion.span
                    className="ml-2"
                    animate={{ x: [0, 5] }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }}
                  >
                    ✨
                  </motion.span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>

              <motion.a
                href="#contact"
                className="group px-8 py-4 border-2 border-blue-500 text-blue-600 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 relative overflow-hidden"
                whileHover={{
                  scale: 1.05,
                  y: -3,
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
              >
                <span className="relative z-10 flex items-center justify-center">
                  <span>Let Chat</span>
                  <motion.span
                    className="ml-2"
                    animate={{ rotate: [0, 15] }}
                    transition={{
                      duration: 1,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }}
                  >
                    💬
                  </motion.span>
                </span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Enhanced Image Section */}
          <motion.div
            className="flex justify-center lg:justify-end relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative group">
              {/* Decorative Elements */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-xl"
                animate={{
                  scale: [1, 1.05],
                  rotate: [0, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />

              {/* Main Image Container */}
              <motion.div
                className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-2xl"
                whileHover={{
                  scale: 1.02,
                  rotateY: 3,
                  rotateX: 2,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                  },
                }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Image
                  src="/gif/hero.png"
                  alt="Vibol - Software Developer"
                  width={400}
                  height={300}
                  className="w-full max-w-sm mx-auto rounded-2xl shadow-lg"
                />

                {/* Floating Badge */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                  animate={{
                    y: [0, -5],
                    rotate: [0, 5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                >
                  Available for work! 🚀
                </motion.div>

                {/* Tech Stack Icons */}
                <motion.div
                  className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 }}
                >
                  {["⚛️", "🔥", "⚡", "🎨"].map((emoji, index) => (
                    <motion.div
                      key={index}
                      className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-xl"
                      whileHover={{
                        scale: 1.3,
                        rotate: 15,
                        y: -5,
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 15,
                        },
                      }}
                      animate={{
                        y: [0, -8, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                        delay: index * 0.3,
                        ease: "easeInOut",
                      }}
                    >
                      {emoji}
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <style jsx>{`
        @keyframes gradient-x {
          0%,
          100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </div>
  );
}
