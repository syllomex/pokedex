/* eslint-disable camelcase */

// https://pokeapi.co/api/v2/pokemon
export interface PokemonListResult {
  name: string;
  url: string;
}

export interface PokemonList {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListResult[];
}

// https://pokeapi.co/api/v2/pokemon/{id or name}/
export type Type = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

export interface Pokemon {
  id: number;
  name: string;
  types: Type[];
  height: number;
  weight: number;
  sprites: {
    front_default: string;
    front_shiny?: string;
  };
  species: {
    url: string;
  };
}

// https://pokeapi.co/api/v2/pokemon-species/{id}/
export interface Species {
  evolves_from_species: string | null;
  evolution_chain: {
    url: string;
  };
  is_legendary: boolean;
  generation: {
    url: string;
  };
}

// https://pokeapi.co/api/v2/generation/{id or name}/
export interface Generation {
  main_region: {
    name: string;
  };
}

// https://pokeapi.co/api/v2/evolution-chain/{id}/
export type Chain = {
  species: {
    name: string;
    url: string;
  };
  evolves_to: Chain[];
};

export interface EvolutionChain {
  id: number;
  chain: Chain;
}
