import defaultExport from './pokemon.js';
import {
    getPokedex,
    encounterPokemon,
    capturePokemon,
} from './storage-utils.js';

const pokemonArr = defaultExport;
const pokemon1img = document.querySelector('.pokemon-1-img');
const pokemon2img = document.querySelector('.pokemon-2-img');
const pokemon3img = document.querySelector('.pokemon-3-img');
const buttonSubmit = document.querySelector('.submit');

let pokedex = getPokedex();
let totalPlays = 0;

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
    pokemon1img.src = pokemon1['url_image'];
    encounterPokemon(pokemon1.id);

    let pokemon2 = pokemonArr[randomNum2];
    pokemon2img.src = pokemon2['url_image'];
    encounterPokemon(pokemon2.id);

    let pokemon3 = pokemonArr[randomNum3];
    pokemon3img.src = pokemon3['url_image'];
    encounterPokemon(pokemon3.id);
}

buttonSubmit.addEventListener('click', () => {
    const selectedPokemon = document.querySelector('input:checked');
    console.log(selectedPokemon);

    totalPlays++;

    if (totalPlays >= 10) {
        window.location.replace('./results/index.html');
    } else {
        generatePokemon();
    }

    capturePokemon(selectedPokemon.id);
});

console.log(pokedex);
