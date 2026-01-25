name: Bug Report
description: Nahlásiť chybu v aplikácii
labels: ["bug"]
assignees: []

body:
  - type: markdown
    attributes:
      value: |
        Ďakujeme za nahlásenie chyby! Prosím vypĺňajte všetky sekcie podrobne.

  - type: textarea
    id: description
    attributes:
      label: Popis chyby
      description: Čo presne nefunguje?
      placeholder: Popíšte problem jasne a stručne...
    validations:
      required: true

  - type: textarea
    id: steps
    attributes:
      label: Kroky na reprodukciu
      description: Ako sa chyba reprodukuje?
      placeholder: |
        1. Prejdite na...
        2. Kliknite na...
        3. Pozorujte...
      value: |
        1.
        2.
        3.
    validations:
      required: true

  - type: textarea
    id: expected
    attributes:
      label: Očakávané správanie
      description: Čo by sa malo stať?
      placeholder: Malo by sa...
    validations:
      required: true

  - type: textarea
    id: screenshots
    attributes:
      label: Screenshoty
      description: Pridajte screenshoty ak je relevantné
      placeholder: Kliknite a vyberte obrázok...

  - type: dropdown
    id: browser
    attributes:
      label: V akom prehliadači sa vyskytuje chyba?
      multiple: true
      options:
        - Chrome
        - Firefox
        - Safari
        - Edge
        - Iný

  - type: dropdown
    id: os
    attributes:
      label: Operačný systém
      options:
        - Windows
        - macOS
        - Linux
        - Iný

  - type: textarea
    id: environment
    attributes:
      label: Informácie o prostredí
      description: Verzia Node.js, npm, atď.
      placeholder: |
        npm: 10.x
        Node.js: 20.x
        Browser: Chrome 123.x

  - type: textarea
    id: context
    attributes:
      label: Dodatočný kontext
      description: Niečo ďalšie čo by sme mali vedieť?
      placeholder: Dodatočné informácie...
