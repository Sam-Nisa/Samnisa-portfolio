"use client";

import type React from "react";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Send,
  Mail,
  User,
  MessageSquare,
  CheckCircle,
  Sparkles,
  Heart,
  Star,
  Phone,
  MapPin,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });
  const [errors, setErrors] = useState({ email: "", name: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear errors on input change
  };

  // Handle focus state
  const handleFocus = (field: string) => {
    setFocused(field);
  };

  const handleBlur = () => {
    setFocused(null);
  };

  // Validate form before submitting
  const validateForm = () => {
    const newErrors = { email: "", name: "", message: "" };
    let isValid = true;

    if (!formData.email.includes("@")) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }
    if (formData.name.trim() === "") {
      newErrors.name = "Name cannot be empty.";
      isValid = false;
    }
    if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000); // Reset after 5 sec
    }
  };

  const floatingElements = [
    { Icon: Mail, delay: 0, x: 15, y: 20, color: "text-blue-400" },
    { Icon: Heart, delay: 0.5, x: 85, y: 30, color: "text-pink-400" },
    { Icon: Star, delay: 1, x: 10, y: 70, color: "text-yellow-400" },
    { Icon: Phone, delay: 1.5, x: 90, y: 80, color: "text-green-400" },
  ];

  const contactInfo = [
    { icon: Mail, text: "hello@vibol.dev", color: "from-blue-400 to-cyan-500" },
    {
      icon: Phone,
      text: "+855 12 345 678",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: MapPin,
      text: "Phnom Penh, Cambodia",
      color: "from-red-400 to-orange-500",
    },
  ];

  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

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
        id="contact"
        className="relative max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
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
            <span className="text-3xl">📨</span>
            <span className="text-lg text-gray-600 font-medium">
              Get In Touch
            </span>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Contact
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
                <Sparkles className="w-8 h-8 text-yellow-400" />
              </motion.div>
            </motion.span>
          </h1>

          <motion.p
            className="text-gray-600 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Have a question or want to work together? I'd love to hear from you!
            ✨
            <br />
            Fill out the form below and I'll get back to you as soon as
            possible.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Image Section */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
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
                className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-2xl"
                whileHover={{
                  scale: 1.02,
                  rotateY: 5,
                }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Image
                  src="/gif/Contact.png"
                  alt="Contact illustration"
                  width={500}
                  height={400}
                  className="w-full max-w-md mx-auto rounded-2xl shadow-lg"
                />

                {/* Contact Info Cards */}
                <div className="mt-8 space-y-4">
                  {contactInfo.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-4 p-4 bg-white/90 rounded-2xl shadow-md border border-white/20"
                        whileHover={{ scale: 1.03, x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <motion.div
                          className={`p-3 rounded-xl bg-gradient-to-r ${item.color} text-white shadow-md`}
                          whileHover={{ rotate: 15 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Icon className="w-5 h-5" />
                        </motion.div>
                        <span className="font-medium text-gray-700">
                          {item.text}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Enhanced Contact Form */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Form Background */}
            <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-3xl border border-white/20 shadow-2xl"></div>

            {/* Form Container */}
            <motion.form
              className="relative p-8 sm:p-10 space-y-8"
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {/* Email Field */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <label className="text-gray-700 font-medium flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>Email address</span>
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    className={`w-full px-5 py-4 border-2 rounded-xl focus:outline-none transition-all duration-300 ${
                      errors.email
                        ? "border-red-400 bg-red-50"
                        : focused === "email"
                        ? "border-blue-400 bg-blue-50/30 shadow-lg shadow-blue-100"
                        : "border-gray-200 focus:border-blue-400"
                    }`}
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus("email")}
                    onBlur={handleBlur}
                  />
                  <AnimatePresence>
                    {focused === "email" && (
                      <motion.div
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-500"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                      >
                        <Mail className="w-5 h-5" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <AnimatePresence>
                  {errors.email && (
                    <motion.p
                      className="text-red-500 text-sm flex items-center space-x-1"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <span>⚠️</span>
                      <span>{errors.email}</span>
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Name Field */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <label className="text-gray-700 font-medium flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>Your name</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    className={`w-full px-5 py-4 border-2 rounded-xl focus:outline-none transition-all duration-300 ${
                      errors.name
                        ? "border-red-400 bg-red-50"
                        : focused === "name"
                        ? "border-purple-400 bg-purple-50/30 shadow-lg shadow-purple-100"
                        : "border-gray-200 focus:border-purple-400"
                    }`}
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus("name")}
                    onBlur={handleBlur}
                  />
                  <AnimatePresence>
                    {focused === "name" && (
                      <motion.div
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-purple-500"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                      >
                        <User className="w-5 h-5" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <AnimatePresence>
                  {errors.name && (
                    <motion.p
                      className="text-red-500 text-sm flex items-center space-x-1"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <span>⚠️</span>
                      <span>{errors.name}</span>
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Message Field */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <label className="text-gray-700 font-medium flex items-center space-x-2">
                  <MessageSquare className="w-4 h-4" />
                  <span>Your message</span>
                </label>
                <div className="relative">
                  <textarea
                    name="message"
                    className={`w-full px-5 py-4 border-2 rounded-xl focus:outline-none transition-all duration-300 min-h-[120px] ${
                      errors.message
                        ? "border-red-400 bg-red-50"
                        : focused === "message"
                        ? "border-pink-400 bg-pink-50/30 shadow-lg shadow-pink-100"
                        : "border-gray-200 focus:border-pink-400"
                    }`}
                    rows={4}
                    placeholder="Hello! I'd like to discuss a project..."
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus("message")}
                    onBlur={handleBlur}
                  ></textarea>
                  <AnimatePresence>
                    {focused === "message" && (
                      <motion.div
                        className="absolute right-4 top-8 text-pink-500"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                      >
                        <MessageSquare className="w-5 h-5" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <AnimatePresence>
                  {errors.message && (
                    <motion.p
                      className="text-red-500 text-sm flex items-center space-x-1"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <span>⚠️</span>
                      <span>{errors.message}</span>
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <motion.button
                  type="submit"
                  className="group relative w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <span>Send Message</span>
                    <motion.span
                      animate={{ x: [0, 5] }}
                      transition={{
                        duration: 1,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      }}
                    >
                      <Send className="w-4 h-4" />
                    </motion.span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
              </motion.div>

              {/* Success Message */}
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-3xl"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{
                      duration: 0.5,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    <motion.div
                      className="text-center p-8 space-y-4"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <motion.div
                        className="mx-auto w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: 1 }}
                      >
                        <CheckCircle className="w-8 h-8" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-gray-800">
                        Message Sent!
                      </h3>
                      <p className="text-gray-600">
                        Thank you for reaching out! I'll get back to you as soon
                        as possible.
                      </p>
                      <motion.div
                        className="pt-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        <span className="text-2xl">✨</span>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.form>
          </motion.div>
        </div>

        {/* Social Media Links */}
        <motion.div
          className="flex justify-center space-x-6 mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          {[
            {
              name: "GitHub",
              icon: "/icon/github.png",
              color: "hover:bg-gray-800",
            },
            {
              name: "LinkedIn",
              icon: "/icon/telegram.png",
              color: "hover:bg-blue-600",
            },
            {
              name: "Twitter",
              icon: "/icon/facebook.png",
              color: "hover:bg-blue-400",
            },
            {
              name: "Instagram",
              icon: "/icon/tik-tok.png",
              color: "hover:bg-pink-600",
            },
          ].map((social, index) => (
            <motion.a
              key={index}
              href="#"
              className="relative group"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300">
                <Image
                  src={social.icon || "/placeholder.svg"}
                  alt={social.name}
                  width={24}
                  height={24}
                />
              </div>
              <motion.div
                className={`absolute -inset-1 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${social.color}`}
                layoutId={`social-hover-${index}`}
              />
            </motion.a>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
}
