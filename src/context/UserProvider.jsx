import { useEffect, useReducer } from 'react';
import { UserContext } from './UserContext';
import { userReducer } from './userReducer';
import { types } from './types/types';
import { checkIsLogged } from '../api/authRequests';
import { useNavigate } from 'react-router-dom';

const initialState = {
  username: null,
  gifs: null,
};

export const UserProvider = ({ children }) => {
  const [userState, dispatch] = useReducer(userReducer, initialState);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      (async () => {
        const res = await checkIsLogged(token);
        if (res.data?.ok) {
          dispatch({ type: types.auth, payload: res.data.username });
        }
      })();
    }
  }, []);

  const authUser = (user) => {
    const { token, username } = user;
    localStorage.setItem('token', token);
    dispatch({ type: types.auth, payload: username });
  };
  return (
    <UserContext.Provider value={{ userState, authUser }}>
      {children}
    </UserContext.Provider>
  );
};
