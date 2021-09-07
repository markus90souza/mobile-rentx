import React from 'react';
import { Car } from '../../Components/Cards/Car';
import { Header } from '../../Components/Header';

import { CarList, Container } from './styles';

const Home = () => {
  const carData = {
    brand: 'Audi',
    name: 'RX 8',
    rent: {
      period: 'Ao Dia',
      price: 120,
    },
    thumbnail:
      'https://img2.gratispng.com/20180506/pxq/kisspng-chevrolet-onix-car-chevrolet-chevy-ii-nova-chevr-5aef19753ec560.3213910915256190612571.jpg',
  };
  return (
    <Container>
      <Header />

      <CarList
        data={[1, 2, 3, 4]}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => <Car data={carData} />}
      />
    </Container>
  );
};

export { Home };
