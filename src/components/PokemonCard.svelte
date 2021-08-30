<script>
	export let pokemon;
</script>

<a
	href={`/pokemon/${pokemon.id}`}
	class="p-6 flex items-center flex-col shadow-sm rounded-xl bg-gray-100 hover:shadow-md"
>
	<h2 class="text-2xl">{pokemon.name}</h2>
	<img src={pokemon.image} alt={pokemon.name} />
</a>
