# Next Steps & Implementation Plan
**Portfolio Project - Lukáš Kuťka**

**Last Updated:** January 22, 2026  
**Current Status:** MVP Complete - Pre-Launch Phase  
**Target Launch:** Q1 2026

---

## 📊 Current Status Overview

### ✅ Completed (MVP Core Features)
- [x] Hero section with animated character
- [x] About section with introduction
- [x] Projects showcase (3 placeholder projects)
- [x] Contact form with EmailJS integration
- [x] Responsive navigation with mobile menu
- [x] Footer with social links
- [x] Fully responsive design (mobile/tablet/desktop)
- [x] GitHub Pages deployment pipeline
- [x] TypeScript strict mode compliance
- [x] EmailJS configured via GitHub Secrets

### ⚠️ In Progress / Blockers
- [ ] **SEO meta tags** - Required for launch
- [ ] **Performance optimization** - Target Lighthouse > 90
- [ ] **Real project screenshots** - Currently using emoji placeholders

### 🎯 Ready for Launch After
1. SEO implementation
2. Performance audit passed
3. Contact form production test

---

## 🚀 Sprint 1: Pre-Launch Preparation
**Goal:** Production-ready MVP with professional polish  
**Duration:** 1-2 days  
**Priority:** P0 (Must complete before launch)

### Task 1.1: SEO Meta Tags Implementation ⭐ START HERE
**Priority:** P0 | **Estimate:** 2 hours | **Status:** Not Started

**Objective:** Add essential SEO metadata for professional web presence and social media sharing.

**Implementation Checklist:**
- [ ] Add Open Graph meta tags (LinkedIn/Facebook previews)
  - `og:title` - "Lukáš Kuťka - Full Stack Developer Portfolio"
  - `og:description` - Portfolio description
  - `og:image` - Social preview image (1200x630px)
  - `og:url` - https://Kutis9.github.io/
  - `og:type` - "website"
- [ ] Add Twitter Card meta tags
  - `twitter:card` - "summary_large_image"
  - `twitter:title`, `twitter:description`, `twitter:image`
- [ ] Update page title and meta description
- [ ] Add favicon (multiple sizes: 16x16, 32x32, 180x180)
- [ ] Create `robots.txt` (allow indexing)
- [ ] Add canonical URL
- [ ] Add language attribute (`lang="en"`)

**Files to Modify:**
- `index.html` - Add meta tags in `<head>`
- `public/favicon.ico` - Add favicon files
- `public/robots.txt` - Create robots.txt

**Success Criteria:**
- ✅ LinkedIn preview shows correct title, description, and image
- ✅ Twitter card validation passes
- ✅ Lighthouse SEO score > 95

**Dependencies:** None

---

### Task 1.2: Performance Optimization & Lighthouse Audit
**Priority:** P0 | **Estimate:** 4 hours | **Status:** Not Started

**Objective:** Achieve Lighthouse score > 90 in all categories (Performance, Accessibility, Best Practices, SEO).

**Step-by-Step Process:**
1. **Run Initial Audit**
   - [ ] Open DevTools → Lighthouse tab
   - [ ] Run audit on production build (`npm run preview`)
   - [ ] Document current scores

2. **Performance Optimizations**
   - [ ] Analyze bundle size (`npm run build` output)
   - [ ] Lazy load images (if needed)
   - [ ] Optimize character illustration (WebP format)
   - [ ] Check for unused dependencies
   - [ ] Enable Vite compression plugin
   - [ ] Minimize render-blocking resources

3. **Accessibility Improvements**
   - [ ] Add alt text to all images
   - [ ] Check color contrast ratios (WCAG AA)
   - [ ] Verify keyboard navigation works
   - [ ] Add ARIA labels where needed
   - [ ] Test with screen reader (NVDA/JAWS)

4. **Best Practices**
   - [ ] Update to HTTPS (GitHub Pages enforces)
   - [ ] Remove console.log statements in production
   - [ ] Verify no security vulnerabilities (`npm audit`)

**Target Scores:**
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 95
- SEO: > 95

**Files to Review:**
- All components (accessibility)
- `vite.config.ts` (optimization plugins)
- `package.json` (unused dependencies)

**Success Criteria:**
- ✅ All Lighthouse scores > 90
- ✅ No critical accessibility violations
- ✅ Fast load time on 4G connection (< 3s)

**Dependencies:** SEO meta tags completed

---

### Task 1.3: Production Contact Form Testing
**Priority:** P0 | **Estimate:** 30 minutes | **Status:** Not Started

**Objective:** Verify EmailJS integration works correctly in production environment.

**Testing Steps:**
1. **Deploy Current Version**
   - [ ] Push to main branch (triggers GitHub Actions)
   - [ ] Wait for deployment to complete
   - [ ] Verify live URL: https://Kutis9.github.io/

2. **Functional Testing**
   - [ ] Navigate to Contact section
   - [ ] Fill out form with test data
   - [ ] Submit and verify loading state
   - [ ] Check for success message
   - [ ] Verify email arrives in inbox
   - [ ] Check email content/formatting

3. **Error Testing**
   - [ ] Test with invalid email format
   - [ ] Test with empty fields
   - [ ] Verify error messages display correctly

4. **Rate Limiting Test**
   - [ ] Submit multiple requests quickly
   - [ ] Verify throttle (10 second delay) works

**Success Criteria:**
- ✅ Email received successfully
- ✅ All form validation works
- ✅ Error handling displays correctly
- ✅ Rate limiting prevents spam

**Dependencies:** Deployment pipeline working

---

## 📅 Sprint 2: Content Enhancement
**Goal:** Replace placeholder content with real projects  
**Duration:** 1 week  
**Priority:** P1 (Should have for professional launch)

### Task 2.1: Real Project Content Preparation
**Priority:** P1 | **Estimate:** 6 hours | **Status:** Not Started

**Objective:** Gather content for 3 real projects to showcase.

**Content Needed per Project:**

#### Project Selection Criteria:
- Projects that demonstrate technical skills
- Have live demos or GitHub repos
- Show variety of technologies
- Professional quality

#### For Each Project (3 total):
- [ ] **Project Name** - Clear, concise title
- [ ] **Description** - 150-300 words explaining:
  - Problem solved
  - Your role
  - Key features
  - Technologies used
  - Outcomes/results
- [ ] **Screenshots** - Minimum 3 images:
  - Hero image (1200x600px)
  - Detail shots (800x450px)
  - Mobile view (optional)
- [ ] **Tech Stack** - List of technologies
- [ ] **Links:**
  - Live demo URL (if available)
  - GitHub repository (if public)
  - Case study (optional)

**Screenshot Requirements:**
- High resolution (retina-ready)
- Professional presentation
- Show key features/UI
- Optimized for web (WebP format)

**Success Criteria:**
- ✅ 3 complete projects documented
- ✅ All screenshots ready and optimized
- ✅ Live demos accessible
- ✅ Content reviewed for typos

**Dependencies:** None (can work in parallel)

---

### Task 2.2: Update Projects Component
**Priority:** P1 | **Estimate:** 2 hours | **Status:** Not Started

**Objective:** Replace emoji placeholders with real project data and images.

**Implementation:**
1. **Update Data Structure**
   - [ ] Create `src/data/projects.ts` with project data
   - [ ] Define TypeScript interface for Project type
   - [ ] Export projects array

2. **Add Project Images**
   - [ ] Add images to `src/assets/projects/`
   - [ ] Import images in projects data
   - [ ] Optimize with vite-plugin-imagemin

3. **Update Projects.tsx Component**
   - [ ] Import real project data
   - [ ] Replace emoji with `<img>` tags
   - [ ] Add image loading states
   - [ ] Update links to real URLs
   - [ ] Add hover effects on images

4. **Responsive Images**
   - [ ] Add srcset for different screen sizes
   - [ ] Lazy load images below fold
   - [ ] Add loading="lazy" attribute

**Files to Modify:**
- `src/data/projects.ts` (create new)
- `src/components/Projects.tsx`
- `src/assets/projects/` (add images)

**Success Criteria:**
- ✅ All 3 projects display real screenshots
- ✅ Links work correctly
- ✅ Images load fast and responsive
- ✅ No layout shift during image loading

**Dependencies:** Task 2.1 completed (content ready)

---

## 🎨 Sprint 3: Advanced Features (Optional)
**Goal:** Enhance user experience with additional features  
**Duration:** 2 weeks  
**Priority:** P2 (Nice to have)

### Task 3.1: Skills Section
**Priority:** P2 | **Estimate:** 4 hours

**Features:**
- Technology icons/logos
- Skill categorization (Frontend, Backend, Tools)
- Visual representation (skill bars or badges)
- Responsive grid layout

**Technologies to Include:**
- Frontend: React, TypeScript, Tailwind CSS, HTML/CSS
- Backend: Node.js (if applicable)
- Tools: Git, GitHub Actions, Vite, ESLint, Figma

---

### Task 3.2: CV/Resume Download
**Priority:** P2 | **Estimate:** 2 hours

**Implementation:**
- [ ] Create PDF resume
- [ ] Add to `public/` folder
- [ ] Update Hero "Download CV" button functionality
- [ ] Track download analytics (optional)

---

### Task 3.3: Analytics Integration
**Priority:** P2 | **Estimate:** 3 hours

**Options:**
- **Google Analytics 4** - Full-featured, free
- **Plausible** - Privacy-friendly, paid
- **GitHub Pages built-in** - Basic stats

**Metrics to Track:**
- Page views
- Session duration
- Contact form submissions
- Most viewed projects
- Traffic sources

---

### Task 3.4: Dark Mode Toggle
**Priority:** P2 | **Estimate:** 8 hours

**Implementation:**
- [ ] Add theme toggle button
- [ ] Dark color palette design
- [ ] Update all components for dark mode
- [ ] Save preference to localStorage
- [ ] System preference detection

---

## 📈 Sprint 4: Blog & Advanced Content
**Goal:** Add blog functionality for technical writing  
**Duration:** 2-3 weeks  
**Priority:** P2 (Future enhancement)

### Task 4.1: Blog Section Setup
**Priority:** P2 | **Estimate:** 12 hours

**Technology Options:**
- Markdown files + build-time rendering
- MDX for interactive content
- Headless CMS integration (Contentful/Sanity)

**Features:**
- Blog post listing
- Individual post pages
- Code syntax highlighting
- Reading time estimate
- Categories/tags
- RSS feed

**Planned Articles (from PRD):**
1. "Building a Modern Portfolio with React 19 and TypeScript"
2. "Tailwind CSS 4: What's New and How to Migrate"
3. "EmailJS Integration: Contact Forms Without a Backend"
4. "Deploying to GitHub Pages with GitHub Actions"
5. "Accessibility Best Practices for React Applications"

---

## 🔍 Quality Checklist Before Launch

### Pre-Deployment Verification
- [ ] All TypeScript errors resolved (`npm run build`)
- [ ] ESLint passes with no errors (`npm run lint`)
- [ ] All images optimized
- [ ] Meta tags implemented correctly
- [ ] Lighthouse scores > 90 (all categories)
- [ ] Contact form tested in production
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile responsive on real devices
- [ ] All links working (no 404s)
- [ ] Console has no errors in production
- [ ] GitHub Actions deployment successful

### Content Review
- [ ] No typos in visible text
- [ ] Personal information accurate
- [ ] Social links working
- [ ] Professional tone maintained
- [ ] Images have proper alt text
- [ ] Copyright year current (2026)

### Performance Checks
- [ ] First Contentful Paint < 1.5s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Time to Interactive < 3.5s
- [ ] Bundle size < 300KB gzipped
- [ ] No render-blocking resources

---

## 📊 Success Metrics

### Launch Metrics (Week 1)
- [ ] Website live and accessible
- [ ] Zero critical bugs reported
- [ ] Contact form working (at least 1 test submission)
- [ ] Lighthouse score documented

### Growth Metrics (Month 1)
- [ ] At least 3 real projects showcased
- [ ] 50+ unique visitors
- [ ] 2+ contact form submissions
- [ ] Shared on LinkedIn with engagement

### Long-term Goals (Quarter 1)
- [ ] Blog section with 2+ articles
- [ ] 200+ unique visitors
- [ ] 5+ contact form inquiries
- [ ] Featured in portfolio showcases

---

## 🚨 Known Blockers & Risks

### Current Blockers
1. **Real Projects Content** - Waiting for project screenshots and descriptions
2. **Professional Photo** - Decision needed: keep character or add real photo?
3. **CV File** - Resume/CV needs to be prepared for download feature

### Risk Mitigation
| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| EmailJS quota exceeded | Low | Medium | Monitor usage, upgrade plan if needed |
| Performance degradation | Medium | High | Regular Lighthouse audits |
| Content delays launch | High | Medium | Launch with placeholders, update later |
| Browser compatibility issues | Low | Medium | Test on major browsers before launch |

---

## 🎯 Recommended Next Action

### **Immediate Priority: Task 1.1 - SEO Meta Tags**

**Why start here:**
- ✅ Quick win (2 hours)
- ✅ No external dependencies
- ✅ Critical for professional launch
- ✅ Improves social media sharing immediately

**Command to start:**
```bash
# Open index.html and add meta tags
code index.html
```

**After SEO is done:**
1. Run Lighthouse audit (Task 1.2)
2. Test contact form in production (Task 1.3)
3. **LAUNCH!** 🚀
4. Work on real projects content (Task 2.1)

---

## 📞 Questions & Decisions Needed

### Immediate Decisions
- [ ] **Q1:** Use character illustration or real photo in Hero?
- [ ] **Q2:** Which 3 projects to showcase first?
- [ ] **Q3:** When to create CV/resume for download?

### Future Decisions
- [ ] **Q4:** Dark mode in v1.0 or v2.0?
- [ ] **Q5:** Blog implementation approach?
- [ ] **Q6:** Analytics platform choice?
- [ ] **Q7:** Multi-language support (Slovak/English)?

---

## 📚 Related Documentation

- **[PRD.md](./PRD.md)** - Complete product requirements
- **[README.md](./README.md)** - Quick start and development
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - GitHub Pages deployment
- **[EMAILJS_SETUP.md](./EMAILJS_SETUP.md)** - Contact form setup
- **[PERSONAL_CONFIG.md](./PERSONAL_CONFIG.md)** - Personal info configuration

---

**Document Status:** Living Document - Update after each sprint  
**Next Review:** After Sprint 1 completion  
**Owner:** Lukáš Kuťka
