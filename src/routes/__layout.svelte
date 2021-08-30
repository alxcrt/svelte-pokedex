<script>
	import '../app.postcss';
	import Nav from '../components/Nav.svelte';
</script>

<svelte:head>
	<title>Pokedex</title>
</svelte:head>

<div class="p-8 max-w-7xl mx-auto">
	<Nav />

	<slot />
</div>
