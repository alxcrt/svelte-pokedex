<script>
	import { pokemons } from '../stores/pokestore';
	import PokemonCard from '../components/PokemonCard.svelte';

	let searchTerm = '';
	let filteredPokemon = [];

	$: {
		if (searchTerm != '') {
			filteredPokemon = $pokemons.filter((pokemon) =>
				pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
			);
		} else {
			filteredPokemon = [...$pokemons];
		}
	}
</script>

<main>
	<h1 class="text-4xl text-center my-8">Pokedex</h1>

	<input
		type="text"
		class="w-full rounded-md text-lg my-8 p-4 border-2"
		placeholder="Search Pokemon"
		bind:value={searchTerm}
	/>

	<div class="grid grid-cols-1 md:grid-cols-2 py-4 gap-4">
		{#each filteredPokemon as pokemon}
			<PokemonCard {pokemon} />
		{/each}
	</div>
</main>

<style>
</style>
