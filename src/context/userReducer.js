import { types } from './types/types';

export const userReducer = (state, action) => {
  switch (action.type) {
    case types.auth:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
