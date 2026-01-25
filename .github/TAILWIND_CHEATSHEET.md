# Tailwind Classes Cheat Sheet

Rýchly referenčný sprievodca najčastejšie používanými Tailwind klasami v projekte.

## 📏 Veľkosti a Spacing

### Font Sizes

```tailwindcss
text-xs      /* 12px - Malý text, code */
text-sm      /* 14px - Labels, small text */
text-base    /* 16px - Body text */
text-lg      /* 18px - Large body text */
text-xl      /* 20px - Headings */
text-2xl     /* 24px - Section headers */
text-3xl     /* 30px - Large headers */
text-4xl     /* 36px - Big headers */
text-5xl     /* 48px - Hero titles */
text-6xl     /* 60px - Main hero title */
```

### Padding & Margin

```tailwindcss
px-4         /* Padding left-right 16px */
px-6         /* Padding left-right 24px */
py-8         /* Padding top-bottom 32px */
py-20        /* Padding top-bottom 80px */
p-6          /* All sides 24px */

mx-auto      /* Horizontal center */
mt-4         /* Margin top 16px */
mb-8         /* Margin bottom 32px */
gap-4        /* Gap between items 16px */
gap-8        /* Gap between items 32px */
gap-12       /* Gap between items 48px */
```

### Width & Height

```tailwindcss
w-8          /* Width 32px */
h-8          /* Height 32px */
w-10 h-10    /* Square 40x40px */
w-full       /* 100% width */
max-w-lg     /* Max width large */
max-w-2xl    /* Max width 2x large */
max-w-7xl    /* Max width 7x large */
```

## 🎨 Farby & Gradients

### Text Colors

```tailwindcss
text-gray-900       /* Black text */
text-gray-700       /* Dark gray text */
text-gray-600       /* Gray text */
text-blue-600       /* Blue text (brand) */
text-green-400      /* Green text (code) */
text-white          /* White text */
```

### Background Colors

```tailwindcss
bg-white            /* White background */
bg-gray-50          /* Very light gray BG */
bg-gray-100         /* Light gray BG */
bg-gray-900         /* Dark background */
bg-blue-600         /* Blue background */
bg-gradient-to-r    /* Gradient right */
bg-gradient-to-b    /* Gradient bottom */
```

### Gradients

```tailwindcss
from-blue-600 to-purple-600              /* Brand gradient */
from-gray-900 to-blue-600                /* Text gradient */
from-blue-500/20 to-purple-600/20        /* Transparent gradient */
```

### Border Colors

```tailwindcss
border-gray-200     /* Light border */
border-gray-700     /* Dark border */
border-gray-700/50  /* Semi-transparent */
border-blue-600     /* Blue border */
```

## 🏗️ Layout

### Display & Flex

```tailwindcss
flex                /* Flex container */
flex-col            /* Column direction */
items-center        /* Vertical align center */
justify-center      /* Horizontal align center */
justify-between     /* Distribute items */
gap-4               /* Gap between items */

grid                /* Grid container */
grid-cols-1         /* 1 column grid */
lg:grid-cols-2      /* 2 columns on large screens */
```

### Responsive

```tailwindcss
hidden              /* Hidden by default */
md:flex              /* Show on medium+ screens */
lg:text-6xl          /* Larger text on large screens */
px-6 sm:px-8 lg:px-12  /* Progressive padding */
```

### Position

```tailwindcss
relative            /* Relative positioning */
absolute            /* Absolute positioning */
fixed               /* Fixed positioning */
top-0               /* Top position */
right-0             /* Right position */
z-10                /* Z-index 10 */
z-50                /* Z-index 50 (nav) */
```

## ✨ Effects & Transitions

### Shadows

```tailwindcss
shadow              /* Default shadow */
shadow-lg           /* Large shadow */
shadow-xl           /* Extra large shadow */
hover:shadow-lg     /* Shadow on hover */
```

### Opacity & Blur

```tailwindcss
opacity-0           /* 0% opacity */
opacity-50          /* 50% opacity */
opacity-100         /* 100% opacity */
bg-gray-900/95      /* 95% opacity */
backdrop-blur-sm    /* Small blur */
backdrop-blur-md    /* Medium blur */
```

### Transitions

```tailwindcss
transition-all           /* All properties animated */
transition-colors        /* Only colors animated */
transition-opacity       /* Only opacity animated */
duration-300             /* Animation duration 300ms */
```

### Animations

```tailwindcss
animate-spin        /* Spinning animation */
animate-pulse       /* Pulsing animation */
group-hover:        /* Group hover effects */
```

## 🔛 Border & Radius

### Border

```tailwindcss
border              /* 1px border */
border-2            /* 2px border */
rounded-lg          /* Large radius 8px */
rounded-xl          /* Extra large radius 12px */
rounded-full        /* Full radius (circle) */
```

## 📝 Typography

### Font Weight

```tailwindcss
font-normal         /* 400 weight */
font-semibold       /* 600 weight */
font-bold           /* 700 weight */
```

### Line Height

```tailwindcss
leading-tight       /* Compact lines */
leading-normal      /* Normal lines */
leading-relaxed     /* Loose lines */
```

### Text Decoration

```tailwindcss
underline           /* Text underline */
line-through        /* Strikethrough */
bg-clip-text        /* Clip to text for gradients */
text-transparent    /* Transparent text color */
```

## 🖱️ Hover & Interactive

### Hover States

```tailwindcss
hover:text-gray-900      /* Hover text color */
hover:bg-gray-50         /* Hover background */
hover:scale-105          /* Scale up on hover */
hover:shadow-lg          /* Shadow on hover */
hover:opacity-80         /* Opacity on hover */
group-hover:scale-100    /* Parent hover effect */
```

### Cursor & States

```tailwindcss
cursor-pointer      /* Pointer cursor */
disabled:opacity-50 /* Disabled state */
```

## 🔥 Common Patterns

### Hero Title

```tailwindcss
text-5xl lg:text-6xl font-bold
```

### Section Header

```tailwindcss
text-4xl font-bold bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent
```

### Body Text

```tailwindcss
text-lg text-gray-600 leading-relaxed max-w-lg
```

### Muted Text

```tailwindcss
text-sm text-gray-500
```

### Container

```tailwindcss
container mx-auto px-6
```

### Card

```tailwindcss
bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100
```

### Button

```tailwindcss
px-6 py-2 rounded-lg font-semibold transition-all duration-300
```

### Navigation Link

```tailwindcss
text-gray-600 hover:text-gray-900 transition-colors duration-300
```

### Code Snippet

```tailwindcss
bg-gray-900/95 backdrop-blur-sm text-green-400 px-3 py-2 rounded-lg shadow-xl border border-gray-700/50 font-mono text-xs
```

## 📱 Responsive Examples

### Text Size Progressive

```tailwindcss
text-2xl sm:text-3xl md:text-4xl lg:text-5xl
```

### Spacing Progressive

```tailwindcss
px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20
```

### Grid Progressive

```tailwindcss
grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8
```

### Visibility Progressive

```tailwindcss
hidden sm:block md:hidden lg:block  /* Show/hide pattern */
```

## 🎯 Quick Copy Patterns

### Full Width Section

```tsx
<section className="w-full py-20 bg-gray-50">
  <div className="container mx-auto px-6">
    {/* Content */}
  </div>
</section>
```

### Centered Content

```tsx
<div className="flex items-center justify-center min-h-screen">
  {/* Content */}
</div>
```

### 2-Column Grid

```tsx
<div className="grid lg:grid-cols-2 gap-12 items-center">
  {/* Left */}
  {/* Right */}
</div>
```

### Flexbox Row with Gap

```tsx
<div className="flex flex-col md:flex-row gap-8">
  {/* Items */}
</div>
```

### Text with Gradient

```tsx
<h1 className="text-6xl font-bold bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
  Title
</h1>
```

---

**Tip**: Skombinujte triedy podľa potreby. Tailwind je *utility-first* framework!

**Last Updated**: January 2026
