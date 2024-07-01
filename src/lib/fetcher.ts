import axios from 'axios';

const fetcher = (url: string) => {
  console.log("fetcher called");
  return axios.get(url)
    .then(response => response.data)
    .catch(error => {
      // Handle error
      console.error(error);
      throw error; // Rethrow or handle as needed
    });
};

export default fetcher;