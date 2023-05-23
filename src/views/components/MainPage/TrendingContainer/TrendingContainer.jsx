import { useQuery } from '@tanstack/react-query';
import { getTrendingGifs } from '../../../../api/gifApiRequests';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import './TrendingContainer.scss';
import { useCarousel } from '../../../../hooks/useCarousel';
import { GifCard } from '../../GifCard/GifCard';

export const TrendingContainer = () => {
  const { carousel, prevCard, nextCard } = useCarousel();
  const { isLoading, error, data } = useQuery({
    queryKey: ['trending'],
    queryFn: () => getTrendingGifs(),
  });

  return (
    <div className="trending-container">
      <h2>Trending</h2>
      <div className="trending-container__gifs">
        <MdOutlineArrowBackIosNew
          onClick={prevCard}
          className="trending-container__gifs--arrow"
        />
        <div ref={carousel} className="trending-container__gifs--container">
          {error && <h2>{error.message}</h2>}
          {!isLoading &&
            data?.data.data.map(({ id, title, images }) => (
              <GifCard
                key={id}
                url={images.original.url}
                title={title}
                className="trending-container__gifs--container--card"
              />
            ))}
        </div>
        <MdOutlineArrowForwardIos
          onClick={nextCard}
          className="trending-container__gifs--arrow"
        />
      </div>
    </div>
  );
};
