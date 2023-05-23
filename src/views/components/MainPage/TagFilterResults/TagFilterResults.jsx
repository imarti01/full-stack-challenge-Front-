import { useParams } from 'react-router-dom';

const TagFilterResults = () => {
  const { tag } = useParams();
  console.log(tag);
  return <div>TagFilterResults</div>;
};

export default TagFilterResults;
