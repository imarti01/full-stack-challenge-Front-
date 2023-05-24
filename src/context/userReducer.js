import { types } from './types/types';

export const userReducer = (state, action) => {
  switch (action.type) {
    case types.auth:
      return { ...state, username: action.payload };
    case types.logout:
      return action.payload;
    case types.get_gifs:
      return { ...state, gifs: action.payload };
    case types.add_gif:
      return { ...state, gifs: action.payload };
    case types.edit_gif:
      return { ...state, gifs: action.payload };
    case types.delete_gif:
      return { ...state, gifs: action.payload };
    default:
      return state;
  }
};
