import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';

const projects = [
  {
    title: 'Metal Fabrication Slovakia',
    description: 'A modern e-commerce platform built with React, TypeScript, and Node.js',
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    image: '🛍️',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates',
    tech: ['Next.js', 'Tailwind CSS', 'Prisma', 'WebSocket'],
    image: '📋',
  },
  {
    title: 'Portfolio Website',
    description: 'A responsive portfolio website with modern design and animations',
    tech: ['React', 'Tailwind CSS', 'Motion', 'Vite'],
    image: '🎨',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-12"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
              >
                <div className="p-6 space-y-4">
                  <div className="text-6xl text-center">{project.image}</div>
                  <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-4">
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}