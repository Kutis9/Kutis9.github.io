# 🔒 Bezpečná Konfigurácia Osobných Údajov

## ⚠️ Bezpečnostný Prístup

Pre **public GitHub repozitáre** používame **rozdelený systém**:
- **`src/config/public.ts`** - VEREJNÉ údaje (môžu byť na GitHub)
- **`src/config/private.ts`** - CITLIVÉ údaje (NIKDY nie na GitHub)

## 📁 Štruktúra Súborov

```
src/config/
├── index.ts           # Hlavný import (kombinuje všetko)
├── public.ts          # ✅ Verejné údaje (safe for GitHub)
├── private.example.ts # 📝 Príklad privátnych údajov
└── private.ts         # 🔒 TVOJE citlivé údaje (v .gitignore)
```

## ✅ Verejné Údaje (`public.ts`)

**BEZPEČNÉ na commit do GitHub:**
```typescript
export const publicInfo = {
  name: "Vaše Meno",
  title: "Váš Titul", 
  location: "Slovakia", // Všeobecne, nie adresu!
  tagline: "Váš slogan",
  description: "Popis vašej práce",
  
  socialLinks: {
    github: "https://github.com/username",
    linkedin: "https://linkedin.com/in/profile",
    portfolio: "https://your-site.com"
  },
  
  availableForWork: true,
  resumeUrl: "/resume.pdf"
};
```

## 🔒 Privátne Údaje (`private.ts`)

**NIKDY necommitovať!** (v .gitignore)
```typescript
export const privateInfo = {
  email: "real.email@gmail.com", // Skutočný email
  phone: "+421 xxx xxx xxx",     // Telefón
  
  privateLinks: {
    // Akékoľvek privátne linky
  }
};
```

## 🚀 Ako Používať

### 1. Upraviť Verejné Údaje
```typescript
// src/config/public.ts
name: "Lukáš Kuťka" // ← Zmeňte tu vaše meno
```

### 2. Vytvoriť Privátny Súbor (lokálne)
```bash
# Skopírujte príklad
copy src/config/private.example.ts src/config/private.ts

# Upravte svoje citlivé údaje v private.ts
```

### 3. Automatické Kombinovanie
Hlavný súbor `index.ts` automaticky kombinuje:
- ✅ Verejné údaje z `public.ts`
- 🔒 Privátne údaje z `private.ts` (ak existuje)
- 🛡️ Bezpečné fallbacky (ak `private.ts` neexistuje)

## 🛡️ Bezpečnostné Funkcie

- **`.gitignore`** - blokuje commit `private.ts`
- **Bezpečné fallbacky** - ak nemáte `private.ts`
- **Žiadne citlivé údaje** - v public súboroch
- **Lokálne nastavenie** - citlivé údaje len na vašom PC

## 🔄 Zmena Údajov

**Verejné údaje:** Zmeňte v `public.ts` → commitnite
**Privátne údaje:** Zmeňte v `private.ts` → NIE commitovať

## ✨ Výhody

✅ **GitHub bezpečný** - žiadne citlivé údaje online
✅ **Lokálne funkčné** - všetky údaje dostupné
✅ **Jednoduché** - jedna zmena = všade aktuálne  
✅ **Flexibilné** - môžete mať rôzne údaje lokálne vs public

**Teraz môžete bezpečne zdieľať svoj repozitár! 🎉**