import React from 'react';
import { ScrollView } from 'react-native';
import types from '../../assets/types';

import {
  Block,
  Container,
  DummyView,
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

const PokeDetails: React.FC = () => (
  <Container style={{ backgroundColor: types.grass.colorTransparent }}>
    <ScrollView contentContainerStyle={{ paddingHorizontal: '5%', alignItems: 'center' }}>
      <Name>Bulbasaur</Name>
      <ImageContainer>
        <Image
          source={{
            uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
          }}
        />
      </ImageContainer>

      <SubTitle>Shiny</SubTitle>
      <ImageContainer>
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
          }}
        />
      </ImageContainer>

      <SubTitle>Tipo</SubTitle>

      <TypesContainer>
        <TypeContainer>
          <TypeIcon source={types.grass.icon} />
          <TypeText style={{ color: types.grass.color }}>Grass</TypeText>
          <DummyView />
        </TypeContainer>
        <TypeContainer>
          <TypeIcon source={types.poison.icon} />
          <TypeText style={{ color: types.poison.color }}>Poison</TypeText>
          <DummyView />
        </TypeContainer>
      </TypesContainer>

      <InfoContainer>
        <Block>
          <Label>Peso</Label>
          <Value>6,9 Kg</Value>
        </Block>
        <Block>
          <Label>Altura</Label>
          <Value>0,7 m</Value>
        </Block>
        <Block>
          <Label>Região</Label>
          <Value>Kanto</Value>
        </Block>
      </InfoContainer>
    </ScrollView>
  </Container>
);

export default PokeDetails;
