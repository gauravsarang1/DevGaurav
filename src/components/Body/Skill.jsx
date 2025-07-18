import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, delay } from 'framer-motion';
import { 
  FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, 
  FaGitAlt, FaDocker, FaAws, FaDatabase, FaCode, FaServer,
  FaTools, FaMobile, FaCloud, FaChartLine
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiMongodb, SiExpress, SiTypescript, SiNextdotjs,
  SiFirebase, SiGraphql, SiRedis, SiPostgresql, SiVuedotjs
} from 'react-icons/si';
import { HiSparkles, HiTrendingUp } from 'react-icons/hi';

const Skill = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [animationTrigger, setAnimationTrigger] = useState(false);
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true})

  const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: <FaCode size={24} />,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    description: 'Creating beautiful, responsive user interfaces',
    skills: [
      { name: 'React', icon: <FaReact />, level: 90, color: 'text-blue-400', projects: 15 },
      { name: 'JavaScript', icon: <FaJs />, level: 95, color: 'text-yellow-400', projects: 25 },
      { name: 'TypeScript', icon: <SiTypescript />, level: 85, color: 'text-blue-600', projects: 10 },
      { name: 'HTML5', icon: <FaHtml5 />, level: 98, color: 'text-orange-500', projects: 30 },
      { name: 'CSS3', icon: <FaCss3Alt />, level: 95, color: 'text-blue-500', projects: 28 },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 92, color: 'text-cyan-400', projects: 20 },
      { name: 'Redux Toolkit', icon: <FaCode />, level: 85, color: 'text-purple-600', projects: 12 },
      { name: 'React Hook Form', icon: <FaCode />, level: 80, color: 'text-pink-500', projects: 10 }
    ]
  },
  {
    id: 'backend',
    title: 'Backend Development',
    icon: <FaServer size={24} />,
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
    description: 'Building robust server-side applications',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs />, level: 88, color: 'text-green-500', projects: 18 },
      { name: 'Express.js', icon: <SiExpress />, level: 85, color: 'text-gray-600', projects: 15 },
      { name: 'MongoDB', icon: <SiMongodb />, level: 90, color: 'text-green-600', projects: 20 },
      { name: 'PostgreSQL', icon: <SiPostgresql />, level: 82, color: 'text-blue-600', projects: 10 },
    ]
  },
  {
    id: 'tools',
    title: 'Tools & DevOps',
    icon: <FaTools size={24} />,
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
    description: 'Modern development and deployment tools',
    skills: [
      { name: 'Git', icon: <FaGitAlt />, level: 92, color: 'text-orange-600', projects: 35 },
      { name: 'AWS', icon: <FaAws />, level: 70, color: 'text-orange-400', projects: 6 },
      { name: 'Vercel', icon: <HiTrendingUp />, level: 88, color: 'text-gray-800', projects: 15 },
      { name: 'Vite', icon: <HiSparkles />, level: 85, color: 'text-purple-500', projects: 10 }
    ]
  },
  {
    id: 'specialization',
    title: 'Specializations',
    icon: <HiSparkles size={24} />,
    color: 'from-pink-500 to-rose-500',
    bgColor: 'bg-pink-50',
    description: 'Areas of expertise and focus',
    skills: [
      { name: 'Responsive Design', icon: <FaMobile />, level: 95, color: 'text-blue-500', projects: 30 },
      { name: 'API Development', icon: <FaCloud />, level: 88, color: 'text-green-500', projects: 22 },
      { name: 'Performance Optimization', icon: <FaChartLine />, level: 82, color: 'text-purple-500', projects: 15 },
      { name: 'UI/UX Implementation', icon: <FaCode />, level: 85, color: 'text-pink-500', projects: 18 }
    ]
  }
];

  useEffect(() => {
    setAnimationTrigger(true);
    // Reset animation trigger after a delay to allow re-animation
    const timer = setTimeout(() => setAnimationTrigger(false), 500);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  const getSkillColor = (level) => {
    if (level >= 90) return 'from-green-400 to-emerald-500';
    if (level >= 80) return 'from-blue-400 to-cyan-500';
    if (level >= 70) return 'from-yellow-400 to-orange-500';
    return 'from-gray-400 to-gray-500';
  };

  const getExperienceLevel = (level) => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Intermediate';
    return 'Beginner';
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.2,
        delay: 0.3,
        ease: "easeOut"
      }
    })
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: [0, -10, 10, -10, 0],
      transition: {
        duration: 0.4
      }
    }
  };

  const tabVariants = {
    inactive: {
      scale: 1,
      y: 0
    },
    active: {
      scale: 1.05,
      y: -2,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-gray-100 min-h-screen">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <motion.div 
          ref={containerRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView?{ opacity: 1, y: 0 }:{}}
          transition={{duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-md text-gray-600 text-sm mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <HiSparkles className="mr-2 text-purple-500" />
            </motion.div>
            Technical Expertise
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels across different areas of development
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div 
          className="flex flex-wrap justify-center mb-12 gap-4"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView?{ opacity: 1, y: 0 }:{}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {skillCategories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(index)}
              className={`group px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === index
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg shadow-purple-500/25`
                  : 'bg-white text-gray-600 hover:text-gray-800 hover:shadow-md border border-gray-200'
              }`}
              variants={tabVariants}
              animate={activeCategory === index ? "active" : "inactive"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{duration: 0.6}}
            >
              <span className="flex items-center">
                <motion.span 
                  className={`mr-2 ${activeCategory === index ? 'text-white' : 'text-gray-500'}`}
                  variants={iconVariants}
                  whileHover="hover"
                >
                  {category.icon}
                </motion.span>
                {category.title}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Active Category Content */}
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeCategory}
              initial={{opacity: 0, y: 50}}
              animate={isInView?{opacity: 1, y: 0}:{}}
              transition={{delay: 0.6, duration: 0.5}}
              variants={containerVariants}
            >
              
              {/* Category Header */}
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div 
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${skillCategories[activeCategory].color} mb-4`}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-white text-2xl">
                    {skillCategories[activeCategory].icon}
                  </span>
                </motion.div>
                <h3 className="text-2xl font-bold mb-2">{skillCategories[activeCategory].title}</h3>
                <p className="text-gray-600">{skillCategories[activeCategory].description}</p>
              </motion.div>

              {/* Skills Grid */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {skillCategories[activeCategory].skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 relative overflow-hidden"
                    variants={cardVariants}
                    whileHover={{ 
                      scale: 1.03,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    }}
                    onMouseEnter={() => setHoveredSkill(skillIndex)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    {/* Skill Icon & Name */}
                    <div className="flex items-center mb-4">
                      <motion.div 
                        className={`text-3xl mr-3 ${skill.color}`}
                        variants={iconVariants}
                        whileHover="hover"
                      >
                        {skill.icon}
                      </motion.div>
                      <div>
                        <h4 className="font-semibold text-gray-800">{skill.name}</h4>
                        <span className="text-sm text-gray-500">{getExperienceLevel(skill.level)}</span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">Proficiency</span>
                        <motion.span 
                          className="text-sm font-semibold text-gray-800"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.8 }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${getSkillColor(skill.level)} rounded-full`}
                          variants={progressVariants}
                          initial="hidden"
                          animate="visible"
                          custom={skill.level}
                        />
                      </div>
                    </div>

                    {/* Projects Count */}
                    <div className="flex items-center justify-between">
                      <motion.div 
                        className="flex items-center text-sm text-gray-500"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                      >
                        <FaCode className="mr-1" />
                        <span>{skill.projects} projects</span>
                      </motion.div>
                      <motion.div 
                        className={`w-2 h-2 rounded-full ${skill.level >= 90 ? 'bg-green-400' : skill.level >= 80 ? 'bg-blue-400' : 'bg-yellow-400'}`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                      />
                    </div>

                    {/* Hover Effect Overlay */}
                    <motion.div 
                      className={`absolute inset-0 bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-2xl`}
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 0.1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                ))}
              </motion.div>

              {/* Category Stats */}
              <motion.div 
                className="mt-12 bg-white rounded-2xl p-8 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <motion.div 
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div 
                      className="text-3xl font-bold text-gray-800 mb-2"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                    >
                      {skillCategories[activeCategory].skills.length}
                    </motion.div>
                    <div className="text-gray-600">Technologies</div>
                  </motion.div>
                  <motion.div 
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div 
                      className="text-3xl font-bold text-gray-800 mb-2"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
                    >
                      {Math.round(skillCategories[activeCategory].skills.reduce((acc, skill) => acc + skill.level, 0) / skillCategories[activeCategory].skills.length)}%
                    </motion.div>
                    <div className="text-gray-600">Avg. Proficiency</div>
                  </motion.div>
                  <motion.div 
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div 
                      className="text-3xl font-bold text-gray-800 mb-2"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                    >
                      {skillCategories[activeCategory].skills.reduce((acc, skill) => acc + skill.projects, 0)}
                    </motion.div>
                    <div className="text-gray-600">Total Projects</div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Skill;