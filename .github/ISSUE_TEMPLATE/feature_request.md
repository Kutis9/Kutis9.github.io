name: Feature Request
description: Navrhnite novú funkcionalitu
labels: ["enhancement"]
assignees: []

body:
  - type: markdown
    attributes:
      value: |
        Ďakujeme za návrh! Pomôžte nám pochopiť vašu predstavu.

  - type: textarea
    id: problem
    attributes:
      label: Problém ktorý riešite
      description: Aký problém by táto funkcionalita riešila?
      placeholder: Chýba mi...
    validations:
      required: true

  - type: textarea
    id: solution
    attributes:
      label: Vaše riešenie
      description: Ako by to malo fungovať?
      placeholder: Návrhujem...
    validations:
      required: true

  - type: textarea
    id: alternatives
    attributes:
      label: Alternatívne riešenia
      description: Existujú iné prístupy?
      placeholder: Ďalšie možnosti...

  - type: dropdown
    id: priority
    attributes:
      label: Priorita
      options:
        - Low
        - Medium
        - High
        - Critical
    validations:
      required: true

  - type: textarea
    id: context
    attributes:
      label: Dodatočný kontext
      description: Screenshoty, linky, info...
      placeholder: Ďalšie detaily...

  - type: checkboxes
    id: affected
    attributes:
      label: Dotknuté časti aplikácie
      options:
        - label: Hero sekcia
        - label: Navigácia
        - label: About sekcia
        - label: Projekty
        - label: Kontakt
        - label: Footer
        - label: Celý dizajn
