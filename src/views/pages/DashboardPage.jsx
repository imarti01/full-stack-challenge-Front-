import { useContext, useEffect, useState } from 'react';
import { AddNav } from '../components/DashboardPage/AddNav/AddNav';
import { getAllUserGifs } from '../../api/gifUserRequests';
import { ContainerOwnGifs } from '../components/DashboardPage/ContainerOwnGifs/ContainerOwnGifs';
import { ContainerNoGifs } from '../components/DashboardPage/ContainerNoGifs/ContainerNoGifs';
import { UserContext } from '../../context/UserContext';
import './DashboardPage.scss';
const DashboardPage = () => {
  const { userState, getUserGifs } = useContext(UserContext);

  useEffect(() => {
    (async () => {
      if (userState.gifs.length === 0) {
        const res = await getAllUserGifs();
        if (res.data?.ok) {
          getUserGifs(res.data.userGifs);
        }
      }
    })();
  }, []);

  return (
    <div className="dashboard-page">
      <AddNav showAdd={userState?.gifs.length > 0 ? true : false} />
      {userState?.gifs.length > 0 ? (
        <ContainerOwnGifs gifs={userState.gifs} />
      ) : (
        <ContainerNoGifs />
      )}
    </div>
  );
};

export default DashboardPage;
