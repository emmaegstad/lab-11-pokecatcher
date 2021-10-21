import defaultExport from './pokemon.js';
import { encounterPokemon, capturePokemon } from './storage-utils.js';

const pokemonArr = defaultExport;
const pokemon1radio = document.querySelector('.pokemon-1');
const pokemon1img = document.querySelector('.pokemon-1-img');
const pokemon2radio = document.querySelector('.pokemon-2');
const pokemon2img = document.querySelector('.pokemon-2-img');
const pokemon3radio = document.querySelector('.pokemon-3');
const pokemon3img = document.querySelector('.pokemon-3-img');
const buttonSubmit = document.querySelector('.submit');

function generatePokemon() {
    let randomNum1 = Math.floor(Math.random() * pokemonArr.length);
    let randomNum2 = Math.floor(Math.random() * pokemonArr.length);
    let randomNum3 = Math.floor(Math.random() * pokemonArr.length);

    while (
        randomNum1 === randomNum2 ||
        randomNum1 === randomNum3 ||
        randomNum2 === randomNum3
    ) {
        randomNum1 = Math.floor(Math.random() * pokemonArr.length);
        randomNum2 = Math.floor(Math.random() * pokemonArr.length);
        randomNum3 = Math.floor(Math.random() * pokemonArr.length);
    }

    let pokemon1 = pokemonArr[randomNum1];
    encounterPokemon(pokemon1.id);
    pokemon1radio.value = pokemon1.id;
    pokemon1img.src = pokemon1['url_image'];

    let pokemon2 = pokemonArr[randomNum2];
    encounterPokemon(pokemon2.id);
    pokemon2radio.value = pokemon2.id;
    pokemon2img.src = pokemon2['url_image'];

    let pokemon3 = pokemonArr[randomNum3];
    encounterPokemon(pokemon3.id);
    pokemon3radio.value = pokemon3.id;
    pokemon3img.src = pokemon3['url_image'];
}

let totalPlays = 0;
generatePokemon();

buttonSubmit.addEventListener('click', () => {
    const selectedPokemon = document.querySelector(
        'input[type="radio"]:checked'
    );
    const selectedId = Number(selectedPokemon.value);

    if (selectedPokemon) {
        capturePokemon(selectedId);
        if (totalPlays >= 3) {
            window.location.replace('./results/index.html');
        } else {
            generatePokemon();
        }
    } else {
        alert('Select a Pokemon.');
    }
});
