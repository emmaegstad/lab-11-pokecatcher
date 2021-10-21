export function findById(id, array) {
    for (let item of array) {
        if (id === item.id) {
            return item;
        }
    }
}

export function getPokedex() {
    const resultString = localStorage.getItem('RESULTS') || '[]';
    const results = JSON.parse(resultString);
    return results;
}

export function setPokedex(arr) {
    const stringResults = JSON.stringify(arr);
    localStorage.setItem('RESULTS', stringResults);
}

export function encounterPokemon(id) {
    let results = getPokedex();
    let result = findById(id, results);

    if (result) {
        result.timesShown++;
    } else {
        const newResult = { id: id, timesShown: 1, timesCaught: 0 };
        results.push(newResult);
    }

    setPokedex(results);
}

export function capturePokemon(id) {
    let results = getPokedex();
    let result = findById(id, results);

    if (result) {
        result.timesCaught++;
    } else {
        const newResult = { id: id, timesShown: 1, timesCaught: 0 };
        results.push(newResult);
    }

    setPokedex(results);
}

// remove else statement from capturePokemon
