import React from 'react';

import { Container } from './styles';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { BorderlessButtonProps } from 'react-native-gesture-handler';

interface Props extends BorderlessButtonProps {
  color?: string;
}

const BackButton = ({ color, ...rest }: Props) => {
  const theme = useTheme();
  return (
    <Container {...rest}>
      <MaterialCommunityIcons
        name="chevron-left"
        size={24}
        color={color ? color : theme.Colors.TextPrimary}
      />
    </Container>
  );
};

export { BackButton };
