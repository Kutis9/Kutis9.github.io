name: Code Review Guidelines
description: Smernice pre review kódu
assignees: []

body:
  - type: markdown
    attributes:
      value: |
        # Smernice pre AI agentov a reviewerov

        Tento dokument definuje očakávania pre code review v tomto projekte.

  - type: markdown
    attributes:
      value: |
        ## Kontrolný zoznam pre reviewera

        ### TypeScript & Code Quality
        - [ ] Všetky premenné sú corektne typované
        - [ ] Žiadne `any` typy bez odsúhlasenia
        - [ ] Strict mode je dodržiavaný
        - [ ] ESLint prechádza bez chýb

        ### React Best Practices
        - [ ] Komponenty sú funkčné (nie class components)
        - [ ] Hooks sú správne používané
        - [ ] Props sú typované cez interfacy/type
        - [ ] Bez nepotreby re-renderovania

        ### Performance
        - [ ] Žiadne zbytočné re-renders
        - [ ] useMemo/useCallback používané vhodne
        - [ ] Veľkosť bundle nezväčšená nevyhodne

        ### Build & Deployment
        - [ ] `npm run build` prechádza bez chýb
        - [ ] `npm run lint` prechádza bez problémov
        - [ ] Žiadne TypeScript errory
        - [ ] `npm run preview` funguje korektne

        ### Documentation
        - [ ] Zložité funkcie majú JSDoc komentáre
        - [ ] README.md je aktualizovaný
        - [ ] Názvy sú deskriptívne a jasné

        ### Git & Commit
        - [ ] Commit správy sú jasné a popisné
        - [ ] Branch je freshne aktualizovaný z main
        - [ ] Žiadne zbytočné súbory nie sú committed
