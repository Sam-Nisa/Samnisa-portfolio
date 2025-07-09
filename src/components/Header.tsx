"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  Menu,
  X,
  Home,
  User,
  Briefcase,
  Mail,
  Sparkles,
  Star,
} from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Smooth spring values for scroll-based animations
  const scrollY = useSpring(0, { stiffness: 100, damping: 30 });
  const headerBlur = useTransform(scrollY, [0, 100], [8, 16]);

  // Handle scroll effect with smoother updates
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      scrollY.set(currentScrollY);

      const isScrolled = currentScrollY > 20;
      setScrolled(isScrolled);

      // Update active section based on scroll position
      const sections = ["hero", "about", "portfolio", "contact"];

      if (currentScrollY < 100) {
        setActiveSection("hero");
        return;
      }

      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (id: string) => {
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsMobileMenuOpen(false);
      setActiveSection(id);
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setIsMobileMenuOpen(false);
        setActiveSection(id);
      }
    }
  };

  const navItems = [
    { id: "hero", label: "Home", icon: Home, emoji: "🏠" },
    { id: "about", label: "About Me", icon: User, emoji: "👨‍💻" },
    { id: "portfolio", label: "Portfolio", icon: Briefcase, emoji: "💼" },
    { id: "contact", label: "Contact", icon: Mail, emoji: "📧" },
  ];

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        mass: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
        when: "afterChildren",
      },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const mobileItemVariants = {
    hidden: {
      opacity: 0,
      x: -30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 25,
      },
    },
  };

  return (
    <>
      {/* Enhanced background overlay for mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/30 backdrop-blur-md z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-xl border-b border-white/30"
            : "bg-white/85 backdrop-blur-lg shadow-lg"
        }`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          backdropFilter: `blur(${headerBlur}px)`,
        }}
      >
        {/* Enhanced decorative top border with gradient animation */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          animate={{
            background: [
              "linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)",
              "linear-gradient(90deg, #8b5cf6, #ec4899, #3b82f6)",
              "linear-gradient(90deg, #ec4899, #3b82f6, #8b5cf6)",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Ultra-smooth logo with multiple animation layers */}
            <motion.div
              className="flex-shrink-0 relative group cursor-pointer"
              variants={itemVariants}
              whileHover={{
                scale: 1.1,
                rotate: 5,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 15,
                },
              }}
              whileTap={{
                scale: 0.95,
                transition: { duration: 0.1 },
              }}
            >
              <motion.div
                className="relative"
                animate={{
                  rotate: [0, 3, -3, 0],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/logo/logo.jpg"
                  alt="Nisa Logo"
                  width={40}
                  height={40}
                  className="w-auto h-10 rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-500"
                />

                {/* Enhanced sparkle effects */}
                <motion.div
                  className="absolute -top-1 -right-1"
                  animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, 180, 360],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <Sparkles className="w-3 h-3 text-yellow-400 drop-shadow-sm" />
                </motion.div>

                {/* Additional sparkle */}
                <motion.div
                  className="absolute -bottom-1 -left-1"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [360, 180, 0],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  <Star className="w-2 h-2 text-pink-400 drop-shadow-sm" />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Ultra-smooth desktop menu */}
            <div className="hidden md:block">
              <motion.div
                className="flex items-center space-x-1"
                variants={containerVariants}
              >
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;

                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`relative px-5 py-2.5 rounded-2xl transition-all duration-400 group overflow-hidden ${
                        isActive
                          ? "text-white shadow-xl"
                          : "text-gray-600 hover:text-blue-600"
                      }`}
                      variants={itemVariants}
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
                      {/* Enhanced active background with smoother animation */}
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 rounded-2xl"
                          layoutId="activeBackground"
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                            mass: 0.8,
                          }}
                          animate={{
                            background: [
                              "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                              "linear-gradient(135deg, #8b5cf6, #3b82f6)",
                            ],
                          }}
                        />
                      )}

                      {/* Content with enhanced animations */}
                      <span className="relative z-10 flex items-center space-x-2.5">
                        <motion.div
                          animate={isActive ? { rotate: [0, 10, 0] } : {}}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                          <Icon className="w-4 h-4" />
                        </motion.div>
                        <span className="font-medium tracking-wide">
                          {item.label}
                        </span>
                        <motion.span
                          className="text-base"
                          animate={isActive ? { scale: [1, 1.2, 1] } : {}}
                          transition={{ duration: 0.6, ease: "easeInOut" }}
                        >
                          {item.emoji}
                        </motion.span>
                      </span>

                      {/* Enhanced hover effect */}
                      {!isActive && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100"
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileHover={{
                            scale: 1,
                            opacity: 1,
                            transition: {
                              type: "spring",
                              stiffness: 300,
                              damping: 25,
                            },
                          }}
                        />
                      )}

                      {/* Smooth active indicator */}
                      {isActive && (
                        <motion.div
                          className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-lg"
                          initial={{ scale: 0, y: 5 }}
                          animate={{ scale: 1, y: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 20,
                            delay: 0.1,
                          }}
                        />
                      )}
                    </motion.button>
                  );
                })}
              </motion.div>
            </div>

            {/* Ultra-smooth mobile menu toggle */}
            <div className="md:hidden">
              <motion.button
                onClick={toggleMobileMenu}
                className="relative p-3 text-gray-600 hover:text-blue-600 focus:outline-none rounded-2xl hover:bg-blue-50/70 transition-all duration-300"
                variants={itemVariants}
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 20,
                  },
                }}
                whileTap={{
                  scale: 0.9,
                  transition: { duration: 0.1 },
                }}
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -180, opacity: 0, scale: 0.5 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: 180, opacity: 0, scale: 0.5 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <X className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 180, opacity: 0, scale: 0.5 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: -180, opacity: 0, scale: 0.5 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <Menu className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>

          {/* Ultra-smooth mobile menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                className="md:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-xl border-b border-white/30 shadow-2xl overflow-hidden"
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <div className="px-6 py-8 space-y-3">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.id;

                    return (
                      <motion.button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`w-full text-left px-5 py-4 rounded-2xl transition-all duration-400 group overflow-hidden ${
                          isActive
                            ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-xl"
                            : "text-gray-600 hover:text-blue-600 hover:bg-blue-50/70"
                        }`}
                        variants={mobileItemVariants}
                        whileHover={{
                          scale: 1.02,
                          x: 8,
                          transition: {
                            type: "spring",
                            stiffness: 300,
                            damping: 25,
                          },
                        }}
                        whileTap={{
                          scale: 0.98,
                          transition: { duration: 0.1 },
                        }}
                      >
                        <div className="flex items-center space-x-4">
                          <motion.div
                            className={`p-3 rounded-xl ${
                              isActive
                                ? "bg-white/25 shadow-lg"
                                : "bg-blue-100 group-hover:bg-blue-200"
                            }`}
                            whileHover={{
                              rotate: 15,
                              scale: 1.1,
                              transition: {
                                type: "spring",
                                stiffness: 400,
                                damping: 20,
                              },
                            }}
                          >
                            <Icon className="w-5 h-5" />
                          </motion.div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-3">
                              <span className="font-semibold text-lg tracking-wide">
                                {item.label}
                              </span>
                              <motion.span
                                className="text-xl"
                                animate={
                                  isActive
                                    ? {
                                        scale: [1, 1.2, 1],
                                        rotate: [0, 10, 0],
                                      }
                                    : {}
                                }
                                transition={{
                                  duration: 0.8,
                                  ease: "easeInOut",
                                  repeat: isActive
                                    ? Number.POSITIVE_INFINITY
                                    : 0,
                                  repeatDelay: 2,
                                }}
                              >
                                {item.emoji}
                              </motion.span>
                            </div>
                          </div>
                          {isActive && (
                            <motion.div
                              className="w-3 h-3 bg-white rounded-full shadow-lg"
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 20,
                                delay: 0.2,
                              }}
                            />
                          )}
                        </div>
                      </motion.button>
                    );
                  })}
                </div>

                {/* Enhanced mobile menu footer */}
                <motion.div
                  className="px-6 py-6 border-t border-gray-200/50 bg-gradient-to-r from-blue-50/50 to-purple-50/50"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                >
                  <div className="flex items-center justify-center space-x-3 text-sm text-gray-600">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                    >
                      <Star className="w-4 h-4 text-yellow-400" />
                    </motion.div>
                    <span className="font-medium">Made with ❤️ by Vibol</span>
                    <motion.div
                      animate={{ rotate: [360, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                    >
                      <Star className="w-4 h-4 text-yellow-400" />
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Enhanced floating particles with smoother animations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
              animate={{
                y: [-10, -30, -10],
                x: [-5, 15, -5],
                opacity: [0, 0.8, 0],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.8,
                ease: "easeInOut",
              }}
              style={{
                left: `${15 + i * 20}%`,
                top: "50%",
              }}
            />
          ))}
        </div>
      </motion.nav>
    </>
  );
}
