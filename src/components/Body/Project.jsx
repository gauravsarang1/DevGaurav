import React, {useState, useRef} from "react";
import { 
  SiMongodb, 
  SiStripe, 
  SiNextdotjs, 
  SiTypescript, 
  SiSocketdotio, 
  SiTailwindcss, 
  SiCloudinary, 
  SiOpenai, 
  SiBootstrap, 
  SiExpress, 
  SiJsonwebtokens,
  SiRedux, SiPostgresql, SiZod, SiFramer 
} from 'react-icons/si';

import { 
  FaReact, 
  FaGithub,
  FaNodeJs, 
  FaDatabase, 
  FaRocket, 
} from 'react-icons/fa';

import { motion, AnimatePresence, useInView } from 'framer-motion';
import ProjectCard from './ProjectCard'

const Project = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState(6);
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true})

  const projectCategories = [
    { id: 'all', name: 'All Projects', count: 2 },
    { id: 'fullstack', name: 'Full Stack', count: 2 },
    { id: 'frontend', name: 'Frontend', count: 0 },
    { id: 'backend', name: 'Backend', count: 0 }
  ];

  const projects = [
    {
      id: 2,
      title: 'HarshTube - Full Stack Video Streaming Platform',
      description: 'A YouTube-like video platform with AI features, real-time updates, and full user interaction support.',
      longDescription: 'HarshTube is a full-featured video streaming platform allowing users to upload, stream, and interact with videos. It includes real-time notifications via Socket.IO, playlists, likes, comments, subscriptions, watch history, and AI features like smart comment suggestions and content moderation using the OpenAI API. Built with React, Node.js, MongoDB, and Cloudinary.',
      image: 'https://res.cloudinary.com/dklkiabzx/image/upload/v1752799527/Screenshot_2025-07-18_061314_ifdxnj.png',
      category: 'fullstack',
      status: 'completed',
      technologies: [
        { name: 'React', icon: <FaReact />, color: 'text-blue-400' },
        { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-600' },
        { name: 'TailwindCSS', icon: <SiTailwindcss />, color: 'text-cyan-400' },
        { name: 'Redux Toolkit', icon: <SiRedux />, color: 'text-purple-500' },
        { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-500' },
        { name: 'Express', icon: <SiExpress />, color: 'text-gray-600' },
        { name: 'Cloudinary', icon: <SiCloudinary />, color: 'text-indigo-500' },
        { name: 'Socket.IO', icon: <SiSocketdotio />, color: 'text-black' },
        { name: 'OpenAI API', icon: <SiOpenai />, color: 'text-sky-500' },
        { name: 'Framer Motion', icon: <SiFramer />, color: 'text-black' }
      ],
      features: [
        'User Authentication',
        'Video Upload & Streaming',
        'Like, Comment, Subscribe (real-time)',
        'Playlists & Watch History',
        'Mini Player Support',
        'AI Smart Comments & Moderation',
        'Real-Time Notifications with Socket.IO',
        'Personalized Video Recommendations'
      ],
      github: 'https://github.com/gauravsarang1/harshtube',
      demo: 'https://harsh-tube.vercel.app',
      stats: {
        views: 10,
        stars: 1,
        forks: 0
      },
      duration: 'Ongoing (Started June 2025)',
      team: 'Solo Project',
      highlights: 'AI + Real-Time + Full Stack — a modern YouTube clone with intelligent features and immersive UX.'
    }
    ,
    {
      id: 2,
      title: 'HarshShop - Full Stack E-commerce Platform',
      description: 'A modern multi-vendor e-commerce platform built with React, Node.js, PostgreSQL, and Cloudinary.',
      longDescription: 'HarshShop is a full-stack e-commerce platform featuring a multi-vendor marketplace, secure authentication, product catalog, order processing, and admin controls. Built using React 19, Vite, Tailwind CSS, Node.js, Express, and PostgreSQL, with image handling via Cloudinary and form validation via Zod. It also includes robust JWT-based auth and role management.',
      image: 'https://res.cloudinary.com/dklkiabzx/image/upload/v1752799586/Screenshot_2025-07-18_061458_pxddm7.png',
      category: 'fullstack',
      status: 'in progress',
      technologies: [
        { name: 'React', icon: <FaReact />, color: 'text-blue-400' },
        { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-600' },
        { name: 'TailwindCSS', icon: <SiTailwindcss />, color: 'text-cyan-400' },
        { name: 'Redux Toolkit', icon: <SiRedux />, color: 'text-purple-500' },
        { name: 'PostgreSQL', icon: <SiPostgresql />, color: 'text-blue-600' },
        { name: 'Express', icon: <SiExpress />, color: 'text-gray-600' },
        { name: 'Cloudinary', icon: <SiCloudinary />, color: 'text-indigo-500' },
        { name: 'Zod', icon: <SiZod />, color: 'text-pink-500' },
        { name: 'JWT', icon: <SiJsonwebtokens />, color: 'text-yellow-500' },
        { name: 'Framer Motion', icon: <SiFramer />, color: 'text-black' }
      ],
      features: [
        'Multi-vendor Marketplace',
        'JWT Auth & Role Management',
        'Product Catalog & Filtering',
        'Cloudinary File Uploads',
        'Admin Dashboard',
        'Secure Payments (Planned)',
        'Order Management',
        'Responsive UI with Radix UI & Tailwind'
      ],
      github: 'https://github.com/gauravsarang1/harshshop',
      demo: 'https://harsh-shop.vercel.app',
      stats: {
        views: 5,
        stars: 0,
        forks: 0
      },
      duration: 'Ongoing (Started July 2025)',
      team: 'Solo Project',
      highlights: 'My most ambitious project so far — mastering full-stack development, real-world workflows, and scalable architecture.'
    }

  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-slate-100 min-h-screen">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <motion.div
          ref={containerRef} 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView?{ opacity: 1, y: 0 }:{}}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-md text-gray-600 text-sm mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FaRocket className="mr-2 text-blue-500" />
            </motion.div>
            Portfolio Showcase
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of projects showcasing my expertise in full-stack development, 
            from concept to deployment
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="flex flex-wrap justify-center mb-12 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {projectCategories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:text-gray-800 hover:shadow-md border border-gray-200'
              }`}
              variants={tabVariants}
              animate={activeFilter === category.id ? "active" : "inactive"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name} ({category.count})
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeFilter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {filteredProjects.slice(0, visibleProjects).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Load More Button */}
        {visibleProjects < filteredProjects.length && (
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.button
              onClick={() => setVisibleProjects(prev => prev + 3)}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Load More Projects
            </motion.button>
          </motion.div>
        )}

        {/* GitHub CTA */}
        <motion.div 
          className="mt-16 text-center bg-white rounded-2xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <FaGithub className="text-4xl text-gray-700 mx-auto mb-4" />
            </motion.div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Explore More on GitHub</h3>
            <p className="text-gray-600">
              Check out my complete collection of projects, open-source contributions, and code samples
            </p>
          </div>
          <motion.a
            href="https://github.com/gauravsarang1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-full font-semibold hover:bg-gray-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub className="mr-2" />
            View GitHub Profile
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;