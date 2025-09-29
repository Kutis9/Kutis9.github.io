import { motion } from 'motion/react';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';

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
                John Doe
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-2xl lg:text-3xl text-gray-600"
              >
                Full Stack Developer
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-lg text-gray-600 leading-relaxed max-w-lg"
            >
              I craft digital experiences that blend beautiful design with powerful functionality. 
              Passionate about creating innovative solutions that make a difference.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">
                <span className="relative z-10 flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download CV
                </span>
              </Button>
              
              <div className="flex gap-3">
                <Button variant="outline" size="lg" className="p-3 hover:scale-110 transition-transform duration-200">
                  <Github className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg" className="p-3 hover:scale-110 transition-transform duration-200">
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg" className="p-3 hover:scale-110 transition-transform duration-200">
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* 3D Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateY: -30 }}
            animate={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            <motion.div
              className="relative w-full max-w-md mx-auto"
              whileHover={{ 
                rotateY: 10,
                rotateX: -5,
                z: 50
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="bg-gradient-to-br from-white via-gray-50/50 to-gray-100 border rounded-3xl p-8 shadow-2xl backdrop-blur-sm relative overflow-hidden">
                {/* Gloss effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-3xl" />
                
                {/* Profile Image */}
                <div className="relative z-10 space-y-6">
                  <div className="w-48 h-48 mx-auto relative">
                    <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-full p-1">
                      <div className="w-full h-full bg-gradient-to-br from-gray-100/50 to-white rounded-full flex items-center justify-center">
                        <div className="w-40 h-40 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full flex items-center justify-center text-6xl">
                          👨‍💻
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center space-y-2">
                    <h3 className="text-xl text-gray-900">Creative Developer</h3>
                    <p className="text-gray-600">Based in San Francisco</p>
                    <div className="flex justify-center gap-2 pt-4">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-sm text-gray-600">Available for work</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}