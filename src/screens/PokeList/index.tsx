import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { FlatList } from 'react-native';
import LoadingSpinner from '../../components/LoadingSpinner';

import PokemonCard from '../../components/PokemonCard';

import { PokemonList, PokemonListResult } from '../../interfaces/api';

import { Container, Footer } from './styles';

const PokeList: React.FC = () => {
  const { navigate } = useNavigation();
  const [pokeList, setPokeList] = useState<PokemonListResult[] | null>();

  const page = useRef(0);
  const end = useRef(false);

  const [listEnded, setListEnded] = useState(false);

  const fetchPokemonList = useCallback(async () => {
    try {
      if (end.current) return;

      page.current += 1;
      const url = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${(page.current - 1) * 20}`;

      const response = await axios.get(url);
      const data = response.data as PokemonList;

      if (!data.next) {
        end.current = true;
        setListEnded(true);
      }

      setPokeList((currentList) => {
        if (!currentList) return data.results;

        return [...currentList, ...data.results];
      });
    } catch (err) {
      setPokeList(null);
    }
  }, []);

  useEffect(() => {
    fetchPokemonList();
  }, [fetchPokemonList]);

  return (
    <Container>
      <FlatList
        data={pokeList}
        contentContainerStyle={{ paddingHorizontal: '5%' }}
        keyExtractor={(item) => item.name}
        renderItem={({ item, index }) => (
          <PokemonCard
            key={item.name}
            index={index}
            name={item.name}
            url={item.url}
            navigate={navigate}
          />
        )}
        ListFooterComponent={
          !listEnded ? (
            <Footer>
              <LoadingSpinner />
            </Footer>
          ) : null
        }
        onEndReached={fetchPokemonList}
        onEndReachedThreshold={0.7}
      />
    </Container>
  );
};

export default PokeList;
