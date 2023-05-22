import axios from 'axios';

const API_URL = import.meta.env.VITE_APP_API_URL;

export const registerRequest = async (userData) => {
  return await axios
    .post(`${API_URL}/user/register`, userData)
    .catch((res) => res.response.data.msg);
};
