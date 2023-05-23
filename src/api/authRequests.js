import axios from 'axios';

const API_URL = import.meta.env.VITE_APP_API_URL;

export const registerRequest = async (userData) => {
  return await axios
    .post(`${API_URL}/user/register`, userData)
    .catch((res) => res.response.data.msg);
};

export const loginRequest = async (userData) => {
  return await axios
    .post(`${API_URL}/user/login`, userData)
    .catch((res) => res.response.data.msg);
};

export const checkIsLogged = async (token) => {
  return await axios
    .get(`${API_URL}/user/isLogged`, { headers: { 'x-token': token } })
    .catch((res) => res.response.data.msg);
};
