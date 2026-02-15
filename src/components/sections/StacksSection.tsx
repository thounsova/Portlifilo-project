import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Database, Wrench } from 'lucide-react';

const stacks = [
  {
    title: 'Frontend Development',
    icon: Code,
    description: 'Building beautiful, responsive user interfaces',
    technologies: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Backend Development',
    icon: Database,
    description: 'Scalable and secure server-side solutions',
    technologies: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB', 'Redis'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Tools & DevOps',
    icon: Wrench,
    description: 'Modern development workflow and deployment',
    technologies: ['Git', 'Docker', 'AWS', 'CI/CD', 'Linux', 'Nginx'],
    gradient: 'from-orange-500 to-red-500',
  },
];

export const StacksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="stacks" className="min-h-screen flex items-center py-20">
      <motion.div
        ref={ref}
        className="w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-5xl font-bold mb-12 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Development Stacks
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stacks.map((stack, index) => (
            <motion.div
              key={stack.title}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />

              <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-2xl h-full">
                <motion.div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${stack.gradient} flex items-center justify-center mb-6 shadow-lg`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <stack.icon className="text-white" size={32} />
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-3">{stack.title}</h3>
                <p className="text-gray-400 mb-6">{stack.description}</p>

                <div className="flex flex-wrap gap-2">
                  {stack.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-white/5 rounded-lg text-sm text-gray-300 border border-white/10"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.6 + index * 0.2 + techIndex * 0.05,
                      }}
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
