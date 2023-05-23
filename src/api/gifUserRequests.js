import axios from 'axios';

const API_URL = import.meta.env.VITE_APP_API_URL;

export const addGifRequest = async (gifData) => {
  return await axios
    .post(`${API_URL}/gifs/addGif`, gifData, {
      headers: {
        'x-token': localStorage.getItem('token'),
      },
    })
    .catch((res) => res.response.data.msg);
};

export const getAllUserGifs = async () => {
  return await axios.get(`${API_URL}/gifs/getAllUserGifs`, {
    headers: {
      'x-token': localStorage.getItem('token'),
    },
  });
};
