---
tags:
  - "#code"
  - "#snippet"
  - "#json"
  - "#config"
  - "#powershell"
language: JSON
created: 2024-01-30 Tue
last_updated: 2024-01-30 Tue
---
## Description

Overrides for Oh my posh ([https://ohmyposh.dev/docs/themes](https://ohmyposh.dev/docs/themes))

Use override:
`oh-my-posh init pwsh --config 'C:/path-to-file' | Invoke-Expression`

References
https://ohmyposh.dev/docs/installation/customize

```JSON
{
  "$schema": "https://raw.githubusercontent.com/JanDeDobbeleer/oh-my-posh/main/themes/schema.json",
  "blocks": [
    {
      "alignment": "left",
      "segments": [
        {
          "background": "#555555",
          "foreground": "#cccccc",
          "leading_diamond": "\ue0b6",
          "powerline_symbol": "\ue0b0",
          "properties": {
            "style": "folder"
          },
          "style": "diamond",
          "template": " \ue5ff {{ .Path }} ",
          "trailing_diamond": "\ue0b0",
          "type": "path"
        },
        {
          "background": "#11d4ba",
          "foreground": "#193549",
          "powerline_symbol": "\ue0b0",
          "properties": {
            "fetch_stash_count": true,
            "fetch_status": true,
            "fetch_upstream_icon": true
          },
          "style": "powerline",
          "template": " {{ .HEAD }} {{ .BranchStatus }}{{ if .Working.Changed }} \uf044 {{ .Working.String }}{{ end }}{{ if and (.Staging.Changed) (.Working.Changed) }} |{{ end }}{{ if .Staging.Changed }} \uf046 {{ .Staging.String }}{{ end }}{{ if gt .StashCount 0}} \uf692 {{ .StashCount }}{{ end }}{{ if gt .WorktreeCount 0}} \uf1bb {{ .WorktreeCount }}{{ end }} ",
          "type": "git"
        },
        {
          "type": "python",
          "style": "powerline",
          "powerline_symbol": "\uE0B0",
          "foreground": "#100e23",
          "background": "#906cff",
          "template": "{{ if .Error }}{{ .Error }}{{ else }}{{ if .Venv }}{{ .Venv }} {{ end }}{{ .Full }}{{ end }}"
        },
        {
          "background": "#6CA35E",
          "foreground": "#ffffff",
          "powerline_symbol": "\ue0b0",
          "properties": {
            "fetch_version": true
          },
          "style": "powerline",
          "template": " \ue70c {{ if .Unsupported }}\uf071{{ else }}{{ .Full }}{{ end }} ",
          "type": "dotnet"
        },
        {
          "background": "#ffff66",
          "foreground": "#ffffff",
          "powerline_symbol": "\ue0b0",
          "style": "powerline",
          "template": " \uf0e7 ",
          "type": "root"
        },
        {
          "background": "#086b35",
          "background_templates": [
            "{{ if gt .Code 0 }}#f1184c{{ end }}"
          ],
          "foreground": "#ffffff",
          "powerline_symbol": "\ue0b0",
          "properties": {
            "always_enabled": true
          },
          "style": "powerline",
          "template": " \ue23a{{ if gt .Code 0 }}\uf00d{{ else }}\uf42e{{ end }} ",
          "trailing_diamond": "\ue0b4",
          "type": "exit"
        }
      ],
      "type": "prompt"
    }
  ],
  "final_space": true,
  "version": 2
}
```

## References
{reference}