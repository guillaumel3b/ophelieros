# Site vitrine — Ophélie Ros (Pilates)

Site vitrine statique construit avec [Astro](https://astro.build), hébergé sur Netlify, code sur GitHub.

## Stack

- **Astro** — génération statique, optimisé SEO/perf
- **Netlify** — hébergement + déploiement continu
- **GitHub** — versioning

## Développement local

```bash
npm install
npm run dev
```

Le site est disponible sur `http://localhost:4321`.

## Build

```bash
npm run build
npm run preview
```

## Structure des pages

- `/` — Accueil
- `/a-propos` — Parcours, certifications, CV d'Ophélie
- `/reservation` — Page de réservation (widget Setmore intégré)
- `/contact` — Contact

Les pages dédiées `/salle-1` et `/salle-2` ont été retirées (redondantes avec l'accueil et le calendrier Setmore, qui affiche déjà toutes les infos utiles).

## Données des salles et réservation

Les infos des 2 salles (adresse, jour/heure de cours) et le lien de réservation Setmore sont centralisés dans `src/data/salles.ts`. Pour modifier une adresse, un horaire ou le lien Setmore, c'est le seul fichier à toucher — l'accueil et la page réservation s'y réfèrent automatiquement.

Le nom donné à chaque salle (`Salle Boussingault`, `Salle Tournefort`) est un nom de travail basé sur l'adresse — à ajuster si Ophélie préfère un autre nom.

La page `/reservation` embarque le calendrier Setmore via iframe (méthode officielle Setmore). Si le paiement en ligne est activé un jour dans Setmore, ajouter `payment` à l'attribut `allow` de l'iframe (voir commentaire dans le fichier). Setmore affiche aussi ses propres avis clients directement sur cette page (11 avis, 5.0 à ce jour) — pas d'intégration supplémentaire nécessaire.

## Photos

Dans `public/images/` (redimensionnées et compressées pour le web) :

- `ophelie-portrait.jpg` — portrait, utilisé sur `/a-propos` et comme image de partage par défaut
- `pilates-hero.jpg` — photo d'action (reformer), utilisée en bannière de l'accueil et comme image Open Graph par défaut (`BaseLayout`)
- `pilates-prive.jpg` — photo d'action, utilisée sur la section "Cours privés" de l'accueil
- `instagram/instagram-1.jpg` à `instagram-4.jpg` — grille de photos sur l'accueil (section "Suivez les cours en images"), chacune renvoyant vers le profil Instagram général

## Instagram

La grille de photos de l'accueil est une sélection manuelle (pas de widget tiers, pas de connexion de compte). Pour changer les photos affichées : remplacer les fichiers dans `public/images/instagram/` et mettre à jour le tableau `instagramPhotos` dans `src/pages/index.astro`.

## À faire

- [ ] Vérifier l'état DNS/HTTPS de `ophelieros.fr` (dernière vérification : les serveurs de noms OVH étaient encore actifs, à reconfirmer directement dans le tableau de bord Netlify)
- [ ] Créer/optimiser la fiche Google Business Profile (en tant que "service area business", sans adresse publique puisque les salles sont louées)
- [ ] Mettre en place une redirection 301 depuis l'ancien site (ophepilates.com) une fois en ligne
- [ ] Inscrire le site dans Google Search Console et soumettre le sitemap
