# 🔒 Bezpečná Konfigurácia Osobných Údajov

## ⚠️ GitHub Pages Ready Konfigurácia

**Pre GitHub Pages používame čisto verejné údaje** pre bezproblémové fungovanie.

### 📁 Hlavné Súbory:

- **`src/config/public.ts`** ✅ - Všetky vaše verejné údaje
- **`src/config/index.ts`** ✅ - Hlavný export (importuje len public.ts)

### � Ako Upraviť Svoje Údaje:

**Editujte `src/config/public.ts`:**
```typescript
export const publicInfo = {
  name: "Vaše Meno",                    // ← Zmeňte tu
  title: "Váš Titul",
  location: "Vaša Krajina",
  
  // VEREJNÝ kontakt (čo chcete zdieľať)
  email: "contact@vasa-domena.sk",      // ← Profesionálny email
  phone: "",                            // ← Necháte prázdne ak nechcete
  
  socialLinks: {
    github: "https://github.com/username",
    linkedin: "https://linkedin.com/in/profile",
    portfolio: "https://vasa-stranka.sk"
  }
};
```

### ✅ Čo je Bezpečné Zdieľať:

- **Meno/pseudonym** - vaše profesionálne meno
- **Titul** - pozícia/špecializácia  
- **Krajina/región** - nie adresu!
- **Profesionálny email** - pre kontakt
- **Verejné social media** - GitHub, LinkedIn, portfolio
- **Profesionálne slogany** - vaše motto

### ❌ Čo NIKDY nezdieľať verejne:

- Osobný email (gmail, atď.)
- Telefónne číslo (ak nie profesionálne)
- Domácu adresu
- Súkromné údaje

### 🎯 Výhody Tohto Systému:

✅ **GitHub Pages funguje** - žiadne import chyby  
✅ **Žiadne citlivé údaje** - všetko je bezpečné  
✅ **Profesionálne** - vhodné pre kariéru  
✅ **Jednoduché** - jedna zmena = všade aktuálne

### � Pre Lokálny Development:

Ak chcete lokálne **iné údaje** než na GitHub Pages:
1. Vytvorte `src/config/private.ts` (gitignored)
2. Upravte `src/config/index.ts` na lokálne importovanie

**Ale pre GitHub Pages je súčasné riešenie optimálne! 🎉**