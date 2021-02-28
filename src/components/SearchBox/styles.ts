import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import colors from '../../assets/colors';

import cancel from '../../assets/icons/cancel.png';

export const Container = styled.View`
  padding-bottom: 16px;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: ${colors.gray};

  position: relative;
`;

export const Search = styled.TextInput`
  padding: 12px;
  border: 1px ${colors.gray};

  font-size: 16px;

  border-radius: 8px;

  margin: 0 5%;

  padding-right: 54px;
`;

export const CancelButton = styled.TouchableOpacity`
  position: absolute;
  right: 5%;
  top: 14px;
  margin-right: 16px;

  width: 24px;
  height: 24px;

  justify-content: center;
  align-items: center;
`;

export const CancelIcon = styled.Image.attrs({ source: cancel })`
  width: 16px;
  height: 16px;
`;
