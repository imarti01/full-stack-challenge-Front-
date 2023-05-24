import { useQuery } from '@tanstack/react-query';
import { getRandomGif } from '../../../../api/gifApiRequests';
import { GifCard } from '../../GifCard/GifCard';
import './RandomContainer.scss';

export const RandomContainer = () => {
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ['random'],
    queryFn: () => getRandomGif(),
  });

  return (
    <div className="random-container">
      <h2>Random</h2>
      <div className="random-container__gif-container">
        <button
          className="random-container__gif-container--button"
          onClick={() => refetch()}
        >
          GET A NEW GIF
        </button>
        {error && <h2>{error.message}</h2>}
        {!isLoading && (
          <GifCard
            key={data.data.data.id}
            url={data.data.data.images.original.url}
            title={data.data.data.title}
            tags={['random']}
            className="random-container__gif-container--card"
          />
        )}
      </div>
    </div>
  );
};
