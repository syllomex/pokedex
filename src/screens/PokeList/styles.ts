import styled from 'styled-components/native';
import colors from '../../assets/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};

  padding-top: 15%;
`;

export const Footer = styled.View`
  margin: 32px 0;
`;

export const Search = styled.TextInput`
  padding: 12px;
  border: 1px ${colors.gray};

  font-size: 16px;

  border-radius: 8px;

  margin-bottom: 16px;
`;

export const EmptyMessage = styled.Text`
  font-family: 'Righteous';
  text-align: center;

  margin: 32px 0;
`;
