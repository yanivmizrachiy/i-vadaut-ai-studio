# GitHub Pages smoke test — 2026-06-17

## Result

The external GitHub Pages site is now reachable. The earlier 404 problem is no longer reproduced for the tested public URLs.

## User PowerShell output summary

The Pages API endpoint returned 404:

```text
https://api.github.com/repos/yanivmizrachiy/i-vadaut-ai-studio/pages
HTTP Status: 404
```

However, every public GitHub Pages URL tested returned HTTP 200:

| URL | Status |
|---|---:|
| https://yanivmizrachiy.github.io/i-vadaut-ai-studio/ | 200 |
| https://yanivmizrachiy.github.io/i-vadaut-ai-studio/index.html | 200 |
| https://yanivmizrachiy.github.io/i-vadaut-ai-studio/production-viewer.html | 200 |
| https://yanivmizrachiy.github.io/i-vadaut-ai-studio/worksheet/premium-redesign/index.html | 200 |
| https://yanivmizrachiy.github.io/i-vadaut-ai-studio/worksheet/premium-redesign/q001-premium/index.html | 200 |
| https://yanivmizrachiy.github.io/i-vadaut-ai-studio/worksheet/production-batches/index.html | 200 |

Every raw GitHub file URL tested also returned HTTP 200.

## Interpretation

- The public site works.
- The designed pages are externally reachable.
- The API 404 may be due to GitHub API visibility/auth behavior or Pages metadata access, but it does not block viewing the site because the actual Pages URLs return 200.

## Practical next step

Continue production work from the live site links, especially:

- `/production-viewer.html`
- `/worksheet/premium-redesign/q001-premium/index.html`
- `/worksheet/production-batches/index.html`

