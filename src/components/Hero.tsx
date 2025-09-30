import { motion } from 'motion/react';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { personalInfo } from '../config';
import profilePhoto from '../assets/main-photo-cartoon.png';

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center relative">
        <motion.div 
          className="space-y-6 relative z-20"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-4">
            <motion.p 
              className="text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Hello, I'm
            </motion.p>
            <motion.h1 
            
              className="text-5xl lg:text-6xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Lukáš <span className="text-blue-600">Kuťka</span>
            </motion.h1>
            <motion.h2 
              className="text-2xl text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              {personalInfo.title}
            </motion.h2>
          </div>
          
          <motion.p 
            className="text-gray-600 text-lg leading-relaxed max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            I craft digital experiences that blend beautiful design with 
            powerful functionality. Passionate about creating innovative 
            solutions that make a difference.
          </motion.p>
          
          <motion.div 
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <Button 
              className="bg-blue-600 hover:bg-blue-700 gap-2"
              onClick={() => window.open(personalInfo.resumeUrl, '_blank')}
            >
              <Download size={18} />
              Download CV
            </Button>
            
            <div className="flex items-center gap-3">
              <Button 
                variant="outline" 
                size="sm" 
                className="rounded-full w-10 h-10 p-0"
                onClick={() => window.open(personalInfo.links.github, '_blank')}
              >
                <Github size={18} />
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="rounded-full w-10 h-10 p-0"
                onClick={() => window.open(personalInfo.links.linkedin, '_blank')}
              >
                <Linkedin size={18} />
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="rounded-full w-10 h-10 p-0"
                onClick={() => window.open(`mailto:${personalInfo.email}`, '_self')}
              >
                <Mail size={18} />
              </Button>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Enhanced Character Image */}
        <motion.div 
          className="relative flex justify-center lg:justify-end z-20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="character-container relative">
            {/* Background gradient circles for depth */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute inset-4 bg-gradient-to-tr from-indigo-500/5 via-pink-500/5 to-blue-500/5 rounded-full animate-pulse"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Main character image with enhanced 3D effects */}
            <motion.div 
              className="relative character-image-wrapper"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.img 
                src={profilePhoto}
                alt="Lukáš Kuťka Character" 
                className="character-image w-80 h-auto relative z-10"
                style={{
                  filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.25))"
                }}
                loading="lazy"
                onError={(e) => {
                  console.error('Failed to load profile photo:', e);
                }}
                onLoad={() => {
                  console.log('Profile photo loaded successfully');
                }}
              />
              
              {/* Dynamic shadow that follows the character */}
              <div className="character-shadow absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-8 bg-black/10 rounded-full blur-md" />
            </motion.div>
          </div>
        </motion.div>
        
        {/* Floating Code Snippets */}
        <motion.div 
          className="floating-code-snippet absolute top-56 right-8 z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="bg-gray-900/95 backdrop-blur-sm text-green-400 px-3 py-2 rounded-lg shadow-xl border border-gray-700/50 font-mono text-xs">
            <span className="text-blue-400">git</span> <span className="text-green-300">commit</span> <span className="text-yellow-300">-m</span>
          </div>
        </motion.div>
        
        <motion.div 
          className="floating-code-snippet absolute bottom-24 left-1/2 z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="bg-gray-900/95 backdrop-blur-sm text-green-400 px-3 py-2 rounded-lg shadow-xl border border-gray-700/50 font-mono text-xs">
            <span className="text-red-400">function</span> <span className="text-cyan-400">App</span>() {`{}`}
          </div>
        </motion.div>
        
        <motion.div 
          className="floating-code-snippet absolute top-20 left-1/2 z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="bg-gray-900/95 backdrop-blur-sm text-green-400 px-3 py-2 rounded-lg shadow-xl border border-gray-700/50 font-mono text-xs">
            <span className="text-purple-400">import</span> React <span className="text-blue-400">from</span> <span className="text-yellow-300">'react'</span>
          </div>
        </motion.div>
      </div>
      
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-50/30 pointer-events-none" />
    </section>
  );
}