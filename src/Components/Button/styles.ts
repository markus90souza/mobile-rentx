import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

interface ButtonProps extends RectButtonProps {
  color?: string;
}

export const Container = styled(RectButton)<ButtonProps>`
  width: 100%;
  padding: ${RFValue(18)}px;
  justify-content: center;
  align-items: center;
  background-color: ${({ color, theme }) =>
    color ? color : theme.Colors.MainPrimary};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.Fonts.FontPrimary500};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.Colors.Shape};
`;
