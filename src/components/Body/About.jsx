import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef } from "react";
import { 
  FaGraduationCap, FaMapMarkerAlt, FaEnvelope, FaBriefcase, 
  FaCode, FaLaptopCode, FaRocket, FaHeart, FaCoffee, FaMusic,
  FaGamepad, FaCamera, FaBookOpen, FaDumbbell, FaUser
} from 'react-icons/fa';
import { HiSparkles, HiLightBulb, HiTrendingUp } from 'react-icons/hi';

const About = () => {
  const [activeTab, setActiveTab] = useState('story');
  const [animationTrigger, setAnimationTrigger] = useState(false);
  const [currentFact, setCurrentFact] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  const tabs = [
    { id: 'story', label: 'My Story', icon: <FaBookOpen /> },
    { id: 'journey', label: 'Journey', icon: <FaRocket /> },
    { id: 'interests', label: 'Interests', icon: <FaHeart /> },
    { id: 'values', label: 'Values', icon: <HiLightBulb /> }
  ];

  const personalInfo = [
    {
      icon: <FaGraduationCap />,
      title: 'Education',
      content: 'Bachelor of Computer Science (BCS)',
      subtitle: 'UI Full Stack Development at Naresh i Technologies, Hyderabad',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      content: 'Hyderabad, India',
      subtitle: 'Originally from Hayatnagar, Basmat, Nanded, Maharashtra',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      content: 'gauravsarang223@gmail.com',
      subtitle: 'Always open to collaborations',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <FaBriefcase />,
      title: 'Freelance',
      content: 'Available for Projects',
      subtitle: 'Remote & On-site Collaboration Welcome',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const journeySteps = [
    {
      year: '2025',
      title: 'Started Full Stack Journey',
      description: 'Left home to pursue UI Full Stack with React at Naresh i Technologies, Hyderabad',
      icon: <FaCode />,
      color: 'bg-blue-500'
    },
    {
      year: '2025',
      title: 'First Projects',
      description: 'Built music player and modern e-commerce frontend',
      icon: <FaLaptopCode />,
      color: 'bg-green-500'
    },
    {
      year: '2025',
      title: 'Leveling Up',
      description: 'Learned Tailwind, Redux Toolkit, backend with Node.js, and built real-world apps',
      icon: <HiTrendingUp />,
      color: 'bg-purple-500'
    },
    {
      year: '2025',
      title: 'Industry Ready',
      description: 'Building Harshtube (video platform) with real-time features, AI, and full-stack tech',
      icon: <FaRocket />,
      color: 'bg-orange-500'
    }
  ];

  const interests = [
    { name: 'Coding', icon: <FaCode />, color: 'text-blue-500' },
    { name: 'Coffee', icon: <FaCoffee />, color: 'text-yellow-600' },
    { name: 'Music', icon: <FaMusic />, color: 'text-purple-500' },
    { name: 'Gaming', icon: <FaGamepad />, color: 'text-green-500' },
    { name: 'Photography', icon: <FaCamera />, color: 'text-pink-500' },
    { name: 'Reading', icon: <FaBookOpen />, color: 'text-indigo-500' },
    { name: 'Fitness', icon: <FaDumbbell />, color: 'text-red-500' },
    { name: 'Learning', icon: <HiLightBulb />, color: 'text-orange-500' }
  ];

  const values = [
    {
      title: 'Clean Code',
      description: 'Writing maintainable, readable code that stands the test of time',
      icon: <FaCode />,
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Continuous Learning',
      description: 'Always staying updated with latest technologies and best practices',
      icon: <HiLightBulb />,
      color: 'from-green-400 to-green-600'
    },
    {
      title: 'User-Centric Design',
      description: 'Creating solutions that prioritize user experience and accessibility',
      icon: <FaHeart />,
      color: 'from-purple-400 to-purple-600'
    },
    {
      title: 'Problem Solving',
      description: 'Approaching challenges with creativity and systematic thinking',
      icon: <HiSparkles />,
      color: 'from-orange-400 to-orange-600'
    }
  ];

  const funFacts = [
    "☕ Coding with 4+ cups of coffee is a ritual",
    "🌙 My brain wakes up fully after midnight",
    "🎵 I can't code without music in the background",
    "💻 I taught myself everything with pure grind",
    "🌱 Came from a low-tech village, but building high-tech solutions",
    "📈 My dream? Build something the world uses daily"
  ]

  useEffect(() => {
    setAnimationTrigger(true);
    const factInterval = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % funFacts.length);
    }, 3000);
    return () => clearInterval(factInterval);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const tabContentVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    exit: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.2
      }
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'story':
        return (
          <motion.div 
            key="story"
            variants={tabContentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="space-y-6"
          >
            <div className="prose prose-lg max-w-none">
              <motion.p 
                className="text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                Hey! I'm <span className="font-semibold text-blue-600">Gaurav Sarang</span> — a self-driven full-stack web developer 
                from a small village in <strong>Basmat, Hingoli (Maharashtra)</strong>, now based in <strong>Hyderabad</strong> to chase big dreams.
              </motion.p>
              <motion.p 
                className="text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                My journey started with almost zero tech around me. No proper internet, no big guidance — just one thing: 
                <span className="font-semibold text-green-600"> hunger to learn and build</span>. Today, I'm building 
                full-stack projects with <strong>React, Node.js, MongoDB, Tailwind CSS</strong> and more.
              </motion.p>
              <motion.p 
                className="text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                I'm currently pursuing Full Stack Development at <strong>Naresh i Technologies</strong>, working on real-world 
                apps like <strong>Harshtube (video platform)</strong>, modern e-commerce websites, and interactive UIs — all from scratch.
              </motion.p>
              <motion.p 
                className="text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                I love clean code, smooth user experiences, and solving real problems with tech. Whether it's building 
                features, debugging tough issues, or learning a new concept at 2 AM — I'm all in.
              </motion.p>
              <motion.p 
                className="text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Outside of code, I enjoy <strong>music, fitness, gaming, photography, and coffee-fueled late-night dev sessions</strong>. 
                I'm always exploring, always building — and I'm just getting started.
              </motion.p>
            </div>
          </motion.div>
        );
      
      case 'journey':
        return (
          <motion.div 
            key="journey"
            variants={tabContentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="space-y-8"
          >
            {journeySteps.map((step, index) => (
              <motion.div 
                key={index} 
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div 
                  className={`flex-shrink-0 w-12 h-12 ${step.color} rounded-full flex items-center justify-center text-white`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {step.icon}
                </motion.div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <motion.span 
                      className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-semibold"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                    >
                      {step.year}
                    </motion.span>
                    <h4 className="text-lg font-semibold text-gray-800">{step.title}</h4>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        );
      
      case 'interests':
        return (
          <motion.div 
            key="interests"
            variants={tabContentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="space-y-6"
          >
            <motion.p 
              className="text-gray-700 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              Beyond coding, I have diverse interests that keep me inspired and balanced. 
              These hobbies often influence my approach to problem-solving and creativity in development.
            </motion.p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {interests.map((interest, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-center border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div 
                    className={`text-3xl mb-2 ${interest.color}`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {interest.icon}
                  </motion.div>
                  <span className="text-gray-700 font-medium">{interest.name}</span>
                </motion.div>
              ))}
            </div>
            <motion.div 
              className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl mt-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <HiSparkles className="mr-2 text-yellow-500" />
                </motion.span>
                Fun Fact
              </h4>
              <AnimatePresence mode="wait">
                <motion.p 
                  key={currentFact}
                  className="text-gray-700 text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {funFacts[currentFact]}
                </motion.p>
              </AnimatePresence>
            </motion.div>
          </motion.div>
        );
      
      case 'values':
        return (
          <motion.div 
            key="values"
            variants={tabContentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <motion.div 
                  className={`w-12 h-12 bg-gradient-to-r ${value.color} rounded-lg flex items-center justify-center text-white mb-4`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {value.icon}
                </motion.div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        );
      
      default:
        return null;
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-gray-100 min-h-screen">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <motion.div
          ref={containerRef} 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView?{ opacity: 1, y: 0 }:{}}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-md text-gray-600 text-sm mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FaHeart className="mr-2 text-red-500" />
            </motion.span>
            Get to know me
          </motion.div>
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            About Me
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Passionate developer, continuous learner, and problem solver ready to make an impact
          </motion.p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-12"
            initial={{ opacity: 0, y: -50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}} // only animate if in view
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            
            {/* Left Column - Image & Info */}
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              
              {/* Profile Image */}
              <div className="relative mb-8">
                <div className="w-full max-w-sm mx-auto">
                  <div className="relative">
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-lg opacity-30"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    ></motion.div>
                    <motion.div 
                      className="relative bg-white p-8 rounded-2xl shadow-lg"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div 
                        className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto flex items-center justify-center text-6xl text-white shadow-lg"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.8 }}
                      >
                        <img
                          className='h-full w-full object-cover rounded-full'
                          src='https://res.cloudinary.com/dklkiabzx/image/upload/v1752793948/Looking_into_the_mirror_but_all_I_see_is_someone_who_is_in_my_dreams_%EF%B8%8F__ldlrdk.jpg'
                          alt="Gaurav Sarang"
                        />
                      </motion.div>
                      <div className="text-center mt-6">
                        <motion.h3 
                          className="text-2xl font-bold text-gray-800"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.7 }}
                        >
                          Gaurav Sarang
                        </motion.h3>
                        <motion.p 
                          className="text-blue-600 font-medium"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.8 }}
                        >
                          Full Stack Developer
                        </motion.p>
                        <motion.div 
                          className="flex justify-center mt-4"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.9 }}
                        >
                          <div className="flex space-x-2">
                            <motion.div 
                              className="w-3 h-3 bg-green-500 rounded-full"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            ></motion.div>
                            <span className="text-sm text-gray-600">Available for work</span>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Personal Info Cards */}
              <motion.div 
                className="space-y-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {personalInfo.map((info, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="flex items-start space-x-4">
                      <motion.div 
                        className={`flex-shrink-0 w-10 h-10 bg-gradient-to-r ${info.color} rounded-lg flex items-center justify-center text-white`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {info.icon}
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-800 text-sm">{info.title}</h4>
                        <p className="text-gray-900 font-medium text-sm">{info.content}</p>
                        <p className="text-gray-500 text-xs mt-1">{info.subtitle}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - Tabbed Content */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              
              {/* Tab Navigation */}
              <motion.div 
                className="flex flex-wrap gap-2 mb-8 bg-white p-2 rounded-xl shadow-sm"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                {tabs.map((tab, index) => (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md'
                        : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <span className="mr-2">{tab.icon}</span>
                    {tab.label}
                  </motion.button>
                ))}
              </motion.div>

              {/* Tab Content */}
              <motion.div 
                className="bg-white rounded-xl shadow-sm p-8 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <AnimatePresence mode="wait">
                  {renderTabContent()}
                </AnimatePresence>
              </motion.div>

              {/* Quick Stats */}
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                {[
                  { number: '2+', label: 'Years Learning', color: 'text-blue-600' },
                  { number: '10+', label: 'Projects Built', color: 'text-green-600' },
                  { number: '15+', label: 'Technologies', color: 'text-purple-600' },
                  { number: '100%', label: 'Passionate', color: 'text-orange-600' }
                ].map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-sm text-center border border-gray-100"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.1 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <motion.div 
                      className={`text-3xl font-bold ${stat.color} mb-2`}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1.2 + index * 0.1, type: "spring", stiffness: 500 }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;