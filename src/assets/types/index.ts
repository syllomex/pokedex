import { ImageSourcePropType } from 'react-native';

import normal from './icons/type-normal.png';
import fighting from './icons/type-fighting.png';
import flying from './icons/type-flying.png';
import poison from './icons/type-poison.png';
import ground from './icons/type-ground.png';
import rock from './icons/type-rock.png';
import bug from './icons/type-bug.png';
import ghost from './icons/type-ghost.png';
import steel from './icons/type-steel.png';
import fire from './icons/type-fire.png';
import water from './icons/type-water.png';
import grass from './icons/type-grass.png';
import electric from './icons/type-electric.png';
import psychic from './icons/type-psychic.png';
import ice from './icons/type-ice.png';
import dragon from './icons/type-dragon.png';
import dark from './icons/type-dark.png';
import fairy from './icons/type-fairy.png';

const textLight = '#FDFDFD';
const textDark = '#242424';

export type PokemonTypes =
  | 'normal'
  | 'fighting'
  | 'flying'
  | 'poison'
  | 'ground'
  | 'rock'
  | 'bug'
  | 'ghost'
  | 'steel'
  | 'fire'
  | 'water'
  | 'grass'
  | 'electric'
  | 'psychic'
  | 'ice'
  | 'dragon'
  | 'dark'
  | 'fairy'
  | 'shadow'
  | 'unknown';

type PokemonTypeData = {
  icon: ImageSourcePropType | null;
  color: string;
  textColor: string;
  url: string;
};

const index: { [key: string]: PokemonTypeData } = {
  normal: {
    icon: normal,
    color: '#9099A1',
    textColor: textDark,
    url: 'https://pokeapi.co/api/v2/type/1/',
  },
  fighting: {
    icon: fighting,
    color: '#CE4069',
    textColor: textDark,
    url: 'https://pokeapi.co/api/v2/type/2/',
  },
  flying: {
    icon: flying,
    color: '#8FA8DD',
    textColor: textDark,
    url: 'https://pokeapi.co/api/v2/type/3/',
  },
  poison: {
    icon: poison,
    color: '#AB6AC8',
    textColor: textDark,
    url: 'https://pokeapi.co/api/v2/type/4/',
  },
  ground: {
    icon: ground,
    color: '#D97746',
    textColor: textDark,
    url: 'https://pokeapi.co/api/v2/type/5/',
  },
  rock: {
    icon: rock,
    color: '#C7B78B',
    textColor: textDark,
    url: 'https://pokeapi.co/api/v2/type/6/',
  },
  bug: {
    icon: bug,
    color: '#90C12C',
    textColor: textDark,
    url: 'https://pokeapi.co/api/v2/type/7/',
  },
  ghost: {
    icon: ghost,
    color: '#5269AC',
    textColor: textLight,
    url: 'https://pokeapi.co/api/v2/type/8/',
  },
  steel: {
    icon: steel,
    color: '#5A8EA1',
    textColor: textLight,
    url: 'https://pokeapi.co/api/v2/type/9/',
  },
  fire: {
    icon: fire,
    color: '#FF9C54',
    textColor: textDark,
    url: 'https://pokeapi.co/api/v2/type/10/',
  },
  water: {
    icon: water,
    color: '#4D90D5',
    textColor: textLight,
    url: 'https://pokeapi.co/api/v2/type/11/',
  },
  grass: {
    icon: grass,
    color: '#63BB5B',
    textColor: textLight,
    url: 'https://pokeapi.co/api/v2/type/12/',
  },
  electric: {
    icon: electric,
    color: '#F3D23B',
    textColor: textDark,
    url: 'https://pokeapi.co/api/v2/type/13/',
  },
  psychic: {
    icon: psychic,
    color: '#F97176',
    textColor: textDark,
    url: 'https://pokeapi.co/api/v2/type/14/',
  },
  ice: {
    icon: ice,
    color: '#74CEC0',
    textColor: textLight,
    url: 'https://pokeapi.co/api/v2/type/15/',
  },
  dragon: {
    icon: dragon,
    color: '#0A6DC4',
    textColor: textLight,
    url: 'https://pokeapi.co/api/v2/type/16/',
  },
  dark: {
    icon: dark,
    color: '#5A5366',
    textColor: textLight,
    url: 'https://pokeapi.co/api/v2/type/17/',
  },
  fairy: {
    icon: fairy,
    color: '#EC8FE6',
    textColor: textDark,
    url: 'https://pokeapi.co/api/v2/type/18/',
  },
  unknown: {
    icon: null,
    color: '#9099A1',
    textColor: textDark,
    url: 'https://pokeapi.co/api/v2/type/10001/',
  },
  shadow: {
    icon: null,
    color: '#44446D',
    textColor: textLight,
    url: 'https://pokeapi.co/api/v2/type/10002/',
  },
};

export default index;
