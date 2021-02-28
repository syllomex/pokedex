import styled, { css } from 'styled-components/native';
import colors from '../../assets/colors';

const font = css`
  font-family: 'Righteous';
  text-align: center;
  color: ${colors.black};
`;

export const Container = styled.View`
  flex: 1;
`;

export const Name = styled.Text`
  ${font};
  font-size: 28px;

  margin-top: 15%;

  padding: 0 32px;
`;

export const Legendary = styled.Text`
  margin: 8px 0 4px;
`;

export const ImageContainer = styled.View`
  width: 96px;
  height: 96px;

  margin-top: 16px;
  border-radius: 8px;

  background-color: ${colors.background};
`;

export const Image = styled.Image`
  width: 96px;
  height: 96px;
`;

export const SubTitle = styled.Text`
  ${font};
  font-size: 16px;

  margin-top: 24px;
`;

export const TypesContainer = styled.View`
  margin-top: 16px;

  flex-direction: row;
  justify-content: center;

  flex-wrap: wrap;
  flex-shrink: 0;
`;

export const TypeContainer = styled.View`
  padding: 8px 12px;

  width: 45%;

  margin: 4px;
  border-radius: 4px;

  background-color: ${colors.background};

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const DummyView = styled.View``;

export const TypeText = styled.Text`
  ${font};
  font-size: 16px;
`;

export const TypeIcon = styled.Image.attrs({ resizeMode: 'contain' })`
  width: 16px;
  height: 16px;
`;

export const InfoContainer = styled.View`
  margin-top: 24px;

  flex-direction: row;
  justify-content: space-between;
`;

export const Block = styled.View`
  flex: 1;
`;

export const Label = styled.Text`
  ${font};
  font-size: 14px;
`;

export const ValueContainer = styled.View`
  padding: 4px 12px;
  background-color: ${colors.background};
`;

export const Value = styled.Text`
  ${font};
  font-size: 14px;

  padding: 4px 12px;
  border-radius: 4px;
  background-color: ${colors.background};

  margin: 4px;
`;
