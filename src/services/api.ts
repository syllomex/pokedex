/* eslint-disable import/prefer-default-export */

import axios from 'axios';
import { EvolutionChain, Pokemon, Species } from '../interfaces/api';

export type PokemonDetails = {
  pokemon: Pokemon;
  species: Species;
  evolution: EvolutionChain;
} | null;

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
    };

    const evolutionData = (await axios.get(species.evolution_chain.url)).data;
    const evolution: EvolutionChain = {
      id: evolutionData.id,
      chain: { ...evolutionData.chain },
    };

    return { pokemon, species, evolution };
  } catch (err) {
    return null;
  }
};
