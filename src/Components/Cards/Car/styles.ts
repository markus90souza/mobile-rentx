import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
export const Container = styled.View`
  width: 100%;
  height: ${RFValue(126)}px;
  background-color: ${({ theme }) => theme.Colors.BgSecondary};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${RFValue(24)}px;
  margin-bottom: ${RFValue(16)}px;
`;

export const Details = styled.View``;

export const BrandName = styled.Text`
  font-family: ${({ theme }) => theme.Fonts.FontSecondary500};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.Colors.TextSecondary};
  text-transform: uppercase;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.Fonts.FontSecondary500};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.Colors.TextPrimary};
`;

export const About = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${RFValue(16)}px;
`;

export const Rent = styled.View`
  margin-right: ${RFValue(24)}px; ;
`;

export const Period = styled.Text`
  font-family: ${({ theme }) => theme.Fonts.FontSecondary500};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.Colors.TextSecondary};
  text-transform: uppercase;
`;

export const Price = styled.Text`
  font-family: ${({ theme }) => theme.Fonts.FontSecondary500};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.Colors.MainPrimary};
`;

export const Type = styled.View``;

export const CarImage = styled.Image`
  width: ${RFValue(167)}px;
  height: ${RFValue(92)}px;
`;
