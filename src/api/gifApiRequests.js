import axios from 'axios';

const API_URL = import.meta.env.VITE_APP_GIFS_API_URL;
const API_KEY = import.meta.env.VITE_APP_GIFS_API_KEY;

export const getTrendingGifs = async () => {
  return await axios.get(
    `${API_URL}/gifs/trending?api_key=${API_KEY}&limit=25&rating=g`
  );
};

export const getRandomGif = async () => {
  return await axios.get(`${API_URL}/gifs/random?api_key=${API_KEY}&rating=g`);
};
