import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import colors from '../../assets/colors';

import arrowDown from '../../assets/icons/arrow-down.png';

export const Container = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ArrowDown = styled.Image.attrs({ source: arrowDown })`
  width: 16px;
  height: 16px;

  margin: 4px 0;
`;

export const Evolution = styled(RectButton)`
  align-items: center;
  justify-content: center;

  width: 30%;

  padding: 8px 4px;
`;

export const EvolutionImg = styled.Image`
  width: 48px;
  height: 48px;
  background-color: ${colors.background};

  border-radius: 8px;
`;

export const EvolutionName = styled.Text`
  font-family: 'Righteous';
  text-align: center;
  color: ${colors.black};
  font-size: 14px;

  margin-top: 4px;
`;
