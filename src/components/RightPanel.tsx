import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, Briefcase } from 'lucide-react';
import Profile from "../components/sections/images/profile.jpeg";

export const RightPanel = () => {
  const handleViewProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactMe = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const socialLinks = [
    { Icon: Github, href: 'https://github.com/thounsova' },
    { Icon: Linkedin, href: 'https://www.linkedin.com/in/sovannareach' },
    { Icon: Mail, href: 'mailto:thoun.sovannareach0101@gmail.com' },
  ];

  return (
    <motion.div
      className="fixed right-0 top-0 h-screen w-full lg:w-[40%] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-8 border-l border-gray-700/50"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center max-w-md space-y-10">

        {/* Profile Image */}
        <motion.div
          className="relative mx-auto w-64 h-64"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-50 blur-2xl" />
          <motion.img
            src={Profile}
            alt="Na REACH"
            className="relative w-full h-full rounded-full object-cover border-4 border-white/10 shadow-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
        </motion.div>

        {/* Name and Role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-1">
            Na REACH
          </h1>
          <p className="text-2xl text-gray-300 font-light mb-4">Full-Stack Developer</p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {/* View Projects */}
          <motion.button
            onClick={handleViewProjects}
            className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center justify-center gap-2">
              <Briefcase size={18} />
              View Projects
            </div>
          </motion.button>

          {/* Download CV */}
          <motion.a
            href="/files/THOUN SOANNAREACH.pdf"   // Place your CV here in public/files/
            download="THOUN SOANNAREACH.pdf"
            className="w-full px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-all flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={18} />
            Download CV
          </motion.a>

          {/* Contact Me */}
          <motion.button
            onClick={handleContactMe}
            className="w-full px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center justify-center gap-2">
              <Mail size={18} />
              Contact Me
            </div>
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-6 pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {socialLinks.map(({ Icon, href }, index) => (
            <motion.a
              key={index}
              href={href}
              className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};
