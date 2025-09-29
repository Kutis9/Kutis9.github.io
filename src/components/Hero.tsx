import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { personalInfo } from '../config';
import profilePhoto from '../assets/main-photo-cartoon.png';

export function Hero() {
  // Smooth mouse tracking system inspired by motion-primitives
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // High-performance spring animations with optimal config
  const springConfig = { bounce: 0, damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);
  
  // Transform values with natural movement limits
  const rotateX = useTransform(springY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-15, 15]);
  const scale = useTransform(springX, [-0.5, 0, 0.5], [0.98, 1.02, 0.98]);

  // Smooth mouse move handler
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Normalize to -0.5 to 0.5 range for smooth spring animation
    const xPos = (e.clientX - centerX) / rect.width;
    const yPos = (e.clientY - centerY) / rect.height;
    
    mouseX.set(xPos);
    mouseY.set(yPos);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

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

          {/* Pure 3D Photo - Ultra Original Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative flex items-center justify-center"
          >
            {/* Technology Rainbow Arcs Behind Photo */}
            <div className="absolute inset-0 flex items-end justify-center pointer-events-none overflow-hidden" style={{ zIndex: -10, paddingBottom: '100px' }}>
              {/* Large Arc */}
              <motion.div
                className="absolute border-2 border-blue-200/40 rounded-full"
                style={{
                  width: '650px',
                  height: '650px',
                  zIndex: -10,
                  bottom: '-325px'
                }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 60,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              {/* Medium Arc */}
              <motion.div
                className="absolute border-2 border-purple-200/35 rounded-full"
                style={{
                  width: '520px',
                  height: '520px',
                  zIndex: -11,
                  bottom: '-260px'
                }}
                animate={{ rotate: -360 }}
                transition={{
                  duration: 45,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              {/* Small Arc */}
              <motion.div
                className="absolute border-2 border-green-200/30 rounded-full"
                style={{
                  width: '390px',
                  height: '390px',
                  zIndex: -12,
                  bottom: '-195px'
                }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>

            {/* Simple 3D Photo Effect */}
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              style={{ 
                transformStyle: "preserve-3d",
                perspective: "1000px",
                zIndex: 100
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >

              {/* Main Photo with Smooth 3D Transform */}
              <motion.img 
                src={profilePhoto}
                alt={personalInfo.name}
                className="w-96 h-auto object-contain relative cursor-pointer"
                initial={{
                  y: "100vh",
                  opacity: 0.3
                }}
                animate={{
                  y: 0,
                  opacity: 1
                }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 25,
                  delay: 0.3,
                  duration: 1.5
                }}
                style={{ 
                  filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.25))",
                  transformStyle: "preserve-3d",
                  rotateX,
                  rotateY,
                  scale,
                  zIndex: 100,
                  position: 'relative'
                }}
                whileHover={{
                  transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 20
                  }
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}