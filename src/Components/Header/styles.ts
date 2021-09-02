import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import Logo from './../../assets/logo.svg';

export const Container = styled.View`
  width: 100%;
  height: 114px;
  background-color: ${({ theme }) => theme.Colors.Header};

  justify-content: flex-end;
  padding: ${RFValue(20)}px ${RFValue(32)}px;
`;

export const HeaderBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Brand = styled(Logo)`
  width: ${RFValue(108)}px;
  height: ${RFValue(12)}px;
`;

export const Total = styled.Text`
  color: ${({ theme }) => theme.Colors.TextPrimary};
  font-family: ${({ theme }) => theme.Fonts.FontPrimary400};
  font-size: ${RFValue(14)}px;
`;
