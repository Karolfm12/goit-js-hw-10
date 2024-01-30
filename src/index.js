import axios from 'axios';
import { fetchCats } from './cat-api';
const select = document.querySelector('.breed-select');
const info = document.querySelector('.cat-info');

select.addEventListener('click', e => {
  e.preventDefault();
  const selectedBreed = e.target.value;
  fetchCats()
    .then(cats => renderCats(cats))
    .catch(error => console.log(error));
});

function renderCats(cats) {
  const optionsMarkup = cats
    .map((cat, i) => {
      return `<option>${i + ' ' + cat.name}</option>`;
    })
    .join('');
  select.insertAdjacentHTML('beforeend', optionsMarkup);
  const catInfo = cats
    .map(cat => {
      return `<a href="${cat.cfa_url}"><img src=""></a>`;
    })
    .join('');
  info.insertAdjacentHTML('afterbegin', catInfo);
  // info.innerHTML = catInfo;
}
axios.defaults.headers.common['x-api-key'] =
  'live_nMDJKc8zVDAlgSqaHkKd04wrQCeOb5cJYxoNKNEjzHvnsHOOTEg79WBJLZrdfHv2';
