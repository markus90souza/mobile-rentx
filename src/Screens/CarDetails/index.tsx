import React from 'react';

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
  About,
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

const CarDetails = ({}: Props) => {
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
            <Price>${`R$:`}500,00</Price>
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

        <About>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
          nam tempora ut, fuga praesentium obcaecati adipisci? Hic sapiente quo
          ea qui labore? Sunt voluptate harum, maiores expedita ducimus natus
          quam.
        </About>
      </Content>

      <Footer>
        <Button title="Alugar" />
      </Footer>
    </Container>
  );
};

export { CarDetails };
