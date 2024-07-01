import axios from 'axios';

const favFetcher = async (url: string) => {
  const response = await axios.get(url);
  console.log("response", response)
  return response.data;
};

export default favFetcher;