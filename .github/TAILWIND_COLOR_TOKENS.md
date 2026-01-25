# Tailwind CSS Color Tokens Reference

Tento súbor obsahuje referenčné tokeny farieb a ich CSS hodnoty pre projekt.

## CSS Custom Properties (CSS Variables)

Všetky farby sú definované v `src/index.css` a sú prístupné cez CSS variables:

### Light Mode (Default)

```css
:root {
  /* Background & Foreground */
  --background: #ffffff;
  --foreground: oklch(0.145 0 0);  /* #030213 */
  
  /* Card Colors */
  --card: #ffffff;
  --card-foreground: oklch(0.145 0 0);
  
  /* Primary Brand Colors */
  --primary: #030213;
  --primary-foreground: oklch(1 0 0);  /* White */
  
  /* Secondary Colors */
  --secondary: oklch(0.95 0.0058 264.53);  /* Very light blue */
  --secondary-foreground: #030213;
  
  /* Muted States */
  --muted: #ececf0;  /* Light gray */
  --muted-foreground: #717182;  /* Medium gray */
  
  /* Accent Colors */
  --accent: #e9ebef;  /* Subtle accent */
  --accent-foreground: #030213;
  
  /* Border Color */
  --border: rgba(0, 0, 0, 0.1);
  
  /* Chart Colors */
  --chart-1: oklch(0.646 0.222 41.116);  /* Orange */
  --chart-2: oklch(0.6 0.118 184.704);   /* Blue */
  --chart-3: oklch(0.398 0.07 227.392);  /* Purple */
  
  /* Border Radius */
  --radius: 0.625rem;
}
```

### Dark Mode

```css
.dark {
  /* Background & Foreground */
  --background: oklch(0.145 0 0);  /* Very dark */
  --foreground: oklch(0.985 0 0);  /* Almost white */
  
  /* Card Colors */
  --card: oklch(0.145 0 0);
  --card-foreground: oklch(0.985 0 0);
  
  /* Primary Brand Colors */
  --primary: oklch(0.985 0 0);  /* Light */
  --primary-foreground: oklch(0.205 0 0);  /* Dark */
  
  /* Secondary Colors */
  --secondary: oklch(0.269 0 0);  /* Dark gray */
  --secondary-foreground: oklch(0.985 0 0);
  
  /* Muted States */
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);  /* Light gray */
  
  /* Accent Colors */
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  
  /* Border Color */
  --border: oklch(0.269 0 0);
  
  /* Chart Colors */
  --chart-1: oklch(0.488 0.243 264.376);  /* Purple-ish */
  --chart-2: oklch(0.696 0.17 162.48);    /* Cyan-ish */
  --chart-3: oklch(0.769 0.188 70.08);    /* Yellow-ish */
}
```

## Tailwind Farby - Dostupné v Projektoch

### Blue Palette (Primárny Brand)

```
blue-400    #60a5fa
blue-500    #3b82f6  ← Standard use
blue-600    #2563eb  ← Brand primary
blue-700    #1d4ed8
```

### Purple Palette (Gradients)

```
purple-500  #a855f7
purple-600  #9333ea  ← Gradient secondary
purple-700  #7e22ce
```

### Gray Palette (Text, Backgrounds)

```
gray-50     #f9fafb   ← Very light BG
gray-100    #f3f4f6   ← Light BG
gray-500    #6b7280   ← Disabled text
gray-600    #4b5563   ← Muted text
gray-700    #374151   ← Secondary text
gray-900    #111827   ← Primary text
```

### Accent Farby (Code Highlighting)

```
green-400   #4ade80   ← Code valid/success
green-300   #86efac
red-400     #f87171   ← Code error
cyan-400    #22d3ee   ← Code operators
yellow-300  #fcd34d   ← Code strings
```

## Tailwind Classes Reference

### Text Colors

```tailwindcss
/* Primary text */
text-gray-900      /* Nadpisy, primary text */
text-gray-700      /* Secondary text */
text-gray-600      /* Tertiary text, descriptions */
text-blue-600      /* Brand colored text, accents */

/* Hover states */
hover:text-gray-900    /* Default hover */
hover:text-blue-600    /* Brand hover */

/* Code/Technical */
text-green-400     /* Valid code */
text-blue-400      /* Code keywords */
```

### Background Colors

```tailwindcss
/* Light mode */
bg-white           /* Cards, containers */
bg-gray-50         /* Section backgrounds */
bg-gray-100        /* Subtle backgrounds */

/* Gradients */
from-blue-600 to-purple-600    /* Brand gradient */
from-gray-900 to-blue-600      /* Text gradient */

/* Dark mode backgrounds */
bg-gray-900        /* Dark card */
bg-gray-950        /* Dark background */

/* Code snippets */
bg-gray-900/95     /* Code block bg with transparency */
```

### Border Colors

```tailwindcss
border-gray-200         /* Light borders */
border-gray-300         /* Standard borders */
border-gray-700/50      /* Dark mode borders */
border-blue-600         /* Accent borders */
```

### Text Gradients

```tailwindcss
bg-gradient-to-r from-gray-900 to-blue-600
bg-clip-text text-transparent
```

## Kombinácie pre Spoločné Prvky

### Hero Title (s nameňovaným slovom)

```tsx
<h1 className="text-5xl lg:text-6xl font-bold">
  Lukáš <span className="text-blue-600">Kuťka</span>
</h1>
```

### Section Header s Gradientom

```tsx
<h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
  Section Title
</h2>
```

### Floating Code Snippet

```tsx
<div className="bg-gray-900/95 backdrop-blur-sm text-green-400 px-3 py-2 rounded-lg shadow-xl border border-gray-700/50 font-mono text-xs">
  <span className="text-blue-400">git</span> <span className="text-green-300">commit</span>
</div>
```

### Navigation Link Hover

```tsx
<button className="text-gray-600 hover:text-gray-900 transition-colors duration-300 relative group">
  Link
  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300" />
</button>
```

### Muted Text

```tsx
<p className="text-gray-600 text-lg leading-relaxed">
  Description text
</p>
```

## Color Usage Guidelines

### ✅ DO Use

- `blue-600` pre brand primary color a accents
- `gray-900` / `gray-700` / `gray-600` pre text hierarchy
- `purple-600` pre gradient secondary
- `gray-50` / `bg-white` pre backgrounds
- Farby z palety za konzistenciu

### ❌ DON'T Use

- Random Tailwind farby mimo palety
- Hardkódované hex farby - vždy Tailwind class
- Príliš veľa rôznych farieb v jednom komponente
- Kontrastné farby bez testovania accessibility

## Accessibility Notes

### Contrast Ratios

```
✅ WCAG AA (4.5:1+)
- text-gray-900 on bg-white
- text-white on bg-blue-600
- text-gray-600 on bg-white (large text)

⚠️ Check Carefully
- text-gray-600 on gray-50 (too light)
- text-gray-700 on gray-100 (too light)

❌ WCAG Fail
- text-gray-400 on bg-white (insufficient contrast)
```

### Testing Tools

- WebAIM Contrast Checker: https://webaim.org/resources/contrastchecker/
- Tailwind Color Contrast: Use browser DevTools

## Dark Mode Implementation

Všetky komponenty by mali automaticky podporovať dark mode:

```tsx
/* Light mode (default) */
<div className="bg-white text-gray-900">

/* Dark mode - Tailwind automaticky prepne farby */
<div className="dark:bg-gray-900 dark:text-white">
```

Dark mode CSS variables sa automaticky aplikujú na `.dark` class.

---

**Updated**: January 2026
**Project**: Kutis9.github.io Portfolio
