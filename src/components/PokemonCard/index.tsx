import React, { PureComponent } from 'react';

import { PokemonListResult } from '../../interfaces/api';
import capitalize from '../../utils/capitalize';

import {
  Card, ArrowIcon, Image, ImageContainer, Name,
} from './styles';

type Props = PokemonListResult & {
  index: number;
  navigate: (route: string, params?: any) => void;
};

class PokemonCard extends PureComponent<Props> {
  imageUrl = (id: number) => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  render () {
    const { name, index, navigate } = this.props;

    return (
      <Card onPress={() => navigate('PokeDetails')}>
        <ImageContainer>
          <Image source={{ uri: this.imageUrl(index + 1) }} />
        </ImageContainer>
        <Name>{capitalize(name)}</Name>
        <ArrowIcon />
      </Card>
    );
  }
}

export default PokemonCard;
