import { useRef } from 'react';

export const useCarousel = () => {
  const carousel = useRef(null);

  const prevCard = () => {
    carousel.current.scrollBy(-292, 0);
  };

  const nextCard = () => {
    carousel.current.scrollBy(292, 0);
  };
  return { carousel, prevCard, nextCard };
};
