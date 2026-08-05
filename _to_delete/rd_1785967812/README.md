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
- `/methode-pilates` — Présentation de la méthode Pilates et de ses bienfaits
- `/a-propos` — Parcours, certifications, CV d'Ophélie
- `/salle-1` et `/salle-2` — Une page dédiée par salle louée (réservation Set More)
- `/reservation` — Page de réservation générale (widget Set More)
- `/contact` — Contact

## Données des salles et réservation

Les infos des 2 salles (adresse, jour/heure de cours) et le lien de réservation Setmore sont centralisés dans `src/data/salles.ts`. Pour modifier une adresse, un horaire ou le lien Setmore, c'est le seul fichier à toucher — toutes les pages (accueil, salle-1, salle-2, réservation) s'y réfèrent automatiquement.

Le nom donné à chaque salle (`Salle Boussingault`, `Salle Tournefort`) est un nom de travail basé sur l'adresse — à ajuster si Ophélie préfère un autre nom.

La page `/reservation` embarque le calendrier Setmore via iframe (méthode officielle Setmore). Si le paiement en ligne est activé un jour dans Setmore, ajouter `payment` à l'attribut `allow` de l'iframe (voir commentaire dans le fichier).

## Photos

4 photos ont été intégrées dans `public/images/` (redimensionnées et compressées pour le web) :

- `ophelie-portrait.jpg` — portrait, utilisé sur `/a-propos` et comme image de partage par défaut n'importe où ce n'est pas surchargé
- `pilates-hero.jpg` — photo d'action (reformer), utilisée en bannière de l'accueil et comme image Open Graph par défaut (`BaseLayout`)
- `pilates-methode.jpg` — photo d'action, utilisée sur `/methode-pilates`
- `pilates-prive.jpg` — photo d'action, utilisée sur la section "Cours privés" de l'accueil

Il reste à ajouter des photos des salles elles-mêmes (actuellement en placeholder sur `/salle-1` et `/salle-2`) — les 4 photos actuelles montrent Ophélie en exercice sur reformer, probablement pas dans les salles louées (équipement différent), donc pas utilisées sur ces deux pages pour rester honnête sur le lieu réel des cours.

## À faire avant mise en ligne

- [ ] Remplacer les placeholders `[À COMPLÉTER: ...]` restants (approche personnelle sur `/methode-pilates`, description des salles, accès/transports par salle, email/téléphone)
- [ ] Ajouter des photos des salles elles-mêmes dans `public/images/`
- [ ] `git init`, premier commit, push GitHub, connexion Netlify, config DNS `ophelieros.fr`
- [ ] Créer/optimiser la fiche Google Business Profile
- [ ] Mettre en place une redirection 301 depuis l'ancien site (ophepilates.com) une fois en ligne
