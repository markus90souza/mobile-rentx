import React from 'react';

import { Container, Brand, Total, HeaderBox } from './styles';

interface HeaderProps {}

function Header() {
  return (
    <Container>
      <HeaderBox>
        <Brand />
        <Total>Total de 12 Carros</Total>
      </HeaderBox>
    </Container>
  );
}

export { Header };
