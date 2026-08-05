// Studios tiers où Ophélie intervient comme professeure indépendante.
// Simple mention pour le CV/crédibilité — pas de fiche dédiée ni de réservation ici,
// Ophélie ne gère pas la communication de ces studios.
export interface StudioPartenaire {
  name: string;
  arrondissement: string;
  url: string;
}

export const studiosPartenaires: StudioPartenaire[] = [
  { name: 'Hundred', arrondissement: 'Paris 1er', url: 'https://hundred-pilates.com/fr/' },
  { name: 'Bandha', arrondissement: 'Paris 6e', url: 'https://www.bandhayoga.paris/' },
];

export const INSTAGRAM_URL = 'https://www.instagram.com/ophe._pilates/';
export const INSTAGRAM_HANDLE = '@ophe._pilates';
