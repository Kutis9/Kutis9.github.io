// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/
// 2. Create an account and verify your email
// 3. Add an email service (Gmail, Outlook, etc.)
// 4. Create an email template
// 5. Get your public key from Account > API Keys
// 6. Replace the values below with your actual EmailJS configuration

// EmailJS Configuration for both Local Development and GitHub Pages
// 
// Local Development:
// 1. Copy .env.example to .env
// 2. Fill in your actual EmailJS values
// 3. Run: npm run dev
//
// GitHub Pages:
// 1. Add values to GitHub Secrets (Settings > Secrets and variables > Actions)
// 2. GitHub Actions will inject them during build
//
// Environment variables must be prefixed with VITE_ for Vite to include them in the build

export const emailConfig = {
  // Your EmailJS Service ID (from emailjs.com dashboard)
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_YOUR_ID',
  
  // Your EmailJS Template ID (from emailjs.com dashboard) 
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_YOUR_ID',
  
  // Your EmailJS Public Key (from emailjs.com dashboard)
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY',
  
  // Optional: Rate limiting (milliseconds between requests)
  throttle: 10000, // 10 seconds
};

// Debug info (only in development)
if (import.meta.env.DEV) {
  console.log('EmailJS Config Status:');
  console.log('Service ID:', emailConfig.serviceId !== 'service_YOUR_ID' ? '✅ Set' : '❌ Not set');
  console.log('Template ID:', emailConfig.templateId !== 'template_YOUR_ID' ? '✅ Set' : '❌ Not set'); 
  console.log('Public Key:', emailConfig.publicKey !== 'YOUR_PUBLIC_KEY' ? '✅ Set' : '❌ Not set');
}

// Template variables that will be sent to EmailJS
// Make sure your EmailJS template includes these variables:
// - {{from_name}} - sender's name
// - {{from_email}} - sender's email  
// - {{message}} - message content
// - {{to_name}} - your name (recipient)