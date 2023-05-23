import { Outlet } from 'react-router-dom';
import { HeaderMain } from '../../components/MainPage/HeaderMain/HeaderMain';
import { SearchNav } from '../../components/MainPage/SearchNav/SearchNav';
import './MainLayout.scss';
import { useState } from 'react';
import { ModalHeader } from '../../components/MainPage/ModalHeader/ModalHeader';

const MainLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="main-layout">
      <HeaderMain setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
      <ModalHeader isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <SearchNav />
      <Outlet />
    </div>
  );
};

export default MainLayout;
