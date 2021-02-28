import { WebSQLDatabase } from 'expo-sqlite';
import React, {
  useCallback, useContext, useEffect, useRef,
} from 'react';

import openDatabase from '.';
import { PokemonListResult } from '../interfaces/api';

type Context = {
  db: React.MutableRefObject<WebSQLDatabase | undefined>;
};

const DatabaseContext = React.createContext({} as Context);

type Props = {
  setLoading: (state: boolean) => void;
};

const DatabaseProvider: React.FC<Props> = ({ children, setLoading }) => {
  const db = useRef<WebSQLDatabase>();

  const init = useCallback(async () => {
    setLoading(true);

    const result = await openDatabase();
    if (result) db.current = result;

    setLoading(false);
  }, [setLoading]);

  useEffect(() => {
    init();
  }, [init]);

  return <DatabaseContext.Provider value={{ db }}>{children}</DatabaseContext.Provider>;
};

const useDatabase = () => {
  const { db } = useContext(DatabaseContext);

  const search = (name: string, callback: (result: PokemonListResult[]) => void): void => {
    if (!db.current) {
      callback([]);
      return;
    }

    db.current.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM pokemons WHERE name LIKE '%${name}%'`,
        undefined,
        (_, { rows }) => {
          const result = JSON.parse(JSON.stringify(rows))._array;
          callback(result);
        },
      );
    });
  };

  return { db, search };
};

export default DatabaseProvider;
export { useDatabase };
