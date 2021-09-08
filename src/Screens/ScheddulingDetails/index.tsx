import React from 'react';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';

//####### COMPONENTS SCREEN #######//
import { Accessory } from '../../Components/Accessory';
import { BackButton } from '../../Components/BackButton';
import { ImageSlider } from '../../Components/ImageSlider';
import { Button } from '../../Components/Button';
//####### END COMPONENTS SCREEN #######//

//####### STYLES SCREEN #######//
import {
  Container,
  Header,
  CarImageBox,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  Accessories,
  RentalPeriod,
  CalendarIconBox,
  DateBox,
  DateTitle,
  DateValue,
  RentalPriceBox,
  RentalTitle,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,
  Footer,
} from './styles';
//####### END STYLES SCREEN #######//

//####### ICONS SCREEN #######//
import IconSpeed from '../../assets/speed.svg';
import IconForce from '../../assets/force.svg';
import IconExchange from '../../assets/exchange.svg';
import IconAcceleration from '../../assets/acceleration.svg';
import IconGasoline from '../../assets/gasoline.svg';
import IconPeople from '../../assets/people.svg';

//####### END ICONS SCREEN #######//

type Props = {};

const ScheddulingDetails = ({}: Props) => {
  const theme = useTheme();

  return (
    <Container>
      <Header>
        <BackButton />
      </Header>

      <CarImageBox>
        <ImageSlider
          imagesUrl={[
            'https://img2.gratispng.com/20180506/pxq/kisspng-chevrolet-onix-car-chevrolet-chevy-ii-nova-chevr-5aef19753ec560.3213910915256190612571.jpg',
          ]}
        />
      </CarImageBox>

      <Content>
        <Details>
          <Description>
            <Brand>GMC</Brand>
            <Name>ONIX</Name>
          </Description>

          <Rent>
            <Period>AO DIA</Period>
            <Price>{`R$:`}500,00</Price>
          </Rent>
        </Details>

        <Accessories>
          <Accessory name={'380 KM/H'} icon={IconSpeed} />
          <Accessory name={'3.2 S'} icon={IconAcceleration} />
          <Accessory name={'880 HP'} icon={IconForce} />
          <Accessory name={'Gasolina'} icon={IconGasoline} />
          <Accessory name={'Auto'} icon={IconExchange} />
          <Accessory name={'2 Pessoas'} icon={IconPeople} />
        </Accessories>

        <RentalPeriod>
          <CalendarIconBox>
            <Feather
              name={'calendar'}
              size={RFValue(24)}
              color={theme.Colors.Shape}
            />
          </CalendarIconBox>

          <DateBox>
            <DateTitle>De</DateTitle>
            <DateValue>07/07/2021</DateValue>
          </DateBox>

          <Feather
            name={'chevron-right'}
            size={RFValue(24)}
            color={theme.Colors.Shape}
          />

          <DateBox>
            <DateTitle>Ate</DateTitle>
            <DateValue>21/07/2021</DateValue>
          </DateBox>
        </RentalPeriod>

        <RentalPriceBox>
          <RentalTitle>Total</RentalTitle>

          <RentalPriceDetails>
            <RentalPriceQuota>R$: 500,00 x 3 Diárias</RentalPriceQuota>
            <RentalPriceTotal>R$: 1.500,00</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPriceBox>
      </Content>

      <Footer>
        <Button color={theme.Colors.Success} title="Confirmar" />
      </Footer>
    </Container>
  );
};

export { ScheddulingDetails };
