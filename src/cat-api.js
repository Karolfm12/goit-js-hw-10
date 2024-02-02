export { fetchCats, fetchCatsByID, url };
import axios from 'axios';

const url = 'https://api.thecatapi.com/v1/breeds';

axios.defaults.headers.common['x-api-key'] =
  'live_nMDJKc8zVDAlgSqaHkKd04wrQCeOb5cJYxoNKNEjzHvnsHOOTEg79WBJLZrdfHv2';

const fetchCats = () => {
  return axios
    .get(url)
    .then(response => response.data)
    .catch(error => console.log(error));
};

const fetchCatsByID = id => {
  return axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${id}`)
    .then(response => response.data)
    .catch(error => console.log(error));
};
