// PRIVATE configuration - NEVER commit this file to GitHub!
// Add this file to .gitignore

// This file should contain sensitive information:
// - Real email addresses
// - Phone numbers  
// - Personal addresses
// - API keys
// - Any private contact information

// Create this file locally: src/config/private.ts

export const privateInfo = {
  // Private contact information
  email: "your.real.email@gmail.com",
  phone: "+421 xxx xxx xxx",
  
  // Private links (if any)
  privateLinks: {
    // Any private profiles or links
  }
} as const;

export default privateInfo;