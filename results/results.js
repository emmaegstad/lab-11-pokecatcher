import defaultExport from '../pokemon.js';
import { getPokedex, findById } from '../storage-utils.js';

const resultsCanvas = document.querySelector('.results-canvas');
const results = getPokedex();
const pokemonArr = defaultExport;

for (let item of results) {
    const pokemon = findById(item.id, pokemonArr);
    console.log(pokemon['pokemon']);

    const container = document.createElement('div');
    container.classList.add('container');

    const name = document.createElement('span');
    name.textContent = pokemon['pokemon'];

    const img = document.createElement('img');
    img.src = pokemon['url_image'];

    const encountered = document.createElement('span');
    encountered.textContent = `Encountered: ${item.timesShown}`;

    const captured = document.createElement('span');
    captured.textContent = `Captured: ${item.timesCaught}`;

    container.append(name, img, encountered, captured);
    resultsCanvas.append(container);
}
