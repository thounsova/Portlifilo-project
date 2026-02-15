import { motion } from 'framer-motion';
import { AnimatedBackground } from './components/AnimatedBackground';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { RightPanel } from './components/RightPanel';
import { LeftPanel } from './components/LeftPanel';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Background & Scroll Progress */}
      <AnimatedBackground />
      <ScrollProgressBar />

      {/* Main Layout */}
      <motion.div
        className="relative flex flex-col lg:flex-row"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Left Panel */}
        <LeftPanel />

        {/* Spacer for desktop */}
        <div className="hidden lg:block lg:w-[40%]" />

        {/* Right Panel for desktop */}
        <div className="hidden lg:block">
          <RightPanel />
        </div>
      </motion.div>

      {/* Mobile Profile Section */}
      <div className="lg:hidden w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 border-t border-gray-700/50 mt-16">
        <div className="px-6 flex justify-center">
          <motion.div
            className="text-center space-y-8 max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Profile Image */}
            <motion.div
              className="relative mx-auto w-48 h-48"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-75 blur-2xl animate-pulse" />
              <img
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Na REACH"
                className="relative w-full h-full rounded-full object-cover border-4 border-white/10 shadow-2xl"
              />
            </motion.div>

            {/* Name & Title */}
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                Na REACH
              </h1>
              <p className="text-xl text-gray-300 font-light mb-4">
                Full-Stack Developer
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default App;
