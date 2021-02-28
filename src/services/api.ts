/* eslint-disable import/prefer-default-export */

import axios from 'axios';
import { EvolutionChain, Pokemon, Species } from '../interfaces/api';

export type PokemonDetails = {
  pokemon: Pokemon;
  species: Species;
  evolution: EvolutionChain;
  region: string;
} | null;

export const fetchPokemon = async (poke: number | string): Promise<Pokemon | null> => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${poke}`;
    const pokemonData = (await axios.get(url)).data;

    const pokemon: Pokemon = {
      id: pokemonData.id,
      name: pokemonData.name,
      height: pokemonData.height,
      weight: pokemonData.weight,
      sprites: {
        front_default: pokemonData.sprites.front_default,
        front_shiny: pokemonData.sprites.front_shiny,
      },
      species: {
        url: pokemonData.species.url,
      },
      types: [...pokemonData.types],
    };

    return pokemon;
  } catch (err) {
    return null;
  }
};

export const fetchSpecies = async (url: string): Promise<Species | null> => {
  try {
    const speciesData = (await axios.get(url)).data;
    const species: Species = {
      evolution_chain: speciesData.evolution_chain,
      is_legendary: speciesData.is_legendary,
      evolves_from_species: speciesData.evolves_from_species,
      generation: speciesData.generation,
    };

    return species;
  } catch (error) {
    return null;
  }
};

export const fetchEvolution = async (url: string): Promise<EvolutionChain | null> => {
  try {
    const evolutionData = (await axios.get(url)).data;
    const evolution: EvolutionChain = {
      id: evolutionData.id,
      chain: { ...evolutionData.chain },
    };
    return evolution;
  } catch (error) {
    return null;
  }
};

export const fetchRegion = async (url: string): Promise<string | null> => {
  try {
    const region = (await axios.get(url)).data.main_region.name as string;
    return region;
  } catch (error) {
    return null;
  }
};

export const fetchPokeDetail = async (poke: number | string): Promise<PokemonDetails> => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${poke}`;
    const pokemonData = (await axios.get(url)).data;

    const pokemon: Pokemon = {
      id: pokemonData.id,
      name: pokemonData.name,
      height: pokemonData.height,
      weight: pokemonData.weight,
      sprites: {
        front_default: pokemonData.sprites.front_default,
        front_shiny: pokemonData.sprites.front_shiny,
      },
      species: {
        url: pokemonData.species.url,
      },
      types: [...pokemonData.types],
    };

    const speciesData = (await axios.get(pokemon.species.url)).data;
    const species: Species = {
      evolution_chain: speciesData.evolution_chain,
      is_legendary: speciesData.is_legendary,
      evolves_from_species: speciesData.evolves_from_species,
      generation: speciesData.generation,
    };

    const evolutionData = (await axios.get(species.evolution_chain.url)).data;
    const evolution: EvolutionChain = {
      id: evolutionData.id,
      chain: { ...evolutionData.chain },
    };

    const region = (await axios.get(species.generation.url)).data.main_region.name as string;

    return {
      pokemon,
      species,
      evolution,
      region,
    };
  } catch (err) {
    return null;
  }
};
