# GitHub Pages Deployment Guide

## Automatický Deployment

Projekt je nakonfigurovaný pre automatický deployment na GitHub Pages pomocou GitHub Actions.

### Konfigurácia:
- **Base URL**: `/` (root domain)
- **Build Output**: `dist/` priečinok
- **Homepage**: `https://Kutis9.github.io/`

### GitHub Actions Workflow:
1. **Build Job**: Inštalácia dependencií, TypeScript kompilácia, Vite build
2. **Deploy Job**: Upload build artifacts na GitHub Pages

### Deployment sa spúšťa automaticky pri:
- Push na `main` branch
- Pull request na `main` branch
- Manuálne cez GitHub Actions tab

## Lokálne testovanie produkčnej verzie:
```bash
npm run build    # Build aplikácie
npm run preview  # Preview produkčnej verzie lokálne
```

## GitHub Repository Nastavenia:
1. Choďte do **Settings** → **Pages**
2. Source: **GitHub Actions**
3. Workflow sa automaticky spustí po push na main branch

## URL aplikácie po deployment:
`https://Kutis9.github.io/`