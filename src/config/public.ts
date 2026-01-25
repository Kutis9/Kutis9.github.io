// PUBLIC configuration - safe to commit to GitHub
// All information here will be visible on your public website

export const publicInfo = {
  // Basic public information
  name: "Lukáš Kuťka",
  title: "Full Stack Developer", 
  location: "Nitra, Slovakia", // Keep general, not specific address
  
  // Professional taglines - safe to be public
  tagline: "I craft digital experiences that blend beautiful design with powerful functionality.",
  description: "Passionate about creating innovative solutions that make a difference.",
  
  // PUBLIC contact info (use what you're comfortable sharing publicly)
  email: "lukas.kutka@hotmail.com", // Professional contact email
  phone: "", // Leave empty if you don't want to share publicly
  
  // Public social links - these are meant to be shared anyway
  socialLinks: {
    github: "https://github.com/Kutis9",
    linkedin: "https://www.linkedin.com/in/lukáš-kuťka-76485832a", // Update with your actual profile
    portfolio: "https://kutis9.github.io"
  },
  
  // Status
  availableForWork: true,
  
  // Public resume (hosted file, not personal details)
  resumeUrl: "/resume.pdf"
} as const;

export default publicInfo;