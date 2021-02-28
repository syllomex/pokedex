import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import colors from '../../assets/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.background};
  
  padding-top: 48px;
`;

export const Footer = styled.View`
  margin: 32px 0;
`;

export const SearchContainer = styled.View`
  padding-bottom: 16px;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: ${colors.gray};
`;

export const Search = styled.TextInput`
  padding: 12px;
  border: 1px ${colors.gray};

  font-size: 16px;

  border-radius: 8px;

  margin: 0 5%;
`;

export const EmptyMessage = styled.Text`
  font-family: 'Righteous';
  text-align: center;

  margin: 32px 0;
`;
