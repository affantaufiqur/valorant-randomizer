<script lang="ts">
	import type { PageData } from './$types';
	import Title from '../components/Title.svelte';

	type Role = {
		[key: string]: string[];
	};

	export let data: PageData;
	const { data: agentsData } = data;
	const filterArray: PageData['data'] = [];

	$: filterArray;
	$: random = 0;

	const groupByRole = agentsData.reduce<Role>(function (role, agent) {
		role[agent.role.displayName] = role[agent.role.displayName] || [];
		role[agent.role.displayName].push(agent.displayName);

		return role;
	}, {});

	console.log(groupByRole);

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
			<Title titleText="Agent preview" />
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
			<Title titleText="Filter" />
			<div class="mt-8" />
			<p class="text-sm text-gray-400">Currently selected:</p>
			<div class="mt-3">
				<div class="flex flex-row gap-4">
					<button
						class="text-white bg-button-blue hover:bg-button-blue/80 transition-all duration-200 tracking-wide px-4 py-2 rounded-md text-center"
					>
						All selected
					</button>
					<button
						class="text-white border-2 hover:text-gray-400 hover:border-gray-400 transition-all duration-200 border-dashed px-2 py-1 rounded-md text-center"
					>
						clear all selection
					</button>
				</div>
				<div class="flex flex-col gap-3 mt-4" />
				<div>
					{#each Object.entries(groupByRole) as [role, agent]}
						<p class="text-white">{role}, {agent}</p>
					{/each}
				</div>
			</div>
		</div>
	</section>
</main>
