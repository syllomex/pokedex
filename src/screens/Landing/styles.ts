import styled from 'styled-components/native';
import colors from '../../assets/colors';

import pokedex from '../../assets/images/pokedex.png';
import logo from '../../assets/images/logo.png';

export const Container = styled.View`
  background-color: ${colors.background};
  flex: 1;

  padding: 5%;
`;

export const LogoContainer = styled.View`
  flex: 1;

  margin-top: 10%;
`;

export const LogoTitle = styled.Image.attrs({ source: logo, resizeMode: 'contain' })`
  width: 75%;
  height: 75%;
  z-index: 2;
`;

export const LogoImage = styled.Image.attrs({ source: pokedex, resizeMode: 'contain' })`
  width: 300px;
  height: 300px;

  position: absolute;
  top: 25%;
  right: 0;

  opacity: 0.4;
`;

export const BottomContainer = styled.View`
  flex: 1;

  padding-top: 10%;

  justify-content: space-between;
`;

export const Description = styled.Text`
  margin-top: 24px;
  font-size: 12px;
  font-family: 'Righteous';
  text-align: right;
`;
