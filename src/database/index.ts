import axios from 'axios';
import Realm from 'realm';

import { PokemonList } from '../interfaces/api';
import getIdFromUrl from '../utils/getIdFromUrl';

import Pokemon from './models/Pokemon';

export default async function openRealm () {
  try {
    const realm = await Realm.open({ schema: [Pokemon.schema] });

    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=5000');
    const data = response.data as PokemonList;

    realm.write(() => {
      realm.deleteAll();

      data.results.forEach((poke) => {
        const id = getIdFromUrl(poke.url);

        realm.create('Pokemon', {
          id,
          name: poke.name,
          url: poke.url,
        });
      });
    });

    return realm;
  } catch (err) {
    return null;
  }
}
