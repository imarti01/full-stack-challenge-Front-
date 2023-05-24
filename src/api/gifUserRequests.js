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
  return await axios
    .get(`${API_URL}/gifs/getAllUserGifs`, {
      headers: {
        'x-token': localStorage.getItem('token'),
      },
    })
    .catch((res) => res.response.data.msg);
};

export const editGifRequest = async (gifEdited) => {
  return await axios
    .post(`${API_URL}/gifs/editGif`, gifEdited, {
      headers: {
        'x-token': localStorage.getItem('token'),
      },
    })
    .catch((res) => res.response.data.msg);
};

export const deleteGifRequest = async (gifId) => {
  return await axios
    .delete(`${API_URL}/gifs/deleteGif/${gifId}`, {
      headers: {
        'x-token': localStorage.getItem('token'),
      },
    })
    .catch((res) => res.response.data.msg);
};

export const getGifsByTag = async (tag) => {
  return await axios
    .get(`${API_URL}/gifs/getByTag/${tag}`, {
      headers: {
        'x-token': localStorage.getItem('token'),
      },
    })
    .catch((res) => res.response.data.msg);
};
