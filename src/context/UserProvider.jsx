import { useEffect, useReducer } from 'react';
import { UserContext } from './UserContext';
import { userReducer } from './userReducer';
import { types } from './types/types';
import { checkIsLogged } from '../api/authRequests';
import { useNavigate } from 'react-router-dom';

const initialState = {
  username: null,
  gifs: [],
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

  const logoutProvider = () => {
    dispatch({ type: types.logout, payload: initialState });
  };

  const getUserGifs = (gifs) => {
    dispatch({ type: types.get_gifs, payload: gifs });
  };

  const addGif = (gif) => {
    const newGifsArr = [...userState.gifs, gif];
    dispatch({ type: types.add_gif, payload: newGifsArr });
  };

  const editGif = (gifEdited) => {
    const newGifsArr = userState.gifs.map((gif) =>
      gif._id === gifEdited._id ? gifEdited : gif
    );
    dispatch({ type: types.edit_gif, payload: newGifsArr });
  };

  const deleteGifProvider = (gifId) => {
    const newGifsArr = userState.gifs.filter((gif) => gif._id !== gifId);
    dispatch({ type: types.delete_gif, payload: newGifsArr });
  };

  return (
    <UserContext.Provider
      value={{
        userState,
        authUser,
        getUserGifs,
        addGif,
        logoutProvider,
        editGif,
        deleteGifProvider,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
