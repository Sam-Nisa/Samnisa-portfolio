"use client";

import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  Calendar,
  Briefcase,
  ChevronLeft,
  ArrowRight,
  Award,
  Palette,
  Users,
  MessageSquare,
  Heart,
  Star,
  Sparkles,
} from "lucide-react";

const SrolanhSmartStorePage = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({
    src: "",
    alt: "",
    title: "",
  });
  const router = useRouter();

  // Smooth scroll to top when tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeTab]);

  const artworks = [
    {
      src: "/Project-ArtWork/Family.jpg",
      alt: "Family Artwork",
      title: "Family Campaign",
    },
    {
      src: "/Project-ArtWork/Poster chat.jpg",
      alt: "Poster Chat",
      title: "Chat Promotion",
    },
    {
      src: "/Project-ArtWork/Knowledge.jpg",
      alt: "Knowledge",
      title: "Knowledge Series",
    },
    {
      src: "/Project-ArtWork/Product template.jpg",
      alt: "Product Template",
      title: "Product Display",
    },
    {
      src: "/Project-ArtWork/Landscape.jpg",
      alt: "Landscape",
      title: "Landscape Design",
    },
  ];

  const achievements = [
    "Increased social media engagement by 45% through creative visual content 🚀",
    "Designed the company&apos;s rebranding materials that led to 30% increase in brand recognition ✨",
    "Created promotional materials for 5 major marketing campaigns 🎨",
    "Developed a consistent visual language across all brand touchpoints 💫",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const openImageDialog = (image: {
    src: string;
    alt: string;
    title: string;
  }) => {
    setSelectedImage(image);
    setIsDialogOpen(true);
  };

  const handleBackClick = () => {
    router.push("/#experience");
  };

  const tabIcons = {
    overview: <Heart className="w-4 h-4" />,
    responsibilities: <Sparkles className="w-4 h-4" />,
    gallery: <Palette className="w-4 h-4" />,
    achievements: <Star className="w-4 h-4" />,
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 min-h-screen">
      {/* Friendly decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-200 to-pink-200 rounded-full opacity-40 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 -left-40 w-80 h-80 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full opacity-40 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full opacity-30 blur-3xl animate-pulse delay-2000"></div>

        {/* Floating hearts */}
        <div className="absolute top-20 left-20 text-pink-300 animate-bounce delay-500">
          <Heart className="w-6 h-6" />
        </div>
        <div className="absolute top-40 right-32 text-orange-300 animate-bounce delay-1000">
          <Sparkles className="w-5 h-5" />
        </div>
        <div className="absolute bottom-40 left-32 text-purple-300 animate-bounce delay-1500">
          <Star className="w-4 h-4" />
        </div>
      </div>

      <div className="min-h-screen py-12 mt-10 px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-5xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Back Button & Title */}
          <motion.div
            className="flex flex-col w-full items-center"
            variants={itemVariants}
          >
            <button
              onClick={handleBackClick}
              className="group relative px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 ease-in-out 
              bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 hover:from-orange-500 hover:via-pink-500 hover:to-purple-500
              shadow-lg hover:shadow-xl hover:shadow-pink-500/30 transform hover:-translate-y-2 hover:scale-105 active:translate-y-0 active:scale-100 flex items-center
              border-2 border-white/20 backdrop-blur-sm"
            >
              <ChevronLeft className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              <span className="relative">
                Back to Portfolio
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-300 rounded-full animate-ping"></div>
              </span>
            </button>

            <motion.div
              className="mt-12 text-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative">
                <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                  SROLANH Smart Store
                </h2>
                <div className="absolute -top-4 -right-4 text-yellow-400 animate-spin">
                  <Sparkles className="w-8 h-8" />
                </div>
              </div>
              <p className="mt-6 text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
                Creating visual identities and marketing materials that connect
                hearts and minds 💝
              </p>
            </motion.div>
          </motion.div>

          {/* Friendly Custom Tabs */}
          <div className="mt-20">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {["overview", "responsibilities", "gallery", "achievements"].map(
                (tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`group relative py-4 px-8 font-semibold text-sm transition-all duration-300 rounded-full flex items-center gap-2 ${
                      activeTab === tab
                        ? "bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 text-white shadow-lg shadow-pink-500/30 scale-105"
                        : "bg-white/70 backdrop-blur-sm text-gray-600 hover:text-orange-500 hover:bg-white/90 hover:scale-105 shadow-md"
                    }`}
                  >
                    {tabIcons[tab as keyof typeof tabIcons]}
                    <span>{tab.charAt(0).toUpperCase() + tab.slice(1)}</span>
                    {activeTab === tab && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-300 rounded-full animate-pulse"></div>
                    )}
                  </button>
                )
              )}
            </div>

            {/* Tab Content */}
            <motion.div
              className="mt-8"
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Overview Tab */}
              {activeTab === "overview" && (
                <div className="space-y-8">
                  {/* Info Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100"
                      whileHover={{ scale: 1.02, rotate: 1 }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="bg-gradient-to-br from-orange-100 to-pink-100 p-4 rounded-full">
                          <Calendar className="h-6 w-6 text-orange-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800">
                            Duration ⏰
                          </h3>
                          <p className="text-gray-600 font-medium">
                            December 2022 – May 2023
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100"
                      whileHover={{ scale: 1.02, rotate: -1 }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-4 rounded-full">
                          <Briefcase className="h-6 w-6 text-purple-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800">
                            Position 🎨
                          </h3>
                          <p className="text-gray-600 font-medium">
                            Graphic Designer
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Description */}
                  <motion.div
                    className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100"
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <Heart className="w-8 h-8 text-pink-500" />
                      <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
                        Project Overview
                      </h3>
                    </div>
                    <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                      <p>
                        At SROLANH Smart Store, I had the wonderful opportunity
                        to create visually appealing designs that truly
                        resonated with the brand&apos;s heart and soul. This
                        included crafting beautiful logos, eye-catching banners,
                        engaging social media posts, and memorable promotional
                        materials. ✨
                      </p>
                      <p>
                        I collaborated closely with an amazing marketing team to
                        develop creative campaigns that spoke directly to our
                        audience&apos;s hearts. This journey required not just
                        technical skills, but also empathy and understanding of
                        what makes people smile and connect with a brand. 💫
                      </p>
                      <p>
                        Using tools like Adobe Photoshop, Illustrator, and
                        Canva, I brought ideas to life with designs that
                        didn&apos;t just look good – they felt good and created
                        genuine connections with customers. 🎨
                      </p>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                      {[
                        {
                          name: "Adobe Photoshop",
                          color: "bg-blue-100 text-blue-700",
                          emoji: "🎨",
                        },
                        {
                          name: "Adobe Illustrator",
                          color: "bg-orange-100 text-orange-700",
                          emoji: "✏️",
                        },
                        {
                          name: "Canva",
                          color: "bg-teal-100 text-teal-700",
                          emoji: "🖌️",
                        },
                        {
                          name: "Brand Design",
                          color: "bg-purple-100 text-purple-700",
                          emoji: "💎",
                        },
                        {
                          name: "Social Media",
                          color: "bg-pink-100 text-pink-700",
                          emoji: "📱",
                        },
                      ].map((skill, index) => (
                        <motion.span
                          key={skill.name}
                          className={`inline-flex items-center gap-2 ${skill.color} px-4 py-2 rounded-full text-sm font-semibold shadow-sm`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <span>{skill.emoji}</span>
                          {skill.name}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              )}

              {/* Responsibilities Tab */}
              {activeTab === "responsibilities" && (
                <motion.div
                  className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100"
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="flex items-center gap-3 mb-8">
                    <Sparkles className="w-8 h-8 text-orange-500" />
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
                      Key Responsibilities
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                      {
                        icon: <Palette className="h-6 w-6 text-orange-600" />,
                        title: "Brand Design 🎨",
                        description:
                          "Created and maintained visual elements that established a warm, consistent brand identity that people love to connect with.",
                        color: "from-orange-100 to-pink-100",
                      },
                      {
                        icon: <Users className="h-6 w-6 text-purple-600" />,
                        title: "Marketing Collaboration 🤝",
                        description:
                          "Worked hand-in-hand with the marketing team to develop visual assets that truly touched hearts and drove meaningful engagement.",
                        color: "from-purple-100 to-pink-100",
                      },
                      {
                        icon: (
                          <MessageSquare className="h-6 w-6 text-pink-600" />
                        ),
                        title: "Social Media Content 📱",
                        description:
                          "Designed delightful visual content that made people stop scrolling, smile, and want to engage with our brand story.",
                        color: "from-pink-100 to-purple-100",
                      },
                      {
                        icon: <Award className="h-6 w-6 text-teal-600" />,
                        title: "Quality Assurance ✨",
                        description:
                          "Ensured every design sparkled with quality and perfectly aligned with our brand&apos;s friendly, approachable personality.",
                        color: "from-teal-100 to-blue-100",
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start space-x-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div
                          className={`bg-gradient-to-br ${item.color} p-4 rounded-full mt-1 shadow-md`}
                        >
                          {item.icon}
                        </div>
                        <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-sm flex-grow border border-white/50">
                          <h4 className="font-bold text-lg text-gray-800 mb-3">
                            {item.title}
                          </h4>
                          <p className="text-gray-600 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-10 p-8 bg-gradient-to-r from-orange-50 via-pink-50 to-purple-50 rounded-2xl border border-orange-100">
                    <div className="flex items-center gap-3 mb-6">
                      <Star className="w-6 h-6 text-yellow-500" />
                      <h4 className="font-bold text-xl text-gray-800">
                        Tools & Technologies 🛠️
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      {[
                        "Adobe Photoshop 🎨",
                        "Adobe Illustrator ✏️",
                        "Canva 🖌️",
                        "Social Media Platforms 📱",
                        "Digital Marketing Tools 📊",
                      ].map((tool, index) => (
                        <motion.div
                          key={tool}
                          className="bg-white px-6 py-3 rounded-full text-sm font-semibold text-gray-700 shadow-md border border-white/50"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          {tool}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Gallery Tab */}
              {activeTab === "gallery" && (
                <div className="space-y-8">
                  <div className="flex items-center gap-3 justify-center">
                    <Palette className="w-8 h-8 text-pink-500" />
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
                      Design Portfolio 🎨
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {artworks.map((artwork, index) => (
                      <motion.div
                        key={index}
                        className="group relative overflow-hidden rounded-3xl shadow-lg cursor-pointer bg-white/80 backdrop-blur-sm border border-pink-100"
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 10,
                          delay: index * 0.1,
                        }}
                        onClick={() => openImageDialog(artwork)}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <div className="p-4">
                          <Image
                            src={artwork.src || "/placeholder.svg"}
                            alt={artwork.alt}
                            width={500}
                            height={500}
                            className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110 rounded-2xl"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end rounded-3xl">
                          <div className="p-6 w-full">
                            <h4 className="text-white font-bold text-lg flex items-center gap-2">
                              <Heart className="w-5 h-5 text-pink-300" />
                              {artwork.title}
                            </h4>
                            <p className="text-white/80 text-sm mt-1">
                              Click to view full size ✨
                            </p>
                          </div>
                        </div>
                        <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <ArrowRight className="w-4 h-4 text-white" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Achievements Tab */}
              {activeTab === "achievements" && (
                <motion.div
                  className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-yellow-100"
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="flex items-center gap-3 mb-8">
                    <Star className="w-8 h-8 text-yellow-500" />
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
                      Key Achievements
                    </h3>
                  </div>

                  <div className="space-y-6">
                    {achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start space-x-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-full flex-shrink-0 shadow-lg">
                          <Award className="h-6 w-6 text-white" />
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm flex-grow border border-yellow-100">
                          <p className="text-gray-700 text-lg leading-relaxed font-medium">
                            {achievement}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-10 p-8 bg-gradient-to-r from-yellow-50 via-orange-50 to-pink-50 rounded-2xl border border-yellow-100">
                    <div className="flex items-center gap-3 mb-6">
                      <Sparkles className="w-6 h-6 text-purple-500" />
                      <h4 className="font-bold text-xl text-gray-800">
                        Skills Developed 🌟
                      </h4>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {[
                        {
                          name: "Visual Design",
                          level: 95,
                          color: "from-pink-400 to-purple-500",
                        },
                        {
                          name: "Adobe Creative Suite",
                          level: 92,
                          color: "from-teal-400 to-green-500",
                        },
                        {
                          name: "Project Management",
                          level: 80,
                          color: "from-green-400 to-yellow-500",
                        },
                      ].map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          className="bg-white px-4 py-4 rounded-2xl text-center shadow-md border border-white/50"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <span className="font-semibold text-gray-700 text-sm block mb-3">
                            {skill.name}
                          </span>
                          <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                            <motion.div
                              className={`bg-gradient-to-r ${skill.color} h-3 rounded-full shadow-sm`}
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: index * 0.1 }}
                            ></motion.div>
                          </div>
                          <span className="text-xs text-gray-500 font-medium">
                            {skill.level}%
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Image Dialog */}
      {isDialogOpen && (
        <motion.div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setIsDialogOpen(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-auto shadow-2xl border border-pink-100"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <div className="p-6 border-b border-pink-100 bg-gradient-to-r from-orange-50 to-pink-50">
              <div className="flex items-center gap-3">
                <Heart className="w-6 h-6 text-pink-500" />
                <h3 className="text-2xl font-bold text-gray-800">
                  {selectedImage.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm mt-2">
                Design created with love for SROLANH Smart Store campaign ✨
              </p>
            </div>
            <div className="p-6 flex justify-center bg-gradient-to-br from-white to-pink-50">
              <Image
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                width={800}
                height={800}
                className="max-h-[70vh] w-auto object-contain rounded-2xl shadow-lg"
              />
            </div>
            <div className="p-6 border-t border-pink-100 flex justify-end bg-gradient-to-r from-orange-50 to-pink-50">
              <button
                className="px-6 py-3 bg-gradient-to-r from-orange-400 to-pink-400 text-white rounded-full hover:from-orange-500 hover:to-pink-500 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                onClick={() => setIsDialogOpen(false)}
              >
                Close 💫
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SrolanhSmartStorePage;
