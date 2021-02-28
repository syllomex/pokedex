import * as Sqlite from 'expo-sqlite';
import axios from 'axios';

import { PokemonList } from '../interfaces/api';
import getIdFromUrl from '../utils/getIdFromUrl';

export default async function openDatabase () {
  try {
    const db = Sqlite.openDatabase('db.pokepicker', '1');

    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=5000');
    const data = response.data as PokemonList;

    db.transaction(tx => {
      const sql = 'CREATE TABLE IF NOT EXISTS pokemons (id INTEGER PRIMARY KEY, name VARCHAR(255) NOT NULL, url VARCHAR(255) NOT NULL);';
      tx.executeSql(sql);
    });

    db.transaction(tx => {
      tx.executeSql('DELETE FROM pokemons WHERE 1');

      function values () {
        let query = '';

        data.results.forEach(result => {
          query += ` (${getIdFromUrl(result.url)} ,'${result.name}', '${result.url}'),`;
        });

        return query;
      }

      const query = `INSERT INTO pokemons (id, name, url) VALUES${values()}`;
      const sql = query.slice(0, query.length - 1);
      tx.executeSql(sql);
    });

    return db;
  } catch (err) {
    return null;
  }
}
