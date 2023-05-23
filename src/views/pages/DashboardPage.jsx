import { useEffect, useState } from 'react';
import { AddNav } from '../components/DashboardPage/AddNav/AddNav';
import { useQuery } from '@tanstack/react-query';
import { getAllUserGifs } from '../../api/gifUserRequests';
import { ContainerOwnGifs } from '../components/DashboardPage/ContainerOwnGifs/ContainerOwnGifs';
import { ContainerNoGifs } from '../components/DashboardPage/ContainerNoGifs/ContainerNoGifs';

const DashboardPage = () => {
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ['userGifs'],
    queryFn: () => getAllUserGifs(),
  });

  return (
    <div>
      <AddNav showAdd={data?.data.userGifs.length > 0 ? true : false} />
      {error && <h2>{error.message}</h2>}
      {!isLoading && data?.data.userGifs.length > 0 ? (
        <ContainerOwnGifs gifs={data.data.userGifs} />
      ) : (
        <ContainerNoGifs />
      )}
    </div>
  );
};

export default DashboardPage;
