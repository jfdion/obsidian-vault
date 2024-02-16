---
tags:
  - "#code"
  - "#snippet"
  - "#bash"
language: bash
created: 2024-02-15 Thu
last_updated: 2024-02-15 Thu
---
# Installation
Installation + checkout des `dotfiles`. S'installe dans le dossier `/bin` relatif au dossier courant
```bash
sh -c "$(curl -fsLS get.chezmoi.io)" -- init --apply git@github.com:jfdion/dotfiles.git
```
https://www.chezmoi.io/install/#one-line-binary-install
## References
{reference}