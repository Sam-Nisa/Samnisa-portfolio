"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  Calendar,
  Users,
  ChevronLeft,
  Palette,
  Settings,
  Heart,
  Star,
  Sparkles,
  Camera,
  Trophy,
  Zap,
} from "lucide-react";

const IayspCambodiaPage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
    title: string;
    description?: string;
  }>({
    src: "",
    alt: "",
    title: "",
  });
  const router = useRouter();

  const handleBackClick = () => {
    router.push("/#experience");
  };

  const artworks = [
    {
      src: "/Project-ArtWork/Pchum Ben day poster.jpg",
      alt: "Pchum Ben Day Poster",
      title: "Pchum Ben Festival Poster",
      description: "Traditional festival celebration design",
    },
    {
      src: "/Project-ArtWork/Workshop.jpg",
      alt: "Workshop Design",
      title: "Workshop Promotional Material",
      description: "Educational workshop promotion",
    },
    {
      src: "/Project-ArtWork/Ticket.jpg",
      alt: "Event Ticket",
      title: "Event Ticket Design",
      description: "Creative ticket design for events",
    },
  ];

  const responsibilities = [
    {
      icon: <Settings className="h-6 w-6 text-blue-600" />,
      title: "IT Support & Troubleshooting 🔧",
      description:
        "Provided technical support and solved complex IT challenges with creativity and patience.",
      color: "from-blue-100 to-cyan-100",
    },
    {
      icon: <Palette className="h-6 w-6 text-purple-600" />,
      title: "Graphic Design 🎨",
      description:
        "Designed beautiful event and promotional materials that captured hearts and minds.",
      color: "from-purple-100 to-pink-100",
    },
    {
      icon: <Zap className="h-6 w-6 text-orange-600" />,
      title: "Event Technical Management ⚡",
      description:
        "Managed technical aspects of events, ensuring everything ran smoothly and professionally.",
      color: "from-orange-100 to-yellow-100",
    },
    {
      icon: <Heart className="h-6 w-6 text-pink-600" />,
      title: "Creative Problem Solving 💡",
      description:
        "Developed innovative solutions for technical challenges with a positive, can-do attitude.",
      color: "from-pink-100 to-rose-100",
    },
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
    description?: string;
  }) => {
    setSelectedImage({
      src: image.src,
      alt: image.alt,
      title: image.title,
      description: image.description || "",
    });
    setIsDialogOpen(true);
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 min-h-screen">
      {/* Friendly decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-200 to-pink-200 rounded-full opacity-40 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 -left-40 w-80 h-80 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full opacity-40 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full opacity-30 blur-3xl animate-pulse delay-2000"></div>

        {/* Floating elements */}
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

      <Header />

      {/* Main Content */}
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
                  IAYSP-Cambodia
                </h2>
                <div className="absolute -top-4 -right-4 text-yellow-400 animate-spin">
                  <Sparkles className="w-8 h-8" />
                </div>
              </div>
              <p className="mt-6 text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
                Volunteering with passion, creating with purpose, and making a
                difference in the community 🌟
              </p>
            </motion.div>
          </motion.div>

          {/* Information Cards */}
          <motion.div
            className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={itemVariants}
          >
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
                    December 2020 – October 2022
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
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Position 🤝
                  </h3>
                  <p className="text-gray-600 font-medium">
                    Volunteer (Technical Support / Graphic Design)
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Key Responsibilities */}
          <motion.div
            className="mt-16 bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100"
            variants={itemVariants}
            whileHover={{ scale: 1.01 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Sparkles className="w-8 h-8 text-orange-500" />
              <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
                Key Responsibilities
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {responsibilities.map((item, index) => (
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
                  "IT Support Tools 🔧",
                  "AV Equipment ⚡",
                  "Event Management 📋",
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

          {/* Experience Details */}
          <motion.div
            className="mt-16 bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100"
            variants={itemVariants}
            whileHover={{ scale: 1.01 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-8 h-8 text-pink-500" />
              <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
                My Volunteer Journey
              </h3>
            </div>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                During my time at IAYSP-Cambodia, I had the incredible
                opportunity to contribute to meaningful community initiatives
                while developing my technical and creative skills. My role was
                multifaceted, combining technical expertise with creative design
                work. 🌟
              </p>
              <p>
                I was responsible for ensuring smooth technical operations
                during events, including setting up AV equipment and
                troubleshooting issues with patience and dedication. Every
                challenge was an opportunity to learn and grow! ⚡
              </p>
              <p>
                Additionally, I designed promotional materials that required
                creativity, attention to detail, and a deep understanding of our
                community is values. Each design was crafted with love and
                purpose. 🎨
              </p>
              <p>
                I utilized tools like Adobe Photoshop, Illustrator, and Canva to
                produce high-quality designs that not only met organizational
                standards but also resonated with our audience and supported our
                mission of positive change. ✨
              </p>
            </div>
          </motion.div>

          {/* Certificates Section */}
          <motion.div className="mt-16" variants={itemVariants}>
            <div className="flex items-center gap-3 justify-center mb-8">
              <Trophy className="w-8 h-8 text-yellow-500" />
              <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
                Certificate of Appreciation 🏆
              </h3>
            </div>
            <div className="flex justify-center items-center">
              <motion.div
                className="relative group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onClick={() =>
                  openImageDialog({
                    src: "/catification/Certificate of Appriciation.jpg",
                    alt: "Certificate of Appreciation",
                    title: "Certificate of Appreciation",
                    description:
                      "Recognition for outstanding volunteer service at IAYSP-Cambodia",
                  })
                }
              >
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-yellow-100">
                  <Image
                    src="/catification/Certificate of Appriciation.jpg"
                    alt="Certificate of Appreciation"
                    width={500}
                    height={700}
                    className="w-full max-w-md h-auto object-cover rounded-2xl shadow-lg transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl flex items-end">
                    <div className="p-6 w-full">
                      <p className="text-white font-semibold text-center">
                        Click to view full size ✨
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Artworks Section */}
          <motion.div className="mt-16" variants={itemVariants}>
            <div className="flex items-center gap-3 justify-center mb-8">
              <Camera className="w-8 h-8 text-pink-500" />
              <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
                Creative Artworks 🎨
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {artworks.map((artwork, index) => (
                <motion.div
                  key={index}
                  className="group relative overflow-hidden rounded-3xl shadow-lg cursor-pointer bg-white/80 backdrop-blur-sm border border-pink-100"
                  whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
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
                      width={400}
                      height={500}
                      className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110 rounded-2xl"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end rounded-3xl">
                    <div className="p-6 w-full">
                      <h4 className="text-white font-bold text-lg flex items-center gap-2">
                        <Palette className="w-5 h-5 text-pink-300" />
                        {artwork.title}
                      </h4>
                      <p className="text-white/80 text-sm mt-1">
                        {artwork.description}
                      </p>
                      <p className="text-white/60 text-xs mt-2">
                        Click to view full size ✨
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
                {selectedImage.description ||
                  "Created with passion for IAYSP-Cambodia"}{" "}
                ✨
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

export default IayspCambodiaPage;
