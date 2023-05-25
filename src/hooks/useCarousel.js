import { useRef } from 'react';
import { useScreenWidth } from './useScreenWidth';

export const useCarousel = () => {
  const screenWidth = useScreenWidth();
  const carousel = useRef(null);

  const prevCard = () => {
    screenWidth < 576
      ? carousel.current.scrollBy(-240, 0)
      : carousel.current.scrollBy(-292, 0);
  };

  const nextCard = () => {
    screenWidth < 576
      ? carousel.current.scrollBy(240, 0)
      : carousel.current.scrollBy(292, 0);
  };
  return { carousel, prevCard, nextCard };
};
