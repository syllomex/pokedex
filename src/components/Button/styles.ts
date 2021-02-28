import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import colors from '../../assets/colors';

export const Container = styled.View`
  width: 100%;

  padding: 4px;

  justify-content: center;
  align-items: center;

  background-color: ${colors.blue};
`;

export const InnerContainer = styled(RectButton)`
  width: 100%;

  background-color: ${colors.yellow};

  justify-content: center;
  align-items: center;

  padding: 4px;
`;

export const Text = styled.Text`
  font-family: 'Righteous';
  font-size: 24px;
  padding: 8px;
  color: ${colors.background};
`;
