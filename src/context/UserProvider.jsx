import { useReducer } from 'react';
import { UserContext } from './UserContext';
import { userReducer } from './userReducer';

const initialState = {
  user: null,
  gifs: null,
};

export const UserProvider = ({ children }) => {
  const [userState, dispatch] = useReducer(userReducer, initialState);
  return (
    <UserContext.Provider value={{ userState }}>
      {children}
    </UserContext.Provider>
  );
};
