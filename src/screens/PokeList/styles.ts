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

export const EmptyMessage = styled.Text`
  font-family: 'Righteous';
  text-align: center;

  margin: 32px 0;
`;
