// Informations des salles louées par Ophélie et lien de réservation en ligne.
// Lien de réservation Set More — pas de clé/identifiant à protéger, c'est une simple URL publique.
export const SETMORE_URL = 'https://ophepilates.setmore.com/';

export interface Salle {
  slug: string;
  /** Nom de travail (pas de nom commercial officiel pour l'instant — à ajuster si besoin) */
  name: string;
  arrondissement: string;
  streetAddress: string;
  addressLocality: string;
  postalCode: string;
  /** Jour + heure du cours dans cette salle */
  schedule: string;
  /** Précision optionnelle sur l'horaire (ex: en cours de test) */
  scheduleNote?: string;
  /** Format du cours (tapis, reformer...) */
  format: string;
}

export const salles: Salle[] = [
  {
    slug: 'salle-1',
    name: 'Salle Boussingault',
    arrondissement: 'Paris 13e',
    streetAddress: '45 rue Boussingault',
    addressLocality: 'Paris',
    postalCode: '75013',
    schedule: 'Jeudi à 12h30',
    format: 'Cours sur tapis',
  },
  {
    slug: 'salle-2',
    name: 'Salle Tournefort',
    arrondissement: 'Paris 5e',
    streetAddress: '10 rue Tournefort',
    addressLocality: 'Paris',
    postalCode: '75005',
    schedule: 'Mercredi à 7h30',
    scheduleNote: 'Horaire actuellement en test, susceptible d’évoluer.',
    format: 'Cours sur tapis',
  },
];
