import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = {
  "Frontend & Mobile": [
    { name: 'React', level: 90, icon: 'https://cdn.simpleicons.org/react/61DAFB', gradient: 'from-blue-400 to-cyan-500' },
    { name: 'JavaScript', level: 95, icon: 'https://cdn.simpleicons.org/javascript/F7DF1E', gradient: 'from-yellow-400 to-yellow-500' },
    { name: 'TypeScript', level: 85, icon: 'https://cdn.simpleicons.org/typescript/3178C6', gradient: 'from-blue-500 to-indigo-500' },
    { name: 'Tailwind CSS', level: 90, icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4', gradient: 'from-teal-400 to-blue-400' },
    { name: 'Flutter', level: 85, icon: 'https://cdn.simpleicons.org/flutter/02569B', gradient: 'from-cyan-400 to-indigo-500' },
    { name: 'Dart', level: 80, icon: 'https://cdn.simpleicons.org/dart/0175C2', gradient: 'from-blue-400 to-indigo-400' },
  ],
  Backend: [
    { name: 'Node.js', level: 85, icon: 'https://cdn.simpleicons.org/nodedotjs/339933', gradient: 'from-green-400 to-green-600' },
    { name: 'Java', level: 85, icon: 'https://www.vectorlogo.zone/logos/java/java-icon.svg', gradient: 'from-red-400 to-red-500' },
    { name: 'Spring Boot', level: 75, icon: 'https://cdn.simpleicons.org/springboot/6DB33F', gradient: 'from-green-300 to-green-500' },
    { name: 'Express', level: 85, icon: 'https://cdn.simpleicons.org/express/000000', gradient: 'from-gray-400 to-gray-600' },
    { name: 'MongoDB', level: 80, icon: 'https://cdn.simpleicons.org/mongodb/47A248', gradient: 'from-green-200 to-green-400' },
    { name: 'Next.js', level: 80, icon: 'https://cdn.simpleicons.org/nextdotjs/000000', gradient: 'from-gray-400 to-gray-600' },
  ],
  "Tools & Database": [
    { name: 'VS Code', level: 95, icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg', gradient: 'from-purple-400 to-pink-400' },
    { name: 'Postman', level: 90, icon: 'https://cdn.simpleicons.org/postman/F97C37', gradient: 'from-orange-400 to-orange-500' },
    { name: 'SQL', level: 80, icon: 'https://cdn.simpleicons.org/mysql/4479A1', gradient: 'from-blue-400 to-blue-500' },
    { name: 'Git', level: 85, icon: 'https://cdn.simpleicons.org/git/F05032', gradient: 'from-orange-500 to-orange-600' },
    { name: 'GitHub', level: 90, icon: 'https://cdn.simpleicons.org/github/181717', gradient: 'from-gray-400 to-gray-600' },
    { name: 'Docker', level: 70, icon: 'https://cdn.simpleicons.org/docker/2496ED', gradient: 'from-blue-400 to-blue-500' },
  ],
};

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, categorySkills], catIndex) => (
            <motion.div
              key={category}
              ref={ref}
              className="glass rounded-3xl p-8 bg-white/10 backdrop-blur-lg border border-white/20"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: catIndex * 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6 dark:text-white text-gray-800 text-center">
                {category}
              </h3>

              <div className="space-y-4">
                {categorySkills.map((skill, index) => (
                  <div key={skill.name} className="group">
                    {/* Skill Header: Icon + Name + Percentage */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <img src={skill.icon} alt={skill.name} className="w-6 h-6 object-contain" />
                        <span className="font-medium dark:text-white text-gray-800">{skill.name}</span>
                      </div>
                      <span className="text-sm dark:text-gray-400 text-gray-600">{skill.level}%</span>
                    </div>

                    {/* Skill Progress Bar */}
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full bg-gradient-to-r ${skill.gradient}`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{
                          duration: 1.5,
                          delay: 0.3 + index * 0.1,
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
      </div>
    </section>
  );
};
