import { motion } from 'motion/react';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { personalInfo } from '../config';
import profilePhoto from '../assets/main-photo-cartoon.png';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50/20 to-purple-50/5 pt-14 sm:pt-16">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
          animate={{
            y: [20, -20, 20],
            x: [10, -10, 10],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-gray-600 text-lg"
              >
                Hello, I'm
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                {personalInfo.name}
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-2xl lg:text-3xl text-gray-600"
              >
                {personalInfo.title}
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-lg text-gray-600 leading-relaxed max-w-lg"
            >
              {personalInfo.tagline} {personalInfo.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button 
                size="lg" 
                className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                onClick={() => window.open(personalInfo.resumeUrl, '_blank')}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download CV
                </span>
              </Button>
              
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="p-3 hover:scale-110 transition-transform duration-200"
                  onClick={() => window.open(personalInfo.links.github, '_blank')}
                >
                  <Github className="w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="p-3 hover:scale-110 transition-transform duration-200"
                  onClick={() => window.open(personalInfo.links.linkedin, '_blank')}
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="p-3 hover:scale-110 transition-transform duration-200"
                  onClick={() => window.open(`mailto:${personalInfo.email}`, '_self')}
                >
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* 3D Profile Character - Dramatic Entry */}
          <motion.div
            initial={{ 
              opacity: 0, 
              scale: 0.3, 
              rotateY: -90, 
              rotateX: 45,
              z: -200 
            }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              rotateY: 0, 
              rotateX: 0,
              z: 0 
            }}
            transition={{ 
              duration: 1.5, 
              delay: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 20
            }}
            className="relative flex items-center justify-center"
            style={{ 
              perspective: "1200px",
              transformStyle: "preserve-3d"
            }}
          >
            {/* Dramatic background explosion effect */}
            <motion.div
              className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1.5, 1],
                opacity: [0, 0.8, 0.3],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 2,
                delay: 1.2,
                ease: "easeOut"
              }}
            />
            
            {/* Main 3D Character - Pop Out Effect */}
            <motion.div
              className="relative"
              initial={{ 
                rotateY: -45,
                rotateX: 20,
                scale: 0.8,
                z: -100
              }}
              animate={{ 
                rotateY: 0,
                rotateX: 0,
                scale: 1,
                z: 50
              }}
              transition={{ 
                duration: 1.2, 
                delay: 1.0,
                type: "spring",
                stiffness: 200,
                damping: 15
              }}
              whileHover={{ 
                scale: 1.08,
                rotateY: 15,
                rotateX: -10,
                z: 80,
                transition: { type: "spring", stiffness: 400, damping: 25 }
              }}
              style={{ 
                transformStyle: "preserve-3d",
                perspective: "1000px"
              }}
            >
              {/* Dynamic shadow that grows during entry */}
              <motion.div 
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-12 bg-black/30 rounded-full blur-2xl"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.4 }}
                transition={{ duration: 1, delay: 1.3 }}
                whileHover={{ scale: 1.2, opacity: 0.6 }}
                style={{ transform: "translateZ(-80px)" }}
              />
              
              {/* Main character image with pop-out effect */}
              <motion.img 
                src={profilePhoto}
                alt={personalInfo.name}
                className="w-80 h-auto object-contain relative z-20"
                initial={{ 
                  scale: 0.5,
                  rotateY: 30,
                  z: -50
                }}
                animate={{
                  scale: 1,
                  rotateY: 0,
                  z: 30,
                  y: [0, -8, 0],
                }}
                transition={{
                  scale: { duration: 1, delay: 1.1, type: "spring", stiffness: 300 },
                  rotateY: { duration: 1, delay: 1.1 },
                  z: { duration: 1, delay: 1.1 },
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }
                }}
                whileHover={{ 
                  y: -15,
                  rotateZ: 3,
                  rotateY: 8,
                  scale: 1.05,
                  z: 50,
                  transition: { 
                    type: "spring", 
                    stiffness: 500, 
                    damping: 25 
                  }
                }}
                style={{ 
                  filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.3))",
                  transform: "translateZ(50px)"
                }}
              />
              
              {/* Glowing rim light effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-full blur-2xl"
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  opacity: [0, 0.4, 0.2],
                  scale: [0, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  delay: 1.5,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut",
                }}
                style={{ transform: "translateZ(-20px)" }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}