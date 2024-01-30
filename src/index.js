import axios from 'axios';

const select = document.querySelector('.breed-select');
const info = document.querySelector('.cat-info');
const url = 'https://api.thecatapi.com/v1/breeds';

select.addEventListener('click', e => {
  e.preventDefault();
  fetchCats()
    .then(cats => renderCats(cats))
    .catch(error => console.log(error));
});

const fetchCats = () => {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};

function renderCats(cats) {
  const markup = cats
    .map(cat => {
      return `<option>${cat.name}</option>`;
    })
    .join('');
  select.insertAdjacentHTML('beforeend', markup);
  const catInfo = cats.find(cat => {
    return `<a href="${cat.cfa_url}"><img></img></a>`;
  });
  info.insertAdjacentHTML('afterbegin', catInfo);
}

axios.defaults.headers.common[
  'live_nMDJKc8zVDAlgSqaHkKd04wrQCeOb5cJYxoNKNEjzHvnsHOOTEg79WBJLZrdfHv2'
] = 'твой ключ';
