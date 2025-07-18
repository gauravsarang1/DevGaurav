import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram, Download, Play, Sparkles, Code, Lightbulb, Zap, Star, Heart, Target, Cpu, Palette, Rocket } from 'lucide-react';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generated = [...Array(30)].map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      xOffset: Math.random() * 20 - 10,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2,
    }));
    setParticles(generated);
  }, []);

  const roles = [
    "Full Stack Developer",
    "React Specialist", 
    "UI/UX Enthusiast",
    "Problem Solver"
  ];

  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/gauravsarang1', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/gaurav-sarang-7070b42b8', label: 'LinkedIn' },
    { icon: <Twitter size={20} />, href: 'https://x.com/gaurav__sarang1', label: 'Twitter' },
    { icon: <Instagram size={20} />, href: 'https://www.instagram.com/gaurav__sarang/', label: 'Instagram' }
  ];

  const achievements = [
    { icon: <Code size={24} />, number: "2+", label: "Projects Built" },
    { icon: <Lightbulb size={24} />, number: "1+", label: "Years Learning" },
    { icon: <Sparkles size={24} />, number: "10+", label: "Technologies" }
  ];

  const orbitingIcons = [
    { icon: <Code size={20} />, color: 'from-blue-400 to-cyan-400', delay: 0 },
    { icon: <Zap size={20} />, color: 'from-yellow-400 to-orange-400', delay: 0.5 },
    { icon: <Star size={20} />, color: 'from-purple-400 to-pink-400', delay: 1 },
    { icon: <Heart size={20} />, color: 'from-red-400 to-rose-400', delay: 1.5 },
    { icon: <Target size={20} />, color: 'from-green-400 to-emerald-400', delay: 2 },
    { icon: <Cpu size={20} />, color: 'from-indigo-400 to-blue-400', delay: 2.5 },
    { icon: <Palette size={20} />, color: 'from-pink-400 to-purple-400', delay: 3 },
    { icon: <Rocket size={20} />, color: 'from-orange-400 to-red-400', delay: 3.5 }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.2, 0.4, 0.2],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const orbitVariants = {
    animate: (delay) => ({
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
        delay: delay
      }
    })
  };

  return (
    <section id='#home' className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute w-96 h-96 bg-purple-500/40 rounded-full mix-blend-multiply filter blur-3xl"
          variants={pulseVariants}
          animate="animate"
          style={{
            top: `${20 + mousePosition.y * 0.05}%`,
            left: `${20 + mousePosition.x * 0.05}%`,
            transform: `translate(-50%, -50%)`,
          }}
        />
        <motion.div 
          className="absolute w-80 h-80 bg-cyan-500/40 rounded-full mix-blend-multiply filter blur-3xl"
          variants={pulseVariants}
          animate="animate"
          style={{
            top: `${70 - mousePosition.y * 0.05}%`,
            right: `${20 + mousePosition.x * 0.03}%`,
            transform: `translate(50%, -50%)`,
            animationDelay: '1s'
          }}
        />
        <motion.div 
          className="absolute w-72 h-72 bg-pink-500/40 rounded-full mix-blend-multiply filter blur-3xl"
          variants={pulseVariants}
          animate="animate"
          style={{
            bottom: `${20 + mousePosition.y * 0.03}%`,
            left: `${50 - mousePosition.x * 0.02}%`,
            transform: `translate(-50%, 50%)`,
            animationDelay: '2s'
          }}
        />
      </div>

      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-40"
            style={{
              top: particle.y,
              left: particle.x,
            }}
            animate={{
              y: [0, -20, 0], // animate RELATIVE to their position
              x: [0, particle.xOffset, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div 
        className="relative z-10 container mx-auto px-6 py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen lg:gap-8">
          
          {/* Content Section */}
          <div className="lg:w-1/2 mt-8 text-center lg:text-left flex flex-col justify-center">
            
            {/* Greeting Badge */}
            <motion.div 
              className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full text-white/90 text-sm mb-6 border border-white/20 mx-auto lg:mx-0 w-fit shadow-lg"
              variants={itemVariants}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="mr-2 text-yellow-400" size={16} />
              </motion.div>
              Available for freelance work
            </motion.div>

            <motion.h1 
              className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight"
              variants={itemVariants}
            >
              <motion.span 
                className="text-white block mb-2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Hi, I'm
              </motion.span>
              <motion.span 
                className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Gaurav Sarang
              </motion.span>
            </motion.h1>

            {/* Animated Role */}
            <motion.div 
              className="text-xl lg:text-2xl text-white/90 mb-6 h-12 flex items-center justify-center lg:justify-start"
              variants={itemVariants}
            >
              <span className="mr-3">I'm a</span>
              <AnimatePresence mode="wait">
                <motion.span 
                  key={currentRole}
                  className="text-cyan-400 font-semibold min-w-fit"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {roles[currentRole]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            <motion.p 
              className="text-lg text-white/70 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              variants={itemVariants}
            >
              I craft beautiful, responsive web applications with cutting-edge technologies. 
              Passionate about creating seamless user experiences and scalable solutions.
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8"
              variants={itemVariants}
            >
              <motion.button 
                onClick={() => scrollToSection('contact')}
                className="group px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full font-semibold shadow-2xl shadow-purple-500/25"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(139, 92, 246, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="flex items-center justify-center">
                  Let's Work Together
                  <motion.div
                    className="ml-2"
                    whileHover={{ rotate: 12 }}
                  >
                    <Sparkles size={18} />
                  </motion.div>
                </span>
              </motion.button>
              
              <motion.button 
                onClick={() => scrollToSection('projects')}
                className="group px-6 py-3 bg-white/10 backdrop-blur-xl text-white rounded-full font-semibold border border-white/20 shadow-lg"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="flex items-center justify-center">
                  <motion.div
                    className="mr-2"
                    whileHover={{ x: 2 }}
                  >
                    <Play size={18} />
                  </motion.div>
                  View My Work
                </span>
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex justify-center lg:justify-start space-x-4 mb-8"
              variants={itemVariants}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center text-white border border-white/20 shadow-lg"
                  whileHover={{ 
                    scale: 1.2,
                    backgroundColor: "rgba(255,255,255,0.2)",
                    y: -3
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 0.8 + index * 0.1,
                    type: "spring",
                    stiffness: 300
                  }}
                  aria-label={link.label}
                >
                  <motion.span 
                    whileHover={{ scale: 1.1 }}
                  >
                    {link.icon}
                  </motion.span>
                </motion.a>
              ))}
            </motion.div>

            {/* Achievement Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-4 max-w-sm mx-auto lg:mx-0"
              variants={itemVariants}
            >
              {achievements.map((achievement, index) => (
                <motion.div 
                  key={index} 
                  className="text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-2 shadow-lg"
                    whileHover={{ 
                      scale: 1.15,
                      rotate: 5,
                      boxShadow: "0 15px 35px rgba(139, 92, 246, 0.4)"
                    }}
                  >
                    <span className="text-white">{achievement.icon}</span>
                  </motion.div>
                  <motion.div 
                    className="text-xl font-bold text-white mb-1"
                    whileHover={{ scale: 1.05 }}
                  >
                    {achievement.number}
                  </motion.div>
                  <div className="text-xs text-white/70">{achievement.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Enhanced Image Section */}
          <motion.div 
            className="lg:w-1/2 mt-12 lg:mt-0 flex items-center justify-center"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="relative">
              
              {/* Main Profile Container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto">
                
                {/* Outer Glow Effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-30"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Animated Border */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full p-1"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: 0, ease: "linear", delay: 1 }}
                >
                  <div className="w-full h-full bg-slate-900 rounded-full p-2">
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                      <motion.img 
                        src="https://res.cloudinary.com/dklkiabzx/image/upload/v1752793948/Looking_into_the_mirror_but_all_I_see_is_someone_who_is_in_my_dreams_%EF%B8%8F__ldlrdk.jpg" 
                        alt="Gaurav Sarang - Full Stack Developer" 
                        className="w-full h-full object-cover rounded-full shadow-2xl" 
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                      />
                      {/* White overlay that fades out */}
                      <motion.div
                        className="absolute inset-0 bg-white/70 rounded-full backdrop-blur-sm"
                        animate={{ opacity: 0 }}
                        transition={{ 
                          duration: 8, 
                          ease: "easeInOut",
                          delay: 1
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
                
                {/* Orbiting Icons */}
                {orbitingIcons.map((item, index) => {
                  const angle = (index * 360) / orbitingIcons.length;
                  const radius = 220; // Increased radius for larger image
                  
                  return (
                    <motion.div
                      key={index}
                      className="absolute w-14 h-14 flex items-center justify-center"
                      style={{
                        top: '50%',
                        left: '50%',
                        transformOrigin: '0 0',
                      }}
                      animate={{
                        rotate: 360,
                        x: Math.cos((angle * Math.PI) / 180) * radius - 28,
                        y: Math.sin((angle * Math.PI) / 180) * radius - 28,
                      }}
                      transition={{
                        duration: 8,
                        repeat: 0,
                        ease: "linear",
                        delay: 1
                      }}
                    >
                      <motion.div
                        className={`w-full h-full bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center text-white shadow-2xl border-2 border-white/20 backdrop-blur-xl`}
                        whileHover={{ 
                          scale: 1.3,
                          boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                        }}
                        animate={{
                          rotate: -360,
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          rotate: {
                            duration: 8,
                            repeat: 0,
                            ease: "linear",
                            delay: 1
                          },
                          scale: {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: item.delay
                          }
                        }}
                      >
                        {item.icon}
                      </motion.div>
                    </motion.div>
                  );
                })}
                
                {/* Pulse Rings */}
                <motion.div 
                  className="absolute inset-0 rounded-full border border-cyan-400/20"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="absolute inset-4 rounded-full border border-purple-400/20"
                  animate={{ 
                    scale: [1, 1.15, 1],
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />
                <motion.div 
                  className="absolute inset-8 rounded-full border border-pink-400/20"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll to explore</span>
          <motion.div 
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div 
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;