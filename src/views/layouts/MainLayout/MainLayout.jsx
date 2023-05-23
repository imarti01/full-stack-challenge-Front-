import { Outlet } from 'react-router-dom';
import { HeaderMain } from '../../components/MainPage/HeaderMain/HeaderMain';
import { SearchNav } from '../../components/MainPage/SearchNav/SearchNav';

const MainLayout = () => {
  return (
    <>
      <HeaderMain />
      <SearchNav />
      <Outlet />
    </>
  );
};

export default MainLayout;
