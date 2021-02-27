import React from 'react';

import {
  ButtonComponent, Container, InnerContainer, Text,
} from './styles';

type Props = {
  onPress?: () => void;
};

const Button: React.FC<Props> = ({ children, onPress }) => (
  <ButtonComponent onPress={onPress}>
    <Container>
      <InnerContainer>
        <Text>{children}</Text>
      </InnerContainer>
    </Container>
  </ButtonComponent>
);

export default Button;
