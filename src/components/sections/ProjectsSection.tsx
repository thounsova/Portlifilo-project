import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import image1 from "../sections/images/Pasted image.png";
import image2 from "../sections/images/Pasted image (2).png";
import image3 from "../sections/images/Pasted image (3).png";
import image4 from "../sections/images/Pasted image (4).png";
import image5 from "../sections/images/Pasted image (5).png";
import image6 from "../sections/images/Pasted image (6).png";

const projects = [
  {
    title: 'Golden Future School',
    description:
      'Educational website showcasing school information, programs, and community resources with responsive UI.',
    image: image1,
    tech: ['Typescript', 'CSS', 'React', 'Responsive Design'],
    liveUrl: 'https://golden-bytes-school-com.vercel.app',
    githubUrl: '',
    type: 'Static',
  },
  {
    title: 'Movies Platform',
    description:
      'Full-featured movies browsing platform with MovieDB API integration, search, and responsive UI.',
    image: image2,
    tech: ['React', 'MovieDB API', 'Postman', 'CSS'],
    liveUrl: 'https://movie-5-zeta.vercel.app/',
    githubUrl: '#',
    type: 'Fetch API',
  },
  {
    title: 'Furniture Company',
    description:
      'E-commerce style furniture showcase with product galleries and modern UI.',
    image: image3,
    tech: ['HTML5', 'JavaScript', 'Figma', 'CSS3'],
    liveUrl: '#',
    githubUrl: '#',
    type: 'Fetch API',
  },
  {
    title: 'AI Content Generator',
    description:
      'AI-powered content creation platform using advanced language models for marketing and copywriting.',
    image: image4,
    tech: ['HTML5', 'Bootstrap', 'CSS3', 'OpenAI'],
    liveUrl: 'https://visaphoung11.github.io/Small-World-Company-Visal-Neath-Rachana-/',
    githubUrl: '#',
    type: 'Static',
  },
  {
    title: 'Library Management System',
    description:
      'Complete library management system with Vue.js frontend, featuring full CRUD operations for students, books, and borrowing records.',
    image: image5,
    tech: ['Vue.js', 'Express', 'Node.js', 'Tailwind CSS', 'MySQL'],
    liveUrl: '#',
    githubUrl: '#',
    type: 'Full-Stack',
  },
  {
    title: 'Beauty Salon Website',
    description:
      'Mobile-first beauty salon website with appointment booking and service showcase.',
    image: image6,
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Figma'],
    liveUrl: 'https://beauty-salon-website-omega.vercel.app',
    githubUrl: '#',
    type: 'Static',
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="min-h-screen flex items-center py-20">
      <motion.div
        ref={ref}
        className="w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-5xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />

              <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-lg text-sm text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons Section */}
                  <div className="flex flex-wrap gap-4">
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg text-sm font-semibold"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </motion.a>
                    )}

                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 text-white rounded-lg text-sm font-semibold"
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={16} />
                        Code
                      </motion.a>
                    )}

                    {/* Dynamic Type Button */}
                    {project.type && (
                      <motion.span
                        className={`px-4 py-2 rounded-lg text-sm font-semibold ${
                          project.type === 'Static'
                            ? 'bg-green-500/20 border border-green-400 text-green-400'
                            : project.type === 'Full-Stack'
                            ? 'bg-purple-500/20 border border-purple-400 text-purple-400'
                            : project.type === 'Fetch API'
                            ? 'bg-yellow-500/20 border border-yellow-400 text-yellow-400'
                            : ''
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {project.type}
                      </motion.span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
