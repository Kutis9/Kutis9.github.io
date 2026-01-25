# Product Requirements Document (PRD)
## Portfolio Web Application

---

**Product Name:** Lukáš Kuťka - Portfolio Website  
**Version:** 1.0.0  
**Last Updated:** 22. január 2026  
**Status:** In Development  
**Target Launch:** Q1 2026

---

## 📋 Executive Summary

Modern, responsive portfolio web application showcasing professional achievements, projects, and contact information for Lukáš Kuťka (Full Stack Developer). The application is built with React 19, TypeScript, and Tailwind CSS 4, optimized for deployment on GitHub Pages.

### Primary Goals
- **Professional Presence:** Create a compelling digital presence that showcases technical skills and projects
- **User Experience:** Deliver smooth, engaging interactions with modern animations and responsive design
- **Performance:** Achieve excellent Core Web Vitals scores and fast load times
- **Accessibility:** WCAG 2.1 AA compliance for inclusive user experience
- **Maintainability:** Clean, type-safe codebase with best practices

---

## 🎯 Product Vision

### Vision Statement
"To create a portfolio that not only showcases projects but demonstrates mastery of modern web technologies through its own implementation, serving as both a business card and a live technical demonstration."

### Success Metrics
- **Performance:** Lighthouse score > 90 in all categories
- **Engagement:** Average session duration > 2 minutes
- **Conversion:** Contact form submission rate > 5% of visitors
- **Technical:** Zero TypeScript errors, 100% ESLint compliance
- **Deployment:** < 5 second build time, zero downtime deployments

---

## 👥 Target Audience

### Primary Users
1. **Recruiters & Hiring Managers**
   - Looking for Full Stack Developer candidates
   - Need quick access to projects, skills, and contact info
   - Expect professional presentation and working examples

2. **Potential Clients**
   - Seeking freelance/contract developers
   - Need proof of technical capabilities
   - Want easy communication channel

3. **Peers & Collaborators**
   - Fellow developers exploring portfolio
   - Looking for collaboration opportunities
   - Interested in technical implementation

### User Needs
- Quick overview of skills and experience (< 30 seconds)
- Easy access to project details and live demos
- Simple, reliable contact method
- Mobile-friendly experience
- Fast load times on all connections

---

## 🎨 Design Requirements

### Design System
- **Typography:** Modern, readable font hierarchy
- **Color Palette:** 
  - Primary: Blue (#2563EB) - professional, trustworthy
  - Accent: Gradient effects (purple, cyan) - modern, dynamic
  - Neutral: Gray scale for content hierarchy
- **Spacing:** Consistent 8px grid system
- **Components:** Reusable UI components with shadcn/ui patterns

### Visual Style
- **Aesthetic:** Clean, modern, minimalist
- **Character:** Professional yet approachable
- **Animations:** Smooth, purposeful motion (Motion library)
- **Responsiveness:** Mobile-first approach with breakpoints at sm(640px), md(768px), lg(1024px), xl(1280px)

### Figma Reference
- Implementation follows Figma Make design specifications
- Maintains pixel-perfect accuracy where feasible
- Adapts responsive breakpoints for optimal UX

---

## ⚙️ Technical Requirements

### Technology Stack

#### Frontend Framework
- **React 19.1.1** - Latest React with concurrent features
- **TypeScript 5.8.3** - Strict type checking enabled
- **JSX Transform:** `react-jsx` (no React imports needed)

#### Styling
- **Tailwind CSS 4.1.13** - Utility-first CSS framework
- **@tailwindcss/vite** - Vite plugin for Tailwind
- **Motion 12.23.22** - Modern animation library

#### Build Tools
- **Vite 7.1.7** - Ultra-fast build tool with HMR
- **TypeScript Compiler** - Two-stage build (`tsc -b && vite build`)

#### Quality Tools
- **ESLint 9.x** - Modern flat config with typescript-eslint
- **TypeScript-ESLint** - React-specific rules
- Strict linting rules: `noUnusedLocals`, `noUnusedParameters`

#### Third-Party Services
- **EmailJS** - Contact form email delivery
- **lucide-react** - Icon library
- **vite-plugin-imagemin** - Image optimization

### Architecture

```
src/
├── App.tsx                    # Main application component
├── App.css                    # Application-level styles
├── main.tsx                   # React entry point
├── index.css                  # Global styles + Tailwind
├── assets/                    # Static assets (images, fonts)
│   └── kutis_01_final_transparent.png
├── components/                # React components
│   ├── Hero.tsx              # Landing section with profile
│   ├── About.tsx             # About me section
│   ├── Projects.tsx          # Featured projects
│   ├── Contact.tsx           # Contact form with EmailJS
│   ├── Navigation.tsx        # Main navigation
│   ├── Footer.tsx            # Footer section
│   ├── ui/                   # Reusable UI components
│   │   └── button.tsx        # Button component
│   └── styles/               # Component-specific styles
└── config/                    # Configuration files
    ├── index.ts              # Main config export
    ├── public.ts             # Public personal info
    ├── emailConfig.ts        # EmailJS configuration
    └── private.example.ts    # Example private config
```

### TypeScript Configuration
- **Target:** ES2022 with modern features
- **Module Resolution:** Bundler (Vite-optimized)
- **Strict Mode:** Enabled with all checks
- **Multiple tsconfig files:**
  - `tsconfig.json` - Root configuration
  - `tsconfig.app.json` - Application code
  - `tsconfig.node.json` - Build tools (Vite config)

### Performance Requirements
- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **Time to Interactive:** < 3.5s
- **Cumulative Layout Shift:** < 0.1
- **Bundle Size:** < 300KB gzipped
- **Image Optimization:** Automatic compression, WebP support

---

## 🔧 Functional Requirements

### 1. Hero Section ✅ IMPLEMENTED
**Priority:** P0 (Must Have)

**Description:**  
Landing section that creates strong first impression with profile photo, introduction, and call-to-action.

**User Stories:**
- As a visitor, I want to immediately see who the portfolio belongs to
- As a recruiter, I want quick access to CV and social links
- As a user, I want smooth animations that enhance (not distract from) content

**Acceptance Criteria:**
- [x] Display name "Lukáš Kuťka" and title "Full Stack Developer"
- [x] Show professional profile photo with visual effects
- [x] Include tagline/description paragraph
- [x] "Download CV" button (functional)
- [x] Social links: GitHub, LinkedIn, Email (icons)
- [x] Animated code snippets floating around (aesthetic)
- [x] Responsive on mobile (stacked layout)
- [x] Desktop: 2-column grid (text left, image right)
- [x] Mobile: single column, optimized code snippet positions

**Technical Details:**
- Uses `motion` for entrance animations
- Responsive code snippets: different positions for mobile/desktop
- Profile image: transparent PNG with gradient effects
- Button component from shadcn/ui pattern

---

### 2. About Section ✅ IMPLEMENTED
**Priority:** P0 (Must Have)

**Description:**  
Personal introduction section highlighting background, experience, and personality.

**User Stories:**
- As a visitor, I want to learn about the developer's background
- As a recruiter, I want to understand their experience level
- As a potential client, I want to gauge their expertise

**Acceptance Criteria:**
- [x] Section heading "About Me"
- [x] 2-3 paragraphs of introduction text
- [x] Mentions years of experience
- [x] Lists key technologies (React, TypeScript, Node.js)
- [x] Scroll-triggered fade-in animation
- [x] Centered content with max-width constraint
- [x] Gradient text effect on heading

**Technical Details:**
- `motion` with `whileInView` for scroll animations
- `viewport={{ once: true }}` to prevent re-triggering
- Responsive typography scaling

---

### 3. Projects Section ✅ IMPLEMENTED
**Priority:** P0 (Must Have)

**Description:**  
Showcase of featured projects with descriptions, tech stacks, and links.

**User Stories:**
- As a recruiter, I want to see real examples of work
- As a visitor, I want to explore project demos and code
- As a developer, I want to see the technologies used

**Acceptance Criteria:**
- [x] Grid layout: 3 columns on desktop, 2 on tablet, 1 on mobile
- [x] Each project card includes:
  - [x] Visual representation (emoji placeholder)
  - [x] Project title
  - [x] Description
  - [x] Tech stack tags
  - [x] "Code" button (GitHub link)
  - [x] "Demo" button (live preview link)
- [x] Hover effects: shadow elevation
- [x] Staggered entrance animations
- [x] Background color: light gray (#F9FAFB)

**Current Projects:**
1. **E-Commerce Platform** - React, TypeScript, Node.js, PostgreSQL
2. **Task Management App** - Next.js, Tailwind CSS, Prisma, WebSocket
3. **Portfolio Website** - React, Tailwind CSS, Motion, Vite

**Future Enhancement:**
- Replace emoji placeholders with real project screenshots
- Add filters by technology
- Implement project detail modals

---

### 4. Contact Section ✅ IMPLEMENTED
**Priority:** P0 (Must Have)

**Description:**  
Contact form integrated with EmailJS for direct communication.

**User Stories:**
- As a recruiter, I want easy way to reach out
- As a visitor, I want to send message without opening email client
- As the owner, I want to receive messages reliably

**Acceptance Criteria:**
- [x] Contact form with fields:
  - [x] Name (required)
  - [x] Email (required, HTML5 validated)
  - [x] Message (required, textarea)
- [x] EmailJS integration for delivery
- [x] Success/error status messages with icons
- [x] Form validation with helpful error messages
- [x] Responsive layout (2-column on desktop, stacked on mobile)
- [x] Loading state during submission (spinner + disabled fields)
- [x] Email notification to portfolio owner
- [x] Contact info display (Email, Location)
- [x] Contact character illustration

**Technical Implementation:**
- ✅ EmailJS configuration in `src/config/emailConfig.ts`
- ✅ Environment variables from GitHub Secrets (production)
- ✅ Local development with `.env` file
- ✅ Form state management with React `useState`
- ✅ Proper error handling and user feedback
- ✅ Rate limiting (10 second throttle)
- ✅ Validation check for placeholder values

**EmailJS Setup:**
- ✅ Service ID, Template ID, Public Key configured via GitHub Secrets
- ✅ Template variables: `from_name`, `from_email`, `message`, `to_name`
- ✅ Fallback email display in Contact section
- ✅ Error handling for configuration issues

**Security:**
- API keys stored in GitHub Repository Settings > Secrets and variables > Actions
- Environment variables prefixed with `VITE_` for Vite compatibility
- Public repository safe (no credentials exposed)

---

### 5. Navigation Component ✅ IMPLEMENTED
**Priority:** P0 (Must Have)

**Description:**  
Sticky navigation bar with smooth scrolling to sections.

**User Stories:**
- As a user, I want easy access to all sections
- As a mobile user, I want hamburger menu for navigation
- As a visitor, I want to know where I am on the page

**Acceptance Criteria:**
- [x] Fixed/sticky navigation at top
- [x] Navigation links: Home, About, Projects, Contact
- [x] Smooth scroll to sections on click
- [x] Active section highlighting
- [x] Mobile: hamburger menu
- [x] Desktop: horizontal menu
- [x] Background blur effect on scroll
- [x] Logo/name on left side

---

### 6. Footer Component ✅ IMPLEMENTED
**Priority:** P1 (Should Have)

**Description:**  
Footer with copyright, social links, and additional information.

**Acceptance Criteria:**
- [x] Copyright notice with current year
- [x] Social media links (icons)
- [x] "Built with React + TypeScript" attribution
- [x] Responsive layout
- [x] Consistent styling with overall design

---

## 🔐 Security & Privacy Requirements

### Data Protection
- **No Sensitive Data in Repo:** Email API keys stored in GitHub Secrets
- **Public Configuration:** Only public information in `src/config/public.ts`
- **Environment Variables:** `.env` file gitignored, `.env.example` as template

### Best Practices
- **Input Validation:** All form inputs validated client-side and server-side
- **XSS Prevention:** React's built-in escaping + sanitization
- **Rate Limiting:** EmailJS service limits to prevent spam
- **HTTPS Only:** GitHub Pages enforces HTTPS

### Personal Information Disclosure
**Public Information (Safe to Share):**
- Name: "Lukáš Kuťka"
- Title: "Full Stack Developer"
- Professional email (contact form)
- Location: Country/region (not full address)
- Social links: GitHub, LinkedIn
- Portfolio projects

**Private Information (Never Share):**
- Personal email addresses
- Phone numbers (unless professional line)
- Home address
- Private API keys

---

## 🚀 Deployment Requirements

### GitHub Pages Configuration
- **Repository:** `Kutis9/Kutis9.github.io`
- **Branch:** `main`
- **Build Directory:** `dist/`
- **Base URL:** `/` (root domain)
- **Live URL:** `https://Kutis9.github.io/`

### CI/CD Pipeline (GitHub Actions)
```yaml
Workflow Triggers:
- Push to main branch
- Pull request to main branch
- Manual dispatch

Build Job:
1. Checkout code
2. Setup Node.js 20
3. npm ci (clean install)
4. npm run lint (code quality check)
5. npm run build (TypeScript + Vite)
6. Upload dist/ artifact

Deploy Job:
1. Download build artifact
2. Deploy to GitHub Pages
3. Success notification
```

### Build Process
1. **TypeScript Compilation:** `tsc -b` - Type checking and compilation
2. **Vite Build:** `vite build` - Bundling and optimization
3. **Asset Optimization:** Image compression, minification
4. **Output:** Static HTML, CSS, JS in `dist/` directory

### Quality Gates
- ✅ TypeScript: Zero compilation errors
- ✅ ESLint: Zero linting errors
- ✅ Build: Successful production build
- ✅ Tests: All tests pass (future)

### Rollback Strategy
- Git revert to previous commit
- GitHub Pages serves previous deployment until new build succeeds
- Manual rollback via GitHub Actions re-run

---

## 📊 Analytics & Monitoring

### Planned Analytics (Future)
- **Google Analytics 4** or **Plausible** for privacy-friendly tracking
- **Metrics to Track:**
  - Page views and unique visitors
  - Session duration
  - Bounce rate
  - Contact form submissions
  - Most viewed projects
  - Traffic sources

### Performance Monitoring
- **Lighthouse CI** in GitHub Actions
- **Web Vitals** tracking
- **Bundle size monitoring** with Vite build output

---

## 🧪 Testing Strategy

### Current Testing
- **Manual Testing:** Cross-browser, cross-device testing
- **TypeScript:** Compile-time type checking
- **ESLint:** Code quality and consistency checks

### Future Testing (Planned)
- **Unit Tests:** Vitest for component testing
- **E2E Tests:** Playwright for critical user flows
- **Visual Regression:** Chromatic or Percy
- **Accessibility:** Axe DevTools automated scans
- **Performance:** Lighthouse CI automated reports

---

## 📱 Responsive Design Breakpoints

### Breakpoints
- **Mobile (xs):** < 640px - Single column, hamburger menu, stacked layout
- **Tablet (md):** 640px - 1024px - 2-column grids, expanded spacing
- **Desktop (lg):** 1024px+ - Full multi-column layouts, side navigation
- **Wide Desktop (xl):** 1280px+ - Max-width constraints, optimal line lengths

### Mobile-First Approach
- Base styles optimized for mobile
- Progressive enhancement for larger screens
- Touch-friendly tap targets (min 44x44px)
- Readable font sizes (min 16px to prevent zoom)

---

## ♿ Accessibility Requirements

### WCAG 2.1 Level AA Compliance
- **Color Contrast:** Minimum 4.5:1 for normal text, 3:1 for large text
- **Keyboard Navigation:** All interactive elements accessible via keyboard
- **Focus Indicators:** Visible focus states on all focusable elements
- **ARIA Labels:** Proper semantic HTML + ARIA where needed
- **Alt Text:** Descriptive alt text for all images
- **Screen Reader Support:** Tested with NVDA/JAWS

### Inclusive Design
- Clear, simple language
- Logical heading hierarchy (H1 → H2 → H3)
- Skip to main content link
- No reliance on color alone for information
- Captions/transcripts for video content (future)

---

## 🌍 Internationalization (Future)

### Current: Slovak/English Mix
- Primary content: English (industry standard for developer portfolios)
- Personal info: Slovak name, potential Slovak content
- UI elements: English

### Future i18n Support
- **Languages:** Slovak (sk), English (en)
- **Implementation:** React i18next or similar
- **Scope:** UI labels, section headings, project descriptions
- **Default:** English with Slovak toggle

---

## 📦 Dependencies Management

### Production Dependencies
```json
"@emailjs/browser": "^4.4.1"        // Email sending service
"@tailwindcss/vite": "^4.1.13"      // Tailwind CSS Vite plugin
"lucide-react": "^0.544.0"          // Icon library
"motion": "^12.23.22"               // Animation library
"react": "^19.1.1"                  // UI framework
"react-dom": "^19.1.1"              // React DOM rendering
"tailwindcss": "^4.1.13"            // CSS framework
```

### Development Dependencies
```json
"@vitejs/plugin-react": "^5.0.3"   // Vite React plugin
"eslint": "^9.36.0"                 // Code linting
"typescript": "~5.8.3"              // Type checking
"typescript-eslint": "^8.44.0"      // ESLint TS rules
"vite": "^7.1.7"                    // Build tool
"vite-plugin-imagemin": "^0.6.1"   // Image optimization
```

### Update Strategy
- **Patch updates:** Automated via Dependabot
- **Minor updates:** Monthly review and update
- **Major updates:** Careful testing before adoption
- **Security updates:** Immediate application

---

## 🎯 Feature Prioritization (MoSCoW)

### Must Have (P0) - Critical for Launch
- ✅ Hero section with professional introduction
- ✅ About section with background
- ✅ Projects showcase (minimum 3 projects)
- ✅ **Contact form with EmailJS integration**
- ✅ Responsive navigation
- ✅ Mobile-responsive design
- ✅ GitHub Pages deployment
- ✅ TypeScript strict mode compliance
- ⚠️ **Basic SEO (meta tags, title, description)** (TODO)
- ⚠️ **Performance optimization (Lighthouse > 90)** (TODO)

### Should Have (P1) - Important but not critical
- Real project screenshots (currently using emoji placeholders)
- CV/Resume download functionality
- Skills section with technology icons
- Smooth scroll animations
- Footer with social links and copyright
- Analytics integration (Google Analytics/Plausible)
- Image optimization and lazy loading
- Accessibility audit and fixes

### Could Have (P2) - Nice to have
- Dark mode toggle
- Blog section for articles
- Project filtering by technology
- Testimonials section
- Skills visualization (charts/graphs)
- "Back to top" button
- Reading time estimates for blog posts
- Social media preview cards (Open Graph)

### Won't Have (P3) - Out of scope for v1.0
- Backend API and database
- User authentication system
- Content Management System (CMS)
- Real-time chat support
- Multi-language support (i18n) - postponed to v2.0
- E-commerce features
- Community features (comments, ratings)
- Advanced admin dashboard

---

## 📝 Product Backlog

### Immediate Priorities (Sprint 1)
**Goal:** Complete MVP and launch

| ID | Feature | Priority | Status | Estimate | Dependencies |
|----|---------|----------|--------|----------|--------------|
| PB-001 | ~~Complete Contact form with EmailJS~~ | P0 | ✅ Done | 3h | EmailJS setup |
| PB-002 | Add meta tags for SEO | P0 | Not Started | 2h | - |
| PB-003 | Lighthouse audit and optimization | P0 | Not Started | 4h | All features complete |
| PB-004 | Real project screenshots | P1 | Not Started | 6h | Projects available |
| PB-005 | CV download functionality | P1 | Not Started | 2h | CV file ready |
| PB-006 | Skills section component | P1 | Not Started | 4h | Design approval |

### Next Sprint (Sprint 2)
**Goal:** Polish and enhance user experience

| ID | Feature | Priority | Status | Estimate | Dependencies |
|----|---------|----------|--------|----------|--------------|
| PB-007 | Analytics integration | P1 | Not Started | 3h | Analytics account |
| PB-008 | Image optimization pipeline | P1 | Not Started | 4h | - |
| PB-009 | Accessibility audit (WCAG AA) | P1 | Not Started | 6h | - |
| PB-010 | Dark mode toggle | P2 | Not Started | 8h | Design system update |
| PB-011 | Blog section (markdown) | P2 | Not Started | 12h | Blog content ready |
| PB-012 | Project detail modals | P2 | Not Started | 8h | Project data |

### Future Backlog (Unscheduled)
- Testimonials section with carousel
- Project filtering and search
- Reading progress indicator for blog
- Email newsletter integration
- Advanced animations and micro-interactions
- Service worker for offline support
- Progressive Web App (PWA) features
- Backend API for dynamic content
- Multi-language support (Slovak/English)
- A/B testing framework

---

## 🏆 Competitive Analysis

### Similar Portfolio Sites Analyzed
We analyzed 10+ developer portfolio sites to identify best practices and differentiation opportunities.

#### Strong Examples
1. **[brittanychiang.com](https://brittanychiang.com)**
   - ✅ Clean, minimalist design
   - ✅ Excellent typography and spacing
   - ✅ Smooth scroll animations
   - 💡 **Inspiration:** Section transitions, code aesthetics

2. **[jackjeznach.com](https://jackjeznach.com)**
   - ✅ Strong visual hierarchy
   - ✅ Creative project presentations
   - ✅ Interactive elements
   - 💡 **Inspiration:** Project card hover effects

3. **[cassie.codes](https://cassie.codes)**
   - ✅ Unique personality and branding
   - ✅ SVG animations and illustrations
   - ✅ Engaging storytelling
   - 💡 **Inspiration:** Character-driven design

### Competitive Advantages (Our Portfolio)
✅ **Modern Tech Stack:** React 19 + TypeScript + Tailwind CSS 4  
✅ **3D Character Design:** Unique animated character illustration  
✅ **Performance Focus:** Vite build, optimized bundle size  
✅ **Type Safety:** Full TypeScript implementation  
✅ **Open Source:** Code visible on GitHub for transparency  
✅ **Animated Code Snippets:** Floating code elements for developer aesthetic

### Areas for Improvement (vs. Competition)
⚠️ **Project Depth:** Need more detailed case studies  
⚠️ **Blog Content:** Most competitors have active blogs  
⚠️ **Video Content:** Some portfolios include project demos/walkthroughs  
⚠️ **Interactive Elements:** Could add more playful interactions  
⚠️ **Personal Branding:** Need stronger personal brand identity

---

## 📋 Content Strategy

### Planned Content Updates

#### Projects Section (Priority: High)
**Current Projects:**
1. E-Commerce Platform (placeholder)
2. Task Management App (placeholder)
3. Portfolio Website (this project)

**Planned Real Projects to Add:**
- [ ] **Project 1:** [Specific real project - TBD]
  - Screenshots: 3-5 images
  - Live demo URL
  - GitHub repository link
  - Technologies used
  - Problem/solution description
  - Key features and achievements
  
- [ ] **Project 2:** [Specific real project - TBD]
- [ ] **Project 3:** [Specific real project - TBD]

**Content Requirements per Project:**
- Hero image (1200x600px recommended)
- 2-3 additional screenshots
- 150-300 word description
- Tech stack list
- Live demo link (if applicable)
- GitHub link (if public)
- Development timeline
- Key challenges and solutions

#### Blog Section (Future - Phase 2)
**Planned Article Topics:**
1. "Building a Modern Portfolio with React 19 and TypeScript"
2. "Tailwind CSS 4: What's New and How to Migrate"
3. "EmailJS Integration: Contact Forms Without a Backend"
4. "Deploying to GitHub Pages with GitHub Actions"
5. "Accessibility Best Practices for React Applications"

**Blog Content Calendar:**
- Launch: Month 2 after MVP
- Frequency: 1-2 articles per month
- Length: 800-1500 words per article
- Include: Code examples, diagrams, screenshots

#### About Section Content
**To Add:**
- Professional photo (alternative to character)
- Work experience timeline
- Education background
- Certifications and courses
- Side projects and contributions
- Hobbies and interests (humanize)

#### Skills Section (Planned)
**Categories:**
- **Frontend:** React, TypeScript, Tailwind CSS, Next.js, HTML/CSS
- **Backend:** Node.js, Express, PostgreSQL, MongoDB (if applicable)
- **Tools:** Git, GitHub Actions, Vite, ESLint, Figma
- **Soft Skills:** Problem-solving, Communication, Team collaboration

---

## ❓ Open Questions & Decisions

### Pending Decisions

#### Content & Design
- [ ] **Q1:** Should we use real photo or keep character illustration in Hero?
  - **Options:** Real photo, Character only, Toggle between both
  - **Owner:** Lukáš Kuťka
  - **Deadline:** Before launch
  - **Impact:** Brand identity

- [ ] **Q2:** Dark mode - Launch feature or Phase 2?
  - **Options:** Include in MVP, Add in Phase 2
  - **Pros MVP:** Better UX, modern standard
  - **Cons MVP:** Development time, design complexity
  - **Decision:** Phase 2 (prioritize core features first)

- [ ] **Q3:** Which analytics platform to use?
  - **Options:** Google Analytics 4, Plausible, None
  - **Considerations:** Privacy, GDPR compliance, features
  - **Recommendation:** Plausible (privacy-friendly)
  - **Status:** Pending budget approval

#### Technical
- [ ] **Q4:** Should we add unit tests before launch?
  - **Options:** Yes (delay launch), No (add later)
  - **Current Decision:** Add in Phase 2, focus on manual testing for MVP
  - **Risk:** Potential bugs in production

- [ ] **Q5:** Blog implementation approach?
  - **Options:** 
    - Static markdown files + build-time rendering
    - Headless CMS (Contentful, Sanity)
    - GitHub as CMS (markdown in repo)
  - **Recommendation:** Static markdown (simplest, no cost)
  - **Status:** For Phase 2 discussion

- [ ] **Q6:** CV/Resume format and hosting?
  - **Options:** 
    - PDF in public folder
    - Google Drive link
    - Embedded PDF viewer
    - Separate HTML resume page
  - **Decision Needed By:** Sprint 1
  - **Owner:** Lukáš Kuťka

#### Performance & SEO
- [ ] **Q7:** Image format strategy?
  - **Options:** WebP only, WebP + fallback, AVIF + WebP + fallback
  - **Current:** PNG for character image
  - **Recommendation:** WebP with PNG fallback
  - **Implementation:** vite-plugin-imagemin

- [ ] **Q8:** Should we add service worker for offline support?
  - **Benefits:** PWA capabilities, offline access
  - **Drawbacks:** Complexity, cache management
  - **Decision:** Phase 3 (advanced features)

### Questions for Stakeholders
- What are the top 3 projects to showcase initially?
- Is there an existing CV/resume file ready for download?
- Do we have high-quality project screenshots available?
- Should we include client testimonials? (do we have any?)
- What's the preferred contact response time expectation?

---

## 🔗 Assumptions & Dependencies

### Key Assumptions

#### User Behavior
- ✅ Target audience has modern browsers (Chrome, Firefox, Safari, Edge - last 2 versions)
- ✅ Majority of traffic will be desktop (60%) vs mobile (40%)
- ✅ Users expect fast load times (< 3 seconds)
- ✅ Users will primarily navigate via scroll, not menu
- ✅ Most visitors come from LinkedIn or GitHub

#### Technical
- ✅ GitHub Pages will remain free for public repositories
- ✅ EmailJS free tier (200 emails/month) is sufficient
- ✅ No backend required for MVP
- ✅ Vite and React 19 are stable for production
- ✅ Tailwind CSS 4 will remain compatible with Vite

#### Business
- ✅ Portfolio will be used primarily for job search (not freelance)
- ✅ Content will be updated manually (no CMS needed initially)
- ✅ No monetization required (no ads, no paid content)
- ✅ One-person project (no team coordination needed)

### External Dependencies

#### Third-Party Services
1. **EmailJS**
   - **Purpose:** Contact form email delivery
   - **Tier:** Free (200 emails/month)
   - **Risk:** Service downtime, rate limits
   - **Mitigation:** Display fallback email address if service fails
   - **Alternative:** FormSpree, Netlify Forms

2. **GitHub Pages**
   - **Purpose:** Hosting and deployment
   - **Tier:** Free
   - **Risk:** Service changes, downtime
   - **Mitigation:** Can migrate to Netlify/Vercel if needed
   - **Alternative:** Netlify, Vercel, Cloudflare Pages

3. **GitHub Actions**
   - **Purpose:** CI/CD pipeline
   - **Tier:** Free (2000 minutes/month)
   - **Risk:** Quota exceeded, service changes
   - **Mitigation:** Monitor usage, optimize build time
   - **Alternative:** GitLab CI, CircleCI

#### Content Dependencies
- **CV/Resume File:** Required for download feature
- **Project Screenshots:** Needed to replace emoji placeholders
- **Project Descriptions:** Written content for each project
- **Professional Bio:** About section content
- **Social Media Profiles:** Links for GitHub, LinkedIn

#### Design Dependencies
- **Figma Make Design:** Reference for implementation
- **Character Illustration:** PNG file (already have: kutis_01_final_transparent.png)
- **Brand Colors:** Defined in Tailwind config
- **Typography:** System fonts (no web font dependencies)

### Risk Assessment

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| EmailJS service downtime | Medium | High | Display fallback email, consider backup service |
| GitHub Pages policy change | Low | High | Monitor announcements, have migration plan |
| Browser compatibility issues | Low | Medium | Test on major browsers, use polyfills |
| Performance degradation | Medium | High | Regular Lighthouse audits, bundle size monitoring |
| Content outdated | High | Low | Schedule quarterly reviews and updates |
| Low initial traffic | High | Low | SEO optimization, social media promotion |
| Dependency vulnerabilities | Medium | Medium | Automated security updates, regular audits |

---

## 🚧 Known Issues & Limitations

### Current Limitations
1. **Project Images:** Using emoji placeholders instead of real screenshots
2. **Email Contact:** Requires EmailJS third-party service (no backend)
3. **Static Content:** No CMS, requires code changes for content updates
4. **No Backend:** Limited to static functionality

### Technical Debt
- TODO: Add proper project screenshots
- TODO: Implement automated testing suite
- TODO: Add analytics integration
- TODO: Optimize bundle size further
- TODO: Add service worker for offline support

---

## 📈 Roadmap & Future Enhancements

### Phase 1: MVP (Current) - Q1 2026 ✅
- [x] Core sections: Hero, About, Projects, Contact
- [x] Responsive design
- [x] EmailJS integration
- [x] GitHub Pages deployment
- [x] Contact form with EmailJS (deployed with GitHub Secrets)
- [ ] SEO optimization (meta tags, sitemap)
- [ ] Performance audit and Lighthouse score > 90

### Phase 2: Enhancement - Q2 2026
- [ ] Blog section with markdown support
- [ ] Project detail pages/modals
- [ ] Skills visualization (charts/graphs)
- [ ] Testimonials section
- [ ] Real project screenshots and demos
- [ ] Analytics integration
- [ ] SEO optimization (meta tags, sitemap, robots.txt)

### Phase 3: Advanced Features - Q3 2026
- [ ] Dark mode toggle
- [ ] i18n (Slovak/English)
- [ ] Admin panel for content management
- [ ] Backend API for advanced features
- [ ] Performance optimizations (service worker, caching)
- [ ] Automated testing suite

### Phase 4: Continuous Improvement
- [ ] A/B testing for conversion optimization
- [ ] Advanced animations and micro-interactions
- [ ] Accessibility audit and improvements
- [ ] Regular content updates
- [ ] Community features (comments, likes)

---

## 🔗 Related Documentation

- **[README.md](./README.md)** - Quick start guide and overview
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - GitHub Pages deployment instructions
- **[PERSONAL_CONFIG.md](./PERSONAL_CONFIG.md)** - Personal information configuration guide
- **[EMAILJS_SETUP.md](./EMAILJS_SETUP.md)** - EmailJS integration guide
- **[SECURITY.md](./SECURITY.md)** - Security policies and reporting
- **[.github/copilot-instructions.md](./.github/copilot-instructions.md)** - AI coding agent instructions

---

## 📞 Project Stakeholders

**Product Owner:** Lukáš Kuťka  
**Development Team:** Lukáš Kuťka + GitHub Copilot AI Agent  
**Target Users:** Recruiters, Clients, Developers  
**Deployment Platform:** GitHub Pages

---

## 📝 Change Log

### Version 1.0.0 - January 22, 2026
- Initial PRD creation
- Documented all implemented features
- Defined future roadmap
- Established technical requirements and architecture

---

**Document Status:** Living Document - Updated as project evolves  
**Next Review:** February 2026  
**Maintained By:** Project Team
