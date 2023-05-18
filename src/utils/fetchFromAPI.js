import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  url: BASE_URL,
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': 'f48e435c2fmsh091c1035b852217p194416jsn2edbf5e1b10c',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
