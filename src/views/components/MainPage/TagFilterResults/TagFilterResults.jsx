import { useParams } from 'react-router-dom';
import { getGifsByTag } from '../../../../api/gifUserRequests';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { GifCard } from '../../GifCard/GifCard';

const TagFilterResults = () => {
  const { tag } = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: [tag],
    queryFn: () => getGifsByTag(tag),
  });

  return (
    <div>
      {error && <h2>{error.message}</h2>}
      {!isLoading &&
        data?.data.tagResults.map(({ url, title, tags, _id }) => (
          <GifCard key={_id} url={url} title={title} tags={tags} />
        ))}
    </div>
  );
};

export default TagFilterResults;
