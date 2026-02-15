import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap, FolderPlus } from 'lucide-react';

const experiences = [


  // Project Entry
  {
    type: 'project',
    title: 'Full-Stack Developer: Mother Care Project',
    company: 'School Autism Program',
    period: '2024',
    description: `
- Created a website for a school supporting children with autism
- Developed a data management system for the school
- Built the front-end system for the Mother Care Autism program
- Improved communication and information access for teachers and parents
    `,
  },
  // Education
  {
    type: 'education',
    title: 'Web & App Development',
    company: 'School of Business – PSE Institute',
    period: '2024 - Present',
    description: `
- Install and configure the work environment
- Create user interface mockups
- Develop static and dynamic user interfaces
- Set up relational databases
- Develop SQL and NoSQL data access components
- Develop server-side business components
- Document the deployment of dynamic web applications
    `,
  },
  {
    type: 'education',
    title: 'Foundation Studies Division',
    company: 'PSE Institute',
    period: '2023 - 2024',
    description: '',
  },

  // Work Experience
  {
    type: 'work',
    title: 'Part-Time: Phone Repair & Sales',
    company: 'Phone Shop, Prey Veng',
    period: '2021 - 2022',
    description: `
- Repaired mobile phones and performed screen replacements
- Installed software and configured programs on phones
- Assisted customers and sold mobile devices
- Delivered items using the shop’s van
    `,
  },

  // Volunteer
  {
    type: 'work',
    title: 'Volunteer: Student Mentor',
    company: 'PSE Institute',
    period: '2023 - 2024',
    description: `
- Practiced English conversation with learners
- Taught basic English to other students
- Created new questions and exercises to support learning
    `,
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
          {/* Timeline line */}
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
                {/* Timeline icon */}
                <motion.div
                  className={`absolute left-5 top-6 w-6 h-6 rounded-full border-4 border-gray-900 flex items-center justify-center ${
                    exp.type === 'work'
                      ? 'bg-gradient-to-br from-blue-500 to-purple-500'
                      : exp.type === 'education'
                      ? 'bg-gradient-to-br from-green-500 to-cyan-500'
                      : 'bg-gradient-to-br from-pink-500 to-yellow-500'
                  }`}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                  whileHover={{ scale: 1.5 }}
                >
                  {exp.type === 'work'
                    ? <Briefcase size={20} />
                    : exp.type === 'education'
                    ? <GraduationCap size={20} />
                    : <FolderPlus size={20} />}
                </motion.div>

                {/* Card */}
                <motion.div
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-2xl"
                  whileHover={{ scale: 1.02, borderColor: 'rgba(255, 255, 255, 0.2)' }}
                >
                  <div className="flex flex-col">
                    <h3 className="text-2xl font-bold text-yellow-400 mb-1">{exp.title}</h3>
                    <div className="flex items-center gap-4 text-gray-400 mb-2">
                      <span className="font-medium">{exp.company}</span>
                      <span className="text-sm">•</span>
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    {exp.description && (
                      <pre className="text-gray-300 whitespace-pre-line">{exp.description}</pre>
                    )}
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
