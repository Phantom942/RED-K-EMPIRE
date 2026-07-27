# Phantom Empire — RED-K EMPIRE

Landing page B2B ultra-premium pour **RED-K EMPIRE**, agence immobilière commerciale à Paris (fonds de commerce, locaux, bureaux off-market).

## Stack

- HTML5 / CSS3 / JavaScript vanilla
- [Leaflet](https://leafletjs.com/) + CartoDB Dark (carte Paris)
- Fonts : Orbitron, Rajdhani, IBM Plex Sans, Inter

## Structure

```
├── index.html              # Page d'accueil
├── css/main.css            # Styles
├── js/main.js              # Nav, carte, filtres, formulaire vault
├── robots.txt              # Indexation + sitemap
├── sitemap.xml             # Plan du site (GSC)
├── site.webmanifest        # PWA / mobile
├── llms.txt                # Description pour crawlers IA
├── 404.html                # Page erreur
├── mentions-legales.html   # Stub légal (à compléter)
├── confidentialite.html    # Stub RGPD (à compléter)
├── SEO-CHECKLIST.md        # Checklist Google Search Console
└── assets/
    └── logo-footer.png     # Logo header + footer (transparent)
```

## Lancer en local

```bash
# Python
python -m http.server 5500

# Ou ouvrir index.html via un serveur local (éviter file:// pour Leaflet)
```

→ [http://localhost:5500](http://localhost:5500)

## Déploiement

Site **100 % statique** — compatible :

| Hébergeur | Méthode |
|-----------|---------|
| **GitHub Pages** | Settings → Pages → branch `main`, dossier `/` |
| **Vercel** | Import repo → Framework Preset: Other |
| **Netlify** | Drag & drop ou connect repo |
| **Cloudflare Pages** | Connect Git → build command vide, output `/` |

Aucune variable d'environnement requise. Contact WhatsApp : `+33 6 48 74 56 68` (configuré dans `index.html`).

## Licence

© RED-K EMPIRE — Tous droits réservés.
