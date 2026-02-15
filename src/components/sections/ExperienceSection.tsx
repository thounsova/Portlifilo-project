import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    title: 'Senior Full-Stack Developer',
    company: 'Tech Innovations Inc.',
    period: '2021 - Present',
    description: 'Leading development of enterprise web applications using React, Node.js, and cloud technologies.',
  },
  {
    type: 'work',
    title: 'Full-Stack Developer',
    company: 'Digital Solutions Ltd.',
    period: '2019 - 2021',
    description: 'Built and maintained multiple client projects, focusing on scalable architecture and performance.',
  },
  {
    type: 'education',
    title: 'Bachelor of Computer Science',
    company: 'University of Technology',
    period: '2015 - 2019',
    description: 'Graduated with honors, specialized in Software Engineering and Web Development.',
  },
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="min-h-screen flex items-center py-20">
      <motion.div
        ref={ref}
        className="w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-5xl font-bold mb-12 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Experience & Education
        </motion.h2>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative pl-20"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
              >
                <motion.div
                  className="absolute left-5 top-6 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-gray-900"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                  whileHover={{ scale: 1.5 }}
                />

                <motion.div
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-2xl"
                  whileHover={{ scale: 1.02, borderColor: 'rgba(255, 255, 255, 0.2)' }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      exp.type === 'work'
                        ? 'bg-gradient-to-br from-blue-500 to-purple-500'
                        : 'bg-gradient-to-br from-green-500 to-cyan-500'
                    }`}>
                      {exp.type === 'work' ? <Briefcase size={24} /> : <GraduationCap size={24} />}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                      <div className="flex items-center gap-4 text-gray-400 mb-2">
                        <span className="font-medium">{exp.company}</span>
                        <span className="text-sm">•</span>
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <p className="text-gray-300">{exp.description}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
