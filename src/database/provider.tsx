import React, {
  useCallback, useContext, useEffect, useRef,
} from 'react';
import Realm from 'realm';

import openRealm from '.';

type Context = {
  realm: React.MutableRefObject<Realm | undefined>;
};

const DatabaseContext = React.createContext({} as Context);

type Props = {
  setLoading: (state: boolean) => void;
};

const DatabaseProvider: React.FC<Props> = ({ children, setLoading }) => {
  const realm = useRef<Realm>();

  const init = useCallback(async () => {
    setLoading(true);

    const result = await openRealm();
    if (result) realm.current = result;

    setLoading(false);
  }, [setLoading]);

  useEffect(() => {
    init();
  }, [init]);

  return <DatabaseContext.Provider value={{ realm }}>{children}</DatabaseContext.Provider>;
};

const useDatabase = () => {
  const { realm } = useContext(DatabaseContext);
  return { realm };
};

export default DatabaseProvider;
export { useDatabase };
