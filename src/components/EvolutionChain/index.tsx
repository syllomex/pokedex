import { StackActions, useNavigation } from '@react-navigation/native';
import React, { Fragment, useCallback } from 'react';

import { Chain, EvolutionChain as EvolutionType } from '../../interfaces/api';

import capitalize from '../../utils/capitalize';
import getIdFromUrl from '../../utils/getIdFromUrl';
import imageUrl from '../../utils/imageUrl';

import {
  Container, ArrowDown, Evolution, EvolutionImg, EvolutionName,
} from './styles';

type Props = {
  evolution?: EvolutionType;
};

const EvolutionChain: React.FC<Props> = ({ evolution }) => {
  const { dispatch } = useNavigation();

  const navigateToSameScreen = useCallback(
    (id: number) => {
      dispatch(StackActions.push('PokeDetails', { id }));
    },
    [dispatch],
  );

  const mapChain = useCallback(
    (chain: Chain[]) => (
      <Fragment>
        {chain[0] && chain[0].evolves_to && <ArrowDown />}

        <Container key={Math.random()}>
          {chain.map((poke) => (
            <Evolution
              key={Math.random()}
              onPress={() => navigateToSameScreen(getIdFromUrl(poke.species.url))}
            >
              <EvolutionImg source={{ uri: imageUrl(getIdFromUrl(poke.species.url)) }} />
              <EvolutionName>{capitalize(poke.species.name)}</EvolutionName>
            </Evolution>
          ))}
        </Container>

        {chain[0] && chain[0].evolves_to && mapChain(chain[0].evolves_to)}
      </Fragment>
    ),
    [navigateToSameScreen],
  );

  if (!evolution) return null;

  return (
    <>
      <Container>
        <Evolution onPress={() => navigateToSameScreen(getIdFromUrl(evolution.chain.species.url))}>
          <EvolutionImg source={{ uri: imageUrl(getIdFromUrl(evolution.chain.species.url)) }} />
          <EvolutionName>{capitalize(evolution.chain.species.name)}</EvolutionName>
        </Evolution>
      </Container>

      {mapChain(evolution.chain.evolves_to)}
    </>
  );
};

export default EvolutionChain;
