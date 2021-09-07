import React from 'react';
import { Container, DotsBox, Dots, CarImageWrapper, CarImage } from './styles';

interface ImageSliderProps {
  imagesUrl: string[];
}

function ImageSlider({ imagesUrl }: ImageSliderProps) {
  return (
    <Container>
      <DotsBox>
        <Dots active={true} />
        <Dots active={false} />
        <Dots active={false} />
      </DotsBox>

      <CarImageWrapper>
        <CarImage resizeMode={'contain'} source={{ uri: imagesUrl[0] }} />
      </CarImageWrapper>
    </Container>
  );
}

export { ImageSlider };
