# Development Workflow

Tento projekt je individuálny portfólio projekt. Nasledujúce smernice popisujú pracovný postup pri vývoji a spolupráci s AI agentmi.

## Princípy projektu

- **TypeScript-first**: Všetok kód musí byť napísaný v TypeScript so strict mode
- **React 19 + Hooks**: Používame funkčné komponenty s modernými React vzormi
- **Type safety**: Všetky props a state musia mať definované typy
- **Component-based**: Modulárna architektúra s jasným delením zodpovednosti
- **Tailwind CSS 4**: Utility-first styling pre konzistentný dizajn

## Príprava vývojového prostredia

```bash
# Inštalujte závislosti
npm install

# Spustite vývojový server
npm run dev

# Spustite ESLint kontroly
npm run lint

# Vytvorte produkčný build
npm run build

# Náhľad produkčného buildu
npm run preview
```

## Osobný Pracovný Postup

### 1. Plánovaní Zmien

Pri plánovaní zmien:
- Jasne definujte čo chcete zmeniť/pridať
- Referencujte relevantné komponenty v `src/components/`
- Zvoľte vhodný prístup (ručný vývoj vs. AI agent)

### 2. Vytvorenie Branch

```bash
git checkout -b feature/popis-funkcnosti
# alebo
git checkout -b fix/popis-bugy
```

### 3. Vývoj a Testovanie

```bash
npm run dev      # Vývoj s HMR
npm run lint     # Overenie TypeScript a ESLint
npm run build    # Build pre produkciu
npm run preview  # Náhľad finálneho buildu
```

### 4. Commit Správy

```
feat: Pridať nový komponent Hero sekcie
fix: Opraviť TypeScript error v Navigation komponente
docs: Aktualizovať README s novými inštrukciami
style: Formatovať kód podľa ESLint pravidiel
refactor: Optimalizovať Performance v Contact komponente
```

## Práca s AI Agentmi

Detailný guide je v [AGENT_WORKFLOW.md](AGENT_WORKFLOW.md)

### Špecifikácia Úlohy

Keď delegujete AI agentovi úlohu:

1. **Objektív** - Jasne popíšte čo treba vytvoriť/opraviť
2. **Technické požiadavky**:
   - React 19 funkčný komponent v TypeScript
   - Strict mode TypeScript bez erroru
   - Tailwind CSS 4 styling
   - ESLint compatible

3. **Referenčný kód** - Poskytnite príklady podobných komponentov
4. **Acceptanční kritériá**:
   - `npm run build` ✅ bez chýb
   - `npm run lint` ✅ bez problémov
   - TypeScript ✅ bez erroru
   - Komponent je usable v App.tsx

### Príklad Špecifikácie

```markdown
## Objektív
Vytvoriť nový "Projects" komponent

## Požiadavky
- React 19 funkčný komponent v TypeScript
- Props: projects (array), onProjectClick (function)
- Responsive design (mobile-first)
- Tailwind CSS 4 styling

## Príklady
Skontrolujte Hero.tsx a About.tsx ako referenčné komponenty

## Acceptanční Kritériá
- npm run build ✅
- npm run lint ✅
- Žiadny TypeScript error
- Dodržiavaná farbebná paleta (TAILWIND_DESIGN_SYSTEM.md)
```

## Architekturálne Smernice

### Komponenty (`src/components/`)

```tsx
import { FC } from 'react';

interface MyComponentProps {
  title: string;
  onClick?: () => void;
}

export function MyComponent({ title, onClick }: MyComponentProps) {
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={onClick}>Click</button>
    </div>
  );
}
```

**Pravidlá:**
- Funkčné komponenty iba
- TypeScript interface pre props
- Default alebo named export
- Jeden súbor = jedna komponenta

### Konfigurácia (`src/config/`)

- `public.ts` - Verejné nastavenia
- `private.example.ts` - Template pre citlivé údaje
- `index.ts` - Centrálny export

## Štýlovanie

**Pravidlá:**
- Tailwind CSS 4 triedy v `className`
- Reusable komponenty v `src/components/ui/`
- Globálne štýly v `src/index.css`
- Komponenty špecifické štýly v `src/App.css`
- Dodržiavať farbebnú paletu z [TAILWIND_DESIGN_SYSTEM.md](TAILWIND_DESIGN_SYSTEM.md)

## Kontrolný Zoznam pred Commit-om

- [ ] `npm run lint` prechádza bez erroru
- [ ] `npm run build` prechádza bez erroru
- [ ] TypeScript strict mode bez problémov
- [ ] Nové komponenty majú TypeScript types
- [ ] Tailwind CSS triedy z palety
- [ ] Responsive design testovaný
- [ ] Dark mode support (ak relevantné)
- [ ] Commit správa je jasná

## Ďalšie Pomôcky

- [AGENT_WORKFLOW.md](AGENT_WORKFLOW.md) - Ako pracovať s AI agentmi
- [TAILWIND_DESIGN_SYSTEM.md](TAILWIND_DESIGN_SYSTEM.md) - Farbebná paleta a štýly
- [TAILWIND_CHEATSHEET.md](TAILWIND_CHEATSHEET.md) - Rýchla referencia Tailwind tried
- **TypeScript Handbook**: https://www.typescriptlang.org/docs/
- **React 19 Docs**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com

---

**Project**: Kutis9.github.io Portfolio
**Owner**: @Kutis9
**Last Updated**: January 2026
