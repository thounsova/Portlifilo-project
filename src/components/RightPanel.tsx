import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, Briefcase } from 'lucide-react';

export const RightPanel = () => {
  const handleViewProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactMe = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      className="fixed right-0 top-0 h-screen w-full lg:w-[40%] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-8 border-l border-gray-700/50"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center space-y-8 max-w-md">
        <motion.div
          className="relative mx-auto w-64 h-64"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-75 blur-2xl animate-pulse" />
          <motion.img
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Na REACH"
            className="relative w-full h-full rounded-full object-cover border-4 border-white/10 shadow-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
            Na REACH
          </h1>
          <p className="text-2xl text-gray-300 font-light mb-4">Full-Stack Developer</p>

          <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-400 mb-6">
            <span className="px-3 py-1 bg-white/5 rounded-full backdrop-blur-sm border border-white/10">React</span>
            <span className="px-3 py-1 bg-white/5 rounded-full backdrop-blur-sm border border-white/10">TypeScript</span>
            <span className="px-3 py-1 bg-white/5 rounded-full backdrop-blur-sm border border-white/10">Node</span>
            <span className="px-3 py-1 bg-white/5 rounded-full backdrop-blur-sm border border-white/10">Express</span>
            <span className="px-3 py-1 bg-white/5 rounded-full backdrop-blur-sm border border-white/10">TailwindCSS</span>
            <span className="px-3 py-1 bg-white/5 rounded-full backdrop-blur-sm border border-white/10">MySQL</span>
          </div>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            onClick={handleViewProjects}
            className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold shadow-lg relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Briefcase size={20} />
              View Projects
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          <motion.button
            className="w-full px-8 py-4 bg-white/5 backdrop-blur-sm border-2 border-white/10 text-white rounded-lg font-semibold relative overflow-hidden group"
            whileHover={{ scale: 1.05, borderColor: 'rgba(255, 255, 255, 0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Download size={20} />
              Download CV
            </span>
            <motion.div
              className="absolute inset-0 bg-white/10"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            />
          </motion.button>

          <motion.button
            onClick={handleContactMe}
            className="w-full px-8 py-4 bg-white/5 backdrop-blur-sm border-2 border-white/10 text-white rounded-lg font-semibold relative overflow-hidden group"
            whileHover={{ scale: 1.05, borderColor: 'rgba(255, 255, 255, 0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Mail size={20} />
              Contact Me
            </span>
            <motion.div
              className="absolute inset-0 bg-white/10"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            />
          </motion.button>
        </motion.div>

        <motion.div
          className="flex justify-center gap-6 pt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          {[
            { Icon: Github, href: '#' },
            { Icon: Linkedin, href: '#' },
            { Icon: Mail, href: '#' },
          ].map(({ Icon, href }, index) => (
            <motion.a
              key={index}
              href={href}
              className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};
