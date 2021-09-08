import styled from 'styled-components/native';
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

const bar = getStatusBarHeight();

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.Colors.BgSecondary};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${bar + 18}px;
  margin-left: 24px;
  position: absolute;
`;

export const CarImageBox = styled.View`
  margin-top: ${bar + 32}px;
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 24,
    alignItems: 'center',
  },
  showsVerticalScrollIndicator: false,
})``;

export const Details = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${RFValue(32)}px;
`;

export const Description = styled.View``;

export const Brand = styled.Text`
  font-family: ${({ theme }) => theme.Fonts.FontSecondary500};
  color: ${({ theme }) => theme.Colors.TextSecondary};
  font-size: ${RFValue(12)}px;
  text-transform: uppercase;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.Fonts.FontSecondary500};
  color: ${({ theme }) => theme.Colors.TextPrimary};
  font-size: ${RFValue(24)}px;
`;

export const Rent = styled.View``;

export const Period = styled.Text`
  font-family: ${({ theme }) => theme.Fonts.FontSecondary500};
  color: ${({ theme }) => theme.Colors.TextSecondary};
  font-size: ${RFValue(12)}px;
  text-transform: uppercase;
`;

export const Price = styled.Text`
  font-family: ${({ theme }) => theme.Fonts.FontSecondary500};
  color: ${({ theme }) => theme.Colors.MainPrimary};
  font-size: ${RFValue(24)}px;
`;

export const RentalPeriod = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 32px;
  border-bottom-color: ${({ theme }) => theme.Colors.Line};
  border-bottom-width: 1px;
  padding-bottom: 16px;
`;

export const CalendarIconBox = styled.View`
  width: 48px;
  height: 48px;
  background-color: ${({ theme }) => theme.Colors.MainPrimary};
  justify-content: center;
  align-items: center;
`;
export const DateBox = styled.View``;

export const DateTitle = styled.Text`
  font-family: ${({ theme }) => theme.Fonts.FontSecondary500};
  color: ${({ theme }) => theme.Colors.TextSecondary};
  font-size: ${RFValue(12)}px;
  text-transform: uppercase;
`;

export const DateValue = styled.Text`
  font-family: ${({ theme }) => theme.Fonts.FontSecondary500};
  color: ${({ theme }) => theme.Colors.TextPrimary};
  font-size: ${RFValue(16)}px;
`;

export const RentalPriceBox = styled.View`
  width: 100%;
  margin-top: 16px;
`;

export const RentalTitle = styled.Text`
  font-family: ${({ theme }) => theme.Fonts.FontSecondary500};
  color: ${({ theme }) => theme.Colors.TextSecondary};
  font-size: ${RFValue(12)}px;
  text-transform: uppercase;
`;

export const RentalPriceDetails = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const RentalPriceQuota = styled.Text`
  font-family: ${({ theme }) => theme.Fonts.FontSecondary500};
  color: ${({ theme }) => theme.Colors.TextPrimary};
  font-size: ${RFValue(14)}px;
`;

export const RentalPriceTotal = styled.Text`
  font-family: ${({ theme }) => theme.Fonts.FontSecondary500};
  color: ${({ theme }) => theme.Colors.Success};
  font-size: ${RFValue(18)}px;
`;

export const Accessories = styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const Footer = styled.View`
  width: 100%;
  padding: 24px 20px ${getBottomSpace() + RFValue(20)}px;
`;
