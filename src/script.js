const catPlaceholder = document.querySelector('.catPlaceholder');
const dogPlaceholder = document.querySelector('.dogPlaceholder');
const buttonCat = document.querySelector('.catPlaceholder button');
const buttonDog = document.querySelector('.dogPlaceholder button');

async function getCat() {
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const json = await response.json();
    const img = document.createElement('img');
    img.src = json[0].url
    catPlaceholder.querySelector('.placeholderImg').innerText = '';
    catPlaceholder.querySelector('.placeholderImg').appendChild(img);
    catPlaceholder.querySelector('.placeholderImg').classList.add('achado');
}

async function getDog() {
    const response = await fetch('https://api.thedogapi.com/v1/images/search');
    const json = await response.json();
    const img = document.createElement('img');
    img.src = json[0].url
    dogPlaceholder.querySelector('.placeholderImg').innerText = '';
    dogPlaceholder.querySelector('.placeholderImg').appendChild(img);
    dogPlaceholder.querySelector('.placeholderImg').classList.add('achado');
}

buttonCat.addEventListener('click', getCat);
buttonDog.addEventListener('click', getDog)