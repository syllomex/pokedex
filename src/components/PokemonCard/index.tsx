import React, { PureComponent } from 'react';

import { PokemonListResult } from '../../interfaces/api';

import capitalize from '../../utils/capitalize';
import getIdFromUrl from '../../utils/getIdFromUrl';
import imageUrl from '../../utils/imageUrl';

import {
  Card, ArrowIcon, Image, ImageContainer, Name,
} from './styles';

type Props = PokemonListResult & {
  navigate: (route: string, params?: any) => void;
};

class PokemonCard extends PureComponent<Props> {
  render () {
    const { name, url, navigate } = this.props;
    const id = getIdFromUrl(url);

    return (
      <Card onPress={() => navigate('PokeDetails', { name, id })}>
        <ImageContainer>
          <Image source={{ uri: imageUrl(id) }} />
        </ImageContainer>
        <Name>{capitalize(name)}</Name>
        <ArrowIcon />
      </Card>
    );
  }
}

export default PokemonCard;
