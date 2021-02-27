import React, { PureComponent } from 'react';

import { PokemonListResult } from '../../interfaces/api';
import capitalize from '../../utils/capitalize';

import {
  Card, ArrowIcon, Image, ImageContainer, Name,
} from './styles';

type Props = PokemonListResult & { index: number };

class PokemonCard extends PureComponent<Props> {
  imageUrl = (id: number) => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  render () {
    const { name, index } = this.props;

    return (
      <Card>
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
