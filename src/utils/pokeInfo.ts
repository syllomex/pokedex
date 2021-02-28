import capitalize from './capitalize';

export function getWeight (weight: number) {
  return `${(weight / 10).toString().replace('.', ',')} Kg`;
}

export function getHeight (height: number) {
  return `${(height / 10).toString().replace('.', ',')} m`;
}

export function getRegion (region?: string | null) {
  if (!region) return '...';
  return capitalize(region);
}
