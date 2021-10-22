import defaultExport from '../pokemon.js';
import { getPokedex, findById } from '../storage-utils.js';

const playButton = document.querySelector('.reset');
const resultsCanvas = document.querySelector('.results-canvas');
const results = getPokedex();
const pokemonArr = defaultExport;

for (let item of results) {
    const pokemon = findById(item.id, pokemonArr);

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

playButton.addEventListener('click', () => {
    localStorage.removeItem('RESULTS');
    window.location.replace('../index.html');
});

const names = results.map((item) => {
    const pokemon = findById(item.id, pokemonArr);
    return pokemon['pokemon'];
});

const captured = results.map((item) => {
    return item.timesCaught;
});

const encountered = results.map((item) => {
    return item.timesShown;
});

var ctx = document.getElementById('resultsChart').getContext('2d');
// eslint-disable-next-line no-undef
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: names,
        datasets: [
            {
                type: 'bar',
                label: 'Times Captured',
                data: captured,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
            {
                type: 'line',
                label: 'Times Encountered',
                data: encountered,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
});
