import axios from 'axios';
import { fetchCats } from './cat-api';
const select = document.querySelector('.breed-select');
const info = document.querySelector('.cat-info');

select.addEventListener('click', e => {
  e.preventDefault();
  const selectedBreed = e.target.value;
  console.log(selectedBreed);
  fetchCats()
    .then(cats => renderCats(cats))
    .catch(error => console.log(error));
});

function renderCats(cats, selectedBreed) {
  const optionsMarkup = cats
    .map((cat, i) => {
      return `<option>${cat.name}</option>`;
    })
    .join('');
  select.insertAdjacentHTML('beforeend', optionsMarkup);

  const selectedCat = cats.find(cat => {
    if (cat.name === selectedBreed) {
      const catInfo = `<a href="${selectedCat.cfa_url}"><img src="${selectedCat.vetstreet_url}"></a>`;

      info.insertAdjacentHTML('afterbegin', catInfo);
    } else {
      info.innerHTML = '';
    }
  });
}
axios.defaults.headers.common['x-api-key'] =
  'live_nMDJKc8zVDAlgSqaHkKd04wrQCeOb5cJYxoNKNEjzHvnsHOOTEg79WBJLZrdfHv2';
