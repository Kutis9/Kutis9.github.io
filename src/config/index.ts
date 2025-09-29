// Main configuration file - safe for public repositories
// Import only public data by default
import { publicInfo } from './public';

// Safe fallback for private information
const safePrivateDefaults = {
  email: "contact@example.com", // Generic safe email
  phone: "", // No phone displayed
};

// Export combined configuration
// If you want real private data, create src/config/private.ts and modify this file locally
export const personalInfo = {
  // All public information
  name: publicInfo.name,
  title: publicInfo.title,
  location: publicInfo.location,
  tagline: publicInfo.tagline,
  description: publicInfo.description,
  availableForWork: publicInfo.availableForWork,
  resumeUrl: publicInfo.resumeUrl,
  
  // Safe contact defaults (override locally if needed)
  email: safePrivateDefaults.email,
  phone: safePrivateDefaults.phone,
  
  // Public social links
  links: {
    github: publicInfo.socialLinks.github,
    linkedin: publicInfo.socialLinks.linkedin,
    portfolio: publicInfo.socialLinks.portfolio,
    twitter: "", // Add if needed
  }
} as const;

export default personalInfo;