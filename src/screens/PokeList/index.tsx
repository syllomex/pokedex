import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { FlatList } from 'react-native';

import LoadingSpinner from '../../components/LoadingSpinner';
import PokemonCard from '../../components/PokemonCard';
import SearchBox from '../../components/SearchBox';

import { useDatabase } from '../../database/provider';

import { PokemonList, PokemonListResult } from '../../interfaces/api';

import { Container, EmptyMessage, Footer } from './styles';

const PokeList: React.FC = () => {
  const { navigate } = useNavigation();
  const { search } = useDatabase();

  const [pokeList, setPokeList] = useState<PokemonListResult[] | null>();
  const [filteredList, setFilteredList] = useState<PokemonListResult[] | undefined>();
  const [refreshing, setRefreshing] = useState(false);

  const query = useRef<string>();
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

      setPokeList(currentList => {
        if (!currentList) return data.results;

        return [...currentList, ...data.results];
      });
    } catch (err) {
      setPokeList(null);
    }
  }, []);

  const handleSearch = useCallback(() => {
    if (!query.current || query.current.length === 0) return setFilteredList(undefined);
    search(query.current, setFilteredList);

    return null;
  }, [search]);

  const handleChangeText = useCallback(
    (text: string) => {
      query.current = text;
      handleSearch();
      if (text.length === 0) setFilteredList(undefined);
    },
    [handleSearch],
  );

  const handleRefresh = useCallback(async () => {
    setPokeList(undefined);
    page.current = 0;
    setRefreshing(true);
    await fetchPokemonList();
    setRefreshing(false);
  }, [fetchPokemonList]);

  useEffect(() => {
    fetchPokemonList();
  }, [fetchPokemonList]);

  return (
    <Container>
      <SearchBox
        handleSearch={handleSearch}
        handleChangeText={handleChangeText}
        onPressCancel={() => setFilteredList(undefined)}
        cancelButtonShown={!!filteredList}
      />

      <FlatList
        data={filteredList || pokeList}
        contentContainerStyle={{ paddingHorizontal: '5%', paddingTop: 16 }}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <PokemonCard key={item.name} name={item.name} url={item.url} navigate={navigate} />
        )}
        onRefresh={handleRefresh}
        refreshing={refreshing}
        ListFooterComponent={
          !listEnded && !filteredList ? (
            <Footer>
              <LoadingSpinner />
            </Footer>
          ) : null
        }
        ListEmptyComponent={<EmptyMessage>Nenhum pokémon encontrado!</EmptyMessage>}
        onEndReached={() => !filteredList && fetchPokemonList()}
        onEndReachedThreshold={0.7}
      />
    </Container>
  );
};

export default PokeList;
