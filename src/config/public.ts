// PUBLIC configuration - safe to commit to GitHub
// Only display information that you want to be publicly visible

export const publicInfo = {
  // Basic public information
  name: "Lukáš Kuťka",
  title: "Full Stack Developer", 
  location: "Slovakia", // Keep general, not specific address
  
  // Professional taglines - safe to be public
  tagline: "I craft digital experiences that blend beautiful design with powerful functionality.",
  description: "Passionate about creating innovative solutions that make a difference.",
  
  // Public social links - these are meant to be shared anyway
  socialLinks: {
    github: "https://github.com/Kutis9",
    linkedin: "https://linkedin.com/in/your-profile",
    portfolio: "https://kutis9.github.io"
  },
  
  // Status
  availableForWork: true,
  
  // Public resume (hosted file, not personal details)
  resumeUrl: "/resume.pdf"
} as const;

export default publicInfo;