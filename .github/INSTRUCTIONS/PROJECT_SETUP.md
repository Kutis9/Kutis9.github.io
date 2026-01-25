# Project Setup Instructions

Komplétny guide na nastavenie vývojového prostredia pre Kutis9.github.io projekt.

## ⚙️ Predpoklady

- **Node.js**: v20+ (https://nodejs.org/)
- **npm**: v10+ (príde s Node.js)
- **Git**: v2.40+ (https://git-scm.com/)
- **VS Code**: Odporúčané (https://code.visualstudio.com/)

## 🚀 Inicializácia Projektu

### 1. Klonujte Repository

```bash
git clone https://github.com/Kutis9/Kutis9.github.io.git
cd Kutis9.github.io
```

### 2. Inštalujte Závislosti

```bash
npm install
```

Toto nainštaluje všetky potrebné balíčky vrátane:
- **React 19.1.1** - UI framework
- **TypeScript 5.8.3** - Type checking
- **Vite 7.1.7** - Build tool
- **Tailwind CSS 4** - Styling
- **ESLint 9.x** - Code linting
- **motion/react** - Animations
- **lucide-react** - Icons

### 3. Spustite Vývojový Server

```bash
npm run dev
```

Server budú dostupný na: **http://localhost:5173**

## 📋 Dostupné Príkazy

### Vývoj

```bash
npm run dev        # Start development server s HMR
```

### Build

```bash
npm run build      # TypeScript check + Vite build (production)
npm run preview    # Náhľad produkčného buildu lokálne
```

### Code Quality

```bash
npm run lint       # ESLint + TypeScript kontrola
```

## 📁 Štruktúra Projektu

```
src/
├── App.tsx                    # Main application component
├── main.tsx                   # React entry point
├── index.css                  # Global styles
├── App.css                    # App-specific styles
├── components/
│   ├── Hero.tsx              # Hero section component
│   ├── Navigation.tsx        # Navigation component
│   ├── About.tsx             # About section
│   ├── Projects.tsx          # Projects section
│   ├── Contact.tsx           # Contact section
│   ├── Footer.tsx            # Footer component
│   └── ui/                   # Reusable UI components
│       └── button.tsx        # Button component
├── assets/                   # Images, icons, static files
└── config/
    ├── index.ts              # Config exports
    ├── public.ts             # Public configuration
    └── private.example.ts    # Template for private config

.github/
├── INSTRUCTIONS/             # Project instructions
├── workflows/
│   └── deploy.yml           # GitHub Actions deployment
├── CONTRIBUTING.md          # Development guidelines
├── AGENT_WORKFLOW.md        # AI agent instructions
├── TAILWIND_DESIGN_SYSTEM.md # Design system
├── copilot-instructions.md  # Copilot instructions

vite.config.ts               # Vite configuration
tsconfig.json                # TypeScript base config
tsconfig.app.json            # TypeScript app config
tsconfig.node.json           # TypeScript build tools config
eslint.config.js             # ESLint configuration
package.json                 # Dependencies & scripts
```

## ⚙️ Konfigurácia

### Environment Variables

Ak potrebujete env variables, vytvorte `.env.local`:

```bash
# .env.local (git ignored)
VITE_API_URL=https://api.example.com
VITE_PUBLIC_KEY=your_public_key
```

Prístup v kóde:

```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

### TypeScript Configuration

Projekt používa **strict mode**:

```json
{
  "compilerOptions": {
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  }
}
```

### ESLint Configuration

ESLint je nakonfigurovaný v `eslint.config.js` s pravidlami pre:
- TypeScript
- React (React 19)
- Recommended best practices

## 🎨 Tailwind CSS Setup

Tailwind CSS 4 je integrovaný cez `@tailwindcss/vite` plugin.

**Konfigurácia:**
- Vite plugin automaticky spracováva CSS
- Farby sú definované v `src/index.css`
- Dark mode je dostupný (`.dark` class)

Viď: [TAILWIND_DESIGN_SYSTEM.md](../TAILWIND_DESIGN_SYSTEM.md)

## 🔐 Citlivé Údaje

Ak potrebujete citlivé údaje (API keys, emailJS config, atď):

1. Skopírujte `src/config/private.example.ts`:
   ```bash
   cp src/config/private.example.ts src/config/private.ts
   ```

2. Vyplňte vaše hodnoty v `src/config/private.ts`

3. Súbor `private.ts` je v `.gitignore` - nebude commited

## 🧪 Testing vDev Režime

```bash
# Dev server s HMR
npm run dev

# Otvorte http://localhost:5173
# Zmeny sa odrážajú ihneď v prehliadači
```

## 🏗️ Build Pipeline

Build proces má dve fázy:

1. **TypeScript Compilation**: `tsc -b`
   - Overuje types
   - Kontroluje za errory

2. **Vite Bundling**: `vite build`
   - Bundluje kód
   - Optimalizuje assets
   - Generuje production bundle v `dist/`

```bash
npm run build  # Spustí obe fázy
```

## 📦 GitHub Pages Deployment

Projekt je nakonfigurovaný pre GitHub Pages:

- **Base URL**: `/` (kutis9.github.io)
- **Output folder**: `dist/`
- **Deployment**: GitHub Actions (`.github/workflows/deploy.yml`)

Deployment je automatický pri pushnutí do `main` branch.

## 🐛 Debugging

### VS Code Setup

1. Inštalujte rozšírenia:
   - **ES7+ React/Redux/React-Native snippets** (dsznajder.es7-react-js-snippets)
   - **Tailwind CSS IntelliSense** (bradlc.vscode-tailwindcss)
   - **TypeScript Vue Plugin** (Vue.vscode-typescript-vue-plugin)

2. Použite VS Code debugger:
   - Stlačte F5 na start debugging
   - Breakpointy sa zastavia v VS Code

### Browser DevTools

1. Otvorte Developer Tools (F12)
2. React DevTools extension pre React debugging
3. Console na TypeScript errory

## 🚨 Common Issues

### Port 5173 je obsadený

```bash
# Použite iný port
npm run dev -- --port 3000
```

### Module not found errory

```bash
# Vyčistite node_modules a reinstalujte
rm -r node_modules package-lock.json
npm install
```

### TypeScript errory pri build

```bash
# Overujte strict mode compliance
npm run build

# Skontrolujte console na errory
```

## 📚 Ďalšie Dokumenty

- [CONTRIBUTING.md](../CONTRIBUTING.md) - Development workflow
- [AGENT_WORKFLOW.md](../AGENT_WORKFLOW.md) - Práca s AI agentmi
- [TAILWIND_DESIGN_SYSTEM.md](../TAILWIND_DESIGN_SYSTEM.md) - Design system
- [DEPLOYMENT.md](../../DEPLOYMENT.md) - Production deployment

## 🔗 Užitočné Linky

- **Node.js**: https://nodejs.org/
- **React 19**: https://react.dev
- **TypeScript**: https://www.typescriptlang.org/
- **Vite**: https://vitejs.dev
- **Tailwind CSS**: https://tailwindcss.com
- **GitHub Pages**: https://pages.github.com/

---

**Last Updated**: January 2026
**Project**: Kutis9.github.io Portfolio
