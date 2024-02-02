import { fetchCats, fetchCatsByID } from './cat-api';
const select = document.querySelector('.breed-select');
const catContainer = document.querySelector('.cat-info');

select.addEventListener('change', e => {
  e.preventDefault();
  const breedID = select.value;
  fetchCatsByID(breedID)
    .then(catData => {
      const imageURL = catData[0].url;
      let markup = `<img src=${imageURL}>`;
      const insert = catContainer.insertAdjacentHTML('afterbegin', markup);
      if (insert) {
        markup = `<img src="">`;
      } else {
        markup;
      }
    })
    .catch(error => console.log(error));
});

fetchCats()
  .then(cat => {
    cat.forEach(breed => {
      const option = document.createElement('option');
      option.value = breed.id;
      option.textContent = breed.name;
      select.appendChild(option);
    });
  })
  .catch(error => console.log(error));
