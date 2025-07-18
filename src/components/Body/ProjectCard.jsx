import React, { useState} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaDatabase,
  FaCode, FaEye, FaStar, FaCalendar, FaUsers, FaRocket
} from 'react-icons/fa';
import { HiSparkles, HiTrendingUp, HiLightBulb } from 'react-icons/hi';

// Enhanced ProjectCard Component
const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const overlayVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'planning': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return <FaRocket className="text-green-600" />;
      case 'in-progress': return <HiTrendingUp className="text-blue-600" />;
      case 'planning': return <HiLightBulb className="text-yellow-600" />;
      default: return <FaCode className="text-gray-600" />;
    }
  };

  return (
    <motion.div
      className="group bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ 
        y: -10,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <motion.img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover"
          variants={imageVariants}
          whileHover="hover"
        />
        
        {/* Status Badge */}
        <motion.div 
          className="absolute top-4 left-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className={`flex items-center px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(project.status)}`}>
            <span className="mr-1">{getStatusIcon(project.status)}</span>
            {project.status.replace('-', ' ').toUpperCase()}
          </div>
        </motion.div>

        {/* Hover Overlay */}
        <AnimatePresence>
          {isHovered && (
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <motion.a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <FaGithub />
                    </motion.a>
                    <motion.a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <FaExternalLinkAlt />
                    </motion.a>
                  </div>
                  <motion.div 
                    className="flex items-center space-x-2 text-white text-sm"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <FaEye />
                    <span>{project.stats.views}</span>
                    <FaStar />
                    <span>{project.stats.stars}</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <motion.h3 
            className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {project.title}
          </motion.h3>
          <motion.div
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <HiSparkles className="text-yellow-500 text-xl flex-shrink-0 ml-2" />
          </motion.div>
        </div>

        <motion.p 
          className="text-gray-600 text-sm mb-4 line-clamp-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {project.description}
        </motion.p>

        {/* Technologies */}
        <motion.div 
          className="flex flex-wrap gap-2 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {project.technologies.map((tech, techIndex) => (
            <motion.div 
              key={techIndex}
              className="flex items-center bg-gray-50 px-2 py-1 rounded-lg text-xs hover:bg-gray-100 transition-colors"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + techIndex * 0.05 }}
              whileHover={{ scale: 1.1 }}
            >
              <span className={`mr-1 ${tech.color}`}>{tech.icon}</span>
              <span className="text-gray-700">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Meta */}
        <motion.div 
          className="flex items-center justify-between text-xs text-gray-500 border-t pt-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center">
            <FaCalendar className="mr-1" />
            <span>{project.duration}</span>
          </div>
          <div className="flex items-center">
            <FaUsers className="mr-1" />
            <span>{project.team}</span>
          </div>
        </motion.div>

        {/* Highlights */}
        {project.highlights && (
          <motion.div 
            className="mt-3 text-xs text-blue-600 font-semibold"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            🏆 {project.highlights}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard