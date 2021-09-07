import React, { ReactNode } from 'react';

import { Text } from 'react-native';
import { SvgProps } from 'react-native-svg';

import { Container, Name } from './styles';

interface Props {
  name: string;
  icon: React.FC<SvgProps>;
}

const Accessory = ({ icon: Icon, name }: Props) => {
  return (
    <Container>
      <Icon height={24} width={24} />
      <Name>{name}</Name>
    </Container>
  );
};

export { Accessory };
