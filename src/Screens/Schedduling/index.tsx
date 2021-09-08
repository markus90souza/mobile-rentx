import React from 'react';
import { useTheme } from 'styled-components';

import { BackButton } from '../../Components/BackButton';

import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer,
} from './styles';

import ArrowSvg from './../../assets/arrow.svg';
import { StatusBar } from 'react-native';
import { Button } from '../../Components/Button';
import { Calendar } from '../../Components/Calendar';

type Props = {};

function Schedduling({}: Props) {
  const theme = useTheme();
  return (
    <Container>
      <Header>
        <StatusBar
          barStyle={'light-content'}
          translucent
          backgroundColor={'transparent'}
        />

        <BackButton color={theme.Colors.Shape} />
        <Title>
          Escolha uma {'\n'}
          Data de Inicio e {'\n'}
          Fim do Aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>De</DateTitle>
            <DateValue selected={false} />
          </DateInfo>

          <ArrowSvg width={44} />

          <DateInfo>
            <DateTitle>Ate</DateTitle>
            <DateValue selected={false} />
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar />
      </Content>

      <Footer>
        <Button title={'Confirmar'} />
      </Footer>
    </Container>
  );
}

export { Schedduling };
