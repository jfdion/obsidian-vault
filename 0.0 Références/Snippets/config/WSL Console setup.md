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
##  Récupérer les dotfiles
Installation + checkout des `dotfiles`. S'installe dans le dossier `/bin` relatif au dossier courant
```bash
sh -c "$(curl -fsLS get.chezmoi.io)" -- init --apply git@github.com:jfdion/dotfiles.git
```
https://www.chezmoi.io/install/#one-line-binary-install

## Activer ZSH
Activation pour l'invite de commande par défaut
```bash
chsh -s $(which zsh)
```

## Install FZF
```bash
git clone --depth 1 https://github.com/junegunn/fzf.git ~/.fzf
~/.fzf/install
fzf --version
```
## References
* Voir [[Nerd fonts]] pour les polices de caractères avec les glyphes