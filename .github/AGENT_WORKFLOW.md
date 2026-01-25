# Agent Workflow Guidelines

Tento dokument definuje ako efektívne pracovať s AI agentmi (napr. GitHub Copilot Coding Agent).

## Pre AI agentov - Projekt Kontext

### Technologický Stack
- **React 19.1.1** s TypeScript 5.8.3
- **Vite 7.1.7** ako bundler
- **Tailwind CSS 4** na styling
- **ESLint 9.x** na code quality
- **GitHub Pages** ako hosting

### Zásady kódu

1. **Strict TypeScript Mode**
   - `noUnusedLocals: true`
   - `noUnusedParameters: true`
   - Všetko musí mať explicitné typy

2. **React Komponenty**
   - Len funkčné komponenty
   - Props cez TypeScript interface
   - Default export pre komponenty
   - `.tsx` extension

3. **Štýlovanie**
   - Tailwind CSS 4 utility classes
   - Tailwind pre komponenty v `src/components/`
   - Globálne štýly v `src/index.css`

## Špecifikácia úlohy pre agenta

Pri delegácii úlohy agentovi, použite tento formát:

### Šablóna úlohy

```markdown
## Objektív
[Jasný popis čo treba vytvoriť/opraviť]

## Požiadavky
- [ ] React 19 funkčná komponenta v TypeScript
- [ ] Props typované cez interface/type
- [ ] Strict TypeScript mode
- [ ] Tailwind CSS 4 styling
- [ ] ESLint compatible

## Príklady a referenčný kód
[Linky na podobné komponenty alebo kód]

## Acceptanční kritériá
- npm run build bez chýb
- npm run lint bez problémov
- ESLint prechádza
- TypeScript bez type errorov

## Poznámky
[Ďalšie špecifiká projektu]
```

### Príklad úlohy

```markdown
## Objektív
Vytvoriť nový "Projects" komponent na src/components/Projects.tsx

## Požiadavky
- React 19 funkčná komponenta
- Zobrazuje array projektov s obrázkami, titulkami a linkmi
- Responsive dizajn pre mobile
- TypeScript strict mode

## Props Interface
```typescript
interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  tags: string[];
}

interface ProjectsProps {
  projects: Project[];
}
```

## Styling
Tailwind CSS 4 - grid layout pre mobile-first design

## Acceptanční kritériá
- npm run build ✅
- npm run lint ✅
- Komponent sa dá importovať a použiť v App.tsx
- TypeScript bez erroru
```

## Git Workflow s Agentmi

### PR vytvorenie agentom

1. Agent vytvorí nový branch: `feature/nazev-funkce`
2. Vytvori Pull Request s popisom zmien
3. Automatické checks prídajú status
4. Human review + merge

### Komunikácia s agentom

```
Agent: "Vytváram komponent..."
Human: "Prosím uprav typ `title` na `string | undefined` a uprav validation"
Agent: "Aktualizujem..."
```

## Kontrolný zoznam pre Code Review

Keď agent vytvorí PR, overujte:

- ✅ TypeScript `strict: true` bez erroru
- ✅ ESLint prechádza cez `npm run lint`
- ✅ Build prechádza: `npm run build`
- ✅ Komponent sú jasne typované
- ✅ Tailwind CSS triedy sú korektné
- ✅ Commit správy sú jasné
- ✅ PR description je detailný

## Best Practices s Agentmi

### DO ✅
- Poskytnite jasný kontext a špecifikácie
- Referencujte existujúce komponenty ako príklady
- Popíšte očakávaný design/layout
- Uveďte acceptanční kritériá

### DON'T ❌
- Nejasné alebo vágne požiadavky
- Žiadny kontext o projekte/stack
- Ignorovanie TypeScript errorov
- Zabudnutie na responsive design

## Užitočné príkazy pre debugging

```bash
# Overenie TypeScript
npm run build

# Linting a code quality
npm run lint

# Lokálny vývoj
npm run dev

# Produkčný náhľad
npm run preview
```

## Kontakt na majitele repo

**Maintainer**: @Kutis9

---

Vďaka za spoluprácu s AI agentmi! 🤖✨
