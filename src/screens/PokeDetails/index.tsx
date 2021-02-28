import { ParamListBase, RouteProp, useRoute } from '@react-navigation/native';
import React, {
  Fragment, useCallback, useEffect, useState,
} from 'react';
import { ScrollView } from 'react-native';

import types from '../../assets/types';

import LoadingSpinner from '../../components/LoadingSpinner';
import { Chain } from '../../interfaces/api';

import { fetchPokeDetail, PokemonDetails } from '../../services/api';

import capitalize from '../../utils/capitalize';
import getIdFromUrl from '../../utils/getIdFromUrl';
import imageUrl, { imageShinyUrl } from '../../utils/imageUrl';

import {
  ArrowDown,
  Block,
  ChainContainer,
  Container,
  DummyView,
  Evolution,
  EvolutionImg,
  EvolutionName,
  Image,
  ImageContainer,
  InfoContainer,
  Label,
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

  const [details, setDetails] = useState<PokemonDetails | null>();

  const fetchDetails = useCallback(async () => {
    const data = await fetchPokeDetail(params.name);
    setDetails(data);
  }, [params]);

  const mapChain = useCallback(
    (chain: Chain[]) => (
      <Fragment>
        {chain[0] && chain[0].evolves_to && <ArrowDown />}
        <ChainContainer>
          {chain.map((poke) => (
            <Evolution>
              <EvolutionImg source={{ uri: imageUrl(getIdFromUrl(poke.species.url)) }} />
              <EvolutionName>{capitalize(poke.species.name)}</EvolutionName>
            </Evolution>
          ))}
        </ChainContainer>
        {chain[0] && chain[0].evolves_to && mapChain(chain[0].evolves_to)}
      </Fragment>
    ),
    [],
  );

  useEffect(() => {
    fetchDetails();
  }, [fetchDetails]);

  if (!details) return <LoadingSpinner />;

  return (
    <Container
      style={{ backgroundColor: types[details.pokemon.types[0].type.name].colorTransparent }}
    >
      <ScrollView contentContainerStyle={{ paddingHorizontal: '5%', alignItems: 'center' }}>
        <Name>{capitalize(details.pokemon.name)}</Name>
        <ImageContainer>
          <Image source={{ uri: imageUrl(params.id) }} />
        </ImageContainer>

        <SubTitle>Shiny</SubTitle>
        <ImageContainer>
          <Image source={{ uri: imageShinyUrl(params.id) }} />
        </ImageContainer>

        <SubTitle>Tipo</SubTitle>

        <TypesContainer>
          {details.pokemon.types.map(({ slot, type }) => (
            <TypeContainer key={slot}>
              <TypeIcon source={types[type.name].icon} />
              <TypeText>{capitalize(type.name)}</TypeText>
              <DummyView />
            </TypeContainer>
          ))}
        </TypesContainer>

        <InfoContainer>
          <Block>
            <Label>Peso</Label>
            <Value>{`${(details.pokemon.weight / 10).toString().replace('.', ',')} Kg`}</Value>
          </Block>
          <Block>
            <Label>Altura</Label>
            <Value>{`${(details.pokemon.height / 10).toString().replace('.', ',')} m`}</Value>
          </Block>
          <Block>
            <Label>Região</Label>
            <Value>Kanto</Value>
          </Block>
        </InfoContainer>

        <SubTitle>Evoluções</SubTitle>

        <ChainContainer>
          <Evolution>
            <EvolutionImg
              source={{ uri: imageUrl(getIdFromUrl(details.evolution.chain.species.url)) }}
            />
            <EvolutionName>{capitalize(details.evolution.chain.species.name)}</EvolutionName>
          </Evolution>
        </ChainContainer>

        {mapChain(details.evolution.chain.evolves_to)}
      </ScrollView>
    </Container>
  );
};

export default PokeDetails;
