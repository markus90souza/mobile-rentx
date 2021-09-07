import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: ${RFValue(92)}px;
  height: ${RFValue(92)}px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.Colors.BgPrimary};
  padding: ${RFValue(12)}px;
  margin-bottom: ${RFValue(16)}px;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.Fonts.FontPrimary500};
  color: ${({ theme }) => theme.Colors.TextPrimary};
  font-size: ${RFValue(14)}px;
  margin-top: ${RFValue(8)}px; ;
`;
