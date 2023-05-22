import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { UserProvider } from './context/UserProvider';

function App() {
  return (
    <>
      <UserProvider>
        <RouterProvider
          router={router}
          fallbackElement={<div>Is Loading...</div>}
        />
      </UserProvider>
    </>
  );
}

export default App;
