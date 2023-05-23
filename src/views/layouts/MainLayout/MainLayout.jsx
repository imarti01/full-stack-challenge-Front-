import { Outlet } from 'react-router-dom';
import { HeaderMain } from '../../components/MainPage/HeaderMain/HeaderMain';

const MainLayout = () => {
  return (
    <div>
      <HeaderMain />
      <Outlet />
    </div>
  );
};

export default MainLayout;
