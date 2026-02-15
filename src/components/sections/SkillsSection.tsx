import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = {
  Frontend: [
    { name: 'React', level: 95 },
    { name: 'Next.js', level: 90 },
    { name: 'TypeScript', level: 88 },
    { name: 'Tailwind CSS', level: 92 },
  ],
  Backend: [
    { name: 'Node.js', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'PostgreSQL', level: 82 },
    { name: 'MongoDB', level: 78 },
  ],
};

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="min-h-screen flex items-center py-20">
      <motion.div
        ref={ref}
        className="w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-5xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, categorySkills], categoryIndex) => (
            <motion.div
              key={category}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-2xl"
              initial={{ opacity: 0, x: categoryIndex === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: categoryIndex === 0 ? -50 : 50 }}
              transition={{ duration: 0.8, delay: 0.4 + categoryIndex * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
                {category}
              </h3>

              <div className="space-y-6">
                {categorySkills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-blue-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-gray-700/50 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{
                          duration: 1.5,
                          delay: 0.6 + categoryIndex * 0.2 + index * 0.1,
                          ease: 'easeOut',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
