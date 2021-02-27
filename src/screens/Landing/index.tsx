import React from 'react';
import Button from '../../components/Button';
import {
  Container,
  Description,
  BottomContainer,
  LogoContainer,
  LogoImage,
  LogoTitle,
} from './styles';

const Landing: React.FC = () => (
  <Container>
    <LogoContainer>
      <LogoTitle />
      <LogoImage />
    </LogoContainer>

    <BottomContainer>
      <Description>Pra não chamar de Pokédex!</Description>
      <Button>Entrar</Button>
    </BottomContainer>
  </Container>
);

export default Landing;
