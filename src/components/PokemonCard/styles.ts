import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

import colors from '../../assets/colors';

import arrowForward from '../../assets/icons/arrow-forward.png';

export const Card = styled(RectButton)`
  border-radius: 8px;
  background-color: ${colors.gray};

  padding: 16px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 8px;
`;

export const ImageContainer = styled.View`
  width: 48px;
  height: 48px;
  border-radius: 8px;

  background-color: ${colors.background};
`;

export const Image = styled.Image`
  width: 48px;
  height: 48px;
`;

export const Name = styled.Text`
  font-family: 'Righteous';
  font-size: 16px;
`;

export const ArrowIcon = styled.Image.attrs({ source: arrowForward })`
  width: 24px;
  height: 24px;
`;
