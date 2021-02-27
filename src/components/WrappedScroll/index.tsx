import React from 'react';

import { Container, ScrollView } from './styles';

const WrappedScroll: React.FC = ({ children }) => (
  <Container>
    <ScrollView contentContainerStyle={{ paddingHorizontal: '5%' }}>{children}</ScrollView>
  </Container>
);

export default WrappedScroll;
