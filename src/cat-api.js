export { fetchCats, url };

const url = 'https://api.thecatapi.com/v1/breeds';

const fetchCats = () => {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
