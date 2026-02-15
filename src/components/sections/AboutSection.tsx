import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skills = [
    { name: "React", color: "bg-blue-400/20 text-blue-500" },
    { name: "Node.js", color: "bg-green-400/20 text-green-500" },
    { name: "MongoDB", color: "bg-green-200/20 text-green-300" },
    { name: "Express", color: "bg-gray-200/20 text-gray-300" },
    { name: "JavaScript", color: "bg-yellow-300/20 text-yellow-400" },
    { name: "TypeScript", color: "bg-blue-300/20 text-blue-400" },
    { name: "Java", color: "bg-red-300/20 text-red-500" },
    { name: "Spring Boot", color: "bg-green-300/20 text-green-500" },
    { name: "Dart", color: "bg-blue-200/20 text-blue-400" },
    { name: "Flutter", color: "bg-cyan-300/20 text-cyan-500" },
    { name: "SQL", color: "bg-indigo-200/20 text-indigo-400" },
    { name: "Vue", color: "bg-green-300/20 text-green-500" },
    { name: "Next.js", color: "bg-gray-300/20 text-gray-400" },
  ];

  return (
    <section id="about" className="min-h-screen flex flex-col lg:flex-row items-center gap-12 py-20 px-6 max-w-7xl mx-auto">
      
      {/* Text Content */}
      <motion.div
        ref={ref}
        className="glass rounded-3xl p-8 lg:p-12 flex-1 shadow-lg backdrop-blur-xl border border-white/10"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        {/* Greeting */}
        <motion.h3
          className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Hi there! I'm <span className="text-red-500 ml-2">Na Reach 👋</span>
        </motion.h3>

        {/* Professional Summary */}
        <motion.div
          className="space-y-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p>
            As a highly motivated <span className="font-semibold text-blue-500">Student Full-Stack Developer</span>, I am eager to contribute to projects by leveraging my hands-on experience in front-end and back-end development.
          </p>
          <p>
            Through the delivery of real-world projects, I have developed specialized proficiency in <span className="font-semibold text-green-500">backend architecture, security, and data protection</span>. 
          </p>
          <p>
            I thrive in team-based environments where <span className="font-semibold text-pink-500">clear communication</span> and <span className="font-semibold text-cyan-500">collaborative problem-solving</span> are essential to success.
          </p>
          <p>
            Driven by a passion for technical excellence, I am dedicated to delivering <span className="font-semibold text-purple-500">high-quality, innovative solutions</span>.
          </p>
        </motion.div>

        {/* Core Technologies */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Core Technologies</h4>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {skills.map((tech, idx) => (
              <motion.span
                key={idx}
                className={`px-4 py-2 rounded-full text-sm font-medium border border-white/20 ${tech.color} text-center`}
                whileHover={{ scale: 1.1, boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}
              >
                {tech.name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>

    </section>
  );
};
