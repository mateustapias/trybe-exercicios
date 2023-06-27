const heroImage = document.querySelector('#image');
const name = document.querySelector('#name');
const button = document.querySelector('button');

const MAX_HEROES = 1000;
const BASE_URL = 'https://akabab.github.io/superhero-api/api'
const randomId = () => Math.floor(Math.random() * MAX_HEROES);

button.addEventListener('click', (event) => {
  event.preventDefault();
  const id = randomId();
  fetch(`${BASE_URL}/id/${id}.json`)
    .then(result => result.json())
    .then(data => {
      heroImage.src = data.images.md;
      name.innerHTML = `${id} ${data.name}`;
    })
    .catch(() => window.alert(`ID inválido!`));
})