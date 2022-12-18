<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	const { data: agentsData } = data;
	function handleClick() {
		const random = Math.floor(Math.random() * agentsData.length);
		const agent = agentsData[random];
		return alert(agent.displayName);
	}
</script>

<main>
	<h1>Welcome to SvelteKit</h1>
	<p class="text-4xl bg-red-300">
		Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
	</p>
	<button on:click|preventDefault={handleClick}>random</button>
</main>
