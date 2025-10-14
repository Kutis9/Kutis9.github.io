import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a passionate Full Stack Developer SEBSO with over 5 years of experience creating 
              innovative web applications. I specialize in modern technologies like React, 
              TypeScript, and Node.js.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open source projects, or enjoying the great outdoors in San Francisco.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}