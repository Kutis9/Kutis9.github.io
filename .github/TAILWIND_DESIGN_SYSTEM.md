# Tailwind CSS Design System

Tento dokument definuje kompletný design system a farbebnú paletu pre projekt Kutis9.github.io. Všetky nové komponenty a šablóny by mali dodržiavať tieto pravidlá na konzistentnosť.

---

## 🎨 Farbebná Paleta

### Primárna Paleta

| Farba | Hex/OKLCH | Popis | Použitie |
|-------|-----------|--------|---------|
| **Primary Dark** | `#030213` (oklch) | Tmavá farbebná primárna | Text v light mode, pozadia v dark mode |
| **Primary Light** | `#ffffff` | Biela | Background, karty v light mode |
| **Blue Brand** | `#0066cc` / `rgb(0, 102, 204)` | Modrá značka | Accenty, hover efekty, principais prvky |
| **Purple Accent** | `rgb(147, 51, 234)` | Purpurová | Gradienty, decoratívne prvky |

### Sekundárna Paleta

| Farba | Hex | Popis | Použitie |
|-------|-----|--------|---------|
| **Gray 100** | `#ececf0` | Svetlo šedá | Muted backgrounds, disabled states |
| **Gray 600** | `#717182` | Stredná šedá | Muted text, secondary labels |
| **Gray 700** | `#434355` | Tmavšia šedá | Secondary text |
| **Gray 900** | `#0f0f1a` | Takmer čierna | Primary text |

### Dark Mode Paleta

```css
Dark Mode Base Colors:
--background: oklch(0.145 0 0)        /* Tmavé pozadie */
--foreground: oklch(0.985 0 0)        /* Svetlý text */
--card: oklch(0.145 0 0)              /* Tmavá karta */
--card-foreground: oklch(0.985 0 0)   /* Svetlý text v kartách */
--primary: oklch(0.985 0 0)           /* Svetlá primárna */
--primary-foreground: oklch(0.205 0 0) /* Tmavý text na primárnej */
--secondary: oklch(0.269 0 0)         /* Tmavá sekundárna */
--secondary-foreground: oklch(0.985 0 0) /* Svetlý text */
--muted: oklch(0.269 0 0)             /* Muted backgrounds */
--muted-foreground: oklch(0.708 0 0)  /* Muted text */
--accent: oklch(0.269 0 0)            /* Accent backgrounds */
--accent-foreground: oklch(0.985 0 0) /* Accent text */
--border: oklch(0.269 0 0)            /* Borders in dark */
```

### Gradient Kombinacie

**Primárny Gradient:**
```tailwindcss
from-blue-600 to-purple-600
/* Použitie: Nadpisy, call-to-action prvky, brand elementy */
```

**Sekundárny Gradient:**
```tailwindcss
from-gray-900 to-blue-600
/* Použitie: Titulky, texty, subtle akcenty */
```

**Code Snippet Gradient (Dark Mode):**
```tailwindcss
bg-gray-900/95 border-gray-700/50
/* Použitie: Code snippety, hover elementy, fancy boxov */
```

---

## 📐 Typography

### Font Stack

```css
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

### Veľkosti a Váhy

| Element | Size | Weight | Tailwind Trieda |
|---------|------|--------|-----------------|
| **H1** | 3.75rem (60px) | 700 bold | `text-5xl lg:text-6xl font-bold` |
| **H2** | 2.25rem (36px) | 700 bold | `text-4xl font-bold` |
| **H3** | 1.875rem (30px) | 600 semibold | `text-3xl font-semibold` |
| **Body Large** | 1.125rem (18px) | 400 normal | `text-lg text-gray-600` |
| **Body** | 1rem (16px) | 400 normal | `text-base text-gray-700` |
| **Small** | 0.875rem (14px) | 400 normal | `text-sm text-gray-500` |
| **Mono** | 0.75rem (12px) | 400 normal | `font-mono text-xs` |

### Line Heights

```tailwindcss
/* Nadpisy */
leading-tight

/* Body text */
leading-relaxed

/* Code / Mono */
leading-normal
```

---

## 🎯 Komponenty a ich Štýly

### Hero Sekcia

**Nadpis:**
```tsx
<h1 className="text-5xl lg:text-6xl font-bold">
  Lukáš <span className="text-blue-600">Kuťka</span>
</h1>
```

**Sekcia Text:**
```tsx
<p className="text-gray-600 text-lg leading-relaxed max-w-lg">
  Váš popis...
</p>
```

**Code Snippet (Floating):**
```tsx
<div className="bg-gray-900/95 backdrop-blur-sm text-green-400 px-3 py-2 rounded-lg shadow-xl border border-gray-700/50 font-mono text-xs">
  <span className="text-blue-400">git</span> <span className="text-green-300">commit</span>
</div>
```

**Animácia Hero prvkov:**
```tsx
import { motion } from 'motion/react';

<motion.div 
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
  {/* Obsah */}
</motion.div>
```

### Navigation

**Nav Item (Desktop):**
```tsx
<button className="text-gray-600 hover:text-gray-900 transition-colors duration-300 relative group">
  Link Text
  <motion.span
    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"
  />
</button>
```

**Logo Section:**
```tsx
<div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
  <span className="text-white font-bold">LK</span>
</div>
```

**Nav Background (Scrolled):**
```tailwindcss
md:bg-white/80 md:backdrop-blur-md transition-all duration-300
```

### Section Headers

**Standard Section Title:**
```tsx
<h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
  About Me
</h2>
```

### Buttons

**Primary Button (Custom UI):**
```tsx
<Button 
  variant="outline" 
  className="group relative overflow-hidden"
>
  <span className="relative z-10">Click Me</span>
  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
</Button>
```

### Cards a Containers

**Standard Container:**
```tailwindcss
container mx-auto px-6
```

**Section Spacing:**
```tailwindcss
py-20 /* Vertikálny padding */
gap-12 /* Gap medzi položkami */
```

**Grid Layout (Hero):**
```tsx
<div className="grid lg:grid-cols-2 gap-12 items-center">
  {/* Obsah */}
</div>
```

### Loading States

**Loading Spinner:**
```tsx
<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
```

---

## 🌓 Dark Mode Support

### Implementácia

Dark mode je vstavený v `:root` CSS. Triedy a farby sa automaticky prispôsobia v dark režime.

**Light Mode (Default):**
```css
:root {
  --background: #ffffff;
  --foreground: #030213;
  --primary: #030213;
  --accent: #e9ebef;
}
```

**Dark Mode:**
```css
.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --primary: oklch(0.985 0 0);
  --accent: oklch(0.269 0 0);
}
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Tailwind | Width | Použitie |
|-----------|----------|-------|---------|
| Mobile | `sm:` | 640px | Telefóny |
| Tablet | `md:` | 768px | Tablety |
| Desktop | `lg:` | 1024px | Desktop |
| Wide | `xl:` | 1280px | Wide screens |

### Responsive Príklady

```tsx
/* Text size na mobile a desktop */
className="text-5xl lg:text-6xl"

/* Hidden na mobile, viditeľný na desktop */
className="hidden md:flex"

/* Container spacing */
className="px-6 sm:px-8 lg:px-12"

/* Grid na mobile vs desktop */
className="grid lg:grid-cols-2 gap-8"
```

---

## ✨ Animácie a Transitions

### Motion Library (motion/react)

**Fade In Animation:**
```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
>
  Content
</motion.div>
```

**Slide In Animation:**
```tsx
<motion.div
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
  Content
</motion.div>
```

**View Animation (Scroll Trigger):**
```tsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  Content
</motion.div>
```

**Hover Effects:**
```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Click me
</motion.button>
```

### Tailwind Transitions

**Color Transitions:**
```tailwindcss
transition-colors duration-300
```

**All Properties:**
```tailwindcss
transition-all duration-300
```

**Opacity:**
```tailwindcss
transition-opacity duration-300
```

---

## 🎭 Color Paleta v Tailwind Kontexte

### Tailwind Farby (Štandardná Paleta)

```tailwindcss
/* Blues */
blue-500    /* #3b82f6 - Akcenty */
blue-600    /* #2563eb - Primary brand color */

/* Purples */
purple-600  /* #9333ea - Gradients */

/* Grays */
gray-50     /* #f9fafb - Almost white backgrounds */
gray-100    /* #f3f4f6 - Light backgrounds */
gray-600    /* #4b5563 - Muted text */
gray-700    /* #374151 - Secondary text */
gray-900    /* #111827 - Primary text */

/* Code Snippet Farby */
green-400   /* #4ade80 - Code text */
blue-400    /* #60a5fa - Code keywords */
red-400     /* #f87171 - Code errors */
yellow-300  /* #fcd34d - Code strings */
cyan-400    /* #22d3ee - Code operators */
purple-400  /* #c084fc - Code tags */
```

---

## 📋 Kontrolný Zoznam pre Nové Komponenty

Pri vytváraní nových komponentov, dodržiavajte:

- [ ] **Farby**: Použiť iba z tejto palety (blue-600, purple-600, gray-* rad)
- [ ] **Typography**: Dodržiavať definované veľkosti (text-5xl, text-lg, atď.)
- [ ] **Spacing**: Použiť py-20, gap-12, px-6 štandardy
- [ ] **Responsive**: Minimálne `md:` breakpoint pre desktop zmeny
- [ ] **Animations**: Použiť motion/react pre komplexné animácie
- [ ] **Dark Mode**: Testovať komponenty v dark režime
- [ ] **Hover States**: Implementovať hover efekty pre interaktívne prvky
- [ ] **Accessibility**: Primerané contrast ratio, ARIA labels

---

## 🚀 Praktické Príklady

### Príklad 1: Nový Card Komponent

```tsx
import { motion } from 'motion/react';

interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export function Card({ title, description, icon }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
    >
      {icon && <div className="mb-4 text-blue-600">{icon}</div>}
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
}
```

### Príklad 2: Nová Sekcia s Gradientom

```tsx
import { motion } from 'motion/react';

export function NewSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
            Section Title
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Section description with proper spacing and typography.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
```

### Príklad 3: Button Variant

```tsx
interface ActionButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

export function ActionButton({ label, onClick, variant = 'primary' }: ActionButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`
        px-6 py-2 rounded-lg font-semibold transition-all duration-300
        ${variant === 'primary'
          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg'
          : 'border-2 border-gray-300 text-gray-900 hover:border-blue-600 hover:text-blue-600'
        }
      `}
    >
      {label}
    </motion.button>
  );
}
```

---

## 📚 Referencie

- **Tailwind CSS Docs**: https://tailwindcss.com/docs
- **Motion/React**: https://motion.dev/docs/react
- **Color Reference**: https://tailwindcss.com/docs/customizing-colors
- **Responsive Design**: https://tailwindcss.com/docs/responsive-design

---

**Last Updated**: January 2026
**Project**: Kutis9.github.io
**Maintainer**: @Kutis9
