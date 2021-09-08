import React from 'react';

import { Container, Title } from './styles';

type Props = {
  title: string;
  color?: string;
  //onPress: () => void;
};

function Button({ title, color, ...rest }: Props) {
  return (
    <Container color={color} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}

export { Button };
