import React, { useCallback, useEffect, useState } from 'react';
import { ParamListBase, RouteProp, useRoute } from '@react-navigation/native';
import { ScrollView } from 'react-native';

import types from '../../assets/types';
import help from '../../assets/icons/help.png';

import LoadingSpinner from '../../components/LoadingSpinner';
import EvolutionChain from '../../components/EvolutionChain';

import { EvolutionChain as Evolution, Pokemon, Species } from '../../interfaces/api';

import {
  fetchEvolution, fetchPokemon, fetchRegion, fetchSpecies,
} from '../../services/api';

import capitalize from '../../utils/capitalize';
import imageUrl, { imageShinyUrl } from '../../utils/imageUrl';
import { getHeight, getRegion, getWeight } from '../../utils/pokeInfo';

import {
  Block,
  Container,
  DummyView,
  Image,
  ImageContainer,
  InfoContainer,
  Label,
  Legendary,
  Name,
  SubTitle,
  TypeContainer,
  TypeIcon,
  TypesContainer,
  TypeText,
  Value,
} from './styles';

type RouteParams = ParamListBase & { params: { name: string; id: number } };

type RouteProps = RouteProp<RouteParams, 'params'>;

const PokeDetails: React.FC = () => {
  const { params } = useRoute<RouteProps>();

  const [pokemon, setPokemon] = useState<Pokemon | null>();
  const [species, setSpecies] = useState<Species | null>();
  const [evolution, setEvolution] = useState<Evolution | null>();
  const [region, setRegion] = useState<string | null>();

  const fetchDetails = useCallback(async () => {
    fetchPokemon(params.id || params.name).then(setPokemon);
  }, [params]);

  useEffect(() => {
    if (!pokemon) return;
    fetchSpecies(pokemon.species.url).then(setSpecies);
  }, [pokemon]);

  useEffect(() => {
    if (!species) return;

    fetchEvolution(species.evolution_chain.url).then(setEvolution);
    fetchRegion(species.generation.url).then(setRegion);
  }, [species]);

  useEffect(() => {
    fetchDetails();
  }, [fetchDetails]);

  if (!pokemon) return <LoadingSpinner />;

  return (
    <Container style={{ backgroundColor: types[pokemon.types[0].type.name].colorTransparent }}>
      <ScrollView contentContainerStyle={{ paddingHorizontal: '5%', alignItems: 'center' }}>
        <Name>{capitalize(pokemon.name)}</Name>

        {species?.is_legendary && <Legendary>Lendário</Legendary>}

        <ImageContainer>
          <Image source={{ uri: imageUrl(pokemon) }} />
        </ImageContainer>

        <SubTitle>Shiny</SubTitle>
        <ImageContainer>
          <Image source={{ uri: imageShinyUrl(pokemon) }} />
        </ImageContainer>

        <SubTitle>Tipo</SubTitle>

        <TypesContainer>
          {pokemon.types.map(({ type }) => (
            <TypeContainer key={type.name}>
              <TypeIcon source={types[type.name]?.icon || help} />
              <TypeText>{capitalize(type.name)}</TypeText>
              <DummyView />
            </TypeContainer>
          ))}
        </TypesContainer>

        <InfoContainer>
          <Block>
            <Label>Peso</Label>
            <Value>{getWeight(pokemon.weight)}</Value>
          </Block>
          <Block>
            <Label>Altura</Label>
            <Value>{getHeight(pokemon.height)}</Value>
          </Block>
          <Block>
            <Label>Região</Label>
            <Value>{getRegion(region)}</Value>
          </Block>
        </InfoContainer>

        {evolution && (
          <>
            <SubTitle>Evoluções</SubTitle>
            <EvolutionChain evolution={evolution} />
          </>
        )}
      </ScrollView>
    </Container>
  );
};

export default PokeDetails;
