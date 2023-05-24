import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getGifsByQuery } from '../../../../api/gifUserRequests';
import { GifCard } from '../../GifCard/GifCard';
import './SearchResults.scss';

const SearchResults = () => {
  const { query } = useParams();
  const { isLoading, error, data } = useQuery({
    queryKey: [query],
    queryFn: () => getGifsByQuery(query),
  });
  return (
    <div className="search-results">
      {error && <h2>{error.message}</h2>}
      {!isLoading && data?.data.searchResults.length > 0 ? (
        data.data.searchResults.map(({ url, title, tags, _id }) => (
          <GifCard key={_id} url={url} title={title} tags={tags} />
        ))
      ) : (
        <div className="search-results__not-find">
          <h4>Could not find "{query}"</h4>
          <p>Re-search with a different keyword or otherwise typed</p>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
