<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	const { data: agentsData } = data;
	let random = 0;
	function handleClick() {
		random = Math.floor(Math.random() * agentsData.length);
		const agent = agentsData[random];
		return agent;
	}
</script>

<svelte:head>
	<title>Valorant Randomizer</title>
	<meta name="description" content="randomize valorant agents and weapons" />
</svelte:head>
<main>
	<section class="flex flex-row gap-20">
		<div class="flex flex-col" id="left-side">
			<h1 class="text-[#EAEAEA] font-Poppins tracking-wide text-3xl">Agent Preview</h1>
			<div class="flex flex-col justify-center gap-3 mt-5">
				<img
					src={agentsData[random].displayIcon}
					alt="agent preview"
					class="w-60 h-60 border-2 border-gray-800"
				/>
				<div class="flex flex-row justify-between items-center">
					<p class="text-white text-2xl tracking-wide">{agentsData[random].displayName}</p>
					<div class="flex flex-row gap-1.5 items-center">
						<img
							src={agentsData[random].role.displayIcon}
							alt="abilities logo"
							class="w-4 h-4 text-[#B7C4CF]"
						/>
						<p class="text-[#B7C4CF] text-sm tracking-wide">
							{agentsData[random].role.displayName}
						</p>
					</div>
				</div>
				<button
					on:click|preventDefault={handleClick}
					class="text-white rounded-md bg-button-blue hover:bg-button-blue/80 transition-all duration-200 p-4 text-center"
					>Randomize</button
				>
			</div>
		</div>
		<div id="right-side">
			<p class="text-white">right-side</p>
		</div>
	</section>
</main>
