# Component Creation Guide

Detailný guide na vytvorenie nových React komponentov pre projekt.

## 📝 Šablóna Komponenty

### Základná Šablóna

```typescript
// src/components/MyComponent.tsx
import { FC } from 'react';

interface MyComponentProps {
  title: string;
  description?: string;
  onAction?: () => void;
}

export function MyComponent({
  title,
  description,
  onAction,
}: MyComponentProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      {description && (
        <p className="text-gray-600 leading-relaxed">{description}</p>
      )}
      {onAction && (
        <button
          onClick={onAction}
          className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
        >
          Action
        </button>
      )}
    </div>
  );
}
```

## ✅ Checklist pri Vytváraní Komponenty

- [ ] Súbor je v `src/components/`
- [ ] Komponent je **funkčný** (nie class)
- [ ] Props majú **TypeScript interface**
- [ ] Vhodný názov súboru (PascalCase)
- [ ] Export je **named export** alebo **default**
- [ ] Tailwind CSS triedy z palety
- [ ] Responsive design (min. `md:` breakpoint)
- [ ] Dark mode support (ak relevantné)
- [ ] No `any` types
- [ ] ESLint kompatibilné (`npm run lint`)
- [ ] TypeScript strict (`npm run build`)

## 🎨 Styling Best Practices

### ✅ DO: Tailwind Utility Classes

```tsx
// Správne
<div className="px-6 py-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
  <h3 className="text-xl font-bold text-gray-900">Title</h3>
  <p className="text-gray-600 mt-2">Description</p>
</div>
```

### ❌ DON'T: Hardcoded Styles alebo CSS

```tsx
// Zle
<div style={{ padding: '24px', backgroundColor: '#fff' }}>
  {/* Nepoužívajte inline styles */}
</div>

<div className="custom-class">
  {/* Nedeľujte nové CSS classes - use Tailwind */}
</div>
```

### Farby - Dodržiavajte Paletu

```tsx
// ✅ Farby z palety
<h1 className="text-blue-600">Brand Blue</h1>
<p className="text-gray-600">Muted Text</p>
<div className="bg-gradient-to-r from-gray-900 to-blue-600">Gradient</div>

// ❌ Random farby
<h1 className="text-red-400">Wrong Color</h1>
<p className="text-green-800">Not in palette</p>
```

Viď: [TAILWIND_DESIGN_SYSTEM.md](../TAILWIND_DESIGN_SYSTEM.md)

## 🏗️ Struktura Komponenty

### Props Interface Návrh

```typescript
interface ComponentProps {
  // REQUIRED props (nahoré)
  id: string;
  title: string;
  
  // OPTIONAL props (dole)
  subtitle?: string;
  variant?: 'primary' | 'secondary';
  isLoading?: boolean;
  
  // CALLBACK props (na konci)
  onAction?: () => void;
  onChange?: (value: string) => void;
}
```

### Implementation Pattern

```typescript
export function Component({
  // Destructure props v poradí: required, optional, callbacks
  id,
  title,
  subtitle,
  variant = 'primary',
  isLoading = false,
  onAction,
}: ComponentProps) {
  // 1. State hooks (ak sú potrebné)
  const [state, setState] = useState<Type>();
  
  // 2. Effect hooks (ak sú potrebné)
  useEffect(() => {
    // Setup
    return () => {
      // Cleanup
    };
  }, [dependencies]);
  
  // 3. Event handlers
  const handleAction = () => {
    onAction?.();
  };
  
  // 4. Render
  return (
    <div className="space-y-4">
      {/* JSX */}
    </div>
  );
}
```

## 📱 Responsive Design

### Mobile-First Approach

```tsx
// ✅ Start mobile, then add desktop
<div className="flex flex-col gap-4 lg:flex-row lg:gap-8">
  <div className="w-full lg:w-1/2">Left</div>
  <div className="w-full lg:w-1/2">Right</div>
</div>

// ❌ Desktop-first (avoid)
<div className="flex flex-row gap-8 sm:flex-col sm:gap-4">
  {/* Bad practice */}
</div>
```

### Breakpoints Použité

```
sm:  640px   (small devices)
md:  768px   (tablets)
lg:  1024px  (desktops)
xl:  1280px  (large screens)
```

### Common Responsive Patterns

**Text Size:**
```tsx
<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
  Title
</h1>
```

**Spacing:**
```tsx
<div className="px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12">
  {/* Responsive padding */}
</div>
```

**Grid:**
```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
  {/* Responsive columns */}
</div>
```

**Hidden/Visible:**
```tsx
<div className="hidden sm:block">Only on small+</div>
<div className="block sm:hidden">Only on mobile</div>
```

## ✨ Animations

### Simple Animations (Tailwind)

```tsx
// Hover effects
<button className="hover:scale-105 transition-transform duration-300">
  Hover me
</button>

// Opacity
<div className="opacity-0 hover:opacity-100 transition-opacity">
  Fade in
</div>

// Loading spinner
<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500" />
```

### Complex Animations (motion/react)

```tsx
import { motion } from 'motion/react';

// Fade in
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
>
  Content
</motion.div>

// Scroll trigger
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  Content
</motion.div>

// Hover scale
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Click me
</motion.button>
```

## 🔄 State Management

### useState Hook

```typescript
// Simple state
const [isOpen, setIsOpen] = useState<boolean>(false);

// Object state
interface ModalState {
  isOpen: boolean;
  title: string;
  content: string;
}
const [modal, setModal] = useState<ModalState>({
  isOpen: false,
  title: '',
  content: ''
});

// Update state
setModal(prev => ({
  ...prev,
  isOpen: !prev.isOpen
}));
```

### useEffect Hook

```typescript
// On mount
useEffect(() => {
  // Initialize
}, []);

// On dependency change
useEffect(() => {
  // Do something when dependency changes
}, [dependency]);

// Cleanup
useEffect(() => {
  const handleResize = () => {
    // Handle event
  };
  
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);
```

## 🧪 Testing Checklist

Pred commit-om:

```bash
# 1. Lint check
npm run lint

# 2. Build check
npm run build

# 3. Manual testing
npm run dev
# - Check on mobile (DevTools)
# - Check dark mode
# - Test hover states
# - Test animations
# - Check contrast (accessibility)
```

## 🎯 TypeScript Best Practices

### ✅ Type Everything

```typescript
// ✅ Good
interface Props {
  items: Array<{ id: string; name: string }>;
  onSelect: (id: string) => void;
  isLoading: boolean;
}

// ❌ Bad
interface Props {
  items: any[];
  onSelect: Function;
  isLoading: any;
}
```

### Avoid `any`

```typescript
// ✅ Use proper types
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setValue(e.target.value);
};

// ❌ Don't use any
const handleChange = (e: any) => {
  setValue(e.target.value);
};
```

### Union Types

```typescript
// ✅ Good
type Variant = 'primary' | 'secondary' | 'ghost';

// ❌ Bad
type Variant = string;
```

## 📚 Component Examples

### Example 1: Card Component

```typescript
interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export function Card({ title, description, icon, onClick }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      onClick={onClick}
      className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer border border-gray-100"
    >
      {icon && <div className="text-blue-600 mb-4">{icon}</div>}
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
}
```

### Example 2: Section Component

```typescript
interface SectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export function Section({ title, subtitle, children }: SectionProps) {
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
          <div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
          <div>{children}</div>
        </motion.div>
      </div>
    </section>
  );
}
```

---

**Last Updated**: January 2026
**Project**: Kutis9.github.io Portfolio
