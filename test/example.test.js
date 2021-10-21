// IMPORT MODULES under test here:
import { getPokedex, findById } from '../storage-utils.js';
import defaultExport from '../pokemon.js';

const pokemon = defaultExport;

// import { example } from '../example.js';

const test = QUnit.test;

test('findById should return the item from array with matching id', (expect) => {
    const expected = {
        _id: '5cef3501ef6005a77cd4fd17',
        pokemon: 'bulbasaur',
        id: 1,
        species_id: 1,
        height: 7,
        weight: 69,
        base_experience: 64,
        type_1: 'grass',
        type_2: 'poison',
        attack: 49,
        defense: 49,
        hp: 45,
        special_attack: 65,
        special_defense: 65,
        speed: 45,
        ability_1: 'overgrow',
        ability_2: 'NA',
        ability_hidden: 'chlorophyll',
        color_1: '#78C850',
        color_2: '#A040A0',
        color_f: '#81A763',
        egg_group_1: 'monster',
        egg_group_2: 'plant',
        url_image:
            'http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
        generation_id: 1,
        evolves_from_species_id: 'NA',
        evolution_chain_id: 1,
        shape_id: 8,
        shape: 'quadruped',
        pokebase: 'bulbasaur',
        pokedex: 'http://www.pokemon.com/us/pokedex/bulbasaur',
    };
    const actual = findById(1, pokemon);
    expect.deepEqual(actual, expected);
});

test('getResults should return the results array if it exists', (expect) => {
    //Arrange
    const fakeResults = [
        { shown: 1, caught: 2 },
        { shown: 2, caught: 4 },
    ];
    localStorage.setItem('RESULTS', JSON.stringify(fakeResults));

    //Act
    const results = getPokedex();

    //Expect
    expect.deepEqual(results, fakeResults);
});

test('getResults should return an empty array if no results array exists', (expect) => {
    //Arrange
    localStorage.removeItem('RESULTS');
    const fakeResults = [];

    //Act
    const results = getPokedex();

    //Expect
    expect.deepEqual(results, fakeResults);
});

// NEED TO WRITE PASSING TESTS FOR encounterPokemon and capturePokemon
