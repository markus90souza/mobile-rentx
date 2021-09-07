import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

type DotProps = {
  active: boolean;
};

export const Container = styled.View`
  width: 100%;
`;

export const DotsBox = styled.View`
  flex-direction: row;
  align-self: flex-end;
  padding-right: 24px;
`;

export const Dots = styled.View<DotProps>`
  width: ${RFValue(6)}px;
  height: ${RFValue(6)}px;
  background-color: ${({ theme, active }) =>
    active ? theme.Colors.TextSecondary : theme.Colors.Shape};

  border-radius: 3px;
  margin-left: 8px;
`;

export const CarImageWrapper = styled.View`
  width: ${width}px;
  height: ${RFValue(132)}px;
  justify-content: center;
  align-items: center;
`;

export const CarImage = styled.Image`
  width: ${RFValue(280)}px;
  height: ${RFValue(132)}px;
`;
