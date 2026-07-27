# Checklist SEO / Google Search Console — RED-K EMPIRE

Site : **https://redkempire.fr**

## Déjà en place (technique)

- [x] `robots.txt` → autorise l'indexation + lien sitemap
- [x] `sitemap.xml` → accueil + pages légales
- [x] `googlef98189b7303b92a0.html` → vérification GSC (fichier HTML)
- [x] Balises meta, Open Graph, Twitter Card (France, fonds de commerce)
- [x] URL canonique
- [x] JSON-LD (`RealEstateAgent`, `WebSite`, `WebPage`, `FAQPage`, `ContactPoint`)
- [x] Balises geo (`geo.region`, `geo.placename`)
- [x] H1 sémantique (sr-only) + intro SEO visible
- [x] Email harmonisé `contact@redkempire.fr` (site, JSON-LD, llms.txt, légal)
- [x] Favicon + `site.webmanifest`
- [x] `404.html` personnalisée
- [x] Pages légales (stubs à compléter)
- [x] `llms.txt` pour crawlers IA
- [x] `.nojekyll` (GitHub Pages)

## À faire dans Google Search Console

1. **Valider la propriété** → méthode fichier HTML (déjà uploadé)
2. **Soumettre le sitemap** : `https://redkempire.fr/sitemap.xml`
3. **Inspecter l'URL** : `https://redkempire.fr/` → Demander l'indexation
4. Vérifier **Couverture** / **Pages** après 48–72 h
5. Surveiller **Core Web Vitals** et **Mobile**

## Contenu à compléter (hors technique)

- [ ] Mentions légales : SIRET, adresse siège, directeur de publication
- [ ] Politique de confidentialité : durées de conservation, DPO si applicable
- [ ] Google Business Profile (si adresse physique / zone de service France)
- [ ] Google Analytics / GA4 (optionnel — mettre à jour la politique cookies)
- [ ] Balise Google Ads / Meta Pixel si campagnes paid

## URLs utiles GSC

| Ressource | URL |
|-----------|-----|
| Sitemap | https://redkempire.fr/sitemap.xml |
| Robots | https://redkempire.fr/robots.txt |
| Accueil | https://redkempire.fr/ |

## Après chaque mise à jour du site

1. Mettre à jour `<lastmod>` dans `sitemap.xml` si pages légales modifiées
2. Push sur `main` → déploiement auto GitHub Pages (~1 min)
3. Optionnel : « Inspecter l'URL » dans GSC pour réindexation rapide
