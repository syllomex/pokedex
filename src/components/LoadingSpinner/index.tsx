import React from 'react';

import colors from '../../assets/colors';

import { Container, Indicator } from './styles';

const LoadingSpinner: React.FC = () => (
  <Container>
    <Indicator size="large" color={colors.red} />
  </Container>
);

export default LoadingSpinner;
