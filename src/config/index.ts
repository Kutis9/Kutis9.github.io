// Main configuration - works perfectly on GitHub Pages
// Uses only public data that's safe to commit
import { publicInfo } from './public';

// Direct export for GitHub Pages compatibility
export const personalInfo = {
  // Basic information
  name: publicInfo.name,
  title: publicInfo.title,
  location: publicInfo.location,
  tagline: publicInfo.tagline,
  description: publicInfo.description,
  availableForWork: publicInfo.availableForWork,
  resumeUrl: publicInfo.resumeUrl,
  
  // Contact information (public-safe)
  email: publicInfo.email,
  phone: publicInfo.phone,
  
  // Social links
  links: {
    github: publicInfo.socialLinks.github,
    linkedin: publicInfo.socialLinks.linkedin,
    portfolio: publicInfo.socialLinks.portfolio,
    twitter: "", // Add if needed
  }
} as const;

export default personalInfo;