import React from 'react';

import { Container, InnerContainer, Text } from './styles';

type Props = {
  onPress?: () => void;
};

const Button: React.FC<Props> = ({ children, onPress }) => (
  <Container>
    <InnerContainer onPress={onPress}>
      <Text>{children}</Text>
    </InnerContainer>
  </Container>
);

export default Button;
