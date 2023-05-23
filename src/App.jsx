import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { UserProvider } from './context/UserProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <UserProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider
            router={router}
            fallbackElement={<div>Is Loading...</div>}
          />
        </QueryClientProvider>
      </UserProvider>
    </>
  );
}

export default App;
