import { useQuery } from '@tanstack/react-query';
import { getLastCreatedGif } from '../../../../api/gifUserRequests';
import { GifCard } from '../../GifCard/GifCard';
import './LastUploads.scss';

export const LastUploads = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['lastUploads'],
    queryFn: () => getLastCreatedGif(),
  });

  return (
    <div className="last-uploads">
      <h2>Newest</h2>
      <div className="last-uploads__gif-container">
        {error && <h2>{error.message}</h2>}
        {!isLoading &&
          data?.data.lastGifs.map(({ url, title, tags, _id }) => (
            <GifCard key={_id} url={url} title={title} tags={tags} />
          ))}
      </div>
    </div>
  );
};
