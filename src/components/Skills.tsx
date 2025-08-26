"use client";

import { motion } from "framer-motion";
import {
  Code,
  Palette,
  Users,
  MessageCircle,
  CheckCircle,
  Sparkles,
  Star,
  Heart,
  Zap,
} from "lucide-react";
import { ElementType } from "react";

type SoftSkill = {
  name: string;
  proficiency: string;
  icon: ElementType;
  color: string;
  emoji: string;
  description: string;
};

type ProgrammingSkill = {
  name: string;
  proficiency: string;
  icon: ElementType;
  color: string;
  emoji: string;
  level: number;
};
type FramworksSkill = {
  name: string;
  proficiency: string;
  icon: ElementType;
  color: string;
  emoji: string;
  level: number;
};
type DatabaseSkill = {
  name: string;
  proficiency: string;
  icon: ElementType;
  color: string;
  emoji: string;
  level: number;
};

type DesignSkill = {
  name: string;
  proficiency: string;
  icon: ElementType;
  color: string;
  emoji: string;
  tools: string[];
  level: number;
};

type Versoncontrol = {
  name: string;
  proficiency: string;
  icon: ElementType;
  color: string;
  emoji: string;
  tools: string[];
  level: number;
};

type Skill = SoftSkill | ProgrammingSkill | DesignSkill;

interface SkillCardProps {
  skill: Skill;
  index: number;
  showProgress?: boolean;
}

const Skills = () => {
  const skillsData = {
    softSkills: [
      {
        name: "Communication",
        proficiency: "Advanced",
        icon: MessageCircle,
        color: "from-blue-500 to-cyan-500",
        emoji: "🗣️",
        description: "Excellent verbal and written communication skills",
      },
      {
        name: "Responsible",
        proficiency: "Advanced",
        icon: CheckCircle,
        color: "from-green-500 to-emerald-500",
        emoji: "📝",
        description: "Reliable and accountable in all tasks",
      },
      {
        name: "Teamwork",
        proficiency: "Advanced",
        icon: Users,
        color: "from-purple-500 to-pink-500",
        emoji: "🤝",
        description: "Collaborative and supportive team player",
      },
    ] as SoftSkill[],
    programmingSkills: [
      {
        name: "C/C++",
        proficiency: "Advanced",
        icon: Code,
        color: "from-blue-600 to-blue-800",
        emoji: "🖥️",
        level: 90,
      },
            {
        name: "Javascript",
        proficiency: "Intermediate",
        icon: Code,
        color: "from-purple-600 to-purple-800",
        emoji: "💻",
        level: 70,
      },
            {
        name: "PHP",
        proficiency: "Intermediate",
        icon: Code,
        color: "from-purple-600 to-purple-800",
        emoji: "💻",
        level: 70,
      },
      {
        name: "Database",
        proficiency: "Intermediate",
        icon: Code,
        color: "from-yellow-500 to-orange-500",
        emoji: "🗃️",
        level: 75,
      },

    ] as ProgrammingSkill[],
    FramworksSkill: [
           {
        name: "Next.js",
        proficiency: "Intermediate",
        icon: Code,
        color: "from-gray-700 to-gray-900",
        emoji: "⚛️",
        level: 80,
      },
            {
        name: "HTML & CSS",
        proficiency: "Advanced",
        icon: Code,
        color: "from-orange-500 to-red-500",
        emoji: "🌐",
        level: 95,
      },
      {
        name: "Tailwind CSS",
        proficiency: "Intermediate",
        icon: Code,
        color: "from-cyan-500 to-blue-500",
        emoji: "🎨",
        level: 70,
      },]as FramworksSkill[],
      DatabaseSkill: [
           {
        name: "Xammp",
        proficiency: "Intermediate",
        icon: Code,
        color: "from-gray-700 to-gray-900",
        emoji: "⚛️",
        level: 70,
      },
            {
        name: "Supabase",
        proficiency: "Advanced",
        icon: Code,
        color: "from-orange-500 to-red-500",
        emoji: "🌐",
        level: 70,
      },]as DatabaseSkill[],
          Versoncontrol: [
      {
        name: "Git/Github",
        proficiency: "Intermediate",
        icon: Palette,
        color: "from-pink-500 to-rose-500",
        emoji: "🎨",
        tools: ["Figma", "Adobe XD"],
        level: 90,
      },

    ] as Versoncontrol[],
    DesignSkills: [
      {
        name: "UX/UI Design",
        proficiency: "Intermediate",
        icon: Palette,
        color: "from-pink-500 to-rose-500",
        emoji: "🎨",
        tools: ["Figma"],
        level: 75,
      },

    ] as DesignSkill[],
  };

  const floatingElements = [
    { Icon: Star, delay: 0, x: 10, y: 15, color: "text-yellow-400" },
    { Icon: Heart, delay: 0.5, x: 90, y: 20, color: "text-pink-400" },
    { Icon: Code, delay: 1, x: 15, y: 80, color: "text-purple-400" },
    { Icon: Zap, delay: 1.5, x: 85, y: 85, color: "text-blue-400" },
  ];

  const SkillCard = ({
    skill,
    index,
    showProgress = false,
  }: SkillCardProps) => (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 overflow-hidden relative p-6">
        <div
          className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${skill.color}`}
        />

        <div className="flex items-center space-x-4 mb-4">
          <motion.div
            className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} text-white shadow-md`}
            whileHover={{ rotate: 15, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <skill.icon className="w-6 h-6" />
          </motion.div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-800 mb-1">
              {skill.name}
            </h3>
            <span
              className={`text-sm font-medium px-2 py-1 rounded-full bg-gradient-to-r ${skill.color} text-white`}
            >
              {skill.proficiency}
            </span>
          </div>
          <span className="text-2xl">{skill.emoji}</span>
        </div>

        {"description" in skill && (
          <p className="text-gray-600 text-sm mb-4">{skill.description}</p>
        )}

        {"tools" in skill && (
          <div className="mb-4">
            <span className="text-sm font-medium text-gray-500 mb-2 block">
              Tools
            </span>
            <div className="flex flex-wrap gap-2">
              {skill.tools.map((tool, toolIndex) => (
                <motion.span
                  key={toolIndex}
                  className="px-2 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium"
                  whileHover={{ scale: 1.05 }}
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </div>
        )}

        {"level" in skill && showProgress && (
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-600">
                Proficiency
              </span>
              <span className="text-sm font-bold text-gray-800">
                {skill.level}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div
                className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
          </div>
        )}

        <motion.div
          className="absolute bottom-2 right-2"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <Sparkles className="w-3 h-3 text-purple-400 opacity-30" />
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <div className="relative py-12 px-4 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 rounded-3xl">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        {floatingElements.map(({ Icon, delay, x, y, color }, index) => (
          <motion.div
            key={index}
            className={`absolute ${color} opacity-20`}
            animate={{ y: [0, -15], rotate: [0, 10], scale: [1, 1.1] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              delay: delay,
              ease: "easeInOut",
            }}
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            <Icon size={24} />
          </motion.div>
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto">
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
            <span className="text-3xl">🛠️</span>
            <span className="text-lg text-gray-600 font-medium">
              My Expertise
            </span>
          </motion.div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Skills
            </span>
            <motion.span
              className="ml-3"
              animate={{ rotate: [0, 15] }}
              transition={{
                duration: 2,
                repeat: Infinity,
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
            A diverse set of technical and soft skills that drive innovation and
            collaboration! 🚀
          </motion.p>
        </motion.div>

        <div className="space-y-16">
          <section>
            <motion.h2
              className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              💫 Soft Skills
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillsData.softSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </section>

          <section>
            <motion.h2
              className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              💻 Programming Skills
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillsData.programmingSkills.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  index={index}
                  showProgress={true}
                />
              ))}
            </div>
          </section>


          <section>
            <motion.h2
              className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-pink-900 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              💻 Framwork Skills
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillsData.FramworksSkill.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  index={index}
                  showProgress={true}
                />
              ))}
            </div>
          </section>




                    <section>
            <motion.h2
              className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-green-600 to-pink-900 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              💻 Database Skills
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillsData.DatabaseSkill
              .map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  index={index}
                  showProgress={true}
                />
              ))}
            </div>
          </section>



       {/* <section>
            <motion.h2
              className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-gray-600 to-blue-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              🎨 Verson controll Skills
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillsData.Versoncontrol.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  index={index}
                  showProgress={true}
                />
              ))}
            </div>
          </section> */}


          <section>
            <motion.h2
              className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              🎨 Design Skills
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillsData.DesignSkills.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  index={index}
                  showProgress={true}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Skills;
