import { writable } from 'svelte/store';

export const pokemons = writable([]);

const fetchPokemons = async () => {
	const url = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
	const response = await fetch(url);
	const data = await response.json();
	const loadedPokemons = data.results.map((pokemon, index) => {
		return {
			name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
			id: index + 1,
			image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
				index + 1
			}.png`
		};
	});
	pokemons.set(loadedPokemons);
};

fetchPokemons();
