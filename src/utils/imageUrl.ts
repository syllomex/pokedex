import { Pokemon } from '../interfaces/api';

export default function (pokemon: Pokemon | number) {
  if (typeof pokemon === 'number') return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon}.png`;
  return pokemon.sprites.front_default;
}

export function imageShinyUrl (pokemon: Pokemon) {
  return pokemon.sprites.front_shiny;
}
