import React from 'react';

import {
  Container,
  About,
  BrandName,
  Details,
  Name,
  Period,
  Price,
  Rent,
  Type,
  CarImage,
} from './styles';

import Gasoline from './../../../assets/gasoline.svg';

interface CarData {
  brand: string;
  name: string;
  rent: {
    period: string;
    price: number;
  };
  thumbnail: string;
}

type Props = {
  data: CarData;
};

const Car = ({ data }: Props) => {
  return (
    <Container>
      <Details>
        <BrandName>{data.brand}</BrandName>
        <Name>{data.name}</Name>

        <About>
          <Rent>
            <Period>{data.rent.period}</Period>
            <Price>{data.rent.price}</Price>
          </Rent>

          <Type>
            <Gasoline />
          </Type>
        </About>
      </Details>

      <CarImage resizeMode={'contain'} source={{ uri: data.thumbnail }} />
    </Container>
  );
};

export { Car };
