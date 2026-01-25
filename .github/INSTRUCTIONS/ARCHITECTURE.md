# Architecture Overview

Dokumentácia architektonického návrhu projektu Kutis9.github.io.

## 📐 High-Level Architecture

```
┌─────────────────────────────────────┐
│         React 19 Application        │
│  (src/App.tsx - Main Entry Point)   │
└────────┬────────────────────────────┘
         │
         ├─ Navigation Component ─────┐
         │                            ├─ Reusable UI Components
         ├─ Hero Section ─────────────┤  (src/components/ui/)
         │                            │
         ├─ About Section ────────────┤
         │                            ├─ Tailwind CSS 4
         ├─ Projects Section ─────────┤
         │                            ├─ motion/react Animations
         ├─ Contact Section ──────────┤
         │                            ├─ lucide-react Icons
         └─ Footer Component ─────────┘
                    │
         ┌──────────┴──────────┐
         │                     │
    src/config/          src/assets/
  (Configuration)      (Static Files)
```

## 🗂️ Komponenty Struktura

### `src/components/`

**Sekčné Komponenty:**

```
Navigation.tsx
- Fixed navigation header
- Responsive mobile menu
- Smooth scroll linking
- Dark mode support

Hero.tsx
- Main landing section
- Profile image
- Call-to-action
- Floating code snippets (desktop/mobile)
- Animation effects

About.tsx
- Personal introduction
- Description section
- Skill highlights (future)

Projects.tsx
- Portfolio projects grid
- Project cards with descriptions
- Link to projects
- Responsive layout

Contact.tsx
- Contact form or links
- Email/social integration
- Call-to-action

Footer.tsx
- Copyright info
- Social links
- Navigation links
```

**UI Komponenty (`src/components/ui/`):**

```
button.tsx
- Reusable button component
- Multiple variants (primary, secondary, outline)
- TypeScript props interface
- Tailwind CSS styling
```

### `src/config/`

**Konfiguračné Moduly:**

```
index.ts
- Central export point for all config
- Aggregates public and private config

public.ts
- Public configuration
- Personal info (name, location, links)
- Social media URLs
- Public API endpoints

private.example.ts
- Template for private config
- EmailJS credentials (template)
- API keys (template)
- Database credentials (template)
```

## 🔄 Data Flow

### Component Data Flow

```
App.tsx (Main Component)
  │
  ├─ props/config data ─→ Navigation
  │
  ├─ props/config data ─→ Hero
  │
  ├─ props/state data ──→ Projects
  │
  └─ props/config data ─→ Contact
```

### Configuration Flow

```
src/config/index.ts (Central Export)
  │
  ├─ exports from public.ts
  │   (Public configuration)
  │
  └─ exports from private.ts (if exists)
      (Private configuration)
  
  Imported in components:
  import { personalInfo, contactConfig } from '../config'
```

### Styling Flow

```
index.css (Global Styles)
│
├─ CSS Custom Properties (Colors)
├─ Dark mode variables
└─ Base Tailwind imports

App.css (Component-Specific)
│
└─ Portfolio-specific styles

Component Level:
├─ Tailwind utility classes (className)
├─ motion/react for animations
└─ Inline styles (minimal)
```

## 🎯 Component Design Patterns

### Functional Components

Všetky komponenty sú **funkčné komponenty**:

```typescript
export function MyComponent({ prop }: Props) {
  const [state, setState] = useState<Type>();
  
  return (
    <div className="tailwind-classes">
      {/* JSX */}
    </div>
  );
}
```

**Nie sú tu:**
- Class components
- React.FC typedef (používame implicitný return type)

### Props Typing

```typescript
interface ComponentProps {
  // Required props
  title: string;
  onAction: () => void;
  
  // Optional props
  description?: string;
  variant?: 'primary' | 'secondary';
}

export function Component({ title, description }: ComponentProps) {
  // Implementation
}
```

### Lazy Loading

Komponenty sú lazy-loaded v `App.tsx`:

```typescript
const Projects = lazy(() => 
  import('./components/Projects').then(m => ({ default: m.Projects }))
);

<Suspense fallback={<ComponentLoader />}>
  <Projects />
</Suspense>
```

**Výhody:**
- Rýchlejšie loading Hero section
- Lepší performance na mobile
- Progressive rendering

## 🎨 Styling Architecture

### CSS Custom Properties (Variables)

V `src/index.css`:

```css
:root {
  --primary: #030213;
  --background: #ffffff;
  /* ... ďalšie farby */
}

.dark {
  --primary: oklch(0.985 0 0);
  /* ... dark mode farby */
}
```

### Tailwind CSS Integration

```
@tailwindcss/vite plugin
↓
Tailwind CSS 4 directives
↓
Utility classes v Components
↓
Generated CSS bundle
```

### Design Tokens

- **Colors**: Tailwind color utilities + CSS variables
- **Typography**: text-* utility classes
- **Spacing**: px-*, py-*, gap-* utilities
- **Effects**: shadow, opacity, animations

Viď: [TAILWIND_DESIGN_SYSTEM.md](../TAILWIND_DESIGN_SYSTEM.md)

## 🔄 Animation Architecture

### motion/react Integration

```typescript
import { motion } from 'motion/react';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  Animated Content
</motion.div>
```

**Animácie v Projekte:**
- **Page Load**: Fade-in animations (Hero, Navigation)
- **Scroll**: whileInView triggers na About, Projects
- **Hover**: scale effects na buttons a cards
- **Code Snippets**: Floating animations v Hero

## 📦 Build Architecture

### Vite Build Process

```
Source Code (src/)
    ↓
TypeScript Compilation (tsc -b)
    ↓
Vite Bundling
    ├─ Code splitting (React vendor, motion vendor, ui vendor)
    ├─ Asset optimization (images → WebP)
    └─ CSS splitting
    ↓
Production Build (dist/)
```

### Code Splitting Strategy

Vite automaticky splituje kód na chunks:

```javascript
manualChunks: {
  'react-vendor': ['react', 'react-dom'],
  'motion-vendor': ['motion/react'],
  'ui-vendor': ['lucide-react']
}
```

**Výhody:**
- Lepšie caching
- Paralelné loading
- Rýchlejší initial load

## 🌓 Dark Mode Architecture

### Implementation

```css
/* Light mode (default) */
:root { --background: #ffffff; }

/* Dark mode */
.dark { --background: oklch(0.145 0 0); }
```

**Aktivácia:**
- `.dark` class na `<html>` alebo parent element
- Tailwind `dark:` utilities prepínajú štýly

### Component Usage

```tsx
<div className="bg-white dark:bg-gray-900">
  {/* Automaticky sa zmení pri dark mode */}
</div>
```

## 🚀 Deployment Architecture

### GitHub Pages

```
Local Repository (git push)
    ↓
GitHub Actions Workflow (.github/workflows/deploy.yml)
    ↓
npm run build (Generate dist/)
    ↓
Deploy to gh-pages branch
    ↓
GitHub Pages Server
    ↓
Live at: https://kutis9.github.io
```

**Base URL:** `/` (rooted v domene)

## 📊 Performance Considerations

### Optimization Strategies

1. **Lazy Loading**: Components sú lazy-loaded
2. **Code Splitting**: Vendor chunks sú separované
3. **Image Optimization**: WebP conversion, compression
4. **CSS Optimization**: PurgeCSS removes unused styles
5. **Asset Inlining**: Malé assets sú inlined

### Performance Metrics

Target metrics:
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

## 🔒 Security Considerations

### Private Configuration

```typescript
// public.ts - SAFE
export const personalInfo = {
  name: 'Lukáš Kuťka',
  email: 'public@example.com'
};

// private.ts - .gitignore
export const emailJSConfig = {
  serviceId: 'PRIVATE_KEY',
  templateId: 'PRIVATE_KEY'
};
```

### Environment Variables

```bash
# .env.local - .gitignore
VITE_PUBLIC_KEY=public_only
VITE_SECRET_KEY=never_exposed  # Neexistuje - všetky env sú public
```

⚠️ **NIKDY** neputujte secrets do `VITE_*` variables!

## 📚 References

- [PROJECT_SETUP.md](PROJECT_SETUP.md) - Setup instructions
- [CONTRIBUTING.md](../CONTRIBUTING.md) - Development workflow
- [TAILWIND_DESIGN_SYSTEM.md](../TAILWIND_DESIGN_SYSTEM.md) - Design system

---

**Last Updated**: January 2026
**Project**: Kutis9.github.io Portfolio
