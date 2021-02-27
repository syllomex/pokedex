import { useNavigation } from '@react-navigation/native';
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

const Landing: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <LogoContainer>
        <LogoTitle />
        <LogoImage />
      </LogoContainer>

      <BottomContainer>
        <Description>Pra não chamar de Pokédex!</Description>
        <Button onPress={() => navigate('PokeList')}>Entrar</Button>
      </BottomContainer>
    </Container>
  );
};

export default Landing;
