import styled, { css } from 'styled-components/native';
import {
  getStatusBarHeight,
  getBottomSpace,
} from 'react-native-iphone-x-helper';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

const bar = getStatusBarHeight();

type DateValueProps = {
  selected: boolean;
};

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.Colors.BgSecondary};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(40)}px;
  background-color: ${({ theme }) => theme.Colors.Header};
  justify-content: center;
  padding: ${RFValue(24)}px;
  padding-top: ${bar + 30}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.Fonts.FontSecondary600};
  color: ${({ theme }) => theme.Colors.Shape};
  font-size: ${RFValue(34)}px;
  margin-top: 24px;
`;

export const RentalPeriod = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 32px 0;
`;

export const DateInfo = styled.View`
  width: 40%;
`;

export const DateTitle = styled.Text`
  font-family: ${({ theme }) => theme.Fonts.FontPrimary500};
  color: ${({ theme }) => theme.Colors.TextPrimary};
  font-size: ${RFValue(12)}px;
  margin-bottom: 24px;
`;

export const DateValue = styled.View<DateValueProps>`
  font-family: ${({ theme }) => theme.Fonts.FontPrimary500};
  color: ${({ theme }) => theme.Colors.Shape};
  font-size: ${RFValue(18)}px;

  ${({ selected, theme }) =>
    !selected &&
    css`
      border-bottom-width: 1px;
      border-bottom-color: ${theme.Colors.TextPrimary};
      padding-bottom: 5px;
    `}
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {},
  showsVerticalScrollIndicator: false,
})`
  width: 100%;
`;
export const Footer = styled.View`
  width: 100%;
  padding: 24px 20px ${getBottomSpace() + RFValue(20)}px;
`;
