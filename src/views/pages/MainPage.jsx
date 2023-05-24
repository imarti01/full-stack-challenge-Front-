import { LastUploads } from '../components/MainPage/LastUploads/LastUploads';
import { RandomContainer } from '../components/MainPage/RandomContainer/RandomContainer';
import { TrendingContainer } from '../components/MainPage/TrendingContainer/TrendingContainer';

const MainPage = () => {
  return (
    <div>
      <TrendingContainer />
      <RandomContainer />
      <LastUploads />
    </div>
  );
};

export default MainPage;
